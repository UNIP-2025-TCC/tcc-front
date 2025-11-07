"use client";

import { CircleCheck } from "lucide-react";
import Image from "next/image";
import { toast, Toaster } from "react-hot-toast";

interface CardProps {
    cameraCode: string;
    cameraImage: string;
    cameraCity: string;
}

export default function CameraCard({ cameraCode, cameraImage, cameraCity }: CardProps) {

    async function handleClick() {
        const toastId = toast.loading("Iniciando câmera...");

        try {
            const response = await fetch(`http://localhost:5000/start/${cameraCode}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                toast.error(`Erro ao iniciar a câmera ${cameraCode}`);
                return;
            }

            toast.success("Câmera iniciada!", { id: toastId });
            window.location.href = `/video?code=${cameraCode}&city=${cameraCity}`;
        } catch (error) {
            toast.error("Erro ao conectar", { id: toastId });
            return;
        }
    }


    return (
        <>
            <Toaster
                position="top-center"
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },
                }}
            />
            <div className="border-stone-100 flex border hover:-translate-y-4 rounded-2xl bg-linear-to-br from-white to-white/50 overflow-hidden hover:shadow-2xs transition-all duration-300">
                <div className="flex flex-col grow border-12 border-transparent" onClick={handleClick}>
                    <Image src={cameraImage} alt="Camera" height={1000} width={1000} quality={100} style={{ objectFit: 'cover' }} className="grow border-b-8 rounded-2xl" />
                    <div className="px-2 py-4 text-center flex flex-col gap-1">
                        <p className="text-lg font-semibold">{cameraCode}</p>
                        <p className="text-stone-600 text-sm font-medium">{cameraCity}</p>
                        <div className="flex items-center gap-1 self-center"><p className="text-stone-600 text-sm">Câmera online </p><CircleCheck size={12} className="text-green-500" /></div>
                    </div>
                </div>
            </div>
        </>
    )
}