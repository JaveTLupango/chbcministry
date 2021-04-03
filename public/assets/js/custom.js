//window.onload = getLoadSystemName;
//window.onload = getLoadSystemServices;
function getLoadSystemName(){
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

    //getLoadSystemServices();
    //getSystemCore();
}

function getLoadSystemServices()
{
    $.ajax({
        url: "/api/getsystemservices",
        type: "GET",
        success:function(a)
        {
            //debugger;
            if(a.length > 0)
            {
                var serviceHTML = "";
                for(i=0; i<a.length; i++)
                {
                    serviceHTML +=' <div class="col-lg-4 col-md-6" data-aos="fade-up">' +
                                        '<div class="icon-box">'+
                                            '<div class="icon"><i class="icofont-book"></i></div>'+
                                            '<h4 class="title"><a href="">'+ a[i]['s_type'] +'</a></h4>'+
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

function getSystemCore()
{
    try
    {
        $.ajax({
            url: "/api/getsystemcore",
            type: "GET",
            success:function(core)
            {
                //alert(core);
               // var json = json_encode(core);
                debugger;
                var countss = Object.keys(core).length;
                if(countss > 0)
                {
                    var coreHTML = '';
                    var mission = '';
                    var vission = '';
                    var coreValues = '';
                    var plan = '';
                    for(b=0; b<Object.keys(core).length; b++)
                    {
                        var type = core[b]['s_type'];
                        if(type == 'Our Mission')
                        {
                            mission += '<div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">'+
                                            '<div class="card" style="background-image: url(assets/img/values-1.jpg);">'+
                                                '<div class="card-body">'+
                                                    '<h5 class="card-title"><a href="">'+core[b]['s_type']+'</a></h5>'+
                                                    '<p class="card-text">'+core[b]['body']+'</p>'+
                                                    '<div class="read-more"><a href="#"><i class="icofont-arrow-right"></i> Read More</a></div>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>';
                        }
                        if(type == 'Our Vision')
                        {
                            vission += '<div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">'+
                                            '<div class="card" style="background-image: url(assets/img/values-1.jpg);">'+
                                                '<div class="card-body">'+
                                                    '<h5 class="card-title"><a href="">'+core[b]['s_type']+'</a></h5>'+
                                                    '<p class="card-text">'+core[b]['body']+'</p>'+
                                                    '<div class="read-more"><a href="#"><i class="icofont-arrow-right"></i> Read More</a></div>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>';
                        }
                        if(type == 'Core Values')
                        {
                            coreValues +='<li><p class="card-text">'+core[b]['body'].substring(0, 45)+'....</p></li>';
                        }
                    }

                 coreHTML += '<div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">'+
                                            '<div class="card" style="background-image: url(assets/img/values-1.jpg);">'+
                                                '<div class="card-body">'+
                                                    '<h5 class="card-title"><a href="">Core Values</a></h5>'+
                                                    '<ul>'+ coreValues +'</ul>'+
                                                    '<div class="read-more"><a href="#"><i class="icofont-arrow-right"></i> Read More</a></div>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>';

                  plan +=' <div class="col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="300">'+
                    '<div class="card" style="background-image: url(assets/img/values-4.jpg);">'+
                         '<div class="card-body">'+
                             '<h5 class="card-title"><a href="">Our Plan</a></h5>'+
                                 '<div class="text-center">'+
                                    '<button type="button" class="btn btn-primary" title="OPPORTUNITY">OPPORTUNITY</button>'+
                                     '<button type="button" class="btn btn-secondary" title="Spiritual Foundation Discipleship Making" >'+
                                         'S . F . D . M</button>'+
                                     '<button type="button" class="btn btn-success" title="Strategies In Discipleship" >S . I . D</button>'+
                                 '</div>                                '+
                             '<div class="read-more"><a href="#"><i class="icofont-arrow-right"></i> Read More</a></div>'+
                         '</div>'+
                     '</div>'+
                 '</div> ';

                 coreHTML += mission + vission +plan;

                    //alert('asd');
                    document.getElementById("SystemCore_values").innerHTML = coreHTML; //Footer system title
                    // document.getElementById("system_mainPage").append(a[1]['info2']);
                    //$('systemnameFooter').text = "CHBC";
                }
                else
                {

                }
            },
            error:function(as)
            {
                //window.location.href = "/404";
            }
        });
    }catch($ss)
    {

    }


}

function Logout_account()
{
    debugger;
    try
    {
        $.ajax({
            url: "/logout",
            type: "POST",
            success:function(core)
            {

            }
          
        });
    }catch($ss)
    {

    }
}