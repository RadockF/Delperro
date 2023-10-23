const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do servidor e middleware
app.use(express.json());

// Importa as rotas
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
