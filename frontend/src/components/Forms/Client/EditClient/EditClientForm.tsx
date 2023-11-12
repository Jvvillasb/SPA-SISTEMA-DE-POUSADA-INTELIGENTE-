import React from 'react';

import { Client } from '../../../../commons/types/Client';
import {
    Column,
    Form,
    TwoColumns,
    FormContent,
} from '../CreateClient/Forms.styles';
import { useForm } from 'react-hook-form';
import useStore from '../../../../store/index';
import EditPersonalInfoRegister from './EditPersonalInfoRegister';
import EditGerencialInfoRegister from './EditGerencialInfoRegister';
import { formatDateToBR } from '../../../../commons/utils/FormatDate';

interface EditClientFormProps {
    activeStep: number;
    formRef: React.RefObject<HTMLFormElement>;
    Client: Client;
}

const EditClientForm: React.FC<EditClientFormProps> = ({
    activeStep,
    formRef,
    Client,
}) => {
    const { updateClient } = useStore((state) => ({
        updateClient: state.updateClient,
    }));

    const { register, handleSubmit, ...rest } = useForm<Client>();

    const validateData = (data: Client) => {
        data.dataEntrada = formatDateToBR(data.dataEntrada);
        data.dataNascimento = formatDateToBR(data.dataNascimento);
        data.dataSaida = formatDateToBR(data.dataSaida);
    };

    const onSubmit = (data: Client) => {
        validateData(data);
        updateClient(data, Client.id);
    };

    return (
        <Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <FormContent>
                <TwoColumns>
                    <Column>
                        {activeStep === 0 && (
                            <EditPersonalInfoRegister
                                register={register}
                                {...rest}
                                client={Client}
                            />
                        )}
                        {activeStep === 1 && (
                            <EditGerencialInfoRegister
                                register={register}
                                client={Client}
                            />
                        )}
                    </Column>
                </TwoColumns>
            </FormContent>
        </Form>
    );
};

export default EditClientForm;
