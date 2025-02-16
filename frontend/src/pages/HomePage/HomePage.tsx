import { Box, Heading, Container, Text, Button, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import theme from '../../theme';

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Container maxW={'3xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}
                    >
                        Bem vindo ao <br />
                        <Text as={'span'} color={theme.colors.customGreen}>
                            Sistema de Pousada Inteligente
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                        Bem vindo ao melhor Gestor para sua pousada. Com ele
                        você pode gerenciar suas reservas, quartos, clientes e
                        muito mais.
                    </Text>
                    <Stack
                        direction={'column'}
                        spacing={3}
                        align={'center'}
                        alignSelf={'center'}
                        position={'relative'}
                    >
                        <Button
                            colorScheme={'green'}
                            bg={'green.400'}
                            rounded={'full'}
                            px={6}
                            _hover={{
                                bg: 'green.500',
                            }}
                            onClick={() => {
                                navigate('/hospedes');
                            }}
                        >
                            Ir para Listagem de Hóspedes
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
};

export default HomePage;
