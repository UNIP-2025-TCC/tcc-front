"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface CardProps {
    cameraCode: string;
    cameraImage: string;
}

export default function CameraCard({ cameraCode, cameraImage }: CardProps) {
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    async function handleClick() {
        setIsLoading(true)
        const response = await fetch(`${process.env.API_URL}/start/${cameraCode}`)

        if (!response.ok) {
            setErrorMessage('Erro ao iniciar a câmera')
        }
        setIsLoading(false)
        router.push(`/video-feed`)
    }


    return (
        <div className="border-stone-50 flex border hover:-translate-y-4 rounded-2xl bg-white/85 overflow-hidden hover:shadow-2xs transition-all duration-300">
            <div className="flex flex-col grow border-12 border-white" onClick={handleClick}>
                <Image src={cameraImage} alt="Camera" height={1000} width={1000} quality={100} style={{ objectFit: 'cover' }} className="grow border-b-8 rounded-2xl" />
                <div className="px-2 py-4 text-center flex flex-col gap-1">
                    <p className="text-lg font-semibold">{cameraCode}</p>
                    <p className="text-gray-600 text-sm">Câmera online <span className="text-xs text-green-500">⬤</span></p>
                </div>
            </div>
        </div>
    )
}