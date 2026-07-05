# Arquitetura

## Visão Geral
Este projeto organiza testes E2E com Playwright para validar cenários de uso do Hub de Leitura.

## Componentes Principais
- Playwright: execução dos testes em navegador.
- Configuração central: arquivo de configuração do Playwright em .vscode/playwright.config.js.
- Variáveis de ambiente: carregadas via dotenv para configurar URL, credenciais e timeout.
- Evidências: screenshots e relatórios salvos em reports/ e tests/evidencias/.

## Fluxo de Execução
1. O teste inicia a navegação para a URL base.
2. O Playwright acessa a aplicação e executa as validações.
3. Em caso de falha, screenshots e vídeos são registrados.
4. O relatório HTML pode ser aberto para análise.

## Boas Práticas de Estrutura
- Manter cenários em tests/e2e.
- Isolar utilidades em tests/helpers.
- Centralizar modelos reutilizáveis em tests/_templates.
- Guardar evidências em tests/evidencias/hub-leitura.
