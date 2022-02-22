import '../styles/globals.css'
import Card from './Card'



function MyApp({ Component, pageProps }) {
  return(
  <div className='bg-gray-400'>
    <Card {...pageProps} />

  </div> 
  )
}

export default MyApp
