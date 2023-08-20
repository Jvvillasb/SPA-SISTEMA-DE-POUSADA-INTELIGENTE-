import Styles from './ClientListItem.module.scss';

import { ClientListItemProps } from "./ClientListItem.types";

export const ClientListItem: React.FC<ClientListItemProps> = ({ client }) => {
    return (
        <div className={Styles.clientListItem}>
            <div className={Styles.clientListItemContent}>
                <img src="src\assets\client.png" alt="Foto do cliente" />
                <div className={Styles.clientListItemInfo}>
                    <h2>Nome do Cliente: {client.nome}</h2>
                    <h3>CPF: {client.documento}</h3>
                    <h3>Telefone: {client.telefone}</h3>
                </div>
            </div>
            <div className={Styles.clientListItemButtons}>
                <button className={Styles.clientListItemButtonEdit}>Editar</button>
                <button className={Styles.clientListItemButtonDelete}>Excluir</button>
            </div>
        </div>
    )
};
