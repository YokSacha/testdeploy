import React from 'react';


const StatCard = ({ title, value, detail, detailColor, iconColor }) => (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex-1 min-w-[200px]">
        <div className="flex items-center justify-between gap-4">
            <div className="text-neutral-400 text-sm">{title}</div>
            {iconColor && <div className={`w-3 h-3 rounded-full ${iconColor}`} />}
        </div>
        <div className="text-5xl font-extrabold text-neutral-100 my-4 flex items-baseline">
            {iconColor ? <span className="text-lime-400">฿</span> : ''} {value}
        </div>
        <p className={`text-sm ${detailColor || 'text-neutral-400'}`}>{detail}</p>
    </div>
);

const UserLevelBadge = ({ level, isActive }) => {
    const baseClasses = "text-xs font-semibold px-4 py-1.5 rounded-full border";
    const activeClasses = "bg-neutral-800 text-lime-400 border-lime-400";
    const inactiveClasses = "bg-neutral-900 text-neutral-500 border-neutral-800";
    return (
        <span className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
            {level.toUpperCase()}
        </span>
    );
};

const CurrentRentalItem = ({ brand, name, size, date, price }) => (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 flex items-center gap-6">
        <div className="w-16 h-16 bg-neutral-800 rounded-lg flex items-center justify-center p-3">
            {/* Dynamic shoe icon logic can go here */}
            <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=400&h=400" alt={name} className="w-full h-auto" />
        </div>
        <div className="flex-1 grid grid-cols-5 gap-4 items-center">
            <div className="col-span-2">
                <p className="text-sm text-neutral-500">{brand}</p>
                <p className="text-lg font-bold text-neutral-100">{name}</p>
                <p className="text-xs text-neutral-500">Size {size} ∙ Start {date}</p>
            </div>
            <div className="col-span-2 text-right">
                <p className="text-2xl font-bold text-neutral-100"><span className="text-lime-400">฿</span>{price}</p>
                <p className="text-xs text-neutral-500">/ วัน</p>
            </div>
            <div className="text-right">
                <button className="bg-lime-400 text-neutral-950 font-bold px-5 py-2 rounded-lg text-sm">Order</button>
            </div>
        </div>
    </div>
);

const RentalHistoryRow = ({ brand, model, size, dateRange, days, price, status }) => (
    <tr className="border-b border-neutral-800 text-neutral-400 text-sm">
        <td className="py-5 font-bold text-neutral-100">
            <p className="text-xs text-neutral-500 font-normal">{brand}</p>
            {model}
        </td>
        <td className="py-5 text-center">{size}</td>
        <td className="py-5 text-center">{dateRange}</td>
        <td className="py-5 text-center">{days}</td>
        <td className="py-5 text-center font-bold text-neutral-100"><span className="text-lime-400">฿</span>{price}</td>
        <td className="py-5 text-center">{status}</td>
        <td className="py-5 text-right">
            <button className="bg-neutral-800 text-neutral-100 text-xs px-4 py-1.5 rounded-lg border border-neutral-700">Re-rent</button>
        </td>
    </tr>
);

const ActivityItem = ({ title, time, type }) => {
    const iconColors = {
        check: 'bg-green-500',
        points: 'bg-lime-400',
        cancel: 'bg-red-500',
        upgrade: 'bg-yellow-400',
        booked: 'bg-orange-500'
    };
    return (
        <div className="flex gap-4 items-start py-3">
            <div className={`w-2.5 h-2.5 mt-1.5 rounded-full ${iconColors[type] || 'bg-neutral-600'}`}></div>
            <div>
                <p className="text-sm text-neutral-100">{title}</p>
                <p className="text-xs text-neutral-500">{time}</p>
            </div>
        </div>
    );
};


const DashboardPage = () => {
    const totalRentals = 7840;
    const currentRentalsCount = 2;
    const points = 2340;
    const returnRate = 100;

    const currentRentalsData = [
        { brand: 'NIKE', name: 'Pegasus 41', size: 42, date: 'Apr 8 – Return Apr 15', price: 150 },
        { brand: 'HOKA', name: 'Clifton 9', size: 43, date: 'Apr 10 – Return Apr 17', price: 170 },
    ];

    const rentalHistoryData = [
        { brand: 'ADIDAS', model: 'Ultraboost 23', size: 42, dateRange: '1-7 Apr 2025', days: 7, price: 1260, status: 'Returned' },
        { brand: 'ASICS', model: 'Gel-Kayano 31', size: 42, dateRange: '20-27 Mar 2025', days: 7, price: 1120, status: 'Returned' },
        { brand: 'NEW BALANCE', model: 'Fresh Foam X 1080v13', size: 43, dateRange: '5-12 Mar 2025', days: 7, price: 980, status: 'Returned' },
        { brand: 'BROOKS', model: 'Ghost 16', size: 42, dateRange: '18-25 Feb 2025', days: 7, price: 840, status: 'Returned' },
        { brand: 'NIKE', model: 'Vaporfly 3', size: 42, dateRange: '1-10 Feb 2025', days: 9, price: 2250, status: 'Returned' },
    ];

    const brands = [
        { name: 'Nike', count: 10 }, { name: 'Hoka', count: 12 }, { name: 'Adidas', count: 8 },
        { name: 'ASICS', count: 5 }, { name: 'Brooks', count: 3 }, { name: 'New Balance', count: 1 }
    ];

    const activities = [
        { title: 'Successfully rented Hoka Clifton 9', time: 'Today 09:15', type: 'booked' },
        { title: 'Received +170 points from rental', time: 'Today 09:16', type: 'points' },
        { title: 'Returned Adidas Ultraboost 23 on time', time: 'Yesterday 14:30', type: 'check' },
        { title: 'Upgraded to Elite Runner level', time: '5 Apr 2025', type: 'upgrade' },
        { title: 'Pre-booked Nike Vaporfly 3', time: '2 Apr 2025', type: 'booked' },
    ];

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans flex flex-col antialiased">
            {/* Header */}
            <header className="border-b border-neutral-800 px-6 py-4 flex items-center justify-between sticky top-0 bg-neutral-950 z-50">
                <div className="text-3xl font-extrabold text-lime-400 tracking-tighter">KINETIX</div>
                <nav className="flex items-center gap-10 text-sm text-neutral-300">
                    {['All Shoes', 'Brands', 'How to rent', 'Pricing'].map(item => (
                        <a key={item} href="#" className="hover:text-lime-400 transition">{item}</a>
                    ))}
                </nav>
                <div className="flex items-center gap-3">
                    <button className="bg-lime-400 text-neutral-950 font-bold px-6 py-2 rounded-lg text-sm flex items-center gap-2">
                        <span>Rent Now</span>
                        <span>→</span>
                    </button>
                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-lg text-lime-400 border border-neutral-700">SN</div>
                </div>
            </header>

            {/* Main Layout */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="w-72 border-r border-neutral-800 p-8 flex flex-col gap-10">
                    {/* User Profile */}
                    <div className="text-center flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-neutral-800 flex items-center justify-center font-black text-6xl text-lime-400 border-4 border-lime-400 shadow-[0_0_20px_rgba(163,230,53,0.3)]">SN</div>
                        <h1 className="mt-6 text-3xl font-bold tracking-tight">Somchai Runner</h1>
                        <p className="text-neutral-500 text-sm">somchai@email.com</p>
                        <div className="mt-4 inline-flex items-center gap-2 bg-lime-400 text-neutral-950 text-xs font-bold px-3 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 bg-neutral-950 rounded-full"></span>
                            ELITE RUNNER
                        </div>
                    </div>
                    {/* Main Navigation */}
                    <nav className="flex flex-col gap-3">
                        <h2 className="text-xs text-neutral-500 tracking-wider font-semibold uppercase mb-1">Main Menu</h2>
                        {[
                            { label: 'Overview', active: true },
                            { label: 'Notifications', badge: 1 },
                            { label: 'Rental History' },
                            { label: 'Reward Points' },
                            { label: 'Pre-booking' },
                        ].map(item => (
                            <a key={item.label} href="#" className={`flex items-center justify-between gap-3 px-4 py-3 rounded-lg text-lg ${item.active ? 'bg-neutral-800 text-lime-400 font-medium' : 'text-neutral-300 hover:bg-neutral-900'}`}>
                                <div className="flex items-center gap-3">
                                    <span className={`${item.active ? 'text-lime-400' : 'text-neutral-600'}`}>⊡</span> {/* Replace with actual icons */}
                                    {item.label}
                                </div>
                                {item.badge && <span className="text-xs font-semibold bg-lime-400 text-neutral-950 w-5 h-5 flex items-center justify-center rounded-full">{item.badge}</span>}
                            </a>
                        ))}
                    </nav>
                    {/* Account Navigation */}
                    <nav className="flex flex-col gap-3 mt-auto">
                        <h2 className="text-xs text-neutral-500 tracking-wider font-semibold uppercase mb-1">Account</h2>
                        {[
                            { label: 'Profile' },
                            { label: 'Security' },
                            { label: 'Payment' },
                        ].map(item => (
                            <a key={item.label} href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-lg text-neutral-300 hover:bg-neutral-900">
                                <span className="text-neutral-600">⊡</span>
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </aside>

                {/* Dashboard Content */}
                <main className="flex-1 bg-neutral-900 p-12">
                    {/* Page Title */}
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight flex items-center gap-3">
                                Welcome back, Somchai 👋
                            </h1>
                            <p className="text-neutral-500 text-sm mt-1">You've run 3 days this week ∙ Last updated Today 09:41</p>
                        </div>
                        <button className="bg-lime-400 text-neutral-950 font-bold px-6 py-3 rounded-xl flex items-center gap-2 text-sm shadow-lg shadow-lime-400/20">
                            <span className="font-extrabold text-lg">+</span>
                            Rent New Shoes
                        </button>
                    </div>

                    {/* Stats Cards Grid */}
                    <div className="grid grid-cols-4 gap-6 mb-10">
                        <StatCard title="Total Rentals" value={totalRentals.toLocaleString()} detail="↑ 1.2% from last month" iconColor="bg-lime-400" />
                        <StatCard title="Active Rentals" value={currentRentalsCount} detail="Pairs ∙ Return in 5 days" />
                        <StatCard title="Reward Points" value={points.toLocaleString()} detail="660 more points to Platinum" />
                        <StatCard title="Return Score" value={`${returnRate}%`} detail="✓ Always returned on time" detailColor="text-green-500" />
                    </div>

                    {/* Main sections grid */}
                    <div className="grid grid-cols-12 gap-8">
                        {/* Left Content Area (8/12) */}
                        <div className="col-span-8 flex flex-col gap-10">
                            {/* Current Rentals */}
                            <section className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-semibold">Currently Renting</h2>
                                    <a href="#" className="text-lime-400 text-sm font-medium hover:underline">View All →</a>
                                </div>
                                <div className="flex flex-col gap-5">
                                    {currentRentalsData.map((rental, i) => (
                                        <CurrentRentalItem key={i} {...rental} />
                                    ))}
                                </div>
                            </section>

                            {/* Rental History */}
                            <section className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-2xl font-semibold">Rental History</h2>
                                    <a href="#" className="text-neutral-500 text-sm font-medium hover:text-lime-400">Export CSV →</a>
                                </div>
                                {/* Filter and Search Bar */}
                                <div className="flex items-center gap-3 mb-6 bg-neutral-950 border border-neutral-800 rounded-2xl p-2">
                                    <input type="search" placeholder="Search by brand, model, date..." className="flex-1 bg-transparent text-sm text-neutral-100 placeholder:text-neutral-600 px-3 py-2.5 rounded-lg border-r border-neutral-800 focus:ring-0 focus:outline-none" />
                                    <div className="flex items-center gap-1.5 pl-1">
                                        {['All', 'Nike', 'Adidas', 'ASICS', 'Hoka', 'Brooks'].map((filter, i) => (
                                            <button key={filter} className={`text-xs font-semibold px-4 py-2 rounded-lg border ${i === 0 ? 'bg-lime-400 text-neutral-950 border-lime-400' : 'text-neutral-300 border-neutral-800 hover:border-neutral-700 hover:text-lime-400'}`}>
                                                {filter}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                {/* Table */}
                                <table className="w-full text-left">
                                    <thead className="border-b border-neutral-800 text-xs text-neutral-500 uppercase tracking-wide">
                                        <tr>
                                            {['Shoes', 'Size', 'Date', 'Days', 'Price', 'Status', ''].map(th => (
                                                <th key={th} className={`py-4 font-semibold ${th !== 'รองเท้า' ? 'text-center' : ''} ${th === '' ? 'text-right' : ''}`}>{th}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rentalHistoryData.map((row, i) => <RentalHistoryRow key={i} {...row} />)}
                                    </tbody>
                                </table>
                            </section>
                        </div>

                        {/* Right Sidebar Area (4/12) */}
                        <aside className="col-span-4 flex flex-col gap-10">
                            {/* Reward Points Card */}
                            <section className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-2xl font-semibold">Reward Points</h2>
                                    <a href="#" className="text-neutral-500 text-sm font-medium hover:text-lime-400">Redeem</a>
                                </div>
                                <p className="text-sm text-neutral-500">Your points</p>
                                <p className="text-4xl font-black text-neutral-100 mb-6 flex items-baseline gap-2">
                                    {points.toLocaleString()} <span className="text-xl font-bold text-lime-400">pts</span>
                                </p>
                                <div className="relative pt-6 border-t border-neutral-800 mt-6">
                                    <p className="absolute -top-3 right-0 bg-neutral-950 text-neutral-500 text-xs px-2">
                                        Platinum requires <span className='text-neutral-100 font-bold'>3,000 pts</span>
                                    </p>
                                    <div className="text-sm flex items-center justify-between gap-1 mb-3">
                                        <UserLevelBadge level="Elite" isActive={true} />
                                        <span className="text-neutral-600 text-xs flex-1 text-right">660 pts remaining</span>
                                        <UserLevelBadge level="Platinum" isActive={false} />
                                    </div>
                                    <div className="flex gap-2">
                                        {['BASIC', 'PRO', 'ELITE', 'PLATINUM'].map(lvl => <UserLevelBadge key={lvl} level={lvl} isActive={lvl === 'ELITE'} />)}
                                    </div>
                                </div>
                            </section>

                            {/* Favorite Brands */}
                            <section className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-2xl font-semibold">Favorite Brands</h2>
                                    <a href="#" className="text-neutral-500 text-sm font-medium hover:text-lime-400">Edit</a>
                                </div>
                                <div className="grid grid-cols-3 gap-5">
                                    {brands.map(brand => (
                                        <div key={brand.name} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex flex-col items-center gap-2.5">
                                            <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center font-black text-xl text-lime-400 border border-neutral-700">
                                                {brand.name === 'New Balance' ? 'NB' : brand.name === 'ASICS' ? 'AS' : brand.name.slice(0, 1).toUpperCase()}
                                            </div>
                                            <p className="text-sm font-bold text-neutral-100">{brand.name}</p>
                                            <p className="text-xs text-neutral-500">{brand.count} times</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Activity Feed */}
                            <section className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-semibold">Recent Activity</h2>
                                </div>
                                <div className="flex flex-col gap-2">
                                    {activities.map((activity, i) => (
                                        <ActivityItem key={i} {...activity} />
                                    ))}
                                </div>
                            </section>
                        </aside>
                    </div>
                </main>
            </div>

            {/* Footer */}
            <footer className="border-t border-neutral-800 text-center py-6 text-neutral-600 text-xs bg-neutral-950">
                © 2026 KINETIX - All rights reserved - Privacy Policy
            </footer>
        </div>
    );
};

export default DashboardPage;