import React from "react";

const form = () => {
  return (
    <div className="form_wrapper">
      <div className="form_wrapper_div">
        <h1>Prvi saznajte za najbolje ponude</h1>
        <p>
          Preko 30.000 putnika se prijavilo za naša obaveštenja o first
          minute/last minute ponudama i specijalnim akcijama i tako štedi i do
          100€.
        </p>
        <form>
          <input type="email" placeholder="Upišite e-mail addresu" />
          <input type="text" placeholder="Upišite broj telefona" />
        </form>
        <button className="form_button_first">Prijavite se</button>
      </div>
      <div className="form_wrapper_div">
        <h1>Proverite da li imate dugovanje</h1>
        <p>
          Upišite svoje podatke i saznajte informacije o ostatku duga uz
          instrukcije za uplatu
        </p>
        <form>
          <span>
            <select>
              <option value="">Izaberite destinaciju</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <select>
              <option value="">Izaberite termin</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </span>
          <input type="text" placeholder="Upišite JMBG iz ugovora" />
        </form>
        <button className="form_button_second">Provera duga</button>
      </div>
    </div>
  );
};

export default form;
