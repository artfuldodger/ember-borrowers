import DS from 'ember-data';

var config = {
  host: 'http://api.ember-cli-101.com',
  namespace: 'api/v2'
};

export default DS.ActiveModelAdapter.reopen(config);
