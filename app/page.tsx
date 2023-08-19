import Image from 'next/image'
import styles from './page.module.css'
import MainNav from '@/components/MainNav'
import MainPage from '@/components/MainPage'
export default function Home() {
  return (
    <main className={styles.main}>
      <MainNav/>
      <MainPage></MainPage>
    </main>
  )
}
