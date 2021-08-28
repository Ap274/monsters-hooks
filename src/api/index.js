import axios from 'axios'

export const getMonsters = async () => {
  let monsters = {};
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response);
    monsters.statusText = "";
    monsters.response = true;
    monsters.data = response.data;
  } catch (error) {
    monsters = error.response;
    monsters.statusText = 'Lista de monstros indisponível';
    monsters.ok = false;
    monsters.data.monsters = [];
  }
  return monsters;
}