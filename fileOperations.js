// fileOperations.js
const fs = require('fs');
const path = require('path');

function removeExcelFile() {
  const outputDir = path.join(__dirname, 'content');
  const excelFilePath = path.join(outputDir, 'dados_processo.xlsx');

  // Verifica se o arquivo Excel existe e o remove
  if (fs.existsSync(excelFilePath)) {
    fs.unlink(excelFilePath, (err) => {
      if (err) {
        console.error('Erro ao excluir o arquivo Excel:', err);
      } else {
        console.log(`Arquivo Excel removido com sucesso: ${excelFilePath}`);
      }
    });
  } else {
    console.log('Nenhum arquivo Excel encontrado para remover.');
  }
}

module.exports = { removeExcelFile };
