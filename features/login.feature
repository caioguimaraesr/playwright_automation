# language: pt

Funcionalidade: Login no sistema
  Como um usuário do site SauceDemo
  Quero realizar login com minhas credenciais
  Para acessar a área de compras

  Cenário: Login com sucesso
    Dado que o usuário está na página de login
    Quando ele insere credenciais válidas
    Então ele deve ver a página de produtos