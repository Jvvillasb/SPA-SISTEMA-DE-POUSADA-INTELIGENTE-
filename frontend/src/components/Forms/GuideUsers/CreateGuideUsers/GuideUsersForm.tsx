import React from 'react';

import { GuideUser } from '../../../../commons/types/GuideUser';
import { Column, Form, TwoColumns, FormContent } from './GuideUsersForm.style';
import PersonalInfoRegister from './PersonalInfoRegister';
import GerencialInfoRegister from './GerencialInfoRegister';
import { useForm } from 'react-hook-form';
import { formatDateToBR } from '../../../../commons/utils/FormatDate';
import useStore from '../../../../store/index';

interface GuideUsersFormProps {
    activeStep: number;
    formRef: React.RefObject<HTMLFormElement>;
}

const validateData = (data: GuideUser) => {
    data.dataEntrada = formatDateToBR(data.dataEntrada);
    data.dataNascimento = formatDateToBR(data.dataNascimento);
};

const GuideUserForm: React.FC<GuideUsersFormProps> = ({
    activeStep,
    formRef,
}) => {
    const { createGuideUser } = useStore((state) => ({
        createGuideUser: state.createGuideUser,
    }));

    const { register, handleSubmit, ...rest } = useForm<GuideUser>();

    const onSubmit = (data: GuideUser) => {
        validateData(data);
        data.leito = 1;
        createGuideUser(data);
        formRef.current?.reset();
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

export default GuideUserForm;
