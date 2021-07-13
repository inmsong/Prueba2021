/* APLICAR JS SOLO EN CIERTA RESOLUCIÓN */
if ($(window).width() >= 576) {
    // do your stuff
    /* EQUAL ACERCA */

    var heights = $(".equalHeightAlt").map(function () {
        return $(this).height();
    }).get(),
        maxHeight = Math.max.apply(null, heights);

    $(".equalHeightAlt").height(maxHeight);

    /* EQUAL TRABAJOS */

    var heights = $(".itemTrabajo").map(function () {
        return $(this).height();
    }).get(),
        maxHeight = Math.max.apply(null, heights);

    $(".itemTrabajo").height(maxHeight);

}

/* SHUFFLE TRABAJOS */
    /* $(function () {
        var parent = $("#shuffle");
        var divs = parent.children();
        while (divs.length) {
            parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
    }); */

/* CATEGORIA TRABAJOS */

var heights = $(".catTrabajo").map(function () {
    return $(this).height();
}).get(),
    maxHeight = Math.max.apply(null, heights);

$(".catTrabajo").height(maxHeight);

/* EQUAL HEIGHT */

var heights = $(".equalHeight").map(function () {
    return $(this).height();
}).get(),
    maxHeight = Math.max.apply(null, heights);

$(".equalHeight").height(maxHeight);





/* EQUAL GRID  */

var heights = $(".equalGrid").map(function () {
    return $(this).height();
}).get(),
    maxHeight = Math.max.apply(null, heights);

$(".equalGrid").height(maxHeight);

/* FILTRAR CATEGORIAS TRABAJOS */

$(document).ready(function () {

    $('.btn-filter').on('click', function () {
        var $target = $(this).data('target');
        if ($target != 'all') {
            $('.table .filter').css('display', 'none');
            $('.table .filter[data-status="' + $target + '"]').fadeIn('slow');
        } else {
            $('.table .filter').css('display', 'none').fadeIn('slow');
        }
    });
});


// GALERIA DETALLE
jQuery(document).ready(function () {
    jQuery("#gallery").unitegallery({
        gallery_theme: "tiles",
        tiles_type: "justified",
        tiles_justified_row_height: 290,
        lightbox_type: "wide",
        lightbox_slider_control_swipe: false,
        lightbox_slider_control_zoom: true,
        tiles_justified_space_between: 10,	
    });
});
