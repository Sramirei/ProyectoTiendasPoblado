//Contenedor de los titulos - listas del footer
import Item from "./Item";
import { CATEGORÍAS, NOSOTROS, CONTACTO } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16">
      <Item Links={CATEGORÍAS} title="PRODUCTOS Y SERVICIOS" />
      <Item Links={NOSOTROS} title="ACERCA DE NOSOTROS" />
      <Item Links={CONTACTO} title="AYUDA Y SOPORTE TÉCNICO" />
    </div>
  );
};

export default ItemsContainer;

