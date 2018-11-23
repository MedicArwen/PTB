class PanierPizza {
  constructor(pListePizza)
  {
    this.listePizza=Array();
    for (var pizz in pListePizza)
    {
     this.listePizza.push({ref:pListePizza[pizz].ref,nom:pListePizza[pizz].intitule,prix:pListePizza[pizz].prix,qte:0,ptotal:0});
   }
  }


  addPizza(prefPizza)
   {
     var resultat = this.listePizza.find(function(element){return element.ref == prefPizza});
    resultat.qte++;
     resultat.ptotal=resultat.qte*resultat.prix;


   }
   removePizza(prefPizza)
    {
      var resultat = this.listePizza.find(function(element){return element.ref == prefPizza});
      resultat.qte--;
      if (resultat.qte<0)
        resultat.qte=0;
    resultat.ptotal=resultat.qte*resultat.prix;
    }
  affichePanierHTML()
   {
     var html="";
     var total=0;
     for (var refpizza in this.listePizza)
     {
       if (this.listePizza[refpizza].qte>0)
       {
         html=html+"<TR>";
         html=html+"<TD>"+this.listePizza[refpizza].nom+"</TD>";
         html=html+"<TD>"+this.listePizza[refpizza].prix+"euros</TD>";
         html=html+"<TD>"+this.listePizza[refpizza].qte+"</TD>";
         html=html+"<TD>"+this.listePizza[refpizza].ptotal+" euros</TD></TR>";
         total=total+this.listePizza[refpizza].ptotal;
       }
   }

   html=html+"<TR><TD>total:</TD><TD>"+total+" euros</TD><TR>";
     return html;
   }
}
