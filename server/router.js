const express = require('express')
const router = express.Router()
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/user', async (req, res) => {
    try {
        // Пример простого запроса для проверки соединения
        const count = await prisma.user.count();  // Замените 'user' на имя вашей модели
        res.send(count);
      } catch (error) {
        res.status(500).json({ error: 'Ошибка соединения с базой данных' });
      }
});

router.get('/task', async (req, res) => {
    try {
        // Пример простого запроса для проверки соединения
        const count = await prisma.task.count();  // Замените 'user' на имя вашей модели
        res.json({ message: 'База данных подключена, количество Task:', count });
      } catch (error) {
        res.status(500).json({ error: 'Ошибка соединения с базой данных' });
      }
});

module.exports = router