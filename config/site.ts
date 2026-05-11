export const siteConfig = {
  metadata: {
    title: "A Celebration of Life for Harold",
    description:
      "Weekend details, RSVP, photo sharing, travel information, and contact details for Harold's celebration of life.",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Schedule", href: "#schedule" },
    { label: "RSVP", href: "#rsvp" },
    { label: "Photos", href: "#photos" },
    { label: "Travel", href: "#travel" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "A celebration of life for",
    name: "Harold",
    remembrance: "Forever in our hearts",
    date: "August 7-9, 2026",
    location: "Wappingers Falls, New York",
    intro:
      "Join us as we celebrate the life of my dad through memories, stories, good food, and the places he loved.",
    backgroundImage:
      "https://images.unsplash.com/photo-1771357010303-dafdf16cc7e0?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=2400",
    imageCredit: {
      label: "Bill Chomik on Unsplash",
      href: "https://unsplash.com/photos/two-fishing-rods-on-a-wooden-dock-by-a-lake-YZ4gx7yxx6g",
    },
    sideImages: [
      {
        src: "/images/harold-rock.jpg",
        alt: "Harold standing on rocks with his arms raised by a stream",
      },
      {
        src: "/images/harold-deck.jpg",
        alt: "Harold holding fishing rods on a deck",
        imageClassName: "hero-side-image-rotate",
      },
    ],
  },
  schedule: {
    title: "Weekend Itinerary",
    description:
      "The weekend itinerary is still being finalized. For now, please use this site to RSVP, find hotel information, and upload photos or videos for the family. Activities, meals, and gathering details will be added closer to the celebration weekend.",
    highlights: [
      {
        label: "Celebration Weekend",
        value: "August 7-9, 2026",
      },
      {
        label: "Location",
        value: "Wappingers Falls, New York",
      },
      {
        label: "Details",
        value: "Activities and dinner plans will be shared as we get closer.",
      },
    ],
  },
  rsvp: {
    id: "rsvp",
    title: "Let Us Know You're Coming",
    description:
      "Please RSVP so we can get a headcount for Saturday night dinner. You can update your response anytime.",
    helperText: "Google Form RSVP",
    embed: {
      title: "RSVP Google Form",
      src: "https://docs.google.com/forms/d/e/1FAIpQLScgK2aU-eDnddwrOtpEQVUMc_69U4rLPzjdpNEjfyd3Pc6DMw/viewform?embedded=true",
      mobileHeight: 1540,
      desktopHeight: 1349,
    },
  },
  photos: {
    id: "photos",
    title: "Share Your Photos & Videos",
    description:
      "Help us build a slideshow and preserve memories by sharing your favorite photos and videos.",
    buttonLabel: "Upload Here",
    href: "https://www.dropbox.com/request/dx1aao9b1uerijrobois",
    helperText: "Dropbox File Request (Upload Photos & Videos)",
  },
  travel: {
    id: "travel",
    title: "Travel & Stay",
    description:
      "Here are a few nearby hotel options for guests staying August 7-9, 2026. Rates can change, so please confirm pricing and availability when booking.",
    icon: "bed",
    hotels: [
      {
        name: "Spark by Hilton Fishkill",
        address: "20 Schuyler Blvd, Fishkill, NY 12524",
        rate: "Approximately $120-$170/night",
        distance: "About 10 minutes to Wappingers Falls",
        description:
          "A simple, budget-friendly option close to restaurants, shopping, and I-84. Good choice for guests looking for convenience and affordability.",
        bookingLabel: "Book Aug 7-9",
        bookingHref:
          "https://www.hilton.com/en/hotels/swfbdpe-spark-fishkill/",
      },
      {
        name: "Hyatt Place Poughkeepsie",
        address: "2165 South Rd, Poughkeepsie, NY 12601",
        rate: "Approximately $170-$250/night",
        distance: "About 6 minutes to Wappingers Falls",
        description:
          "Modern hotel with spacious rooms, free parking, and easy access to the Hudson Valley area. Good option for families or guests staying multiple nights.",
        bookingLabel: "Book Aug 7-9",
        bookingHref:
          "https://www.hyatt.com/hyatt-place/en-US/swfzp-hyatt-place-poughkeepsie-hudson-valley",
      },
      {
        name: "Courtyard by Marriott Poughkeepsie",
        address: "2641 South Rd / Route 9, Poughkeepsie, NY 12601",
        rate: "Approximately $180-$260/night",
        distance: "About 10 minutes to Wappingers Falls",
        description:
          "Comfortable full-service hotel with on-site dining and updated rooms. Convenient for guests wanting a more traditional Marriott-style stay.",
        bookingLabel: "Book Aug 7-9",
        bookingHref:
          "https://www.marriott.com/en-us/hotels/pouch-courtyard-poughkeepsie/overview/",
      },
    ],
  },
  contact: {
    id: "contact",
    title: "Reach Out To Me",
    description:
      "If you have any questions or need help with anything, just reach out. I'm happy to help.",
    phone: "201-396-0574",
    phoneHref: "tel:+12013960574",
    textLabel: "Text or Call Anytime",
    photo: {
      src: "/images/harold-fishing.jpg",
      alt: "Harold smiling in a boat while holding up a fish",
      caption: "Doing what he loved.",
    },
  },
  faq: {
    id: "faq",
    title: "Good To Know",
    items: [
      {
        question: "Can I come to only part of the weekend?",
        answer:
          "Absolutely. Come for whatever parts feel right for you and your family.",
      },
      {
        question: "Should I bring anything?",
        answer:
          "Just yourself. If you have a favorite photo or short story, please share it through the photo album or bring it along.",
      },
      {
        question: "Will updates be posted here?",
        answer:
          "Yes. Travel details, RSVP links, and photo album links will be updated here.",
      },
    ],
  },
  footer: {
    line: "Let's celebrate his life and the memories we all share.",
    note: "We can't wait to see you.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
export type ScheduleIconName =
  | "dinner"
  | "fish"
  | "sun"
  | "trees"
  | "utensils"
  | typeof siteConfig.travel.icon;
