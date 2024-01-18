import GlobalStyles from './styles/GlobalStyles.ts';
import Button from './ui/Button.tsx';
import Heading from './ui/Heading.tsx';
import Input from './ui/Input.tsx';

function App() {

  return (
    <div>
      <GlobalStyles />
      <Heading as='h1'>The Wild Oasis</Heading>
      <Heading as='h2'>Check in and Out</Heading>
      <Button onClick={() => alert('asdfa')}>Check in</Button>
      <Input type="number" placeholder="Guess the number"/>
      <Heading as='h3'> Say hello</Heading>
      <Button onClick={() => alert('asdfa')}>Check in</Button>
      <Input type="number" placeholder="Guess the number"/>
    </div>
  );
}

export default App;
