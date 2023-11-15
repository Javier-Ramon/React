

import "bulma/css/bulma.css";
import logos from "./logos/img/Loogo.jpg";
import NavBar from "./navbar/navbar";


function app(){
    return (
        

        <div className=".container.is-max-desktop " >
           
            <NavBar img={logos}/>
        </div>
    );
}

export default app