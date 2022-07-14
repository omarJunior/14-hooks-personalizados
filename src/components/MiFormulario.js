import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const MiFormulario = () => {
    const {
        formulario,
        enviado,
        cambiado,
    } = useForm({})
  return (
    <div>
        <h1>Mi formulario</h1>
        <p>Formulario para guardar datos de un curso</p>
        <p>Curso guardado: {formulario.titulo}</p>
        <pre className='codigo'>{JSON.stringify(formulario)}</pre>
    
        <form onSubmit={enviado} className='mi-formulario'>
            <input onChange={(e)=> cambiado(e)} type="text" name="titulo" placeholder='Titulo...' />
            <input onChange={(e)=> cambiado(e)} type="number" name="anio" placeholder='Año publicacion...' />
            <textarea onChange={(e)=> cambiado(e)} name="descripcion" placeholder='Descripcion...'></textarea>
            <input onChange={(e)=> cambiado(e)} type="text" name="autor" placeholder='Autor...' />
            <input onChange={(e)=> cambiado(e)} type="email" name="email" placeholder='Correo de contacto' />

            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}
