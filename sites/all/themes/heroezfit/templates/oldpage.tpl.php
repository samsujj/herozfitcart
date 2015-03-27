<div class="top-nav">

    <div class="container">
        <div class="row">
            <div class="col-xs-6">

                <?php if ($logo): ?><div id="site-logo"><a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
                        <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
                    </a></div><?php endif; ?>



            </div>
            <div class="col-xs-6">

                <?php
                global $user;

                /*global $base_url;
                echo $current_path = $base_url . '/' . current_path();
                exit;*/
                if ( !$user->uid ) {
                    ?>
                    }
                    <div class="signup"><a href="<?php echo $GLOBALS['base_url'] ; ?>/user/register">Sign Up</a> </div>
                    <div class="login"><a href="<?php echo $GLOBALS['base_url'] ; ?>/user/login">Login</a> </div>
                <?php
                }
                else{
                    ?>

                    <div class="signup"><a href="<?php echo $GLOBALS['base_url'] ; ?>/user/logout"> <?php /*var_dump( $GLOBALS['user']->roles);*/ ?>Log out</a> </div>

                <?php
                }
                ?>


            </div>


        </div>

    </div>

</div>




<div class="nav-contain">
    <div class="container">
        <nav class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">



                    <?php
                    if (module_exists('i18n_menu')) {
                        $main_menu_tree = i18n_menu_translated_tree(variable_get('menu_main_links_source', 'main-menu'));
                    } else {
                        $main_menu_tree = menu_tree(variable_get('menu_main_links_source', 'main-menu'));
                    }
                    print drupal_render($main_menu_tree);
                    ?>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
    </div>
</div>



<div class="main-body-wrapper">
    <div class="container">

        <!-- --><?php
        /*        print @$messages;
                */?>

        <?php print render($page['content']); ?>









    </div>
</div>


