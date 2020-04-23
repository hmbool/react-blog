import Head from 'next/head'
import {Button} from 'antd'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div> 
        <Button>我是一个按钮</Button>
      </div>
    </div>
  )
}
