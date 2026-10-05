# Branding-Update: Sekretariat24 → Sekretariat-Service (oscw)

Das neue oscw-Frontend bringt eine neue Markenidentität. Diese wird auf dieses Portal übertragen – Farben, Schriften, Name und Logo. Funktionen und Seitenstruktur bleiben unverändert.

## Was sich ändert

**Farben (src/styles.css)**
- Neue warme Terracotta-Palette aus oscw, Light + Dark:
  - Primär: `#c4634a` (Terracotta), Dark: `#d97f63`
  - Hintergrund: `#fbf6ef` (warmes Creme), Dark: `#211a15`
  - Text/Ink: `#2e2620`, Dark: `#f5eee3`
  - Surface, Card, Muted, Accent, Border, Ring entsprechend den oscw-Werten
- Schatten- und Verlaufs-Tokens (shadow-glow, bg-mesh, bg-grid, bg-dots) auf die warmen oscw-Töne umgestellt
- Bestehende Token-Namen (--primary, --ink-deep, --surface, --brand, --sidebar …) bleiben gleich, damit alle Komponenten ohne Umbau weiter funktionieren

**Schriften**
- Überschriften: Lora (Serif, wie oscw)
- Fließtext: Work Sans
- Einbindung der Schriften (Google Fonts) in index.html

**Markenname & Texte**
- „Sekretariat24" → „Sekretariat-Service" überall in der Oberfläche (Login-Seite, Sidebars, Titel)
- index.html: Titel, Description, og:title auf „Sekretariat-Service" aktualisiert
- Footer-/Kontaktangaben wo vorhanden: kontakt@sekretariat-service.de, OSCW Office Service & Co. Working GmbH

**Logo & Favicon**
- `sekretariat-service-logo.png` und `favicon.png` aus dem oscw-Projekt in dieses Projekt kopieren
- Verwendung in Login, Sidebars und Browser-Tab

## Technische Details

- Betroffene Dateien: `src/styles.css` (Token-Werte), `index.html` (Fonts, Titel, Meta, Favicon), `src/pages/Auth.tsx`, `src/components/superadmin/AppSidebar.tsx`, `src/components/mitarbeiter/AppSidebar.tsx`, `src/components/DashboardShell.tsx` sowie weitere Stellen mit „Sekretariat24" (per Suche gefunden)
- Assets werden aus `/tmp/cross-project/oscw-.../public/` kopiert
- Keine Änderungen an Datenbank, Edge Functions oder Fachlogik
- Danach: Build prüfen und Login-Seite visuell verifizieren
