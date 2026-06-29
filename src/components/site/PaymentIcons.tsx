import { Leaf } from "lucide-react";

function IconBox({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div
      className="flex h-10 items-center justify-center rounded-sm border border-border bg-background px-3 transition-colors hover:border-gold"
      aria-label={label}
      title={label}
    >
      {children}
    </div>
  );
}

function IconSvg({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg className={className || "h-5 w-auto"} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {children}
    </svg>
  );
}

export function VisaIcon({ className }: { className?: string }) {
  return (
    <IconBox label="Visa">
      <IconSvg className={className}>
        <path d="M4 18L9 6L13 6L8 18H4Z" fill="currentColor" className="text-foreground" />
        <path d="M13 18L17 6L21 6L17 18H13Z" fill="currentColor" className="text-foreground" />
      </IconSvg>
    </IconBox>
  );
}

export function MastercardIcon({ className }: { className?: string }) {
  return (
    <IconBox label="Mastercard">
      <IconSvg className={className}>
        <circle cx="9" cy="12" r="6" fill="currentColor" className="text-foreground" opacity="0.85" />
        <circle cx="15" cy="12" r="6" fill="currentColor" className="text-gold" opacity="0.85" />
      </IconSvg>
    </IconBox>
  );
}

export function AmexIcon({ className }: { className?: string }) {
  return (
    <IconBox label="American Express">
      <IconSvg className={className}>
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" className="text-foreground" />
        <path d="M7 12H17M12 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-foreground" />
      </IconSvg>
    </IconBox>
  );
}

export function PaypalIcon({ className }: { className?: string }) {
  return (
    <IconBox label="PayPal">
      <IconSvg className={className}>
        <path
          d="M7 20L8 14H11.5C14.5 14 16.5 12.5 17 10C17.5 7.5 16 6 13 6H8L6 18H9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gold"
        />
        <path
          d="M11 18L12 12H15.5C18 12 19 10.5 19.5 9C20 7 18.5 6 16 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-foreground"
        />
      </IconSvg>
    </IconBox>
  );
}

export function KlarnaIcon({ className }: { className?: string }) {
  return (
    <IconBox label="Klarna">
      <IconSvg className={className}>
        <circle cx="12" cy="12" r="10" fill="currentColor" className="text-gold" opacity="0.15" />
        <path
          d="M8 8C8 8 10 12 12 12C14 12 16 8 16 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-foreground"
        />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" className="text-foreground" />
      </IconSvg>
    </IconBox>
  );
}

export function SofortIcon({ className }: { className?: string }) {
  return (
    <IconBox label="Sofort">
      <IconSvg className={className}>
        <path d="M4 12L12 4L12 9L20 9L20 15L12 15L12 20L4 12Z" fill="currentColor" className="text-foreground" />
      </IconSvg>
    </IconBox>
  );
}

export function SepaIcon({ className }: { className?: string }) {
  return (
    <IconBox label="SEPA-Lastschrift">
      <IconSvg className={className}>
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" className="text-foreground" />
        <path d="M7 12H13M10 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-foreground" />
        <path d="M16 10L18 12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold" />
      </IconSvg>
    </IconBox>
  );
}

export function ApplePayIcon({ className }: { className?: string }) {
  return (
    <IconBox label="Apple Pay">
      <IconSvg className={className}>
        <path
          d="M15.5 6C16.5 6 17.5 6.5 18 7.5C17 8 16.5 9 16.5 10C16.5 11.5 17.5 12.5 19 12.5C18.8 14 17.8 15.5 16.5 15.5C15.5 15.5 15 15 14 15C13 15 12.5 15.5 11.5 15.5C9.5 15.5 8 12.8 8 10.5C8 8 10 6 12 6C13 6 13.8 6.5 14.5 6.5C15.2 6.5 15.9 6 15.5 6Z"
          fill="currentColor"
          className="text-foreground"
        />
        <path d="M15 3.5C15.5 3 16.5 2.5 17.2 2.5C17.5 2.5 17.5 3.5 17 4.5C16.5 5.5 15.5 6 15 6C14.5 5 14.5 4 15 3.5Z" fill="currentColor" className="text-foreground" />
      </IconSvg>
    </IconBox>
  );
}

export function GooglePayIcon({ className }: { className?: string }) {
  return (
    <IconBox label="Google Pay">
      <IconSvg className={className}>
        <path d="M21 12C21 15.5 18 18 12 18C7 18 3 15 3 12C3 9 7 6 12 6C17 6 21 8.5 21 12Z" stroke="currentColor" strokeWidth="2" className="text-foreground" />
        <path d="M12 6V12" stroke="currentColor" strokeWidth="2" className="text-foreground" />
        <path d="M12 12L18 9" stroke="currentColor" strokeWidth="2" className="text-gold" />
        <path d="M12 12L16 17" stroke="currentColor" strokeWidth="2" className="text-foreground" opacity="0.6" />
      </IconSvg>
    </IconBox>
  );
}

export function StripeIcon({ className }: { className?: string }) {
  return (
    <IconBox label="Stripe">
      <IconSvg className={className}>
        <path d="M5 12C5 8 7 6 10 6H16C19 6 21 8 21 12C21 16 19 18 16 18H10C7 18 5 16 5 12Z" stroke="currentColor" strokeWidth="2" className="text-foreground" />
        <path d="M8 10H16M8 14H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-foreground" />
      </IconSvg>
    </IconBox>
  );
}

export function DhlIcon({ className }: { className?: string }) {
  return (
    <IconBox label="DHL">
      <IconSvg className={className}>
        <path d="M4 8L12 4L20 8V16L12 20L4 16V8Z" stroke="currentColor" strokeWidth="2" className="text-foreground" />
        <path d="M12 20V12" stroke="currentColor" strokeWidth="2" className="text-gold" />
        <path d="M4 8L12 12L20 8" stroke="currentColor" strokeWidth="2" className="text-foreground" />
      </IconSvg>
    </IconBox>
  );
}

export function DpdIcon({ className }: { className?: string }) {
  return (
    <IconBox label="DPD">
      <IconSvg className={className}>
        <rect x="4" y="6" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="2" className="text-foreground" />
        <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gold" />
      </IconSvg>
    </IconBox>
  );
}

export function KlimaneutralIcon({ className }: { className?: string }) {
  return (
    <IconBox label="Klimaneutraler Versand">
      <Leaf className={className || "h-5 w-5 text-foreground"} aria-hidden="true" />
    </IconBox>
  );
}

export function PaymentMethodLogos() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <VisaIcon />
      <MastercardIcon />
      <AmexIcon />
      <PaypalIcon />
      <KlarnaIcon />
      <SofortIcon />
      <SepaIcon />
      <ApplePayIcon />
      <GooglePayIcon />
      <StripeIcon />
    </div>
  );
}

export function ShippingLogos() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <DhlIcon />
      <DpdIcon />
      <KlimaneutralIcon />
    </div>
  );
}
