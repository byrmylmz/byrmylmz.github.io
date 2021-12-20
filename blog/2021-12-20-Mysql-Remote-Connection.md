---
title: Mysql Remote Connection
path: /blog/mysql-remote-connection
date: 2021-12-20
summary: Mysql Remote Connection
tags: ['mysql']
---

![](https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&h=200)

```mysql
SELECT USER FROM mysql.user;
```
```mysql 
DROP USER 'username'@'localhost';
```
```mysql 
SELECT USER,HOST FROM mysql.user;
```
