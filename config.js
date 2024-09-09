// config.js
const apiUrl = 'https://api-publica.datajud.cnj.jus.br/api_publica_tjrj/_search';
const apiKey = 'APIKey cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw==';

const payload = {
  size: 100,
  query: {
    match: { "classe.codigo": 81 } // 81 (B.A)
  },
  sort: [{ "dataAjuizamento": { "order": "asc" } }] // ou desc
};

const headers = {
  'Authorization': apiKey,
  'Content-Type': 'application/json'
};

module.exports = { apiUrl, headers, payload };
