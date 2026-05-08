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
  },
  schedule: {
    title: "Weekend at a Glance",
    items: [
      {
        day: "Friday, Aug 7",
        title: "Welcome Dinner",
        time: "6:00 PM",
        place: "21 Burgers",
        location: "2026 NY-9D, Wappingers Falls, NY 12590",
        description: "Casual get-together for anyone in town Friday night.",
        icon: "utensils",
      },
      {
        day: "Saturday, Aug 8",
        title: "Morning: Fishing & Canoeing",
        time: "Morning (Optional)",
        place: "Vinny's Lakehouse",
        location: "1768 South Rd, Wappingers Falls, NY 12590",
        description:
          "Fishing at a private spot he loved. Picnic breakfast and relaxing by the water for anyone who prefers to hang out.",
        icon: "fish",
      },
      {
        day: "Saturday, Aug 8",
        title: "Afternoon: Activity TBD",
        time: "Afternoon (Optional)",
        place: "TBD",
        location: "TDB",
        description:
          "Considering a local winery, park or hang by the pool at the hotel.",
        icon: "trees",
      },
      {
        day: "Saturday, Aug 8",
        title: "Dinner at Cafe Con Leche",
        time: "6:00 PM",
        place: "Cafe Con Leche",
        location: "2710 W Main St a, Wappingers Falls, NY 12590",
        description: "Dinner together at Dad's favorite restaurant.",
        icon: "coffee",
      },
    ],
    openDay: {
      day: "Sunday, Aug 9",
      title: "Open Day",
      description: "Plans are open. Let's enjoy some more time together.",
      icon: "sun",
    },
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
    href: "https://photos.app.goo.gl/Xx7rF71mPYqD8KF9A",
    helperText: "Google Photos Album (View & Upload)",
  },
  travel: {
    id: "travel",
    title: "Travel & Stay",
    description:
      "Hotel block and travel information coming soon. Check back here for updates.",
    buttonLabel: "View Travel Info",
    href: "#travel",
    icon: "bed",
  },
  contact: {
    id: "contact",
    title: "Reach Out To Me",
    description:
      "If you have any questions or need help with anything, just reach out. I'm happy to help.",
    phone: "(201) 396-0574",
    phoneHref: "tel:+12013960574",
    textLabel: "Text or Call Anytime",
    photo: {
      src: "https://images.unsplash.com/photo-1657005081179-46398dd79394?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
      alt: "A man fishing at the edge of a quiet lake",
      caption: "Doing what he loved.",
      credit: {
        label: "Eugene Lazovsky on Unsplash",
        href: "https://unsplash.com/photos/a-man-fishing-in-a-lake-QYSJ1Pvz1u0",
      },
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
  | (typeof siteConfig.schedule.items)[number]["icon"]
  | typeof siteConfig.schedule.openDay.icon
  | typeof siteConfig.travel.icon;
