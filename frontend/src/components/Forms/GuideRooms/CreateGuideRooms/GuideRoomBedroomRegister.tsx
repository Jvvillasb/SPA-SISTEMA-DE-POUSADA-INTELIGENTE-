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
} from './GuideRoomForm.style';
import { Bedroom } from '../../../../commons/types/Bedroom';
import Button from '../../../../commons/ui/Button/Button';
import theme from '../../../../theme';
import { useForm } from 'react-hook-form';
import useStore from '../../../../store/index';

interface GuideRoomBedroomRegisterProps {}

const GuideRoomBedroomRegister: React.FC<
    GuideRoomBedroomRegisterProps
> = () => {
    const { register, getValues, reset } = useForm<Bedroom>();

    const {
        addBedroomsByCreationGuideRooms,
        removeBedroomsByCreationGuideRooms,
        bedroomsByCreationGuideRooms,
    } = useStore((state) => ({
        addBedroomsByCreationGuideRooms: state.addBedroomsByCreationGuideRooms,
        removeBedroomsByCreationGuideRooms:
            state.removeBedroomsByCreationGuideRooms,
        bedroomsByCreationGuideRooms: state.bedroomsByCreationGuideRooms,
    }));

    const handleAddButtonClick = () => {
        const newRoom = getValues();
        addBedroomsByCreationGuideRooms(newRoom);
        reset();
    };

    const handleRemoveButtonClick = (index: number) => {
        removeBedroomsByCreationGuideRooms(index);
    };

    return (
        <TwoColumns>
            <Column>
                <Input
                    {...register('numero')}
                    placeholder="Insira o número do leito"
                />
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
                                <Th>Número</Th>
                                <Th>Status</Th>
                                <Th>Ação</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {bedroomsByCreationGuideRooms.map((room, index) => (
                                <Tr key={index}>
                                    <Td>{room.numero}</Td>
                                    <Td>{room.status}</Td>
                                    <Td>
                                        <Button
                                            colorScheme="red"
                                            onClick={() =>
                                                handleRemoveButtonClick(index)
                                            }
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
        </TwoColumns>
    );
};

export default GuideRoomBedroomRegister;
