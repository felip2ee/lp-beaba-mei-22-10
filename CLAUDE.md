# LP — Beabá do Crédito · Edição especial: Novas Regras do MEI (22/10/2026)

Landing page de **evento presencial** (palestra), clonada de `lp-beaba-9rs`. Mesma stack, mesma identidade, mesmo deploy.

## Evento
- **Data:** 22 de outubro de 2026, quinta-feira, das 19h às 21h
- **Local:** Centro de Formação Vira o Jogo. 104 Sul, Rua SE 5, Lote 3, 2º piso, Galeria Rocha, salas 20, 21, 22 e 23, Palmas, TO.
- **Público:** empresário MEI. Tema: o que muda nas novas regras do MEI e o impacto no acesso a crédito.
- **CTA:** todos os botões abrem o WhatsApp (`wa.me`) com mensagem pré-preenchida. Não há checkout. Número e mensagem no topo de `src/App.jsx` (`WHATSAPP_NUMERO`, `WHATSAPP_MENSAGEM`).

## Onde mexer
- Toda a página está em `src/App.jsx` (dados do evento em `EVENTO`, tópicos em `APRENDIZADOS`, FAQ em `FAQ`).
- Imagens em `public/assets/` (chave, retrato da Eliane, logo do Beabá).
- Deploy: `docker-stack.yml` com host `mei.elianearainhadocredito.com` (ajustar se o domínio for outro).

## Identidade visual (tailwind.config.js)
- primary `#063A29` · secondary `#105B41` · accent (dourado) `#DCA452` · background `#04281C` · dark `#02150E`
- Display: Montserrat · Sans: Open Sans

## Regras de copy
- **Sem travessão** (`—` ou `–`). Usar ponto, dois-pontos, vírgula ou `·`.
- **Nunca prometer aprovação.** Quem aprova é o banco.
- **Nunca atacar assessoria/consultoria.** O vilão é o desconhecimento (pedir no escuro).
- Regularização de dívidas sempre com a ressalva "conforme as condições aplicáveis".

## Pendências
- WhatsApp confirmado: 556381089024.
- Confirmar domínio de publicação.
- Preço/forma de inscrição não está na página (a copy manda falar no WhatsApp).
