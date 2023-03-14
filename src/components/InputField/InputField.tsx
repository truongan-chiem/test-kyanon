import React, { FC, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'
import './InputField.scss'


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  title : string
  placeholder? : string
  activeError? : boolean
  page? : string
  type? : HTMLInputTypeAttribute
}

const InputField : FC<InputProps> = ({activeError,title,placeholder,page = "login",type = "text" , ...rest}) => {
  return (
    <div className={`input ${activeError ? "input__error" : ""}`}>
        <h2 className={`${page === 'profile' ? "invisible" : ""}`}>{title}</h2>
        <input type = {type} placeholder = {placeholder} {...rest} />
    </div>
  )
}

export default InputField