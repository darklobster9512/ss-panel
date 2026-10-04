# Datenbankstruktur wiederherstellen

## Ziel
Die gelöschte Datenbank im neu verbundenen Supabase-Projekt wieder vollständig aufbauen, damit die App ohne Fehler läuft.

## Was wiederhergestellt wird
- Alle Tabellen: Kunden, Mitarbeiter/Profile, Rollen, Zuweisungen, Bewerbungen, Gesprächstermine, Anrufnotizen, Sipgate-Anrufe, Verträge und Vorlagen, Arbeitszeiten, Telegram-Empfänger und Einstellungen
- Zugriffsregeln (wer was sehen und bearbeiten darf), Datenbankfunktionen und automatische Abläufe
- Speicherordner für Logos, Lebensläufe und Dokumente
- Hintergrundfunktionen und die zeitgesteuerten Erinnerungen werden neu veröffentlicht
- Ein Superadmin-Konto (`superadmin@admin.de`), damit du dich wieder anmelden kannst

## Was nicht wiederherstellbar ist
Die Datensätze selbst sind mit der alten Datenbank gelöscht. Logs enthalten keine vollständigen Daten. Auf Wunsch kann ich danach Kunden, Mitarbeiter, Bewerbungen, Termine und Notizen wie zuvor erneut aus den Telegram-Exporten importieren. Die Verträge und Mitarbeiter-Einstellungen aus diesem Chat kann ich ebenfalls neu anlegen.

## Technische Details
- Quelle der Struktur: die 66 Migrationsdateien im Projekt. Sie sind genauer als Logs und bilden den letzten Stand ab, inklusive `notify_notes`, `work_schedules` und `work_schedule_weeks`.
- Anwendung in mehreren aufeinanderfolgenden Migrationsschritten in der ursprünglichen Reihenfolge. Fehlgeschlagene Schritte werden korrigiert, wobei jeder Befehl nach Möglichkeit wiederholbar ausgeführt wird (`IF NOT EXISTS`).
- Speicherordner werden über das passende Werkzeug angelegt, nicht per SQL.
- Danach wird die automatisch erzeugte Typdatei neu erstellt. Damit verschwinden die aktuellen Fehler in der Vorschau, etwa in `Cockpit.tsx` und `Erfassen.tsx`.
- Prüfung: Fehlerbericht kontrollieren, Superadmin anlegen, Anmeldung testen.
