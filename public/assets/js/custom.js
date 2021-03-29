function codeAddress() {
    //alert('ok');
    $.ajax({
        url: "/getsystemname",
        type: "GET",      
        success:function(a)
        {
            debugger;
            if(a.length > 0) 
            {
                //alert('asd');
                document.getElementById("systemnameFooter").append(a[0]['infobody']);
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
window.onload = codeAddress;