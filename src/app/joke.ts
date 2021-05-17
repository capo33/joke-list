export class Joke{
  setup:string;
  punchline:string;
  hide:boolean;
  constructor(setup:string, punshline:string){
    this.setup = setup,
    this.punchline = punshline,
    this.hide = true
  }

  toggle(){
    this.hide = ! this.hide
  }
}
