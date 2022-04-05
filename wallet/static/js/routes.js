const routes = [
    {
      path: '/',
      getTemplate: (params) => '<h1>index</h1>'
    },
    {
      path: '/home',
      getTemplate: (params) => '<h1>Home</h1>',
    },
    {
      path: '/main',
      getTemplate: (params) => '<h1>Main</h1>',
    },
    {
      path: '/wallet/:userId',
      getTemplate: (params) => `<h1>wallet ${params.userId}</h1>`,
    },
  ];
  