# 🥋 Projeto Luta – Jogo de Batalha com JavaScript, DOM e OO

## 📖 Sobre o Projeto
O **Projeto Luta** é um mini jogo de combate feito em **JavaScript puro**, utilizando **Programação Orientada a Objetos (POO)** e manipulação do **DOM**.  
O objetivo é praticar conceitos fundamentais da linguagem, criando um sistema interativo de luta entre personagens com atributos distintos.

Neste jogo, o **Guerreiro (Knight)** enfrenta o **Little Monster** em um duelo por turnos — cada ataque tem um fator aleatório de ataque e defesa, tornando cada batalha única ⚔️.

---

## 🎮 Como Jogar
1. Acesse o link abaixo para jogar:  
   👉 [**Jogar o Projeto Luta**](https://seu-link-aqui.com)  
   *(adicione o link quando publicar no GitHub Pages, por exemplo: `https://seuusuario.github.io/projeto-luta/`)*  
2. Clique no botão **Atacar** para realizar golpes contra o oponente.  
3. A barra de vida e os nomes dos personagens atualizam em tempo real.  
4. O log abaixo da tela mostra todas as ações do combate.  
5. O jogo termina quando um dos personagens chega a **0 de vida**.

---

## 🧠 Conceitos Utilizados

### 🏗️ Programação Orientada a Objetos (POO)
O jogo foi estruturado com classes para representar personagens, estágios e logs:
- **Character** → Classe base com vida, ataque e defesa.  
- **Knight**, **Sorcerer**, **LittleMonster**, **BigMonster** → Subclasses com status próprios.  
- **Stage** → Controla o combate e atualiza o DOM.  
- **Log** → Gerencia e exibe as mensagens de batalha.

### 🧩 Manipulação do DOM
A classe `Stage` interage diretamente com o HTML:
- Atualiza **nomes** e **barras de vida**.  
- Adiciona **eventos de clique** nos botões de ataque.  
- Gera e exibe mensagens no log de forma dinâmica.

---

## ⚙️ Estrutura do Projeto
📁 projeto-luta
│
├── index.html
├── assets/
│ ├── style.css
│ └── js/
│ ├── classes.js
│ └── script.js


---

## 🚀 Como Executar Localmente
1. Baixe ou clone este repositório.  
2. Abra o arquivo **index.html** em qualquer navegador moderno.  
3. O jogo padrão será entre **Knight** e **Little Monster**.  
4. Para alterar os personagens, edite o arquivo **assets/js/script.js**:
   ```js
   let char = new Knight("Arthur");
   let monster = new LittleMonster();
