import { version } from '../../package.json';

export const environment = {
  appVersion: version,
  production: true,
  apiUrl: {
    baseUrl: 'https://calm-plum-jaguar-tutu.cyclic.app/',
    services: {
      todos: 'todos',
    },
  },
};
