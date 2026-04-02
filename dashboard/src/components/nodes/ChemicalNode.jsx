import React from 'react';
import { Handle, Position } from 'reactflow';

export default function ChemicalNode({ data }) {
    return (
        <div className="relative group min-w-[150px]">
            {!data.isSource && <Handle type="target" position={Position.Top} className="w-2 h-2 !bg-gray-400" />}

            <div className={`p-3 bg-white rounded-md border border-gray-300 shadow-sm text-gray-800 font-medium text-center flex flex-col items-center justify-center transition-shadow hover:shadow-md ${data.colorClass || ''}`}>
                {data.typeLabel && <span className="text-[10px] uppercase text-gray-500 mb-1 tracking-wider">{data.typeLabel}</span>}
                <div className="flex items-center justify-center gap-2">
                    {data.icon && <span>{data.icon}</span>}
                    <span>{data.label}</span>
                </div>
            </div>

            <Handle type="source" position={Position.Bottom} className="w-2 h-2 !bg-gray-400" />
        </div>
    );
}
