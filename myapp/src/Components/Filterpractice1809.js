import React from 'react'
import { useState, useEffect} from 'react'

export default function Filterpractice1809() {

    const[state, setState]=useState([])
    const [search, setSearch]=useState('')
    const handler=((e)=>{
        setSearch(e.target.value)
    })

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setState(json))
    })

    

    // const data=['mango', 'bananna', 'car' , 'danger', 'fish', 'google']

  return (
    <>

      <input type='text' value={search} onChange={handler}/>
      
        {state.filter(x=>x.title.includes(search)).map((list)=>{
            return(
                <>
                <li>
                    {list.id}- '' 
                    {list.title}
                </li>
                </>
            )
        })}
    
    </>
  )
}



// import React, { useState, useEffect } from 'react';

// export default function Filterpractice1809() {
//     const [state, setState] = useState([]);
//     const [search, setSearch] = useState('');

//     const handler = (e) => {
//         setSearch(e.target.value);
//     };

//     useEffect(() => {
//         // Fetch data once when the component mounts
//         fetch('https://jsonplaceholder.typicode.com/todos')
//             .then((response) => response.json())
//             .then((json) => setState(json))
//             .catch((error) => console.error('Error fetching data:', error));
//     }, []); // Add an empty dependency array so it only runs once

//     return (
//         <>
//             <input 
//                 type='text' 
//                 value={search} 
//                 onChange={handler} 
//                 placeholder="Search todos by title" 
//             />

//             <ul>
//                 {state
//                     .filter((x) => x.title.includes(search)) // Filter by title
//                     .map((list) => (
//                         <li key={list.id}>
//                             {list.id} - {list.title}
//                         </li>
//                     ))}
//             </ul>
//         </>
//     );
// }

