import { defaultBrand } from "./brand.config";

export const appConfig = {
  name: "Eliza Maria & Eliane Sousa Advocacia",
  description: "Dra. Eliane Sousa, advogada previdenciarista em Picos/PI. Atuação em auxílio-acidente, aposentadorias, benefícios por incapacidade e BPC/LOAS.",
  brand: defaultBrand,
  contact: {
    whatsapp: "5589999842757",
    whatsappLabel: "(89) 99984-2757",
    instagram: "elianesousaprev",
    city: "Picos, PI",
    oab: "OAB/PI 7817",
  },
  features: { catalog: false, account: false, admin: false },
  navigation: [],
};

export const whatsappLink = (message = "Olá, Dra. Eliane. Gostaria de conversar sobre meu caso.") =>
  `https://wa.me/${appConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
