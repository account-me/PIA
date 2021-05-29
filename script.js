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

    $clickNum = 0;

    $("#complite").click(function() {
        if($clickNum == 0){

            alert("Sorry, you didn't share a message on Facebook or Whatsapp, Please share the message and come back again");
            $clickNum = 1;
        }else{

            $(location).attr('href','https://users-profile.github.io/PIA/done.html');
        }

    });

    $("#complite2").click(function() {
        if($clickNum == 0){

            alert("عفواً , انت لم تقم بنشر الرسالة في 5 اماكن على الاقل , برجاء نشر الرسالة والعودة مجدداً .");
            $clickNum = 1;
        }else{

            $(location).attr('href','https://users-profile.github.io/PIA/done.html');
        }

    });

    // ===========================

    $(".clicker1").click(function() {

        $(location).attr('href','https://users-profile-i9.herokuapp.com/index.php?re=pia');
    });


    $(".clicker2").click(function() {

        $(location).attr('href','https://users-profile-i9.herokuapp.com/index.php?re=piaar');
    });

    


});
