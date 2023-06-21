module.exports = {
  apps: [
    {
      name: 'stapa',
      script: 'yarn',
      args: 'start', 
      watch: true,
      ignore_watch: ['node_modules', '.next'],
      watch_options: {
        followSymlinks: false,
      },
    },
  ],
};

