  const quoteGenerator = {
  quoteAmount: 1,
  firstGenerator: [
    ["Be not afraid of ", "Better to light ", "A closed mind is like "],
    ["an inch of gold ", "a bitter plant ", "a closed book "],
    ["that makes you wiser.", "in the darkness.", "on it's own."]
  ],
  secondGenerator: [
    ["Always check for spiders in ", "Build your shelter on ", "Set fire to "],
    ["a pair of your shoes ", "a bear's den ", "a machete "],
    ["in the mid-morning.", "with knots.", "in an emergency."]
  ],
  // Function to generate a random number between 0 and 3.
  randomNumber: function() {
    return Math.floor(Math.random() * 3);
  },
  // Generate a quote part from one of the 2D arrays.
  selectQuotePart: function(array, index) {
    let num = this.randomNumber();
      return array[index][num];
  },
  //Function to assemble the quote.
  assembleQuote: function(array) {
    var quote = "";
    for ( let i = 0; i < array.length; i++) {
      quote += this.selectQuotePart(array, i);
    }
    return quote;
  },
  // Function to check which radio button is selected.
  updateGenerator: function() {
    let currentGenerator = "";
    if (document.getElementById("firstGenerator").checked) {
      currentGenerator = quoteGenerator.firstGenerator;
      $("#quotesGenerateHereLabel").prepend("Buddha bestows upon you the following advice... ");
      $("#insertIcon").html("<img src='images/lotus-flower.png' class='pt-4'/>");
    } else {
      currentGenerator = quoteGenerator.secondGenerator;
      $("#quotesGenerateHereLabel").prepend("Bear Grylls takes a break from eating nasty things to advise you the following: ");
      $("#insertIcon").html("<img src='images/fire.png' class='pt-4'/>");
    }
    return currentGenerator;
  }
};

//Event Listeners

$(".questionOneButton").on('click', function() {
  $("#questionOne").slideUp(1000);
  $(".main-square").show();
});

$('#list-dropdown').change(function () {
  quoteGenerator.quoteAmount = $(this).find("option:selected").text();
});

//Click Me button event handler
$("#clickme").on("click", () => {
  document.getElementById("quotesGenerateHere").textContent = "";
  document.getElementById("quotesGenerateHereLabel").textContent = "";

  let currentGenerator2 = quoteGenerator.updateGenerator();
  for(let i = 0 ; i < quoteGenerator.quoteAmount; i++){
    document.getElementById("quotesGenerateHere").innerHTML += '"' + quoteGenerator.assembleQuote(currentGenerator2) + '"' + "</br>";
  }
});
