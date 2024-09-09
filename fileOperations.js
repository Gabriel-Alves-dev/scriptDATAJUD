// fileOperations.js
const fs = require('fs');
const path = require('path');

function writeToFile(processos) {
  const outputDir = path.join(__dirname, 'content');
  const filePath = path.join(outputDir, 'movimentos_anpp.txt');

  let content = '';
  processos.forEach(processo => {
    content += `Autos n. ${processo.numero_processo}, Classe: ${processo.classe}\n`;
    content += `Ajuizamento: ${processo.data_ajuizamento}\n`;
    content += `Assuntos: ${processo.assuntos.join(', ')}\n\n`;

    processo.movimentos.forEach(movimento => {
      content += `${movimento[2] || 'N/A'} | Cód: ${movimento[0] || 'N/A'} | Mov.: ${movimento[1] || 'N/A'} \n`;
    });

    content += '\n-----------------------------------------------------------------------------\n\n';
  });

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error('Erro ao salvar o arquivo de texto:', err);
    } else {
      console.log(`Arquivo de texto salvo com sucesso em ${filePath}`);
    }
  });
}

module.exports = { writeToFile };
