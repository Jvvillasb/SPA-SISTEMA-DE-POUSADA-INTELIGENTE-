import React from 'react';

import { Client } from '../../../../commons/types/Client';
import { Column, Form, TwoColumns, FormContent } from './Forms.styles';
import PersonalInfoRegister from './PersonalInfoRegister';
import GerencialInfoRegister from './GerencialInfoRegister';
import { useForm } from 'react-hook-form';
import { formatDateToBR } from '../../../../commons/utils/FormatDate';
import useStore from '../../../../store/index';
interface ClientFormProps {
    activeStep: number;
    formRef?: React.RefObject<HTMLFormElement>;
}

const validateData = (data: Client) => {
    data.dataEntrada = formatDateToBR(data.dataEntrada);
    data.dataNascimento = formatDateToBR(data.dataNascimento);
};

const CreateClientForm: React.FC<ClientFormProps> = ({
    activeStep,
    formRef,
}) => {
    const { createClient } = useStore((state) => ({
        createClient: state.createClients,
    }));

    const { register, handleSubmit, ...rest } = useForm<Client>();

    const onSubmit = (data: Client) => {
        validateData(data);
        data.leito = 1;
        createClient(data);

        if (formRef) {
            formRef.current?.reset();
        }
    };

    return (
        <Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <FormContent>
                <TwoColumns>
                    <Column>
                        {activeStep === 0 && (
                            <PersonalInfoRegister
                                register={register}
                                {...rest}
                            />
                        )}
                        {activeStep === 1 && (
                            <GerencialInfoRegister register={register} />
                        )}
                    </Column>
                </TwoColumns>
            </FormContent>
        </Form>
    );
};

export default CreateClientForm;
