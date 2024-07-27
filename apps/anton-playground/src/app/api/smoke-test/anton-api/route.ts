const baseApiUrl = 'http://localhost:8080/api'

export async function GET(request: Request) {

  const url = `${baseApiUrl}/smoke-test`

    const response = await fetch(url, {method: 'GET'})
  const json = await response.json()


  return Response.json({
    data: json
  })
}
