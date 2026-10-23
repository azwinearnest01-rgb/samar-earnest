/**
 * Kinds of business the firm is designed to serve. These describe intended
 * fit only — they are not a client list. Add or remove entries freely.
 */
export type Sector = {
  slug: string;
  name: string;
  note: string;
};

export const sectors: Sector[] = [
  {
    slug: "professional-practices",
    name: "Professional practices",
    note: "Clinics, consultancies, legal and accountancy firms whose reputation is their principal asset.",
  },
  {
    slug: "family-businesses",
    name: "Family and owner-led businesses",
    note: "Established firms preparing their digital affairs for the next generation of customers.",
  },
  {
    slug: "hospitality",
    name: "Hospitality and leisure",
    note: "Hotels, restaurants and venues where enquiries, bookings and reviews arrive every day.",
  },
  {
    slug: "retail",
    name: "Retail and e-commerce",
    note: "Merchants who sell online and need their storefront, listings and customer records kept in order.",
  },
  {
    slug: "property",
    name: "Property and real estate",
    note: "Agencies and developers whose relationships run over months and years rather than days.",
  },
  {
    slug: "education",
    name: "Education and training",
    note: "Schools, academies and training providers that answer many enquiries and must answer them well.",
  },
];
