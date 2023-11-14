import {
    Column,
    Input,
    Label,
    TwoColumns,
    Select,
} from '../EditGuideUsers/EditGuideUsersForm.style';
import { UseFormRegister } from 'react-hook-form';
import { GuideUser } from '../../../../commons/types/GuideUser';
import { formatDateToISO } from '../../../../commons/utils/FormatDate';
import useStore from '../../../../store/index';

interface EditGerencialInfoRegisterProps {
    register: UseFormRegister<GuideUser>;
    GuideUser: GuideUser;
}

const EditGerencialInfoRegister: React.FC<EditGerencialInfoRegisterProps> = ({
    register,
    GuideUser,
}) => {
    const { excursions } = useStore((state) => ({
        excursions: state.excursions,
    }));

    return (
        <TwoColumns>
            <Column>
                <Label>
                    <span>Data de Entrada:</span>
                    <Input
                        {...register('dataEntrada', {
                            required: 'Data de entrada é obrigatória',
                        })}
                        defaultValue={formatDateToISO(GuideUser.dataEntrada)}
                        type="date"
                    />
                </Label>

                <Label>
                    <span>Evento:</span>
                    <Input
                        {...register('evento', {
                            required: 'Evento é obrigatório',
                        })}
                        defaultValue={GuideUser.evento}
                    />
                </Label>
            </Column>
            <Column>
                <Label>
                    <span>caravana:</span>
                    <Select
                        {...register('caravana', {
                            required: 'Este campo é obrigatório',
                        })}
                        defaultValue={GuideUser.caravana}
                    >
                        {excursions.map((caravana) => (
                            <option key={caravana.id} value={caravana.id}>
                                {caravana.nome}
                            </option>
                        ))}
                    </Select>
                </Label>
            </Column>
        </TwoColumns>
    );
};

export default EditGerencialInfoRegister;
