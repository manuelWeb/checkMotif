// Place JS here.
var motif  = /^[0-9]{2}\.[0-9]{2}\.[0-9]{2}$/;

var chk_motif = function (chaine) {
  console.log(
    ` motif: ${motif}, chaine: ${chaine},
    réponse: ${motif.test(chaine)}
    `
  );
};

// exo .amp et fct flechée
var ary = [1,2,3,4,5,6];
// const foisdeux = ary.map(num => num * 2);
// console.log(foisdeux)
const foisdeux = ary.map((num) => num * 2 +' hello');
console.log(foisdeux);
