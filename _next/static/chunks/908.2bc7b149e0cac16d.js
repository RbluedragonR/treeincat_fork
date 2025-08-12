"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [908],
  {
    4527: (e, t, r) => {
      r.r(t), r.d(t, { Tokenomics: () => n, default: () => i });
      var l = r(5155),
        o = r(2115),
        s = r(5565),
        a = r(2901);
      let x = () =>
          (0, l.jsx)("div", {
            className:
              "absolute inset-0 z-0 w-full min-h-screen bg-cover bg-center",
            style: {
              backgroundImage:
                "url('/images/tokenomics/tokenomics_background.webp')",
            },
          }),
        m = () =>
          (0, l.jsx)("div", {
            className:
              "absolute z-30 w-full top-[-24vw] sm:top-[-24vw] md:top-[-24vw] lg:top-[-24vw] xl:top-[-24vw] 2xl:top-[-24vw] pointer-events-none",
            children: (0, l.jsx)("div", {
              className: "relative w-full",
              style: { aspectRatio: "1920/600" },
              children: (0, l.jsx)("div", {
                className:
                  "block absolute top-0 left-0 right-0 overflow-hidden",
                children: (0, l.jsx)(s.default, {
                  src: "/images/tokenomics/book.webp",
                  alt: "Book Decoration",
                  width: 1920,
                  height: 400,
                  className: "w-full h-auto object-cover object-top",
                  priority: !0,
                }),
              }),
            }),
          }),
        c = () => {
          let e = (0, o.useRef)(null);
          return (
            (0, o.useEffect)(() => {
              e.current &&
                a.os.fromTo(
                  e.current,
                  { xPercent: -100, opacity: 0 },
                  {
                    xPercent: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                      trigger: e.current,
                      start: "top bottom-=100",
                      end: "bottom bottom",
                      scrub: 1,
                    },
                  }
                );
            }, []),
            (0, l.jsx)("div", {
              className: "absolute z-30 w-full bottom-0 pointer-events-none",
              children: (0, l.jsxs)("div", {
                className: "relative w-full",
                style: { aspectRatio: "1920/600" },
                children: [
                  (0, l.jsx)("div", {
                    ref: e,
                    className:
                      "absolute bottom-[1vh] sm:bottom-[2vh] md:bottom-[0vh] lg:bottom-[1vh] xl:bottom-[1vh] 2xl:bottom-[1vh] 3xl:bottom-[2vh] xl:left-[7%] 2xl:left-[7%] z-10  w-[45%] sm:w-[30%] md:w-[30%] lg:w-[23%] xl:w-[24%] 2xl:w-[24%]",
                    children: (0, l.jsx)(s.default, {
                      src: "/images/tokenomics/two_tics.webp",
                      alt: "Two TICs",
                      width: 1200,
                      height: 1200,
                      className: "w-full h-auto object-contain",
                      priority: !0,
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "hidden md:block absolute bottom-0 left-0 right-0 overflow-hidden",
                    children: (0, l.jsx)(s.default, {
                      src: "/images/tokenomics/tokenomics_foreground.webp",
                      alt: "Tokenomics Foreground",
                      width: 1920,
                      height: 400,
                      className: "w-full h-auto object-cover object-bottom",
                      priority: !0,
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "block md:hidden absolute bottom-0 left-0 right-0 overflow-hidden",
                    children: (0, l.jsx)(s.default, {
                      src: "/images/tokenomics/tokenomics_foreground_sm.webp",
                      alt: "Tokenomics Foreground",
                      width: 1920,
                      height: 400,
                      className: "w-full h-auto object-cover object-bottom",
                      priority: !0,
                    }),
                  }),
                ],
              }),
            })
          );
        };
      function n() {
        let e = (0, o.useRef)(null),
          t = (0, o.useRef)(null),
          [r, s] = (0, o.useState)(!1),
          n = "0xTBA",
          i = async () => {
            try {
              await navigator.clipboard.writeText(n),
                s(!0),
                setTimeout(() => s(!1), 2e3);
            } catch (e) {}
          };
        return (
          (0, o.useEffect)(() => {
            t.current &&
              a.os.fromTo(
                t.current,
                { xPercent: 100, opacity: 0 },
                {
                  xPercent: 0,
                  opacity: 1,
                  duration: 1.2,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: t.current,
                    start: "top bottom-=100",
                    end: "center center",
                    scrub: 1,
                  },
                }
              );
          }, []),
          (0, l.jsxs)("div", {
            className: "relative",
            ref: e,
            children: [
              (0, l.jsx)(x, {}),
              (0, l.jsx)(m, {}),
              (0, l.jsx)("div", {
                className:
                  "relative min-h-screen w-full overflow-hidden z-30 flex items-center top-[-5vh] sm:top-[-10vh] md:top-[-10vh] lg:top-[-1vh] xl:top-[-15vh] 2xl:top-[-10vh]",
                children: (0, l.jsx)("div", {
                  className:
                    "w-full flex justify-center xl:justify-end xl:pr-[5%] 2xl:pr-[5%]",
                  children: (0, l.jsxs)("div", {
                    ref: t,
                    className:
                      "relative w-[95%] h-[75vh] sm:w-[95%] sm:h-[70vh] md:w-[90%] md:h-[65vh] lg:w-[90%] lg:h-[75vh] xl:w-[60%] xl:h-[min(42vw,65vh)] 2xl:w-[65%] 2xl:h-[min(44vw,70vh)] 3xl:w-[40%] 3xl:h-[min(28vw,65vh)] perspective-1000",
                    children: [
                      (0, l.jsxs)("div", {
                        className:
                          "absolute inset-0 rounded-[4px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-8 border-[#2d3129] border-t-[#41483d] border-l-[#363c32] before:absolute before:inset-0 before:bg-[repeating-radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_15%)] before:opacity-20 before:mix-blend-overlay after:absolute after:inset-0 after:bg-[linear-gradient(30deg,_transparent_48%,_rgba(255,255,255,0.08)_50%,_transparent_52%)] after:opacity-40 overflow-hidden animate-tokenomics-float",
                        style: {
                          backgroundImage:
                            "url('/images/tokenomics/blackboard_tile.webp')",
                          backgroundRepeat: "repeat",
                          backgroundSize: "auto",
                        },
                        children: [
                          (0, l.jsx)("div", {
                            className:
                              "absolute top-[10%] left-1/2 -translate-x-1/2 w-full text-center z-10",
                            children: (0, l.jsx)("h1", {
                              className:
                                "font-chalk text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[3.5rem] 3xl:text-[5rem] text-[rgba(255,255,255,0.9)]",
                              children: "$TREEINCAT",
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className:
                              "absolute top-[20%] sm:top-[24%] md:top-[22%] lg:top-[30%] xl:top-[30%] 2xl:top-[30%] w-full px-8 z-10",
                            children: (0, l.jsxs)("div", {
                              className:
                                "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 lg:gap-4 ",
                              children: [
                                (0, l.jsxs)("div", {
                                  className: "flex flex-col items-center",
                                  children: [
                                    (0, l.jsx)("h3", {
                                      className:
                                        "font-chalk text-[rgba(255,255,255,0.7)] text-[1rem] sm:text-[1.2rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.5rem] 3xl:text-[2rem] text-center",
                                      children: "TOTAL SUPPLY",
                                    }),
                                    (0, l.jsx)("p", {
                                      className:
                                        "font-chalk text-[rgba(255,255,255,0.9)] text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem] 3xl:text-[2.5rem] mt-2",
                                      children: "1 B",
                                    }),
                                  ],
                                }),
                                (0, l.jsxs)("div", {
                                  className: "flex flex-col items-center",
                                  children: [
                                    (0, l.jsx)("h3", {
                                      className:
                                        "font-chalk text-[rgba(255,255,255,0.7)] text-[1rem] sm:text-[1.2rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.5rem] 3xl:text-[2rem] text-center",
                                      children: "TAX",
                                    }),
                                    (0, l.jsx)("p", {
                                      className:
                                        "font-chalk text-[rgba(255,255,255,0.9)] text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem] 3xl:text-[2.5rem] mt-2 text-center",
                                      children: "0% BUY & SELL",
                                    }),
                                  ],
                                }),
                                (0, l.jsxs)("div", {
                                  className:
                                    "flex flex-col items-center col-span-2 lg:col-span-1 mx-auto",
                                  children: [
                                    (0, l.jsx)("h3", {
                                      className:
                                        "font-chalk text-[rgba(255,255,255,0.7)] text-[1rem] sm:text-[1.2rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.5rem] 3xl:text-[2rem] text-center",
                                      children: "TEAM ALLOCATION",
                                    }),
                                    (0, l.jsx)("p", {
                                      className:
                                        "font-chalk text-[rgba(255,255,255,0.9)] text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem] 3xl:text-[2.5rem] mt-2",
                                      children: "5%",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsxs)("div", {
                            className:
                              "absolute bottom-[12%] w-full px-8 z-10 flex flex-col items-center",
                            children: [
                              (0, l.jsx)("h3", {
                                className:
                                  "font-chalk text-[rgba(255,255,255,0.7)] text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.6rem] 3xl:text-[2rem] text-center mb-3",
                                children: "CONTRACT ADDRESS",
                              }),
                              (0, l.jsx)("p", {
                                className:
                                  "font-chalk text-[rgba(255,255,255,0.9)] text-[0.9rem] sm:text-[1.1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.8rem] 3xl:text-[2.8rem] text-center mb-6  max-w-[90%] break-all",
                                children: n,
                              }),
                              (0, l.jsx)("button", {
                                onClick: i,
                                className:
                                  "font-chalk text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.4rem] px-6 py-2 relative\n                            transition-all duration-300\n                            "
                                    .concat(
                                      r
                                        ? "text-[#96E9A2] scale-95"
                                        : "text-[rgba(255,255,255,0.9)] hover:text-[#96E9A2] hover:scale-105",
                                      "\n                            before:content-[''] before:absolute before:inset-0\n                            before:border-2 before:border-[rgba(255,255,255,0.6)]\n                            before:rounded-md before:transition-all\n                            hover:before:scale-105 active:before:scale-95\n                            "
                                    )
                                    .concat(r ? "before:border-[#96E9A2]" : ""),
                                children: r ? "Copied!" : "Copy to Clipboard",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className:
                              "absolute inset-0 border-[12px] border-[#3d2f1d] rounded-sm bg-[linear-gradient(45deg,rgba(56, 48, 37, 0.2)_0%,rgba(65, 58, 43, 0.1)_50%,rgba(58, 50, 39, 0.2)_100%)] shadow-[inset_0_0_20px_rgba(0,0,0,0.4)] pointer-events-none",
                            children: [
                              (0, l.jsx)("div", {
                                className: "absolute inset-[12px] rounded-sm",
                              }),
                              [
                                { top: "15px", left: "15px" },
                                { top: "15px", right: "15px" },
                                { bottom: "15px", left: "15px" },
                                { bottom: "15px", right: "15px" },
                              ].map((e, t) =>
                                (0, l.jsx)(
                                  "div",
                                  {
                                    className:
                                      "absolute w-5 h-5 rounded-full pointer-events-none",
                                    style: {
                                      ...e,
                                      background:
                                        "radial-gradient(circle at 40% 40%, #a39070 0%, #746952 60%, #5a4d3c 100%)",
                                      boxShadow:
                                        "inset -2px -2px 4px rgba(0,0,0,0.4), 2px 2px 4px rgba(0,0,0,0.2)",
                                      transform: "rotate(".concat(
                                        45 * t,
                                        "deg)"
                                      ),
                                    },
                                  },
                                  t
                                )
                              ),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.4)_0%,_transparent_70%)]  transition-opacity duration-300 blur-[30px] scale-90",
                      }),
                    ],
                  }),
                }),
              }),
              (0, l.jsx)(c, {}),
            ],
          })
        );
      }
      let i = n;
    },
  },
]);
