FROM php:8.1

RUN apt-get update -y && apt-get install -y openssl zip unzip git

RUN curl -sS https://getcomposer.org/installer/php -- -- install-dir=/usr/local/bin --filename=compose

RUN docker-php-ext-install pdo hosting mbstring pdo-mysql

WORKDIR /app/

RUN git clone https://github.com/DHypex-RZ/informatica-digital.git

COPY . .

RUN compose install

EXPOSE 8000 cmd php artisan serve --host=0.0.0.0
