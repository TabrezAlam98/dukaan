import React from "react";
import { Box, Flex, Image, Text,Spacer } from "@chakra-ui/react";

const Payout = () => {
  return (
    <Flex w="100%" border="1px" borderColor="green">

      {/* ............... Nav Box........... */}
      <Box w="15%" height="100%" pb="15px" border="1px" borderColor="gray.200" bg="#1E2640" color="#FFFFFF">
        <Flex w="90%" h="35px" m="auto" mt="10px" border="1px" borderColor="yellow">
          <Box>
            <Image
              w="35px"
              h="100%"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </Box>
          <Spacer/>
          <Box ml="-50px">
            <Text fontSize="14px" lineHeight='20px' fontWeight="500" ml='-2px'>Nishyan</Text>
            <Text fontSize="11px"><a href=""><u>Visit Store</u></a></Text>
          </Box>
          <Spacer/>
          <Box mt="3px">
            <i  class="fa-solid fa-angle-down"></i>
          </Box>
        </Flex>
        <Box w="100%" h="100%" m="auto" mt="10px" border="1px" borderColor="red.500">
           <Flex  p="8px 16px 8px 16px"  fontSize="14px" lineHeight='20px' fontWeight="500">
           <i  class="fa-solid fa-house" w="20px" h="20px"></i>
            <Text ml="10px" mt="-5px">Home</Text>
           </Flex>
           <Flex  p="8px 16px 8px 16px"  fontSize="14px" lineHeight='20px' fontWeight="500">
           <i class="fa-solid fa-suitcase-rolling" w="20px" h="20px"></i>
            <Text ml="10px" mt="-5px">Orders</Text>
           </Flex>
           <Flex  p="8px 16px 8px 16px"  fontSize="14px" lineHeight='20px' fontWeight="500">
           <i class="fa-solid fa-bars" w="20px" h="20px"></i>
            <Text ml="10px" mt="-5px">Products</Text>
           </Flex>
           <Flex  p="8px 16px 8px 16px"  fontSize="14px" lineHeight='20px' fontWeight="500">
           <i class="fa-solid fa-truck" w="20px" h="20px"></i>
            <Text ml="10px" mt="-5px">Delivery</Text>
           </Flex>
           <Flex  p="8px 16px 8px 16px"  fontSize="14px" lineHeight='20px' fontWeight="500">
           <i class="fa-solid fa-suitcase" w="20px" h="20px"></i>
            <Text ml="10px" mt="-5px">Marketing</Text>
           </Flex>
           <Flex  p="8px 16px 8px 16px"  fontSize="14px" lineHeight='20px' fontWeight="500">
           <i class="fa-solid fa-chart-simple" w="20px" h="20px"></i>
            <Text ml="10px" mt="-5px">Analytics</Text>
           </Flex>
           <Flex w="90%" m="auto" borderRadius="5px"  p="8px 16px 8px 16px" bg="gray.600"  fontSize="14px" lineHeight='20px' fontWeight="500">
           <i class="fa-solid fa-credit-card" w="20px" h="20px"></i>
            <Text ml="10px" mt="-5px">Payouts</Text>
           </Flex>
           <Flex  p="8px 16px 8px 16px"  fontSize="14px" lineHeight='20px' fontWeight="500">
           <i class="fa-solid fa-gear" w="20px" h="20px"></i>
            <Text ml="10px" mt="-5px">Discount</Text>
           </Flex>
           <Flex  p="8px 16px 8px 16px"  fontSize="14px" lineHeight='20px' fontWeight="500">
           <i class="fa-regular fa-user" w="20px" h="20px"></i>
            <Text ml="10px" mt="-5px">Audience</Text>
           </Flex>
           <Flex  p="8px 16px 8px 16px"  fontSize="14px" lineHeight='20px' fontWeight="500">
           <i class="fa-solid fa-palette" w="20px" h="20px"></i>
            <Text ml="10px" mt="-5px">Apearance</Text>
           </Flex>
           <Flex  p="8px 16px 8px 16px"  fontSize="14px" lineHeight='20px' fontWeight="500">
           <i class="fa-solid fa-bolt" w="20px" h="20px"></i>
            <Text ml="10px" mt="-5px">Plugins</Text>
           </Flex>
           <Flex bg="gray.600"  w="90%"  m="auto" mt="90px" p="8px" border="1px" borderRadius="5px">
          <Box>
          <i class="fa-solid fa-wallet" w="23px" h="20px"></i>
          </Box>
          {/* <Spacer /> */}
          <Box>
            <Text  fontSize="12px"  ml="15px">Available credits</Text>
            <Text  fontSize="14px"  mr="30px">222.10</Text>
          </Box>
        
        </Flex>
        </Box>
        
      </Box>
     
     {/* ..........Main Box.......... */}
      <Box w="85%" border="1px" borderColor="red.200">
      <Flex border="1px" borderColor="red.400">
        <Box w="30%">
          <Text>How it works</Text>
        </Box>
        <Box></Box>
        <Box></Box>
      </Flex>
      </Box>
    </Flex>
  );
};

export default Payout;
