import { AxiosInstance } from 'axios';

export abstract class RequestAPI {
  constructor(protected axios: AxiosInstance) {}
}
