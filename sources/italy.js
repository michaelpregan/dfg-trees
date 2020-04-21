module.exports = [
  {
    id: 'bologna_it',
    short: 'Bologna',
    long: 'Comune di Bologna',
    country: 'Italy',
    download: 'http://dati.comune.bologna.it/download/file/fid/3989',
    info: 'http://dati.comune.bologna.it/node/207',
    crosswalk: {
      scientific: 'decodifi_4',
      circumference: 'decodifi_2', //??
      ref: 'NUM_PT',
      // CL_H? height? health?
    },
    license: { id: 'CC-BY-3.0' }
  },
  {
    id: 'villa_manin_it',
    short: 'Villa_Manin',
    country: 'Italy',
    download: 'https://www.dati.friuliveneziagiulia.it/api/views/uqpq-dr8x/rows.csv?accessType=DOWNLOAD',
    info: 'https://www.dati.friuliveneziagiulia.it/dataset/Alberi-di-Villa-Manin/uqpq-dr8x',
    crosswalk: {
      location: 'dove',
      scientific: 'specie',
      family: 'familia',
      updated: 'data rilievo',
      // lots more fields with very weird names like 'SFRC|SFR', 'PIP|PI'
    }
  }
].map(s => ({ ...s, country: 'Italy' }))
