import { useEffect, useRef, useState } from 'react';
import useStore from './../../store/index';
import TemplateCard from '../../commons/ui/TemplateCard/TemplateCard';
import Loader from '../../commons/ui/Loader/Loader';
import {
    ListGuideRoomsContainer,
    ListGuideRoomsContent,
    GuideRoomsSection,
    StyledContentModal,
} from './ListGuideRooms.style';
import Actions from '../ListClients/components/Actions/Actions';
import Modal from '../../commons/ui/Modal/Modal';
import GenericStepper from '../../commons/ui/Stepper/Stepper';
import { GuideRoom } from '../../commons/types/GuideRoom';
import AlertDialog from '../../commons/ui/AlertDialog/AlertDialog';
import { Tooltip, useDisclosure, useSteps } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import useCustomToast from '../../commons/hooks/useCustomToast/useCustomToast';
import IconButton from '../../commons/ui/IconButton/IconButton';
import { deleteGuideRooms } from './Services/GuideRoom.service';
import GuideRoomForm from '../Forms/GuideRooms/CreateGuideRooms/GuideRoomForm';
import EditGuideRoomForm from '../Forms/GuideRooms/EditGuideRooms/EditGuideRoomForm';

const ListGuideRooms: React.FC = () => {
    const { page, guideRooms, loadingGuideRoom, fetchGuideRooms } = useStore(
        (state) => ({
            page: state.page,
            guideRooms: state.guideRoom,
            loadingGuideRoom: state.loadingGuideRoom,
            fetchGuideRooms: state.fetchGuideRooms,
        })
    );

    const addDisclosure = useDisclosure();

    const { showCustomToast } = useCustomToast();

    const alertDisclosure = useDisclosure();

    const guideRoomDefault: GuideRoom = {
        numero: 0,
        nome: '',
        status: 'disponível',
        id: 0,
        leitos: [],
    };

    const [creation, setCreation] = useState(false);
    const [editGuideRoom, setEditGuideRoom] =
        useState<GuideRoom>(guideRoomDefault);

    const formRef = useRef<HTMLFormElement>(null);

    const submitForm = () => {
        if (formRef.current) {
            formRef.current.requestSubmit();
            setActiveStep(0);
            formRef.current?.reset();
        }
    };

    const steps = [
        { title: 'Informação Geral' },
        { title: 'Informação do Leito' },
    ];

    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: steps.length,
    });

    const stepsTitles = creation
        ? ['Registro de quarto', 'Registro de quarto']
        : ['Editar quarto', 'Editar quarto'];
    const stepsActions = ['Próximo', 'Concluir'];

    useEffect(() => {
        fetchGuideRooms();
    }, [page]);

    if (loadingGuideRoom) {
        return (
            <ListGuideRoomsContainer>
                <Loader message="Carregando Quartos" />
            </ListGuideRoomsContainer>
        );
    }

    type StatusKey = 'disponivel' | 'ocupado' | 'interditado';

    const defineStatusColor = (status: StatusKey): string => {
        const statusColor: { [key in StatusKey]: string } = {
            disponivel: 'green',
            ocupado: 'red',
            interditado: 'yellow',
        };

        return statusColor[status];
    };

    return (
        <ListGuideRoomsContainer>
            <GuideRoomsSection>
                <ListGuideRoomsContent>
                    {guideRooms.map((guideRoom) => (
                        <li key={guideRoom.id}>
                            <TemplateCard
                                title={guideRoom.nome}
                                subtitle={`${guideRoom.status}`}
                                actions={[
                                    {
                                        label: 'Editar',
                                        onClick: () => {
                                            setCreation(false);
                                            addDisclosure.onOpen();
                                            setEditGuideRoom(guideRoom);
                                        },
                                    },
                                    {
                                        label: 'Excluir',
                                        onClick: () => {
                                            alertDisclosure.onOpen();
                                            setEditGuideRoom(guideRoom);
                                        },
                                    },
                                ]}
                                bodyItems={[]}
                                statusColor={defineStatusColor(
                                    guideRoom.status as StatusKey
                                )}
                            ></TemplateCard>
                        </li>
                    ))}
                </ListGuideRoomsContent>
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
                            <GuideRoomForm
                                activeStep={activeStep}
                                formRef={formRef}
                            />
                        ) : (
                            <EditGuideRoomForm
                                GuideRoom={editGuideRoom}
                                activeStep={activeStep}
                                formRef={formRef}
                            />
                        )}
                    </StyledContentModal>
                </Modal>
                <AlertDialog
                    title="Excluir Quarto"
                    description="Deseja realmente excluir este quarto?"
                    isOpen={alertDisclosure.isOpen}
                    onClose={alertDisclosure.onClose}
                    confirmButtonText="Excluir"
                    cancelButtonText="Cancelar"
                    onConfirm={() => {
                        alertDisclosure.onClose();
                        deleteGuideRooms(editGuideRoom.id)
                            .then(() => {
                                showCustomToast({
                                    title: 'Quarto deletado',
                                    description:
                                        'O quarto foi deletado com sucesso.',
                                    status: 'success',
                                });

                                fetchGuideRooms();
                            })
                            .catch(() => {
                                showCustomToast({
                                    title: 'Erro ao deletar',
                                    description:
                                        'Ocorreu um erro ao tentar deletar o quarto.',
                                    status: 'error',
                                });
                            });
                    }}
                />
            </GuideRoomsSection>
            <Actions />
            <Tooltip hasArrow label="Adicionar Quarto">
                <IconButton
                    variant="solid"
                    colorScheme="teal"
                    aria-label="Done"
                    fontSize="20px"
                    icon={<AddIcon />}
                    onClick={() => {
                        addDisclosure.onOpen();
                        setCreation(true);
                    }}
                />
            </Tooltip>
        </ListGuideRoomsContainer>
    );
};

export default ListGuideRooms;
