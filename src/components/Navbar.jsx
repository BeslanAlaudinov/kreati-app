import { useState } from 'react'
import styles from './Navbar.module.css'

const links = ['Услуги', 'Проекты', 'О нас', 'Контакты']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className={styles.navbar}>
        {links.map((link) => (
          <a key={link} href="#" className={styles.link}>{link}</a>
        ))}
        <button className={styles.burger} onClick={() => setOpen(true)} aria-label="Меню">
          <span /><span /><span />
        </button>
      </nav>

      {open && (
        <div className={styles.mobileMenu}>
          <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Закрыть">×</button>
          {links.map((link) => (
            <a key={link} href="#" onClick={() => setOpen(false)}>{link}</a>
          ))}
        </div>
      )}
    </>
  )
}