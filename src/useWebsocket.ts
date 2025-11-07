'use client';

import { useEffect, useRef, useState } from 'react';
import io, { Socket } from 'socket.io-client';

interface Stats {
    total_objects: number;
    crossing_count: number;
    stopped_vehicles: number[];
    traffic_detected: boolean;
    fps: number;
    uptime_minutes: number;
}

export function useWebSocket() {
    const url = 'http://localhost:5000';
    const socketRef = useRef<typeof Socket | null>(null);
    const [isConnected, setIsConnected] = useState(false);
    const [stats, setStats] = useState<Stats | null>(null);

    useEffect(() => {
        socketRef.current = io(url, {
            transports: ['websocket'],
            reconnection: true,
            reconnectionAttempts: 5,
            reconnectionDelay: 1000,
        });

        if (!socketRef.current) {
            return;
        }

        socketRef.current.on('connect', () => {
            console.log('Conectado ao servidor WebSocket');
            setIsConnected(true);
        });

        socketRef.current.on('stats_update', (data: Stats) => {
            setStats(data);
        });

        socketRef.current.on('error', (error: string) => {
            console.error('Erro no WebSocket:', error);
        });

        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect();
                setIsConnected(false);
            }
        };
    }, [url]);

    return { isConnected, stats };
}
