import {
    Column,
    Label,
    Select,
    TwoColumns,
    Input,
    InputMaskStyled,
} from '../CreateClient/Forms.styles';
import { Client } from '../../../commons/types/Client';
import { UseFormRegister } from 'react-hook-form';
import { formatDateToISO } from '../../../commons/utils/FormatDate';

interface EditPersonalInfoProps {
    register: UseFormRegister<Client>;
    client: Client;
}

const EditPersonalInfoRegister: React.FC<EditPersonalInfoProps> = ({
    register,
    client,
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
                        defaultValue={client.nome}
                    />
                </Label>

                <Label>
                    <span>RG:</span>
                    <InputMaskStyled
                        mask="99.999.999-*"
                        {...register('documento', {
                            required: 'RG é obrigatório',
                        })}
                        value={client.documento}
                        type="text"
                    />
                </Label>

                <Label>
                    <span>Data de Nascimento:</span>
                    <Input
                        {...register('dataNascimento', {
                            required: 'Data de nascimento é obrigatória',
                        })}
                        defaultValue={formatDateToISO(client.dataNascimento)}
                        type="date"
                    />
                </Label>

                <Label>
                    <span>Telefone:</span>
                    <InputMaskStyled
                        mask="(99) 99999-9999"
                        {...register('telefone', {
                            required: 'Telefone é obrigatório',
                        })}
                        defaultValue={client.telefone}
                        type="tel"
                    />
                </Label>

                <Label>
                    <span>Gênero:</span>
                    <Select
                        {...register('genero', {
                            required: 'Gênero é obrigatório',
                        })}
                        defaultValue={client.genero}
                    >
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </Select>
                </Label>
            </Column>
            <Column>
                <Label>
                    <span>Email:</span>
                    <Input
                        {...register('email', {
                            required: 'Email é obrigatório',
                            pattern:
                                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        })}
                        defaultValue={client.email}
                    />
                </Label>

                <Label>
                    <span>Cidade:</span>
                    <Input
                        {...register('cidade', {
                            required: 'Cidade é obrigatória',
                        })}
                        defaultValue={client.cidade}
                    />
                </Label>

                <Label>
                    <span>Estado:</span>
                    <Select
                        {...register('estado', {
                            required: 'Estado é obrigatório',
                        })}
                        defaultValue={client.estado.toLowerCase()}
                    >
                        <option value="estado">Selecione o Estado</option>
                        <option value="ac">Acre</option>
                        <option value="al">Alagoas</option>
                        <option value="am">Amazonas</option>
                        <option value="ap">Amapá</option>
                        <option value="ba">Bahia</option>
                        <option value="ce">Ceará</option>
                        <option value="df">Distrito Federal</option>
                        <option value="es">Espírito Santo</option>
                        <option value="go">Goiás</option>
                        <option value="ma">Maranhão</option>
                        <option value="mt">Mato Grosso</option>
                        <option value="ms">Mato Grosso do Sul</option>
                        <option value="mg">Minas Gerais</option>
                        <option value="pa">Pará</option>
                        <option value="pb">Paraíba</option>
                        <option value="pr">Paraná</option>
                        <option value="pe">Pernambuco</option>
                        <option value="pi">Piauí</option>
                        <option value="rj">Rio de Janeiro</option>
                        <option value="rn">Rio Grande do Norte</option>
                        <option value="ro">Rondônia</option>
                        <option value="rs">Rio Grande do Sul</option>
                        <option value="rr">Roraima</option>
                        <option value="sc">Santa Catarina</option>
                        <option value="se">Sergipe</option>
                        <option value="sp">São Paulo</option>
                        <option value="to">Tocantins</option>
                    </Select>
                </Label>

                <Label>
                    <span>Nacionalidade:</span>
                    <Input
                        {...register('nacionalidade', {
                            required: 'Nacionalidade é obrigatória',
                        })}
                        defaultValue={client.nacionalidade}
                    />
                </Label>
            </Column>
        </TwoColumns>
    );
};

export default EditPersonalInfoRegister;
