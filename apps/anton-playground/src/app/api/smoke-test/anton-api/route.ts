import { ANTON_API_URL } from '@anton-suite/api-interface';

const baseApiUrl = ANTON_API_URL

export async function GET(request: Request) {

  const url = `${baseApiUrl}/smoke-test`

    const response = await fetch(url, {method: 'GET'})
  const json = await response.json()

  return Response.json({
    data: json
  })
}
