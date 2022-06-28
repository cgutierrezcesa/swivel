import React from 'react'
import { Container, FormWrap, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './SigninElements'
import LogoSignIn from './swivel-white.png';
import "./coloredLogo.css"


const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
   
          <FormContent>
            <Form action='#'>
            <img src={LogoSignIn} alt="-logo" className="signin--logo animate__animated animate__fadeInUp"></img>

              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput htmlFor='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
