$(document).ready(function () {
    let request;

    $('#frm').submit(function (e) {
        e.preventDefault();
        if (request && request.readyState !== 4) {
            request.abort();
        }
        let $form = $(this);
        let data = $form.serialize();
        $('input, select, button, textarea').attr("disabled", "disabled");
        request = $.ajax({
            type: 'GET',
            url: 'http://www.vitava.com.ua/files/jquery/ajax-scripts/send-data.php',
            dataType: 'jsonp',
            success: data
        });

        request.done(function (response) {
            console.log(response);
        });
        request.fail(function (textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
        });
        request.always(function () {
            setTimeout(() => $('input, select, button, textarea').removeAttr("disabled"), 2000);
            
        });
    });
});