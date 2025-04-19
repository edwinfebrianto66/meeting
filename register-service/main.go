package main

import (
    "log"
    "net/http"
    "register-service/config"
    "register-service/router"

    "github.com/rs/cors"
)

func main() {
    config.InitDB() // initialize DB

    mux := router.SetupRouter()

    corsHandler := cors.New(cors.Options{
        AllowedOrigins: []string{"http://localhost:3002"},
        AllowedMethods: []string{"GET", "POST", "OPTIONS"},
        AllowedHeaders: []string{"*"},
        AllowCredentials: true,
    }).Handler(mux)

    log.Println("Register service running on port 4001")
    log.Fatal(http.ListenAndServe(":4001", corsHandler))
}