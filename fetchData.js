// fetchData.js
const axios = require('axios');
const { parse } = require('json2csv');
const path = require('path');
const fs = require('fs');
const { apiUrl, headers, payload } = require('./config');
const { writeToFile } = require('./fileOperations');

async function fetchData() {
  try {
    const response = await axios.post(apiUrl, payload, { headers });
    const dadosDict = response.data;

    const processos = dadosDict.hits.hits.map(processo => {
      const source = processo._source;
      return {
        numero_processo: source.numeroProcesso,
        grau: source.grau,
        classe: source.classe.nome,
        assuntos: source.assuntos || [],
        data_ajuizamento: source.dataAjuizamento,
        ultima_atualizacao: source.dataHoraUltimaAtualizacao,
        formato: source.formato.nome,
        codigo: source.orgaoJulgador.codigo,
        orgao_julgador: source.orgaoJulgador.nome,
        sort: processo.sort[0],
        movimentos: source.movimentos || []
      };
    });

    const csv = parse(processos, {
      fields: [
        'numero_processo', 'classe', 'data_ajuizamento', 'ultima_atualizacao',
        'formato', 'codigo', 'orgao_julgador', 'municipio', 'grau', 'assuntos', 'movimentos', 'sort'
      ]
    });

    const outputDir = path.join(__dirname, 'content');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const csvFilePath = path.join(outputDir, 'dados_processo.csv');
    fs.writeFile(csvFilePath, csv, (err) => {
      if (err) {
        console.error('Erro ao salvar o arquivo CSV:', err);
      } else {
        console.log(`Arquivo CSV salvo com sucesso em ${csvFilePath}`);
      }
    });

    writeToFile(processos);

  } catch (error) {
    console.error('Erro ao fazer a requisição:', error);
  }
}

module.exports = { fetchData };
