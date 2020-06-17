let oblicz = {
  data: document.querySelector(".data"),
  godzina: document.querySelector(".godzina"),
  licz1: document.querySelector(".btn1"),
  wynik1: document.querySelector(".wynik1"),
  czas: document.querySelector(".czas"),
  licz2: document.querySelector(".btn2"),
  wynik2: document.querySelector(".wynik2"),

  init:function(){

    this.licz1.addEventListener("click", function() {
        let time = new Date(this.data.value+"T"+this.godzina.value);
        this.wynik1.innerText = time.getTime() / 1000;
    }
    .bind(this)
    )

  this.licz2.addEventListener("click", function(){
        let time = new Date();
        time.setTime(this.czas.value*1000);
        this.wynik2.innerText = time.getDate()+"."+(time.getMonth() + 1)+"."+time.getFullYear()+" "+time.getHours()+":"+time.getMinutes();
  }
  .bind(this)
  )
  }
}
oblicz.init();
