import styles from '../styles/Home.module.css'
import TagSearch from '../components/TagSearch'

export default function Home() {
  return (
    <div className={styles.container}>
      <TagSearch />
    </div>
  )
}
