window.onload = getLoadSystemName;

function getLoadSystemName() {
    //alert('ok');
    $.ajax({
        url: "/getsystemname",
        type: "GET",
        success:function(a)
        {
            if(a.length > 0) 
            {
                //alert('asd');
                document.getElementById("systemnameFooter").append(a[0]['infobody']); //Footer system title
                document.getElementById("system_mainPage").append(a[1]['info2']); 
                document.getElementById("system_mainPage2").append(a[1]['infobody']);
                document.getElementById("system_hp_1").append(a[2]['info2']); 
                document.getElementById("system_hp_1p").append(a[2]['infobody']);
                document.getElementById("system_hp_2").append(a[3]['info2']); 
                document.getElementById("system_hp_2p").append(a[3]['infobody']);
                document.getElementById("system_hp_3").append(a[4]['info2']); 
                document.getElementById("system_hp_3p").append(a[4]['infobody']);
                document.getElementById("system_hp_4").append(a[5]['info2']); 
                document.getElementById("system_hp_4p").append(a[5 ]['infobody']);
                //$('systemnameFooter').text = "CHBC";
            }
            else
            {
                window.location.href = "/404";
            }
        },
        error:function()
        {
            window.location.href = "/404";
        }
    });
}