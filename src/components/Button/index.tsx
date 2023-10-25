import React from "react"
import './styles.css'

interface ButtonProps {
  type?: 'filled' | 'outline';
}


const Button: React.FC<ButtonProps & React.HTMLAttributes<HTMLButtonElement>> = ({children, type, ...props }) => {
  return (
    <button 
      className={`${type || 'filled'} btn`}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button }