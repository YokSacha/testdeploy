import React, { useState } from "react";

const faqData = [
	{
		category: "การเริ่มต้นและการจอง",
		questions: [
			{
				q: "ขั้นตอนการทำรายการจองทำเช่นไรบ้าง",
				a: "มี 4 ขั้นตอน คือ การเลือกสินค้า"
			},
			{
				q: "ขั้นตอนการทำรายการจองทำเช่นไรบ้าง",
				a: "มี 4 ขั้นตอน คือ การเลือกสินค้า"
			},
			{
				q: "ขั้นตอนการทำรายการจองทำเช่นไรบ้าง",
				a: "มี 4 ขั้นตอน คือ การเลือกสินค้า"
			},
			{
				q: "ขั้นตอนการทำรายการจองทำเช่นไรบ้าง",
				a: "มี 4 ขั้นตอน คือ การเลือกสินค้า"
			}
		]
	},
	{
		category: "การชำระเงินและค่าประกัน",
		questions: [
			{
				q: "ขั้นตอนการทำรายการจองทำเช่นไรบ้าง",
				a: "มี 4 ขั้นตอน คือ การเลือกสินค้า"
			},
			{
				q: "ขั้นตอนการทำรายการจองทำเช่นไรบ้าง",
				a: "มี 4 ขั้นตอน คือ การเลือกสินค้า"
			},
			{
				q: "ขั้นตอนการทำรายการจองทำเช่นไรบ้าง",
				a: "มี 4 ขั้นตอน คือ การเลือกสินค้า"
			}
		]
	}
];

const sidebarCategories = [
	"การเริ่มต้นและการจอง",
	"ขั้นตอนการเช่ารองเท้ามีอะไรบ้าง?", "มี 4 ขั้นตอน: เลือกรองเท้า -> กำหนดวันรับ-คืน -> ชำระค่าเช่า + ค่าประกัน + ค่าส่ง -> รอรับรองเท้า",
	"มีระยะเวลาเช่าให้เลือกอะไรบ้าง?", "มี 3 ระยะเวลาให้เลือก: 3 วัน, 5 วัน, 7 วัน",
	"รองเท้ามีไซส์อะไรบ้าง?", "มีหลากหลายไซส์ต่างๆ ให้เลือกตามความเหมาะสม",
	"ต้องสมัครสมาชิกก่อนเช่าไหม?", "ใช่ ลูกค้าต้องสมัครสมาชิกก่อนเช่า",
	"มีบริการให้เช่ารองเท้าสำหรับเด็กไหม?", "ตอนนี้บริษัทยังไม่มีบริการให้เช่ารองเท้าสำหรับเด็ก แต่กำลังพิจารณาขยายบริการนี้ในอนาคตเพื่อรองรับความต้องการของลูกค้าทุกกลุ่ม"

	"การชำระเงินและค่าประกัน",
	"ชำระเงินได้ช่องทางไหนบ้าง?", "ชำระเงินได้ผ่านช่องทางต่างๆตามสะดวก: PromptPay, บัตรเครดิต, หรือโอนผ่านธนาคาร",
	"ค่าประกันคืออะไร และจะได้คืนเมื่อไหร่?", "ค่าประกันคือค่าธรรมเนียมที่ต้องจ่ายเพื่อปกป้องสินค้ารองเท้าเช่า จากการเสียหายหรือความเสียหายที่เกิดขึ้นระหว่างการเช่า ซึ่งจะได้รับการคืนเมื่อสินค้าถูกคืนในสภาพที่ดี",
	"ถ้าคืนช้าจะเกิดอะไรขึ้น?", "หากคืนช้ากว่าเวลาที่กำหนด จะถูกเรียกเก็บเงินเพิ่มเป็นค่าปรับตามเรทนโยบายของบริษัท",

	"สภาพรองเท้าและความเสียหาย",
	"ถ้ารองเท้าเสียหายระหว่างใช้งานจะเป็นอย่างไร?", "หากรองเท้าเสียหายระหว่างการใช้งาน ลูกค้าจะต้องรับผิดชอบค่าใช้จ่ายในการซ่อมแซมหรือแทนที่ โดยพิจารณาตามความเสียหายในแต่ละกรณี ตามเรทนโยบายของบริษัท",
	"รองเท้าที่ได้รับสะอาดและปลอดภัยไหม?", "รองเท้าที่ได้รับจะต้องอยู่ในสภาพที่สะอาดและปลอดภัยตามปกติ ผ่านการตรวจสอบและทำความสะอาดฆ่าเชื้อโรคมาอย่างดี ก่อนส่งถึงลูกค้าเสมอ",
	"ผู้เช่าต้องทำความสะอาดก่อนคืนไหม?", "ไม่ต้อง บริษัทจะทำความสะอาดรองเท้าทุกคู่หลังจากได้รับคืนจากลูกค้าแล้ว เพื่อให้รองเท้าอยู่ในสภาพที่ดีสำหรับลูกค้ารายถัดไป",

	"การจัดส่งและการคืน",
	"จัดส่งต่างจังหวัดได้ไหม?", "ตอนนี้บริษัทยังไม่มีบริการจัดส่งต่างจังหวัดทั่วประเทศ แต่เรากำลังพัฒนาบริการนี้อยู่เพื่อให้บริการลูกค้าอย่างครอบคลุมมากขึ้นในอนาคต",
	"ส่งคืนรองเท้าได้ช่องทางไหน?", "ไรเดอร์จะมารับรองเท้าที่บ้านลูกค้าในวันที่กำหนดคืน ตามเวลาทำการที่ระบุไว้ในนโยบายการคืนสินค้า",
	"ขยายระยะเวลาเช่าได้ไหมถ้าอยากใช้ต่อ?", "ได้ หากต้องการขยายระยะเวลาเช่า สามารถกดเพิ่มระยะเวลาเช่า และติดต่อฝ่ายบริการลูกค้าได้ โดยจะมีค่าใช้จ่ายเพิ่มเติมตามระยะเวลาที่ขยาย",

	"สิทธิพิเศษและสมาชิก",
	"สมัครสมาชิกมีค่าใช้จ่ายไหม?", "การสมัครสมาชิกกับบริษัทไม่มีค่าใช้จ่าย ลูกค้าสามารถสมัครได้ฟรีเพื่อเข้าถึงสิทธิพิเศษและโปรโมชั่นต่างๆ ที่บริษัทมีให้",
	"สมัครสมาชิกต้องใช้ข้อมูลอะไรบ้าง?", "ลูกค้าต้องใช้ข้อมูลส่วนตัว เช่น ชื่อ, อีเมล, เบอร์โทรศัพท์, และที่อยู่ในการสมัครสมาชิก เพื่อให้สามารถติดต่อและจัดส่งสินค้าได้อย่างถูกต้อง",
	"มีโปรแกรมสะสมแต้มหรือสิทธิพิเศษไหม?", "ใช่ ลูกค้าสามารถสะสมแต้มจากการเช่าและใช้จ่ายต่างๆ เพื่อแลกรับส่วนลดหรือสิทธิพิเศษในอนาคตได้",
	"ถ้าสมัครสมาชิกมีสิทธิพิเศษอะไรบ้าง?", "สมาชิกจะได้รับสิทธิพิเศษต่างๆ เช่น ส่วนลดในการเช่า, การเข้าถึงโปรโมชั่นพิเศษ, และการแจ้งเตือนก่อนใครเกี่ยวกับสินค้ารุ่นใหม่หรือกิจกรรมอีเว้นท์พิเศษของบริษัท",
	"มีส่วนลดหรือโปรโมชั่นอะไรบ้าง?", "บริษัทมีโปรโมชั่นและส่วนลดต่างๆ ที่เปลี่ยนแปลงตามช่วงเวลา เช่น ส่วนลดสำหรับสมาชิกใหม่, โปรโมชั่นพิเศษในวันสำคัญ, และข้อเสนอพิเศษสำหรับสมาชิกที่เช่าบ่อยๆ",
	"มีแพ็กเกจสำหรับองค์กรหรือทีมกีฬาไหม?", "ใช่ เรามีแพ็กเกจพิเศษสำหรับองค์กรหรือทีมกีฬาที่ต้องการเช่ารองเท้าในปริมาณมาก สามารถติดต่อฝ่ายบริการลูกค้าเพื่อขอรายละเอียดเพิ่มเติมได้",
	
];

export default function FAQPage() {
	const [activeCategory, setActiveCategory] = useState(0);
	const [openIndexes, setOpenIndexes] = useState({});

	const handleToggle = (idx) => {
		setOpenIndexes((prev) => ({
			...prev,
			[idx]: !prev[idx]
		}));
	};

	return (
		<div className="min-h-screen bg-[#080809] flex flex-col font-sora">
			{/* Top Nav */}
			<nav className="flex items-center justify-between px-8 py-4 border-b border-[#23232A]">
				<div className="flex items-center gap-2">
					<span className="text-white font-bold text-xl tracking-widest">KINETI<span className="text-[#C3FF51]">X</span></span>
				</div>
				<div className="hidden md:flex gap-8 text-white text-sm">
					<a href="#" className="hover:text-[#C3FF51]">Rental</a>
					<a href="#" className="hover:text-[#C3FF51]">Brand</a>
					<a href="#" className="hover:text-[#C3FF51]">How to</a>
					<a href="#" className="hover:text-[#C3FF51]">Contact</a>
				</div>
				<div className="flex gap-2 items-center">
					<button className="bg-[#C3FF51] text-[#1A1A1A] px-6 py-2 rounded-md font-semibold text-sm hover:bg-[#D3FE51]">Join Us</button>
					<button className="bg-[#C3FF51] text-[#1A1A1A] px-6 py-2 rounded-md font-semibold text-sm hover:bg-[#D3FE51]">Login</button>
				</div>
			</nav>

			{/* Search Bar */}
			<div className="flex justify-center mt-8">
				<input
					type="text"
					placeholder="ค้นหา"
					className="w-[350px] bg-transparent border border-[#CBD5E1] rounded-lg px-4 py-2 text-white placeholder:text-[#CBD5E1] focus:outline-none"
				/>
			</div>

			{/* Main Content */}
			<div className="flex flex-1 w-full max-w-7xl mx-auto mt-8 gap-6">
				{/* Sidebar */}
				<aside className="w-72 bg-[#18181C] rounded-xl p-6 flex flex-col gap-4 min-h-[600px]">
					<div>
						<div className="text-[#C3FF51] text-xs font-semibold mb-1">หมวดหมู่คำถาม</div>
						<div className="text-white text-lg font-bold mb-4">คำถามที่พบบ่อย</div>
					</div>
					<nav className="flex flex-col gap-2">
						{sidebarCategories.map((cat, idx) => (
							<button
								key={cat}
								className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
									idx === activeCategory
										? "bg-[#23232A] text-[#C3FF51]"
										: "text-white hover:bg-[#23232A]"
								}`}
								onClick={() => setActiveCategory(idx)}
							>
								{cat}
							</button>
						))}
					</nav>
					<div className="mt-8 bg-[#23232A] rounded-xl p-4 flex flex-col gap-2">
						<div className="text-white text-sm font-semibold">ยังหาคำตอบไม่เจอ?</div>
						<div className="text-[#CBD5E1] text-xs mb-2">ทีมงาน Kinetix พร้อมช่วยเหลือตลอดเวลา</div>
						<button className="bg-[#C3FF51] text-[#1A1A1A] rounded-md py-2 font-semibold text-sm hover:bg-[#D3FE51]">ติดต่อเรา</button>
					</div>
				</aside>

				{/* FAQ Content */}
				<main className="flex-1">
					{faqData.map((section, secIdx) => (
						<div key={section.category} className="mb-8">
							<div className="text-white text-lg font-bold mb-4 mt-6 first:mt-0">{section.category}</div>
							<div className="flex flex-col gap-4">
								{section.questions.map((item, qIdx) => {
									const globalIdx = `${secIdx}-${qIdx}`;
									const isOpen = openIndexes[globalIdx];
									return (
										<div
											key={item.q + qIdx}
											className="bg-[#18181C] rounded-xl border border-[#23232A] overflow-hidden"
										>
											<button
												className="w-full flex justify-between items-center px-6 py-4 text-left text-white text-base font-medium focus:outline-none"
												onClick={() => handleToggle(globalIdx)}
											>
												<span>{item.q}</span>
												<span className={`ml-4 transition-transform ${isOpen ? "rotate-90" : "rotate-0"}`}>▶</span>
											</button>
											{isOpen && (
												<div className="px-6 pb-4 text-[#CBD5E1] text-sm animate-fade-in">
													{item.a}
												</div>
											)}
										</div>
									);
								})}
							</div>
						</div>
					))}
				</main>
			</div>

			{/* Footer */}
			<footer className="mt-16 bg-transparent border-t border-[#23232A] pt-8 pb-4 px-8">
				<div className="flex flex-col md:flex-row md:justify-between md:items-end max-w-7xl mx-auto">
					<div className="mb-6 md:mb-0">
						<div className="text-white font-bold text-lg mb-2">โลโก้</div>
						<div className="text-[#CBD5E1] text-xs max-w-xs">บริษัทเคเนติกซ์ให้บริการเช่ารองเท้าสนีกเกอร์ออนไลน์สำหรับทุกโอกาส</div>
						<div className="text-[#CBD5E1] text-xs mt-2">©2026 KINETI X. All rights reserved.</div>
					</div>
					<div className="flex flex-col md:flex-row gap-8 text-xs text-[#C3FF51]">
						<div>
							<div className="font-bold mb-1 text-white">บริการ</div>
							<div>เช่ารองเท้า</div>
							<div>ขั้นตอนการเช่า</div>
							<div>คำถามที่พบบ่อย</div>
						</div>
						<div>
							<div className="font-bold mb-1 text-white">ข้อมูล</div>
							<div>วิธีใช้</div>
							<div>ข้อตกลง</div>
							<div>เกี่ยวกับเรา</div>
						</div>
						<div>
							<div className="font-bold mb-1 text-white">ติดตาม</div>
							<div>instagram</div>
							<div>Facebook</div>
							<div>Line OA</div>
							<div>Tiktok</div>
						</div>
					</div>
				</div>
				<div className="text-[#CBD5E1] text-xs text-right mt-4">นโยบายความเป็นส่วนตัว / เงื่อนไขการให้บริการ</div>
			</footer>
		</div>
	);
}
