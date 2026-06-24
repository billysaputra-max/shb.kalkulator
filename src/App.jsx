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
      <input type="number" step={step} value={val} onChange={(e) => set(e.target.value)}
        style={{ background: "#0e1c24", border: "1px solid #2a4450", borderRadius: 10, padding: "10px 12px", color: "#fff", fontSize: 16, outline: "none" }} />
    </label>
  );
}

/* ---------- Tab 1: NH3 ---------- */
function AmmoniaTab() {
  const [tan, setTan] = useState("1.0");
  const [pH, setPH] = useState("8.0");
  const [temp, setTemp] = useState("30");
  const [sal, setSal] = useState("20");
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
  const [nh4, setNh4] = useState("0.5");
  const [no2, setNo2] = useState("0.2");
  const [no3, setNo3] = useState("1.0");
  const [po4, setPo4] = useState("0.3");

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
          <img src={LOGO} alt="Sumber Hatchery Bangka" style={{ width: 64, height: 64, borderRadius: 12, objectFit: "cover", flexShrink: 0, boxShadow: "0 2px 10px rgba(0,0,0,.3)" }} />
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
