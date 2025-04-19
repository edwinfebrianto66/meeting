package router

import (
    "net/http"
    "register-service/controller"
)

func SetupRouter() *http.ServeMux {
    mux := http.NewServeMux()
    mux.HandleFunc("/register", controller.Register)
    return mux
}