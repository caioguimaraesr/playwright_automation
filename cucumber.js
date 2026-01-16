module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['src/support/*.ts', 'features/steps/*.ts'],
    format: ['progress', 'html:reports/cucumber-report.html'],
    paths: ['features/**/*.feature'], // Busca em qualquer subpasta de features
    publishQuiet: true
  }
};