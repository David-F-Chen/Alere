import React from 'react'
import style from './catalogo-alere.module.scss'
import { Image, Row, Col } from 'antd'


const LD5A: React.FC = () => {
  return (
    <Col xl={24} md={24} sm={24} className={style.whiteBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image src='/assets/catalogoalere/Topo.png' preview={false} />  
      </Row>
      <Row justify='center' align='middle'>
      <Image src='/assets/catalogoalere/LDA3_titulo.png' preview={false} />
      <p></p>
      </Row>
      <Row justify='center' align='middle'>
        <Image width={490} src='/assets/catalogoalere/LDA3.png' preview={false} />
        <ul>
        <Row justify='space-between' align='middle' className={style.listOrange}>1 - Nomes próprios - quantidade  </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>2 - Quantas letras?    </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>3 - A mina da rima  </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>4 - Quantidades     </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>5 - Palavras e imagens   </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>6 - Uso da água   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>7 - Brinquedos e brincadeiras   </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>8 - Descobrindo brincadeiras: futebol   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>9 - Letras dos esportes   </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>10 - Cuidando do corpo   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>11 - Escalada do adivinha   </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>12 - Formas geométricas    </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>13 - Cômodos da casa (capa com várias</Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>14 - Descobrindo lugares: fazenda   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>15 - Comidas juninas - quantidade  </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>16 - Comidas típicas 2   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>17 - Festa junina    </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>18 - Historinhas infantis    </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>19 - Mina dos números   </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>20 - Fazendinha da rima   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>21 - Sequência numérica    </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>22 - Acerte as letras   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>23 - Antes e depois   </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>24 - Vamos reciclar!    </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>25 - Quantidades     </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>26 - Completando os nomes dos animais </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>27 - Limpe o rio   </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>28 - Sequência - quantidades   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>29 - Aprendendo as características dos bichos </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>30 - Brinquedos e brincadeiras   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>31 - Opostos: maior/menor alto/baixo   </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>32 - Estações do ano   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>33 - Aprendendo rimas    </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>34 - Alimentos saudáveis e não saudáveis </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>35 - Acertando a soma 1  </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>36 - Frutas 2    </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>37 - Escalada dos personagens infantis  </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>38 - Expressões 2    </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>39 - Sequência numérica    </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>40 - Sequência numérica 2   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>41 - Números 20 a 30  </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>42 - Opostos: curto/comprido largo/estreito   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>43 - Animais domésticos e selvagens  </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>44 - Rua     </Row>
        <p></p>
        </ul>
        </Row>
      <Row justify='center' align='middle' gutter={[16, 20]}>
      <Image src='/assets/catalogoalere/LDA3_game.png' preview={false} />
      </Row>
    </Col>
  )
}

export default LD5A;
