

import React from 'react';
import { Link, NavLink } from 'react-router-dom';  
import './navbar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar(props) {
  const { img } = props;

  return (
    <section className="container hero is-info">
      <div className="columns hero-body">
        <div className=" Logo image column is-4">
          <figure className="image is-50%">
            <img src={img} alt="LOGO" />
          </figure>
        </div>

        <div className="column is-6">
         

          <nav className='NavBars'>
            <div className='Nav'>
            <Link to='/'>
              <h1> Bienvenidos a Jr Informatica</h1>
            </Link>
            </div>
            <section className='Categories'>
            <div className='Categorie'>
              <NavLink to='/category/celular' activeClassName='ActiveOption' className='Option'>
                Celulares
              </NavLink>
              </div>
              <div className='Categorie'>
              <NavLink to='/category/tablet' activeClassName='ActiveOption' className='Option'>
                Tablets
              </NavLink>
              </div>
              <div className='Categorie'>
              <NavLink to='/category/Notebooks' activeClassName='ActiveOption' className='Option'>
                Notebooks
              </NavLink>
            </div>
            <div className=" CardWidget">
        <div className="  column is-2">
          <CartWidget />
        </div>
        </div>
            </section>
          </nav>
        </div>
       
      </div>
    </section>
  );
}

export default NavBar;
