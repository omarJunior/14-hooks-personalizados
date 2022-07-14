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
        
        // let curso = {
        //     titulo: e.target.titulo.value,
        //     anio: e.target.anio.value,
        //     descripcion: e.target.descripcion.value,
        //     autor: e.target.autor.value,
        //     email: e.target.email.value,
        // }
        //setFormulario(curso)

        const curso = serializarForm(e.target)
        setFormulario(curso)
    }

  return (
    <div>
        <h1>Mi formulario</h1>
        <p>Formulario para guardar datos de un curso</p>
        <p>Curso guardado:</p>
        <pre>{JSON.stringify(formulario)}</pre>
    
        <form onSubmit={enviado} className='mi-formulario'>
            <input type="text" name="titulo" placeholder='Titulo...' />
            <input type="number" name="anio" placeholder='Año publicacion...' />
            <textarea name="descripcion" placeholder='Descripcion...'></textarea>
            <input type="text" name="autor" placeholder='Autor...' />
            <input type="email" name="email" placeholder='Correo de contacto' />

            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}
