"use client"

import { Link, menu, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { useState } from "react";
import NextImage from "next/image";
import logo from "../images/logo.png"
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { label: "Про нас", href: "#aboutus" },
        { label: "Партнери", href: "#partners" },
        { label: "Галерея", href: "#gallery" },
        { label: "Контакти", href: "#contacts" },
    ]
    
    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="bg">
            <h1 className="text-center text-4xl font-bold py-4">Агротуризм на базі Фермерського Господарства “Пан Білан”</h1>
        
            <Navbar isBordered position="sticky" onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
                <NavbarContent className="lg:hidden" justify="center">
                    <NavbarBrand>
                        <Link href="/"><NextImage src={logo} width={48} alt="Pan Bilan logo" /></Link>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="lg:hidden" justify="end">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent>

                <NavbarContent className="hidden lg:flex gap-8" justify="end">
                    <NavbarBrand>
                        <Link href="/"><NextImage src={logo} width={48} alt="Pan Bilan logo"/></Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden lg:flex gap-8" justify="end">
                    {menuItems.map((item, index) => (
                        <NavbarItem isActive={pathname == `${item.href}` ? true : false} key={index}>
                            <Link color="foreground" onClick={handleMenuClose} href={item.href} className="text-xl font-semibold">
                                {item.label}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>

                <NavbarMenu> 
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={index}>
                            <Link className="w-full" onClick={handleMenuClose} color="foreground" href="item.href" size="lg">
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </div>
        
    )
}