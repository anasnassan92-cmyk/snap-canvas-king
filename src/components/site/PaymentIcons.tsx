import {
  SiVisa,
  SiMastercard,
  SiAmericanexpress,
  SiPaypal,
  SiKlarna,
  SiStripe,
  SiApplepay,
  SiGooglepay,
  SiDhl,
} from "react-icons/si";
import { FaLeaf } from "react-icons/fa";

type Tile = {
  label: string;
  icon: React.ReactNode;
  /** brand color for the icon */
  color?: string;
};

function Badge({ label, icon }: Tile) {
  return (
    <div
      title={label}
      aria-label={label}
      className="flex h-10 w-16 items-center justify-center rounded-md border border-border bg-white shadow-sm"
    >
      {icon}
    </div>
  );
}

const PAYMENTS: Tile[] = [
  { label: "Visa", icon: <SiVisa size={34} color="#1A1F71" /> },
  { label: "Mastercard", icon: <SiMastercard size={30} color="#EB001B" /> },
  { label: "American Express", icon: <SiAmericanexpress size={30} color="#2E77BC" /> },
  { label: "PayPal", icon: <SiPaypal size={22} color="#003087" /> },
  { label: "Klarna", icon: <SiKlarna size={28} color="#FFA8CD" /> },
  { label: "Apple Pay", icon: <SiApplepay size={32} color="#000000" /> },
  { label: "Google Pay", icon: <SiGooglepay size={32} color="#5F6368" /> },
  { label: "SEPA", icon: <span className="text-[11px] font-bold tracking-wide text-[#10298E]">SEPA</span> },
  { label: "Stripe", icon: <SiStripe size={28} color="#635BFF" /> },
];

const SHIPPING: Tile[] = [
  { label: "DHL", icon: <SiDhl size={34} color="#D40511" /> },
  { label: "DPD", icon: <span className="text-[11px] font-extrabold tracking-wider text-[#DC0032]">DPD</span> },
  { label: "Klimaneutraler Versand", icon: <FaLeaf size={20} color="#2E7D32" /> },
];

export function PaymentMethodLogos() {
  return (
    <div className="flex flex-wrap gap-2">
      {PAYMENTS.map((p) => (
        <Badge key={p.label} {...p} />
      ))}
    </div>
  );
}

export function ShippingLogos() {
  return (
    <div className="flex flex-wrap gap-2">
      {SHIPPING.map((p) => (
        <Badge key={p.label} {...p} />
      ))}
    </div>
  );
}
