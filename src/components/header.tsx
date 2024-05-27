"use client"

import { Link, menu, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { useState } from "react";
import NextImage from "next/image";
import NextLink from "next/link";
import logo from "../images/logo.png"
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'


export default function Header() {
    const pathname = usePathname();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { label: "Про нас", href: "/" },
        { label: "Партнери", href: "/partners" },
        { label: "Галерея", href: "/gallery" },
        { label: "Контакти", href: "#contacts" },
    ]
    
    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };
    
            
    return (
        <>
            <h1 className="hidden lg:block text-center text-4xl font-bold py-4">Агротуризм на базі Фермерського Господарства “Пан Білан”</h1>
    
            <Navbar position="sticky" isBordered onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
                <NavbarContent className="lg:hidden" justify="start">
                    <NavbarBrand>
                        <Link href="/"><NextImage src={logo} width={100} alt="Pan Bilan logo" /></Link>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="lg:hidden" justify="end">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent>

                <NavbarContent className="hidden lg:flex gap-8" justify="start">
                    <NavbarBrand>
                        <Link href="/"><NextImage src={logo} width={100} alt="Pan Bilan logo"/></Link>
                    </NavbarBrand>
                </NavbarContent>

                {/* Desktop Menu */}
                <NavbarContent className="hidden lg:flex gap-8" justify="center">
                    {menuItems.map((item, index) => (
                        <NavbarItem isActive={pathname == `${item.href}` ? true : false} key={index}>
                            <NextLink color="foreground" onClick={handleMenuClose} href={item.href} className="text-xl font-semibold">
                                {item.label}
                            </NextLink>
                        </NavbarItem>
                    ))}
                </NavbarContent>

                {/* Mobile menu */}
                <NavbarMenu> 
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={index}>
                            <NextLink className="w-full text-xl font-semibold" onClick={handleMenuClose} color="foreground" href={item.href}>
                                {item.label}
                            </NextLink>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>

                {/* Desktop social media icons */}
                <NavbarContent className="hidden lg:flex gap-2" justify="end">
                    <a href="https://www.facebook.com/farm.pan.bilan" target="_blank"><FontAwesomeIcon size="3x" icon={faFacebook} style={{color: "#0091ff"}} /></a>
                    <a href="https://www.instagram.com/pan.bilan/" target="_blank"><FontAwesomeIcon size="3x" icon={faInstagram} style={{color: "#C1558B"}} /></a>
                </NavbarContent>
            </Navbar>
        </>
    )
}