# Logo ohne Icon + Domain-Umstellung auf sekretariat-service.de

## 1. Logo-Icon entfernen, Logotext weiß

An drei Stellen steht das Terracotta-Telefon-Icon vor dem Schriftzug „Sekretariat-Service":

- `src/pages/Auth.tsx` (Zeile 72–77): Icon-`<img>` entfernen; Schriftzug komplett weiß (`text-on-ink`), der farbige `-Service`-Teil (`text-primary`) wird ebenfalls weiß.
- `src/components/mitarbeiter/AppSidebar.tsx` (Zeile 136–154): Icon-Container entfernen; Schriftzug weiß einfärben. Im eingeklappten Zustand (nur Icon sichtbar) bleibt dann kein Icon — der Header zeigt nichts bzw. nur den eingeklappten Zustand ohne Logo.
- `src/components/superadmin/AppSidebar.tsx` (Zeile 240–258): gleiche Änderung wie Mitarbeiter-Sidebar.

Die Bilddatei `public/logo-icon.png` bleibt erhalten (wird ggf. noch als Favicon genutzt), nur die Verwendung im Logotext entfällt.

## 2. Domain-Texte umstellen (nur sichtbare UI-Texte)

Sichtbare Vorkommen von `@sekretariat24.app` → `@sekretariat-service.de` und `web.sekretariat24.app` → `sekretariat-service.de`:

- `src/pages/Auth.tsx`: Link `https://web.sekretariat24.app` → `https://sekretariat-service.de`, Linktext entsprechend; `mailto:info@sekretariat24.app` → `info@sekretariat-service.de`
- `src/pages/superadmin/MitarbeiterWizard.tsx`: `EMAIL_SUFFIX = "@sekretariat24.app"` → `"@sekretariat-service.de"` (betrifft neu angelegte Mitarbeiter-Logins) + Anzeigetext
- `src/pages/superadmin/Bewerbungen.tsx`: Bewerbungsgespräch-URL `https://sekretariat24.app/...` → `https://sekretariat-service.de/...`
- `src/pages/superadmin/Einstellungen.tsx`: Beispiel-Login-E-Mail, Portal-URL, Absender-Platzhalter
- `src/pages/superadmin/Manager.tsx`: Platzhalter `manager@sekretariat24.app`
- `src/lib/mitarbeiter-mock.ts`: Mock-Login-E-Mail

## Nicht geändert wird

- Bestehende Login-Konten in der Datenbank (z. B. `h.kasper@sekretariat24.app`) bleiben unangetastet — eine Umbenennung würde bestehende Logins ungültig machen.
- Funktionale E-Mail-Adressen `@sekretariat-24.de` bleiben wie vereinbart.

## Technische Details

- Nur Frontend-Textänderungen, keine Schema- oder Datenänderungen.
- Danach Build-Prüfung und kurzer visueller Check der Login-Seite.
