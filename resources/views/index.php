<!doctype html>
<html lang="en" ng-app="myApp" menu-animate>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>LOVEGROVE DASHBOARD</title>

    <!-- CSS -->
    <link href='http://fonts.googleapis.com/css?family=Raleway:400,500,600,700' rel='stylesheet' type='text/css'><!-- Google Fonts -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet"><!-- Font Awesome -->
    
    <!-- GOOGLE FONTS Open Sans -->
    <link href='https://fonts.googleapis.com/css?family=Dosis:300,400,500,600,700,800' rel='stylesheet' type='text/css'>
    

    <link rel="stylesheet" href="css/bootstrap.css"><!-- Twitter Bootstrap -->
    <link rel="stylesheet" href="css/styles.css"><!-- Custom Styles -->
    <link rel="stylesheet" href="js/lib/google-code-prettify/prettify.css"><!-- Custom Styles -->
    

    <!-- JS -->
    <script src="//code.jquery.com/jquery-1.12.0.min.js"></script><!-- jQuery 1.12.0 -->
    <!--<script src="//code.jquery.com/jquery-1.11.0.min.js"></script> jQuery 1.11.0 -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"></script><!-- Angular JS 1.5.0 -->
    <!--<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.21/angular.min.js"></script> Angular JS 1.2.21 -->

    <script src="js/lib/google-code-prettify/prettify.js"></script>

    
</head>
<body>
    


        <!-- Include (header) partials 
        <div ng-include="'partials/_includes/navbar.html'"></div>-->




        <!-- Add your site or application content here -->
        <div class="main-container" ng-view=""></div>
        

        
                

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
        <!--<script src="js/services/services.js"></script> load our service -->

        <!-- CONTROLLERS -->
        <script src="js/controllers/controllersTest.js"></script><!-- load our controller -->
        <!--<script src="js/controllers/controllersJobs.js"></script> load our controller -->
        <!--<script src="js/controllers/controllersEntrys.js"></script> load our controller -->


    </body>
</html>