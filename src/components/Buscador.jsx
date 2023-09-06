import React, { useState } from "react";

const Buscador = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    // Verificar que el campo de búsqueda no esté vacío
    if (query.trim() !== "") {
      onSearch(query);
    } else {
      // Manejar el caso en que el campo de búsqueda está vacío
      alert("Por favor, ingrese un término de búsqueda válido.");
    }
  };

  return (
    <div className="buscador-list">
      <input
        type="text"
        placeholder="Buscar película"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="text-buscador"
      />
      <button onClick={handleSearch} className="btn-Buscar">
        Buscar
      </button>
    </div>
  );
};

export default Buscador;
