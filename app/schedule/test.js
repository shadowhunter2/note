module.exports = {
  schedule: {
    interval: '1s', 
    // cron: '* 2 18 * * *',
    type: 'all', 
    disable: true
  },
  async task(ctx) {
    console.log('test schedule');
  },
}