export class Todo {
  constructor(
    public id: number,
    public text: string,
    public isCompleted: boolean = false
  ) {}
}
