import fakeResponse from './fakeResponse.js';

export const handler = async (event) => {
  // Netlify Functions need to return an object with a statusCode
  // Other properties such as headers or body can also be included.
  return {
    statusCode: 200,
    body: fakeResponse()
  }
}
