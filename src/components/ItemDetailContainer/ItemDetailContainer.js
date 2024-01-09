
import React, { useState, useEffect } from 'react';
import { getProductsById } from '../asynMock/asyncMock';
import { getDoc, doc } from "firebase/firestore"
import { db } from "../config/firebaseConfig"
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer';


const ItemDetailContainer = () =>{
  const [productos, setProductos] = useState(null)
  

  const {itemId} = useParams()

  useEffect(() =>{
      

      const docRef = doc(db, "Items", itemId)

      getDoc(docRef)
          .then(Response=>{
              const data = Response.data()
              const productosAdaptados = { id:Response.id, ...data }
              setProductos(productosAdaptados)
          })
          .catch(error =>{
              console.log(error)
          })


  }, [itemId])


  return(
      <div className="ItemDetailContainer">
          <ItemDetail {...productos}/>
      </div>
  )
}

export default ItemDetailContainer

