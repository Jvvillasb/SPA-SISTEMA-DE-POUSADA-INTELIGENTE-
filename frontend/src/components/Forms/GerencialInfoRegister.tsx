import { Column, Input, Label, TwoColumns } from './Forms.styles';
import { useForm } from 'react-hook-form';
import { Client } from '../../commons/types/Client';

const GerencialInfoRegister = () => {
    const { register } = useForm<Client>();
    return (
        <TwoColumns>
            <Column>
                <Label>
                    <span>Data de Entrada:</span>
                    <Input
                        {...register('dataEntrada')}
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
                    <Input {...register('evento')} placeholder="Evento" />
                </Label>

                <Label>
                    <span>Número da Caravana:</span>
                    <Input
                        {...register('caravana')}
                        placeholder="Número da Caravana"
                        type="number"
                    />
                </Label>
            </Column>
            <Column>
                <Label>
                    <span>Nome da Caravana:</span>
                    <Input
                        {...register('nomeCaravana')}
                        placeholder="Nome da Caravana"
                    />
                </Label>

                <Label>
                    <span>Guia:</span>
                    <Input
                        {...register('guia')}
                        placeholder="Guia"
                        type="number"
                    />
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
