//implementation classe terrain
class Terrain{
    /**
     * constructeur de la classe Terrain
     * @param $element
     */
    constructor($element){
        this.$element = $element;
        this.largeur = $element.width();
        this.hauteur = $element.height();
    }

    /**
     * fonction d'ecoute des touches
     * @param joueur0
     * @param joueur1
     * @param raquetteGauche
     * @param raquetteDroite
     */
    jouer(joueur0, joueur1, raquetteGauche, raquetteDroite){
        window.addEventListener("keydown", function (event) {
            if (event.defaultPrevented) { return}
            if(event.key === "a"){
                raquetteGauche.monter();
            }
            else if (event.key === "q"){
                raquetteGauche.descendre();
            }
            else if (event.key === "p"){
                raquetteDroite.monter();
            }
            else if (event.key === "m"){
                raquetteDroite.descendre();
            }
            event.preventDefault();
          }, true);

          window.addEventListener("keyup", function (event) {
            if (event.defaultPrevented) { return}
            if(event.key === "a" || event.key === "q"){
                raquetteGauche.arreterDeBouger();
            }
            else if(event.key === "p" || event.key === "m"){
                raquetteDroite.arreterDeBouger();
            }
            event.preventDefault();
          }, true);
    }
  }
  