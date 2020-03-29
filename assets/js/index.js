$(window).on('load',function(){
    $('.load').fadeOut(1000);
});


function showbtn(){
    document.getElementsByClassName('slide__default')[0].style.backgroundColor ='transparent';
    document.getElementsByClassName('slide__btn')[0].style.opacity = 1;
}

function hiddenbtn(){
    document.getElementsByClassName('slide__default')[0].style.backgroundColor ='#000';
    document.getElementsByClassName('slide__btn')[0].style.opacity = 0;

}

var index = 0;

function nextSlide(){
    index++;
    Slide();
};

function Slide(){
    var item = document.getElementsByClassName('slide__item');
    for(var i = 0; i < item.length; i++){
        item[i].style.opacity = 0;
        item[i].style.transition = 'all 0.2s linear';
    }

    if(index >= item.length){
        index = 0;
    }

    item[index].style.opacity = 1;
    item[index].style.transition = 'all 0.2s linear';
}

Slide();

$(document).ready(function(){
    $('.control__food').css('color','#fff');

    // hcm 
    $('#f__hcm').click(function(){
        $('.bg__control').animate({
            left: '0%'
        },('fast'));
        $('.control__view').css('color','#000');
        $('.control__food').css('color','#fff');
        $('.food__hcm').fadeIn();
        $('.view__hcm').fadeOut();
    });

    $('#v__hcm').click(function(){
        $('.bg__control').animate({
            left: '50%'
        },('fast'));
        $('.control__view').css('color','#fff');
        $('.control__food').css('color','#000');

        $('.view__hcm').fadeIn();
        $('.food__hcm').fadeOut();
    });

    $('.cate__hcm').click(function(){
        $('.main__container').addClass('main__bg__hcm').removeClass('main__bg__vt').removeClass('main__bg__dl').removeClass('main__bg__pq');
        $('.child__hcm').fadeIn();
        $('.child__vt').fadeOut();
        $('.child__dl').fadeOut();
        $('.child__pq').fadeOut();
    });

    // vt
    $('#f__vt').click(function(){
        $('.bg__control').animate({
            left: '0%'
        },('fast'));
        $('.control__view').css('color','#000');
        $('.control__food').css('color','#fff');
        $('.food__vt').fadeIn();
        $('.view__vt').fadeOut();
    });

    $('#v__vt').click(function(){
        $('.bg__control').animate({
            left: '50%'
        },('fast'));
        $('.control__view').css('color','#fff');
        $('.control__food').css('color','#000');

        $('.view__vt').fadeIn();
        $('.food__vt').fadeOut();
    });

    $('.cate__vt').click(function(){
        $('.main__container').addClass('main__bg__vt').removeClass('main__bg__hcm').removeClass('main__bg__dl').removeClass('main__bg__pq');
        $('.child__vt').fadeIn();
        $('.child__hcm').fadeOut();
        $('.child__dl').fadeOut();
        $('.child__pq').fadeOut();
    });

    // đà lạt
    $('#f__dl').click(function(){
        $('.bg__control').animate({
            left: '0%'
        },('fast'));
        $('.control__view').css('color','#000');
        $('.control__food').css('color','#fff');
        $('.food__dl').fadeIn();
        $('.view__dl').fadeOut();
    });

    $('#v__dl').click(function(){
        $('.bg__control').animate({
            left: '50%'
        },('fast'));
        $('.control__view').css('color','#fff');
        $('.control__food').css('color','#000');

        $('.view__dl').fadeIn();
        $('.food__dl').fadeOut();
    });

    $('.cate__dl').click(function(){
        $('.main__container').addClass('main__bg__dl').removeClass('main__bg__hcm').removeClass('main__bg__vt').removeClass('main__bg__pq');
        $('.child__dl').fadeIn();
        $('.child__vt').fadeOut();
        $('.child__hcm').fadeOut();
        $('.child__pq').fadeOut();
    });

    // phú quốc

    $('#f__pq').click(function(){
        $('.bg__control').animate({
            left: '0%'
        },('fast'));
        $('.control__view').css('color','#000');
        $('.control__food').css('color','#fff');
        $('.food__pq').fadeIn();
        $('.view__pq').fadeOut();
    });

    $('#v__pq').click(function(){
        $('.bg__control').animate({
            left: '50%'
        },('fast'));
        $('.control__view').css('color','#fff');
        $('.control__food').css('color','#000');

        $('.view__pq').fadeIn();
        $('.food__pq').fadeOut();
    });

    $('.cate__pq').click(function(){
        $('.main__container').addClass('main__bg__pq').removeClass('main__bg__hcm').removeClass('main__bg__vt').removeClass('main__bg__dl');
        $('.child__pq').fadeIn();
        $('.child__dl').fadeOut();
        $('.child__vt').fadeOut();
        $('.child__hcm').fadeOut();
    });

    // menu mobile
    if($(window).outerWidth(true) >= 600) {
        $('.menu__btn').click(function(){
            $('.menu__wrapper').animate({
                'width': '50%'
            },(500));
    
            $('.bg__collapse').show('fast');
        });
    }else {
        $('.menu__btn').click(function(){
            $('.menu__wrapper').animate({
                'width': '100%'
            },(500));
    
            $('.bg__collapse').show('fast');
        });
    }

    $('.menu__btn__close').click(function(){
        $('.menu__wrapper').animate({
            'width': '0%'
        },(500));
        $('.bg__collapse').hide('fast');
    });

    $('.bg__collapse').click(function(){
        $('.menu__wrapper').animate({
            'width': '0%'
        },(500));

        $('.bg__collapse').hide('fast');
    });

    $('.menu__wrapper__link').click(function(){
        $('.menu__wrapper__child').slideToggle('fast');
    });

});