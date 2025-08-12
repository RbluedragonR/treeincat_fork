"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [361],
  {
    8361: (e, a, t) => {
      t.r(a), t.d(a, { Exchanges: () => g, default: () => b });
      var l = t(5155),
        s = t(2115),
        r = t(2901),
        o = t(116),
        n = t(5565),
        i = t(9224);
      let d = () =>
          (0, l.jsx)("div", {
            className:
              "absolute inset-0 z-0 w-full min-h-screen bg-cover bg-center",
            style: {
              backgroundImage:
                "url('/images/exchanges/exchanges_background.webp')",
            },
            children: (0, l.jsx)("div", {
              className:
                "absolute top-0 left-0 w-full h-[150px] z-10 bg-gradient-to-b from-black to-transparent",
            }),
          }),
        c = () => {
          let e = (0, s.useRef)(null),
            a = (0, i.a)();
          return (
            (0, o.E)(() => {
              if (!e.current) return;
              let t = r.os.context(() => {
                r.os.utils.toArray(".nebula-animation").forEach((e) => {
                  r.os.fromTo(
                    e,
                    { y: "20vh", willChange: "transform" },
                    {
                      y: 0,
                      ease: "none",
                      scrollTrigger: {
                        trigger: e,
                        start: "bottom bottom+=400",
                        end: "top top",
                        scrub: a ? 0.3 : 0.7,
                      },
                    }
                  );
                });
              });
              return () => t.revert();
            }, [a]),
            (0, l.jsxs)("div", {
              className: "absolute top-0 left-0 right-0 z-20 w-full",
              ref: e,
              children: [
                (0, l.jsx)(n.default, {
                  src: "/images/exchanges/exchanges_top.webp",
                  alt: "Exchange transition",
                  width: 1920,
                  height: 200,
                  className: "w-full h-auto -translate-y-[99%]",
                  priority: !0,
                }),
                (0, l.jsx)("div", {
                  className:
                    "absolute top-0 left-[2%] w-[60%] max-w-[600px] z-20 opacity-20 nebula-animation",
                  children: (0, l.jsx)(n.default, {
                    src: "/images/exchanges/nebula2.webp",
                    alt: "Nebula",
                    width: 900,
                    height: 700,
                    priority: !0,
                  }),
                }),
                (0, l.jsx)("div", {
                  className:
                    "absolute top-0 right-[2%] w-[35%] max-w-[550px] z-20 opacity-40 nebula-animation",
                  children: (0, l.jsx)(n.default, {
                    src: "/images/exchanges/nebula1.webp",
                    alt: "Nebula",
                    width: 700,
                    height: 500,
                    priority: !0,
                  }),
                }),
                (0, l.jsx)("div", {
                  className:
                    "absolute hidden lg:block top-[-40vh] left-1/2 -translate-x-1/2 w-[50%] max-w-[700px] z-20 opacity-40 nebula-animation",
                  children: (0, l.jsx)(n.default, {
                    src: "/images/exchanges/nebula3.webp",
                    alt: "Nebula",
                    width: 1e3,
                    height: 400,
                    priority: !0,
                  }),
                }),
              ],
            })
          );
        },
        p = () =>
          (0, l.jsx)("div", {
            className:
              "absolute top-[10%] md:top-[4%] left-1/2 -translate-x-1/2 z-30 w-full text-center",
            children: (0, l.jsx)("h1", {
              className:
                "text-[4rem] md:text-[5rem] xl:text-[8rem] font-[Star] text-transparent bg-clip-text animate-gradient-flow",
              children: "EXCHANGES",
            }),
          }),
        x = () =>
          (0, l.jsx)("div", {
            className:
              "absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full text-center z-50",
            children: (0, l.jsx)("h1", {
              className:
                "text-[4rem] md:text-[5rem] xl:text-[8rem] font-[Star] text-transparent bg-clip-text animate-gradient-flow",
              children: "WALLETS",
            }),
          }),
        m = () =>
          (0, l.jsx)("div", {
            className:
              "absolute bottom-[-6vh] left-1/2 -translate-x-1/2 w-full max-w-[350px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[400px] xl:max-w-[550px] 2xl:max-w-[500px] px-4 md:mix-blend-lighten",
            children: (0, l.jsxs)("div", {
              className: "relative group sun-glow-container",
              children: [
                (0, l.jsx)("div", {
                  className:
                    "absolute inset-0 bg-red-600/30 blur-[50px] rounded-full -z-10 animate-glow-pulse",
                }),
                (0, l.jsx)("div", { className: "sun-gradient-overlay" }),
                (0, l.jsx)(n.default, {
                  src: "/images/exchanges/TIC-behind.webp",
                  alt: "TIC Logo",
                  width: 700,
                  height: 700,
                  className:
                    "w-full h-auto drop-shadow-[0_0_15px_rgba(248,113,113,1)] animate-tic-float relative z-10",
                  priority: !0,
                }),
              ],
            }),
          }),
        h = () => {
          let e = (0, s.useRef)(null),
            a = (0, i.a)();
          return (
            (0, o.E)(() => {
              if (!e.current) return;
              let t = r.os.context(() => {
                r.os.fromTo(
                  e.current,
                  {
                    xPercent: -250,
                    yPercent: 100,
                    scale: 1.5,
                    opacity: 1,
                    willChange: "transform, opacity",
                  },
                  {
                    xPercent: 0,
                    yPercent: 0,
                    scale: 0.1,
                    opacity: 0.4,
                    ease: "power1.out",
                    scrollTrigger: {
                      trigger: e.current,
                      start: "top bottom",
                      end: "bottom middle",
                      scrub: a ? 0.5 : 1,
                    },
                  }
                );
              });
              return () => t.revert();
            }, [a]),
            (0, l.jsx)("div", {
              ref: e,
              className:
                "spaceship-animation absolute top-0 right-0 w-[200px] md:w-[300px] lg:w-[350px] z-30",
              children: (0, l.jsx)(n.default, {
                src: "/images/exchanges/spaceship_tic.webp",
                alt: "Spaceship TIC",
                width: 400,
                height: 300,
                className: "w-full h-auto animate-float relative z-10",
                priority: !0,
              }),
            })
          );
        },
        u = () =>
          (0, l.jsx)("div", {
            className:
              "absolute top-[27%] xl:top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] px-4 md:mix-blend-lighten",
            children: (0, l.jsxs)("div", {
              className:
                "flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10",
              children: [
                (0, l.jsxs)("a", {
                  href: "https://ascendex.com/en/cashtrade-spottrading/usdt/treeincat",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "hidden w-[170px] md:w-[200px] lg:w-[230px] xl:w-[260px] relative group block cursor-pointer hover:scale-105 transition-transform duration-300",
                  children: [
                    (0, l.jsx)("div", {
                      className:
                        "absolute inset-0 bg-blue-400/15 rounded-full -z-10 hidden md:block md:shadow-[0_0_30px_rgba(96,165,250,0.4)] animate-glow-pulse",
                    }),
                    (0, l.jsx)(n.default, {
                      src: "/images/exchanges/ascendex-logo.webp",
                      alt: "AscendEX",
                      width: 300,
                      height: 100,
                      className:
                        "w-full h-auto md:drop-shadow-[0_0_12px_rgba(96,165,250,0.7)]",
                    }),
                  ],
                }),
                (0, l.jsxs)("a", {
                  href: "https://www.bitmart.com/trade/en-US?symbol=TREEINCAT_USDT",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "hidden w-[170px] md:w-[200px] lg:w-[230px] xl:w-[260px] relative group block cursor-pointer hover:scale-105 transition-transform duration-300",
                  children: [
                    (0, l.jsx)("div", {
                      className:
                        "absolute inset-0 bg-purple-400/15 rounded-full -z-10 hidden md:block md:shadow-[0_0_30px_rgba(168,85,247,0.4)] animate-glow-pulse delay-150",
                    }),
                    (0, l.jsx)(n.default, {
                      src: "/images/exchanges/bitmart-logo.webp",
                      alt: "BitMart",
                      width: 300,
                      height: 100,
                      className:
                        "w-full h-auto md:drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]",
                    }),
                  ],
                }),
              ],
            }),
          }),
        w = () =>
          (0, l.jsx)("div", {
            className:
              "absolute top-[55%] lg:top-[57%] xl:top-[53%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] px-4 md:mix-blend-lighten",
            children: (0, l.jsx)("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-center",
              children: (0, l.jsx)("div", {
                className: "col-span-full lg:col-span-3",
                children: (0, l.jsxs)("div", {
                  className:
                    "flex flex-wrap justify-center items-center gap-8 md:gap-12",
                  children: [
                    (0, l.jsxs)("div", {                      
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "hidden w-[120px] md:w-[170px] lg:w-[230px] xl:w-[250px] relative group block cursor-pointer hover:scale-105 transition-transform duration-300",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            " absolute inset-0 bg-purple-400/15 rounded-full -z-10 hidden md:block md:shadow-[0_0_30px_rgba(168,85,247,0.4)] animate-glow-pulse delay-300",
                        }),
                        (0, l.jsx)(n.default, {
                          src: "/images/exchanges/metamask-wallet.webp",
                          alt: "MetaMask Wallet",
                          width: 300,
                          height: 100,
                          className:
                            " w-full h-auto md:drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]",
                        }),
                      ],
                    }),
                    (0, l.jsxs)("a", {
                      href: "https://app.binance.com/en/web3wallet?_dp=L21wL2FwcD9hcHBJZD14b3FYeFVTTVJjY0xDclpOUmVibXpqJnN0YXJ0UGFnZVBhdGg9Y0dGblpYTXZaR0Z6YUdKdllYSmtMVzVsZHk5cGJtUmxlQT09JnN0YXJ0UGFnZVF1ZXJ5PVpuSnZiVDF2ZEdobGNnPT0",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "hidden w-[200px] md:w-[210px] lg:w-[270px] xl:w-[290px] relative group block cursor-pointer hover:scale-105 transition-transform duration-300",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "absolute inset-0 bg-yellow-400/15 rounded-full -z-10 hidden md:block md:shadow-[0_0_30px_rgba(251,191,36,0.4)] animate-glow-pulse",
                        }),
                        (0, l.jsx)(n.default, {
                          src: "/images/exchanges/binance-wallet.webp",
                          alt: "Binance Wallet",
                          width: 300,
                          height: 100,
                          className:
                            "w-full h-auto md:drop-shadow-[0_0_12px_rgba(251,191,36,0.7)]",
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        " w-[150px] md:w-[170px] lg:w-[230px] xl:w-[250px] relative group block cursor-pointer hover:scale-105 transition-transform duration-300",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "absolute inset-0 bg-blue-400/15 rounded-full -z-10 hidden md:block md:shadow-[0_0_30px_rgba(96,165,250,0.4)] animate-glow-pulse",
                        }),
                        (0, l.jsx)(n.default, {
                          src: "/images/exchanges/metamask-wallet.webp",
                          alt: "Trust Wallet",
                          width: 300,
                          height: 100,
                          className:
                            "w-full h-auto md:drop-shadow-[0_0_12px_rgba(96,165,250,0.7)]",
                        }),
                      ],
                    }),
                    (0, l.jsxs)("a", {
                      href: "https://wallet.coinbase.com/assets/crypto/SOL%2FTREEINCAT%2FEthereum_CHAIN%3A101%2Ffalse%2F0xTBA?assetUUID=71fc7d2f-018c-460a-9359-f4228ca7e62f&assetName=Tree stuck in cat",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "hidden w-[150px] md:w-[170px] lg:w-[230px] xl:w-[250px] relative group block cursor-pointer hover:scale-105 transition-transform duration-300",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "absolute inset-0 bg-green-400/15 rounded-full -z-10 hidden md:block md:shadow-[0_0_30px_rgba(74,222,128,0.4)] animate-glow-pulse delay-150",
                        }),
                        (0, l.jsx)(n.default, {
                          src: "/images/exchanges/coinbase-wallet.webp",
                          alt: "Coinbase Wallet",
                          width: 300,
                          height: 100,
                          className:
                            "w-full h-auto md:drop-shadow-[0_0_12px_rgba(74,222,128,0.7)]",
                        }),
                      ],
                    }),
                    (0, l.jsxs)("a", {
                      href: "hidden https://www.okx.com/web3/detail/501/0xTBA",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "w-[150px] md:w-[170px] lg:w-[230px] xl:w-[250px] relative group block cursor-pointer hover:scale-105 transition-transform duration-300",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "absolute inset-0 bg-red-400/15 rounded-full -z-10 hidden md:block md:shadow-[0_0_30px_rgba(248,113,113,0.4)] animate-glow-pulse",
                        }),
                        (0, l.jsx)(n.default, {
                          src: "/images/exchanges/okx-wallet.webp",
                          alt: "OKX Wallet",
                          width: 300,
                          height: 100,
                          className:
                            "hidden w-full h-auto md:drop-shadow-[0_0_12px_rgba(248,113,113,0.7)]",
                        }),
                      ],
                    }),
                    (0, l.jsxs)("a", {
                      href: "https://bkcode.vip/?pageAction=quotekdetailpage&chain=sol&contract=0xTBA&isSpecialty=1&source=nav_swap_contract",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "hidden w-[150px] md:w-[170px] lg:w-[230px] xl:w-[250px] relative group block cursor-pointer hover:scale-105 transition-transform duration-300",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "absolute inset-0 bg-indigo-400/15 rounded-full -z-10 hidden md:block md:shadow-[0_0_30px_rgba(99,102,241,0.4)] animate-glow-pulse",
                        }),
                        (0, l.jsx)(n.default, {
                          src: "/images/exchanges/bg-wallet.webp",
                          alt: "BitGet Wallet",
                          width: 300,
                          height: 100,
                          className:
                            "hidden w-full h-auto md:drop-shadow-[0_0_12px_rgba(99,102,241,0.7)]",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
      function g() {
        return (0, l.jsxs)("div", {
          className: "relative",
          children: [
            (0, l.jsx)(d, {}),
            (0, l.jsx)(h, {}),
            (0, l.jsx)(c, {}),
            (0, l.jsx)(p, {}),
            (0, l.jsx)(x, {}),
            (0, l.jsxs)("div", {
              className: "relative min-h-screen w-full overflow-hidden z-30",
              children: [
                (0, l.jsx)(u, {}),
                (0, l.jsx)(m, {}),
                (0, l.jsx)(w, {}),
              ],
            }),
          ],
        });
      }
      let b = g;
    },
    9224: (e, a, t) => {
      t.d(a, { a: () => s });
      var l = t(2115);
      let s = () => {
        let [e, a] = (0, l.useState)(!1),
          [t, s] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            s(!0);
            let e = () => window.matchMedia("(max-width: 768px)").matches;
            a(e());
            let t = () => a(e());
            return (
              window.addEventListener("resize", t),
              () => window.removeEventListener("resize", t)
            );
          }, []),
          !!t && e
        );
      };
    },
  },
]);
