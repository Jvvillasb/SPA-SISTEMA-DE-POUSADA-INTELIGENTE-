import { Column, Input, Label, TwoColumns, Select } from './Forms.styles';
import { UseFormRegister } from 'react-hook-form';
import { Client } from '../../../../commons/types/Client';
import useStore from '../../../../store/index';
interface GerencialInfoRegisterProps {
    register: UseFormRegister<Client>;
}

const GerencialInfoRegister: React.FC<GerencialInfoRegisterProps> = ({
    register,
}) => {
    const { excursions, guideUsers } = useStore((state) => ({
        excursions: state.excursions,
        guideUsers: state.GuideUsers,
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

                {/* <Label>
                    <span>Leito:</span>
                    <Select
                        {...register('leito', {
                            required: 'Este campo é obrigatório',
                        })}
                        defaultValue={1}
                    >
                        {leito.map((leito) => (
                            <option key={leito.id} value={leito.id}>
                                {leito.nome}
                            </option>
                        ))}
                    </Select>
                </Label> */}
            </Column>
        </TwoColumns>
    );
};

export default GerencialInfoRegister;
