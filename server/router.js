const express = require('express')
const router = express.Router()

router.get('/user', async (req, res) => {
    try {
        // Пример простого запроса для проверки соединения
        const count = await prisma.user.count();  // Замените 'user' на имя вашей модели
        res.json({ message: 'База данных подключена, количество записей:', count });
        // res.send("Server is running!334242")
      } catch (error) {
        res.status(500).json({ error: 'Ошибка соединения с базой данных' });
      }
});

module.exports = router