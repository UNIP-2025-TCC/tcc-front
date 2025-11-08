"use client"

import { CircleCheckBig, OctagonPause, Car, ArrowDownUp, CircleCheck, CircleMinus, SquareActivity } from "lucide-react";
import { useWebSocket } from "@/useWebsocket";

export function StatsCard({ children, title, icon, className }: { children: React.ReactNode, title: string, icon?: React.ReactNode, className?: string }) {
    return (
        <div className={`rounded-2xl border-stone-100 border bg-linear-to-br from-white/85 to-white/50 flex flex-col p-4 ${className}`}>
            <div className="flex items-center mb-2 justify-between">
                <h2 className="text-stone-700 font-semibold text-lg">{title}</h2>
                {icon && icon}
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default function VideoPage({ code, city }: {code: string, city: string}) {
    const { isConnected, stats } = useWebSocket();
    
    return (
        <div className="flex-col gap-2">
            <div className="flex justify-between mb-6">
                <div className='text-2xl font-bold text-stone-900 mb-1 flex items-center gap-3'>
                    <span className="text-3xl">{code}</span>
                    <span className="bg-amber-500 w-2 h-2 rounded-full block" />
                    <span className="text-stone-700 font-semibold">{city}</span>
                </div>
            </div>
            <div className="flex w-full gap-8">
                <img className={`rounded-2xl ${isConnected ? "" : "hidden"}`} id="videoStream" src="http://localhost:5000/video_feed" alt="Stream de vídeo processado" />
                {stats ? (
                    <div className="grid grid-cols-2 gap-4 grow h-fit">
                        <StatsCard title="Travessias" icon={<CircleCheckBig size={20} className="text-amber-500" />}>
                            <p className="text-3xl font-semibold">{stats.crossing_count}</p>
                            <p className="text-sm text-stone-500">veículos cruzaram a linha</p>
                        </StatsCard>
                        <StatsCard title="Veículos parados" icon={<OctagonPause size={20} className="text-amber-500" />}>
                            <p className="text-3xl font-semibold mb-1">{stats.stopped_vehicles.length}<span className="text-sm text-stone-500 font-normal"> veículo(s)</span></p>
                            <p className="text-sm text-stone-700">IDs: {stats.stopped_vehicles.join(", ")}</p>
                        </StatsCard>
                        <StatsCard title="Veículos na tela" icon={<Car size={20} className="text-amber-500" />}>
                            <p className="text-3xl font-semibold">{stats.total_objects}<span className="text-sm text-stone-500 font-normal"> veículo(s)</span></p>
                        </StatsCard>
                        <StatsCard title="Situação" icon={<ArrowDownUp size={20} className="text-amber-500" />}>
                            {stats.traffic_detected ?
                                <div className="flex items-center gap-1 text-red-600"><CircleMinus size={14} />
                                    <p className="font-semibold">Tráfego pesado</p>
                                </div>
                                :
                                <div className="flex items-center gap-1 text-green-600"><CircleCheck size={14} />
                                    <p className="font-semibold">Tráfego normal</p>
                                </div>}
                        </StatsCard>
                        <StatsCard title="Estatísticas da câmera" className="col-span-2" icon={<SquareActivity size={20} className="text-amber-500" />}>
                            <div className="flex items-center gap-2">
                                <p>Frames por segundo:</p>
                                <p className="text-lg font-medium">{stats.fps}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p>Tempo de atividade:</p>
                                <p className="text-lg font-medium">{stats.uptime_minutes} minutos</p>
                            </div>
                        </StatsCard>
                    </div>
                ) : (
                    <p className="text-stone-500">Sem dados para a câmera selecionada</p>
                )}
            </div>
        </div >
    )
}