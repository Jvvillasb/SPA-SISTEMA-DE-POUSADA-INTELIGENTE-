import {
    Column,
    Input,
    Label,
    Select,
    TwoColumns,
} from './ExcursionForm.style';
import { UseFormRegister } from 'react-hook-form';
import { Excursion } from '../../../../commons/types/Excursion';

interface ExcursionInfoRegisterProps {
    register: UseFormRegister<Excursion>;
}

const ExcursionInfoRegister: React.FC<ExcursionInfoRegisterProps> = ({
    register,
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
                        placeholder="Nome"
                    />
                </Label>
                <Label>
                    <span>Cidade:</span>
                    <Input
                        {...register('cidade', {
                            required: 'Cidade é obrigatória',
                        })}
                        placeholder="Cidade"
                    />
                </Label>
                <Label>
                    <span>Tem guia:</span>
                    <Select
                        {...register('guia', {
                            required: 'Selecionar se tem guia é obrigatório',
                        })}
                    >
                        <option value="">Selecione...</option>
                        <option value="2">Sim</option>
                        <option value="1">Não</option>
                    </Select>
                </Label>
            </Column>
        </TwoColumns>
    );
};

export default ExcursionInfoRegister;
