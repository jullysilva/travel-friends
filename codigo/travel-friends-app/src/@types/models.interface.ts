export interface User {
  id: string;
  name: string;
  password?: string;
  cpf: string;
  email: string;
  message: string;
  TOKEN?: string;
}
export interface RoadMap {
  _id: string;
  idCreator: string | null;
  idLocal: string | null;
  title: string;
  description?: string | null;
  favorites: boolean;
  isFree: boolean;
  price: number;
  type: string | null;
  person: number;
  start: string | null;
  end: string | null;
  participants: [
    {
      idUser: string;
      _id: string;
    }
  ];
}

export interface Local {
  idLocal: string;
  idCriador: string;
  nome: string;
  endereco: string;

  horarioInicial: string;
  horarioFinal: string;
}
