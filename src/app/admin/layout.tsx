import { Button, ButtonGroup } from "@nextui-org/react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: '"Пан Білан" | Адмін панель',
    icons: {
        icon: '/favicon.ico'
    }
}

export default function AdminLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="max-w-[1200px] m-auto">
            <h2 className="text-center font-bold text-3xl mt-5">Адміністративна панель управління</h2>
            
            <ButtonGroup className="m-auto text-center">
                <Button>Button 1</Button>
                <Button>Button 2</Button>
                <Button>Button 3</Button>
            </ButtonGroup> 
            
            {children}
        </div>
    )
}