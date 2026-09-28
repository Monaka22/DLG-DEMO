const copy = (language, thai, english) => language === 'th' ? thai : english
const sections = (language, rows) => rows.map(([thTitle,enTitle,th,en]) => `<section class="journal-section"><h2>${copy(language,thTitle,enTitle)}</h2><p>${copy(language,th,en)}</p></section>`).join('')

export function doctorStory(id, language) {
 const descriptions = {
  narin:['เน้นการทบทวนประวัติสุขภาพ ช่วงวัย และเป้าหมายของผู้รับบริการ ก่อนร่วมวางแผนตรวจสุขภาพและนัดติดตาม อธิบายผลตรวจด้วยภาษาที่เข้าใจง่าย เพื่อให้ผู้รับบริการเตรียมคำถามและร่วมตัดสินใจได้','Focuses on health history, life stage and personal goals before discussing screening and follow-up. Explains results clearly and welcomes questions.'],
  maya:['ให้คำปรึกษาด้านหัวใจโดยเริ่มจากรับฟังประวัติ อาการที่ต้องการพูดคุย และกิจวัตรประจำวัน ทบทวนข้อมูลการประเมินร่วมกับผู้รับบริการ พร้อมอธิบายทางเลือกและขั้นตอนติดตาม','Begins heart consultations with your history, concerns and daily routines. Reviews assessments together and explains available options and follow-up steps.'],
  pim:['ให้ความสำคัญกับบริบทการพักผ่อน ตารางชีวิต และสิ่งที่ผู้รับบริการสังเกตเกี่ยวกับการนอน ใช้การพูดคุยและข้อมูลที่นำมาเพื่อกำหนดประเด็นประเมินและการติดตามร่วมกัน','Explores rest patterns, daily schedules and your observations about sleep. Uses your notes and a personal conversation to plan assessment and follow-up.']
 }
 return copy(language,...(descriptions[id]||descriptions.narin))
}

export function centerStory(id,language) {
 const data={
  preventive:[['ก่อนเข้ารับบริการ','Before your visit','แจ้งเป้าหมายที่ต้องการตรวจและนำผลตรวจเดิมมาให้ทีมดูแลทบทวน ทีมงานจะช่วยยืนยันรายการตรวจและการเตรียมตัวตามแพ็กเกจที่เลือก','Share your screening goals and previous results. The team will confirm the selected assessments and preparation instructions.'],['หลังการประเมิน','After assessment','พบแพทย์เพื่อพูดคุยผลตรวจ ถามข้อสงสัย และกำหนดขั้นตอนติดตามที่เหมาะกับบริบทของคุณ','Discuss the results, ask questions and agree on follow-up suited to your circumstances.']],
  heart:[['การปรึกษาที่เริ่มจากข้อมูลของคุณ','A consultation built around your information','นำประวัติการดูแลและผลประเมินที่มีอยู่มาพูดคุย พร้อมจดประเด็นที่ต้องการคำอธิบายจากแพทย์เฉพาะทาง','Bring available care records and assessment results, along with questions you would like to discuss with the specialist.'],['เชื่อมการปรึกษากับแผนติดตาม','From consultation to follow-up','ทีมดูแลช่วยอธิบายรายการบริการที่แนะนำ ค่าใช้จ่าย และช่วงเวลาที่สะดวกก่อนนัดหมายครั้งถัดไป','The team explains recommended services, costs and suitable timing before your next appointment.']],
  brain:[['ทบทวนรูปแบบการพักผ่อน','Review your rest patterns','จดเวลาที่เข้านอน ตื่นนอน และประเด็นที่อยากพูดคุย เพื่อช่วยให้การปรึกษาเริ่มต้นจากภาพชีวิตประจำวันของคุณ','Note your usual bedtime, waking time and questions so the consultation starts with your daily context.'],['คำปรึกษาและบริการต่อเนื่อง','Consultation and continued care','รับคำอธิบายขั้นตอนประเมินจากทีมผู้เชี่ยวชาญ พร้อมช่องทางสอบถามและการนัดติดตามตามแผนที่ตกลงร่วมกัน','Receive an explanation of assessment steps, contact options and follow-up appointments agreed with the specialist.']],
  movement:[['เป้าหมายการเคลื่อนไหวของคุณ','Your movement goals','พูดคุยกิจกรรมที่อยากกลับไปทำและข้อจำกัดที่สังเกต ทีมดูแลจะใช้ข้อมูลเหล่านี้เพื่อเริ่มการประเมินเป็นรายบุคคล','Discuss activities you would like to return to and any limitations you have noticed, helping the team plan a personal assessment.'],['ติดตามความก้าวหน้าร่วมกัน','Review progress together','กำหนดเป้าหมายที่เข้าใจตรงกันและนัดทบทวนประสบการณ์หลังเข้ารับบริการกับทีมฟื้นฟู','Agree on clear goals and review your experience with the rehabilitation team at follow-up.']]
 }
 return sections(language,data[id]||data.preventive)
}

export function clinicArticleBody(id,language) {
 const data={
  'preventive-health':[['เริ่มจากเป้าหมายของการตรวจ','Start with your screening goals','ก่อนเลือกแพ็กเกจ ลองจดสิ่งที่อยากทราบเกี่ยวกับสุขภาพ พร้อมข้อมูลผลตรวจเดิม เพื่อพูดคุยเรื่องรายการตรวจที่เหมาะสมกับแพทย์','Before choosing a package, note what you want to understand and bring previous results to discuss suitable assessments with your doctor.'],['คำถามที่ควรถามก่อนนัด','Questions before booking','ถามว่าราคารวมบริการอะไร มีรายการเพิ่มเติมหรือไม่ ต้องเตรียมตัวอย่างไร และจะได้รับผลพร้อมคำอธิบายผ่านช่องทางใด','Ask what is included, whether additional services may be recommended, how to prepare and how results will be explained.']],
  'heart-habits':[['บันทึกกิจวัตรเพื่อเริ่มบทสนทนา','Use daily routines to start a conversation','จดกิจกรรมระหว่างวันและประเด็นที่กังวลไว้ก่อนปรึกษาแพทย์ ข้อมูลจากชีวิตจริงช่วยให้คุณอธิบายสิ่งที่ต้องการพูดคุยได้ชัดเจน','Note your daily activities and concerns before the consultation so you can explain what you would like to discuss.'],['ทบทวนขั้นตอนถัดไป','Review the next steps','หลังปรึกษา ถามให้ชัดเจนว่าควรติดตามเรื่องใดและเมื่อใด รวมถึงช่องทางติดต่อทีมดูแลหากต้องการคำอธิบายเพิ่มเติม','After the visit, clarify what to follow up, when to return and how to ask the team for further explanation.']],
  'better-sleep':[['มองการนอนในบริบทชีวิตประจำวัน','Understand sleep in your daily context','เวลางาน การเดินทาง และกิจกรรมช่วงเย็นเป็นประเด็นที่สามารถนำมาพูดคุยในการปรึกษาด้านการนอน จดข้อสังเกตของตัวเองเพื่อใช้ประกอบบทสนทนา','Work schedules, travel and evening routines are useful topics for a sleep consultation. Bring your own observations to the conversation.'],['เตรียมคำถามสำหรับผู้เชี่ยวชาญ','Prepare questions for the specialist','ถามเกี่ยวกับขั้นตอนการประเมิน สิ่งที่ต้องเตรียม และการติดตามหลังเข้ารับบริการ เพื่อเข้าใจแผนก่อนเริ่มต้น','Ask about assessment steps, preparation and follow-up so you understand the plan before starting.']]
 }
 return sections(language,data[id]||data['preventive-health'])
}

export function shopStories(language, photos) {
 return [
  {id:'reading-labels',cat:'PRODUCT GUIDE',title:copy(language,'เลือกสินค้าให้เข้าใจ เริ่มจากอ่านฉลาก','A thoughtful purchase starts with the label'),image:'/products/daily-greens.svg'},
  {id:'body-care-ritual',cat:'SELF-CARE NOTES',title:copy(language,'จัดมุมดูแลผิวให้เป็นช่วงเวลาของคุณ','Make room for a personal body-care ritual'),image:'/products/daily-oil.svg'},
  {id:'rest-on-the-go',cat:'EVERYDAY WELLNESS',title:copy(language,'ของชิ้นเล็กสำหรับช่วงพักและการเดินทาง','Small essentials for rest and travel'),image:'/products/sleep-mask.svg'}
 ]
}

export function shopArticleBody(id,language) {
 const data={
  'reading-labels':[['เริ่มจากข้อมูลที่ตรวจสอบได้','Start with clear product information','ดูชื่อสินค้า ปริมาณบรรจุ ส่วนประกอบ และคำแนะนำบนฉลาก เทียบข้อมูลกับสิ่งที่คุณต้องการใช้ ไม่ควรตัดสินใจจากข้อความโฆษณาเพียงอย่างเดียว','Review the name, pack size, ingredients and packaging directions. Compare the information with your needs rather than relying on advertising alone.'],['ถามก่อนซื้อเมื่อข้อมูลยังไม่ครบ','Ask before you buy','หากรายละเอียดไม่ชัดเจน ติดต่อทีมร้านเพื่อขอข้อมูลบรรจุภัณฑ์และเงื่อนไขการคืนสินค้า สำหรับคำถามเกี่ยวกับสุขภาพหรือความเหมาะสมในการใช้ ควรปรึกษาผู้เชี่ยวชาญ','Ask the store about packaging information and returns. Discuss health questions or suitability with a qualified professional.']],
  'body-care-ritual':[['เลือกมุมที่ใช้งานง่าย','Choose an easy-to-use space','จัดสินค้าที่ใช้เป็นประจำไว้ในพื้นที่สะอาดและหยิบสะดวก ตรวจคำแนะนำการเก็บรักษาบนบรรจุภัณฑ์และหลีกเลี่ยงการวางสินค้าปะปนกับของที่ไม่ได้ใช้งาน','Keep everyday products in a clean, convenient place. Follow storage instructions and organize only the products you use.'],['รู้จักสินค้าที่อยู่ในกิจวัตร','Know your everyday products','ทบทวนฉลากและวันหมดอายุเป็นครั้งคราว ใช้ตามคำแนะนำบนบรรจุภัณฑ์ และเก็บข้อมูลผลิตภัณฑ์ไว้เมื่อต้องการสอบถามเพิ่มเติม','Review labels and expiry dates, follow packaging directions and keep product information available for questions.']],
  'rest-on-the-go':[['จัดของตามลักษณะการเดินทาง','Pack for the journey','เลือกของที่น้ำหนักเบาและจัดเก็บง่าย เช่น ผ้าปิดตาและกระเป๋าเก็บของส่วนตัว ลองจัดชุดเล็กที่หยิบใช้ได้โดยไม่ต้องรื้อกระเป๋าทั้งใบ','Choose light, compact essentials such as an eye mask and a small organizer. Keep them accessible without unpacking your entire bag.'],['ดูแลหลังใช้งาน','Care after use','อ่านคำแนะนำเรื่องการทำความสะอาดและการเก็บรักษาของแต่ละชิ้นก่อนใช้ซ้ำ เพื่อให้ของที่เลือกพร้อมสำหรับทริปถัดไป','Read each item’s cleaning and storage instructions before reuse so it is ready for the next trip.']]
 }
 return sections(language,data[id]||data['reading-labels'])
}

export function productFacts(id,language) {
 const facts={
  'daily-greens':['ผงผักและผลไม้รวม · บรรจุภัณฑ์แบบกระปุก','Greens blend · Jar packaging'],
  'calm-magnesium':['ผลิตภัณฑ์เสริมอาหาร · บรรจุภัณฑ์แบบขวด','Supplement · Bottle packaging'],
  'daily-oil':['บอดี้ออยล์ · ขวดพร้อมหัวหยด','Body oil · Dropper bottle'],
  'measure-scale':['เครื่องชั่งดิจิทัล · หน้าจอแสดงผลและพื้นที่วางเท้า','Digital scale · Display and foot platform'],
  'sleep-mask':['ผ้าปิดตา · สายยืดและรูปทรงรองรับบริเวณรอบดวงตา','Eye mask · Elastic strap and contoured shape'],
  'face-cream':['ครีมบำรุงผิว · กระปุกพร้อมฝาปิด','Face cream · Jar with a lid']
 }
 return copy(language,...facts[id])
}
