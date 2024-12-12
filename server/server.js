const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Configurar o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, '..', 'public')));

// Definir rotas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'about.html'));
});

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'form.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'contact.html'));
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
