import React from 'react';
import { Handle, Position } from 'reactflow';
import { motion } from 'framer-motion';

export default function ConfirmationNode({ data }) {
    return (
        <div className="relative group min-w-[140px]">
            <Handle type="target" position={Position.Top} className="w-2 h-2 opacity-0" />

            {/* Glowing container */}
            <motion.div
                animate={{
                    boxShadow: ['0px 0px 10px rgba(250, 204, 21, 0.5)', '0px 0px 20px rgba(250, 204, 21, 0.8)', '0px 0px 10px rgba(250, 204, 21, 0.5)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="p-4 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-100 border-2 border-yellow-400 text-gray-900 font-bold text-center flex flex-col items-center justify-center transform transition-transform hover:scale-110"
            >
                <div className="absolute -top-3 -right-3 text-2xl filter drop-shadow-md">🌟</div>

                <span className="text-[10px] uppercase tracking-widest text-orange-600 mb-1">{data.typeLabel || 'ยืนยันผล'}</span>
                <div className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                    {data.label}
                </div>
            </motion.div>

            {/* Tooltip */}
            {(data.equation || data.description) && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none">
                    {data.equation && <div className="font-mono text-xs text-yellow-300 mb-2 border-b border-gray-700 pb-1">{data.equation}</div>}
                    {data.description && <div>{data.description}</div>}
                </div>
            )}
        </div>
    );
}
