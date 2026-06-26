# Hub de Leitura QA

## Sobre o Projeto
Projeto de automação de testes E2E usando Playwright + MCP (Model Context Protocol) com IA (GitHub Copilot Agent).

## Stack
- Playwright
- @playwright/mcp
- dotenv
- GitHub Copilot Agent (modo Agent)

## Estrutura de Pastas
- tests/e2e: testes end-to-end automatizados com Playwright
- docs: documentação do projeto e regras de negócio
- reports: relatórios e evidências geradas pelos testes
- prompts: instruções e prompts utilizados para automação e integração com IA

## Como Rodar
1. npm install
2. npx playwright install chromium
3. Copiar .env.example para .env e preencher
4. npx playwright test
5. npx playwright show-report reports

## Configuração MCP
O arquivo .vscode/mcp.json configura o servidor @playwright/mcp, que permite ao Copilot Agent controlar o browser para executar automações e validar cenários de forma interativa.

## Evidências
Screenshot gerado automaticamente em reports/evidencia-home.png

## Autor
Seu nome aqui
