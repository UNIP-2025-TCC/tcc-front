"use client"
import Image from "next/image"
import { Button } from "@heroui/react"
import { House } from "lucide-react"

import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"

export default function HeaderMenu() {
    const pathname = usePathname()
    const router = useRouter()

    const isVideoPage = pathname === "/video"
    return (
        <div id='menu-header' className='max-w-[1200px] mx-auto py-4 mb-6 flex justify-between'>
            <Image src="/img/mega_logo.png" alt="Logo" width={48} height={48} quality={100} />
            <Button onPress={() => router.push("/")} hidden={!isVideoPage} size="lg" className="font-medium text-lg text-amber-50 bg-linear-to-br from-stone-600 to-stone-900"><House size={20} /><span>Menu</span></Button>
        </div>
    )
}