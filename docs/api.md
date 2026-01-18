# API – Paměťová hra

Tento dokument popisuje komunikaci mezi frontendem (React) a backendem (Express).
Frontend volá backend přes `fetch` a posílá/čte JSON.

---

## Základní pravidla

### Base URL (lokálně)
- Backend: `http://localhost:3000`

### Formát dat
- Request/response jsou v JSON
- `Content-Type: application/json`

### Autentizace (token)
- Po přihlášení backend vrátí `token`
- Frontend pak token posílá v hlavičce:

```http
Authorization: Bearer <token>
