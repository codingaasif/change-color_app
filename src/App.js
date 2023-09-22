import './App.css';
import {useState} from "react";

function App() {
  const [color, setColor] = useState("olive")
  return (
    <>

          <h1 style={{}}>Change Color App</h1>

        <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>

          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>

            <button onClick={() => setColor("red")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}}>Red</button>

            <button onClick={() => setColor("green")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}}>Green</button>

            <button onClick={() => setColor("pink")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{backgroundColor: "pink"}}>Pink</button>

            <button onClick={() => setColor("black")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{backgroundColor: "black"}}>Black</button>

            <button onClick={() => setColor("blue")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>

            <button onClick={() => setColor("white")} className='outline-none px-4 py-2 rounded-full text-black shadow-lg' style={{backgroundColor: "white"}}>White</button>
         
          </div>

          </div>
        </div>

    </>






    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
