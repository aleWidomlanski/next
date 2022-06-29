import { CSSProperties, FC } from 'react'
import { useRouter } from '../node_modules/next/router'
import Link from '../node_modules/next/link'






//poniendolo aca no se regenera cuando se vuelve a cargar el componente (siempre va a ser el mismo objeto por eso es conveniente no volver a ponerlo dentro del componente)
const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
}


interface Props {
/*text?: string, si pusiera asi la propiedad text no sería obligatorio, si lo pongo con signo de pregunta*/
  text: string,
  href: string
}


export const ActiveLink: FC<Props> = ({text, href}) => {

   const {asPath}= useRouter()
   

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  
  )
}
