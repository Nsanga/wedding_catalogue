export const content = {
  en: {
    cover: {
      names: "Ramélie & Rémy",
      date: "Thursday, April 23",
      subtitle: "Wedding Catalogue",
      quote: "Love is patient, love is kind.",
      image: "/assets/images/couple-cover.jpeg",
    },
    welcome: {
      title: "Welcome",
      text: "Dear guests,\n\nWe are deeply honored to share this unique moment of our lives with you. Your presence is a true blessing we cherish.",
    },
    program: {
      title: "Wedding Program",
      events: [
        {
          time: "Thursday April 23 – 2 PM",
          title: "Traditional Ceremony",
          place: "Yaoundé, Nkolbong",
        },
        { time: "10 AM", title: "Civil Wedding", place: "Nkolondom" },
        { time: "12 PM", title: "Reception", place: "Nkolondom" },
        {
          time: "3 / 4 PM",
          title: "Religious Ceremony",
          place: "EEC Nlongkak",
        },
        {
          time: "8 PM",
          title: "Evening Party",
          place: "El Patchenko Hall – Nkondengui",
        },
      ],
    },
    gallery: {
      title: "Our Memories",
      subtitle: "Moments that tell our story",
      photos: [
        { id: 1, src: "/assets/images/gallery1.jpg", alt: "Engagement photo" },
        { id: 2, src: "/assets/images/gallery2.jpg", alt: "Pre-wedding shoot" },
        {
          id: 3,
          src: "/assets/images/gallery3.jpg",
          alt: "Traditional ceremony",
        },
        {
          id: 4,
          src: "/assets/images/gallery4.jpg",
          alt: "Celebration moment",
        },
        { id: 5, src: "/assets/images/gallery5.jpg", alt: "Romantic moment" },
        { id: 6, src: "/assets/images/gallery6.jpg", alt: "With family" },
      ],
    },
    gifts: {
      title: "Gifts & Blessings",
      text: "Your presence is the most precious gift.\n\nFor those who wish to support us in starting our new life together, you can contribute through:",
      methods: [
        {
          id: "mtn" as const,
          label: "MTN Mobile Money",
          details: "Phone: 651 670 774\nName: RAMÉLIE",
        },
        {
          id: "orange" as const,
          label: "Orange Money",
          details: "Phone: 698 907 675\nName: RÉMY",
        },
        {
          id: "paypal" as const,
          label: "PayPal",
          details: "Email: tramelievanessa@gmail.com\nName: Vanessa Ramélie",
        },
      ],
      note: "Thank you for your generosity and love!",
    },
    thanks: {
      title: "Thank You",
      text: "Thank you for your love, support and prayers.\n\nWith all our affection,\nRamélie & Rémy",
    },
  },

  fr: {
    cover: {
      names: "Ramélie & Rémy",
      date: "Jeudi 23 Avril",
      subtitle: "Catalogue de Mariage",
      quote: "L'amour est patient, l'amour est bienveillant.",
      image: "/assets/images/couple-cover.jpeg",
    },
    welcome: {
      title: "Message de Bienvenue",
      text: "Chers invités,\n\nNous sommes profondément honorés de partager avec vous ce moment unique de nos vies. Votre présence est une véritable bénédiction que nous chérissons.",
    },
    program: {
      title: "Programme du Mariage",
      events: [
        {
          time: "Jeudi 23 Avril – 14h",
          title: "Cérémonie Traditionnelle",
          place: "Yaoundé, Nkolbong",
        },
        { time: "10h", title: "Mariage Civil", place: "Nkolondom" },
        { time: "12h", title: "Réception", place: "Nkolondom" },
        {
          time: "15h / 16h",
          title: "Cérémonie Religieuse",
          place: "EEC Nlongkak",
        },
        {
          time: "20h",
          title: "Soirée",
          place: "Salle El Patchenko – Nkondengui",
        },
      ],
    },
    gallery: {
      title: "Nos Souvenirs",
      subtitle: "Des moments qui racontent notre histoire",
      photos: [
        {
          id: 1,
          src: "/assets/images/story-1.jpg",
          alt: "Photo de fiançailles",
        },
        { id: 2, src: "/assets/images/ring.jpg", alt: "Séance pré-mariage" },
        {
          id: 3,
          src: "/assets/images/couple-1.jpg",
          alt: "Cérémonie traditionnelle",
        },
        {
          id: 4,
          src: "/assets/images/couple-3.jpeg",
          alt: "Moment de célébration",
        },
        { id: 5, src: "/assets/images/couple-2.jpg", alt: "Moment romantique" },
        { id: 6, src: "/assets/images/couple-5.jpeg", alt: "En famille" },
      ],
    },
    gifts: {
      title: "Cadeaux & Bénédictions",
      text: "Votre présence est le plus précieux des cadeaux.\n\nPour ceux qui souhaitent nous soutenir dans notre nouvelle vie, vous pouvez contribuer via :",
      methods: [
        {
          id: "mtn" as const,
          label: "MTN Mobile Money",
          details: "Téléphone : 651 670 774\nNom : RAMÉLIE",
        },
        {
          id: "orange" as const,
          label: "Orange Money",
          details: "Téléphone : 698 907 675\nNom : RÉMY",
        },
        {
          id: "paypal" as const,
          label: "PayPal",
          details: "Email : tramelievanessa@gmail.com\nNom : Vanessa Ramélie",
        },
      ],
      note: "Merci pour votre générosité et votre amour !",
    },
    thanks: {
      title: "Remerciements",
      text: "Merci pour votre amour, votre soutien et vos prières.\n\nAvec toute notre affection,\nRamélie & Rémy",
    },
  },
} as const;

export type Language = keyof typeof content;
export type CoverData = typeof content.en.cover;
export type WelcomeData = typeof content.en.welcome;
export type ProgramData = typeof content.en.program;
export type GalleryData = typeof content.en.gallery;
export type GiftsData = typeof content.en.gifts;
export type ThanksData = typeof content.en.thanks;
