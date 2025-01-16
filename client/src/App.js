import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  // Функция для получения данных с бекенда
  const fetchData = async () => {
    try {
      const response = await axios.get('https://versel-react-node-dev.vercel.app');
      setData(response.data);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="App">
      <h1>Данные с сервера</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>  // адаптируй в зависимости от данных
        ))}
      </ul>
    </div>
  );
}

export default App;
