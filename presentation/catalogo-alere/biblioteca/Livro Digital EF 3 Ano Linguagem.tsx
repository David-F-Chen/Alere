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
        <Row justify='space-between' align='middle' className={style.listOrange}>1 - Palavras com G e J        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>2 - Instrução de confecção        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>3 - Mina da Escrita: palavras com C e Qu        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>4 - Diário Pessoal        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>5 - Jogo dos Pronomes       </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>6 - Corta palavras R e RR        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>7 - Corta palavras S e SS        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>8 - S ou Z        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>9 - Trava-língua: separando sílabas        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>10 - Carta        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>11 - Caça-adjetivo        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>12 - Jogo da Pontuação       </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>13 - Sílaba misteriosa:lendas        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>14 - Sinais de pontuação        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>15 - Tirinha: verbos        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>16 - História em quadrinhos        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>17 - Rimas nas quadrinhas        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>18 - Lagoa das sílabas 2        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>19 - Detetive das sílabas        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>20 - Escalada das rimas        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>21 - Sílabas tônicas e suas classificações        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>22 - Futebol dos acentos        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>23 - Som do I e E       </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>24 - Será que termina com O ou U?        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>25 - Aprendendo a escrever: M antes de P ou B        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>26 - Futebol das palavras: Ge / Gi Gue / Gui        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>27 - Texto de divulgação científica        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>28 - Uso do r/rr        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>29 - Uso do s/ss        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>30 - Paragrafação        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>31 - Noticia        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>32 - Detetive da linguagem: verbos        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>33 - Conto: adjetivo        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>34 - Troca-troca de palavras        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>35 - Jogo dos pronomes 2        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>36 - Carta de reclamação        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>37 - Sufixos e prefixos        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>38 - Palavras com ch, lh, nh        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>39 - Anuncio publicitario       </Row>
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
