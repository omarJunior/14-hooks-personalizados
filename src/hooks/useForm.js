import { useState } from "react"

export const useForm = (objetoInicial = {})=>{

    
    const [formulario, setFormulario] = useState(objetoInicial)

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
        document.querySelector(".codigo").classList.add("enviado")
    }

    const cambiado = (e)=>{
        setFormulario({
            ...formulario,
            [e.target.name] : e.target.value
        })
    }


    return {
        formulario,
        enviado,
        cambiado,
    }
}