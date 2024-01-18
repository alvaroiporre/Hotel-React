import GlobalStyles from './styles/GlobalStyles.ts';
import Button from './ui/Button.tsx';
import Heading from './ui/Heading.tsx';
import Input from './ui/Input.tsx';
import Row from './ui/Row.tsx';

function App() {

  return (
    <div>
      <GlobalStyles />
      <Row type='vertical'>
        <Heading as='h1'>The Wild Oasis</Heading>
        <Row type='horizontal'>
          <Heading as='h2'>Check in and Out</Heading>
          <div>
            <Button variation='primary' size='medium' onClick={() => alert('asdfa')}>Check in</Button>
            <Input type="number" placeholder="Guess the number" />
          </div>
        </Row>
        <Row type='vertical'>

          <Heading as='h3'> Say hello</Heading>
          <form action="">

            <Button variation='secondary' size='small' onClick={() => alert('asdfa')}>Check in</Button>
            <Input type="number" placeholder="Guess the number" />
          </form>
        </Row>
      </Row>
    </div >
  );
}

export default App;
