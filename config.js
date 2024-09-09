// config.js
const apiUrls = [
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjrj/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjsp/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjac/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjal/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjam/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjap/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjba/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjce/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjdft/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjes/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjgo/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjma/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjmg/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjms/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjmt/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjpa/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjpb/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjpe/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjpi/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjpr/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjrn/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjro/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjrr/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjrs/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjsc/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjse/_search',
  'https://api-publica.datajud.cnj.jus.br/api_publica_tjto/_search',
];

const apiKey = 'APIKey cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw==';

const payload = {
  size: 10,  // ajustado para 10 registros por requisição
  query: {
    match: { "classe.codigo": 81 } // 81 (B.A)
  },
  sort: [{ "dataAjuizamento": { "order": "desc" } }] // ou asc
};

const headers = {
  'Authorization': apiKey,
  'Content-Type': 'application/json'
};

module.exports = { apiUrls, headers, payload };
