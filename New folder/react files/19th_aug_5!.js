
import ReactDOM from 'react-dom/client'; // Correct import for React 18+

function factorial(n) {
    if (n===0) {
        return 1;
   }else {
    return n*factorial(n-1);
   }
}
let number = prompt("enter the factorial number")
let result = factorial(number);
let a=number*(number-1)
let b=a*(a-1)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
<>  
<h1>the factorial of {number} is {result}</h1>

</>

);