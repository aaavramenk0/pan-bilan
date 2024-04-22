import { Metadata } from "next";


export const metadata: Metadata = {
    title: '"Пан Білан" | Адмін панель',
    icons: {
        icon: '/favicon.ico'
    }
}

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

    const listItems = [
        { label: "Головна", href: "/admin/home-page" },
        { label: "Партнери", href: "/admin/first-stop" },
        { label: "Галерея", href: "/admin/second-stop" },
        { label: "Контакти", href: "/admin/third-stop" }
    ]

    

    return (        
        <div className="max-w-[1200px] m-auto">
            <h2 className="text-center font-bold text-3xl mt-5">Адміністративна панель управління</h2> 
            <ul className="grid grid-rows-1 grid-cols-4 justify-center text-center align-middle text-xl py-4">
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