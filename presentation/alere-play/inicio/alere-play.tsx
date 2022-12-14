import React, { useState } from 'react';
import style from './alere-play.module.scss'
import { Image, Row, Card} from 'antd';

const AlerePlay: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
    <Card className={style.orangeBack}>
    <Row justify='center' align='middle' gutter={[16, 20]}>
      <Image
        preview={{ visible: false }}
        width={300}
        src='/assets/alereplay/ALEREPLAY_01.jpg'
        onClick={() => setVisible(true)}
      />
    </Row>
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
        <Image width={50} src='/assets/alereplay/ALEREPLAY_02.jpg'/>
        <Image width={200} src='/assets/alereplay/ALEREPLAY_03.jpg'/>
        <Image width={200} src='/assets/alereplay/ALEREPLAY_04.jpg'/>
        <Image width={200} src='/assets/alereplay/ALEREPLAY_05.jpg'/>
        <Image width={200} src='/assets/alereplay/ALEREPLAY_06.jpg'/>
        <Image width={200} src='/assets/alereplay/ALEREPLAY_07.jpg'/>
        <Image width={200} src='/assets/alereplay/ALEREPLAY_08.jpg'/>
        <Image width={200} src='/assets/alereplay/ALEREPLAY_09.jpg'/>
        <Image width={200} src='/assets/alereplay/ALEREPLAY_10.jpg'/>
        <Image width={200} src='/assets/alereplay/ALEREPLAY_11.jpg'/>
        <Image width={200} src='/assets/alereplay/ALEREPLAY_12.jpg'/>
        <Image width={200} src='/assets/alereplay/ALEREPLAY_13.jpg'/>
        <Image width={200} src='/assets/alereplay/ALEREPLAY_14.jpg'/>
        <Image width={200} src='/assets/alereplay/ALEREPLAY_15.jpg'/>
        <Image width={200} src='/assets/alereplay/ALEREPLAY_16.jpg'/>
        </Image.PreviewGroup>
      </div>
    </Card>
    </>
  );
};
export default AlerePlay