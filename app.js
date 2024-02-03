// Challenge 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").addEventListener("click", function () {
    state.Cheese = !state.Cheese;
    renderAll();
  });
  
  // Challenge 2 - Setup event listener for the tomatoes button
  document.querySelector(".btn-tomatoes").addEventListener("click", function () {
    state.Tomatoes = !state.Tomatoes;
    renderAll();
  });
  
  // Challenge 2 - Setup event listener for the onion button
  document.querySelector(".btn-onions").addEventListener("click", function () {
    state.Onions = !state.Onions;
    renderAll();
  });
  
  // Challenge 2 - Setup event listener for the lettuce button
  document.querySelector(".btn-lettuce").addEventListener("click", function () {
    state.Lettuce = !state.Lettuce;
    renderAll();
  });
  
  // Challenge 1 - Add/Remove the class active to the buttons based on state
  function renderButtons() {
    let buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
      let item = button.textContent;
      if (state[item]) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }
  
  // Challenge 2 - Render only the items selected in the ingredients board based on the state
  function renderIngredientsBoard() {
    let items = document.querySelectorAll(".items");
    items.forEach((item) => {
      if (state[item.textContent]) {
        item.style.display = "inherit";
      } else {
        item.style.display = "none";
      }
    });
  }
  
  // Judgement 1 - In the p element having price-details as the class, display the calculated
  // price based on ingredients
  function renderPrice() {
    let price = document.querySelector(".price-details");
    let finalPrice = wholeWheatBun;
    for (let item in state) {
      if (state[item]) {
        finalPrice += ingredients[item];
      }
    }
    price.textContent = "INR" + finalPrice;
  }
  
  // Additional - Event listener for patty button using addEventListener
  document.querySelector(".btn-patty").addEventListener("click", function () {
    state.Patty = !state.Patty;
    renderAll();
  });
  