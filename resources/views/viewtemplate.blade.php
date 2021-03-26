<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>@yield('title') - CHBC Ministry</title>
    <meta content="" name="descriptison">
    <meta content="" name="keywords">

 @include('partialview.css')

</head>

<body>
 @include('partialview.topbar')
    <!-- ======= Header ======= -->
@include('partialview.header')
    <!-- End Header -->
    <!-- ======= Hero Section ======= -->
@yield('content') 

@include('partialview.footer')

    <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>

@include('partialview.js')

</body>

</html>