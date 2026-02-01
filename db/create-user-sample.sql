CREATE USER 'HealthDiary1'@'localhost' IDENTIFIED BY 'salakala';
GRANT ALL PRIVILEGES ON `HealthDiary`.* TO 'HealthDiary1'@'localhost';
FLUSH PRIVILEGES;
