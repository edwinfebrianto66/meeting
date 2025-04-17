
package main

import (
    "fmt"
    "log"
    "net/http"
    "register-service/config"
    "register-service/router"
)

func main() {
    config.Connect()
    r := router.SetupRouter()
    fmt.Println("Register service running on port 4001")
    log.Fatal(http.ListenAndServe(":4001", r))
}
