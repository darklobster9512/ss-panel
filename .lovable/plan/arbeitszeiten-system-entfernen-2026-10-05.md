# Arbeitszeiten-System entfernen

## Ziel
Das Arbeitszeiten-Feature komplett aus dem Mitarbeiter- und Superadmin-Bereich entfernen.

## Schritte

1. **Seiten löschen**
   - `src/pages/mitarbeiter/Arbeitszeiten.tsx`
   - `src/pages/superadmin/Arbeitszeiten.tsx`
   - `src/lib/work-schedule.ts` (Hilfslogik, wird nur von den Seiten genutzt)

2. **Navigation bereinigen**
   - Menüpunkt „Meine Arbeitszeiten" aus der Mitarbeiter-Seitenleiste entfernen
   - Menüpunkt „Arbeitszeiten" aus der Superadmin-Seitenleiste entfernen

3. **Routen entfernen**
   - `/mitarbeiter/arbeitszeiten` und `/superadmin/arbeitszeiten` aus `src/App.tsx` entfernen (inkl. Imports)

4. **Datenbank-Tabellen entfernen**
   - `work_schedules` und `work_schedule_weeks` per Migration löschen (inkl. der zugehörigen Trigger)
   - Achtung: Bereits eingetragene Arbeitszeiten gehen dabei verloren

## Technische Details
- Kein anderes Feature nutzt die Arbeitszeiten-Tabellen oder -Seiten (per Suche bestätigt).
- Der Vertragsabgleich mit Arbeitszeiten war nie Teil des Systems, es gibt also keine Abhängigkeiten zu Verträgen.
