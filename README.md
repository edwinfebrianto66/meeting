# 🧩 Microservices Auth Project

Ini adalah proyek otentikasi berbasis **Microservices** dengan berbagai teknologi backend dan frontend yang terpisah, cocok untuk demo atau pembelajaran arsitektur microservice.

---

## 📦 Layanan

| Layanan           | Teknologi         | Port Lokal        |
|-------------------|-------------------|-------------------|
| Login Service     | Node.js + JWT     | `http://localhost:4000/login` |
| Register Service  | Golang + Gin      | `http://localhost:4001/register` |
| Logout Service    | Python + Flask    | `http://localhost:4002/logout` |
| Frontend React    | React + Tailwind  | `http://localhost:3000` |
| Frontend jQuery   | jQuery + nginx    | `http://localhost:3001` |
| Frontend Vue      | Vue 3 + Vite + nginx | `http://localhost:3002` |
| MySQL Database    | MySQL 5.7         | `localhost:3306` (user: `webdev`, password: `webdev@dk`) |

---

## 🧪 Menjalankan Service Secara Manual (Tanpa Docker)

### 🔐 Login Service (Node.js)
```bash
cd login-service
npm install
node index.js
```
Akses: [http://localhost:4000/login](http://localhost:4000/login)

### 📝 Register Service (Golang)
```bash
cd register-service
go mod tidy
go run main.go
```
Akses: [http://localhost:4001/register](http://localhost:4001/register)

### 🔓 Logout Service (Python Flask)
```bash
cd logout-service
pip install -r requirements.txt
python app.py
```
Akses: [http://localhost:4002/logout](http://localhost:4002/logout)

### 🖼️ Frontend React
```bash
cd frontend-react
npm install
npm run dev
```
Akses: [http://localhost:3000](http://localhost:3000)

### 📜 Frontend jQuery
Langsung buka `frontend-jquery/login.html` atau `register.html` di browser.

---

## 🐳 Menjalankan Semua Layanan via Docker

```bash
docker-compose down -v
docker-compose up --build
```

Akses layanan:

- React: [http://localhost:3000](http://localhost:3000)
- jQuery: [http://localhost:3001](http://localhost:3001)
- Vue: [http://localhost:3002](http://localhost:3002)
- Login API: [http://localhost:4000/login](http://localhost:4000/login)
- Register API: [http://localhost:4001/register](http://localhost:4001/register)
- Logout API: [http://localhost:4002/logout](http://localhost:4002/logout)

---

## 🧾 Struktur Proyek

```
.
├── login-service/
├── register-service/
├── logout-service/
├── frontend-react/
├── frontend-vue/
├── frontend-jquery/
├── docker-compose.yml
└── .env
```

---

## ⚙️ Contoh `.env`

```env
DB_HOST=mysql
DB_PORT=3306
DB_USER=webdev
DB_PASSWORD=webdev@dk
DB_NAME=meeting
JWT_SECRET=supersecretkey
```

---

## 🙌 Kontribusi
Silakan fork dan kembangkan untuk kebutuhan Anda sendiri. Pull request dan issue selalu diterima!
---

## 🧰 Menjalankan Tanpa Docker (Manual Per Layanan)

Pastikan Anda sudah menginstall:
- Node.js
- Golang
- Python 3 + pip
- MySQL Server

### 🔧 1. Menyiapkan MySQL Manual

```sql
CREATE DATABASE meeting;
CREATE USER 'webdev'@'localhost' IDENTIFIED BY 'webdev@dk';
GRANT ALL PRIVILEGES ON meeting.* TO 'webdev'@'localhost';
FLUSH PRIVILEGES;
```

---

### 🔐 2. Login Service (Node.js + JWT)

```bash
cd login-service
npm install
node index.js
```
Akses: [http://localhost:4000/login](http://localhost:4000/login)

---

### 📝 3. Register Service (Golang + Gin)

```bash
cd register-service
go mod tidy
go run main.go
```
Akses: [http://localhost:4001/register](http://localhost:4001/register)

---

### 🔓 4. Logout Service (Python + Flask)

```bash
cd logout-service
pip install -r requirements.txt
python app.py
```
Akses: [http://localhost:4002/logout](http://localhost:4002/logout)

---

### 🖥️ 5. Frontend React (Vite)

```bash
cd frontend-react
npm install
npm run dev
```
Akses: [http://localhost:3000](http://localhost:3000)

---

### 📜 6. Frontend jQuery

Cukup buka file berikut langsung di browser:

```
frontend-jquery/login.html
frontend-jquery/register.html
```

---

### 🖼️ 7. Frontend Vue (Vite)

```bash
cd frontend-vue
npm install
npm run dev
```
Akses: [http://localhost:3002](http://localhost:3002)
