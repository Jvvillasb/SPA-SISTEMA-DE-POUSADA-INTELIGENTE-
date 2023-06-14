import { Box } from '@chakra-ui/react';
import Styles from './ListClients.module.scss';

const ListClients = () => {
  const listClients = [{
    id: 1,
    name: 'João',
    cpf: '000.000.000-00',
    phone: '(00) 00000-0000',
  },
  {
    id: 2,
    name: 'Maria',
    cpf: '000.000.000-00',
    phone: '(00) 00000-0000',
  },
  {
    id: 3,
    name: 'José',
    cpf: '000.000.000-00',
    phone: '(00) 00000-0000',
  },
  {
    id: 4,
    name: 'Pedro',
    cpf: '000.000.000-00',
    phone: '(00) 00000-0000',
  }];

  return (
    <div className={Styles.listClientsContainer}>
      <div className={Styles.listClientsContent}>
        {listClients.map((client) => (
          <div className={Styles.clientCard} key={client.id}>
            <div className={Styles.clientCardInfo}>
              <img src="src\assets\client.png" alt="foto do cliente" />
              <Box borderLeft="1px solid #E1E1E1" pl={2} display={'flex'} flexDir={'column'} justifyContent={'center'} h={'130px'}>
                <h2>Nome do Cliente: {client.name}</h2>
                <h3>CPF: {client.cpf}</h3>
                <h3>Telefone: {client.phone}</h3>
              </Box>
            </div>
            <div className={Styles.clientCardButtons}>
              <button className={Styles.clientCardButtonEdit}>Editar</button>
              <button className={Styles.clientCardButtonDelete}>Excluir</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ListClients;
