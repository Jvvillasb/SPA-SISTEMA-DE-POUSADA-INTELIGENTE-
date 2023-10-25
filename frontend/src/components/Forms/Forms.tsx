import React from 'react';

import { Client } from '../../commons/types/Client';
import { Column, Form, TwoColumns, FormContent } from './Forms.styles';
import PersonalInfoRegister from './PersonalInfoRegister';
import GerencialInfoRegister from './GerencialInfoRegister';
import { useForm } from 'react-hook-form';

interface ClientFormProps {
    activeStep: number;
}

const ClientForm: React.FC<ClientFormProps> = ({ activeStep }) => {
    const { handleSubmit } = useForm<Client>();

    const onSubmit = (data: Client) => {
        console.log(data);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormContent>
                <TwoColumns>
                    <Column>
                        {activeStep === 0 && <PersonalInfoRegister />}
                        {activeStep === 1 && <GerencialInfoRegister />}
                    </Column>
                </TwoColumns>
            </FormContent>
        </Form>
    );
};

export default ClientForm;
