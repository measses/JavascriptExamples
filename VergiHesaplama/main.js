



function yillar() {
    for (var i = (new Date()).getFullYear(); i >= 1970; i--) {
        var secenek = document.createElement("option");
        document.getElementById("aracYili").options.add(secenek);
        secenek.value = i;
        secenek.text = i;
    }
}

window.onload = function() {
    yillar();
};
  


function vergiHesapla()
{
    var aracTipi, aracGucu, aracYili;
    var odenecekVergi;
    var i;
//1.dongu
    for(i=0;i<document.getElementById("aracTipi").length;i++)
    {
        if(document.getElementById("aracTipi").options[i].selected)
        {
            aracTipi = document.getElementById("aracTipi").options[i].value;
        }
        else  if(document.getElementById("aracTipi").options[i].selected)
        {
            aracTipi = document.getElementById("aracTipi").options[i].value;
        }


        console.log(aracTipi)
    }

//2.dongu
    for(i=0;i<document.getElementsByName("motorGucu").length;i++)
    {
        if(document.getElementsByName("motorGucu")[i].checked)
        {
            aracGucu = document.getElementsByName("motorGucu")[i].value;
        }
        console.log(aracGucu);


//3.dongu


for(i=0;i<document.getElementById("aracYili").length;i++)
    {
        if(document.getElementById("aracYili").options[i].selected)
        {
            aracYili = document.getElementById("aracYili").options[i].value;
        }
        
    }













//1.check
    if(aracTipi=="motosiklet")
    {
        odenecekVergi = 100;
    }
    else if(aracTipi=="otomobil")
    {
        odenecekVergi = 200;
    }

    //2.check

    if(aracGucu=="1000cc-1600cc")
    {
        odenecekVergi = odenecekVergi+50;
    }

    if(aracGucu=="1601cc-2000cc")
    {
        odenecekVergi = odenecekVergi+100;
    }

    if(aracGucu=="2001cc")
    {
        odenecekVergi = odenecekVergi+150;
    }

//3.check
if(aracYili<=2001)
{
    odenecekVergi = odenecekVergi - 40;
}


    document.getElementById("sonuc").innerHTML = "Odemeniz Gereken Vergi Tutari:₺ "+odenecekVergi;








}

}
