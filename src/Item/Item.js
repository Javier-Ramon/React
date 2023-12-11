import './Item.css'

const Item = ({ id, name, img, price, stock }) => {
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg'></img>
            </picture>

            <section>
                <p className='Info'>
                    Precio: ${price}
                </p>
                <p className='Info'>
                    Stock disponible: ${stock}
                </p>
            </section>
          
        </article>
    )
}
export default Item