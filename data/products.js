import { faFilter } from '@fortawesome/free-solid-svg-icons';

const products = [
  {
    id: 1,
    name: 'Econo Air Mr. Slim',
    type: 'แอร์ผนัง',
    shortDescription:
      'Mitsubishi Electric air conditioners, inverter systems, clear that it is guaranteed that yes. The new standard in cooling Start at us.',
    properties: [
      'สารทำความเย็น R 32 สารทำความเย็นที่เป็นมิตรต่อสิ่งแวดล้อม ไม่มีส่วนผสมของคลอรีน ที่ไปทำลายโอโซนในชั้นบรรยากาศโลก',
      'Nano Platinum Filter แผ่นกรอง อากาศที่ผสมอนุภาคแพลตินั่มที่มีขนาดเล็กระดับนาโน ช่วยในการยับยั้งการเจริญเติบโตของแบลทีเรีย เชื้อรา และกลิ่นไม่พึ่งประสงค์',
      'Air Cleanning Filter แผ่นฟอกอากาศไฟฟ้าสถิตย์ดักจับฝุ่นละอองและเชื้อโรค',
      'Econo Cool ช่วยประหยัดพลังงานเพิ่มขึ้น 20 %',
      'Powerful Cool เพิ่มพลังการทำความเย็นได้อย่างรวดเร็ว',
      'Fuzzy Logic "I FEEL" Control ระบบควบคุมอุณหภูมิจากความรู้สึก Auto Restart ระบบเปิดเครื่องอัตโนมัติหลังเกิดกระแสไฟขัดข้อง 12 Hour ON/OFF Timer โปรแกรมการตั้งเวลาเปิด หรือ ปิด ล่วงหน้า 12 ชั่วโมง',
      'รับประกัน คอมเพรสเซอร์ 5 ปี แผงคอล์ยเย็น 3 ปี อะไหล่ภายในเครื่อง 1 ปี',
    ],
    featuries: [
      {
        title: 'ประหยัดไฟเบอร์ 5 ระดับ 1 ดาวทุกรุ่น',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/01-no5-1star.jpg',
        description:
          'ได้รับฉลากประหยัดไฟเบอร์ 5 ระดับ 1 ดาวทุกรุ่นด้วยค่า SEER ตั้งแต่ 18.11 ขึ้นไปให้คุณประหยัดค่าไฟฟ้าในทุกการใช้งาน',
      },
      {
        title: 'สารทำความเย็น R32',
        image: 'https://www.daikin.co.th/wp-content/uploads/2020/02/02-r32.jpg',
        description:
          'R32 เป็นสารทำความเย็นรักษ์โลกที่ใช้เป็นครั้งแรกในประเทศไทยโดยไดกิ้น มีความสามารถในการทำความเย็นมากกว่าสารทำความเย็น R22 และ R410A ทำให้คอมเพรสเซอร์ไม่ทำงานหนัก ส่งผลให้เย็นเร็วและประหยัดพลังงาน ไม่ทำลายชั้นบรรยากาศโอโซน และมีค่าศักยภาพที่ก่อให้เกิดภาวะโลกร้อน (GWP) น้อยกว่า R410A ถึง 3 เท่า ในประเทศญี่ปุ่นมียอดจำหน่ายสะสมเครื่องปรับอากาศแบบแยกส่วนติดผนังที่ใช้ R32 แล้วกว่าหนึ่งล้านเครื่อง',
      },
      {
        title: 'อินเวอร์เตอร์คอมเพรสเซอร์แบบสวิง',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/03-swing.jpg',
        description:
          'คอมเพรสเซอร์แบบสวิงของไดกิ้นพิเศษกว่าระบบอินเวอร์เตอร์ทั่วไป โดยแกนและโรลเลอร์ในการหมุนนั้นเชื่อมต่อเป็นชิ้นเดียวกัน ช่วยลดแรงเสียดทานและการสั่นสะเทือนได้เป็นอย่างมาก ลดการรั่วไหลของสารทำความเย็นในขณะที่ทำการบีบอัด ทำให้การทำงานเงียบลงและมีประสิทธิภาพยิ่งขึ้น เมื่อเริ่มการทำงานระบบจะเร่งรอบของคอมเพรสเซอร์ทำให้เย็นเร็ว และเมื่อถึงอุณหภูมิที่ตั้งไว้ระบบจะลดรอบของคอมเพรสเซอร์ลง ทำให้อุณหภูมิคงที่ ลดเสียงและการกระชากไฟ ประหยัดพลังงานกว่าระบบที่ไม่ใช่อินเวอร์เตอร์',
      },
      {
        title: 'ปรับอุณหภูมิได้แม่นยำและเย็นขึ้น "Precise Cooling"',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/04-precise.jpg',
        description:
          'รีโมทคอนโทรลแบบใหม่ สามารถปรับอุณหภูมิได้ครั้งละ 0.5 องศาเซลเซียส ทำให้คุณเข้าใกล้ความเย็นสบายที่สุดได้มากกว่า ทั้งยังสามารถปรับอุณหภูมิได้ต่ำสุดถึง 16 องศาเซลเซียส เพื่อความเย็นที่มากยิ่งขึ้น',
      },
      {
        title: 'ระบบป้องกันกลิ่นอับและเชื้อรา "Mold-proof Operation"',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/05-moldproof.jpg',
        description:
          'โดยทั่วไปหากไม่ได้มีการทำความสะอาดเครื่องปรับอากาศเป็นเวลานาน เมื่อเปิดใช้งานอาจมีกลิ่นไม่พึงประสงค์จากเชื้อราที่สะสมอยู่บริเวณแผงคอยล์เย็นหรือถาดรองน้ำทิ้ง ไดกิ้นสามารถลดกลิ่นอับและเชื้อราภายในเครื่องได้ง่ายๆ โดยกดปุ่ม Mold ค้างไว้ 2 วินาที หลังจากที่กดปุ่มหยุดทำงาน คอมเพรสเซอร์จะหยุดทำงาน เครื่องปรับอากาศจะเปลี่ยนเป็นโหมดพัดลมโดยอัตโนมัติเพื่อลดความชื้นภายในเครื่องเป็นเวลา 1 ชั่วโมง ทำให้ลดกลิ่นอับขณะเริ่มทำงานใหม่',
      },
    ],
    prices: [
      { model: 'MS-GN 09 VF', btu: 9000, price: 11000 },
      { model: 'MS-GN 13 VF', btu: 13000, price: 13500 },
      { model: 'MS-GN 15 VF', btu: 15000, price: 16800 },
      { model: 'MS-GN 18 VF', btu: 18000, price: 20300 },
      { model: 'MS-GN 24 VF', btu: 24000, price: 34500 },
    ],
    star: 5.0,
    IncludingInstallationFee: false,
    boxImage: '/images/simple-air-condition.jpg',
    images: [
      '/images/simple-air-condition-wall.jpg',
      '/images/simple-air-condition-wall-2.jpg',
      '/images/simple-air-condition-wall-3.jpg',
      '/images/simple-air-condition-wall-4.jpg',
    ],
    minPrice: 11000,
    maxPrice: 34500,
    website: 'http://www.google.co.th',
    tags: ['Mitsubishi Electric', 'R32', 'New', 'Hot'],
  },
  {
    id: 2,
    name: 'Happy Inverter KS Series',
    type: 'แอร์ผนัง',
    shortDescription:
      'The latest air conditioner inverter in 2020, more economical Peace of mind with quality Happy with the coldness Works with sound quietly. Solution R32.',
    properties: [
      'สารทำความเย็น R 32 สารทำความเย็นที่เป็นมิตรต่อสิ่งแวดล้อม ไม่มีส่วนผสมของคลอรีน ที่ไปทำลายโอโซนในชั้นบรรยากาศโลก',
      'Nano Platinum Filter แผ่นกรอง อากาศที่ผสมอนุภาคแพลตินั่มที่มีขนาดเล็กระดับนาโน ช่วยในการยับยั้งการเจริญเติบโตของแบลทีเรีย เชื้อรา และกลิ่นไม่พึ่งประสงค์',
      'Air Cleanning Filter แผ่นฟอกอากาศไฟฟ้าสถิตย์ดักจับฝุ่นละอองและเชื้อโรค',
      'Econo Cool ช่วยประหยัดพลังงานเพิ่มขึ้น 20 %',
      'Powerful Cool เพิ่มพลังการทำความเย็นได้อย่างรวดเร็ว',
      'Fuzzy Logic "I FEEL" Control ระบบควบคุมอุณหภูมิจากความรู้สึก Auto Restart ระบบเปิดเครื่องอัตโนมัติหลังเกิดกระแสไฟขัดข้อง 12 Hour ON/OFF Timer โปรแกรมการตั้งเวลาเปิด หรือ ปิด ล่วงหน้า 12 ชั่วโมง',
      'รับประกัน คอมเพรสเซอร์ 5 ปี แผงคอล์ยเย็น 3 ปี อะไหล่ภายในเครื่อง 1 ปี',
    ],
    featuries: [
      {
        title: 'ประหยัดไฟเบอร์ 5 ระดับ 1 ดาวทุกรุ่น',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/01-no5-1star.jpg',
        description:
          'ได้รับฉลากประหยัดไฟเบอร์ 5 ระดับ 1 ดาวทุกรุ่นด้วยค่า SEER ตั้งแต่ 18.11 ขึ้นไปให้คุณประหยัดค่าไฟฟ้าในทุกการใช้งาน',
      },
      {
        title: 'สารทำความเย็น R32',
        image: 'https://www.daikin.co.th/wp-content/uploads/2020/02/02-r32.jpg',
        description:
          'R32 เป็นสารทำความเย็นรักษ์โลกที่ใช้เป็นครั้งแรกในประเทศไทยโดยไดกิ้น มีความสามารถในการทำความเย็นมากกว่าสารทำความเย็น R22 และ R410A ทำให้คอมเพรสเซอร์ไม่ทำงานหนัก ส่งผลให้เย็นเร็วและประหยัดพลังงาน ไม่ทำลายชั้นบรรยากาศโอโซน และมีค่าศักยภาพที่ก่อให้เกิดภาวะโลกร้อน (GWP) น้อยกว่า R410A ถึง 3 เท่า ในประเทศญี่ปุ่นมียอดจำหน่ายสะสมเครื่องปรับอากาศแบบแยกส่วนติดผนังที่ใช้ R32 แล้วกว่าหนึ่งล้านเครื่อง',
      },
      {
        title: 'อินเวอร์เตอร์คอมเพรสเซอร์แบบสวิง',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/03-swing.jpg',
        description:
          'คอมเพรสเซอร์แบบสวิงของไดกิ้นพิเศษกว่าระบบอินเวอร์เตอร์ทั่วไป โดยแกนและโรลเลอร์ในการหมุนนั้นเชื่อมต่อเป็นชิ้นเดียวกัน ช่วยลดแรงเสียดทานและการสั่นสะเทือนได้เป็นอย่างมาก ลดการรั่วไหลของสารทำความเย็นในขณะที่ทำการบีบอัด ทำให้การทำงานเงียบลงและมีประสิทธิภาพยิ่งขึ้น เมื่อเริ่มการทำงานระบบจะเร่งรอบของคอมเพรสเซอร์ทำให้เย็นเร็ว และเมื่อถึงอุณหภูมิที่ตั้งไว้ระบบจะลดรอบของคอมเพรสเซอร์ลง ทำให้อุณหภูมิคงที่ ลดเสียงและการกระชากไฟ ประหยัดพลังงานกว่าระบบที่ไม่ใช่อินเวอร์เตอร์',
      },
      {
        title: 'ปรับอุณหภูมิได้แม่นยำและเย็นขึ้น "Precise Cooling"',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/04-precise.jpg',
        description:
          'รีโมทคอนโทรลแบบใหม่ สามารถปรับอุณหภูมิได้ครั้งละ 0.5 องศาเซลเซียส ทำให้คุณเข้าใกล้ความเย็นสบายที่สุดได้มากกว่า ทั้งยังสามารถปรับอุณหภูมิได้ต่ำสุดถึง 16 องศาเซลเซียส เพื่อความเย็นที่มากยิ่งขึ้น',
      },
      {
        title: 'ระบบป้องกันกลิ่นอับและเชื้อรา "Mold-proof Operation"',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/05-moldproof.jpg',
        description:
          'โดยทั่วไปหากไม่ได้มีการทำความสะอาดเครื่องปรับอากาศเป็นเวลานาน เมื่อเปิดใช้งานอาจมีกลิ่นไม่พึงประสงค์จากเชื้อราที่สะสมอยู่บริเวณแผงคอยล์เย็นหรือถาดรองน้ำทิ้ง ไดกิ้นสามารถลดกลิ่นอับและเชื้อราภายในเครื่องได้ง่ายๆ โดยกดปุ่ม Mold ค้างไว้ 2 วินาที หลังจากที่กดปุ่มหยุดทำงาน คอมเพรสเซอร์จะหยุดทำงาน เครื่องปรับอากาศจะเปลี่ยนเป็นโหมดพัดลมโดยอัตโนมัติเพื่อลดความชื้นภายในเครื่องเป็นเวลา 1 ชั่วโมง ทำให้ลดกลิ่นอับขณะเริ่มทำงานใหม่',
      },
    ],
    boxImage: '/images/simple-air-condition.jpg',
    images: [
      '/images/simple-air-condition-wall.jpg',
      '/images/simple-air-condition-wall-2.jpg',
      '/images/simple-air-condition-wall-3.jpg',
      '/images/simple-air-condition-wall-4.jpg',
      '/images/simple-air-condition-wall.jpg',
      '/images/simple-air-condition-wall-2.jpg',
      '/images/simple-air-condition-wall-3.jpg',
      '/images/simple-air-condition-wall-4.jpg',
      '/images/simple-air-condition-wall.jpg',
      '/images/simple-air-condition-wall-2.jpg',
      '/images/simple-air-condition-wall-3.jpg',
      '/images/simple-air-condition-wall-4.jpg',
    ],
    star: 5.0,
    minPrice: 13100,
    maxPrice: 36500,
    tags: ['Mitsubishi Electric', 'R32', 'New', 'Inverter'],
  },
  {
    id: 3,
    name: '3D Move Eye Human Sensor',
    type: 'แอร์ผนัง',
    shortDescription:
      'Superior with modern design Air conditioners LN Series With intelligent technology Inverter system Cost effective',
    properties: [
      'สารทำความเย็น R 32 สารทำความเย็นที่เป็นมิตรต่อสิ่งแวดล้อม ไม่มีส่วนผสมของคลอรีน ที่ไปทำลายโอโซนในชั้นบรรยากาศโลก',
      'Nano Platinum Filter แผ่นกรอง อากาศที่ผสมอนุภาคแพลตินั่มที่มีขนาดเล็กระดับนาโน ช่วยในการยับยั้งการเจริญเติบโตของแบลทีเรีย เชื้อรา และกลิ่นไม่พึ่งประสงค์',
      'Air Cleanning Filter แผ่นฟอกอากาศไฟฟ้าสถิตย์ดักจับฝุ่นละอองและเชื้อโรค',
      'Econo Cool ช่วยประหยัดพลังงานเพิ่มขึ้น 20 %',
      'Powerful Cool เพิ่มพลังการทำความเย็นได้อย่างรวดเร็ว',
      'Fuzzy Logic "I FEEL" Control ระบบควบคุมอุณหภูมิจากความรู้สึก Auto Restart ระบบเปิดเครื่องอัตโนมัติหลังเกิดกระแสไฟขัดข้อง 12 Hour ON/OFF Timer โปรแกรมการตั้งเวลาเปิด หรือ ปิด ล่วงหน้า 12 ชั่วโมง',
      'รับประกัน คอมเพรสเซอร์ 5 ปี แผงคอล์ยเย็น 3 ปี อะไหล่ภายในเครื่อง 1 ปี',
    ],
    featuries: [
      {
        title: 'ประหยัดไฟเบอร์ 5 ระดับ 1 ดาวทุกรุ่น',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/01-no5-1star.jpg',
        description:
          'ได้รับฉลากประหยัดไฟเบอร์ 5 ระดับ 1 ดาวทุกรุ่นด้วยค่า SEER ตั้งแต่ 18.11 ขึ้นไปให้คุณประหยัดค่าไฟฟ้าในทุกการใช้งาน',
      },
      {
        title: 'สารทำความเย็น R32',
        image: 'https://www.daikin.co.th/wp-content/uploads/2020/02/02-r32.jpg',
        description:
          'R32 เป็นสารทำความเย็นรักษ์โลกที่ใช้เป็นครั้งแรกในประเทศไทยโดยไดกิ้น มีความสามารถในการทำความเย็นมากกว่าสารทำความเย็น R22 และ R410A ทำให้คอมเพรสเซอร์ไม่ทำงานหนัก ส่งผลให้เย็นเร็วและประหยัดพลังงาน ไม่ทำลายชั้นบรรยากาศโอโซน และมีค่าศักยภาพที่ก่อให้เกิดภาวะโลกร้อน (GWP) น้อยกว่า R410A ถึง 3 เท่า ในประเทศญี่ปุ่นมียอดจำหน่ายสะสมเครื่องปรับอากาศแบบแยกส่วนติดผนังที่ใช้ R32 แล้วกว่าหนึ่งล้านเครื่อง',
      },
      {
        title: 'อินเวอร์เตอร์คอมเพรสเซอร์แบบสวิง',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/03-swing.jpg',
        description:
          'คอมเพรสเซอร์แบบสวิงของไดกิ้นพิเศษกว่าระบบอินเวอร์เตอร์ทั่วไป โดยแกนและโรลเลอร์ในการหมุนนั้นเชื่อมต่อเป็นชิ้นเดียวกัน ช่วยลดแรงเสียดทานและการสั่นสะเทือนได้เป็นอย่างมาก ลดการรั่วไหลของสารทำความเย็นในขณะที่ทำการบีบอัด ทำให้การทำงานเงียบลงและมีประสิทธิภาพยิ่งขึ้น เมื่อเริ่มการทำงานระบบจะเร่งรอบของคอมเพรสเซอร์ทำให้เย็นเร็ว และเมื่อถึงอุณหภูมิที่ตั้งไว้ระบบจะลดรอบของคอมเพรสเซอร์ลง ทำให้อุณหภูมิคงที่ ลดเสียงและการกระชากไฟ ประหยัดพลังงานกว่าระบบที่ไม่ใช่อินเวอร์เตอร์',
      },
      {
        title: 'ปรับอุณหภูมิได้แม่นยำและเย็นขึ้น "Precise Cooling"',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/04-precise.jpg',
        description:
          'รีโมทคอนโทรลแบบใหม่ สามารถปรับอุณหภูมิได้ครั้งละ 0.5 องศาเซลเซียส ทำให้คุณเข้าใกล้ความเย็นสบายที่สุดได้มากกว่า ทั้งยังสามารถปรับอุณหภูมิได้ต่ำสุดถึง 16 องศาเซลเซียส เพื่อความเย็นที่มากยิ่งขึ้น',
      },
      {
        title: 'ระบบป้องกันกลิ่นอับและเชื้อรา "Mold-proof Operation"',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/05-moldproof.jpg',
        description:
          'โดยทั่วไปหากไม่ได้มีการทำความสะอาดเครื่องปรับอากาศเป็นเวลานาน เมื่อเปิดใช้งานอาจมีกลิ่นไม่พึงประสงค์จากเชื้อราที่สะสมอยู่บริเวณแผงคอยล์เย็นหรือถาดรองน้ำทิ้ง ไดกิ้นสามารถลดกลิ่นอับและเชื้อราภายในเครื่องได้ง่ายๆ โดยกดปุ่ม Mold ค้างไว้ 2 วินาที หลังจากที่กดปุ่มหยุดทำงาน คอมเพรสเซอร์จะหยุดทำงาน เครื่องปรับอากาศจะเปลี่ยนเป็นโหมดพัดลมโดยอัตโนมัติเพื่อลดความชื้นภายในเครื่องเป็นเวลา 1 ชั่วโมง ทำให้ลดกลิ่นอับขณะเริ่มทำงานใหม่',
      },
    ],
    boxImage: '/images/simple-air-condition.jpg',
    images: [
      '/images/simple-air-condition.jpg',
      '/images/simple-air-condition.jpg',
      '/images/simple-air-condition.jpg',
      '/images/simple-air-condition.jpg',
      '/images/simple-air-condition.jpg',
      '/images/simple-air-condition.jpg',
      '/images/simple-air-condition.jpg',
      '/images/simple-air-condition.jpg',
    ],
    star: 5.0,
    minPrice: 28800,
    maxPrice: 43600,
    tags: ['Mitsubishi Electric', 'R32'],
  },
  {
    id: 4,
    name: 'Super Inverter',
    type: 'แอร์ผนัง',
    shortDescription:
      'The best in cooling technology Cost effective, energy saving with Dual Barrier Coating, reducing dust adhesion',
    properties: [
      'สารทำความเย็น R 32 สารทำความเย็นที่เป็นมิตรต่อสิ่งแวดล้อม ไม่มีส่วนผสมของคลอรีน ที่ไปทำลายโอโซนในชั้นบรรยากาศโลก',
      'Nano Platinum Filter แผ่นกรอง อากาศที่ผสมอนุภาคแพลตินั่มที่มีขนาดเล็กระดับนาโน ช่วยในการยับยั้งการเจริญเติบโตของแบลทีเรีย เชื้อรา และกลิ่นไม่พึ่งประสงค์',
      'Air Cleanning Filter แผ่นฟอกอากาศไฟฟ้าสถิตย์ดักจับฝุ่นละอองและเชื้อโรค',
      'Econo Cool ช่วยประหยัดพลังงานเพิ่มขึ้น 20 %',
      'Powerful Cool เพิ่มพลังการทำความเย็นได้อย่างรวดเร็ว',
      'Fuzzy Logic "I FEEL" Control ระบบควบคุมอุณหภูมิจากความรู้สึก Auto Restart ระบบเปิดเครื่องอัตโนมัติหลังเกิดกระแสไฟขัดข้อง 12 Hour ON/OFF Timer โปรแกรมการตั้งเวลาเปิด หรือ ปิด ล่วงหน้า 12 ชั่วโมง',
      'รับประกัน คอมเพรสเซอร์ 5 ปี แผงคอล์ยเย็น 3 ปี อะไหล่ภายในเครื่อง 1 ปี',
    ],
    featuries: [
      {
        title: 'ประหยัดไฟเบอร์ 5 ระดับ 1 ดาวทุกรุ่น',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/01-no5-1star.jpg',
        description:
          'ได้รับฉลากประหยัดไฟเบอร์ 5 ระดับ 1 ดาวทุกรุ่นด้วยค่า SEER ตั้งแต่ 18.11 ขึ้นไปให้คุณประหยัดค่าไฟฟ้าในทุกการใช้งาน',
      },
      {
        title: 'สารทำความเย็น R32',
        image: 'https://www.daikin.co.th/wp-content/uploads/2020/02/02-r32.jpg',
        description:
          'R32 เป็นสารทำความเย็นรักษ์โลกที่ใช้เป็นครั้งแรกในประเทศไทยโดยไดกิ้น มีความสามารถในการทำความเย็นมากกว่าสารทำความเย็น R22 และ R410A ทำให้คอมเพรสเซอร์ไม่ทำงานหนัก ส่งผลให้เย็นเร็วและประหยัดพลังงาน ไม่ทำลายชั้นบรรยากาศโอโซน และมีค่าศักยภาพที่ก่อให้เกิดภาวะโลกร้อน (GWP) น้อยกว่า R410A ถึง 3 เท่า ในประเทศญี่ปุ่นมียอดจำหน่ายสะสมเครื่องปรับอากาศแบบแยกส่วนติดผนังที่ใช้ R32 แล้วกว่าหนึ่งล้านเครื่อง',
      },
      {
        title: 'อินเวอร์เตอร์คอมเพรสเซอร์แบบสวิง',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/03-swing.jpg',
        description:
          'คอมเพรสเซอร์แบบสวิงของไดกิ้นพิเศษกว่าระบบอินเวอร์เตอร์ทั่วไป โดยแกนและโรลเลอร์ในการหมุนนั้นเชื่อมต่อเป็นชิ้นเดียวกัน ช่วยลดแรงเสียดทานและการสั่นสะเทือนได้เป็นอย่างมาก ลดการรั่วไหลของสารทำความเย็นในขณะที่ทำการบีบอัด ทำให้การทำงานเงียบลงและมีประสิทธิภาพยิ่งขึ้น เมื่อเริ่มการทำงานระบบจะเร่งรอบของคอมเพรสเซอร์ทำให้เย็นเร็ว และเมื่อถึงอุณหภูมิที่ตั้งไว้ระบบจะลดรอบของคอมเพรสเซอร์ลง ทำให้อุณหภูมิคงที่ ลดเสียงและการกระชากไฟ ประหยัดพลังงานกว่าระบบที่ไม่ใช่อินเวอร์เตอร์',
      },
      {
        title: 'ปรับอุณหภูมิได้แม่นยำและเย็นขึ้น "Precise Cooling"',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/04-precise.jpg',
        description:
          'รีโมทคอนโทรลแบบใหม่ สามารถปรับอุณหภูมิได้ครั้งละ 0.5 องศาเซลเซียส ทำให้คุณเข้าใกล้ความเย็นสบายที่สุดได้มากกว่า ทั้งยังสามารถปรับอุณหภูมิได้ต่ำสุดถึง 16 องศาเซลเซียส เพื่อความเย็นที่มากยิ่งขึ้น',
      },
      {
        title: 'ระบบป้องกันกลิ่นอับและเชื้อรา "Mold-proof Operation"',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/05-moldproof.jpg',
        description:
          'โดยทั่วไปหากไม่ได้มีการทำความสะอาดเครื่องปรับอากาศเป็นเวลานาน เมื่อเปิดใช้งานอาจมีกลิ่นไม่พึงประสงค์จากเชื้อราที่สะสมอยู่บริเวณแผงคอยล์เย็นหรือถาดรองน้ำทิ้ง ไดกิ้นสามารถลดกลิ่นอับและเชื้อราภายในเครื่องได้ง่ายๆ โดยกดปุ่ม Mold ค้างไว้ 2 วินาที หลังจากที่กดปุ่มหยุดทำงาน คอมเพรสเซอร์จะหยุดทำงาน เครื่องปรับอากาศจะเปลี่ยนเป็นโหมดพัดลมโดยอัตโนมัติเพื่อลดความชื้นภายในเครื่องเป็นเวลา 1 ชั่วโมง ทำให้ลดกลิ่นอับขณะเริ่มทำงานใหม่',
      },
    ],
    boxImage: '/images/simple-air-condition.jpg',
    images: [
      '/images/simple-air-condition.jpg',
      '/images/simple-air-condition.jpg',
      '/images/simple-air-condition.jpg',
      '/images/simple-air-condition.jpg',
      '/images/simple-air-condition.jpg',
    ],
    star: 5.0,
    minPrice: 16000,
    maxPrice: 50800,
    tags: ['Mitsubishi Electric', 'R32', 'Inverter', 'Hot'],
  },
  {
    id: 5,
    name: '3D Move Eye Human Sensor',
    type: 'แอร์ผนัง',
    shortDescription:
      'Superior with modern design Air conditioners LN Series With intelligent technology Inverter system Cost effective',
    properties: [
      'สารทำความเย็น R 32 สารทำความเย็นที่เป็นมิตรต่อสิ่งแวดล้อม ไม่มีส่วนผสมของคลอรีน ที่ไปทำลายโอโซนในชั้นบรรยากาศโลก',
      'Nano Platinum Filter แผ่นกรอง อากาศที่ผสมอนุภาคแพลตินั่มที่มีขนาดเล็กระดับนาโน ช่วยในการยับยั้งการเจริญเติบโตของแบลทีเรีย เชื้อรา และกลิ่นไม่พึ่งประสงค์',
      'Air Cleanning Filter แผ่นฟอกอากาศไฟฟ้าสถิตย์ดักจับฝุ่นละอองและเชื้อโรค',
      'Econo Cool ช่วยประหยัดพลังงานเพิ่มขึ้น 20 %',
      'Powerful Cool เพิ่มพลังการทำความเย็นได้อย่างรวดเร็ว',
      'Fuzzy Logic "I FEEL" Control ระบบควบคุมอุณหภูมิจากความรู้สึก Auto Restart ระบบเปิดเครื่องอัตโนมัติหลังเกิดกระแสไฟขัดข้อง 12 Hour ON/OFF Timer โปรแกรมการตั้งเวลาเปิด หรือ ปิด ล่วงหน้า 12 ชั่วโมง',
      'รับประกัน คอมเพรสเซอร์ 5 ปี แผงคอล์ยเย็น 3 ปี อะไหล่ภายในเครื่อง 1 ปี',
    ],
    featuries: [
      {
        title: 'ประหยัดไฟเบอร์ 5 ระดับ 1 ดาวทุกรุ่น',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/01-no5-1star.jpg',
        description:
          'ได้รับฉลากประหยัดไฟเบอร์ 5 ระดับ 1 ดาวทุกรุ่นด้วยค่า SEER ตั้งแต่ 18.11 ขึ้นไปให้คุณประหยัดค่าไฟฟ้าในทุกการใช้งาน',
      },
      {
        title: 'สารทำความเย็น R32',
        image: 'https://www.daikin.co.th/wp-content/uploads/2020/02/02-r32.jpg',
        description:
          'R32 เป็นสารทำความเย็นรักษ์โลกที่ใช้เป็นครั้งแรกในประเทศไทยโดยไดกิ้น มีความสามารถในการทำความเย็นมากกว่าสารทำความเย็น R22 และ R410A ทำให้คอมเพรสเซอร์ไม่ทำงานหนัก ส่งผลให้เย็นเร็วและประหยัดพลังงาน ไม่ทำลายชั้นบรรยากาศโอโซน และมีค่าศักยภาพที่ก่อให้เกิดภาวะโลกร้อน (GWP) น้อยกว่า R410A ถึง 3 เท่า ในประเทศญี่ปุ่นมียอดจำหน่ายสะสมเครื่องปรับอากาศแบบแยกส่วนติดผนังที่ใช้ R32 แล้วกว่าหนึ่งล้านเครื่อง',
      },
      {
        title: 'อินเวอร์เตอร์คอมเพรสเซอร์แบบสวิง',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/03-swing.jpg',
        description:
          'คอมเพรสเซอร์แบบสวิงของไดกิ้นพิเศษกว่าระบบอินเวอร์เตอร์ทั่วไป โดยแกนและโรลเลอร์ในการหมุนนั้นเชื่อมต่อเป็นชิ้นเดียวกัน ช่วยลดแรงเสียดทานและการสั่นสะเทือนได้เป็นอย่างมาก ลดการรั่วไหลของสารทำความเย็นในขณะที่ทำการบีบอัด ทำให้การทำงานเงียบลงและมีประสิทธิภาพยิ่งขึ้น เมื่อเริ่มการทำงานระบบจะเร่งรอบของคอมเพรสเซอร์ทำให้เย็นเร็ว และเมื่อถึงอุณหภูมิที่ตั้งไว้ระบบจะลดรอบของคอมเพรสเซอร์ลง ทำให้อุณหภูมิคงที่ ลดเสียงและการกระชากไฟ ประหยัดพลังงานกว่าระบบที่ไม่ใช่อินเวอร์เตอร์',
      },
      {
        title: 'ปรับอุณหภูมิได้แม่นยำและเย็นขึ้น "Precise Cooling"',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/04-precise.jpg',
        description:
          'รีโมทคอนโทรลแบบใหม่ สามารถปรับอุณหภูมิได้ครั้งละ 0.5 องศาเซลเซียส ทำให้คุณเข้าใกล้ความเย็นสบายที่สุดได้มากกว่า ทั้งยังสามารถปรับอุณหภูมิได้ต่ำสุดถึง 16 องศาเซลเซียส เพื่อความเย็นที่มากยิ่งขึ้น',
      },
      {
        title: 'ระบบป้องกันกลิ่นอับและเชื้อรา "Mold-proof Operation"',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/05-moldproof.jpg',
        description:
          'โดยทั่วไปหากไม่ได้มีการทำความสะอาดเครื่องปรับอากาศเป็นเวลานาน เมื่อเปิดใช้งานอาจมีกลิ่นไม่พึงประสงค์จากเชื้อราที่สะสมอยู่บริเวณแผงคอยล์เย็นหรือถาดรองน้ำทิ้ง ไดกิ้นสามารถลดกลิ่นอับและเชื้อราภายในเครื่องได้ง่ายๆ โดยกดปุ่ม Mold ค้างไว้ 2 วินาที หลังจากที่กดปุ่มหยุดทำงาน คอมเพรสเซอร์จะหยุดทำงาน เครื่องปรับอากาศจะเปลี่ยนเป็นโหมดพัดลมโดยอัตโนมัติเพื่อลดความชื้นภายในเครื่องเป็นเวลา 1 ชั่วโมง ทำให้ลดกลิ่นอับขณะเริ่มทำงานใหม่',
      },
    ],
    boxImage: '/images/simple-air-condition.jpg',
    images: [
      '/images/simple-air-condition.jpg',
      '/images/simple-air-condition.jpg',
      '/images/simple-air-condition.jpg',
      '/images/simple-air-condition.jpg',
      '/images/simple-air-condition.jpg',
    ],
    star: 5.0,
    minPrice: 28800,
    maxPrice: 43600,
    tags: ['Mitsubishi Electric', 'R32', 'Hot'],
  },
  {
    id: 6,
    name: 'Super Inverter',
    type: 'แอร์ผนัง',
    shortDescription:
      'The best in cooling technology Cost effective, energy saving with Dual Barrier Coating, reducing dust adhesion',
    properties: [
      'สารทำความเย็น R 32 สารทำความเย็นที่เป็นมิตรต่อสิ่งแวดล้อม ไม่มีส่วนผสมของคลอรีน ที่ไปทำลายโอโซนในชั้นบรรยากาศโลก',
      'Nano Platinum Filter แผ่นกรอง อากาศที่ผสมอนุภาคแพลตินั่มที่มีขนาดเล็กระดับนาโน ช่วยในการยับยั้งการเจริญเติบโตของแบลทีเรีย เชื้อรา และกลิ่นไม่พึ่งประสงค์',
      'Air Cleanning Filter แผ่นฟอกอากาศไฟฟ้าสถิตย์ดักจับฝุ่นละอองและเชื้อโรค',
      'Econo Cool ช่วยประหยัดพลังงานเพิ่มขึ้น 20 %',
      'Powerful Cool เพิ่มพลังการทำความเย็นได้อย่างรวดเร็ว',
      'Fuzzy Logic "I FEEL" Control ระบบควบคุมอุณหภูมิจากความรู้สึก Auto Restart ระบบเปิดเครื่องอัตโนมัติหลังเกิดกระแสไฟขัดข้อง 12 Hour ON/OFF Timer โปรแกรมการตั้งเวลาเปิด หรือ ปิด ล่วงหน้า 12 ชั่วโมง',
      'รับประกัน คอมเพรสเซอร์ 5 ปี แผงคอล์ยเย็น 3 ปี อะไหล่ภายในเครื่อง 1 ปี',
    ],
    featuries: [
      {
        title: 'ประหยัดไฟเบอร์ 5 ระดับ 1 ดาวทุกรุ่น',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/01-no5-1star.jpg',
        description:
          'ได้รับฉลากประหยัดไฟเบอร์ 5 ระดับ 1 ดาวทุกรุ่นด้วยค่า SEER ตั้งแต่ 18.11 ขึ้นไปให้คุณประหยัดค่าไฟฟ้าในทุกการใช้งาน',
      },
      {
        title: 'สารทำความเย็น R32',
        image: 'https://www.daikin.co.th/wp-content/uploads/2020/02/02-r32.jpg',
        description:
          'R32 เป็นสารทำความเย็นรักษ์โลกที่ใช้เป็นครั้งแรกในประเทศไทยโดยไดกิ้น มีความสามารถในการทำความเย็นมากกว่าสารทำความเย็น R22 และ R410A ทำให้คอมเพรสเซอร์ไม่ทำงานหนัก ส่งผลให้เย็นเร็วและประหยัดพลังงาน ไม่ทำลายชั้นบรรยากาศโอโซน และมีค่าศักยภาพที่ก่อให้เกิดภาวะโลกร้อน (GWP) น้อยกว่า R410A ถึง 3 เท่า ในประเทศญี่ปุ่นมียอดจำหน่ายสะสมเครื่องปรับอากาศแบบแยกส่วนติดผนังที่ใช้ R32 แล้วกว่าหนึ่งล้านเครื่อง',
      },
      {
        title: 'อินเวอร์เตอร์คอมเพรสเซอร์แบบสวิง',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/03-swing.jpg',
        description:
          'คอมเพรสเซอร์แบบสวิงของไดกิ้นพิเศษกว่าระบบอินเวอร์เตอร์ทั่วไป โดยแกนและโรลเลอร์ในการหมุนนั้นเชื่อมต่อเป็นชิ้นเดียวกัน ช่วยลดแรงเสียดทานและการสั่นสะเทือนได้เป็นอย่างมาก ลดการรั่วไหลของสารทำความเย็นในขณะที่ทำการบีบอัด ทำให้การทำงานเงียบลงและมีประสิทธิภาพยิ่งขึ้น เมื่อเริ่มการทำงานระบบจะเร่งรอบของคอมเพรสเซอร์ทำให้เย็นเร็ว และเมื่อถึงอุณหภูมิที่ตั้งไว้ระบบจะลดรอบของคอมเพรสเซอร์ลง ทำให้อุณหภูมิคงที่ ลดเสียงและการกระชากไฟ ประหยัดพลังงานกว่าระบบที่ไม่ใช่อินเวอร์เตอร์',
      },
      {
        title: 'ปรับอุณหภูมิได้แม่นยำและเย็นขึ้น "Precise Cooling"',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/04-precise.jpg',
        description:
          'รีโมทคอนโทรลแบบใหม่ สามารถปรับอุณหภูมิได้ครั้งละ 0.5 องศาเซลเซียส ทำให้คุณเข้าใกล้ความเย็นสบายที่สุดได้มากกว่า ทั้งยังสามารถปรับอุณหภูมิได้ต่ำสุดถึง 16 องศาเซลเซียส เพื่อความเย็นที่มากยิ่งขึ้น',
      },
      {
        title: 'ระบบป้องกันกลิ่นอับและเชื้อรา "Mold-proof Operation"',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/05-moldproof.jpg',
        description:
          'โดยทั่วไปหากไม่ได้มีการทำความสะอาดเครื่องปรับอากาศเป็นเวลานาน เมื่อเปิดใช้งานอาจมีกลิ่นไม่พึงประสงค์จากเชื้อราที่สะสมอยู่บริเวณแผงคอยล์เย็นหรือถาดรองน้ำทิ้ง ไดกิ้นสามารถลดกลิ่นอับและเชื้อราภายในเครื่องได้ง่ายๆ โดยกดปุ่ม Mold ค้างไว้ 2 วินาที หลังจากที่กดปุ่มหยุดทำงาน คอมเพรสเซอร์จะหยุดทำงาน เครื่องปรับอากาศจะเปลี่ยนเป็นโหมดพัดลมโดยอัตโนมัติเพื่อลดความชื้นภายในเครื่องเป็นเวลา 1 ชั่วโมง ทำให้ลดกลิ่นอับขณะเริ่มทำงานใหม่',
      },
    ],
    star: 5.0,
    boxImage: '/images/simple-air-condition.jpg',
    images: [
      '/images/simple-air-condition.jpg',
      '/images/simple-air-condition.jpg',
      '/images/simple-air-condition.jpg',
      '/images/simple-air-condition.jpg',
      '/images/simple-air-condition.jpg',
    ],
    minPrice: 16000,
    maxPrice: 50800,
    tags: ['Mitsubishi Electric', 'R32', 'Inverter', 'Hot'],
  },
  {
    id: 99,
    name: 'Amber ll',
    type: 'แอร์ผนัง',
    shortDescription:
      'ปัจจุบัน GREE เป็นผู้ผลิตเครื่องปรับอากาศที่ใหญ่ที่สุดในโลก ฐานการผลิตของ GREE มี 9 แห่งทั่วโลก ตั้งอยู่ในประเทศจีน 6 แห่ง คือ เมืองจูไห่(Zhuhai) ซึ่งเป็นสำนักงานใหญ่, เมืองชองควิง(Chongqing), เหอเฟย(Hefei), เจิ้งโจ(Zhenzhou), อู่ฮั่น(Wuhan), ฉือเจียจวง(Shijazhuang) ตั้งอยู่ในต่างประเทศ 3 แห่ง คือ ประเทศบราซิล, ปากีสถาน และเวียดนาม โดยมีเจ้าหน้าที่ชำนาญงานรวมทั้งหมดกว่า 80,000 คน',
    properties: [
      'I Feel เซนเซอร์อุณหภูมิในรีโมทคอนโทรล จะวัดอุณหภูมิโดยรอบและส่งสัญญาณกลับไปที่เครื่อง จากนั้นเครื่องจะปรับแรงลม และอุณหภูมิตามตำแหน่งที่รีโมทตั้งไว้ เพื่อจะให้ความสะดวกสบายสูงสุดให้แก่ผู้ใช้งาน',
      'Multi-Function Filter ด้วยการรวมเอา 3 ตัวกรองอากาศ จากสาร 6 ชนิด ที่แตกต่างกัน ซึ่งรวมทั้งอคาโรแบคทีเรียฟิลเตอร์, ซิลเวอร์ไอออนฟิลเตอร์, คาเตชินฟิลเตอร์, ฟอร์มาลดีไฮด์บีเกอร์ฟิลเตอร์ และวิตามินซีฟิลเตอร์ ตอบสนองความต้องการที่หลากหลายได้พร้อมๆกัน',
      'Self-Diagnosis หน้าตัวเครื่องจะมี Display  แสดงรหัสความบกพร่อง เพื่อความสะดวกสบายในการวิเคราะห์ เมื่อเครื่องมีปัญหา',
      'Sleep Mode เป็นโหมดเพิ่มความสดชื่นขณะที่หลับ เมื่อเลือกใช้โหมดนี้อุณหภูมิจะถูกปรับขึ้นในขณะที่คุณหลับ และปรับลงเล็กน้อยขณะที่คุณตื่น โดยการปรับอุณหภูมิดังกล่าวจะเป็นไปอย่างอัตโนมัติ',
      'Auto Clean (X-FAN) ทำความสะอาดอัตโนมัติ ภายหลังปิดเครื่องปรับอากาศแล้ว พัดลมภายในยังคงเป่าไล่ความชื้นภายในเครื่องทำให้เครื่องแห้งและสะอาดอยู่เสมอ เพื่อสุขอนามัยที่ดี',
    ],
    featuries: [
      {
        title: 'ประหยัดไฟเบอร์ 5 ระดับ 1 ดาวทุกรุ่น',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/01-no5-1star.jpg',
        description:
          'ได้รับฉลากประหยัดไฟเบอร์ 5 ระดับ 1 ดาวทุกรุ่นด้วยค่า SEER ตั้งแต่ 18.11 ขึ้นไปให้คุณประหยัดค่าไฟฟ้าในทุกการใช้งาน',
      },
      {
        title: 'สารทำความเย็น R32',
        image: 'https://www.daikin.co.th/wp-content/uploads/2020/02/02-r32.jpg',
        description:
          'R32 เป็นสารทำความเย็นรักษ์โลกที่ใช้เป็นครั้งแรกในประเทศไทยโดยไดกิ้น มีความสามารถในการทำความเย็นมากกว่าสารทำความเย็น R22 และ R410A ทำให้คอมเพรสเซอร์ไม่ทำงานหนัก ส่งผลให้เย็นเร็วและประหยัดพลังงาน ไม่ทำลายชั้นบรรยากาศโอโซน และมีค่าศักยภาพที่ก่อให้เกิดภาวะโลกร้อน (GWP) น้อยกว่า R410A ถึง 3 เท่า ในประเทศญี่ปุ่นมียอดจำหน่ายสะสมเครื่องปรับอากาศแบบแยกส่วนติดผนังที่ใช้ R32 แล้วกว่าหนึ่งล้านเครื่อง',
      },
    ],
    prices: [
      { model: 'GWC09YB', btu: 9000, price: 8200 },
      { model: 'GWC12YC', btu: 12000, price: 9200 },
      { model: 'GWC18QD', btu: 18000, price: 14900 },
      { model: 'GWC24YE', btu: 24000, price: 18500 },
    ],
    star: 3.0,
    IncludingInstallationFee: false,
    boxImage: '/images/amber-II-1.jpg',
    images: [
      '/images/amber-II-1.jpg',
      '/images/amber-II-2.jpg',
      '/images/amber-II-3.jpg',
      '/images/amber-II-4.jpg',
      '/images/amber-II-5.jpg',
      '/images/amber-II-6.jpg',
      '/images/amber-II-7.jpg',
    ],
    minPrice: 11000,
    maxPrice: 34500,
    website: 'http://www.google.co.th',
    tags: ['Gree', 'R32'],
  },
  {
    id: 100,
    name: 'Amber Inverter Series',
    type: 'แอร์ผนัง',
    shortDescription:
      'ปัจจุบัน GREE เป็นผู้ผลิตเครื่องปรับอากาศที่ใหญ่ที่สุดในโลก ฐานการผลิตของ GREE มี 9 แห่งทั่วโลก ตั้งอยู่ในประเทศจีน 6 แห่ง คือ เมืองจูไห่(Zhuhai) ซึ่งเป็นสำนักงานใหญ่, เมืองชองควิง(Chongqing), เหอเฟย(Hefei), เจิ้งโจ(Zhenzhou), อู่ฮั่น(Wuhan), ฉือเจียจวง(Shijazhuang) ตั้งอยู่ในต่างประเทศ 3 แห่ง คือ ประเทศบราซิล, ปากีสถาน และเวียดนาม โดยมีเจ้าหน้าที่ชำนาญงานรวมทั้งหมดกว่า 80,000 คน',
    properties: [
      'Turbo-Cooling แค่กดปุ่ม Turbo Button ก็สามารถเร่งความเย็นได้ เย็นสดชื่นทันใจ ไม่ต้องรอนาน',
      'Low Noise ด้วยเสียงรบกวนที่ต่ำเพียง 19 dB  ทำให้พักผ่อนได้สบายมากกว่าที่เคย',
      'Sleep Mode เพิ่มความสดชื่นเวลานอน โดยปรับอุณหภูมิเล็กน้อยตอนคุณหลับ เพื่อรักษาอุณหภูมิในร่างกายและปรับลงเล็กน้อยตอนคุณตื่นโดยจะปรับอย่างอัตโนมัติ',
      'Plasma Killer ระบบจะทำการฆ่าเชื้อแบคทีเรียได้อย่างมีประสิทธิภาพมากกว่า95% ช่วยกำจัดกลิ่นที่ไม่พึงประสงค์และปรับสภาพอากาศให้สะอาดบริสุทธิ์อยู่เสมอ',
      'Auto Clean (X-FAN) ทำความสะอาดอัตโนมัติ ภายหลังปิดเครื่องปรับอากาศแล้ว พัดลมภายในยังคงเป่าไล่ความชื้นภายในเครื่องทำให้เครื่องแห้งและสะอาดอยู่เสมอ เพื่อสุขอนามัยที่ดี',
    ],
    featuries: [
      {
        title: 'ประหยัดไฟเบอร์ 5 ระดับ 1 ดาวทุกรุ่น',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/01-no5-1star.jpg',
        description:
          'ได้รับฉลากประหยัดไฟเบอร์ 5 ระดับ 1 ดาวทุกรุ่นด้วยค่า SEER ตั้งแต่ 18.11 ขึ้นไปให้คุณประหยัดค่าไฟฟ้าในทุกการใช้งาน',
      },
      {
        title: 'สารทำความเย็น R32',
        image: 'https://www.daikin.co.th/wp-content/uploads/2020/02/02-r32.jpg',
        description:
          'R32 เป็นสารทำความเย็นรักษ์โลกที่ใช้เป็นครั้งแรกในประเทศไทยโดยไดกิ้น มีความสามารถในการทำความเย็นมากกว่าสารทำความเย็น R22 และ R410A ทำให้คอมเพรสเซอร์ไม่ทำงานหนัก ส่งผลให้เย็นเร็วและประหยัดพลังงาน ไม่ทำลายชั้นบรรยากาศโอโซน และมีค่าศักยภาพที่ก่อให้เกิดภาวะโลกร้อน (GWP) น้อยกว่า R410A ถึง 3 เท่า ในประเทศญี่ปุ่นมียอดจำหน่ายสะสมเครื่องปรับอากาศแบบแยกส่วนติดผนังที่ใช้ R32 แล้วกว่าหนึ่งล้านเครื่อง',
      },
    ],
    prices: [
      { model: 'GWC09QB', btu: 9000, price: 10300 },
      { model: 'GWC12QC', btu: 12000, price: 11300 },
      { model: 'GWC18QD', btu: 18000, price: 16700 },
      { model: 'GWC24QE', btu: 24000, price: 20600 },
    ],
    star: 3.0,
    IncludingInstallationFee: false,
    boxImage: '/images/amber-Inverter-7.jpg',
    images: [
      '/images/amber-Inverter-7.jpg',
      '/images/amber-Inverter-1.jpg',
      '/images/amber-Inverter-2.jpg',
      '/images/amber-Inverter-3.jpg',
      '/images/amber-Inverter-4.jpg',
      '/images/amber-Inverter-5.jpg',
      '/images/amber-Inverter-6.jpg',
      '/images/amber-Inverter-8.jpg',
      '/images/amber-Inverter-9.jpg',
    ],
    minPrice: 11000,
    maxPrice: 34500,
    website: 'http://www.google.co.th',
    tags: ['Gree', 'R32'],
  },
  {
    id: 101,
    name: 'TCL MIRACLE SERIES',
    type: 'แอร์ผนัง',
    shortDescription:
      'แอร์ TCL รุ่น Miracle Series ผสานเทคโนโลยี Titan Gold สามารถทำให้แผงคอยล์ภายในบ้าน สะอาดเหมือนใหม่ เคลือบสารสีทอง ป้องกันการจับเกาะของแบคทีเรีย และกลิ่นอับได้ดี',
    properties: [
      '5-Fan Speed สามารถปรับระดับความแรงของลมจาก Low ถึง Torbo',
      '3D Air Flow สามารถปรับบานพับที่อยู่ดานล่างของเครื่องได้ทั้งแบบขึ้น-ลง และซ้าย-ขวา ทำให้ห้องเยผ้นได้ทั่วถึง',
      '2Way Drain Pipe เพิ่มความสะดวกในการติดตั้งได้อย่างลงตัวด้วยท่อน้ำทิ้ง 2 ด้าน',
    ],
    featuries: [
      {
        title: 'ประหยัดไฟเบอร์ 5 ระดับ 1 ดาวทุกรุ่น',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/01-no5-1star.jpg',
        description:
          'ได้รับฉลากประหยัดไฟเบอร์ 5 ระดับ 1 ดาวทุกรุ่นด้วยค่า SEER ตั้งแต่ 18.11 ขึ้นไปให้คุณประหยัดค่าไฟฟ้าในทุกการใช้งาน',
      },
      {
        title: 'สารทำความเย็น R32',
        image: 'https://www.daikin.co.th/wp-content/uploads/2020/02/02-r32.jpg',
        description:
          'R32 เป็นสารทำความเย็นรักษ์โลกที่ใช้เป็นครั้งแรกในประเทศไทยโดยไดกิ้น มีความสามารถในการทำความเย็นมากกว่าสารทำความเย็น R22 และ R410A ทำให้คอมเพรสเซอร์ไม่ทำงานหนัก ส่งผลให้เย็นเร็วและประหยัดพลังงาน ไม่ทำลายชั้นบรรยากาศโอโซน และมีค่าศักยภาพที่ก่อให้เกิดภาวะโลกร้อน (GWP) น้อยกว่า R410A ถึง 3 เท่า ในประเทศญี่ปุ่นมียอดจำหน่ายสะสมเครื่องปรับอากาศแบบแยกส่วนติดผนังที่ใช้ R32 แล้วกว่าหนึ่งล้านเครื่อง',
      },
    ],
    prices: [
      { model: 'MAC-10FSI', btu: 9000, price: 7200 },
      { model: 'MAC-13FSI', btu: 12000, price: 8200 },
      { model: 'MAC-19FSI', btu: 18000, price: 12500 },
      { model: 'MAC-25FSI', btu: 24000, price: 15700 },
    ],
    star: 3.0,
    IncludingInstallationFee: false,
    boxImage: '/images/tcl-miracle-01.png',
    images: [
      '/images/tcl-miracle-01.png',
      '/images/tcl-miracle-02.png',
      '/images/tcl-miracle-03.png',
      '/images/tcl-miracle-04.png',
    ],
    minPrice: 11000,
    maxPrice: 34500,
    website: 'http://www.google.co.th',
    tags: ['TCL', 'R32'],
  },
  {
    id: 102,
    name: 'TCL Elite Series',
    type: 'แอร์ผนัง',
    shortDescription:
      'แอร์ TCL รุ่น Miracle Series ผสานเทคโนโลยี Titan Gold สามารถทำให้แผงคอยล์ภายในบ้าน สะอาดเหมือนใหม่ เคลือบสารสีทอง ป้องกันการจับเกาะของแบคทีเรีย และกลิ่นอับได้ดี',
    properties: [
      'แผงทำความเย็น เคลือบสาร Titan Gold ที่จะช่วยเพิ่มประสิทธิภาพของการทำความเย็น',
      'การระบายน้ำบนแผงทำความเย็นอย่างรวดเร็ว ด้วยสารเคลือบ Titan gold',
      'ทำความสะอาดตัวเองได้ ลดการสะสมของฝุ่นละอองต่างๆ รวมถึงแบคทีเรียและสิ่งสกปรกอื่นๆ',
      'ช่วยยับยั้งการเกิดแบคทีเรีย บนแผงทำความเย็น ลดการเกิดกลิ่นไม่พึงประสงค์ภายในแอร์',
      '3D Air Flow ออโต้บานสวิง ขึ้น-ลง, ซ้าย-ขวา กระจายลมได้ 4 ทิศทาง แบบอัตโนมัติ',
      'สารทำความเย็นชนิด R32 เพื่อช่วยลดปัญหาผลกระทบและเป็นมิตรต่อสิ่งแวดล้อม',
      'ออกแบบมาเพื่อการประหยัดพลังงาน ควบคุมอุณหภูมิได้อย่างแม่นยำ ทำงานเงียบ',
      'Fast Cooling เย็นเร็วขึ้น 15% ด้วยเทคโนโลยีการเพิ่มความถี่สูงสุดของมอเตอร์ อินเวอร์เตอร์',
      'New Remote Controller เพิ่มความทันสมัย ด้วยการออกแบบรีโมทคอนโทรลให้ดูรูปทรงเพียวบาง',
    ],
    featuries: [
      {
        title: 'ประหยัดไฟเบอร์ 5 ระดับ 1 ดาวทุกรุ่น',
        image:
          'https://www.daikin.co.th/wp-content/uploads/2020/02/01-no5-1star.jpg',
        description:
          'ได้รับฉลากประหยัดไฟเบอร์ 5 ระดับ 1 ดาวทุกรุ่นด้วยค่า SEER ตั้งแต่ 18.11 ขึ้นไปให้คุณประหยัดค่าไฟฟ้าในทุกการใช้งาน',
      },
      {
        title: 'สารทำความเย็น R32',
        image: 'https://www.daikin.co.th/wp-content/uploads/2020/02/02-r32.jpg',
        description:
          'R32 เป็นสารทำความเย็นรักษ์โลกที่ใช้เป็นครั้งแรกในประเทศไทยโดยไดกิ้น มีความสามารถในการทำความเย็นมากกว่าสารทำความเย็น R22 และ R410A ทำให้คอมเพรสเซอร์ไม่ทำงานหนัก ส่งผลให้เย็นเร็วและประหยัดพลังงาน ไม่ทำลายชั้นบรรยากาศโอโซน และมีค่าศักยภาพที่ก่อให้เกิดภาวะโลกร้อน (GWP) น้อยกว่า R410A ถึง 3 เท่า ในประเทศญี่ปุ่นมียอดจำหน่ายสะสมเครื่องปรับอากาศแบบแยกส่วนติดผนังที่ใช้ R32 แล้วกว่าหนึ่งล้านเครื่อง',
      },
    ],
    prices: [
      { model: 'TAC-IVX9I', btu: 9000, price: 8200 },
      { model: 'TAC-IVX12I', btu: 12000, price: 9200 },
      { model: 'TAC-IVX18I', btu: 18000, price: 13500 },
      { model: 'TAC-IVX22I', btu: 24000, price: 15200 },
    ],
    star: 3.0,
    IncludingInstallationFee: false,
    boxImage: '/images/tcl-elite-01.jpg',
    images: ['/images/tcl-elite-01.jpg', '/images/tcl-elite-02.jpg'],
    minPrice: 11000,
    maxPrice: 34500,
    website: 'http://www.google.co.th',
    tags: ['TCL', 'R32'],
  },
];

export default products;
