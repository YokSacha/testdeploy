# KenetiX How It Works Work Summary

## ภาษาไทย

### ภาพรวมงาน

งานชุดนี้เพิ่มหน้าใหม่ของโปรเจกต์ KenetiX ชื่อ `How It Works` สำหรับอธิบายขั้นตอนการเช่ารองเท้าวิ่ง ตั้งแต่สมัครสมาชิก เลือกรองเท้า จอง ชำระเงิน รับรองเท้า คืนสินค้า และรับเงินประกันคืน

นอกจากหน้าใหม่ ยังมีการเพิ่ม navbar กลางของเว็บ, ระบบสลับภาษาไทย/อังกฤษ, ปรับ layout ให้ภาพ hero แสดงสวยเท่ากันในทั้งสองภาษา และอัปเดตข้อความส่วน `Rental Journey` ให้สื่อสารภาพรวมแบรนด์และประสบการณ์ของ KenetiX ชัดขึ้น

### ส่วนประกอบหลักที่เพิ่มหรือแก้

#### `src/componente/HowItWorks.jsx`

เป็นหน้าหลักของ `How It Works`

ทำหน้าที่:
- แสดง hero section พร้อมข้อความหลักและภาพรองเท้าวิ่ง
- แสดง CTA เช่น `Start renting` / `เริ่มเช่าเลย`
- แสดง checkpoint ของระบบเช่า
- แสดงขั้นตอนการเช่า 5 ขั้นตอน
- แสดงส่วน `Rental Journey`
- แสดงการ์ดระบบ เช่น Booking, Inventory, Payment, Customer
- รองรับข้อความสองภาษาโดยอ่านค่าจาก `pageCopy.th` และ `pageCopy.en`

วิธีทำ:
- ใช้ object `pageCopy` เก็บข้อความไทยและอังกฤษ
- ใช้ `useLanguage()` เพื่อเลือก copy ตามภาษาปัจจุบัน
- ใช้ Tailwind class สำหรับ layout, responsive grid, typography, border และสีตามธีม KenetiX
- ล็อกความสูงของ hero image เพื่อให้ภาพไม่ยืดหรือหดต่างกันตอนสลับภาษา

#### `src/componente/Navbar.jsx`

เป็น navbar กลางที่ใช้ร่วมกันในหน้า Home และหน้า How It Works

ทำหน้าที่:
- แสดงโลโก้ `KINETIX`
- แสดงเมนู Rental, Brand, How to, Contact
- แสดงปุ่ม Login
- แสดงปุ่มสลับภาษา `EN / TH`

วิธีทำ:
- ใช้ `useLanguage()` เพื่ออ่านภาษาปัจจุบันและเรียก `toggleLanguage`
- ปุ่มภาษา render แบบชัดเจนเป็น `EN` ก่อน `TH`
- ใช้ class เดียวกันกับทั้งสองภาษาเพื่อให้ขนาดฟอนต์และ layout เท่ากัน
- ปุ่ม Login ถูกล็อกความกว้างไว้เพื่อลด layout shift เวลาข้อความไทยยาวกว่าอังกฤษ

#### `src/context/LanguageProvider.jsx`

เป็น provider สำหรับจัดการ state ภาษาในทั้งแอป

ทำหน้าที่:
- เก็บค่า `language`
- เปลี่ยนภาษาได้ผ่าน `toggleLanguage`
- บันทึกภาษาที่เลือกไว้ใน `localStorage`
- ตั้งค่า `document.documentElement.lang` ให้เป็น `th` หรือ `en`

วิธีทำ:
- ใช้ React `useState`, `useEffect`, และ `useMemo`
- ค่าเริ่มต้นอ่านจาก `localStorage`
- ถ้าไม่มีค่าหรือค่าไม่ใช่ `en` จะใช้ `th` เป็นค่าเริ่มต้น

#### `src/context/useLanguage.js`

เป็น hook สำหรับเรียกใช้ระบบภาษา

ทำหน้าที่:
- สร้าง `LanguageContext`
- export `useLanguage()`
- ตรวจว่าถูกเรียกภายใน `LanguageProvider`

เหตุผลที่แยกไฟล์:
- เพื่อให้ผ่านกฎ React Fast Refresh เพราะไฟล์ provider ไม่ควร export hook ปนกับ component provider ในบาง config ของ ESLint

#### `src/App.jsx`

ทำหน้าที่ประกอบหน้าเว็บหลัก

สิ่งที่แก้:
- ครอบแอปด้วย `LanguageProvider`
- เพิ่ม route แบบง่ายสำหรับ `/how-it-works`
- วาง `Navbar` ไว้บนสุดของหน้า Home
- เอาปุ่มทดลองเดิม `ButtonMain` และ `LoginButton` ออกจากหน้า

#### `src/componente/SignupPage.jsx`

สิ่งที่แก้:
- เอา navbar ที่ซ้ำอยู่ใน SignupPage ออก เพื่อให้ใช้ navbar กลางตัวเดียว
- เพิ่ม `id="signup"` เพื่อให้ปุ่ม CTA link มาหาส่วนสมัครสมาชิกได้
- ย้าย `ErrorMsg` ออกนอก component หลักเพื่อแก้ lint เรื่อง static component

#### `src/componente/Section01.jsx`

สิ่งที่แก้:
- เพิ่ม `id="brand"` ให้ section brand เพื่อให้เมนู Brand ใน navbar scroll มาหา section นี้ได้

#### `public/how-it-works-shoe.png`

เป็นภาพ hero สำหรับหน้า How It Works

ใช้เพื่อ:
- ทำให้หน้า How It Works มี visual หลักของตัวเอง
- สื่อสารภาพลักษณ์รองเท้าวิ่งพรีเมียมในโทน KenetiX

### สรุปแต่ละคอมมิต

#### `feat(how-it-works): add rental journey page`

เพิ่มหน้า How It Works ครั้งแรก

สิ่งที่ทำ:
- เพิ่ม `HowItWorks.jsx`
- เพิ่มภาพ `how-it-works-shoe.png`
- เพิ่ม route `/how-it-works`
- เพิ่ม navbar กลาง
- เอา navbar ซ้ำใน SignupPage ออก
- เพิ่ม anchor สำหรับ section ที่เกี่ยวข้อง

#### `feat(i18n): add Thai and English language toggle`

เพิ่มระบบสองภาษา

สิ่งที่ทำ:
- เพิ่ม `LanguageProvider`
- เพิ่ม `useLanguage`
- เพิ่มปุ่มสลับภาษาใน navbar
- ทำให้หน้า How It Works เปลี่ยนข้อความไทย/อังกฤษได้
- บันทึกภาษาที่เลือกไว้ใน `localStorage`

#### `style(navbar): refine language toggle layout`

ปรับ layout ของปุ่มภาษา

สิ่งที่ทำ:
- ให้ปุ่ม `EN / TH` มีขนาดเท่ากัน
- ล็อกขนาดปุ่ม Login
- ลด layout shift เวลาสลับภาษา
- ปรับ baseline ของเมนู navbar ให้คงที่ขึ้น

#### `fix(how-it-works): stabilize hero image sizing`

แก้ขนาดภาพ hero ให้คงที่

สิ่งที่ทำ:
- ล็อกความสูงของกรอบภาพ hero
- ป้องกันภาพเปลี่ยนขนาดเมื่อข้อความไทย/อังกฤษยาวไม่เท่ากัน
- ทำให้ layout ฝั่งภาพนิ่งขึ้นและดูสวยขึ้น

#### `content(how-it-works): update rental journey messaging`

อัปเดตข้อความส่วน Rental Journey

สิ่งที่ทำ:
- เปลี่ยน `flowEyebrow`, `flowTitle`, `flowDescription` ทั้งภาษาไทยและอังกฤษ
- ทำให้ข้อความเล่า brand experience ของ KenetiX ชัดขึ้น
- สื่อว่า KenetiX เป็นมากกว่าแพลตฟอร์มเช่ารองเท้า แต่เป็นคอมมูนิตี้ของคนรักสุขภาพและการเคลื่อนไหว

#### `refactor(navbar): make language toggle order explicit`

ปรับลำดับปุ่มภาษาให้ชัดเจน

สิ่งที่ทำ:
- เปลี่ยน JSX ให้ render `EN` ก่อน `TH` แบบตรง ๆ
- ลดความกำกวมจากการ map array
- ทำให้ทีมอ่านโค้ดแล้วเข้าใจทันทีว่าลำดับปุ่มคือ `EN / TH`

#### `docs(how-it-works): add bilingual work summary`

เพิ่มเอกสารสรุปงานแบบสองภาษา

สิ่งที่ทำ:
- สรุปภาพรวมของหน้า How It Works
- อธิบายหน้าที่ของแต่ละไฟล์หลัก
- อธิบาย flow การทำงานของระบบภาษาและหน้าใหม่
- สรุปความหมายของแต่ละ commit ให้ทีมอ่านต่อได้ง่าย

### การตรวจสอบที่ทำแล้ว

หลังการแก้โค้ดแต่ละรอบ มีการตรวจด้วย:

```bash
npm run lint
npm run build
```

ทั้งสองคำสั่งผ่านในรอบล่าสุดก่อน commit งานแต่ละส่วน

### หมายเหตุสำหรับทีม

- ระบบภาษาตอนนี้ครอบคลุม navbar และหน้า How It Works เป็นหลัก
- ถ้าต้องการให้หน้าอื่นรองรับสองภาษา ให้เพิ่มข้อความในลักษณะเดียวกับ `pageCopy` แล้วเรียก `useLanguage()`
- Routing ตอนนี้เป็น logic ง่าย ๆ ใน `App.jsx` โดยตรวจ `window.location.pathname`
- ถ้าโปรเจกต์โตขึ้น แนะนำให้เปลี่ยนเป็น `react-router-dom`
- ข้อความภาษาไทยในไฟล์ควรบันทึกด้วย UTF-8 เสมอ เพื่อป้องกันตัวอักษรเพี้ยน

---

## English

### Work Overview

This work added a new `How It Works` page for the KenetiX project. The page explains the running shoe rental journey, from account creation, shoe selection, booking, payment, pickup, return, and deposit refund.

The work also added a shared navbar, Thai/English language switching, stabilized the hero image layout across both languages, and updated the `Rental Journey` section copy to better communicate the KenetiX brand experience.

### Main Parts Added Or Updated

#### `src/componente/HowItWorks.jsx`

This is the main `How It Works` page.

Responsibilities:
- Displays the hero section with headline copy and a running shoe image
- Displays CTAs such as `Start renting` / `เริ่มเช่าเลย`
- Displays rental checkpoints
- Displays the 5-step rental process
- Displays the `Rental Journey` section
- Displays system cards such as Booking, Inventory, Payment, and Customer
- Supports Thai and English copy through `pageCopy.th` and `pageCopy.en`

How it works:
- Stores bilingual content in the `pageCopy` object
- Uses `useLanguage()` to select the correct copy for the current language
- Uses Tailwind classes for layout, responsive grid, typography, borders, and KenetiX theme colors
- Locks the hero image height so the image does not resize differently when switching languages

#### `src/componente/Navbar.jsx`

This is the shared navbar used by the Home page and the How It Works page.

Responsibilities:
- Displays the `KINETIX` logo
- Displays Rental, Brand, How to, and Contact menu links
- Displays the Login button
- Displays the `EN / TH` language toggle

How it works:
- Uses `useLanguage()` to read the current language and call `toggleLanguage`
- Renders `EN` before `TH` explicitly in JSX
- Uses the same classes for both language pills so font size and layout stay consistent
- Locks the Login button width to reduce layout shift when Thai text is longer than English text

#### `src/context/LanguageProvider.jsx`

This provider manages language state across the app.

Responsibilities:
- Stores the current `language`
- Allows switching language with `toggleLanguage`
- Saves the selected language to `localStorage`
- Updates `document.documentElement.lang` to `th` or `en`

How it works:
- Uses React `useState`, `useEffect`, and `useMemo`
- Reads the initial value from `localStorage`
- Defaults to `th` if no valid saved language is found

#### `src/context/useLanguage.js`

This file exposes the language hook.

Responsibilities:
- Creates `LanguageContext`
- Exports `useLanguage()`
- Ensures the hook is used inside `LanguageProvider`

Why it is separate:
- It keeps React Fast Refresh happy because the provider component file does not also export the hook

#### `src/App.jsx`

This file composes the main app.

Updates:
- Wraps the app with `LanguageProvider`
- Adds simple route handling for `/how-it-works`
- Places the shared `Navbar` at the top of the Home page
- Removes old test buttons `ButtonMain` and `LoginButton` from the page

#### `src/componente/SignupPage.jsx`

Updates:
- Removes the duplicate navbar from SignupPage so the app uses one shared navbar
- Adds `id="signup"` so CTA links can jump to the signup section
- Moves `ErrorMsg` outside the main component to satisfy the static component lint rule

#### `src/componente/Section01.jsx`

Updates:
- Adds `id="brand"` so the Brand navbar link can scroll to this section

#### `public/how-it-works-shoe.png`

This is the hero image for the How It Works page.

Used for:
- Giving the How It Works page its own main visual
- Communicating a premium running shoe look in the KenetiX visual tone

### Commit Summary

#### `feat(how-it-works): add rental journey page`

Initial How It Works page implementation.

Changes:
- Added `HowItWorks.jsx`
- Added `how-it-works-shoe.png`
- Added `/how-it-works` route
- Added shared navbar
- Removed duplicate navbar from SignupPage
- Added related section anchors

#### `feat(i18n): add Thai and English language toggle`

Added bilingual language support.

Changes:
- Added `LanguageProvider`
- Added `useLanguage`
- Added language toggle in the navbar
- Made How It Works copy switch between Thai and English
- Saved selected language in `localStorage`

#### `style(navbar): refine language toggle layout`

Refined the language toggle layout.

Changes:
- Made `EN / TH` pills equal in size
- Locked the Login button width
- Reduced layout shift when switching language
- Improved navbar menu baseline stability

#### `fix(how-it-works): stabilize hero image sizing`

Stabilized the hero image size.

Changes:
- Locked the hero image container height
- Prevented image size changes when Thai and English text heights differ
- Made the image side of the layout more stable and polished

#### `content(how-it-works): update rental journey messaging`

Updated the Rental Journey copy.

Changes:
- Updated `flowEyebrow`, `flowTitle`, and `flowDescription` in both Thai and English
- Made the section communicate the KenetiX brand experience more clearly
- Positioned KenetiX as more than a rental platform: a wellness and movement community

#### `refactor(navbar): make language toggle order explicit`

Made the language toggle order explicit.

Changes:
- Rendered `EN` before `TH` directly in JSX
- Removed ambiguity from array mapping
- Made it immediately clear to the team that the intended order is `EN / TH`

#### `docs(how-it-works): add bilingual work summary`

Added the bilingual work summary document.

Changes:
- Summarized the How It Works page overview
- Explained the responsibilities of each main file
- Explained how the language system and new page work
- Summarized the purpose of each commit so the team can review the work quickly

### Verification

After the code changes, the following checks were run:

```bash
npm run lint
npm run build
```

Both commands passed during the latest verification before each related commit.

### Notes For The Team

- The language system currently covers the navbar and the How It Works page
- To make more pages bilingual, follow the same `pageCopy` pattern and call `useLanguage()`
- Routing is currently handled with a simple `window.location.pathname` check inside `App.jsx`
- If the project grows, consider moving to `react-router-dom`
- Thai text files should always be saved as UTF-8 to avoid corrupted characters
