# Portal-Links auf `portal.sekretariat-service.de` umstellen

Alle automatisch erzeugten Links zur Anwendung sollen künftig den Präfix `portal.` verwenden. Die öffentliche Hauptseite `sekretariat-service.de` bleibt davon unberührt.

## Änderungen

- Der Platzhalter `{link}` in der SMS zur Gesprächseinladung wird mit `https://portal.sekretariat-service.de/...` befüllt.
- Direkte Links zu Bewerbungsgesprächen und Kurzlinks verwenden ebenfalls die Portal-Domain.
- Links in Mitarbeiter-E-Mails, Erinnerungen sowie Telegram- und Chat-Benachrichtigungen werden auf die Portal-Domain vereinheitlicht.
- Die Beispielvorschau in den E-Mail-Einstellungen zeigt ebenfalls die Portal-Domain.
- Der Link auf der Anmeldeseite zur öffentlichen Unternehmensseite bleibt `https://sekretariat-service.de`.

## Technische Details

- Betroffene feste Portal-Adressen in Frontend und Supabase-Funktionen werden zentral auf `https://portal.sekretariat-service.de` ausgerichtet.
- Anschließend wird projektweit geprüft, dass keine internen Links mehr `app.` oder die bloße Hauptdomain verwenden.
- Geänderte Supabase-Funktionen werden bereitgestellt und der Build wird geprüft.
