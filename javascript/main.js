"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      images: [
        "./img/01.webp",
        "./img/02.webp",
        "./img/03.webp",
        "./img/04.webp",
        "./img/05.webp",
      ],

      titles: [
        "Marvel's Spiderman Miles Morales",
        "Ratchet & Clank: Rift Apart",
        "Fortnite",
        "Stray",
        "Marvel's Avengers",
      ],

      texts: [
        "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
      ],

      // Variabile contatore
      active: 0,
    };
  },

  methods: {
    next() {
      this.active++;
      if (this.active >= this.images.length) {
        this.active = 0;
      }
    },
    previous() {
      this.active--;
      if (this.active < 0) {
        this.active = images.length - 1;
      }
    },
  },

  // mounted() {
  //   if (this.active >= this.images.length) {
  //     this.active = 0;
  //   } else if (this.active < 0) {
  //     this.active = images.length - 1;
  //   }
  // },
}).mount("#app");

// // Variabile per il setInterval
// let interval;

// // Funzione per il loop infinito dello scorrere delle immagini
// function show(index) {
//   if (index >= images.length) {
//     active = 0;
//   } else if (index < 0) {
//     active = images.length - 1;
//   }
// }

// // Funzione per visualizzare le immagini con il bottone freccia su
// function previous() {
//   clearInterval(interval);
//   document
//     .getElementsByClassName("item", "active")
//     [active].classList.remove("active");
//   active--;
//   show(active);
//   document.getElementsByClassName("item")[active].classList.add("active");
// }

// // Funzione per visualizzare le immagini con il bottone freccia giu
// function next(pos) {
//   document
//     .getElementsByClassName("item", "active")
//     [active].classList.remove("active");

//   if (isNaN(pos)) {
//     active++;
//   } else {
//     active = pos;
//   }
//   show(active);
//   document.getElementsByClassName("item")[active].classList.add("active");
// }

// show();

// // Evento click bottone freccia giu
// document.querySelector(".next").addEventListener("click", next);

// // Evento click bottone freccia su
// document.querySelector(".prev").addEventListener("click", previous);

/*  Aprire ticket perchè la stessa funzione next, se attivato l'interval, dà un
comportamento strano ai thumbnails  */
