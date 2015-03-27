<?php  $ma =arg();

//var_dump($ma);

//exit;
if(count($ma)>0){
$mail=@$ma[3];
$id=@$ma[4];
$reportid=@$ma[5];
$title=@$ma[6];
}


?>

<script type="text/javascript">

    //$.noConflict();
    //jQuery.fn.cycle.defaults.autoSelector = '.slideshow';


    var mail='<?php echo $mail ;  ?>';
    var id='<?php echo $id;   ?>';
    var rid='<?php echo $reportid;   ?>';
    var title='<?php echo $title;   ?>';


</script>
<div class="top-contain">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="top_text">Lorem ipsum dolor sit consectetur adipiscing. <span>Nunc ut blandit magna.</span> Donec.</div>

            </div>
            <div class="col-md-6">
                <div class="top-link">
                    <div class="addtocart"><a href="<?php  echo  base_path().'cart'?>">Cart</a></div>
                    <?php  global $user;

                    /*global $base_url;
                    echo $current_path = $base_url . '/' . current_path();
                    exit;*/
                    if ($user->uid ) { ?>
                    <div class="wishlist"><a href="<?php  echo  base_path() .'wishlist' ?>">Wishlist</a></div>
                        <?php } ?>
                    <div class="phone"><a href="tel:+1 (123) 123-4567">+1 (123) 123-4567</a></div>

                   <div class="top-acount-div">
                  
                          <!--  <li><a href="#">My Account</a>-->
                               <!-- <ul>-->
                                  <?php  global $user;

                                    /*global $base_url;
                                    echo $current_path = $base_url . '/' . current_path();
                                    exit;*/
                                    if ( !$user->uid ) { ?>

                           
                                       <div class="logout"> <a href="<?php echo $GLOBALS['base_url']  ?>/user/login">Login</a> </div>
                                        <div class="signup"><a href="<?php echo $GLOBALS['base_url']  ?>/user/register">Sign Up</a> </div>
                                  
                                        

                                   <?php }
                                  else {
                                  ?>
                                   
                                     <div class="myaccount">  <a href="<?php  echo  base_path() .'user' ?>">My Account</a>       </div>
                                     <div class="logout">  <a href="<?php  echo  base_path() .'user/logout' ?>">Log Out</a>       </div>
                                     
                                   

                                    <?php } ?>
                                <!--</ul>-->


                       </div>

                  





                    <div class="clear"></div>
                </div>
            </div>
        </div>
    </div>

</div>

<?php if ($logo): ?>
<div class="logo"><a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" /></a></div>
<?php endif; ?>


<div class="container">


  <?php


  print $messages;

  //print drupal_get_title();

?>


    <div class="menucontain">
        <div class="row">
            <div class="col-md-9">
                <nav id="nav" role="navigation">

<?php
  global $user;
  $roles=($user->roles);
  if (array_key_exists(5, $roles)) {


  ?>
  <div class="menu-div-body">
                            <ul>
                              <li><a href="<?php  echo  base_path()?>">Home</a></li>
                              <li><a href="<?php  echo  base_path() .'node/7/edit'?>">Home Banner Image</a></li>
                              <li><a href="<?php  echo  base_path() .'node/add/image-gallery'?>">Add Gallery Image</a></li>
                               <li><a href="<?php  echo  base_path() .'image-gallery-listing'?>">Gallery Image Listing</a></li>
                               <li><a href="<?php  echo  base_path() .'node/add/video-gallery'?>">Add Gallery Video</a></li>
                               <li><a href="<?php  echo  base_path() .'video-gallery-listing'?>">Gallery Video Listing</a></li>
                               <li><a href="<?php  echo  base_path() .'node/add/category'?>">Add Category</a></li>
                                <li><a href="<?php  echo  base_path() .'category-listing'?>">Category Listing </a></li>
                                 <li><a href="<?php  echo  base_path() .'node/add/product'?>">Add Product</a></li>
                                 <li><a href="<?php  echo  base_path() .'admin/store/products/attributes'?>">Product Attributes</a></li>
                                 <li><a href="<?php  echo  base_path() .'admin/store/products/attributes/add'?>">Add Attributes</a></li>
                                 <li><a href="<?php  echo  base_path() .'admin/store/products/attributes'?>">Manage Product Attiributes</a></li>
                                  <li><a href="<?php  echo  base_path() .'product-listing-admin'?>">Product Listing</a></li>
                                   
                                    <li><a href="<?php  echo  base_path() .'node/52/edit?destination=fit-report-listing'?>">Edit FIT REPORT</a></li>
                                    <!-- <li><a href="<?php /* echo  base_path() .'node/add/blog'*/?>">Add Blog</a></li>
                                     <li><a href="<?php /* echo  base_path() .'blog-listing'*/?>">Blog Listing</a></li>-->
                                     <li><a href="<?php  echo  base_path() .'admin/store/orders/view'?>">Orders</a></li>
                                     <li><a href="<?php  echo  base_path() .'admin/store/orders/create'?>">Create An Order</a></li>
                                     <li><a href="<?php  echo  base_path() .'admin/store/customers/wishlist'?>">Wishlists</a></li>
                                     <li><a href="<?php  echo  base_path() .'node/63/webform-results'?>">Contact List</a></li>
                                    <!-- <li><a href="<?php /* echo  base_path() .'user/'. $user->uid .'/edit'*/?>">Contact List</a></li>-->
                                     <li><a href="<?php  echo  base_path() .'node/add/fit-report-content'?>">Add Fit Report</a></li>
                                    <!-- <li><a href="<?php /* echo  base_path() .'node/add/fit-article'*/?>">Add Fit Article</a></li>-->
                                     <li><a href="<?php  echo  base_path() .'report-listing'?>">Fit Report Listing</a></li>
                                     <li><a href="<?php  echo  base_path() .'node/74/edit/admin/content'?>">Edit Fit Article</a></li>
                                     <li><a href="<?php  echo  base_path() .'general-user-listing'?>">General User Listing</a></li>
                                      <li><a href="<?php  echo  base_path() .'user/logout' ?>">Log Out</a></li>
                                      <li><a href="<?php  echo  base_path() .'subcribed-mail-listing' ?>">Subscription Emails</a></li>

                               <div class="clear"></div>
                                </ul>
                              <div class="clear"></div>
                         </div>

                    <?php
  }

                    if (module_exists('i18n_menu')) {
                        $main_menu_tree = i18n_menu_translated_tree(variable_get('menu_main_links_source', 'main-menu'));
                    } else {
                        $main_menu_tree = menu_tree(variable_get('menu_main_links_source', 'main-menu'));
                    }
                    print drupal_render($main_menu_tree);
                    ?>

                    <!--<a href="#nav" title="Show navigation">Show navigation</a> <a href="#" title="Hide navigation">Hide navigation</a>
                    <ul class="clearfix">

                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Fit  Report</a> </li>
                        <li><a href="#">Fit  Article</a></li>
                        <li><a href="#"> Video  &  Image  Gallery</a></li>
                        <li><a href="#">About  US</a></li>
                        <li><a href="#">Contact  Us</a></li>


                    </ul>-->
                </nav>


            </div>
            <div class="col-md-3">
                <div class="search-div">



                    <?php  $elements = drupal_get_form("custom_search_blocks_form_1");
                    $form = drupal_render($elements);
                    echo $form; ?>

                    <div class="clear"></div>

                </div>

            </div>


        </div>
    </div>


</div>

<div class="maincontentwrapper">
<div class="contentwrapper">

<?php print render($page['user_menu']); ?>


<?php
//$path = current_path();
//echo $path;
//exit;
//$x=arg();
//print_r($x);
//exit;
//if($x[3]=='attributes'){
  //  print drupal_get_title();

//}
//print_r($x[3]);


print render($page['content']); ?>

</div>
</div>

<div class="footer-top">
    <div class="container">
        <div class="row">
<!--            <div class="col-md-8"><p>Email Newsletter :</p> <div class="fid-box"><input type="text" class="sinput" placeholder="Enter email here..." /><input type="submit" class="sbtn" value="Subscribe Now!" /></div>-->
            <div class="col-md-8"><p>Email Newsletter :</p> <div class="fid-box"><?php

                    module_load_include('inc', 'node', 'node.pages');

                    $form = node_add('subscribed_mail');
                    $output = drupal_render($form);
                    print $output;

                    ?></div>
                <div class="clear"></div>
            </div>
            <div class="col-md-4"><div class="ficon"><a href="#"><img src="<?php  echo  base_path() . path_to_theme().'/images/i1.png'?>" alt="#" /></a><a href="#"><img src="<?php  echo   base_path() . path_to_theme().'/images/i2.png'?>" alt="#" /></a><a href="#"><img src="<?php  echo   base_path() . path_to_theme().'/images/i3.png'?>" alt="#" /></a></div>
                <div class="clear"></div>
            </div>


        </div>
    </div>

</div>

<div class="footer-bottom">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <ul>
                    <?php


                    if (module_exists('i18n_menu')) {
                        $main_menu_tree = i18n_menu_translated_tree(variable_get('menu_main_links_source', 'main-menu'));
                    } else {
                        $main_menu_tree = menu_tree(variable_get('menu_main_links_source', 'main-menu'));
                    }
                    print drupal_render($main_menu_tree);
                    ?>


                </ul>
                <div class="clear"></div>

            </div>
            <div class="col-md-4">
                <h1><a href="tel:+1 (123) 123-4567">+1 (123) 123-4567</a></h1>
                <h2><a href="mailto:CustomerService@HeroezFit.com">CustomerService@HeroezFit.com</a></h2>

            </div>
            <div class="col-md-2">


                <div class="footer-logo"><a href="<?php print $front_page; ?>"><img src="<?php  echo   base_path() . path_to_theme().'/images/flogo.png'?>"  alt="#"/></a></div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
</div>





