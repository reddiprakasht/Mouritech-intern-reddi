
import ReactDOM from 'react-dom/client'; // Correct import for React 18+

var dt= Date()
var obj=new Date()
var day=obj.getDay()

switch (day){
  case 0:
  result="Today is Sunday"
  break;
  case 0:
    result="Today is Monday"
    break;
    case 0:
      result="Today is Tuesday"
      break;
      case 0:
        result="Today is wednesday"
        break;
        case 0:
          result="Today is Thursday"
          break;
          case 0:
            result="Today is Friday"
            break;
            case 0:
              result="Today is Saturday"
              break;

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
<>


{result}

</>

);






