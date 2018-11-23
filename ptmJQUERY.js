$(function()
{
// DEBUT JQUERY
console.log( "ready!" );
  function setVisibilite( pStatus, pIdElement)
  {
    var elementManipule = document.getElementById(pIdElement);
    //var elementManipule = $("#"+pIdElement)+")";
    if (pStatus==1)
        elementManipule.style.display = "";
        else
      elementManipule.style.display = "none";

  }
  function afficheUnePizzaAVendre(pizza)
  {
    var html="<div id='"+pizza.ref+"' class='class_affiche_pizza'>";
    html=html+"<div class='photo_pizza'>";
    html=html+"<img  class='img_photo_pizza' src='"+pizza.image_url+"' />";
    html=html+"</div>";
    html=html+"<div class='info_pizza'>"+pizza.intitule+"</div>";
    html=html+"<div class='liste_ingrepizza'> Ingrédients:<ul>";
    for (var id in pizza.liste_ingredient)
    {
      html=html+"<LI>"+pizza.liste_ingredient[id]+"</LI>";
    }
    html=html+"</ul></div>";
    html=html+"<div class='info_prix'>"+pizza.prix+" balles </div>";
    html=html+'<div class="ajout_pizza">';
    html=html+'<input type="button" class="add" id="'+pizza.ref+'" value="+" />';
    html=html+'<input type="button" class="sub" id="'+pizza.ref+'"value="-" /></div>';
    html=html+"</DIV>";
    return html;
  }
  function afficheListePizzaAVendre()
  {
    $("#listpizzas").html("");
    var leCataLogue=listePizza.getCatalogue();
    for (var key in leCataLogue)
    {
        $("#listpizzas").append(afficheUnePizzaAVendre(leCataLogue[key]));
       /*var selectorA="#add"+leCataLogue[key].ref;
        var selectorS="#sub"+leCataLogue[key].ref;
        console.log(selectorA);
        console.log(selectorS);
        console.log(leCataLogue[key].ref);

        $(selectorA).click(function()
          {
              ajouterPizza(leCataLogue[key].ref);
          });
        $(selectorS).click(function()
          {
              enleverPizza(leCataLogue[key].ref);
          });
          console.log($(selectorA));*/
    }
    $(".add").click(function()
      {
        alert($(this.attr('id')));
          ajouterPizza($(this.attr('id')));
      });
        console.log($(".add"));
  }

  function refreshPanierPizza()
  {
    var html="<TABLE><TR><th></th><th> pizza </th><th>Prix</th><th>quantité</th><th> sous-total</th>";
    html+=panierPizza.affichePanierHTML();
    html+="</TR></TABLE>";
    $("#panier_pizza_liste").html(html);
  }
  function ajouterPizza(pref)
  {
    console.log(pref);
    panierPizza.addPizza(pref);
    refreshPanierPizza();
  }
  function enleverPizza(refpizza)
  {
    console.log(refpizza);
    panierPizza.removePizza(refpizza);
    refreshPanierPizza();
  }
  var listePizza = new CataloguePizza();
  var panierPizza = new PanierPizza(listePizza.getCatalogue());
  refreshPanierPizza();
  afficheListePizzaAVendre();
  console.log(listePizza);
// FIN JQUERY
console.log( "FINI!" );/*
$("#addPA").click(function()
  {
      ajouterPizza("PA");
  });
  $("#addPB").click(function()
    {
        ajouterPizza("PB");
    });
    $("#addPC").click(function()
      {
          ajouterPizza("PC");
      });
      $("#addPD").click(function()
        {
            ajouterPizza("PD");
        });
        $("#addPE").click(function()
          {
              ajouterPizza("PE");
          });
          $("#addPF").click(function()
            {
                ajouterPizza("PF");
            });
            $("#subPA").click(function()
              {
                  enleverPizza("PA");
              });
              $("#subPB").click(function()
                {
                    enleverPizza("PB");
                });
                $("#subPC").click(function()
                  {
                      enleverPizza("PC");
                  });
                  $("#subPD").click(function()
                    {
                        enleverPizza("PD");
                    });
                    $("#subPE").click(function()
                      {
                          enleverPizza("PE");
                      });
                      $("#subPF").click(function()
                        {
                            enleverPizza("PF");
                        });*/
}
);
