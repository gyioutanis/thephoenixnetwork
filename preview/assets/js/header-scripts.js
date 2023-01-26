(function ($) {


    // fixed menu - changed on sroll
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height >= 100) {
            $('.header-wrap').addClass('scrolled');
        }
        if (height < 100) {
            $('.header-wrap').removeClass('scrolled');
        }
    });

    //smooth scrolling
    $(document).ready(function ($) {
        custom_elements();
        $(document).on('click', 'a[href*="#"]', function (event) {
            page_url = document.location.href;
            link_url = $(this).attr('href');
            link_url_split = link_url.split('#');
            link_url_before_hash = link_url_split [link_url_split.length-2];
            link_url_after_hash = link_url_split [link_url_split.length-1];
            // console.log(page_url);
            // console.log(link_url_before_hash);
            if ((page_url == link_url_before_hash) || (link_url_before_hash === '')) {
                event.preventDefault();
                var targetOffset = $(this.hash).offset().top - 50;
                // console.log(targetOffset);
                $('html, body').animate({ scrollTop: targetOffset }, 600);
            } else {
                // console.log(false);
            }
        });
    });

    // smooth scrolling to anchor - on other page
    if (window.location.hash)
        scroll(0, 0);
    setTimeout(function () { scroll(0, 0); }, 1);
    $(function () {
        $('.scroll').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({ scrollTop: $($(this).attr('href')).offset().top - 50 }, 1000, 'swing');
        });
        if (window.location.hash) {
            $('html,body').animate({ scrollTop: $(window.location.hash).offset().top - 50 }, 1000, 'swing');
            history.replaceState(null, null, ' ');
        }
    });

}(jQuery));


function custom_elements() {
    // --------------------------------------------------
    // tabs
    // --------------------------------------------------
    jQuery('.de_tab').find('.de_tab_content > div').hide();
    jQuery('.de_tab').find('.de_tab_content > div:first').show();
    jQuery('li').find('.v-border').fadeTo(150, 0);
    jQuery('li.active').find('.v-border').fadeTo(150, 1);
    jQuery('.de_nav li').on("click", function() {
        jQuery(this).parent().find('li').removeClass("active");
        jQuery(this).addClass("active");
        jQuery(this).parent().parent().find('.v-border').fadeTo(150, 0);
        jQuery(this).parent().parent().find('.de_tab_content > div').hide();
        var indexer = jQuery(this).index(); //gets the current index of (this) which is #nav li
        jQuery(this).parent().parent().find('.de_tab_content > div:eq(' + indexer + ')').fadeIn(); //uses whatever index the link has to open the corresponding box
        jQuery(this).find('.v-border').fadeTo(150, 1);
    });
    // request quote function
    var rq_step = 1;
    jQuery('#request_form .btn-right').on("click", function() {
        var rq_name = $('#rq_name').val();
        var rq_email = $('#rq_email').val();
        var rq_phone = $('#rq_phone').val();
        if (rq_step == 1) {
            if (rq_name.length == 0) {
                $('#rq_name').addClass("error_input");
            } else {
                $('#rq_name').removeClass("error_input");
            }
            if (rq_email.length == 0) {
                $('#rq_email').addClass("error_input");
            } else {
                $('#rq_email').removeClass("error_input");
            }
            if (rq_phone.length == 0) {
                $('#rq_phone').addClass("error_input");
            } else {
                $('#rq_phone').removeClass("error_input");
            }
        }
        if (rq_name.length != 0 && rq_email.length != 0 && rq_phone.length != 0) {
            jQuery("#rq_step_1").hide();
            jQuery("#rq_step_2").fadeIn();
        }
    });
    // --------------------------------------------------
    // tabs
    // --------------------------------------------------
    jQuery('.de_review').find('.de_tab_content > div').hide();
    jQuery('.de_review').find('.de_tab_content > div:first').show();
    //jQuery('.de_review').find('.de_nav li').fadeTo(150,.5);
    jQuery('.de_review').find('.de_nav li:first').fadeTo(150, 1);
    jQuery('.de_nav li').on("click", function() {
        jQuery(this).parent().find('li').removeClass("active");
        //jQuery(this).parent().find('li').fadeTo(150,.5);
        jQuery(this).addClass("active");
        jQuery(this).fadeTo(150, 1);
        jQuery(this).parent().parent().find('.de_tab_content > div').hide();
        var indexer = jQuery(this).index(); //gets the current index of (this) which is #nav li
        jQuery(this).parent().parent().find('.de_tab_content > div:eq(' + indexer + ')').show(); //uses whatever index the link has to open the corresponding box
    });
    // --------------------------------------------------
    // toggle
    // --------------------------------------------------
    jQuery(".toggle-list h2").addClass("acc_active");
    jQuery(".toggle-list h2").toggle(function() {
        jQuery(this).addClass("acc_noactive");
        jQuery(this).next(".ac-content").slideToggle(200);
    }, function() {
        jQuery(this).removeClass("acc_noactive").addClass("acc_active");
        jQuery(this).next(".ac-content").slideToggle(200);
    })
    // --------------------------------------------------
    // toggle
    // --------------------------------------------------
    jQuery(".expand-custom .toggle").click(function() {
        jQuery(this).stop().toggleClass("clicked");
        jQuery(this).stop().parent().parent().parent().find(".details").slideToggle(500);
    })
}
