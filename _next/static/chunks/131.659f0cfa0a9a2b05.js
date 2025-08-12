"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [131],
  {
    6131: (e, t, r) => {
      r.r(t), r.d(t, { Aiga: () => f, default: () => v });
      var a = r(5155),
        o = r(8803),
        s = r.n(o),
        i = r(2115),
        n = r(5565),
        l = r(2901);
      let c = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            [t, r] = (0, i.useState)(!1),
            [a, o] = (0, i.useState)(!1),
            s = (0, i.useRef)(null),
            {
              threshold: n = 0.1,
              rootMargin: l = "100px",
              triggerOnce: c = !0,
            } = e;
          (0, i.useEffect)(() => {
            let e = s.current;
            if (!e) return;
            let t = new IntersectionObserver(
              (e) => {
                let [t] = e,
                  s = t.isIntersecting;
                r(s), s && !a && o(!0);
              },
              { threshold: n, rootMargin: l }
            );
            return (
              t.observe(e),
              () => {
                t.disconnect();
              }
            );
          }, [n, l, a]);
          let d = c ? a : t;
          return {
            elementRef: s,
            isIntersecting: t,
            hasIntersected: a,
            shouldAnimate: d,
          };
        },
        d = () => {
          let [e, t] = (0, i.useState)({
            isHighPerformance: !0,
            isMobile: !1,
            supportsIntersectionObserver: !1,
            supportsRequestIdleCallback: !1,
            prefersReducedMotion: !1,
          });
          return (
            (0, i.useEffect)(() => {
              let e = () => {
                let e = window.matchMedia("(max-width: 768px)").matches,
                  r = "ontouchstart" in window,
                  a = navigator.deviceMemory || 4,
                  o = navigator.hardwareConcurrency || 4,
                  s = navigator.connection,
                  i = (null == s ? void 0 : s.effectiveType) || "unknown",
                  n = ["slow-2g", "2g", "3g"].includes(i),
                  l = window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                  ).matches;
                t({
                  isHighPerformance: !e && a >= 4 && o >= 4 && !n,
                  isMobile: e || r,
                  supportsIntersectionObserver:
                    "IntersectionObserver" in window,
                  supportsRequestIdleCallback: "requestIdleCallback" in window,
                  prefersReducedMotion: l,
                  deviceMemory: a,
                  hardwareConcurrency: o,
                  connectionType: i,
                });
              };
              e();
              let r = window.matchMedia("(max-width: 768px)"),
                a = window.matchMedia("(prefers-reduced-motion: reduce)");
              return (
                r.addEventListener("change", e),
                a.addEventListener("change", e),
                () => {
                  r.removeEventListener("change", e),
                    a.removeEventListener("change", e);
                }
              );
            }, []),
            e
          );
        },
        u = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            { isHighPerformance: t, prefersReducedMotion: r } = d(),
            a = (0, i.useRef)([]),
            o = (0, i.useRef)(new Set()),
            s = (0, i.useRef)(void 0),
            {
              maxConcurrent: n = t ? 6 : 3,
              batchSize: l = t ? 3 : 1,
              frameThrottle: c = 16,
            } = e,
            u = (0, i.useCallback)(() => {
              if (r) return;
              let e = a.current,
                t = o.current;
              e.splice(0, e.length, ...e.filter((e) => t.has(e.id)));
              let i = n - t.size;
              i > 0 &&
                e.length > 0 &&
                e
                  .sort((e, t) => t.priority - e.priority)
                  .slice(0, Math.min(i, l))
                  .forEach((e) => {
                    if (!t.has(e.id)) {
                      t.add(e.id);
                      try {
                        e.animation();
                      } catch (e) {}
                    }
                  }),
                e.length > 0 &&
                  (s.current = requestAnimationFrame(() => {
                    setTimeout(u, c);
                  }));
            }, [n, l, c, r]),
            h = (0, i.useCallback)(
              function (e, t) {
                let o =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0,
                  i = arguments.length > 3 ? arguments[3] : void 0;
                r ||
                  ((a.current = a.current.filter((t) => t.id !== e)),
                  a.current.push({
                    id: e,
                    priority: o,
                    animation: t,
                    cleanup: i,
                  }),
                  s.current || u());
              },
              [u, r]
            ),
            p = (0, i.useCallback)((e) => {
              let t = a.current.find((t) => t.id === e);
              if (
                ((a.current = a.current.filter((t) => t.id !== e)),
                o.current.delete(e),
                null == t ? void 0 : t.cleanup)
              )
                try {
                  t.cleanup();
                } catch (e) {}
            }, []),
            g = (0, i.useCallback)(() => {
              a.current.forEach((e) => {
                if (e.cleanup)
                  try {
                    e.cleanup();
                  } catch (e) {}
              }),
                (a.current = []),
                o.current.clear(),
                s.current &&
                  (cancelAnimationFrame(s.current), (s.current = void 0));
            }, []);
          return (
            (0, i.useEffect)(() => g, [g]),
            {
              queueAnimation: h,
              removeAnimation: p,
              clearQueue: g,
              getQueueStatus: (0, i.useCallback)(
                () => ({
                  queued: a.current.length,
                  running: o.current.size,
                  capacity: n,
                }),
                [n]
              ),
              isHighPerformance: t,
            }
          );
        },
        h = (e) => {
          let { isOpen: t, onClose: r } = e,
            o = (0, i.useRef)(null);
          (0, i.useEffect)(() => {
            t &&
              l.os.fromTo(
                o.current,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
              );
          }, [t]);
          let s = () => {
            l.os.to(o.current, {
              opacity: 0,
              scale: 0.8,
              duration: 0.2,
              ease: "power2.in",
              onComplete: r,
            });
          };
          return t
            ? (0, a.jsx)("div", {
                className:
                  "fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-pointer",
                onClick: (e) => {
                  e.target === e.currentTarget && s();
                },
                children: (0, a.jsxs)("div", {
                  ref: o,
                  className: "relative max-w-2xl w-full mx-4 cursor-default",
                  children: [
                    (0, a.jsx)("button", {
                      onClick: s,
                      className:
                        "absolute -top-12 right-0 text-white hover:text-gray-300 text-xl font-bold z-10 cursor-pointer",
                      children: "✕",
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "relative bg-black rounded-xl overflow-hidden border-2 border-purple-500/30",
                      style: { aspectRatio: "1080 / 1920" },
                      children: (0, a.jsx)("video", {
                        className: "w-full h-full object-cover",
                        src: "/images/aiga/aiga_video.mp4",
                        controls: !0,
                        autoPlay: !0,
                        playsInline: !0,
                        children:
                          "Your browser does not support the video tag.",
                      }),
                    }),
                  ],
                }),
              })
            : null;
        },
        p = () =>
          (0, a.jsx)("div", {
            className: "absolute inset-0 z-0 w-full min-h-screen bg-black",
          }),
        g = () => {
          let e = (0, i.useRef)(null),
            { isHighPerformance: t, isMobile: r } = d(),
            { queueAnimation: o } = u(),
            { shouldAnimate: s } = c({ threshold: 0.1, rootMargin: "200px" });
          return (
            (0, i.useEffect)(() => {
              s &&
                e.current &&
                o(
                  "portal-top-entrance",
                  () => {
                    let t = l.os.matchMedia();
                    return (
                      t.add("(min-width: 768px)", () => {
                        l.os.fromTo(
                          e.current,
                          { opacity: 0, y: -50, scale: 0.8, rotationX: 15 },
                          {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            rotationX: 0,
                            duration: 1.2,
                            ease: "power3.out",
                            scrollTrigger: {
                              trigger: e.current,
                              start: "top bottom",
                              end: "top top",
                              scrub: 1,
                            },
                          }
                        );
                      }),
                      t.add("(max-width: 767px)", () => {
                        l.os.fromTo(
                          e.current,
                          { opacity: 0, scale: 0.9 },
                          {
                            opacity: 1,
                            scale: 1,
                            duration: 0.8,
                            ease: "power2.out",
                            scrollTrigger: {
                              trigger: e.current,
                              start: "top bottom",
                              toggleActions: "play none none reverse",
                            },
                          }
                        );
                      }),
                      () => t.revert()
                    );
                  },
                  2
                );
            }, [s, t, r, o]),
            (0, a.jsx)("div", {
              ref: e,
              className:
                "absolute top-[-16vw] lg:top-[-7vw] left-0 right-0 z-10 w-full",
              children: (0, a.jsxs)("div", {
                className: "w-full",
                children: [
                  (0, a.jsx)(n.default, {
                    src: "/images/aiga/portal_top.webp",
                    alt: "Portal Top",
                    width: 1920,
                    height: 1080,
                    className: "w-full h-auto object-contain lg:hidden",
                    priority: !0,
                  }),
                  (0, a.jsx)(n.default, {
                    src: "/images/aiga/portal_top_lg.webp",
                    alt: "Portal Top Large",
                    width: 1920,
                    height: 1080,
                    className: "w-full h-auto object-contain hidden lg:block",
                    priority: !0,
                  }),
                ],
              }),
            })
          );
        },
        m = () => {
          let e = (0, i.useRef)(null);
          return (
            (0, i.useEffect)(() => {
              let t = l.os.matchMedia();
              return (
                t.add("(min-width: 768px)", () => {
                  l.os.fromTo(
                    e.current,
                    { opacity: 0, y: 50, scale: 0.8, rotationX: -15 },
                    {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotationX: 0,
                      duration: 1.2,
                      ease: "power3.out",
                      scrollTrigger: {
                        trigger: e.current,
                        start: "top bottom",
                        end: "top top",
                        scrub: 1,
                      },
                    }
                  );
                }),
                t.add("(max-width: 767px)", () => {
                  l.os.fromTo(
                    e.current,
                    { opacity: 0, scale: 0.9 },
                    {
                      opacity: 1,
                      scale: 1,
                      duration: 0.8,
                      ease: "power2.out",
                      scrollTrigger: {
                        trigger: e.current,
                        start: "top bottom",
                        toggleActions: "play none none reverse",
                      },
                    }
                  );
                }),
                () => t.revert()
              );
            }, []),
            (0, a.jsx)("div", {
              ref: e,
              className:
                "absolute bottom-[-14vw] lg:bottom-[-5vw] left-1/2 -translate-x-1/2 z-10 w-full",
              children: (0, a.jsxs)("div", {
                className: "w-full",
                children: [
                  (0, a.jsx)(n.default, {
                    src: "/images/aiga/portal_bottom.webp",
                    alt: "Portal Bottom",
                    width: 1920,
                    height: 1080,
                    className: "w-full h-auto object-contain lg:hidden",
                    priority: !0,
                  }),
                  (0, a.jsx)(n.default, {
                    src: "/images/aiga/portal_bottom_lg.webp",
                    alt: "Portal Bottom Large",
                    width: 1920,
                    height: 1080,
                    className: "w-full h-auto object-contain hidden lg:block",
                    priority: !0,
                  }),
                ],
              }),
            })
          );
        },
        x = () => {
          let e = (0, i.useRef)(null),
            t = (0, i.useRef)(null);
          return (
            (0, i.useEffect)(() => {
              let r = l.os.matchMedia();
              return (
                r.add("(min-width: 1024px)", () => {
                  l.os.set(e.current, {
                    opacity: 0,
                    scale: 0.8,
                    rotationY: 15,
                    transformOrigin: "center center",
                    filter:
                      "drop-shadow(0 0 0px rgba(147, 51, 234, 0)) brightness(0.5)",
                  }),
                    l.os
                      .timeline({
                        scrollTrigger: {
                          trigger: e.current,
                          start: "top 80%",
                          toggleActions: "play none none reverse",
                        },
                      })
                      .to(e.current, {
                        opacity: 1,
                        scale: 1,
                        rotationY: 0,
                        duration: 1.5,
                        ease: "power3.out",
                      })
                      .to(
                        e.current,
                        {
                          filter:
                            "drop-shadow(0 0 15px rgba(147, 51, 234, 0.8)) drop-shadow(0 0 30px rgba(59, 130, 246, 0.6)) brightness(1)",
                          duration: 1,
                          ease: "power2.out",
                        },
                        "-=0.5"
                      ),
                    l.os.to(e.current, {
                      y: 8,
                      x: 4,
                      rotation: 1,
                      duration: 4,
                      ease: "sine.inOut",
                      repeat: -1,
                      yoyo: !0,
                    });
                  let t = l.os.timeline({ repeat: -1 });
                  l.os.set(e.current, {
                    filter:
                      "drop-shadow(0 0 20px rgba(147, 51, 234, 0.8)) drop-shadow(0 0 40px rgba(59, 130, 246, 0.6)) brightness(1.15)",
                  }),
                    t
                      .to(e.current, {
                        filter:
                          "drop-shadow(0 0 25px rgba(147, 51, 234, 1)) drop-shadow(0 0 50px rgba(59, 130, 246, 0.9)) brightness(1.2)",
                        duration: 2,
                        ease: "sine.inOut",
                      })
                      .to(e.current, {
                        filter:
                          "drop-shadow(0 0 30px rgba(6, 182, 212, 1)) drop-shadow(0 0 60px rgba(34, 197, 94, 0.8)) brightness(1.25)",
                        duration: 2,
                        ease: "sine.inOut",
                      })
                      .to(e.current, {
                        filter:
                          "drop-shadow(0 0 32px rgba(168, 85, 247, 1)) drop-shadow(0 0 65px rgba(236, 72, 153, 0.9)) brightness(1.3)",
                        duration: 1.5,
                        ease: "sine.inOut",
                      })
                      .to(e.current, {
                        filter:
                          "drop-shadow(0 0 26px rgba(59, 130, 246, 1)) drop-shadow(0 0 52px rgba(99, 102, 241, 0.8)) brightness(1.22)",
                        duration: 2,
                        ease: "sine.inOut",
                      })
                      .to(e.current, {
                        filter:
                          "drop-shadow(0 0 20px rgba(147, 51, 234, 0.8)) drop-shadow(0 0 40px rgba(59, 130, 246, 0.6)) brightness(1.15)",
                        duration: 1.5,
                        ease: "sine.inOut",
                      });
                }),
                r.add("(max-width: 1023px)", () => {
                  l.os.set(t.current, { opacity: 0, scale: 0.9 }),
                    l.os
                      .timeline({
                        scrollTrigger: {
                          trigger: t.current,
                          start: "top 80%",
                          toggleActions: "play none none reverse",
                        },
                      })
                      .to(t.current, {
                        opacity: 1,
                        scale: 1,
                        duration: 1.2,
                        ease: "power2.out",
                      }),
                    l.os.to(t.current, {
                      y: 4,
                      rotation: 0.5,
                      duration: 5,
                      ease: "sine.inOut",
                      repeat: -1,
                      yoyo: !0,
                    });
                }),
                () => r.revert()
              );
            }, []),
            (0, a.jsxs)("div", {
              className: "absolute z-20 w-full h-full",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "hidden lg:flex absolute inset-0 items-center justify-end pr-[8%]",
                  children: (0, a.jsx)("div", {
                    ref: e,
                    className: "w-[45vw] lg:w-[40vw] xl:w-[35vw] 2xl:w-[30vw]",
                    children: (0, a.jsx)(n.default, {
                      src: "/images/aiga/aiga_portal.webp",
                      alt: "AIGA Portal",
                      width: 800,
                      height: 800,
                      className: "w-full h-auto object-contain",
                      priority: !0,
                    }),
                  }),
                }),
                (0, a.jsx)("div", {
                  className:
                    "flex lg:hidden absolute top-[8%] right-[4%] justify-end",
                  children: (0, a.jsx)("div", {
                    ref: t,
                    className:
                      "w-[42vw] sm:w-[48vw] max-w-[200px] md:max-w-[280px]",
                    children: (0, a.jsx)(n.default, {
                      src: "/images/aiga/aiga_portal.webp",
                      alt: "AIGA Portal",
                      width: 800,
                      height: 800,
                      className: "w-full h-auto object-contain",
                      priority: !0,
                    }),
                  }),
                }),
              ],
            })
          );
        },
        w = () => {
          let e = (0, i.useRef)(null),
            t = (0, i.useRef)(null),
            r = (0, i.useRef)(null),
            [o, s] = (0, i.useState)(!1);
          (0, i.useEffect)(() => {
            let a = l.os.matchMedia();
            return (
              a.add("(min-width: 1024px)", () => {
                let t = e.current;
                t &&
                  (l.os.set(".dimension-word", {
                    opacity: 0,
                    scale: 0.3,
                    rotationY: 180,
                    z: -200,
                  }),
                  l.os.set(".dimension-line", {
                    opacity: 0,
                    x: -100,
                    rotationX: 45,
                    transformOrigin: "left center",
                  }),
                  l.os.fromTo(
                    t,
                    { opacity: 0, scale: 0.8 },
                    {
                      opacity: 1,
                      scale: 1,
                      duration: 1.5,
                      ease: "power3.out",
                      delay: 1,
                      scrollTrigger: {
                        trigger: t,
                        start: "top bottom",
                        end: "top 50%",
                        toggleActions: "play none none reverse",
                      },
                    }
                  ),
                  l.os.to(".dimension-word", {
                    opacity: 1,
                    scale: 1,
                    rotationY: 0,
                    z: 0,
                    duration: 1.2,
                    ease: "back.out(1.7)",
                    stagger: { each: 0.15, from: "random" },
                    scrollTrigger: {
                      trigger: t,
                      start: "top bottom",
                      end: "top 20%",
                      scrub: 1,
                    },
                  }),
                  l.os.to(".dimension-line", {
                    opacity: 1,
                    x: 0,
                    rotationX: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    stagger: 0.3,
                    scrollTrigger: {
                      trigger: t,
                      start: "top bottom",
                      end: "top 25%",
                      scrub: 0.5,
                    },
                  }));
              }),
              a.add("(max-width: 1023px)", () => {
                let e = t.current,
                  a = r.current;
                e &&
                  a &&
                  (l.os.set(".dimension-word", {
                    opacity: 0,
                    y: 30,
                    scale: 0.8,
                  }),
                  l.os.set(".dimension-line", { opacity: 0, y: 20 }),
                  l.os.set(".mobile-content-item", { opacity: 0, y: 30 }),
                  l.os.fromTo(
                    e,
                    { opacity: 0 },
                    {
                      opacity: 1,
                      duration: 1,
                      delay: 1,
                      scrollTrigger: {
                        trigger: e,
                        start: "top bottom",
                        toggleActions: "play none none reverse",
                      },
                    }
                  ),
                  l.os.to(".dimension-word", {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: "back.out(1.4)",
                    stagger: 0.1,
                    scrollTrigger: {
                      trigger: e,
                      start: "top bottom",
                      end: "top 15%",
                      scrub: 1,
                    },
                  }),
                  l.os.to(".dimension-line", {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.2,
                    scrollTrigger: {
                      trigger: e,
                      start: "top bottom",
                      end: "top 20%",
                      scrub: 0.5,
                    },
                  }),
                  l.os.fromTo(
                    a,
                    { opacity: 0 },
                    {
                      opacity: 1,
                      duration: 1,
                      delay: 1.5,
                      scrollTrigger: {
                        trigger: a,
                        start: "top bottom",
                        toggleActions: "play none none reverse",
                      },
                    }
                  ),
                  l.os.to(".mobile-content-item", {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.15,
                    scrollTrigger: {
                      trigger: a,
                      start: "top bottom",
                      end: "top 30%",
                      scrub: 0.5,
                    },
                  }));
              }),
              () => a.revert()
            );
          }, []);
          let c = (e) => {
            let { className: t = "" } = e,
              [r, o] = (0, i.useState)(0),
              s = (0, i.useRef)(null),
              [n, c] = (0, i.useState)(0),
              [d, u] = (0, i.useState)(0),
              [h, p] = (0, i.useState)(!1),
              g = [
                {
                  icon: "\uD83C\uDFAE",
                  title: "CREATE & EXPLORE",
                  description:
                    "Generate rich worlds with AI - complete with evolving characters, factions, and storylines. Your custom heroes maintain consistent appearances throughout entire adventures with advanced character continuation technology.",
                  gradient: "from-purple-600/20 via-pink-600/20 to-red-500/20",
                  borderGlow: "border-purple-400/30 hover:border-purple-400/60",
                  shadowColor: "hover:shadow-purple-500/30",
                  bgPattern:
                    "bg-gradient-to-br from-purple-900/10 via-pink-900/10 to-red-900/10",
                },
                {
                  icon: "\uD83D\uDC65",
                  title: "PLAY YOUR WAY",
                  description: [
                    "\uD83D\uDE80 Solo or multiplayer adventures",
                    "\uD83D\uDD12 Private groups with friends via email invites",
                    "\uD83C\uDF0D Public games where anyone can join and vote",
                    "\uD83D\uDCF1 Cross-platform - play on web, X, or Telegram",
                  ],
                  gradient: "from-blue-600/20 via-cyan-600/20 to-teal-500/20",
                  borderGlow: "border-cyan-400/30 hover:border-cyan-400/60",
                  shadowColor: "hover:shadow-cyan-500/30",
                  bgPattern:
                    "bg-gradient-to-br from-blue-900/10 via-cyan-900/10 to-teal-900/10",
                },
                {
                  icon: "⚡",
                  title: "LIVING WORLDS",
                  description:
                    "Smart progression systems with character stats, meaningful choices, and consequences that ripple through your story. Every decision shapes relationships, unlocks new paths, and determines your fate.",
                  gradient:
                    "from-yellow-600/20 via-orange-600/20 to-red-600/20",
                  borderGlow: "border-yellow-400/30 hover:border-yellow-400/60",
                  shadowColor: "hover:shadow-yellow-500/30",
                  bgPattern:
                    "bg-gradient-to-br from-yellow-900/10 via-orange-900/10 to-red-900/10",
                },
                {
                  icon: "\uD83C\uDF10",
                  title: "BUILT FOR COMMUNITIES",
                  description:
                    "Perfect for content creators, gaming groups, and storytellers. Share epic moments, manage teams, and create unforgettable collaborative adventures.",
                  gradient:
                    "from-green-600/20 via-emerald-600/20 to-teal-600/20",
                  borderGlow: "border-green-400/30 hover:border-green-400/60",
                  shadowColor: "hover:shadow-green-500/30",
                  bgPattern:
                    "bg-gradient-to-br from-green-900/10 via-emerald-900/10 to-teal-900/10",
                },
                {
                  icon: "\uD83C\uDF1F",
                  title: "DISCOVER & SHARE",
                  description:
                    "Explore a vast marketplace of player-created worlds and adventures. Vote on your favorites, share your masterpieces, and discover hidden gems. Build your reputation as a world creator and find new adventures crafted by the community.",
                  gradient:
                    "from-pink-600/20 via-purple-600/20 to-violet-600/20",
                  borderGlow: "border-pink-400/30 hover:border-pink-400/60",
                  shadowColor: "hover:shadow-pink-500/30",
                  bgPattern:
                    "bg-gradient-to-br from-pink-900/10 via-purple-900/10 to-violet-900/10",
                },
              ];
            (0, i.useEffect)(() => {
              s.current &&
                l.os.fromTo(
                  s.current,
                  { opacity: 0, y: 40, scale: 0.9 },
                  {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "back.out(1.4)",
                    scrollTrigger: {
                      trigger: s.current,
                      start: "top 85%",
                      toggleActions: "play none none reverse",
                    },
                  }
                );
            }, []);
            let m = () => {
                o((e) => (e + 1) % g.length);
              },
              x = () => {
                o((e) => (e - 1 + g.length) % g.length);
              },
              w = (e) => {
                o(e);
              };
            return (0, a.jsxs)("div", {
              ref: s,
              className: "mobile-content-item relative overflow-hidden ".concat(
                t
              ),
              children: [
                (0, a.jsx)("div", {
                  className:
                    "relative h-[240px] sm:h-[280px] md:h-[280px] xl:h-[260px] w-full max-w-2xl mx-auto overflow-hidden",
                  onTouchStart: (e) => {
                    u(0), c(e.targetTouches[0].clientX), p(!1);
                  },
                  onTouchMove: (e) => {
                    u(e.targetTouches[0].clientX),
                      n &&
                        Math.abs(n - e.targetTouches[0].clientX) > 10 &&
                        p(!0);
                  },
                  onTouchEnd: () => {
                    if (!n || !d) return;
                    let e = n - d;
                    e > 50 ? m() : e < -50 && x(), setTimeout(() => p(!1), 100);
                  },
                  children: g.map((e, t) => {
                    let o = t === r,
                      s = t - r;
                    return (0, a.jsx)(
                      "div",
                      {
                        className:
                          "absolute inset-0 transition-all duration-500 ease-out cursor-pointer",
                        style: {
                          transform: o
                            ? "translateX(0) translateY(0) scale(1) rotateY(0deg)"
                            : 1 === s || -4 === s
                            ? "translateX(40px) translateY(8px) scale(0.9) rotateY(-10deg)"
                            : -1 === s || 4 === s
                            ? "translateX(-40px) translateY(8px) scale(0.9) rotateY(10deg)"
                            : 2 >= Math.abs(s)
                            ? "translateX("
                                .concat(
                                  80 * s,
                                  "px) translateY(15px) scale(0.85) rotateY("
                                )
                                .concat(20 * s, "deg)")
                            : "translateX(0) translateY(25px) scale(0.75) rotateY(0deg)",
                          opacity: o
                            ? 1
                            : 1 === Math.abs(s)
                            ? 0.6
                            : 2 === Math.abs(s)
                            ? 0.3
                            : 0.1,
                          filter: o
                            ? "blur(0px)"
                            : 1 === Math.abs(s)
                            ? "blur(1px)"
                            : "blur(2px)",
                          zIndex: o
                            ? 30
                            : 1 === Math.abs(s)
                            ? 20
                            : 2 === Math.abs(s)
                            ? 15
                            : 10,
                        },
                        onClick: () => !o && !h && w(t),
                        children: (0, a.jsxs)("div", {
                          className:
                            "\n                  h-full w-full rounded-2xl p-4 sm:p-6 md:p-7\n                  border-2 "
                              .concat(e.borderGlow, " ")
                              .concat(
                                e.shadowColor,
                                "\n                  bg-gradient-to-br from-black/90 via-gray-900/85 to-black/90\n                  shadow-2xl transition-all duration-300\n                  relative overflow-hidden group\n                "
                              ),
                          children: [
                            (0, a.jsx)("div", {
                              className: "absolute inset-0 ".concat(
                                e.gradient,
                                " opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                              ),
                            }),
                            (0, a.jsx)("div", {
                              className: "absolute inset-0 ".concat(
                                e.bgPattern,
                                " opacity-30"
                              ),
                            }),
                            (0, a.jsxs)("div", {
                              className: "absolute inset-0 overflow-hidden",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-pulse",
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "absolute top-12 right-8 w-1 h-1 bg-white/20 rounded-full animate-ping",
                                  style: { animationDelay: "1s" },
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "absolute bottom-8 left-6 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse",
                                  style: { animationDelay: "2s" },
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "relative z-10 h-full flex flex-col",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "flex items-center gap-4 mb-4",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: "text-3xl",
                                      children: e.icon,
                                    }),
                                    (0, a.jsx)("h3", {
                                      className:
                                        "text-white font-bai-jamjuree font-black text-base sm:text-lg tracking-wide",
                                      children: e.title,
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "flex-1 text-gray-200 font-mono text-xs sm:text-base leading-relaxed",
                                  children: Array.isArray(e.description)
                                    ? (0, a.jsx)("ul", {
                                        className: "space-y-2",
                                        children: e.description.map((e, t) =>
                                          (0, a.jsxs)(
                                            "li",
                                            {
                                              className:
                                                "flex items-start gap-2",
                                              children: [
                                                (0, a.jsx)("span", {
                                                  className: "flex-shrink-0",
                                                  children: e.split(" ")[0],
                                                }),
                                                (0, a.jsx)("span", {
                                                  className: "text-gray-300",
                                                  children: e
                                                    .split(" ")
                                                    .slice(1)
                                                    .join(" "),
                                                }),
                                              ],
                                            },
                                            t
                                          )
                                        ),
                                      })
                                    : (0, a.jsx)("p", {
                                        children: e.description,
                                      }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      t
                    );
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "flex items-center justify-center gap-4 mt-6 mb-2",
                  children: [
                    (0, a.jsx)("button", {
                      onClick: x,
                      className:
                        "p-3 rounded-full bg-black/80 border border-white/20 text-white  hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20",
                      children: (0, a.jsx)("svg", {
                        className: "w-5 h-5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: (0, a.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M15 19l-7-7 7-7",
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "flex gap-2",
                      children: g.map((e, t) =>
                        (0, a.jsx)(
                          "button",
                          {
                            onClick: () => w(t),
                            className:
                              "w-3 h-3 rounded-full transition-all duration-300 ".concat(
                                t === r
                                  ? "bg-white scale-125 shadow-lg shadow-white/50"
                                  : "bg-white/30 hover:bg-white/50 hover:scale-110"
                              ),
                          },
                          t
                        )
                      ),
                    }),
                    (0, a.jsx)("button", {
                      onClick: m,
                      className:
                        "p-3 rounded-full bg-black/80 border border-white/20 text-white  hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20",
                      children: (0, a.jsx)("svg", {
                        className: "w-5 h-5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: (0, a.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M9 5l7 7-7 7",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            });
          };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(h, { isOpen: o, onClose: () => s(!1) }),
              (0, a.jsxs)("div", {
                className: "absolute z-[100] w-full h-full",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "hidden lg:flex absolute inset-0 items-center justify-start pl-[8%]",
                    children: (0, a.jsx)("div", {
                      ref: e,
                      className:
                        "max-w-2xl lg:max-w-4xl xl:max-w-5xl text-left relative z-[100]",
                      children: (0, a.jsx)(
                        () =>
                          (0, a.jsxs)("div", {
                            className: "space-y-6 md:space-y-8 pb-8",
                            children: [
                              (0, a.jsx)("div", {
                                className: "dimension-line text-center",
                                children: (0, a.jsx)("div", {
                                  className:
                                    "dimension-word w-full max-w-sm lg:max-w-sm xl:max-w-xs mx-auto",
                                  children: (0, a.jsx)(n.default, {
                                    src: "/images/aiga/aiga-stroke.svg",
                                    alt: "AI Game Agent",
                                    width: 600,
                                    height: 300,
                                    className: "w-full h-auto object-contain",
                                    style: {
                                      filter:
                                        "drop-shadow(0 0 18px rgba(34, 197, 94, 0.6)) drop-shadow(0 0 20px rgba(34, 197, 94, 0.6))",
                                    },
                                    priority: !0,
                                  }),
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "text-center",
                                children: (0, a.jsxs)("p", {
                                  className:
                                    "text-gray-300 font-bai-jamjuree text-lg md:text-md lg:text-xl leading-relaxed max-w-3xl mx-auto",
                                  children: [
                                    (0, a.jsx)("span", {
                                      className:
                                        "dimension-word energy-word text-cyan-400",
                                      children: "Experience AI stories",
                                    }),
                                    " that",
                                    " ",
                                    (0, a.jsx)("span", {
                                      className:
                                        "dimension-word energy-word text-green-400",
                                      children: "live",
                                    }),
                                    ",",
                                    " ",
                                    (0, a.jsx)("span", {
                                      className:
                                        "dimension-word energy-word text-purple-400",
                                      children: "breathe",
                                    }),
                                    ", and",
                                    " ",
                                    (0, a.jsx)("span", {
                                      className:
                                        "dimension-word energy-word text-blue-400",
                                      children: "remember",
                                    }),
                                    " every choice you make.",
                                  ],
                                }),
                              }),
                              (0, a.jsx)(c, {}),
                              (0, a.jsx)("div", {
                                className: "text-center",
                                children: (0, a.jsx)("p", {
                                  className:
                                    "text-gray-400 font-mono text-sm md:text-base leading-relaxed",
                                  children: (0, a.jsx)("span", {
                                    className:
                                      "dimension-word energy-word text-green-400 font-bold",
                                    children:
                                      "REGISTER FOR EARLY ACCESS & CRAFT YOUR LEGEND",
                                  }),
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "hidden flex flex-col sm:flex-row gap-4 md:gap-6 relative z-[100] max-w-lg mx-auto",
                                children: [
                                  (0, a.jsx)("a", {
                                    href: "https://aiga.io",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "dimension-word flex-1 inline-block px-6 py-4 bg-black border-2 border-white text-white font-mono text-sm md:text-base hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase tracking-wider text-center cursor-pointer",
                                    children: "aiga.io",
                                  }),
                                  (0, a.jsx)("button", {
                                    onClick: () => s(!0),
                                    className:
                                      "dimension-word flex-1 inline-block px-6 py-4 bg-black border-2 border-purple-400 text-purple-400 font-mono text-sm md:text-base hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase tracking-wider cursor-pointer",
                                    children: "PROMO VIDEO",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        {}
                      ),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "flex lg:hidden absolute top-[15%] sm:top-[10%] left-[4%] justify-start",
                    children: (0, a.jsx)("div", {
                      ref: t,
                      className: "text-left relative z-[100]",
                      children: (0, a.jsx)(
                        () =>
                          (0, a.jsx)("div", {
                            className: "w-[38vw] sm:w-[42vw] md:w-[48vw]",
                            children: (0, a.jsx)("div", {
                              className: "dimension-line",
                              children: (0, a.jsx)("div", {
                                className: "dimension-word w-full",
                                children: (0, a.jsx)(n.default, {
                                  src: "/images/aiga/aiga-stroke.svg",
                                  alt: "AI Game Agent",
                                  width: 400,
                                  height: 200,
                                  className: "w-full h-auto object-contain",
                                  style: {
                                    filter:
                                      "drop-shadow(0 0 8px rgba(34, 197, 94, 0.6)) drop-shadow(0 0 16px rgba(34, 197, 94, 0.3))",
                                  },
                                  priority: !0,
                                }),
                              }),
                            }),
                          }),
                        {}
                      ),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "flex lg:hidden absolute top-[30%] sm:top-[28%] left-0 right-0 justify-center px-[4%]",
                    children: (0, a.jsx)("div", {
                      ref: r,
                      className: "w-full max-w-none text-left relative z-[100]",
                      children: (0, a.jsx)(
                        () =>
                          (0, a.jsxs)("div", {
                            className: "space-y-4 sm:space-y-6 pb-8",
                            children: [
                              (0, a.jsx)("div", {
                                className: "mobile-content-item text-center",
                                children: (0, a.jsxs)("p", {
                                  className:
                                    "text-gray-300 font-bai-jamjuree text-sm sm:text-base leading-relaxed mb-6",
                                  children: [
                                    (0, a.jsx)("span", {
                                      className:
                                        "dimension-word energy-word text-cyan-400",
                                      children: "Experience AI stories",
                                    }),
                                    " that",
                                    " ",
                                    (0, a.jsx)("span", {
                                      className:
                                        "dimension-word energy-word text-green-400",
                                      children: "live",
                                    }),
                                    ",",
                                    " ",
                                    (0, a.jsx)("span", {
                                      className:
                                        "dimension-word energy-word text-purple-400",
                                      children: "breathe",
                                    }),
                                    ", and",
                                    " ",
                                    (0, a.jsx)("span", {
                                      className:
                                        "dimension-word energy-word text-blue-400",
                                      children: "remember",
                                    }),
                                    " every choice you make.",
                                  ],
                                }),
                              }),
                              (0, a.jsx)(c, {}),
                              (0, a.jsx)("div", {
                                className: "mobile-content-item text-center",
                                children: (0, a.jsx)("p", {
                                  className:
                                    "text-gray-400 font-mono text-xs sm:text-sm leading-relaxed",
                                  children: (0, a.jsx)("span", {
                                    className:
                                      "dimension-word energy-word text-green-400 font-bold",
                                    children:
                                      "REGISTER FOR EARLY ACCESS & CRAFT YOUR LEGEND",
                                  }),
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "mobile-content-item flex flex-row gap-3 sm:gap-4 relative z-[100] max-w-md mx-auto",
                                children: [
                                  (0, a.jsx)("a", {
                                    href: "https://aiga.io",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "dimension-word flex-1 inline-block px-4 py-3 bg-black border-2 border-white text-white font-mono text-xs sm:text-sm hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase tracking-wider text-center cursor-pointer",
                                    children: "aiga.io",
                                  }),
                                  (0, a.jsx)("button", {
                                    onClick: () => s(!0),
                                    className:
                                      "dimension-word flex-1 inline-block px-4 py-3 bg-black border-2 border-purple-400 text-purple-400 font-mono text-xs sm:text-sm hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase tracking-wider cursor-pointer",
                                    children: "PROMO VIDEO",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        {}
                      ),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        b = () => {
          let e = (0, i.useRef)(null);
          return (
            (0, i.useEffect)(() => {
              let t = l.os.matchMedia();
              return (
                t.add("(min-width: 1024px)", () => {
                  l.os.set(e.current, {
                    y: "-55vh",
                    x: 0,
                    rotation: 0,
                    opacity: 1,
                    scale: 0.2,
                    filter: "hue-rotate(0deg) contrast(1) saturate(1)",
                  });
                  let t = l.os.timeline({
                    scrollTrigger: {
                      trigger: e.current,
                      start: "top 55%",
                      end: "bottom top",
                      scrub: 1,
                    },
                  });
                  t.to(
                    e.current,
                    { y: "50vh", rotation: 380, duration: 1, ease: "none" },
                    0
                  ),
                    t
                      .to(
                        e.current,
                        {
                          scale: 1.4,
                          filter:
                            "hue-rotate(120deg) contrast(1.4) saturate(1.6) drop-shadow(0 0 20px rgba(147, 51, 234, 0.8))",
                          duration: 0.3,
                          ease: "power2.out",
                        },
                        0
                      )
                      .to(
                        e.current,
                        {
                          opacity: 0.3,
                          filter:
                            "hue-rotate(240deg) contrast(1.8) saturate(2) drop-shadow(0 0 25px rgba(6, 182, 212, 0.9))",
                          duration: 0.2,
                          ease: "power2.inOut",
                        },
                        0.2
                      )
                      .to(
                        e.current,
                        {
                          opacity: 1,
                          scale: 1.6,
                          filter:
                            "hue-rotate(300deg) contrast(1.6) saturate(1.8) drop-shadow(0 0 30px rgba(168, 85, 247, 1))",
                          duration: 0.1,
                          ease: "power2.out",
                        },
                        0.3
                      )
                      .to(
                        e.current,
                        {
                          opacity: 0.4,
                          filter:
                            "hue-rotate(360deg) contrast(1.3) saturate(1.4) drop-shadow(0 0 15px rgba(236, 72, 153, 0.7))",
                          duration: 0.1,
                          ease: "power2.inOut",
                        },
                        0.4
                      )
                      .to(
                        e.current,
                        {
                          opacity: 1,
                          scale: 0.2,
                          filter:
                            "hue-rotate(420deg) contrast(1) saturate(1) drop-shadow(0 0 5px rgba(147, 51, 234, 0.5))",
                          duration: 0.3,
                          ease: "power2.in",
                        },
                        0.5
                      );
                }),
                t.add("(max-width: 1023px)", () => {
                  l.os.set(e.current, {
                    y: "-55vh",
                    x: 0,
                    rotation: 0,
                    opacity: 1,
                    scale: 0.2,
                    filter: "hue-rotate(0deg) contrast(1)",
                  });
                  let t = l.os.timeline({
                    scrollTrigger: {
                      trigger: e.current,
                      start: "top 75%",
                      end: "bottom top",
                      scrub: 1,
                    },
                  });
                  t.to(
                    e.current,
                    { y: "50vh", rotation: 380, duration: 1, ease: "none" },
                    0
                  ),
                    t
                      .to(
                        e.current,
                        {
                          scale: 1.4,
                          filter: "hue-rotate(180deg) contrast(1.3)",
                          duration: 0.4,
                          ease: "power2.out",
                        },
                        0
                      )
                      .to(
                        e.current,
                        { opacity: 0.6, duration: 0.2, ease: "power2.inOut" },
                        0.3
                      )
                      .to(
                        e.current,
                        {
                          opacity: 1,
                          scale: 0.2,
                          filter: "hue-rotate(360deg) contrast(1)",
                          duration: 0.4,
                          ease: "power2.in",
                        },
                        0.5
                      );
                }),
                () => t.revert()
              );
            }, []),
            (0, a.jsx)("div", {
              className:
                "absolute z-5 w-full h-full flex items-center justify-center",
              children: (0, a.jsx)("div", {
                ref: e,
                className:
                  "w-[18vw] sm:w-[22vw] md:w-[18vw] lg:w-[15vw] xl:w-[12vw]",
                children: (0, a.jsx)(n.default, {
                  src: "/images/aiga/tic_aiga.webp",
                  alt: "TIC AIGA",
                  width: 800,
                  height: 800,
                  className: "w-full h-auto object-contain",
                  priority: !0,
                }),
              }),
            })
          );
        };
      function f() {
        return (0, a.jsxs)("div", {
          className: "jsx-4fb23789b5a36db8 relative",
          children: [
            (0, a.jsx)(s(), {
              id: "4fb23789b5a36db8",
              children:
                ".scrollbar-hide.jsx-4fb23789b5a36db8{-ms-overflow-style:none;scrollbar-width:none}.scrollbar-hide.jsx-4fb23789b5a36db8::-webkit-scrollbar{display:none}",
            }),
            (0, a.jsx)(p, {}),
            (0, a.jsxs)("div", {
              className:
                "jsx-4fb23789b5a36db8 relative min-h-screen flex flex-col justify-center",
              children: [
                (0, a.jsx)(g, {}),
                (0, a.jsx)(m, {}),
                (0, a.jsx)(x, {}),
                (0, a.jsx)(w, {}),
                (0, a.jsx)(b, {}),
              ],
            }),
          ],
        });
      }
      let v = f;
    },
  },
]);
