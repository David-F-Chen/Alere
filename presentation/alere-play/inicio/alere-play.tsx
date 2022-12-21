import React from 'react';
import style from './alere-play.module.scss'
import { Carousel, Image, Card, Col, Row} from 'antd';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Alereplay: React.FC = () => (
  <Card className={style.orangeBack}>
    <Carousel autoplay autoplaySpeed={2000}>
    <div>
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_01.png' preview={false} />
      </Row>
    </Col>
    </div>
    <div>
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_02.png' preview={false} />
      </Row>
    </Col>
    </div>
    <div>
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_03.png' preview={false} />
      </Row>
    </Col>
    </div>
    <div>
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_04.png' preview={false} />
      </Row>
    </Col>
    </div>
    <div>
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_05.png' preview={false} />
      </Row>
    </Col>
    </div>
    <div>
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_06.png' preview={false} />
      </Row>
    </Col>
    </div>
    <div>
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_07.png' preview={false} />
      </Row>
    </Col>
    </div>
    <div>
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_08.png' preview={false} />
      </Row>
    </Col>
    </div>
    <div>
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_09.png' preview={false} />
      </Row>
    </Col>
    </div>
    <div>
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_10.png' preview={false} />
      </Row>
    </Col>
    </div>
    <div>
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_11.png' preview={false} />
      </Row>
    </Col>
    </div>
    <div>
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_12.png' preview={false} />
      </Row>
    </Col>
    </div>
    <div>
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_13.png' preview={false} />
      </Row>
    </Col>
    </div>
    <div>
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_14.png' preview={false} />
      </Row>
    </Col>
    </div>
    <div>
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_15.png' preview={false} />
      </Row>
    </Col>
    </div>
    <div>
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_16.png' preview={false} />
      </Row>
    </Col>
    </div>
  </Carousel>
</Card>
)
export default Alereplay;