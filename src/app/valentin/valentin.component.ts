import { Component } from '@angular/core';

@Component({
  selector: 'app-valentin',
  standalone: false,
  templateUrl: './valentin.component.html',
  styleUrls: ['./valentin.component.css']
})
export class ValentinComponent {
  mostrarGif = true;
  gifUrl = 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNng3OWUxZWx0dHNqYnk3cXN0Mjk4dW04bWw2ZzFncTZqeDI2eWUzNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/qF8PYgCQZBfgQpSjaT/giphy.gif'; // GIF inicial
  respuesta = '';
  mostrarGif2 = false;
  gifUrl2 = '';
  botonVisible = true;
  textoVisible = true;

  gifsNo = [
    'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWZkbGo5MHcybDAyZmtmaXRsa2MwM3Rrb3IxYXRvZTBhOThodm4zbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/SF0RRWt5Of1geqISIB/giphy.gif',
    'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTdmb3A5NXlxczV5MGM1eGdpMmxxdXdxaDI4bm1wMzYzaGs5emF1ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/5UI63rmh6V2Xpl8FjR/giphy.gif',
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDA1eHBsNWF2bDd3N3k1N2prejN0aDdjdHVpN2MzN2xuYzZwejJqYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/HTJtHxDGMBgC41i1JO/giphy.gif', // Puedes añadir más GIFs aquí
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHNqcmdtY2owcDV6aWk3cWN5MXg1MHdrbjdyY2c4NzB5am5qdHJxNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/D2fNw63A4Y4tuXs5UJ/giphy.gif',
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGdhbHJ2MTBidHE0MGlnbWV1MzExYm8yaWNpZnptMnBleXh1em9qbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/yHxx5EZNbkyY1AJqg9/giphy.gif',
    'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWgxOXdxbjNuYWliNmp4Y2I1N3I5NGNmdTdob2VzaHBqdWFiMmJicyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ZHxu9h2L6XjoP2wTYQ/giphy.gif',
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTUzZXhnaTRjeTVtMzdxZmQ5aDllOTh2cHJkOXdmNWljbDF4ODhtbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/owOH8rcysEmibjMwWa/giphy.gif',
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmxzMG42Nzk3ZHB2dTc3MHoxanByZ3R5dW52cWNqeTJta2JveDFnNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/DJtn7lC1mB99Z1h4Cb/giphy.gif'
  ];

  responderNo() {
    // Cambiar tamaño de los botones y respuesta
    this.respuesta = "¡Oh no! ¿segura que NO quieres ser mi Valentín?";
    this.mostrarGif = true;
    this.mostrarGif2 = false;

    // Seleccionar un GIF aleatorio de la lista
    const randomIndex = Math.floor(Math.random() * this.gifsNo.length);
    this.gifUrl = this.gifsNo[randomIndex];
  }

  responderSi() {
    // Cambiar el mensaje y el gif
    this.respuesta = '¡Dijiste que si! Wow que hago, nunca pense llegar tan lejos...!!';
    this.mostrarGif = true;
    this.gifUrl = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2VicWMxZTZlcjF4d3MyNmxuN2Ftbm1mcTI3ZXU5dGk4aG04aDU2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ClHi0BdhrN9Uf1UksE/giphy.gif';
    this.mostrarGif2 = true;
    this.gifUrl2 = 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3h2ZDVpemU1enp0dW5yZ3hub3gxdHIyMHZ3bGhjZXBmb3I0MWVxdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/VknXIkKKhC83XKhbAG/giphy.gif';
    this.botonVisible = false; // Ocultar botones
    this.textoVisible = false;
  }
}