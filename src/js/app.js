// Place JS here.
var motif  = /^[0-9]{2}\.[0-9]{2}\.[0-9]{2}$/;

function chk_motif() {
  var chaine = document.querySelector('.reg_test').value;
  console.log(
    ` motif: ${motif}, chaine: ${chaine},
    réponse: ${motif.test(chaine)}
    `
  );
};

var ary = [1,2,3,4,5,6];

// const foisdeux = ary.map(num => num * 2);
// console.log(foisdeux)

const foisdeux = ary.map((num) => num * 2 +' hello');
console.log(foisdeux)
