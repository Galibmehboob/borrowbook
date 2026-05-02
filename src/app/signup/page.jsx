"use client";


import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Input,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SignUpPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = new FormData(e.currentTarget);

        const name = form.get("name");
        const image = form.get("image");
        const email = form.get("email");
        const password = form.get("password");

        console.log(name, email, password);

        if (!name || !email || !password) {
            toast.error("All required fields must be filled");
            setLoading(false);
            return;
        }

        try {
            const response = await authClient.signUp.email({
                name,
                email,
                password,
                image,
            });

            console.log(response);

            if (response.error) {
                toast.error(response.error.message || "Registration failed");
                return;
            }

            toast.success(`Welcome ${response.data?.user?.name}`);

            router.push("/signin");

        } catch (err) {
            console.log(err);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen px-4">
            <Card className="w-full max-w-md p-6 shadow-lg border">
                <h1 className="text-center text-2xl font-bold mb-6">
                    Sign Up
                </h1>

                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                    <Input
                        name="name"
                        label="Name"
                        placeholder="Enter your name"
                    />

                    <Input
                        name="image"
                        label="Photo URL"
                        placeholder="Image URL"
                    />

                    <Input
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="john@example.com"
                    />

                    <Input
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="Enter password"
                    />

                    <div className="flex gap-2 mt-2">
                        <Button
                            type="submit"
                            color="primary"
                            isLoading={loading}
                        >
                            <Check width={18} height={18} />
                            Submit
                        </Button>

                        <Button type="reset" variant="bordered">
                            Reset
                        </Button>
                    </div>

                </form>
            </Card>
        </div>
    );
}