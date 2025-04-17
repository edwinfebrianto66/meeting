
# Microservices Auth Project

## Isi Layanan
- Login Service (Node.js + JWT)        → port 4000
- Register Service (Golang + Gin)      → port 4001
- Logout Service (Python + Flask)      → port 4002
- Frontend React (Tailwind)            → port 3000
- Frontend jQuery (via nginx)          → port 3001
- MySQL Database                       → port 3306 (root/example)

## Fitur Utama
- Register → Golang ke MySQL
- Login → Node.js verifikasi user + generate JWT
- Logout → Python Flask simulasi logout JWT
- UI tersedia dalam 2 versi: React & jQuery


## Menjalankan Masing-Masing Service (Tanpa Docker)

### Login Service (Node.js)
1. Masuk ke folder `login-service`
2. Install dependencies:
   npm install
3. Jalankan service:
   node index.js
4. Akses di: http://localhost:4000/login

### Register Service (Golang)
1. Masuk ke folder `register-service`
2. Install dependencies:
   go mod tidy
3. Jalankan service:
   go run main.go
4. Akses di: http://localhost:4001/register

### Logout Service (Python Flask)
1. Masuk ke folder `logout-service`
2. Install dependencies:
   pip install -r requirements.txt
3. Jalankan service:
   python app.py
4. Akses di: http://localhost:4002/logout

### Frontend React
1. Masuk ke folder `frontend-react`
2. Install dependencies:
   npm install
3. Jalankan dev server:
   npm run dev
4. Akses di: http://localhost:3000

### Frontend jQuery
1. Bisa dibuka langsung dengan browser:
   - login.html
   - register.html
   Pastikan backend service sudah jalan agar bisa terkoneksi

