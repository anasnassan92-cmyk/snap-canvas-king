import { Leaf } from "lucide-react";

function IconBox({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div
      className="flex h-11 items-center justify-center rounded-sm border border-border bg-background px-3"
      aria-label={label}
      title={label}
    >
      {children}
    </div>
  );
}

export function VisaIcon({ className }: { className?: string }) {
  return (
    <IconBox label="Visa">
      <svg className={className || "h-4 w-auto"} viewBox="0 0 48 16" fill="none" aria-hidden="true">
        <path
          d="M18.1 1.7L15.4 14.3H12.1L14.8 1.7H18.1ZM29.8 9.3C30.7 8.8 31.2 7.8 31 6.8C30.6 5.1 28.6 4.5 26.8 4.5C24.2 4.5 22.5 5.9 22.5 5.9L23.9 8.1C23.9 8.1 25.2 7.2 26.7 7.2C27.5 7.2 28.1 7.5 28.1 8.1C28.1 8.7 27.5 8.9 26.7 9L26.1 9.1C23.7 9.4 22.3 10.7 22.3 12.5C22.3 14.4 24 15.4 26.1 15.4C27.8 15.4 29.1 14.6 29.9 13.7L30.6 14.3H33.4L31.9 9.3C31.9 9.3 30.8 9.8 29.8 9.3ZM27.4 12.3C26.7 12.3 26.2 11.9 26.2 11.3C26.2 10.6 26.9 10.1 28.1 9.9L28.7 9.8L28.5 10.7C28.1 11.7 27.7 12.3 27.4 12.3ZM40.3 4.8L38 14.3H34.8L37.1 4.8H40.3ZM45.2 4.8L44 10.3C43.7 11.5 43.6 12.4 43.6 13.2H43.6C43.4 12.4 43.1 11.5 42.6 10.3L40.7 4.8H37.3L41.3 14.3H44.6L47.8 4.8H45.2ZM8.3 4.8C6.9 4.5 5.3 4.6 3.9 5.3L2.5 7.6C3.7 6.9 5.1 6.6 6.5 6.8L0.8 14.3H4.1L9.3 4.8H8.3Z"
          fill="currentColor"
          className="text-[#1A1F71]"
        />
      </svg>
    </IconBox>
  );
}

export function MastercardIcon({ className }: { className?: string }) {
  return (
    <IconBox label="Mastercard">
      <svg className={className || "h-6 w-auto"} viewBox="0 0 48 30" fill="none" aria-hidden="true">
        <circle cx="17" cy="15" r="11" fill="#EB001B" />
        <circle cx="31" cy="15" r="11" fill="#F79E1B" />
        <path
          d="M24 7.5C26.6 9.6 28.2 12.6 28.2 15.9C28.2 19.2 26.6 22.2 24 24.3C21.4 22.2 19.8 19.2 19.8 15.9C19.8 12.6 21.4 9.6 24 7.5Z"
          fill="#FF5F00"
        />
      </svg>
    </IconBox>
  );
}

export function AmexIcon({ className }: { className?: string }) {
  return (
    <IconBox label="American Express">
      <svg className={className || "h-6 w-auto"} viewBox="0 0 48 30" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="44" height="22" rx="2" fill="#016FD0" />
        <path d="M2 15H46V17H2V15Z" fill="white" />
        <path d="M6 10H12L14 13L16 10H22L18 15L22 20H16L14 17L12 20H6L10 15L6 10Z" fill="#016FD0" />
        <path d="M25 10H30C32 10 33 11 33 13C33 14 32 15 31 15L34 20H29L27 16H27V20H23V10H25ZM27 14H29C29.5 14 30 13.5 30 13C30 12.5 29.5 12 29 12H27V14Z" fill="#016FD0" />
      </svg>
    </IconBox>
  );
}

export function PaypalIcon({ className }: { className?: string }) {
  return (
    <IconBox label="PayPal">
      <svg className={className || "h-5 w-auto"} viewBox="0 0 80 22" fill="none" aria-hidden="true">
        <path
          d="M27.6 1.5H20.1C19.5 1.5 19 1.9 18.9 2.5L16.1 18.6C16 19.1 16.4 19.5 16.9 19.5H20.6C21.2 19.5 21.7 19.1 21.8 18.5L22.6 13.7C22.7 13.1 23.2 12.7 23.8 12.7H25.6C30.4 12.7 33.1 10.4 33.9 5.9C34.2 3.7 33.9 2.1 33 1.2C31.9 0.1 30 0 27.6 0V1.5Z"
          fill="#003087"
        />
        <path
          d="M12.6 1.5H5.1C4.5 1.5 4 1.9 3.9 2.5L1.1 18.6C1 19.1 1.4 19.5 1.9 19.5H5.6C6.2 19.5 6.7 19.1 6.8 18.5L7.6 13.7C7.7 13.1 8.2 12.7 8.8 12.7H10.6C15.4 12.7 18.1 10.4 18.9 5.9C19.2 3.7 18.9 2.1 18 1.2C16.9 0.1 15 0 12.6 0V1.5Z"
          fill="#0070E0"
        />
        <path
          d="M50.1 6.5H46.7C46.2 6.5 45.7 6.9 45.6 7.4L45.4 8.5L45.1 8.1C44.3 7.2 42.9 6.8 41.2 6.8C37.2 6.8 33.7 10.1 33.1 14.5C32.8 16.5 33.3 18.4 34.4 19.7C35.4 20.9 36.9 21.4 38.7 21.4C41.7 21.4 43.3 19.4 43.3 19.4L43 20.6C42.9 21.1 43.3 21.5 43.8 21.5H46.7C47.3 21.5 47.8 21.1 47.9 20.5L50.3 7.6C50.5 7.1 50.1 6.5 50.1 6.5Z"
          fill="#003087"
        />
        <path
          d="M66.3 6.5H62.9C62.4 6.5 61.9 6.9 61.8 7.4L61.6 8.5L61.3 8.1C60.5 7.2 59.1 6.8 57.4 6.8C53.4 6.8 49.9 10.1 49.3 14.5C49 16.5 49.5 18.4 50.6 19.7C51.6 20.9 53.1 21.4 54.9 21.4C57.9 21.4 59.5 19.4 59.5 19.4L59.2 20.6C59.1 21.1 59.5 21.5 60 21.5H62.9C63.5 21.5 64 21.1 64.1 20.5L66.5 7.6C66.7 7.1 66.3 6.5 66.3 6.5Z"
          fill="#0070E0"
        />
        <path
          d="M75.9 6.8H72.9C71.8 6.8 70.8 7.2 70 7.9L64.8 12.9L62.6 15.4L61.2 7.5C61.1 7 60.6 6.6 60.1 6.6H56.7C56.2 6.6 55.8 7.1 55.9 7.6L58.5 20.8C58.6 21.2 58.9 21.5 59.3 21.5H61.8C62.2 21.5 62.6 21.2 62.7 20.8L63.2 18.1L65.8 21.1C66.4 21.8 67.2 22.2 68.1 22.2H71.3L71.9 20.8L73.5 21.3C74 21.5 74.5 21.6 75.1 21.6H77.9C78.5 21.6 79 21.1 78.9 20.5L78.1 15.8C78 15.2 77.5 14.8 76.9 14.8H75.9L76.5 11.5H77.6C78.2 11.5 78.7 11.1 78.8 10.5L79.5 7.4C79.6 6.8 79.2 6.3 78.6 6.3L75.9 6.8Z"
          fill="#003087"
        />
        <path
          d="M41.3 14.8C41.9 14.8 42.4 15 42.8 15.3C43.2 15.6 43.4 16.1 43.3 16.6C43.2 18.2 42 19.4 40.3 19.4C39.7 19.4 39.2 19.2 38.8 18.9C38.4 18.6 38.2 18.1 38.3 17.6C38.4 16 39.6 14.8 41.3 14.8Z"
          fill="#0070E0"
        />
        <path
          d="M57.5 14.8C58.1 14.8 58.6 15 59 15.3C59.4 15.6 59.6 16.1 59.5 16.6C59.4 18.2 58.2 19.4 56.5 19.4C55.9 19.4 55.4 19.2 55 18.9C54.6 18.6 54.4 18.1 54.5 17.6C54.6 16 55.8 14.8 57.5 14.8Z"
          fill="#003087"
        />
      </svg>
    </IconBox>
  );
}

export function KlarnaIcon({ className }: { className?: string }) {
  return (
    <IconBox label="Klarna">
      <svg className={className || "h-5 w-auto"} viewBox="0 0 80 24" fill="none" aria-hidden="true">
        <path
          d="M0 1.6C0 0.7 0.7 0 1.6 0H3.9C4.8 0 5.5 0.7 5.5 1.6V22.4C5.5 23.3 4.8 24 3.9 24H1.6C0.7 24 0 23.3 0 22.4V1.6Z"
          fill="#0B0517"
        />
        <path
          d="M9.5 0C10.4 0 11.1 0.7 11.1 1.6V22.4C11.1 23.3 10.4 24 9.5 24H7.2C6.3 24 5.6 23.3 5.6 22.4V1.6C5.6 0.7 6.3 0 7.2 0H9.5Z"
          fill="#0B0517"
        />
        <path
          d="M13.6 0H15.9C16.8 0 17.5 0.7 17.5 1.6V22.4C17.5 23.3 16.8 24 15.9 24H13.6C12.7 24 12 23.3 12 22.4V1.6C12 0.7 12.7 0 13.6 0Z"
          fill="#0B0517"
        />
        <path
          d="M22.8 8.1L25.5 1.6C25.9 0.7 26.7 0 27.7 0H30.5C31.4 0 32.2 0.7 32.6 1.6L37.1 12.4L41.6 1.6C42 0.7 42.8 0 43.7 0H46.5C47.5 0 48.3 0.7 48.6 1.6L51.3 8.1L53.9 1.6C54.3 0.7 55.1 0 56.1 0H58.8C59.7 0 60.3 0.7 60 1.6L55.5 13.5L55.6 13.8C56.9 17 59.8 19.2 63.2 19.2H63.8C64.7 19.2 65.4 19.9 65.4 20.8V22.4C65.4 23.3 64.7 24 63.8 24H62.8C57.5 24 53 20.4 51.3 15.5L49 9.1L46.7 15.4C45 20.4 40.4 24 35.1 24H34.1C33.2 24 32.5 23.3 32.5 22.4V20.8C32.5 19.9 33.2 19.2 34.1 19.2H34.7C38.1 19.2 41 17 42.3 13.8L42.4 13.5L37.9 1.6C37.6 0.7 38.2 0 39.1 0H41.9C42.8 0 43.6 0.7 44 1.6L46.7 8.1L49 1.6C49.4 0.7 50.2 0 51.1 0H53.9C54.8 0 55.6 0.7 56 1.6L58.7 8.1"
          fill="#0B0517"
        />
        <path
          d="M68.2 0H70.5C71.4 0 72.1 0.7 72.1 1.6V22.4C72.1 23.3 71.4 24 70.5 24H68.2C67.3 24 66.6 23.3 66.6 22.4V1.6C66.6 0.7 67.3 0 68.2 0Z"
          fill="#FFB3C7"
        />
        <path
          d="M78.8 14.2C80.4 14.2 80.4 16.8 78.8 16.8C77.2 16.8 77.2 14.2 78.8 14.2Z"
          fill="#0B0517"
        />
      </svg>
    </IconBox>
  );
}

export function SofortIcon({ className }: { className?: string }) {
  return (
    <IconBox label="Sofort / Klarna Sofort">
      <svg className={className || "h-5 w-auto"} viewBox="0 0 80 22" fill="none" aria-hidden="true">
        <path d="M0 4.2H8.5L0 17.8V4.2Z" fill="#EF7D00" />
        <path d="M8.5 17.8H0L8.5 4.2V17.8Z" fill="#E21A23" />
        <path d="M18 0H22.5V22H18V0Z" fill="#5A5A5A" />
        <path d="M28 4H32.5V22H28V4Z" fill="#5A5A5A" />
        <path d="M28 0H32.5V3H28V0Z" fill="#5A5A5A" />
        <path d="M39 0H43.5V22H39V0Z" fill="#5A5A5A" />
        <path d="M51 8.5C51 6 49.5 4.5 47 4.5C43.5 4.5 41 7 41 11C41 15 43.5 17.5 47 17.5C49.5 17.5 51 16 51 13.5H47V9.5H55.5V22H51.5V19.5C50.5 21 48.5 22 46 22C41.5 22 37 18 37 11C37 4 41.5 0 46 0C49.5 0 51.5 1.5 52.5 3.5L51 8.5Z" fill="#5A5A5A" />
        <path d="M58 4H62.5V7.5C63.5 5.5 65 4 67.5 4H68.5V8.5H67C64 8.5 62.5 10.5 62.5 14V22H58V4Z" fill="#5A5A5A" />
        <path d="M72 4H76.5V22H72V4Z" fill="#5A5A5A" />
        <path d="M72 0H76.5V3H72V0Z" fill="#5A5A5A" />
      </svg>
    </IconBox>
  );
}

export function SepaIcon({ className }: { className?: string }) {
  return (
    <IconBox label="SEPA-Lastschrift">
      <svg className={className || "h-6 w-auto"} viewBox="0 0 48 30" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="42" height="18" rx="2" stroke="currentColor" strokeWidth="2" className="text-foreground" />
        <path d="M14 12V18M10 15H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-foreground" />
        <path d="M30 12L34 15L30 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground" />
        <path d="M22 15H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-foreground" />
        <circle cx="36" cy="15" r="2" fill="currentColor" className="text-foreground" />
      </svg>
    </IconBox>
  );
}

export function ApplePayIcon({ className }: { className?: string }) {
  return (
    <IconBox label="Apple Pay">
      <svg className={className || "h-5 w-auto"} viewBox="0 0 80 22" fill="none" aria-hidden="true">
        <path
          d="M12.9 1.3C13.5 0.5 13.9 0 13.9 0C13.9 0 11.7 0 10.4 1.5C9.5 2.6 9.2 3.9 9.4 5.1C10.5 5 11.8 4.2 12.9 1.3Z"
          fill="currentColor"
          className="text-foreground"
        />
        <path
          d="M13.5 6.2C11.7 6.2 10.5 7.2 9.6 7.2C8.6 7.2 7.5 6.2 5.9 6.2C3.5 6.2 1.1 8.2 1.1 11.5C1.1 16.5 4.8 22 6.7 22C7.8 22 8.5 21.1 9.9 21.1C11.4 21.1 11.8 22 13.4 22C15.1 22 16.5 20.1 17.6 18.3C18.6 16.6 19.1 15 19.1 14.9C19 14.9 16.6 13.8 16.6 10.8C16.6 8.2 18.4 6.9 18.5 6.8C17.2 5.1 15.2 5 14.5 5C14.2 5 13.8 5.1 13.5 6.2Z"
          fill="currentColor"
          className="text-foreground"
        />
        <path
          d="M27.9 1.5H31.7L32.8 11.6H32.9L35.9 1.5H39.4L35.6 14.5L39.5 21.5H35.9L32.9 11.8H32.8L31.7 21.5H28.3L27.9 1.5Z"
          fill="currentColor"
          className="text-foreground"
        />
        <path
          d="M41.5 1.5H48.8V4.2H44.8V9.7H48.4V12.4H44.8V18.8H49V21.5H41.5V1.5Z"
          fill="currentColor"
          className="text-foreground"
        />
        <path
          d="M51.8 1.5H58.7V4.2H55.1V9.7H58.4V12.4H55.1V21.5H51.8V1.5Z"
          fill="currentColor"
          className="text-foreground"
        />
        <path
          d="M60.4 1.5H63.7V18.8H67.8V21.5H60.4V1.5Z"
          fill="currentColor"
          className="text-foreground"
        />
        <path
          d="M69.5 1.5H76.4V4.2H72.8V9.7H76.1V12.4H72.8V18.8H77V21.5H69.5V1.5Z"
          fill="currentColor"
          className="text-foreground"
        />
        <path d="M21.2 1.5H24.5V21.5H21.2V1.5Z" fill="currentColor" className="text-foreground" />
      </svg>
    </IconBox>
  );
}

export function GooglePayIcon({ className }: { className?: string }) {
  return (
    <IconBox label="Google Pay">
      <svg className={className || "h-5 w-auto"} viewBox="0 0 80 22" fill="none" aria-hidden="true">
        <path d="M24.5 11.5V15.8H23V4.2H28.4V5.7H24.5V9.2H27.8V10.7H24.5V11.5Z" fill="#3C4043" />
        <path d="M32.6 5.4C35.2 5.4 37.1 7.3 37.1 9.9C37.1 12.5 35.2 14.4 32.6 14.4C30 14.4 28.1 12.5 28.1 9.9C28.1 7.3 30 5.4 32.6 5.4ZM32.6 12.9C34.2 12.9 35.5 11.6 35.5 9.9C35.5 8.2 34.2 6.9 32.6 6.9C31 6.9 29.7 8.2 29.7 9.9C29.7 11.6 31 12.9 32.6 12.9Z" fill="#3C4043" />
        <path d="M40.1 11V14.2H38.6V5.6H40.1V6.4C40.7 5.7 41.5 5.4 42.5 5.4C44.3 5.4 45.5 6.7 45.5 8.7V14.2H44V8.8C44 7.6 43.3 6.9 42.3 6.9C41.3 6.9 40.6 7.6 40.1 8.4V11Z" fill="#3C4043" />
        <path d="M47.8 14.2V5.6H49.3V14.2H47.8Z" fill="#3C4043" />
        <path d="M54.2 5.4C56.7 5.4 58.5 7.1 58.6 9.5H51.2C51.4 11.3 52.8 12.6 54.5 12.6C55.5 12.6 56.4 12.2 57 11.4L58.1 12.3C57.3 13.4 56 14.1 54.5 14.1C51.9 14.1 49.9 12.2 49.9 9.8C49.9 7.3 51.8 5.4 54.2 5.4ZM54.2 6.9C52.7 6.9 51.5 7.9 51.2 9.3H57.1C56.9 7.9 55.8 6.9 54.2 6.9Z" fill="#3C4043" />
        <path d="M18.5 9.8C18.5 9.3 18.4 8.8 18.3 8.3H12.1V11.1H15.7C15.5 12 15 12.8 14.2 13.3V15H16.9C18.3 13.7 19.1 11.9 19.1 9.8Z" fill="#4285F4" />
        <path d="M12.1 16.3C13.9 16.3 15.4 15.7 16.4 14.5L14.2 12.7C13.6 13.2 12.9 13.4 12.1 13.4C10.5 13.4 9.2 12.4 8.7 11H6V12.8C7 14.9 9.4 16.3 12.1 16.3Z" fill="#34A853" />
        <path d="M8.7 11C8.5 10.5 8.4 9.9 8.4 9.3C8.4 8.7 8.5 8.1 8.7 7.6V5.8H6C5.3 6.9 5 8.1 5 9.3C5 10.5 5.3 11.7 6 12.8L8.7 11Z" fill="#FBBC05" />
        <path d="M12.1 5.2C13 5.2 13.8 5.5 14.4 6.1L16.4 4.1C15.4 3.1 13.8 2.5 12.1 2.5C9.4 2.5 7 3.9 6 5.9L8.7 7.6C9.2 6.2 10.5 5.2 12.1 5.2Z" fill="#EA4335" />
      </svg>
    </IconBox>
  );
}

export function StripeIcon({ className }: { className?: string }) {
  return (
    <IconBox label="Stripe">
      <svg className={className || "h-5 w-auto"} viewBox="0 0 60 24" fill="none" aria-hidden="true">
        <path
          d="M57 10.2C57 8.2 55.8 7.1 53.9 7.1C52.1 7.1 50.8 8.2 50.8 10.2C50.8 12.3 52.4 13.2 54.5 13.6C55.5 13.8 56 14 56 14.6C56 15.2 55.4 15.6 54.5 15.6C53.4 15.6 52.8 15.1 52.7 14.2H50.4C50.6 16.5 52.2 17.6 54.5 17.6C56.8 17.6 58.4 16.5 58.4 14.4C58.4 12.2 56.8 11.4 54.7 11C53.7 10.8 53.2 10.6 53.2 10C53.2 9.4 53.7 9.1 54.4 9.1C55.3 9.1 55.8 9.5 55.9 10.2H57ZM43.6 11.8C43.6 10.4 44.5 9.6 45.7 9.6C46.9 9.6 47.7 10.4 47.7 11.8V17.5H50V11.5C50 9.1 48.5 7.1 46.1 7.1C44.8 7.1 43.8 7.7 43.2 8.6V7.3H41V17.5H43.6V11.8ZM34.2 7.1C32.5 7.1 31.3 8 30.8 9.2V7.3H28.3V17.5H30.9V11.6C30.9 10.1 31.9 9.3 33.2 9.3C34.5 9.3 35.3 10.1 35.3 11.6V17.5H37.9V11.3C37.9 8.6 36.4 7.1 34.2 7.1ZM22.1 7.1C20.4 7.1 19.1 7.9 18.5 9.2V7.3H16V17.5H18.6V11.6C18.6 10.1 19.6 9.3 20.9 9.3C22.2 9.3 23 10.1 23 11.6V17.5H25.6V11.3C25.6 8.6 24.1 7.1 22.1 7.1ZM10.1 12.5C10.1 14 9.3 14.8 8.1 14.8C6.9 14.8 6.1 14 6.1 12.5V7.3H3.5V12.6C3.5 15.5 5.4 17.3 8 17.3C10.6 17.3 12.5 15.5 12.5 12.6V7.3H10.1V12.5Z"
          fill="currentColor"
          className="text-foreground"
        />
        <path
          d="M13.8 11.5C13.8 8 11.6 5.9 8.3 5.9H1.5V17.1H4.1V13.3H8.2C8.8 13.3 9.2 13.8 9.2 14.3V17.1H11.8V14.3C11.8 13.6 11.5 13 11 12.6C12.7 12.1 13.8 10.8 13.8 11.5Z"
          fill="currentColor"
          className="text-foreground"
        />
      </svg>
    </IconBox>
  );
}

export function DhlIcon({ className }: { className?: string }) {
  return (
    <IconBox label="DHL">
      <svg className={className || "h-5 w-auto"} viewBox="0 0 60 24" fill="none" aria-hidden="true">
        <rect width="60" height="24" rx="2" fill="#D40511" />
        <path d="M8 6H12C15 6 17 8 17 11C17 14 15 18 12 18H8V6ZM10 16H12C13.8 16 15 13.8 15 11C15 9.2 13.8 8 12 8H10V16Z" fill="#FFCC00" />
        <path d="M18 6H26V8H20V10H25V12H20V16H26V18H18V6Z" fill="#FFCC00" />
        <path d="M28 6H36V8H30V11H35V13H30V18H28V6Z" fill="#FFCC00" />
        <path d="M40 16C41.5 16 42.5 14.8 42.5 13.5C42.5 12 41.5 11 40 11H37V16H40ZM40 9C42.5 9 44.5 11 44.5 13.5C44.5 16 42.5 18 40 18H35V9H40Z" fill="#FFCC00" />
        <path d="M46 6H50C53.5 6 55.5 8.5 55.5 12C55.5 15.5 53.5 18 50 18H46V6ZM48 16H50C52.2 16 53.5 14.2 53.5 12C53.5 9.8 52.2 8 50 8H48V16Z" fill="#FFCC00" />
      </svg>
    </IconBox>
  );
}

export function DpdIcon({ className }: { className?: string }) {
  return (
    <IconBox label="DPD">
      <svg className={className || "h-5 w-auto"} viewBox="0 0 60 24" fill="none" aria-hidden="true">
        <rect width="60" height="24" rx="2" fill="#DC0032" />
        <path d="M8 6H14C18 6 20 8 20 12C20 16 18 18 14 18H8V6ZM10 16H14C16.5 16 18 14.5 18 12C18 9.5 16.5 8 14 8H10V16Z" fill="white" />
        <path d="M24 6H30V18H24V6ZM26 16H28V8H26V16Z" fill="white" />
        <path d="M34 6H42V8H36V11H41V13H36V18H34V6Z" fill="white" />
        <path d="M46 6H52C55 6 56 7.5 56 9.5C56 11.5 55 12.5 53 12.8L57 18H54.5L51 13H48V18H46V6ZM48 11H52C53.2 11 54 10.5 54 9.5C54 8.5 53.2 8 52 8H48V11Z" fill="white" />
      </svg>
    </IconBox>
  );
}

export function KlimaneutralIcon({ className }: { className?: string }) {
  return (
    <IconBox label="Klimaneutraler Versand">
      <Leaf className={className || "h-5 w-5 text-green-500"} aria-hidden="true" />
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
