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
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_1.png' preview={false} />
      </Row>
    </Col>
    </div>
    <div>
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_2.png' preview={false} />
      </Row>
    </Col>
    </div>
    <div>
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_3.png' preview={false} />
      </Row>
    </Col>
    </div>
    <div>
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_4.png' preview={false} />
      </Row>
    </Col>
    </div>
    <div>
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_5.png' preview={false} />
      </Row>
    </Col>
    </div>
    <div>
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_6.png' preview={false} />
      </Row>
    </Col>
    </div>
    <div>
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_7.png' preview={false} />
      </Row>
    </Col>
    </div>
    <div>
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_8.png' preview={false} />
      </Row>
    </Col>
    </div>
    <div>
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image width={1000} src='/assets/alereplay/ALEREPLAY_9.png' preview={false} />
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