import { Metadata } from "next";

export const metadata: Metadata = {
    title: '"Пан Білан" | Адмін панель',
    icons: {
        icon: '/favicon.ico'
    }
}

export default function AdminHomePageLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
   
    const listItems = [
        { label: "Агротуризм", href: "/admin/home-page/" },
        { label: "1 зупинка", href: "/admin/home-page/first-stop" },
        { label: "2 зупинка", href: "/admin/home-page/second-stop" },
        { label: "3 зупинка", href: "/admin/home-page/third-stop" },
        { label: "4 зупинка", href: "/admin/home-page/fourth-stop" }
    ]

    return (
        <div> 
            
            <ul className="grid grid-rows-1 grid-cols-5 justify-center text-center align-middle text-xl py-4">
                {listItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
            {children}
        </div>
    )
}