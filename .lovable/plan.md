# Altes Branding (Dunkelblau/Grün) vollständig entfernen

Der Großteil der App läuft bereits auf der Terracotta-Palette. Übrig sind noch Alt-Farben an diesen Stellen:

## 1. Öffentliche Bewerbungsgespräch-Seite (`src/pages/BewerbungsgespraechPublic.tsx`)

Hier steckt noch das komplette alte Branding:

- Header-Hintergrund `#130f40` (altes Dunkelblau) → Terracotta-Ink `#2e2620` bzw. Token
- Standard-Akzentfarbe `#7bed9f` (altes Grün) → `#c4634a` (Terracotta-Primär)
- Bestätigungs-Haken `#2fa363` (Grün) → Primärfarbe
- Hintergrund `#f5f7f5` / Rahmen `#eaeee9` → Creme-Töne des neuen Brandings (`#fbf6ef` / Token)

## 2. E-Mail-Vorlagen (`src/lib/applicationEmail.ts`)

- Standard-Akzent `#7bed9f` und dunkles Grün `#2fa363` → Terracotta-Werte (`#c4634a` / `#a3503c`)

## 3. Superadmin-Einstellungen (`src/pages/superadmin/Einstellungen.tsx`)

- Vier Vorschau-/Fallback-Vorkommen von `#7bed9f` → `#c4634a`

## 4. Restliche Grün-/Blau-Statusfarben

- `src/pages/superadmin/OnboardingTermine.tsx`: `text-emerald-500` → Primär-/Token-Farbe
- `src/pages/superadmin/Arbeitsvertraege.tsx`: Smaragd-Badge für „abgeschlossen" → Terracotta-Ton
- `src/components/mitarbeiter/MitarbeiterLayout.tsx`: `bg-sky-400` Statuspunkt „Im Gespräch" → Primärfarbe

## 5. Datenbank: gespeicherte Akzentfarben

- In den Kunden-/Gesprächs-Konfigurationen gespeicherte `accent_color`-Werte mit altem Grün (`#7bed9f`) auf `#c4634a` umstellen, damit öffentliche Seiten und E-Mails nicht weiter grün ausspielen.

## Nicht geändert wird

- Semantische Statusfarben, die kein Markengrün sind (Amber für „wartend", Rot für Fehler), bleiben erhalten.
- Der Markenname „Sekretariat24" kommt im Code bereits nirgends mehr vor (geprüft) — keine Textänderungen nötig.

## Technische Details

- Nur Farb-/Token-Änderungen im Frontend plus ein kleines DB-Update der `accent_color`-Spalte.
- Danach Build-Prüfung und Screenshot-Check der öffentlichen Gesprächsseite.
