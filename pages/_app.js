import '../styles/globals.css'
import AuthContextProvider, { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
