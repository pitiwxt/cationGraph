import React from 'react';
import { BaseEdge, EdgeLabelRenderer, getBezierPath } from 'reactflow';

export default function ActionEdge({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
    data,
}) {
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    return (
        <>
            <BaseEdge path={edgePath} markerEnd={markerEnd} style={{ ...style, strokeWidth: 2 }} />
            {data?.label && (
                <EdgeLabelRenderer>
                    <div
                        style={{
                            position: 'absolute',
                            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                            pointerEvents: 'all',
                        }}
                        className="group nodrag nopan flex items-center justify-center"
                    >
                        <div className="bg-white px-3 py-1 rounded-full text-xs font-semibold shadow border border-gray-200 text-gray-700 flex items-center gap-1 cursor-default hover:bg-gray-50 transition-colors">
                            {data.icon && <span>{data.icon}</span>}
                            <span>{data.label}</span>
                            {data.reactionType && (
                                <span className="ml-1 px-1.5 py-0.5 bg-indigo-100 text-indigo-700 rounded text-[9px] uppercase tracking-wide border border-indigo-200">
                                    {data.reactionType}
                                </span>
                            )}
                        </div>

                        {/* Edge Tooltip */}
                        {(data.equation || data.description) && (
                            <div className="absolute top-full mt-1 w-56 p-2 bg-gray-900 border border-gray-700 text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none left-1/2 -translate-x-1/2">
                                {data.equation && <div className="font-mono text-[10px] text-green-300 mb-1 border-b border-gray-700 pb-1">{data.equation}</div>}
                                {data.description && <div>{data.description}</div>}
                            </div>
                        )}
                    </div>
                </EdgeLabelRenderer>
            )}
        </>
    );
}
