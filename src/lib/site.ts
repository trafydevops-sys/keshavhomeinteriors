// Single source of truth for real business facts, sourced from
// keshavhomeinteriors.com. Nothing here is invented — copy elsewhere on the
// site may be rewritten in an editorial voice, but the underlying facts
// (numbers, contact details, services) all trace back to this file.

export const site = {
  name: "Keshav Home Interiors",
  founder: "Manimozhi Pandian",
  tagline: "Complete home interior solutions, start to finish",
  phone: "+91 95009 36383",
  phoneHref: "tel:+919500936383",
  whatsappHref: "https://wa.me/919500936383",
  email: "keshavhomeinteriors@gmail.com",
  address: {
    line1: "38/1, Munuswamy Kovil Street",
    line2: "Kamaraj Nagar, Menambedu, Ambattur",
    city: "Chennai",
    pincode: "600053",
  },
  city: "Chennai",
  stats: {
    projects: 400,
    clients: 100,
  },
  services: [
    "Interior Consultant",
    "Complete Residential Interior",
    "Plan for Interior Execution",
    "Basic Home Interiors",
    "Exclusive Interiors",
    "Elite Interior Design",
  ],
  process: [
    {
      title: "Fill the Form",
      copy: "Tell us about your home and your vision through a short consultation form.",
    },
    {
      title: "Consultation",
      copy: "We review your requirements, walk through layout ideas and material direction together.",
    },
    {
      title: "Site Visit",
      copy: "Our team measures, assesses and studies your space on location before anything is finalised.",
    },
    {
      title: "Dream Execution",
      copy: "On invoice acceptance, work begins — transparently tracked from first cut to final reveal.",
    },
  ],
} as const;
