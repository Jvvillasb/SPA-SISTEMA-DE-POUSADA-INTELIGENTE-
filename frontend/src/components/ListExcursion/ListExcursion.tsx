import { useEffect } from 'react';
import useStore from './../../store/index';
import TemplateCard from '../../commons/ui/TemplateCard/TemplateCard';
import Loader from '../../commons/ui/Loader/Loader';
import {
    ListExcursionContainer,
    ListExcursionContent,
    ExcursionSection,
} from './ListExcursion.style';

const ListExcursion: React.FC = () => {
    const { page, excursions, loading, fetchExcursions } = useStore(
        (state) => ({
            page: state.page,
            excursions: state.excursions,
            loading: state.loading,
            fetchExcursions: state.fetchExcursions,
        })
    );

    useEffect(() => {
        fetchExcursions();
    }, [page]);

    if (loading) {
        return (
            <ListExcursionContainer>
                <Loader message="Carregando Caravanas" />
            </ListExcursionContainer>
        );
    }

    return (
        <ListExcursionContainer>
            <ExcursionSection>
                <ListExcursionContent>
                    {excursions.map((excursions) => (
                        <li key={excursions.nome}>
                            <TemplateCard
                                title={excursions.nome}
                                subtitle={`${excursions.cidade}`}
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
                                bodyItems={[]}
                            ></TemplateCard>
                        </li>
                    ))}
                </ListExcursionContent>
            </ExcursionSection>
        </ListExcursionContainer>
    );
};

export default ListExcursion;
