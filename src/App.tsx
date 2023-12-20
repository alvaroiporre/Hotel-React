import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles.ts';
import Button from './ui/Button.tsx';
import Input from './ui/Input.tsx';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
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
