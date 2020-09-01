import React, { Component } from 'react';

import classNames from 'classnames';
import styles from './highlight-product.module.scss';

class HighlightProduct extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.backgound}>
          <div className='color1'></div>
          <div className='color2'></div>
        </div>
        <div className={styles['outter-product']}>
          <div className={styles.product}>
            <div className='image'>
              <div className='color'></div>
              <img
                src='/images/simple-air-condition-wall.jpg'
                className={classNames('d-block')}
              />
            </div>
            <div className='info'>
              <p className='brand h3'>Mitsubishi</p>
              <p className='name h1'>Econo Air Mr. Slim</p>
              <p className='price h3'>12,000 - 46,000 บาท</p>
              <p className='description'>
                มิตซูบิชิ อิเล็คทริค ผู้นำเทคโนโลยีความเย็น
                ที่ไม่หยุดนิ่งในการพัฒนานวัตรกรรมใหม่ๆ
                เรามุ่งมั่นในการสร้างสรรค์ที่สุดแห่งเทคโนโลยีความเย็น
                เพื่อคุณภาพและความคงทน
                รวมไปถึงการประหยัดพลังงานและใส่ใจสิ่งแวดล้อม
                เพื่อสร้างความสุขให้ทุกคนเสมอมา เพราะ "เราคิด...จากชีวิตคุณ"
              </p>
              <ul className='description'>
                  <li>
                    Dual Barrier Coating X3
                    เคลือบสารในชิ้นส่วนของเครื่องปรับอากาศ
                    เพื่อลดการเกาะติดของฝุ่นและละอองน้ำมันที่ปะปนมาในอากาศ
                  </li>
                  <li>
                    Nano Platinum Filter แผ่นกรอง
                    อากาศที่ผสมอนุภาคแพลตินั่มที่มีขนาดเล็กระดับนาโน
                    ช่วยในการยับยั้งการเจริญเติบโตของแบคทีเรีย เชื้อรา
                    และกลิ่นไม่พึ่งประสงค์
                  </li>
                  <li>
                    Air Cleanning Filter
                    แผ่นฟอกอากาศไฟฟ้าสถิตย์ดักจับฝุ่นละอองและเชื้อโรค
                  </li>
                  <li>Econo Cool ช่วยประหยัดพลังงานเพิ่มขึ้น 20 % </li>
                  <li>Powerful Cool เพิ่มพลังการทำความเย็นได้อย่างรวดเร็ว </li>
                  <li>
                    Fuzzy Logic " I FEEL " Control
                    ระบบควบคุมอุณหภูมิจากความรู้สึก
                  </li>
                  <li>
                    Auto Restart ระบบเปิดเครื่องอัตโนมัติหลังเกิดกระแสไฟขัดข้อง
                  </li>
                  <li>
                    12 Hour ON/OFF Timer โปรแกรมการตั้งเวลาเปิด หรือ ปิด
                    ล่วงหน้า 12 ชั่วโมง
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HighlightProduct;
