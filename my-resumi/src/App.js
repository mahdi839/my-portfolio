import React from 'react';
import '../src/App.css'
import Particles from 'react-particles-js';
import Navbar from './components/Navbar'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  

  return (
    <div className="App">
       <Particles 
       className='particles-canvas'
       params={{
         particles:{
           value:30,
           density:{
             enabble:true,
             value_area:900
           }
         },
         shape:{
           type:'circle',

         }
       }}
       />
       <Navbar />
       <Header />
    </div>
  );
}

export default App;
