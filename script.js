document.getElementById('generer').addEventListener('click', function() {
    var couleur1 = document.getElementById('couleur1').value;
    var couleur2 = document.getElementById('couleur2').value;
    var resultat = document.getElementById('resultat');

    resultat.style.background = `linear-gradient(to right, ${couleur1}, ${couleur2})`;
});
