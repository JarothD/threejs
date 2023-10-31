//import React from 'react'
import useThreeJSRenderer from '../hooks/useThreeJSRenderer';


function ThreeJSComponent() {
    const { updateCube } = useThreeJSRenderer();
  
    return (        
        <div id='main'>
          <div id='botonera'>
            <button onClick={updateCube}>Separar</button>          
            <button onClick={() => {}}>Separar</button>          

          </div>

        </div>
    );
  }
  
  export default ThreeJSComponent;