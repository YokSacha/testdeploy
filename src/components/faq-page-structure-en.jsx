import React, { useState } from "react";

const faqData = [

{

category: "Getting Started & Booking",

questions: [

{

q: "What shoe brands and sizes are available?",

a: "Running shoes from Nike, Adidas, and On Running in EU sizes 36-47. Over 180 pairs in Men, Women, and Unisex categories."

},

{

q: "What are the shoe rental steps?",

a: "There are 4 steps: Select shoes -> Set pick-up/return dates -> Pay rental + deposit + shipping -> Wait to receive shoes"

},

{

q: "What rental packages are available?",

a: "Kinetix offers 3 packages: 1 day, 3 days, and 7 days. Starting at ฿200/day depending on the model, plus a 20% retail price deposit refunded after shoe inspection."

},

{

q: "What shoe sizes are available?",

a: "Various sizes are available to suit your needs"

},

{

q: "Do I need to register before renting?",

a: "Yes, customers must register before renting"

},

{

q: "Is there a rental service for children's shoes?",

a: "Currently, we do not offer children's shoe rentals, but we are considering expanding this service in the future to accommodate all customer groups."

}

]

},

{

category: "Payment & Security Deposit",

questions: [

{

q: "What payment methods are accepted?",

a: "3 options: Credit/Debit card, PromptPay, and Bank Transfer — via Omise. Kinetix never stores your card data."

},

{

q: "What is the security deposit and when will I get it back?",

a: "The security deposit is a fee paid to protect the rented shoes against damage during the rental period. It will be refunded when the item is returned in good condition."

},

{

q: "What happens if I return them late?",

a: "If returned later than the specified time, a late fee will be charged according to the company's policy rate."

}

]

},

{

category: "Shoe Condition & Damages",

questions: [

{

q: "Can I check the shoe condition before receiving?",

a: "Yes! Every pair shows its current grade (A-D) with condition notes before you order, and you'll see the grade with photo evidence after returning."

},

{

q: "What if the shoes get damaged during use?",

a: "If the shoes are damaged during use, the customer is responsible for repair or replacement costs, assessed on a case-by-case basis according to company policy."

},

{

q: "What is the security deposit and when will I get it back?",

a: "The security deposit is a fee paid to protect the rented shoes against damage during the rental period. It will be refunded when the item is returned in good condition."

},

{

q: "Are the received shoes clean and safe?",

a: "The shoes will be in a normal clean and safe condition. They are always thoroughly inspected and sanitized before delivery."

},

{

q: "Do renters need to clean them before returning?",

a: "No, the company cleans every pair after receiving them to ensure they are in excellent condition for the next customer."

}

]

},

{

category: "Shipping & Returns",

questions: [

{

q: "How is our delivery handled?",

a: "Kinetix delivers Door-to-Door the next day (D+1) before noon. Orders accepted 24/7. Rental period starts from 12:00 PM on the delivery day."

},

{

q: "Can we ship to other provinces?",

a: "Currently, we do not offer nationwide shipping, but we are developing this service for broader coverage in the future."

},

{

q: "Can you cancel an order?",

a: "Cancellations are only accepted before 23:59 on the order date for a full refund. If you need to change size, cancel and re-order before 23:59."

},

{

q: "When will my deposit be refunded?",

a: "Grade A/B: Full refund within 1 business day. Grade C/D: 48hr dispute window then partial refund. Grade E (lost): No refund + full retail price charged. Credit card via Omise 3-5 business days."

},

{

q: "What happens if I refuse to accept the delivery?",

a: "Order is cancelled with a full refund, but your account records a reject count. 2nd time: Warning. 3rd time: Account may be temporarily suspended."

},

{

q: "How do I return the shoes?",

a: "A rider will pick up the shoes at your home on the designated return date, during the operating hours specified in the return policy."

},

{

q: "Can I extend the rental period if I want to keep using them?",

a: "Yes, you can select to extend the duration and contact customer service. There will be additional charges based on the extended period."

}

]

},

{

category: "Privileges & Membership",

questions: [

{

q: "Is there a fee to register?",

a: "Membership is free. Customers can register at no cost to access the privileges and promotions we offer."

},

{

q: "What information is needed for registration?",

a: "Customers need to provide personal info such as name, email, phone number, and address so we can contact you and deliver products correctly."

},

{

q: "Is there a points or rewards program?",

a: "Yes, customers can collect points from rentals and spending to redeem for future discounts or privileges."

},

{

q: "What are the perks of being a member?",

a: "Members receive perks like rental discounts, early access to special promotions, and priority notifications about new products or company events."

},

{

q: "Are there any discounts or promotions?",

a: "We offer various promotions such as new member discounts, holiday specials, and offers for frequent renters."

},

{

q: "Are there packages for organizations or sports teams?",

a: "Yes, we have special packages for organizations or sports teams needing bulk rentals. Contact customer service for more details."

}

]

}

];

const sidebarCategories = [

"Getting Started & Booking",

"Payment & Security Deposit",

"Shoe Condition & Damages",

"Shipping & Returns",

"Privileges & Membership"]