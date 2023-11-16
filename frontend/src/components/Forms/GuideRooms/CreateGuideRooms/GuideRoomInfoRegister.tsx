import {
    Column,
    Input,
    Label,
    Select,
    TwoColumns,
} from './GuideRoomForm.style';
import { UseFormRegister } from 'react-hook-form';
import { GuideRoom } from '../../../../commons/types/GuideRoom';

interface GuideRoomInfoRegisterProps {
    register: UseFormRegister<GuideRoom>;
}

const GuideRoomInfoRegister: React.FC<GuideRoomInfoRegisterProps> = ({
    register,
}) => {
    return (
        <TwoColumns>
            <Column>
                <Label>
                    <span>Número do quarto:</span>
                    <Input
                        {...register('numero', {
                            required: 'número é obrigatório',
                        })}
                        placeholder="Número do quarto"
                    />
                </Label>
                <Label>
                    <span>Nome do quarto:</span>
                    <Input
                        {...register('nome', {
                            required: 'Nome é obrigatória',
                        })}
                        placeholder="Nome do quarto"
                    />
                </Label>
                <Label>
                    <span>Status:</span>
                    <Select
                        {...register('status', {
                            required: 'Este campo é obrigatório',
                        })}
                        defaultValue={'disponivel'}
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

export default GuideRoomInfoRegister;
