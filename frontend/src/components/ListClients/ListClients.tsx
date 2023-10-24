import { useEffect } from 'react';
import useStore from './../../store/index';
import Actions from './components/Actions/Actions';
import TemplateCard from '../../commons/ui/TemplateCard/TemplateCard';
import Filters from './components/Filters/Filters';
import Loader from '../../commons/ui/Loader/Loader';
import {
    ClientsSection,
    ListClientsContainer,
    ListClientsContent,
} from './ListClients.style';

const ListClients = () => {
    const { page, clients, loading, fetchClient } = useStore((state) => ({
        page: state.page,
        clients: state.clients,
        loading: state.loading,
        fetchClient: state.fetchClients,
    }));

    useEffect(() => {
        fetchClient();
    }, [page]);

    if (loading) {
        return (
            <ListClientsContainer>
                <Loader message="Carregando Clientes" />
            </ListClientsContainer>
        );
    }

    return (
        <ListClientsContainer>
            <ClientsSection>
                <Filters />
                <ListClientsContent>
                    {clients.map((client) => (
                        <li key={client.id}>
                            <TemplateCard
                                title={client.nome}
                                subtitle={`${client.cidade} - ${client.estado}`}
                                bodyItems={[
                                    `Celular: ${client.telefone}`,
                                    `Email: ${client.email}`,
                                ]}
                                actions={[
                                    {
                                        label: 'Editar',
                                        onClick: () => {
                                            console.log('Editar');
                                        },
                                    },
                                    {
                                        label: 'Excluir',
                                        onClick: () => {
                                            console.log('Excluir');
                                        },
                                    },
                                ]}
                            ></TemplateCard>
                        </li>
                    ))}
                </ListClientsContent>
                <Actions />
            </ClientsSection>
        </ListClientsContainer>
    );
};

export default ListClients;
