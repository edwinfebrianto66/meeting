
# 🚀 Cara Menjalankan Project Microservices Auth

Panduan ini menjelaskan cara menjalankan proyek menggunakan Docker dan juga secara manual tanpa Docker.

---

## ✅ Prasyarat

- Sudah install:
  - Docker & Docker Compose
  - (opsional) Node.js, Golang, Python, MySQL (untuk jalankan manual)

---

## 🐇 Struktur Folder yang Diharapkan

```
project-root/
├── login-service/
├── register-service/
├── logout-service/
├── frontend-vue/
├── frontend-jquery/
├── docker-compose.yml
└── .env
```

---

## 🐘 Jalankan Menggunakan Docker

### 1. Salin `.env` jika tersedia
```bash
cp .env.example .env
```

### 2. Jalankan semua service
```bash
docker-compose down -v
docker-compose up --build
```

### 3. Akses dari browser:
- jQuery: http://localhost:3001
- Vue: http://localhost:3002
- Login API: http://localhost:4000/login
- Register API: http://localhost:4001/register
- Logout API: http://localhost:4002/logout

### 4. Akses Database:
Gunakan tools seperti DBeaver / phpMyAdmin
- Host: localhost
- Port: 6033
- User: edwin
- Password: edwin1234
- Database: meeting

---

## 🧠 Menjalankan Tanpa Docker (Manual)

### 🔧 Install Node.js Manual
- Download dari: https://nodejs.org/
- Pilih versi LTS (misal 18.x)
- Cek versi:
```bash
node -v
npm -v
```

### 🔧 Install Golang Manual
- Download dari: https://golang.org/dl/
- Ekstrak ke direktori `/usr/local` atau install langsung (Windows .msi tersedia)
- Cek versi:
```bash
go version
```

### 🔧 Install Python Manual
- Download dari: https://www.python.org/downloads/
- Centang “Add Python to PATH” saat install (Windows)
- Cek versi:
```bash
python --version
pip --version
```

### 🧾 Setup MySQL Manual:
```sql
CREATE DATABASE meeting;
CREATE USER 'edwin'@'localhost' IDENTIFIED BY 'edwin1234';
GRANT ALL PRIVILEGES ON meeting.* TO 'edwin'@'localhost';
FLUSH PRIVILEGES;
```

### 🔐 Login Service (Node.js)
```bash
cd login-service
npm install
node index.js
```

### 📝 Register Service (Go)
```bash
cd register-service
go mod tidy
go run main.go
```

### 🔓 Logout Service (Python)
```bash
cd logout-service
pip install -r requirements.txt
python app.py
```

### 💻 Frontend Vue
```bash
cd frontend-vue
npm install
npm run dev
```

### 🖥️ Frontend jQuery
Langsung buka file `login.html` atau `register.html` di folder `frontend-jquery/`.

---

## 📝 Catatan Tambahan

- Pastikan tidak ada port yang bentrok di komputer kamu.
- Semua variabel environment bisa dikustomisasi di file `.env`.
- Disarankan pakai Docker untuk environment konsisten dan mudah dijalankan lintas OS.
