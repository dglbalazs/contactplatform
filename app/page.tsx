import Contacts from './components/Contacts/Contacts'
import styles from './page.module.scss'

export default function Home() {
  
  return (
    <main className={styles.main}>
      <Contacts></Contacts>
    </main>
  )
}
