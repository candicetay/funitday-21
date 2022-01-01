import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollTopArrow from './components/ScrollTopArrow';

ReactDOM.render(
  (
      <BrowserRouter>
        <App />
        {/* <ScrollTopArrow /> */}
      </BrowserRouter>
  ),
  document.getElementById('root')
);
