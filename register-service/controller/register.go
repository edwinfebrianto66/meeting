
package controller

import (
    "database/sql"
    "fmt"
    "net/http"
    "register-service/config"
    "register-service/model"
)

func Register(w http.ResponseWriter, r *http.Request) {
    email := r.URL.Query().Get("email")
    password := r.URL.Query().Get("password")

    if email == "" || password == "" {
        http.Error(w, "Missing email or password", http.StatusBadRequest)
        return
    }

    var exists bool
    err := config.DB.QueryRow("SELECT EXISTS(SELECT 1 FROM users WHERE email=?)", email).Scan(&exists)
    if err != nil {
        http.Error(w, "Database error", http.StatusInternalServerError)
        return
    }

    if exists {
        http.Error(w, "User already exists", http.StatusConflict)
        return
    }

    _, err = config.DB.Exec("INSERT INTO users (email, password) VALUES (?, ?)", email, password)
    if err != nil {
        http.Error(w, "Failed to insert user", http.StatusInternalServerError)
        return
    }

    fmt.Fprintln(w, "User registered successfully")
}
