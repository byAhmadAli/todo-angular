import { default as packageInfo } from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: false,
  apiUrl: {
    baseUrl: 'https://calm-plum-jaguar-tutu.cyclic.app/',
    services: {
      todos: 'todos',
    },
  },
};
