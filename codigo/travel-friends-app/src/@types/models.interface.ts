export interface User {
  idUser: string;
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  TOKEN?: string;
}

export interface RoadMap {
  _id: string;
  idCreator: string | null;
  idLocal: string | null;
  title: string | null;
  description?: string | null;
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
