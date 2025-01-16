const express = require('express')
const app = express()
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.use(cors());  // Разрешаем запросы с любых источников
app.use(express.json());

app.use('/', (req, res) => {
    res.send("Server is running!334242")
})

app.get('/user', async (req, res) => {
    try {
        // Пример простого запроса для проверки соединения
        const count = await prisma.user.count();  // Замените 'user' на имя вашей модели
        res.json({ message: 'База данных подключена, количество записей:', count });
      } catch (error) {
        res.status(500).json({ error: 'Ошибка соединения с базой данных' });
      }
});

app.listen(5000, console.log("Server run on port 5000."))