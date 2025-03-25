const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'angular_template',
    logoUrl: '',
  },
  apis: {
    default: {
      url: '',
      rootNamespace: '',
    },
  },
  firebaseConfig: {
    apiKey: 'AIzaSyAYsRwOxq7ysUaTFTKaM7k1Jt2EBojVOqk',
    authDomain: 'giphy-e8c54.firebaseapp.com',
    databaseURL: 'https://giphy-e8c54-default-rtdb.firebaseio.com',
    projectId: 'giphy-e8c54',
    storageBucket: 'giphy-e8c54.firebasestorage.app',
    messagingSenderId: '206538829301',
    appId: '1:206538829301:web:6e02f68b2ebf7f3719c4bc',
    measurementId: 'G-GJMMQG5RQJ',
  },
};
