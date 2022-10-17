$(document).ready(function() {

    $('.js-card-action-btn').on('click', function(){
        let $thisNumber = $(this).data('info');
        $('.js-card-action-btn').removeClass('active');
        $(this).addClass('active');
        $('.card-instruction .info-wrapper').hide();
        $(`.js-result-${$thisNumber}`).show();
    })

});