// import React, { useState } from 'react'
// import axios from "axios";
// import { Switch, Button, HStack, Heading, Box,
//          VStack, Text, IconButton, StackDivider, Spacer, Badge, Avatar, Wrap, WrapItem, Flex
// } from "@chakra-ui/react"
// import { FaTrash } from 'react-icons/fa';
// import swal from "sweetalert"; 


// export default function AlarmItem({ item, handleDelete }) {

//   const accessToken = window.localStorage.getItem('userToken')

//       const alarmSetting = (productId) => {
        
//         console.log("알람설정")
//         let body = {
//           productId: item.productId,
//         }
//         console.log("바디가뭐야", body)
//         axios.post(`https://projectb1.com:4000/products/changeAlarm`, body, 
//         {
//         headers: {"okCome": accessToken}
//       })
//       .then(response => {
//             console.log(response.data.data.myList);
//         const myList = response.data.data.myList;
//         const alarmProduct = myList.filter((el) => el.productId === item.productId)
//         console.log("알람프로덕트", alarmProduct)
//           if(alarmProduct[0].alarm === true) {
//             swal({
//               title: "Good job!",
//               text: "발매 하루 전에 메일로 발송됩니다.",
//               icon: "success",
//             });     
//           }else{
//              swal("Oops", "알람 설정이 취소되었습니다.", "error")
//           }        
//        });
//     }
  
//   return (
//     // <Flex>
//       <VStack
//         divider={<StackDivider  mt="6" />}
//         borderColor='black.400'
//         borderWidth='1px'
//         spacing={16}
//         p={4}
//         borderRadius='2xl'
//         w='100%'
//         maxW={{ base: '100vw', sm: '100vw', lg: '50vw', xl: '40vw' }}
//         alignItems='stretch'
//         shadow="xs"
//         bg="white"
//         mt="8"
//       >
//         {/* <Flex> */}
//         <HStack mt="0">
//           <Avatar ml="0" mr="4" size="lg" name="shoes" src={`https://projectb1.com:4000/${item.images[0]}`} />
//             {/* <Flex> */}
//             <Box
//               alignContent="space-between"
//               fontSize="lg"
//               fontWeight="semibold"
//               as="h3"
//               lineHeight="1.5"
//               isTruncated
//               ml="8"
//             >
//               <Spacer />
//               <Flex>
//               <Box>
//                     {item.releaseString}

//               <Switch 
//                     ml="4"
//                     defaultChecked="true"
//                     onChange={alarmSetting}>
//               </Switch>
              
//               <IconButton
//               ml="2"
//               size="md"
//               alignContent="space-between"
//               icon={<FaTrash />}
//               isRound='true'
//               onClick={() => {handleDelete(item.productId)}}
//             />
//             </Box>
//             </Flex>

//             <Box fontSize="md" fontWeight="light" mt={0} ml={0}>{item.productName} <Box as="span" color="gray.600" fontSize="md"> </Box></Box>
//             </Box>
            
//         {/* </Flex> */}
//         </HStack>
//         {/* </Flex> */}
//       </VStack>
//       // </Flex>
//   )
// };
 


import React, { useState } from 'react'
import axios from "axios";
import { Switch, Button, HStack, Heading, Box, SimpleGrid, Divider,
         VStack, Text, IconButton, StackDivider, Spacer, Badge, Avatar, Wrap, WrapItem, Flex, Container
} from "@chakra-ui/react"
import { FaTrash } from 'react-icons/fa';
import swal from "sweetalert"; 
export default function AlarmItem({ item, handleDelete }) {
  const accessToken = window.localStorage.getItem('userToken')
  const [alarm, setAlarm] = useState(true)
      const alarmSetting = (productId) => {
        console.log("알람설정")
        let body = {
          productId: productId,
        }
        console.log("바디가뭐야", body)
        axios.post(`https://projectb1.com:4000/products/changeAlarm`, body, 
        {
        headers: {"okCome": accessToken}
      })
      .then(response => {
            console.log(response.data.data.myList);
        const myList = response.data.data.myList;
        const alarmProduct = myList.filter((el) => el.productId === item.productId)
        console.log("알람프로덕트", alarmProduct)
          if(alarmProduct[0].alarm === true){
            setAlarm(true)
            swal({
              title: "Good job!",
              text: "발매 하루 전에 메일로 발송됩니다.",
              icon: "success",
            });     
          }else{
            setAlarm(false)
             swal("Oops", "알람 설정이 취소되었습니다.", "error")
          }        
       });
    }
  return (
    <Box>
      <Divider

       />
      <Container
      // borderColor='black.400'
      mb="8"
      mt="8"
      // border="1px"
      borderRadius="16"
      >
      <Flex>
          <Box
          >
            <Avatar size="xl" name="shoes" src={`https://projectb1.com:4000/${item.images[0]}`} />
          </Box>
          <Box>
            <Heading
             ml="6"
             fontSize="xl">{item.releaseString}</Heading>
            <Spacer />
            <Text
             mt="2"
             ml="6"
            >{item.productName}</Text>
            <Box
             alignItems="center"
            >
            {alarm ? 
            <Button 
              width="170px"
              mt="4"
              ml="6"
              variant="outline" 
              colorScheme="red"
              onClick={()=>{alarmSetting(item.productId)}}
              > 알람 취소 
            </Button> :
            <Button
              width="170px"
              mt="4"
              ml="6"
              variant="solid"
              colorScheme="purple"
              onClick={()=>{alarmSetting(item.productId)}}
              > 알람 설정
            </Button>}
            </Box>
          </Box>
          <Spacer />
          <Spacer />
          <Box>
            <IconButton
            ml="0"
            icon={<FaTrash />}
            isRound='true'
            onClick={() => {handleDelete(item.productId)}}
            />
          </Box>
        </Flex>
        <Box>

          </Box>
      </Container>
      </Box>
  )
};
 
