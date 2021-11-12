import { useState } from "react";
import Button from '../Button';

const Card = () => {

  const [valor, setValor] = useState(0)

  function Add (){
    setValor(valor + 1)
  }
  function Remove (){
    setValor(valor - 1)
  }

  return(
      <div className="card">     
        <div className="card-header bg-danger text-white">
          My first card
        </div>
        <div className="card-body">         
          <button
            className="btn btn-primary mx-1"
            onClick={Add}
          >
            Add           
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={Remove}
          >
            Delete           
          </button>          
          <p>{valor}</p>
        </div>
        
      </div>
  )
}

export default Card;