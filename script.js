//Créaction des citation

let citations=["Le succès, c'est se promener d'échecs en échecs tout en restant motivé.","Ils ne savaient pas que c’était impossible, alors ils l’ont fait.","La vie, c’est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre","Le plus grand échec est de ne pas avoir le courage d’oser.","Faites que le rêve dévore votre vie afin que la vie ne dévore pas votre rêve.","Ce n’est pas parce que les choses sont difficiles que nous n’osons pas, c’est parce que nous n’osons pas qu’elles sont difficiles.",
    "L’avenir appartient à ceux qui croient à la beauté de leurs rêves.",
    "Commencez là où vous êtes. Utilisez ce que vous avez. Faites ce que vous pouvez.",
    "Vous ne trouverez jamais ce que vous ne cherchez pas.",
    "Le seul endroit où le succès vient avant le travail, c’est dans le dictionnaire.",
    "Croyez en vous-même et tout devient possible.",
    "Ce n’est pas la force mais la persévérance qui fait les grandes œuvres",
    "Il n’y a qu’une façon d’échouer, c’est d’abandonner avant d’avoir réussi.",
    "Tout ce que l’esprit de l’homme peut concevoir et croire, il peut l’accomplir",
    "Ne rêve pas ta vie, vis tes rêves.",
    "Ce que vous faites aujourd’hui peut améliorer tous vos lendemains.",
    "Rêve grand. Commence petit. Agis maintenant.",
    "L'échec n'est pas le contraire du succès, c'est une partie du succès.",
    "Les gagnants trouvent des moyens, les perdants des excuses.",
    "Fais de ta vie un rêve, et d’un rêve, une réalité.",
    "Il n’y a pas de vent favorable pour celui qui ne sait pas où il va.",
    "L’espoir est la chose la plus puissante que nous ayons.",
    "Celui qui déplace une montagne commence par déplacer de petites pierres.",
    "La plus grande gloire n’est pas de ne jamais tomber, mais de se relever à chaque chute.",
    "Le futur appartient à ceux qui se lèvent tôt.",


];


//Tableau contenant la liste des auteurs même ordre et indice que le taableau des citations 
let auteurs=['Winston Churchill','Mark Twain','Albert Einstein','Abbé Pierre','Antoine de Saint-Exupéry','Sénèque','Eleanor Roosevelt',' Arthur Ashe','Confucius','Vidal Sassoon','Anonyme','Samuel Johnson','Georges Clémenceau','Georges Clémenceau','Napoleon Hill','Anonyme','Ralph Marston','Robin Sharma','Arianna Huffington','Franklin Roosevelt','Antoine de Saint-Exupéry','Sénèque','Michelle Obama','Confucius','Nelson Mandela','Proverbe africain'];

//Création de la liste des couleurs 

let liste_couleurs=['green','rgb(255, 38, 0)',"rgb(25, 103, 227)","red",'blue','black','gray','orange','purple','pink','navy','olive','maroon','lime','chocolate','crimson','darkBlue','DarkCyan','magenta','silver','indigo','teal','coral','darkcyan','lightBlue','brown','darkGreen','darkKaki','turquoise','lavander','darkMagenta','darkSlateGray','MidnightBlue','saddleBrown','fireBrick'];


//Sélection des éléments 
let paragraphe=document.querySelector('.citation_content p');

let espace_auteur=document.querySelector('.citation_content h4');
let conteneur_citation=document.querySelector('.citation_content');

let button_nv_citation=document.querySelector('.button_nouvelle_citation');
let container=document.querySelector('.container');




function afficherCitation(){
    let indice=Math.round(Math.random()*citations.length-1);
    paragraphe.innerHTML=citations[indice];
    espace_auteur.innerHTML=auteurs[indice];
    let indice_color=Math.round(Math.random()*liste_couleurs.length);
    container.style.background=liste_couleurs[indice_color];
    button_nv_citation.style.color=liste_couleurs[indice_color];
    paragraphe.style.color=liste_couleurs[indice_color]



}
    


    // document.writeln(citations[indice]);


