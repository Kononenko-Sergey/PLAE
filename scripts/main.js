
(function($) {
    $(function() {
        $('.jcarousel').jcarousel({
            wrap: 'circular'
        });

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);



var but = document.getElementById('but');
var mail = document.getElementById('mail');
var butFooter = document.getElementById('but-footer');
var mailFooter = document.getElementById('mail-footer');

function amail(){
    if (this.value === "Enter email address"){
        this.value = "";
    }
}
mail.addEventListener("click", amail);
mailFooter.addEventListener("click", amail);

mail.onblur = function() {
  if(mail.value === ""){
        mail.value ="Enter email address";
    }
};
function butEnter(){
    mail.value = 'Thank you';
}
but.addEventListener("click", butEnter);



function amail(){
    if (this.value === "Enter email address"){
        this.value = "";
    }
}
mailFooter.addEventListener("click", amail);


mailFooter.onblur = function() {
  if(mailFooter.value === ""){
        mailFooter.value ="Enter email address";
    }
};
function buttonEnter(){
    mailFooter.value = 'Thank you';
}
butFooter.addEventListener("click", buttonEnter);
