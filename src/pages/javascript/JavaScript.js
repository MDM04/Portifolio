import React from "react";
import "./JavaScript.css";
import "./style";

const JavaScript = () => {
  return (
    <div>
      <body className="body">
      <h1 className="title">Jogo da Velha</h1>
        <header className="header">
          <label for="player1" className="x">
            {" "}
            X {" "}
          </label>
          <input type="text" id="player1" placeholder="Nome do Jogador 1" />
          <br></br>
          <label for="player2" className="o">
            {" "}
            O {" "}
          </label>
          <input type="text" id="player2" placeholder="Nome do Jogador 2" />
          <button className="start"> Começar ! </button>
        </header>
        <br />
        <br />
        <br />
        <h2 className="title2">
          Vez de: <span id="turnPlayer"></span>
        </h2>
        <br />
        <br />

        <section id="gameBoard">
          <span class="cursor-pointer" data-region="0.0"></span>
          <span class="cursor-pointer" data-region="0.1"></span>
          <span class="cursor-pointer" data-region="0.2"></span>
          <span class="cursor-pointer" data-region="1.0"></span>
          <span class="cursor-pointer" data-region="1.1"></span>
          <span class="cursor-pointer" data-region="1.2"></span>
          <span class="cursor-pointer" data-region="2.0"></span>
          <span class="cursor-pointer" data-region="2.1"></span>
          <span class="cursor-pointer" data-region="2.2"></span>
        </section>
        <div className="foter">
          <p> MDM &copy; </p>
        </div>
      </body>
    </div>
  );
};

export default JavaScript;
