# Regras de Negócio — Hub de Leitura

## Sobre o sistema
O Hub de Leitura (hub-de-leitura.vercel.app) é uma plataforma pública
de catalogação de livros. Permite buscar, listar e visualizar detalhes
de obras literárias.

## Funcionalidades principais
- **Listagem de livros:** página inicial exibe catálogo de livros disponíveis
- **Busca:** campo de pesquisa filtra livros por título ou autor
- **Detalhe do livro:** ao clicar num livro, exibe informações completas
- **Navegação:** menu principal com acesso às seções do site

## Regras para testes
- A URL base sempre será: https://hub-de-leitura.vercel.app
- O site é público — não requer login para navegar
- Sempre validar que a página carregou antes de interagir
- Nunca usar dados reais de usuários nos testes
- Screenshots obrigatórios como evidência em cada fluxo testado

## Critérios de aceite
- Página inicial deve carregar em menos de 5 segundos
- Campo de busca deve retornar resultados relevantes
- Todos os links do menu devem estar funcionais
- Imagens dos livros devem carregar corretamente