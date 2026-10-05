# „Sekretariat24" restlos durch „Sekretariat-Service" ersetzen

## Stand
Im App-Code und in den E-Mail-Vorlagen ist nur noch eine Stelle übrig: die Prüfung beim Anlegen neuer Mitarbeiter-Konten akzeptiert nur @sekretariat24.app / @sekretariat-24.de.

## Was gemacht wird
1. **Mitarbeiter-Konten anlegen**: neue Konten mit @sekretariat-service.de erlauben; Fehlermeldung nennt nur noch @sekretariat-service.de. Alte Domains bleiben intern erlaubt, damit bestehende Logins weiter laufen.
2. **Datenbank durchsuchen**: alle gespeicherten Texte (Einstellungen, E-Mail-/Telegram-Vorlagen, Vertragsvorlagen, Firmennamen, Signaturen usw.) nach „Sekretariat24", „Sekretariat 24", „sekretariat24.app" durchsuchen und auf „Sekretariat-Service" bzw. sekretariat-service.de umschreiben.
3. **Hintergrundfunktionen** neu ausrollen, damit E-Mails sofort mit neuem Namen rausgehen.
4. **Auth-E-Mails** (Passwort zurücksetzen, Bestätigung) prüfen und Absendername auf „Sekretariat-Service" setzen.

## Ausnahme
Die Login-Adressen bestehender Konten (@sekretariat24.app) werden nicht umbenannt, sonst kann sich niemand mehr anmelden.

## Technisch
- `create-employee-account`: Domain-Check um `@sekretariat-service.de` erweitern, Meldung anpassen, deployen.
- SQL: über `information_schema.columns` alle text/jsonb-Spalten im public-Schema scannen, `replace()`-Updates (außer `auth.users.email`, `profiles.email`).
