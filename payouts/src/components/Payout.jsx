import React from "react";
import {
  Box,
  Flex,
  Text,
  Spacer,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";

import Tab from "./Tab";

const Payout = () => {
  return (
    <Flex w="100%" border="1px" borderColor="green">
      {/* ............... Nav Box........... */}
      <Box
        w="15%"
        height="100%"
        pb="15px"
        position="fixed"
        bg="#1E2640"
        color="#FFFFFF"
      >
        <Flex w="90%" h="35px" m="auto" mt="10px">
          <Box w="35px" bg="white" borderRadius="5px">
            <Text
              fontSize="8px"
              color="red"
              textAlign="center"
              mt="10px"
              fontWeight="700"
            >
              {" "}
              Nishyan
            </Text>
          </Box>
          <Spacer />
          <Box ml="-50px">
            <Text fontSize="14px" lineHeight="20px" fontWeight="500" ml="-2px">
              Nishyan
            </Text>
            <Text fontSize="11px">
              <a href="">
                <u>Visit Store</u>
              </a>
            </Text>
          </Box>
          <Spacer />
          <Box mt="3px">
            <i class="fa-solid fa-angle-down"></i>
          </Box>
        </Flex>
        <Box w="100%" h="600px" m="auto" mt="10px" >
          <Flex
            p="8px 16px 8px 16px"
            fontSize="14px"
            lineHeight="20px"
            fontWeight="500"
          >
            <i class="fa-solid fa-house" w="20px" h="20px"></i>
            <Text ml="10px" mt="-5px">
              Home
            </Text>
          </Flex>
          <Flex
            p="8px 16px 8px 16px"
            fontSize="14px"
            lineHeight="20px"
            fontWeight="500"
          >
            <i class="fa-solid fa-suitcase-rolling" w="20px" h="20px"></i>
            <Text ml="10px" mt="-5px">
              Orders
            </Text>
          </Flex>
          <Flex
            p="8px 16px 8px 16px"
            fontSize="14px"
            lineHeight="20px"
            fontWeight="500"
          >
            <i class="fa-solid fa-bars" w="20px" h="20px"></i>
            <Text ml="10px" mt="-5px">
              Products
            </Text>
          </Flex>
          <Flex
            p="8px 16px 8px 16px"
            fontSize="14px"
            lineHeight="20px"
            fontWeight="500"
          >
            <i class="fa-solid fa-truck" w="20px" h="20px"></i>
            <Text ml="10px" mt="-5px">
              Delivery
            </Text>
          </Flex>
          <Flex
            p="8px 16px 8px 16px"
            fontSize="14px"
            lineHeight="20px"
            fontWeight="500"
          >
            <i class="fa-solid fa-suitcase" w="20px" h="20px"></i>
            <Text ml="10px" mt="-5px">
              Marketing
            </Text>
          </Flex>
          <Flex
            p="8px 16px 8px 16px"
            fontSize="14px"
            lineHeight="20px"
            fontWeight="500"
          >
            <i class="fa-solid fa-chart-simple" w="20px" h="20px"></i>
            <Text ml="10px" mt="-5px">
              Analytics
            </Text>
          </Flex>
          <Flex
            w="90%"
            m="auto"
            borderRadius="5px"
            p="8px 16px 8px 16px"
            bg="gray.600"
            fontSize="14px"
            lineHeight="20px"
            fontWeight="500"
          >
            <i class="fa-solid fa-credit-card" w="20px" h="20px"></i>
            <Text ml="10px" mt="-5px">
              Payouts
            </Text>
          </Flex>
          <Flex
            p="8px 16px 8px 16px"
            fontSize="14px"
            lineHeight="20px"
            fontWeight="500"
          >
            <i class="fa-solid fa-gear" w="20px" h="20px"></i>
            <Text ml="10px" mt="-5px">
              Discount
            </Text>
          </Flex>
          <Flex
            p="8px 16px 8px 16px"
            fontSize="14px"
            lineHeight="20px"
            fontWeight="500"
          >
            <i class="fa-regular fa-user" w="20px" h="20px"></i>
            <Text ml="10px" mt="-5px">
              Audience
            </Text>
          </Flex>
          <Flex
            p="8px 16px 8px 16px"
            fontSize="14px"
            lineHeight="20px"
            fontWeight="500"
          >
            <i class="fa-solid fa-palette" w="20px" h="20px"></i>
            <Text ml="10px" mt="-5px">
              Apearance
            </Text>
          </Flex>
          <Flex
            p="8px 16px 8px 16px"
            fontSize="14px"
            lineHeight="20px"
            fontWeight="500"
          >
            <i class="fa-solid fa-bolt" w="20px" h="20px"></i>
            <Text ml="10px" mt="-5px">
              Plugins
            </Text>
          </Flex>
          <Flex
            bg="gray.600"
            w="90%"
            m="auto"
            mt="180px"
            p="8px"
            border="1px"
            borderRadius="5px"
          >
            <Box>
              <i class="fa-solid fa-wallet" w="23px" h="20px"></i>
            </Box>

            <Box>
              <Text fontSize="12px" ml="15px">
                Available credits
              </Text>
              <Text fontSize="14px" mr="30px">
                222.10
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* ..........Main Box.......... */}
      <Box w="85%" position="absolute" right="0">
        <Flex p="5px">
          <Box w="30%">
            <Text fontSize="14px" mt="6px">
              How it works
            </Text>
          </Box>

          <Box w="30%">
            <Flex h="30px" bg="#F2F2F2" borderRadius="5px">
              <Box ml="5px" fontSize="12px" mt="5px">
                <i class="fas fa-magnifying-glass"></i>
              </Box>

              <Input
                h="100%"
                fontSize="12px"
                placeholder="Search features, tutorials etc."
              />
            </Flex>
          </Box>
          <Spacer />
          <Box w="10%">
            <Flex>
              <Box w="28px" h="100%" bg="#F2F2F2" borderRadius="10px">
                <i class="fa-solid fa-bullhorn"></i>
              </Box>
              <Box ml="10px" w="28px" h="100%" bg="#F2F2F2" borderRadius="50%">
                <i class="fa-solid fa-caret-down"></i>
              </Box>
            </Flex>
          </Box>
        </Flex>

        {/* .......overView Box......... */}
        <Box h="100%" bg="#F2F2F2">
          <Flex w="90%" m="auto" mt="5px">
            <Text fontSize="20px" lineHeight="20px" fontWeight="500">
              Overview
            </Text>
            <Spacer />
            <Select
              w="13%"
              bg="white"
              mt="5px"
              fontSize="14px"
              lineHeight="20px"
              fontWeight="500"
              placeholder="This month"
            >
              <option value="option1">Option 1</option>
            </Select>
          </Flex>

          <Flex w="90%" m="auto" mt="15px">
            <Box color="white" w="30%" borderRadius="5px" bg="#146EB4">
              <Text fontSize="12px" mt="12px" ml="7px" textAlign="left">
                Next Payout
              </Text>
              <Flex p="6px">
                <Text fontSize="20px">₹2,321.23</Text>
                <Spacer />
                <Text fontSize="12px">
                  <u>23 orders</u>
                </Text>
              </Flex>
              <Flex
                fontSize="12px"
                p="7px"
                mt="10px"
                bg="#0E4F82"
                borderBottomLeftRadius="5px"
                borderBottomRightRadius="5px"
              >
                <Text>Next payout date:</Text>
                <Spacer />
                <Text>Today,04:00PM</Text>
              </Flex>
            </Box>
            <Spacer />
            <Box
              color="black"
              w="30%"
              h="80%"
              pb="10px"
              borderRadius="5px"
              bg="white"
            >
              <Text fontSize="12px" mt="12px" ml="7px" textAlign="left">
                Amount Pending
              </Text>
              <Flex p="6px">
                <Text fontSize="20px">₹92,312.30</Text>
                <Spacer />
                <Text fontSize="12px" color="#146EB4">
                  <u>13 orders</u>
                </Text>
              </Flex>
            </Box>
            <Spacer />
            <Box
              color="black"
              w="30%"
              h="80%"
              pb="10px"
              borderRadius="5px"
              bg="white"
            >
              <Text fontSize="12px" mt="12px" ml="7px" textAlign="left">
                Amount Processes
              </Text>

              <Text fontSize="20px" textAlign="left" ml="7px" mt="5px">
                ₹23,92,312.19
              </Text>
            </Box>
          </Flex>

          <Text
            textAlign="left"
            m="30px 0 5px 60px"
            fontSize="20px"
            lineHeight="20px"
            fontWeight="500"
          >
            Transactions | This Month
          </Text>
          <Button
            ml="-73%"
            mt="10px"
            h="25px"
            fontSize="14px"
            bg="#146EB4"
            color="white"
            borderRadius="20px"
           
          >
            Payouts (22)
          </Button>
          <Button
            ml="15px"
            mt="10px"
            h="25px"
            fontSize="14px"
            borderRadius="20px"
            bg="#808080"
            color="#F2F2F2"
          >
            Refunds (2)
          </Button>
          <Box p="5px" w="90%" m="auto" mt="10px" bg="white">
            <Flex w="100%">
              <Box w="20%" border="1px" borderColor="gray.400">
                <Flex h="28px">
                  <Box ml="5px" fontSize="12px" mt="3px">
                    <i class="fas fa-magnifying-glass"></i>
                  </Box>

                  <Input h="100%" fontSize="12px" />
                </Flex>
              </Box>
              <Spacer />
              <Box w="20%" mr="-150px">
                <Flex>
                  <Box h="100%" border="1px" borderColor="gray.400">
                    <Flex p="2px 5px 2px 5px">
                      <Text fontSize="12px">Sort</Text>
                      <Box ml="5px" fontSize="12px">
                        <i class="fa-solid fa-arrow-up-wide-short"></i>
                      </Box>
                    </Flex>
                  </Box>
                  <Box
                    ml="10px"
                    fontSize="12px"
                    p="2px"
                    h="100%"
                    border="1px"
                    borderColor="gray.400"
                  >
                    <i class="fa-solid fa-download"></i>
                  </Box>
                </Flex>
              </Box>
            </Flex>
            <Tab />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Payout;
