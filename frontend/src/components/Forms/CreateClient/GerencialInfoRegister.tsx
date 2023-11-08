import { Column, Input, Label, TwoColumns, Select } from './Forms.styles';
import { UseFormRegister } from 'react-hook-form';
import { Client } from '../../../commons/types/Client';
import useStore from '../../../store/index';
interface GerencialInfoRegisterProps {
    register: UseFormRegister<Client>;
}

const GerencialInfoRegister: React.FC<GerencialInfoRegisterProps> = ({
    register,
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
                    <span>caravana:</span>
                    <Select
                        {...register('caravana', {
                            required: 'Este campo é obrigatório',
                        })}
                    >
                        {excursions.map((caravana) => (
                            <option key={caravana.id} value={caravana.id}>
                                {caravana.nome}
                            </option>
                        ))}
                    </Select>
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
            </Column>
        </TwoColumns>
    );
};

export default GerencialInfoRegister;
