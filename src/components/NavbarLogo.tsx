import Image from "next/image";

export default function NavbarLogo() {
    return (
        <div className="flex flex-row items-center gap-2  opacity-0 transition-all animate-slide-in ">
            <Image src="/logo.svg" alt="Studio Docs" width={40} height={50}/>
            <p className="text-xl font-light">Studio Docs</p>
        </div> 
    )
}
