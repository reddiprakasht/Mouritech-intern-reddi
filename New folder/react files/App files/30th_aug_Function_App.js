
const App = () => {

    function demo(){
        alert("welcome to react")
    }
    return (
        <>
        <h1>{demo()}</h1>
        <button onClick={demo}>clickme</button>
        <button onMouseOver={demo}>mouese over</button>
        <button onMouseOut={demo}>mouse out</button>

        </>
    );
};

export default App;
