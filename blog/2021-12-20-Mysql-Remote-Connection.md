---
title: Mysql Remote Connection
path: /blog/mysql-remote-connection
date: 2021-12-20
summary: Mysql Remote Connection
tags: ['mysql']
---

![](https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&h=200)
---
- [How To Allow Remote Access to MySQL](https://www.digitalocean.com/community/tutorials/how-to-allow-remote-access-to-mysql)

# Sudo commands

```mysql
sudo mysql 

SELECT USER FROM mysql.user;

DROP USER 'username'@'localhost';

SELECT USER,HOST FROM mysql.user;

RENAME USER 'sammy'@'localhost' TO 'sammy'@'remote_server_ip';
```

# Ufw firewall commands

```
sudo ufw status numbered
sudo ufw delete 3 
sudo ufw allow from remote_IP_address to any port 3306 // allow to access
```


