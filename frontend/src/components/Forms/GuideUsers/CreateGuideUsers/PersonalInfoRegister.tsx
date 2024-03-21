import {
    Column,
    Input,
    Label,
    Select,
    TwoColumns,
    InputMaskStyled,
} from './GuideUsersForm.style';
import { GuideUser } from '../../../../commons/types/GuideUser';
import { UseFormRegister } from 'react-hook-form';

interface PersonalInfoProps {
    register: UseFormRegister<GuideUser>;
}

const PersonalInfoRegister: React.FC<PersonalInfoProps> = ({ register }) => {
    return (
        <TwoColumns>
            <Column>
                <Label>
                    <span>Nome:</span>
                    <Input {...register('nome')} placeholder="Nome" />
                </Label>

                <Label>
                    <span>RG:</span>
                    <InputMaskStyled
                        mask={[
                            /\d/,
                            /\d/,
                            '.',
                            /\d/,
                            /\d/,
                            /\d/,
                            '.',
                            /\d/,
                            /\d/,
                            /\d/,
                            '-',
                            /\d/,
                        ]}
                        guide={false}
                        {...register('documento')}
                        placeholder="Documento"
                        type="text"
                    />
                </Label>

                <Label>
                    <span>Data de Nascimento:</span>
                    <Input
                        {...register('dataNascimento')}
                        placeholder="Data de Nascimento"
                        type="date"
                    />
                </Label>

                <Label>
                    <span>Telefone:</span>
                    <InputMaskStyled
                        mask={[
                            '(',
                            /[1-9]/,
                            /\d/,
                            ')',
                            ' ',
                            /\d/,
                            ' ',
                            /\d/,
                            /\d/,
                            /\d/,
                            /\d/,
                            '-',
                            /\d/,
                            /\d/,
                            /\d/,
                            /\d/,
                        ]}
                        guide={false}
                        {...register('telefone', {
                            required: 'Telefone é obrigatório',
                        })}
                        placeholder="Telefone"
                        type="text"
                    />
                </Label>

                <Label>
                    <span>Gênero:</span>
                    <Select {...register('genero')}>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </Select>
                </Label>
            </Column>
            <Column>
                <Label>
                    <span>Email:</span>
                    <Input {...register('email')} placeholder="Email" />
                </Label>

                <Label>
                    <span>Cidade:</span>
                    <Input {...register('cidade')} placeholder="Cidade" />
                </Label>
                <Label>
                    <span>Estado:</span>
                    <Select {...register('estado')}>
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
                        {...register('nacionalidade')}
                        placeholder="Nacionalidade"
                    />
                </Label>
            </Column>
        </TwoColumns>
    );
};

export default PersonalInfoRegister;
