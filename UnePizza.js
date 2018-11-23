class UnePizza
{
/*  ref;
  intitule;
  image_url;
  liste_ingredient;
  prix;
  nombre_commande=0;*/
  constructor(pref, pintitule,pimage_url,pliste_ingredient,pprix,pnombre_commande)
  {
    this.ref=pref;
    this.intitule=pintitule;
    this.image_url=pimage_url;
    this.liste_ingredient=pliste_ingredient;
    this.prix=pprix;
    this.nombre_commande=pnombre_commande;
  }

  get()
    {
      return this;
    }

}
