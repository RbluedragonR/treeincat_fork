(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [93],
  {
    5192: (e, t, r) => {
      "use strict";
      var s = r(859);
      function o() {}
      function i() {}
      (i.resetWarningCache = o),
        (e.exports = function () {
          function e(e, t, r, o, i, a) {
            if (a !== s) {
              var l = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((l.name = "Invariant Violation"), l);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var r = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: o,
          };
          return (r.PropTypes = r), r;
        });
    },
    1996: (e, t, r) => {
      e.exports = r(5192)();
    },
    859: (e) => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    5803: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => c });
      var s = r(5155),
        o = r(9224),
        i = r(2115),
        a = r(2901),
        l = r(5565);
      let n = [
          {
            src: "/images/hero/cloud_1.webp",
            size: "w-96 lg:w-[768px]",
            top: "top-[3%]",
            duration: { mobile: 100, desktop: 240 },
            blur: "blur-[1px]",
            initialPosition: "30%",
          },
          {
            src: "/images/hero/cloud_2.webp",
            size: "w-80 lg:w-[640px]",
            top: "top-[20%]",
            duration: { mobile: 120, desktop: 300 },
            blur: "blur-[3.5px]",
            initialPosition: "-10%",
          },
          {
            src: "/images/hero/cloud_3.webp",
            size: "w-72 lg:w-[576px]",
            top: "top-[30%]",
            duration: { mobile: 100, desktop: 270 },
            blur: "blur-[0px]",
            initialPosition: "50%",
          },
          {
            src: "/images/hero/cloud_4.webp",
            size: "w-64 lg:w-[512px]",
            top: "top-[25%]",
            duration: { mobile: 80, desktop: 210 },
            blur: "blur-[1px]",
            initialPosition: "10%",
          },
          {
            src: "/images/hero/small_cloud_1.webp",
            size: "w-48 lg:w-96",
            top: "top-[45%]",
            duration: { mobile: 90, desktop: 180 },
            blur: "blur-[0px]",
            initialPosition: "70%",
          },
          {
            src: "/images/hero/small_cloud_2.webp",
            size: "w-40 lg:w-80",
            top: "top-[25%]",
            duration: { mobile: 60, desktop: 150 },
            blur: "blur-[1.5px]",
            initialPosition: "-5%",
          },
          {
            src: "/images/hero/small_cloud_3.webp",
            size: "w-32 lg:w-64",
            top: "top-[42%]",
            duration: { mobile: 40, desktop: 120 },
            blur: "blur-[1px]",
            initialPosition: "40%",
          },
        ],
        c = () => {
          let e = (0, o.a)(),
            [t, r] = (0, i.useState)(!1),
            c = (0, i.useRef)([]),
            u = (0, i.useRef)([]),
            d = e ? n.slice(0, 4) : n;
          return (
            (c.current = []),
            (u.current = []),
            (0, i.useEffect)(() => {
              if (t) return;
              let s = setTimeout(() => {
                d.forEach((t, r) => {
                  let s = e ? t.duration.mobile : t.duration.desktop,
                    o = c.current[r],
                    i = u.current[r];
                  o &&
                    a.os.to(o, {
                      x: "100vw",
                      duration: s,
                      ease: "none",
                      repeat: -1,
                      delay: 0.2 * r,
                    }),
                    !e &&
                      i &&
                      a.os.to(i, {
                        x: "100vw",
                        duration: s,
                        ease: "none",
                        repeat: -1,
                        delay: 0.2 * r,
                      });
                }),
                  r(!0);
              }, 500);
              return () => clearTimeout(s);
            }, [t, d, e]),
            (0, s.jsxs)("div", {
              className: "absolute inset-0 overflow-hidden",
              children: [
                d.map((t, r) =>
                  (0, s.jsx)(
                    "div",
                    {
                      ref: (e) => {
                        c.current[r] = e;
                      },
                      className: "absolute "
                        .concat(t.top, " ")
                        .concat(t.size, " ")
                        .concat(e ? "" : t.blur, " opacity-70"),
                      style: {
                        left: t.initialPosition,
                        willChange: "transform",
                      },
                      children: (0, s.jsx)(l.default, {
                        src: t.src,
                        alt: "Cloud ".concat(r + 1),
                        width: 384,
                        height: 256,
                        className: "w-full h-auto",
                        priority: r < 2,
                        loading: r < 2 ? "eager" : "lazy",
                        sizes:
                          "(max-width: 768px) 25vw, (max-width: 1024px) 30vw, 35vw",
                      }),
                    },
                    "cloud-set-1-".concat(r)
                  )
                ),
                !e &&
                  d.map((e, t) =>
                    (0, s.jsx)(
                      "div",
                      {
                        ref: (e) => {
                          u.current[t] = e;
                        },
                        className: "absolute "
                          .concat(e.top, " ")
                          .concat(e.size, " ")
                          .concat(e.blur, " opacity-70"),
                        style: {
                          left: "calc(".concat(e.initialPosition, " - 100%)"),
                          willChange: "transform",
                        },
                        children: (0, s.jsx)(l.default, {
                          src: e.src,
                          alt: "Cloud Duplicate ".concat(t + 1),
                          width: 384,
                          height: 256,
                          className: "w-full h-auto",
                          loading: "lazy",
                          sizes: "(max-width: 1024px) 30vw, 35vw",
                        }),
                      },
                      "cloud-set-2-".concat(t)
                    )
                  ),
              ],
            })
          );
        };
    },
    7648: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { Music: () => f, default: () => v });
      var s = r(5155),
        o = r(853),
        i = r(2115),
        a = r(5565),
        l = r(5803),
        n = r(2901),
        c = r(116),
        u = r(9224);
      let d = (e) => {
          let { isPlaying: t } = e,
            r = (0, u.a)();
          return (0, s.jsx)("div", {
            className: "absolute inset-0 z-0 overflow-hidden",
            children: (0, s.jsx)("div", {
              className: "sky-bg ".concat(t ? "playing-bg" : "default-bg"),
              children:
                t &&
                !r &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)("div", { className: "stars" }),
                    (0, s.jsx)("div", { className: "disco-ball" }),
                    (0, s.jsxs)("div", {
                      className: "spotlight-container",
                      children: [
                        (0, s.jsx)("div", {
                          className: "spotlight spotlight-1",
                        }),
                        (0, s.jsx)("div", {
                          className: "spotlight spotlight-2",
                        }),
                        (0, s.jsx)("div", {
                          className: "spotlight spotlight-3",
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "sound-waves",
                      children: [...Array(20)].map((e, t) =>
                        (0, s.jsx)(
                          "div",
                          {
                            className: "wave-bar",
                            style: {
                              "--height": "".concat(
                                60 * Math.random() + 20,
                                "%"
                              ),
                              "--duration": "".concat(
                                0.5 * Math.random() + 0.5,
                                "s"
                              ),
                            },
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
            }),
          });
        },
        p = () =>
          (0, s.jsx)("div", {
            className:
              "absolute inset-0 z-10 w-full min-h-screen bg-cover bg-center",
            style: {
              backgroundImage: "url('/images/music/music_background.webp')",
            },
          }),
        m = () =>
          (0, s.jsx)("div", {
            className: "absolute bottom-0 left-0 right-0 z-20 overflow-hidden",
            children: (0, s.jsx)(a.default, {
              src: "/images/music/music_foreground.webp",
              alt: "Music Foreground",
              width: 1920,
              height: 400,
              className: "w-full h-auto object-cover object-bottom",
              loading: "lazy",
              sizes: "100vw",
            }),
          }),
        h = (e) => {
          let { isPlaying: t } = e;
          return t
            ? null
            : (0, s.jsx)("div", {
                className: "absolute inset-0 z-5",
                children: (0, s.jsx)(l.A, {}),
              });
        },
        g = (0, i.forwardRef)((e, t) => {
          let { isPlaying: r } = e,
            o = (0, u.a)();
          return (0, s.jsxs)("div", {
            ref: t,
            className:
              "absolute bottom-[1%] md:bottom-[5%] left-1/2 transform -translate-x-1/2 sm:left-auto sm:right-[-20%] md:right-[-20%] lg:right-[-10%] xl:right-[5%] sm:translate-x-0 z-30 w-[80%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]",
            children: [
              r &&
                !o &&
                (0, s.jsx)("div", {
                  className:
                    "absolute top-[20%] left-1/2 w-[40%] -translate-x-1/2",
                  children: [void 0, void 0, void 0, void 0, void 0].map(
                    (e, t) => {
                      let r = ["♪", "♫", "\uD83C\uDFB5"];
                      return (0, s.jsx)(
                        "div",
                        {
                          className: "music-note",
                          style: {
                            left: "".concat(100 * Math.random(), "%"),
                            "--x-offset": "".concat(
                              100 * Math.random() - 50,
                              "px"
                            ),
                            "--rotation": "".concat(
                              45 * Math.random() - 22.5,
                              "deg"
                            ),
                            "--duration": "".concat(1 * Math.random() + 2),
                          },
                          children: r[t % r.length],
                        },
                        t
                      );
                    }
                  ),
                }),
              (0, s.jsx)(a.default, {
                src: "/images/music/TIC_sofa_music.webp",
                alt: "TIC Sofa Music",
                width: 1300,
                height: 1e3,
                className: "object-contain",
                loading: "lazy",
                sizes:
                  "(max-width: 640px) 80vw, (max-width: 768px) 70vw, (max-width: 1024px) 60vw, 50vw",
              }),
            ],
          });
        });
      g.displayName = "SofaImage";
      let w = () => {
          let e = (0, i.useRef)(null),
            t = (0, u.a)();
          return (
            (0, c.E)(() => {
              if (!e.current) return;
              let r = n.os.context(() => {
                t
                  ? n.os.fromTo(
                      e.current,
                      { opacity: 1 },
                      {
                        opacity: 0.7,
                        scrollTrigger: {
                          trigger: e.current,
                          start: "top center-=200",
                          end: "top top-=100",
                          scrub: 0.3,
                        },
                      }
                    )
                  : (n.os.fromTo(
                      e.current,
                      { filter: "blur(30px)", willChange: "opacity" },
                      {
                        filter: "blur(10px)",
                        scrollTrigger: {
                          trigger: e.current,
                          start: "top bottom",
                          end: "top top",
                          scrub: 0.5,
                        },
                      }
                    ),
                    n.os.fromTo(
                      e.current,
                      { opacity: 1 },
                      {
                        opacity: 0.5,
                        scrollTrigger: {
                          trigger: e.current,
                          start: "top center-=700",
                          end: "top top-=400",
                          scrub: 0.5,
                        },
                      }
                    ));
              });
              return () => r.revert();
            }, [t]),
            (0, s.jsx)("div", {
              ref: e,
              className:
                "fixed top-[-20vw] md:top-[-14vw] left-[0%] z-30  w-[70vw] md:w-[70vw] lg:w-[55vw]",
              children: (0, s.jsx)("div", {
                className: "w-full min-h-screen",
                children: (0, s.jsx)(a.default, {
                  src: "/images/music/cloud_left.webp",
                  alt: "Left Cloud",
                  width: 1e3,
                  height: 1e3,
                  className: "w-full h-auto object-contain",
                  loading: "lazy",
                  sizes: "(max-width: 768px) 70vw, 55vw",
                }),
              }),
            })
          );
        },
        x = () => {
          let e = (0, i.useRef)(null),
            t = (0, u.a)();
          return (
            (0, c.E)(() => {
              if (!e.current) return;
              let r = n.os.context(() => {
                t
                  ? n.os.fromTo(
                      e.current,
                      { opacity: 1 },
                      {
                        opacity: 0.7,
                        scrollTrigger: {
                          trigger: e.current,
                          start: "top center-=200",
                          end: "top top-=100",
                          scrub: 0.3,
                        },
                      }
                    )
                  : (n.os.fromTo(
                      e.current,
                      { filter: "blur(30px)", willChange: "opacity" },
                      {
                        filter: "blur(10px)",
                        scrollTrigger: {
                          trigger: e.current,
                          start: "top bottom",
                          end: "top top",
                          scrub: 0.5,
                        },
                      }
                    ),
                    n.os.fromTo(
                      e.current,
                      { opacity: 1 },
                      {
                        opacity: 0.5,
                        scrollTrigger: {
                          trigger: e.current,
                          start: "top center-=700",
                          end: "top top-=400",
                          scrub: 0.5,
                        },
                      }
                    ));
              });
              return () => r.revert();
            }, [t]),
            (0, s.jsx)("div", {
              ref: e,
              className:
                "fixed top-[-13vw] md:top-[-11vw]  -right-[0%] lg:right-[0%] z-30  w-[70vw] md:w-[70vw] lg:w-[60vw]",
              children: (0, s.jsx)("div", {
                className: "w-full min-h-screen",
                children: (0, s.jsx)(a.default, {
                  src: "/images/music/cloud_right.webp",
                  alt: "Right Cloud",
                  width: 1e3,
                  height: 1e3,
                  className: "w-full h-auto object-contain",
                  loading: "lazy",
                  sizes: "(max-width: 768px) 70vw, 60vw",
                }),
              }),
            })
          );
        };
      function f() {
        let [e, t] = (0, i.useState)(!1),
          r = (0, i.useRef)(null),
          a = (0, i.useRef)(null),
          l = (0, u.a)();
        return (
          (0, c.E)(() => {
            if (!r.current || !a.current) return;
            let e = n.os.context(() => {
              let e = n.os.timeline({
                defaults: { ease: "power2.out", duration: l ? 0.8 : 1.2 },
              });
              e.fromTo(
                r.current,
                { xPercent: -50, opacity: 0 },
                {
                  xPercent: 0,
                  opacity: 1,
                  scrollTrigger: {
                    trigger: r.current,
                    start: "top bottom-=50",
                    end: "top center",
                    scrub: !l && 0.5,
                  },
                }
              ),
                e.fromTo(
                  a.current,
                  { xPercent: 50, opacity: 0 },
                  {
                    xPercent: 0,
                    opacity: 1,
                    scrollTrigger: {
                      trigger: a.current,
                      start: "top bottom-=50",
                      end: "top center",
                      scrub: !l && 0.5,
                    },
                  }
                );
            }, r);
            return () => e.revert();
          }, [l]),
          (0, s.jsxs)("div", {
            className: "relative overflow-hidden w-full",
            children: [
              (0, s.jsx)(d, { isPlaying: e }),
              (0, s.jsx)(h, { isPlaying: e }),
              (0, s.jsx)(w, {}),
              (0, s.jsx)(x, {}),
              (0, s.jsx)(p, {}),
              (0, s.jsx)("div", {
                ref: r,
                className:
                  "relative min-h-screen flex flex-col items-center sm:items-start sm:right-[-10%] lg:right-[-15%] pt-[10vh] sm:pt-[20vh] md:pt-[15vh] lg:pt-[15vh] z-40",
                children: (0, s.jsx)("div", {
                  className:
                    "w-[88%] sm:w-[50%] md:w-[50%] lg:w-[min(40vw,35vh)] xl:w-[min(35vw,32vh)] 2xl:w-[min(30vw,44vh)] 3xl:w-[min(28vw,38vh)] max-w-[550px]",
                  children: (0, s.jsx)(o.default, { onPlayingChange: t }),
                }),
              }),
              (0, s.jsx)(m, {}),
              (0, s.jsx)(g, { ref: a, isPlaying: e }),
            ],
          })
        );
      }
      let v = f;
    },
    9224: (e, t, r) => {
      "use strict";
      r.d(t, { a: () => o });
      var s = r(2115);
      let o = () => {
        let [e, t] = (0, s.useState)(!1),
          [r, o] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            o(!0);
            let e = () => window.matchMedia("(max-width: 768px)").matches;
            t(e());
            let r = () => t(e());
            return (
              window.addEventListener("resize", r),
              () => window.removeEventListener("resize", r)
            );
          }, []),
          !!r && e
        );
      };
    },
  },
]);
