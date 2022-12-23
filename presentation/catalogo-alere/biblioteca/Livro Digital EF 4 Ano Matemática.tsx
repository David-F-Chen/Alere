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
      <Row justify='center' align='top'>
        <Image width={440} src='/assets/catalogoalere/LDA11.png' preview={false} />
        <ul>
        <Row justify='space-between' align='middle' className={style.listOrange}>1 - Números Cardinais e Egípcios 2      43 - Números na forma decimal  </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>2 - Futebol dos números 4       </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>3 - Sistema de numeração decimal        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>4 - Sequência numérica: maior ou menor        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>5 - Somando e aprendendo com a reta númerica        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>6 - Acertando a adição 4        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>7 - Bob e a subtração 4        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>8 - Acertando as operações soma e subtração        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>9 - Mina da multiplicação 4        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>10 - Vamos multiplicar?        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>11 - Jogo da metade, dobro e terça parte       </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>12 - Problemas envolvendo divisão        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>13 - Futebol da divisão 4        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>14 - Aventura com o Bob 5: multiplicação e divisão        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>15 - Formas espaciais 2        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>16 - Poliedros e corpo redondos        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>17 - Sequência e Percurso        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>18 - Formas espaciais no cotidiano        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>19 - Aprendendo com o tempo        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>20 - Aprendendo com as horas        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>21 - Sólidos Geométricos        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>22 - Figuras geométricas planas        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>23 - Polígonos 2        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>24 - Tangram Moradias        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>25 - Ângulos 2       </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}> 26 - Polígonos       </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>27 - Jogo da simetria        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>28 - Detetive das medidas 1        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>29 - Detetive das medidas 2        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>30 - Detetive das medidas 3: com operações        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>31 - Área        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>32 - Área das figuras        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>33 - Perímetro       </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}> 34 - Perímetro e distância        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>35 - Máquinas das surpresas        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>36 - Máquina de dinheiro 2        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>37 - Dinheiro        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>38 - Problemas envolvendo dinheiro        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>39 - Problemas envolvendo dinheiro 2        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>40 - Sistema de numeração decimal 2        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>41 - Operações com numeros na forma decimal        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>42 - Números Fracionários        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>43 - Números na forma decimal       </Row>
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
