import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import UserInfo from '../components/user-info';
import UserPanel from '../components/user-panel';
import FormOverlay from '../components/form-overlay';
import AuthForm from '../components/auth-form';

export default function Home() {
  const { formIsShown } = useSelector(state => state.authFormReducer);

  return (
    <div className={styles.container}>
      <Head>
        <title>Авторизация</title>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      </Head>

      <header className={styles.header}>
        <UserInfo/>
      </header>

      <main className={styles.main}>
        <h1 className={styles.profile}>Личный профиль</h1>

        <ul className={styles.breadcrumbs}>
          <li className={styles['breadcrumbs__item']}>
            <a className={styles['breadcrumbs__link']} href='#'>Главная/</a>
          </li>
          <li className={styles['breadcrumbs__item']}>
            <a className={styles['breadcrumbs__link']} href='#'>Личный профиль</a>
          </li>
        </ul>

        <UserPanel/>

        {formIsShown ? <AuthForm/> : <FormOverlay/>}
      </main>
    </div>
  )
}
