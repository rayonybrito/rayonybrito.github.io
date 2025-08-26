import "./style.css";

const bolinhas = [
  "Bolinha de Frango",
  "Bolinha de Carne do Sol",
  "Bolinha de Peixe",
  "Bolinha de Calabresa Queijo",
];

const pastelzinhos = [
  "Pastel de Queijo",
  "Pastel de Carne do Sol",
  "Pastel de Frango",
  "Pastel de Calabresa Queijo",
  "Pastel de Arraiá",
  "Pastel de Camarão",
];

const entradas = [
  { name: "Batata Frita", price: "R$ 15,99" },
  { name: "Macaxeira", price: "R$ 15,99" },
  { name: "Baião", price: "R$ 10,00" },
  { name: "Torresmo", price: "R$ 10,00" },
  { name: "Camarão Alho e Óleo", price: "R$ 19,90" },
  { name: "Empanado de Camarão", price: "R$ 34,99" },
  { name: "Calabresa Acebolada", price: "R$ 20,00" },
];

const bebidas = [
  { name: "Cerveja Buchudinha", price: "R$ 5,00" },
  { name: "Heineken 330ml long neck", price: "R$ 9,00" },
  { name: "Stella 330ml long neck", price: "R$ 9,00" },
  { name: "Skol Beats", price: "R$ 10,00" },
  { name: "Whisky Black White dose", price: "R$ 8,00" },
  { name: "Ypióca dose", price: "R$ 3,50" },
  { name: "Ypióca (copo) 200ml", price: "R$ 7,00" },
  { name: "Água de côco (jarra)", price: "R$ 12,00" },
  { name: "sucos", price: "R$ 7,00" },
  { name: "Água com Gás", price: "R$ 3,00" },
  { name: "Água sem Gás", price: "R$ 2,00" },
];

export function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-section">
        <div className="menu-aside">
          <div className="container-produto">
            <h2 className="title">Bolinhas: 12 Unidades</h2>
            <div className="produto">
              {bolinhas.map((item, idx) => (
                <div className="produto-item" key={idx}>
                  <p>{item}</p>
                  <p className="preco">R$ 16,99</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="title">Pastelzinho: 12 Unidades</h2>
            <div className="produto">
              {pastelzinhos.map((item, idx) => {
                let price = "R$ 21,99";
                if (item === "Pastel de Arraiá") price = "R$ 23,99";
                if (item === "Pastel de Camarão") price = "R$ 24,99";
                return (
                  <div className="produto-item" key={idx}>
                    <p>{item}</p>
                    <p className="preco">{price}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="title">Entradas:</h2>
            <div className="produto">
              {entradas.map((item, idx) => (
                <div className="produto-item" key={idx}>
                  <p>{item.name}</p>
                  <p className="preco">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="menu-aside">
          <div>
            <h2 className="title">Quinta do Caragueijo:</h2>
            <div className="produto-item">
              <p>03 Unidades</p>
              <p className="preco">R$ 26,99</p>
            </div>
          </div>
          <div>
            <h2 className="title">Aos Domingos:</h2>
            <div className="produto-item">
              <p>Panelada</p>
              <p className="preco">R$ 29,90</p>
            </div>
          </div>
          <div>
            <h2 className="title">Bebidas:</h2>
            <div className="produto">
              {bebidas.map((item, idx) => (
                <div className="produto-item" key={idx}>
                  <p>{item.name}</p>
                  <p className="preco">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
