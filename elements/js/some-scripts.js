/*
    Ссылки telegram, viber, whatsapp
*/
//<a title="WhatsApp" href="whatsapp://send?phone=+120345678910">WhatsApp</a>
//<a title="Viber" href="viber://chat?number=+120345678910">Viber</a>
//<a title="Telegram" href="tg://resolve?domain=nikname">Telegram</a>

/*
Detect mac, iphone
*/
var mac = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
    if ( isMac ) {
        $(".update-browser .edge").hide();
        $(".update-browser .safari").show();
    }
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') > -1) {
        } else {
            $('.infobox__inf-item-ico').each(function () {
                $(this).css('background-image', 'url(' + $(this).attr('data-safari-image-url') + ')');
            });
        }
    }
function isiPhone(){
        return (
            (navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPod") != -1)
        );
    }
if(isiPhone()){
    $(".update-browser .edge").hide();
    $(".update-browser .safari").show();
};

/*
fancybox дубли фоток
*/
$('.review__read').fancybox({
    selector : '.slick-slide:not(.slick-cloned) a',
   hash     : false
});

$().fancybox({
   selector : '.slick-slide:not(.slick-cloned)',
   hash     : false
});

/*
google tag manager, facebook tracker
*/
ga("send", "event", "form", "submit");
fbq('track', 'Schedule');
// Просто вставляем в submit формы при успешной отправки

// "<script>
function onClick() {
fbq('track', 'Products');
};
// </script>"

ga('send', {
  hitType: 'event',
  eventCategory: 'Products',
});

// "<!-- Facebook Pixel Code -->
// <script>
//   !function(f,b,e,v,n,t,s)
//   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//   n.queue=[];t=b.createElement(e);t.async=!0;
//   t.src=v;s=b.getElementsByTagName(e)[0];
//   s.parentNode.insertBefore(t,s)}(window, document,'script',
//   'https://connect.facebook.net/en_US/fbevents.js');
//   fbq('init', '518334831924587');
//   fbq('track', 'PageView');
// </script>
// <noscript><img height=""1"" width=""1"" style=""display:none""
//   src=""https://www.facebook.com/tr?id=518334831924587&ev=PageView&noscript=1""
// /></noscript>
// <!-- End Facebook Pixel Code -->"

// "Вставьте этот фрагмент в раздел <head> кода страницы как можно ближе к началу:
// <!-- Google Tag Manager -->
// <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-MBH23R8');</script>
// <!-- End Google Tag Manager →

// Также вставьте непосредственно после открывающего тега <body> следующий фрагмент:
// <!-- Google Tag Manager (noscript) -->
// <noscript><iframe src=""https://www.googletagmanager.com/ns.html?id=GTM-MBH23R8""
// height=""0"" width=""0"" style=""display:none;visibility:hidden""></iframe></noscript>
// <!-- End Google Tag Manager (noscript) →


// Добавить ссылку Google partner https://www.google.com/partners/agency?id=4498866786"

// Вид кнопки
// <a href="docs/Electronic-Acknowledgement-Receipt-Optherium-Provisional-Patent-62-663894.pdf" class="top-line__btn  ga-click-event" data-ga-btn="WhitePaper" target="_blank">White Paper</a>

$('.ga-click-event').on('click',function () {
    var thisBtn = $(this).attr('data-ga-btn');
    fbq('track', thisBtn);
    ga('send', {
        hitType: 'event',
        eventCategory: thisBtn
    });
});

/*
    Slick destroy/init
*/
function advantagesSlider() {
    $('.advantages__list').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<div class="slick-prev slick-arrow"></div>',
        nextArrow: '<div class="slick-next slick-arrow"></div>',
        responsive: [
        {
          breakpoint: 380, 
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
};
$(window).on('load resize', function () {
    if ($(window).width() <= 576) {
        advantagesSlider();
    } else {
        if ($('.advantages__list').hasClass('slick-initialized')) {
            $('.advantages__list').slick('unslick');
        }
    }
});

/*
    Подключение карт
*/


// Яндекс API
// в скриптах

ymaps.ready(init);
var myMap,
    myPlacemark;

function init() {

    myMap = new ymaps.Map("map", {
        center: [55.737337, 37.642447],
        zoom: 17,
        //controls: ["..."] //- элементы управления картой
    });

    myPlacemark = new ymaps.Placemark([55.737337, 37.642447], {
        hintContent: 'Zenit',
        balloonContent: 'Zenit'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '../img/map/map-icon.png',
        // Размеры метки.
        iconImageSize: [57, 73],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
    });

    myMap.behaviors.disable('scrollZoom'); //убрал скролл

    myPlacemark2 = new ymaps.Placemark([55.786613, 37.639075], {
        hintContent: 'Zenit2',
        balloonContent: 'Zenit2'
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/map/map-icon.png',
        iconImageSize: [57, 73],
        iconImageOffset: [-5, -38]
    });
    myMap.geoObjects.add(myPlacemark);//установить дефолтный маркер
    myMap.geoObjects.add(myPlacemark2);
}
<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
// чтобы на мобильных при скроле пальцем не скролилась карта

var isMobile = {
        Android: function () {
        return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function () {
        return navigator.userAgent.match(/IEMobile/i)
        },
        any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows())
        }
        }
        if (isMobile.any()) {
        myMap.behaviors.disable('drag')
        }

//-Google maps
if ( $(".contacts-map-block").length ) {

    // initMap() - функция инициализации карты
    function initMap() {
        var marker,
        map;
        var mapObjects = [
            {
                lat: 51.511893,
                lng: -0.084995
            },
            {
                lat: 52.511893,
                lng: -0.084995
            }
        ];
        map = new google.maps.Map(document.getElementById('map'),
                {
                    zoom: 17,
                    center: {lat: 51.511893, lng: -0.084995},
                    styles: [
                        {
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.locality",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.province",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                },
                                {
                                    "visibility": "on"
                                },
                                {
                                    "weight": 1
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.man_made",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#dadada"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.line",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.station",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#778cae"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        }
                    ]
                }
            );
        for (var i = 0; i < mapObjects.length;i++) {
            marker = new google.maps.Marker(
                {
                    position: mapObjects[i],
                    map: map,
                    icon: "../images/icons/ic_marker.svg"
                }
            );
        }
    }
    initMap();
}
/*
    Обработка клика по документу
*/
$(document).on('click', function(e) {
    e.stopPropagation();
    if (!$(e.target).closest("header .lang").length && $("header .bottom .lang ul").css('display') !== 'none') {
        $("header .bottom .lang ul").slideUp();
    }
    else if (!$(e.target).closest("footer .lang").length && $("footer .lang ul").css('display') !== 'none') {
        $("footer .lang ul").slideUp();
    }
});

/*
    Перенос слова с дефисом если не влазит целиком 
*/
// Политика конфиденциаль&shy;ности
// <wbr> - перенос без дефиса

/*
    сбросить полосу прокрутки - скролл
*/
$("блок-со-скроллом").scrollTop(0);

/*
    что-делать если просролили к элементу
*/
if ( $(window).scrollTop() > $("#history").offset().top - 50 ) {
    console.log("ja-ja");
}else{
    console.log("nicht");
}

/*
    стили для mozilla/firefox and IE10+
*/
// @-moz-document url-prefix() 
// { 
//     body { background: grey; color: white } 
// }

// @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) and (max-width : 768px){
//  /* IE10 IE11 до 768px по ширине*/
// }

/*
    ввод только цифр
*/
$("input[type='number']").keypress(function (e) {
    if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
        return false;
    }
});

/*
    Плавный скролл к элементу
*/
$(".footer__address-link").click(function(e) {
    $("html, body").animate({scrollTop: $(".showroom__info").offset().top+"px"});
    return false;
});

/*
    проверка на браузер - IE, Edge
*/
// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
// // Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
if (isIE === true || isEdge === true) {

    var path = window.location.pathname;
    var page = path.split("/").pop();

    if (page !== 'update-browser.html') {
        window.location.href = 'update-browser.html';
    }

}
if (document.documentMode || /Edge/.test(navigator.userAgent)) {
if (/Trident/.test(navigator.userAgent) || /Edge/.test(navigator.userAgent)) {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page !== 'update-browser.html') {
        window.location.href = 'update-browser.html';
    }
}

// Есть баг для <video>, когда оно не воспоизводится сразу же.
// Нужно добавить атрибут muted

/*
    Ф-ция определения города по IP
*/
<?php
$IP = $_SERVER['REMOTE_ADDR'];
$html = @file_get_contents('http://api.sypexgeo.net/json/'.$IP);
$city = json_decode($html, true);
$city = $city['city']['name_ru'];
?>
//и вместо Чебоксар выводим 
<?=$city?>

$("input[type=tel]").inputmask({
    showMaskOnHover: true,
    "mask": "+7(599) 999-9999",
    definitions: {'5': {validator: "^(?!8)[0-9]"}}
}
);
// символ в маске "5" будет соответствовать regex, в котором стоит - все числа кроме 8

/*
    слик-анслик при ресайзе
*/
class SlickUnsclick {
    constructor(slider, options, breakpoint) {
        this.options = options;
        this.slider = slider;
        this.breakpoint = breakpoint;
        const resSl = debounce(()=> {
            if( $(window).width() <= this.breakpoint &&  !this.slider.hasClass('slick-initialized')) {
                this.slider.slick(this.options);
            }
        }, 160);
        this.init(this.slider, this.options, this.breakpoint);
        this.windowResize(resSl, this.slider, this.options, this.breakpoint);
    };
    init(slider, options) {
        slider.slick(options);
    };
    windowResize( fn, slider, options, breakpoint) {
        $(window).on('resize', function() {
            fn(slider, options, breakpoint);
        });
    }
}