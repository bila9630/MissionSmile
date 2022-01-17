import '../styles/globals.css'
import AuthContextProvider, { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  // const { currentUser } = useContext(AuthContext)
  // const router = useRouter()

  return (
    <AuthContextProvider>
      {/* {currentUser ? <Component {...pageProps} /> : router.replace("/login")} */}
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
