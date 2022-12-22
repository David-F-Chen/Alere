import React from 'react'
import style from './catalogo-alere.module.scss'
import { Image, Row, Col } from 'antd'


const LD3AL: React.FC = () => {
  return (
    <Col xl={24} md={24} sm={24} className={style.whiteBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image src='/assets/catalogoalere/Topo.png' preview={false} />  
      </Row>
      <Row justify='center' align='middle'>
      <Image src='/assets/catalogoalere/LDA8_titulo.png' preview={false} />
      <p></p>
      </Row>
      <Row justify='center' align='middle'>
        <Image width={440} src='/assets/catalogoalere/LDA8.png' preview={false} />
        <ul>
        <Row justify='space-between' align='middle' className={style.listOrange}>29 - Flores     </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>30 - Escaladão das palavras   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>31 - Desafio dos bichos   </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>32 - Fazendinha da rima   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>33 - Brincadeiras cantadas    </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>34 - Detetive das sílabas   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>35 - Escrevendo palavras: contos infantis  </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>36 - Formando palavras    </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>37 - Bob em: aventura da pontuação </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>38 - De olho nas palavras: d/t e</Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>39 - Invertendo as sílabas   </Row>
<p></p>
        </ul>
        </Row>
      <Row justify='center' align='middle' gutter={[16, 20]}>
      <Image src='/assets/catalogoalere/LDA8_game.png' preview={false} />
      </Row>
    </Col>
  )
}

export default LD3AL;
