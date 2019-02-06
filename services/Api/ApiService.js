import axios from 'axios';

/**
 * Base URL for sending the api requests.
 */
const BASE_URL = 'http://36dfbba0.ngrok.io/api/';

/**
 * Default headers for sending the api requests.
 */
const DEFAULT_HEADERS = {}

/**
 * Class represents the API service. It should be used for
 * communication with server.
 *
 * @class ApiService
 */
class ApiService {
  /**
   * Makes HTTP request. 
   *
   * @static
   * @param {string} [method='GET'] Request method
   * @param {string} [url=''] URL on which the request will be sent
   * @param {object} [data={}] Request payload
   * @param {object} [headers={}] Additional request headers 
   * @returns HTTP response
   * @memberof ApiService
   */
  static async _request(method = 'GET', url = '', data = {}, headers = {}) {
    let request = {
      url: `${BASE_URL}${url}`,
      method,
      headers: {
        ...DEFAULT_HEADERS,
        ...headers
      }
    };

    if (method.toUpperCase() !== 'GET') {
      requests = {
        ...request,
        data
      };
    } else if (data instanceof Object) {
      request = {
        ...request,
        params: data
      };
    }

    return axios(request);
  }
  
  /**
   * Makes the HTTP request with GET method.
   *
   * @static
   * @param {string} url URL on which the request will be sent
   * @param {object} data Request payload
   * @param {object} headers Additional request headers 
   * @returns HTTP response
   * @memberof ApiService
   */
  static async get(url, data, headers) {
    return this.this._request('GET', url, data, headers);
  }

  /**
   * Makes the HTTP request with POST method.
   *
   * @static
   * @param {string} url URL on which the request will be sent
   * @param {object} data Request payload
   * @param {object} headers Additional request headers 
   * @returns HTTP response
   * @memberof ApiService
   */
  static async post(url, data, headers) {
    return this._request('POST', url, data, headers);
  }

  /**
   * Makes the HTTP request with PUT method.
   *
   * @static
   * @param {string} url URL on which the request will be sent
   * @param {object} data Request payload
   * @param {object} headers Additional request headers 
   * @returns HTTP response
   * @memberof ApiService
   */
  static async put(url, data, headers) {
    return this._request('PUT', url, data, headers);
  }

  /**
   * Makes the HTTP request with DELETE method.
   *
   * @static
   * @param {string} url URL on which the request will be sent
   * @param {object} data Request payload
   * @param {object} headers Additional request headers 
   * @returns HTTP response
   * @memberof ApiService
   */
  static async delete(url, data, headers) {
    return this._request('DELETE', url, data, headers);
  }
}

export default ApiService;