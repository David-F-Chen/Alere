import React from 'react'
import style from './catalogo-alere.module.scss'
import { Image, Row, Col } from 'antd'


const LD1AM: React.FC = () => {
  return (
    <Col xl={24} md={24} sm={24} className={style.whiteBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image src='/assets/catalogoalere/Topo.png' preview={false} />  
      </Row>
      <Row justify='center' align='middle'>
      <Image src='/assets/catalogoalere/LDA5_titulo.png' preview={false} />
      <p></p>
      </Row>
      <Row justify='center' align='middle'>
        <Image width={460} src='/assets/catalogoalere/LDA5.png' preview={false} />
        <ul>
        <Row justify='space-between' align='middle' className={style.listOrange3}>1 - Quantidades     </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>2 - Vamos brincar de contar?  </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>3 - Figuras geométricas planas 1  </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>4 - Vamos reciclar?!    </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>5 - Futebol dos conjuntos   </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>6 - Números: antes, depois e sequência </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>7 - Acertando a soma 1  </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>8 - Vamos jogar: subtração   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>9 - Posicionamento     </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>10 - Sequência e percurso   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>11 - Calendário do Beto   </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>12 - Localização na malha 2  </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>13 - Praia     </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>14 - Sólidos Geométricos    </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>15 - Formas espaciais no cotidiano  </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>16 - Calendário do Bob   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>17 - Aprendendo com os gráficos  </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>18 - Aprendendo com as horas  </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>19 - Futebol dos números: dezena  </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>20 - Jogo da decomposição   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>21 - Bob e a aventura do dinheiro</Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>22 - Problemas envolvendo dinheiro   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>23 - Detetive das medidas 1  </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>24 - Formas geométricas no cotidiano  </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>25 - Sequência Numérica: 10 a 100 </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>26 - Jogo da simetria 1  </Row>
        <Row justify='space-between' align='middle' className={style.listOrange3}>27 - Aprendendo com gráficos e tabelas </Row>
        <Row justify='space-between' align='middle' className={style.listBlack3}>28 - Jogo da metade e dobro </Row>
        <p></p>
        </ul>
        </Row>
      <Row justify='center' align='middle' gutter={[16, 20]}>
      <Image src='/assets/catalogoalere/LDA5_game.png' preview={false} />
      </Row>
    </Col>
  )
}

export default LD1AM;
