export class PostModel {
  constructor(
    public id: number,
    public title: string,
    public subtitle: string | null,
    public author: string,
    public date: string,
  ) {}
}
