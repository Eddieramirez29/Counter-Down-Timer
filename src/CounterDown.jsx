import hills from "./assets/pattern-hills.svg"//Importar imagen de hills
import "./index.css";

function CounterDown()
{
    return(
        <img className="hills" src={hills} alt="Not Found" />
    );
}

export default CounterDown;