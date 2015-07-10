jQuery(document).ready(function () {
    var obj = jQuery('.wpcw_fe_quiz_q_image').toArray();
    var images = jQuery.makeArray(obj);
    var image = jQuery(images[0]);
    image.addClass('emecanaan-active');
    image.append('<div class=><button class="emecanaan-back"> < </button><button class="emecanaan-next"> > </button></div>');

});