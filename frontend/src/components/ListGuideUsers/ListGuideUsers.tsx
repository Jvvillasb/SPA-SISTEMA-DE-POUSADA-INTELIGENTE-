import { useEffect, useRef, useState } from 'react';
import useStore from './../../store/index';
import Actions from '../ListClients/components/Actions/Actions';
import TemplateCard from '../../commons/ui/TemplateCard/TemplateCard';
import Filters from '../ListGuideUsers/Components/Filters/Filters';
import Loader from '../../commons/ui/Loader/Loader';
import {
    ClientsSection,
    ListClientsContainer,
    ListClientsContent,
    EmptyStateSection,
    StyledContentModal,
} from '../ListClients/ListClients.style';
import IllustratedState from './../../commons/ui/IllustratedState/IllustratedState';
import { useDisclosure, useSteps, Tooltip } from '@chakra-ui/react';
import Modal from '../../commons/ui/Modal/Modal';
import GenericStepper from '../../commons/ui/Stepper/Stepper';
import { GuideUser } from '../../commons/types/GuideUser';
import IconButton from '../../commons/ui/IconButton/IconButton';
import { AddIcon } from '@chakra-ui/icons';
import AlertDialog from '../../commons/ui/AlertDialog/AlertDialog';
import { deleteGuideUser } from './services/GuideUser.service';
import useCustomToast from '../../commons/hooks/useCustomToast/useCustomToast';
import GuideUserForm from '../Forms/GuideUsers/CreateGuideUsers/GuideUsersForm';
import EditGuideUserForm from '../Forms/GuideUsers/EditGuideUsers/EditGuideUsersForm';

const ListGuidesUsers = () => {
    const {
        page,
        GuideUsers,
        loadingGuideUser,
        fetchGuideUser,
        fetchExcursionsBySearch,
    } = useStore((state) => ({
        page: state.page,
        GuideUsers: state.GuideUsers,
        loadingGuideUser: state.loadingGuideUser,
        fetchGuideUser: state.fetchGuideUser,
        fetchExcursionsBySearch: state.fetchExcursionsBySearch,
    }));
    const addDisclosure = useDisclosure();

    const alertDisclosure = useDisclosure();

    const defaultGuideUser: GuideUser = {
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
        evento: '',
        leito: 1,
    };

    const [creation, setCreation] = useState(false);
    const [editGuideUser, setEditguideUser] =
        useState<GuideUser>(defaultGuideUser);

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
        ? ['Registro de guia', 'Registro de guia']
        : ['Editar guia', 'Editar guia'];
    const stepsActions = ['Próximo', 'Concluir'];

    const { showCustomToast } = useCustomToast();

    useEffect(() => {
        fetchGuideUser();
    }, [page]);

    if (loadingGuideUser) {
        return (
            <ListClientsContainer>
                <Loader message="Carregando Guias" />
            </ListClientsContainer>
        );
    }

    if (!GuideUsers.length) {
        return (
            <ListClientsContainer>
                <EmptyStateSection>
                    <Filters />
                    <IllustratedState
                        title="Nenhum guia foi encontrado"
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
                    {GuideUsers.map((guideUser) => (
                        <li key={guideUser.id}>
                            <TemplateCard
                                title={guideUser.nome}
                                subtitle={`${guideUser.cidade} - ${guideUser.estado}`}
                                bodyItems={[
                                    `Celular: ${guideUser.telefone}`,
                                    `Email: ${guideUser.email}`,
                                ]}
                                actions={[
                                    {
                                        label: 'Editar',
                                        onClick: () => {
                                            setCreation(false);
                                            addDisclosure.onOpen();
                                            fetchExcursionsBySearch();
                                            setEditguideUser(guideUser);
                                        },
                                    },
                                    {
                                        label: 'Excluir',
                                        onClick: () => {
                                            alertDisclosure.onOpen();
                                            setEditguideUser(guideUser);
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
                            <GuideUserForm
                                activeStep={activeStep}
                                formRef={formRef}
                            />
                        ) : (
                            <EditGuideUserForm activeStep={activeStep}
                            formRef={formRef} GuideUser={editGuideUser} />
                        )}
                    </StyledContentModal>
                </Modal>
                <AlertDialog
                    title="Excluir Guia"
                    description="Deseja realmente excluir este guia?"
                    isOpen={alertDisclosure.isOpen}
                    onClose={alertDisclosure.onClose}
                    confirmButtonText="Excluir"
                    cancelButtonText="Cancelar"
                    onConfirm={() => {
                        alertDisclosure.onClose();
                        deleteGuideUser(editGuideUser.id)
                            .then(() => {
                                showCustomToast({
                                    title: 'Guia deletado',
                                    description:
                                        'O guia foi deletado com sucesso.',
                                    status: 'success',
                                });

                                fetchGuideUser();
                            })
                            .catch(() => {
                                showCustomToast({
                                    title: 'Erro ao deletar',
                                    description:
                                        'Ocorreu um erro ao tentar deletar o guia.',
                                    status: 'error',
                                });
                            });
                    }}
                />
            </ClientsSection>
            <Actions />
            <Tooltip hasArrow label="Adicionar Guia">
                <IconButton
                    variant="solid"
                    colorScheme="teal"
                    aria-label="Done"
                    fontSize="20px"
                    icon={<AddIcon />}
                    onClick={() => {
                        fetchExcursionsBySearch();
                        addDisclosure.onOpen();
                        setCreation(true);
                    }}
                />
            </Tooltip>
        </ListClientsContainer>
    );
};

export default ListGuidesUsers;
