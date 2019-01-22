/**
 * Created by Anushka K R on 7/26/2017.
 */
(function($){
    $(document).ready(function(){
        $('form#scswebform').submit(function(){
            window.open($(this).data('newtaburl'));
        });
        $('input[name="submit.x"]').val($('input.submit-button').position().left);
        $('input[name="submit.y"]').val($('input.submit-button').position().top);
    });
})(jQuery)