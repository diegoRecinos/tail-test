import React from 'react';

const Card = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="px-6 py-4">
        <h1 className="text-xl font-bold text-gray-800">¡Hola, Tailwind CSS!</h1>
        <p className="text-gray-600 mt-2">
          Este es un ejemplo simple de una tarjeta estilizada con Tailwind CSS. Si ves este diseño correctamente, ¡Tailwind está funcionando!
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors">
          Probar botón
        </button>
      </div>
    </div>
  );
};

export default Card;
