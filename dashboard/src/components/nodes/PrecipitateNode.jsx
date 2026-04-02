import React from 'react';
import { Handle, Position } from 'reactflow';

export default function PrecipitateNode({ data }) {
    return (
        <div className="relative group min-w-[150px]">
            <Handle type="target" position={Position.Top} className="w-2 h-2 !bg-gray-400" />

            <div className={`p-3 rounded-lg border-2 border-gray-700 shadow-md ${data.colorClass || 'bg-gray-100'} text-gray-900 font-bold text-center flex flex-col items-center justify-center transition-transform hover:scale-105`}>
                <span className="text-xs uppercase tracking-widest opacity-70 mb-1">{data.typeLabel || 'ตะกอน'}</span>
                <div className="flex items-center gap-2">
                    {data.icon && <span className="text-lg">{data.icon}</span>}
                    <span>{data.label}</span>
                </div>
            </div>

            <Handle type="source" position={Position.Bottom} className="w-2 h-2 !bg-gray-400" />

            {/* Tooltip */}
            {(data.equation || data.description) && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none">
                    {data.equation && <div className="font-mono text-xs text-yellow-300 mb-2 border-b border-gray-700 pb-1">{data.equation}</div>}
                    {data.description && <div>{data.description}</div>}
                </div>
            )}
        </div>
    );
}
