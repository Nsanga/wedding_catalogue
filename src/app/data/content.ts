export const content = {
  en: {
    cover: {
      names: "Ramélie & Rémy",
      date: "Thursday, April 23",
      subtitle: "Wedding Program",
      quote: "Love is patient, love is kind.",
      image: "/assets/images/couple-cover.jpg",
    },
    welcome: {
      text: "Dear guests,\n\nWe are deeply honored to share this unique moment of our lives with you. Your presence is a true blessing we cherish.",
      image: "/assets/images/welcome.jpg"
    },
    program: {
      title: "Wedding Program",
      events: [
        {
          time: "Thursday April 23 – 2 PM",
          title: "Traditional Wedding",
          place: "Yaoundé, Nkolbong",
        },
        {
          time: "10 AM",
          title: "Civil Wedding followed by a reception",
          place: "Nkolondom",
        },
        {
          time: "3 / 4 PM",
          title: "Religious Wedding",
          place: "Yaoundé",
        },
        {
          time: "8 PM",
          title: "Dance Party",
          place: "Yaoundé",
        },
      ],
    },
    gallery: {
      title: "Our Memories",
      subtitle: "Moments that tell our story",
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
          alt: "Mariage traditionnelle",
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
      title: "Gifts & Blessings",
      text: "Your presence is the most precious gift.\n\nFor those who wish to support us in starting our new life together 😊:",
      methods: [
        {
          id: "paypal" as const,
          label: "PayPal",
          details:
            "Email: \ntramelievanessa@gmail.com",
        },
        {
          id: "wero" as const,
          label: "Wero",
          details: "Phone : \n07 82 48 80 69",
        },
        {
          id: "orange" as const,
          label: "Orange Money",
          details: "Phone: \n694 75 22 68\nName: \nTchomguie Vanessa",
        },
        {
          id: "mtn" as const,
          label: "MTN Mobile Money",
          details: "Phone: \n673 01 77 84\nName: \nSielinou Clotaire Rémy",
        },
      ],
      note: "Thank you for your generosity and love!",
    },
    thanks: {
      title: "Thank You",
      text: "Thank you for your love, support and prayers.\n\nWith all our affection,\nRamélie & Rémy",
      subtitle: "Confirmation of Attendance",
      subdesc:
        "Please confirm your attendance by clicking below and filling out the form",
      buttonLabel: "Access the form",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSc_KRPQ4TWKaxhDXtGR-1tlQtXRVn7AES7uGmfAMr3hCqtndw/viewform?usp=dialog",
      limit: "Deadline: April 20"
    },
  },

  fr: {
    cover: {
      names: "Ramélie & Rémy",
      subtitle: "Programme de Mariage",
      quote: "L'amour est patient, l'amour est bienveillant.",
      image: "/assets/images/couple-cover.jpg",
    },
    welcome: {
      text: "Chers invités,\n\nNotre histoire passe au chapitre “Pour toujours”. Votre présence rendra ce passage inoubliable.\n\n« Deux aventuriers ont décidé de faire équipe pour la vie »  Rejoignez l’expédition.\n\nVous êtes invités à rejoindre notre navire pour la traversée...",
      image: "/assets/images/welcome.jpg"
    },
    program: {
      title: "Programme de Mariage",
      events: [
        {
          time: "Jeudi 23 Avril – 14h",
          title: "Mariage Traditionnelle",
          place: "Yaoundé, Nkolbong",
        },
        {
          time: "10h",
          title: "Mariage Civil suivi d'une Collation",
          place: "Nkolondom",
        },
        {
          time: "15h / 16h",
          title: "Mariage Religieux",
          place: "Yaoundé",
        },
        {
          time: "20h",
          title: "Soirée Dansante",
          place: "Yaoundé",
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
          alt: "Mariage traditionnelle",
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
      text: "Votre présence est le plus précieux des cadeaux.\n\nPour ceux qui souhaitent nous soutenir dans notre nouvelle vie 😊 :",
      methods: [
        {
          id: "paypal" as const,
          label: "PayPal",
          details:
            "Email : \ntramelievanessa@gmail.com",
        },
        {
          id: "wero" as const,
          label: "Wero",
          details: "Téléphone : \n07 82 48 80 69",
        },
        {
          id: "orange" as const,
          label: "Orange Money",
          details: "Téléphone : \n694 75 22 68\nNom : \nTchomguie Vanessa",
        },
        {
          id: "mtn" as const,
          label: "MTN Mobile Money",
          details: "Téléphone : \n673 01 77 84\nNom : \nSielinou Clotaire Rémy",
        },
      ],
      note: "Merci pour votre générosité et votre amour !",
    },
    thanks: {
      title: "Remerciements",
      text: "Merci pour votre amour, votre soutien et vos prières.\n\nAvec toute notre affection,\nRamélie & Rémy",
      subtitle: "Confirmation de présence",
      subdesc:
        "Veuillez nous confirmer votre présence en cliquant ci-dessous et en remplissant le formulaire",
      buttonLabel: "Accéder au formulaire",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSc_KRPQ4TWKaxhDXtGR-1tlQtXRVn7AES7uGmfAMr3hCqtndw/viewform?usp=dialog",
      limit: "Date limite : 20 Avril"
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
