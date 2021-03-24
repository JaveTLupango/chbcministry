
@extends('viewtemplate')

@section('title', 'Home')

@section('content')
<main id="main">

  <!-- ======= Breadcrumbs ======= -->
  <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">
      <ol>
        <li><a href="index.html">Home</a></li>
        <li><a href="blog.html">Blog</a></li>
      </ol>
      <h2>Dolorum optio tempore voluptas dignissimos</h2>
    </div>
  </section><!-- End Breadcrumbs -->

  <!-- ======= Blog Section ======= -->
  <section id="blog" class="blog">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 entries">         
          @include('partialview.blogpost.articleblog')
          @include('partialview.blogpost.blogauthor')
          @include('partialview.blogpost.blogcomment')
        </div><!-- End blog entries list -->
        @include('partialview.blogpost.sidebar')
      </div>
    </div>
  </section><!-- End Blog Section -->
</main><!-- End #main -->
@endsection()