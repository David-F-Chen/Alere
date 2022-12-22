import React from 'react'
import style from './catalogo-alere.module.scss'
import { Image, Row, Col } from 'antd'


const LD4AM: React.FC = () => {
  return (
    <Col xl={24} md={24} sm={24} className={style.whiteBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image src='/assets/catalogoalere/Topo.png' preview={false} />  
      </Row>
      <Row justify='center' align='middle'>
      <Image src='/assets/catalogoalere/LDA11_titulo.png' preview={false} />
      <p></p>
      </Row>
      <Row justify='center' align='middle'>
        <Image width={440} src='/assets/catalogoalere/LDA11.png' preview={false} />
        <ul>
        <Row justify='space-between' align='middle' className={style.listBlack}>38 - De olho nas palavras: d/t e</Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>39 - Invertendo as sílabas   </Row>
<p></p>
        </ul>
        </Row>
      <Row justify='center' align='middle' gutter={[16, 20]}>
      <Image src='/assets/catalogoalere/LDA11_game.png' preview={false} />
      </Row>
    </Col>
  )
}

export default LD4AM;
