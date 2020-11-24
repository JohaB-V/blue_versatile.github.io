const createProduct = (shirt) => {

    var shirtElement = document.createElement("div");
    shirtElement.classList.add("shirt-container")
    shirtElement.classList.add("w3-col")
    shirtElement.classList.add("l4")
    shirtElement.classList.add("s6")

    shirtElement.innerHTML = `
   
    <div class="w3-container">
        <div class="w3-display-container">
          <img src="${shirt.src}" class="img-product">
          <span class="w3-tag w3-display-topleft">New</span>
          <span class="w3-tag w3-display-bottomright">OverSize T : S/M</span>
          <div class="w3-tag w3-display-bottomleft w3-display-hover wp"> 
          <a href="https://wa.me/message/EZ2UDNX4VXM4N1"><i class="fa fa-whatsapp"></i></a>
  
          
          </div>
        </div>
        <p class="title-product">${shirt.title}<br><b>$ ${shirt.price}</b></p>
    </div>
    
   
    
    `
    return shirtElement;
}