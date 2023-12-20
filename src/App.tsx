import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles.ts';
import Button from './ui/Button.tsx';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
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
