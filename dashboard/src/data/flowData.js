export const initialNodes = [
    // INITIAL
    { id: 'start', type: 'chemical', data: { label: 'Ag+, Hg2 2+, Pb2+, Ni2+, Zn2+, Mn2+, Fe3+, Cr3+, Al3+', isSource: true, colorClass: 'bg-indigo-50 border-indigo-200 shadow-indigo-100', icon: '🧪', typeLabel: 'ตัวอย่างที่ยังไม่ทราบชนิด (1 mL)' }, position: { x: 0, y: 0 } },

    // G1 Split
    { id: 'g1_ppt', type: 'precipitate', data: { label: 'AgCl, Hg2Cl2, PbCl2', colorClass: 'bg-[var(--color-precipitate-white)]', icon: '⬜' }, position: { x: 0, y: 0 } },
    { id: 'g234_sol', type: 'solution', data: { label: 'Ni2+, Zn2+, Al3+, Cr3+, Fe3+, Mn2+', colorClass: 'bg-[var(--color-solution-clear)]', icon: '💧' }, position: { x: 0, y: 0 } },

    // G1 CONFIRMATIONS
    { id: 'pb_sol', type: 'solution', data: { label: 'Pb2+', colorClass: 'bg-[var(--color-solution-clear)]', icon: '💧', description: 'PbCl2 ละลายในน้ำร้อน' }, position: { x: 0, y: 0 } },
    { id: 'ag_hg_ppt', type: 'precipitate', data: { label: 'AgCl, Hg2Cl2', colorClass: 'bg-[var(--color-precipitate-white)]', icon: '⬜' }, position: { x: 0, y: 0 } },

    { id: 'pb_conf', type: 'confirmation', data: { label: 'ยืนยัน Pb2+ (PbCrO4)', equation: 'Pb2+ (aq) + CrO4 2- (aq) → PbCrO4 (s)', description: 'ตะกอนสีเหลืองแสดงถึงจุดยืนยันตะกั่ว (Pb)', typeLabel: 'ตะกอนสีเหลือง' }, position: { x: 0, y: 0 } },

    { id: 'hg_conf', type: 'confirmation', data: { label: 'ยืนยัน Hg2 2+', equation: 'Hg2Cl2 (s) + 2NH3 (aq) → HgNH2Cl (s) + Hg (s) + NH4+ + Cl-', description: 'ตะกอนสีดำ/เทา (Hg + HgNH2Cl) บ่งชี้ว่าเป็นปรอท (Hg)', typeLabel: 'ตะกอนสีดำ/เทา' }, position: { x: 0, y: 0 } },
    { id: 'ag_sol', type: 'solution', data: { label: '[Ag(NH3)2]+', colorClass: 'bg-[var(--color-solution-clear)]', icon: '💧', equation: 'AgCl (s) + 2NH3 (aq) → [Ag(NH3)2]+ (aq) + Cl- (aq)' }, position: { x: 0, y: 0 } },

    { id: 'ag_conf', type: 'confirmation', data: { label: 'ยืนยัน Ag+ (AgCl)', equation: '[Ag(NH3)2]+ (aq) + Cl- (aq) + 2H+ (aq) → AgCl (s) + 2NH4+', description: 'ตะกอนสีขาวในสภาวะกรดบ่งชี้ว่าเป็นเงิน (Ag)', typeLabel: 'ตะกอนสีขาว' }, position: { x: 0, y: 0 } },

    // G2,3,4 Split
    { id: 'g3_ppt', type: 'precipitate', data: { label: 'Ni(OH)2, Fe(OH)3, MnO2·xH2O', colorClass: 'bg-emerald-100', icon: '🪨', description: 'ตะกอนหลากสีผสมกัน' }, position: { x: 0, y: 0 } },
    { id: 'g4_sol', type: 'solution', data: { label: 'CrO4 2-, [Al(OH)4]-, [Zn(OH)4]2-', colorClass: 'bg-[var(--color-solution-yellow)]', icon: '🟡', description: 'โครเมตทำให้สารละลายมีสีเหลือง ส่วนตัวอื่นไม่มีสี' }, position: { x: 0, y: 0 } },

    // G3: Ni, Fe, Mn
    { id: 'ni_sol', type: 'solution', data: { label: '[Ni(NH3)6]2+', colorClass: 'bg-[var(--color-solution-blue)]', icon: '🔵', equation: 'Ni2+ + 6NH3 → [Ni(NH3)6]2+' }, position: { x: 0, y: 0 } },
    { id: 'fe_mn_ppt', type: 'precipitate', data: { label: 'Fe(OH)3, MnO2', colorClass: 'bg-[var(--color-precipitate-redbrown)] text-white', icon: '🟤' }, position: { x: 0, y: 0 } },

    { id: 'ni_conf', type: 'confirmation', data: { label: 'ยืนยัน Ni2+', equation: '[Ni(NH3)6]2+ + 2DMG → Ni(DMG)2 (s) + ...', description: 'ตะกอนสีแดงของ Nickel dimethylglyoxime', typeLabel: 'ตะกอนสีแดง/ชมพู' }, position: { x: 0, y: 0 } },

    { id: 'fe_mn_sol', type: 'solution', data: { label: 'Fe3+, Mn2+', colorClass: 'bg-[var(--color-solution-clear)]', icon: '💧', description: 'ละลายใน HCl/HNO3 แล้วแบ่งสารละลายเป็น 3 ส่วน' }, position: { x: 0, y: 0 } },
    { id: 'fe_conf1', type: 'confirmation', data: { label: 'ยืนยัน Fe3+ [SCN]', equation: 'Fe3+ + SCN- → [Fe(SCN)]2+', description: 'สารละลายสีเลือดหมู (เลือดนก)', typeLabel: 'สารละลายสีเลือดหมู' }, position: { x: 0, y: 0 } },
    { id: 'fe_conf2', type: 'confirmation', data: { label: 'ยืนยัน Fe3+ [Fe(CN)6]', equation: 'Fe3+ + K+ + [Fe(CN)6]4- → KFe[Fe(CN)6] (s)', description: 'ตะกอนสีน้ำเงิน (Prussian Blue)', typeLabel: 'ตะกอนสีน้ำเงิน' }, position: { x: 0, y: 0 } },
    { id: 'mn_conf', type: 'confirmation', data: { label: 'ยืนยัน Mn2+ (MnO4-)', equation: '2Mn2+ + 5NaBiO3 + 14H+ → 2MnO4- + 5Bi3+ + ...', description: 'สารละลายสีม่วงแดง', typeLabel: 'สารละลายสีม่วงแดง' }, position: { x: 0, y: 0 } },

    // G4: Cr, Al, Zn
    { id: 'al_ppt', type: 'precipitate', data: { label: 'Al(OH)3', colorClass: 'bg-[var(--color-precipitate-white)]', icon: '☁️', description: 'ตะกอนวุ้นสีขาว' }, position: { x: 0, y: 0 } },
    { id: 'cr_zn_sol', type: 'solution', data: { label: 'CrO4 2-, [Zn(NH3)4]2+', colorClass: 'bg-[var(--color-solution-yellow)]', icon: '🟡' }, position: { x: 0, y: 0 } },

    { id: 'al_conf', type: 'confirmation', data: { label: 'ยืนยัน Al3+', description: 'สารละลายสีน้ำเงินเมื่อทำปฏิกิริยากับ Catechol Violet', typeLabel: 'สารละลายสีน้ำเงิน' }, position: { x: 0, y: 0 } },

    { id: 'cr_ppt', type: 'precipitate', data: { label: 'BaCrO4', colorClass: 'bg-[var(--color-precipitate-yellow)]', icon: '🟨', description: 'ตะกอนสีเหลือง' }, position: { x: 0, y: 0 } },
    { id: 'zn_sol', type: 'solution', data: { label: '[Zn(NH3)4]2+', colorClass: 'bg-[var(--color-solution-clear)]', icon: '💧' }, position: { x: 0, y: 0 } },

    { id: 'cr_conf', type: 'confirmation', data: { label: 'ยืนยัน Cr3+', equation: 'Cr2O7 2- + 4H2O2 → 2CrO(O2)2 + 5H2O', description: 'สารละลายสีน้ำเงินเข้ม (จางหายไปอย่างรวดเร็ว)', typeLabel: 'สารละลายสีน้ำเงิน' }, position: { x: 0, y: 0 } },
    { id: 'zn_conf', type: 'confirmation', data: { label: 'ยืนยัน Zn2+', equation: '3Zn2+ + 2K+ + 2[Fe(CN)6]4- → K2Zn3[Fe(CN)6]2', description: 'ตะกอนสีขาวหรือเขียวอ่อน', typeLabel: 'ตะกอนสีขาว/เขียวอ่อน' }, position: { x: 0, y: 0 } }
];

export const initialEdges = [
    { id: 'e_start_g1', source: 'start', target: 'g1_ppt', type: 'actionEdge', data: { label: 'เติม HCl 6M 1-2 หยด', icon: '💧', reactionType: 'การตกตะกอน', description: 'แคทไอออนกลุ่ม 1 ตกตะกอนเป็นคลอไรด์ที่ไม่ละลายน้ำ (หากเกิดตะกอนให้เติมต่อจนสมบูรณ์)' } },
    { id: 'e_start_sol', source: 'start', target: 'g234_sol', type: 'actionEdge', data: { label: 'เซนตริฟิวจ์', icon: '🌀' } },

    // G1 Branches
    { id: 'e_g1_water1', source: 'g1_ppt', target: 'pb_sol', type: 'actionEdge', data: { label: 'เติมน้ำร้อน 1 mL & อุ่น', icon: '♨️', reactionType: 'การละลาย', description: 'นำตะกอนมาละลายในน้ำร้อน 1 mL และอุ่นบนอ่างน้ำร้อน (PbCl2 จะละลาย)' } },
    { id: 'e_g1_water2', source: 'g1_ppt', target: 'ag_hg_ppt', type: 'actionEdge', data: { label: 'เซนตริฟิวจ์', icon: '🌀', description: 'ส่วนที่เป็นตะกอนยังคงอยู่' } },

    { id: 'e_pb_conf', source: 'pb_sol', target: 'pb_conf', type: 'actionEdge', data: { label: 'หยด K2CrO4 0.1M 2-3 หยด', icon: '💧', reactionType: 'การตกตะกอน' } },

    { id: 'e_ag_hg_nh3_1', source: 'ag_hg_ppt', target: 'hg_conf', type: 'actionEdge', data: { label: 'หยด NH3 6M 1 mL', icon: '💧', reactionType: 'ปฏิกิริยารีดอกซ์', description: 'ปรอทเกิด disproportionation เป็นตะกอนสีดำ' } },
    { id: 'e_ag_hg_nh3_2', source: 'ag_hg_ppt', target: 'ag_sol', type: 'actionEdge', data: { label: 'หยด NH3 6M 1 mL', icon: '💧', reactionType: 'การเกิดสารเชิงซ้อน', description: 'เงิน (Ag) ละลายเป็นแอมมีนคอมเพล็กซ์' } },

    { id: 'e_ag_conf', source: 'ag_sol', target: 'ag_conf', type: 'actionEdge', data: { label: 'หยด HNO3 6M จนเป็นกรด', icon: '💧', reactionType: 'ปฏิกิริยากรด-เบส', description: 'ทดสอบด้วยกระดาษลิตมัส: สีน้ำเงิน -> แดง (เพื่อทำลายสารเชิงซ้อนให้ตกตะกอนคืนกลับมา)' } },

    // G2,3,4 Branches
    { id: 'e_g234_split1', source: 'g234_sol', target: 'g3_ppt', type: 'actionEdge', data: { label: 'NaOH ทีละหยดจนเป็นเบส + Excess 0.5 mL', icon: '♨️', reactionType: 'การตกตะกอน และ รีดอกซ์', description: 'ทำเป็นเบส (กระดาษลิตมัสสีแดงเปลี่ยนเป็นน้ำเงิน) เติมเลยจุดนั้นไป 0.5 mL อุ่น 2 นาที จากนั้นเติม 3% H2O2 1 mL และอุ่นบนเตาจนลดเหลือหนี่ง' } },
    { id: 'e_g234_split2', source: 'g234_sol', target: 'g4_sol', type: 'actionEdge', data: { label: 'เซนตริฟิวจ์', icon: '🌀' } },

    // G3 Branches
    { id: 'e_g3_split1', source: 'g3_ppt', target: 'ni_sol', type: 'actionEdge', data: { label: 'HNO3/HCl อุ่น -> NH4Cl -> 15M NH3 -> H2O2', icon: '⚗️', reactionType: 'การเกิดสารเชิงซ้อน', description: 'เติม 6M HNO3 10 หยด & 6M HCl 5-6 หยด อุ่นจนตะกอนละลาย. เติม 4M NH4Cl 4 หยด, จากนั้นหยด 15M NH3 จนเป็นเบส (ลิตมัสแดง->น้ำเงิน). เติม 3% H2O2 1 mL แล้วเซนตริฟิวจ์' } },
    { id: 'e_g3_split2', source: 'g3_ppt', target: 'fe_mn_ppt', type: 'actionEdge', data: { label: 'ตะกอนที่หลงเหลือ', icon: '🌀' } },

    { id: 'e_ni_conf', source: 'ni_sol', target: 'ni_conf', type: 'actionEdge', data: { label: 'หยด DMG 2-3 หยด', icon: '💧', reactionType: 'การเกิดสารเชิงซ้อน' } },

    { id: 'e_fe_mn_dissolve', source: 'fe_mn_ppt', target: 'fe_mn_sol', type: 'actionEdge', data: { label: 'ละลายใน HCl 1 mL และ HNO3 2 หยด', icon: '♨️', reactionType: 'ปฏิกิริยากรด-เบส' } },
    { id: 'e_fe_conf1', source: 'fe_mn_sol', target: 'fe_conf1', type: 'actionEdge', data: { label: 'หยด 1M KSCN 4-5 หยด', icon: '💧', reactionType: 'การเกิดสารเชิงซ้อน' } },
    { id: 'e_fe_conf2', source: 'fe_mn_sol', target: 'fe_conf2', type: 'actionEdge', data: { label: 'หยด 0.1M K4Fe(CN)6 2-3 หยด', icon: '💧', reactionType: 'การตกตะกอน' } },
    { id: 'e_mn_conf', source: 'fe_mn_sol', target: 'mn_conf', type: 'actionEdge', data: { label: 'HNO3 2 หยด + NaBiO3 1 ช้อนเล็ก', icon: '💧', reactionType: 'ปฏิกิริยารีดอกซ์' } },

    // G4 Branches
    { id: 'e_g4_split1', source: 'g4_sol', target: 'al_ppt', type: 'actionEdge', data: { label: 'หยด CH3COOH เป็นกรด แล้วหยด NH3 เป็นเบส', icon: '💧', reactionType: 'ปฏิกิริยากรด-เบส และ การตกตะกอน', description: 'หยด 6M CH3COOH จนเป็นกรด (ลิตมัส น้ำเงิน->แดง) ค่อยๆ เติม 6M NH3 จนกลับเป็นเบส (แดง->น้ำเงิน) แล้วเติมต่อ Excess อีก 0.5 mL' } },
    { id: 'e_g4_split2', source: 'g4_sol', target: 'cr_zn_sol', type: 'actionEdge', data: { label: 'เซนตริฟิวจ์', icon: '🌀', reactionType: 'การเกิดสารเชิงซ้อน' } },

    { id: 'e_al_conf', source: 'al_ppt', target: 'al_conf', type: 'actionEdge', data: { label: 'เติมน้ำ 1 mL + CH3COOH + Catechol Violet 2 หยด', icon: '💧', reactionType: 'การเกิดสารเชิงซ้อน', description: 'ละลายตะกอนวุ้นด้วย 6M CH3COOH พอดีละลาย แล้วเติม Catechol 2 หยด' } },

    { id: 'e_cr_zn_split1', source: 'cr_zn_sol', target: 'cr_ppt', type: 'actionEdge', data: { label: 'หยด BaCl2 1M 0.5 mL', icon: '💧', reactionType: 'การตกตะกอน' } },
    { id: 'e_cr_zn_split2', source: 'cr_zn_sol', target: 'zn_sol', type: 'actionEdge', data: { label: 'เซนตริฟิวจ์', icon: '🌀' } },

    { id: 'e_cr_conf', source: 'cr_ppt', target: 'cr_conf', type: 'actionEdge', data: { label: 'HNO3 0.5 mL + น้ำ 0.5 mL + H2O2 2-3 หยด', icon: '💧', reactionType: 'ปฏิกิริยารีดอกซ์', description: 'ละลายด้วยกรด เติมของเหลว แล้วจึงเกิดผลิตภัณฑ์สั้นๆ หายไป' } },
    { id: 'e_zn_conf', source: 'zn_sol', target: 'zn_conf', type: 'actionEdge', data: { label: 'หยด HCl จนเป็นกรด + K4Fe(CN)6 3 หยด', icon: '💧', reactionType: 'การตกตะกอน', description: 'หยด 6M HCl จนกระดาษลิตมัสเปลี่ยนเป้นสีแดง' } }
];
