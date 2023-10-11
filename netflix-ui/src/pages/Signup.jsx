import React from 'react'
import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';


const Signup = () => {
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="body flex colum a-center j-center">
          <div className="text flex column">
            <h1>Unlimited Movies, TV Shows and more</h1>
            <h4>Watch Anywhere. Cancel anytime</h4>
            <h6>Ready to Watch? Enter your Email to create o restart membership</h6>
          </div>
          <div className="form">
            <input type='email' placeholder='Email address' name='email' />
            <input type='password' placeholder='Password' name='password' />
            <button>Get Started</button>
          </div>
          <button>Log In</button>
        </div>
      </div>
    </Container>
  )
}
const Container = styled.div`
  position: relative;
  .content{
    position: absolute;
    top: 0;
    left: 0;
    backgrouen-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    with: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
  }


`;

export default Signup
