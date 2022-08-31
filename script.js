$(function() {

  
    $("#my-text").focus(function() {
        var $this = $(this);
        $this.select();

        // Work around Chrome's little problem
        $this.mouseup(function() {
            // Prevent further mouseup intervention
            $this.unbind("mouseup");
            return false;
        });
    });

    

    // ============= CHOOSE GIFT ======

    $(".box-gif").click(function(){

        $(this).addClass("selected1").siblings().removeClass('selected1');
    });

    // ============= COMPELETE ======

    $clickNum = 0;

    $("#complite").click(function() {
        if($clickNum == 0){

            alert("Sorry, you didn't share the message on Facebook, Please post it on your profile or share the message with your friends and come back again");
            $clickNum = 1;
        }else{

            $(location).attr('href','done.html');
        }

    });

    $("#complitear").click(function() {
        $widthPro2 = $(".progress-bar").text();

        if($widthPro2 != "100%"){

            alert("Sorry, you didn't share the message on WhatsApp, Please share it with your friends and come back again");
        }else{

            $(location).attr('href','done.html');
        }

    });

    // ============== CLICK
    
    
    //=========
    $(".btnSendar").click(function() {

        $(location).attr('href','https://pia-online-x2.netlify.app/');
    });

    $("#sendWhats").click(function() {
        $widthPro = $(".progress-bar").text();
        setTimeout(function(){
            if($widthPro == "50%"){
                $(".progress-bar").text("75%");
                $(".progress-bar").css("width","75%");
            }else if($widthPro == "75%"){
                $(".progress-bar").text("100%");
                $(".progress-bar").css("width","100%");
            }
            
          }, 5000);
    });

});
