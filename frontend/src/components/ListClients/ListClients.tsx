import { useEffect, useRef, useState } from 'react';
import useStore from './../../store/index';
import Actions from './components/Actions/Actions';
import TemplateCard from '../../commons/ui/TemplateCard/TemplateCard';
import Filters from './components/Filters/Filters';
import Loader from '../../commons/ui/Loader/Loader';
import {
    ClientsSection,
    ListClientsContainer,
    ListClientsContent,
    EmptyStateSection,
    StyledContentModal,
} from './ListClients.style';
import IllustratedState from './../../commons/ui/IllustratedState/IllustratedState';
import { useDisclosure, useSteps, Tooltip } from '@chakra-ui/react';
import Modal from '../../commons/ui/Modal/Modal';
import CreateClientForm from '../Forms/Client/CreateClient/Forms';
import GenericStepper from '../../commons/ui/Stepper/Stepper';
import EditClientForm from '../Forms/Client/EditClient/EditClientForm';
import { Client } from '../../commons/types/Client';
import IconButton from '../../commons/ui/IconButton/IconButton';
import { AddIcon } from '@chakra-ui/icons';
import AlertDialog from '../../commons/ui/AlertDialog/AlertDialog';
import { checkoutClient, deleteClient } from './services/client.service';
import useCustomToast from '../../commons/hooks/useCustomToast/useCustomToast';
import CheckInBedroom from './components/CheckInBedroom/CheckInBedroom';
import useDevice from '../../commons/hooks/useDevice/useDevice';

const ListClients = () => {
    const { isPhone } = useDevice();

    const {
        page,
        clients,
        loading,
        fetchClient,
        fetchExcursions,
        fetchGuideUsersBySearch,
        totalPages,
    } = useStore((state) => ({
        page: state.page,
        clients: state.clients,
        loading: state.loading,
        fetchClient: state.fetchClients,
        fetchExcursions: state.fetchExcursions,
        fetchGuideUsersBySearch: state.fetchGuideUsersBySearch,
        totalPages: state.totalPages,
    }));

    const addDisclosure = useDisclosure();

    const alertDisclosure = useDisclosure();

    const checkinDisclosure = useDisclosure();

    const checkoutDisclosure = useDisclosure();

    const defaultClient: Client = {
        id: 0,
        nome: '',
        email: '',
        telefone: '',
        cidade: '',
        estado: '',
        caravana: 0,
        nomeCaravana: '',
        dataEntrada: '',
        dataNascimento: '',
        dataSaida: '',
        documento: '',
        genero: 'Masculino',
        nacionalidade: '',
        guia: 0,
        nomeGuia: '',
        evento: '',
        leito: 1,
        numeroLeito: 1,
        nomeQuarto: '',
    };

    const [creation, setCreation] = useState(false);
    const [editClient, setEditClient] = useState<Client>(defaultClient);

    const formRef = useRef<HTMLFormElement>(null);

    const submitForm = () => {
        if (formRef.current) {
            formRef.current.requestSubmit();
        }
    };

    const steps = [
        { title: 'Informação Pessoal' },
        { title: 'Informação Geral' },
    ];

    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: steps.length,
    });

    const stepsTitles = creation
        ? ['Registro de cliente', 'Registro de cliente']
        : ['Editar cliente', 'Editar cliente'];
    const stepsActions = ['Próximo', 'Concluir'];

    const { showCustomToast } = useCustomToast();
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    const handleCheckboxChange = (id: number, isChecked: boolean) => {
        setSelectedIds((currentIds) => {
            if (isChecked) {
                return currentIds.includes(id)
                    ? currentIds
                    : [...currentIds, id];
            } else {
                return currentIds.filter((storedId) => storedId !== id);
            }
        });
    };

    const getStatusColor = (client: Client) => {
        return client.nomeGuia === client.nome ? 'blue' : 'green';
    };

    useEffect(() => {
        fetchClient();
    }, [page]);

    if (loading) {
        return (
            <ListClientsContainer>
                <Loader message="Carregando Clientes" />
            </ListClientsContainer>
        );
    }

    if (!clients.length) {
        return (
            <ListClientsContainer>
                <EmptyStateSection>
                    <Filters />
                    <IllustratedState
                        title="Nenhum cliente foi encontrado"
                        subtitle="Verifique os valores de busca e filtro. Tente novamente."
                    />
                </EmptyStateSection>
            </ListClientsContainer>
        );
    }

    return (
        <ListClientsContainer>
            <ClientsSection>
                <Filters
                    actionButton={() => {
                        checkoutDisclosure.onOpen();
                    }}
                    actionButtonDisabled={selectedIds.length === 0}
                />
                <ListClientsContent>
                    {clients.map((client) => (
                        <li key={client.id}>
                            <TemplateCard
                                id={client.id}
                                title={
                                    client.nome === client.nomeGuia
                                        ? 'guia: ' + client.nome
                                        : client.nome
                                }
                                subtitle={`${client.cidade} - ${client.estado}`}
                                bodyItems={[
                                    `Celular: ${client.telefone}`,
                                    `Email: ${client.email}`,
                                    `Quarto: ${client.nomeQuarto}`,
                                    `Numero do Leito: ${
                                        client.leito !== 1
                                            ? client.numeroLeito
                                            : 'Sem leito'
                                    } `,
                                ]}
                                actions={[
                                    {
                                        label: 'Editar',
                                        onClick: () => {
                                            setCreation(false);
                                            addDisclosure.onOpen();
                                            fetchExcursions();
                                            fetchGuideUsersBySearch();
                                            setEditClient(client);
                                        },
                                    },
                                    {
                                        label: 'Excluir',
                                        onClick: () => {
                                            alertDisclosure.onOpen();
                                            setEditClient(client);
                                        },
                                    },
                                    {
                                        label: 'Check-in',
                                        onClick: () => {
                                            checkinDisclosure.onOpen();
                                            setEditClient(client);
                                        },
                                    },
                                ]}
                                showCheckboxes={true}
                                onCheckboxChange={handleCheckboxChange}
                                selectedIds={selectedIds}
                                statusColor={getStatusColor(client)}
                                isDisabled={client.dataSaida !== null}
                                disableText="Inativo"
                            ></TemplateCard>
                        </li>
                    ))}
                </ListClientsContent>
                <Modal
                    isOpen={addDisclosure.isOpen}
                    onClose={() => {
                        setActiveStep(0);
                        addDisclosure.onClose();
                    }}
                    title={stepsTitles[activeStep]}
                    onSave={() => {
                        if (activeStep < stepsTitles.length - 1) {
                            setActiveStep((prev) => prev + 1);
                        } else {
                            submitForm();
                            addDisclosure.onClose();
                        }
                    }}
                    onBack={() => {
                        if (activeStep > 0) {
                            setActiveStep((prev) => prev - 1);
                        }
                    }}
                    avoidCloseOnBack={false}
                    size="5xl"
                    saveLabel={stepsActions[activeStep]}
                    activeStep={activeStep}
                >
                    <StyledContentModal>
                        <GenericStepper steps={steps} activeStep={activeStep} />
                        {creation ? (
                            <CreateClientForm
                                activeStep={activeStep}
                                formRef={formRef}
                            />
                        ) : (
                            <EditClientForm
                                activeStep={activeStep}
                                formRef={formRef}
                                Client={editClient}
                            />
                        )}
                    </StyledContentModal>
                </Modal>
                <AlertDialog
                    title="Excluir Cliente"
                    description="Deseja realmente excluir este cliente?"
                    isOpen={alertDisclosure.isOpen}
                    onClose={alertDisclosure.onClose}
                    confirmButtonText="Excluir"
                    cancelButtonText="Cancelar"
                    onConfirm={() => {
                        alertDisclosure.onClose();
                        deleteClient(editClient.id)
                            .then(() => {
                                showCustomToast({
                                    title: 'Cliente deletado',
                                    description:
                                        'O cliente foi deletado com sucesso.',
                                    status: 'success',
                                });

                                fetchClient();
                            })
                            .catch(() => {
                                showCustomToast({
                                    title: 'Erro ao deletar',
                                    description:
                                        'Ocorreu um erro ao tentar deletar o cliente.',
                                    status: 'error',
                                });
                            });
                    }}
                />
                <Modal
                    isOpen={checkinDisclosure.isOpen}
                    onClose={() => {
                        checkinDisclosure.onClose();
                    }}
                    title={'Check-in'}
                    onSave={() => {
                        submitForm();
                        checkinDisclosure.onClose();
                    }}
                    avoidCloseOnBack={false}
                    size="5xl"
                    saveLabel={'Salvar'}
                >
                    <StyledContentModal>
                        <GenericStepper
                            steps={[{ title: 'Check-in' }]}
                            activeStep={activeStep}
                        />
                        <CheckInBedroom client={editClient} formRef={formRef} />
                    </StyledContentModal>
                </Modal>
                <AlertDialog
                    title="Checkout"
                    description="Deseja realmente Fazer checkout desses hóspedes?"
                    isOpen={checkoutDisclosure.isOpen}
                    onClose={checkoutDisclosure.onClose}
                    confirmButtonText="Fazer checkout"
                    cancelButtonText="Cancelar"
                    onConfirm={() => {
                        checkoutDisclosure.onClose();
                        checkoutClient(selectedIds)
                            .then(() => {
                                showCustomToast({
                                    title: 'Checkout feito com sucesso!',
                                    description:
                                        'O checkout finalizou sem problemas.',
                                    status: 'success',
                                });
                                fetchClient();
                                setSelectedIds([]);
                            })
                            .catch(() => {
                                showCustomToast({
                                    title: 'Erro ao fazer checkout',
                                    description:
                                        'Ocorreu um erro ao tentar fazer o checkout do hóspede.',
                                    status: 'error',
                                });
                            });
                    }}
                />
            </ClientsSection>
            {(isPhone || totalPages > 1) && <Actions />}
            <Tooltip hasArrow label="Adicionar Clientes">
                <IconButton
                    variant="solid"
                    colorScheme="teal"
                    aria-label="Done"
                    fontSize="20px"
                    icon={<AddIcon />}
                    onClick={() => {
                        fetchExcursions();
                        fetchGuideUsersBySearch();
                        addDisclosure.onOpen();
                        setCreation(true);
                    }}
                />
            </Tooltip>
        </ListClientsContainer>
    );
};

export default ListClients;
