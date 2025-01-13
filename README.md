# Script DATAJUD

Este projeto é um script automatizado desenvolvido para realizar consultas e processar informações relacionadas ao **DATAJUD**, o banco de dados do Conselho Nacional de Justiça (CNJ). O script foi criado para facilitar o acesso e manipulação de dados judiciais, proporcionando maior eficiência em atividades relacionadas à análise de processos judiciais.

---

## 🚀 Funcionalidades

- Conexão automatizada com o banco de dados do **DATAJUD**.
- Extração e processamento de dados judiciais.
- Geração de relatórios e formatações específicas.
- Integração com outros sistemas ou ferramentas, se necessário.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Utilizado para desenvolver a lógica principal do script.
- **Bibliotecas de Manipulação de Dados**: (adicione aqui, ex.: `axios`, `fs`, etc.).
- **VPS**: (se aplicável) Hospedagem para execução contínua do script.
- **Banco de Dados**: Especifique o tipo de banco utilizado, se aplicável (ex.: PostgreSQL, MySQL, etc.).

---

## 📦 Instalação e Uso

### Pré-requisitos

- Node.js instalado
- Gerenciador de pacotes (npm ou yarn)
- Banco de dados configurado (se necessário)
- Acesso ao **DATAJUD** (credenciais ou permissões específicas)

### Passo a Passo

1. Clone este repositório:
   ```bash
   git clone https://github.com/Gabriel-Alves-dev/scriptDATAJUD.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd scriptDATAJUD
   ```   
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure as variáveis de ambiente criando um arquivo .env:
   ```bash
   DATABASE_URL=<sua_url_de_banco>
   DATAJUD_API_KEY=<sua_chave_de_acesso>
   ```
5. Execute o script:
   ```bash
   npm start
   ```
   
# 🌐 Como Funciona

1. O script conecta-se ao banco de dados do DATAJUD utilizando as credenciais fornecidas.
2. Realiza consultas automatizadas conforme os parâmetros definidos.
3. Processa os dados extraídos e formata-os de acordo com a necessidade.
4. Gera relatórios ou exportações, que podem ser utilizados por outros sistemas.

  # Exemplo de Configuração
  ```bash
  DATABASE_URL=postgres://usuario:senha@localhost:5432/meubanco
  DATAJUD_API_KEY=12345abcde67890
  ```

# Exemplo de Configuração
  ```bash
  {
  "status": "sucesso",
    "dados": [
      {
        "processo": "0000000-00.2020.8.00.0000",
        "status": "Em andamento",
        "ultima_movimentacao": "2025-01-10"
      },
      {
        "processo": "0000000-01.2020.8.00.0000",
        "status": "Concluído",
        "ultima_movimentacao": "2024-12-15"
      }
    ]
  }

```
# 🤝 Contribuições

Contribuições são bem-vindas! Se você tiver sugestões, encontrar problemas ou desejar colaborar, sinta-se à vontade para abrir uma issue ou enviar um pull request.
  
