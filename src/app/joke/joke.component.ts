import { Joke } from './../joke';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input() data;
    jokes:Joke[] =  [
      new Joke("What do you call a group of 8 Hobbits?","A Hobbyte."),
      new Joke("Why do programmers wear glasses?","Because they need to C# 😒"),
      new Joke("A web developer walks into a restaurant, but immediately leaves why?","the restaurant was laid out in tables"),
      new Joke("Why do Java programmers hate communism?","They don't want to live in a classless society."),
      new Joke("What is a dying programmer's last program?","Goodbye, world!"),
      new Joke("Why did the functional programmer get thrown out of school?","Because he refused to take classes."),
      new Joke("Why is Linux safe?","Hackers peak through Windows only."),
      new Joke("Why did the Python programmer not respond to the foreign mails he got?","Because his interpreter was busy collecting garbage."),
      new Joke("How did the programmer die in the shower?","He read the shampoo bottle instructions: Lather. Rinse. Repeat."),
    ]

    // {
    //   setup:"What did the cheese say when it looked in the merror?",
    //   punchline:"Halloumi (Hello-Me)",
    //   hide:true
    // },
    // {
    //   setup:"What kind of cheese do you use disguise a small horse?",
    //   punchline:"Mascarpone (Mask-a-pony)",
    //   hide:true
    // },
    // {
    //   setup:"A kid threw a lamb of a chedder at me.",
    //   punchline:"I thought 'That's not very mature",
    //   hide:true
    // }


  constructor() {
  }

  ngOnInit(): void {

  }

}
