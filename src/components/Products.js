import React from 'react'
import { Link } from 'react-router';

function Products() {
  return (
    <div>
        <h1>Liste des produits</h1>
        <ul>
            <li><Link to="/product/1">Détails produit 1</Link></li>
            <li><Link to="/product/2">Détails produit 2</Link></li>
            <li><Link to="/product/3">Détails produit 3</Link></li>
            <li><Link to="/product/4">Détails produit 4</Link></li>
            <li><Link to="/product/5">Détails produit 5</Link></li>
        </ul>
    </div>
  )
}

export default Products
