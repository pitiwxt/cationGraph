import React from 'react';
import { Handle, Position } from 'reactflow';

export default function SolutionNode({ data }) {
    return (
        <div className="relative group min-w-[150px]">
            <Handle type="target" position={Position.Top} className="w-2 h-2 !bg-blue-400" />

            {/* Glassmorphism styling */}
            <div className={`p-3 rounded-[20px] shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] backdrop-blur-md border border-white/30 text-gray-800 font-bold text-center flex flex-col items-center justify-center transition-transform hover:scale-105 ${data.colorClass || 'bg-white/40'}`}>
                <span className="text-xs uppercase tracking-widest opacity-60 mb-1">{data.typeLabel || 'สารละลาย'}</span>
                <div className="flex items-center gap-2">
                    {data.icon && <span className="text-lg drop-shadow-md">{data.icon}</span>}
                    <span className="drop-shadow-sm">{data.label}</span>
                </div>
            </div>

            <Handle type="source" position={Position.Bottom} className="w-2 h-2 !bg-blue-400" />

            {/* Tooltip */}
            {(data.equation || data.description) && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 p-3 bg-gray-900/90 backdrop-blur-sm text-white text-sm rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none border border-gray-700">
                    {data.equation && <div className="font-mono text-xs text-blue-300 mb-2 border-b border-gray-700 pb-1">{data.equation}</div>}
                    {data.description && <div>{data.description}</div>}
                </div>
            )}
        </div>
    );
}
