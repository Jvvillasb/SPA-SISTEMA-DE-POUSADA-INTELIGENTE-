import Styles from "./ListClients.module.scss";
import { useEffect } from "react";
import useStore from "./../../store/index";
import Actions from "./components/Actions/Actions";
import TemplateCard from "../../commons/ui/TemplateCard/TemplateCard";

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
    <div className={Styles.listClientsContainer}>
      <Actions />
      <ul className={Styles.listClientsContent}>
        {clients.map((client) => (
          <li key={client.id}>
            {/* <ClientListItem client={client} /> */}
            <TemplateCard
              title={client.nome}
              subtitle={`${client.cidade} - ${client.estado}`}
              bodyItems={[
                `Celular: ${client.telefone}`,
                `Email: ${client.email}`,
              ]}
              actions={[
                {
                  label: "Editar",
                  onClick: () => {
                    console.log("Editar");
                  },
                },
                {
                  label: "Excluir",
                  onClick: () => {
                    console.log("Excluir");
                  },
                },
              ]}
            ></TemplateCard>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListClients;
