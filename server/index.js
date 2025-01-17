const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());  // Разрешаем запросы с любых источников
app.use(express.json());

app.use('/', async (req, res) => {
    try {
        // Пример простого запроса для проверки соединения
        // const count = await prisma.user.count();  // Замените 'user' на имя вашей модели
        // res.json({ message: 'База данных подключена, количество записей:', count });
        res.send("Server is running!334242")
      } catch (error) {
        res.status(500).json({ error: 'Ошибка соединения с базой данных' });
      }
})

app.listen(5000, console.log("Server run on port 5000."))