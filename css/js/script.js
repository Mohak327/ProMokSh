// Animations init
new WOW().init();
// Carousel options

$('.modal-content').resizable({
  //alsoResize: ".modal-dialog",
  minHeight: 300,
  minWidth: 300
});


$(".carousel").carousel({
  interval: 3000,
});


<script type="text/javascript">
      $(function () {
        $("#login").click(function () {
          $("#loginModal").modal("show");
        });

        $("#reserve").click(function () {
          $("#reservation").modal("show");
        });

        $("#signup-btn").click(function () {
          $("#loginModal").modal("hide");
          $("#signup").modal("show");
        });
      });


        {/* $("#nav-about").click(function (){
          $("#nav-home").removeClass("active");
          $("#nav-about").addClass("active");
        }); */}

      $(document).ready(function () {
        $("#mycarousel").carousel({ interval: 2000 });
        $("#carouselButton").click(function () {
          if ($("#carouselButton").children("span").hasClass("fa-pause")) {
            $("#mycarousel").carousel("pause");
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");
          } else if (
            $("#carouselButton").children("span").hasClass("fa-play")
          ) {
            $("#mycarousel").carousel("cycle");
            $("#carouselButton").children("span").removeClass("fa-play");
            $("#carouselButton").children("span").addClass("fa-pause");
          }
        });
      });
    </script>