export type Rum = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  character: string;
  age: string;
  type: string;
  abv: string;
  nose: string;
  palate: string;
  finish: string;
  pairings: string;
  tags: string[];
  color: string;
  bgAccent: string;
  bottleImage: string;
};

export const rums: Rum[] = [
  {
    id: "pex-gold",
    name: "PEX GOLD",
    tagline: "The one that started it all.",
    description: "Aged 3 years in American oak. Notes of vanilla, toasted caramel, and a finish that overstays its welcome in the best possible way.",
    character: "The Charmer",
    age: "3 Years Aged",
    type: "Gold Rum",
    abv: "40%",
    nose: "Vanilla, Caramel, Dried Mango",
    palate: "Toffee, Oak Spice, Coconut",
    finish: "Long, Warm, Smooth",
    pairings: "Coconut water, lime, ice",
    tags: ["SMOOTH", "AGED"],
    color: "#C47A2B",
    bgAccent: "#3D2200",
    bottleImage: "https://ik.imagekit.io/gavin/rum/gold.png"
  },
  {
    id: "pex-dark",
    name: "PEX DARK",
    tagline: "For those who prefer their rum like their thoughts.",
    description: "Five years. Double aged. Molasses-forward with a deep smokiness that demands you sit down and think about your choices.",
    character: "The Brooder",
    age: "5 Years Aged",
    type: "Dark Rum",
    abv: "43%",
    nose: "Dark Molasses, Tobacco, Burnt Toffee",
    palate: "Dark Chocolate, Coffee, Allspice",
    finish: "Bold, Smoky, Forever Long",
    pairings: "Cola, bitter orange, neat",
    tags: ["BOLD", "SMOKY"],
    color: "#2A0A00",
    bgAccent: "#1A0800",
    bottleImage: "https://ik.imagekit.io/gavin/rum/dark.png"
  },
  {
    id: "pex-spiced",
    name: "PEX SPICED",
    tagline: "Because life needs more cinnamon.",
    description: "Infused with 7 real spices including star anise, clove, cinnamon, and something we refuse to reveal. Warm chaos in a bottle.",
    character: "The Wildcard",
    age: "2 Years + Spiced",
    type: "Spiced Rum",
    abv: "38%",
    nose: "Cinnamon, Star Anise, Vanilla Pod",
    palate: "Clove, Warm Spice, Citrus Peel",
    finish: "Tingly, Aromatic, Surprising",
    pairings: "Ginger beer, apple juice, the unexpected",
    tags: ["SPICED", "WILD"],
    color: "#8B2500",
    bgAccent: "#2D1000",
    bottleImage: "https://ik.imagekit.io/gavin/rum/spiced.png"
  },
  {
    id: "pex-white",
    name: "PEX WHITE",
    tagline: "Don't let the clarity fool you.",
    description: "Crystal clear, unaged, and alarmingly complex. Pure cane spirit at its most honest — and most dangerous.",
    character: "The Minimalist",
    age: "Unaged",
    type: "White Rum",
    abv: "40%",
    nose: "Fresh Cane, Grassy, Floral",
    palate: "Clean Sugar, Light Citrus, Crisp",
    finish: "Clean, Refreshing, Deceptively Strong",
    pairings: "Mojito, daiquiri, everything",
    tags: ["CLEAN", "CRISP"],
    color: "#E8E0D0",
    bgAccent: "#1A1000",
    bottleImage: "https://ik.imagekit.io/gavin/rum/white.png"
  },
  {
    id: "pex-coconut",
    name: "PEX COCONUT",
    tagline: "The beach you can't stop visiting.",
    description: "Real coconut infusion. Not the artificial stuff. The kind that makes you forget your responsibilities for approximately one glass.",
    character: "The Escapist",
    age: "2 Years + Infused",
    type: "Flavoured Rum",
    abv: "35%",
    nose: "Fresh Coconut, Tropical Fruit, Cream",
    palate: "Coconut Milk, Light Vanilla, Pineapple",
    finish: "Sweet, Tropical, Lingering",
    pairings: "Pineapple juice, soda, sunshine",
    tags: ["TROPICAL", "SWEET"],
    color: "#E8C840",
    bgAccent: "#1A1200",
    bottleImage: "https://ik.imagekit.io/gavin/rum/coconut.png"
  },
  {
    id: "pex-reserve",
    name: "PEX RESERVE",
    tagline: "The one you save for something.",
    description: "Eight years. Single barrel. 312 bottles ever made. If you find it, you'll know what to do. Take your time.",
    character: "The Legend",
    age: "8 Years Single Barrel",
    type: "Premium Reserve",
    abv: "46%",
    nose: "Rich Oak, Dried Fruits, Dark Honey",
    palate: "Leather, Dark Toffee, Complex Spice",
    finish: "Infinite. Seriously.",
    pairings: "Neat. Only neat.",
    tags: ["PREMIUM", "RARE"],
    color: "#7A4A00",
    bgAccent: "#2D1A00",
    bottleImage: "https://ik.imagekit.io/gavin/rum/reserve.png"
  }
];
