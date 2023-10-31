import { Column, Input, Label, TwoColumns } from './Forms.styles';
import { UseFormRegister } from 'react-hook-form';
import { Client } from '../../../commons/types/Client';
interface GerencialInfoRegisterProps {
    register: UseFormRegister<Client>;
}

const GerencialInfoRegister: React.FC<GerencialInfoRegisterProps> = ({
    register,
}) => {
    return (
        <TwoColumns>
            <Column>
                <Label>
                    <span>Data de Entrada:</span>
                    <Input
                        {...register('dataEntrada', {
                            required: 'Data de entrada é obrigatória',
                        })}
                        placeholder="Data de Entrada"
                        type="date"
                    />
                </Label>

                <Label>
                    <span>Data de Saída:</span>
                    <Input
                        {...register('dataSaida')}
                        placeholder="Data de Saída"
                        type="date"
                    />
                </Label>

                <Label>
                    <span>Evento:</span>
                    <Input
                        {...register('evento', {
                            required: 'Evento é obrigatório',
                        })}
                        placeholder="Evento"
                    />
                </Label>
            </Column>
            <Column>
                <Label>
                    <span>Está em caravana:</span>
                    <Select
                        {...register('caravana', {
                            required: 'Este campo é obrigatório',
                        })}
                    >
                        <option value="2">Sim</option>
                        <option value="1">Não</option>
                    </Select>
                </Label>

                <Label>
                    <span>Nome da Caravana:</span>
                    <Input
                        {...register('nomeCaravana')}
                        placeholder="Nome da Caravana"
                    />
                </Label>

                <Label>
                    <span>Tem guia:</span>
                    <Select
                        {...register('guia', {
                            required: 'Este campo é obrigatório',
                        })}
                    >
                        <option value="2">Sim</option>
                        <option value="1">Não</option>
                    </Select>
                </Label>

                <Label>
                    <span>Nome do Guia:</span>
                    <Input
                        {...register('nomeGuia')}
                        placeholder="Nome do Guia"
                    />
                </Label>
            </Column>
        </TwoColumns>
    );
};

export default GerencialInfoRegister;
