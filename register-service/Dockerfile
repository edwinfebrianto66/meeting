FROM golang:1.20
WORKDIR /app
COPY . .
RUN go mod tidy
RUN go build -o register-service
EXPOSE 4001
CMD ["./register-service"]
