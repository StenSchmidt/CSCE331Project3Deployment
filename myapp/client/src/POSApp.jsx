import React, { useState } from "react";

export default function POSApp() {
  const [order, setOrder] = useState([]);
  const [language, setLanguage] = useState("en");
  const menu = [
    { id: 1, name: { en: "Black Milk Tea", es: "Té Negro con Leche" }, price: 5.5 },
    { id: 2, name: { en: "Taro Milk Tea", es: "Té de Taro con Leche" }, price: 5.75 },
    { id: 3, name: { en: "Mango Green Tea", es: "Té Verde de Mango" }, price: 4.95 },
    
    
  ];

  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  const total = order.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        {language === "en" ? "POS Ordering System" : "Sistema de Pedidos POS"}
      </h1>

      <div className="mb-4">
        <label className="mr-2 font-semibold">Language:</label>
        <select
          className="border p-1"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-2 mb-6">
        {menu.map((item) => (
          <button
            key={item.id}
            onClick={() => addToOrder(item)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded text-left"
          >
            {item.name[language]} - ${item.price.toFixed(2)}
          </button>
        ))}
      </div>

      <div className="border-t pt-4">
        <h2 className="text-xl font-semibold mb-2">
          {language === "en" ? "Order Summary" : "Resumen del Pedido"}
        </h2>
        {order.length === 0 ? (
          <p className="text-gray-500">
            {language === "en"
              ? "No items added yet."
              : "Aún no se han añadido productos."}
          </p>
        ) : (
          <ul className="mb-2">
            {order.map((item, index) => (
              <li key={index} className="text-lg">
                • {item.name[language]} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
        <p className="font-bold text-lg">
          {language === "en" ? "Total" : "Total"}: ${total}
        </p>
      </div>
    </div>
  );
}
