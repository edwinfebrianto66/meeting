
# Cara Menjalankan Project

## Prasyarat
- Sudah install Docker dan Docker Compose

## Langkah Instalasi
1. Pastikan semua file sudah dalam 1 folder project:
   - login-service/
   - register-service/
   - logout-service/
   - frontend-react/
   - frontend-jquery/
   - mysql/
   - docker-compose.yml

2. Copy `.env.example` menjadi `.env` di masing-masing service jika ingin pakai versi kustom.

3. Jalankan perintah berikut:
   docker-compose up --build

4. Akses dari browser:
   - http://localhost:3000 → Frontend React
   - http://localhost:3001 → Frontend jQuery
   - http://localhost:4000 → Login API (POST /login)
   - http://localhost:4001 → Register API (POST /register)
   - http://localhost:4002 → Logout API (POST /logout)

5. Database bisa dilihat via phpMyAdmin / DBeaver dengan:
   Host: localhost, User: root, Password: example, DB: auth_db

## Catatan Tambahan
- Pastikan tidak ada port bentrok dengan aplikasi lain.
- Semua kredensial dan konfigurasi bisa diedit di `.env.example` masing-masing folder.
