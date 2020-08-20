import { defineMessages } from 'react-intl';

const ref = 'components.footer';

export default defineMessages({
  brand: {
    id: `${ref}.brand`,
    defaultMessage: 'A Livip é uma marca da Engage Projetos de Esporte e Entretenimento LTDA.',
  },

  address: {
    id: `${ref}.address`,
    defaultMessage: 'Rua Capote Valente, 39 - 05409-000 - São Paulo, SP',
  },

  copyright: {
    id: `${ref}.copyright`,
    defaultMessage: 'Livip © Copyright 2020.',
  },

  contact: {
    id: `${ref}.contact`,
    defaultMessage: '+55 11 9999 9999  atendimento@livip.com.br',
  },
});
