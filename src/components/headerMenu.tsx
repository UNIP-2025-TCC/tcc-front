import Image from "next/image"

export default function HeaderMenu() {
    return (
        <div id='menu-header' className='max-w-[1200px] mx-auto py-4 bg-white mb-6'>
            <Image src="/img/mega_logo.png" alt="Logo" width={48} height={48} quality={100} />
        </div>
    )
}