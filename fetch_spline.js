import https from 'https';
https.get('https://my.spline.design/interactiveaiwebsite-poQvWSoPKf6kl87HvJDaRZDU/', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => { console.log(data); });
});
