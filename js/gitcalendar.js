"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
};!function (e) {
  "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).GitHubCalendar = e();
}(function () {
  return function o(s, u, i) {
    function c(t, e) {
      if (!u[t]) {
        if (!s[t]) {
          var r = "function" == typeof require && require;if (!e && r) return r(t, !0);if (l) return l(t, !0);var n = new Error("Cannot find module '" + t + "'");throw n.code = "MODULE_NOT_FOUND", n;
        }var a = u[t] = { exports: {} };s[t][0].call(a.exports, function (e) {
          return c(s[t][1][e] || e);
        }, a, a.exports, o, s, u, i);
      }return u[t].exports;
    }for (var l = "function" == typeof require && require, e = 0; e < i.length; e++) {
      c(i[e]);
    }return c;
  }({ 1: [function (e, t, r) {
      var h = e("github-calendar-parser"),
          y = e("elly"),
          v = e("add-subtract-date"),
          M = e("formatoid"),
          x = "YYYY 年 MMM D 日",
          _ = "MMMM D",
          S = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];function k(e) {
        return e + " " + (1 === e ? "day" : "天");
      }t.exports = function (b, e, m) {
        b = y(b), (m = m || {}).summary_text = m.summary_text || '数据来源 <a href="https://github.com/' + e + '" target="blank">@' + e + "</a>", m.cache = 1e3 * (m.cache || 86400), !1 === m.global_stats && (b.style.minHeight = "175px");var r = { content: "gh_calendar_content." + e, expire_at: "gh_calendar_expire." + e };m.proxy = m.proxy || function (e) {
          return fetch("https://api.bloggify.net/gh-calendar/?username=" + e).then(function (e) {
            return e.text();
          });
        }, m.getCalendar = m.getCalendar || function (e) {
          if (m.cache && Date.now() < +localStorage.getItem(r.expire_at)) {
            var t = localStorage.getItem(r.content);if (t) return Promise.resolve(t);
          }return m.proxy(e).then(function (e) {
            return m.cache && (localStorage.setItem(r.content, e), localStorage.setItem(r.expire_at, Date.now() + m.cache)), e;
          });
        };return function g() {
          return m.getCalendar(e).then(function (e) {
            var t = document.createElement("div");t.innerHTML = e;var r,
                n,
                a,
                o,
                s,
                u,
                i,
                c,
                l,
                d,
                f,
                p = t.querySelector(".js-yearly-contributions");y(".position-relative h2", p).remove(), p.querySelector(".float-left.text-gray").innerHTML = m.summary_text, p.querySelector("include-fragment") ? setTimeout(g, 500) : (!0 === m.responsive && (n = (r = p.querySelector("svg.js-calendar-graph-svg")).getAttribute("width"), a = r.getAttribute("height"), r.removeAttribute("height"), r.setAttribute("width", "100%"), r.setAttribute("viewBox", "0 0 " + n + " " + a)), !1 !== m.global_stats && (s = (o = h(y("svg", p).outerHTML)).current_streak ? M(o.current_streak_range[0], _) + " 日" + " &ndash; " + M(o.current_streak_range[1], _) : o.last_contributed ? "最后一次提交于" + " " +  M(o.last_contributed, _) + "" : "Rock - Hard Place", u = o.longest_streak ? M(o.longest_streak_range[0], _) + " 日" + " &ndash; " + M(o.longest_streak_range[1], _) : o.last_contributed ? "最后一次提交于" + " " + M(o.last_contributed, _) + " " : "Rock - Hard Place", i = y("<div>", { class: "contrib-column contrib-column-first table-column", html: '<span class="text-muted">过去一年内提交</span>\n                               <span class="contrib-number">' + o.last_year + ' 次</span>\n                               <span class="text-muted">' + M(v.add(v.subtract(new Date(), 1, "year"), 1, "day"), x)  + " &ndash; " +  M(new Date(), x)  + "</span>" }), c = y("<div>", { class: "contrib-column table-column", html: '<span class="text-muted">最长连续提交记录</span>\n                               <span class="contrib-number">' + k(o.longest_streak) + '</span>\n                               <span class="text-muted">' + u + " 日</span>" }), l = y("<div>", { class: "contrib-column table-column", html: '<span class="text-muted">当前提交记录</span>\n                               <span class="contrib-number">' + k(o.current_streak) + '</span>\n                               <span class="text-muted">' + s + " 日</span>" }), p.appendChild(i), p.appendChild(c), p.appendChild(l)), b.innerHTML = p.innerHTML, !0 === m.tooltips && (d = b, (f = document.createElement("div")).classList.add("day-tooltip"), d.appendChild(f), d.querySelectorAll("rect.day").forEach(function (e) {
              e.addEventListener("mouseenter", function (e) {
                var t = e.target.getAttribute("data-count");"0" === t ? t = "No contributions" : "1" === t ? t = "1 contribution" : t += " contributions";var r = new Date(e.target.getAttribute("data-date")),
                    n = S[r.getUTCMonth()] + " " + r.getUTCDate() + ", " + r.getUTCFullYear();f.innerHTML = "<strong>" + t + "</strong> on " + n, f.classList.add("is-visible");var a = e.target.getBoundingClientRect(),
                    o = a.left + window.pageXOffset - f.offsetWidth / 2 + a.width / 2,
                    s = a.bottom + window.pageYOffset - f.offsetHeight - 2 * a.height;f.style.top = s + "px", f.style.left = o + "px";
              }), e.addEventListener("mouseleave", function () {
                f.classList.remove("is-visible");
              });
            })));
          }).catch(function (e) {
            return console.error(e);
          });
        }();
      };
    }, { "add-subtract-date": 2, elly: 4, formatoid: 6, "github-calendar-parser": 8 }], 2: [function (e, t, r) {
      function n(a) {
        return function e(t, r, n) {
          switch (r *= a, n) {case "years":case "year":
              t.setFullYear(t.getFullYear() + r);break;case "months":case "month":
              t.setMonth(t.getMonth() + r);break;case "weeks":case "week":
              return e(t, 7 * r, "days");case "days":case "day":
              t.setDate(t.getDate() + r);break;case "hours":case "hour":
              t.setHours(t.getHours() + r);break;case "minutes":case "minute":
              t.setMinutes(t.getMinutes() + r);break;case "seconds":case "second":
              t.setSeconds(t.getSeconds() + r);break;case "milliseconds":case "millisecond":
              t.setMilliseconds(t.getMilliseconds() + r);break;default:
              throw new Error("Invalid range: " + n);}return t;
        };
      }t.exports = { add: n(1), subtract: n(-1) };
    }, {}], 3: [function (e, t, r) {
      t.exports.en = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], t.exports.en.abbr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], t.exports.en.short = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], t.exports.fr = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], t.exports.fr.abbr = ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"], t.exports.fr.short = ["di", "lu", "ma", "me", "je", "ve", "sa"], t.exports.es = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"], t.exports.es.abbr = ["dom", "lun", "mar", "mir", "jue", "vie", "sab"], t.exports.es.short = ["do", "lu", "ma", "mi", "ju", "vi", "sa"], t.exports.it = ["Domenica", "Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "Sabato"], t.exports.it.abbr = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"], t.exports.it.short = ["D", "L", "Ma", "Me", "G", "V", "S"], t.exports = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], t.exports.abbr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], t.exports.short = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    }, {}], 4: [function (e, t, r) {
      var n = e("iterate-object"),
          a = e("sliced");function o(r, e) {
        return "string" == typeof r ? "<" 1 11 12 13 60 =="=" r.charat(0) ? (r="document.createElement(r.slice(1," -1)), n(e || {}, function (e, t) { switch (t) {case "text": return void (r.textcontent="e);case" "html": (r.innerhtml="e);}r.setAttribute(t," e); }), r) : (e="e" document).queryselector(r) r; }o.$$="function" "string"="=" typeof e (t="t" document, a(t.queryselectorall(e))) [e]; }, t.exports="o;" "iterate-object": 9, sliced: }], 5: [function t, r="r" "0";var n="(t" t 2) - (n <="0" "" r.repeat(n)) + e; }; {}], 6: var a="e("days")," o="e("fillo")," s="e("parse-it").Parser," u="{" yyyy: yyyy(e, e.getutcfullyear() e.getfullyear(); yy: yy(e, u.yyyy(e, % 100; mmmm: mmmm(e, n[e.getutcmonth()] n[e.getmonth()]; mmm: mmm(e, n.abbr[e.getutcmonth()] n.abbr[e.getmonth()]; mm: mm(e, o(t e.getutcmonth() e.getmonth() 1); m: m(e, 1; dddd: dddd(e, a[u.d(e, t)]; ddd: ddd(e, a.abbr[u.d(e, dd: dd(e, a.short[u.d(e, d: d(e, e.getutcday() e.getday(); o(u.d(e, t)); e.getutcdate() e.getdate(); a: a(e, u.a(e, t).touppercase(); "pm" "am"; hh: hh(e, o(u.h(e, h: h(e, u.h(e, 12; e.getutchours() e.gethours(); o(u.m(e, e.getutcminutes() e.getminutes(); ss: ss(e, o(u.s(e, s: s(e, e.getutcseconds() e.getseconds(); math.round(u.s(e, * 10); 100); sss: sss(e, 1e3, 3); z: z(e) (0 "+" "-") o(parseint(t 60)) ":" 60); zz: zz(e) } i="new" s(u);t.exports="function" i.run(t, [e, e._useutc]); days: 3, fillo: 5, months: 10, "parse-it": 7: "#d6e685", "#8cc665", "#44a340", "#1e6823"]; 8: (e) o() s.current_streak> s.longest_streak && (s.longest_streak = s.current_streak, s.longest_streak_range[0] = s.current_streak_range[0], s.longest_streak_range[1] = s.current_streak_range[1]);
        }var s = { last_year: 0, longest_streak: -1, longest_streak_range: [], current_streak: 0, current_streak_range: [], weeks: [], days: [], last_contributed: null },
            u = [];return e.split("\n").slice(2).map(function (e) {
          return e.trim();
        }).forEach(function (e) {
          if (e.startsWith("<g 0="==" 7 12 transform")) return u.length && s.weeks.push(u) (u="[]);var" t, r="e.match(/fill="(#[a-z0-9]+)"/)," n="e.match(/data-date="([0-9\-]+)"/)," a="e.match(/data-count="([0-9]+)"/)," r[1], n[1], +a[1];r (t="{" fill: r, date: new date(n), count: a, level: i.indexof(r) }, s.current_streak (s.current_streak_range[0]="t.date)," t.count ? (++s.current_streak, s.last_year +="t.count," s.last_contributed="t.date," s.current_streak_range[1]="t.date)" : (o(), u.push(t), s.days.push(t)); }), o(), s; }; { "github-calendar-legend": }], 9: [function (e, r) t.exports="function" t) var (array.isarray(e)) for (; < e.length !1 !="=" t(e[r], e); ++r) {} else if ("object"="==" (void e "undefined" _typeof(e)) null e) (n="Object.keys(e);" n.length t(e[n[r]], n[r], {}], 10: 月", "2 "3 "4 "5 "6 "7 "8 "9 "10 "11 "12 月"], t.exports.abbr="["1" t.exports.it="["Gennaio"," "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"], t.exports.abbr.it="["Gen"," "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"], t.exports.de="["Januar"," "februar", "märz", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "dezember"], t.exports.abbr.de="["Jan"," "mär", "jun", "jul", "aug", "sep", "okt", "dez"]; 11: n(e, t a(e.prototype, t), a(e, r), e; };function (var t.length; r++) = n.enumerable || !1, n.configurable="!0," "value" in (n.writable="!0)," object.defineproperty(e, n.key, n); } }var o="e("regex-escape")," s="(n(u," [{ key: "run", value: function value(e, ;t="t" [];do n, a[1], e.charat(0);o ("function"="=" typeof t)), while (e);return r; }]), u);function u(e) !function (!(e instanceof t)) throw typeerror("cannot call class as function"); }(this, u), this.obj="e" {}, this.re="new" regexp("^(" object.keys(e).map(o).join("|") ")"); }function i(e, s(t).run(e, r); }i.parser="s," "regex-escape": 12: n(e) e.replace( [\-\[\]\ \{\}\(\)\*\+\?\.\\\^\$\|] g, "\\$&"); }n.proto="function" () regexp.escape="n;" 13: (0="==" a) n;var math.max(0, 0;for (a="r" a--> o;) {
          n[a - o] = e[a];
        }return n;
      };
    }, {}] }, {}, [1])(1);
});</g></"></div></div></div>