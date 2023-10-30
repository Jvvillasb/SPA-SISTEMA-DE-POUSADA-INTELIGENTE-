import { Column, Input, Label, TwoColumns } from '../CreateClient/Forms.styles';
import { UseFormRegister } from 'react-hook-form';
import { Client } from '../../../commons/types/Client';
import { formatDateToISO } from '../../../commons/utils/FormatDate';

interface GerencialInfoRegisterProps {
    register: UseFormRegister<Client>;
    client: Client;
}

const EditGerencialInfoRegister: React.FC<GerencialInfoRegisterProps> = ({
    register,
    client,
}) => {
    return (
        <TwoColumns>
            <Column>
                <Label>
                    <span>Data de Entrada:</span>
                    <Input
                        {...register('dataEntrada')}
                        defaultValue={formatDateToISO(client.dataEntrada)}
                        type="date"
                    />
                </Label>

                <Label>
                    <span>Data de Saída:</span>
                    <Input
                        {...register('dataSaida')}
                        defaultValue={formatDateToISO(client.dataSaida)}
                        type="date"
                    />
                </Label>

                <Label>
                    <span>Evento:</span>
                    <Input
                        {...register('evento')}
                        defaultValue={client.evento}
                    />
                </Label>
            </Column>
            <Column>
                <Label>
                    <span>Nome da Caravana:</span>
                    <Input
                        {...register('nomeCaravana')}
                        defaultValue={client.nomeCaravana}
                    />
                </Label>

                <Label>
                    <span>Nome do Guia:</span>
                    <Input
                        {...register('nomeGuia')}
                        defaultValue={client.nomeGuia}
                    />
                </Label>
            </Column>
        </TwoColumns>
    );
};

export default EditGerencialInfoRegister;
