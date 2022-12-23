import React from 'react'
import style from './catalogo-alere.module.scss'
import { Image, Row, Col } from 'antd'


const LD3AM: React.FC = () => {
  return (
    <Col xl={24} md={24} sm={24} className={style.whiteBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image src='/assets/catalogoalere/Topo.png' preview={false} />  
      </Row>
      <Row justify='center' align='middle'>
      <Image src='/assets/catalogoalere/LDA9_titulo.png' preview={false} />
      <p></p>
      </Row>
      <Row justify='center' align='middle'>
        <Image width={420} src='/assets/catalogoalere/LDA9.png' preview={false} />
        <ul>
        <Row justify='space-between' align='middle' className={style.listOrange}>1 - Calendário do Bob        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>2 - Aprendendo com as horas        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>3 - Calendário do Beto        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>4 - Máquina das surpresas        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>5 - Máquina de dinheiro 2       </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>6 - Futebol dos números: centena, dezena e unidade - transformação numérica        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>7 - Futebol dos números 4        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>8 - Números: antes, depois e sequência        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>9 - Detetive das medidas 1       </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>10 - Detetive das medidas 2        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>11 - Somando e aprendendo com a reta numérica        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>12 - Acertando a soma 3        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>13 - Formas espaciais 1        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>14 - Formas espaciais no cotidiano        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>15 - Poliedros e corpos redondos        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>16 - Localização na malha        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>17 - Sequência e percurso       </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>18 - Figuras geométricas planas        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>19 - Problemas envolvendo a multiplicação        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>20 - Problemas envolvendo a divisão        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>21 - Problemas envolvendo dinheiro 2        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>22 - Problemas envolvendo a adição        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>23 - Problemas envolvendo a subtração       </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}> 24 - Tabelas: gastos e compras        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>25 - Expressões numéricas        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>26 - Analisando tabelas        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>27 - Medidas de massa com operações        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>28 - Medidas de capacidade: litro e ml        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>29 - Sólidos geométricos        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>30 - Polígonos        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>31 - Paralelogramos e trapézios        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>32 - Jogo da simetria e congruência       </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>33 - Ângulos e perímetros        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>34 - Multiplicação em malha quadriculada       </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>35 - Problemas envolvendo a multiplicação 2        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>36 - Aprendendo com o tempo 2        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>37 - Moedas brasileiras        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>38 - Explorando divisões        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>39 - Maior que, menor que, igual que       </Row>
        <p></p>
        </ul>
        </Row>
      <Row justify='center' align='middle' gutter={[16, 20]}>
      <Image src='/assets/catalogoalere/LDA9_game.png' preview={false} />
      </Row>
    </Col>
  )
}

export default LD3AM;
