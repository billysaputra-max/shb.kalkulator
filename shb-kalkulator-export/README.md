# Kalkulator Kualitas Air — Sumber Hatchery Bangka

Kalkulator web untuk tambak vaname:

- **Tab 1 — Toksisitas Amonia (NH₃):** menghitung amonia tak terionisasi dari total amonia, pH, suhu, dan salinitas (rumus Emerson 1975).
- **Tab 2 — Rasio N:P:** memperkirakan kecenderungan dominasi plankton (diatom / BGA / dinoflagellata / green algae) dari NH4, NO2, NO3, PO4.

Oleh **Billy · Sumber Hatchery Bangka**.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

## Build produksi

```bash
npm run build
```

Output ada di folder `dist/`.

## Deploy

Project ini berbasis Vite + React dan otomatis terdeteksi oleh Vercel.
