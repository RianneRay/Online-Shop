import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react';
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product.js'

const HomePage = () => {
  const {fetchProducts, products} = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts])
  console.log("Products", products);
  
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textAlign={"center"}
          bgGradient={"linear(to-r, #D1C6B1, #A68F63)"}
          bgClip={"text"}
        > Explore Our Collection
				</Text>
				
				<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
					No products to display{" "}
					<Link to={"/create"}>
						<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
							Create a product
						</Text>
					</Link>
				</Text>
      </VStack>
    </Container>);
};

export default HomePage;