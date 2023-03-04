export interface Feedback {
  id: string;
  content: string;
  name: string;
  title: string;
  img: string;
}

export interface Features {
  id: string;
  icon: string;
  title: string;
  content: string;
}

export interface Stats {
  id: string;
  title: string;
  value: string;
}

export interface FooterLinks {
  title: string;
  links: {
    name: string;
    link: string;
  }[];
}

export interface SocialMedia {
  id: string;
  icon: string;
  link: string;
}

export interface Client {
  id: string;
  logo: string;
}
