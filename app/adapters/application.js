import DS from 'ember-data';

var config = {
  host: 'http://api.ember-cli-101.com',
  namespace: 'api'
};

export default DS.ActiveModelAdapter.reopen(config);
