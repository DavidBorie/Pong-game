

//if (lance){
//creation des objets
    let terrain = new Terrain($("#terrain"));
    let balle = new Balle($("#balle"));
    let joueur0 = new Joueur($("#Sgauche"));
    let joueur1 = new Joueur($("#Sdroite"));
    let raquetteDroite = new Raquette($("#droite"));
    let raquetteGauche = new Raquette($("#gauche"));

//attribution du boolean de positionnement du joueur
    joueur0.cote = 0;
    joueur1.cote = 1;

    raquetteGauche.checkJoueur(terrain);
    raquetteDroite.checkJoueur(terrain);

    raquetteGauche.positionY = terrain.hauteur / 2 - (raquetteGauche.hauteur / 2);
    raquetteDroite.positionY = terrain.hauteur / 2 - (raquetteDroite.hauteur / 2);

//ecoute des touches pour le controles des raquettes
    terrain.jouer(joueur0, joueur1, raquetteGauche, raquetteDroite);

    /**
     * lancement boucle de jeu
     */
    //let lance = false
    ($(".btn")).click(function () {
        var $this = $("#titre");
        $this.addClass('invisible');
        //lance = true
        setInterval(function () {
            balle.bouger(terrain, joueur0, joueur1);
            raquetteGauche.bouger(terrain);
            raquetteDroite.bouger(terrain);
        }, 10);
    });


