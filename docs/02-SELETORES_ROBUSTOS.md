# Seletores Robustos

## Diretrizes
- Prefira seletores baseados em role, name e label.
- Use data-testid quando o elemento não tiver um nome semântico claro.
- Evite seletores frágeis baseados em estrutura HTML profunda.

## Exemplos
- Bom: page.getByRole('button', { name: 'Entrar' })
- Bom: page.getByLabel('E-mail')
- Bom: page.getByTestId('campo-pesquisa')
- Ruim: page.locator('div > span:nth-child(3)')

## Regras de Manutenção
- Atualize os seletores quando a interface mudar de forma significativa.
- Sempre teste o fluxo com o navegador real antes de considerar o seletor estável.
