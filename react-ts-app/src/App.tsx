import { Link } from 'react-router-dom';
import './App.css';
import Router from './component/router/Router'

function App() {
  
  return (
    <>
      <div className='App'>
        <Link to='/'>HOME</Link>
        <br />
        <Link to='page1'>PAGE1</Link>
        <br />
        <Link to='page2'>PAGE2</Link>
      </div>
      <Router />
    </>
  );
}

export default App;
