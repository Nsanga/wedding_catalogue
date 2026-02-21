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
      text: "Dear guests,\n\nWe are deeply honored to share this unique moment of our lives with you.",
      image: "/assets/images/welcome.jpg"
    },
    program: {
      title: "Wedding Program",
      events: [
        // {
        //   time: "Thursday April 23 – 3:00 PM",
        //   title: "Traditional Ceremony",
        //   place: "Yaoundé",
        // },
        {
          time: "Friday April 24 – 1:00 PM",
          title: "Civil Wedding",
          place: "Yaoundé",
        },
        {
          time: "Saturday April 25 - 10:00 AM",
          title: "Religious Ceremony",
          place: "Yaoundé",
        },
        {
          time: "Saturday April 25 - 1:00 PM",
          title: "Champagne Reception",
          place: "Yaoundé",
        }
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
      text: "Your presence is the most precious gift.\nSince we do not live in Cameroon, we unfortunately cannot bring physical gifts.\n\nFor those who wish to support us in starting our new life together 😊:",
      methods: [
        {
          id: "paypal" as const,
          label: "PayPal",
          details:
            "Email: \ntramelievanessa@gmail.com",
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
        {
          id: "wero" as const,
          label: "Wero",
          details: "Phone : \n07 82 48 80 69",
        },
      ],
      note: "Thank you for your generosity and love!",
    },
    thanks: {
      title: "Thank You",
      text: "Thank you for your love, support and prayers.\n\nWith all our affection,\nRamélie & Rémy",
      subtitle: "Confirmation of Attendance Required",
      subdesc:
        "Please confirm your attendance by clicking below and filling out the form",
      buttonLabel: "Access the form",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSc_KRPQ4TWKaxhDXtGR-1tlQtXRVn7AES7uGmfAMr3hCqtndw/viewform?usp=dialog",
      limit: "Deadline: March 15"
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
      text: "Chers invités,\n\nNotre histoire passe au chapitre “Pour toujours”. Votre présence rendra ce passage inoubliable.\n\n« Deux aventuriers ont décidé de faire équipe pour la vie »",
      image: "/assets/images/welcome.jpg"
    },
    program: {
      title: "Programme de Mariage",
      events: [
        // {
        //   time: "Jeudi 23 Avril – 15h00",
        //   title: "Mariage Traditionnel",
        //   place: "Yaoundé",
        // },
        {
          time: "Vendredi 24 Avril – 13h00",
          title: "Mariage Civil",
          place: "Yaoundé",
        },
        {
          time: "Samedi 25 Avril - 10h00",
          title: "Mariage Religieux",
          place: "Yaoundé",
        },
        {
          time: "Samedi 25 Avril - 13h00",
          title: "Vin d'honneur",
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
      text: "Votre présence est le plus précieux des cadeaux.\nNe vivant pas au Cameroun, nous ne pouvons malheureusement pas emporter de cadeaux physiques\n\nPour ceux qui souhaitent nous soutenir dans notre nouvelle vie 😊 :",
      methods: [
        {
          id: "paypal" as const,
          label: "PayPal",
          details:
            "Email : \ntramelievanessa@gmail.com",
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
        {
          id: "wero" as const,
          label: "Wero",
          details: "Téléphone : \n07 82 48 80 69",
        },
      ],
      note: "Merci pour votre générosité et votre amour !",
    },
    thanks: {
      title: "Remerciements",
      text: "Merci pour votre amour, votre soutien et vos prières.\n\nAvec toute notre affection,\nRamélie & Rémy",
      subtitle: "Confirmation de présence obligatoire",
      subdesc:
        "Veuillez nous confirmer votre présence en cliquant ci-dessous et en remplissant le formulaire",
      buttonLabel: "Accéder au formulaire",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSc_KRPQ4TWKaxhDXtGR-1tlQtXRVn7AES7uGmfAMr3hCqtndw/viewform?usp=dialog",
      limit: "Date limite : 15 Mars"
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
