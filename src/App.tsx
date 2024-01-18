import GlobalStyles from './styles/GlobalStyles.ts';
import Button from './ui/Button.tsx';
import Heading from './ui/Heading.tsx';
import Input from './ui/Input.tsx';

function App() {

  return (
    <div>
      <GlobalStyles />
      <Heading>The Wild Oasis</Heading>
      <Button onClick={() => alert('asdfa')}>Check in</Button>
      <Input type="number" placeholder="Guess the number"/>
    </div>
  );
}

export default App;
