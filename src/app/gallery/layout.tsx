import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: '"Пан Білан" | Галерея',
    icons: {
        icon: '/favicon.ico'
    }
}

export default function GalleryLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}