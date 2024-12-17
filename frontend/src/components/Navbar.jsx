import { Link } from 'react-router-dom';
import { Container, Flex, Text, HStack, Button, useColorMode } from '@chakra-ui/react';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { CiCloudMoon, CiCloudSun } from 'react-icons/ci';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  
  return <Container maxW={"1140px"} px={4}>
    <Flex
    h={16}
    alignItems={'center'}
    justifyContent={'space-between'}
    flexDir={{
      base: 'column',
      sm: 'row'
    }}
    >
      <Text
        fontSize={{ base: "22", sm: "28" }}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        textAlign={"center"}
        bgGradient={"linear(to-r, #D1C6B1, #A68F63)"}
        bgClip={"text"}
      >
        <Link to={"/"}>The Shop Hive 🐝</Link>
      </Text>
      
      <HStack spacing={2} alignItems={"center"}>
        <Link to={"/create"}>
        <Button>
          <PlusSquareIcon fontSize={20}/>
        </Button>
        </Link>
        <Button onClick={toggleColorMode}>{ colorMode === "light" ? <CiCloudMoon /> : <CiCloudSun size="20" />}
        </Button>
      </HStack>
    </Flex>
  </Container>
};

export default Navbar;