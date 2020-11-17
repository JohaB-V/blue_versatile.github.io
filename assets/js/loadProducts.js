var shirtContainer = document.querySelector("#shirt-container");


clothes.shirts.forEach(shirt => {

    var shirtElement = document.createElement("div");
    shirtElement.classList.add("shirt-container")
    shirtElement.classList.add("w3-col")
    shirtElement.classList.add("l3")
    shirtElement.classList.add("s6")

    shirtElement.innerHTML = `
   
    <div class="w3-container">
        <div class="w3-display-container">
          <img src="${shirt.src}" class="img-product">
          <span class="w3-tag w3-display-topleft">New</span>
          <div class="w3-display-middle w3-display-hover">
            <button class="w3-button w3-black">Buy now <i class="fa fa-shopping-cart"></i></button>
          </div>
        </div>
        <p>${shirt.title}<br><b>$ ${shirt.price}</b></p>
    </div>
    
   
    
    `
    shirtContainer.appendChild(shirtElement);


})

