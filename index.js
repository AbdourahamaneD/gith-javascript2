document.write("Bonjour tout le monde...")
document.write("<br/>")
let nombre1 = 30
const pi = 3.14
console.log(nombre1)
console.log(pi)
valeur1=nombre1*pi
document.write("<br/>"+nombre1)
document.write("<br/>"+valeur1)
document.write("<br/>")

//les objets
const personne = {
    nom : 'DIALLO',
    prenom : 'Abdourahamane',
    age : 18
}
document.write('<br/>'+personne.nom)
document.write('<br/>'+personne.prenom)
document.write('<br/>'+personne.age)
document.write("<br/>")

//les conditions
if(personne.nom == 'DIALLO'){
    document.write('<br/>'+"Yeah it's DIALLO")
}
else if(personne.nom == 'DIALLO'){
    document.write('<br/>'+"Yeah it's not DIALLO")
}
else{
    document.write("<br/>"+"sike, it's the wrong name")
}


document.write("<br/>")
//Les tableaux

const nom = "capital"
const capital = ["Conakry", "washington", "Rome", "Tokyo"]
const valeur = [1,2,3,4,5]

document.write("<br/>"+capital[0])
document.write("<br/>"+capital[2])
document.write("<br/>"+capital[1])
document.write("<br/>")


//LES BOUCLES
for(let i = 0 ; i < 10 ; i++){
    document.write("<br/>"+i)
}
