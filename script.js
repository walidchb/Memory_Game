const start = () => {
  const icons = [
    "fa-otter",
    "fa-otter",
    "fa-horse",
    "fa-horse",
    "fa-kiwi-bird",
    "fa-kiwi-bird",
    "fa-hippo",
    "fa-hippo",
    "fa-dragon",
  ];
  let counter=0;
  let j;
  let hasFlipedCard=false ;
  let firstCard , secondCard ;
  let cards = document.getElementsByClassName("card");
  let front = document.querySelectorAll(".card_front i");
  for (let i = icons.length - 1; i > 0; i--) {
    j = parseInt(Math.random() * (i + 1));
    [icons[i], icons[j]] = [icons[j], icons[i]];
  }
  for (let i = 0; i < front.length; i++) {
    front[i].classList.add(icons[i]);
  }
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.add("visible");
  }
  setTimeout(function () {
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove("visible");
    }
  }, 5000);
   
  function flipcard() {
     
    this.classList.add('visible');  
       console.log(this)
       if (!hasFlipedCard){
         hasFlipedCard = true ;
         firstCard = this ; 
         if (counter==4 && 
          firstCard.querySelector(".card_front i").classList.contains("fa-dragon")) 
        {
          firstCard.classList.add("matched");
          alert("BRAVOO!!");
        }
       }
       else {
         hasFlipedCard = false ;
         secondCard=this ;
         check();
       }
  }

  function check(){
    
    if (firstCard.querySelector(".card_front i").classList.
         contains(secondCard.querySelector(".card_front i").classList[1]))
    {        
      firstCard.removeEventListener('click' , flipcard) ;
      secondCard.removeEventListener('click' , flipcard) ;
      firstCard.classList.add("matched");
      secondCard.classList.add("matched");
      counter++;
    }

    else {
      setTimeout( () => {
      firstCard.classList.remove('visible');
      secondCard.classList.remove('visible');
      },2500);       
     }
  }


  for (let v of cards) {
    v.addEventListener("click", flipcard);
  }

}

  







if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}




