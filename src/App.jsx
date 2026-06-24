import React, { useState, useMemo } from "react";

const LOGO = "data:image/jpeg;base64,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";

/* ---------- NH3 toxicity ---------- */
function fractionNH3(pH, tempC, salinity) {
  const T = tempC + 273.15;
  let pKa = 0.09018 + 2729.92 / T;
  pKa += 0.0001552 * salinity;
  return 1 / (1 + Math.pow(10, pKa - pH));
}
const NH3_LEVELS = [
  { max: 0.02, label: "Aman", color: "#1f9d6b", bg: "#e6f6ef", note: "Di bawah ambang stres kronis vaname." },
  { max: 0.05, label: "Sedang", color: "#c9971b", bg: "#fbf3da", note: "Mulai menekan pertumbuhan & nafsu makan." },
  { max: 0.10, label: "Berbahaya", color: "#d9722b", bg: "#fbeadd", note: "Stres signifikan, risiko penyakit naik." },
  { max: Infinity, label: "Sangat Berbahaya", color: "#c0392b", bg: "#fae3e0", note: "Toksik akut, risiko kematian massal." },
];
const classifyNH3 = (v) => NH3_LEVELS.find((l) => v < l.max);

/* ---------- N:P plankton ---------- */
// Konversi ke basis N dan P (mg/L unsur)
// NH4-N = NH4 (jika sudah sbg N) ; di sini input dianggap sebagai mg/L senyawa ion.
// NO2-N = NO2 * 14/46 ; NO3-N = NO3 * 14/62 ; NH4-N = NH4 * 14/18 ; PO4-P = PO4 * 31/95
function computeNP(nh4, no2, no3, po4) {
  const NH4_N = nh4 * (14 / 18);
  const NO2_N = no2 * (14 / 46);
  const NO3_N = no3 * (14 / 62);
  const TN = NH4_N + NO2_N + NO3_N;
  const PO4_P = po4 * (31 / 95);
  const ratio = PO4_P > 0 ? TN / PO4_P : Infinity;
  // molar Redfield = 16. konversi mass->molar: (TN/14)/(P/31)
  const molar = PO4_P > 0 ? (TN / 14) / (PO4_P / 31) : Infinity;
  return { TN, PO4_P, ratio, molar, NH4_N, NO2_N, NO3_N };
}

// Dominasi plankton berdasarkan rasio molar N:P + bentuk N dominan
function classifyPlankton({ molar, NH4_N, NO2_N, NO3_N }) {
  const TN = NH4_N + NO2_N + NO3_N;
  const ammoniaShare = TN > 0 ? (NH4_N + NO2_N) / TN : 0;

  // Diatom: N:P seimbang (10-20), N berbentuk nitrat/teroksidasi, P cukup
  // BGA (cyanobacteria): N:P rendah (<10) -> P berlebih relatif, atau total N rendah
  // Dino: N:P tinggi (>20) + sering pH/stabilitas tinggi, N teroksidasi
  // Green algae (GA): N:P sedang-tinggi, amonia dominan, nutrien tinggi
  let group, color, note;

  if (molar < 10) {
    group = "BGA (Cyanobacteria)";
    color = "#1b7f5e";
    note = "Rasio N:P rendah — P berlebih relatif terhadap N. Kondisi klasik pemicu blue-green algae. Kurangi input fosfat, naikkan N atau lakukan water exchange.";
  } else if (molar <= 20) {
    if (ammoniaShare > 0.5) {
      group = "Green Algae (Klorofita)";
      color = "#3a9d3a";
      note = "N:P seimbang dengan amonia dominan — cenderung green water dari alga hijau. Umumnya menguntungkan bila terkendali.";
    } else {
      group = "Diatom";
      color = "#caa24b";
      note = "N:P mendekati Redfield (16) dengan N teroksidasi — kondisi ideal untuk diatom (brown water). Plankton paling diinginkan untuk vaname.";
    }
  } else {
    group = "Dinoflagellata";
    color = "#b0492b";
    note = "N:P tinggi — N berlebih relatif terhadap P. Risiko dominasi dinoflagellata, berpotensi membentuk lapisan & fluktuasi DO ekstrem.";
  }
  return { group, color, note };
}

// Status keamanan berdasarkan beban nutrien total & kecenderungan bloom
function classifyNPStatus({ TN, molar }, planktonGroup) {
  // beban N tinggi + grup berbahaya => naik level
  let score = 0;
  if (TN > 3) score += 2; else if (TN > 1.5) score += 1;
  if (molar < 8 || molar > 30) score += 2; else if (molar < 10 || molar > 20) score += 1;
  if (planktonGroup === "BGA (Cyanobacteria)" || planktonGroup === "Dinoflagellata") score += 1;

  if (score >= 4) return { label: "Sangat Berbahaya", color: "#c0392b", bg: "#fae3e0" };
  if (score >= 3) return { label: "Berbahaya", color: "#d9722b", bg: "#fbeadd" };
  if (score >= 1) return { label: "Sedang", color: "#c9971b", bg: "#fbf3da" };
  return { label: "Aman", color: "#1f9d6b", bg: "#e6f6ef" };
}

/* ---------- shared input ---------- */
function Field({ label, unit, val, set, step }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontSize: 13, color: "#b3c5cc" }}>{label} {unit && <span style={{ color: "#6d8893" }}>({unit})</span>}</span>
      <input type="number" step={step} value={val} placeholder="masukkan nilai" onChange={(e) => set(e.target.value)}
        style={{ background: "#0e1c24", border: "1px solid #2a4450", borderRadius: 10, padding: "10px 12px", color: "#fff", fontSize: 16, outline: "none" }} />
    </label>
  );
}

/* ---------- Tab 1: NH3 ---------- */
function AmmoniaTab() {
  const [tan, setTan] = useState("");
  const [pH, setPH] = useState("");
  const [temp, setTemp] = useState("");
  const [sal, setSal] = useState("");
  const result = useMemo(() => {
    const t = parseFloat(tan), p = parseFloat(pH), tc = parseFloat(temp), s = parseFloat(sal);
    if ([t, p, tc, s].some(isNaN)) return null;
    const f = fractionNH3(p, tc, s);
    const nh3 = t * f;
    return { f, nh3, level: classifyNH3(nh3) };
  }, [tan, pH, temp, sal]);

  return (
    <>
      <p style={{ color: "#8aa3ad", fontSize: 14, marginTop: 0 }}>Menghitung amonia tak terionisasi (NH₃) — fraksi yang benar-benar toksik — dari total amonia, pH, suhu, dan salinitas.</p>
      <div style={{ background: "#152a35", borderRadius: 16, padding: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <Field label="NH4 / Total Amonia (TAN)" unit="mg/L" val={tan} set={setTan} step={0.1} />
        <Field label="pH" val={pH} set={setPH} step={0.1} />
        <Field label="Suhu" unit="°C" val={temp} set={setTemp} step={1} />
        <Field label="Salinitas" unit="ppt" val={sal} set={setSal} step={1} />
      </div>
      {!result && (
        <div style={{ marginTop: 18, borderRadius: 16, padding: "22px 20px", background: "#152a35", border: "1px dashed #2a4450", textAlign: "center", color: "#7d97a1", fontSize: 14 }}>
          Isi semua kolom di atas untuk melihat hasil.
        </div>
      )}
      {result && (
        <div style={{ marginTop: 18, borderRadius: 16, overflow: "hidden", background: result.level.bg, color: "#1a2a2a" }}>
          <div style={{ padding: "18px 20px", background: result.level.color, color: "#fff" }}>
            <div style={{ fontSize: 13, opacity: 0.9 }}>Status</div>
            <div style={{ fontSize: 24, fontWeight: 800 }}>{result.level.label}</div>
          </div>
          <div style={{ padding: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
              <span style={{ fontSize: 14, color: "#46606a" }}>NH₃ (amonia toksik)</span>
              <span style={{ fontSize: 28, fontWeight: 800, color: result.level.color }}>{result.nh3.toFixed(4)} <span style={{ fontSize: 14, fontWeight: 500 }}>mg/L</span></span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#46606a" }}>
              <span>Fraksi NH₃ dari total</span><span style={{ fontWeight: 600 }}>{(result.f * 100).toFixed(2)}%</span>
            </div>
            <p style={{ fontSize: 13, color: "#3a4f57", marginTop: 14, marginBottom: 0, lineHeight: 1.5 }}>{result.level.note}</p>
          </div>
        </div>
      )}
      <div style={{ marginTop: 18, background: "#152a35", borderRadius: 14, padding: "14px 18px" }}>
        <div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: "#5fa8c4", marginBottom: 10 }}>Ambang NH₃ (mg/L)</div>
        {NH3_LEVELS.map((l) => (
          <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "5px 0", fontSize: 13 }}>
            <span style={{ width: 10, height: 10, borderRadius: 3, background: l.color, flexShrink: 0 }} />
            <span style={{ width: 130, color: "#cddde2" }}>{l.label}</span>
            <span style={{ color: "#8aa3ad" }}>{l.max === Infinity ? "≥ 0.10" : `< ${l.max.toFixed(2)}`}</span>
          </div>
        ))}
      </div>
    </>
  );
}

/* ---------- Tab 2: N:P ---------- */
function NPTab() {
  const [nh4, setNh4] = useState("");
  const [no2, setNo2] = useState("");
  const [no3, setNo3] = useState("");
  const [po4, setPo4] = useState("");

  const result = useMemo(() => {
    const a = parseFloat(nh4), b = parseFloat(no2), c = parseFloat(no3), d = parseFloat(po4);
    if ([a, b, c, d].some(isNaN)) return null;
    const np = computeNP(a, b, c, d);
    const plankton = classifyPlankton(np);
    const status = classifyNPStatus(np, plankton.group);
    return { np, plankton, status };
  }, [nh4, no2, no3, po4]);

  return (
    <>
      <p style={{ color: "#8aa3ad", fontSize: 14, marginTop: 0 }}>Memperkirakan dominasi plankton dari rasio N:P (Redfield) berdasarkan amonia, nitrit, nitrat, dan fosfat. Membantu mengarahkan air ke dominasi diatom yang diinginkan.</p>
      <div style={{ background: "#152a35", borderRadius: 16, padding: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <Field label="NH4 (Amonia)" unit="mg/L" val={nh4} set={setNh4} step={0.1} />
        <Field label="NO2 (Nitrit)" unit="mg/L" val={no2} set={setNo2} step={0.1} />
        <Field label="NO3 (Nitrat)" unit="mg/L" val={no3} set={setNo3} step={0.1} />
        <Field label="PO4 (Fosfat)" unit="mg/L" val={po4} set={setPo4} step={0.1} />
      </div>
      {!result && (
        <div style={{ marginTop: 18, borderRadius: 16, padding: "22px 20px", background: "#152a35", border: "1px dashed #2a4450", textAlign: "center", color: "#7d97a1", fontSize: 14 }}>
          Isi semua kolom di atas untuk melihat hasil.
        </div>
      )}
      {result && (
        <>
          <div style={{ marginTop: 18, borderRadius: 16, overflow: "hidden", background: result.status.bg, color: "#1a2a2a" }}>
            <div style={{ padding: "18px 20px", background: result.plankton.color, color: "#fff" }}>
              <div style={{ fontSize: 13, opacity: 0.9 }}>Kemungkinan Dominasi Plankton</div>
              <div style={{ fontSize: 24, fontWeight: 800 }}>{result.plankton.group}</div>
            </div>
            <div style={{ padding: 20 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14 }}>
                <span style={{ fontSize: 13, color: "#46606a" }}>Status air:</span>
                <span style={{ fontWeight: 800, color: result.status.color, fontSize: 16 }}>{result.status.label}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#46606a", marginBottom: 6 }}>
                <span>Rasio N:P (molar / Redfield)</span><span style={{ fontWeight: 700 }}>{isFinite(result.np.molar) ? result.np.molar.toFixed(1) : "∞"} : 1</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#46606a", marginBottom: 6 }}>
                <span>Total N (sbg N)</span><span style={{ fontWeight: 600 }}>{result.np.TN.toFixed(2)} mg/L</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#46606a" }}>
                <span>PO4 (sbg P)</span><span style={{ fontWeight: 600 }}>{result.np.PO4_P.toFixed(2)} mg/L</span>
              </div>
              <p style={{ fontSize: 13, color: "#3a4f57", marginTop: 14, marginBottom: 0, lineHeight: 1.5 }}>{result.plankton.note}</p>
            </div>
          </div>
        </>
      )}
      <div style={{ marginTop: 18, background: "#152a35", borderRadius: 14, padding: "14px 18px" }}>
        <div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: "#5fa8c4", marginBottom: 10 }}>Acuan Rasio N:P (molar)</div>
        {[
          { c: "#1b7f5e", l: "BGA / Cyanobacteria", r: "< 10 (P berlebih)" },
          { c: "#caa24b", l: "Diatom (diinginkan)", r: "10–20, N teroksidasi" },
          { c: "#3a9d3a", l: "Green Algae", r: "10–20, amonia dominan" },
          { c: "#b0492b", l: "Dinoflagellata", r: "> 20 (N berlebih)" },
        ].map((x) => (
          <div key={x.l} style={{ display: "flex", alignItems: "center", gap: 10, padding: "5px 0", fontSize: 13 }}>
            <span style={{ width: 10, height: 10, borderRadius: 3, background: x.c, flexShrink: 0 }} />
            <span style={{ width: 170, color: "#cddde2" }}>{x.l}</span>
            <span style={{ color: "#8aa3ad" }}>{x.r}</span>
          </div>
        ))}
      </div>
    </>
  );
}

/* ---------- App ---------- */
export default function App() {
  const [tab, setTab] = useState(0);
  const tabs = ["Toksisitas Amonia", "Rasio N:P · Plankton"];
  return (
    <div style={{ minHeight: "100vh", background: "#0e1c24", fontFamily: "system-ui, sans-serif", padding: "24px 16px", color: "#e8eef0" }}>
      <div style={{ maxWidth: 520, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18, gap: 12 }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: "#5fa8c4", marginBottom: 6 }}>BILLY · SUMBER HATCHERY BANGKA</div>
            <h1 style={{ fontSize: 26, fontWeight: 700, margin: 0, lineHeight: 1.1 }}>Kalkulator Kualitas Air</h1>
          </div>
          <img src={LOGO} alt="Sumber Hatchery Bangka" style={{ width: 144, height: 144, borderRadius: 16, objectFit: "cover", flexShrink: 0, boxShadow: "0 2px 10px rgba(0,0,0,.3)" }} />
        </div>
        <div style={{ display: "flex", gap: 6, background: "#152a35", padding: 5, borderRadius: 12, marginBottom: 20 }}>
          {tabs.map((t, i) => (
            <button key={t} onClick={() => setTab(i)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
                background: tab === i ? "#2a6f8e" : "transparent", color: tab === i ? "#fff" : "#8aa3ad", transition: "background .15s" }}>
              {t}
            </button>
          ))}
        </div>
        {tab === 0 ? <AmmoniaTab /> : <NPTab />}
        <p style={{ fontSize: 11, color: "#5e7882", marginTop: 16, lineHeight: 1.5 }}>
          Estimasi berbasis rumus standar (Emerson 1975 untuk NH₃; rasio Redfield untuk N:P). Konversi ion ke basis unsur N/P sudah otomatis. Dominasi plankton bersifat kecenderungan — verifikasi dengan pengamatan mikroskop & warna air sesuai DOC.
        </p>
      </div>
    </div>
  );
}
