import hills from "./assets/pattern-hills.svg"//Importar imagen de hills
import stars  from "./assets/bg-stars.svg"
import facebook from "./assets/icon-facebook.svg"
import instagram from "./assets/icon-instagram.svg"
import pinterest from "./assets/icon-pinterest.svg"
import "./index.css";

function CounterDown()
{
    return(
        <>
            <img className="hills" src={hills} alt="Hills" />
            <img className="stars" src={stars} alt="Stars"/>
            <div className="icon-container">
            <img className="facebook" src={facebook} alt="Facebook"/>
            <img className="pinterest" src={pinterest} alt="Pinterest"/>
            <img className="instagram" src={instagram} alt="Instagram"/>
            </div>
        </>
    );
}

export default CounterDown;