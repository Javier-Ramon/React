import { useState, useEffect } from 'react';
import { getProducts } from './asyncMock';
import ItemList from './ItemList/ItemList';
import { useParams } from 'react-router-dom';

/*function ItemListContainer(){

    return (
        <div className="columns is-centered">
                <div className="  is-offeset-4 is-fullwidth ">
                    <h1 className="title column is-active">Bienvenidos </h1>
                </div>
        </div>
    )
}*/

const ItemListContainer = ({ greeting }) => {
    const [products, setPoducts,  getProductsByCategory] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        asyncFunc(categoryId)
            .then(response => {
                setPoducts(response)
            })
            .catch(error => {
                console.error(error)
            })

    }, [categoryId])

    return (
        <div>
            <h1> {greeting} </h1>
            <ItemList products={products} />
        </div>
    )


}

export default ItemListContainer