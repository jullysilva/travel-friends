  interface INotification {
  type: "info" | "alert" | "warning";
  title: string;
  description: string;
}
  const location:INotification = [
{
      title: "Nova promoção!",
      description:
        "Convide um amigo para a Travel Friends e ganhe 50% de desconto no seu próximo passeio",
      type: "info",
    },
    
    {
      title: "As pessoas estão te esperando!",
      description:
        "Tem passeios incríveis e pessoas para conhecer, venha explorar alguns destinos",
      type: "info",
    },

    {
      title: "Saia agora desse sofá!",
      description:
        "Que tal dar uma explorada pelos pontos da cidade? Venha ver os passeios que temos para você!",
      type: "info",
    },

    {
      title: "Não sabe onde levar o date?",
      description:
        "Se está precisando de um lugar para levar aquela pessoa especial, venha dar uma olhada nesses passeios preparados para você",
      type: "info",
    },
        
    {
      title: "Ei sumido, está por ai?",
      description:
        "Estamos sentindo sua falta nos roles, vem dar uma espiada nos passeios que temos para você se divertir com a galera!",
      type: "info",
    },
    
    {
      title: "Acesso a sua conta!",
      description:
        "Olá! Nosso sistema detectou um acesso na sua conta recentemente. Se não foi você por gentileza verifique e se necessário altere sua senha",
      type: "alert",
    },

    {
      title: "Atualização de dados!",
      description:
        "Alguns dados da sua conta precisam ser complementados, por gentileza acesse sua conta!",
      type: "warning",
    },
    
    {
      title: "Não compartilhe seus dados!",
      description:
        "Olá, temos um recado importante! Nos preocupamos muito com a sua segurança e com a integridade de seus dados, não compartilhe sua senha com terceiros.",
      type: "alert",
    },

    {
      title: "Cadastrado com sucesso!",
      description:
        "Você acabou de registrar um passeio na sua conta!",
      type: "warning",
    },


    {
      title: "Mais uma pessoa no seu passeio!",
      description:
        "Uma pessoa acabou de ingressar no seu passeio e quer te conhecer!",
      type: "alert",
    },
];

