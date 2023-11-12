import {
    Column,
    Label,
    TwoColumns,
    Input,
} from '../../Client/CreateClient/Forms.styles';
import { UseFormRegister } from 'react-hook-form';
import { Excursion } from '../../../../commons/types/Excursion';
import { Select } from '../CreateExcursion/ExcursionForm.style';

interface EditExcursionInfoRegisterProps {
    register: UseFormRegister<Excursion>;
    excursion: Excursion;
}

const EditExcursionInfoRegister: React.FC<EditExcursionInfoRegisterProps> = ({
    register,
    excursion,
}) => {
    return (
        <TwoColumns>
            <Column>
                <Label>
                    <span>Nome:</span>
                    <Input
                        {...register('nome', {
                            required: 'Nome é obrigatório',
                        })}
                        defaultValue={excursion.nome}
                    />
                </Label>
                <Label>
                    <span>Cidade:</span>
                    <Input
                        {...register('cidade', {
                            required: 'Cidade é obrigatório',
                        })}
                        defaultValue={excursion.cidade}
                    />
                </Label>
                <Label>
                    <span>guia:</span>
                    <Select
                        {...register('guia', {
                            required: 'Este campo é obrigatório',
                        })}
                        defaultValue={excursion.guia}
                    >
                        <option value="2">Sim</option>
                        <option value="1">Não</option>
                    </Select>
                </Label>
            </Column>
        </TwoColumns>
    );
};

export default EditExcursionInfoRegister;
