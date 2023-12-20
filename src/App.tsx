import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles.ts';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  cursor: pointer;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;


function App() {

  return (
    <div>
      <GlobalStyles />
      <H1>The Wild Oasis</H1>
      <Button>Check in</Button>
      <Input type="number" placeholder="Guess the number"/>
    </div>
  );
}

export default App;
