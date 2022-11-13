export declare interface AuthUser {
  data: User,
  status: number
}

export type UserRegister = {
  name: string;
  email: string;
  cpf: string;
  password: string;
};

export type UserLogin = {
  email: string;
  password: string;
};

export interface User {
    cpf: string;
    email: string;
    id: string;
    message: string;
    name: string;
    TOKEN: string | null;
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
    idCriador: string;
    name: string;
    address: string;
    cep: string;
    openTime: string;
    closeTime: string;
  }

  export interface TRoadmaps {
    restaurante: string;
    loja: string;
    museu: string;
    igreja: string;
    praca: string;
    parque: string;
    shopping: string;
    arLivre: string;
    educacao: string;
  }
  