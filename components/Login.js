import React from 'react';
import styled from "styled-components";


const Login = () => {
    return (
     <Container>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
     </Container>
    )


}
const Container=styled.section`
      display: flex;
      justify-content: center;
      align-items: center;
      height:100vh ;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url("/images/login-background.jpg");
      
`;
    const CTA = styled.div`
    width:100%;
    max-width:40.625rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding:1rem;
    
    `;
    const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 37.5rem;
    min-height: 1px;
    display: block;
    width: 100%;


    `;
    const SignUp = styled.a`
    width:100%;
    max-width:40.625rem;
    display:block;
    text-align:center;
    padding:17px 0;
    letter-spacing:0.3rem;
    font-size:1.3rem;
    margin-bottom: 10px;
    border-radius:5px;
    font-weight: bold;

    color: #f9f9f9;
    background-color: #0063e5;
    
    `;
    const Description = styled.p`
      text-align:center;
      font-size:14px;
      word-spacing:0;
      line-height:1.3rem;
      margin-bottom: 16px;

  `;
    const CTALogoTwo = styled.img`
    margin-bottom: 12px;
    max-width: 37.5rem;
    min-height: 1px;
    display: block;
    width: 100%;

    `;

export default Login;
