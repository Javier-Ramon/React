import './navbar.css';
import CartWidget from "../CartWidget";
import {NavLink, Link } from 'react-router-dom'


/*function NavBar(props) {

    const { img } = props

    return (

        <section className="conteiner hero is-info">
            <div className="columns hero-body">
                <div className="column is-3">
                    <figure className="image is-128x128">
                        <img src={img} alt="LOGO" />
                    </figure>
                </div>

                <div className="column is-6">
                <div className="columns is-2">
                    <div className="column is-centered">
                        <h2 className= "title block"role="navigation" aria-label="main navigation"> Isosceles Negocios Inmobiliarios</h2>
                    </div>
                </div>

                    <nav className=" is-centered">
                        <div>
                        <ul className="columns is-active">
                            <li className="column is-2">
                                <a className="button is-fullwidth is-danger" href="www.google.com">Inicio</a>
                            </li>
                            <li className="column is-3 large">
                                <a className="button is-fullwidth is-danger" href="www.google.com">Porpiedades</a>
                            </li>
                            <li className="column is-2">
                                <a className="button is-fullwidth is-danger" href="www.google.com">Alquileres</a>
                            </li>
                            <li className="column is-2">
                                <a className="button is-fullwidth is-danger" href="www.google.com">Contacto</a>
                            </li>
                        </ul>
                        </div>
                    </nav>
                   
                </div>
                <div className="column is-1">
                    <CartWidget />
                </div>
              
            </div>

        </section>
    )
}*/ 

const NavBar =() => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
                <h3>Ecommerce</h3>
            </Link>
            <div className='Categories'>
                <NavLink to= {'/category/celular'} className={({isActive}) => isActive ?  'ActiveOption' : 'Option'}/>
                <NavLink to= {'/category/tablet'} className={({isActive}) => isActive ?  'ActiveOption' : 'Option'}/>
                <NavLink to= {'/category/notebook'} className={({isActive}) => isActive ?  'ActiveOption' : 'Option'}/>

            </div>
        </nav>
    )
}

export default NavBar;