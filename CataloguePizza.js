class CataloguePizza
{
  constructor()
  {
    this.liste = Array();
        this.liste.push(new UnePizza("PA","Classique Jambon","ressources_PTP/Classique_Jambon.jpg",Array("Jambon","Tomates","Gruyere"), 5,0));
        this.liste.push(new UnePizza("PB","Quatres Fromages","ressources_PTP/pizza1.jpg",Array("mozza","chevre","roblechon","gouda"), 6,0));
        this.liste.push(new UnePizza("PC","Chicken and bacon","ressources_PTP/Chick_Bacon_BBQ.jpg",Array("Chicken","bacon","sauce BBQ","origan"), 10,0));

        this.liste.push(new UnePizza("PD","Peppina","ressources_PTP/Peppina.jpg",Array("Poivron","chevre","Sucre","anchois"), 12,0));
        this.liste.push(new UnePizza("PE","Savoyarde","ressources_PTP/Peppina.jpg",Array("Savoie","Raclette","Fondue","Déchet radioactif"), 14,0));
        this.liste.push(new UnePizza("PF","Forestiere","ressources_PTP/Forestiere.jpg",Array("Sanglier","Bambi","glands","Feuilles"), 23,0));

  }
  getCatalogue ()
  {
    return this.liste;
  }
}
