// index.js
const { fetchData } = require('./fetchData');
const { removeExcelFile } = require('./fileOperations');
// Remove o arquivo Excel existente
removeExcelFile();

// Depois, faz a requisição e gera um novo arquivo Excel
fetchData();