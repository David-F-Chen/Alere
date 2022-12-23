import React from 'react'
import style from './catalogo-alere.module.scss'
import { Image, Row, Col } from 'antd'


const LD5AM: React.FC = () => {
  return (
    <Col xl={24} md={24} sm={24} className={style.whiteBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image src='/assets/catalogoalere/Topo.png' preview={false} />  
      </Row>
      <Row justify='center' align='middle'>
      <Image src='/assets/catalogoalere/LDA13_titulo.png' preview={false} />
      <p></p>
      </Row>
      <Row justify='center' align='middle'>
        <Image width={430} src='/assets/catalogoalere/LDA13.png' preview={false} />
        <ul>
        <Row justify='space-between' align='middle' className={style.listOrange}>1 - Classes e ordem dos números: quadro posicional      38 - Gráficos e porcentagem  </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>2 - Charada dos números 2        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>3 - Sequência Numérica 5       </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}> 4 - Aprendendo com gráficos e tabelas 5        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>5 - Acertando a adição 4        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>6 - Acertando as operações: adição e subtração        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>7 - Aventura com o Bob 5: multiplicação e divisão        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>8 - Futebol da divisão 4       </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}> 9 - Porcentagem        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>10 - Problemas envolvendo dinheiro 2        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>11 - Máquina de dinheiro 2        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>12 - Localização na malha        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>13 - Localização na malha 2        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>14 - Localização na malha 5        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>15 - Poliedros 5 ano       </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}> 16 - Ângulos        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>17 - Formas espaciais 2        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>18 - Ângulos 2        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>19 - Círculo e circunferência        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>20 - Polígonos 3        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>21 - Tipos de triângulos        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>22 - Quiz dos quadriláteros        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>23 - Ampliação e redução de figuras       </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>24 - Números na forma decimal        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>25 - Medidas de comprimento        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}> 26 - Medidas de massa        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>27 - Medidas de capacidade        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>28 - Aprendendo com o tempo        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>29 - Área       </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>30 - Área das figuras       </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>31 - Perímetro       </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>32 - Bob em: multiplicação com números decimais        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>33 - Bob em: divisão com números decimais        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>34 - Números fracionários        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>35 - Números mistos        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>36 - Operações com números fracionários        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>37 - Adição e subtração de fraços com denominadores diferentes        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>38 - Gráficos e porcentagem       </Row>
         <p></p>
        </ul>
        </Row>
      <Row justify='center' align='middle' gutter={[16, 20]}>
      <Image src='/assets/catalogoalere/LDA13_game.png' preview={false} />
      </Row>
    </Col>
  )
}

export default LD5AM;
