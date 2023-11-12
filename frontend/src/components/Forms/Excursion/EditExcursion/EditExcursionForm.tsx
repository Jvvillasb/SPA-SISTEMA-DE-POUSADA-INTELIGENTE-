import React from 'react';

import { Excursion } from '../../../../commons/types/Excursion';
import {
    Column,
    Form,
    TwoColumns,
    FormContent,
} from '../../Client/CreateClient/Forms.styles';
import { useForm } from 'react-hook-form';
import useStore from '../../../../store/index';
import EditExcursionInfoRegister from './EditExcursionInfoRegister';

interface EditExcursionFormProps {
    activeStep: number;
    formRef: React.RefObject<HTMLFormElement>;
    Excursion: Excursion;
}

const EditExcursionForm: React.FC<EditExcursionFormProps> = ({
    formRef,
    Excursion,
}) => {
    const { updateExcursion } = useStore((state) => ({
        updateExcursion: state.updateExcursion,
    }));

    const { register, handleSubmit, ...rest } = useForm<Excursion>();

    const onSubmit = (data: Excursion) => {
        updateExcursion(data, Excursion.id);
    };

    return (
        <Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <FormContent>
                <TwoColumns>
                    <Column>
                        <EditExcursionInfoRegister
                            register={register}
                            {...rest}
                            excursion={Excursion}
                        />
                    </Column>
                </TwoColumns>
            </FormContent>
        </Form>
    );
};

export default EditExcursionForm;
