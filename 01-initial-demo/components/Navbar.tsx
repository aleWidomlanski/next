import { ActiveLink } from "./ActiveLink"
import styles from './Navbar.module.css'

const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    //si tengo guiones-medios en la clase no puedo poner dentro de la className {styles.'nav-container}, debo ponerlo así como un propiedad computada.Va a buscar del objeto styles la propiedad computada nav-container
    <nav className={styles['nav-container']} >
      {menuItems.map((link) => {
        return <ActiveLink key={link.href} text={link.text} href={link.href} />
      })}
    </nav>
  )
}
