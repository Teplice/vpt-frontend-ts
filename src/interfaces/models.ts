import {ParsedUrlQuery} from 'querystring'

interface ImageObject {
  imageUrl: string;
  imageKey: string;
}

export interface ZastupitelDoc {
  id: string;
  name: string;
  image: string;
  bio: string;
  email: string;
  occupation: string;
}

export interface KandidatDoc {
  id: string;
  name: string;
  image: string;
  occupation: string;
  motto:string;
  text:string;
  order: number;
}

export interface AktualitaDoc {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  message: string;
  image: string;
}

export interface TransparencyDoc {
  id: string;
  title: string;
  payer: string;
  amount: number;
  publisher: string;
  from: string;
  until: string;
}

export interface NewsletterDoc {
  id: string;
  date: string;
  title: string;
  url: string;
  content: string;
}

export interface IParams extends ParsedUrlQuery {
  aktualitaId: string
}
