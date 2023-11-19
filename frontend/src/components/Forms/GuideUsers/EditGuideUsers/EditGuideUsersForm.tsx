import React from 'react';

import { GuideUser } from '../../../../commons/types/GuideUser';
import {
    Column,
    Form,
    TwoColumns,
    FormContent,
} from '../EditGuideUsers/EditGuideUsersForm.style';
import { useForm } from 'react-hook-form';
import useStore from '../../../../store/index';
import EditPersonalInfoRegister from './EditPersonalInfoRegister';
import EditGerencialInfoRegister from './EditGerencialInfoRegister';
import { formatDateToBR } from '../../../../commons/utils/FormatDate';

interface EditGuideUserFormProps {
    activeStep: number;
    formRef: React.RefObject<HTMLFormElement>;
    GuideUser: GuideUser;
}

const EditGuideUserForm: React.FC<EditGuideUserFormProps> = ({
    activeStep,
    formRef,
    GuideUser,
}) => {
    const { updateGuideUser } = useStore((state) => ({
        updateGuideUser: state.updateGuideUser,
    }));

    const { register, handleSubmit, ...rest } = useForm<GuideUser>();

    const validateData = (data: GuideUser) => {
        data.dataEntrada = formatDateToBR(data.dataEntrada);
        data.dataNascimento = formatDateToBR(data.dataNascimento);
        data.dataSaida = formatDateToBR(data.dataSaida);
    };

    const onSubmit = (data: GuideUser) => {
        validateData(data);
        updateGuideUser(data, GuideUser.id);
        formRef.current?.reset();
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
                                GuideUser={GuideUser}
                            />
                        )}
                        {activeStep === 1 && (
                            <EditGerencialInfoRegister
                                register={register}
                                GuideUser={GuideUser}
                            />
                        )}
                    </Column>
                </TwoColumns>
            </FormContent>
        </Form>
    );
};

export default EditGuideUserForm;
