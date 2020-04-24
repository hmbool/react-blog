import React, { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import { Row, Col, Breadcrumb } from 'antd'
import { CalendarTwoTone, FireTwoTone, FolderOpenTwoTone } from '@ant-design/icons'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'


const Detailed = () => {

  return (
    <>
      <Head>
        <title>博客详情页</title>
      </Head>
      <div>
        <Header />
        <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={24} sm={24} md={10} lg={15} xl={12}>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href='/'>首页</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href='/life/'>生活</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href='/category/'>分类</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href='/archives/'>归档</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href='/links/'>友人帐</a></Breadcrumb.Item>
                <Breadcrumb.Item>视频</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className="detailed-title">
                React实战视频教程
              </div>

              <div className="list-icon center">
                <span><CalendarTwoTone /> 2019-06-28 </span>
                <span><FolderOpenTwoTone /> 视频教程 </span>
                <span><FireTwoTone /> 5498人 </span>
              </div>
            </div>
          </Col>
          <Col className="comm-right" xs={0} sm={0} md={14} lg={8} xl={8}>
            <Author />
            <Advert />
          </Col>
        </Row>
        <Footer />
      </div>
    </>
  )
}

export default Detailed