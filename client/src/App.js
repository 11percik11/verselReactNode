import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);

  // Функция для получения данных с бекенда
  const fetchData = async () => {
    try {
      const response = await axios.get('https://versel-react-node-dev.vercel.app');
      setData(response.data);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };

  const fetchUser = async () => {
    try {
      const userData = await axios.get('https://versel-react-node-dev.vercel.app/user');
      setUser(userData.data);
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
          <li>{data}</li>
          <li>{user}</li>
      </ul>
    </div>
  );
}

export default App;
