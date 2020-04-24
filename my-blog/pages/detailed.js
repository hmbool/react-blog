import Head from 'next/head'
import Header from '../components/Header'
import { Row, Col } from 'antd'

const Detailed = () => {
  return (
    <div className="container">
      <Head>
        <title>织梦</title>
      </Head>
      <div> 
        <Header />
        <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={24} sm={24} md={10} lg={15} xl={12}>
            左侧
          </Col>
          <Col className="comm-right" xs={0} sm={0} md={14} lg={8} xl={8}>
            右侧
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Detailed