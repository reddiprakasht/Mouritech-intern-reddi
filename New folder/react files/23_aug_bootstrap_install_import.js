
import ReactDOM from 'react-dom/client';

//install bootstrap 
// go to react application ----in this 'myapp' is my application
//and run the command "npm i bootstrap" now bootstrap folder is created inside the /node_modules/bootstrap/dist/css/bootstrap.css 
//then import in this folder like below

import "../node_modules/bootstrap/dist/css/bootstrap.css"





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  

<>
<div className='bg-dark'><h1 className='text-warning'>bootstrap<span className='text-info'> is very helpful to give standard layout and responsive design</span></h1>
</div>



</>
 

);



