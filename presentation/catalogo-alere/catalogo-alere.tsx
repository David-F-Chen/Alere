import React from 'react'
import style from './catalogo-alere.module.scss'
import { Image, Card, Carousel} from 'antd'

const CatalogoAlere: React.FC = () => (
  <Card className={style.orangeBack}>
    <Carousel autoplay autoplaySpeed={3000}>
        <Image width={500} src='/assets/catalogoalere/Catálogo Livros Digitais Alere-01.png'/>
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
    </Carousel>
   </Card>
);

export default CatalogoAlere
