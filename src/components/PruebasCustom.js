
import { useMayus } from '../hooks/useMayus'

export const PruebasCustom = () => {

    const { estado, mayusculas, minusculas, concatenar } = useMayus("Omar Hernandez")
    console.log(estado)
  return (
    <div>
        <h1>Probando componentes personalizados</h1>
        <h2>{estado}</h2>
        &nbsp;<button onClick={()=> mayusculas()}>Mayusculas</button>
        &nbsp;<button onClick={()=> minusculas()}>Minusculas</button>
        &nbsp;<button onClick={()=> concatenar("provando hooks personalizados")}>Concatenar</button>
    </div>
  )
}
