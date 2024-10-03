// import React, { useState } from 'react';

// export default function StateValueUpdateInArray() {

//   const [state, setState] = useState('');
//   const [data, setData] = useState([]);

//   const handleInputChange = (e) => {
//     setState(e.target.value);
//   };

//   const handleAddValue = () => {
   
//     setData((prevData) => [...prevData, state]);
//     setState(''); 
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={state}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleAddValue}>Add Value</button>
      
//       <ul>
//         {data.map((list) => (
//           <li>
//             {list} 
        
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



// import React from 'react'
// import { useState} from 'react'

// export default function Statevalueupdateinarray() {
//     const [state, setState]=useState('')
//     const [data, setData]=useState([])

//  const statevalue=(e)=>{
//     setState(e.target.value)
//  }
//  const valueadd=()=>{
//     // setData(...data, state)
//     // console.log(data)

//     setData((data)=>{
//         const updatelist=[...data, state]
//         console.log(updatelist)
//         return updatelist
//         setData('')
//     })
    
//     }
//     const 

//   return (
//     <div>
//       <input type='text' className='form-control' value={state} onChange={statevalue}/>
//      <button type='submit' onClick={valueadd} className='btn btn-outline-success px-5 mt-3 ms-2'>add</button>
//      <ul>
//             {data.map((list)=>{
//                 return(
//                     <>
//                        <li className='p-3 text-light m-2 rounded'>{list}</li> 
//                     </>
//                 )
//             })}
//      </ul>
//     </div>
//   )
// }





import React, { useState } from 'react';

export default function StateValueUpdateInArray() {
  const [state, setState] = useState('');
  const [data, setData] = useState([]);

  const stateValue = (e) => {
    setState(e.target.value);
  };

  const valueAdd = () => {
    setData((prevData) => {
      const updatedList = [...prevData, state];
      console.log(updatedList);
      return updatedList;
    });
    setState(''); // Clear input after adding
  };

  const removeItem = (index) => {
    setData((prevData) => {
      const updatedList = prevData.filter((_, i) => i !== index);
      return updatedList;
    });
  };

  return (
    <div>
      <input
        type='text'
        className='form-control'
        value={state}
        onChange={stateValue}
      />
      <button
        type='button'
        onClick={valueAdd}
        className='btn btn-outline-success px-5 mt-3 ms-2'
      >
        Add
      </button>
      <ul>
        {data.map((list, index) => {
          return (
            <li key={index} className='p-3 text-light m-2 rounded'>
              {list}
              <button
                onClick={() => removeItem(index)}
                className='btn btn-outline-light ms-2'
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
