@extends('viewtemplate')

@section('title', 'Home')

@section('content')

        @include('partialview.homepage')
        <br/>
        <!-- End Hero -->
        <main id="main">
            <!-- ======= Why Us Section ======= -->
            @include('partialview.mainhome')
            @include('partialview.aboutus')
            @include('partialview.services')

            @include('partialview.core')

            @include('partialview.testimonials')

            @include('partialview.team')
            <!-- ======= Pricing Section ======= 
            <section id="pricing" class="pricing">
                <div class="container">

                    <div class="section-title">
                        <h2 data-aos="fade-up">Pricing</h2>
                        <p data-aos="fade-up">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi
                            quidem hic quas.</p>
                    </div>

                    <div class="row">

                        <div class="col-lg-3 col-md-6" data-aos="fade-up">
                            <div class="box">
                                <h3>Free</h3>
                                <h4><sup>$</sup>0<span> / month</span></h4>
                                <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                    <li class="na">Pharetra massa</li>
                                    <li class="na">Massa ultricies mi</li>
                                </ul>
                                <div class="btn-wrap">
                                    <a href="#" class="btn-buy">Buy Now</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="100">
                            <div class="box featured">
                                <h3>Business</h3>
                                <h4><sup>$</sup>19<span> / month</span></h4>
                                <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                    <li>Pharetra massa</li>
                                    <li class="na">Massa ultricies mi</li>
                                </ul>
                                <div class="btn-wrap">
                                    <a href="#" class="btn-buy">Buy Now</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
                            <div class="box">
                                <h3>Developer</h3>
                                <h4><sup>$</sup>29<span> / month</span></h4>
                                <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                    <li>Pharetra massa</li>
                                    <li>Massa ultricies mi</li>
                                </ul>
                                <div class="btn-wrap">
                                    <a href="#" class="btn-buy">Buy Now</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
                            <div class="box">
                                <span class="advanced">Advanced</span>
                                <h3>Ultimate</h3>
                                <h4><sup>$</sup>49<span> / month</span></h4>
                                <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                    <li>Pharetra massa</li>
                                    <li>Massa ultricies mi</li>
                                </ul>
                                <div class="btn-wrap">
                                    <a href="#" class="btn-buy">Buy Now</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>  -->
            <!-- End Pricing Section -->

          @include('partialview.faq')

           @include('partialview.contactus')

        </main>
        <!-- End #main -->
@endsection()