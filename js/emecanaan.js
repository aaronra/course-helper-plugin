jQuery(document).ready(function () {

    var interval = setInterval(function () {
        if (jQuery(".wpcw_fe_quiz_q_image").length) {
            clearInterval(interval);
            coursehelper();
        }
    }, 100);
});

function coursehelper() {
    var counter = 0;
    console.log('courehelper js started');

    var obj = jQuery('.wpcw_fe_quiz_q_image').toArray();
    var images = jQuery.makeArray(obj);
    var image = jQuery(images[counter]);
    image.addClass('emecanaan-active');
    var submitbutton = jQuery('.fe_btn.fe_btn_completion.btn_completion').toArray();;
    submitbutton[0].value = 'Finish';
    var answers = jQuery('.wpcw_fe_quiz_q_answers li input').toArray();
    var paginator = '';
    for (var answer in answers) {
        answers[answer].checked = true;

        if(counter == answer){
            paginator = paginator+'<a class="page-number-active">'+answer+'</a>';
        }else{
            paginator = paginator+'<a class="page-number">'+answer+'</a>';
        }

    }
    jQuery('.wpcw_fe_quiz_q_image').append('<div class="paginator"><a class="emecanaan-back"> back </a><div id="paginatorNumbers">'+paginator+'</div><a class="emecanaan-next"> next </a></div>');
    jQuery('.emecanaan-back').click(function () {
        paginator = '';
        for (var answer in answers) {
            if(counter == answer){
                paginator = paginator+'<a class="page-number-active">'+answer+'</a>';
            }else{
                paginator = paginator+'<a class="page-number">'+answer+'</a>';
            }

        }
        jQuery('#paginatorNumber').html(paginator);
        if (counter === 0) {
            alert('Already last page');
        } else {

            var prevImage = jQuery(images[counter]);
            prevImage.removeClass('emecanaan-active');

            counter--;
            var nextImage = jQuery(images[counter]);
            nextImage.addClass('emecanaan-active');

        }
    });
    jQuery('.emecanaan-next').click(function () {
        paginator = '';
        for (var answer in answers) {
            if(counter == answer){
                paginator = paginator+'<a class="page-number-active">'+answer+'</a>';
            }else{
                paginator = paginator+'<a class="page-number">'+answer+'</a>';
            }

        }
        jQuery('#paginatorNumber').html(paginator);
        if (counter === obj.length - 1) {
            alert('Already last page');
        } else {
            var prevImage = jQuery(images[counter]);
            prevImage.removeClass('emecanaan-active');

            counter++;
            var nextImage = jQuery(images[counter]);
            nextImage.addClass('emecanaan-active');
        }
    });

}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

