//implementation classe raquette
class Raquette{
    /**
     * constructeur de la classe Raquette
     * @param $element
     */
    constructor($element){
        this.$element = $element;
        this.hauteur = $element.height();
        this.largeur =$element.width();
        this.positionX = parseInt(this.$element.css("left"));
        this.positionY = parseInt(this.$element.css("top"));
        this.vitesseY = 0;
        this.gauche = true; //boolean pour savoir si c'est le joueur de droite ou de gauche(true = joueur de gauche/ false = joueur de droite)

    }


    /**
     * getter
     * @returns {*}
     */
    get bas(){
        return this.positionY + this.hauteur;
    }
    get droite(){
        return this.positionX + this.largeur;
    }

    /**
     * setter
     * @param value
     */
    set bas(value) {
        this.positionY = value - this.hauteur;
    }
    set droite(value) /*inutile mais important :o */{
        this.positionX = value - this.largeur;
    }


    /**
     * fonction permettant de definir le joueur (cf constructor)
     * @param terrain
     */
    checkJoueur(terrain){
        this.gauche = (this.positionX < terrain.largeur / 2);
    }

    /**
     * fonction permettant de faire bouger les deux raquette de haut en bas automatiquement
     */
    bouger(){
        this.positionY = this.positionY + this.vitesseY;
        this.majHTML();
    }

    /**
     * fonction permettant d'arreter le deplacement de la raquette
     */
    arreterDeBouger(){
        this.vitesseY = 0;
    }

    /**
     * fonction permettant de faire monter la raquette jusqu'au bord du haut
     */
    monter(){
        if (this.positionY > 0){
            this.vitesseY = -3;
        }
        else{
            this.positionY = 0;
            this.arreterDeBouger();
        }
    }

    /**
     * fonction permettant de faire descendre la raquette jusqu'au bord du haut
     */
    descendre(){
        if (this.bas < terrain.hauteur){
            this.vitesseY = 3;
        }
        else{
            this.bas = terrain.hauteur;
            this.arreterDeBouger();
        }
    }


    /**
     * fonction permettant le calcul de l'angle de rebond de la balle en fonction de la raquette
     * @param positionYBalle
     */
    calculRebond(positionYBalle){
        //0% de la raquette : sens =  0
        //50% de la raquette : sens = 3
        //100% de la raquette : sens = 6
        //le tout -3
        console.log("On est la");
        console.log ("pos balle :",positionYBalle);
        console.log("pos raquette :",this.positionY);
        console.log("pos relative :",positionYBalle-this.positionY);
        console.log("hauteur raquette:",this.hauteur);
        console.log(((positionYBalle - this.positionY)*this.hauteur/6)-3);
        //return ((positionYBalle - this.positionY)*this.hauteur/6)-3;

        /*Resultat de debug
        console.log("positionYBalle : " , positionYBalle);
        console.log("this.positionY : " , this.positionY);
        console.log("this.hauteur : " , this.hauteur);
        console.log("position relative : " , positionYBalle - this.positionY);
        console.log("Position relative * 100 : ",(positionYBalle - this.positionY)*6);
        console.log("Regle de 3 entre 0 et 6 " , ((positionYBalle - this.positionY)*6/100));
         */
        return (((positionYBalle - this.positionY)*6/100)-3);
    }

    /**
     * fonction de mise a jour graphique de l'objet raquette
     */
    majHTML(){
        this.$element.css("left",this.positionX);
        this.$element.css("top",this.positionY);
    }

}