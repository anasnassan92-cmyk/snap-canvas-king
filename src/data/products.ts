import imagination from "@/assets/lam/products/Louis_Vuitton_Imagination.png.asset.json";
import rouge540 from "@/assets/lam/products/Baccarat_Rouge_540.png.asset.json";
import naxos from "@/assets/lam/products/Xerjoff_Naxos.png.asset.json";
import althair from "@/assets/lam/products/Parfums_de_Marly_Althair.png.asset.json";
import blondeAmber from "@/assets/lam/products/Clive_Christian_Blonde_Amber.png.asset.json";
import kirke from "@/assets/lam/products/Tiziana_Terenzi_Kirke.png.asset.json";
import angelShare from "@/assets/lam/products/Killian_Angel_Share.png.asset.json";
import blueTalisman from "@/assets/lam/products/Ex_Nihilo_Blue_Talisman.png.asset.json";
import reflection from "@/assets/lam/products/Amouage_Reflection_Men.png.asset.json";
import sideEffect from "@/assets/lam/products/Initio_Side_Effect.png.asset.json";

export type Size = { ml: number; price: number };

export type Product = {
  slug: string;
  name: string;
  inspired: string;
  family: string;
  image: string;
  sizes: Size[];
};

// Fixed prices across all products
const FIXED_SIZES: Size[] = [
  { ml: 8, price: 15.99 },
  { ml: 30, price: 29.9 },
  { ml: 50, price: 44.9 },
  { ml: 100, price: 69.9 },
];


export const PRODUCTS: Product[] = [
  {
    slug: "imagination",
    name: "Imagination",
    inspired: "Inspiriert von Louis Vuitton Imagination",
    family: "Holzig · Würzig",
    image: imagination.url,
    sizes: FIXED_SIZES,
  },
  {
    slug: "rouge-540",
    name: "Rouge 540",
    inspired: "Inspiriert von Baccarat Rouge 540",
    family: "Amber · Floral",
    image: rouge540.url,
    sizes: FIXED_SIZES,
  },
  {
    slug: "naxos",
    name: "Naxos",
    inspired: "Inspiriert von Xerjoff Naxos",
    family: "Tabak · Honig",
    image: naxos.url,
    sizes: FIXED_SIZES,
  },
  {
    slug: "althair",
    name: "Althaïr",
    inspired: "Inspiriert von Parfums de Marly Althaïr",
    family: "Vanille · Mandel",
    image: althair.url,
    sizes: FIXED_SIZES,
  },
  {
    slug: "blonde-amber",
    name: "Blonde Amber",
    inspired: "Inspiriert von Clive Christian Blonde Amber",
    family: "Amber · Leder",
    image: blondeAmber.url,
    sizes: FIXED_SIZES,
  },
  {
    slug: "kirke",
    name: "Kirke",
    inspired: "Inspiriert von Tiziana Terenzi Kirke",
    family: "Frucht · Patchouli",
    image: kirke.url,
    sizes: FIXED_SIZES,
  },
  {
    slug: "angels-share",
    name: "Angels' Share",
    inspired: "Inspiriert von Kilian Angels' Share",
    family: "Cognac · Tonka",
    image: angelShare.url,
    sizes: FIXED_SIZES,
  },
  {
    slug: "blue-talisman",
    name: "Blue Talisman",
    inspired: "Inspiriert von Ex Nihilo Blue Talisman",
    family: "Aquatisch · Iris",
    image: blueTalisman.url,
    sizes: FIXED_SIZES,
  },
  {
    slug: "reflection",
    name: "Reflection",
    inspired: "Inspiriert von Amouage Reflection Man",
    family: "Floral · Holzig",
    image: reflection.url,
    sizes: FIXED_SIZES,
  },
  {
    slug: "side-effect",
    name: "Side Effect",
    inspired: "Inspiriert von Initio Side Effect",
    family: "Tabak · Vanille",
    image: sideEffect.url,
    sizes: FIXED_SIZES,
  },
];

export const EUR = (n: number) =>
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(n);
