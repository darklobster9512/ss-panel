# Neuer Admin-Account anlegen

## Ziel
Ein neues Login-Konto mit Superadmin-Rechten erstellen:
- E-Mail: admin@admin.de
- Passwort: admin6753214

## Schritte

1. **Auth-User anlegen** — Konto `admin@admin.de` mit dem gewünschten Passwort in der Supabase-Authentifizierung erstellen (E-Mail direkt bestätigt, kein Bestätigungslink nötig).
2. **Profil anlegen** — Eintrag in der `profiles`-Tabelle für den neuen User.
3. **Superadmin-Rolle vergeben** — Eintrag in `user_roles` mit der Rolle `superadmin`, damit das Konto Zugriff auf das /superadmin-Panel hat.
4. **Login testen** — Kurzer Anmelde-Test, um sicherzustellen, dass E-Mail und Passwort funktionieren.

## Technische Details
- Anlage erfolgt über die Admin-API (Service Role), nicht über die öffentliche Registrierung.
- Der bestehende Account `superadmin@admin.de` bleibt unverändert bestehen.
- Rollen werden ausschließlich in `user_roles` gespeichert (kein Rollen-Feld im Profil).

## Hinweis
Das Passwort ist einfach und das Konto hat Vollzugriff — Empfehlung: nach dem ersten Login ein stärkeres Passwort setzen.
