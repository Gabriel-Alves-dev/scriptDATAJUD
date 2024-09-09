const axios = require('axios');
const xlsx = require('xlsx'); // Biblioteca para gerar Excel
const path = require('path');
const fs = require('fs');
const { apiUrls, headers, payload } = require('./config');

async function fetchData() {
  try {
    // Faz as requisições paralelas às URLs
    const responses = await Promise.all(apiUrls.map(url =>
      axios.post(url, payload, { headers })
    ));

    // Itera sobre as respostas de cada URL
    const allProcessos = responses.flatMap(response => {
      const dadosDict = response.data;
      return dadosDict.hits.hits.map(processo => {
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
          tribunal: source.tribunal,
          orgao_julgador: source.orgaoJulgador.nome
        };
      });
    });

    // Gera a planilha Excel com os dados dos processos
    const workBook = xlsx.utils.book_new();
    const workSheet = xlsx.utils.json_to_sheet(allProcessos);

    xlsx.utils.book_append_sheet(workBook, workSheet, "Processos");

    // Define o diretório de saída e o caminho do arquivo Excel
    const outputDir = path.join(__dirname, 'content');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const excelFilePath = path.join(outputDir, 'dados_processo.xlsx');
    xlsx.writeFile(workBook, excelFilePath);

    console.log(`Arquivo Excel salvo com sucesso em ${excelFilePath}`);

  } catch (error) {
    console.error('Erro ao fazer as requisições:', error);
  }
}

module.exports = { fetchData };

