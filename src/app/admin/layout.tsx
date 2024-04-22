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
        { label: "Партнери", href: "/admin/partners" },
        { label: "Галерея", href: "/admin/gallery" },
        { label: "Контакти", href: "/admin/contacts" }
    ]

    

    return (        
        <div className="m-auto">
            <h2 className="text-center font-bold text-4xl my-5">Адміністративна панель управління</h2> 
            <ul className="max-w-xl m-auto grid grid-rows-1 grid-cols-4 justify-center text-center align-middle text-xl py-4">
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