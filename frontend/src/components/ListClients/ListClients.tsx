import Styles from './ListClients.module.scss';
import { useEffect } from 'react';
import useStore from './../../store/index';
import Actions from './components/Actions/Actions';
import { ClientListItem } from './components/ClientListItem/ClientListItem';
import Card from '../../commons/ui/Card/Card';

const ListClients = () => {
  const { page, clients, loading, fetchClient } = useStore(state => ({
    page: state.page,
    clients: state.clients,
    loading: state.loading,
    fetchClient: state.fetchClients
  }));

  useEffect(() => {
    fetchClient();
  }, [page]);

  if (loading) {
    return (
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
            {/* <ClientListItem client={client} /> */}
            <Card client={client}></Card>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListClients;
