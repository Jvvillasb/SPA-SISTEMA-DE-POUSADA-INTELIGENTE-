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
import CreateClientForm from '../Forms/CreateClient/Forms';
import GenericStepper from '../../commons/ui/Stepper/Stepper';
import EditClientForm from '../Forms/EditClient/EditClientForm';
import { Client } from '../../commons/types/Client';
import IconButton from '../../commons/ui/IconButton/IconButton';
import { AddIcon } from '@chakra-ui/icons';
import AlertDialog from '../../commons/ui/AlertDialog/AlertDialog';
import { deleteClient } from './services/client.service';
import useCustomToast from '../../commons/hooks/useCustomToast/useCustomToast';

const ListClients = () => {
    const { page, clients, loading, fetchClient, fetchExcursions } = useStore(
        (state) => ({
            page: state.page,
            clients: state.clients,
            loading: state.loading,
            fetchClient: state.fetchClients,
            fetchExcursions: state.fetchExcursions,
        })
    );
    const addDisclosure = useDisclosure();

    const alertDisclosure = useDisclosure();

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
        { title: 'Informações Geral' },
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
                <Filters />
                <ListClientsContent>
                    {clients.map((client) => (
                        <li key={client.id}>
                            <TemplateCard
                                title={client.nome}
                                subtitle={`${client.cidade} - ${client.estado}`}
                                bodyItems={[
                                    `Celular: ${client.telefone}`,
                                    `Email: ${client.email}`,
                                ]}
                                actions={[
                                    {
                                        label: 'Editar',
                                        onClick: () => {
                                            setCreation(false);
                                            addDisclosure.onOpen();
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
                                ]}
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
            </ClientsSection>
            <Actions />
            <Tooltip hasArrow label="Adicionar Clientes">
                <IconButton
                    variant="solid"
                    colorScheme="teal"
                    aria-label="Done"
                    fontSize="20px"
                    icon={<AddIcon />}
                    onClick={() => {
                        fetchExcursions();
                        addDisclosure.onOpen();
                        setCreation(true);
                    }}
                />
            </Tooltip>
        </ListClientsContainer>
    );
};

export default ListClients;
