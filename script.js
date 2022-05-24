$(function () {
  $(".subGellery").hover(
    function () {
      $("#subGelleryMenu").css({ display: "inline-block", "z-index": 1 });
      if (true) {
        $("#subGelleryMenu").hover(
          function () {
            $("#subGelleryMenu").css({
              display: "inline-block",
              "z-index": 1,
            });
          },
          function () {
            $("#subGelleryMenu").fadeOut(1000);
          }
        );
      }
    },
    function () {
      // out
    }
  );
});

$(function () {
  $("#hireMe").hover(
    function () {
      $("#learnMore").css({
        background: "#efefef",
      });
    },
    function () {
      $("#learnMore").css({
        background: "-webkit-linear-gradient(0deg, #8490ff 0%, #62bdfc 100%)",
      });
    }
  );
});

// Blog img hover
function blog(bImg, h1) {
  $(function () {
    $(bImg).hover(
      function () {
        //hover in
        $(bImg).css({ transform: "scale(1.1)" });
        $(h1).css({
          color: "#68B5FD",
        });
      },
      function () {
        //hover out
        $(bImg).css({ transform: "scale(1)" });
        $(h1).css({
          color: "black",
        });
      }
    );
  });
}

blog("#blogB_one", "#b1_h2");
blog("#blogB_two", "#b2_h2");
blog("#blogB_three", "#b3_h2");

// Gallery Content
function gallery(card, mainImg, logo) {
  $(function () {
    $(card).hover(
      function () {
        $(mainImg).css({
          transform: "scale(1.5)",
          opacity: "0.3",
          transition: "2s",
          cursor: "pointer",
        });
        $(logo).fadeIn(1000);
      },
      function () {
        $(mainImg).css({
          transform: "scale(1)",
          opacity: "1",
          transition: "2s",
        });
        $(logo).fadeOut();
      }
    );
  });
}

gallery("#all_1", "#all_1_mainImg", "#all_1_llogoImg");
gallery("#all_2", "#all_2_mainImg", "#all_2_llogoImg");
gallery("#all_3", "#all_3_mainImg", "#all_3_llogoImg");
gallery("#all_4", "#all_4_mainImg", "#all_4_llogoImg");
gallery("#all_5", "#all_5_mainImg", "#all_5_llogoImg");
gallery("#all_6", "#all_6_mainImg", "#all_6_llogoImg");
gallery("#all_7", "#all_7_mainImg", "#all_7_llogoImg");
gallery("#all_8", "#all_8_mainImg", "#all_8_llogoImg");
gallery("#all_9", "#all_9_mainImg", "#all_9_llogoImg");
gallery("#all_10", "#all_10_mainImg", "#all_10_llogoImg");
gallery("#all_11", "#all_11_mainImg", "#all_11_llogoImg");
gallery("#al3_12", "#all_12_mainImg", "#all_12_llogoImg");

// Gallery btn

$(function () {
  var all = $("#all");
  var human = $("#human");
  var nature = $("#nature");

  $(human).click(function () {
    $("#galleryImg").css({
      display: "none",
    });
    $("#galleryImg3").css({
      display: "none",
    });
    $("#galleryImg2").css({
      display: "block",
    });
    $(nature).click(function () {
      $("#galleryImg2").css({
        display: "none",
      });
      $("#galleryImg").css({
        display: "none",
      });
      $("#galleryImg3").css({
        display: "block",
      });
    });
    $(all).click(function () {
      $("#galleryImg2").css({
        display: "none",
      });
      $("#galleryImg3").css({
        display: "none",
      });
      $("#galleryImg").css({
        display: "block",
      });
    });
  });
});
