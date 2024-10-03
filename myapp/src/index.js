
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App';
import { Provider } from 'react-redux';

import store from './Components/StoreReduxBank0110';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  

<Provider store={store}>
<App/>
</Provider>

 

);



