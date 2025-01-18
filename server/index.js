const express = require('express')
const app = express()
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const corsOptions = {
    origin: 'https://versel-react-node-client-ixpstt76w-11percik11s-projects.vercel.app', // замените на ваш клиентский домен
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // список методов, которые разрешены
    credentials: true, // если нужно разрешить работу с куками
  };
  
  app.use(cors(corsOptions)); // Разрешаем запросы с любых источников
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



