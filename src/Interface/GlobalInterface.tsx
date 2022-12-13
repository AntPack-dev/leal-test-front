

export interface iUser {
  name: string;
  username: string;
  email: string;
  phoneNumber: string;
}

export interface IdataVideoList {
  title: string;
  style?: {
    bgModal?: string;
    color?: string;
  };
  image?: {
    src: string,
    alt?: string,
    style?:any
  }
  data: IcontentDataVideo[];
};

export interface IcontentDataVideo {
  id?: number | string;
  name?: string;
  date?: string;
  sinopsis?: string;
  bullet?: string[];
  image?: {
    src: string;
    alt?: string;
    style?: any;
  };
  video?: {
    src: string;
    style?: any;
  };
}