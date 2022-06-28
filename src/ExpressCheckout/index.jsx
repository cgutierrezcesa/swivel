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
                <FormLabel htmlFor='for'>First Name</FormLabel>
                <FormInput htmlFor='firstName' required />
                <FormLabel htmlFor='for'>Last Name</FormLabel>
                <FormInput htmlFor='lastName' required />
                <FormLabel htmlFor='for'>Card Number</FormLabel>
                <FormInput htmlFor='cardNumber' required />
                <FormLabel htmlFor='for'>Exp Date</FormLabel>
                <FormInput htmlFor='exp' required />
                <FormLabel htmlFor='for'>CVC</FormLabel>
                <FormInput htmlFor='cvc' required />
             
              <FormButton type='submit'>Continue</FormButton>
             
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
