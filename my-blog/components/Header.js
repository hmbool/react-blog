import React from 'react'

import { Row, Col, Menu } from 'antd'
import { HomeOutlined, YoutubeOutlined, SmileOutlined, BarsOutlined, LinkOutlined, CreditCardOutlined } from '@ant-design/icons'
const Header = () => (
  <div className="header">
    <Row type="flex" justify='center'>
      <Col xs={24} sm={24} md={10} lg={15} xl={12}>
        <span className="header-logo">织梦</span>
      </Col>
      <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={8}>
        <Menu mode='horizontal'>
          <Menu.Item key="home">
            <HomeOutlined />
              首页
          </Menu.Item>
          <Menu.Item key="video">
            <YoutubeOutlined />
              视频
          </Menu.Item>
          <Menu.Item key="life">
            <SmileOutlined />
              生活
          </Menu.Item>
          <Menu.Item key="category">
            <BarsOutlined  />
              分类
          </Menu.Item>
          <Menu.Item key="archives">
            <CreditCardOutlined />
              归档
          </Menu.Item>
          <Menu.Item key="links">
            <LinkOutlined />
              友人帐
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
)

export default Header