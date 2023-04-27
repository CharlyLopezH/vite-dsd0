//Atención, manejo de hooks personalizados
import{useSumarCont} from './funciones/useSumarCont'
const App=()=>{

    const {value, onHandlerClickButton} = useSumarCont(0);
    
    return(
        <>   
        <h3>Ejecutando lógica fuera del UI (con hook personalizado) </h3>     
        <hr></hr>
        <div>        
        <button className="btn btn-warning"        
        onClick={onHandlerClickButton}
        > 
        Click me {' '}
        {value}
        </button>    
        </div>
        <hr></hr>
        <p className="read-the-docs">
        No dejes nunca de estudiar, aprender y practicar
      </p>
        </>
    )
}
export default App