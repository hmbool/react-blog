import App from 'next/app'
import 'antd/dist/antd.css'
import '../public/pages/comm.css'
import '../public/pages/index.css'
import '../public/pages/detailed.css'
import '../public/components/header.css'
import '../public/components/author.css'
import '../public/components/advert.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
// export default App