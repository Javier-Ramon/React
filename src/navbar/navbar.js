
 //import logos from "./logos/img/Loogo.jpg";
function NavBar (props) {
    const {img} = props
 return (    

  <nav className= "hero is-info">
<section>
<figure>
            <img src={img} alt="logos"/>
        </figure>

<div className="container is-fluid max-width  ">
    <div className="column is-4">
        
        <h2 class="container is-max-desktop max-width columns is-mobile" role="navigation" aria-label="main navigation"> Isosceles Negocios Inmobiliarios</h2>
    </div>
</div>
</section>
<ul className=".container.is-max-desktop max-width">
    <li className="button is-danger">  Inicio</li>
    <li className="button is-danger">  Porpiedades</li>
    <li className="button is-danger">  Alquileres</li>
    <li className="button is-danger">  Contacto</li>

</ul>
     
    </nav>
    )
}
 
export default NavBar