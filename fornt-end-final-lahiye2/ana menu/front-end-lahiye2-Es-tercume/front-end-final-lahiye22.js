function section1languageAz() {
    document.getElementById("languageAz").style.backgroundColor = "#7520B9";
    document.getElementById("languageAz").style.color = "white";
    document.getElementById("languageEs").style.backgroundColor = "";
    document.getElementById("languageEs").style.color = "";
  }
  function section1languageEs() {
    document.getElementById("languageEs").style.backgroundColor = "#7520B9";
    document.getElementById("languageEs").style.color = "white";
    document.getElementById("languageAz").style.backgroundColor = "";
    document.getElementById("languageAz").style.color = "";
  }
  $(document).ready(function () {
    toastr.options = {
      closeButton: true,
      newestOnTop: false,
      progressBar: true,
      positionClass: "toast-bottom-center",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "3000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    };
    $(".searchBtn").click(function () {
      var searchValue = $(".mySearchInput").val();
      if (!searchValue) {
        toastr.error("Search filed is required!");
        return false;
      }
      let myPromise = new Promise(function (myResolve, myReject) {
        let req = new XMLHttpRequest();
        req.open("GET", "https://api.3sual.az/api/task");
        req.onload = function () {
          if (req.status == 200) {
            myResolve(req.response);
          } else {
            myReject("Not Found.");
          }
        };
        req.send();
      });
      myPromise.then(
        function (value) {
          mySearchResultInInput(value);
        },
        function (error) {
          mySearchResultInInput(error);
        }
      );
      function mySearchResultInInput(some) {
        var json = JSON.parse(some);
        for (let i = 0; i < json.length; i++) {
          if (searchValue == json[i].slug) {
            if (localStorage.getItem("mySearchResult") != null) {
              localStorage.setItem(
                "mySearchResult",
                localStorage.getItem("mySearchResult") +
                  "," +
                  searchValue.toString()
              );
              $(".mySearchInput").val("");
            } else {
              localStorage.setItem("mySearchResult", searchValue.toString());
              $(".mySearchInput").val("");
            }
          }
        }
      }
    });
    if (localStorage.getItem("mySearchResult") != null) {
      var a = localStorage.getItem("mySearchResult").split(",");
    }
    var clickCount = 0;
    $(".mySearchInput").click(function () {
      $("#mySearchedDiv").css("display", "block");
      clickCount++;
      if (clickCount != 1) {
        return false;
      }
      var html = "";
      for (var i = a.length - 1; i >= 0; i--) {
        $(".myDiv").css("display", "block");
        html += "<a href='../hablar/front-end-final-lahiye-hablar.html'>" + a[i] + "</a>";
      }
      document.getElementById("mySearchedDiv").innerHTML += html;
    });
    $("#mySearchedDiv").focusout(function () {
      $("#mySearchedDiv").css("display", "none");
    });
    var html;
    $(".mySearchInput").keyup(function () {
      document.getElementById("mySearchedDiv").innerHTML = "";
      $("#mySearchedDiv").css("display", "block");
      html = "";
      var myThis = $(this);
      if (!myThis.val().trim()) {
        for (var i = a.length - 1; i >= 0; i--) {
          $(".myDiv").css("display", "block");
              html += "<a href='../hablar/front-end-final-lahiye-hablar.html'>" + a[i] + "</a>";
  
        }
        document.getElementById("mySearchedDiv").innerHTML += html;
        return false;
      }
      let myPromise = new Promise(function (myResolve, myReject) {
        let req = new XMLHttpRequest();
        req.open("GET", "https://api.3sual.az/api/task");
        req.onload = function () {
          if (req.status == 200) {
            myResolve(req.response);
          } else {
            myReject("Not Found.");
          }
        };
        req.send();
      });
      myPromise.then(
        function (value) {
          mySearchResultInInput(value);
        },
        function (error) {
          mySearchResultInInput(error);
        }
      );
      function mySearchResultInInput(some) {
        var json = JSON.parse(some);
        for (let i = 0; i < json.length; i++) {
          if (json[i].slug.startsWith(myThis.val())) {
            html += "<a href='../hablar/front-end-final-lahiye-hablar.html'>" + json[i].slug + "</a>";
  
            console.log(json[i].slug);
          }
        }
        document.getElementById("mySearchedDiv").innerHTML += html;
      }
    });
    var audio = new Audio(
      "https://www.wordreference.com/audio/es/Castellano/es188549.mp3"
    );
    $(".audio i").click(function () {
      audio.play();
    });
    var audio1 = new Audio(
      "https://www.wordreference.com/audio/es/Castellano/es186017.mp3"
    );
    $(".audio1 i").click(function () {
      audio1.play();
    });
  });
  