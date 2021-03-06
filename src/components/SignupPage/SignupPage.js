import React, { useState } from "react";
import { Card } from '../LoginPage/Section/Card'
import {
  Box,
  Button,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import validation from "../utils/Validation";
import axios from "axios";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

axios.defaults.withCredentials = true;

export default function SingupPage() {

  const [values, setValues] = useState({
    nickName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (key) => (e) => {
    setValues({
      ...values,
      [key]: e.target.value,
    });
    setErrors(validation(values));
  };
  
  const history = useHistory();

  const handleSignup = (e) => {
    e.preventDefault();

    const { nickName, email, password, confirmPassword } = values;
    if (!email || !password || !nickName || !confirmPassword) {
      return swal("Oops", "모든 항목은 필수입니다.", "error");
    }
   
    axios
      .post(
        "https://projectb1.com:4000/users/signup",
        {
          nickName,
          email,
          password,
          confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
        swal("Oops", err.response.data.message, "error")
        history.push("/login");
      });
  };
  return (
    <Box
    bg={useColorModeValue('gray.50', 'inherit')}
    minH="100vh"
    py="12"
    px={{ base: '4', lg: '8' }}
  >
    <Box maxW="md" mx="auto">
    <Heading textAlign="center" size="lg" fontWeight="extrabold">
        🔔 발매 정보를 미리 받아 보세요!
    </Heading>
    <SimpleGrid mt="10" columns={3} spacing="3"/>
    <Card>
    <Stack spacing="6">
          <FormControl id="name">
            <FormLabel>💌 닉네임</FormLabel>
              <Input onChange={handleChange("nickName")}
                // value={errors.nickName}
                name="name" 
                type="name" 
                placeholder="닉네임을 입력해 주세요."
                autoComplete="" required />
            </FormControl>
            {errors.nickName && (
              <p className="error-signup">{errors.nickName}</p>
            )}
        </Stack>

        <SimpleGrid mt="6" columns={3} spacing="3"/>
        <Stack spacing="6">
          <FormControl id="email">
            <FormLabel>💌 이메일</FormLabel>
              <Input onChange={handleChange("email")}
                name="email" 
                type="email" 
                placeholder="이메일을 입력해 주세요."
                autoComplete="" required />
            </FormControl>
            {errors.email && <p className="error-signup">{errors.email}</p>}
        </Stack>

        <SimpleGrid mt="6" columns={3} spacing="3"/>
        <Stack spacing="6">
          <FormControl id="password">
            <FormLabel> 🔐 비밀번호</FormLabel>
              <Input onChange={handleChange("password")}
                name="password" 
                type="password" 
                placeholder="비밀번호를 입력해 주세요."
                autoComplete="" required />
            </FormControl>
            {errors.password && (<p className="error-signup">{errors.password}</p> )}
        </Stack>

        <SimpleGrid mt="6" columns={3} spacing="3"/>
        <Stack spacing="6">
          <FormControl id="password">
            <FormLabel> 🔐 비밀번호 확인 </FormLabel>
              <Input onChange={handleChange("confirmPassword")}
                name="confirmPassword"
                type="password"
                placeholder="비밀번호를 다시한번 입력해 주세요."
                autoComplete="" required />
            </FormControl>
            {errors.confirmPassword && (
              <p className="error-signup">{errors.confirmPassword}</p>
            )}
        </Stack>

           <SimpleGrid mt="6" columns={3} spacing="3"/>
          <Button
              onClick={handleSignup}  
              type="submit" 
              colorScheme="purple" 
              width="full"
              fontSize="md">
              회원가입하기
          </Button>
          <SimpleGrid mt="6" columns={3} spacing="3"/>
    </Card>
    </Box>
    </Box>
    
  );
}
