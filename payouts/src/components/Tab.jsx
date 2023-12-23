import React from 'react'
import {
    Box,
    Flex,
    Tr,
    Th,
    Td,
    Thead,
    Table,
    Tbody,
    TableContainer,
  } from "@chakra-ui/react";

const Tab = () => {
  return (
    <TableContainer mt="10px">
    <Table variant="simple">
      <Thead p="5px" fontSize="14px">
        <Tr bg="#F2F2F2">
          <Th>
            <Box ml="10px" w="25px" h="100%">
              <i class="fa-solid fa-caret-down"></i>
            </Box>
          </Th>
          <Th></Th>
          <Th>Transaction ID</Th>
          <Th>Order amount</Th>
          <Th isNumeric>Transaction fees</Th>
          <Th isNumeric>Total</Th>
        </Tr>
      </Thead>
      <Tbody fontSize="14px" bg="white">
        <Tr>
          <Td></Td>
          <Flex>
            <Box
              mt="22px"
              mr="-20px"
              w="8px"
              h="8px"
              borderRadius="50%"
              bg="green"
            >
           
            </Box>
            <Td>Processing</Td>
          </Flex>

          <Td isNumeric>131634495747</Td>
          <Td isNumeric>₹10,125.00</Td>
          <Td isNumeric>₹1,125.00</Td>
          <Td isNumeric>₹9,12.00</Td>
        </Tr>
        <Tr>
          <Td></Td>
          <Flex>
            <Box
              mt="22px"
              mr="-20px"
              w="8px"
              h="8px"
              borderRadius="50%"
              bg="green"
            >
           
            </Box>
            <Td>Processing</Td>
          </Flex>

          <Td isNumeric>131634495747</Td>
          <Td isNumeric>₹10,125.00</Td>
          <Td isNumeric>₹1,125.00</Td>
          <Td isNumeric>₹9,12.00</Td>
        </Tr>
        <Tr>
          <Td></Td>
          <Flex>
            <Box
              mt="22px"
              mr="-20px"
              w="8px"
              h="8px"
              borderRadius="50%"
              bg="green"
            >
           
            </Box>
            <Td>Processing</Td>
          </Flex>

          <Td isNumeric>131634495747</Td>
          <Td isNumeric>₹10,125.00</Td>
          <Td isNumeric>₹1,125.00</Td>
          <Td isNumeric>₹9,12.00</Td>
        </Tr>
        <Tr>
          <Td></Td>
          <Flex>
            <Box
              mt="22px"
              mr="-20px"
              w="8px"
              h="8px"
              borderRadius="50%"
              bg="green"
            >
           
            </Box>
            <Td>Processing</Td>
          </Flex>

          <Td isNumeric>131634495747</Td>
          <Td isNumeric>₹10,125.00</Td>
          <Td isNumeric>₹1,125.00</Td>
          <Td isNumeric>₹9,12.00</Td>
        </Tr>
        <Tr>
          <Td></Td>
          <Flex>
            <Box
              mt="22px"
              mr="-20px"
              w="8px"
              h="8px"
              borderRadius="50%"
              bg="green"
            >
           
            </Box>
            <Td>Processing</Td>
          </Flex>

          <Td isNumeric>131634495747</Td>
          <Td isNumeric>₹10,125.00</Td>
          <Td isNumeric>₹1,125.00</Td>
          <Td isNumeric>₹9,12.00</Td>
        </Tr>
        <Tr>
          <Td></Td>
          <Flex>
            <Box
              mt="22px"
              mr="-20px"
              w="8px"
              h="8px"
              borderRadius="50%"
              bg="green"
            >
           
            </Box>
            <Td>Processing</Td>
          </Flex>

          <Td isNumeric>131634495747</Td>
          <Td isNumeric>₹10,125.00</Td>
          <Td isNumeric>₹1,125.00</Td>
          <Td isNumeric>₹9,12.00</Td>
        </Tr>
        <Tr>
          <Td></Td>
          <Flex>
            <Box
              mt="22px"
              mr="-20px"
              w="8px"
              h="8px"
              borderRadius="50%"
              bg="green"
            >
           
            </Box>
            <Td>Processing</Td>
          </Flex>

          <Td isNumeric>131634495747</Td>
          <Td isNumeric>₹10,125.00</Td>
          <Td isNumeric>₹1,125.00</Td>
          <Td isNumeric>₹9,12.00</Td>
        </Tr>
      </Tbody>
    </Table>
  </TableContainer>
  )
}

export default Tab