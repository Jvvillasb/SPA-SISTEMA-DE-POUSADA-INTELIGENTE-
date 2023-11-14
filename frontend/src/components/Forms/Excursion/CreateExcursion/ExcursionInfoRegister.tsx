import {
    Column,
    Input,
    Label,
    Select,
    TwoColumns,
} from './ExcursionForm.style';
import { UseFormRegister } from 'react-hook-form';
import { Excursion } from '../../../../commons/types/Excursion';
import useStore from '../../../../store/index';

interface ExcursionInfoRegisterProps {
    register: UseFormRegister<Excursion>;
}

const ExcursionInfoRegister: React.FC<ExcursionInfoRegisterProps> = ({
    register,
}) => {
    const { guideUsers } = useStore((state) => ({
        guideUsers: state.GuideUsers,
    }));

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
                    <span>Guia:</span>
                    <Select
                        {...register('guia', {
                            required: 'Este campo é obrigatório',
                        })}
                        defaultValue={1}
                    >
                        {guideUsers.map((guia) => (
                            <option key={guia.id} value={guia.id}>
                                {guia.nome}
                            </option>
                        ))}
                    </Select>
                </Label>
            </Column>
        </TwoColumns>
    );
};

export default ExcursionInfoRegister;
