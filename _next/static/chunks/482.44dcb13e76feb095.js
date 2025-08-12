"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [482],
  {
    482: (e, t, r) => {
      r.r(t), r.d(t, { Art: () => k, default: () => z });
      var a = r(5155),
        s = r(8803),
        n = r.n(s),
        o = r(2115),
        i = r(5565),
        l = r(8173),
        c = r.n(l),
        d = r(2055),
        u = r(2901),
        x = r(116),
        p = r(9224);
      let m = [
          {
            x: "25%",
            y: { base: "75%", sm: "35%" },
            rotation: -12.5,
            caption: "Nature's little surprise! \uD83D\uDC9A",
          },
          {
            x: "75%",
            y: { base: "40%", sm: "45%" },
            rotation: 8.3,
            caption: "Tree in cat was here ❤️",
          },
          {
            x: "20%",
            y: { base: "55%", sm: "60%" },
            rotation: -6.7,
            caption: "Best day ever! ✨",
          },
          {
            x: "70%",
            y: { base: "65%", sm: "65%" },
            rotation: 11.2,
            caption: "Don't ask how this happened \uD83D\uDE05",
          },
          {
            x: "50%",
            y: { base: "30%", sm: "45%" },
            rotation: -3.8,
            caption: "Just another Tuesday \uD83C\uDF1F",
          },
          {
            x: "25%",
            y: { base: "75%", sm: "35%" },
            rotation: 14.1,
            caption: "Art in the wild \uD83C\uDFA8",
          },
          {
            x: "75%",
            y: { base: "40%", sm: "45%" },
            rotation: -9.4,
            caption: "Can't believe what I saw! \uD83D\uDC40",
          },
          {
            x: "20%",
            y: { base: "55%", sm: "60%" },
            rotation: 7.6,
            caption: "Note to self: don't do that again \uD83D\uDE06",
          },
          {
            x: "70%",
            y: { base: "65%", sm: "65%" },
            rotation: -13.2,
            caption: "Pure magic moment ✨",
          },
          {
            x: "50%",
            y: { base: "30%", sm: "45%" },
            rotation: 5.9,
            caption: "Secret spot discovered \uD83D\uDDFA️",
          },
        ],
        f = () =>
          (0, a.jsx)("div", {
            className:
              "absolute inset-0 z-0 w-full min-h-screen bg-cover bg-center",
            style: {
              backgroundImage: "url('/images/art/art_background.webp')",
            },
          }),
        h = () =>
          (0, a.jsx)("div", {
            className:
              "absolute -translate-y-[80%] left-0 right-0 z-10  w-full",
            children: (0, a.jsxs)("div", {
              className: "w-full",
              children: [
                (0, a.jsx)("div", {
                  className: "hidden lg:block",
                  children: (0, a.jsx)(i.default, {
                    src: "/images/art/art_fence.webp",
                    alt: "Art Fence",
                    width: 1920,
                    height: 400,
                    className: "w-full h-auto object-contain",
                    loading: "lazy",
                    sizes: "100vw",
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "block lg:hidden",
                  children: (0, a.jsx)(i.default, {
                    src: "/images/art/art_fence_sm.webp",
                    alt: "Art Fence",
                    width: 1920,
                    height: 400,
                    className: "w-full h-auto object-contain",
                    loading: "lazy",
                    sizes: "100vw",
                  }),
                }),
              ],
            }),
          }),
        w = function (e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0.1,
            [a, s] = (0, o.useState)(!1);
          return (
            (0, o.useEffect)(() => {
              let n = e.current;
              if (!n || a) return;
              let o = new IntersectionObserver(
                (e) => {
                  let [r] = e;
                  r.isIntersecting && (s(!0), t(), o.unobserve(n));
                },
                { threshold: r, rootMargin: "50px" }
              );
              return (
                o.observe(n),
                () => {
                  o.unobserve(n);
                }
              );
            }, [e, t, r, a]),
            a
          );
        },
        g = (e) => {
          let { src: t, alt: r, aspectRatio: s, position: l } = e,
            c = (0, o.useRef)(null),
            [d, x] = (0, o.useState)(!1),
            [f, h] = (0, o.useState)(!1),
            g = m[l % m.length],
            y = (0, p.a)();
          return (
            w(c, () => h(!0), 0.1),
            (0, o.useEffect)(() => {
              c.current &&
                d &&
                (y
                  ? u.os.fromTo(
                      c.current,
                      { opacity: 0, scale: 0.8 },
                      {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        ease: "power2.out",
                      }
                    )
                  : u.os.fromTo(
                      c.current,
                      { opacity: 0, scale: 0.5 },
                      {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "back.out(1.2)",
                      }
                    ));
            }, [d, y]),
            (0, a.jsxs)("div", {
              ref: c,
              style: {
                left: g.x,
                top: g.y.base,
                transform: "translateX(-50%) translateY(-50%) rotate(".concat(
                  y ? 0.5 * g.rotation : g.rotation,
                  "deg)"
                ),
                willChange: "transform, opacity",
                opacity: d ? 1 : 0,
              },
              className:
                n().dynamic([["188251fc507d43e7", [g.y.sm]]]) +
                " absolute w-[220px] sm:w-[320px] md:w-[400px] lg:w-[min(30vw,28vh)] xl:w-[min(28vw,26vh)] 2xl:w-[min(25vw,35vh)] max-w-[600px] z-[2]",
              children: [
                (0, a.jsx)(n(), {
                  id: "188251fc507d43e7",
                  dynamic: [g.y.sm],
                  children:
                    "@media(min-width:640px){div.__jsx-style-dynamic-selector{top:".concat(
                      g.y.sm,
                      "!important}}"
                    ),
                }),
                (0, a.jsxs)("div", {
                  style: {
                    background: "#fff",
                    borderRadius: "2px",
                    boxShadow:
                      "\n            0 0 0 2px #000,\n            4px 4px 0 0 #000,\n            8px 8px 0 0 rgba(0,0,0,0.2)\n          ",
                  },
                  className:
                    n().dynamic([["188251fc507d43e7", [g.y.sm]]]) +
                    " p-3 sm:p-4",
                  children: [
                    (0, a.jsxs)("div", {
                      style: {
                        paddingBottom: "".concat((1 / s) * 100, "%"),
                        maxHeight: "280px",
                        border: "2px solid #000",
                        background: "#f8f8f8",
                        boxShadow: "inset 0 0 20px rgba(0,0,0,0.1)",
                      },
                      className:
                        n().dynamic([["188251fc507d43e7", [g.y.sm]]]) +
                        " relative overflow-hidden",
                      children: [
                        !d &&
                          f &&
                          (0, a.jsx)("div", {
                            style: {
                              background:
                                "linear-gradient(45deg, #f0f0f0 25%, transparent 25%), linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0f0f0 75%), linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)",
                              backgroundSize: "20px 20px",
                              backgroundPosition:
                                "0 0, 0 10px, 10px -10px, -10px 0px",
                            },
                            className:
                              n().dynamic([["188251fc507d43e7", [g.y.sm]]]) +
                              " absolute inset-0 flex items-center justify-center bg-gray-100",
                            children: (0, a.jsx)("div", {
                              className:
                                n().dynamic([["188251fc507d43e7", [g.y.sm]]]) +
                                " text-gray-400 text-sm font-dyna-puff",
                              children: "Loading...",
                            }),
                          }),
                        f &&
                          (0, a.jsx)(i.default, {
                            src: t,
                            alt: r,
                            fill: !0,
                            loading: "lazy",
                            className: "object-cover opacity-95",
                            sizes:
                              "(max-width: 640px) 220px, (max-width: 768px) 320px, (max-width: 1024px) 400px, 500px",
                            onLoad: () => {
                              x(!0);
                            },
                            onError: () => {
                              x(!0);
                            },
                          }),
                        (0, a.jsx)("div", {
                          style: {
                            background:
                              "url(\"data:image/svg+xml,%3Csvg width='6' height='6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z' fill='%23000' fill-opacity='.05'/%3E%3C/svg%3E\")",
                          },
                          className:
                            n().dynamic([["188251fc507d43e7", [g.y.sm]]]) +
                            " absolute inset-0 pointer-events-none",
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        n().dynamic([["188251fc507d43e7", [g.y.sm]]]) +
                        " h-12 sm:h-16 flex items-center justify-center mt-3",
                      children: (0, a.jsx)("p", {
                        style: {
                          transform: "rotate(-1deg)",
                          textShadow: "1px 1px 0 #fff",
                        },
                        className:
                          n().dynamic([["188251fc507d43e7", [g.y.sm]]]) +
                          " font-dyna-puff text-gray-900 text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg",
                        children: g.caption,
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        y = (e, t, r, a, s, n) => {
          let i = (0, p.a)(),
            l = (0, o.useRef)(null);
          return (
            (0, x.E)(() => {
              if (!n.current) return;
              let o = u.os.context(() => {
                let o = u.os.timeline({
                  scrollTrigger: {
                    trigger: n.current,
                    start: "top bottom-=10%",
                    end: "bottom top+=10%",
                    scrub: !i || 0.3,
                    refreshPriority: 1,
                  },
                });
                if (
                  (u.os.set(
                    [e.current, t.current, r.current, a.current, s.current],
                    { opacity: 0, willChange: "transform, opacity" }
                  ),
                  i
                    ? o
                        .fromTo(
                          e.current,
                          { opacity: 0, y: 20 },
                          {
                            opacity: 1,
                            y: 0,
                            duration: 0.2,
                            ease: "power2.out",
                          },
                          0
                        )
                        .fromTo(
                          a.current,
                          { opacity: 0, y: "20vh", scale: 0.9 },
                          {
                            opacity: 1,
                            y: "0",
                            scale: 1,
                            duration: 0.3,
                            ease: "power2.out",
                          },
                          0.15
                        )
                        .fromTo(
                          [t.current, r.current],
                          { opacity: 0, y: 30 },
                          {
                            opacity: 1,
                            y: 0,
                            duration: 0.3,
                            ease: "power2.out",
                            stagger: 0.1,
                          },
                          0.01
                        )
                        .fromTo(
                          s.current,
                          { opacity: 0, y: 20 },
                          {
                            opacity: 1,
                            y: 0,
                            duration: 0.2,
                            ease: "power2.out",
                          },
                          0.01
                        )
                    : o
                        .fromTo(
                          e.current,
                          { opacity: 0, x: 100 },
                          {
                            opacity: 1,
                            x: 0,
                            duration: 0.25,
                            ease: "power3.out",
                          },
                          0
                        )
                        .fromTo(
                          a.current,
                          {
                            opacity: 0,
                            y: "40vh",
                            scale: 0.7,
                            filter: "blur(5px)",
                          },
                          {
                            opacity: 1,
                            y: "0",
                            scale: 1,
                            filter: "blur(0px)",
                            duration: 0.4,
                            ease: "power3.out",
                          },
                          0.1
                        )
                        .fromTo(
                          t.current,
                          { opacity: 0, x: 100, y: 100 },
                          {
                            opacity: 1,
                            x: 0,
                            y: 0,
                            duration: 0.4,
                            ease: "power3.out",
                          },
                          0.1
                        )
                        .fromTo(
                          r.current,
                          { opacity: 0, x: -100, y: 100 },
                          {
                            opacity: 1,
                            x: 0,
                            y: 0,
                            duration: 0.4,
                            ease: "power3.out",
                          },
                          0.05
                        )
                        .fromTo(
                          s.current,
                          { opacity: 0, y: 50 },
                          {
                            opacity: 1,
                            y: 0,
                            duration: 0.3,
                            ease: "power3.out",
                          },
                          0.01
                        ),
                  (l.current = o),
                  t.current)
                ) {
                  u.os.set(t.current, { transformOrigin: "center center" });
                  let e = u.os.to(t.current, {
                      scale: 1.05,
                      duration: 0.3,
                      ease: "power2.out",
                      paused: !0,
                    }),
                    r = t.current;
                  r.addEventListener("mouseenter", () => e.play()),
                    r.addEventListener("mouseleave", () => e.reverse());
                }
                if (s.current) {
                  let e = s.current.querySelector(".group");
                  if (e) {
                    u.os.set(e, { transformOrigin: "center center" });
                    let t = u.os.to(e, {
                      scale: 1.05,
                      duration: 0.3,
                      ease: "power2.out",
                      paused: !0,
                    });
                    e.addEventListener("mouseenter", () => t.play()),
                      e.addEventListener("mouseleave", () => t.reverse());
                  }
                }
              });
              return () => {
                o.revert(), l.current && (l.current.kill(), (l.current = null));
              };
            }, [i]),
            l.current
          );
        },
        b = (e) => {
          let { titleRef: t } = e;
          return (0, a.jsx)("div", {
            ref: t,
            className:
              "absolute top-[5%] md:top-[5%] lg:top-[3%] xl:top-[3%] right-[8%] z-[1] md:mix-blend-luminosity pointer-events-none",
            style: { willChange: "transform, opacity" },
            children: (0, a.jsx)("h1", {
              className:
                "font-wood-carved text-[4rem] md:text-[6rem] lg:text-[8rem] text-[#4a3728]",
              style: {
                transform: "rotate(20deg)",
                textShadow:
                  "\n            2px 2px 0px #8B5E3C,\n            -1px -1px 0px #2b1810,\n            0px 1px 0px #5c3c28,\n            1px 0px 0px #3d2819,\n            2px 2px 3px rgba(0,0,0,0.5),\n            inset 2px 2px 4px rgba(0,0,0,0.4)\n          ",
                WebkitTextStroke: "1px #2b1810",
              },
              children: "ART",
            }),
          });
        },
        v = (e) => {
          let { cameraRef: t, cupRef: r } = e;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                ref: t,
                className:
                  "absolute bottom-[0%] sm:bottom-[3%] -right-[6%] z-[1] w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px] 2xl:w-[500px]  cursor-pointer",
                style: { willChange: "transform, opacity" },
                children: (0, a.jsx)(c(), {
                  href: "",
                  children: (0, a.jsx)(i.default, {
                    src: "/images/art/art_camera.webp",
                    alt: "Camera - Click to view gallery",
                    width: 400,
                    height: 400,
                    className: "w-full h-auto object-contain",
                    loading: "lazy",
                    sizes:
                      "(max-width: 768px) 200px, (max-width: 1024px) 300px, (max-width: 1280px) 400px, 500px",
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                ref: r,
                className:
                  "absolute top-[5%] left-[1%] z-[1] w-[150px] md:w-[200px] lg:w-[450px]",
                style: { willChange: "transform, opacity" },
                children: (0, a.jsx)(i.default, {
                  src: "/images/art/art_milk_cup.webp",
                  alt: "Milk Cup",
                  width: 650,
                  height: 650,
                  className: "w-full h-auto object-contain",
                  loading: "lazy",
                  sizes:
                    "(max-width: 768px) 150px, (max-width: 1024px) 200px, 450px",
                }),
              }),
            ],
          });
        },
        j = (e) => {
          let { ticRef: t } = e;
          return (0, a.jsx)("div", {
            ref: t,
            className:
              "absolute bottom-[103%] md:bottom-[102%] lg:bottom-[100%] xl:bottom-[98%] 2xl:bottom-[103%] left-1/2 -translate-x-1/2 z-[-1]  w-[60%] sm:w-[50%] md:w-[50%] lg:w-[35%] xl:w-[30%] 2xl:w-[22%]",
            style: { willChange: "transform, opacity" },
            children: (0, a.jsx)("div", {
              className: "w-full",
              children: (0, a.jsx)(i.default, {
                src: "/images/art/tic_camera.webp",
                alt: "TIC with Camera",
                width: 800,
                height: 800,
                className: "w-full h-auto object-contain",
                loading: "lazy",
                sizes:
                  "(max-width: 640px) 60vw, (max-width: 768px) 50vw, (max-width: 1024px) 35vw, (max-width: 1280px) 30vw, 22vw",
              }),
            }),
          });
        },
        N = (e) => {
          let { buttonRef: t } = e;
          return (0, a.jsx)("div", {
            ref: t,
            className: "hidden absolute bottom-[5%] left-1/2 -translate-x-1/2 z-[10]",
            style: { willChange: "transform, opacity" },
            children: (0, a.jsx)(c(), {
              href: "",
              className: "inline-block group",
              children: (0, a.jsxs)("div", {
                className:
                  "font-dyna-puff text-lg sm:text-xl md:text-2xl px-6 py-3 bg-[#f8f8f8] border-4 border-black rounded-lg shadow-[8px_8px_0_0_rgba(0,0,0,0.3)] relative overflow-hidden transition-all duration-300 transform",
                style: {
                  boxShadow:
                    "\n              0 0 0 2px #000,\n              4px 4px 0 0 #000,\n              8px 8px 0 0 rgba(0,0,0,0.2)\n            ",
                },
                children: [
                  (0, a.jsxs)("div", {
                    className: "hidden relative z-10 flex items-center",
                    children: [
                      (0, a.jsx)("span", {
                        className: "mr-2",
                        children: "View Gallery",
                      }),
                      (0, a.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className:
                          "transition-transform duration-300 group-hover:translate-x-1",
                        children: [
                          (0, a.jsx)("path", { d: "M5 12h14" }),
                          (0, a.jsx)("path", { d: "m12 5 7 7-7 7" }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "absolute inset-0 bg-[#f8f8f8]",
                    style: {
                      background:
                        "url(\"data:image/svg+xml,%3Csvg width='6' height='6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z' fill='%23000' fill-opacity='.05'/%3E%3C/svg%3E\")",
                    },
                  }),
                ],
              }),
            }),
          });
        };
      function k() {
        let [e, t] = (0, o.useState)([]),
          { z: r } = d,
          s = (0, o.useRef)(0),
          n = (0, o.useRef)(null),
          [i, l] = (0, o.useState)(!1),
          c = (0, o.useRef)(!1),
          x = (0, o.useRef)([]),
          m = (0, o.useRef)(0),
          w = (0, p.a)(),
          k = (0, o.useRef)(null),
          z = (0, o.useRef)(null),
          E = (0, o.useRef)(null),
          C = (0, o.useRef)(null),
          R = (0, o.useRef)(null);
        return (
          y(k, z, E, C, R, n),
          (0, o.useEffect)(() => {
            let e = r.filter(
              (e) => "official" === e.category && "image" === e.type
            );
            x.current = [...e].sort(() => Math.random() - 0.5);
          }, [r]),
          (0, o.useEffect)(() => {
            let e = u.uY.create({
              trigger: n.current,
              start: "top bottom-=20%",
              onEnter: () => l(!0),
              once: !0,
            });
            return () => e.kill();
          }, []),
          (0, o.useEffect)(() => {
            let e = r.filter(
              (e) => "official" === e.category && "image" === e.type
            );
            if (!i || 0 === e.length) return;
            let a = w ? 5 : 10,
              n = w ? 3e3 : 2e3;
            (async () => {
              await new Promise((e) => setTimeout(e, 300)),
                t((e) => [
                  ...e,
                  { ...x.current[0], position: 0, uniqueId: m.current++ },
                ]);
              for (let r = 1; r < Math.min(a, e.length); r++)
                await new Promise((e) => setTimeout(e, w ? 1500 : 2e3)),
                  t((e) => [
                    ...e,
                    { ...x.current[r], position: r, uniqueId: m.current++ },
                  ]);
              (c.current = !0), (s.current = Math.min(a, e.length));
            })();
            let o = setInterval(() => {
              c.current &&
                t((t) => {
                  let r = s.current % e.length;
                  return (
                    (s.current += 1),
                    0 === r &&
                      (x.current = [...e].sort(() => Math.random() - 0.5)),
                    [
                      ...t.slice(1),
                      {
                        ...x.current[r],
                        position: t[t.length - 1].position + 1,
                        uniqueId: m.current++,
                      },
                    ]
                  );
                });
            }, n);
            return () => clearInterval(o);
          }, [r, i, w]),
          (0, a.jsxs)("div", {
            className: "relative",
            ref: n,
            children: [
              (0, a.jsx)(f, {}),
              (0, a.jsx)(j, { ticRef: C }),
              (0, a.jsx)(h, {}),
              (0, a.jsxs)("div", {
                className: " relative min-h-screen w-full overflow-hidden",
                children: [
                  (0, a.jsx)(b, { titleRef: k }),
                  (0, a.jsx)(v, { cameraRef: z, cupRef: E }),
                  // i && e.map((e) => (0, a.jsx)(g, { ...e }, e.uniqueId)),
                  (0, a.jsx)("img", { src: "/_next/image/TIC keeps building.png", alt: "TIC", className: "z-30 w-full  flex items-center top-[-5vh] sm:top-[-10vh] md:top-[-10vh] lg:top-[-1vh] xl:top-[-15vh] 2xl:top-[-10vh]" }),
                  (0, a.jsx)(N, { buttonRef: R }),
                ],
              }),
            ],
          })
        );
      }
      let z = k;
    },
    9224: (e, t, r) => {
      r.d(t, { a: () => s });
      var a = r(2115);
      let s = () => {
        let [e, t] = (0, a.useState)(!1),
          [r, s] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            s(!0);
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
