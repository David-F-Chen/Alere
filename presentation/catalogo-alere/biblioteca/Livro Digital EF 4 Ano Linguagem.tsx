import React from 'react'
import style from './catalogo-alere.module.scss'
import { Image, Row, Col } from 'antd'


const LD4AL: React.FC = () => {
  return (
    <Col xl={24} md={24} sm={24} className={style.whiteBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image src='/assets/catalogoalere/Topo.png' preview={false} />  
      </Row>
      <Row justify='center' align='middle'>
      <Image src='/assets/catalogoalere/LDA10_titulo.png' preview={false} />
      <p></p>
      </Row>
      <Row justify='center' align='top'>
        <Image width={460} src='/assets/catalogoalere/LDA10.png' preview={false} />
        <ul>
        <Row justify='space-between' align='middle' className={style.listOrange3}>1 - Verbete        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>2 - Bob em: Aventura da Pontuação       </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>3 - Jogo da Pontuação        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>4 - Sinais de Pontuação        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>5 - Carta        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>6 - Regras do Jogo: Dominó        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>7 - Texto Instrucional: dobradura de cachorro       </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>8 - Instruções de Confecções       </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>9 - Jogo dos Verbos        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>10 - Poema: Palavras com X ou CH        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>11 - Futebol dos Acentos       </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>12 - Carta de Reclamação       </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>13 - Aventura das vogais: Aprendendo encontro vocálico        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>14 - Poema e Rima       </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>15 - Escalada das Rimas        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>16 - Desafio 2 :Dicionário        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>17 - Um encontro diferente: Aprendendo Dígrafos        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>18 - Fábula        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>19 - João e Maria        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>20 - João e o pé de Feijão        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>21 - Aprendendo ortografia - s, ss, c, ç, sc, xc       </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>22 - Aprendendo ortografia - s, z e g       </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>23 - Aprendendo ortografia - s e z        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>24 - Jogo dos pronomes       </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>25 - Jogo dos pronomes 2       </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>26 - Concordância Verbal        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>27 - Concordância Nominal        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>28 - Basquete de palavras com Ç        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>29 - Pronomes em frases       </Row>
        <p></p>
        </ul>
        </Row>
      <Row justify='center' align='middle' gutter={[16, 20]}>
      <Image src='/assets/catalogoalere/LDA10_game.png' preview={false} />
      </Row>
    </Col>
  )
}

export default LD4AL;
