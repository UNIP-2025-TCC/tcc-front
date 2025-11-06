import Image from "next/image"

export default function HeaderMenu() {
    return (
        <div id='menu-header' className='w-full px-16 py-4 bg-white mb-6'>
            <Image src="/img/mega_logo.png" alt="Logo" width={48} height={48} />
        </div>
    )
}