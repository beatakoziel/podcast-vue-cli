const state = {
  podcasts: [{
      imagePath: "https://images.unsplash.com/photo-1583574928052-9a2563277468?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      title: "Pieniądze a władza",
      description: "Pierwszy tak dokładny podcast, który pokazuje słabości ludzi bogatych."
    },
    {
      imagePath: "https://images.unsplash.com/photo-1578925518470-4def7a0f08bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
      title: "Jak zostać królem?",
      description: "Kolejny podcast z serii 'Jak zostać królem własnego losu?'. Polecany dla amatorów sukcesu."
    },
    {
      imagePath: "https://images.unsplash.com/photo-1560285843-9d9d94edff8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      title: "Pozytywne myślenie",
      description: "Jak wzbudzić wokół siebie pozytywne wibracje i zaakceptować zmiany?"
    },
    {
      imagePath: "https://images.unsplash.com/photo-1445633743309-b60418bedbf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      title: "Rodzic czy kolega?",
      description: "Jak poradzić sobie z trudami rodzicielstwa? Odpowiedzi na pytania czytelników."
    },
    {
      imagePath: "https://images.unsplash.com/photo-1523301551780-cd17359a95d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
      title: "Zasady ogrodnika",
      description: "Wraz z wiosną odkrywamy nowe pasje. Zapraszamy tych, którzy zajęli się ogrodnictwem."
    }
  ]
};

const getters = {
  podcasts(state) {
    return state.podcasts;
  }
};

export default {
  state,
  getters
};
