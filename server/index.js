const express = require('express')
const app = express()
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.use(cors());  // Разрешаем запросы с любых источников
app.use(express.json());

app.listen(5000, console.log("Server run on port 5000."))

app.use('/', require('./router'))

// DATABASE_URL="mongodb+srv://rebi7dan:tACBoDVIT1MZV8tQ@cluster0.asqu8.mongodb.net/vercel1?retryWrites=true&w=majority"
// app.use('/', async (req, res) => {
//     try {
//         // Пример простого запроса для проверки соединения
//         const count = await prisma.user.count();  // Замените 'user' на имя вашей модели
//         res.json({ message: 'База данных подключена, количество записей:', count });
//       } catch (error) {
//         res.status(500).json({ error: 'Ошибка соединения с базой данных' });
//       }
// });



