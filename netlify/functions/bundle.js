import fetch from 'node-fetch'
import parseParams from './parseParams.js';

export const handler = async (event) => {
  const result = parseParams(event);
  return {
    statusCode: 200,
    body: JSON.stringify(result)
  }
}
