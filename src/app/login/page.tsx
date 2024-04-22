"use client"

import React, { useEffect, useState } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { Button, Input, Link } from "@nextui-org/react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            router.push("/admin");
            
        } catch (error:any) {
            console.log("Login failed", error.message);
            
        } finally {
            setLoading(false);
        }
    }

    const logout = async () => {
        try {
            await axios.get('/api/users/logout');
            router.push('/login')
        } catch (error: any) {
            console.log(error.message)
            
        }

    }

    return (
        <div className="max-w-xl m-auto text-center">
            <h2 className="text-3xl font-bold my-4">Увійти в Адмін панель</h2>
            
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
                onClick={onLogin}
                isLoading={loading}
                size="lg"
                radius="lg"
                color="success"
                variant="solid"
                className="px-9 text-xl"
            >
                Увійти
            </Button>
            <br />
            <Link href="/signup" isBlock showAnchorIcon className="my-5">Зареєструвати адміністратора</Link>
        </div>
    )
}