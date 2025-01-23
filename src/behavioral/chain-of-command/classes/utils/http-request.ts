export class HttpRequest {
  constructor(
    public user: string | null,
    public token: string | null,
    public data: any
  ) {}
}
