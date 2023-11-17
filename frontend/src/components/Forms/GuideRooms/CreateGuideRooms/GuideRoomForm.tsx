import React from 'react';
import { Column, Form, TwoColumns, FormContent } from './GuideRoomForm.style';
import GuideRoomInfoRegister from './GuideRoomInfoRegister';
import { useForm } from 'react-hook-form';
import useStore from '../../../../store/index';
import { GuideRoom } from '../../../../commons/types/GuideRoom';
import GuideRoomBedroomRegister from './GuideRoomBedroomRegister';

interface GuideRoomFormProps {
    activeStep: number;
    formRef: React.RefObject<HTMLFormElement>;
}

const GuideRoomForm: React.FC<GuideRoomFormProps> = ({
    formRef,
    activeStep,
}) => {
    const { createGuideRooms } = useStore((state) => ({
        createGuideRooms: state.createGuideRooms,
    }));

    const { register, handleSubmit, ...rest } = useForm<GuideRoom>();

    const onSubmit = (data: GuideRoom) => {
        activeStep = 0;
        formRef.current?.reset();
        createGuideRooms(data);
    };

    return (
        <Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <FormContent>
                <TwoColumns>
                    <Column>
                        {activeStep === 0 && (
                            <GuideRoomInfoRegister
                                register={register}
                                {...rest}
                            />
                        )}
                        {activeStep === 1 && <GuideRoomBedroomRegister />}
                    </Column>
                </TwoColumns>
            </FormContent>
        </Form>
    );
};

export default GuideRoomForm;
