import {
    Column,
    Label,
    TwoColumns,
    Input,
} from '../../Client/CreateClient/Forms.styles';
import { UseFormRegister } from 'react-hook-form';
import { Excursion } from '../../../../commons/types/Excursion';
import { Select } from '../CreateExcursion/ExcursionForm.style';
import useStore from '../../../../store/index';

interface EditExcursionInfoRegisterProps {
    register: UseFormRegister<Excursion>;
    excursion: Excursion;
}

const EditExcursionInfoRegister: React.FC<EditExcursionInfoRegisterProps> = ({
    register,
    excursion,
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
                    <span>Guia:</span>
                    <Select
                        {...register('guia', {
                            required: 'Este campo é obrigatório',
                        })}
                        defaultValue={excursion.guia}
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

export default EditExcursionInfoRegister;
