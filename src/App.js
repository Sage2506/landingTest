import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Layout } from './components/layout';
import Routes from './routes';



function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Routes/>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
