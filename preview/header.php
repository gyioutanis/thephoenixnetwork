<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="pavlovec.net">
    <title>Phoenix Gold Network</title>

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">



    <?php $file = 'assets/css/dist/tailwind.css'; ?>
    <link rel="stylesheet" href="<?= $file ?>?v=<?= filectime($file) ?>">


    <!-- <?php $file = 'assets/css/dist/slick.min.css'; ?>
    <link rel="stylesheet" href="<?= $file ?>?v=<?= filectime($file) ?>"> -->

    <!-- <?php $file = 'assets/css/dist/lity.min.css'; ?>
    <link rel="stylesheet" href="<?= $file ?>?v=<?= filectime($file) ?>"> -->

    <?php $file = 'assets/css/dist/style.css'; ?>
    <link rel="stylesheet" href="<?= $file ?>?v=<?= filectime($file) ?>">


    <?php $file = 'assets/js/jquery-1.12.4.min.js'; ?>
    <script src="<?= $file ?>?v=<?= filectime($file) ?>"></script>

    <?php $file = 'assets/js/jquery-migrate-1.4.1.min.js'; ?>
    <script src="<?= $file ?>?v=<?= filectime($file) ?>"></script>

    <!-- <?php $file = 'assets/js/slick.min.js'; ?>
    <script src="<?= $file ?>?v=<?= filectime($file) ?>"></script> -->

    <!-- <?php $file = 'assets/js/lity.min.js'; ?>
    <script src="<?= $file ?>?v=<?= filectime($file) ?>"></script> -->

    <?php $file = 'assets/js/header-scripts.js'; ?>
    <script src="<?= $file ?>?v=<?= filectime($file) ?>"></script>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
<style type="text/css">

</style>
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      }
    }
  };

</script>
<script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>

</head>


<body class="body">
<div class="body-inner" id="top">
    <section class="header-wrap">
        <header class="header">
            <div class="header-inner">
                <div class="header__logo">
                    <a href="#top">
                        <img src="assets/img/logo-tfa.png" alt="logo: GPC" width="53">
                        <p style="font-size: 22px;">Phoenix Gold Network</p>
                    </a>
                </div>

                <div class="header__menu">
                    <div class="header__menu__btn">
                        <a href="https://phoenix.pandahausfutbol.com/" style="display:table;margin: auto;" target="_blank"><img src="assets/img/img-enter-app.svg" alt="Mint a gold based NFT"></a>
                    </div>

                </div>

                <div class="header__burger">
                    <div class="header__burger-inner">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    </section>