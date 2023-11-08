import { useEffect, useRef, useState } from 'react';
import useStore from './../../store/index';
import TemplateCard from '../../commons/ui/TemplateCard/TemplateCard';
import Loader from '../../commons/ui/Loader/Loader';
import {
    ListExcursionContainer,
    ListExcursionContent,
    ExcursionSection,
    StyledContentModal,
} from './ListExcursion.style';
import Actions from '../ListClients/components/Actions/Actions';
import Modal from '../../commons/ui/Modal/Modal';
import GenericStepper from '../../commons/ui/Stepper/Stepper';
import { Excursion } from '../../commons/types/Excursion';
import AlertDialog from '../../commons/ui/AlertDialog/AlertDialog';
import { Tooltip, useDisclosure, useSteps } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import ExcursionForm from '../Forms/CreateExcursion/ExcursionForm';
import Filters from '../ListExcursion/Components/Filters/Filters';
import { deleteExcursion } from './services/Excursion.service';
import useCustomToast from '../../commons/hooks/useCustomToast/useCustomToast';
import EditExcursionForm from '../Forms/EditExcursion/EditExcursionForm';
import IconButton from '../../commons/ui/IconButton/IconButton';

const ListExcursion: React.FC = () => {
    const { page, excursions, loadingExcursion, fetchExcursions } = useStore(
        (state) => ({
            page: state.page,
            excursions: state.excursions,
            loadingExcursion: state.loadingExcursion,
            fetchExcursions: state.fetchExcursions,
        })
    );

    const addDisclosure = useDisclosure();

    const { showCustomToast } = useCustomToast();

    const alertDisclosure = useDisclosure();

    const defaultExcursion: Excursion = {
        nome: '',
        cidade: '',
        guia: 0,
        id: 0,
    };

    const [creation, setCreation] = useState(false);
    const [editExcursion, setEditExcursion] =
        useState<Excursion>(defaultExcursion);

    const formRef = useRef<HTMLFormElement>(null);

    const submitForm = () => {
        if (formRef.current) {
            formRef.current.requestSubmit();
        }
    };

    const steps = [{ title: 'Informação Geral' }];

    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: steps.length,
    });

    const stepsTitles = creation
        ? ['Registro de Caravana']
        : ['Editar Caravana'];
    const stepsActions = ['Concluir'];

    useEffect(() => {
        fetchExcursions();
    }, [page]);

    if (loadingExcursion) {
        return (
            <ListExcursionContainer>
                <Loader message="Carregando Caravanas" />
            </ListExcursionContainer>
        );
    }

    return (
        <ListExcursionContainer>
            <ExcursionSection>
                <Filters />
                <ListExcursionContent>
                    {excursions.map((excursions) => (
                        <li key={excursions.id}>
                            <TemplateCard
                                title={excursions.nome}
                                subtitle={`${excursions.cidade}`}
                                actions={[
                                    {
                                        label: 'Editar',
                                        onClick: () => {
                                            setCreation(false);
                                            addDisclosure.onOpen();
                                            setEditExcursion(excursions);
                                        },
                                    },
                                    {
                                        label: 'Excluir',
                                        onClick: () => {
                                            alertDisclosure.onOpen();
                                            setEditExcursion(excursions);
                                        },
                                    },
                                ]}
                                bodyItems={[]}
                            ></TemplateCard>
                        </li>
                    ))}
                </ListExcursionContent>
                <Actions />
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
                            <ExcursionForm
                                activeStep={activeStep}
                                formRef={formRef}
                            />
                        ) : (
                            <EditExcursionForm
                                Excursion={editExcursion}
                                activeStep={activeStep}
                                formRef={formRef}
                            />
                        )}
                    </StyledContentModal>
                </Modal>
                <AlertDialog
                    title="Excluir Caravana"
                    description="Deseja realmente excluir esta caravana?"
                    isOpen={alertDisclosure.isOpen}
                    onClose={alertDisclosure.onClose}
                    confirmButtonText="Excluir"
                    cancelButtonText="Cancelar"
                    onConfirm={() => {
                        alertDisclosure.onClose();
                        deleteExcursion(editExcursion.id)
                            .then(() => {
                                showCustomToast({
                                    title: 'Caravana deletada',
                                    description:
                                        'A caravana foi deletada com sucesso.',
                                    status: 'success',
                                });

                                fetchExcursions();
                            })
                            .catch(() => {
                                showCustomToast({
                                    title: 'Erro ao deletar',
                                    description:
                                        'Ocorreu um erro ao tentar deletar a caravana.',
                                    status: 'error',
                                });
                            });
                    }}
                />
                <Tooltip hasArrow label="Adicionar Caravana">
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
            </ExcursionSection>
        </ListExcursionContainer>
    );
};

export default ListExcursion;
