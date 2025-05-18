# Minha Coleção - App React Native

Aplicativo React Native para gerenciar uma coleção de carros, com telas para visualização, edição, criação e lista de desejos (WishList). Inclui navegação, filtros básicos e menu inferior fixo.

---

## Funcionalidades

- 📋 Listagem de carros com informações detalhadas (modelo, ano, número, coleção, tipo).
- 🔍 Filtro simples (ano, número, coleção) — aparece e desaparece ao clicar no botão FILTRAR.
- ✏️ Tela de detalhes com edição de informações.
- ⭐ Tela WishList para gerenciar desejos, com exclusão e edição.
- 📱 Menu inferior para navegação rápida entre telas.
- ➕ Botão central destacado para criação de novos itens.

---

## Estrutura do Projeto

/src
  /assets              # Imagens, ícones e fundos utilizados no app
  /components          # Componentes reutilizáveis, ex: CarCard, WishCard
  /screens             # Telas principais do app
    Home.tsx             # Tela principal com lista de carros
    Detalhes.tsx         # Tela de detalhes do carro com edição
    Criar.tsx            # Tela para criar novo carro na coleção
    WishList.tsx         # Tela da lista de desejos
    DetalhesWishList.tsx # Detalhes dos itens da WishList
  /styles              # Arquivos de estilos em formato modular
  routes.ts            # Definição da navegação e tipos para navegação
  App.tsx              # Entrada principal do aplicativo, configurações de navegação
## Tecnologias Utilizadas

- **React Native** — Framework para desenvolvimento mobile multiplataforma (iOS e Android).
- **TypeScript** — Superset do JavaScript para tipagem estática.
- **React Navigation** — Biblioteca para navegação entre telas.
- **Expo Vector Icons** — Biblioteca de ícones vetoriais para React Native.
- **React Native Gesture Handler** — Suporte avançado para gestos e toques.
- **React Native Reanimated** — Animações fluidas e complexas.
