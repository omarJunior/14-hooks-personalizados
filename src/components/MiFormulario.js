import React, { useState } from 'react'

export const MiFormulario = () => {

    const [formulario, setFormulario] = useState({})

    const serializarForm = (formulario)=>{
        const formData = new FormData(formulario)
        
        const obj_completo = {}

        for(let [name, value] of formData){
            obj_completo[name] = value
        }

        return obj_completo
    }

    const enviado = (e)=>{
        e.preventDefault()
        //const curso = serializarForm(e.target//)
        //setFormulario(curso)
        console.log(formulario)
    }

    const cambiado = (e)=>{
        setFormulario({
            ...formulario,
            [e.target.name] : e.target.value
        })
    }

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
