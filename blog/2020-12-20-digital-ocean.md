---
title: Laraval Digital Ocean Deploy
path: /laravel-digital-ocean
date: 2021-12-20
summary: Laravel deployment to digital ocean
tags: ['laravel','deploy']
---
![](https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&h=200)
---
[Deploy Laravel to DigitalOcean Youtube](https://www.youtube.com/watch?v=GhGDunq_OSw)

[Digital Ocean Explanation](https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-laravel-with-lemp-on-ubuntu-18-04)

### Connection

```php
ssh root@server_ip_adress
```

### Server set up

```php
adduser name_of_user

usermod -aG sudo name_of_user

sudo - name_of_user

mkdir .ssh

chmod 700 .ssh

vim .ssh/authorized_keys  // vim or nano

cat ~/.ssh/id_rsa.pub // in your computers terminal cat the public key
```

### Firewall configuration
```php
sudo ufw allow 'Nginx HTTP' 
```

### Mysql configuration
```php
sudo mysql_secure_installation
sudo mysql -u root -p
```

### MySQL queries
```mysql
create user 'username'@'localhost' identified by 'password';
alter user 'username'@'localhost' identified with mysql_native_password by 'password';
create database database_name;
grant all on database_name.* to 'username'@'localhost';
flush privileges;
exit;
```

### PHP extension
```php
sudo apt update
sudo apt install php-bcmath php-mbstring php-xml
```

### Composer
```php
sudo apt install unzip
curl -sS https://getcomposer.org/installer |php
sudo mv composer.phar /usr/local/bin/composer
```

### Clone and set up the app
```php
sudo chown name_of_user ./
```

```php
cd /var/www/
```

### Github
```php
git clone url_from_github
cd repo_name
composer install
cp .env.example .env
php artisan generate:key
// vim or nano
```
```php
vim .env
php artisan migrate --force
```

### Nginx configuration
```php
sudo vim /etc/nginx/sites-available/tutorial
```
```php
// nginx configuration
server {
    listen 80;
    server_name DOMAIN_NAME_OR_IP_ADDRESS;
    root /var/www/name_of_repo/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";

    index index.html index.htm index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ .php$ {
        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /.(?!well-known).* {
        deny all;
    }
}
```
```php
sudo ln -s /etc/nginx/sites-available/tutorial /etc/nginx/sites-enabled/tutorial
sudo nginx -t 
sudo service nginx restart
```

### Change owner of storage and bootstrap/cache
```php
cd path/to/repo
sudo chown -R www-data.www-data storage
sudo chown -R www-data.www-data bootstrap/cache
```


