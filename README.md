<h1 align="center">🧮 Calculadora em JavaScript</h1>

<p align="center">
  Uma calculadora funcional feita com <b> HTML, CSS e JavaScript puro </b>,  
  com suporte a teclado, layout moderno e comportamento inteligente após o "=".
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML-5-orange?logo=html5">
  <img src="https://img.shields.io/badge/CSS-3-blue?logo=css3">
  <img src="https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript">
  <img src="https://img.shields.io/badge/Status-Concluído-brightgreen">
</p>

---

## 🚀 Funcionalidades

✔ Operações básicas  
➕ Adição  
➖ Subtração  
✖ Multiplicação  
➗ Divisão  

✔ Funções extras  
🧹 **C** limpa tudo  
⌫ **Backspace** apaga o último dígito  
⌨ **Suporte ao teclado físico**  
🟰 Botão **=** ocupa toda a linha inferior  
🔁 Continuação automática da conta após "="  
🆕 Nova conta iniciada ao digitar número após "="  

---

## ⌨️ Atalhos de Teclado

| Tecla | Função |
|------|--------|
| `0–9` | Inserir número |
| `+ - * /` | Operadores |
| `Enter` ou `=` | Calcular |
| `Backspace` | Apagar último dígito |
| `Esc` | Limpar tudo |
| `.` | Número decimal |

---

## 🧠 Lógica Inteligente

Após pressionar **=**:

| Ação do usuário | Comportamento |
|-----------------|---------------|
| Digita número | Inicia nova conta |
| Digita operador | Continua a conta anterior |

**Exemplo:**
5 + 5 = 10

+ ➕ 2 = 12 ✔ Continua a operação<br>
+ 3 ✔ Começa nova conta

---

## 🎨 Layout da Calculadora

    C   ⌫   /   *
    7   8   9   -
    4   5   6   +
    1   2   3   =
    0   0   .   =


O botão **=** final ocupa a largura total da última linha para melhor usabilidade.

---

## 🖥️ Estrutura do Projeto

    📁 calculadora-js
     ├── index.html
     ├── style.css
     └── script.js


---

## 📄 index.html
Contém a estrutura da interface da calculadora e os botões.

## 🎨 style.css
Define o layout usando **CSS Grid**, cores, espaçamentos e o botão "=" expandido.

## ⚙️ script.js
Responsável por:

- Atualizar o display
- Controlar estado após "="
- Capturar cliques
- Capturar teclado
- Impedir entradas inválidas

---

## 📦 Como Executar

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/calculadora-js.git

# Abra o arquivo
index.html
```
## 🛠 Tecnologias Utilizadas

-   HTML5
-   CSS3 (Grid Layout)
-   JavaScript Vanilla

------------------------------------------------------------------------

## 💡 Melhorias Futuras

-   [ ] Botão de porcentagem (%)
-   [ ] Histórico de operações
-   [ ] Tema escuro 🌙
-   [ ] Versão responsiva 📱
-   [ ] Animações nos botões ✨

------------------------------------------------------------------------

## 👨‍💻 Autor
Projeto desenvolvido para praticar: <br>
  - Manipulação do DOM <br>
  - Eventos de teclado <br>
  - Lógica de programação em JavaScript <br>
