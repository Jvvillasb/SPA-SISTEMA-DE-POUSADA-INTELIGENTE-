import { useEffect } from 'react';
import useStore from './../../store/index';
import Actions from './components/Actions/Actions';
import TemplateCard from '../../commons/ui/TemplateCard/TemplateCard';
import Filters from './components/Filters/Filters';
import Loader from '../../commons/ui/Loader/Loader';
import {
    ClientsSection,
    ListClientsContainer,
    ListClientsContent,
} from './ListClients.style';
import { useDisclosure, useSteps } from '@chakra-ui/react';
import Modal from '../../commons/ui/Modal/Modal';
import ClientForm from '../Forms/Forms';
import GenericStepper from '../../commons/ui/Stepper/Stepper';

const ListClients = () => {
    const { page, clients, loading, fetchClient } = useStore((state) => ({
        page: state.page,
        clients: state.clients,
        loading: state.loading,
        fetchClient: state.fetchClients,
    }));
    const addDisclosure = useDisclosure();

    const steps = [
        { title: 'Informação Pessoal' },
        { title: 'Informações Geral' },
    ];

    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: steps.length,
    });

    const stepsTitles = ['Registro de cliente', 'Registro de cliente'];
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

    return (
        <ListClientsContainer>
            <ClientsSection>
                <Filters action={() => addDisclosure.onOpen()} />
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
                                        onClick: () => addDisclosure.onOpen(),
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
                            // função de salvar
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
                    <GenericStepper steps={steps} activeStep={activeStep} />
                    <ClientForm activeStep={activeStep} />
                </Modal>
            </ClientsSection>
        </ListClientsContainer>
    );
};

export default ListClients;
