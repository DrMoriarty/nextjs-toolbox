import fetch from 'node-fetch'

const parseParams = (event) => {
  var params = {};

  const query = event.queryStringParameters || {}
  var body = {}
  if (event.body) {
    body = JSON.parse(event.body)
  }
  
  if (query.bundle || body.bundle) {
    params['bundle'] = query.bundle || body.bundle
  }
  params['device'] = query.device || body.device || ""
  params['country'] = query.country || body.country || ""
  params['country2'] = query.country2 || body.country2 || ""
  params['operator'] = query.operator || body.operator || query.Operator || body.Operator || ""
  params['bid'] = query.bid || body.bid || ""
  params['proxied_ip'] = event.headers["client-ip"]
  
  return params;
}

export const handler = async (event) => {
  const result = parseParams(event);
  return {
    statusCode: 200,
    body: JSON.stringify(result)
  }
}
