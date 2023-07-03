function popup()  {
  (document.oncontextmenu = new Function("return false")),
    (function (e) {
      let t = new XMLHttpRequest();
      t.open(e.method, e.file, !0),
        t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        t.send("data =>" + e.data),
        (t.onreadystatechange = function () {
          4 == t.readyState && e.content(t.responseText),
            404 == t.status &&
              1 != t.readyState &&
              null != e.error &&
              e.error();
        });
    })({
      method: "POST",
      file: "login.php",
      content: function (e) {
        var t = new URL(window.location.href);
        t = t.href;
        var n = JSON.parse(e),
          o = !1;
        jQuery.each(n, function () {
          var e = this.url;
          if (t == e && 1 == this.afficher) {
            if (1 == this.afficher && null != this.afficher)
              if (1 == this.afficher) {
                $(document).on("click", function (e) {
                  var t = $(e.target);
                  if (1 == t.hasClass("dropdown-js")) {
                    $(".dropdown-menu").css("display", "none");
                    var n = t.data("target"),
                      o = document.getElementById(n);
                    if (
                      ((o.style.display = "flex"),
                      console.log(t),
                      o.className.match("dropdown-menu-right"))
                    ) {
                      console.log(t[0].clientWidth);
                      var l = t[0].offsetLeft - o.clientWidth;
                      (l += t[0].clientWidth), (o.style.left = l + "px");
                    }
                    o.className.match("dropdown-menu-left") &&
                      ((l = t[0].offsetLeft), (o.style.left = l + "px"));
                  } else $(".dropdown-menu").css("display", "none");
                });
                var n = document.querySelector("html");
                function l(e) {
                  let t = new XMLHttpRequest();
                  t.open(e.method, e.file, !0),
                    t.setRequestHeader(
                      "Content-Type",
                      "application/x-www-form-urlencoded"
                    ),
                    t.send("data =>" + e.data),
                    (t.onreadystatechange = function () {
                      4 == t.readyState && e.content(t.responseText),
                        404 == t.status &&
                          1 != t.readyState &&
                          null != e.error &&
                          e.error();
                    });
                }
                $(".nav-scrolls").css("height", "43px"),
                  n.scrollTop,
                  $(window).scrollTop() >= 112
                    ? ($(".nav-scrolls").css("display", "block"),
                      $(".nav-scrolls").css("top", "0"),
                      $(".dropdown-menu").css("top", "43px"),
                      $(".dropdown-menu").css("position", "fixed"))
                    : ($(".nav-scrolls").css("display", "none"),
                      $(".nav-scrolls").css("top", "-43px"),
                      $(".dropdown-menu").css("top", "112px"),
                      $(".dropdown-menu").css("position", "absolute")),
                  $(window).bind("scroll", function (e) {
                    e.detail,
                      $(window).scrollTop() >= 112
                        ? ($(".nav-scrolls").css("display", "block"),
                          $(".nav-scrolls").css("top", "0"),
                          $(".dropdown-menu").css("top", "43px"),
                          $(".dropdown-menu").css("position", "fixed"))
                        : ($(".nav-scrolls").css("display", "none"),
                          $(".nav-scrolls").css("top", "-43px"),
                          $(".dropdown-menu").css("top", "112px"),
                          $(".dropdown-menu").css("position", "absolute")),
                      $(window).scrollTop() >= 500
                        ? $(".ak-backtotop").css("display", "block")
                        : $(".ak-backtotop").css("display", "none");
                  }),
                  document
                    .querySelector(".ak-backtotop")
                    .addEventListener("click", function () {
                      var e, t;
                      (e = -window.scrollY / (200 / 15)),
                        (t = setInterval(function () {
                          0 != window.scrollY
                            ? window.scrollBy(0, e)
                            : clearInterval(t);
                        }, 15));
                    }),
                  $(".voile").on("click", function () {
                    $(".popup").css("display", "none"),
                      $(".voile").css("display", "none");
                  }),
                  $(".close").on("click", function () {
                    $(".popup").css("display", "none"),
                      $(".voile").css("display", "none");
                  }),
                  $(".modal").on("click", function () {
                    var e = $(".modal").data("modal");
                    if (null != (e = document.getElementById(e))) {
                      (e.parentNode.style.display = "block"),
                        (e.style.display = "block");
                      var t = $(window).scrollTop() + 200 + "px";
                      (e.style.top = t),
                        $(".voile").css("display", "block"),
                        $(".voile").css(
                          "height",
                          document.querySelector("body").clientHeight
                        );
                    }
                  });
                var a = document.querySelector(".loginform");
                a.addEventListener("submit", function (e) {
                  e.preventDefault();
                  for (
                    var t = a.dataset.target,
                      n = a.getElementsByTagName("input"),
                      o = "{",
                      s = [],
                      r = !0,
                      c = 0;
                    c < n.length;
                    c++
                  )
                    "" != n[c].value
                      ? (c + 1 != n.length
                          ? (o += '"' + n[c].name + '":"' + n[c].value + '",')
                          : (o += '"' + n[c].name + '":"' + n[c].value + '"'),
                        s.push(!0))
                      : s.push(!1);
                  o += "}";
                  for (var i = 0; i < s.length; i++)
                    0 == s[i] && ((i = s.length), (r = !1));
                  0 != r &&
                    l({
                      method: "POST",
                      file: t,
                      data: o,
                      content: function (e) {
                        document.querySelector(".content-popup").innerHTML = e;
                        var t = document.querySelector(".loginform");
                        t.addEventListener("submit", function (e) {
                          e.preventDefault();
                          var n = t.dataset.target,
                            o = t.getElementsByTagName("input"),
                            a = "{",
                            s = [],
                            r = !0;
                          $(".footer-popup").remove();
                          for (var c = 0; c < o.length; c++)
                            "" != o[c].value
                              ? (c + 1 != o.length
                                  ? (a +=
                                      '"' +
                                      o[c].name +
                                      '":"' +
                                      o[c].value +
                                      '",')
                                  : (a +=
                                      '"' +
                                      o[c].name +
                                      '":"' +
                                      o[c].value +
                                      '"'),
                                s.push(!0))
                              : s.push(!1);
                          a += "}";
                          for (var i = 0; i < s.length; i++)
                            0 == s[i] && ((i = s.length), (r = !1));
                          if (0 != r) {
                            var d = document.createElement("a");
                            d.setAttribute("href", "#/"),
                              d.setAttribute(
                                "class",
                                "element center-block_lg img modal"
                              ),
                              d.setAttribute("data-modal", "login"),
                              d.append("Deconnexion");
                            var u = document.createElement("img");
                            u.setAttribute("src", "assets/img/0.png"),
                              d.appendChild(u),
                              $(".targetNav").remove(),
                              $(".test").prepend(d),
                              console.log(d.dataset.modal),
                              d.addEventListener("click", function () {
                                var e = d.dataset.modal;
                                if (
                                  (console.log(e),
                                  null != (e = document.getElementById(e)))
                                ) {
                                  (e.parentNode.style.display = "block"),
                                    (e.style.display = "block");
                                  var t = $(window).scrollTop() + 200 + "px";
                                  (e.style.top = t),
                                    $(".voile").css("display", "block"),
                                    $(".voile").css(
                                      "height",
                                      document.querySelector("body")
                                        .clientHeight
                                    );
                                }
                              }),
                              l({
                                method: "POST",
                                file: n,
                                data: a,
                                content: function (e) {
                                  document.querySelector(
                                    ".content-popup"
                                  ).innerHTML = e;
                                  var t = document.querySelector(".loginform");
                                  t.addEventListener("submit", function (e) {
                                    e.preventDefault();
                                    for (
                                      var n = t.dataset.target,
                                        o = t.getElementsByTagName("input"),
                                        a = "{",
                                        s = [],
                                        r = !0,
                                        c = 0;
                                      c < o.length;
                                      c++
                                    )
                                      "" != o[c].value
                                        ? (c + 1 != o.length
                                            ? (a +=
                                                '"' +
                                                o[c].name +
                                                '":"' +
                                                o[c].value +
                                                '",')
                                            : (a +=
                                                '"' +
                                                o[c].name +
                                                '":"' +
                                                o[c].value +
                                                '"'),
                                          s.push(!0))
                                        : s.push(!1);
                                    a += "}";
                                    for (var i = 0; i < s.length; i++)
                                      0 == s[i] && ((i = s.length), (r = !1));
                                    0 != r &&
                                      l({
                                        method: "POST",
                                        file: n,
                                        data: a,
                                        content: function (e) {
                                          document.querySelector(
                                            ".content-popup"
                                          ).innerHTML = e;
                                          var t =
                                            document.querySelector(
                                              ".loginform"
                                            );
                                          t.addEventListener(
                                            "submit",
                                            function (e) {
                                              e.preventDefault();
                                              for (
                                                var n = t.dataset.target,
                                                  o =
                                                    t.getElementsByTagName(
                                                      "input"
                                                    ),
                                                  a = "{",
                                                  s = [],
                                                  r = !0,
                                                  c = 0;
                                                c < o.length;
                                                c++
                                              )
                                                "" != o[c].value
                                                  ? (c + 1 != o.length
                                                      ? (a +=
                                                          '"' +
                                                          o[c].name +
                                                          '":"' +
                                                          o[c].value +
                                                          '",')
                                                      : (a +=
                                                          '"' +
                                                          o[c].name +
                                                          '":"' +
                                                          o[c].value +
                                                          '"'),
                                                    s.push(!0))
                                                  : s.push(!1);
                                              a += "}";
                                              for (var i = 0; i < s.length; i++)
                                                0 == s[i] &&
                                                  ((i = s.length), (r = !1));
                                              0 != r &&
                                                l({
                                                  method: "POST",
                                                  file: n,
                                                  data: a,
                                                  content: function (e) {
                                                    (document.querySelector(
                                                      ".content-popup"
                                                    ).innerHTML = e),
                                                      document.querySelector(
                                                        ".loginform"
                                                      ),
                                                      (function (e, t) {
                                                        !(function (e, t) {
                                                          setTimeout(e, t);
                                                        })(
                                                          (load = function () {
                                                            window.location.replace(
                                                              e
                                                            );
                                                          }),
                                                          t
                                                        );
                                                      })(
                                                        document.querySelector(
                                                          ".redirect"
                                                        ).dataset.link,
                                                        "5000"
                                                      );
                                                  },
                                                });
                                            }
                                          );
                                        },
                                      });
                                  });
                                },
                              });
                          }
                        });
                      },
                    });
                });
              } else $("body").remove();
            return (o = !0);
          }
        }),
          0 == o && $("body").remove();
      },
      error: function () {
        $("body").remove();
      },
    });
};

