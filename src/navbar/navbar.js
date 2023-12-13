

import React from 'react';
import { Link, NavLink } from 'react-router-dom';  
import './navbar.css';
import CartWidget from '../CartWidget';

function NavBar(props) {
  const { img } = props;

  return (
    <section className="container hero is-info">
      <div className="columns hero-body">
        <div className=" image column is-1">
          <figure className="image is-20%">
            <img src={img} alt="LOGO" />
          </figure>
        </div>

        <div className="column is-6">
          <div className="columns is-2">
            <div className="title column is-centered">
              <h2 className="title block is-centered" role="navigation" aria-label="main navigation">
                Bienvenidos !!!
              </h2>
            </div>
          </div>

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
            </section>
          </nav>
        </div>
        <div className=" CardWidget">
        <div className="  column is-1">
          <CartWidget />
        </div>
        </div>
      </div>
    </section>
  );
}

export default NavBar;
