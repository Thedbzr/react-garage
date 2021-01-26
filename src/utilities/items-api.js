import { getToken} from './users-service';

const BASE_URL = '/api/cars';

export function getAll(){
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function create(car) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(car)
  }).then(res => res.json());
}


export function update(car){
  return fetch(`${BASE_URL}/${car._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(car)
  }).then(res => res.json());
}

export function deleteOne(id){
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {'content-type': 'application/json'}
  }).then(res => res.json());
}

/*-- Helper functions --*/

async function sendRequest(url, method = 'GET', payload = null) {
    // Fetch takes an optional options object as the 2nd argument
    // used to include a data payload, set headers, etc. 
    const options = { method };
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }
    const token = getToken();
    if (token) {
      // Ensure headers object exists
      options.headers = options.headers || {};
      // Add token to an Authorization header
      // Prefacing with 'Bearer' is recommended in the HTTP specification
      options.headers.Authorization = `Bearer ${token}`;
    }
    const res = await fetch(url, options);
    // res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) return res.json();
    throw new Error('Bad Request');
  }