import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: '"Пан Білан" | Партнери',
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