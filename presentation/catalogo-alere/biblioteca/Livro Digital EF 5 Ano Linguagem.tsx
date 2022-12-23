import React from 'react'
import style from './catalogo-alere.module.scss'
import { Image, Row, Col } from 'antd'


const LD5AL: React.FC = () => {
  return (
    <Col xl={24} md={24} sm={24} className={style.whiteBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image src='/assets/catalogoalere/Topo.png' preview={false} />  
      </Row>
      <Row justify='center' align='middle'>
      <Image src='/assets/catalogoalere/LDA12_titulo.png' preview={false} />
      <p></p>
      </Row>
      <Row justify='center' align='middle'>
        <Image width={420} src='/assets/catalogoalere/LDA12.png' preview={false} />
        <ul>
        <Row justify='space-between' align='middle' className={style.listOrange}>1 - Texto instrucional        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>2 - Som do I e do E        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>3 - Será que é L ou será que é U?        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>4 - S ou Z       </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>5 - Vôlei do L        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>6 - Palavras com G e J        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>7 - Corta-palavras com S e SS        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>8 - De olho nas palavras: X ou CH        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>9 - Um encontro diferente: aprendendo dígrafos        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>10 - Aprendendo a escrever: M antes de P e B        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>11 - Anúncio publicitário: primitivo, derivado e composto       </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>12 - Poema: A lua no cinema        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>13 - Futebol dos acentos 2        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>14 - Jogo dos pronomes 2       </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}> 15 - Crônica        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>16 - Desafio 3: Leitura de um conto        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>17 - Desafio da Pontuação        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>18 - Jogo dos verbos        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>19 - Jogo dos verbos 2        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>20 - Tempo verbal        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>21 - Tempo verbal 2 - tempos do futuro        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>22 - desafio 2 dicionário        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>23 - Futebol dos acentos        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>24 - Tempo verbal 3 - pretérito mais que perfeito        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>25 - Texto de divulgação científica        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>26 - Conjunções        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>27 - Jogos dos pronomes 3        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>28 - Polissemia        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>29 - Conjunções 2        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>30 - Reportagem        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>31 - Jogo da pontuação        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>32 - Bob em a aventura da pontuação        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>33 - Fato e opinião        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>34 - Sílabas tônicas e suas classificações       </Row>
        <p></p>
        </ul>
        </Row>
      <Row justify='center' align='middle' gutter={[16, 20]}>
      <Image src='/assets/catalogoalere/LDA12_game.png' preview={false} />
      </Row>
    </Col>
  )
}

export default LD5AL;
