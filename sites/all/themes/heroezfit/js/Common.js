var flag=0;
var flag1='';

(function($) {





    Drupal.behaviors.myBehavior = {
        attach: function (context, settings) {


            var r = getUrlParameter('r');
            if(r=='submit')
                bootbox.dialog({message:'Thank you for getting in touch ! We will contact you shortly with more info.'});

            var s=getUrlParameter('subcription');
            if(s=='submit')
                bootbox.dialog({message:'Thank you for Your Subcription!'});


            $('.block-aggregator').find('.more-link').click(function(){



               var morelink = $(this).prev().find('li').find('a').attr('href');
                $(this).find('a').attr('href',morelink);

            });

            if(window.location.href.indexOf("node/4") > -1){
                  $('body').on('click', ":not(#lightbox)", function(e){
                      e.stopPropagation();

                   });

                   $('body').on('click', function(e){

                       e.stopPropagation();
                       $('#bottomNavClose').click();

                   });
                //alert(2);

            }



            $('.block-aggregator').find('.more-link').find('a').text('Learn More');



            /*        $('.search-results').find('li').each(function(){

                        $(this).find('img').hide();
                        h$('img:not([src^="zoom"])').each(function(i){
                            this.src = siteURL + this.src;
                            $(this).show();

                        });
                        //var imgsearch=$(this).find('img').attr('src');



                    });*/
            var i=1;

           //$('.search-result').find('.field-name-uc-product-image').find('.field-items').children().eq(0).addClass('imgLiquid');
           //$('.search-result').find('.field-name-uc-product-image').find('.field-items').children().eq(0).css('width','300').css('height','400');
           $('.search-result').find('.field-name-uc-product-image').find('.field-items').each(function(){


           $(this).children().eq(0).addClass('imgLiquid');
           $(this).children().eq(0).css('width','356').css('height','500');
           $(this).children().eq(0).css('cursor','pointer');
           //$(this).children().eq(0).click(function(){
              // alert(i);
               //alert($(this).closest('a').html())
               //alert($(this).parent().parent().parent().parent().parent().html());
             //var linkhref=$(this).parent().parent().parent().parent().parent().find('a').attr('href');
               //window.location.href=linkhref;
               //alert($(this).closest('h3').html())

           //});
               i=i+1;
           });
           // $('.search-result').find('.field-name-uc-product-image').find('.field-items').children().eq(0).click(function(){

                //


            //})

            $('.search-result').find('.field-name-uc-product-image').find('.imgLiquid').click(function(){

               var linkhref=$(this).parent().parent().parent().parent().find('a').attr('href');
                window.location.href=linkhref;
            });



            $(".imgLiquid").imgLiquid();

            $('.block-aggregator').find('a').attr('target','_blank');

            //var jq = $.noConflict();

         $('.imageslider').bxSlider({
                 slideWidth: 400,
                minSlides: 3,
                maxSlides: 3,
                slideMargin:10
             });


           // $('.menu').find('li').eq(1).hover(function(){

               var htmlmenu=$('#block-block-3').find('ul').eq(0).html();
            //alert(htmlmenu);
                $('.menu').find('li').eq(1).append('<ul>'+htmlmenu+'</ul>');
            //});



            $('.bx-clone').css('width','360px!important');



            var imglen= $('.smallproimg').find('img').length;
            //alert(imglen);
            for (i = 0; i < imglen-1; i++) {



                $('.triggers li:first').clone().appendTo('.triggers');

                $('.triggers').find('li').eq(i).text(i);

            }




            /*Slider*/




            var triggers = $('ul.triggers li');
            var images = $('.bigimageslider .item-list ul li');
            var lastElem = triggers.length-1;
            //alert(lastElem);
            var mask = $('.bigimageslider .item-list ul');
            var imgWidth = images.width();
            var target;

            triggers.first().addClass('selected');
            mask.css('width', imgWidth*(lastElem+1) +'px');

            function sliderResponse(target) {
                //alert(6);
                mask.stop(true,false).animate({'left':'-'+ imgWidth*target +'px'},300);
                triggers.removeClass('selected').eq(target).addClass('selected');
               // console.log(imgWidth*target);
            }

            triggers.click(function() {
                if ( !$(this).hasClass('selected') ) {
                    target = $(this).index();
                    sliderResponse(target);
                    resetTiming();
                }
            });
            $('.next').click(function() {
                target = $('ul.triggers li.selected').index();
                target === lastElem ? target = 0 : target = target+1;
                sliderResponse(target);
                //alert(target);
                resetTiming();
            });
            $('.prev').click(function() {
                target = $('ul.triggers li.selected').index();
                lastElem = triggers.length-1;
                target === 0 ? target = lastElem : target = target-1;
                sliderResponse(target);
                resetTiming();
            });
            function sliderTiming() {
                target = $('ul.triggers li.selected').index();
                target === lastElem ? target = 0 : target = target+1;
                sliderResponse(target);
            }
             //var timingRun = setInterval(function() { sliderTiming(); },5000);
             function resetTiming() {
             //clearInterval(timingRun);
             //timingRun = setInterval(function() { sliderTiming(); },5000);
             }




            /*Slider*/

            //zoom in product detail

setTimeout(function(){




// engage



},2000);


            $('.control').text('');



            //end of the zoom

            $('.view-product-detail').find('.bigimageslider').find('li').find('img').mouseenter(function(){

               // $('.glass').css('background-position','');
                //alert($(document.activeElement).attr('class'));
                //alert(9);















                var Magnifier = (function($){
                    var LIB = {
                        /* standard selection */
                        selectors : {
                            magnify : $('.bigimageslider ul li')
                            , glass_class : 'glass' // lame
                            , glass : '.glass'
                            , thumb : $('.bigimageslider ul li img')
                            , active_class : 'active'
                        }
                        ,
                        /* remember dom elements */
                        $el : { }
                        ,
                        /* prepare all stuff */
                        init : function(){
                            // get dom elements
                            LIB.$el.magnifiers = $(LIB.selectors.magnify);

                            //add glass to each magnifier
                            var $glass = $('<div></div>').addClass(LIB.selectors.glass_class);

                            // get the native image size of each magnifier source image
                            LIB.$el.magnifiers.each(function(i,o){
                                var $magnifier = $(o)
                                    , $thumb = $magnifier.find(LIB.selectors.thumb)
                                    ;

                                // use Image object to get the dimensions
                                var image_object = new Image();
                                var srcimg=$thumb.attr("src");
                                var srcimg2=srcimg.replace('newprobigimg','zoom_image');

                                //alert(srcimg2);

                                image_object.src = srcimg2;



                                // save for later
                                $magnifier.data({"native_w":image_object.width, "native_h":image_object.height});

                                // attach behaviors
                                $magnifier
                                    .mousemove(LIB.behaviors.mousemove)
                                ;

                                // add glass
                                //alert();
                                $thumb.before( $glass.clone().css('background-image', 'url(' + srcimg2 + ')') );
                            });

                        }//--        fn        init
                        ,
                        behaviors : {
                            /* delay for...fade */
                            fadeDelay : 300
                            ,
                            /* fade in/out glass overlay if mouse is outside container */
                            isHover : function(cw, ch, mx, my){
                                return (mx < cw && my < ch && mx > 0 && my > 0);
                            }//--        fn hover
                            ,
                            /* move glass overlay */
                            mousemove : function(e){
                                var $magnifier = $(this)
                                    , offset = $magnifier.offset() // relative position
                                    , mx = e.pageX - offset.left // relative to mouse
                                    , my = e.pageY - offset.top // relative to mouse
                                    , $glass = $magnifier.find(LIB.selectors.glass)
                                    , $thumb = $magnifier.find(LIB.selectors.thumb)
                                    , rx, ry, bgp // relative ratios
                                    , native_width = $magnifier.data('native_w')
                                    , native_height = $magnifier.data('native_h')
                                    , glass_width = $glass.width()
                                    , glass_height = $glass.height()
                                    ;


                                if( LIB.behaviors.isHover($magnifier.width(), $magnifier.height(), mx, my) ) {
                                    // show
                                    $glass.fadeIn(LIB.behaviors.fadeDelay);
                                    // $('.glass').css('display','!important');

                                    //The background position of .glass will be changed according to the position
                                    //of the mouse over the .small image. So we will get the ratio of the pixel
                                    //under the mouse pointer with respect to the image and use that to position the
                                    //large image inside the magnifying glass
                                    rx = Math.round(mx/$thumb.width()*native_width - glass_width/2)*-1;
                                    ry = Math.round(my/$thumb.height()*native_height - glass_height/2)*-1;
                                    // alert(rx+'--'+ry);
                                    bgp = rx + "px " + ry + "px";
                                    //alert(bgp);

                                    //The logic is to deduct half of the glass's width and height from the
                                    //mouse coordinates to place it with its center at the mouse coordinates
                                    $glass.css({
                                        left: mx - glass_width/2
                                        , top: my - glass_height/2
                                        , backgroundPosition:bgp
                                        //,display:'block !important'


                                    });

                                }//-- if visible
                                else {
                                    // hide
                                    $glass.fadeOut(LIB.behaviors.fadeDelay);
                                }//-- if !visible
                            }//--        fn mousemove
                        }//--        behaviors
                        ,
                        /* include execution in page, with .ready wrapper */
                        ready : function(){
                            // ready
                            $(function(){
                                // setup
                                LIB.init();
                            });
                        }//--    fn    ready

                    };////----        LIB

                    return LIB;
                })(jQuery);


                Magnifier.ready();



            });




        $('.view-product-detail').find('.bigimageslider').find('li').mouseleave(function(e){


            //($(this).removeAttr('style'));
            //alert($(document.activeElement).attr('class'));
           // alert(("e.pageX: " + e.pageX + ", e.pageY: " + e.pageY));
            //alert($(this).offset().top+$(this).height()+'===='+$(this).offset().left+$(this).width());
            $('.glass').remove();

            //alert($(this).prev().css('display'));


            //$('.glass').setAttribute('style', element.style.cssText +'display' + ':' + 'none' + ((important) ? ' !important' : '') + ';');

        });


            $('.view-product-detail').find('.smallproimg').find('img').click(function(){
                var curimg=$(this);

                var valimg=$('.view-product-detail').find('.smallproimg').find('img').index(curimg);

                $('.view-product-detail').find('.triggers').find('li').eq(valimg).click();


            });

            //$('.view-product-detail').find('.smallimg').prepend("<a href=javascript:void(0) class=previous>Prev</a>");
            //$('.view-product-detail').find('.smallimg').append("<a href=javascript:void(0)>Next</a>");
            //$('.view-product-detail').find('.smallimg').append("<span class=next>next</span>");




            var eventnodeid='';

            $('.page-node-2').find('a.popup-element-title').click(function()
            {
                //alert($('.page-node-2').find('a.popup-element-title').index(this));
                eventnodeid = ($(this).closest('.views-row').find('.views-field-nid').find('span').html());

            });




            /*Light box pop up height manage purpose js*/
            $('.node-fit_report_event_mail-form').find('.form-text').keyup(function(){

                //alert($(this).closest('.views-field-nid').find('span').text());
              // alert(eventnodeid);
                //$(this).closest('input:hidden').val(eventnodeid);
                $(this).closest('.form-item').parent().find('.field-name-field-event-node-id').find('input').val(eventnodeid);
                //alert($(this).closest('.form-item').parent().find('.field-name-field-event-node-id').find('input').val());

            });


            $('#edit-custom-search-blocks-form-1--2').attr('placeholder','Search Products');
            //alert(mail);


            $('#fit-report-event-e-mail-content-node-form').find('.form-item-title').css('display','none');
            $('#fit-report-event-e-mail-content-node-form').find('.form-item-title').find('input').val(mail);
            $('#fit-report-event-e-mail-content-node-form').find('#edit-field-event-email-node-id').css('display','none');
            $('#fit-report-event-e-mail-content-node-form').find('.form-item-field-report-id-und-0-value').css('display','none');
            $('#fit-report-event-e-mail-content-node-form').find('.form-item-field-report-title-und-0-value').css('display','none');
            $('#fit-report-event-e-mail-content-node-form').find('#edit-field-event-email-node-id').find('input').val(id);
            $('#fit-report-event-e-mail-content-node-form').find('#edit-field-report-id').find('input').val(rid);
            $('#fit-report-event-e-mail-content-node-form').find('#edit-field-report-title').find('input').val(title);


            $('.views-field-field-gallery-image').css('cursor','pointer');
            $('.views-field-field-video-').css('cursor','pointer');

            $('.views-field-field-gallery-image').click(function(){

                //alert(1);

                $(this).parent().find('a').click();



            });

            $('.views-field-field-video-').click(function(){

                //alert(1);

                $(this).parent().find('a').click();


            });

            $('.node-type-page').find('.views-view-grid').find('.views-field-nid').click(function(){

                //alert(1);
                $(this).parent().find('.views-field-popup').find('a').click();


            });

            $('.views-field-field-video-').each(function(){

                var videoimgsource=$(this).find('img').attr('src');

                var videoimgsource1=videoimgsource.replace('www.youtube.com','img.youtube.com');

                var videoimgsource2=videoimgsource1.replace('watch?v=','vi/');
                //alert(videoimgsource2);

                videoimgsource2= videoimgsource2+'/0.jpg';
                $(this).find('img').attr('src',videoimgsource2);
                $(this).find('img').css('width','340').css('height','270');
            })






            // $(".fe").html('<a href="mailto:email:test.com">email@test.com</a>');

            var src= $('.front').find('.view-id-feature_gallery_image1').find('.views-field-field-gallery-image').find('img').eq(2).attr('src');

            if(typeof(src)!='undefined'){
                //alert(1);

                var src=src.replace("feature_gallery1","feature_gallery2");
                $('.front').find('.view-id-feature_gallery_image1').find('.views-field-field-gallery-image').find('img').eq(2).attr('src',src).attr('width','269').attr('height','869');
            }

            var src1= $('.front').find('.view-id-feature_gallery_image1').find('.views-field-field-gallery-image').find('img').eq(3).attr('src');
            if(typeof(src1)!='undefined'){

                //alert(2);

                var src1=src1.replace("feature_gallery1","feature_gallery3");
                $('.front').find('.view-id-feature_gallery_image1').find('.views-field-field-gallery-image').find('img').eq(3).attr('src',src1).attr('width','601').attr('height','270');
            }

            var src2= $('.front').find('.view-id-feature_gallery_image1').find('.views-field-field-gallery-image').find('img').eq(4).attr('src');
            if(typeof(src2)!='undefined'){
                //alert(3);

                var src2=src2.replace("feature_gallery1","feature_gallery4");
                $('.front').find('.view-id-feature_gallery_image1').find('.views-field-field-gallery-image').find('img').eq(4).attr('src',src2).attr('width','269').attr('height','270');
            }


            /*  $('#edit-panes-billing-copy-address').click(function(){


             if($(this).is(":checked")) {

             alert(1);
             $('#edit-panes-billing-billing-first-name').val($('#edit-panes-delivery-delivery-first-name').val());
             $('#edit-panes-billing-billing-last-name').val($('#edit-panes-delivery-delivery-last-name').val());
             $('#edit-panes-billing-billing-company').val($('#edit-panes-delivery-delivery-company').val());
             $('#edit-panes-billing-billing-street1').val($('#edit-panes-delivery-delivery-street1').val());
             $('#edit-panes-billing-billing-street2').val($('#edit-panes-delivery-delivery-street2').val());
             $('#edit-panes-billing-billing-zone').val($('#edit-panes-delivery-delivery-zone').val());
             $('#edit-panes-billing-billing-postal-code').val($('#edit-panes-delivery-delivery-postal-code').val());
             $('#edit-panes-billing-billing-zone').val($('#edit-panes-delivery-delivery-zone').val());
             $('#edit-panes-billing-billing-phone').val($('#edit-panes-delivery-delivery-phone').val());
             $('#edit-panes-billing-billing-country').val($('#edit-panes-delivery-delivery-country').val());
             $('#edit-panes-billing-billing-city').val($('#edit-panes-delivery-delivery-city').val());
             $('#edit-panes-billing-billing-phone').val($('#edit-panes-delivery-delivery-phone').val());

             }
             else{
             alert(2);
             $('#edit-panes-billing-billing-first-name').val('');
             $('#edit-panes-billing-billing-last-name').val('');
             $('#edit-panes-billing-billing-company').val('');
             $('#edit-panes-billing-billing-street1').val('');
             $('#edit-panes-billing-billing-street2').val('');
             $('#edit-panes-billing-billing-zone').val('');
             $('#edit-panes-billing-billing-postal-code').val('');
             $('#edit-panes-billing-billing-zone').val('');
             $('#edit-panes-billing-billing-phone').val('');
             $('#edit-panes-billing-billing-country').val('');
             $('#edit-panes-billing-billing-city').val('');
             $('#edit-panes-billing-billing-phone').val('');




             }
             });
             */
			$('#popup-active-overlay').css('width','100%');
            $('.front').find('.field-name-field-banner-title-description').find('.field-item').click(function(){

               window.location.href='/shop';
            });

           // $('.view-products').find('.views-row').click(function(){

               // $(this).find('.lightbox-processed').click();
               //alert(1);

            //});

            $('.lightbox-popup').find('.mainimagediv').find('img').live('click', function() {

                    $(this).parent().parent().find('img').css('border','none');

                    var src=$(this).attr('src');
                    //var imgsrc=$(this).attr('src');
                    var src2=src.replace("viewdetail-thum","productlisting");
                    //alert(newimg);
                    var src1=src.replace("files/styles/viewdetail-thum/public","files/styles/zoom_image/public");
                    $(this).css("border", "#008081 solid 1px");

                $(this).parent().parent().find('.zoom').find('.small').find('img').attr('src',src2);
                $(this).parent().parent().find('.zoom').find('.large').find('img').attr('src',src1);


                    //alert(1);


                /*$('.lightbox-popup').find('.mainimagediv').find('img').css("border", "none");
                $(this).css("border", "#008081 solid 1px");

                var imgsrc=$(this).attr('src');
                var imgsrc1=imgsrc.replace("viewdetail-thum","productlisting");
                //alert(imgsrc1);
                //alert($(this).parent().parent().find('.mainimg').find('img').html());
                $(this).parent().parent().find('.mainimg').empty();
                $(this).parent().parent().find('.mainimg').removeClass('spritezoom-instance');
                $(this).parent().parent().find('.mainimg').html("<img typeof=foaf:Image width=356 height=500 src="+imgsrc1+"/>");*/

               // }
                //alert(1);
            });


            $('.lightbox-popup').find('.mainimagediv').find('.mainimg').find('img').live('mouseover',function()
            {
                //alert(1);
                //alert(flag1+flag);

                $('.lightbox-popup').find('.mainimagediv').find('.mainimg').find('.large').find('img').removeAttr('width');
                $('.lightbox-popup').find('.mainimagediv').find('.mainimg').find('.large').find('img').removeAttr('height');



                //$(this).parent().find('.large').find('image').removeAttr('height');

                //alert($(this).attr('src'));
                var light=$(this).closest( ".lightbox-popup" );
                var lightvar=(light.attr('id'));

                var newimg=$(this).attr('src');
                //$('.easyzoom').easyZoom();
               // var jq = $.noConflict();


                   // var jq = $.noConflict();
                if(flag!=flag1 || flag==0){
                    $('.lightbox-popup').find('.mainimagediv').find('.mainimg').find('.large').show();
                   // alert(9);
                    $(".zoom").anythingZoomer({
                        overlay : true,
                        edit: true,
                        // If you need to make the left top corner be at exactly 0,0, adjust the offset values below
                        offsetX : 0,
                        offsetY : 0
                    });
                    flag=lightvar;
                }


                //flag=1;
                flag1=lightvar;
                //flag=flag1;
                //alert(newimg);
                //var newimg1=newimg.replace("files/styles/productlisting/public","files");
                //$(this).attr('src',newimg1);
               // $(this).css("cursor","pointer");

               /* $(this).parent().spritezoom({
                    border  : 1,
                    source  : newimg,
                    zSource :newimg1,
                    layout  : "right"
                });*/



                //$(this).animate({width: "500px"}, 2000);
            });

            /*$('.page-node-1').find('#frameNextLink').live('click',function(){

                alert(1);

            });*/

            $('#bottomNavClose').live('click',function(){

                $(".zoom").anythingZoomer({
                    overlay : true,
                    edit: true,
                    // If you need to make the left top corner be at exactly 0,0, adjust the offset values below
                    offsetX : 0,
                    offsetY : 0
                });
            });







            $('.lightbox-popup').find('.ajax-cart-submit-form').find('.form-type-checkbox').find('.option').live('click',function(){





                if ( $( this ).hasClass( "active-size" ) ) {

                    $(this).removeClass('active-size');

                }

                else{

                    $(this).parent().parent().find('.option').each(function(){
                        //alert(1);
                        $(this).prev().removeAttr('checked');
                        $(this).removeClass('active-size');

                    });

                    $(this).addClass('active-size');

                }
               //alert(1);





                $(this).prev().prop("checked", !$(this).prev().prop("checked"));


            });


            $('.view-product-detail').find('.ajax-cart-submit-form').find('.form-type-checkbox').find('lebel').click(function(){



                    //$(this).addClass('active-size');

                                //alert($('.productdetailaddtocartsize').find('.ajax-cart-submit-form').find('.form-type-checkbox').find('.option').length);

               $(this).prev().prop("checked", !$(this).prev().prop("checked"));
                //$(this).prev().prop("checked",'checked');
               // alert($(this).prev().attr("checked"));

            });


            $('.view-product-detail').find('.ajax-cart-submit-form').find('.form-type-checkbox').find('.option').click(function(){


                if ( $( this ).hasClass( "active-size" ) ) {

                    $(this).removeClass('active-size');

                }

                else{

                    $(this).parent().parent().find('.option').each(function(){
                        //alert(1);
                        $(this).prev().removeAttr('checked');
                        $(this).removeClass('active-size');

                    });

                    $(this).addClass('active-size');

                }



            });




           // $('.form-type-checkbox').find('.form-checkbox').click(function(){

               // alert(9);

            //});




           /* $('.lightbox-processed').click(function(){

                $('.lightbox-popup').find('.mainimagediv').find('.mainimg').find('img').mouseover();
                $(".zoom").anythingZoomer({
                    overlay : true,
                    edit: true,
                    // If you need to make the left top corner be at exactly 0,0, adjust the offset values below
                    offsetX : 0,
                    offsetY : 0
                });

               //alert(9);
            });*/


          /*  $('select[name^="income_type_"]').live('change', function() {
                alert($(this).val());
            });
			*/


			
			

			
			

        }
    };
})(jQuery);


function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}