import React from 'react'
import { useParams } from 'react-router'

function Product() {
    const {id} = useParams();
    return (
        <div>
            <h1>Produit</h1>
            <p>Vous avez affiché le produit Numéro {id}</p>
        </div>
    )
}

export default Product
