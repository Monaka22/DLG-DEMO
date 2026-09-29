export function shopConcerns(T){
 const concerns=[['sleep','การนอนและการพักผ่อน','Sleep & rest'],['care','ดูแลผิว','Skin care'],['supplements','กิจวัตรสุขภาพประจำวัน','Daily wellness'],['devices','ติดตามสุขภาพ','Health tracking']]
 return `<section class="shop-concerns"><div><span class="kicker">SHOP BY CONCERN</span><h2>${T('เริ่มจากสิ่งที่คุณกำลังมองหา','Start with what matters to you')}</h2><p>${T('เลือกความสนใจเพื่อกรองสินค้าที่เกี่ยวข้อง','Choose a concern to see related products.')}</p></div><div class="shop-concern-links">${concerns.map(([key,th,en])=>`<button type="button" data-concern="${key}">${T(th,en)} <span>→</span></button>`).join('')}</div></section>`
}

export function shopTrustNote(T){
 return `<aside class="product-transparency"><span class="kicker">PRODUCT INFORMATION</span><h3>${T('อ่านข้อมูลก่อนเลือกซื้อ','Know what you’re buying')}</h3><p>${T('ดูรูปแบบผลิตภัณฑ์และคำแนะนำในรายละเอียด ข้อมูลส่วนผสมหรือใบรับรองต้องอ้างอิงฉลากและเอกสารจากผู้ผลิตแต่ละรายการ','Review the product format and directions. Ingredient lists and certifications must be verified against each product’s manufacturer packaging and documents.')}</p><small>${T('ข้อมูลสินค้า รีวิว และราคาในเว็บนี้เป็นตัวอย่างสำหรับเดโม · ไม่มีการกล่าวอ้างสรรพคุณหรือรับรองทางการแพทย์','Product details, reviews and prices are illustrative demo content. No medical or certification claims are made.')}</small></aside>`
}

export function cartSuggestions(cart,products,locale,T){
 const existing=new Set(cart.map(x=>x.id));const product=products.find(p=>!existing.has(p.id));if(!product)return ''
 return `<section class="cart-suggestions"><span class="kicker">PAIR IT WITH</span><h3>${T('เติมอีกชิ้นให้ครบกิจวัตร','Complete your routine')}</h3><article><img src="${product.image}" alt="${locale==='th'?product.name:product.en}"><div><b>${locale==='th'?product.name:product.en}</b><small>${T('รับส่วนลดชุดสินค้า 10% เมื่อเลือกคู่กับสินค้าในตะกร้า','Save 10% on this item when paired with an item in your basket.')}</small></div><button type="button" data-add="${product.id}" data-bundle-add>${T('เพิ่มเข้าชุด','Add to set')} +</button></article><p>${T('ข้อเสนอจำลอง · ส่วนลดใช้กับสินค้าราคาต่ำกว่า 1 ชิ้นในคู่ที่ร่วมรายการ','Demo offer · discount applies to the lower-priced item in an eligible pair.')}</p></section>`
}

export function postPurchaseGuide(order,products,locale,T){
 const items=order.items.map(line=>{const p=products.find(x=>x.id===line.id);return p?`<li><b>${locale==='th'?p.name:p.en}</b> · ${T('โปรดอ่านฉลากและคู่มือผู้ผลิตก่อนใช้งาน','Follow the product label and manufacturer’s guide before use.')}</li>`:''}).join('')
 const progress=order.fulfillment==='shipped'?2:order.fulfillment==='packed'?1:0
 return `<section class="post-purchase-guide"><div class="post-purchase-head"><span class="kicker">ORDER CARE · DEMO</span><h2>${T('ติดตามคำสั่งซื้อและวิธีเริ่มใช้งาน','Your order & getting started')}</h2><p>${T('เลขคำสั่งซื้อ','Order reference')} <b>${order.ref}</b></p></div><ol class="order-progress">${[[T('รับคำสั่งซื้อ','Order received'),T('ยืนยันข้อมูลคำสั่งซื้อ','Order details recorded')],[T('เตรียมจัดส่ง','Preparing'),T('ขั้นตอนจำลอง · ยังไม่มีการจัดส่งจริง','Demo step · no parcel is shipped')],[T('จัดส่งแล้ว','Shipped'),T('ข้อมูลติดตามจะแสดงเมื่อเชื่อมต่อขนส่งจริง','Tracking appears after carrier integration')]].map(([title,detail],i)=>`<li class="${i<=progress?'is-current':''}"><i>${i<progress?'✓':String(i+1).padStart(2,'0')}</i><div><b>${title}</b><small>${detail}</small></div></li>`).join('')}</ol>${order.guide?`<div class="usage-guide"><h3>${T('คู่มือเริ่มต้นสำหรับสินค้าที่สั่ง','Getting started with your items')}</h3><ul>${items}</ul><p>${T('คำแนะนำส่งทางอีเมลและการติดตามพัสดุจริงต้องเชื่อมต่อระบบอีเมลและผู้ให้บริการขนส่ง','Email guides and live parcel tracking require email and carrier integrations.')}</p></div>`:`<p class="usage-guide">${T('ไม่ได้เลือกคู่มือทางอีเมล · สามารถอ่านฉลากสินค้าได้ในขณะใช้งาน','Email guide not selected. Please refer to the product labels.')}</p>`}<label class="reorder-opt"><input type="checkbox" data-reorder-reminder ${order.reminder?'checked':''} disabled> ${T('ขอรับการแจ้งเตือนสั่งซื้อซ้ำเมื่อถึงเวลา (ตัวอย่าง)','Remind me when it may be time to reorder (demo)')}</label><p class="prototype-note">${T('เดโมนี้ไม่ส่งอีเมลและไม่ตั้งการแจ้งเตือนจริง','No email or reminder is sent by this demo.')}</p><div class="post-purchase-actions"><a class="shop-dark-button" href="#/shop/products">${T('เลือกซื้อสินค้าอีกครั้ง','Shop again')} →</a><button class="outline-link" type="button" data-reorder>${T('เพิ่มรายการเดิมลงตะกร้า','Reorder these items')} ↻</button></div></section>`
}

export function getBundleDiscount(lines,products){
 const eligible=lines.filter(line=>line.bundle===true).flatMap(line=>Array.from({length:Math.max(0,Math.min(20,line.qty||0))},()=>line))
 const pairs=[];for(let i=0;i<eligible.length;i+=2)if(eligible[i+1])pairs.push([eligible[i],eligible[i+1]])
 return pairs.reduce((sum,pair)=>sum+Math.round(Math.min(...pair.map(line=>products.find(p=>p.id===line.id)?.price||0))*.1),0)
}

export function getOrderTotals(lines,products){
 const subtotal=lines.reduce((sum,line)=>sum+(products.find(p=>p.id===line.id)?.price||0)*line.qty,0)
 const discount=getBundleDiscount(lines,products)
 const shipping=subtotal>=1500?0:60
 return {subtotal,discount,shipping,total:subtotal-discount+shipping,freeShipGap:Math.max(0,1500-subtotal)}
}

export function paymentInstructions(payment,T){
 if(payment==='promptpay-demo')return `<div class="transfer-instructions promptpay-instructions"><span class="kicker">PROMPTPAY QR · DEMO</span><h2>${T('ตัวอย่างการชำระด้วยพร้อมเพย์','PromptPay QR preview')}</h2><div class="qr-preview" aria-hidden="true"><span>QR</span></div><p>${T('QR นี้เป็นภาพตัวอย่างที่ใช้ชำระเงินจริงไม่ได้ ไม่มีการเชื่อมต่อ PromptPay','This is a visual placeholder only. It cannot be scanned or used to pay; no PromptPay connection is active.')}</p><small>${T('เมื่อเชื่อม payment gateway จริง จึงจะแสดง QR ที่ผูกกับยอดและคำสั่งซื้อนี้','A live payment gateway is required to generate a payable QR for this order.')}</small></div>`
 return `<div class="transfer-instructions"><span class="kicker">${T('ชำระเงินด้วยการโอน','BANK TRANSFER')}</span><h2>${T('ข้อมูลบัญชีสำหรับสาธิต','Demo bank account')}</h2><p>${T('ธนาคารกสิกรไทย · บริษัท นูริช เวลเนส จำกัด','Kasikornbank · Nourish Wellness Co., Ltd.')}</p><strong>123-4-56789-0</strong><p>${T('ใส่เลขคำสั่งซื้อในหมายเหตุการโอน แล้วแนบสลิปในขั้นตอนจริง','Add your order number as the transfer note. Slip upload can be connected in the live store.')}</p><small>${T('ต้นแบบนี้ไม่เชื่อมต่อธนาคารและไม่มีการชำระเงินจริง','Demo only · No bank connection or payment is made.')}</small></div>`
}
