function rolld6(nrOfDice) {
    d6 = Math.floor(Math.random() * 6) + 1;
    var results1 = [d6];
    for (var i = 0 ; i <= nrOfDice; i++){
        results1.sort(function(a, b) {
            return a - b;
          });
          console.log(results1);
        }
    }
    rolld6(5);
