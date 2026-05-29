export default function ContactInfo() {
    return (
        <div className="space-y-8">


            <div>
                <span className="text-[#b4ff39] text-xs font-bold uppercase tracking-wider block mb-2">Contact Us</span>
                <h1 className="text-4xl font-bold text-white mb-4">ติดต่อเรา</h1>
                <p className="text-gray-400 text-sm">มีปัญหาหรือข้อสงสัย? ทีมงาน Kinetix พร้อมช่วยคุณ</p>
            </div>


            <div className="space-y-3">
                {/* Phone Card */}
                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="text-gray-400 bg-zinc-800 p-3 rounded-lg">📞</div>
                        <div>
                            <p className="text-xs text-gray-500">โทรศัพท์</p>
                            <p className="text-white font-bold tracking-wide">02-821-5700</p>
                            <p className="text-[10px] text-gray-500">เปิดทุกวัน 9:00 - 21:00 น.</p>
                        </div>
                    </div>
                    <span className="bg-green-950 text-[#b4ff39] text-[10px] font-bold px-2 py-1 rounded-full border border-green-800">● Online</span>
                </div>


                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex items-center gap-4">
                    <div className="text-gray-400 bg-zinc-800 p-3 rounded-lg">✉️</div>
                    <div>
                        <p className="text-xs text-gray-500">Email</p>
                        <p className="text-white font-bold">kinetix@co.th</p>
                    </div>
                </div>


                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex items-center gap-4">
                    <div className="text-gray-400 bg-zinc-800 p-3 rounded-lg">💬</div>
                    <div>
                        <p className="text-xs text-gray-500">Line Official Account</p>
                        <p className="text-white font-bold">@kinetix</p>
                    </div>
                </div>
            </div>



            <div className="border border-dashed border-lime-900 bg-lime-950/20 p-4 rounded-xl text-xs text-gray-400">
                ทีมงานจะ<span className="text-[#b4ff39] font-bold">ติดต่อกลับภายใน 24 ชั่วโมง</span> หลังจากได้รับแบบฟอร์มของคุณ
            </div>
        </div>
    );
}