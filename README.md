# Hub de Leitura QA

Projeto de automação de testes E2E para o site Hub de Leitura, utilizando Playwright, MCP (Model Context Protocol) e GitHub Copilot Agent para executar cenários reais de navegação, validação e geração de evidências.

## Stack Utilizada
- Playwright
- @playwright/mcp
- dotenv
- GitHub Copilot Agent (modo Agent)

## Estrutura de Pastas
- tests/e2e: testes end-to-end automatizados
- tests/helpers: funções utilitárias e helpers reutilizáveis
- tests/_templates: modelos base para novos cenários
- tests/evidencias/hub-leitura: screenshots e evidências geradas pelos testes
- docs: documentação técnica e boas práticas
- reports: relatórios HTML e demais saídas de execução
- prompts: instruções e prompts utilizados para automação com IA

## Como Instalar
1. Clone o repositório
2. Acesse a pasta do projeto
3. Execute:
   ```bash
   npm install
   npx playwright install chromium
   ```

## Como Rodar os Testes
Execute:
```bash
npx playwright test
```

## Como Configurar o MCP
O arquivo [.vscode/mcp.json](.vscode/mcp.json) configura o servidor @playwright/mcp, permitindo que o GitHub Copilot Agent controle o navegador para executar automações e validar cenários diretamente.

## Como Configurar o .env
Crie uma cópia do arquivo [.env.example](.env.example) com o nome .env e preencha as variáveis:

```env
HUB_LEITURA_BASE_URL=https://hub-de-leitura.vercel.app
HUB_LEITURA_USER=seu-email@teste.com
HUB_LEITURA_PASSWORD=sua-senha-aqui
HUB_LEITURA_TIMEOUT=5000
HUB_LEITURA_EVIDENCIAS_DIR=tests/evidencias/hub-leitura
```

## Como Ver o Relatório HTML
Após executar os testes, visualize o relatório com:

```bash
npx playwright show-report reports
```

## Evidências Geradas Automaticamente
Os testes geram screenshots e evidências automaticamente na pasta [tests/evidencias/hub-leitura](tests/evidencias/hub-leitura).

## Documentação
A documentação do projeto está disponível em [docs](docs).

## Autor
Didimo
