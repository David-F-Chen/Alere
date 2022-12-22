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
      <Image src='/assets/catalogoalere/LDA4_titulo.png' preview={false} />
      <p></p>
      </Row>
      <Row justify='center' align='middle'>
        <Image width={440} src='/assets/catalogoalere/LDA4.png' preview={false} />
        <ul>
        <Row justify='space-between' align='middle' className={style.listOrange}>1 - Nomes próprios    </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>2 - Brincando com as palavras  </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>3 - Folheto informativo: coronavírus   </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>4 - Fábula 1    </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>5 - Escrevendo Palavras    </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>6 - Mundo animal    </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>7 - Brincadeiras de ontem e hoje </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>8 - Contando palavras    </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>9 - Brinquedos e Brincadeiras   </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>10 - História em Quadrinhos   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>11 - Juntando as partes 1  </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>12 - Juntando as partes 2  </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>13 - Lista: aprendendo ordem alfabética  </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>14 - Ordenando Palavras    </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>15 - Escalada das rimas   </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>16 - Troca-letras do Conto João e o</Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>17 - Escrevendo Palavras 2   </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>18 - Adivinha     </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>19 - Som do I e E nas</Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>20 - Rima     </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>21 - Uso do R/RR   </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>22 - Brincando de detetive: parlendas  </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>23 - Trava-língua: separando sílabas   </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>24 - Sinais da pontuação   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>25 - Corta-palavras     </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>26 - Cubo das palavras   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>27 - Texto Instrucional: dobradura de papel </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>28 - De olho nas palavras: f/v e</Row>
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
      <Image src='/assets/catalogoalere/LDA4_game.png' preview={false} />
      </Row>
    </Col>
  )
}

export default LD3AM;
