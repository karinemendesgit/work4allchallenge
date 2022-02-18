import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Form from './Components/Form';
import Logo from './Components/Logo';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div>
      <CssBaseline />
      <Container fixed style={{ marginTop: '100px'}}>
        <Typography component="div" style={{ backgroundColor: '#fff', height: '600px', width: '1100px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }} >
          <Logo/>
          <Form/>
        </Typography>
      </Container>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
