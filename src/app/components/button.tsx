import React from 'react'
import { displayErrorToast } from '../api/toast'

type ButtonProps = {
   buttonText: string
}

const Button = ({ buttonText }: ButtonProps) => {


   return (
      <button className='btn btn-primary text-white' onClick={() => displayErrorToast()}>
         {buttonText}
      </button>
   )
}

export default Button
