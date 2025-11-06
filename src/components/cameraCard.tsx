import Image from "next/image";

interface CardProps {
    cameraCode: string;
    cameraImage: string;
}

export default function CameraCard({ cameraCode, cameraImage }: CardProps) {
    return (
        <div className="shadow-sm">
            <Image src={cameraImage} alt="Camera" width={128} height={128} />
            <p>{cameraCode}</p>
        </div>
    )
}