import React from 'react'
import style from './catalogo-alere.module.scss'
import { Image, Row, Col } from 'antd'


const LD2AL: React.FC = () => {
  return (
    <Col xl={24} md={24} sm={24} className={style.whiteBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image src='/assets/catalogoalere/Topo.png' preview={false} />  
      </Row>
      <Row justify='center' align='middle'>
      <Image src='/assets/catalogoalere/LDA6_titulo.png' preview={false} />
      <p></p>
      </Row>
      <Row justify='center' align='middle'>
        <Image width={440} src='/assets/catalogoalere/LDA6.png' preview={false} />
        <ul>
        <Row justify='space-between' align='middle' className={style.listOrange}>1 - Símbolos, letras e números       </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}> 2 - Ordenando palavras        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>3 - Lista: aprendendo ordem alfabética        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>4 - Texto Instrucional: Dobradura de papel        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>5 - Bula de remédio        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>6 - Sílabas mágicas        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>7 - Texto instrucional: Como lavar bem as mãos        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>8 - Lagoa das sílabas 2        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>9 - Regras do jogo: dominó        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>10 - Escrevendo palavras: contos infantis        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>11 - João e o pé de feijão        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>12 - Conto João e Maria: juntando sílabas e tamanho das palavras        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>13 - História em quadrinhos        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>14 - Poema e rima        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>15 - Poema: A mina da rima        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>16 - Convite: aprendendo a separar sílabas        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>17 - Um encontro diferente: aprendendo dígrafo        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>18 - Aprendendo a escrever: Uso do h        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>19 - Receita culinária e cardápio        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>20 - Aprendendo a escrever M antes de P e B        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>21 - Formando palavras        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>22 - Jogo do des, in, im        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>23 - Desafio 2: dicionário        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>24 - Ordenando palavras 2        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>25 - Brincadeiras de ontem e de hoje 2        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>26 - Adicionando sílabas       </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>27 - De olho nas palavras 2: com f/v, p/b e t/d        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}> 28 - Formação de palavras e ão, inho e zinho        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>29 - Instruções de brincadeiras        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>30 - Encontro Consonantal        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>31 - Sinais de pontuação        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>32 - Linha do tempo        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>33 - Detetive das sílabas        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>34 - Poema visual        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>35 - Translineação        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>36 - Legenda para fotos        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>37 - Termina com I ou com E?        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>38 - Será que termina com O ou com U?        </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>39 - Campanha da Conscientização        </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>40 - Tempo e lugar 41 - Noticia       </Row>
<p></p>
        </ul>
        </Row>
      <Row justify='center' align='middle' gutter={[16, 20]}>
      <Image src='/assets/catalogoalere/LDA6_game.png' preview={false} />
      </Row>
    </Col>
  )
}

export default LD2AL;
