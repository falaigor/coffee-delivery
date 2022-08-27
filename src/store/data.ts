import Expresso from "../assets/coffees/expresso.png";
import Americano from "../assets/coffees/americano.png";
import ExpressoCream from "../assets/coffees/cremoso.png";
import IcedCoffee from "../assets/coffees/gelado.png";
import CoffeeMilk from "../assets/coffees/coffee-milk.png";
import Latte from "../assets/coffees/latte.png";
import Capuccino from "../assets/coffees/capuccino.png";
import Macchiato from "../assets/coffees/macchiano.png";
import Mocaccino from "../assets/coffees/mocaccino.png";
import HotChocolatte from "../assets/coffees/chocolate.png";
import Arabe from "../assets/coffees/arabe.png";
import Cubano from "../assets/coffees/cubano.png";
import Havaiano from "../assets/coffees/havaiano.png";
import Irlandes from "../assets/coffees/irlandes.png";

export const coffees = [
  {
    id: "07b799f2-286b-424f-8446-232a2b48ad8e",
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    tags: ["tradicional"],
    value: 9.9,
    image: Expresso,
  },
  {
    id: "5fe20237-a094-4806-bef1-3d9fdc0a6890",
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    tags: ["tradicional"],
    value: 10.9,
    image: Americano,
  },
  {
    id: "b1f8a2f7-749e-48ae-b156-1f88da1d6d6c",
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    tags: ["tradicional", "cremoso"],
    value: 12.67,
    image: ExpressoCream,
  },
  {
    id: "fecbd550-6658-41e2-885d-2e9a02a6a3cb",
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    tags: ["tradicional", "gelado"],
    value: 7.5,
    image: IcedCoffee,
  },
  {
    id: "b0e6f392-beea-4894-b9d6-15be9756497f",
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    tags: ["tradicional", "com leite"],
    value: 18.9,
    image: CoffeeMilk,
  },
  {
    id: "ca4c615c-9568-4d68-ac94-05448b1e0b8b",
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tags: ["tradicional", "com leite"],
    value: 8.99,
    image: Latte,
  },
  {
    id: "7ae516f6-5d00-4844-9ace-3fc7b3103282",
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    tags: ["tradicional", "com leite"],
    value: 8.9,
    image: Capuccino,
  },
  {
    id: "3112cc88-003f-4d61-8cdf-d83a505fb240",
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    tags: ["tradicional", "com leite"],
    value: 16.75,
    image: Macchiato,
  },
  {
    id: "d143c797-fcd0-4d5a-95fc-89722778880e",
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    tags: ["tradicional", "com leite"],
    value: 11.89,
    image: Mocaccino,
  },
  {
    id: "57dbae91-c62d-463b-ba63-9c46c5aaf06b",
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    tags: ["especial", "com leite"],
    value: 3.45,
    image: HotChocolatte,
  },

  {
    id: "bc32fd94-b97a-45d4-8b27-df327bc8e55c",
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tags: ["especial", "alcoólico", "gelado"],
    value: 7.56,
    image: Cubano,
  },

  {
    id: "7a6d7711-006c-4ce7-9fef-06e7723f3ac2",
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    tags: ["especial"],
    value: 12.65,
    image: Havaiano,
  },

  {
    id: "e4c57b48-4814-46f9-9bb6-2c18c023a3db",
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    tags: ["especial"],
    value: 35.56,
    image: Arabe,
  },
  {
    id: "d011a284-f2d1-4fa8-b109-442d2298f7ba",
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tags: ["especial", "alcoólico"],
    value: 14.6,
    image: Irlandes,
  },
];

export type Coffee = typeof coffees[0];
