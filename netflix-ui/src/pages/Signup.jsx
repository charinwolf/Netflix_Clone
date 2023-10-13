import React from 'react'
import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';


const Signup = () => {
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header login />
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
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 20vh 85vh;
    .body{
      gap: 1rem;
      .text{
        gap: 1rem;
        text-align: center;
        font-size: 1.5rem;
        h1{
          padding: 0 15rem;
        }
      }
      .form{
        display: grid;
        /*grid-template-column: ;*/
        width: 60%
      }
    }
  }
`;

export default Signup
