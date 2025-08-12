(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [235],
  {
    424: (a, e, t) => {
      Promise.resolve().then(t.bind(t, 1815));
    },
    6046: (a, e, t) => {
      "use strict";
      var r = t(6658);
      t.o(r, "useRouter") &&
        t.d(e, {
          useRouter: function () {
            return r.useRouter;
          },
        }),
        t.o(r, "useSearchParams") &&
          t.d(e, {
            useSearchParams: function () {
              return r.useSearchParams;
            },
          });
    },
    1815: (a, e, t) => {
      "use strict";
      t.d(e, { GalleryPageContent: () => z });
      var r = t(5155),
        n = t(3074),
        i = t(6222),
        o = t(4145),
        s = t(8803),
        l = t.n(s),
        c = t(2115),
        b = t(5565),
        d = t(2055),
        x = t(6046);
      let m = (a) => {
        if (null == a || isNaN(a) || a <= 0) return "0:00";
        let e = Math.floor(a / 60),
          t = Math.floor(a % 60);
        return "".concat(e, ":").concat(t.toString().padStart(2, "0"));
      };
      function p() {
        var a;
        let e = (0, x.useRouter)(),
          t = (0, x.useSearchParams)(),
          [i, o] = (0, c.useState)("all"),
          [s, p] = (0, c.useState)(null),
          [g, f] = (0, c.useState)(new Set()),
          u = (0, c.useRef)(null),
          { isInTelegram: k, telegram: w } = (0, n.j)(),
          h = null == w ? void 0 : w.WebApp,
          y = (null == t ? void 0 : t.get("ref")) || null;
        (0, c.useEffect)(() => {
          if (k && h) {
            let a = () => {
              h.BackButton.hide(), e.back();
            };
            return (
              y && (h.BackButton.onClick(a), h.BackButton.show()),
              () => {
                h.BackButton.offClick(a), h.BackButton.hide();
              }
            );
          }
        }, [k, y, e, h]);
        let v = (null == t ? void 0 : t.get("image")) || null,
          z = (0, c.useMemo)(
            () => [...d.z].sort((a, e) => e.createdAt - a.createdAt),
            []
          ),
          j = (a) => {
            let r = new URLSearchParams(t || void 0);
            a ? r.set("image", a) : r.delete("image"),
              e.replace("/gallery?".concat(r.toString()), { scroll: !1 });
          },
          N = (0, c.useMemo)(
            () =>
              "images" === i
                ? z.filter((a) => "video" !== a.type)
                : "videos" === i
                ? z.filter((a) => "video" === a.type)
                : z,
            [z, i]
          ),
          C = N.findIndex((a) => a.src === v),
          A = (0, c.useRef)([]),
          S = (0, c.useCallback)(
            (a) => (e) => {
              A.current[a] = e;
            },
            []
          );
        return (
          (0, c.useEffect)(
            () => (
              (u.current = new IntersectionObserver(
                (a) => {
                  a.forEach((a) => {
                    let e = parseInt(
                      a.target.getAttribute("data-index") || "0"
                    );
                    f((t) => {
                      let r = new Set(t);
                      return a.isIntersecting ? r.add(e) : r.delete(e), r;
                    });
                  });
                },
                { threshold: 0.1, rootMargin: "50px" }
              )),
              A.current.forEach((a, e) => {
                if (a) {
                  var t;
                  a.setAttribute("data-index", e.toString()),
                    null === (t = u.current) || void 0 === t || t.observe(a);
                }
              }),
              () => {
                var a;
                null === (a = u.current) || void 0 === a || a.disconnect();
              }
            ),
            [N]
          ),
          (0, r.jsxs)("div", {
            className:
              "jsx-852c3726e2abd6a4 min-h-screen cosmic-gallery-bg py-20 px-4 relative overflow-hidden",
            children: [
              (0, r.jsx)("div", {
                className: "jsx-852c3726e2abd6a4 cosmic-particles",
              }),
              (0, r.jsx)("div", {
                className:
                  "jsx-852c3726e2abd6a4 absolute top-0 left-0 w-full h-24 z-20 overflow-hidden",
                children: (0, r.jsx)("div", {
                  className:
                    "jsx-852c3726e2abd6a4 wave absolute top-0 left-0 w-full h-full",
                }),
              }),
              (0, r.jsx)("div", { className: "jsx-852c3726e2abd6a4 my-20" }),
              (0, r.jsxs)("div", {
                className:
                  "jsx-852c3726e2abd6a4 flex justify-center gap-4 mb-12 px-4 flex-wrap",
                children: [
                  (0, r.jsxs)("button", {
                    onClick: () => o("all"),
                    className:
                      "jsx-852c3726e2abd6a4 " +
                      "playful-filter-btn ".concat("all" === i ? "active" : ""),
                    children: [
                      (0, r.jsx)("span", {
                        className: "jsx-852c3726e2abd6a4 btn-icon",
                        children: "✨",
                      }),
                      (0, r.jsx)("span", {
                        className: "jsx-852c3726e2abd6a4 btn-text",
                        children: "ALL",
                      }),
                      (0, r.jsx)("div", {
                        className: "jsx-852c3726e2abd6a4 btn-shadow",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("button", {
                    onClick: () => o("images"),
                    className:
                      "jsx-852c3726e2abd6a4 " +
                      "playful-filter-btn ".concat(
                        "images" === i ? "active" : ""
                      ),
                    children: [
                      (0, r.jsx)("span", {
                        className: "jsx-852c3726e2abd6a4 btn-icon",
                        children: "\uD83D\uDDBC️",
                      }),
                      (0, r.jsx)("span", {
                        className: "jsx-852c3726e2abd6a4 btn-text",
                        children: "IMAGES",
                      }),
                      (0, r.jsx)("div", {
                        className: "jsx-852c3726e2abd6a4 btn-shadow",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("button", {
                    onClick: () => o("videos"),
                    className:
                      "jsx-852c3726e2abd6a4 " +
                      "playful-filter-btn ".concat(
                        "videos" === i ? "active" : ""
                      ),
                    children: [
                      (0, r.jsx)("span", {
                        className: "jsx-852c3726e2abd6a4 btn-icon",
                        children: "\uD83C\uDFAC",
                      }),
                      (0, r.jsx)("span", {
                        className: "jsx-852c3726e2abd6a4 btn-text",
                        children: "VIDEOS",
                      }),
                      (0, r.jsx)("div", {
                        className: "jsx-852c3726e2abd6a4 btn-shadow",
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className:
                  "jsx-852c3726e2abd6a4 masonry-container mx-auto w-[100%] md:w-[95%] xl:w-[95%] 2xl:w-[98%] 2xl:max-w-[2500px] max-w-none",
                children: (0, r.jsx)("div", {
                  className: "jsx-852c3726e2abd6a4 masonry-grid",
                  children: N.map((a, e) =>
                    (0, r.jsx)(
                      "div",
                      {
                        ref: S(e),
                        "data-index": e,
                        onClick: () => j(a.src),
                        onMouseEnter: () => p(e),
                        onMouseLeave: () => p(null),
                        style: {
                          "--aspect-ratio": a.aspectRatio,
                          "--delay": "".concat(0.1 * e, "s"),
                        },
                        className:
                          "jsx-852c3726e2abd6a4 " +
                          "cosmic-card ".concat(g.has(e) ? "in-view" : ""),
                        children: (0, r.jsxs)("div", {
                          className: "jsx-852c3726e2abd6a4 cosmic-card-inner",
                          children: [
                            (0, r.jsx)("div", {
                              className: "jsx-852c3726e2abd6a4 cosmic-glow",
                            }),
                            (0, r.jsx)("div", {
                              className: "jsx-852c3726e2abd6a4 cosmic-border",
                            }),
                            (0, r.jsxs)("div", {
                              className: "jsx-852c3726e2abd6a4 image-container",
                              children: [
                                (0, r.jsx)(b.default, {
                                  src: a.thumbnail || a.src,
                                  alt: a.alt,
                                  fill: !0,
                                  loading: "lazy",
                                  className: "cosmic-image",
                                  sizes:
                                    "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
                                  quality: 90,
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "jsx-852c3726e2abd6a4 " +
                                    "cosmic-overlay ".concat(
                                      s === e ? "visible" : ""
                                    ),
                                  children: (0, r.jsxs)("div", {
                                    className:
                                      "jsx-852c3726e2abd6a4 overlay-content",
                                    children: [
                                      (0, r.jsx)("div", {
                                        className:
                                          "jsx-852c3726e2abd6a4 view-icon",
                                        children: "\uD83D\uDC41️",
                                      }),
                                      (0, r.jsx)("div", {
                                        className:
                                          "jsx-852c3726e2abd6a4 view-text",
                                        children: "VIEW",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            "video" === a.type &&
                              (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsxs)("div", {
                                    className:
                                      "jsx-852c3726e2abd6a4 cosmic-video-badge",
                                    children: [
                                      (0, r.jsx)("span", {
                                        className:
                                          "jsx-852c3726e2abd6a4 video-icon",
                                        children: "▶",
                                      }),
                                      (0, r.jsx)("span", {
                                        className: "jsx-852c3726e2abd6a4",
                                        children: "VIDEO",
                                      }),
                                    ],
                                  }),
                                  a.duration &&
                                    (0, r.jsx)("div", {
                                      className:
                                        "jsx-852c3726e2abd6a4 cosmic-duration-badge",
                                      children: m(a.duration),
                                    }),
                                ],
                              }),
                          ],
                        }),
                      },
                      a.src
                    )
                  ),
                }),
              }),
              v &&
                (0, r.jsx)("div", {
                  onClick: () => j(),
                  className: "jsx-852c3726e2abd6a4 cosmic-lightbox-overlay",
                  children: (0, r.jsxs)("div", {
                    onClick: (a) => a.stopPropagation(),
                    className: "jsx-852c3726e2abd6a4 cosmic-lightbox-container",
                    children: [
                      (0, r.jsx)("div", {
                        className: "jsx-852c3726e2abd6a4 lightbox-glow",
                      }),
                      (0, r.jsx)("button", {
                        onClick: () => j(),
                        className: "jsx-852c3726e2abd6a4 cosmic-close-btn",
                        children: (0, r.jsx)("span", {
                          className: "jsx-852c3726e2abd6a4",
                          children: "✕",
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "jsx-852c3726e2abd6a4 cosmic-media-container",
                        children:
                          (null === (a = z.find((a) => a.src === v)) ||
                          void 0 === a
                            ? void 0
                            : a.type) === "video"
                            ? (0, r.jsx)("video", {
                                src: v,
                                controls: !0,
                                autoPlay: !0,
                                loop: !0,
                                playsInline: !0,
                                className: "jsx-852c3726e2abd6a4 cosmic-media",
                              })
                            : (0, r.jsx)(b.default, {
                                src: v,
                                alt: "Selected content",
                                fill: !0,
                                className: "cosmic-media",
                                loading: "lazy",
                              }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "jsx-852c3726e2abd6a4 cosmic-nav-controls",
                        children: [
                          (0, r.jsxs)("button", {
                            onClick: () => {
                              if (0 === N.length || -1 === C) return;
                              let a = (C - 1 + N.length) % N.length;
                              j(N[a].src);
                            },
                            className:
                              "jsx-852c3726e2abd6a4 cosmic-nav-btn prev",
                            children: [
                              (0, r.jsx)("span", {
                                className: "jsx-852c3726e2abd6a4 nav-icon",
                                children: "←",
                              }),
                              (0, r.jsx)("span", {
                                className: "jsx-852c3726e2abd6a4 nav-text",
                                children: "PREV",
                              }),
                            ],
                          }),
                          (0, r.jsxs)("a", {
                            href: v,
                            download: !0,
                            className:
                              "jsx-852c3726e2abd6a4 cosmic-download-btn",
                            children: [
                              (0, r.jsx)("span", {
                                className: "jsx-852c3726e2abd6a4 download-icon",
                                children: "⬇",
                              }),
                              (0, r.jsx)("span", {
                                className: "jsx-852c3726e2abd6a4 download-text",
                                children: "DOWNLOAD",
                              }),
                            ],
                          }),
                          (0, r.jsxs)("button", {
                            onClick: () => {
                              if (0 === N.length || -1 === C) return;
                              let a = (C + 1) % N.length;
                              j(N[a].src);
                            },
                            className:
                              "jsx-852c3726e2abd6a4 cosmic-nav-btn next",
                            children: [
                              (0, r.jsx)("span", {
                                className: "jsx-852c3726e2abd6a4 nav-text",
                                children: "NEXT",
                              }),
                              (0, r.jsx)("span", {
                                className: "jsx-852c3726e2abd6a4 nav-icon",
                                children: "→",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              (0, r.jsx)(l(), {
                id: "852c3726e2abd6a4",
                children:
                  ".cosmic-gallery-bg{background:-webkit-radial-gradient(top,ellipse,#1a0b3d 0%,#0f0519 40%,#000 100%);background:-moz-radial-gradient(top,ellipse,#1a0b3d 0%,#0f0519 40%,#000 100%);background:-o-radial-gradient(top,ellipse,#1a0b3d 0%,#0f0519 40%,#000 100%);background:radial-gradient(ellipse at top,#1a0b3d 0%,#0f0519 40%,#000 100%);position:relative}.cosmic-particles{position:absolute;top:0;left:0;width:100%;height:100%;background-image:-webkit-radial-gradient(20px 30px,2px 2px,rgba(255,255,255,.3),transparent),-webkit-radial-gradient(40px 70px,2px 2px,rgba(147,112,219,.4),transparent),-webkit-radial-gradient(90px 40px,1px 1px,rgba(255,105,180,.3),transparent),-webkit-radial-gradient(130px 80px,1px 1px,rgba(64,224,208,.3),transparent),-webkit-radial-gradient(160px 30px,2px 2px,rgba(255,255,255,.2),transparent);background-image:-moz-radial-gradient(20px 30px,2px 2px,rgba(255,255,255,.3),transparent),-moz-radial-gradient(40px 70px,2px 2px,rgba(147,112,219,.4),transparent),-moz-radial-gradient(90px 40px,1px 1px,rgba(255,105,180,.3),transparent),-moz-radial-gradient(130px 80px,1px 1px,rgba(64,224,208,.3),transparent),-moz-radial-gradient(160px 30px,2px 2px,rgba(255,255,255,.2),transparent);background-image:-o-radial-gradient(20px 30px,2px 2px,rgba(255,255,255,.3),transparent),-o-radial-gradient(40px 70px,2px 2px,rgba(147,112,219,.4),transparent),-o-radial-gradient(90px 40px,1px 1px,rgba(255,105,180,.3),transparent),-o-radial-gradient(130px 80px,1px 1px,rgba(64,224,208,.3),transparent),-o-radial-gradient(160px 30px,2px 2px,rgba(255,255,255,.2),transparent);background-image:radial-gradient(2px 2px at 20px 30px,rgba(255,255,255,.3),transparent),radial-gradient(2px 2px at 40px 70px,rgba(147,112,219,.4),transparent),radial-gradient(1px 1px at 90px 40px,rgba(255,105,180,.3),transparent),radial-gradient(1px 1px at 130px 80px,rgba(64,224,208,.3),transparent),radial-gradient(2px 2px at 160px 30px,rgba(255,255,255,.2),transparent);background-repeat:repeat;-webkit-background-size:200px 100px;-moz-background-size:200px 100px;-o-background-size:200px 100px;background-size:200px 100px;-webkit-animation:cosmic-drift 20s linear infinite;-moz-animation:cosmic-drift 20s linear infinite;-o-animation:cosmic-drift 20s linear infinite;animation:cosmic-drift 20s linear infinite;opacity:.6}@-webkit-keyframes cosmic-drift{0%{-webkit-transform:translatey(0px);transform:translatey(0px)}100%{-webkit-transform:translatey(-200px);transform:translatey(-200px)}}@-moz-keyframes cosmic-drift{0%{-moz-transform:translatey(0px);transform:translatey(0px)}100%{-moz-transform:translatey(-200px);transform:translatey(-200px)}}@-o-keyframes cosmic-drift{0%{-o-transform:translatey(0px);transform:translatey(0px)}100%{-o-transform:translatey(-200px);transform:translatey(-200px)}}@keyframes cosmic-drift{0%{-webkit-transform:translatey(0px);-moz-transform:translatey(0px);-o-transform:translatey(0px);transform:translatey(0px)}100%{-webkit-transform:translatey(-200px);-moz-transform:translatey(-200px);-o-transform:translatey(-200px);transform:translatey(-200px)}}.wave{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'%3E%3Cpath fill='%23000' d='M0,40 Q300,120 600,40 T1200,40 L1200,120 L0,120 Z'/%3E%3C/svg%3E\");background-repeat:repeat-x;-webkit-background-size:1200px 120px;-moz-background-size:1200px 120px;-o-background-size:1200px 120px;background-size:1200px 120px;-webkit-animation:waveAnimation 10s linear infinite;-moz-animation:waveAnimation 10s linear infinite;-o-animation:waveAnimation 10s linear infinite;animation:waveAnimation 10s linear infinite;-webkit-transform:scaley(-1);-moz-transform:scaley(-1);-ms-transform:scaley(-1);-o-transform:scaley(-1);transform:scaley(-1)}@-webkit-keyframes waveAnimation{from{background-position:0 0}to{background-position:-1200px 0}}@-moz-keyframes waveAnimation{from{background-position:0 0}to{background-position:-1200px 0}}@-o-keyframes waveAnimation{from{background-position:0 0}to{background-position:-1200px 0}}@keyframes waveAnimation{from{background-position:0 0}to{background-position:-1200px 0}}.playful-filter-btn{position:relative;padding:14px 24px;background:-webkit-linear-gradient(305deg,#87ceeb 0%,#98fb98 50%,#ffb6c1 100%);background:-moz-linear-gradient(305deg,#87ceeb 0%,#98fb98 50%,#ffb6c1 100%);background:-o-linear-gradient(305deg,#87ceeb 0%,#98fb98 50%,#ffb6c1 100%);background:linear-gradient(145deg,#87ceeb 0%,#98fb98 50%,#ffb6c1 100%);border:4px solid#fff;-webkit-border-radius:25px;-moz-border-radius:25px;border-radius:25px;cursor:pointer;-webkit-transition:all.2s ease;-moz-transition:all.2s ease;-o-transition:all.2s ease;transition:all.2s ease;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;font-weight:700;font-size:1em;color:#2d3748;text-shadow:0 1px 2px rgba(255,255,255,.5);-webkit-box-shadow:0 0 0 3px#4a3728,0 6px 0 0#4a3728,0 8px 0 0 rgba(74,55,40,.3),0 12px 20px rgba(0,0,0,.2);-moz-box-shadow:0 0 0 3px#4a3728,0 6px 0 0#4a3728,0 8px 0 0 rgba(74,55,40,.3),0 12px 20px rgba(0,0,0,.2);box-shadow:0 0 0 3px#4a3728,0 6px 0 0#4a3728,0 8px 0 0 rgba(74,55,40,.3),0 12px 20px rgba(0,0,0,.2);-webkit-transform:translatey(0);-moz-transform:translatey(0);-ms-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0);overflow:hidden}.playful-filter-btn::before{content:\"\";position:absolute;top:0;left:-100%;width:100%;height:100%;background:-webkit-linear-gradient(left,transparent,rgba(255,255,255,.3),transparent);background:-moz-linear-gradient(left,transparent,rgba(255,255,255,.3),transparent);background:-o-linear-gradient(left,transparent,rgba(255,255,255,.3),transparent);background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);-webkit-transition:left.5s ease;-moz-transition:left.5s ease;-o-transition:left.5s ease;transition:left.5s ease}.playful-filter-btn:hover::before{left:100%}.playful-filter-btn:hover{-webkit-transform:translatey(-2px);-moz-transform:translatey(-2px);-ms-transform:translatey(-2px);-o-transform:translatey(-2px);transform:translatey(-2px);-webkit-box-shadow:0 0 0 3px#4a3728,0 8px 0 0#4a3728,0 10px 0 0 rgba(74,55,40,.3),0 16px 25px rgba(0,0,0,.3);-moz-box-shadow:0 0 0 3px#4a3728,0 8px 0 0#4a3728,0 10px 0 0 rgba(74,55,40,.3),0 16px 25px rgba(0,0,0,.3);box-shadow:0 0 0 3px#4a3728,0 8px 0 0#4a3728,0 10px 0 0 rgba(74,55,40,.3),0 16px 25px rgba(0,0,0,.3)}.playful-filter-btn:active{-webkit-transform:translatey(4px);-moz-transform:translatey(4px);-ms-transform:translatey(4px);-o-transform:translatey(4px);transform:translatey(4px);-webkit-box-shadow:0 0 0 3px#4a3728,0 2px 0 0#4a3728,0 4px 0 0 rgba(74,55,40,.3),0 6px 10px rgba(0,0,0,.2);-moz-box-shadow:0 0 0 3px#4a3728,0 2px 0 0#4a3728,0 4px 0 0 rgba(74,55,40,.3),0 6px 10px rgba(0,0,0,.2);box-shadow:0 0 0 3px#4a3728,0 2px 0 0#4a3728,0 4px 0 0 rgba(74,55,40,.3),0 6px 10px rgba(0,0,0,.2)}.playful-filter-btn.active{background:-webkit-linear-gradient(305deg,#ff8a00 0%,#e52e71 50%,#ff6b35 100%);background:-moz-linear-gradient(305deg,#ff8a00 0%,#e52e71 50%,#ff6b35 100%);background:-o-linear-gradient(305deg,#ff8a00 0%,#e52e71 50%,#ff6b35 100%);background:linear-gradient(145deg,#ff8a00 0%,#e52e71 50%,#ff6b35 100%);color:white;text-shadow:0 1px 2px rgba(0,0,0,.3);-webkit-box-shadow:0 0 0 3px#4a3728,0 6px 0 0#4a3728,0 8px 0 0 rgba(74,55,40,.3),0 12px 20px rgba(0,0,0,.2),0 0 15px rgba(255,138,0,.4);-moz-box-shadow:0 0 0 3px#4a3728,0 6px 0 0#4a3728,0 8px 0 0 rgba(74,55,40,.3),0 12px 20px rgba(0,0,0,.2),0 0 15px rgba(255,138,0,.4);box-shadow:0 0 0 3px#4a3728,0 6px 0 0#4a3728,0 8px 0 0 rgba(74,55,40,.3),0 12px 20px rgba(0,0,0,.2),0 0 15px rgba(255,138,0,.4);-webkit-animation:active-pulse 2s ease-in-out infinite;-moz-animation:active-pulse 2s ease-in-out infinite;-o-animation:active-pulse 2s ease-in-out infinite;animation:active-pulse 2s ease-in-out infinite}@-webkit-keyframes active-pulse{0%,100%{-webkit-box-shadow:0 0 0 3px#4a3728,0 6px 0 0#4a3728,0 8px 0 0 rgba(74,55,40,.3),0 12px 20px rgba(0,0,0,.2),0 0 15px rgba(255,138,0,.4);box-shadow:0 0 0 3px#4a3728,0 6px 0 0#4a3728,0 8px 0 0 rgba(74,55,40,.3),0 12px 20px rgba(0,0,0,.2),0 0 15px rgba(255,138,0,.4)}50%{-webkit-box-shadow:0 0 0 3px#4a3728,0 6px 0 0#4a3728,0 8px 0 0 rgba(74,55,40,.3),0 12px 20px rgba(0,0,0,.2),0 0 25px rgba(255,138,0,.6);box-shadow:0 0 0 3px#4a3728,0 6px 0 0#4a3728,0 8px 0 0 rgba(74,55,40,.3),0 12px 20px rgba(0,0,0,.2),0 0 25px rgba(255,138,0,.6)}}@-moz-keyframes active-pulse{0%,100%{-moz-box-shadow:0 0 0 3px#4a3728,0 6px 0 0#4a3728,0 8px 0 0 rgba(74,55,40,.3),0 12px 20px rgba(0,0,0,.2),0 0 15px rgba(255,138,0,.4);box-shadow:0 0 0 3px#4a3728,0 6px 0 0#4a3728,0 8px 0 0 rgba(74,55,40,.3),0 12px 20px rgba(0,0,0,.2),0 0 15px rgba(255,138,0,.4)}50%{-moz-box-shadow:0 0 0 3px#4a3728,0 6px 0 0#4a3728,0 8px 0 0 rgba(74,55,40,.3),0 12px 20px rgba(0,0,0,.2),0 0 25px rgba(255,138,0,.6);box-shadow:0 0 0 3px#4a3728,0 6px 0 0#4a3728,0 8px 0 0 rgba(74,55,40,.3),0 12px 20px rgba(0,0,0,.2),0 0 25px rgba(255,138,0,.6)}}@-o-keyframes active-pulse{0%,100%{box-shadow:0 0 0 3px#4a3728,0 6px 0 0#4a3728,0 8px 0 0 rgba(74,55,40,.3),0 12px 20px rgba(0,0,0,.2),0 0 15px rgba(255,138,0,.4)}50%{box-shadow:0 0 0 3px#4a3728,0 6px 0 0#4a3728,0 8px 0 0 rgba(74,55,40,.3),0 12px 20px rgba(0,0,0,.2),0 0 25px rgba(255,138,0,.6)}}@keyframes active-pulse{0%,100%{-webkit-box-shadow:0 0 0 3px#4a3728,0 6px 0 0#4a3728,0 8px 0 0 rgba(74,55,40,.3),0 12px 20px rgba(0,0,0,.2),0 0 15px rgba(255,138,0,.4);-moz-box-shadow:0 0 0 3px#4a3728,0 6px 0 0#4a3728,0 8px 0 0 rgba(74,55,40,.3),0 12px 20px rgba(0,0,0,.2),0 0 15px rgba(255,138,0,.4);box-shadow:0 0 0 3px#4a3728,0 6px 0 0#4a3728,0 8px 0 0 rgba(74,55,40,.3),0 12px 20px rgba(0,0,0,.2),0 0 15px rgba(255,138,0,.4)}50%{-webkit-box-shadow:0 0 0 3px#4a3728,0 6px 0 0#4a3728,0 8px 0 0 rgba(74,55,40,.3),0 12px 20px rgba(0,0,0,.2),0 0 25px rgba(255,138,0,.6);-moz-box-shadow:0 0 0 3px#4a3728,0 6px 0 0#4a3728,0 8px 0 0 rgba(74,55,40,.3),0 12px 20px rgba(0,0,0,.2),0 0 25px rgba(255,138,0,.6);box-shadow:0 0 0 3px#4a3728,0 6px 0 0#4a3728,0 8px 0 0 rgba(74,55,40,.3),0 12px 20px rgba(0,0,0,.2),0 0 25px rgba(255,138,0,.6)}}.btn-icon{font-size:1.3em;-webkit-filter:drop-shadow(0 1px 2px rgba(0,0,0,.1));filter:drop-shadow(0 1px 2px rgba(0,0,0,.1));z-index:2}.btn-text{font-size:.9em;letter-spacing:.5px;z-index:2}.btn-shadow{position:absolute;bottom:-6px;left:0;right:0;height:6px;background:#4a3728;-webkit-border-radius:0 0 25px 25px;-moz-border-radius:0 0 25px 25px;border-radius:0 0 25px 25px;z-index:-1}@media(max-width:640px){.playful-filter-btn{padding:12px 18px;font-size:.9em}.btn-text{display:none}.btn-icon{font-size:1.4em}}.masonry-container{padding:20px 0}.masonry-grid{-webkit-columns:2;-moz-columns:2;columns:2;-webkit-column-gap:14px;-moz-column-gap:14px;column-gap:14px;-webkit-column-fill:balance;-moz-column-fill:balance;column-fill:balance}@media(min-width:768px){.masonry-grid{-webkit-columns:3;-moz-columns:3;columns:3;-webkit-column-gap:16px;-moz-column-gap:16px;column-gap:16px}}@media(min-width:1024px){.masonry-grid{-webkit-columns:3;-moz-columns:3;columns:3;-webkit-column-gap:18px;-moz-column-gap:18px;column-gap:18px}}.cosmic-card{-webkit-column-break-inside:avoid;page-break-inside:avoid;break-inside:avoid;margin-bottom:14px;cursor:pointer;opacity:0;-webkit-transform:translatey(50px)scale(.8);-moz-transform:translatey(50px)scale(.8);-ms-transform:translatey(50px)scale(.8);-o-transform:translatey(50px)scale(.8);transform:translatey(50px)scale(.8);-webkit-transition:all.6s cubic-bezier(.23,1,.32,1);-moz-transition:all.6s cubic-bezier(.23,1,.32,1);-o-transition:all.6s cubic-bezier(.23,1,.32,1);transition:all.6s cubic-bezier(.23,1,.32,1);-webkit-animation-delay:var(--delay);-moz-animation-delay:var(--delay);-o-animation-delay:var(--delay);animation-delay:var(--delay)}.cosmic-card.in-view{opacity:1;-webkit-transform:translatey(0)scale(1);-moz-transform:translatey(0)scale(1);-ms-transform:translatey(0)scale(1);-o-transform:translatey(0)scale(1);transform:translatey(0)scale(1)}.cosmic-card-inner{position:relative;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;overflow:hidden;background:rgba(15,5,25,.6);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);-webkit-transition:all.4s cubic-bezier(.23,1,.32,1);-moz-transition:all.4s cubic-bezier(.23,1,.32,1);-o-transition:all.4s cubic-bezier(.23,1,.32,1);transition:all.4s cubic-bezier(.23,1,.32,1)}.cosmic-card:hover .cosmic-card-inner{-webkit-transform:translatey(-8px)scale(1.02);-moz-transform:translatey(-8px)scale(1.02);-ms-transform:translatey(-8px)scale(1.02);-o-transform:translatey(-8px)scale(1.02);transform:translatey(-8px)scale(1.02)}.cosmic-glow{position:absolute;inset:-2px;-webkit-border-radius:22px;-moz-border-radius:22px;border-radius:22px;background:-webkit-linear-gradient(315deg,#9370db,#ff69b4,#40e0d0,#32cd32);background:-moz-linear-gradient(315deg,#9370db,#ff69b4,#40e0d0,#32cd32);background:-o-linear-gradient(315deg,#9370db,#ff69b4,#40e0d0,#32cd32);background:linear-gradient(135deg,#9370db,#ff69b4,#40e0d0,#32cd32);-webkit-background-size:400%400%;-moz-background-size:400%400%;-o-background-size:400%400%;background-size:400%400%;-webkit-animation:cosmic-glow 3s ease infinite;-moz-animation:cosmic-glow 3s ease infinite;-o-animation:cosmic-glow 3s ease infinite;animation:cosmic-glow 3s ease infinite;opacity:0;-webkit-transition:opacity.3s ease;-moz-transition:opacity.3s ease;-o-transition:opacity.3s ease;transition:opacity.3s ease;z-index:-1}.cosmic-card:hover .cosmic-glow{opacity:.6}@-webkit-keyframes cosmic-glow{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@-moz-keyframes cosmic-glow{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@-o-keyframes cosmic-glow{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@keyframes cosmic-glow{0%,100%{background-position:0%50%}50%{background-position:100%50%}}.cosmic-border{position:absolute;inset:0;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;border:1px solid rgba(147,112,219,.3);background:-webkit-linear-gradient(315deg,rgba(147,112,219,.1),rgba(255,105,180,.1));background:-moz-linear-gradient(315deg,rgba(147,112,219,.1),rgba(255,105,180,.1));background:-o-linear-gradient(315deg,rgba(147,112,219,.1),rgba(255,105,180,.1));background:linear-gradient(135deg,rgba(147,112,219,.1),rgba(255,105,180,.1));-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.image-container{position:relative;aspect-ratio:var(--aspect-ratio,1);overflow:hidden;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px}.cosmic-image{-o-object-fit:cover;object-fit:cover;-webkit-transition:-webkit-transform.4s cubic-bezier(.23,1,.32,1);-moz-transition:-moz-transform.4s cubic-bezier(.23,1,.32,1);-o-transition:-o-transform.4s cubic-bezier(.23,1,.32,1);transition:-webkit-transform.4s cubic-bezier(.23,1,.32,1);transition:-moz-transform.4s cubic-bezier(.23,1,.32,1);transition:-o-transform.4s cubic-bezier(.23,1,.32,1);transition:transform.4s cubic-bezier(.23,1,.32,1)}.cosmic-card:hover .cosmic-image{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}.cosmic-overlay{position:absolute;inset:0;background:-webkit-linear-gradient(315deg,rgba(147,112,219,.4),rgba(255,105,180,.4));background:-moz-linear-gradient(315deg,rgba(147,112,219,.4),rgba(255,105,180,.4));background:-o-linear-gradient(315deg,rgba(147,112,219,.4),rgba(255,105,180,.4));background:linear-gradient(135deg,rgba(147,112,219,.4),rgba(255,105,180,.4));display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;opacity:0;-webkit-transition:all.3s cubic-bezier(.23,1,.32,1);-moz-transition:all.3s cubic-bezier(.23,1,.32,1);-o-transition:all.3s cubic-bezier(.23,1,.32,1);transition:all.3s cubic-bezier(.23,1,.32,1);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.cosmic-overlay.visible{opacity:1}.overlay-content{text-align:center;color:white;-webkit-transform:translatey(20px);-moz-transform:translatey(20px);-ms-transform:translatey(20px);-o-transform:translatey(20px);transform:translatey(20px);-webkit-transition:-webkit-transform.3s cubic-bezier(.23,1,.32,1);-moz-transition:-moz-transform.3s cubic-bezier(.23,1,.32,1);-o-transition:-o-transform.3s cubic-bezier(.23,1,.32,1);transition:-webkit-transform.3s cubic-bezier(.23,1,.32,1);transition:-moz-transform.3s cubic-bezier(.23,1,.32,1);transition:-o-transform.3s cubic-bezier(.23,1,.32,1);transition:transform.3s cubic-bezier(.23,1,.32,1)}.cosmic-overlay.visible .overlay-content{-webkit-transform:translatey(0);-moz-transform:translatey(0);-ms-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}.view-icon{font-size:2.5em;margin-bottom:8px;-webkit-filter:drop-shadow(0 0 10px rgba(255,255,255,.5));filter:drop-shadow(0 0 10px rgba(255,255,255,.5))}.view-text{font-weight:700;font-size:1.1em;letter-spacing:2px;text-shadow:0 0 10px rgba(255,255,255,.5)}.cosmic-video-badge{position:absolute;top:12px;right:12px;background:-webkit-linear-gradient(315deg,#1a0b3d,#4a0d67);background:-moz-linear-gradient(315deg,#1a0b3d,#4a0d67);background:-o-linear-gradient(315deg,#1a0b3d,#4a0d67);background:linear-gradient(135deg,#1a0b3d,#4a0d67);color:white;padding:6px 12px;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;font-size:.8em;font-weight:700;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:4px;-webkit-box-shadow:0 4px 15px rgba(74,13,103,.4);-moz-box-shadow:0 4px 15px rgba(74,13,103,.4);box-shadow:0 4px 15px rgba(74,13,103,.4);border:1px solid rgba(147,112,219,.3);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);z-index:2}.video-icon{font-size:.9em;-webkit-filter:drop-shadow(0 0 5px currentColor);filter:drop-shadow(0 0 5px currentColor)}.cosmic-duration-badge{position:absolute;bottom:12px;left:12px;background:rgba(0,0,0,.8);color:white;padding:4px 10px;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;font-size:.8em;font-weight:600;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.2);z-index:2}.cosmic-lightbox-overlay{position:fixed;inset:0;background:rgba(0,0,0,.95);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:50;padding:20px;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);-webkit-animation:lightbox-fade-in.3s ease;-moz-animation:lightbox-fade-in.3s ease;-o-animation:lightbox-fade-in.3s ease;animation:lightbox-fade-in.3s ease}@-webkit-keyframes lightbox-fade-in{from{opacity:0}to{opacity:1}}@-moz-keyframes lightbox-fade-in{from{opacity:0}to{opacity:1}}@-o-keyframes lightbox-fade-in{from{opacity:0}to{opacity:1}}@keyframes lightbox-fade-in{from{opacity:0}to{opacity:1}}.cosmic-lightbox-container{position:relative;width:100%;height:100%;max-width:90vw;max-height:90vh;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background:rgba(15,5,25,.8);-webkit-border-radius:24px;-moz-border-radius:24px;border-radius:24px;overflow:hidden;border:2px solid rgba(147,112,219,.3);-webkit-animation:lightbox-scale-in.4s cubic-bezier(.23,1,.32,1);-moz-animation:lightbox-scale-in.4s cubic-bezier(.23,1,.32,1);-o-animation:lightbox-scale-in.4s cubic-bezier(.23,1,.32,1);animation:lightbox-scale-in.4s cubic-bezier(.23,1,.32,1)}@-webkit-keyframes lightbox-scale-in{from{-webkit-transform:scale(.8)translatey(50px);transform:scale(.8)translatey(50px);opacity:0}to{-webkit-transform:scale(1)translatey(0);transform:scale(1)translatey(0);opacity:1}}@-moz-keyframes lightbox-scale-in{from{-moz-transform:scale(.8)translatey(50px);transform:scale(.8)translatey(50px);opacity:0}to{-moz-transform:scale(1)translatey(0);transform:scale(1)translatey(0);opacity:1}}@-o-keyframes lightbox-scale-in{from{-o-transform:scale(.8)translatey(50px);transform:scale(.8)translatey(50px);opacity:0}to{-o-transform:scale(1)translatey(0);transform:scale(1)translatey(0);opacity:1}}@keyframes lightbox-scale-in{from{-webkit-transform:scale(.8)translatey(50px);-moz-transform:scale(.8)translatey(50px);-o-transform:scale(.8)translatey(50px);transform:scale(.8)translatey(50px);opacity:0}to{-webkit-transform:scale(1)translatey(0);-moz-transform:scale(1)translatey(0);-o-transform:scale(1)translatey(0);transform:scale(1)translatey(0);opacity:1}}.lightbox-glow{position:absolute;inset:-4px;background:-webkit-linear-gradient(315deg,#9370db,#ff69b4,#40e0d0);background:-moz-linear-gradient(315deg,#9370db,#ff69b4,#40e0d0);background:-o-linear-gradient(315deg,#9370db,#ff69b4,#40e0d0);background:linear-gradient(135deg,#9370db,#ff69b4,#40e0d0);-webkit-background-size:400%400%;-moz-background-size:400%400%;-o-background-size:400%400%;background-size:400%400%;-webkit-animation:cosmic-glow 3s ease infinite;-moz-animation:cosmic-glow 3s ease infinite;-o-animation:cosmic-glow 3s ease infinite;animation:cosmic-glow 3s ease infinite;-webkit-border-radius:28px;-moz-border-radius:28px;border-radius:28px;z-index:-1;opacity:.4}.cosmic-close-btn{position:absolute;top:20px;right:20px;width:44px;height:44px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:rgba(255,107,107,.9);border:2px solid rgba(255,255,255,.2);color:white;font-size:1.2em;font-weight:bold;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all.3s ease;-moz-transition:all.3s ease;-o-transition:all.3s ease;transition:all.3s ease;z-index:10;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.cosmic-close-btn:hover{background:rgba(255,107,107,1);-webkit-transform:scale(1.1)rotate(90deg);-moz-transform:scale(1.1)rotate(90deg);-ms-transform:scale(1.1)rotate(90deg);-o-transform:scale(1.1)rotate(90deg);transform:scale(1.1)rotate(90deg);-webkit-box-shadow:0 0 20px rgba(255,107,107,.5);-moz-box-shadow:0 0 20px rgba(255,107,107,.5);box-shadow:0 0 20px rgba(255,107,107,.5)}.cosmic-media-container{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;position:relative;margin:20px;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;overflow:hidden;background:rgba(0,0,0,.3);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.cosmic-media{-o-object-fit:contain;object-fit:contain;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;max-width:100%;max-height:100%;width:auto;height:auto}.cosmic-nav-controls{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:20px 24px;background:rgba(15,5,25,.9);border-top:1px solid rgba(147,112,219,.2);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}.cosmic-nav-btn,.cosmic-download-btn{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;padding:12px 20px;-webkit-border-radius:50px;-moz-border-radius:50px;border-radius:50px;font-weight:600;cursor:pointer;-webkit-transition:all.3s cubic-bezier(.23,1,.32,1);-moz-transition:all.3s cubic-bezier(.23,1,.32,1);-o-transition:all.3s cubic-bezier(.23,1,.32,1);transition:all.3s cubic-bezier(.23,1,.32,1);border:2px solid transparent;text-decoration:none}.cosmic-nav-btn{background:-webkit-linear-gradient(315deg,#9370db,#8a2be2);background:-moz-linear-gradient(315deg,#9370db,#8a2be2);background:-o-linear-gradient(315deg,#9370db,#8a2be2);background:linear-gradient(135deg,#9370db,#8a2be2);color:white}.cosmic-download-btn{background:-webkit-linear-gradient(315deg,#32cd32,#00ff7f);background:-moz-linear-gradient(315deg,#32cd32,#00ff7f);background:-o-linear-gradient(315deg,#32cd32,#00ff7f);background:linear-gradient(135deg,#32cd32,#00ff7f);color:white}.cosmic-nav-btn:hover,.cosmic-download-btn:hover{-webkit-transform:translatey(-2px)scale(1.05);-moz-transform:translatey(-2px)scale(1.05);-ms-transform:translatey(-2px)scale(1.05);-o-transform:translatey(-2px)scale(1.05);transform:translatey(-2px)scale(1.05);border-color:rgba(255,255,255,.3);-webkit-box-shadow:0 8px 25px rgba(0,0,0,.3);-moz-box-shadow:0 8px 25px rgba(0,0,0,.3);box-shadow:0 8px 25px rgba(0,0,0,.3)}.nav-icon,.download-icon{font-size:1.1em;-webkit-filter:drop-shadow(0 0 5px currentColor);filter:drop-shadow(0 0 5px currentColor)}.nav-text,.download-text{font-size:.9em;letter-spacing:.5px}@media(max-width:640px){.cosmic-lightbox-container{max-width:95vw;max-height:95vh;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px}.cosmic-nav-controls{padding:16px}.cosmic-nav-btn,.cosmic-download-btn{padding:10px 16px;font-size:.9em}.nav-text,.download-text{display:none}.cosmic-close-btn{width:38px;height:38px;top:16px;right:16px;font-size:1em}.masonry-grid{-webkit-column-gap:12px;-moz-column-gap:12px;column-gap:12px}.cosmic-card{margin-bottom:12px}}.cosmic-card,.cosmic-image{will-change:transform}.cosmic-glow,.cosmic-particles{will-change:opacity,transform}@media(prefers-reduced-motion:reduce){.cosmic-card{-webkit-transition-duration:.1s;-moz-transition-duration:.1s;-o-transition-duration:.1s;transition-duration:.1s}.cosmic-particles{-webkit-animation:none;-moz-animation:none;-o-animation:none;animation:none}.cosmic-glow{-webkit-animation:none;-moz-animation:none;-o-animation:none;animation:none}}",
              }),
            ],
          })
        );
      }
      let g = () =>
          (0, r.jsx)("div", {
            className: "absolute inset-x-0 bottom-0 w-full h-auto",
            children: (0, r.jsx)(b.default, {
              src: "/images/gallery/gallery_background.webp",
              alt: "Gallery Background",
              width: 1920,
              height: 2368,
              className:
                "w-full h-auto object-cover object-bottom origin-bottom scale-150 md:scale-100",
              priority: !0,
            }),
          }),
        f = () =>
          (0, r.jsx)("div", {
            className:
              "animate-tic-appear absolute bottom-[-4vh] lg:bottom-[-8vh] xl:bottom-[-8vh] left-1/2 -translate-x-1/2 w-[50%] sm:w-[45%] md:w-[40%] lg:w-[35%] xl:w-[30%] 2xl:w-[25%] max-w-[600px] z-20",
            children: (0, r.jsx)(b.default, {
              src: "/images/gallery/TIC_gallery.webp",
              alt: "Tree in Cat Gallery",
              width: 800,
              height: 600,
              className: "w-full h-auto",
            }),
          }),
        u = () =>
          (0, r.jsxs)("div", {
            className: "absolute bottom-0 w-full z-30",
            children: [
              (0, r.jsx)(b.default, {
                src: "/images/gallery/grass_sm.webp",
                alt: "Grass decoration",
                width: 375,
                height: 100,
                className: "w-full h-auto lg:hidden",
              }),
              (0, r.jsx)(b.default, {
                src: "/images/gallery/grass.webp",
                alt: "Grass decoration",
                width: 1920,
                height: 200,
                className: "hidden lg:block w-full h-auto",
              }),
            ],
          }),
        k = () =>
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)("div", {
                className:
                  "absolute top-[30%] lg:top-[30%] xl:top-[25%] 2xl:top-[15%] right-[8%] w-[8vw] lg:w-[10vw] min-w-[60px] max-w-[120px] xl:max-w-[250px] rounded-full overflow-visible",
                style: { animation: "spin 9s linear infinite" },
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "absolute inset-0 rounded-full animate-glow-pulse",
                    style: {
                      boxShadow: "0 0 50px rgba(0, 255, 0, 0.6)",
                      filter: "brightness(1)",
                    },
                  }),
                  (0, r.jsx)(b.default, {
                    src: "/images/gallery/planet_1.webp",
                    alt: "Planet decoration",
                    width: 600,
                    height: 600,
                    className: "w-full h-auto relative z-10",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className:
                  "absolute top-[20%] right-[30%] w-[10vw] lg:w-[12vw] max-w-[200px] rounded-full overflow-visible",
                style: { animation: "spin 8s linear infinite" },
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "absolute inset-0 rounded-full animate-glow-pulse",
                    style: {
                      boxShadow: "0 0 50px rgba(0, 100, 255, 0.6)",
                      filter: "brightness(1)",
                    },
                  }),
                  (0, r.jsx)(b.default, {
                    src: "/images/gallery/planet_2.webp",
                    alt: "Planet decoration",
                    width: 600,
                    height: 600,
                    className: "w-full h-auto relative z-10",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className:
                  "absolute bottom-[70%] left-[30%] w-[12vw] lg:w-[13vw] max-w-[200px] rounded-full overflow-visible",
                style: { animation: "spin 5s linear infinite" },
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "absolute inset-0 rounded-full animate-glow-pulse",
                    style: {
                      boxShadow: "0 0 50px rgba(128, 0, 128, 0.6)",
                      filter: "brightness(1)",
                    },
                  }),
                  (0, r.jsx)(b.default, {
                    src: "/images/gallery/planet_3.webp",
                    alt: "Planet decoration",
                    width: 600,
                    height: 600,
                    className: "w-full h-auto relative z-10",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className:
                  "absolute top-[15%] right-[75%] lg:right-[80%] w-[12vw] lg:w-[8vw] max-w-[200px] rounded-full overflow-visible",
                style: { animation: "spin 7s linear infinite" },
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "absolute inset-0 rounded-full animate-glow-pulse",
                    style: {
                      boxShadow: "0 0 50px rgba(165, 42, 42, 0.6)",
                      filter: "brightness(1)",
                    },
                  }),
                  (0, r.jsx)(b.default, {
                    src: "/images/gallery/planet_4.webp",
                    alt: "Planet decoration",
                    width: 600,
                    height: 600,
                    className: "w-full h-auto relative z-10",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className:
                  "absolute bottom-[30%] sm:bottom-[40%] right-[55%] sm:right-[70%] w-[13vw] lg:w-[10vw] max-w-[200px] rounded-full overflow-visible",
                style: { animation: "spin 7s linear infinite" },
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "absolute inset-0 rounded-full animate-glow-pulse",
                    style: {
                      boxShadow: "0 0 50px rgba(255, 215, 0, 0.6)",
                      filter: "brightness(1)",
                    },
                  }),
                  (0, r.jsx)(b.default, {
                    src: "/images/gallery/planet_5.webp",
                    alt: "Planet decoration",
                    width: 600,
                    height: 600,
                    className: "w-full h-auto relative z-10",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className:
                  "absolute top-[45%] left-[50%] w-[20vw] max-w-[90px] rounded-full overflow-visible",
                style: { animation: "spin 9s linear infinite" },
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "absolute inset-0 rounded-full animate-glow-pulse",
                    style: {
                      boxShadow: "0 0 50px rgba(0, 255, 255, 0.6)",
                      filter: "brightness(1)",
                    },
                  }),
                  (0, r.jsx)(b.default, {
                    src: "/images/gallery/planet_6.webp",
                    alt: "Planet decoration",
                    width: 600,
                    height: 600,
                    className: "w-full h-auto relative z-10",
                  }),
                ],
              }),
            ],
          }),
        w = () => (
          (0, c.useEffect)(() => {
            let a = document.querySelector(".star-container");
            if (!a) return;
            let e = setInterval(() => {
              let e = document.createElement("div");
              e.className = "falling-star";
              let t = [
                  "rgb(127, 183, 252)",
                  "rgb(131, 238, 110)",
                  "rgb(255, 198, 228)",
                  "rgb(162, 204, 255)",
                  "rgb(102, 253, 127)",
                ],
                r = 100 * Math.random(),
                n = 60 * Math.random() + 60,
                i = 2 * Math.random() + 3,
                o = 2 * Math.random() + 2,
                s = t[Math.floor(Math.random() * t.length)];
              (e.style.cssText = "\n        left: "
                .concat(r, "%;\n        top: ")
                .concat(-10, "%;\n        --angle: ")
                .concat(n, "deg;\n        --star-color: ")
                .concat(s, ";\n        width: ")
                .concat(o, "px;\n        height: ")
                .concat(o, "px;\n        animation-duration: ")
                .concat(
                  i,
                  "s;\n        filter: \n          drop-shadow(0 0 8px "
                )
                .concat(s, ")\n          drop-shadow(0 0 4px ")
                .concat(s, ");\n      ")),
                a.appendChild(e),
                setTimeout(() => e.remove(), 1e3 * i);
            }, 1e3);
            return () => clearInterval(e);
          }, []),
          (0, r.jsx)("div", {
            className:
              "star-container absolute inset-0 z-[5] pointer-events-none",
          })
        ),
        h = () => {
          let { isInTelegram: a } = (0, n.j)();
          return (0, r.jsxs)("section", {
            className:
              "relative bg-black h-screen max-h-[650px] sm:max-h-[750px] md:max-h-[750px] lg:max-h-[850px] xl:max-screen 2xl:max-h-screen w-full overflow-hidden",
            children: [
              (0, r.jsx)(g, {}),
              (0, r.jsx)(w, {}),
              (0, r.jsx)(f, {}),
              (0, r.jsx)(u, {}),
              (0, r.jsx)(k, {}),
              (0, r.jsx)("div", {
                className:
                  "absolute inset-0 flex items-center justify-center ".concat(
                    a ? "" : "pt-[15vh]",
                    " z-10"
                  ),
                children: (0, r.jsxs)("h1", {
                  className:
                    "text-5xl md:text-8xl lg:text-10xl xl:text-[10rem] font-super-sense text-center relative ".concat(
                      a ? "top-[-25vh]" : "top-[-15vh]",
                      " sm:top-[-25vh]"
                    ),
                  children: [
                    (0, r.jsx)("span", {
                      className:
                        "absolute inset-0 [-webkit-text-stroke:20px_#000] [text-stroke:20px_#000] text-transparent",
                      children: "GALLERY",
                    }),
                    (0, r.jsxs)("span", {
                      className:
                        "animate-gradient-flow bg-clip-text text-transparent relative",
                      children: ["GALLERY", (0, r.jsx)(y, {})],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        y = () =>
          (0, r.jsx)(l(), {
            id: "344b4f2e50e93861",
            children:
              '@-webkit-keyframes gradient-flow{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-moz-keyframes gradient-flow{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-o-keyframes gradient-flow{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@keyframes gradient-flow{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-webkit-keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spin{from{-moz-transform:rotate(0deg);transform:rotate(0deg)}to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes spin{from{-o-transform:rotate(0deg);transform:rotate(0deg)}to{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes tic-appear{0%{-webkit-filter:blur(8px);filter:blur(8px);-webkit-transform:translatey(5vh)translatex(-50%)scale(.8);transform:translatey(5vh)translatex(-50%)scale(.8);opacity:0}100%{-webkit-filter:blur(0px);filter:blur(0px);-webkit-transform:translatey(0)translatex(-50%)scale(1);transform:translatey(0)translatex(-50%)scale(1);opacity:1}}@-moz-keyframes tic-appear{0%{filter:blur(8px);-moz-transform:translatey(5vh)translatex(-50%)scale(.8);transform:translatey(5vh)translatex(-50%)scale(.8);opacity:0}100%{filter:blur(0px);-moz-transform:translatey(0)translatex(-50%)scale(1);transform:translatey(0)translatex(-50%)scale(1);opacity:1}}@-o-keyframes tic-appear{0%{filter:blur(8px);-o-transform:translatey(5vh)translatex(-50%)scale(.8);transform:translatey(5vh)translatex(-50%)scale(.8);opacity:0}100%{filter:blur(0px);-o-transform:translatey(0)translatex(-50%)scale(1);transform:translatey(0)translatex(-50%)scale(1);opacity:1}}@keyframes tic-appear{0%{-webkit-filter:blur(8px);filter:blur(8px);-webkit-transform:translatey(5vh)translatex(-50%)scale(.8);-moz-transform:translatey(5vh)translatex(-50%)scale(.8);-o-transform:translatey(5vh)translatex(-50%)scale(.8);transform:translatey(5vh)translatex(-50%)scale(.8);opacity:0}100%{-webkit-filter:blur(0px);filter:blur(0px);-webkit-transform:translatey(0)translatex(-50%)scale(1);-moz-transform:translatey(0)translatex(-50%)scale(1);-o-transform:translatey(0)translatex(-50%)scale(1);transform:translatey(0)translatex(-50%)scale(1);opacity:1}}.animate-gradient-flow{background-image:-webkit-linear-gradient(left,rgb(127,183,252),rgb(131,238,110),rgb(255,198,228),rgb(102,253,127),rgb(162,204,255));background-image:-moz-linear-gradient(left,rgb(127,183,252),rgb(131,238,110),rgb(255,198,228),rgb(102,253,127),rgb(162,204,255));background-image:-o-linear-gradient(left,rgb(127,183,252),rgb(131,238,110),rgb(255,198,228),rgb(102,253,127),rgb(162,204,255));background-image:linear-gradient(to right,rgb(127,183,252),rgb(131,238,110),rgb(255,198,228),rgb(102,253,127),rgb(162,204,255));-webkit-background-size:200%200%;-moz-background-size:200%200%;-o-background-size:200%200%;background-size:200%200%;-webkit-animation:gradient-flow 4s linear infinite;-moz-animation:gradient-flow 4s linear infinite;-o-animation:gradient-flow 4s linear infinite;animation:gradient-flow 4s linear infinite;-webkit-background-clip:text;background-clip:text;display:inline-block}.animate-tic-appear{-webkit-animation:tic-appear 2.5s ease-out forwards;-moz-animation:tic-appear 2.5s ease-out forwards;-o-animation:tic-appear 2.5s ease-out forwards;animation:tic-appear 2.5s ease-out forwards;-webkit-transform:translatex(-50%);-moz-transform:translatex(-50%);-ms-transform:translatex(-50%);-o-transform:translatex(-50%);transform:translatex(-50%)}.falling-star{position:absolute;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-animation:star-fall linear infinite;-moz-animation:star-fall linear infinite;-o-animation:star-fall linear infinite;animation:star-fall linear infinite;will-change:transform;background:transparent}.falling-star::before{content:"";position:absolute;width:200px;height:3px;background:-webkit-radial-gradient(right center,circle,var(--star-color)0%,transparent 80%),-webkit-linear-gradient(right,transparent,var(--star-color)30%,rgba(255,255,255,.3)50%,transparent 100%);background:-moz-radial-gradient(right center,circle,var(--star-color)0%,transparent 80%),-moz-linear-gradient(right,transparent,var(--star-color)30%,rgba(255,255,255,.3)50%,transparent 100%);background:-o-radial-gradient(right center,circle,var(--star-color)0%,transparent 80%),-o-linear-gradient(right,transparent,var(--star-color)30%,rgba(255,255,255,.3)50%,transparent 100%);background:radial-gradient(circle at right center,var(--star-color)0%,transparent 80%),linear-gradient(to left,transparent,var(--star-color)30%,rgba(255,255,255,.3)50%,transparent 100%);-webkit-transform-origin:right center;-moz-transform-origin:right center;-ms-transform-origin:right center;-o-transform-origin:right center;transform-origin:right center;-webkit-transform:rotate(var(--angle));-moz-transform:rotate(var(--angle));-ms-transform:rotate(var(--angle));-o-transform:rotate(var(--angle));transform:rotate(var(--angle));opacity:0;-webkit-animation:trail 2s ease-out;-moz-animation:trail 2s ease-out;-o-animation:trail 2s ease-out;animation:trail 2s ease-out;-webkit-filter:blur(2px);filter:blur(2px)}@-webkit-keyframes trail{0%{opacity:0;-webkit-transform:rotate(var(--angle))scalex(0)translatey(0);transform:rotate(var(--angle))scalex(0)translatey(0)}20%{opacity:1;-webkit-transform:rotate(var(--angle))scalex(1)translatey(-1px);transform:rotate(var(--angle))scalex(1)translatey(-1px);-webkit-filter:brightness(1.5);filter:brightness(1.5)}100%{opacity:0;-webkit-transform:rotate(var(--angle))scalex(.5)translatex(-150px)translatey(1px);transform:rotate(var(--angle))scalex(.5)translatex(-150px)translatey(1px);-webkit-filter:brightness(.5);filter:brightness(.5)}}@-moz-keyframes trail{0%{opacity:0;-moz-transform:rotate(var(--angle))scalex(0)translatey(0);transform:rotate(var(--angle))scalex(0)translatey(0)}20%{opacity:1;-moz-transform:rotate(var(--angle))scalex(1)translatey(-1px);transform:rotate(var(--angle))scalex(1)translatey(-1px);filter:brightness(1.5)}100%{opacity:0;-moz-transform:rotate(var(--angle))scalex(.5)translatex(-150px)translatey(1px);transform:rotate(var(--angle))scalex(.5)translatex(-150px)translatey(1px);filter:brightness(.5)}}@-o-keyframes trail{0%{opacity:0;-o-transform:rotate(var(--angle))scalex(0)translatey(0);transform:rotate(var(--angle))scalex(0)translatey(0)}20%{opacity:1;-o-transform:rotate(var(--angle))scalex(1)translatey(-1px);transform:rotate(var(--angle))scalex(1)translatey(-1px);filter:brightness(1.5)}100%{opacity:0;-o-transform:rotate(var(--angle))scalex(.5)translatex(-150px)translatey(1px);transform:rotate(var(--angle))scalex(.5)translatex(-150px)translatey(1px);filter:brightness(.5)}}@keyframes trail{0%{opacity:0;-webkit-transform:rotate(var(--angle))scalex(0)translatey(0);-moz-transform:rotate(var(--angle))scalex(0)translatey(0);-o-transform:rotate(var(--angle))scalex(0)translatey(0);transform:rotate(var(--angle))scalex(0)translatey(0)}20%{opacity:1;-webkit-transform:rotate(var(--angle))scalex(1)translatey(-1px);-moz-transform:rotate(var(--angle))scalex(1)translatey(-1px);-o-transform:rotate(var(--angle))scalex(1)translatey(-1px);transform:rotate(var(--angle))scalex(1)translatey(-1px);-webkit-filter:brightness(1.5);filter:brightness(1.5)}100%{opacity:0;-webkit-transform:rotate(var(--angle))scalex(.5)translatex(-150px)translatey(1px);-moz-transform:rotate(var(--angle))scalex(.5)translatex(-150px)translatey(1px);-o-transform:rotate(var(--angle))scalex(.5)translatex(-150px)translatey(1px);transform:rotate(var(--angle))scalex(.5)translatex(-150px)translatey(1px);-webkit-filter:brightness(.5);filter:brightness(.5)}}@-webkit-keyframes star-fall{0%{-webkit-transform:translatey(-10vh)scale(.8);transform:translatey(-10vh)scale(.8)}50%{-webkit-transform:translatey(55vh)scale(1);transform:translatey(55vh)scale(1)}100%{-webkit-transform:translatey(110vh)scale(.6);transform:translatey(110vh)scale(.6)}}@-moz-keyframes star-fall{0%{-moz-transform:translatey(-10vh)scale(.8);transform:translatey(-10vh)scale(.8)}50%{-moz-transform:translatey(55vh)scale(1);transform:translatey(55vh)scale(1)}100%{-moz-transform:translatey(110vh)scale(.6);transform:translatey(110vh)scale(.6)}}@-o-keyframes star-fall{0%{-o-transform:translatey(-10vh)scale(.8);transform:translatey(-10vh)scale(.8)}50%{-o-transform:translatey(55vh)scale(1);transform:translatey(55vh)scale(1)}100%{-o-transform:translatey(110vh)scale(.6);transform:translatey(110vh)scale(.6)}}@keyframes star-fall{0%{-webkit-transform:translatey(-10vh)scale(.8);-moz-transform:translatey(-10vh)scale(.8);-o-transform:translatey(-10vh)scale(.8);transform:translatey(-10vh)scale(.8)}50%{-webkit-transform:translatey(55vh)scale(1);-moz-transform:translatey(55vh)scale(1);-o-transform:translatey(55vh)scale(1);transform:translatey(55vh)scale(1)}100%{-webkit-transform:translatey(110vh)scale(.6);-moz-transform:translatey(110vh)scale(.6);-o-transform:translatey(110vh)scale(.6);transform:translatey(110vh)scale(.6)}}@media(max-width:768px){.falling-star{-webkit-animation-duration:6s!important;-moz-animation-duration:6s!important;-o-animation-duration:6s!important;animation-duration:6s!important}.falling-star::before{-webkit-animation-duration:4s;-moz-animation-duration:4s;-o-animation-duration:4s;animation-duration:4s;width:150px}}',
          });
      var v = t(104);
      function z() {
        let { isInTelegram: a } = (0, n.j)();
        return (0, r.jsxs)(r.Fragment, {
          children: [
            !a && (0, r.jsx)(i.F, {}),
            !a && (0, r.jsx)(o.c, {}),
            (0, r.jsx)(h, {}),
            (0, r.jsx)(c.Suspense, {
              fallback: (0, r.jsx)("div", {
                className: "flex justify-center items-center h-screen",
                children: "Loading...",
              }),
              children: (0, r.jsx)(p, {}),
            }),
            !a && (0, r.jsx)(v.w, {}),
          ],
        });
      }
    },
    6222: (a, e, t) => {
      "use strict";
      t.d(e, { F: () => c });
      var r = t(5155),
        n = t(8803),
        i = t.n(n),
        o = t(5565),
        s = t(8173),
        l = t.n(s);
      function c() {
        return (0, r.jsx)("nav", {
          className:
            "absolute top-10 left-1/2 -translate-x-1/2 z-50 hidden lg:block",
          children: (0, r.jsxs)("div", {
            className:
              "jsx-5e26d6772e572ff4 relative px-10 py-3 nav-border w-[75vw] md:w-[45vw] lg:w-[75vw] xl:w-[65vw] max-w-[900px] min-w-[600px]",
            children: [
              (0, r.jsx)("div", {
                className:
                  "jsx-5e26d6772e572ff4 absolute inset-0 rounded-[30px] bg-white",
              }),
              (0, r.jsx)("div", {
                className:
                  "jsx-5e26d6772e572ff4 absolute inset-0 unique-navbar-bg pointer-events-none rounded-[30px]",
              }),
              (0, r.jsxs)("div", {
                className:
                  "jsx-5e26d6772e572ff4 relative z-10 flex items-center justify-between gap-8",
                children: [
                  (0, r.jsxs)("div", {
                    className: "jsx-5e26d6772e572ff4 flex items-center gap-8",
                    children: [
                      (0, r.jsx)(l(), {
                        href: "/",
                        className:
                          "text-[#2C1810] font-varela text-xl tracking-wide relative nav-link font-bold",
                        children: "HOME",
                      }),
                      (0, r.jsx)(l(), {
                        href: "/games",
                        className:
                          "text-[#2C1810] font-varela text-xl tracking-wide relative nav-link font-bold",
                        children: "GAMES",
                      }),
                      // (0, r.jsx)(l(), {
                      //   href: "/gallery",
                      //   className:
                      //     "text-[#2C1810] font-varela text-xl tracking-wide relative nav-link font-bold",
                      //   children: "GALLERY",
                      // }),
                      (0, r.jsx)(l(), {
                        href: "/pfpbuilder",
                        className:
                          "text-[#2C1810] font-varela text-xl tracking-wide relative nav-link font-bold",
                        children: "PFP BUILDER",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "jsx-5e26d6772e572ff4 flex items-center gap-4",
                    children: [
                      (0, r.jsx)("a", {
                        href: "https://x.com/TreeStuckInCat",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "jsx-5e26d6772e572ff4 cursor-pointer transform transition-transform hover:scale-110 w-[30px] h-[30px] flex items-center justify-center",
                        children: (0, r.jsx)(o.default, {
                          src: "/images/navbar/x_logo.webp",
                          alt: "X (Twitter)",
                          width: 30,
                          height: 30,
                          className: "hover:opacity-80 transition-opacity",
                        }),
                      }),
                      (0, r.jsx)("a", {
                        href: "https://t.me/TreeInCat",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "jsx-5e26d6772e572ff4 cursor-pointer transform transition-transform hover:scale-110 w-[30px] h-[30px] flex items-center justify-center",
                        children: (0, r.jsx)(o.default, {
                          src: "/images/navbar/tg_logo.webp",
                          alt: "Telegram",
                          width: 30,
                          height: 30,
                          className: "hover:opacity-80 transition-opacity",
                        }),
                      }),
                      (0, r.jsx)("a", {
                        href: "https://dexscreener.com/ethereum/0xTBA",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "jsx-5e26d6772e572ff4 cursor-pointer transform transition-transform hover:scale-110 w-[30px] h-[30px] flex items-center justify-center",
                        children: (0, r.jsx)(o.default, {
                          src: "/images/navbar/dex_logo.webp",
                          alt: "DEX",
                          width: 30,
                          height: 30,
                          className: "hover:opacity-80 transition-opacity",
                        }),
                      }),
                      // (0, r.jsx)("a", {
                      //   href: "https://coinmarketcap.com/currencies/tree-stuck-in-cat/",
                      //   target: "_blank",
                      //   rel: "noopener noreferrer",
                      //   className:
                      //     "jsx-5e26d6772e572ff4 cursor-pointer transform transition-transform hover:scale-110 w-[30px] h-[30px] flex items-center justify-center",
                      //   children: (0, r.jsx)(o.default, {
                      //     src: "/images/navbar/cmc_logo.webp",
                      //     alt: "CoinMarketCap",
                      //     width: 30,
                      //     height: 30,
                      //     className: "hover:opacity-80 transition-opacity",
                      //   }),
                      // }),
                      // (0, r.jsx)("a", {
                      //   href: "https://www.coingecko.com/en/coins/tree-stuck-in-cat",
                      //   target: "_blank",
                      //   rel: "noopener noreferrer",
                      //   className:
                      //     "jsx-5e26d6772e572ff4 cursor-pointer transform transition-transform hover:scale-110 w-[30px] h-[30px] flex items-center justify-center",
                      //   children: (0, r.jsx)(o.default, {
                      //     src: "/images/navbar/cg_logo.webp",
                      //     alt: "CoinGecko",
                      //     width: 30,
                      //     height: 30,
                      //     className: "hover:opacity-80 transition-opacity",
                      //   }),
                      // }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(i(), {
                id: "5e26d6772e572ff4",
                children:
                  ".nav-border.jsx-5e26d6772e572ff4{position:relative;-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px;-webkit-box-shadow:0 4px 8px rgba(0,0,0,.55);-moz-box-shadow:0 4px 8px rgba(0,0,0,.55);box-shadow:0 4px 8px rgba(0,0,0,.55)}.nav-border.jsx-5e26d6772e572ff4::before{content:\"\";position:absolute;inset:-4px;-webkit-border-radius:34px;-moz-border-radius:34px;border-radius:34px;background:-webkit-linear-gradient(left,#000,#1a237e,#4a148c,#1e88e5,#000);background:-moz-linear-gradient(left,#000,#1a237e,#4a148c,#1e88e5,#000);background:-o-linear-gradient(left,#000,#1a237e,#4a148c,#1e88e5,#000);background:linear-gradient(90deg,#000,#1a237e,#4a148c,#1e88e5,#000);-webkit-background-size:200%100%;-moz-background-size:200%100%;-o-background-size:200%100%;background-size:200%100%;-webkit-animation:moveGradient 3s linear infinite;-moz-animation:moveGradient 3s linear infinite;-o-animation:moveGradient 3s linear infinite;animation:moveGradient 3s linear infinite;-webkit-mask:-webkit-linear-gradient(#fff 0 0)content-box,-webkit-linear-gradient(#fff 0 0);-webkit-mask:-moz-linear-gradient(#fff 0 0)content-box,-moz-linear-gradient(#fff 0 0);-webkit-mask:-o-linear-gradient(#fff 0 0)content-box,-o-linear-gradient(#fff 0 0);-webkit-mask:linear-gradient(#fff 0 0)content-box,linear-gradient(#fff 0 0);mask:-webkit-linear-gradient(#fff 0 0)content-box,-webkit-linear-gradient(#fff 0 0);mask:-moz-linear-gradient(#fff 0 0)content-box,-moz-linear-gradient(#fff 0 0);mask:-o-linear-gradient(#fff 0 0)content-box,-o-linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0)content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;padding:4px}@-webkit-keyframes moveGradient{0%{background-position:0%0%}100%{background-position:200%0%}}@-moz-keyframes moveGradient{0%{background-position:0%0%}100%{background-position:200%0%}}@-o-keyframes moveGradient{0%{background-position:0%0%}100%{background-position:200%0%}}@keyframes moveGradient{0%{background-position:0%0%}100%{background-position:200%0%}}.nav-link.jsx-5e26d6772e572ff4{color:#2c1810;-webkit-transition:all.3s ease;-moz-transition:all.3s ease;-o-transition:all.3s ease;transition:all.3s ease}.nav-link.jsx-5e26d6772e572ff4:hover{background:-webkit-linear-gradient(left,#4a90e2,#7b68ee,#9b59b6,#7b68ee,#4a90e2);background:-moz-linear-gradient(left,#4a90e2,#7b68ee,#9b59b6,#7b68ee,#4a90e2);background:-o-linear-gradient(left,#4a90e2,#7b68ee,#9b59b6,#7b68ee,#4a90e2);background:linear-gradient(90deg,#4a90e2,#7b68ee,#9b59b6,#7b68ee,#4a90e2);-webkit-background-size:200%auto;-moz-background-size:200%auto;-o-background-size:200%auto;background-size:200%auto;background-clip:text;-webkit-background-clip:text;color:transparent;-webkit-animation:gradientMove 3s linear infinite;-moz-animation:gradientMove 3s linear infinite;-o-animation:gradientMove 3s linear infinite;animation:gradientMove 3s linear infinite}@-webkit-keyframes gradientMove{0%{background-position:0%center}100%{background-position:200%center}}@-moz-keyframes gradientMove{0%{background-position:0%center}100%{background-position:200%center}}@-o-keyframes gradientMove{0%{background-position:0%center}100%{background-position:200%center}}@keyframes gradientMove{0%{background-position:0%center}100%{background-position:200%center}}.nav-link.jsx-5e26d6772e572ff4::after{content:\"\";position:absolute;left:0;bottom:-2px;width:100%;height:2px;background:#2c1810;-webkit-transform:scalex(0);-moz-transform:scalex(0);-ms-transform:scalex(0);-o-transform:scalex(0);transform:scalex(0);-webkit-transform-origin:right;-moz-transform-origin:right;-ms-transform-origin:right;-o-transform-origin:right;transform-origin:right;-webkit-transition:-webkit-transform.3s ease;-moz-transition:-moz-transform.3s ease;-o-transition:-o-transform.3s ease;transition:-webkit-transform.3s ease;transition:-moz-transform.3s ease;transition:-o-transform.3s ease;transition:transform.3s ease;-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg width='200' height='4' viewBox='0 0 200 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 2C50 2 50 3 100 3C150 3 150 1 200 1' stroke='black' stroke-width='1' vector-effect='non-scaling-stroke'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg width='200' height='4' viewBox='0 0 200 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 2C50 2 50 3 100 3C150 3 150 1 200 1' stroke='black' stroke-width='1' vector-effect='non-scaling-stroke'/%3E%3C/svg%3E\")}.nav-link.jsx-5e26d6772e572ff4:hover::after{-webkit-transform:scalex(1);-moz-transform:scalex(1);-ms-transform:scalex(1);-o-transform:scalex(1);transform:scalex(1);-webkit-transform-origin:left;-moz-transform-origin:left;-ms-transform-origin:left;-o-transform-origin:left;transform-origin:left}.unique-navbar-bg.jsx-5e26d6772e572ff4{background:-webkit-linear-gradient(315deg,rgba(173,216,230,.6),rgba(144,238,144,.6),rgba(255,182,193,.6),rgba(255,255,224,.6));background:-moz-linear-gradient(315deg,rgba(173,216,230,.6),rgba(144,238,144,.6),rgba(255,182,193,.6),rgba(255,255,224,.6));background:-o-linear-gradient(315deg,rgba(173,216,230,.6),rgba(144,238,144,.6),rgba(255,182,193,.6),rgba(255,255,224,.6));background:linear-gradient(135deg,rgba(173,216,230,.6),rgba(144,238,144,.6),rgba(255,182,193,.6),rgba(255,255,224,.6));-webkit-background-size:400%400%;-moz-background-size:400%400%;-o-background-size:400%400%;background-size:400%400%;-webkit-animation:navBgAnimation 15s ease infinite;-moz-animation:navBgAnimation 15s ease infinite;-o-animation:navBgAnimation 15s ease infinite;animation:navBgAnimation 15s ease infinite}@-webkit-keyframes navBgAnimation{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-moz-keyframes navBgAnimation{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-o-keyframes navBgAnimation{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@keyframes navBgAnimation{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}",
              }),
            ],
          }),
        });
      }
    },
    3074: (a, e, t) => {
      "use strict";
      t.d(e, { Z: () => o, j: () => s });
      var r = t(5155),
        n = t(2115);
      let i = (0, n.createContext)({
        isInTelegram: !1,
        telegram: null,
        startParams: null,
      });
      function o(a) {
        let { children: e } = a,
          [t, o] = (0, n.useState)(!1),
          [s, l] = (0, n.useState)(null),
          [c, b] = (0, n.useState)(null);
        return (
          (0, n.useEffect)(() => {
            let a = null,
              e = () => {
                var e, t;
                let r = window.Telegram,
                  n = null == r ? void 0 : r.WebApp,
                  i =
                    "undefined" != typeof navigator ? navigator.userAgent : "",
                  s = !!(null == n ? void 0 : n.initData),
                  c = !!(null == n
                    ? void 0
                    : null === (e = n.initDataUnsafe) || void 0 === e
                    ? void 0
                    : e.user);
                if (r && ((s && c) || i.includes("Telegram")) && r) {
                  l(r),
                    null == n ||
                      null === (t = n.ready) ||
                      void 0 === t ||
                      t.call(n),
                    o(!0);
                  let e = new URLSearchParams(window.location.search).get(
                    "tgWebAppStartParam"
                  );
                  if (e) {
                    let a = e.replace(/-/g, "+").replace(/_/g, "/");
                    for (; a.length % 4; ) a += "=";
                    let t = (function (a) {
                      try {
                        return decodeURIComponent(
                          Array.from(atob(a))
                            .map(
                              (a) =>
                                "%" +
                                ("00" + a.charCodeAt(0).toString(16)).slice(-2)
                            )
                            .join("")
                        );
                      } catch (a) {
                        return "";
                      }
                    })(a);
                    if (t)
                      try {
                        let a = JSON.parse(t);
                        b(a);
                      } catch (a) {
                        b(null);
                      }
                  }
                  a && (clearInterval(a), (a = null));
                }
              };
            e(), (a = setInterval(e, 100));
            let t = setTimeout(() => {
              a && clearInterval(a), (a = null);
            }, 5e3);
            return () => {
              a && clearInterval(a), clearTimeout(t);
            };
          }, []),
          (0, r.jsx)(i.Provider, {
            value: { isInTelegram: t, telegram: s, startParams: c },
            children: e,
          })
        );
      }
      function s() {
        return (0, n.useContext)(i);
      }
    },
  },
  (a) => {
    var e = (e) => a((a.s = e));
    a.O(0, [565, 47, 922, 55, 919, 358], () => e(424)), (_N_E = a.O());
  },
]);
