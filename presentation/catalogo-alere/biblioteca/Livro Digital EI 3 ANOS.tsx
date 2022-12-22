import React from 'react'
import style from './catalogo-alere.module.scss'
import { Image, Row, Col } from 'antd'


const LD3A: React.FC = () => {
  return (
    <Col xl={24} md={24} sm={24} className={style.whiteBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image src='/assets/catalogoalere/Topo.png' preview={false} />  
      </Row>
      <Row justify='center' align='middle'>
      <Image src='/assets/catalogoalere/LDA1_titulo.png' preview={false} />
      <p></p>
      </Row>
      <Row justify='center' align='middle'>
        <Image width={450} src='/assets/catalogoalere/LDA1.png' preview={false} />
        <ul>
        <Row justify='space-between' align='middle' className={style.listOrange}>1 - Corpo Humano    </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>2 - Minha família    </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>3 - Cômodos da casa   </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>4 - Moradias     </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>5 - Jogo do equilibrista   </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>6 - Jogo de montar o circo </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>7 - Conhecendo os animais   </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>8 - Cores     </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>9 - Rotina: dia e noite  </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>10 - Conhecendo os sentidos do corpo </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>11 - Cuidando do corpo   </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>12 - Frutas 1    </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>13 - Como nascem os seres vivos? </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>14 - Conhecendo a letra A  </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>15 - Qual letra começa?   </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>16 - Animais do mar   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>17 - Cachorros     </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>18 - Aprendendo as características dos bichos </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>19 - Trava-línguas     </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>20 - Jogo das letras   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>21 - Alimentos saudáveis e não saudáveis 1</Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>22 - Historinhas infantis    </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>23 - Localização: acima/abaixo dentro/fora   </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>24 - Meios de transporte - quantidades 1</Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>25 - Trânsito     </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>26 - Aprendendo com o trânsito  </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>27 - Acertando os acessórios das profissões </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>28 - Nomes próprios    </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>29 - Contando pontos    </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>30 - Montando casinhas    </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>31 - Cores 2    </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>32 - Letras e números   </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>33 - Chuva e sol 1  </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>34 - Mira certa e letra inicial </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>35 - Frutas - quantidades   </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>36 - São frutas ou não são frutas</Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>37 - Brinquedos e não brinquedos  </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>38 - Nomes próprios - quantidades  </Row>
        <Row justify='space-between' align='middle' className={style.listOrange}>39 - Brinquedos e brincadeiras 1  </Row>
        <Row justify='space-between' align='middle' className={style.listBlack}>40 - Mina dos números   </Row>
        <p></p>
        </ul>
        </Row>
      <Row justify='center' align='middle' gutter={[16, 20]}>
      <Image src='/assets/catalogoalere/LDA1_game.png' preview={false} />
      </Row>
    </Col>
  )
}

export default LD3A;
