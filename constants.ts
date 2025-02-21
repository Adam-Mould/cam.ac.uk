import eventImage2 from "@/images/event-cam-festival.jpg";
import eventImage1 from "@/images/event-discover-cam.jpg";
import eventImage3 from "@/images/event-masterclasses.jpg";
import newsImage1 from "@/images/news-biodiversity-leak.jpg";
import newsImage3 from "@/images/news-dementia.jpg";
import newsImage2 from "@/images/news-gibbs-building.jpg";

export const MENU = [
  {
    text: "Undergraduate study",
    url: "https://www.undergraduate.study.cam.ac.uk/?ucam-ref=home-menu",
  },
  {
    text: "Postgraduate study",
    url: "https://www.postgraduate.study.cam.ac.uk/?ucam-ref=home-menu",
  },
  { text: "Alumni", url: "https://www.alumni.cam.ac.uk?ucam-ref=home-menu" },
  {
    text: "Business and enterprise",
    url: "/business-and-enterprise?ucam-ref=home-menu",
  },
  {
    text: "Cambridge students",
    url: "https://www.cambridgestudents.cam.ac.uk?ucam-ref=home-menu",
  },
  { text: "News", url: "/news?ucam-ref=home-menu" },
  { text: "Jobs", url: "https://www.cam.ac.uk/jobs" },
  { text: "Research", url: "/research?ucam-ref=home-menu" },
  {
    text: "Colleges and Departments",
    url: "/colleges-and-departments?ucam-ref=home-menu",
  },
  {
    text: "Staff pages",
    url: "https://www.staff.admin.cam.ac.uk/?ucam-ref=home-menu",
  },
  {
    text: "Contact Cambridge",
    url: "/about-the-university/contact-the-university?ucam-ref=home-menu",
  },
  {
    text: "About the University",
    url: "/about-the-university?ucam-ref=home-menu",
  },
];

export const NEWS = [
  {
    type: "News",
    image: {
      src: newsImage1,
      alt: "The Gola Rainforest Project in Sierra Leone. This conservation project has limited leakage while slowing deforestation by supporting nearby farmers such as Mallo Samah to increase their yields and get higher prices for their cocoa.",
    },
    title:
      "Rewilding in rich nations could drive extinctions in other countries",
    excerpt:
      "Scientists call on the international community to recognise and start tackling the 'biodiversity leak'.",
    url: "https://www.cam.ac.uk/research/news/restoring-wildlife-habitats-in-wealthy-nations-could-drive-extinctions-in-species-rich-regions",
  },
  {
    type: "News",
    image: {
      src: newsImage2,
      alt: "Gibbs Building at King's College by Lloyd Mann with a big Rainbow flag by Alexander Spatari for Getty Images",
    },
    title: "The queer men of H staircase",
    excerpt:
      "Queer Cambridge by Professor Simon Goldhill explores the hidden and not-so-hidden stories of famous Fellows of King's College.",
    url: "https://www.cam.ac.uk/stories/queer-cambridge",
  },
  {
    type: "News",
    image: {
      src: newsImage3,
      alt: "Dr Maura Malpetti",
    },
    title:
      "Blood test to help detect dementia and identify effective treatments",
    excerpt:
      "Researcher Dr Maura Malpetti aims to unlock new dementia treatments with a nationwide blood test trial and eventually stop the disease's progression.",
    url: "https://www.cam.ac.uk/stories/cambridge-onfire-dementia-blood-test",
  },
];

export const EVENTS = [
  {
    type: "Admissions",
    image: {
      src: eventImage1,
      alt: "Discover Cambridge: Monday 17 to Friday 21 March",
    },
    title: "Discover Cambridge: Monday 17 to Friday 21 March",
    excerpt:
      "Join us for this series of lunchtime webinars exploring the practicalities of applying for postgraduate study at Cambridge.",
    url: "https://www.postgraduate.study.cam.ac.uk/events/discover-cambridge",
  },
  {
    type: "Festival",
    image: {
      src: eventImage2,
      alt: "The Cambridge Festival: Wednesday 19 March to Friday 4 April",
    },
    title: "The Cambridge Festival: Wednesday 19 March to Friday 4 April",
    excerpt:
      "Be inspired by online, on-demand and in-person events covering all aspects of Cambridge research. Programme is now live.",
    url: "https://www.festival.cam.ac.uk/",
  },
  {
    type: "Admissions",
    image: {
      src: eventImage3,
      alt: "Subject Masterclasses: until Thursday 15 May",
    },
    title: "Subject Masterclasses: until Thursday 15 May",
    excerpt:
      "Explore your chosen subject in greater depth while experiencing typical undergraduate teaching at Cambridge with our Subject Masterclasses.",
    url: "https://www.undergraduate.study.cam.ac.uk/events/masterclasses",
  },
];

export const FOOTER_MENU_1 = [
  {
    text: "Contact the University",
    url: "/about-the-university/contact-the-university?ucam-ref=global-footer",
  },
  { text: "Accessibility statement", url: "/about-this-site/accessibility" },
  {
    text: "Freedom of information",
    url: "https://www.information-compliance.admin.cam.ac.uk/foi?ucam-ref=global-footer",
  },
  {
    text: "Privacy policy and cookies",
    url: "/about-this-site/privacy-policy?ucam-ref=global-footer",
  },
  {
    text: "Statement on Modern Slavery",
    url: "https://www.governanceandcompliance.admin.cam.ac.uk/governance-and-strategy/anti-slavery-and-anti-trafficking?ucam-ref=global-footer",
  },
  {
    text: "Terms and conditions",
    url: "/about-this-site/terms-and-conditions?ucam-ref=global-footer",
  },
  { text: "University A-Z", url: "/university-a-z?ucam-ref=global-footer" },
];

export const FOOTER_MENU_2 = [
  {
    text: "Undergraduate",
    url: "https://www.undergraduate.study.cam.ac.uk/?ucam-ref=global-footer",
  },
  {
    text: "Postgraduate",
    url: "https://www.postgraduate.study.cam.ac.uk/?ucam-ref=global-footer",
  },
  {
    text: "Continuing education",
    url: "https://www.ice.cam.ac.uk/?ucam-ref=global-footer",
  },
  {
    text: "Executive and professional education",
    url: "https://www.cam.ac.uk/study-at-cambridge/executive-and-professional-education/?ucam-ref=global-footer",
  },
  {
    text: "Courses in education",
    url: "https://www.educ.cam.ac.uk/?ucam-ref=global-footer",
  },
];

export const FOOTER_MENU_3 = [
  {
    text: "How the University and Colleges work",
    url: "/about-the-university/how-the-university-and-colleges-work?ucam-ref=global-footer",
  },
  {
    text: "Give to Cambridge",
    url: "https://www.philanthropy.cam.ac.uk/give-now?ucam-ref=global-footer",
  },
  { text: "Jobs", url: "https://www.cam.ac.uk/jobs" },
  { text: "Maps", url: "https://map.cam.ac.uk/?ucam-ref=global-footer" },
  {
    text: "Visiting the University",
    url: "/about-the-university/visiting-the-university?ucam-ref=global-footer",
  },
  {
    text: "Cambridge University Press & Assessment",
    url: "https://www.cambridge.org/?ucam-ref=global-footer",
  },
];

export const FOOTER_MENU_4 = [
  { text: "Research news", url: "/research/news?ucam-ref=global-footer" },
  {
    text: "About research at Cambridge",
    url: "/research/research-at-cambridge?ucam-ref=global-footer",
  },
  {
    text: "Public engagement",
    url: "/public-engagement?ucam-ref=global-footer",
  },
  {
    text: "Spotlight on...",
    url: "/research/spotlights-on?ucam-ref=global-footer",
  },
];
