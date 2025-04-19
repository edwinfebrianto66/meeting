package config

import (
    "database/sql"
    "fmt"
    "log"
    "os"

    _ "github.com/go-sql-driver/mysql"
)

var DB *sql.DB

func InitDB() {
    host := os.Getenv("DB_HOST")
    user := os.Getenv("DB_USER")
    pass := os.Getenv("DB_PASSWORD")
    name := os.Getenv("DB_NAME")

    dsn := fmt.Sprintf("%s:%s@tcp(%s)/%s?parseTime=true", user, pass, host, name)

    var err error
    DB, err = sql.Open("mysql", dsn)
    if err != nil {
        log.Fatal("Error open DB:", err)
    }

    if err = DB.Ping(); err != nil {
        log.Fatal("Error ping DB:", err)
    }

    log.Println("Connected to MySQL:", host)
}