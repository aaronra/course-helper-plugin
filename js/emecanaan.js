jQuery(document).ready(function () {
    var counter = 0;
    var obj = jQuery('.wpcw_fe_quiz_q_image').toArray();
    var images = jQuery.makeArray(obj);
    var image = jQuery(images[counter]);
    image.addClass('emecanaan-active');
    jQuery('.wpcw_fe_quiz_box').append('<div class=><button class="emecanaan-back"> < </button><button class="emecanaan-next"> > </button></div>');
    jQuery('.emecanaan-back').click(function() {
        console.log('emecannaan');
        if(counter === 0){
            alert('Already last page');
        }else{
            counter--;
        }
    });
    jQuery('.emecanaan-next').click(function() {
        console.log('emecannaan');
        if(counter === obj.length - 1){
            alert('Already last page');
        }else{
            var prevImage = jQuery(images[counter]);
            prevImage.removeClass('emecanaan-active');

            counter++;
            var nextImage = jQuery(images[counter]);
            nextImage.addClass('emecanaan-active');
        }
    });

});