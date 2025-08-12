(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    7676: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 4454));
    },
    3704: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return y;
          },
          handleClientScriptLoad: function () {
            return g;
          },
          initScriptLoader: function () {
            return m;
          },
        });
      let n = r(306),
        a = r(9955),
        s = r(5155),
        l = n._(r(7650)),
        i = a._(r(2115)),
        c = r(1147),
        d = r(2815),
        o = r(8571),
        u = new Map(),
        f = new Set(),
        p = (e) => {
          if (l.default.preinit) {
            e.forEach((e) => {
              l.default.preinit(e, { as: "style" });
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
        x = (e) => {
          let {
              src: t,
              id: r,
              onLoad: n = () => {},
              onReady: a = null,
              dangerouslySetInnerHTML: s,
              children: l = "",
              strategy: i = "afterInteractive",
              onError: c,
              stylesheets: o,
            } = e,
            x = r || t;
          if (x && f.has(x)) return;
          if (u.has(t)) {
            f.add(x), u.get(t).then(n, c);
            return;
          }
          let g = () => {
              a && a(), f.add(x);
            },
            m = document.createElement("script"),
            h = new Promise((e, t) => {
              m.addEventListener("load", function (t) {
                e(), n && n.call(this, t), g();
              }),
                m.addEventListener("error", function (e) {
                  t(e);
                });
            }).catch(function (e) {
              c && c(e);
            });
          s
            ? ((m.innerHTML = s.__html || ""), g())
            : l
            ? ((m.textContent =
                "string" == typeof l ? l : Array.isArray(l) ? l.join("") : ""),
              g())
            : t && ((m.src = t), u.set(t, h)),
            (0, d.setAttributesFromProps)(m, e),
            "worker" === i && m.setAttribute("type", "text/partytown"),
            m.setAttribute("data-nscript", i),
            o && p(o),
            document.body.appendChild(m);
        };
      function g(e) {
        let { strategy: t = "afterInteractive" } = e;
        "lazyOnload" === t
          ? window.addEventListener("load", () => {
              (0, o.requestIdleCallback)(() => x(e));
            })
          : x(e);
      }
      function m(e) {
        e.forEach(g),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            let t = e.id || e.getAttribute("src");
            f.add(t);
          });
      }
      function h(e) {
        let {
            id: t,
            src: r = "",
            onLoad: n = () => {},
            onReady: a = null,
            strategy: d = "afterInteractive",
            onError: u,
            stylesheets: p,
            ...g
          } = e,
          {
            updateScripts: m,
            scripts: h,
            getIsSsr: y,
            appDir: b,
            nonce: j,
          } = (0, i.useContext)(c.HeadManagerContext),
          _ = (0, i.useRef)(!1);
        (0, i.useEffect)(() => {
          let e = t || r;
          _.current || (a && e && f.has(e) && a(), (_.current = !0));
        }, [a, t, r]);
        let v = (0, i.useRef)(!1);
        if (
          ((0, i.useEffect)(() => {
            !v.current &&
              ("afterInteractive" === d
                ? x(e)
                : "lazyOnload" === d &&
                  ("complete" === document.readyState
                    ? (0, o.requestIdleCallback)(() => x(e))
                    : window.addEventListener("load", () => {
                        (0, o.requestIdleCallback)(() => x(e));
                      })),
              (v.current = !0));
          }, [e, d]),
          ("beforeInteractive" === d || "worker" === d) &&
            (m
              ? ((h[d] = (h[d] || []).concat([
                  { id: t, src: r, onLoad: n, onReady: a, onError: u, ...g },
                ])),
                m(h))
              : y && y()
              ? f.add(t || r)
              : y && !y() && x(e)),
          b)
        ) {
          if (
            (p &&
              p.forEach((e) => {
                l.default.preinit(e, { as: "style" });
              }),
            "beforeInteractive" === d)
          )
            return r
              ? (l.default.preload(
                  r,
                  g.integrity
                    ? {
                        as: "script",
                        integrity: g.integrity,
                        nonce: j,
                        crossOrigin: g.crossOrigin,
                      }
                    : { as: "script", nonce: j, crossOrigin: g.crossOrigin }
                ),
                (0, s.jsx)("script", {
                  nonce: j,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([r, { ...g, id: t }]) +
                      ")",
                  },
                }))
              : (g.dangerouslySetInnerHTML &&
                  ((g.children = g.dangerouslySetInnerHTML.__html),
                  delete g.dangerouslySetInnerHTML),
                (0, s.jsx)("script", {
                  nonce: j,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...g, id: t }]) +
                      ")",
                  },
                }));
          "afterInteractive" === d &&
            r &&
            l.default.preload(
              r,
              g.integrity
                ? {
                    as: "script",
                    integrity: g.integrity,
                    nonce: j,
                    crossOrigin: g.crossOrigin,
                  }
                : { as: "script", nonce: j, crossOrigin: g.crossOrigin }
            );
        }
        return null;
      }
      Object.defineProperty(h, "__nextScript", { value: !0 });
      let y = h;
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
            return s;
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
      function a(e) {
        return ["async", "defer", "noModule"].includes(e);
      }
      function s(e, t) {
        for (let [s, l] of Object.entries(t)) {
          if (!t.hasOwnProperty(s) || n.includes(s) || void 0 === l) continue;
          let i = r[s] || s.toLowerCase();
          "SCRIPT" === e.tagName && a(i)
            ? (e[i] = !!l)
            : e.setAttribute(i, String(l)),
            (!1 === l ||
              ("SCRIPT" === e.tagName && a(i) && (!l || "false" === l))) &&
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
    4454: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => w });
      var n = r(5155),
        a = r(2115),
        s = r(2901),
        l = r(116);
      let i = () => {
        let e = (0, a.useRef)([]),
          t = (0, a.useCallback)((t) => {
            t && !e.current.includes(t) && e.current.push(t);
          }, []),
          r = (0, a.useCallback)((t) => {
            let r = e.current.indexOf(t);
            r > -1 && (e.current.splice(r, 1), t.kill());
          }, []),
          n = (0, a.useCallback)(() => {
            e.current.forEach((e) => {
              try {
                e.kill();
              } catch (e) {}
            }),
              (e.current = []);
          }, []),
          s = (0, a.useCallback)(() => e.current.length, []);
        return (
          (0, l.E)(() => n, [n]),
          { addTrigger: t, removeTrigger: r, cleanup: n, getTriggerCount: s }
        );
      };
      var c = r(4145),
        d = r(104),
        o = r(3704),
        u = r.n(o);
      let f = "G-0XVSKZ1F20",
        p = (e) => {
          window.gtag &&
            window.gtag("event", "section_view", {
              event_category: "Scroll",
              event_label: e,
            });
        },
        x = (0, a.lazy)(() => r.e(985).then(r.bind(r, 2985))),
        g = (0, a.lazy)(() => r.e(406).then(r.bind(r, 6406))),
        m = (0, a.lazy)(() => r.e(131).then(r.bind(r, 6131))),
        h = (0, a.lazy)(() => r.e(399).then(r.bind(r, 399))),
        y = (0, a.lazy)(() =>
          Promise.all([r.e(55), r.e(482)]).then(r.bind(r, 482))
        ),
        b = (0, a.lazy)(() =>
          Promise.all([r.e(453), r.e(853), r.e(93)]).then(r.bind(r, 7648))
        ),
        j = (0, a.lazy)(() => r.e(361).then(r.bind(r, 8361))),
        _ = (0, a.lazy)(() => r.e(908).then(r.bind(r, 4527))),
        v = (e) => {
          let { height: t = "100vh" } = e;
          return (0, n.jsx)("div", {
            className:
              "w-full animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]",
            style: { height: t, animation: "shimmer 1.5s infinite linear" },
            children: (0, n.jsx)("div", {
              className: "flex items-center justify-center h-full",
              children: (0, n.jsx)("div", {
                className:
                  "w-16 h-16 border-4 border-gray-400 border-t-transparent rounded-full animate-spin",
              }),
            }),
          });
        };
      function w() {
        let e = (0, a.useRef)(null),
          { addTrigger: t } = i();
        return (
          (0, l.E)(() => {
            s.os.utils.toArray("[data-pinned='true']").forEach((e) => {
              let r = e.querySelector("div"),
                n = "+=".concat(e.offsetHeight),
                a = e.id,
                l = s.uY.create({
                  trigger: e,
                  start: "top top",
                  end: n,
                  pin: !0,
                  pinSpacing: !1,
                  onEnter: () => {
                    p(a);
                  },
                }),
                i = s.os.to(r, {
                  yPercent: 0,
                  ease: "none",
                  scrollTrigger: {
                    trigger: e,
                    start: "top top",
                    end: n,
                    scrub: !0,
                  },
                });
              t(l), i.scrollTrigger && t(i.scrollTrigger);
            }),
              s.uY.refresh();
          }, [t]),
          (0, n.jsxs)("main", {
            ref: e,
            className: "relative",
            children: [
              (0, n.jsx)(u(), {
                strategy: "afterInteractive",
                src: "https://www.googletagmanager.com/gtag/js?id=".concat(f),
              }),
              (0, n.jsx)(u(), {
                id: "gtag-init",
                strategy: "afterInteractive",
                dangerouslySetInnerHTML: {
                  __html:
                    "\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(
                      f,
                      "');\n          "
                    ),
                },
              }),
              (0, n.jsx)(c.c, {}),
              (0, n.jsx)(S, {
                id: "hero",
                children: (0, n.jsx)(a.Suspense, {
                  fallback: (0, n.jsx)(v, {}),
                  children: (0, n.jsx)(x, {}),
                }),
              }),
              (0, n.jsx)(S, {
                id: "about",
                className:
                  "mt-[120px] lg:mt-[200px] xl:mt-[310px] 2xl:mt-[330px]",
                children: (0, n.jsx)(a.Suspense, {
                  fallback: (0, n.jsx)(v, {}),
                  children: (0, n.jsx)(g, {}),
                }),
              }),
              (0, n.jsx)(S, {
                id: "aiga",
                className:
                  "mt-[180px] md:mt-[240px] lg:mt-[260px] xl:mt-[500px]",
                children: (0, n.jsx)(a.Suspense, {
                  fallback: (0, n.jsx)(v, {}),
                  children: (0, n.jsx)(m, {}),
                }),
              }),
              (0, n.jsx)(S, {
                id: "games",
                className:
                  "mt-[180px] md:mt-[240px] lg:mt-[300px] xl:mt-[500px]",
                children: (0, n.jsx)(a.Suspense, {
                  fallback: (0, n.jsx)(v, {}),
                  children: (0, n.jsx)(h, {}),
                }),
              }),
              (0, n.jsx)(S, {
                id: "art",
                className: "mt-[200px] md:mt-[320px] xl:mt-[350px] ",
                children: (0, n.jsx)(a.Suspense, {
                  fallback: (0, n.jsx)(v, {}),
                  children: (0, n.jsx)(y, {}),
                }),
              }),
              (0, n.jsx)(S, {
                id: "music",
                className:
                  "mt-[180px] md:mt-[270px] lg:mt-[310px] xl:mt-[550px]",
                children: (0, n.jsx)(a.Suspense, {
                  fallback: (0, n.jsx)(v, {}),
                  children: (0, n.jsx)(b, {}),
                }),
              }),
              (0, n.jsx)(S, {
                id: "exchanges",
                className:
                  "mt-[180px] md:mt-[270px] lg:mt-[310px] xl:mt-[550px]",
                children: (0, n.jsx)(a.Suspense, {
                  fallback: (0, n.jsx)(v, {}),
                  children: (0, n.jsx)(j, {}),
                }),
              }),
              (0, n.jsx)(S, {
                id: "tokenomics",
                className:
                  "mt-[180px] md:mt-[300px] lg:mt-[310px] xl:mt-[700px]",
                children: (0, n.jsx)(a.Suspense, {
                  fallback: (0, n.jsx)(v, {}),
                  children: (0, n.jsx)(_, {}),
                }),
              }),
              (0, n.jsx)(d.w, {}),
            ],
          })
        );
      }
      function S(e) {
        let { id: t, children: r, className: a = "" } = e;
        return (0, n.jsx)("section", {
          id: t,
          "data-pinned": "true",
          className: "h-[100vh] relative ".concat(a),
          children: (0, n.jsx)("div", {
            className: "h-full relative",
            children: r,
          }),
        });
      }
    },
    116: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => n });
      let n = r(2115).useLayoutEffect;
    },
    2901: (e, t, r) => {
      "use strict";
      r.d(t, { os: () => n.Ay, uY: () => a.u });
      var n = r(3385),
        a = r(5415);
      n.Ay.registerPlugin(a.u);
      let s = !1;
      n.Ay.config({ force3D: !0, nullTargetWarn: !1 }),
        n.Ay.defaults({ ease: "power2.out", duration: 0.8 });
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [634, 565, 47, 922, 919, 358], () => t(7676)), (_N_E = e.O());
  },
]);
