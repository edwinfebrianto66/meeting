# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy dependency files and install
COPY package*.json ./
RUN npm install

# Copy seluruh isi proyek
COPY . .

# Tunggu 10 detik lalu jalankan app
CMD sleep 10 && node src/app.js
