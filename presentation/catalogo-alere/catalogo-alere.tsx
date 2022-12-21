import React, { useState } from 'react';
import style from './catalogo-alere.module.scss'
import { Image, Row, Col, Card} from 'antd';

const CatalogoAlere: React.FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
    <Card className={style.orangeBack}>
    <Row justify='center' align='middle' gutter={[16, 20]}>
      <Image
        preview={{ visible: false }}
        width={1200}
        src='/assets/catalogoalere/Topo.png'
        onClick={() => setVisible(true)}
      />
    </Row>
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
        return(<Row justify='center' align='middle' gutter={[16, 20]}>
          <Image src='/assets/catalogoalere/Catálogo Livros Digitais Alere-01.png'preview={true} />
          <h1>A coleção Revisão dos Saberes tem como objetivo</h1>
        </Row>
        )
        <Image width={500} src='/assets/catalogoalere/Catálogo Livros Digitais Alere-02.png'/>
        <Image width={500} src='/assets/catalogoalere/Catálogo Livros Digitais Alere-03.png'/>
        <Image width={500} src='/assets/catalogoalere/Catálogo Livros Digitais Alere-04.png'/>
        <Image width={500} src='/assets/catalogoalere/Catálogo Livros Digitais Alere-05.png'/>
        <Image width={500} src='/assets/catalogoalere/Catálogo Livros Digitais Alere-06.png'/>
        <Image width={500} src='/assets/catalogoalere/Catálogo Livros Digitais Alere-07.png'/>
        <Image width={500} src='/assets/catalogoalere/Catálogo Livros Digitais Alere-08.png'/>
        <Image width={500} src='/assets/catalogoalere/Catálogo Livros Digitais Alere-09.png'/>
        <Image width={500} src='/assets/catalogoalere/Catálogo Livros Digitais Alere-10.png'/>
        <Image width={500} src='/assets/catalogoalere/Catálogo Livros Digitais Alere-11.png'/>
        <Image width={500} src='/assets/catalogoalere/Catálogo Livros Digitais Alere-12.png'/>
        <Image width={500} src='/assets/catalogoalere/Catálogo Livros Digitais Alere-13.png'/>     
        </Image.PreviewGroup>
      </div>
    </Card>
    </>
  );
};

export default CatalogoAlere