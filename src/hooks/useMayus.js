import React, { useState } from 'react'

export const useMayus = (texto)=>{

    const [miTexto, setMiTexto] = useState(texto)

    const mayusculas = ()=>{
        setMiTexto(texto.toUpperCase())
    }

    const minusculas = ()=>{
        setMiTexto(texto.toLowerCase())
    }

    const concatenar = (cadena)=>{
        setMiTexto(texto + " " + cadena)
    }

    return {
        estado: miTexto,
        mayusculas,
        minusculas,
        concatenar,
    }
}