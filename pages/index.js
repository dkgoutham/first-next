import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comp/Footer'
import Navbar from '../comp/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja list | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam pariatur hic assumenda cum dignissimos nulla obcaecati eveniet. Inventore, natus ad eos beatae nam mollitia corporis in delectus dolorem, maiores veritatis! Earum mollitia labore ex sit iste autem inventore repellendus, laboriosam quidem temporibus consectetur amet dolorem, in aperiam reiciendis voluptas veritatis soluta omnis, ab dolorum quas rerum illo nihil tempore. Magnam facilis iusto delectus veritatis nobis! Rem eligendi dolore impedit totam non cupiditate et voluptatem reprehenderit blanditiis modi facilis libero provident veniam perspiciatis assumenda placeat sunt aut, distinctio minima sed. Quae alias consequatur natus a quo, culpa veritatis maxime fuga porro.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam pariatur hic assumenda cum dignissimos nulla obcaecati eveniet. Inventore, natus ad eos beatae nam mollitia corporis in delectus dolorem, maiores veritatis! Earum mollitia labore ex sit iste autem inventore repellendus, laboriosam quidem temporibus consectetur amet dolorem, in aperiam reiciendis voluptas veritatis soluta omnis, ab dolorum quas rerum illo nihil tempore. Magnam facilis iusto delectus veritatis nobis! Rem eligendi dolore impedit totam non cupiditate et voluptatem reprehenderit blanditiis modi facilis libero provident veniam perspiciatis assumenda placeat sunt aut, distinctio minima sed. Quae alias consequatur natus a quo, culpa veritatis maxime fuga porro.</p>
        <Link href="/ninjas">
          <a className={styles.btn} > List Ninjas </a>
        </Link>
      </div>
    </>
  )
}
