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

import imaginationCover from "@/assets/lam/covers/Louis_Vuitton_Imagination_cover.png.asset.json";
import rouge540Cover from "@/assets/lam/covers/Baccarat_Rouge_540_cover.png.asset.json";
import naxosCover from "@/assets/lam/covers/Xerjoff_Naxos_cover.png.asset.json";
import althairCover from "@/assets/lam/covers/Parfums_de_Marly_Althair_cover.png.asset.json";
import blondeAmberCover from "@/assets/lam/covers/Clive_Christian_Blonde_Amber_cover.png.asset.json";
import kirkeCover from "@/assets/lam/covers/Tiziana_Terenzi_Kirke_cover.png.asset.json";
import angelShareCover from "@/assets/lam/covers/Killian_Angel_Share_cover.png.asset.json";
import blueTalismanCover from "@/assets/lam/covers/Ex_Nihilo_Blue_Talisman_cover.png.asset.json";
import reflectionCover from "@/assets/lam/covers/Amouage_Reflection_Men_cover.png.asset.json";
import sideEffectCover from "@/assets/lam/covers/Initio_Side_Effect_cover.png.asset.json";

export type Size = { ml: number; price: number };

export type Product = {
  slug: string;
  /** Position in the collection, e.g. "01" */
  no: string;
  name: string;
  inspired: string;
  family: string;
  image: string;
  coverImage?: string;
  sizes: Size[];
  /** Duftrichtung */
  direction: string;
  top?: string[];
  heart?: string[];
  base?: string[];
  /** Additional remark shown below the base notes */
  baseNote?: string;
  /** Used when the original house publishes accords instead of a pyramid */
  accords?: { label: string; notes: string[]; note?: string };
  description: string;
  character: string[];
  idealFor: string[];
};

/** Regular bottle sizes — identical for every fragrance. */
export const FIXED_SIZES: Size[] = [
  { ml: 30, price: 34.9 },
  { ml: 50, price: 49.9 },
  { ml: 100, price: 79.9 },
];

export const PRODUCTS: Product[] = [
  {
    slug: "naxos",
    no: "01",
    name: "Naxos",
    inspired: "Inspiriert von Xerjoff Naxos",
    family: "Tabak · Honig",
    image: naxos.url,
    coverImage: naxosCover.url,
    sizes: FIXED_SIZES,
    direction: "Aromatisch · Süß · Würzig · Tabak",
    top: ["Zitrone", "Bergamotte", "Lavendel", "Weihrauch"],
    heart: ["Honig", "Zimt", "Jasmin Sambac", "Kaschmir"],
    base: ["Tabakblatt", "Vanille", "Tonkabohne"],
    description:
      "Ein kraftvoller Kontrast aus Frische und Wärme. Spritzige Zitrusnoten und aromatischer Lavendel eröffnen den Duft, bevor süßer Honig und würziger Zimt für eine intensive, elegante Tiefe sorgen. Im Ausklang treffen Tabakblatt, cremige Vanille und Tonkabohne aufeinander und hinterlassen eine warme, selbstbewusste Signatur.",
    character: ["Elegant", "Selbstbewusst", "Warm", "Verführerisch"],
    idealFor: ["Abend", "Date Night", "Herbst & Winter"],
  },
  {
    slug: "reflection",
    no: "02",
    name: "Reflection",
    inspired: "Inspiriert von Amouage Reflection Man",
    family: "Floral · Holzig",
    image: reflection.url,
    coverImage: reflectionCover.url,
    sizes: FIXED_SIZES,
    direction: "Frisch · Floral · Holzig · Elegant",
    top: ["Rosmarin", "Roter Pfeffer", "Bitterorangenblätter"],
    heart: ["Neroli", "Iris", "Jasmin", "Ylang-Ylang"],
    base: ["Vetiver", "Patchouli", "Sandelholz", "Zedernholz"],
    description:
      "Klar, gepflegt und außergewöhnlich elegant. Aromatischer Rosmarin und eine feine Pfeffernote sorgen für einen frischen Auftakt. Weiße Blüten und Iris verleihen dem Herzen einen edlen, fast cremigen Charakter. Sandelholz, Vetiver und Zedernholz runden die Komposition warm und maskulin ab.",
    character: ["Clean", "Elegant", "Gepflegt", "Souverän"],
    idealFor: ["Alltag", "Business", "Hochzeit", "Frühling & Sommer"],
  },
  {
    slug: "imagination",
    no: "03",
    name: "Imagination",
    inspired: "Inspiriert von Louis Vuitton Imagination",
    family: "Zitrisch · Amber",
    image: imagination.url,
    coverImage: imaginationCover.url,
    sizes: FIXED_SIZES,
    direction: "Zitrisch · Frisch · Tee · Amber",
    accords: {
      label: "Hauptnoten",
      notes: ["Bergamotte", "Schwarzer Tee", "Ambroxan/Amber"],
      note: "Das Original-Haus veröffentlicht keine klassische Kopf-Herz-Basis-Pyramide, sondern nennt insbesondere diese Hauptnoten.",
    },
    description:
      "Eine moderne Verbindung aus strahlender Frische und warmer Tiefe. Bergamotte bringt einen klaren, lebendigen Auftakt, während schwarzer Tee dem Duft einen raffinierten und leicht rauchigen Charakter verleiht. Ein moderner Amber-Akkord sorgt für Wärme, Ausstrahlung und einen eleganten Nachhall.",
    character: ["Frisch", "Modern", "Luxuriös", "Clean"],
    idealFor: ["Alltag", "Business", "Urlaub", "Frühling & Sommer"],
  },
  {
    slug: "althair",
    no: "04",
    name: "Althaïr",
    inspired: "Inspiriert von Parfums de Marly Althaïr",
    family: "Vanille · Mandel",
    image: althair.url,
    coverImage: althairCover.url,
    sizes: FIXED_SIZES,
    direction: "Vanillig · Gourmand · Würzig · Holzig",
    top: ["Bergamotte", "Mandarine", "Elemi"],
    heart: ["Orangenblüte", "Zimt", "Kardamom"],
    base: ["Bourbon-Vanille", "Guajakholz", "Praline"],
    description:
      "Cremige Vanille trifft auf warme Gewürze und eine elegante Frische. Bergamotte und Mandarine eröffnen lebendig, bevor Orangenblüte, Zimt und Kardamom dem Duft seinen verführerischen Charakter verleihen. Bourbon-Vanille, Praline und Guajakholz sorgen schließlich für einen cremigen, warmen und lang anhaltenden Abschluss.",
    character: ["Cremig", "Süß", "Elegant", "Verführerisch"],
    idealFor: ["Date Night", "Abend", "Herbst & Winter"],
  },
  {
    slug: "angels-share",
    no: "05",
    name: "Angel's Share",
    inspired: "Inspiriert von Kilian Angel's Share",
    family: "Cognac · Tonka",
    image: angelShare.url,
    coverImage: angelShareCover.url,
    sizes: FIXED_SIZES,
    direction: "Gourmand · Süß · Würzig · Holzig",
    top: ["Cognac"],
    heart: ["Eichenholz", "Zimt"],
    base: ["Tonkabohne", "Sandelholz"],
    baseNote: "Ergänzend prägen auch Praline und Vanille den lang anhaltenden Ausklang.",
    description:
      "Opulent, warm und unverwechselbar. Ein intensiver Cognac-Akkord eröffnet die Komposition und trifft anschließend auf würzigen Zimt und Eichenholz. Tonkabohne, Sandelholz, Vanille und gourmandige Nuancen verleihen dem Duft eine cremige Süße und einen luxuriösen, beinahe süchtig machenden Charakter.",
    character: ["Warm", "Süß", "Sinnlich", "Opulent"],
    idealFor: ["Abend", "Date Night", "Herbst & Winter"],
  },
  {
    slug: "blonde-amber",
    no: "06",
    name: "Blonde Amber",
    inspired: "Inspiriert von Clive Christian Blonde Amber",
    family: "Amber · Leder",
    image: blondeAmber.url,
    coverImage: blondeAmberCover.url,
    sizes: FIXED_SIZES,
    direction: "Amber · Würzig · Süß · Holzig",
    top: ["Rum", "Weihrauch", "Bitterorange", "Kardamom", "Rosa Pfeffer", "Ingwer", "Bergamotte", "Grapefruit"],
    heart: ["Trockenfrüchte", "Weißer Tabak", "Sandelholz", "Safran", "Tuberose", "Osmanthus", "Iris", "Jasmin"],
    base: ["Tonkabohne", "Vanille", "Myrrhe", "Labdanum", "Patchouli", "Zeder", "Moschus", "Vetiver"],
    description:
      "Der opulenteste Duft der Kollektion. Würziger Rum, Weihrauch und frische Zitrusnoten eröffnen kraftvoll, bevor Trockenfrüchte, Tabak, Safran und edle Blüten eine außergewöhnlich vielschichtige Mitte bilden. Vanille, Tonkabohne, Myrrhe und warme Hölzer sorgen für einen tiefen, luxuriösen Drydown.",
    character: ["Opulent", "Luxuriös", "Intensiv", "Sinnlich"],
    idealFor: ["Abend", "Besondere Anlässe", "Herbst & Winter"],
  },
  {
    slug: "blue-talisman",
    no: "07",
    name: "Blue Talisman",
    inspired: "Inspiriert von Ex Nihilo Blue Talisman",
    family: "Aquatisch · Moschus",
    image: blueTalisman.url,
    coverImage: blueTalismanCover.url,
    sizes: FIXED_SIZES,
    direction: "Frisch · Zitrisch · Aromatisch · Moschus",
    top: ["Bergamotte", "Mandarine", "Ingwer"],
    heart: ["Orangenblüte", "Neroli", "Hedione"],
    base: ["Ambroxan/Ambrofix", "Moschus", "Akigalawood"],
    description:
      "Leuchtend, frisch und modern. Saftige Zitrusnoten treffen im Auftakt auf die leichte Schärfe von Ingwer. Ein luftiges Herz aus Orangenblüte und Neroli verleiht dem Duft seine elegante Sauberkeit. Moschus, moderne Ambernoten und holzige Akzente schaffen einen klaren und lang anhaltenden Abschluss.",
    character: ["Clean", "Frisch", "Modern", "Energetisch"],
    idealFor: ["Alltag", "Sommer", "Urlaub", "Sportlich-elegante Looks"],
  },
  {
    slug: "side-effect",
    no: "08",
    name: "Side Effect",
    inspired: "Inspiriert von Initio Side Effect",
    family: "Tabak · Vanille",
    image: sideEffect.url,
    coverImage: sideEffectCover.url,
    sizes: FIXED_SIZES,
    direction: "Süß · Würzig · Rum · Tabak",
    top: ["Rum", "Himbeere"],
    heart: ["Zimt", "Safran", "Tabak", "Hedione"],
    base: ["Vanille", "Leder", "Sandelholz", "Zedernholz"],
    description:
      "Dunkel, intensiv und kompromisslos verführerisch. Rum und fruchtige Akzente sorgen für einen markanten Auftakt. Im Herzen treffen warmer Zimt, Safran und Tabak aufeinander und verleihen dem Duft seine sinnliche Tiefe. Vanille, Leder und edle Hölzer hinterlassen eine warme und kraftvolle Signatur.",
    character: ["Sexy", "Intensiv", "Dunkel", "Selbstbewusst"],
    idealFor: ["Date Night", "Nachtleben", "Herbst & Winter"],
  },
  {
    slug: "rouge-540",
    no: "09",
    name: "Rouge 540",
    inspired: "Inspiriert von Baccarat Rouge 540",
    family: "Amber · Floral",
    image: rouge540.url,
    coverImage: rouge540Cover.url,
    sizes: FIXED_SIZES,
    direction: "Amber · Holzig · Süß · Floral",
    accords: {
      label: "Duftakkorde",
      notes: ["Safran", "Jasmin", "Amber/Ambroxan", "Gourmand-Akkord", "Holzige Noten"],
      note: "Das Original-Haus beschreibt den Duft über drei Duftwelten statt über eine klassische Pyramide: einen mineralisch-amberartigen Akkord, Safran mit gourmandiger Süße sowie luftige Jasminfacetten.",
    },
    description:
      "Strahlend, elegant und geheimnisvoll. Würziger Safran verbindet sich mit luftigen Jasminnuancen und einer feinen gourmandigen Süße. Ein trockener, mineralischer Ambercharakter und warme Hölzer verleihen dem Duft seine unverwechselbare Tiefe und eine Signatur, die lange in Erinnerung bleibt.",
    character: ["Luxuriös", "Strahlend", "Sinnlich", "Unisex"],
    idealFor: ["Alltag & Abend", "Besondere Anlässe", "Ganzjährig"],
  },
  {
    slug: "kirke",
    no: "10",
    name: "Kirke",
    inspired: "Inspiriert von Tiziana Terenzi Kirke",
    family: "Frucht · Moschus",
    image: kirke.url,
    coverImage: kirkeCover.url,
    sizes: FIXED_SIZES,
    direction: "Fruchtig · Süß · Floral · Moschus",
    top: ["Passionsfrucht", "Pfirsich", "Himbeere", "Cassis", "Birne", "Warmer Sand"],
    heart: ["Maiglöckchen"],
    base: ["Heliotrop", "Sandelholz", "Vanille", "Patchouli", "Moschus"],
    description:
      "Ein intensiver Fruchtcocktail mit einer warmen, sinnlichen Basis. Passionsfrucht, Pfirsich, Himbeere und Birne sorgen für einen sofort auffälligen Auftakt. Maiglöckchen bringt eine feine florale Leichtigkeit, bevor Vanille, Moschus, Sandelholz und Patchouli den Duft weich und lang anhaltend abrunden.",
    character: ["Fruchtig", "Auffällig", "Süß", "Sinnlich"],
    idealFor: ["Freizeit", "Abend", "Frühling & Sommer"],
  },
];

/** Discovery Box — 6 × 8 ML, freely combinable from the 10 signatures. */
export const DISCOVERY_BOX = {
  slug: "discovery-box",
  name: "Discovery Box",
  subtitle: "6 × 8 ML — frei kombinierbar",
  price: 44.9,
  slots: 6,
  ml: 8,
  voucher:
    "Discovery Box kaufen & 10 € auf deinen nächsten Duft sichern. Einlösbar ab 49,90 € Warenwert auf reguläre Einzelparfums. Nicht mit Bundles oder anderen Rabattaktionen kombinierbar.",
};

/** Bundle info shown on product pages. */
export const BUNDLE_INFO = "2 × 50 ML – 89,90 € · 3 × 50 ML – 99,90 € (zeitweise verfügbar)";

/** Bestseller slugs used for the "Mix Bestseller" preset. */
export const BESTSELLERS = [
  "naxos",
  "rouge-540",
  "angels-share",
  "althair",
  "imagination",
  "side-effect",
];

export type Bundle = {
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  compareAt: number;
  slots: number;
  ml: number;
  soldOut?: boolean;
};

export const BUNDLES: Bundle[] = [
  {
    slug: "bundle-2x50",
    name: "Duo Bundle",
    subtitle: "2 × 50 ML — frei kombinierbar",
    price: 89.9,
    compareAt: 99.8,
    slots: 2,
    ml: 50,
  },
  {
    slug: "bundle-3x50",
    name: "Trio Bundle",
    subtitle: "3 × 50 ML — frei kombinierbar",
    price: 99.9,
    compareAt: 149.7,
    slots: 3,
    ml: 50,
    soldOut: true,
  },
];

export const SHIPPING_RATES = [
  { country: "Deutschland", price: 4.9, freeFrom: 49.9 },
  { country: "Österreich", price: 9.9 },
  { country: "Schweiz", price: 14.9 },
];

export const SOCIALS = {
  instagram: "https://www.instagram.com/lamisent",
  tiktok: "https://www.tiktok.com/@lamisent.com",
};

export const EUR = (n: number) =>
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(n);
