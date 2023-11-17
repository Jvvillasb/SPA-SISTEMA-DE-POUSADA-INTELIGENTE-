import {
    Column,
    Label,
    TwoColumns,
    Input,
} from '../../Client/CreateClient/Forms.styles';
import { UseFormRegister } from 'react-hook-form';
import { GuideRoom } from '../../../../commons/types/GuideRoom';
import { Select } from '../CreateGuideRooms/GuideRoomForm.style';

interface EditGuideRoomInfoRegisterProps {
    register: UseFormRegister<GuideRoom>;
    guideRoom: GuideRoom;
}

const EditGuideRoomInfoRegister: React.FC<EditGuideRoomInfoRegisterProps> = ({
    register,
    guideRoom,
}) => {
    return (
        <TwoColumns>
            <Column>
                <Label>
                    <span>Número do quarto:</span>
                    <Input
                        {...register('numero', {
                            required: 'Nome é obrigatório',
                        })}
                        defaultValue={guideRoom.numero}
                    />
                </Label>
                <Label>
                    <span>Nome do quarto:</span>
                    <Input
                        {...register('nome', {
                            required: 'Cidade é obrigatório',
                        })}
                        defaultValue={guideRoom.nome}
                    />
                </Label>
                <Label>
                    <span>Status:</span>
                    <Select
                        {...register('status', {
                            required: 'Este campo é obrigatório',
                        })}
                        defaultValue={guideRoom.status}
                    >
                        <option value={'disponivel'}>Disponível</option>
                        <option value={'ocupado'}>Ocupado</option>
                        <option value={'interditado'}>Interditado</option>
                    </Select>
                </Label>
            </Column>
        </TwoColumns>
    );
};

export default EditGuideRoomInfoRegister;
