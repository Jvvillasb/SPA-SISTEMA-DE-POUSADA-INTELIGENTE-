import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Bedroom } from '../../../../commons/types/Bedroom';
import { GuideRoom } from '../../../../commons/types/GuideRoom';
import {
    Column,
    Input,
    Select,
    TwoColumns,
    Table,
    Tr,
    Thead,
    Th,
    Td,
    Tbody,
    ScrollableTableContainer,
} from '../CreateGuideRooms/GuideRoomForm.style';
import { useDisclosure } from '@chakra-ui/react';
import Button from '../../../../commons/ui/Button/Button';
import theme from '../../../../theme';
import {
    deleteBedrooms,
    createBedrooms,
} from '../../../../components/ListGuideRooms/Bedrooms/Services/Bedroom.service';
import AlertDialog from '../../../../commons/ui/AlertDialog/AlertDialog';
import useCustomToast from '../../../../commons/hooks/useCustomToast/useCustomToast';
import Loader from '../../../../commons/ui/Loader/Loader';

interface EditGuideRoomBedroomRegisterProps {
    guideRoom: GuideRoom;
}

const EditGuideRoomBedroomRegister: React.FC<
    EditGuideRoomBedroomRegisterProps
> = ({ guideRoom }) => {
    const { register, getValues, reset } = useForm<Bedroom>();
    const { showCustomToast } = useCustomToast();
    const alertDisclosure = useDisclosure();
    const [localLeitos, setLocalLeitos] = useState<Bedroom[]>([]);

    const [loadingBedrooms, setLoadingBedrooms] = useState<boolean>(false);

    useEffect(() => {
        setLocalLeitos(guideRoom.leitos);
    }, [guideRoom.leitos]);

    const handleAddButtonClick = () => {
        const newRoom = getValues();
        newRoom.quarto = guideRoom.id;
        setLocalLeitos((prev) => [...prev, newRoom]);
        setLoadingBedrooms(true);
        createBedrooms(newRoom)
            .then(() => {
                showCustomToast({
                    title: 'Leito Adicionado',
                    description: 'O Leito foi adicionado com sucesso.',
                    status: 'success',
                });
                setLoadingBedrooms(false);
                reset();
            })
            .catch(() => {
                showCustomToast({
                    title: 'Erro ao adicionar',
                    description: 'Ocorreu um erro ao tentar adicionar o Leito.',
                    status: 'error',
                });
            });
    };

    const handleRemoveButtonClick = (bedRoomId: number) => {
        deleteBedrooms(bedRoomId)
            .then(() => {
                setLocalLeitos((prev) =>
                    prev.filter((bed) => bed.id !== bedRoomId)
                );
                showCustomToast({
                    title: 'Leito Deletado',
                    description: 'O Leito foi deletado com sucesso.',
                    status: 'success',
                });
            })
            .catch(() => {
                showCustomToast({
                    title: 'Erro ao deletar',
                    description: 'Ocorreu um erro ao tentar deletar o Leito.',
                    status: 'error',
                });
            });
        alertDisclosure.onClose();
    };

    const [editBedroom, setEditBedroom] = useState<Bedroom | null>(null);

    if (loadingBedrooms) {
        return (
            <TwoColumns>
                <Column>
                    <Loader message="Carregando leitos..." />
                </Column>
            </TwoColumns>
        );
    }

    return (
        <TwoColumns>
            <Column>
                <Input {...register('numero')} placeholder="Insira o número" />
                <Select
                    {...register('status')}
                    placeholder="Selecione o status"
                >
                    <option value="disponivel">Disponível</option>
                    <option value="ocupado">Ocupado</option>
                    <option value="interditado">Interditado</option>
                </Select>
                <Button
                    onClick={handleAddButtonClick}
                    colorScheme={theme.colors.customGreen}
                >
                    Adicionar
                </Button>
                <ScrollableTableContainer>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th w={'33%'}>Número</Th>
                                <Th w={'33%'}>Status</Th>
                                <Th w={'33%'}>Ação</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {localLeitos.map((bedRoom, index) => (
                                <Tr key={index}>
                                    <Td>{bedRoom.numero}</Td>
                                    <Td>{bedRoom.status}</Td>
                                    <Td>
                                        <Button
                                            colorScheme="red"
                                            onClick={() => {
                                                setEditBedroom(bedRoom);
                                                alertDisclosure.onOpen();
                                            }}
                                        >
                                            Remover
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </ScrollableTableContainer>
            </Column>
            <AlertDialog
                title="Excluir Quarto"
                description="Deseja realmente excluir este quarto?"
                isOpen={alertDisclosure.isOpen}
                onClose={alertDisclosure.onClose}
                confirmButtonText="Excluir"
                cancelButtonText="Cancelar"
                onConfirm={() => {
                    if (editBedroom) {
                        handleRemoveButtonClick(editBedroom.id);
                    }
                }}
            />
        </TwoColumns>
    );
};

export default EditGuideRoomBedroomRegister;
