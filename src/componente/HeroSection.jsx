export default function HeroSection() {
  return (
    <section className="bg-black text-white py-20 lg:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-[1560px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block mb-6 rounded-full border border-[#C3FF51] bg-[#C3FF51]/10 px-4 py-2">
              <p className="text-[12px] font-semibold text-[#C3FF51] uppercase tracking-[0.22em]">
                ยินดีต้อนรับ
              </p>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Rental Glass
              <br />
              of <span className="text-[#C3FF51]">KinetIX</span>
            </h1>

            <p className="text-lg md:text-xl text-[#b8bdce] mb-8 max-w-xl">
              เช่ารองเท้าวิ่งคุณภาพดี แบรนด์ชั้นนำ ด้วยราคาที่ถูกและสะดวก ปลอดภัย 100%
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center rounded-3xl bg-[#C3FF51] px-8 py-4 text-base font-semibold text-black hover:bg-[#D3FE51] transition">
                เริ่มเช่าเลย
              </button>
              <button className="inline-flex items-center justify-center rounded-3xl border-2 border-[#C3FF51] px-8 py-4 text-base font-semibold text-[#C3FF51] hover:bg-[#C3FF51]/10 transition">
                เรียนรู้เพิ่มเติม
              </button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-3xl border border-[#1f2937] bg-[#0b0c10] p-6">
              <p className="text-[14px] text-[#8f94a5] mb-3">รองเท้าทั้งหมด</p>
              <p className="text-4xl font-extrabold text-[#C3FF51]">56</p>
            </div>
            <div className="rounded-3xl border border-[#1f2937] bg-[#0b0c10] p-6">
              <p className="text-[14px] text-[#8f94a5] mb-3">สมาชิก</p>
              <p className="text-4xl font-extrabold text-white">12K+</p>
            </div>
            <div className="rounded-3xl border border-[#1f2937] bg-[#0b0c10] p-6">
              <p className="text-[14px] text-[#8f94a5] mb-3">ความพึงพอใจ</p>
              <p className="text-4xl font-extrabold text-[#C3FF51]">4.9★</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function SectionHero() {
//   const ball = document.getElementById("cursor-ball");

//   let mouseX = window.innerWidth / 2;
//   let mouseY = window.innerHeight / 2;
//   let ballX = mouseX;
//   let ballY = mouseY;
//   let velX = 0;
//   let velY = 0;

//   const stiffness = 0.12;
//   const damping = 0.75;

//   document.addEventListener("mousemove", (e) => {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
//   });

//   function animate() {
//     const dx = mouseX - ballX;
//     const dy = mouseY - ballY;

//     velX = velX * damping + dx * stiffness;
//     velY = velY * damping + dy * stiffness;

//     ballX += velX;
//     ballY += velY;

//     ball.style.transform = `translate(${ballX}px, ${ballY}px)`;

//     requestAnimationFrame(animate);
//   }

//   animate();
//   return (
//     <>
//       <section class="hero">
//         {/* Left Content  */}
//         <div class="hero-left">
//           <span class="tag-line">รองเท้าวิ่งให้เช่า หลายแบรนด์ชั้นนำ</span>

//           <h1 class="hero-title">
//             <span class="title-line-1">วิ่ง</span>
//             <span class="title-line-2">ทุก</span>
//             <span class="title-line-3">ระดับ</span>
//           </h1>

//           <p class="hero-desc">
//             ไม่ต้องซื้อ แต่เช่า — รองเท้าวิ่งจากแบรนด์ระดับโลกพร้อมให้คุณ
//             <br />
//             สวมใส่ เลือกไซส์ จองออนไลน์ รับหน้าร้านหรือจัดส่งถึงบ้าน
//           </p>

//           <div class="hero-actions">
//             <button class="btn-primary">
//               เลือกรองเท้า :arrow_upper_right:
//             </button>
//             <button class="btn-secondary">▷ ดูวิธีเช่า</button>
//           </div>

//           <div class="hero-stats">
//             <div class="stat-item">
//               <span class="stat-value">200+</span>
//               <span class="stat-label">รุ่นรองเท้า</span>
//             </div>
//             <div class="stat-item">
//               <span class="stat-value">12</span>
//               <span class="stat-label">แบรนด์ชั้นนำ</span>
//             </div>
//             <div class="stat-item">
//               <span class="stat-value">฿99</span>
//               <span class="stat-label">เริ่มต้น/วัน</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Content  */}
//         <div class="hero-right">
//           {/* Brand badge  */}
//           <div class="brand-badge">
//             <div class="brand-badge-label">แบรนด์</div>
//             <div class="brand-badge-names">Nike · Adidas · ASICS</div>
//           </div>

//           {/* Shoe with circle  */}
//           <div class="shoe-circle">
//             <img
//               class="shoe-img"
//               src="shoe.png"
//               alt="รองเท้าวิ่ง"
//               onerror="this.style.display = 'none'"
//             />
//           </div>

//           {/* Price badge  */}
//           <div class="price-badge">
//             <div class="price-badge-label">ราคาเริ่มต้น</div>
//             <div class="price-badge-value">฿99 / วัน</div>
//           </div>
//         </div>
//       </section>

//       {/* Mouse-following green ball */}
//       <div id="cursor-ball"></div>
//     </>
//   );
// }
