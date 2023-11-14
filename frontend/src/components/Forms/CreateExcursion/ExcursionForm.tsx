import React from 'react';
import { Column, Form, TwoColumns, FormContent } from './ExcursionForm.style';
import ExcursionInfoRegister from './ExcursionInfoRegister';
import { useForm } from 'react-hook-form';
import useStore from '../../../store/index';
import { Excursion } from '../../../commons/types/Excursion';

interface ExcursionFormProps {
    activeStep: number;
    formRef: React.RefObject<HTMLFormElement>;
}

const ExcursionForm: React.FC<ExcursionFormProps> = ({ formRef }) => {
    const { createExcursions } = useStore((state) => ({
        createExcursions: state.createExcursions,
    }));

    const { register, handleSubmit, ...rest } = useForm<Excursion>();

    const onSubmit = (data: Excursion) => {
        createExcursions(data);
    };

    return (
        <Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <FormContent>
                <TwoColumns>
                    <Column>
                        <ExcursionInfoRegister register={register} {...rest} />
                    </Column>
                </TwoColumns>
            </FormContent>
        </Form>
    );
};

export default ExcursionForm;
