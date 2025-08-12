"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [406],
  {
    6406: (e, t, r) => {
      r.r(t), r.d(t, { About: () => m, default: () => w });
      var s = r(5155),
        o = r(2115),
        l = r(5565),
        a = r(2901),
        i = r(116),
        n = r(9224);
      let c = () =>
          (0, s.jsx)("div", {
            className:
              "absolute inset-0 z-0 w-full min-h-screen bg-cover bg-center",
            style: {
              backgroundImage: "url('/images/about/about_background.webp')",
            },
          }),
        u = () => {
          let e = (0, o.useRef)(null),
            t = (0, o.useRef)(null),
            r = (0, o.useRef)(null),
            n = (0, o.useRef)(null);
          return (
            (0, i.E)(() => {
              a.os.set([e.current, t.current], { y: "10vh" }),
                a.os.set(r.current, { opacity: 0, scale: 0.8 }),
                a.os.set(n.current, { y: "15vh" });
              let s = a.os.matchMedia();
              return (
                s.add("(max-width: 639px)", () => {
                  a.os.to(t.current, {
                    y: 0,
                    duration: 1,
                    ease: "power2.in",
                    scrollTrigger: {
                      trigger: t.current,
                      start: "top bottom",
                      end: "bottom bottom+=400",
                      scrub: 1,
                    },
                  }),
                    a.os.to(r.current, {
                      opacity: 1,
                      scale: 1,
                      delay: 1,
                      duration: 3,
                      ease: "power2.out",
                      scrollTrigger: {
                        trigger: t.current,
                        start: "bottom bottom+=400",
                        toggleActions: "play none none reverse",
                      },
                    }),
                    a.os.to(e.current, {
                      y: 0,
                      duration: 1,
                      ease: "power2.in",
                      scrollTrigger: {
                        trigger: e.current,
                        start: "top bottom",
                        end: "bottom bottom+=400",
                        scrub: 1,
                      },
                    });
                }),
                s.add("(min-width: 640px)", () => {
                  a.os.to(t.current, {
                    y: 0,
                    duration: 1,
                    ease: "power2.in",
                    scrollTrigger: {
                      trigger: t.current,
                      start: "top bottom",
                      end: "bottom bottom+=200",
                      scrub: 1,
                    },
                  }),
                    a.os.to(r.current, {
                      opacity: 1,
                      scale: 1,
                      delay: 1.5,
                      duration: 3,
                      ease: "power2.out",
                      scrollTrigger: {
                        trigger: t.current,
                        start: "bottom bottom+=200",
                        toggleActions: "play none none reverse",
                      },
                    }),
                    a.os.to(e.current, {
                      y: 0,
                      duration: 1,
                      ease: "power2.in",
                      scrollTrigger: {
                        trigger: e.current,
                        start: "top bottom",
                        end: "bottom bottom+=200",
                        scrub: 1,
                      },
                    });
                }),
                a.os.to(n.current, {
                  y: 0,
                  duration: 1,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: n.current,
                    start: "top bottom",
                    end: "bottom center",
                    scrub: 1,
                  },
                }),
                () => s.revert()
              );
            }, []),
            (0, s.jsx)("div", {
              className: "absolute z-30 w-full",
              children: (0, s.jsxs)("div", {
                className: "relative w-full",
                style: { aspectRatio: "1920/600" },
                children: [
                  (0, s.jsxs)("div", {
                    ref: t,
                    className:
                      "absolute bottom-[8%] sm:bottom-[10%] md:bottom-[6%] lg:bottom[-0%] xl:bottom-[18%] right-[2%] lg:right-[6%] xl:right-[5%] z-60  w-[26%] sm:w-[22%] md:w-[23%] lg:w-[16%] md:block",
                    children: [
                      (0, s.jsx)("div", {
                        ref: r,
                        className:
                          "absolute top-[-35%] left-[-40%] w-[80%] animate-wiggle",
                        children: (0, s.jsx)(l.default, {
                          src: "/images/about/axe_bubble.webp",
                          alt: "Axe Man Speech",
                          width: 400,
                          height: 200,
                          className: "w-full h-auto object-contain",
                          priority: !0,
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className: "w-full",
                        children: (0, s.jsx)(l.default, {
                          src: "/images/about/axe_man.webp",
                          alt: "Axe Man",
                          width: 1e3,
                          height: 300,
                          className: "w-full h-auto object-contain",
                          priority: !0,
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    ref: e,
                    className:
                      "absolute bottom-[18%] md:bottom-[22%] lg:bottom-[22%] left-[8%] md:left-[5%] lg:left-[8%] z-60  w-[25%] sm:w-[19%] md:w-[19%] lg:w-[15%] md:block",
                    children: (0, s.jsx)("div", {
                      className: "w-full",
                      children: (0, s.jsx)(l.default, {
                        src: "/images/about/tic_side.webp",
                        alt: "Tic Side",
                        width: 1e3,
                        height: 300,
                        className: "w-full h-auto object-contain",
                        priority: !0,
                      }),
                    }),
                  }),
                  (0, s.jsx)("div", {
                    ref: n,
                    className:
                      "absolute bottom-[-80%] sm:bottom-[-60%] lg:bottom-[-30%] left-1/2 -translate-x-1/2 z-60   w-[80%] min-[450px]:w-[60%] sm:w-[45%] md:w-[40%] lg:w-[30%] xl:w-[28%] 2xl:w-[20%]",
                    children: (0, s.jsx)(d, {}),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "absolute bottom-0 left-0 right-0 overflow-hidden",
                    children: (0, s.jsx)(l.default, {
                      src: "/images/about/about_foreground_ground.webp",
                      alt: "Ground",
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
        },
        d = () => {
          let e = (0, o.useRef)(null),
            t = (0, n.a)();
          return (
            (0, o.useEffect)(() => {
              let r = e.current;
              if (!r) return;
              a.os.set(r, { opacity: 1 });
              let s = r.querySelector("h2"),
                o = r.querySelectorAll("p"),
                l = r.querySelectorAll(".special-word"),
                i = [s, ...o];
              a.os.set(i, {
                opacity: 0,
                y: 60,
                rotationX: -15,
                scale: 0.8,
                filter: t ? "none" : "blur(4px)",
              }),
                a.os.set(l, {
                  opacity: 0,
                  scale: 0.5,
                  rotation: () => a.os.utils.random(-20, 20),
                  y: () => a.os.utils.random(40, 80),
                  x: () => a.os.utils.random(-20, 20),
                  filter: t ? "none" : "blur(8px)",
                });
              let n = a.os.timeline({
                scrollTrigger: {
                  trigger: r,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                },
              });
              n.to(i, {
                opacity: 1,
                y: 0,
                rotationX: 0,
                scale: 1,
                filter: t ? "none" : "blur(0px)",
                duration: 0.8,
                ease: "back.out(1.7)",
                stagger: 0.15,
              }),
                n.to(
                  l,
                  {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    y: 0,
                    x: 0,
                    filter: t ? "none" : "blur(0px)",
                    duration: 0.6,
                    ease: "elastic.out(1, 0.5)",
                    stagger: 0.08,
                  },
                  "-=0.4"
                ),
                n.to(
                  r,
                  {
                    x: 2,
                    duration: 0.1,
                    ease: "power2.inOut",
                    yoyo: !0,
                    repeat: 3,
                  },
                  "-=0.2"
                ),
                a.os
                  .timeline({ repeat: -1, yoyo: !0, delay: 2 })
                  .to(l, {
                    scale: 1.03,
                    y: () => a.os.utils.random(-3, 3),
                    rotation: () => a.os.utils.random(-2, 2),
                    duration: 2,
                    ease: "power1.inOut",
                    stagger: 0.2,
                  });
            }, [t]),
            (0, s.jsxs)("div", {
              className: "relative",
              children: [
                (0, s.jsx)(l.default, {
                  src: "/images/about/about_sign.webp",
                  alt: "About Sign",
                  width: 700,
                  height: 300,
                  className: "w-full h-auto object-contain",
                  priority: !0,
                }),
                (0, s.jsx)("div", {
                  className:
                    "absolute inset-[12%] top-[8%] flex flex-col justify-start items-center",
                  children: (0, s.jsx)("div", {
                    className: "w-full max-w-[90%] flex flex-col items-center",
                    children: (0, s.jsx)("div", {
                      ref: e,
                      className:
                        "font-dyna-puff text-[4vw] min-[450px]:text-[3vw] sm:text-[2.1vw] md:text-[1.9vw] lg:text-[1.4vw] xl:text-[1.2vw] 2xl:text-[1vw] 3xl:text-[0.9vw] text-center text-[#2C1810] leading-relaxed",
                      children: (0, s.jsx)(
                        () =>
                          (0, s.jsxs)("div", {
                            className: "space-y-4",
                            children: [
                              (0, s.jsxs)("h2", {
                                className:
                                  "text-[1.2em] font-black mb-6 tracking-wide",
                                children: [
                                  "CAT. TREE. ",
                                  (0, s.jsx)("span", {
                                    className: "special-word",
                                    style: { color: "#32CD32" },
                                    children: "$TREEINCAT",
                                  }),
                                  ".",
                                ],
                              }),
                              (0, s.jsx)("p", {
                                children: "Nature messed up. We memed it.",
                              }),
                              (0, s.jsxs)("p", {
                                children: [
                                  "Fueled by ",
                                  (0, s.jsx)("span", {
                                    className: "special-word",
                                    style: { color: "#FF69B4" },
                                    children: "AI",
                                  }),
                                  ", ",
                                  " ",
                                  (0, s.jsx)("span", {
                                    className: "special-word",
                                    style: { color: "#FF6B6B" },
                                    children: "games",
                                  }),
                                  ", ",
                                  " ",
                                  (0, s.jsx)("span", {
                                    className: "special-word",
                                    style: { color: "#4ECDC4" },
                                    children: "art",
                                  }),
                                  ", ",
                                  " ",
                                  (0, s.jsx)("span", {
                                    className: "special-word",
                                    style: { color: "#9B59B6" },
                                    children: "tunes",
                                  }),
                                  ", and questionable life decisions on Ethereum.",
                                ],
                              }),
                              (0, s.jsx)("p", {
                                children: "Zero logic. Max vibes.",
                              }),
                              (0, s.jsxs)("p", {
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "special-word",
                                    style: { color: "#E74C3C" },
                                    children: "WAGMI",
                                  }),
                                  ". Probably.",
                                ],
                              }),
                            ],
                          }),
                        {}
                      ),
                    }),
                  }),
                }),
              ],
            })
          );
        };
      function m() {
        return (0, s.jsxs)("div", {
          className: "relative",
          children: [
            (0, s.jsx)(c, {}),
            (0, s.jsxs)("div", {
              className: "relative min-h-screen flex flex-col justify-end",
              children: [
                (0, s.jsx)(b, {}),
                (0, s.jsx)(g, {}),
                (0, s.jsx)(u, {}),
              ],
            }),
          ],
        });
      }
      let b = () => {
          let e = (0, o.useRef)(null),
            t = (0, n.a)();
          return (
            (0, o.useEffect)(() => {
              a.os.fromTo(
                e.current,
                { filter: t ? "none" : "blur(4px)" },
                {
                  filter: t ? "none" : "blur(0px)",
                  scrollTrigger: {
                    trigger: e.current,
                    start: "top bottom",
                    end: "top top",
                    scrub: !0,
                  },
                }
              );
            }, [t]),
            (0, s.jsx)("div", {
              ref: e,
              className:
                "absolute top-[-10vw] left-[0%] z-10 w-[70vw] md:w-[70vw] lg:w-[55vw]",
              children: (0, s.jsx)("div", {
                className: "w-full min-h-screen",
                children: (0, s.jsx)(l.default, {
                  src: "/images/about/about_left_tree.webp",
                  alt: "Left Tree",
                  width: 1e3,
                  height: 1e3,
                  className: "w-full h-auto object-contain",
                  priority: !0,
                }),
              }),
            })
          );
        },
        g = () => {
          let e = (0, o.useRef)(null),
            t = (0, n.a)();
          return (
            (0, o.useEffect)(() => {
              a.os.fromTo(
                e.current,
                { filter: t ? "none" : "blur(4px)" },
                {
                  filter: t ? "none" : "blur(0px)",
                  scrollTrigger: {
                    trigger: e.current,
                    start: "top bottom",
                    end: "top top",
                    scrub: !0,
                  },
                }
              );
            }, [t]),
            (0, s.jsx)("div", {
              ref: e,
              className:
                "absolute top-[-10vw] -right-[0%] z-10 w-[70vw] md:w-[70vw] lg:w-[55vw]",
              children: (0, s.jsx)("div", {
                className: "w-full min-h-screen",
                children: (0, s.jsx)(l.default, {
                  src: "/images/about/about_right_tree.webp",
                  alt: "Right Tree",
                  width: 1e3,
                  height: 1e3,
                  className: "w-full h-auto object-contain",
                  priority: !0,
                }),
              }),
            })
          );
        },
        w = m;
    },
    9224: (e, t, r) => {
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
