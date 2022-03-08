import ActiveLink from './ActiveLink'
import styles from './Navbar.module.css'
import { menuItems } from '../../utils/navbarLinks'



const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>

      {menuItems.map((item, index)=>{
        return(
          <ActiveLink key={index} text={item.text} href={item.href} />
        )
      })}
        
    </nav>
    
  )
}

export default Navbar