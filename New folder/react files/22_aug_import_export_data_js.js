
import ReactDOM from 'react-dom/client';
import course,{place,duration,demo,remaining_duration} from './data.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <>

  <h1>niranjan</h1>
  <h3>Course ={course}</h3>
  <h3>Place = {place}</h3>
  <h3>Course Duration time is = {duration} months</h3>
  <h4> Remaining Course duration is ={remaining_duration}</h4>
  <h1>{demo()}</h1>
  </>

);



