(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [730],
  {
    7031: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 5501));
    },
    6046: (e, t, a) => {
      "use strict";
      var r = a(6658);
      a.o(r, "useRouter") &&
        a.d(t, {
          useRouter: function () {
            return r.useRouter;
          },
        }),
        a.o(r, "useSearchParams") &&
          a.d(t, {
            useSearchParams: function () {
              return r.useSearchParams;
            },
          });
    },
    5501: (e, t, a) => {
      "use strict";
      a.d(t, { GamesPageContent: () => S });
      var r = a(5155),
        n = a(3074),
        i = a(6222),
        s = a(4145),
        o = a(8803),
        l = a.n(o),
        c = a(5565);
      let d = () =>
          (0, r.jsx)("div", {
            className: "absolute inset-0 w-full h-full",
            children: (0, r.jsx)(c.default, {
              src: "/images/games-page/games_hero_bg.webp",
              alt: "Games Hero Background",
              fill: !0,
              style: { objectFit: "cover" },
              priority: !0,
            }),
          }),
        m = () =>
          (0, r.jsx)("div", {
            className:
              "absolute bottom-[4vh] left-1/2 -translate-x-1/2 w-[40%] sm:w-[38%] md:w-[28%] lg:w-[27%] xl:w-[23%] 2xl:w-[19%] 3xl:w-[15%] max-w-[600px] z-[15]",
            children: (0, r.jsx)(c.default, {
              src: "/images/games-page/tic_game_builder.webp",
              alt: "TIC Game Builder",
              width: 800,
              height: 1e3,
              className: "w-full h-auto",
            }),
          }),
        g = () =>
          (0, r.jsx)(l(), {
            id: "e5e6815b9e7ca30",
            children:
              "@-webkit-keyframes gradient-flow{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-moz-keyframes gradient-flow{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-o-keyframes gradient-flow{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@keyframes gradient-flow{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}.animate-gradient-flow{background-image:-webkit-linear-gradient(left,rgb(127,183,252),rgb(131,238,110),rgb(255,198,228),rgb(102,253,127),rgb(162,204,255));background-image:-moz-linear-gradient(left,rgb(127,183,252),rgb(131,238,110),rgb(255,198,228),rgb(102,253,127),rgb(162,204,255));background-image:-o-linear-gradient(left,rgb(127,183,252),rgb(131,238,110),rgb(255,198,228),rgb(102,253,127),rgb(162,204,255));background-image:linear-gradient(to right,rgb(127,183,252),rgb(131,238,110),rgb(255,198,228),rgb(102,253,127),rgb(162,204,255));-webkit-background-size:200%200%;-moz-background-size:200%200%;-o-background-size:200%200%;background-size:200%200%;-webkit-animation:gradient-flow 4s linear infinite;-moz-animation:gradient-flow 4s linear infinite;-o-animation:gradient-flow 4s linear infinite;animation:gradient-flow 4s linear infinite;-webkit-background-clip:text;background-clip:text;display:inline-block}",
          }),
        f = () => {
          let { isInTelegram: e } = (0, n.j)();
          return (0, r.jsxs)("section", {
            className:
              "jsx-a195447767c43b7c relative bg-black h-screen max-h-[650px] sm:max-h-[750px] md:max-h-[750px] lg:max-h-[850px] xl:max-screen 2xl:max-h-screen w-full overflow-hidden",
            children: [
              (0, r.jsx)(d, {}),
              (0, r.jsxs)("svg", {
                width: "100%",
                height: "100%",
                viewBox: "0 0 1200 900",
                preserveAspectRatio: "none",
                style: { width: "100%", height: "100%" },
                className:
                  "jsx-a195447767c43b7c absolute inset-0 z-20 pointer-events-none",
                children: [
                  (0, r.jsxs)("defs", {
                    className: "jsx-a195447767c43b7c",
                    children: [
                      (0, r.jsx)("filter", {
                        id: "soft-edge-blur",
                        className: "jsx-a195447767c43b7c",
                        children: (0, r.jsx)("feGaussianBlur", {
                          stdDeviation: "15",
                          className: "jsx-a195447767c43b7c",
                        }),
                      }),
                      (0, r.jsxs)("mask", {
                        id: "lamp-mask",
                        className: "jsx-a195447767c43b7c",
                        children: [
                          (0, r.jsx)("rect", {
                            x: "0",
                            y: "0",
                            width: "1200",
                            height: "900",
                            fill: "white",
                            className: "jsx-a195447767c43b7c",
                          }),
                          (0, r.jsx)("g", {
                            filter: "url(#soft-edge-blur)",
                            className: "jsx-a195447767c43b7c lamp-swing",
                            children: (0, r.jsx)("polygon", {
                              points: "600,-50 150,1500 1050,1500",
                              fill: "black",
                              className: "jsx-a195447767c43b7c",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)("rect", {
                    x: "0",
                    y: "0",
                    width: "1200",
                    height: "900",
                    fill: "rgba(0,0,0,0.55)",
                    mask: "url(#lamp-mask)",
                    className: "jsx-a195447767c43b7c",
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className:
                  "jsx-a195447767c43b7c " +
                  "absolute inset-0 flex items-center justify-center pt-0 z-10 ".concat(
                    e ? "" : "top-[12vh]"
                  ),
                children: (0, r.jsxs)("h1", {
                  className:
                    "jsx-a195447767c43b7c text-5xl md:text-8xl lg:text-10xl xl:text-[10rem] font-super-sense text-center relative top-[-25vh] sm:top-[-30vh] 2xl:top-[-30vh]",
                  children: [
                    (0, r.jsx)("span", {
                      className:
                        "jsx-a195447767c43b7c absolute inset-0 [-webkit-text-stroke:20px_#000] [text-stroke:20px_#000] text-transparent",
                      children: "GAMES",
                    }),
                    (0, r.jsxs)("span", {
                      className:
                        "jsx-a195447767c43b7c animate-gradient-flow bg-clip-text text-transparent relative",
                      children: ["GAMES", (0, r.jsx)(g, {})],
                    }),
                  ],
                }),
              }),
              (0, r.jsx)(m, {}),
              (0, r.jsx)(l(), {
                id: "a195447767c43b7c",
                children:
                  "@-webkit-keyframes lamp-swing{0%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}50%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}}@-moz-keyframes lamp-swing{0%{-moz-transform:rotate(-12deg);transform:rotate(-12deg)}50%{-moz-transform:rotate(12deg);transform:rotate(12deg)}100%{-moz-transform:rotate(-12deg);transform:rotate(-12deg)}}@-o-keyframes lamp-swing{0%{-o-transform:rotate(-12deg);transform:rotate(-12deg)}50%{-o-transform:rotate(12deg);transform:rotate(12deg)}100%{-o-transform:rotate(-12deg);transform:rotate(-12deg)}}@keyframes lamp-swing{0%{-webkit-transform:rotate(-12deg);-moz-transform:rotate(-12deg);-o-transform:rotate(-12deg);transform:rotate(-12deg)}50%{-webkit-transform:rotate(12deg);-moz-transform:rotate(12deg);-o-transform:rotate(12deg);transform:rotate(12deg)}100%{-webkit-transform:rotate(-12deg);-moz-transform:rotate(-12deg);-o-transform:rotate(-12deg);transform:rotate(-12deg)}}.lamp-swing.jsx-a195447767c43b7c{-webkit-transform-origin:600px -50px;-moz-transform-origin:600px -50px;-ms-transform-origin:600px -50px;-o-transform-origin:600px -50px;transform-origin:600px -50px;-webkit-animation:lamp-swing 4s ease-in-out infinite;-moz-animation:lamp-swing 4s ease-in-out infinite;-o-animation:lamp-swing 4s ease-in-out infinite;animation:lamp-swing 4s ease-in-out infinite}",
              }),
            ],
          });
        };
      var x = a(2115),
        b = a(6046);
      let u =
          "mb-12 bg-slate-800/60 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-2xl border-2 border-lime-400/60 relative overflow-hidden group transition-transform duration-300 hover:scale-[1.025] hover:shadow-lime-400/40 hover:border-lime-400/90",
        h =
          "absolute inset-0 pointer-events-none z-0 bg-gradient-to-br from-lime-400/10 via-transparent to-lime-500/10 animate-gradient-move",
        p =
          "inline-block bg-transparent border-2 border-lime-400 text-lime-400 font-semibold py-2 px-5 mt-5 rounded-md hover:bg-lime-400 hover:text-slate-900 transition-all uppercase text-sm tracking-wide shadow-lg group-hover:shadow-lime-400/40 focus:outline-none focus:ring-2 focus:ring-lime-400",
        k =
          "relative w-full max-w-xs mx-auto mb-6 md:max-w-md md:w-1/2 md:mb-0 lg:max-w-lg lg:w-[45%] rounded-xl overflow-visible aspect-square flex items-center justify-center z-10",
        w =
          "transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:-rotate-2 drop-shadow-[0_8px_32px_rgba(163,230,53,0.25)]",
        v =
          "font-mono text-4xl md:text-5xl font-bold mb-3 text-lime-300 drop-shadow-[0_2px_8px_rgba(163,230,53,0.25)] tracking-tight",
        j =
          "font-mono text-slate-200/90 mb-4 text-lg md:text-xl leading-relaxed",
        y = () =>
          (0, r.jsx)("svg", {
            className: "absolute inset-0 w-full h-full z-0 pointer-events-none",
            viewBox: "0 0 400 400",
            fill: "none",
            children: (0, r.jsxs)("g", {
              children: [
                (0, r.jsx)("circle", {
                  cx: "60",
                  cy: "80",
                  r: "2.5",
                  fill: "#A3E635",
                  opacity: "0.7",
                  children: (0, r.jsx)("animate", {
                    attributeName: "r",
                    values: "2.5;4;2.5",
                    dur: "2s",
                    repeatCount: "indefinite",
                  }),
                }),
                (0, r.jsx)("circle", {
                  cx: "320",
                  cy: "120",
                  r: "1.5",
                  fill: "#A3E635",
                  opacity: "0.5",
                  children: (0, r.jsx)("animate", {
                    attributeName: "r",
                    values: "1.5;3;1.5",
                    dur: "1.5s",
                    repeatCount: "indefinite",
                  }),
                }),
                (0, r.jsx)("circle", {
                  cx: "200",
                  cy: "300",
                  r: "2",
                  fill: "#A3E635",
                  opacity: "0.6",
                  children: (0, r.jsx)("animate", {
                    attributeName: "r",
                    values: "2;3.5;2",
                    dur: "2.2s",
                    repeatCount: "indefinite",
                  }),
                }),
                (0, r.jsx)("circle", {
                  cx: "350",
                  cy: "350",
                  r: "1.2",
                  fill: "#A3E635",
                  opacity: "0.4",
                  children: (0, r.jsx)("animate", {
                    attributeName: "r",
                    values: "1.2;2.5;1.2",
                    dur: "1.8s",
                    repeatCount: "indefinite",
                  }),
                }),
                (0, r.jsx)("circle", {
                  cx: "100",
                  cy: "350",
                  r: "1.8",
                  fill: "#A3E635",
                  opacity: "0.5",
                  children: (0, r.jsx)("animate", {
                    attributeName: "r",
                    values: "1.8;3;1.8",
                    dur: "2.5s",
                    repeatCount: "indefinite",
                  }),
                }),
              ],
            }),
          });
      function N() {
        let [e, t] = (0, x.useState)({ x: 0, y: 0 }),
          a = (0, x.useRef)(null);
        return (
          (0, x.useEffect)(() => {
            let e = (e) => {
                let r = a.current;
                if (!r) return;
                let n = r.getBoundingClientRect();
                t({
                  x: ((e.clientX - n.left) / n.width - 0.5) * 2,
                  y: ((e.clientY - n.top) / n.height - 0.5) * 2,
                });
              },
              r = () => t({ x: 0, y: 0 }),
              n = a.current;
            return (
              n &&
                (n.addEventListener("mousemove", e),
                n.addEventListener("mouseleave", r)),
              () => {
                n &&
                  (n.removeEventListener("mousemove", e),
                  n.removeEventListener("mouseleave", r));
              }
            );
          }, []),
          [a, e]
        );
      }
      let z = () => {
        let { isInTelegram: e, telegram: t, startParams: a } = (0, n.j)(),
          i = null == t ? void 0 : t.WebApp,
          [s, o] = (0, x.useState)(null),
          l = (0, b.useSearchParams)(),
          d = (0, b.useRouter)(),
          m = (null == l ? void 0 : l.get("ref")) || null;
        (0, x.useEffect)(() => {
          if (e && i) {
            if (i.initDataUnsafe) {
              let e = i.initDataUnsafe.user;
              o(
                (null == a ? void 0 : a.chatId) ||
                  (null == e ? void 0 : e.id) ||
                  null
              );
            }
            let e = () => {
              i.BackButton.hide(), d.back();
            };
            return (
              m && (i.BackButton.onClick(e), i.BackButton.show()),
              () => {
                i.BackButton.offClick(e), i.BackButton.hide();
              }
            );
          }
        }, [e, m, d, a, i]);
        let g = async () => {
            if (!i || !s) return;
            let e = "TreeInCatGameBot";
            e &&
              i.openTelegramLink("https://t.me/".concat(e, "?startgroup=true"));
          },
          f = async (e) => {
            let t =
              "Failed to launch the game. You can manually type /games in the group to launch it instead.";
            if (!i) {
              alert(t);
              return;
            }
            let a = i.initData,
              r = new URLSearchParams(a).get("hash");
            if (r)
              try {
                let t = await fetch(
                  "".concat("https://api.treeincat.com", "/sendGame"),
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      initData: a,
                      initDataSignature: r,
                      payload: { action: "launch_game", game_short_name: e },
                    }),
                  }
                );
                if (!t.ok) {
                  let e = await t.json();
                  throw Error(e.message || "API returned an error");
                }
                await t.json(), i.close();
              } catch (e) {
                (null == i ? void 0 : i.showAlert) ? i.showAlert(t) : alert(t);
              }
          },
          z = "/leaderboard";
        if (e) {
          let e = new URLSearchParams();
          e.set("ref", "games"), (z = "/leaderboard?".concat(e.toString()));
        }
        let C = [
            "/images/games-page/seed_catcher1.webp",
            "/images/games-page/seed_catcher2.webp",
            "/images/games-page/seed_catcher3.webp",
          ],
          _ = [
            "/images/games-page/branch_hopper1.webp",
            "/images/games-page/branch_hopper2.webp",
            "/images/games-page/branch_hopper3.webp",
          ],
          [A, E] = (0, x.useState)(0),
          [B, S] = (0, x.useState)(0);
        (0, x.useEffect)(() => {
          let e = setInterval(() => E((e) => (e + 1) % C.length), 4e3);
          return () => clearInterval(e);
        }, [C.length]),
          (0, x.useEffect)(() => {
            let e = setInterval(() => S((e) => (e + 1) % _.length), 4e3);
            return () => clearInterval(e);
          }, [_.length]);
        let [T, G] = N(),
          [P, I] = N();
        return (0, r.jsxs)("section", {
          className: "relative w-full bg-[#0A1C2E]",
          children: [
            (0, r.jsx)("div", {
              className: "w-full h-auto",
              children: (0, r.jsx)(c.default, {
                src: "/images/games-page/section_breaker.webp",
                alt: "Section divider",
                width: 1920,
                height: 150,
                className: "w-full h-auto object-cover",
                priority: !0,
              }),
            }),
            (0, r.jsxs)("div", {
              className: "container mx-auto px-8 pt-16 pb-16",
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "mb-16 text-center flex flex-col items-center gap-6",
                  children: [
                    (0, r.jsx)("h2", {
                      className:
                        "font-mono font-extrabold text-2xl md:text-3xl text-white mb-2 drop-shadow-lg",
                      children: "Jump in, play hard, and see how you stack up!",
                    }),
                    (0, r.jsxs)("div", {
                      className: "max-w-2xl mx-auto",
                      children: [
                        (0, r.jsx)("p", {
                          className:
                            "font-mono text-base md:text-lg text-slate-200/90 mb-1",
                          children:
                            "Play quirky, fast-paced games right here on the site—or join the Tree in Cat Telegram to take on the leaderboards.",
                        }),
                        (0, r.jsx)("p", {
                          className:
                            "font-mono text-base md:text-lg text-slate-200/90",
                          children:
                            "Got a Telegram community? Add our game bot to play with your community and unlock group, global, and individual rankings. Let the friendly chaos begin!",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "hidden flex items-center justify-center gap-3 mt-2",
                      children: [
                        (0, r.jsx)("button", {
                          type: "button",
                          className: p,
                          onClick: () => {
                            if (e) g();
                            else {
                              let e = document.getElementById(
                                "game-bot-instructions"
                              );
                              e && e.scrollIntoView({ behavior: "smooth" });
                            }
                          },
                          children: "ADD BOT TO YOUR TG",
                        }),
                        (0, r.jsx)("a", {
                          href: z,
                          onClick: (e) => {
                            e.preventDefault(), d.push(z);
                          },
                          className: p,
                          children: "View Leaderboards",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  ref: T,
                  className: u,
                  style: {
                    transform: "rotateY("
                      .concat(8 * G.x, "deg) rotateX(")
                      .concat(-(8 * G.y), "deg)"),
                    transition: "transform 0.2s cubic-bezier(.25,.8,.25,1)",
                  },
                  children: [
                    (0, r.jsx)("div", { className: h }),
                    (0, r.jsx)(y, {}),
                    (0, r.jsxs)("div", {
                      className:
                        "flex flex-col md:flex-row items-center gap-6 relative z-10",
                      children: [
                        (0, r.jsx)("div", {
                          ref: T,
                          className: k,
                          style: {
                            transform: "translateY("
                              .concat(8 * G.y, "px) translateX(")
                              .concat(-(8 * G.x), "px) scale(1.04)"),
                          },
                          children: C.map((e, t) => {
                            let a = t === (A + 1) % C.length,
                              n = t === (A - 1 + C.length) % C.length,
                              i = w;
                            return (
                              t === A
                                ? (i += " opacity-100 scale-105 z-10")
                                : a
                                ? (i +=
                                    " opacity-60 scale-100 rotate-6 translate-x-6 z-0")
                                : n
                                ? (i +=
                                    " opacity-60 scale-100 -rotate-6 -translate-x-6 z-0")
                                : (i += " opacity-0 scale-95 z-0"),
                              (0, r.jsx)(
                                "div",
                                {
                                  className:
                                    "absolute inset-0 flex items-center justify-center ".concat(
                                      i
                                    ),
                                  children: (0, r.jsx)(c.default, {
                                    src: e,
                                    alt: "Seed Catcher screenshot ".concat(
                                      t + 1
                                    ),
                                    width: 500,
                                    height: 750,
                                    className:
                                      "w-full h-full object-contain rounded-xl",
                                    priority: 0 === t,
                                  }),
                                },
                                "seed-wrapper-".concat(t)
                              )
                            );
                          }),
                        }),
                        (0, r.jsxs)("div", {
                          className: "md:w-3/5 text-center",
                          children: [
                            (0, r.jsx)("h3", {
                              className: v,
                              children: "Seed Catcher",
                            }),
                            (0, r.jsx)("p", {
                              className: j,
                              children:
                                "Help the Cat catch falling seeds and grow the forest! Dodge crypto baddies and collect power-ups in this exciting arcade game, or a tree might get stuck in you!",
                            }),
                            (0, r.jsx)("div", {
                              target: e ? void 0 : "_blank",
                              rel: e ? void 0 : "noopener noreferrer",
                              onClick: (t) => {
                                e && (t.preventDefault(), f("seedcatcher"));
                              },
                              className: p,
                              "aria-label": "Play Seed Catcher",
                              children: "Coming Soon",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  ref: P,
                  className: u,
                  style: {
                    transform: "rotateY("
                      .concat(8 * I.x, "deg) rotateX(")
                      .concat(-(8 * I.y), "deg)"),
                    transition: "transform 0.2s cubic-bezier(.25,.8,.25,1)",
                  },
                  children: [
                    (0, r.jsx)("div", { className: h }),
                    (0, r.jsx)(y, {}),
                    (0, r.jsxs)("div", {
                      className:
                        "flex flex-col md:flex-row-reverse items-center gap-6 relative z-10",
                      children: [
                        (0, r.jsx)("div", {
                          className: k,
                          style: {
                            transform: "translateY("
                              .concat(8 * I.y, "px) translateX(")
                              .concat(-(8 * I.x), "px) scale(1.04)"),
                          },
                          children: _.map((e, t) => {
                            let a = t === (B + 1) % _.length,
                              n = t === (B - 1 + _.length) % _.length,
                              i = w;
                            return (
                              t === B
                                ? (i += " opacity-100 scale-105 z-10")
                                : a
                                ? (i +=
                                    " opacity-60 scale-100 rotate-6 translate-x-6 z-0")
                                : n
                                ? (i +=
                                    " opacity-60 scale-100 -rotate-6 -translate-x-6 z-0")
                                : (i += " opacity-0 scale-95 z-0"),
                              (0, r.jsx)(
                                "div",
                                {
                                  className:
                                    "absolute inset-0 flex items-center justify-center ".concat(
                                      i
                                    ),
                                  children: (0, r.jsx)(c.default, {
                                    src: e,
                                    alt: "Branch Hopper screenshot ".concat(
                                      t + 1
                                    ),
                                    width: 500,
                                    height: 750,
                                    className:
                                      "w-full h-full object-contain rounded-xl",
                                    priority: 0 === t,
                                  }),
                                },
                                "branch-wrapper-".concat(t)
                              )
                            );
                          }),
                        }),
                        (0, r.jsxs)("div", {
                          className: "md:w-3/5 text-center",
                          children: [
                            (0, r.jsx)("h3", {
                              className: v,
                              children: "Branch Hopper",
                            }),
                            (0, r.jsx)("p", {
                              className: j,
                              children:
                                "Jump from branch to branch as the Cat explores the treetops. Test your timing and agility in this challenging platformer while avoiding other memes.",
                            }),
                            (0, r.jsx)("div", {                             
                              target: e ? void 0 : "_blank",
                              rel: e ? void 0 : "noopener noreferrer",
                              onClick: (t) => {
                                e && (t.preventDefault(), f("branchhopper"));
                              },
                              className: p,
                              "aria-label": "Play Branch Hopper",
                              children: "Coming Soon",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var C = a(104);
      let _ = "font-bold text-lime-400",
        A =
          "inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-lime-400 text-lime-400 bg-slate-900/60 hover:bg-lime-400 hover:text-slate-900 transition shadow focus:outline-none focus:ring-2 focus:ring-lime-400 disabled:opacity-40 disabled:cursor-not-allowed",
        E = [
          {
            title: "Add our game bot to your Telegram group",
            text: (0, r.jsxs)(r.Fragment, {
              children: [
                "Add a new member to your Telegram community by searching for ",
                " ",
                (0, r.jsx)("span", {
                  className: _,
                  children: "treeincatgamebot",
                }),
              ],
            }),
            img: "/images/games-page/explain_1.png",
            imgAlt: "Add bot screenshot",
          },
          {
            title:
              "Select if you want this group to be included in Leaderboards",
            text: (0, r.jsxs)(r.Fragment, {
              children: [
                "After you add our bot to your Telegram group, you will have an option to ",
                (0, r.jsx)("span", { className: _, children: "OPT IN" }),
                " or ",
                (0, r.jsx)("span", { className: _, children: "OPT OUT" }),
                " from being included in the Global Leaderboards",
              ],
            }),
            img: "/images/games-page/explain_2.png",
            imgAlt: "Opt in/out screenshot",
          },
          {
            title: "Change Leaderboard inclusion at any time",
            text: (0, r.jsxs)(r.Fragment, {
              children: [
                "If you want to change your opt in settings at any time, simply type ",
                " ",
                (0, r.jsx)("span", { className: _, children: "/edit" }),
                ", and you will be provided with the options to opt in or out",
              ],
            }),
            img: "/images/games-page/explain_3.png",
            imgAlt: "Edit inclusion screenshot",
          },
          {
            title: "Play the games!",
            text: (0, r.jsxs)(r.Fragment, {
              children: [
                "To play the game, just type ",
                " ",
                (0, r.jsx)("span", { className: _, children: "/games" }),
                ", and users will be given the option to select which game to play!",
              ],
            }),
            img: null,
            imgAlt: null,
          },
        ],
        B = function () {
          let [e, t] = (0, x.useState)(0),
            a = E[e];
          return null
        };
      function S() {
        let { isInTelegram: e } = (0, n.j)();
        return (0, r.jsxs)(r.Fragment, {
          children: [
            !e && (0, r.jsx)(i.F, {}),
            !e && (0, r.jsx)(s.c, {}),
            (0, r.jsx)(f, {}),
            (0, r.jsx)(x.Suspense, {
              fallback: (0, r.jsx)("div", {
                className: "flex justify-center items-center h-screen",
                children: "Loading...",
              }),
              children: (0, r.jsx)(z, {}),
            }),
            !e && (0, r.jsx)(B, {}),
            !e && (0, r.jsx)(C.w, {}),
          ],
        });
      }
    },
    6222: (e, t, a) => {
      "use strict";
      a.d(t, { F: () => c });
      var r = a(5155),
        n = a(8803),
        i = a.n(n),
        s = a(5565),
        o = a(8173),
        l = a.n(o);
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
                        children: (0, r.jsx)(s.default, {
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
                        children: (0, r.jsx)(s.default, {
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
                        children: (0, r.jsx)(s.default, {
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
                      //   children: (0, r.jsx)(s.default, {
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
                      //   children: (0, r.jsx)(s.default, {
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
    3074: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => s, j: () => o });
      var r = a(5155),
        n = a(2115);
      let i = (0, n.createContext)({
        isInTelegram: !1,
        telegram: null,
        startParams: null,
      });
      function s(e) {
        let { children: t } = e,
          [a, s] = (0, n.useState)(!1),
          [o, l] = (0, n.useState)(null),
          [c, d] = (0, n.useState)(null);
        return (
          (0, n.useEffect)(() => {
            let e = null,
              t = () => {
                var t, a;
                let r = window.Telegram,
                  n = null == r ? void 0 : r.WebApp,
                  i =
                    "undefined" != typeof navigator ? navigator.userAgent : "",
                  o = !!(null == n ? void 0 : n.initData),
                  c = !!(null == n
                    ? void 0
                    : null === (t = n.initDataUnsafe) || void 0 === t
                    ? void 0
                    : t.user);
                if (r && ((o && c) || i.includes("Telegram")) && r) {
                  l(r),
                    null == n ||
                      null === (a = n.ready) ||
                      void 0 === a ||
                      a.call(n),
                    s(!0);
                  let t = new URLSearchParams(window.location.search).get(
                    "tgWebAppStartParam"
                  );
                  if (t) {
                    let e = t.replace(/-/g, "+").replace(/_/g, "/");
                    for (; e.length % 4; ) e += "=";
                    let a = (function (e) {
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
                    if (a)
                      try {
                        let e = JSON.parse(a);
                        d(e);
                      } catch (e) {
                        d(null);
                      }
                  }
                  e && (clearInterval(e), (e = null));
                }
              };
            t(), (e = setInterval(t, 100));
            let a = setTimeout(() => {
              e && clearInterval(e), (e = null);
            }, 5e3);
            return () => {
              e && clearInterval(e), clearTimeout(a);
            };
          }, []),
          (0, r.jsx)(i.Provider, {
            value: { isInTelegram: a, telegram: o, startParams: c },
            children: t,
          })
        );
      }
      function o() {
        return (0, n.useContext)(i);
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [565, 47, 922, 919, 358], () => t(7031)), (_N_E = e.O());
  },
]);
