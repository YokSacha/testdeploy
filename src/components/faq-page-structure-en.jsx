import React, { useState } from "react";

const faqData = [
    {
        category: "Getting Started & Booking",
        questions: [
            {
                q: "What are the shoe rental steps?",
                a: "There are 4 steps: Select shoes -> Set pick-up/return dates -> Pay rental + deposit + shipping -> Wait to receive shoes"
            },
            {
                q: "What rental durations are available?",
                a: "There are 3 durations to choose from: 1 day, 3 days, and 7 days"
            },
            {
                q: "What shoe sizes are available?",
                a: "Various sizes are available to suit your needs"
            },
            {
                q: "Do I need to register before renting?",
                a: "Yes, customers must register before renting"
            }
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
                a: "You can pay via convenient channels: PromptPay, Credit Card, or Bank Transfer"
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
    }
    {
        category: "Shoe Condition & Damages",
        questions: [
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
            }
            {
                q: "Do renters need to clean them before returning?",
                a: "No, the company cleans every pair after receiving them to ensure they are in excellent condition for the next customer."
            }
        ]
    }
    {
        category: "Shipping & Returns",
        questions: [
            {
                q: "Can you ship to other provinces?",
                a: "Currently, we do not offer nationwide shipping, but we are developing this service for broader coverage in the future."
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
    }
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
            }
            {
                q: "What are the perks of being a member?",
                a: "Members receive perks like rental discounts, early access to special promotions, and priority notifications about new products or company events."
            }
            {
                q: "Are there any discounts or promotions?",
                a: "We offer various promotions such as new member discounts, holiday specials, and offers for frequent renters."
            }
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
                    placeholder="Search"
                    className="w-[350px] bg-transparent border border-[#CBD5E1] rounded-lg px-4 py-2 text-white placeholder:text-[#CBD5E1] focus:outline-none"
                />
            </div>

            {/* Main Content */}
            <div className="flex flex-1 w-full max-w-7xl mx-auto mt-8 gap-6">
                {/* Sidebar */}
                <aside className="w-72 bg-[#18181C] rounded-xl p-6 flex flex-col gap-4 min-h-[600px]">
                    <div>
                        <div className="text-[#C3FF51] text-xs font-semibold mb-1">Question Category</div>
                        <div className="text-white text-lg font-bold mb-4">FAQs</div>
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
                        <div className="text-white text-sm font-semibold">Still can't find an answer?</div>
                        <div className="text-[#CBD5E1] text-xs mb-2">The Kinetix team is ready to help anytime.</div>
                        <button className="bg-[#C3FF51] text-[#1A1A1A] rounded-md py-2 font-semibold text-sm hover:bg-[#D3FE51]">Contact Us</button>
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
                        <div className="text-white font-bold text-lg mb-2">LOGO</div>
                        <div className="text-[#CBD5E1] text-xs max-w-xs">Kinetix provides online running shoe rentals for every occasion.</div>
                        <div className="text-[#CBD5E1] text-xs mt-2">©2026 KINETI X. All rights reserved.</div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 text-xs text-[#C3FF51]">
                        <div>
                            <div className="font-bold mb-1 text-white">Services</div>
                            <div>Shoe Rental</div>
                            <div>Rental Process</div>
                            <div>FAQ</div>
                        </div>
                        <div>
                            <div className="font-bold mb-1 text-white">Information</div>
                            <div>How to Use</div>
                            <div>Terms & Conditions</div>
                            <div>About Us</div>
                        </div>
                        <div>
                            <div className="font-bold mb-1 text-white">Follow Us</div>
                            <div>Instagram</div>
                            <div>Facebook</div>
                            <div>Line OA</div>
                            <div>TikTok</div>
                        </div>
                    </div>
                </div>
                <div className="text-[#CBD5E1] text-xs text-right mt-4">Privacy Policy / Terms of Service</div>
            </footer>
        </div>
    );
}