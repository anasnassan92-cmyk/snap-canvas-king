import visa from "@/assets/lam/icons/visa.svg";
import mastercard from "@/assets/lam/icons/mastercard.svg";
import amex from "@/assets/lam/icons/americanexpress.svg";
import paypal from "@/assets/lam/icons/paypal.svg";
import klarna from "@/assets/lam/icons/klarna.svg";
import applepay from "@/assets/lam/icons/applepay.svg";
import googlepay from "@/assets/lam/icons/googlepay.svg";
import stripe from "@/assets/lam/icons/stripe.svg";
import dhl from "@/assets/lam/icons/dhl.svg";

type Tile = { label: string; src: string; tint?: string };

function Badge({ label, src, tint }: Tile) {
  return (
    <div
      title={label}
      aria-label={label}
      className="flex h-10 w-16 items-center justify-center rounded-md border border-border bg-white shadow-sm"
    >
      <img src={src} alt={label} className="h-5 w-auto max-w-[80%] object-contain" style={tint ? { filter: "none", color: tint } : undefined} />
    </div>
  );
}

const PAYMENTS: Tile[] = [
  { label: "Visa", src: visa },
  { label: "Mastercard", src: mastercard },
  { label: "American Express", src: amex },
  { label: "PayPal", src: paypal },
  { label: "Klarna", src: klarna },
  { label: "Apple Pay", src: applepay },
  { label: "Google Pay", src: googlepay },
  { label: "Stripe", src: stripe },
];

const SHIPPING: Tile[] = [{ label: "DHL", src: dhl }];

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
