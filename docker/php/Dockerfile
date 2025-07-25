FROM php:8.3-fpm

RUN apt-get update && apt-get install -y \
    zip unzip curl libpng-dev libonig-dev libxml2-dev libzip-dev \
    git npm nodejs \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd xml zip

# Instala Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

CMD ["php-fpm"]
