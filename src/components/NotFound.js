import React from 'react'
import { Link } from 'react-router'

function NotFound() {
  return (
    <div>
        <h1>Erreur 404</h1>
        <h2>Retourner vers l'a page d'acceuil</h2>
        <h2><Link to="/">Acceuil</Link></h2>

    </div>
  )
}

export default NotFound
