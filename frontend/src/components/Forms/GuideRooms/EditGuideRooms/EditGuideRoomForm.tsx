import React from 'react';

import { GuideRoom } from '../../../../commons/types/GuideRoom';
import {
    Column,
    Form,
    TwoColumns,
    FormContent,
} from '../../Client/CreateClient/Forms.styles';
import { useForm } from 'react-hook-form';
import useStore from '../../../../store/index';
import EditGuideRoomInfoRegister from './EditGuideRoomInfoRegister';
import EditGuideRoomBedroomRegister from './EditGuideRoomBedroomRegister';

interface EditGuideRoomFormProps {
    activeStep: number;
    formRef: React.RefObject<HTMLFormElement>;
    GuideRoom: GuideRoom;
}

const EditGuideRoomForm: React.FC<EditGuideRoomFormProps> = ({
    formRef,
    GuideRoom,
    activeStep,
}) => {
    const { updateGuideRooms } = useStore((state) => ({
        updateGuideRooms: state.updateGuideRooms,
    }));

    const { register, handleSubmit } = useForm<GuideRoom>();

    const onSubmit = (data: GuideRoom) => {
        updateGuideRooms(data, GuideRoom.id);
    };

    return (
        <Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <FormContent>
                <TwoColumns>
                    <Column>
                        {activeStep === 0 && (
                            <EditGuideRoomInfoRegister
                                register={register}
                                guideRoom={GuideRoom}
                            />
                        )}
                        {activeStep === 1 && (
                            <EditGuideRoomBedroomRegister
                                guideRoom={GuideRoom}
                            />
                        )}
                    </Column>
                </TwoColumns>
            </FormContent>
        </Form>
    );
};

export default EditGuideRoomForm;
