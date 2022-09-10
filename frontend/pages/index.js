import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Landing(){
    return (
        <div className={styles.container}>
            <Head>
                <title>CC App - Log in or Sign up</title>
                <meta name="description" content="Code Community App - A social media app built with Django and Next.js" />
                <link rel="icon" href="/cc_logo.png" />
            </Head>

            <main className={styles.main}>
                <div className={`${styles.card} ${styles.signForm}`}>
                    <form className={styles.form}>
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Password" />
                        <button>Log In</button>
                        <p>Forgot password?</p>
                        <hr />
                        <button style={{marginBottom: 0}}>Sign up</button>
                    </form>
                </div>
            </main>

            <footer className={`${styles.footer}`}>
                <p>Copyright 2022 Company Name</p>
                <Image src="/cc_logo.png" width={50} height={50}></Image>
            </footer>
        </div>
    )
}