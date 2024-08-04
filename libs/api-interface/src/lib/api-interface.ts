import { isProduction } from '@anton-suite/utils-general';

export type ApiResponse = {
  data: unknown
}

export const ANTON_API_URL = isProduction ? 'http://api.anton.mrck.dev/api' : "http://localhost:8080/api"

