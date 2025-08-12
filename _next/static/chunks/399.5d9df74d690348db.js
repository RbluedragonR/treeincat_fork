"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [399],
  {
    399: (e, a, t) => {
      t.r(a), t.d(a, { Games: () => w, default: () => v });
      var r = t(5155),
        s = t(8803),
        o = t.n(s),
        n = t(5565),
        i = t(2115);
      let l = (0, i.memo)((e) => {
        let { children: a, className: t } = e,
          [s, n] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            let e = setInterval(() => {
              0.08 > Math.random() && (n(!0), setTimeout(() => n(!1), 600));
            }, 12e3);
            return () => clearInterval(e);
          }, []),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(o(), {
                id: "b4d845a56d427540",
                children:
                  ".crt-container{background:-webkit-linear-gradient(315deg,#1e293b 0%,#374151 50%,#1f2937 100%);background:-moz-linear-gradient(315deg,#1e293b 0%,#374151 50%,#1f2937 100%);background:-o-linear-gradient(315deg,#1e293b 0%,#374151 50%,#1f2937 100%);background:linear-gradient(135deg,#1e293b 0%,#374151 50%,#1f2937 100%)}.crt-screen{-webkit-transform:perspective(800px)rotatex(.8deg)translate3d(0,0,0);-moz-transform:perspective(800px)rotatex(.8deg)translate3d(0,0,0);transform:perspective(800px)rotatex(.8deg)translate3d(0,0,0);-webkit-box-shadow:inset 0 0 30px rgba(0,0,0,.8),inset 0 0 60px rgba(0,100,255,.1),0 0 20px rgba(0,200,255,.2);-moz-box-shadow:inset 0 0 30px rgba(0,0,0,.8),inset 0 0 60px rgba(0,100,255,.1),0 0 20px rgba(0,200,255,.2);box-shadow:inset 0 0 30px rgba(0,0,0,.8),inset 0 0 60px rgba(0,100,255,.1),0 0 20px rgba(0,200,255,.2);will-change:transform}.crt-phosphor{background:-webkit-radial-gradient(center,ellipse,rgba(255,50,150,.25)0%,rgba(50,255,150,.2)35%,rgba(150,100,255,.25)70%,transparent 100%);background:-moz-radial-gradient(center,ellipse,rgba(255,50,150,.25)0%,rgba(50,255,150,.2)35%,rgba(150,100,255,.25)70%,transparent 100%);background:-o-radial-gradient(center,ellipse,rgba(255,50,150,.25)0%,rgba(50,255,150,.2)35%,rgba(150,100,255,.25)70%,transparent 100%);background:radial-gradient(ellipse at center,rgba(255,50,150,.25)0%,rgba(50,255,150,.2)35%,rgba(150,100,255,.25)70%,transparent 100%);-webkit-animation:phosphorGlow 8s ease-in-out infinite alternate;-moz-animation:phosphorGlow 8s ease-in-out infinite alternate;-o-animation:phosphorGlow 8s ease-in-out infinite alternate;animation:phosphorGlow 8s ease-in-out infinite alternate;will-change:opacity}.crt-scanlines{background:-webkit-repeating-linear-gradient(bottom,transparent 0px,transparent 1px,rgba(0,255,100,.05)1px,rgba(0,255,100,.05)2px,transparent 2px,transparent 4px);background:-moz-repeating-linear-gradient(bottom,transparent 0px,transparent 1px,rgba(0,255,100,.05)1px,rgba(0,255,100,.05)2px,transparent 2px,transparent 4px);background:-o-repeating-linear-gradient(bottom,transparent 0px,transparent 1px,rgba(0,255,100,.05)1px,rgba(0,255,100,.05)2px,transparent 2px,transparent 4px);background:repeating-linear-gradient(0deg,transparent 0px,transparent 1px,rgba(0,255,100,.05)1px,rgba(0,255,100,.05)2px,transparent 2px,transparent 4px);will-change:transform}.crt-content{-webkit-filter:drop-shadow(1px 0 0 rgba(255,0,0,.1))drop-shadow(-1px 0 0 rgba(0,0,255,.1))brightness(1.05)contrast(1.1);filter:drop-shadow(1px 0 0 rgba(255,0,0,.1))drop-shadow(-1px 0 0 rgba(0,0,255,.1))brightness(1.05)contrast(1.1);will-change:filter}.crt-reflection{background:-webkit-linear-gradient(315deg,rgba(255,255,255,.12)0%,transparent 30%,transparent 70%,rgba(255,255,255,.06)100%);background:-moz-linear-gradient(315deg,rgba(255,255,255,.12)0%,transparent 30%,transparent 70%,rgba(255,255,255,.06)100%);background:-o-linear-gradient(315deg,rgba(255,255,255,.12)0%,transparent 30%,transparent 70%,rgba(255,255,255,.06)100%);background:linear-gradient(135deg,rgba(255,255,255,.12)0%,transparent 30%,transparent 70%,rgba(255,255,255,.06)100%)}.crt-vignette{background:-webkit-radial-gradient(center,ellipse,transparent 30%,rgba(0,0,0,.3)80%,rgba(0,0,0,.6)100%);background:-moz-radial-gradient(center,ellipse,transparent 30%,rgba(0,0,0,.3)80%,rgba(0,0,0,.6)100%);background:-o-radial-gradient(center,ellipse,transparent 30%,rgba(0,0,0,.3)80%,rgba(0,0,0,.6)100%);background:radial-gradient(ellipse at center,transparent 30%,rgba(0,0,0,.3)80%,rgba(0,0,0,.6)100%)}.crt-noise{background-image:-webkit-radial-gradient(20%80%,circle,rgba(120,119,198,.3)0%,transparent 50%),-webkit-radial-gradient(80%20%,circle,rgba(255,119,198,.3)0%,transparent 50%),-webkit-radial-gradient(40%40%,circle,rgba(120,255,198,.4)0%,transparent 50%);background-image:-moz-radial-gradient(20%80%,circle,rgba(120,119,198,.3)0%,transparent 50%),-moz-radial-gradient(80%20%,circle,rgba(255,119,198,.3)0%,transparent 50%),-moz-radial-gradient(40%40%,circle,rgba(120,255,198,.4)0%,transparent 50%);background-image:-o-radial-gradient(20%80%,circle,rgba(120,119,198,.3)0%,transparent 50%),-o-radial-gradient(80%20%,circle,rgba(255,119,198,.3)0%,transparent 50%),-o-radial-gradient(40%40%,circle,rgba(120,255,198,.4)0%,transparent 50%);background-image:radial-gradient(circle at 20%80%,rgba(120,119,198,.3)0%,transparent 50%),radial-gradient(circle at 80%20%,rgba(255,119,198,.3)0%,transparent 50%),radial-gradient(circle at 40%40%,rgba(120,255,198,.4)0%,transparent 50%);opacity:.03;-webkit-animation:staticNoise.5s steps(3)infinite;-moz-animation:staticNoise.5s steps(3)infinite;-o-animation:staticNoise.5s steps(3)infinite;animation:staticNoise.5s steps(3)infinite}.crt-glow{-webkit-box-shadow:inset 0 0 20px rgba(0,255,150,.1),inset 0 0 40px rgba(255,100,200,.08),0 0 30px rgba(100,200,255,.15);-moz-box-shadow:inset 0 0 20px rgba(0,255,150,.1),inset 0 0 40px rgba(255,100,200,.08),0 0 30px rgba(100,200,255,.15);box-shadow:inset 0 0 20px rgba(0,255,150,.1),inset 0 0 40px rgba(255,100,200,.08),0 0 30px rgba(100,200,255,.15);-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}.crt-bezel-glow{-webkit-box-shadow:0 0 40px rgba(100,150,255,.3),inset 0 0 20px rgba(255,255,255,.1);-moz-box-shadow:0 0 40px rgba(100,150,255,.3),inset 0 0 20px rgba(255,255,255,.1);box-shadow:0 0 40px rgba(100,150,255,.3),inset 0 0 20px rgba(255,255,255,.1)}@-webkit-keyframes phosphorGlow{0%,100%{opacity:.2;-webkit-transform:scale(1)rotate(0deg);transform:scale(1)rotate(0deg)}50%{opacity:.35;-webkit-transform:scale(1.01)rotate(.1deg);transform:scale(1.01)rotate(.1deg)}}@-moz-keyframes phosphorGlow{0%,100%{opacity:.2;-moz-transform:scale(1)rotate(0deg);transform:scale(1)rotate(0deg)}50%{opacity:.35;-moz-transform:scale(1.01)rotate(.1deg);transform:scale(1.01)rotate(.1deg)}}@-o-keyframes phosphorGlow{0%,100%{opacity:.2;-o-transform:scale(1)rotate(0deg);transform:scale(1)rotate(0deg)}50%{opacity:.35;-o-transform:scale(1.01)rotate(.1deg);transform:scale(1.01)rotate(.1deg)}}@keyframes phosphorGlow{0%,100%{opacity:.2;-webkit-transform:scale(1)rotate(0deg);-moz-transform:scale(1)rotate(0deg);-o-transform:scale(1)rotate(0deg);transform:scale(1)rotate(0deg)}50%{opacity:.35;-webkit-transform:scale(1.01)rotate(.1deg);-moz-transform:scale(1.01)rotate(.1deg);-o-transform:scale(1.01)rotate(.1deg);transform:scale(1.01)rotate(.1deg)}}@-webkit-keyframes staticNoise{0%{-webkit-transform:translate(0px,0px);transform:translate(0px,0px)}33%{-webkit-transform:translate(-1px,1px);transform:translate(-1px,1px)}66%{-webkit-transform:translate(1px,-1px);transform:translate(1px,-1px)}100%{-webkit-transform:translate(0px,0px);transform:translate(0px,0px)}}@-moz-keyframes staticNoise{0%{-moz-transform:translate(0px,0px);transform:translate(0px,0px)}33%{-moz-transform:translate(-1px,1px);transform:translate(-1px,1px)}66%{-moz-transform:translate(1px,-1px);transform:translate(1px,-1px)}100%{-moz-transform:translate(0px,0px);transform:translate(0px,0px)}}@-o-keyframes staticNoise{0%{-o-transform:translate(0px,0px);transform:translate(0px,0px)}33%{-o-transform:translate(-1px,1px);transform:translate(-1px,1px)}66%{-o-transform:translate(1px,-1px);transform:translate(1px,-1px)}100%{-o-transform:translate(0px,0px);transform:translate(0px,0px)}}@keyframes staticNoise{0%{-webkit-transform:translate(0px,0px);-moz-transform:translate(0px,0px);-o-transform:translate(0px,0px);transform:translate(0px,0px)}33%{-webkit-transform:translate(-1px,1px);-moz-transform:translate(-1px,1px);-o-transform:translate(-1px,1px);transform:translate(-1px,1px)}66%{-webkit-transform:translate(1px,-1px);-moz-transform:translate(1px,-1px);-o-transform:translate(1px,-1px);transform:translate(1px,-1px)}100%{-webkit-transform:translate(0px,0px);-moz-transform:translate(0px,0px);-o-transform:translate(0px,0px);transform:translate(0px,0px)}}@media(prefers-reduced-motion:reduce){.crt-phosphor{-webkit-animation:none!important;-moz-animation:none!important;-o-animation:none!important;animation:none!important}.crt-content{-webkit-filter:drop-shadow(1px 0 0 rgba(255,0,0,.1))drop-shadow(-1px 0 0 rgba(0,0,255,.1));filter:drop-shadow(1px 0 0 rgba(255,0,0,.1))drop-shadow(-1px 0 0 rgba(0,0,255,.1))}.crt-noise{-webkit-animation:none!important;-moz-animation:none!important;-o-animation:none!important;animation:none!important}}@media(max-width:768px){.crt-content{-webkit-filter:brightness(1.05);filter:brightness(1.05)}.crt-phosphor{-webkit-animation:none;-moz-animation:none;-o-animation:none;animation:none}.crt-noise{display:none}.crt-glow{-webkit-box-shadow:inset 0 0 20px rgba(0,255,150,.05);-moz-box-shadow:inset 0 0 20px rgba(0,255,150,.05);box-shadow:inset 0 0 20px rgba(0,255,150,.05)}}",
              }),
              (0, r.jsxs)("div", {
                className:
                  "jsx-b4d845a56d427540 " +
                  "crt-container crt-bezel-glow relative w-full ".concat(
                    t || "aspect-[4/3]",
                    " bg-slate-800 border-[12px] border-gray-900 rounded-[20px] shadow-[0_0_50px_rgba(0,0,0,0.7)] overflow-hidden"
                  ),
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "jsx-b4d845a56d427540 absolute inset-[4px] border-2 border-black rounded-[12px] shadow-[inset_0_2px_8px_rgba(255,255,255,0.15),inset_0_0_30px_rgba(100,200,255,0.1)]",
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "jsx-b4d845a56d427540 crt-screen crt-glow relative w-[92%] h-[88%] mx-auto mt-[2%] bg-black rounded-[8px] border-4 border-gray-800 overflow-hidden",
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "jsx-b4d845a56d427540 crt-phosphor absolute inset-0 opacity-20",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "jsx-b4d845a56d427540 crt-noise absolute inset-0 pointer-events-none",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "jsx-b4d845a56d427540 crt-scanlines absolute inset-0 pointer-events-none opacity-60",
                      }),
                      (0, r.jsx)("div", {
                        style: {
                          background:
                            "linear-gradient(180deg, transparent 0%, rgba(100,255,100,0.1) 50%, transparent 100%)",
                          backgroundSize: "100% 8px",
                        },
                        className:
                          "jsx-b4d845a56d427540 absolute inset-0 pointer-events-none opacity-20",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "jsx-b4d845a56d427540 crt-content relative z-10 w-full h-full",
                        children: a,
                      }),
                      s &&
                        (0, r.jsx)("div", {
                          style: { textShadow: "0 0 8px rgba(0,255,0,0.6)" },
                          className:
                            "jsx-b4d845a56d427540 absolute top-4 left-4 font-mono text-xs text-green-400 opacity-60 z-20 pointer-events-none animate-pulse",
                          children:
                            "> \uD83D\uDC31\uD83C\uDF33 TREE_IN_CAT.EXE",
                        }),
                      (0, r.jsx)("div", {
                        className:
                          "jsx-b4d845a56d427540 crt-vignette absolute inset-0 pointer-events-none",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "jsx-b4d845a56d427540 crt-reflection absolute inset-0 pointer-events-none opacity-40",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "jsx-b4d845a56d427540 absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-sm",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "jsx-b4d845a56d427540 absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-400/10 to-transparent rounded-full blur-sm",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "jsx-b4d845a56d427540 absolute bottom-[2%] right-[10%] flex items-center gap-3",
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "jsx-b4d845a56d427540 w-2 h-2 rounded-full bg-red-500 opacity-90 shadow-[0_0_6px_rgba(255,0,0,0.8)]",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "jsx-b4d845a56d427540 w-2 h-4 bg-gray-700 rounded-sm border border-gray-600 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5),0_0_2px_rgba(100,150,255,0.3)]",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "jsx-b4d845a56d427540 w-2 h-4 bg-gray-700 rounded-sm border border-gray-600 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5),0_0_2px_rgba(100,150,255,0.3)]",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "jsx-b4d845a56d427540 w-2 h-4 bg-gray-700 rounded-sm border border-gray-600 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5),0_0_2px_rgba(100,150,255,0.3)]",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "jsx-b4d845a56d427540 w-2 h-4 bg-gray-700 rounded-sm border border-gray-600 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5),0_0_2px_rgba(100,150,255,0.3)]",
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-b4d845a56d427540 absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-b4d845a56d427540 absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-50",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-b4d845a56d427540 absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-blue-400/30 rounded-tl-lg",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-b4d845a56d427540 absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-blue-400/30 rounded-br-lg",
                  }),
                ],
              }),
            ],
          })
        );
      });
      l.displayName = "CRTFrame";
      let d = (e) => {
          let { label: a = "PLAY", className: t = "", onClick: s, ...o } = e;
          return (0, r.jsxs)("button", {
            type: "button",
            onClick: s,
            className:
              "relative inline-flex items-center justify-center px-6 py-2 bg-green-600 text-white rounded-lg font-bold shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 ".concat(
                t
              ),
            ...o,
            children: [
              (0, r.jsx)("span", {
                className:
                  "absolute inset-0 -z-10 bg-gradient-to-r from-blue-800 via-green-500 to-purple-800 opacity-100 animate-playPulse",
              }),
              (0, r.jsx)("span", {
                className: "relative play-text text-xl md:text-xl lg:text-2xl",
                children: a,
              }),
            ],
          });
        },
        c = [
          {
            id: 1,
            title: "Seed Catcher",
            description:
              "Help the Cat catch falling seeds and grow the forest! Dodge crypto baddies and collect power-ups in this exciting arcade game, or a tree might get stuck in you!",
            image: "/images/games/seed_catcher_splash.webp",
            playLink: "https://seedcatcher.treeincat.com/",
          },
          {
            id: 2,
            title: "Branch Hopper",
            description:
              "Jump from branch to branch as the Cat explores the treetops. Test your timing and agility in this challenging platformer while avoiding other memes.",
            image: "/images/games/branch_hopper_splash.webp",
            playLink: "https://branchhopper.treeincat.com/",
          },
        ],
        p = () => {
          let [e, a] = (0, i.useState)(0),
            t = (e) => {
              let { game: a } = e;
              return (0, r.jsxs)("div", {
                className:
                  "flex flex-col bg-[#1a1a2e]/90 overflow-hidden md:backdrop-blur-sm font-mono h-full retro-card relative",
                children: [
                  (0, r.jsx)("div", {
                    className: "absolute inset-0 border-trace",
                  }),
                  (0, r.jsx)("div", {
                    className: "relative w-full h-[65%] p-2",
                    children: (0, r.jsxs)("div", {
                      className:
                        "relative w-full h-full border-4 border-[#4a4a8f] overflow-hidden retro-screen",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-r from-[#2a2a4f]/20 to-[#4a4a8f]/10 animate-gradient",
                        }),
                        (0, r.jsx)(n.default, {
                          src: a.image,
                          alt: a.title,
                          fill: !0,
                          className: "object-contain retro-image",
                          priority: !0,
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex flex-col p-4 text-white retro-content",
                    children: [
                      (0, r.jsx)("h3", {
                        className:
                          "text-lg md:text-2xl font-bold mb-2 tracking-wide retro-text",
                        children: a.title,
                      }),
                      (0, r.jsx)("p", {
                        className:
                          "text-sm md:text-md lg:text-lg mb-3 leading-tight tracking-tight opacity-95",
                        children: a.description,
                      }),
                      (0, r.jsx)(d, {
                        onClick: () => (window.location.href = a.playLink),
                        className:
                          "w-[100%] md:w-[90%] mx-auto text-sm md:text-base",
                      }),
                    ],
                  }),
                ],
              });
            };
          return (0, r.jsx)("div", {
            className: "absolute inset-0 flex items-center justify-center",
            children: (0, r.jsxs)("div", {
              className: "w-[90%] h-[90%]",
              children: [
                (0, r.jsxs)("div", {
                  className: "md:hidden h-full flex flex-col",
                  children: [
                    (0, r.jsx)("div", {
                      className: "flex-grow",
                      children: (0, r.jsx)(t, { game: c[e] }),
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex justify-between mt-3 px-2",
                      children: [
                        (0, r.jsx)("button", {
                          onClick: () => {
                            a((e) => (e - 1 + c.length) % c.length);
                          },
                          className:
                            "bg-[#1a1a2e] text-white px-4 py-2 rounded hover:bg-[#2a2a4f] font-mono tracking-widest border-2 border-[#4a4a8f] transition-all duration-300 retro-text text-sm md:text-base",
                          disabled: c.length <= 1,
                          children: "BACK",
                        }),
                        (0, r.jsx)("button", {
                          onClick: () => {
                            a((e) => (e + 1) % c.length);
                          },
                          className:
                            "bg-[#1a1a2e] text-white px-4 py-2 rounded hover:bg-[#2a2a4f] font-mono tracking-widest border-2 border-[#4a4a8f] transition-all duration-300 retro-text text-sm md:text-base",
                          disabled: c.length <= 1,
                          children: "NEXT",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "hidden md:grid grid-cols-2 gap-3 h-full",
                  children: c.map((e) => (0, r.jsx)(t, { game: e }, e.id)),
                }),
              ],
            }),
          });
        };
      var m = t(2901),
        x = t(116),
        b = t(9224);
      let g = () =>
          (0, r.jsx)("div", {
            className:
              "absolute inset-0 z-0 w-full min-h-screen bg-cover bg-center",
            style: {
              backgroundImage: "url('/images/games/gaming_background.webp')",
            },
          }),
        f = () => {
          let e = (0, i.useRef)(null),
            a = (0, b.a)();
          return (
            (0, x.E)(() => {
              let t = m.os.context(() => {
                m.os.set(e.current, {
                  y: "50vh",
                  scale: 0.5,
                  filter: a ? "none" : "blur(4px)",
                }),
                  m.os.to(e.current, {
                    y: 0,
                    scale: 1,
                    filter: a ? "none" : "blur(0px)",
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                      trigger: e.current,
                      start: "top bottom+=300",
                      end: "bottom bottom+=300",
                      scrub: 1,
                    },
                  });
              }, e);
              return () => t.revert();
            }, [a]),
            (0, r.jsx)("div", {
              className: "absolute z-30 w-full",
              children: (0, r.jsxs)("div", {
                className: "relative w-full",
                style: { aspectRatio: "1920/600" },
                children: [
                  (0, r.jsx)("div", {
                    ref: e,
                    className:
                      "absolute bottom-[5%] lg:bottom-[10%] right-[65%] l:right-[60%] xl:right-[65%] z-60  w-[50%] md:w-[13%] lg:w-[27%] xl:w-[25%] hidden md:block",
                    children: (0, r.jsx)("div", {
                      className: "w-full",
                      children: (0, r.jsx)(n.default, {
                        src: "/images/games/tic_gamer.webp",
                        alt: "TIC Gamer",
                        width: 1e3,
                        height: 1e3,
                        className: "w-full h-auto object-contain",
                        priority: !0,
                      }),
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "hidden md:block absolute bottom-0 left-0 right-0 overflow-hidden",
                    children: (0, r.jsx)(n.default, {
                      src: "/images/games/games_foreground.webp",
                      alt: "Ground",
                      width: 1920,
                      height: 400,
                      className: "w-full h-auto object-cover object-bottom",
                      priority: !0,
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "block md:hidden absolute bottom-0 left-0 right-0 overflow-hidden",
                    children: (0, r.jsx)(n.default, {
                      src: "/images/games/games_foreground_sm.webp",
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
        h = () => {
          let e = (0, i.useRef)(null);
          return (
            (0, x.E)(() => {
              let a = m.os.context(() => {
                m.os.fromTo(
                  e.current,
                  { opacity: 0, y: 100 },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                      trigger: e.current,
                      start: "top bottom",
                      end: "top center",
                      scrub: !0,
                    },
                  }
                );
              }, e);
              return () => a.revert();
            }, []),
            (0, r.jsxs)("div", {
              className:
                "jsx-40d958566d1f07dd absolute z-40 top-[5vh] lg:top-[13vh] w-full lg:w-auto lg:left-[1%] xl:left-[4%] 2xl:left-[10%]",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "jsx-40d958566d1f07dd w-full flex justify-center lg:justify-start lg:container",
                  children: (0, r.jsx)("h2", {
                    ref: e,
                    className:
                      "jsx-40d958566d1f07dd \n            font-press-start\n            text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold\n            lg:ml-[10%]\n            select-none\n            origin-top-left\n            animate-retro-text\n            [text-shadow:_2px_2px_0_#000,_-2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000]\n          ",
                    children: "GAMES",
                  }),
                }),
                (0, r.jsx)(o(), {
                  id: "40d958566d1f07dd",
                  children:
                    "@-webkit-keyframes retroTextColor{0%,100%{color:#98fb98}25%{color:#ffb6c1}50%{color:#87ceeb}75%{color:#dda0dd}}@-moz-keyframes retroTextColor{0%,100%{color:#98fb98}25%{color:#ffb6c1}50%{color:#87ceeb}75%{color:#dda0dd}}@-o-keyframes retroTextColor{0%,100%{color:#98fb98}25%{color:#ffb6c1}50%{color:#87ceeb}75%{color:#dda0dd}}@keyframes retroTextColor{0%,100%{color:#98fb98}25%{color:#ffb6c1}50%{color:#87ceeb}75%{color:#dda0dd}}.animate-retro-text.jsx-40d958566d1f07dd{-webkit-animation:retroTextColor 8s ease-in-out infinite;-moz-animation:retroTextColor 8s ease-in-out infinite;-o-animation:retroTextColor 8s ease-in-out infinite;animation:retroTextColor 8s ease-in-out infinite;opacity:.95}.animate-retro-text.jsx-40d958566d1f07dd:hover{-webkit-animation-play-state:paused;-moz-animation-play-state:paused;-o-animation-play-state:paused;animation-play-state:paused}",
                }),
              ],
            })
          );
        },
        u = () =>
          (0, r.jsx)("div", {
            className:
              "absolute top-[-10vw] md:top-[-12vw] lg:top-[-13vw] xl:top-[-14vw] left-0 right-0 z-10  w-full",
            children: (0, r.jsxs)("div", {
              className: "w-full",
              children: [
                (0, r.jsx)("div", {
                  className: "block",
                  children: (0, r.jsx)(n.default, {
                    src: "/images/games/games_roof.webp",
                    alt: "Roof",
                    width: 1920,
                    height: 400,
                    className: "w-full h-auto object-contain",
                    priority: !0,
                  }),
                }),
                (0, r.jsx)("div", {
                  className: "hidden",
                  children: (0, r.jsx)(n.default, {
                    src: "/images/games/games_roof_sm.webp",
                    alt: "Roof",
                    width: 1920,
                    height: 400,
                    className: "w-full h-auto object-contain",
                    priority: !0,
                  }),
                }),
              ],
            }),
          });
      function w() {
        let e = (0, i.useRef)(null),
          a = (0, b.a)();
        return (
          (0, x.E)(() => {
            let t = m.os.context(() => {
              m.os.set(e.current, {
                y: "50vh",
                filter: a ? "none" : "blur(5px)",
                opacity: 1,
                willChange: "transform, opacity",
              }),
                m.os.to(e.current, {
                  y: 0,
                  filter: a ? "none" : "blur(0px)",
                  opacity: 1,
                  duration: 1.2,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: e.current,
                    start: "top bottom+=300",
                    end: "top center-=100",
                    scrub: 0.5,
                  },
                });
            }, e);
            return () => t.revert();
          }, [a]),
          (0, r.jsxs)("div", {
            className: "relative",
            children: [
              (0, r.jsx)(g, {}),
              (0, r.jsxs)("div", {
                className: "relative min-h-screen flex flex-col justify-end",
                children: [
                  (0, r.jsx)(h, {}),
                  (0, r.jsx)(u, {}),
                  (0, r.jsx)("div", {
                    className:
                      "absolute inset-0 overflow-hidden pointer-events-none",
                    children: (0, r.jsx)("div", {
                      ref: e,
                      className:
                        "absolute  top-[12vh] sm:top-[11vh] md:top-[13vh] lg:top-[12vh] xl:top-[12vh] left-1/2 lg:left-[60%] xl:left-[65%]  -translate-x-1/2 z-50  w-[90vw] h-[85vh]  sm:w-[90vw] sm:h-[80vh]  md:w-[90vw] md:h-[75vh]  lg:w-[65vw] lg:h-[75vh]  xl:w-[55vw] xl:h-[70vh] pointer-events-auto",
                      children: (0, r.jsx)(l, {
                        className: "w-full h-full",
                        children: (0, r.jsx)(p, {}),
                      }),
                    }),
                  }),
                  (0, r.jsx)(f, {}),
                ],
              }),
              (0, r.jsxs)("div", {
                className:
                  "jsx-5acc5e4136c740e9 absolute bottom-6 left-0 w-full flex justify-center z-50 pointer-events-auto",
                children: [
                  (0, r.jsx)("a", {
                    href: "/games",
                    style: { textShadow: "2px 2px 8px #000, 0 0 12px #fff" },
                    className:
                      "jsx-5acc5e4136c740e9 relative px-4 py-2 text-base md:px-6 md:py-2 md:text-lg lg:px-8 lg:py-3 lg:text-2xl xl:text-3xl rounded-lg font-bold text-white bg-black/60 shadow-lg border-2 border-white/30 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 animate-go-to-games",
                    children: "Go to Games Page",
                  }),
                  (0, r.jsx)(o(), {
                    id: "5acc5e4136c740e9",
                    children:
                      "@-webkit-keyframes goToGamesPulse{0%,100%{-webkit-transform:scale(1);transform:scale(1);color:#fff176}20%{color:#ff8a65}40%{color:#81d4fa}60%{color:#ba68c8}80%{color:#aed581}50%{-webkit-transform:scale(1.08);transform:scale(1.08)}}@-moz-keyframes goToGamesPulse{0%,100%{-moz-transform:scale(1);transform:scale(1);color:#fff176}20%{color:#ff8a65}40%{color:#81d4fa}60%{color:#ba68c8}80%{color:#aed581}50%{-moz-transform:scale(1.08);transform:scale(1.08)}}@-o-keyframes goToGamesPulse{0%,100%{-o-transform:scale(1);transform:scale(1);color:#fff176}20%{color:#ff8a65}40%{color:#81d4fa}60%{color:#ba68c8}80%{color:#aed581}50%{-o-transform:scale(1.08);transform:scale(1.08)}}@keyframes goToGamesPulse{0%,100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1);color:#fff176}20%{color:#ff8a65}40%{color:#81d4fa}60%{color:#ba68c8}80%{color:#aed581}50%{-webkit-transform:scale(1.08);-moz-transform:scale(1.08);-o-transform:scale(1.08);transform:scale(1.08)}}.animate-go-to-games.jsx-5acc5e4136c740e9{-webkit-animation:goToGamesPulse 2.5s infinite cubic-bezier(.4,0,.2,1);-moz-animation:goToGamesPulse 2.5s infinite cubic-bezier(.4,0,.2,1);-o-animation:goToGamesPulse 2.5s infinite cubic-bezier(.4,0,.2,1);animation:goToGamesPulse 2.5s infinite cubic-bezier(.4,0,.2,1)}.animate-go-to-games.jsx-5acc5e4136c740e9:hover{-webkit-filter:brightness(1.2)drop-shadow(0 0 8px#fff176);filter:brightness(1.2)drop-shadow(0 0 8px#fff176);-webkit-animation-play-state:paused;-moz-animation-play-state:paused;-o-animation-play-state:paused;animation-play-state:paused}",
                  }),
                ],
              }),
            ],
          })
        );
      }
      let v = w;
    },
    9224: (e, a, t) => {
      t.d(a, { a: () => s });
      var r = t(2115);
      let s = () => {
        let [e, a] = (0, r.useState)(!1),
          [t, s] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
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
