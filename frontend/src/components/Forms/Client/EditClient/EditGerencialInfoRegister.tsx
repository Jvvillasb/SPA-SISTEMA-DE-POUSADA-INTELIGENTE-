import {
    Column,
    Input,
    Label,
    TwoColumns,
    Select,
} from '../CreateClient/Forms.styles';
import { UseFormRegister } from 'react-hook-form';
import { Client } from '../../../../commons/types/Client';
import { formatDateToISO } from '../../../../commons/utils/FormatDate';
import useStore from '../../../../store/index';

interface GerencialInfoRegisterProps {
    register: UseFormRegister<Client>;
    client: Client;
}

const EditGerencialInfoRegister: React.FC<GerencialInfoRegisterProps> = ({
    register,
    client,
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
                        defaultValue={formatDateToISO(client.dataEntrada)}
                        type="date"
                    />
                </Label>

                <Label>
                    <span>Evento:</span>
                    <Input
                        {...register('evento', {
                            required: 'Evento é obrigatório',
                        })}
                        defaultValue={client.evento}
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
                        defaultValue={client.caravana}
                    >
                        {excursions.map((caravana) => (
                            <option key={caravana.id} value={caravana.id}>
                                {caravana.nome}
                            </option>
                        ))}
                    </Select>
                </Label>

                <Label>
                    <span>Guia:</span>
                    <Select
                        {...register('guia', {
                            required: 'Este campo é obrigatório',
                        })}
                        defaultValue={client.guia}
                    >
                        <option value="2">Sim</option>
                        <option value="1">Não</option>
                    </Select>
                </Label>
            </Column>
        </TwoColumns>
    );
};

export default EditGerencialInfoRegister;
