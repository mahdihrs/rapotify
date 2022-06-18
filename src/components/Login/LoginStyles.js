import styled from 'styled-components';

export const LoginContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  padding: 1rem;
`

export const LoginButton = styled.a`
  border-radius: 10px;
  background: #1ed760;
  color: #000000;
  border: none;
  padding: 10px 2rem;
  box-shadow: 3px 3px 10px #000000;
  text-decoration: none;
  height: 20px;
  width: 50%;
  display: flex;
  justify-content: center;
  font-weight: 600;
`

export const Title = styled.h1`
  margin: 0;
`

export const LoginText = styled.p`
  text-align: center;
`