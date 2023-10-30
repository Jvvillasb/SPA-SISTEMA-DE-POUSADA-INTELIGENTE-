import { useEffect, useRef, useState } from 'react';
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
import { useDisclosure, useSteps } from '@chakra-ui/react';
import Modal from '../../commons/ui/Modal/Modal';
import CreateClientForm from '../Forms/CreateClient/Forms';
import GenericStepper from '../../commons/ui/Stepper/Stepper';
import EditClientForm from '../Forms/EditClient/EditClientForm';
import { Client } from '../../commons/types/Client';

const ListClients = () => {
    const { page, clients, loading, fetchClient } = useStore((state) => ({
        page: state.page,
        clients: state.clients,
        loading: state.loading,
        fetchClient: state.fetchClients,
    }));
    const addDisclosure = useDisclosure();

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
                    <Filters
                        action={() => {
                            addDisclosure.onOpen();
                            setCreation(true);
                        }}
                    />
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
                    action={() => {
                        addDisclosure.onOpen();
                        setCreation(true);
                    }}
                />
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
                                            console.log('Excluir');
                                        },
                                    },
                                ]}
                            ></TemplateCard>
                        </li>
                    ))}
                </ListClientsContent>
                <Actions />
                <Modal
                    isOpen={addDisclosure.isOpen}
                    onClose={addDisclosure.onClose}
                    title={stepsTitles[activeStep]}
                    onSave={() => {
                        if (activeStep < stepsTitles.length - 1) {
                            setActiveStep((prev) => prev + 1);
                        } else {
                            submitForm();
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
            </ClientsSection>
        </ListClientsContainer>
    );
};

export default ListClients;
