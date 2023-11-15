import "bulma/css/bulma.css";
import Logo from "./img/Loogo.jpg"
import NavBar from "./navbar/navbar";


function app() {
    return (


        <div>
            <NavBar img={Logo} />
        </div>
    );
}

export default app;