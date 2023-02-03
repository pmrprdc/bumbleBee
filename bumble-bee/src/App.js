import logo from './logo.svg';
import './App.css';
import styled from "styled-components"

const StyledButton = styled.button`
background-color: black;
font-size: 32px;
border-radius: 5px;
color: white;`;



function App() {

  return (
    <StyledButton> Log in</StyledButton>
  
  )
}

export default App;
