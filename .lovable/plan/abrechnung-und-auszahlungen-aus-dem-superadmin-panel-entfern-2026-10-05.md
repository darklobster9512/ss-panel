# Abrechnung und Auszahlungen aus dem Superadmin-Panel entfernen

## Was passiert
- Menüpunkte „Auszahlungen" und „Abrechnung" verschwinden aus der Superadmin-Seitenleiste.
- Die beiden Seiten werden gelöscht; alte Links darauf führen ins Leere bzw. zur Standardseite.
- Keine Datenbank-Änderungen nötig (die Seiten haben keine eigenen Tabellen).

## Technisch
- `src/components/superadmin/AppSidebar.tsx`: beide Einträge + ungenutzte Icons (Wallet, Receipt) entfernen.
- `src/App.tsx`: Imports und Routes `auszahlungen` / `abrechnung` entfernen.
- `src/pages/superadmin/Auszahlungen.tsx` und `Abrechnung.tsx` löschen.
