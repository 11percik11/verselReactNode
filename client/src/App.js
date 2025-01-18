import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);  // Теперь data и user - это объекты, а не массивы
  const [user, setUser] = useState(null);

  // Функция для получения данных с бекенда
  const fetchData = async () => {
    try {
      const response = await axios.get('https://versel-react-node-mongo-jw9cucvaf-11percik11s-projects.vercel.app/user');
      setData(response.data);  // Сохраняем ответ в состояние
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };

  const fetchUser = async () => {
    try {
      const userData = await axios.get('https://versel-react-node-mongo-jw9cucvaf-11percik11s-projects.vercel.app/task');
      setUser(userData.data);  // Сохраняем ответ в состояние
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchUser();
  }, []);

  return (
    <div className="App">
      <h1>Данные с сервера</h1>
      <ul>
        {/* Теперь выводим значения из объектов */}
        <li>{user ? `${user.message} ${user.count}` : 'Загрузка данных для Task...'}</li>
        <li>{data ? `${data.message} ${data.count}` : 'Загрузка данных для User...'}</li>
      </ul>
    </div>
  );
}

export default App;