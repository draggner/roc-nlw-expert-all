const perguntas = [
  {
    pergunta: "Qual é a função usada para imprimir algo no console?",
    respostas: [
      "log()",
      "print()",
      "console.log()"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
    respostas: [
      "vari",
      "vrb",
      "var"
    ],
    correta: 2
  },
  {
    pergunta: "Qual desses métodos não é usado para iterar sobre um array em JavaScript?",
    respostas: [
      "for loop",
      "while loop",
      "if statement"
    ],
    correta: 2
  },
  {
    pergunta: "Qual símbolo é usado para comentários de uma única linha em JavaScript?",
    respostas: [
      "//",
      "/*",
      "--"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função usada para conveter uma string em um número inteiro em JavaScript?",
    respostas: [
      "parseInt()",
      "stringToInt()",
      "toInteger()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a plavra-chave usada para declarar uma função em JavaScript?",
    respostas: [
      "function",
      "method",
      "func"
    ],
    correta: 0
  },
  {
    pergunta: "Qual destes não é um tipo de dado primitivo em JavaScript?",
    respostas: [
      "object",
      "boolean",
      "number"
    ],
    correta: 0
  },
  {
    pergunta: "O que o operador '===' faz em JavaScript?",
    respostas: [
      "Atribuição",
      "Compara igualdade de valor e tipo",
      "Compara igualdade de valor"
    ],
    correta: 1
  },
  {
    pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
    respostas: [
      "pop()",
      "shift()",
      "removeLast()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a maneira correta de verficar o tipo de uma variável em JavaScript?",
    respostas: [
      "typeOf",
      "typeof",
      "type"
    ],
    correta: 1
  },
]

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()

const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta

    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    
    dt.querySelector('input').value = item.respostas.indexOf(resposta)

    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }

    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()
  quiz.appendChild(quizItem)
}