
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Layout from "./componente/Layout";
import ContactUs from "./Page/ContactUs";
import HomePage from "./Page/HomePage";
import Pricing from "./Page/Pricing";
import FAQ from "./Page/FAQ";
import HowItWorks from "./Page/HowItWorks";
import User_interFace from "./Page/User_interFace";
import AdminDashboard from "./Page/AdminDashBoard";

const dashboardLoader = async () => {
  return {
    user: {
      initials: "SN",
      name: "สมชาย นิจวัง",
      role: "ELITE RUNNER",
      score: "4.9",
      rented: "47",
      level: "6",
    },
    cardStats: [
      {
        label: "ยอดคงเหลือ",
        value: "$7,840",
        note: "+12% จากเดือนก่อน",
        accent: true,
      },
      { label: "รายการเช่า", value: "2", note: "กำลังใช้งาน" },
      { label: "ยอดเช่า", value: "4,956", note: "จำนวนกิโลเมตรรวม" },
      {
        label: "กำไรสะสม",
        value: "$7,840",
        note: "จากการปล่อยเช่า",
        accent: true,
      },
    ],
    rentItems: [
      {
        name: "Pegasus 41",
        subtitle: "ไซซ์ 42 - เช่า 3 วัน",
        price: "$20/วัน",
      },
      { name: "Clifton 9", subtitle: "ไซซ์ 43 - เช่า 5 วัน", price: "$80/วัน" },
    ],
    historyItems: [
      { name: "Pegasus 41", status: "$20/วัน", badge: "คืนแล้ว" },
      { name: "Clifton 9", status: "$80/วัน", badge: "กำลังเช่า" },
      { name: "Pegasus 41", status: "$20/วัน", badge: "คืนแล้ว" },
      { name: "Clifton 9", status: "$80/วัน", badge: "กำลังเช่า" },
    ],
    quickFilters: ["All", "Nike", "Adidas", "ASICS", "Hoka", "Brooks"],
    menuItems: [
      "ภาพรวม",
      "การแจ้งเตือน",
      "ประวัติการเช่า",
      "นัดรับ-ส่ง",
      "บัญชี",
      "ข้อมูลส่วนตัว",
      "ความปลอดภัย",
      "การชำระเงิน",
    ],
  };
};





const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "contact", element: <ContactUs /> },
      { path: "pricing", element: <Pricing /> },
      { path: "how-it-works", element: <HowItWorks /> },
      { path: "faq", element: <FAQ /> },
      {
        path: "dashboard",
        element: <User_interFace />,
        loader: dashboardLoader,
      },
      {
        path: "admin-dashboard",
        element: <AdminDashboard />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;

}
