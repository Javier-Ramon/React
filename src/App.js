import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bulma/css/bulma.css";
import Logo from "./img/Loogo.jpg";
import NavBar from "./navbar/navbar";
import ItemListContainer from "./ItemListContainer";
import ItemCount from '../ItemCount/ItemCount';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';


function App() {
    return (


      /*  <div >
            <NavBar img={Logo} />
            <ItemListContainer/>
            <div>
                <ItemListContainer greeting= {'Bienvenidos al Contador!!'}/>
                <ItemCount initial={1} stock={15} onAdd= {(quantity)=> console.log('Cantidad Agregada', quantity)}/>;
            </div>
        </div>*/
        <div className="App">
            <BrowserRouter> 
            <NavBar></NavBar>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<h1> 404 NOT FOUND</h1>}/>

        </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;