import { useHandleClick } from './funciones/useHandleClick';

function App() {
  
  const {buttonValue, handleButtonClick} = useHandleClick('V Inicial');

  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>

      <button className='btn btn-warning'
      //value={buttonValue} 
      onClick={handleButtonClick}>                    
      {buttonValue}
      </button>

      <p className="read-the-docs">
        No dejes nunca de estudiar, aprender y practicar
      </p>
    </>
  )
}

export default App
