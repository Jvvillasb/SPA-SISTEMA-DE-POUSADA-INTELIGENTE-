import {
    Card as ChakraCard,
    CardHeader,
    CardBody,
    CardFooter,
    Flex,
    Avatar,
    Box,
    Heading,
    Text,
    IconButton
} from '@chakra-ui/react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import {CardProps} from '../../types/Card';

const Card = ({ client }: CardProps ) => {
    console.log(client);
    return (
        <ChakraCard maxW='md'>
            <CardHeader>
                <Flex gap='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name={client.nome} src='https://bit.ly/sage-adebayo' />

                        <Box>
                            <Heading size='sm'>{client.nome}</Heading>
                            <Text>{client.cidade} - {client.estado}</Text>
                        </Box>
                    </Flex>
                    <IconButton
                        variant='ghost'
                        colorScheme='gray'
                        aria-label='See menu'
                        icon={<BsThreeDotsVertical />}
                    />
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>
                    Telefone {client.telefone}
                </Text>
                <Text>
                    Email: {client.email}
                </Text>
            </CardBody>

            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                    '& > button': {
                        minW: '136px',
                    },
                }}
            >
            </CardFooter>
        </ChakraCard>
    )
}

export default Card;