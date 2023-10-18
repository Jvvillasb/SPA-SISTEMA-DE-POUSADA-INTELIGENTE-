import Styles from './ListClients.module.scss';
import { useEffect } from 'react';
import useStore from './../../store/index';
import Actions from './components/Actions/Actions';
import { ClientListItem } from './components/ClientListItem/ClientListItem';

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
            <div className={Styles.listClientsContainer}>
                <p>Carregando os clientes...</p>
            </div>
        );
    }

    return (
<<<<<<< Updated upstream
      <div className={Styles.listClientsContainer}>
        <p>Carregando os clientes...</p>
      </div>
    )
  }

  return (
    <div className={Styles.listClientsContainer}>
      <Actions />
      <ul className={Styles.listClientsContent}>
        {clients.map((client) => (
          <li key={client.id}>
            <ClientListItem client={client} />
          </li>
        ))}
      </ul>
    </div>
  );
}
=======
        <div className={Styles.listClientsContainer}>
            <Filters />
            <ul className={Styles.listClientsContent}>
                {clients.map((client) => (
                    <li key={client.id}>
                        <ClientListItem client={client} />
                    </li>
                ))}
            </ul>
            <Actions />
        </div>
    );
};
>>>>>>> Stashed changes

export default ListClients;
