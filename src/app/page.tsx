import CameraCard from "@/components/cameraCard";

export default function Home() {

    return (
        <div>
            <div className="mb-10">
                <h1 className='text-3xl font-bold text-stone-900 mb-1'>
                    Bem-vindo ao <span className='text-amber-500'>MEGA</span>!
                </h1>
                <p className='text-stone-500 text-xl mb-4'>
                    Selecione uma câmera para visualizar as estatísticas
                </p>
            </div>
            <div className="grid grid-cols-3 gap-8">
                <CameraCard cameraCode="SP125-KM093B" cameraImage="/img/rodo-1.jpg" cameraCity="Ubatuba-SP" />
                <CameraCard cameraCode="SP008-KM095" cameraImage="/img/rodo-2.jpg" cameraCity="Bragança Paulista-SP" />
                <CameraCard cameraCode="VIDEO-GRAVADO" cameraImage="/img/rodo-3.jpg" cameraCity="Cidade Fictícia-UF" />
            </div>
        </div>
    );
}
