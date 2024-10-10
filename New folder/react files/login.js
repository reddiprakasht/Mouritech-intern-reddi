


function Login() {

    return (

        <> 

        <div >

    <form action="" className="text-center border border-5 m-5 p-5">

        <input type="text" name="" id="" placeholder="user id" className="form-control"/> <br/> <br/>
        <input type="password" name="" id="" placeholder="password" className="form-control"/><br/> <br/>
        <input type="button" name="" id="" value="logiin" className="btn btn-outline-primary"/><br/> <br/>
        <input type="submit" name="" id="" value="clear" className="btn btn-outline-primary"/><br/> 
    
    </form>

    
        </div>


    
    </>
    )

}
export default Login





// import React, { useState } from 'react';

// function Login() {
//     const [uid, setUid] = useState('');
//     const [psw, setPsw] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = (e) => {
//         //e.preventDefault();
//         // Simple validation
//         if (uid === 'admin' && psw === 'password') {
//             alert('Login successful!');
//             // Handle successful login (e.g., redirect or update state)
//         } else {
//             setError('Invalid user ID or password');
//         }
//     };

//     const handleClear = () => {
//         setUid('');
//         setPsw('');
//         setError('');
//     };

//     return (
//         <>
//             <div>
//                 <form onSubmit={handleSubmit} className="text-center">
//                     <input
//                         type="text"
//                         value={uid}
//                         onChange={(e) => setUid(e.target.value)}
//                         placeholder="User ID"
//                     /> <br /> <br />
//                     <input
//                         type="password"
//                         value={psw}
//                         onChange={(e) => setPsw(e.target.value)}
//                         placeholder="Password"
//                     /><br /> <br />
//                     <input
//                         type="submit"
//                         value="Login"
//                     /><br /> <br />
//                     <input
//                         type="button"
//                         value="Clear"
//                         onClick={handleClear}
//                     /><br /> <br />
//                     {error && <p style={{ color: 'red' }}>{error}</p>}
//                 </form>
//             </div>
//         </>
//     );
// }

// export default Login;
