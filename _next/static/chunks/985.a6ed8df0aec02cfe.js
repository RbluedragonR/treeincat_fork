"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [985],
  {
    5803: (e, t, a) => {
      a.d(t, { A: () => c });
      var r = a(5155),
        o = a(9224),
        i = a(2115),
        n = a(2901),
        s = a(5565);
      let l = [
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
            [t, a] = (0, i.useState)(!1),
            c = (0, i.useRef)([]),
            d = (0, i.useRef)([]),
            m = e ? l.slice(0, 4) : l;
          return (
            (c.current = []),
            (d.current = []),
            (0, i.useEffect)(() => {
              if (t) return;
              let r = setTimeout(() => {
                m.forEach((t, a) => {
                  let r = e ? t.duration.mobile : t.duration.desktop,
                    o = c.current[a],
                    i = d.current[a];
                  o &&
                    n.os.to(o, {
                      x: "100vw",
                      duration: r,
                      ease: "none",
                      repeat: -1,
                      delay: 0.2 * a,
                    }),
                    !e &&
                      i &&
                      n.os.to(i, {
                        x: "100vw",
                        duration: r,
                        ease: "none",
                        repeat: -1,
                        delay: 0.2 * a,
                      });
                }),
                  a(!0);
              }, 500);
              return () => clearTimeout(r);
            }, [t, m, e]),
            (0, r.jsxs)("div", {
              className: "absolute inset-0 overflow-hidden",
              children: [
                m.map((t, a) =>
                  (0, r.jsx)(
                    "div",
                    {
                      ref: (e) => {
                        c.current[a] = e;
                      },
                      className: "absolute "
                        .concat(t.top, " ")
                        .concat(t.size, " ")
                        .concat(e ? "" : t.blur, " opacity-70"),
                      style: {
                        left: t.initialPosition,
                        willChange: "transform",
                      },
                      children: (0, r.jsx)(s.default, {
                        src: t.src,
                        alt: "Cloud ".concat(a + 1),
                        width: 384,
                        height: 256,
                        className: "w-full h-auto",
                        priority: a < 2,
                        loading: a < 2 ? "eager" : "lazy",
                        sizes:
                          "(max-width: 768px) 25vw, (max-width: 1024px) 30vw, 35vw",
                      }),
                    },
                    "cloud-set-1-".concat(a)
                  )
                ),
                !e &&
                  m.map((e, t) =>
                    (0, r.jsx)(
                      "div",
                      {
                        ref: (e) => {
                          d.current[t] = e;
                        },
                        className: "absolute "
                          .concat(e.top, " ")
                          .concat(e.size, " ")
                          .concat(e.blur, " opacity-70"),
                        style: {
                          left: "calc(".concat(e.initialPosition, " - 100%)"),
                          willChange: "transform",
                        },
                        children: (0, r.jsx)(s.default, {
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
    2985: (e, t, a) => {
      a.r(t), a.d(t, { Hero: () => p, default: () => w });
      var r = a(5155),
        o = a(5565),
        i = a(5803),
        n = a(6222),
        s = a(2115),
        l = a(8803),
        c = a.n(l),
        d = a(8173),
        m = a.n(d);
      function f() {
        return (0, r.jsxs)(m(), {
          href: "/owners-manual",
          className:
            "group absolute top-4 left-4 md:bottom-4 md:top-auto z-[100] flex items-center gap-2 px-4 py-1.5 bg-[#fffbe9] border-2 border-dashed border-[#bfa76a] rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200 cursor-pointer",
          style: {
            boxShadow: "0 2px 8px 0 rgba(180,150,80,0.13)",
            maxWidth: 400,
          },
          children: [
            (0, r.jsx)("span", {
              className: "jsx-91290fea1e68e75a flex-shrink-0",
              children: (0, r.jsx)(o.default, {
                src: "/images/hero/owners-manual.webp",
                alt: "Owners Manual Cover",
                width: 24,
                height: 24,
                className:
                  "rounded border border-[#bfa76a] shadow-sm bg-[#f7e7b7] w-6 h-6 md:w-8 md:h-8 lg:w-11 lg:h-12",
              }),
            }),
            (0, r.jsxs)("span", {
              className:
                "jsx-91290fea1e68e75a font-dyna-puff text-[#6b4c1b] text-xs md:text-sm lg:text-xl leading-tight drop-shadow-sm",
              children: [
                (0, r.jsx)("span", {
                  className:
                    "jsx-91290fea1e68e75a font-bold text-[#3e2a0a] text-xs md:text-sm lg:text-xl",
                  children: "New!",
                }),
                " Official Owners Manual",
                (0, r.jsx)("br", { className: "jsx-91290fea1e68e75a" }),
                (0, r.jsx)("span", {
                  className:
                    "jsx-91290fea1e68e75a text-[10px] md:text-xs lg:text-base text-[#7c5c2a]",
                  children: "How to care for your Tree in Cat →",
                }),
              ],
            }),
            (0, r.jsx)(c(), {
              id: "91290fea1e68e75a",
              children:
                ".group.jsx-91290fea1e68e75a:hover .handdrawn-border.jsx-91290fea1e68e75a{-webkit-filter:drop-shadow(0 0 6px#ffe082);filter:drop-shadow(0 0 6px#ffe082)}",
            }),
          ],
        });
      }
      var b = a(2901),
        x = a(116);
      let g = () =>
          (0, r.jsx)("div", {
            className: "absolute inset-0 animated-sky z-0",
            children: (0, r.jsx)(i.A, {}),
          }),
        u = () =>
          (0, r.jsx)("div", {
            className:
              "hero-forest hero-forest-initial absolute bottom-[95%] md:bottom-[30%] lg:bottom-[30%] xl:bottom-[10%] left-0 right-0 w-full",
            children: (0, r.jsx)("div", {
              className: "w-full h-full",
              children: (0, r.jsx)(o.default, {
                src: "/images/hero/hero_background_forest.webp",
                alt: "Forest Background",
                width: 1920,
                height: 400,
                className: "w-full h-full object-cover object-bottom",
                priority: !0,
                sizes: "100vw",
              }),
            }),
          }),
        h = () =>
          (0, r.jsx)("div", {
            className: "absolute bottom-0 left-0 right-0 z-10 w-full",
            children: (0, r.jsxs)("div", {
              className: "relative w-full",
              style: { aspectRatio: "1920/600" },
              children: [
                (0, r.jsx)(u, {}),
                (0, r.jsx)("div", {
                  className:
                    "hero-firemen hero-firemen-initial absolute bottom-[82%] md:bottom-[40%] lg:bottom-[12vh] xl:bottom-[25%] right-[4%] lg:right-[8%] xl:right-[12%] z-20 w-[28%] lg:w-[22%] xl:w-[20%]",
                  children: (0, r.jsx)("div", {
                    className: "w-full h-full",
                    children: (0, r.jsx)(o.default, {
                      src: "/images/hero/hero_firemen.webp",
                      alt: "Firemen",
                      width: 400,
                      height: 400,
                      className: "w-full h-auto object-contain",
                      priority: !0,
                      sizes:
                        "(max-width: 768px) 28vw, (max-width: 1024px) 22vw, 20vw",
                    }),
                  }),
                }),
                (0, r.jsx)("div", {
                  className:
                    "hero-logo absolute bottom-[55%] md:bottom-[25%] lg:bottom-[10%] xl:bottom-[5%] left-1/2 -translate-x-1/2 z-40 w-[65%] sm:w-[60%] md:w-[45%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%]",
                  children: (0, r.jsx)(o.default, {
                    src: "/images/hero/hero_tic_blink.svg",
                    alt: "Tree in Cat",
                    width: 1e3,
                    height: 1e3,
                    className: "w-full h-auto",
                    priority: !0,
                    sizes:
                      "(max-width: 640px) 65vw, (max-width: 768px) 60vw, (max-width: 1024px) 45vw, (max-width: 1280px) 40vw, (max-width: 1536px) 30vw, 25vw",
                  }),
                }),
                (0, r.jsx)("div", {
                  className:
                    "hero-ground-desktop hidden md:block absolute bottom-[0%] md:bottom-[0%] lg:bottom-[0%] xl:bottom-[-7%] 2xl:bottom-[-10%] left-0 right-0 z-20",
                  children: (0, r.jsx)(o.default, {
                    src: "/images/hero/hero_foreground_ground.webp",
                    alt: "Ground",
                    width: 1920,
                    height: 400,
                    className: "w-full h-auto object-cover object-bottom",
                    priority: !0,
                    sizes: "100vw",
                  }),
                }),
                (0, r.jsx)("div", {
                  className:
                    "hero-ground-mobile block md:hidden absolute bottom-[-25%] left-0 right-0 z-20",
                  children: (0, r.jsx)(o.default, {
                    src: "/images/hero/hero_foreground_ground_sm.webp",
                    alt: "Ground",
                    width: 1920,
                    height: 400,
                    className: "w-full h-auto object-cover object-bottom",
                    priority: !0,
                    sizes: "100vw",
                  }),
                }),
              ],
            }),
          });
      function p() {
        let e;
        let t = (0, s.useRef)(null),
          a = (0, s.useRef)(!1);
        return (
          (0, x.E)(() => {
            if (a.current) return;
            a.current = !0;
            let e = window.matchMedia("(max-width: 768px)").matches,
              t = b.os.context(() => {
                b.os.set(".hero-forest", {
                  visibility: "visible",
                  y: e ? 30 : 50,
                  opacity: 0,
                  filter: e ? "blur(0px)" : "blur(6px)",
                  force3D: !0,
                }),
                  b.os.set(".hero-firemen", {
                    visibility: "visible",
                    y: e ? 40 : 80,
                    scale: e ? 0.8 : 0.5,
                    opacity: 0,
                    filter: e ? "blur(0px)" : "blur(4px)",
                    force3D: !0,
                  }),
                  b.os.set(".hero-logo", {
                    visibility: "visible",
                    opacity: 0,
                    y: -20,
                    scale: 0.9,
                    force3D: !0,
                  }),
                  b.os.set(".hero-text", {
                    visibility: "visible",
                    opacity: 0,
                    y: 20,
                    force3D: !0,
                  }),
                  b.os
                    .timeline({
                      delay: 0.5,
                      onComplete: () => {
                        var e, t, a, r;
                        null === (e = document.querySelector(".hero-forest")) ||
                          void 0 === e ||
                          e.classList.remove("hero-forest-initial"),
                          null ===
                            (t = document.querySelector(".hero-firemen")) ||
                            void 0 === t ||
                            t.classList.remove("hero-firemen-initial"),
                          null === (a = document.querySelector(".hero-logo")) ||
                            void 0 === a ||
                            a.classList.remove("hero-logo-initial"),
                          null === (r = document.querySelector(".hero-text")) ||
                            void 0 === r ||
                            r.classList.remove("hero-text-initial");
                      },
                    })
                    .to(".hero-forest", {
                      y: 0,
                      opacity: 1,
                      filter: "blur(0px)",
                      duration: e ? 1 : 1.5,
                      ease: "power2.out",
                      force3D: !0,
                    })
                    .to(
                      ".hero-firemen",
                      {
                        y: 0,
                        scale: 1,
                        opacity: 1,
                        filter: "blur(0px)",
                        duration: e ? 0.8 : 1.2,
                        ease: e ? "power2.out" : "back.out(1.2)",
                        force3D: !0,
                      },
                      "-=0.8"
                    )
                    .to(
                      ".hero-logo",
                      {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        force3D: !0,
                      },
                      "-=0.5"
                    )
                    .to(
                      ".hero-text",
                      {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        force3D: !0,
                      },
                      "-=0.6"
                    );
              });
            return () => t.revert();
          }, []),
          (0, r.jsxs)("div", {
            className: "relative min-h-screen",
            children: [
              (0, r.jsx)(f, {}),
              (0, r.jsx)(g, {}),
              (0, r.jsx)(n.F, {}),
              (0, r.jsx)("div", {
                className: "relative min-h-screen flex flex-col justify-end",
                children: (0, r.jsx)(h, {}),
              }),
              (0, r.jsx)("div", {
                className:
                  "hero-logo hero-logo-initial absolute top-[20vh] sm:top-[15vh] md:top-[10vh] lg:top-[13vh] left-1/2 -translate-x-1/2 z-50 w-full max-w-[95%] sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[60%]",
                children: (0, r.jsxs)("svg", {
                  viewBox: "0 0 1000 300",
                  className: "w-full",
                  preserveAspectRatio: "xMidYMid meet",
                  children: [
                    (0, r.jsx)("defs", {
                      children: (0, r.jsx)("path", {
                        id: "curve",
                        d: "M 50 200 Q 500 0 950 200",
                        fill: "transparent",
                      }),
                    }),
                    (0, r.jsxs)("text", {
                      className:
                        "font-super-sense text-[7rem] sm:text-[5rem] md:text-[6rem] lg:text-[6rem] tracking-wider uppercase bobble select-none",
                      children: [
                        (0, r.jsx)("textPath", {
                          href: "#curve",
                          textAnchor: "middle",
                          startOffset: "50%",
                          className:
                            "stroke-[20px] stroke-black fill-transparent",
                          children: "Tree in Cat",
                        }),
                        (0, r.jsx)("textPath", {
                          href: "#curve",
                          textAnchor: "middle",
                          startOffset: "50%",
                          fill: "#96E9A2",
                          children: "Tree in Cat",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("div", {
                className:
                  "hero-text hero-text-initial absolute top-[35vh] text-center left-1/2 -translate-x-1/2 sm:top-[28vh] md:top-[28vh] lg:top-[28vh] xl:top-[32vh] m-auto z-50 w-[90%] sm:w-[80%] md:w-[70%] max-w-[800px] lg:max-w-[900px] xl:max-w-[1200px]",
                children: (0, r.jsx)("p", {
                  ref: t,
                  className:
                    "font-dyna-puff text-black font-bold text-2xl md:text-3xl lg:text-4xl select-none",
                  children:
                    ((e = 0),
                    "The Absurd Memeverse".split(" ").map((t, a, o) =>
                      (0, r.jsxs)(
                        "span",
                        {
                          className: "inline-block",
                          children: [
                            t.split("").map((t) => {
                              let a = e++;
                              return (0, r.jsx)(
                                "span",
                                {
                                  className: "inline-block magic-letter",
                                  style: { "--index": a },
                                  children: t,
                                },
                                a
                              );
                            }),
                            a < o.length - 1 &&
                              (0, r.jsx)("span", {
                                className: "inline-block magic-letter",
                                style: { "--index": e++ },
                                children: "\xa0",
                              }),
                          ],
                        },
                        a
                      )
                    )),
                }),
              }),
            ],
          })
        );
      }
      let w = p;
    },
    6222: (e, t, a) => {
      a.d(t, { F: () => c });
      var r = a(5155),
        o = a(8803),
        i = a.n(o),
        n = a(5565),
        s = a(8173),
        l = a.n(s);
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
                        children: (0, r.jsx)(n.default, {
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
                        children: (0, r.jsx)(n.default, {
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
                        children: (0, r.jsx)(n.default, {
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
                      //   children: (0, r.jsx)(n.default, {
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
                      //   children: (0, r.jsx)(n.default, {
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
    9224: (e, t, a) => {
      a.d(t, { a: () => o });
      var r = a(2115);
      let o = () => {
        let [e, t] = (0, r.useState)(!1),
          [a, o] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            o(!0);
            let e = () => window.matchMedia("(max-width: 768px)").matches;
            t(e());
            let a = () => t(e());
            return (
              window.addEventListener("resize", a),
              () => window.removeEventListener("resize", a)
            );
          }, []),
          !!a && e
        );
      };
    },
  },
]);
