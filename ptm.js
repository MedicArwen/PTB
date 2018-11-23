

function setVisibilite( pStatus, pIdElement)
{
  var elementManipule = document.getElementById(pIdElement);
  //var elementManipule = $('#'+pIdElement)+')';
  if (pStatus==1)
      elementManipule.style.display = "";
      else
    elementManipule.style.display = "none";

}
function refreshPanierPizza()
{
  var div =document.getElementById('panier_pizza_liste');
  //var div=$("#panier_pizza_liste");
  var codehtml="<TABLE><TR><th></th><th> pizza </th><th>Prix</th><th>quantité</th><th> sous-total</th>";
   codehtml+=panierPizza.affichePanierHTML();

  codehtml+="</TR></TABLE>";
  div.innerHTML=codehtml;
}
function ajouterPizza(refpizza)
{
  panierPizza.addPizza(refpizza);
  refreshPanierPizza();
}
function enleverPizza(refpizza)
{
  panierPizza.removePizza(refpizza);
  refreshPanierPizza();
}
var listePizza = new Array();


listePizza.push(new UnePizza("PA","Classique Jambon","ressources_PTP/Classique_Jambon.jpg",Array("Jambon","Tomates","Gruyere"), 5,0));
listePizza.push(new UnePizza("PB","Quatres Fromages","ressources_PTP/pizza1.jpg",Array("mozza","chevre","roblechon","gouda"), 6,0));
listePizza.push(new UnePizza("PC","Chicken and bacon","ressources_PTP/Chick_Bacon_BBQ.jpg",Array("Chicken","bacon","sauce BBQ","origan"), 10,0));

listePizza.push(new UnePizza("PD","Peppina","ressources_PTP/Peppina.jpg",Array("Poivron","chevre","Sucre","anchois"), 12,0));
listePizza.push(new UnePizza("PE","Savoyarde","ressources_PTP/Peppina.jpg",Array("Savoie","Raclette","Fondue","Déchet radioactif"), 14,0));
listePizza.push(new UnePizza("PF","Forestiere","ressources_PTP/Forestiere.jpg",Array("Sanglier","Bambi","glands","Feuilles"), 23,0));
var panierPizza = new PanierPizza(listePizza);
refreshPanierPizza();
for (var pizz in listePizza)
{
 var div =document.getElementById('listpizzas');
 //var div =$("#listpizzas");
 div.innerHTML+=listePizza[pizz].afficheHTML();
}
