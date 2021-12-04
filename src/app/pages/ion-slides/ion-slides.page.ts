import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ToastController } from '@ionic/angular';

interface Question {
  question:string;
  answer1:string;
  answer2:string;
  answer3:string;
  answer4:string;
}

interface Buttons {
  fill:string;
  color:string;
}

@Component({
  selector: 'app-ion-slides',
  templateUrl: './ion-slides.page.html',
  styleUrls: ['./ion-slides.page.scss'],
})
export class IonSlidesPage implements OnInit {
  @ViewChild(IonSlides, { static:true }) slides: IonSlides;

  questions: Question[] = [];
  button1: Buttons = {
    fill:"outline",
    color:"primary"
  };
  button2: Buttons = {
    fill:"outline",
    color:"primary"
  };
  button3: Buttons = {
    fill:"outline",
    color:"primary"
  };
  button4: Buttons = {
    fill:"outline",
    color:"primary"
  };

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(public toastController: ToastController) { 
    var question1: Question = {
      question:"¿Cuál es tu lenguaje de programación preferido?",
      answer1:"Javascript",
      answer2:"Python",
      answer3:"Typescript",
      answer4:"Swift"
    };
    var question2: Question = {
      question:"¿Cuál es tu Framework de programación preferido?",
      answer1:"Flutter",
      answer2:"Angular",
      answer3:"React",
      answer4:"Vue"
    };
    var question3: Question = {
      question:"¿Cuál es tu Base de datos preferida?",
      answer1:"Realtime Database",
      answer2:"Firestore",
      answer3:"Mongo DB",
      answer4:"PostgreSQL"
    };

    this.questions.push(question1);
    this.questions.push(question2);
    this.questions.push(question3);
    
    this.slides.lockSwipeToNext(true);
  }

  ngOnInit() {
  }

  getEvent(event) {
    
  }

  nextSlide() {
    this.resetButtonsStyle();
    this.slides.slideNext();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Gracias por tu respuesta',
      duration: 1000,
      color:"primary",
      position:"top"
    });
    toast.present();
  }

  resetButtonsStyle() {
    this.button1 = {
      fill:"outline",
      color:"primary"
    };
    this.button2 = {
      fill:"outline",
      color:"primary"
    };
    this.button3 = {
      fill:"outline",
      color:"primary"
    };
    this.button4 = {
      fill:"outline",
      color:"primary"
    };
  }

  applyButtonSelectedStyle(buttonSelected: number) {
    switch (buttonSelected) {
      case 1:
        this.button1 = {
          fill:"solid",
          color:"success"
        };
        break;
      case 2:
        this.button2 = {
          fill:"solid",
          color:"success"
        };
        break;
      case 3:
        this.button3 = {
          fill:"solid",
          color:"success"
        };
        break;
      case 4:
        this.button4 = {
          fill:"solid",
          color:"success"
        };
        break;
    }
  }

  respondPoll(buttonSelected: number) {
    this.presentToast();
    this.applyButtonSelectedStyle(buttonSelected);
    
    setTimeout(() => {
        this.slides.lockSwipeToNext(false);
        this.nextSlide();
    }, 1500);
  }
}
