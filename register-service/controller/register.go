package controller

import (
    "encoding/json"
    "fmt"
    "net/http"
    "register-service/config"
)

type RegisterInput struct {
    Name     string `json:"name"`
    Email    string `json:"email"`
    Password string `json:"password"`
}

func Register(w http.ResponseWriter, r *http.Request) {
    var input RegisterInput
    if err := json.NewDecoder(r.Body).Decode(&input); err != nil {
        http.Error(w, "Invalid JSON", http.StatusBadRequest)
        return
    }

    if input.Email == "" || input.Password == "" || input.Name == "" {
        http.Error(w, "All fields required", http.StatusBadRequest)
        return
    }

    var exists bool
    err := config.DB.QueryRow("SELECT EXISTS(SELECT 1 FROM users WHERE email=?)", input.Email).Scan(&exists)
    if err != nil {
        http.Error(w, "Database error", http.StatusInternalServerError)
        return
    }

    if exists {
        http.Error(w, "User already exists", http.StatusConflict)
        return
    }

    _, err = config.DB.Exec("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", input.Name, input.Email, input.Password)
    if err != nil {
        http.Error(w, "Failed to insert user", http.StatusInternalServerError)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    fmt.Fprint(w, `{"message": "Pendaftaran berhasil!"}`)
}