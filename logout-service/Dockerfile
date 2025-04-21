FROM python:3.10-slim

WORKDIR /app

# Tambahkan dependensi sistem biar pip gak error
RUN apt-get update && apt-get install -y gcc libssl-dev default-libmysqlclient-dev

COPY . .

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

CMD ["python", "app.py"]
