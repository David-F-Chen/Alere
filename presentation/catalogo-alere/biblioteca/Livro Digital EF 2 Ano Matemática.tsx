import React from 'react'
import style from './catalogo-alere.module.scss'
import { Image, Row, Col } from 'antd'


const LD2AM: React.FC = () => {
  return (
    <Col xl={24} md={24} sm={24} className={style.whiteBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image src='/assets/catalogoalere/Topo.png' preview={false} />  
      </Row>
      <Row justify='center' align='middle'>
      <Image src='/assets/catalogoalere/LDA7_titulo.png' preview={false} />
      <p></p>
      </Row>
      <Row justify='center' align='middle'>
        <Image width={435} src='/assets/catalogoalere/LDA7.png' preview={false} />
        <ul>
        <Row justify='space-between' align='middle' className={style.listOrange}>1 - Futebol dos conjuntos        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>2 - Números: antes, depois e sequência        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>3 - Futebol dos números: dezena        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>4 - Futebol dos números: centena, dezena, unidade        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>5 - Sistema de numeração decimal 2        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>6 - Bob e a aventura do dinheiro        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>7 - Vamos jogar: soma e subtração        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>8 - Problemas envolvendo dinheiro        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>9 - Acertando a soma 1        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>10 - Futebol da subtração        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>11 - Aprendendo com os gráficos e tabelas        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>12 - Calendário do Beto        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>13 - Aprendendo com o tempo        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>14 - Detetive das medidas 1        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>15 - Acertando a soma 2        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>16 - Bob e a subtração 2        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>17 - Detetive das medidas 2        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>18 - Localização na malha        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>19 - Formas espaciais no cotidiano        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>20 - Formas espaciais 1       </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>21 - Aprendendo com os dados        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>22 - Classe e ordem dos números - 3º ordem       </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>23 - Vamos somar! 20 a 50        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>24 - Subtração        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>25 - Jogo da decomposição       </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}> 26 - Sequência numérica: números pares, ímpares, crescente e descrente        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>27 - Aprendendo com o tempo 2        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>28 - Figuras geométricas planas        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>29 - Diversão com tangram        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>30 - Números: metade, dobro, triplo e quádruplo        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>31 - Números: metade, dobro, dúzia e meia dúzia        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>32 - Detetive das medidas 3: com operações        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>33 - Localização na malha - quadriculada        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>34 - Gráfico e tabela: soma e subtração        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>35 - Uma aventura com as centenas, dezenas e unidades        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>36 - É caro ou barato?        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>37 - Moedas brasileiras        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>38 - Cédulas Brasileiras        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>39 - Problemas envolvendo dinheiro 2       </Row>
        <p></p>
        </ul>
        </Row>
      <Row justify='center' align='middle' gutter={[16, 20]}>
      <Image src='/assets/catalogoalere/LDA7_game.png' preview={false} />
      </Row>
    </Col>
  )
}

export default LD2AM;
