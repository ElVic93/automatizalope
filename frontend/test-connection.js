require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const axios = require('axios');

async function testConnection() {
  const apiURL = 'https://automatizalope.onrender.com';
  const token = 'cf8c031544326ff15f2f5008781b74d25df9815191a0b950cb970b3877dcdd95197e06784030d7741988c004eb3d342d618402a156d2ebcd1c7c77494385bb7f3f76e365f6a762641c4230dbbec3310679e21c7eb7c20acc11e3026b1f0f42110384709d8fee3029f91e572a72864e9c357fdb6af240e7e39b39821ce6ed6a04';

  try {
    console.log('Intentando conectar a:', apiURL);
    const response = await axios.get(`${apiURL}/api/articles`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('Conexión exitosa!');
    console.log('Datos recibidos:', response.data);
  } catch (error) {
    console.error('Error de conexión:', error.response?.data || error.message);
    console.error('URL intentada:', `${apiURL}/api/articles`);
    console.error('Token usado:', token ? 'Token presente' : 'Token no encontrado');
  }
}

testConnection(); 