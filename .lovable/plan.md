# E-Mail-Vorlagen im neuen Branding gestalten

Die sichtbaren E-Mail-Vorschauen verwenden trotz des neuen Brandings noch alte dunkelblaue und grüne Farben. Alle fünf gefundenen E-Mail-Renderer werden auf eine einheitliche, warme Terracotta-/Creme-Gestaltung umgestellt.

## Gestaltung

- Dunkelblauen Kopfbereich durch das warme Ink-Braun des neuen Brandings ersetzen.
- Alte Grünflächen, grüne Rahmen und grünstichige Texte vollständig durch Terracotta, Creme und warme Brauntöne ersetzen.
- Haupttext in dunklem Braun, Nebeninformationen in einem gut lesbaren warmen Graubraun darstellen.
- Buttons und nummerierte Schritte mit Terracotta und kontrastreicher heller Schrift gestalten.
- Logo-Schriftzug vollständig weiß halten; keine farbig abgesetzte Endung und kein Icon verwenden.
- Karten, Rahmen, Hintergrund und Schatten dezenter und passend zur bestehenden Oberfläche gestalten.
- Inhalt, Betreffzeilen und Abläufe der E-Mails unverändert lassen.

## Betroffene E-Mails

- Bewerbungsbestätigung und deren Vorschau im Superadmin-Bereich
- Einladung zum Bewerbungsgespräch
- Bestätigung eines gebuchten Gesprächs
- E-Mail für neue Mitarbeiterkonten

## Technische Details

- Die Farblogik in `src/lib/applicationEmail.ts` und den synchron gehaltenen E-Mail-Renderern in den Supabase-Funktionen angleichen.
- Betroffene Funktionen: `submit-application`, `send-interview-invite`, `interview-booked-notify` und `create-employee-account`.
- Anschließend alle alten Blau-/Grünwerte erneut projektweit suchen, die Vorschauen unter Einstellungen visuell prüfen, den Build kontrollieren und die geänderten E-Mail-Funktionen bereitstellen.
