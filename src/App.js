import "bulma/css/bulma.css";
import Logo from "./img/Loogo.jpg"
import NavBar from "./navbar/navbar";
import ItemListContainer from "./ItemListContainer";


function app() {
    return (


        <div>
            <NavBar img={Logo} />
            <ItemListContainer/>
        </div>
    );
}

export default app;