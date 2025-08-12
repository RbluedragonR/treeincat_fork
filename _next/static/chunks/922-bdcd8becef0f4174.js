"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [922],
  {
    104: (e, a, n) => {
      n.d(a, { w: () => s });
      var i = n(5155),
        t = n(8173),
        r = n.n(t),
        o = n(5565);
      function s() {
        return (0, i.jsxs)("div", {
          className:
            "relative h-[70vh] lg:h-[50vh] xl:h-[50vh] w-full overflow-hidden",
          children: [
            (0, i.jsxs)("div", {
              style:  {background: "linear-gradient(135deg,rgba(173,216,230,1),rgba(144,238,144,1),rgba(255,182,193,1))"},
              className:
                "absolute inset-0 bg-[linear-gradient(135deg,rgba(173,216,230,1),rgba(144,238,144,1),rgba(255,182,193,1))] bg-[length:400%_400%] animate-nav-bg",
            }),             
            (0, i.jsxs)("div", {
              className:
                "relative z-10 h-full flex flex-col items-center justify-top text-center px-4 pt-5 md:pt-10 lg:pt-10",
              children: [
                // (0, i.jsx)("a", {
                //   href: "mailto:team@treeincat.com",
                //   className:
                //     "text-black/80 hover:text-black mb-6 text-2xl md:text-3xl lg:text-4xl transition-colors",
                //   children: "team@treeincat.com",
                // }),
                (0, i.jsxs)("div", {
                  className: "flex gap-6 mb-6",
                  children: [
                    (0, i.jsx)(r(), {
                      href: "https://twitter.com/TreeStuckInCat",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: (0, i.jsx)(o.default, {
                        src: "/images/navbar/x_logo.webp",
                        alt: "X",
                        width: 24,
                        height: 24,
                      }),
                    }),
                    (0, i.jsx)(r(), {
                      href: "https://t.me/TreeInCat",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: (0, i.jsx)(o.default, {
                        src: "/images/navbar/tg_logo.webp",
                        alt: "Telegram",
                        width: 24,
                        height: 24,
                      }),
                    }),
                    // (0, i.jsx)(r(), {
                    //   href: "https://coinmarketcap.com/currencies/tree-stuck-in-cat/",
                    //   target: "_blank",
                    //   rel: "noopener noreferrer",
                    //   children: (0, i.jsx)(o.default, {
                    //     src: "/images/navbar/cmc_logo.webp",
                    //     alt: "CoinMarketCap",
                    //     width: 24,
                    //     height: 24,
                    //   }),
                    // }),
                    (0, i.jsx)(r(), {
                      href: "https://dexscreener.com/ethereum/0xTBA",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: (0, i.jsx)(o.default, {
                        src: "/images/navbar/dex_logo.webp",
                        alt: "DEX",
                        width: 24,
                        height: 24,
                      }),
                    }),
                    // (0, i.jsx)(r(), {
                    //   href: "https://www.coingecko.com/en/coins/tree-stuck-in-cat",
                    //   target: "_blank",
                    //   rel: "noopener noreferrer",
                    //   children: (0, i.jsx)(o.default, {
                    //     src: "/images/navbar/cg_logo.webp",
                    //     alt: "CoinGecko",
                    //     width: 24,
                    //     height: 24,
                    //   }),
                    // }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "mb-2",
                  children: (0, i.jsx)(r(), {
                    href: "/TREEINCATwp.pdf",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "text-black/90 font-chalk text-[1.5rem] md:text-[1.5rem] lg:text-[2rem] hover:text-black hover:underline uppercase transition-colors",
                    children: "White Paper",
                  }),
                }),
                (0, i.jsx)("p", {
                  className:
                    "text-black text-base text-[13px] sm:text-[1rem] lg:text-[1rem] text-center w-[90%] md:w-[80%] lg:w-[80%]",
                  children:
                    "The content on this website is for informational purposes only and is not intended as financial advice. Cryptocurrency investments are subject to high market risks and volatility. Readers are advised to conduct their own research or consult with a professional financial advisor before making any investment decisions.",
                }),
                (0, i.jsxs)("div", {
                  className:
                    "mt-4 flex items-center gap-1 text-black/60 hover:text-black/80 font-medium transition-colors",
                  children: [
                    "Made with ",
                    (0, i.jsx)("span", {
                      className: "animate-pulse",
                      children: "❤️",
                    }),
                    " by Tree In Cat team",
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    4145: (e, a, n) => {
      n.d(a, { c: () => d });
      var i = n(5155),
        t = n(8803),
        r = n.n(t),
        o = n(2115),
        s = n(5565),
        l = n(8173),
        c = n.n(l);
      function d() {
        let [e, a] = (0, o.useState)(!1);
        return (
          (0, o.useEffect)(
            () => (
              e
                ? (document.body.style.overflow = "hidden")
                : (document.body.style.overflow = "unset"),
              () => {
                document.body.style.overflow = "unset";
              }
            ),
            [e]
          ),
          (0, i.jsxs)("div", {
            className: "fixed top-0 right-0 z-50 lg:hidden",
            children: [
              (0, i.jsxs)("button", {
                onClick: () => a(!e),
                className:
                  "relative z-50 p-4 ml-auto flex flex-col items-center justify-center gap-2 bg-transparent",
                "aria-label": "Toggle menu",
                children: [
                  (0, i.jsx)("span", {
                    className:
                      "w-8 h-[3px] bg-[#0066CC] burger-line transition-all duration-300 transform origin-center ".concat(
                        e ? "rotate-45 translate-y-[10px] active" : ""
                      ),
                  }),
                  (0, i.jsx)("span", {
                    className:
                      "w-8 h-[3px] bg-[#0066CC] burger-line transition-all duration-300 ".concat(
                        e ? "opacity-0 active" : ""
                      ),
                  }),
                  (0, i.jsx)("span", {
                    className:
                      "w-8 h-[3px] bg-[#0066CC] burger-line transition-all duration-300 transform origin-center ".concat(
                        e ? "-rotate-45 -translate-y-[10px] active" : ""
                      ),
                  }),
                ],
              }),
              e &&
                (0, i.jsxs)("div", {
                  className:
                    "jsx-b52865eabed81f40 fixed inset-0 animated-gradient transform transition-all duration-500 ease-in-out",
                  children: [
                    (0, i.jsxs)("div", {
                      className:
                        "jsx-b52865eabed81f40 flex flex-col h-full pt-20 px-8",
                      children: [
                        (0, i.jsxs)("nav", {
                          className:
                            "jsx-b52865eabed81f40 flex flex-col gap-12 items-center",
                          children: [
                            (0, i.jsx)(c(), {
                              href: "/",
                              className:
                                "text-[#2C1810] font-varela text-3xl tracking-wider relative nav-link-mobile hover:scale-110 transition-transform nav-link-1",
                              children: "HOME",
                            }),
                            (0, i.jsx)(c(), {
                              href: "/games",
                              className:
                                "text-[#2C1810] font-varela text-3xl tracking-wider relative nav-link-mobile hover:scale-110 transition-transform nav-link-2",
                              children: "GAMES",
                            }),
                            // (0, i.jsx)(c(), {
                            //   href: "/gallery",
                            //   className:
                            //     "text-[#2C1810] font-varela text-3xl tracking-wider relative nav-link-mobile hover:scale-110 transition-transform nav-link-4",
                            //   children: "GALLERY",
                            // }),
                            (0, i.jsx)(c(), {
                              href: "/pfpbuilder",
                              className:
                                "text-[#2C1810] font-varela text-3xl tracking-wider relative nav-link-mobile hover:scale-110 transition-transform nav-link-5",
                              children: "PFP BUILDER",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className:
                            "jsx-b52865eabed81f40 mt-auto mb-12 flex justify-center gap-8",
                          children: [
                            (0, i.jsx)("a", {
                              href: "https://x.com/TreeStuckInCat",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "jsx-b52865eabed81f40 social-icon-mobile",
                              children: (0, i.jsx)(s.default, {
                                src: "/images/navbar/x_logo.webp",
                                alt: "X (Twitter)",
                                width: 32,
                                height: 32,
                              }),
                            }),
                            (0, i.jsx)("a", {
                              href: "https://t.me/TreeInCat",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "jsx-b52865eabed81f40 social-icon-mobile",
                              children: (0, i.jsx)(s.default, {
                                src: "/images/navbar/tg_logo.webp",
                                alt: "Telegram",
                                width: 32,
                                height: 32,
                              }),
                            }),
                            (0, i.jsx)("a", {
                              href: "https://dexscreener.com/ethereum/0xTBA",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "jsx-b52865eabed81f40 social-icon-mobile",
                              children: (0, i.jsx)(s.default, {
                                src: "/images/navbar/dex_logo.webp",
                                alt: "DEX",
                                width: 32,
                                height: 32,
                              }),
                            }),
                            // (0, i.jsx)("a", {
                            //   href: "https://coinmarketcap.com/currencies/tree-stuck-in-cat/",
                            //   target: "_blank",
                            //   rel: "noopener noreferrer",
                            //   className:
                            //     "jsx-b52865eabed81f40 social-icon-mobile",
                            //   children: (0, i.jsx)(s.default, {
                            //     src: "/images/navbar/cmc_logo.webp",
                            //     alt: "CoinMarketCap",
                            //     width: 32,
                            //     height: 32,
                            //   }),
                            // }),
                            // (0, i.jsx)("a", {
                            //   href: "https://www.coingecko.com/en/coins/tree-stuck-in-cat",
                            //   target: "_blank",
                            //   rel: "noopener noreferrer",
                            //   className:
                            //     "jsx-b52865eabed81f40 social-icon-mobile",
                            //   children: (0, i.jsx)(s.default, {
                            //     src: "/images/navbar/cg_logo.webp",
                            //     alt: "CoinGecko",
                            //     width: 32,
                            //     height: 32,
                            //   }),
                            // }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)(r(), {
                      id: "b52865eabed81f40",
                      children:
                        ".animated-gradient.jsx-b52865eabed81f40{background:-webkit-linear-gradient(315deg,rgba(173,216,230,1),rgba(144,238,144,1),rgba(255,182,193,1),rgba(255,255,224,1));background:-moz-linear-gradient(315deg,rgba(173,216,230,1),rgba(144,238,144,1),rgba(255,182,193,1),rgba(255,255,224,1));background:-o-linear-gradient(315deg,rgba(173,216,230,1),rgba(144,238,144,1),rgba(255,182,193,1),rgba(255,255,224,1));background:linear-gradient(135deg,rgba(173,216,230,1),rgba(144,238,144,1),rgba(255,182,193,1),rgba(255,255,224,1));-webkit-background-size:400%400%;-moz-background-size:400%400%;-o-background-size:400%400%;background-size:400%400%;-webkit-animation:navBgAnimation 15s ease infinite;-moz-animation:navBgAnimation 15s ease infinite;-o-animation:navBgAnimation 15s ease infinite;animation:navBgAnimation 15s ease infinite}@-webkit-keyframes navBgAnimation{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-moz-keyframes navBgAnimation{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-o-keyframes navBgAnimation{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@keyframes navBgAnimation{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}.nav-link-mobile.jsx-b52865eabed81f40{position:relative;-webkit-transition:all.3s ease;-moz-transition:all.3s ease;-o-transition:all.3s ease;transition:all.3s ease}.nav-link-mobile.jsx-b52865eabed81f40::before{content:\"\";position:absolute;width:100%;height:100%;background:-webkit-linear-gradient(45deg,#ffd700,#ffa500);background:-moz-linear-gradient(45deg,#ffd700,#ffa500);background:-o-linear-gradient(45deg,#ffd700,#ffa500);background:linear-gradient(45deg,#ffd700,#ffa500);-webkit-filter:blur(15px);filter:blur(15px);opacity:0;-webkit-transition:opacity.3s ease;-moz-transition:opacity.3s ease;-o-transition:opacity.3s ease;transition:opacity.3s ease;z-index:-1}.nav-link-mobile.jsx-b52865eabed81f40:hover::before{opacity:.5}.nav-link-mobile.jsx-b52865eabed81f40::after{content:\"\";position:absolute;left:0;bottom:-8px;width:100%;height:3px;background:-webkit-linear-gradient(left,#ffd700 0%,#ffa500 50%,transparent 50%,transparent 100%);background:-moz-linear-gradient(left,#ffd700 0%,#ffa500 50%,transparent 50%,transparent 100%);background:-o-linear-gradient(left,#ffd700 0%,#ffa500 50%,transparent 50%,transparent 100%);background:linear-gradient(90deg,#ffd700 0%,#ffa500 50%,transparent 50%,transparent 100%);-webkit-background-size:200%100%;-moz-background-size:200%100%;-o-background-size:200%100%;background-size:200%100%;background-position:100%0}.nav-link-1.jsx-b52865eabed81f40::after{-webkit-animation:scanline 2s linear infinite;-moz-animation:scanline 2s linear infinite;-o-animation:scanline 2s linear infinite;animation:scanline 2s linear infinite;-webkit-animation-delay:0s;-moz-animation-delay:0s;-o-animation-delay:0s;animation-delay:0s}.nav-link-2.jsx-b52865eabed81f40::after{-webkit-animation:scanline 2s linear infinite;-moz-animation:scanline 2s linear infinite;-o-animation:scanline 2s linear infinite;animation:scanline 2s linear infinite;-webkit-animation-delay:.3s;-moz-animation-delay:.3s;-o-animation-delay:.3s;animation-delay:.3s}.nav-link-3.jsx-b52865eabed81f40::after{-webkit-animation:scanline 2s linear infinite;-moz-animation:scanline 2s linear infinite;-o-animation:scanline 2s linear infinite;animation:scanline 2s linear infinite;-webkit-animation-delay:.6s;-moz-animation-delay:.6s;-o-animation-delay:.6s;animation-delay:.6s}.nav-link-4.jsx-b52865eabed81f40::after{-webkit-animation:scanline 2s linear infinite;-moz-animation:scanline 2s linear infinite;-o-animation:scanline 2s linear infinite;animation:scanline 2s linear infinite;-webkit-animation-delay:.9s;-moz-animation-delay:.9s;-o-animation-delay:.9s;animation-delay:.9s}.nav-link-5.jsx-b52865eabed81f40::after{-webkit-animation:scanline 2s linear infinite;-moz-animation:scanline 2s linear infinite;-o-animation:scanline 2s linear infinite;animation:scanline 2s linear infinite;-webkit-animation-delay:1.2s;-moz-animation-delay:1.2s;-o-animation-delay:1.2s;animation-delay:1.2s}@-webkit-keyframes scanline{0%{background-position:100%0}100%{background-position:-100%0}}@-moz-keyframes scanline{0%{background-position:100%0}100%{background-position:-100%0}}@-o-keyframes scanline{0%{background-position:100%0}100%{background-position:-100%0}}@keyframes scanline{0%{background-position:100%0}100%{background-position:-100%0}}.bg-noise.jsx-b52865eabed81f40{background-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\");-webkit-animation:noiseAnimation.2s infinite linear;-moz-animation:noiseAnimation.2s infinite linear;-o-animation:noiseAnimation.2s infinite linear;animation:noiseAnimation.2s infinite linear;-webkit-background-size:150px;-moz-background-size:150px;-o-background-size:150px;background-size:150px}@-webkit-keyframes noiseAnimation{0%{-webkit-transform:translate(0,0);transform:translate(0,0)}100%{-webkit-transform:translate(1px,1px);transform:translate(1px,1px)}}@-moz-keyframes noiseAnimation{0%{-moz-transform:translate(0,0);transform:translate(0,0)}100%{-moz-transform:translate(1px,1px);transform:translate(1px,1px)}}@-o-keyframes noiseAnimation{0%{-o-transform:translate(0,0);transform:translate(0,0)}100%{-o-transform:translate(1px,1px);transform:translate(1px,1px)}}@keyframes noiseAnimation{0%{-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0)}100%{-webkit-transform:translate(1px,1px);-moz-transform:translate(1px,1px);-o-transform:translate(1px,1px);transform:translate(1px,1px)}}.social-icon-mobile.jsx-b52865eabed81f40{-webkit-transition:all.3s ease;-moz-transition:all.3s ease;-o-transition:all.3s ease;transition:all.3s ease;position:relative}.social-icon-mobile.jsx-b52865eabed81f40::before{content:\"\";position:absolute;inset:-8px;background:-webkit-linear-gradient(45deg,#ffd700,#ffa500);background:-moz-linear-gradient(45deg,#ffd700,#ffa500);background:-o-linear-gradient(45deg,#ffd700,#ffa500);background:linear-gradient(45deg,#ffd700,#ffa500);-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;opacity:0;-webkit-transition:opacity.3s ease;-moz-transition:opacity.3s ease;-o-transition:opacity.3s ease;transition:opacity.3s ease;-webkit-filter:blur(8px);filter:blur(8px);z-index:-1}.social-icon-mobile.jsx-b52865eabed81f40:hover::before{opacity:.5}.social-icon-mobile.jsx-b52865eabed81f40:hover{-webkit-transform:scale(1.2);-moz-transform:scale(1.2);-ms-transform:scale(1.2);-o-transform:scale(1.2);transform:scale(1.2)}.burger-line.jsx-b52865eabed81f40{position:relative;background-color:#06c}",
                    }),
                  ],
                }),
            ],
          })
        );
      }
    },
  },
]);
