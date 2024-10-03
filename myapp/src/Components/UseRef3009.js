// import React from 'react'
// import { useRef } from 'react'

// export default function UseRef3009() {
//     const inputref=useRef(null)

//     const UseRef3009=()=>{
//         inputref.current.focus()
//     }
//   return (
//     <div>
//       <input
//       type='text'
//       ref={inputref} placeholder='click the button to focus me'/>
//       <button onClick={UseRef3009}> focus Input</button>
//     </div>
//   )
// }

import React from 'react'
import { useRef } from 'react'

export default function UseRef3009() {
    const data=useRef()
    const handler=(e)=>{
        e.preventDefault()
        console.log(data.current.value)
        // data.current.value="single page application"
       

    }
  return (
    <div>
        <form onSubmit={handler}>
            <input
            type='text'
            ref={data}
            />
            <br/>
           <input type='submit'/>
        </form>
      
    </div>
  )
}

