"use client"

import { useWebSocket } from "../../useWebsocket";

interface Props {
    isConnected: boolean,
    total_objects: number,
    crossing_count: number,
    stopped_vehicles: number[] | [],
    traffic_detected: boolean,
    fps: number,
    uptime_minuts: number;
}

export default function VideoPage() {
    const { isConnected, stats } = useWebSocket();

    return (
        <div>
        </div>
    )
}