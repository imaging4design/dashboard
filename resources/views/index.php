<!doctype html>
<html lang="en" ng-app="myApp" menu-animate id="page-height">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>LOVEGROVE DASHBOARD</title>

        <!-- CSS -->
        <link href='https://fonts.googleapis.com/css?family=Dosis:300,400,500,600,700,800' rel='stylesheet' type='text/css'><!-- Google fonts -->
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet"><!-- Font Awesome -->
        <link rel="stylesheet" href="css/bootstrap.css"><!-- Twitter Bootstrap -->
        <link rel="stylesheet" href="css/styles.css"><!-- Custom Styles -->
        <link rel="stylesheet" href="css/nga.min.css"><!-- Animation Styles -->
        <link rel="stylesheet" href="js/lib/google-code-prettify/prettify.css"><!-- Custom Styles -->

        <style type="text/css">
            [ng:cloak], 
            [ng-cloak], 
            [data-ng-cloak], 
            [x-ng-cloak], 
            .ng-cloak, 
            .x-ng-cloak {
                display: none !important;
            }
        </style>

    </head>

    <body ng-cloak>
    

        <!-- Add your site or application content here -->
        <div class="container-fluid full-height">
            <div class="main-container" ng-controller='homeCtrl' ng-view=""></div>
        </div><!--ENDS container-->






        <!-- JS -->
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script><!-- Angular JS 1.5.0 -->
        <script src="//code.jquery.com/jquery-1.12.0.min.js"></script><!-- jQuery 1.12.0 -->
        <script src="js/lib/google-code-prettify/prettify.js"></script><!-- Google Prettify JS -->
                

        <!-- Bootstrap core JavaScript
        ================================================== -->
        <!-- Placed at the end of the document so the pages load faster -->
        <script src="js/bootstrap.min.js"></script>


        <script src="js/lib/angular-resource.min.js"></script>
        <script src="js/lib/angular-route.min.js"></script>
        <script src="js/lib/angular-animate.min.js"></script>
        <script src="js/lib/angular-cookies.min.js"></script>
        <script src="js/lib/angular-sanitize.min.js"></script>
        <script src="js/lib/underscore-min.js"></script>

        <script src="js/lib/ui-bootstrap.min.js"></script>


        <script src="js/lib/tabby.js"></script>

        


        <!-- ANGULAR JS (Custom) FILES -->
        <!-- all angular resources wull be loaded from the /public folder -->
        <script src="js/app.js"></script> <!--load our application -->

        <!-- SERVICES -->
        <script src="js/services/services.js"></script><!-- load our service -->

        <!-- CONTROLLERS -->
        <script src="js/controllers/controllersGeneral.js"></script><!-- load our controller -->
        <script src="js/controllers/controllersSnippets.js"></script><!-- load our controller -->
        <!--<script src="js/controllers/controllersEntrys.js"></script> load our controller -->


    </body>
</html>