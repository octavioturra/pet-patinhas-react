import URLS from './url';
import * as animal from './animal';
import * as auth from './auth';
import * as follow from './follow';
import * as like from './like';

const services = {
  animal,
  auth,
  follow,
  like
};

function perform(resource, action, payload){
  return services[resource][action](payload);
}
