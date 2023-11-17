import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Client } from '../../../../commons/types/Client';
import { Bedroom } from '../../../../commons/types/Bedroom';
import { GuideRoom } from '../../../../commons/types/GuideRoom';
import useStore from '../../../../store/index';
import {
    Column,
    FormCheckin,
    TwoColumns,
    FormContent,
    Label,
    Select,
} from './CheckInBedroom.styles';
import { checkinClient } from '../../services/client.service';
import useCustomToast from '../../../../commons/hooks/useCustomToast/useCustomToast';
import { EmptyStateSection } from '../../ListClients.style';
import IllustratedState from '../../../../commons/ui/IllustratedState/IllustratedState';
import Loader from '../../../../commons/ui/Loader/Loader';

interface CheckInBedroomProps {
    client: Client;
    formRef: React.RefObject<HTMLFormElement>;
}

const CheckInBedroom: React.FC<CheckInBedroomProps> = ({ client, formRef }) => {
    const [availableBeds, setAvailableBeds] = useState<Bedroom[]>([]);
    const { register, handleSubmit, watch } = useForm<{
        selectedRoom: string;
        selectedBed: number;
    }>();
    const { fetchGuideRooms, guideRooms, loadingGuideRooms } = useStore(
        (state) => ({
            fetchGuideRooms: state.fetchGuideRoomsBySearch,
            guideRooms: state.guideRoom as GuideRoom[],
            loadingGuideRooms: state.loadingGuideRoom,
        })
    );

    const { showCustomToast } = useCustomToast();

    const selectedRoomId = watch('selectedRoom');

    useEffect(() => {
        fetchGuideRooms();
    }, [fetchGuideRooms]);

    useEffect(() => {
        const selectedRoom = guideRooms.find(
            (room) => room.id.toString() === selectedRoomId
        );
        setAvailableBeds(selectedRoom?.leitos || []);
    }, [selectedRoomId, guideRooms]);

    const onSubmit = (data: { selectedBed: number }) => {
        console.log(data);
        checkinClient(client.id, data.selectedBed)
            .then(() => {
                showCustomToast({
                    title: 'Check-in realizado com sucesso!',
                    description: 'O Check-in foi realizado com sucesso.',
                    status: 'success',
                });
            })
            .catch(() => {
                showCustomToast({
                    title: 'Erro ao realizar o check-in!',
                    description:
                        'Ocorreu um erro ao realizar o check-in. Tente novamente mais tarde.',
                    status: 'error',
                });
            });
    };

    return (
        <FormCheckin ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <FormContent>
                {!loadingGuideRooms && (
                    <TwoColumns>
                        <Column>
                            <Label>
                                Selecione qual quarto o cliente irá ficar:
                            </Label>
                            <Select {...register('selectedRoom')}>
                                {guideRooms.map((guideRoom) => (
                                    <option
                                        key={guideRoom.id}
                                        value={guideRoom.id}
                                    >
                                        {guideRoom.nome}
                                    </option>
                                ))}
                            </Select>
                            {availableBeds.length > 0 && (
                                <>
                                    <Label>Selecione o leito:</Label>
                                    <Select {...register('selectedBed')}>
                                        {availableBeds.map((bed) => (
                                            <option key={bed.id} value={bed.id}>
                                                Leito número: {bed.numero} -{' '}
                                                {bed.status}
                                            </option>
                                        ))}
                                    </Select>
                                </>
                            )}
                            {availableBeds.length === 0 && (
                                <EmptyStateSection>
                                    <IllustratedState
                                        title="Não existe nenhum leito ainda!"
                                        subtitle="Verifique na aba de quartos a criação de leitos para esse quarto específico."
                                    />
                                </EmptyStateSection>
                            )}
                        </Column>
                    </TwoColumns>
                )}
                {loadingGuideRooms && <Loader message="Carregando Leitos" />}
            </FormContent>
        </FormCheckin>
    );
};

export default CheckInBedroom;
