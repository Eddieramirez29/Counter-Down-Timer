import hills from "./assets/pattern-hills.svg"//Importar imagen de hills
import stars  from "./assets/bg-stars.svg"
import "./index.css";

function CounterDown()
{
    return(
        <>
            <img className="hills" src={hills} alt="Hills" />
            <img className="stars" src={stars} alt="Stars"/>
        </>
    );
}

export default CounterDown;