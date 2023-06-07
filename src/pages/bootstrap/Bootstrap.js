import React from "react";
import "./Bootstrap.css";
import lua from "./images/tek.jpg";

const Bootstrap = () => {
  return (
    <body  className="py-5">
    <div className="container px-4 container1">
      <div className="text-center">
        <img
          className="img-fluid mt-2 mb-4 topLogo"
          src={lua}
          alt="Tecnologia"
        ></img>
      </div>
      <p className="paragraph">1 - Qual é o seu nome?</p>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Nome completo:
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Digite aqui"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Email:
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Digite aqui"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <p className="mt-3 paragraph">2 - Qual é o seu gênero?</p>
      <div class="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label className="form-check-label" for="flexRadioDefault1">
          Homem
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label className="form-check-label" for="flexRadioDefault2">
          Mulher
        </label>
      </div>
      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label clasName="form-check-label" for="flexRadioDefault2">
          Prefiro não informar
        </label>
      </div>

      <p className="mt-3 paragraph">3 - Marque os curso que já realizou:</p>
      <div class="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          javaScript
        </label>
      </div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          Python
        </label>
      </div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          TypeScript
        </label>
      </div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          React
        </label>
      </div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          React Native
        </label>
      </div>

      <p className="mt-3 question">4 - Quais são suas qualidades?</p>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          value="option1"
        />
        <label className="form-check-label" for="inlineCheckbox1">
          Auto didata
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox2"
          value="option2"
        />
        <label className="form-check-label" for="inlineCheckbox2">
          Trabalhar em equipe
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox2"
          value="option2"
        />
        <label className="form-check-label" for="inlineCheckbox2">
          back-end
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox2"
          value="option2"
        />
        <label className="form-check-label" for="inlineCheckbox2">
          full-Stack
        </label>
      </div>
      <div className="form-check form-check-inline mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox2"
          value="option2"
        />
        <label className="form-check-label" for="inlineCheckbox2">
          Front-end
        </label>
      </div>
      <div className="form-check form-check-inline mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox2"
          value="option2"
        />
        <label className="form-check-label" for="inlineCheckbox2">
          Database
        </label>
      </div>

      <div className="text-center">
        <button
          type="button"
          className="btn btn-outline-primary mb-3 btnSucess"
        >
          Enviar
        </button>
      </div>
      <div className="container text-center fotter">
        <p> MDM &copy; </p>
      </div>
    </div>
  </body>
  );
};

export default Bootstrap;
