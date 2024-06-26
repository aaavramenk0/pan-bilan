import Image from "next/image"
import logo from "../images/logo.png"
import { Divider, Link } from "@nextui-org/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
    return (
        <footer className="px-5 py-3 lg:px-10 lg:py-5 lg:grid lg:grid-cols-3 lg:gap-10">
            <div className="lg:m-0" id="contacts">
                <Image src={logo} alt="Pan Bilan logo" height={146} className="m-auto lg:m-0"/> 
                <p className="my-3 text-2xl">
                    Україна, Одеська область, <br />
                    28-29км автодороги «Одеса - Рені»
                </p>
                <div className="grid grid-rows-2">
                    <Link href="tel:+380673166313" className="text-2xl text-black">
                        <FontAwesomeIcon icon={faPhone} color="green" size="xl" className="mr-3"/>
                        +38 067 316 6313
                    </Link>
                    <Link href="mailto:info@bilan.com.ua" className="text-2xl text-black flex flex-row items-stretch">
                        <FontAwesomeIcon icon={faEnvelope} color="green" size="xl" className="mr-3 mt-3"/>
                        <p className="self-end">info@bilan.com.ua</p>
                    </Link>
                </div>
                <Divider className="lg:hidden my-10 h-[2px]" />
            </div>

            <div className="text-lg">
                <p>
                    Ми — ваш надійний постачальник свіжої плодоовочевої продукції, пишаємося можливістю вирощувати різноманітні сорти овочів та зелені. Одними з перших на півдні України ми почали виробництво кассетної розсади та вирощування салатів у промислових масштабах. Наша мета — забезпечувати вас продукцією вищої якості, яка буквально переходить з грядки до вашого столу, зберігаючи всі корисні властивості та неперевершений смак
                </p>
                <p className="uppercase my-5">
                    МИ СТВОРЮЄМО БІЗНЕС З ДУМКОЮ ПРО ЛЮДЕЙ!
                </p>
                <p>
                    З найкращими побажаннями здоров&apos;я та благополуччя, <br />
                    <span className="font-semibold text-xl">Віталій Білан</span>
                </p>
                <Divider className="lg:hidden my-10 h-[2px]" />
            </div>
            
            <div className="lg:grid justify-items-center items-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d43963.29451677569!2d30.404347999999995!3d46.474333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c7d5526e96afb3%3A0x25d7fa90a741840e!2z0KTQpSAi0J_QsNC9INCR0LjQu9Cw0L0i!5e0!3m2!1sen!2sus!4v1712750068819!5m2!1sen!2sus" className="border-0 w-full h-[350px] " loading="lazy" ></iframe>
            </div>
            
        </footer>
    )
}