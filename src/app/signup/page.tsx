"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import axios from "axios"
import { Button, Link, Input } from "@nextui-org/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"

export default function SignupPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            router.push("/login");
        } catch (error : any) {
            console.error("Signup failed", error.message);
        } finally {
            setLoading(false);
        }
    }

    return (        
        <div className="max-w-xl m-auto text-center">
            <h2 className="text-3xl font-bold my-4">Зареєструвати нового адміністратора</h2>
            
            <Input
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                type="email"
                placeholder="Введіть e-mail"
                variant="bordered"
                size="lg"
            />
            
            <Input
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                      {isVisible ? (
                        <FontAwesomeIcon icon={faEye} />
                      ) : (
                        <FontAwesomeIcon icon={faEyeSlash} />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                placeholder="Введіть пароль"
                variant="bordered"
                size="lg"
                className="my-5"
            />
            <Button
                onClick={onSignup}
                isLoading={loading}
                size="lg"
                radius="lg"
                color="success"
                variant="solid"
                className="px-9 text-xl"
            >
                Зареєструватись
            </Button>
            <br />
            <Link href="/login" isBlock showAnchorIcon className="my-5">Увійти в адмін панель</Link>
        </div>
    )

}