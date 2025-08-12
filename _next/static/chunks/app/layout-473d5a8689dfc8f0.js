(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    8474: (e, t, r) => {
      Promise.resolve().then(r.t.bind(r, 3704, 23)),
        Promise.resolve().then(r.t.bind(r, 2755, 23)),
        Promise.resolve().then(r.t.bind(r, 1054, 23)),
        Promise.resolve().then(r.t.bind(r, 5408, 23)),
        Promise.resolve().then(r.t.bind(r, 929, 23)),
        Promise.resolve().then(r.t.bind(r, 4971, 23)),
        Promise.resolve().then(r.t.bind(r, 3965, 23)),
        Promise.resolve().then(r.t.bind(r, 8687, 23)),
        Promise.resolve().then(r.bind(r, 6930)),
        Promise.resolve().then(r.t.bind(r, 4401, 23)),
        Promise.resolve().then(r.bind(r, 8970)),
        Promise.resolve().then(r.bind(r, 6048));
    },
    8571: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          cancelIdleCallback: function () {
            return n;
          },
          requestIdleCallback: function () {
            return r;
          },
        });
      let r =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        n =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3704: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return v;
          },
          handleClientScriptLoad: function () {
            return y;
          },
          initScriptLoader: function () {
            return _;
          },
        });
      let n = r(306),
        l = r(9955),
        a = r(5155),
        s = n._(r(7650)),
        i = l._(r(2115)),
        o = r(1147),
        u = r(2815),
        c = r(8571),
        d = new Map(),
        f = new Set(),
        m = (e) => {
          if (s.default.preinit) {
            e.forEach((e) => {
              s.default.preinit(e, { as: "style" });
            });
            return;
          }
          if ("undefined" != typeof window) {
            let t = document.head;
            e.forEach((e) => {
              let r = document.createElement("link");
              (r.type = "text/css"),
                (r.rel = "stylesheet"),
                (r.href = e),
                t.appendChild(r);
            });
          }
        },
        p = (e) => {
          let {
              src: t,
              id: r,
              onLoad: n = () => {},
              onReady: l = null,
              dangerouslySetInnerHTML: a,
              children: s = "",
              strategy: i = "afterInteractive",
              onError: o,
              stylesheets: c,
            } = e,
            p = r || t;
          if (p && f.has(p)) return;
          if (d.has(t)) {
            f.add(p), d.get(t).then(n, o);
            return;
          }
          let y = () => {
              l && l(), f.add(p);
            },
            _ = document.createElement("script"),
            b = new Promise((e, t) => {
              _.addEventListener("load", function (t) {
                e(), n && n.call(this, t), y();
              }),
                _.addEventListener("error", function (e) {
                  t(e);
                });
            }).catch(function (e) {
              o && o(e);
            });
          a
            ? ((_.innerHTML = a.__html || ""), y())
            : s
            ? ((_.textContent =
                "string" == typeof s ? s : Array.isArray(s) ? s.join("") : ""),
              y())
            : t && ((_.src = t), d.set(t, b)),
            (0, u.setAttributesFromProps)(_, e),
            "worker" === i && _.setAttribute("type", "text/partytown"),
            _.setAttribute("data-nscript", i),
            c && m(c),
            document.body.appendChild(_);
        };
      function y(e) {
        let { strategy: t = "afterInteractive" } = e;
        "lazyOnload" === t
          ? window.addEventListener("load", () => {
              (0, c.requestIdleCallback)(() => p(e));
            })
          : p(e);
      }
      function _(e) {
        e.forEach(y),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            let t = e.id || e.getAttribute("src");
            f.add(t);
          });
      }
      function b(e) {
        let {
            id: t,
            src: r = "",
            onLoad: n = () => {},
            onReady: l = null,
            strategy: u = "afterInteractive",
            onError: d,
            stylesheets: m,
            ...y
          } = e,
          {
            updateScripts: _,
            scripts: b,
            getIsSsr: v,
            appDir: h,
            nonce: g,
          } = (0, i.useContext)(o.HeadManagerContext),
          S = (0, i.useRef)(!1);
        (0, i.useEffect)(() => {
          let e = t || r;
          S.current || (l && e && f.has(e) && l(), (S.current = !0));
        }, [l, t, r]);
        let P = (0, i.useRef)(!1);
        if (
          ((0, i.useEffect)(() => {
            !P.current &&
              ("afterInteractive" === u
                ? p(e)
                : "lazyOnload" === u &&
                  ("complete" === document.readyState
                    ? (0, c.requestIdleCallback)(() => p(e))
                    : window.addEventListener("load", () => {
                        (0, c.requestIdleCallback)(() => p(e));
                      })),
              (P.current = !0));
          }, [e, u]),
          ("beforeInteractive" === u || "worker" === u) &&
            (_
              ? ((b[u] = (b[u] || []).concat([
                  { id: t, src: r, onLoad: n, onReady: l, onError: d, ...y },
                ])),
                _(b))
              : v && v()
              ? f.add(t || r)
              : v && !v() && p(e)),
          h)
        ) {
          if (
            (m &&
              m.forEach((e) => {
                s.default.preinit(e, { as: "style" });
              }),
            "beforeInteractive" === u)
          )
            return r
              ? (s.default.preload(
                  r,
                  y.integrity
                    ? {
                        as: "script",
                        integrity: y.integrity,
                        nonce: g,
                        crossOrigin: y.crossOrigin,
                      }
                    : { as: "script", nonce: g, crossOrigin: y.crossOrigin }
                ),
                (0, a.jsx)("script", {
                  nonce: g,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([r, { ...y, id: t }]) +
                      ")",
                  },
                }))
              : (y.dangerouslySetInnerHTML &&
                  ((y.children = y.dangerouslySetInnerHTML.__html),
                  delete y.dangerouslySetInnerHTML),
                (0, a.jsx)("script", {
                  nonce: g,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...y, id: t }]) +
                      ")",
                  },
                }));
          "afterInteractive" === u &&
            r &&
            s.default.preload(
              r,
              y.integrity
                ? {
                    as: "script",
                    integrity: y.integrity,
                    nonce: g,
                    crossOrigin: y.crossOrigin,
                  }
                : { as: "script", nonce: g, crossOrigin: y.crossOrigin }
            );
        }
        return null;
      }
      Object.defineProperty(b, "__nextScript", { value: !0 });
      let v = b;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2815: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "setAttributesFromProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = {
          acceptCharset: "accept-charset",
          className: "class",
          htmlFor: "for",
          httpEquiv: "http-equiv",
          noModule: "noModule",
        },
        n = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ];
      function l(e) {
        return ["async", "defer", "noModule"].includes(e);
      }
      function a(e, t) {
        for (let [a, s] of Object.entries(t)) {
          if (!t.hasOwnProperty(a) || n.includes(a) || void 0 === s) continue;
          let i = r[a] || a.toLowerCase();
          "SCRIPT" === e.tagName && l(i)
            ? (e[i] = !!s)
            : e.setAttribute(i, String(s)),
            (!1 === s ||
              ("SCRIPT" === e.tagName && l(i) && (!s || "false" === s))) &&
              (e.setAttribute(i, ""), e.removeAttribute(i));
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6930: (e, t, r) => {
      "use strict";
      r.d(t, { ClientWrapper: () => a });
      var n = r(5155);
      r(2115);
      var l = r(3074);
      function a(e) {
        let { children: t } = e;
        return (0, n.jsx)(l.Z, { children: t });
      }
    },
    8970: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => l });
      var n = r(2115);
      let l = () => (
        (0, n.useEffect)(() => {
          let e = () => {
            [
              "/styles/non-critical.css",
              "/styles/ipod.css",
              "/styles/music.css",
              "/styles/games.css",
              "/styles/exchanges.css",
            ].forEach((e) => {
              let t = document.createElement("link");
              (t.rel = "stylesheet"),
                (t.href = e),
                (t.media = "print"),
                (t.onload = () => {
                  t.media = "all";
                }),
                document.head.appendChild(t);
            });
          };
          if ("complete" !== document.readyState)
            return (
              window.addEventListener("load", e),
              () => window.removeEventListener("load", e)
            );
          e();
        }, []),
        null
      );
    },
    6048: (e, t, r) => {
      "use strict";
      r.d(t, { PerformanceMonitor: () => l }), r(5155);
      var n = r(2115);
      let l = () => {
        let [e, t] = (0, n.useState)({
            fps: 0,
            memory: 0,
            animationCount: 0,
            scrollTriggerCount: 0,
          }),
          [r, l] = (0, n.useState)(!1),
          a = (0, n.useRef)(0),
          s = (0, n.useRef)(performance.now()),
          i = (0, n.useRef)(void 0);
        return (
          (0, n.useEffect)(() => {}, []),
          (0, n.useEffect)(() => {
            if (!r) return;
            let e = () => {
              let r = performance.now();
              if ((a.current++, r - s.current >= 1e3)) {
                let e = Math.round((1e3 * a.current) / (r - s.current)),
                  n = performance.memory,
                  l = n ? Math.round(n.usedJSHeapSize / 1048576) : 0,
                  i = document.querySelectorAll('[style*="animation"]').length,
                  o = window.ScrollTrigger;
                t({
                  fps: e,
                  memory: l,
                  animationCount: i,
                  scrollTriggerCount: o ? o.getAll().length : 0,
                }),
                  (a.current = 0),
                  (s.current = r);
              }
              i.current = requestAnimationFrame(e);
            };
            return (
              e(),
              () => {
                i.current && cancelAnimationFrame(i.current);
              }
            );
          }, [r]),
          null
        );
      };
    },
    3074: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => s, j: () => i });
      var n = r(5155),
        l = r(2115);
      let a = (0, l.createContext)({
        isInTelegram: !1,
        telegram: null,
        startParams: null,
      });
      function s(e) {
        let { children: t } = e,
          [r, s] = (0, l.useState)(!1),
          [i, o] = (0, l.useState)(null),
          [u, c] = (0, l.useState)(null);
        return (
          (0, l.useEffect)(() => {
            let e = null,
              t = () => {
                var t, r;
                let n = window.Telegram,
                  l = null == n ? void 0 : n.WebApp,
                  a =
                    "undefined" != typeof navigator ? navigator.userAgent : "",
                  i = !!(null == l ? void 0 : l.initData),
                  u = !!(null == l
                    ? void 0
                    : null === (t = l.initDataUnsafe) || void 0 === t
                    ? void 0
                    : t.user);
                if (n && ((i && u) || a.includes("Telegram")) && n) {
                  o(n),
                    null == l ||
                      null === (r = l.ready) ||
                      void 0 === r ||
                      r.call(l),
                    s(!0);
                  let t = new URLSearchParams(window.location.search).get(
                    "tgWebAppStartParam"
                  );
                  if (t) {
                    let e = t.replace(/-/g, "+").replace(/_/g, "/");
                    for (; e.length % 4; ) e += "=";
                    let r = (function (e) {
                      try {
                        return decodeURIComponent(
                          Array.from(atob(e))
                            .map(
                              (e) =>
                                "%" +
                                ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                            )
                            .join("")
                        );
                      } catch (e) {
                        return "";
                      }
                    })(e);
                    if (r)
                      try {
                        let e = JSON.parse(r);
                        c(e);
                      } catch (e) {
                        c(null);
                      }
                  }
                  e && (clearInterval(e), (e = null));
                }
              };
            t(), (e = setInterval(t, 100));
            let r = setTimeout(() => {
              e && clearInterval(e), (e = null);
            }, 5e3);
            return () => {
              e && clearInterval(e), clearTimeout(r);
            };
          }, []),
          (0, n.jsx)(a.Provider, {
            value: { isInTelegram: r, telegram: i, startParams: u },
            children: t,
          })
        );
      }
      function i() {
        return (0, l.useContext)(a);
      }
    },
    4401: () => {},
    8687: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Bai Jamjuree', 'Bai Jamjuree Fallback'",
          fontWeight: 400,
          fontStyle: "normal",
        },
        className: "__className_936899",
        variable: "__variable_936899",
      };
    },
    5408: (e) => {
      e.exports = {
        style: {
          fontFamily: "'DynaPuff', 'DynaPuff Fallback'",
          fontStyle: "normal",
        },
        className: "__className_0e0a18",
        variable: "__variable_0e0a18",
      };
    },
    2755: (e) => {
      e.exports = {
        style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: "normal" },
        className: "__className_5cfdac",
        variable: "__variable_5cfdac",
      };
    },
    929: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Geist Mono', 'Geist Mono Fallback'",
          fontStyle: "normal",
        },
        className: "__className_db07cd",
        variable: "__variable_db07cd",
      };
    },
    4971: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Press Start 2P', 'Press Start 2P Fallback'",
          fontWeight: 400,
          fontStyle: "normal",
        },
        className: "__className_b8e2e5",
        variable: "__variable_b8e2e5",
      };
    },
    3965: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Varela Round', 'Varela Round Fallback'",
          fontWeight: 400,
          fontStyle: "normal",
        },
        className: "__className_b34ff8",
        variable: "__variable_b34ff8",
      };
    },
    1054: (e) => {
      e.exports = {
        style: { fontFamily: "'superSense', 'superSense Fallback'" },
        className: "__className_ef9983",
        variable: "__variable_ef9983",
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [615, 816, 919, 358], () => t(8474)), (_N_E = e.O());
  },
]);
