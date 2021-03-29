window.onload = getLoadSystemName;
window.onload = getLoadSystemServices;

function getLoadSystemName() {
    //alert('ok');
    $.ajax({
        url: "/api/getsystemname",
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

function getLoadSystemServices()
{
    $.ajax({
        url: "/api/getsystemservices",
        type: "GET",
        success:function(a)
        {
            debugger;
            if(a.length > 0) 
            {
                var serviceHTML = "";
                for(i=0; i<a.length; i++)
                {
                    serviceHTML +=' <div class="col-lg-4 col-md-6" data-aos="fade-up">' +
                                        '<div class="icon-box">'+
                                            '<div class="icon"><i class="icofont-book"></i></div>'+
                                            '<h4 class="title"><a href="">'+ a[i]['type'] +'</a></h4>'+
                                            '<p class="description">'+ a[i]['body'] +'</p>'+
                                        '</div>'+
                                    '</div>';
                }
                //alert('asd');
                document.getElementById("systemServices").innerHTML = serviceHTML; //Footer system title
                // document.getElementById("system_mainPage").append(a[1]['info2']);                
                //$('systemnameFooter').text = "CHBC";
            }
        },
        error:function()
        {
            //window.location.href = "/404";
        }
    });
}
