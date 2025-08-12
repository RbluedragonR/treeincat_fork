"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [634],
  {
    5415: (t, e, r) => {
      r.d(e, { u: () => e0 });
      var n,
        i,
        s,
        a,
        o,
        u,
        l,
        c,
        f,
        h,
        p,
        d,
        _,
        g = function () {
          return (
            n ||
            ("undefined" != typeof window &&
              (n = window.gsap) &&
              n.registerPlugin &&
              n)
          );
        },
        m = 1,
        v = [],
        y = [],
        x = [],
        b = Date.now,
        w = function (t, e) {
          return e;
        },
        T = function () {
          var t = f.core,
            e = t.bridge || {},
            r = t._scrollers,
            n = t._proxies;
          r.push.apply(r, y),
            n.push.apply(n, x),
            (y = r),
            (x = n),
            (w = function (t, r) {
              return e[t](r);
            });
        },
        k = function (t, e) {
          return ~x.indexOf(t) && x[x.indexOf(t) + 1][e];
        },
        M = function (t) {
          return !!~h.indexOf(t);
        },
        O = function (t, e, r, n, i) {
          return t.addEventListener(e, r, { passive: !1 !== n, capture: !!i });
        },
        C = function (t, e, r, n) {
          return t.removeEventListener(e, r, !!n);
        },
        E = "scrollLeft",
        A = "scrollTop",
        S = function () {
          return (p && p.isPressed) || y.cache++;
        },
        P = function (t, e) {
          var r = function r(n) {
            if (n || 0 === n) {
              m && (s.history.scrollRestoration = "manual");
              var i = p && p.isPressed;
              t((n = r.v = Math.round(n) || (p && p.iOS ? 1 : 0))),
                (r.cacheID = y.cache),
                i && w("ss", n);
            } else
              (e || y.cache !== r.cacheID || w("ref")) &&
                ((r.cacheID = y.cache), (r.v = t()));
            return r.v + r.offset;
          };
          return (r.offset = 0), t && r;
        },
        D = {
          s: E,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: P(function (t) {
            return arguments.length
              ? s.scrollTo(t, R.sc())
              : s.pageXOffset || a[E] || o[E] || u[E] || 0;
          }),
        },
        R = {
          s: A,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: D,
          sc: P(function (t) {
            return arguments.length
              ? s.scrollTo(D.sc(), t)
              : s.pageYOffset || a[A] || o[A] || u[A] || 0;
          }),
        },
        z = function (t, e) {
          return (
            ((e && e._ctx && e._ctx.selector) || n.utils.toArray)(t)[0] ||
            ("string" == typeof t && !1 !== n.config().nullTargetWarn
              ? console.warn("Element not found:", t)
              : null)
          );
        },
        F = function (t, e) {
          var r = e.s,
            i = e.sc;
          M(t) && (t = a.scrollingElement || o);
          var s = y.indexOf(t),
            u = i === R.sc ? 1 : 2;
          ~s || (s = y.push(t) - 1), y[s + u] || O(t, "scroll", S);
          var l = y[s + u],
            c =
              l ||
              (y[s + u] =
                P(k(t, r), !0) ||
                (M(t)
                  ? i
                  : P(function (e) {
                      return arguments.length ? (t[r] = e) : t[r];
                    })));
          return (
            (c.target = t),
            l || (c.smooth = "smooth" === n.getProperty(t, "scrollBehavior")),
            c
          );
        },
        I = function (t, e, r) {
          var n = t,
            i = t,
            s = b(),
            a = s,
            o = e || 50,
            u = Math.max(500, 3 * o),
            l = function (t, e) {
              var u = b();
              e || u - s > o
                ? ((i = n), (n = t), (a = s), (s = u))
                : r
                ? (n += t)
                : (n = i + ((t - i) / (u - a)) * (s - a));
            };
          return {
            update: l,
            reset: function () {
              (i = n = r ? 0 : n), (a = s = 0);
            },
            getVelocity: function (t) {
              var e = a,
                o = i,
                c = b();
              return (
                (t || 0 === t) && t !== n && l(t),
                s === a || c - a > u
                  ? 0
                  : ((n + (r ? o : -o)) / ((r ? c : s) - e)) * 1e3
              );
            },
          };
        },
        Y = function (t, e) {
          return (
            e && !t._gsapAllow && t.preventDefault(),
            t.changedTouches ? t.changedTouches[0] : t
          );
        },
        B = function (t) {
          var e = Math.max.apply(Math, t),
            r = Math.min.apply(Math, t);
          return Math.abs(e) >= Math.abs(r) ? e : r;
        },
        L = function () {
          (f = n.core.globals().ScrollTrigger) && f.core && T();
        },
        N = function (t) {
          return (
            (n = t || g()),
            !i &&
              n &&
              "undefined" != typeof document &&
              document.body &&
              ((s = window),
              (o = (a = document).documentElement),
              (u = a.body),
              (h = [s, a, o, u]),
              n.utils.clamp,
              (_ = n.core.context || function () {}),
              (c = "onpointerenter" in u ? "pointer" : "mouse"),
              (l = X.isTouch =
                s.matchMedia &&
                s.matchMedia("(hover: none), (pointer: coarse)").matches
                  ? 1
                  : "ontouchstart" in s ||
                    navigator.maxTouchPoints > 0 ||
                    navigator.msMaxTouchPoints > 0
                  ? 2
                  : 0),
              (d = X.eventTypes =
                (
                  "ontouchstart" in o
                    ? "touchstart,touchmove,touchcancel,touchend"
                    : "onpointerdown" in o
                    ? "pointerdown,pointermove,pointercancel,pointerup"
                    : "mousedown,mousemove,mouseup,mouseup"
                ).split(",")),
              setTimeout(function () {
                return (m = 0);
              }, 500),
              L(),
              (i = 1)),
            i
          );
        };
      (D.op = R), (y.cache = 0);
      var X = (function () {
        function t(t) {
          this.init(t);
        }
        return (
          (t.prototype.init = function (t) {
            i || N(n) || console.warn("Please gsap.registerPlugin(Observer)"),
              f || L();
            var e = t.tolerance,
              r = t.dragMinimum,
              h = t.type,
              g = t.target,
              m = t.lineHeight,
              y = t.debounce,
              x = t.preventDefault,
              w = t.onStop,
              T = t.onStopDelay,
              k = t.ignore,
              E = t.wheelSpeed,
              A = t.event,
              P = t.onDragStart,
              X = t.onDragEnd,
              U = t.onDrag,
              q = t.onPress,
              H = t.onRelease,
              W = t.onRight,
              V = t.onLeft,
              j = t.onUp,
              G = t.onDown,
              Q = t.onChangeX,
              Z = t.onChangeY,
              $ = t.onChange,
              K = t.onToggleX,
              J = t.onToggleY,
              tt = t.onHover,
              te = t.onHoverEnd,
              tr = t.onMove,
              tn = t.ignoreCheck,
              ti = t.isNormalizer,
              ts = t.onGestureStart,
              ta = t.onGestureEnd,
              to = t.onWheel,
              tu = t.onEnable,
              tl = t.onDisable,
              tc = t.onClick,
              tf = t.scrollSpeed,
              th = t.capture,
              tp = t.allowClicks,
              td = t.lockAxis,
              t_ = t.onLockAxis;
            (this.target = g = z(g) || o),
              (this.vars = t),
              k && (k = n.utils.toArray(k)),
              (e = e || 1e-9),
              (r = r || 0),
              (E = E || 1),
              (tf = tf || 1),
              (h = h || "wheel,touch,pointer"),
              (y = !1 !== y),
              m || (m = parseFloat(s.getComputedStyle(u).lineHeight) || 22);
            var tg,
              tm,
              tv,
              ty,
              tx,
              tb,
              tw,
              tT = this,
              tk = 0,
              tM = 0,
              tO = t.passive || (!x && !1 !== t.passive),
              tC = F(g, D),
              tE = F(g, R),
              tA = tC(),
              tS = tE(),
              tP =
                ~h.indexOf("touch") &&
                !~h.indexOf("pointer") &&
                "pointerdown" === d[0],
              tD = M(g),
              tR = g.ownerDocument || a,
              tz = [0, 0, 0],
              tF = [0, 0, 0],
              tI = 0,
              tY = function () {
                return (tI = b());
              },
              tB = function (t, e) {
                return (
                  ((tT.event = t) && k && ~k.indexOf(t.target)) ||
                  (e && tP && "touch" !== t.pointerType) ||
                  (tn && tn(t, e))
                );
              },
              tL = function () {
                var t = (tT.deltaX = B(tz)),
                  r = (tT.deltaY = B(tF)),
                  n = Math.abs(t) >= e,
                  i = Math.abs(r) >= e;
                $ && (n || i) && $(tT, t, r, tz, tF),
                  n &&
                    (W && tT.deltaX > 0 && W(tT),
                    V && tT.deltaX < 0 && V(tT),
                    Q && Q(tT),
                    K && tT.deltaX < 0 != tk < 0 && K(tT),
                    (tk = tT.deltaX),
                    (tz[0] = tz[1] = tz[2] = 0)),
                  i &&
                    (G && tT.deltaY > 0 && G(tT),
                    j && tT.deltaY < 0 && j(tT),
                    Z && Z(tT),
                    J && tT.deltaY < 0 != tM < 0 && J(tT),
                    (tM = tT.deltaY),
                    (tF[0] = tF[1] = tF[2] = 0)),
                  (ty || tv) &&
                    (tr && tr(tT),
                    tv && (P && 1 === tv && P(tT), U && U(tT), (tv = 0)),
                    (ty = !1)),
                  tb && ((tb = !1), 1) && t_ && t_(tT),
                  tx && (to(tT), (tx = !1)),
                  (tg = 0);
              },
              tN = function (t, e, r) {
                (tz[r] += t),
                  (tF[r] += e),
                  tT._vx.update(t),
                  tT._vy.update(e),
                  y ? tg || (tg = requestAnimationFrame(tL)) : tL();
              },
              tX = function (t, e) {
                td &&
                  !tw &&
                  ((tT.axis = tw = Math.abs(t) > Math.abs(e) ? "x" : "y"),
                  (tb = !0)),
                  "y" !== tw && ((tz[2] += t), tT._vx.update(t, !0)),
                  "x" !== tw && ((tF[2] += e), tT._vy.update(e, !0)),
                  y ? tg || (tg = requestAnimationFrame(tL)) : tL();
              },
              tU = function (t) {
                if (!tB(t, 1)) {
                  var e = (t = Y(t, x)).clientX,
                    n = t.clientY,
                    i = e - tT.x,
                    s = n - tT.y,
                    a = tT.isDragging;
                  (tT.x = e),
                    (tT.y = n),
                    (a ||
                      ((i || s) &&
                        (Math.abs(tT.startX - e) >= r ||
                          Math.abs(tT.startY - n) >= r))) &&
                      ((tv = a ? 2 : 1), a || (tT.isDragging = !0), tX(i, s));
                }
              },
              tq = (tT.onPress = function (t) {
                tB(t, 1) ||
                  (t && t.button) ||
                  ((tT.axis = tw = null),
                  tm.pause(),
                  (tT.isPressed = !0),
                  (t = Y(t)),
                  (tk = tM = 0),
                  (tT.startX = tT.x = t.clientX),
                  (tT.startY = tT.y = t.clientY),
                  tT._vx.reset(),
                  tT._vy.reset(),
                  O(ti ? g : tR, d[1], tU, tO, !0),
                  (tT.deltaX = tT.deltaY = 0),
                  q && q(tT));
              }),
              tH = (tT.onRelease = function (t) {
                if (!tB(t, 1)) {
                  C(ti ? g : tR, d[1], tU, !0);
                  var e = !isNaN(tT.y - tT.startY),
                    r = tT.isDragging,
                    i =
                      r &&
                      (Math.abs(tT.x - tT.startX) > 3 ||
                        Math.abs(tT.y - tT.startY) > 3),
                    a = Y(t);
                  !i &&
                    e &&
                    (tT._vx.reset(),
                    tT._vy.reset(),
                    x &&
                      tp &&
                      n.delayedCall(0.08, function () {
                        if (b() - tI > 300 && !t.defaultPrevented) {
                          if (t.target.click) t.target.click();
                          else if (tR.createEvent) {
                            var e = tR.createEvent("MouseEvents");
                            e.initMouseEvent(
                              "click",
                              !0,
                              !0,
                              s,
                              1,
                              a.screenX,
                              a.screenY,
                              a.clientX,
                              a.clientY,
                              !1,
                              !1,
                              !1,
                              !1,
                              0,
                              null
                            ),
                              t.target.dispatchEvent(e);
                          }
                        }
                      })),
                    (tT.isDragging = tT.isGesturing = tT.isPressed = !1),
                    w && r && !ti && tm.restart(!0),
                    tv && tL(),
                    X && r && X(tT),
                    H && H(tT, i);
                }
              }),
              tW = function (t) {
                return (
                  t.touches &&
                  t.touches.length > 1 &&
                  (tT.isGesturing = !0) &&
                  ts(t, tT.isDragging)
                );
              },
              tV = function () {
                return (tT.isGesturing = !1), ta(tT);
              },
              tj = function (t) {
                if (!tB(t)) {
                  var e = tC(),
                    r = tE();
                  tN((e - tA) * tf, (r - tS) * tf, 1),
                    (tA = e),
                    (tS = r),
                    w && tm.restart(!0);
                }
              },
              tG = function (t) {
                if (!tB(t)) {
                  (t = Y(t, x)), to && (tx = !0);
                  var e =
                    (1 === t.deltaMode
                      ? m
                      : 2 === t.deltaMode
                      ? s.innerHeight
                      : 1) * E;
                  tN(t.deltaX * e, t.deltaY * e, 0), w && !ti && tm.restart(!0);
                }
              },
              tQ = function (t) {
                if (!tB(t)) {
                  var e = t.clientX,
                    r = t.clientY,
                    n = e - tT.x,
                    i = r - tT.y;
                  (tT.x = e),
                    (tT.y = r),
                    (ty = !0),
                    w && tm.restart(!0),
                    (n || i) && tX(n, i);
                }
              },
              tZ = function (t) {
                (tT.event = t), tt(tT);
              },
              t$ = function (t) {
                (tT.event = t), te(tT);
              },
              tK = function (t) {
                return tB(t) || (Y(t, x) && tc(tT));
              };
            (tm = tT._dc =
              n
                .delayedCall(T || 0.25, function () {
                  tT._vx.reset(), tT._vy.reset(), tm.pause(), w && w(tT);
                })
                .pause()),
              (tT.deltaX = tT.deltaY = 0),
              (tT._vx = I(0, 50, !0)),
              (tT._vy = I(0, 50, !0)),
              (tT.scrollX = tC),
              (tT.scrollY = tE),
              (tT.isDragging = tT.isGesturing = tT.isPressed = !1),
              _(this),
              (tT.enable = function (t) {
                return (
                  !tT.isEnabled &&
                    (O(tD ? tR : g, "scroll", S),
                    h.indexOf("scroll") >= 0 &&
                      O(tD ? tR : g, "scroll", tj, tO, th),
                    h.indexOf("wheel") >= 0 && O(g, "wheel", tG, tO, th),
                    ((h.indexOf("touch") >= 0 && l) ||
                      h.indexOf("pointer") >= 0) &&
                      (O(g, d[0], tq, tO, th),
                      O(tR, d[2], tH),
                      O(tR, d[3], tH),
                      tp && O(g, "click", tY, !0, !0),
                      tc && O(g, "click", tK),
                      ts && O(tR, "gesturestart", tW),
                      ta && O(tR, "gestureend", tV),
                      tt && O(g, c + "enter", tZ),
                      te && O(g, c + "leave", t$),
                      tr && O(g, c + "move", tQ)),
                    (tT.isEnabled = !0),
                    (tT.isDragging =
                      tT.isGesturing =
                      tT.isPressed =
                      ty =
                      tv =
                        !1),
                    tT._vx.reset(),
                    tT._vy.reset(),
                    (tA = tC()),
                    (tS = tE()),
                    t && t.type && tq(t),
                    tu && tu(tT)),
                  tT
                );
              }),
              (tT.disable = function () {
                tT.isEnabled &&
                  (v.filter(function (t) {
                    return t !== tT && M(t.target);
                  }).length || C(tD ? tR : g, "scroll", S),
                  tT.isPressed &&
                    (tT._vx.reset(),
                    tT._vy.reset(),
                    C(ti ? g : tR, d[1], tU, !0)),
                  C(tD ? tR : g, "scroll", tj, th),
                  C(g, "wheel", tG, th),
                  C(g, d[0], tq, th),
                  C(tR, d[2], tH),
                  C(tR, d[3], tH),
                  C(g, "click", tY, !0),
                  C(g, "click", tK),
                  C(tR, "gesturestart", tW),
                  C(tR, "gestureend", tV),
                  C(g, c + "enter", tZ),
                  C(g, c + "leave", t$),
                  C(g, c + "move", tQ),
                  (tT.isEnabled = tT.isPressed = tT.isDragging = !1),
                  tl && tl(tT));
              }),
              (tT.kill = tT.revert =
                function () {
                  tT.disable();
                  var t = v.indexOf(tT);
                  t >= 0 && v.splice(t, 1), p === tT && (p = 0);
                }),
              v.push(tT),
              ti && M(g) && (p = tT),
              tT.enable(A);
          }),
          (function (t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          })(t.prototype, [
            {
              key: "velocityX",
              get: function () {
                return this._vx.getVelocity();
              },
            },
            {
              key: "velocityY",
              get: function () {
                return this._vy.getVelocity();
              },
            },
          ]),
          t
        );
      })();
      (X.version = "3.12.7"),
        (X.create = function (t) {
          return new X(t);
        }),
        (X.register = N),
        (X.getAll = function () {
          return v.slice();
        }),
        (X.getById = function (t) {
          return v.filter(function (e) {
            return e.vars.id === t;
          })[0];
        }),
        g() && n.registerPlugin(X);
      var U,
        q,
        H,
        W,
        V,
        j,
        G,
        Q,
        Z,
        $,
        K,
        J,
        tt,
        te,
        tr,
        tn,
        ti,
        ts,
        ta,
        to,
        tu,
        tl,
        tc,
        tf,
        th,
        tp,
        td,
        t_,
        tg,
        tm,
        tv,
        ty,
        tx,
        tb,
        tw,
        tT,
        tk,
        tM,
        tO = 1,
        tC = Date.now,
        tE = tC(),
        tA = 0,
        tS = 0,
        tP = function (t, e, r) {
          var n =
            tW(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
          return (r["_" + e + "Clamp"] = n), n ? t.substr(6, t.length - 7) : t;
        },
        tD = function (t, e) {
          return e && (!tW(t) || "clamp(" !== t.substr(0, 6))
            ? "clamp(" + t + ")"
            : t;
        },
        tR = function () {
          return (te = 1);
        },
        tz = function () {
          return (te = 0);
        },
        tF = function (t) {
          return t;
        },
        tI = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        },
        tY = function () {
          return "undefined" != typeof window;
        },
        tB = function () {
          return U || (tY() && (U = window.gsap) && U.registerPlugin && U);
        },
        tL = function (t) {
          return !!~G.indexOf(t);
        },
        tN = function (t) {
          return (
            ("Height" === t ? tv : H["inner" + t]) ||
            V["client" + t] ||
            j["client" + t]
          );
        },
        tX = function (t) {
          return (
            k(t, "getBoundingClientRect") ||
            (tL(t)
              ? function () {
                  return (ej.width = H.innerWidth), (ej.height = tv), ej;
                }
              : function () {
                  return en(t);
                })
          );
        },
        tU = function (t, e, r) {
          var n = r.d,
            i = r.d2,
            s = r.a;
          return (s = k(t, "getBoundingClientRect"))
            ? function () {
                return s()[n];
              }
            : function () {
                return (e ? tN(i) : t["client" + i]) || 0;
              };
        },
        tq = function (t, e) {
          var r = e.s,
            n = e.d2,
            i = e.d,
            s = e.a;
          return Math.max(
            0,
            (s = k(t, (r = "scroll" + n)))
              ? s() - tX(t)()[i]
              : tL(t)
              ? (V[r] || j[r]) - tN(n)
              : t[r] - t["offset" + n]
          );
        },
        tH = function (t, e) {
          for (var r = 0; r < ta.length; r += 3)
            (!e || ~e.indexOf(ta[r + 1])) && t(ta[r], ta[r + 1], ta[r + 2]);
        },
        tW = function (t) {
          return "string" == typeof t;
        },
        tV = function (t) {
          return "function" == typeof t;
        },
        tj = function (t) {
          return "number" == typeof t;
        },
        tG = function (t) {
          return "object" == typeof t;
        },
        tQ = function (t, e, r) {
          return t && t.progress(e ? 0 : 1) && r && t.pause();
        },
        tZ = function (t, e) {
          if (t.enabled) {
            var r = t._ctx
              ? t._ctx.add(function () {
                  return e(t);
                })
              : e(t);
            r && r.totalTime && (t.callbackAnimation = r);
          }
        },
        t$ = Math.abs,
        tK = "left",
        tJ = "right",
        t0 = "bottom",
        t1 = "width",
        t2 = "height",
        t5 = "Right",
        t3 = "Left",
        t8 = "Bottom",
        t6 = "padding",
        t4 = "margin",
        t9 = "Width",
        t7 = "Height",
        et = function (t) {
          return H.getComputedStyle(t);
        },
        ee = function (t) {
          var e = et(t).position;
          t.style.position = "absolute" === e || "fixed" === e ? e : "relative";
        },
        er = function (t, e) {
          for (var r in e) r in t || (t[r] = e[r]);
          return t;
        },
        en = function (t, e) {
          var r =
              e &&
              "matrix(1, 0, 0, 1, 0, 0)" !== et(t)[tr] &&
              U.to(t, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0,
              }).progress(1),
            n = t.getBoundingClientRect();
          return r && r.progress(0).kill(), n;
        },
        ei = function (t, e) {
          var r = e.d2;
          return t["offset" + r] || t["client" + r] || 0;
        },
        es = function (t) {
          var e,
            r = [],
            n = t.labels,
            i = t.duration();
          for (e in n) r.push(n[e] / i);
          return r;
        },
        ea = function (t) {
          var e = U.utils.snap(t),
            r =
              Array.isArray(t) &&
              t.slice(0).sort(function (t, e) {
                return t - e;
              });
          return r
            ? function (t, n, i) {
                var s;
                if ((void 0 === i && (i = 0.001), !n)) return e(t);
                if (n > 0) {
                  for (t -= i, s = 0; s < r.length; s++)
                    if (r[s] >= t) return r[s];
                  return r[s - 1];
                }
                for (s = r.length, t += i; s--; ) if (r[s] <= t) return r[s];
                return r[0];
              }
            : function (r, n, i) {
                void 0 === i && (i = 0.001);
                var s = e(r);
                return !n || Math.abs(s - r) < i || s - r < 0 == n < 0
                  ? s
                  : e(n < 0 ? r - t : r + t);
              };
        },
        eo = function (t, e, r, n) {
          return r.split(",").forEach(function (r) {
            return t(e, r, n);
          });
        },
        eu = function (t, e, r, n, i) {
          return t.addEventListener(e, r, { passive: !n, capture: !!i });
        },
        el = function (t, e, r, n) {
          return t.removeEventListener(e, r, !!n);
        },
        ec = function (t, e, r) {
          (r = r && r.wheelHandler) && (t(e, "wheel", r), t(e, "touchmove", r));
        },
        ef = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal",
        },
        eh = { toggleActions: "play", anticipatePin: 0 },
        ep = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
        ed = function (t, e) {
          if (tW(t)) {
            var r = t.indexOf("="),
              n = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
            ~r &&
              (t.indexOf("%") > r && (n *= e / 100), (t = t.substr(0, r - 1))),
              (t =
                n +
                (t in ep
                  ? ep[t] * e
                  : ~t.indexOf("%")
                  ? (parseFloat(t) * e) / 100
                  : parseFloat(t) || 0));
          }
          return t;
        },
        e_ = function (t, e, r, n, i, s, a, o) {
          var u = i.startColor,
            l = i.endColor,
            c = i.fontSize,
            f = i.indent,
            h = i.fontWeight,
            p = W.createElement("div"),
            d = tL(r) || "fixed" === k(r, "pinType"),
            _ = -1 !== t.indexOf("scroller"),
            g = d ? j : r,
            m = -1 !== t.indexOf("start"),
            v = m ? u : l,
            y =
              "border-color:" +
              v +
              ";font-size:" +
              c +
              ";color:" +
              v +
              ";font-weight:" +
              h +
              ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return (
            (y += "position:" + ((_ || o) && d ? "fixed;" : "absolute;")),
            (_ || o || !d) &&
              (y += (n === R ? tJ : t0) + ":" + (s + parseFloat(f)) + "px;"),
            a &&
              (y +=
                "box-sizing:border-box;text-align:left;width:" +
                a.offsetWidth +
                "px;"),
            (p._isStart = m),
            p.setAttribute(
              "class",
              "gsap-marker-" + t + (e ? " marker-" + e : "")
            ),
            (p.style.cssText = y),
            (p.innerText = e || 0 === e ? t + "-" + e : t),
            g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p),
            (p._offset = p["offset" + n.op.d2]),
            eg(p, 0, n, m),
            p
          );
        },
        eg = function (t, e, r, n) {
          var i = { display: "block" },
            s = r[n ? "os2" : "p2"],
            a = r[n ? "p2" : "os2"];
          (t._isFlipped = n),
            (i[r.a + "Percent"] = n ? -100 : 0),
            (i[r.a] = n ? "1px" : 0),
            (i["border" + s + t9] = 1),
            (i["border" + a + t9] = 0),
            (i[r.p] = e + "px"),
            U.set(t, i);
        },
        em = [],
        ev = {},
        ey = function () {
          return tC() - tA > 34 && (tw || (tw = requestAnimationFrame(eB)));
        },
        ex = function () {
          (tc && tc.isPressed && !(tc.startX > j.clientWidth)) ||
            (y.cache++,
            tc ? tw || (tw = requestAnimationFrame(eB)) : eB(),
            tA || eO("scrollStart"),
            (tA = tC()));
        },
        eb = function () {
          (tp = H.innerWidth), (th = H.innerHeight);
        },
        ew = function (t) {
          y.cache++,
            (!0 === t ||
              (!tt &&
                !tl &&
                !W.fullscreenElement &&
                !W.webkitFullscreenElement &&
                (!tf ||
                  tp !== H.innerWidth ||
                  Math.abs(H.innerHeight - th) > 0.25 * H.innerHeight))) &&
              Q.restart(!0);
        },
        eT = {},
        ek = [],
        eM = function t() {
          return el(e0, "scrollEnd", t) || eF(!0);
        },
        eO = function (t) {
          return (
            (eT[t] &&
              eT[t].map(function (t) {
                return t();
              })) ||
            ek
          );
        },
        eC = [],
        eE = function (t) {
          for (var e = 0; e < eC.length; e += 5)
            (!t || (eC[e + 4] && eC[e + 4].query === t)) &&
              ((eC[e].style.cssText = eC[e + 1]),
              eC[e].getBBox && eC[e].setAttribute("transform", eC[e + 2] || ""),
              (eC[e + 3].uncache = 1));
        },
        eA = function (t, e) {
          var r;
          for (tn = 0; tn < em.length; tn++)
            (r = em[tn]) &&
              (!e || r._ctx === e) &&
              (t ? r.kill(1) : r.revert(!0, !0));
          (ty = !0), e && eE(e), e || eO("revert");
        },
        eS = function (t, e) {
          y.cache++,
            (e || !tT) &&
              y.forEach(function (t) {
                return tV(t) && t.cacheID++ && (t.rec = 0);
              }),
            tW(t) && (H.history.scrollRestoration = tg = t);
        },
        eP = 0,
        eD = function () {
          if (tk !== eP) {
            var t = (tk = eP);
            requestAnimationFrame(function () {
              return t === eP && eF(!0);
            });
          }
        },
        eR = function () {
          j.appendChild(tm),
            (tv = (!tc && tm.offsetHeight) || H.innerHeight),
            j.removeChild(tm);
        },
        ez = function (t) {
          return Z(
            ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
          ).forEach(function (e) {
            return (e.style.display = t ? "none" : "block");
          });
        },
        eF = function (t, e) {
          if (
            ((V = W.documentElement),
            (j = W.body),
            (G = [H, W, V, j]),
            tA && !t && !ty)
          ) {
            eu(e0, "scrollEnd", eM);
            return;
          }
          eR(),
            (tT = e0.isRefreshing = !0),
            y.forEach(function (t) {
              return tV(t) && ++t.cacheID && (t.rec = t());
            });
          var r = eO("refreshInit");
          to && e0.sort(),
            e || eA(),
            y.forEach(function (t) {
              tV(t) &&
                (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0));
            }),
            em.slice(0).forEach(function (t) {
              return t.refresh();
            }),
            (ty = !1),
            em.forEach(function (t) {
              if (t._subPinOffset && t.pin) {
                var e = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                  r = t.pin[e];
                t.revert(!0, 1), t.adjustPinSpacing(t.pin[e] - r), t.refresh();
              }
            }),
            (tx = 1),
            ez(!0),
            em.forEach(function (t) {
              var e = tq(t.scroller, t._dir),
                r = "max" === t.vars.end || (t._endClamp && t.end > e),
                n = t._startClamp && t.start >= e;
              (r || n) &&
                t.setPositions(
                  n ? e - 1 : t.start,
                  r ? Math.max(n ? e : t.start + 1, e) : t.end,
                  !0
                );
            }),
            ez(!1),
            (tx = 0),
            r.forEach(function (t) {
              return t && t.render && t.render(-1);
            }),
            y.forEach(function (t) {
              tV(t) &&
                (t.smooth &&
                  requestAnimationFrame(function () {
                    return (t.target.style.scrollBehavior = "smooth");
                  }),
                t.rec && t(t.rec));
            }),
            eS(tg, 1),
            Q.pause(),
            eP++,
            (tT = 2),
            eB(2),
            em.forEach(function (t) {
              return tV(t.vars.onRefresh) && t.vars.onRefresh(t);
            }),
            (tT = e0.isRefreshing = !1),
            eO("refresh");
        },
        eI = 0,
        eY = 1,
        eB = function (t) {
          if (2 === t || (!tT && !ty)) {
            (e0.isUpdating = !0), tM && tM.update(0);
            var e = em.length,
              r = tC(),
              n = r - tE >= 50,
              i = e && em[0].scroll();
            if (
              ((eY = eI > i ? -1 : 1),
              tT || (eI = i),
              n &&
                (tA && !te && r - tA > 200 && ((tA = 0), eO("scrollEnd")),
                (K = tE),
                (tE = r)),
              eY < 0)
            ) {
              for (tn = e; tn-- > 0; ) em[tn] && em[tn].update(0, n);
              eY = 1;
            } else for (tn = 0; tn < e; tn++) em[tn] && em[tn].update(0, n);
            e0.isUpdating = !1;
          }
          tw = 0;
        },
        eL = [
          tK,
          "top",
          t0,
          tJ,
          t4 + t8,
          t4 + t5,
          t4 + "Top",
          t4 + t3,
          "display",
          "flexShrink",
          "float",
          "zIndex",
          "gridColumnStart",
          "gridColumnEnd",
          "gridRowStart",
          "gridRowEnd",
          "gridArea",
          "justifySelf",
          "alignSelf",
          "placeSelf",
          "order",
        ],
        eN = eL.concat([
          t1,
          t2,
          "boxSizing",
          "max" + t9,
          "max" + t7,
          "position",
          t4,
          t6,
          t6 + "Top",
          t6 + t5,
          t6 + t8,
          t6 + t3,
        ]),
        eX = function (t, e, r) {
          eH(r);
          var n = t._gsap;
          if (n.spacerIsNative) eH(n.spacerState);
          else if (t._gsap.swappedIn) {
            var i = e.parentNode;
            i && (i.insertBefore(t, e), i.removeChild(e));
          }
          t._gsap.swappedIn = !1;
        },
        eU = function (t, e, r, n) {
          if (!t._gsap.swappedIn) {
            for (var i, s = eL.length, a = e.style, o = t.style; s--; )
              a[(i = eL[s])] = r[i];
            (a.position = "absolute" === r.position ? "absolute" : "relative"),
              "inline" === r.display && (a.display = "inline-block"),
              (o[t0] = o[tJ] = "auto"),
              (a.flexBasis = r.flexBasis || "auto"),
              (a.overflow = "visible"),
              (a.boxSizing = "border-box"),
              (a[t1] = ei(t, D) + "px"),
              (a[t2] = ei(t, R) + "px"),
              (a[t6] = o[t4] = o.top = o[tK] = "0"),
              eH(n),
              (o[t1] = o["max" + t9] = r[t1]),
              (o[t2] = o["max" + t7] = r[t2]),
              (o[t6] = r[t6]),
              t.parentNode !== e &&
                (t.parentNode.insertBefore(e, t), e.appendChild(t)),
              (t._gsap.swappedIn = !0);
          }
        },
        eq = /([A-Z])/g,
        eH = function (t) {
          if (t) {
            var e,
              r,
              n = t.t.style,
              i = t.length,
              s = 0;
            for ((t.t._gsap || U.core.getCache(t.t)).uncache = 1; s < i; s += 2)
              (r = t[s + 1]),
                (e = t[s]),
                r
                  ? (n[e] = r)
                  : n[e] &&
                    n.removeProperty(e.replace(eq, "-$1").toLowerCase());
          }
        },
        eW = function (t) {
          for (var e = eN.length, r = t.style, n = [], i = 0; i < e; i++)
            n.push(eN[i], r[eN[i]]);
          return (n.t = t), n;
        },
        eV = function (t, e, r) {
          for (var n, i = [], s = t.length, a = r ? 8 : 0; a < s; a += 2)
            (n = t[a]), i.push(n, n in e ? e[n] : t[a + 1]);
          return (i.t = t.t), i;
        },
        ej = { left: 0, top: 0 },
        eG = function (t, e, r, n, i, s, a, o, u, l, c, f, h, p) {
          tV(t) && (t = t(o)),
            tW(t) &&
              "max" === t.substr(0, 3) &&
              (t = f + ("=" === t.charAt(4) ? ed("0" + t.substr(3), r) : 0));
          var d,
            _,
            g,
            m = h ? h.time() : 0;
          if ((h && h.seek(0), isNaN(t) || (t = +t), tj(t)))
            h &&
              (t = U.utils.mapRange(
                h.scrollTrigger.start,
                h.scrollTrigger.end,
                0,
                f,
                t
              )),
              a && eg(a, r, n, !0);
          else {
            tV(e) && (e = e(o));
            var v,
              y,
              x,
              b,
              w = (t || "0").split(" ");
            (v = en((g = z(e, o) || j)) || {}).left ||
              v.top ||
              "none" !== et(g).display ||
              ((b = g.style.display),
              (g.style.display = "block"),
              (v = en(g)),
              b ? (g.style.display = b) : g.style.removeProperty("display")),
              (y = ed(w[0], v[n.d])),
              (x = ed(w[1] || "0", r)),
              (t = v[n.p] - u[n.p] - l + y + i - x),
              a && eg(a, x, n, r - x < 20 || (a._isStart && x > 20)),
              (r -= r - x);
          }
          if ((p && ((o[p] = t || -0.001), t < 0 && (t = 0)), s)) {
            var T = t + r,
              k = s._isStart;
            (d = "scroll" + n.d2),
              eg(
                s,
                T,
                n,
                (k && T > 20) ||
                  (!k && (c ? Math.max(j[d], V[d]) : s.parentNode[d]) <= T + 1)
              ),
              c &&
                ((u = en(a)),
                c && (s.style[n.op.p] = u[n.op.p] - n.op.m - s._offset + "px"));
          }
          return (
            h &&
              g &&
              ((d = en(g)),
              h.seek(f),
              (_ = en(g)),
              (h._caScrollDist = d[n.p] - _[n.p]),
              (t = (t / h._caScrollDist) * f)),
            h && h.seek(m),
            h ? t : Math.round(t)
          );
        },
        eQ = /(webkit|moz|length|cssText|inset)/i,
        eZ = function (t, e, r, n) {
          if (t.parentNode !== e) {
            var i,
              s,
              a = t.style;
            if (e === j) {
              for (i in ((t._stOrig = a.cssText), (s = et(t))))
                +i ||
                  eQ.test(i) ||
                  !s[i] ||
                  "string" != typeof a[i] ||
                  "0" === i ||
                  (a[i] = s[i]);
              (a.top = r), (a.left = n);
            } else a.cssText = t._stOrig;
            (U.core.getCache(t).uncache = 1), e.appendChild(t);
          }
        },
        e$ = function (t, e, r) {
          var n = e,
            i = n;
          return function (e) {
            var s = Math.round(t());
            return (
              s !== n &&
                s !== i &&
                Math.abs(s - n) > 3 &&
                Math.abs(s - i) > 3 &&
                ((e = s), r && r()),
              (i = n),
              (n = Math.round(e))
            );
          };
        },
        eK = function (t, e, r) {
          var n = {};
          (n[e.p] = "+=" + r), U.set(t, n);
        },
        eJ = function (t, e) {
          var r = F(t, e),
            n = "_scroll" + e.p2,
            i = function e(i, s, a, o, u) {
              var l = e.tween,
                c = s.onComplete,
                f = {};
              a = a || r();
              var h = e$(r, a, function () {
                l.kill(), (e.tween = 0);
              });
              return (
                (u = (o && u) || 0),
                (o = o || i - a),
                l && l.kill(),
                (s[n] = i),
                (s.inherit = !1),
                (s.modifiers = f),
                (f[n] = function () {
                  return h(a + o * l.ratio + u * l.ratio * l.ratio);
                }),
                (s.onUpdate = function () {
                  y.cache++, e.tween && eB();
                }),
                (s.onComplete = function () {
                  (e.tween = 0), c && c.call(l);
                }),
                (l = e.tween = U.to(t, s))
              );
            };
          return (
            (t[n] = r),
            (r.wheelHandler = function () {
              return i.tween && i.tween.kill() && (i.tween = 0);
            }),
            eu(t, "wheel", r.wheelHandler),
            e0.isTouch && eu(t, "touchmove", r.wheelHandler),
            i
          );
        },
        e0 = (function () {
          function t(e, r) {
            q ||
              t.register(U) ||
              console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
              t_(this),
              this.init(e, r);
          }
          return (
            (t.prototype.init = function (e, r) {
              if (
                ((this.progress = this.start = 0),
                this.vars && this.kill(!0, !0),
                !tS)
              ) {
                this.update = this.refresh = this.kill = tF;
                return;
              }
              var n,
                i,
                s,
                a,
                o,
                u,
                l,
                c,
                f,
                h,
                p,
                d,
                _,
                g,
                m,
                v,
                b,
                w,
                T,
                M,
                O,
                C,
                E,
                A,
                S,
                P,
                I,
                Y,
                B,
                L,
                N,
                X,
                q,
                G,
                Q,
                J,
                tr,
                ti,
                ts,
                ta,
                tl,
                tc = (e = er(
                  tW(e) || tj(e) || e.nodeType ? { trigger: e } : e,
                  eh
                )),
                tf = tc.onUpdate,
                th = tc.toggleClass,
                tp = tc.id,
                td = tc.onToggle,
                t_ = tc.onRefresh,
                tg = tc.scrub,
                tm = tc.trigger,
                tv = tc.pin,
                ty = tc.pinSpacing,
                tw = tc.invalidateOnRefresh,
                tk = tc.anticipatePin,
                tE = tc.onScrubComplete,
                tR = tc.onSnapComplete,
                tz = tc.once,
                tY = tc.snap,
                tB = tc.pinReparent,
                tN = tc.pinSpacer,
                tH = tc.containerAnimation,
                tK = tc.fastScrollEnd,
                tJ = tc.preventOverlaps,
                t0 =
                  e.horizontal || (e.containerAnimation && !1 !== e.horizontal)
                    ? D
                    : R,
                eo = !tg && 0 !== tg,
                ec = z(e.scroller || H),
                ep = U.core.getCache(ec),
                eg = tL(ec),
                ey =
                  ("pinType" in e
                    ? e.pinType
                    : k(ec, "pinType") || (eg && "fixed")) === "fixed",
                eb = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                eT = eo && e.toggleActions.split(" "),
                ek = "markers" in e ? e.markers : eh.markers,
                eO = eg ? 0 : parseFloat(et(ec)["border" + t0.p2 + t9]) || 0,
                eC = this,
                eE =
                  e.onRefreshInit &&
                  function () {
                    return e.onRefreshInit(eC);
                  },
                eA = tU(ec, eg, t0),
                eS =
                  !eg || ~x.indexOf(ec)
                    ? tX(ec)
                    : function () {
                        return ej;
                      },
                eP = 0,
                eR = 0,
                ez = 0,
                eF = F(ec, t0);
              if (
                ((eC._startClamp = eC._endClamp = !1),
                (eC._dir = t0),
                (tk *= 45),
                (eC.scroller = ec),
                (eC.scroll = tH ? tH.time.bind(tH) : eF),
                (u = eF()),
                (eC.vars = e),
                (r = r || e.animation),
                "refreshPriority" in e &&
                  ((to = 1), -9999 === e.refreshPriority && (tM = eC)),
                (ep.tweenScroll = ep.tweenScroll || {
                  top: eJ(ec, R),
                  left: eJ(ec, D),
                }),
                (eC.tweenTo = s = ep.tweenScroll[t0.p]),
                (eC.scrubDuration = function (t) {
                  (Q = tj(t) && t)
                    ? G
                      ? G.duration(t)
                      : (G = U.to(r, {
                          ease: "expo",
                          totalProgress: "+=0",
                          inherit: !1,
                          duration: Q,
                          paused: !0,
                          onComplete: function () {
                            return tE && tE(eC);
                          },
                        }))
                    : (G && G.progress(1).kill(), (G = 0));
                }),
                r &&
                  ((r.vars.lazy = !1),
                  (r._initted && !eC.isReverted) ||
                    (!1 !== r.vars.immediateRender &&
                      !1 !== e.immediateRender &&
                      r.duration() &&
                      r.render(0, !0, !0)),
                  (eC.animation = r.pause()),
                  (r.scrollTrigger = eC),
                  eC.scrubDuration(tg),
                  (X = 0),
                  tp || (tp = r.vars.id)),
                tY &&
                  ((!tG(tY) || tY.push) && (tY = { snapTo: tY }),
                  "scrollBehavior" in j.style &&
                    U.set(eg ? [j, V] : ec, { scrollBehavior: "auto" }),
                  y.forEach(function (t) {
                    return (
                      tV(t) &&
                      t.target === (eg ? W.scrollingElement || V : ec) &&
                      (t.smooth = !1)
                    );
                  }),
                  (o = tV(tY.snapTo)
                    ? tY.snapTo
                    : "labels" === tY.snapTo
                    ? ((n = r),
                      function (t) {
                        return U.utils.snap(es(n), t);
                      })
                    : "labelsDirectional" === tY.snapTo
                    ? ((i = r),
                      function (t, e) {
                        return ea(es(i))(t, e.direction);
                      })
                    : !1 !== tY.directional
                    ? function (t, e) {
                        return ea(tY.snapTo)(
                          t,
                          tC() - eR < 500 ? 0 : e.direction
                        );
                      }
                    : U.utils.snap(tY.snapTo)),
                  (J = tG((J = tY.duration || { min: 0.1, max: 2 }))
                    ? $(J.min, J.max)
                    : $(J, J)),
                  (tr = U.delayedCall(tY.delay || Q / 2 || 0.1, function () {
                    var t = eF(),
                      e = tC() - eR < 500,
                      n = s.tween;
                    if (
                      (e || 10 > Math.abs(eC.getVelocity())) &&
                      !n &&
                      !te &&
                      eP !== t
                    ) {
                      var i,
                        a,
                        u = (t - c) / v,
                        l = r && !eo ? r.totalProgress() : u,
                        h = e ? 0 : ((l - q) / (tC() - K)) * 1e3 || 0,
                        p = U.utils.clamp(-u, 1 - u, (t$(h / 2) * h) / 0.185),
                        d = u + (!1 === tY.inertia ? 0 : p),
                        _ = tY,
                        g = _.onStart,
                        m = _.onInterrupt,
                        y = _.onComplete;
                      if (
                        (tj((i = o(d, eC))) || (i = d),
                        (a = Math.max(0, Math.round(c + i * v))),
                        t <= f && t >= c && a !== t)
                      ) {
                        if (n && !n._initted && n.data <= t$(a - t)) return;
                        !1 === tY.inertia && (p = i - u),
                          s(
                            a,
                            {
                              duration: J(
                                t$(
                                  (0.185 * Math.max(t$(d - l), t$(i - l))) /
                                    h /
                                    0.05 || 0
                                )
                              ),
                              ease: tY.ease || "power3",
                              data: t$(a - t),
                              onInterrupt: function () {
                                return tr.restart(!0) && m && m(eC);
                              },
                              onComplete: function () {
                                eC.update(),
                                  (eP = eF()),
                                  r &&
                                    !eo &&
                                    (G
                                      ? G.resetTo(
                                          "totalProgress",
                                          i,
                                          r._tTime / r._tDur
                                        )
                                      : r.progress(i)),
                                  (X = q =
                                    r && !eo ? r.totalProgress() : eC.progress),
                                  tR && tR(eC),
                                  y && y(eC);
                              },
                            },
                            t,
                            p * v,
                            a - t - p * v
                          ),
                          g && g(eC, s.tween);
                      }
                    } else eC.isActive && eP !== t && tr.restart(!0);
                  }).pause())),
                tp && (ev[tp] = eC),
                (tl =
                  (tm = eC.trigger = z(tm || (!0 !== tv && tv))) &&
                  tm._gsap &&
                  tm._gsap.stRevert) && (tl = tl(eC)),
                (tv = !0 === tv ? tm : z(tv)),
                tW(th) && (th = { targets: tm, className: th }),
                tv &&
                  (!1 === ty ||
                    ty === t4 ||
                    (ty =
                      (!!ty ||
                        !tv.parentNode ||
                        !tv.parentNode.style ||
                        "flex" !== et(tv.parentNode).display) &&
                      t6),
                  (eC.pin = tv),
                  (a = U.core.getCache(tv)).spacer
                    ? (b = a.pinState)
                    : (tN &&
                        ((tN = z(tN)) &&
                          !tN.nodeType &&
                          (tN = tN.current || tN.nativeElement),
                        (a.spacerIsNative = !!tN),
                        tN && (a.spacerState = eW(tN))),
                      (a.spacer = M = tN || W.createElement("div")),
                      M.classList.add("pin-spacer"),
                      tp && M.classList.add("pin-spacer-" + tp),
                      (a.pinState = b = eW(tv))),
                  !1 !== e.force3D && U.set(tv, { force3D: !0 }),
                  (eC.spacer = M = a.spacer),
                  (P = (N = et(tv))[ty + t0.os2]),
                  (C = U.getProperty(tv)),
                  (E = U.quickSetter(tv, t0.a, "px")),
                  eU(tv, M, N),
                  (T = eW(tv))),
                ek)
              ) {
                (g = tG(ek) ? er(ek, ef) : ef),
                  (d = e_("scroller-start", tp, ec, t0, g, 0)),
                  (_ = e_("scroller-end", tp, ec, t0, g, 0, d)),
                  (O = d["offset" + t0.op.d2]);
                var eI = z(k(ec, "content") || ec);
                (h = this.markerStart = e_("start", tp, eI, t0, g, O, 0, tH)),
                  (p = this.markerEnd = e_("end", tp, eI, t0, g, O, 0, tH)),
                  tH && (ta = U.quickSetter([h, p], t0.a, "px")),
                  ey ||
                    (x.length && !0 === k(ec, "fixedMarkers")) ||
                    (ee(eg ? j : ec),
                    U.set([d, _], { force3D: !0 }),
                    (Y = U.quickSetter(d, t0.a, "px")),
                    (L = U.quickSetter(_, t0.a, "px")));
              }
              if (tH) {
                var eB = tH.vars.onUpdate,
                  eL = tH.vars.onUpdateParams;
                tH.eventCallback("onUpdate", function () {
                  eC.update(0, 0, 1), eB && eB.apply(tH, eL || []);
                });
              }
              if (
                ((eC.previous = function () {
                  return em[em.indexOf(eC) - 1];
                }),
                (eC.next = function () {
                  return em[em.indexOf(eC) + 1];
                }),
                (eC.revert = function (t, e) {
                  if (!e) return eC.kill(!0);
                  var n = !1 !== t || !eC.enabled,
                    i = tt;
                  n !== eC.isReverted &&
                    (n &&
                      ((ti = Math.max(eF(), eC.scroll.rec || 0)),
                      (ez = eC.progress),
                      (ts = r && r.progress())),
                    h &&
                      [h, p, d, _].forEach(function (t) {
                        return (t.style.display = n ? "none" : "block");
                      }),
                    n && ((tt = eC), eC.update(n)),
                    !tv ||
                      (tB && eC.isActive) ||
                      (n ? eX(tv, M, b) : eU(tv, M, et(tv), I)),
                    n || eC.update(n),
                    (tt = i),
                    (eC.isReverted = n));
                }),
                (eC.refresh = function (n, i, a, o) {
                  if ((!tt && eC.enabled) || i) {
                    if (tv && n && tA) {
                      eu(t, "scrollEnd", eM);
                      return;
                    }
                    !tT && eE && eE(eC),
                      (tt = eC),
                      s.tween && !a && (s.tween.kill(), (s.tween = 0)),
                      G && G.pause(),
                      tw && r && r.revert({ kill: !1 }).invalidate(),
                      eC.isReverted || eC.revert(!0, !0),
                      (eC._subPinOffset = !1);
                    var g,
                      y,
                      x,
                      k,
                      O,
                      E,
                      P,
                      Y,
                      L,
                      N,
                      X,
                      q,
                      H,
                      Q = eA(),
                      Z = eS(),
                      $ = tH ? tH.duration() : tq(ec, t0),
                      K = v <= 0.01,
                      J = 0,
                      te = o || 0,
                      tn = tG(a) ? a.end : e.end,
                      ta = e.endTrigger || tm,
                      to = tG(a)
                        ? a.start
                        : e.start ||
                          (0 !== e.start && tm ? (tv ? "0 0" : "0 100%") : 0),
                      tl = (eC.pinnedContainer =
                        e.pinnedContainer && z(e.pinnedContainer, eC)),
                      tc = (tm && Math.max(0, em.indexOf(eC))) || 0,
                      tf = tc;
                    for (
                      ek &&
                      tG(a) &&
                      ((q = U.getProperty(d, t0.p)),
                      (H = U.getProperty(_, t0.p)));
                      tf-- > 0;

                    )
                      (E = em[tf]).end || E.refresh(0, 1) || (tt = eC),
                        (P = E.pin) &&
                          (P === tm || P === tv || P === tl) &&
                          !E.isReverted &&
                          (N || (N = []), N.unshift(E), E.revert(!0, !0)),
                        E !== em[tf] && (tc--, tf--);
                    for (
                      tV(to) && (to = to(eC)),
                        c =
                          eG(
                            (to = tP(to, "start", eC)),
                            tm,
                            Q,
                            t0,
                            eF(),
                            h,
                            d,
                            eC,
                            Z,
                            eO,
                            ey,
                            $,
                            tH,
                            eC._startClamp && "_startClamp"
                          ) || (tv ? -0.001 : 0),
                        tV(tn) && (tn = tn(eC)),
                        tW(tn) &&
                          !tn.indexOf("+=") &&
                          (~tn.indexOf(" ")
                            ? (tn = (tW(to) ? to.split(" ")[0] : "") + tn)
                            : ((J = ed(tn.substr(2), Q)),
                              (tn = tW(to)
                                ? to
                                : (tH
                                    ? U.utils.mapRange(
                                        0,
                                        tH.duration(),
                                        tH.scrollTrigger.start,
                                        tH.scrollTrigger.end,
                                        c
                                      )
                                    : c) + J),
                              (ta = tm))),
                        tn = tP(tn, "end", eC),
                        f =
                          Math.max(
                            c,
                            eG(
                              tn || (ta ? "100% 0" : $),
                              ta,
                              Q,
                              t0,
                              eF() + J,
                              p,
                              _,
                              eC,
                              Z,
                              eO,
                              ey,
                              $,
                              tH,
                              eC._endClamp && "_endClamp"
                            )
                          ) || -0.001,
                        J = 0,
                        tf = tc;
                      tf--;

                    )
                      (P = (E = em[tf]).pin) &&
                        E.start - E._pinPush <= c &&
                        !tH &&
                        E.end > 0 &&
                        ((g =
                          E.end -
                          (eC._startClamp ? Math.max(0, E.start) : E.start)),
                        ((P === tm && E.start - E._pinPush < c) || P === tl) &&
                          isNaN(to) &&
                          (J += g * (1 - E.progress)),
                        P === tv && (te += g));
                    if (
                      ((c += J),
                      (f += J),
                      eC._startClamp && (eC._startClamp += J),
                      eC._endClamp &&
                        !tT &&
                        ((eC._endClamp = f || -0.001),
                        (f = Math.min(f, tq(ec, t0)))),
                      (v = f - c || ((c -= 0.01) && 0.001)),
                      K &&
                        (ez = U.utils.clamp(0, 1, U.utils.normalize(c, f, ti))),
                      (eC._pinPush = te),
                      h &&
                        J &&
                        (((g = {})[t0.a] = "+=" + J),
                        tl && (g[t0.p] = "-=" + eF()),
                        U.set([h, p], g)),
                      tv && !(tx && eC.end >= tq(ec, t0)))
                    )
                      (g = et(tv)),
                        (k = t0 === R),
                        (x = eF()),
                        (A = parseFloat(C(t0.a)) + te),
                        !$ &&
                          f > 1 &&
                          ((X = {
                            style: (X = (eg ? W.scrollingElement || V : ec)
                              .style),
                            value: X["overflow" + t0.a.toUpperCase()],
                          }),
                          eg &&
                            "scroll" !==
                              et(j)["overflow" + t0.a.toUpperCase()] &&
                            (X.style["overflow" + t0.a.toUpperCase()] =
                              "scroll")),
                        eU(tv, M, g),
                        (T = eW(tv)),
                        (y = en(tv, !0)),
                        (Y = ey && F(ec, k ? D : R)()),
                        ty
                          ? (((I = [ty + t0.os2, v + te + "px"]).t = M),
                            (tf = ty === t6 ? ei(tv, t0) + v + te : 0) &&
                              (I.push(t0.d, tf + "px"),
                              "auto" !== M.style.flexBasis &&
                                (M.style.flexBasis = tf + "px")),
                            eH(I),
                            tl &&
                              em.forEach(function (t) {
                                t.pin === tl &&
                                  !1 !== t.vars.pinSpacing &&
                                  (t._subPinOffset = !0);
                              }),
                            ey && eF(ti))
                          : (tf = ei(tv, t0)) &&
                            "auto" !== M.style.flexBasis &&
                            (M.style.flexBasis = tf + "px"),
                        ey &&
                          (((O = {
                            top: y.top + (k ? x - c : Y) + "px",
                            left: y.left + (k ? Y : x - c) + "px",
                            boxSizing: "border-box",
                            position: "fixed",
                          })[t1] = O["max" + t9] =
                            Math.ceil(y.width) + "px"),
                          (O[t2] = O["max" + t7] = Math.ceil(y.height) + "px"),
                          (O[t4] =
                            O[t4 + "Top"] =
                            O[t4 + t5] =
                            O[t4 + t8] =
                            O[t4 + t3] =
                              "0"),
                          (O[t6] = g[t6]),
                          (O[t6 + "Top"] = g[t6 + "Top"]),
                          (O[t6 + t5] = g[t6 + t5]),
                          (O[t6 + t8] = g[t6 + t8]),
                          (O[t6 + t3] = g[t6 + t3]),
                          (w = eV(b, O, tB)),
                          tT && eF(0)),
                        r
                          ? ((L = r._initted),
                            tu(1),
                            r.render(r.duration(), !0, !0),
                            (S = C(t0.a) - A + v + te),
                            (B = Math.abs(v - S) > 1),
                            ey && B && w.splice(w.length - 2, 2),
                            r.render(0, !0, !0),
                            L || r.invalidate(!0),
                            r.parent || r.totalTime(r.totalTime()),
                            tu(0))
                          : (S = v),
                        X &&
                          (X.value
                            ? (X.style["overflow" + t0.a.toUpperCase()] =
                                X.value)
                            : X.style.removeProperty("overflow-" + t0.a));
                    else if (tm && eF() && !tH)
                      for (y = tm.parentNode; y && y !== j; )
                        y._pinOffset &&
                          ((c -= y._pinOffset), (f -= y._pinOffset)),
                          (y = y.parentNode);
                    N &&
                      N.forEach(function (t) {
                        return t.revert(!1, !0);
                      }),
                      (eC.start = c),
                      (eC.end = f),
                      (u = l = tT ? ti : eF()),
                      tH || tT || (u < ti && eF(ti), (eC.scroll.rec = 0)),
                      eC.revert(!1, !0),
                      (eR = tC()),
                      tr && ((eP = -1), tr.restart(!0)),
                      (tt = 0),
                      r &&
                        eo &&
                        (r._initted || ts) &&
                        r.progress() !== ts &&
                        r.progress(ts || 0, !0).render(r.time(), !0, !0),
                      (K ||
                        ez !== eC.progress ||
                        tH ||
                        tw ||
                        (r && !r._initted)) &&
                        (r &&
                          !eo &&
                          r.totalProgress(
                            tH && c < -0.001 && !ez
                              ? U.utils.normalize(c, f, 0)
                              : ez,
                            !0
                          ),
                        (eC.progress = K || (u - c) / v === ez ? 0 : ez)),
                      tv && ty && (M._pinOffset = Math.round(eC.progress * S)),
                      G && G.invalidate(),
                      isNaN(q) ||
                        ((q -= U.getProperty(d, t0.p)),
                        (H -= U.getProperty(_, t0.p)),
                        eK(d, t0, q),
                        eK(h, t0, q - (o || 0)),
                        eK(_, t0, H),
                        eK(p, t0, H - (o || 0))),
                      K && !tT && eC.update(),
                      !t_ || tT || m || ((m = !0), t_(eC), (m = !1));
                  }
                }),
                (eC.getVelocity = function () {
                  return ((eF() - l) / (tC() - K)) * 1e3 || 0;
                }),
                (eC.endAnimation = function () {
                  tQ(eC.callbackAnimation),
                    r &&
                      (G
                        ? G.progress(1)
                        : r.paused()
                        ? eo || tQ(r, eC.direction < 0, 1)
                        : tQ(r, r.reversed()));
                }),
                (eC.labelToScroll = function (t) {
                  return (
                    (r &&
                      r.labels &&
                      (c || eC.refresh() || c) +
                        (r.labels[t] / r.duration()) * v) ||
                    0
                  );
                }),
                (eC.getTrailing = function (t) {
                  var e = em.indexOf(eC),
                    r =
                      eC.direction > 0
                        ? em.slice(0, e).reverse()
                        : em.slice(e + 1);
                  return (
                    tW(t)
                      ? r.filter(function (e) {
                          return e.vars.preventOverlaps === t;
                        })
                      : r
                  ).filter(function (t) {
                    return eC.direction > 0 ? t.end <= c : t.start >= f;
                  });
                }),
                (eC.update = function (t, e, n) {
                  if (!tH || n || t) {
                    var i,
                      a,
                      o,
                      h,
                      p,
                      _,
                      g,
                      m = !0 === tT ? ti : eC.scroll(),
                      y = t ? 0 : (m - c) / v,
                      x = y < 0 ? 0 : y > 1 ? 1 : y || 0,
                      b = eC.progress;
                    if (
                      (e &&
                        ((l = u),
                        (u = tH ? eF() : m),
                        tY &&
                          ((q = X), (X = r && !eo ? r.totalProgress() : x))),
                      tk &&
                        tv &&
                        !tt &&
                        !tO &&
                        tA &&
                        (!x && c < m + ((m - l) / (tC() - K)) * tk
                          ? (x = 1e-4)
                          : 1 === x &&
                            f > m + ((m - l) / (tC() - K)) * tk &&
                            (x = 0.9999)),
                      x !== b && eC.enabled)
                    ) {
                      if (
                        ((h =
                          (p =
                            (i = eC.isActive = !!x && x < 1) !=
                            (!!b && b < 1)) || !!x != !!b),
                        (eC.direction = x > b ? 1 : -1),
                        (eC.progress = x),
                        h &&
                          !tt &&
                          ((a = x && !b ? 0 : 1 === x ? 1 : 1 === b ? 2 : 3),
                          eo &&
                            ((o =
                              (!p && "none" !== eT[a + 1] && eT[a + 1]) ||
                              eT[a]),
                            (g =
                              r &&
                              ("complete" === o || "reset" === o || o in r)))),
                        tJ &&
                          (p || g) &&
                          (g || tg || !r) &&
                          (tV(tJ)
                            ? tJ(eC)
                            : eC.getTrailing(tJ).forEach(function (t) {
                                return t.endAnimation();
                              })),
                        !eo &&
                          (!G || tt || tO
                            ? r && r.totalProgress(x, !!(tt && (eR || t)))
                            : (G._dp._time - G._start !== G._time &&
                                G.render(G._dp._time - G._start),
                              G.resetTo
                                ? G.resetTo(
                                    "totalProgress",
                                    x,
                                    r._tTime / r._tDur
                                  )
                                : ((G.vars.totalProgress = x),
                                  G.invalidate().restart()))),
                        tv)
                      ) {
                        if ((t && ty && (M.style[ty + t0.os2] = P), ey)) {
                          if (h) {
                            if (
                              ((_ =
                                !t &&
                                x > b &&
                                f + 1 > m &&
                                m + 1 >= tq(ec, t0)),
                              tB)
                            ) {
                              if (!t && (i || _)) {
                                var k = en(tv, !0),
                                  O = m - c;
                                eZ(
                                  tv,
                                  j,
                                  k.top + (t0 === R ? O : 0) + "px",
                                  k.left + (t0 === R ? 0 : O) + "px"
                                );
                              } else eZ(tv, M);
                            }
                            eH(i || _ ? w : T),
                              (B && x < 1 && i) ||
                                E(A + (1 !== x || _ ? 0 : S));
                          }
                        } else E(tI(A + S * x));
                      }
                      !tY || s.tween || tt || tO || tr.restart(!0),
                        th &&
                          (p || (tz && x && (x < 1 || !tb))) &&
                          Z(th.targets).forEach(function (t) {
                            return t.classList[i || tz ? "add" : "remove"](
                              th.className
                            );
                          }),
                        !tf || eo || t || tf(eC),
                        h && !tt
                          ? (eo &&
                              (g &&
                                ("complete" === o
                                  ? r.pause().totalProgress(1)
                                  : "reset" === o
                                  ? r.restart(!0).pause()
                                  : "restart" === o
                                  ? r.restart(!0)
                                  : r[o]()),
                              tf && tf(eC)),
                            (p || !tb) &&
                              (td && p && tZ(eC, td),
                              eb[a] && tZ(eC, eb[a]),
                              tz && (1 === x ? eC.kill(!1, 1) : (eb[a] = 0)),
                              !p && eb[(a = 1 === x ? 1 : 3)] && tZ(eC, eb[a])),
                            tK &&
                              !i &&
                              Math.abs(eC.getVelocity()) >
                                (tj(tK) ? tK : 2500) &&
                              (tQ(eC.callbackAnimation),
                              G
                                ? G.progress(1)
                                : tQ(r, "reverse" === o ? 1 : !x, 1)))
                          : eo && tf && !tt && tf(eC);
                    }
                    if (L) {
                      var C = tH
                        ? (m / tH.duration()) * (tH._caScrollDist || 0)
                        : m;
                      Y(C + (d._isFlipped ? 1 : 0)), L(C);
                    }
                    ta && ta((-m / tH.duration()) * (tH._caScrollDist || 0));
                  }
                }),
                (eC.enable = function (e, r) {
                  eC.enabled ||
                    ((eC.enabled = !0),
                    eu(ec, "resize", ew),
                    eg || eu(ec, "scroll", ex),
                    eE && eu(t, "refreshInit", eE),
                    !1 !== e && ((eC.progress = ez = 0), (u = l = eP = eF())),
                    !1 !== r && eC.refresh());
                }),
                (eC.getTween = function (t) {
                  return t && s ? s.tween : G;
                }),
                (eC.setPositions = function (t, e, r, n) {
                  if (tH) {
                    var i = tH.scrollTrigger,
                      s = tH.duration(),
                      a = i.end - i.start;
                    (t = i.start + (a * t) / s), (e = i.start + (a * e) / s);
                  }
                  eC.refresh(
                    !1,
                    !1,
                    {
                      start: tD(t, r && !!eC._startClamp),
                      end: tD(e, r && !!eC._endClamp),
                    },
                    n
                  ),
                    eC.update();
                }),
                (eC.adjustPinSpacing = function (t) {
                  if (I && t) {
                    var e = I.indexOf(t0.d) + 1;
                    (I[e] = parseFloat(I[e]) + t + "px"),
                      (I[1] = parseFloat(I[1]) + t + "px"),
                      eH(I);
                  }
                }),
                (eC.disable = function (e, r) {
                  if (
                    eC.enabled &&
                    (!1 !== e && eC.revert(!0, !0),
                    (eC.enabled = eC.isActive = !1),
                    r || (G && G.pause()),
                    (ti = 0),
                    a && (a.uncache = 1),
                    eE && el(t, "refreshInit", eE),
                    tr &&
                      (tr.pause(), s.tween && s.tween.kill() && (s.tween = 0)),
                    !eg)
                  ) {
                    for (var n = em.length; n--; )
                      if (em[n].scroller === ec && em[n] !== eC) return;
                    el(ec, "resize", ew), eg || el(ec, "scroll", ex);
                  }
                }),
                (eC.kill = function (t, n) {
                  eC.disable(t, n), G && !n && G.kill(), tp && delete ev[tp];
                  var i = em.indexOf(eC);
                  i >= 0 && em.splice(i, 1),
                    i === tn && eY > 0 && tn--,
                    (i = 0),
                    em.forEach(function (t) {
                      return t.scroller === eC.scroller && (i = 1);
                    }),
                    i || tT || (eC.scroll.rec = 0),
                    r &&
                      ((r.scrollTrigger = null),
                      t && r.revert({ kill: !1 }),
                      n || r.kill()),
                    h &&
                      [h, p, d, _].forEach(function (t) {
                        return t.parentNode && t.parentNode.removeChild(t);
                      }),
                    tM === eC && (tM = 0),
                    tv &&
                      (a && (a.uncache = 1),
                      (i = 0),
                      em.forEach(function (t) {
                        return t.pin === tv && i++;
                      }),
                      i || (a.spacer = 0)),
                    e.onKill && e.onKill(eC);
                }),
                em.push(eC),
                eC.enable(!1, !1),
                tl && tl(eC),
                r && r.add && !v)
              ) {
                var eN = eC.update;
                (eC.update = function () {
                  (eC.update = eN), y.cache++, c || f || eC.refresh();
                }),
                  U.delayedCall(0.01, eC.update),
                  (v = 0.01),
                  (c = f = 0);
              } else eC.refresh();
              tv && eD();
            }),
            (t.register = function (e) {
              return (
                q ||
                  ((U = e || tB()),
                  tY() && window.document && t.enable(),
                  (q = tS)),
                q
              );
            }),
            (t.defaults = function (t) {
              if (t) for (var e in t) eh[e] = t[e];
              return eh;
            }),
            (t.disable = function (t, e) {
              (tS = 0),
                em.forEach(function (r) {
                  return r[e ? "kill" : "disable"](t);
                }),
                el(H, "wheel", ex),
                el(W, "scroll", ex),
                clearInterval(J),
                el(W, "touchcancel", tF),
                el(j, "touchstart", tF),
                eo(el, W, "pointerdown,touchstart,mousedown", tR),
                eo(el, W, "pointerup,touchend,mouseup", tz),
                Q.kill(),
                tH(el);
              for (var r = 0; r < y.length; r += 3)
                ec(el, y[r], y[r + 1]), ec(el, y[r], y[r + 2]);
            }),
            (t.enable = function () {
              if (
                ((H = window),
                (V = (W = document).documentElement),
                (j = W.body),
                U &&
                  ((Z = U.utils.toArray),
                  ($ = U.utils.clamp),
                  (t_ = U.core.context || tF),
                  (tu = U.core.suppressOverwrites || tF),
                  (tg = H.history.scrollRestoration || "auto"),
                  (eI = H.pageYOffset || 0),
                  U.core.globals("ScrollTrigger", t),
                  j))
              ) {
                (tS = 1),
                  ((tm = document.createElement("div")).style.height = "100vh"),
                  (tm.style.position = "absolute"),
                  eR(),
                  (function t() {
                    return tS && requestAnimationFrame(t);
                  })(),
                  X.register(U),
                  (t.isTouch = X.isTouch),
                  (td =
                    X.isTouch &&
                    /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                  (tf = 1 === X.isTouch),
                  eu(H, "wheel", ex),
                  (G = [H, W, V, j]),
                  U.matchMedia &&
                    ((t.matchMedia = function (t) {
                      var e,
                        r = U.matchMedia();
                      for (e in t) r.add(e, t[e]);
                      return r;
                    }),
                    U.addEventListener("matchMediaInit", function () {
                      return eA();
                    }),
                    U.addEventListener("matchMediaRevert", function () {
                      return eE();
                    }),
                    U.addEventListener("matchMedia", function () {
                      eF(0, 1), eO("matchMedia");
                    }),
                    U.matchMedia().add("(orientation: portrait)", function () {
                      return eb(), eb;
                    })),
                  eb(),
                  eu(W, "scroll", ex);
                var e,
                  r,
                  n = j.hasAttribute("style"),
                  i = j.style,
                  s = i.borderTopStyle,
                  a = U.core.Animation.prototype;
                for (
                  a.revert ||
                    Object.defineProperty(a, "revert", {
                      value: function () {
                        return this.time(-0.01, !0);
                      },
                    }),
                    i.borderTopStyle = "solid",
                    e = en(j),
                    R.m = Math.round(e.top + R.sc()) || 0,
                    D.m = Math.round(e.left + D.sc()) || 0,
                    s
                      ? (i.borderTopStyle = s)
                      : i.removeProperty("border-top-style"),
                    n ||
                      (j.setAttribute("style", ""), j.removeAttribute("style")),
                    J = setInterval(ey, 250),
                    U.delayedCall(0.5, function () {
                      return (tO = 0);
                    }),
                    eu(W, "touchcancel", tF),
                    eu(j, "touchstart", tF),
                    eo(eu, W, "pointerdown,touchstart,mousedown", tR),
                    eo(eu, W, "pointerup,touchend,mouseup", tz),
                    tr = U.utils.checkPrefix("transform"),
                    eN.push(tr),
                    q = tC(),
                    Q = U.delayedCall(0.2, eF).pause(),
                    ta = [
                      W,
                      "visibilitychange",
                      function () {
                        var t = H.innerWidth,
                          e = H.innerHeight;
                        W.hidden
                          ? ((ti = t), (ts = e))
                          : (ti !== t || ts !== e) && ew();
                      },
                      W,
                      "DOMContentLoaded",
                      eF,
                      H,
                      "load",
                      eF,
                      H,
                      "resize",
                      ew,
                    ],
                    tH(eu),
                    em.forEach(function (t) {
                      return t.enable(0, 1);
                    }),
                    r = 0;
                  r < y.length;
                  r += 3
                )
                  ec(el, y[r], y[r + 1]), ec(el, y[r], y[r + 2]);
              }
            }),
            (t.config = function (e) {
              "limitCallbacks" in e && (tb = !!e.limitCallbacks);
              var r = e.syncInterval;
              (r && clearInterval(J)) || ((J = r) && setInterval(ey, r)),
                "ignoreMobileResize" in e &&
                  (tf = 1 === t.isTouch && e.ignoreMobileResize),
                "autoRefreshEvents" in e &&
                  (tH(el) || tH(eu, e.autoRefreshEvents || "none"),
                  (tl = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
            }),
            (t.scrollerProxy = function (t, e) {
              var r = z(t),
                n = y.indexOf(r),
                i = tL(r);
              ~n && y.splice(n, i ? 6 : 2),
                e && (i ? x.unshift(H, e, j, e, V, e) : x.unshift(r, e));
            }),
            (t.clearMatchMedia = function (t) {
              em.forEach(function (e) {
                return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
              });
            }),
            (t.isInViewport = function (t, e, r) {
              var n = (tW(t) ? z(t) : t).getBoundingClientRect(),
                i = n[r ? t1 : t2] * e || 0;
              return r
                ? n.right - i > 0 && n.left + i < H.innerWidth
                : n.bottom - i > 0 && n.top + i < H.innerHeight;
            }),
            (t.positionInViewport = function (t, e, r) {
              tW(t) && (t = z(t));
              var n = t.getBoundingClientRect(),
                i = n[r ? t1 : t2],
                s =
                  null == e
                    ? i / 2
                    : e in ep
                    ? ep[e] * i
                    : ~e.indexOf("%")
                    ? (parseFloat(e) * i) / 100
                    : parseFloat(e) || 0;
              return r
                ? (n.left + s) / H.innerWidth
                : (n.top + s) / H.innerHeight;
            }),
            (t.killAll = function (t) {
              if (
                (em.slice(0).forEach(function (t) {
                  return "ScrollSmoother" !== t.vars.id && t.kill();
                }),
                !0 !== t)
              ) {
                var e = eT.killAll || [];
                (eT = {}),
                  e.forEach(function (t) {
                    return t();
                  });
              }
            }),
            t
          );
        })();
      (e0.version = "3.12.7"),
        (e0.saveStyles = function (t) {
          return t
            ? Z(t).forEach(function (t) {
                if (t && t.style) {
                  var e = eC.indexOf(t);
                  e >= 0 && eC.splice(e, 5),
                    eC.push(
                      t,
                      t.style.cssText,
                      t.getBBox && t.getAttribute("transform"),
                      U.core.getCache(t),
                      t_()
                    );
                }
              })
            : eC;
        }),
        (e0.revert = function (t, e) {
          return eA(!t, e);
        }),
        (e0.create = function (t, e) {
          return new e0(t, e);
        }),
        (e0.refresh = function (t) {
          return t ? ew(!0) : (q || e0.register()) && eF(!0);
        }),
        (e0.update = function (t) {
          return ++y.cache && eB(!0 === t ? 2 : 0);
        }),
        (e0.clearScrollMemory = eS),
        (e0.maxScroll = function (t, e) {
          return tq(t, e ? D : R);
        }),
        (e0.getScrollFunc = function (t, e) {
          return F(z(t), e ? D : R);
        }),
        (e0.getById = function (t) {
          return ev[t];
        }),
        (e0.getAll = function () {
          return em.filter(function (t) {
            return "ScrollSmoother" !== t.vars.id;
          });
        }),
        (e0.isScrolling = function () {
          return !!tA;
        }),
        (e0.snapDirectional = ea),
        (e0.addEventListener = function (t, e) {
          var r = eT[t] || (eT[t] = []);
          ~r.indexOf(e) || r.push(e);
        }),
        (e0.removeEventListener = function (t, e) {
          var r = eT[t],
            n = r && r.indexOf(e);
          n >= 0 && r.splice(n, 1);
        }),
        (e0.batch = function (t, e) {
          var r,
            n = [],
            i = {},
            s = e.interval || 0.016,
            a = e.batchMax || 1e9,
            o = function (t, e) {
              var r = [],
                n = [],
                i = U.delayedCall(s, function () {
                  e(r, n), (r = []), (n = []);
                }).pause();
              return function (t) {
                r.length || i.restart(!0),
                  r.push(t.trigger),
                  n.push(t),
                  a <= r.length && i.progress(1);
              };
            };
          for (r in e)
            i[r] =
              "on" === r.substr(0, 2) && tV(e[r]) && "onRefreshInit" !== r
                ? o(r, e[r])
                : e[r];
          return (
            tV(a) &&
              ((a = a()),
              eu(e0, "refresh", function () {
                return (a = e.batchMax());
              })),
            Z(t).forEach(function (t) {
              var e = {};
              for (r in i) e[r] = i[r];
              (e.trigger = t), n.push(e0.create(e));
            }),
            n
          );
        });
      var e1,
        e2 = function (t, e, r, n) {
          return (
            e > n ? t(n) : e < 0 && t(0),
            r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
          );
        },
        e5 = function t(e, r) {
          !0 === r
            ? e.style.removeProperty("touch-action")
            : (e.style.touchAction =
                !0 === r
                  ? "auto"
                  : r
                  ? "pan-" + r + (X.isTouch ? " pinch-zoom" : "")
                  : "none"),
            e === V && t(j, r);
        },
        e3 = { auto: 1, scroll: 1 },
        e8 = function (t) {
          var e,
            r = t.event,
            n = t.target,
            i = t.axis,
            s = (r.changedTouches ? r.changedTouches[0] : r).target,
            a = s._gsap || U.core.getCache(s),
            o = tC();
          if (!a._isScrollT || o - a._isScrollT > 2e3) {
            for (
              ;
              s &&
              s !== j &&
              ((s.scrollHeight <= s.clientHeight &&
                s.scrollWidth <= s.clientWidth) ||
                !(e3[(e = et(s)).overflowY] || e3[e.overflowX]));

            )
              s = s.parentNode;
            (a._isScroll =
              s &&
              s !== n &&
              !tL(s) &&
              (e3[(e = et(s)).overflowY] || e3[e.overflowX])),
              (a._isScrollT = o);
          }
          (a._isScroll || "x" === i) &&
            (r.stopPropagation(), (r._gsapAllow = !0));
        },
        e6 = function (t, e, r, n) {
          return X.create({
            target: t,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: e,
            onWheel: (n = n && e8),
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function () {
              return r && eu(W, X.eventTypes[0], e9, !1, !0);
            },
            onDisable: function () {
              return el(W, X.eventTypes[0], e9, !0);
            },
          });
        },
        e4 = /(input|label|select|textarea)/i,
        e9 = function (t) {
          var e = e4.test(t.target.tagName);
          (e || e1) && ((t._gsapAllow = !0), (e1 = e));
        },
        e7 = function (t) {
          tG(t) || (t = {}),
            (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
            t.type || (t.type = "wheel,touch"),
            (t.debounce = !!t.debounce),
            (t.id = t.id || "normalizer");
          var e,
            r,
            n,
            i,
            s,
            a,
            o,
            u,
            l = t,
            c = l.normalizeScrollX,
            f = l.momentum,
            h = l.allowNestedScroll,
            p = l.onRelease,
            d = z(t.target) || V,
            _ = U.core.globals().ScrollSmoother,
            g = _ && _.get(),
            m =
              td &&
              ((t.content && z(t.content)) ||
                (g && !1 !== t.content && !g.smooth() && g.content())),
            v = F(d, R),
            x = F(d, D),
            b = 1,
            w =
              (X.isTouch && H.visualViewport
                ? H.visualViewport.scale * H.visualViewport.width
                : H.outerWidth) / H.innerWidth,
            T = 0,
            k = tV(f)
              ? function () {
                  return f(e);
                }
              : function () {
                  return f || 2.8;
                },
            M = e6(d, t.type, !0, h),
            O = function () {
              return (i = !1);
            },
            C = tF,
            E = tF,
            A = function () {
              (r = tq(d, R)),
                (E = $(td ? 1 : 0, r)),
                c && (C = $(0, tq(d, D))),
                (n = eP);
            },
            S = function () {
              (m._gsap.y = tI(parseFloat(m._gsap.y) + v.offset) + "px"),
                (m.style.transform =
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                  parseFloat(m._gsap.y) +
                  ", 0, 1)"),
                (v.offset = v.cacheID = 0);
            },
            P = function () {
              if (i) {
                requestAnimationFrame(O);
                var t = tI(e.deltaY / 2),
                  r = E(v.v - t);
                if (m && r !== v.v + v.offset) {
                  v.offset = r - v.v;
                  var n = tI((parseFloat(m && m._gsap.y) || 0) - v.offset);
                  (m.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    n +
                    ", 0, 1)"),
                    (m._gsap.y = n + "px"),
                    (v.cacheID = y.cache),
                    eB();
                }
                return !0;
              }
              v.offset && S(), (i = !0);
            },
            I = function () {
              A(),
                s.isActive() &&
                  s.vars.scrollY > r &&
                  (v() > r ? s.progress(1) && v(r) : s.resetTo("scrollY", r));
            };
          return (
            m && U.set(m, { y: "+=0" }),
            (t.ignoreCheck = function (t) {
              return (
                (td && "touchmove" === t.type && P(t)) ||
                (b > 1.05 && "touchstart" !== t.type) ||
                e.isGesturing ||
                (t.touches && t.touches.length > 1)
              );
            }),
            (t.onPress = function () {
              i = !1;
              var t = b;
              (b = tI(((H.visualViewport && H.visualViewport.scale) || 1) / w)),
                s.pause(),
                t !== b && e5(d, b > 1.01 || (!c && "x")),
                (a = x()),
                (o = v()),
                A(),
                (n = eP);
            }),
            (t.onRelease = t.onGestureStart =
              function (t, e) {
                if ((v.offset && S(), e)) {
                  y.cache++;
                  var n,
                    i,
                    a = k();
                  c &&
                    ((i = (n = x()) + -(0.05 * a * t.velocityX) / 0.227),
                    (a *= e2(x, n, i, tq(d, D))),
                    (s.vars.scrollX = C(i))),
                    (i = (n = v()) + -(0.05 * a * t.velocityY) / 0.227),
                    (a *= e2(v, n, i, tq(d, R))),
                    (s.vars.scrollY = E(i)),
                    s.invalidate().duration(a).play(0.01),
                    ((td && s.vars.scrollY >= r) || n >= r - 1) &&
                      U.to({}, { onUpdate: I, duration: a });
                } else u.restart(!0);
                p && p(t);
              }),
            (t.onWheel = function () {
              s._ts && s.pause(), tC() - T > 1e3 && ((n = 0), (T = tC()));
            }),
            (t.onChange = function (t, e, r, i, s) {
              if (
                (eP !== n && A(),
                e &&
                  c &&
                  x(C(i[2] === e ? a + (t.startX - t.x) : x() + e - i[1])),
                r)
              ) {
                v.offset && S();
                var u = s[2] === r,
                  l = u ? o + t.startY - t.y : v() + r - s[1],
                  f = E(l);
                u && l !== f && (o += f - l), v(f);
              }
              (r || e) && eB();
            }),
            (t.onEnable = function () {
              e5(d, !c && "x"),
                e0.addEventListener("refresh", I),
                eu(H, "resize", I),
                v.smooth &&
                  ((v.target.style.scrollBehavior = "auto"),
                  (v.smooth = x.smooth = !1)),
                M.enable();
            }),
            (t.onDisable = function () {
              e5(d, !0),
                el(H, "resize", I),
                e0.removeEventListener("refresh", I),
                M.kill();
            }),
            (t.lockAxis = !1 !== t.lockAxis),
            ((e = new X(t)).iOS = td),
            td && !v() && v(1),
            td && U.ticker.add(tF),
            (u = e._dc),
            (s = U.to(e, {
              ease: "power4",
              paused: !0,
              inherit: !1,
              scrollX: c ? "+=0.1" : "+=0",
              scrollY: "+=0.1",
              modifiers: {
                scrollY: e$(v, v(), function () {
                  return s.pause();
                }),
              },
              onUpdate: eB,
              onComplete: u.vars.onComplete,
            })),
            e
          );
        };
      (e0.sort = function (t) {
        if (tV(t)) return em.sort(t);
        var e = H.pageYOffset || 0;
        return (
          e0.getAll().forEach(function (t) {
            return (t._sortY = t.trigger
              ? e + t.trigger.getBoundingClientRect().top
              : t.start + H.innerHeight);
          }),
          em.sort(
            t ||
              function (t, e) {
                return (
                  -1e6 * (t.vars.refreshPriority || 0) +
                  (t.vars.containerAnimation ? 1e6 : t._sortY) -
                  ((e.vars.containerAnimation ? 1e6 : e._sortY) +
                    -1e6 * (e.vars.refreshPriority || 0))
                );
              }
          )
        );
      }),
        (e0.observe = function (t) {
          return new X(t);
        }),
        (e0.normalizeScroll = function (t) {
          if (void 0 === t) return tc;
          if (!0 === t && tc) return tc.enable();
          if (!1 === t) {
            tc && tc.kill(), (tc = t);
            return;
          }
          var e = t instanceof X ? t : e7(t);
          return (
            tc && tc.target === e.target && tc.kill(),
            tL(e.target) && (tc = e),
            e
          );
        }),
        (e0.core = {
          _getVelocityProp: I,
          _inputObserver: e6,
          _scrollers: y,
          _proxies: x,
          bridge: {
            ss: function () {
              tA || eO("scrollStart"), (tA = tC());
            },
            ref: function () {
              return tt;
            },
          },
        }),
        tB() && U.registerPlugin(e0);
    },
    3385: (t, e, r) => {
      function n(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function i(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      r.d(e, { Ay: () => np, os: () => np });
      var s,
        a,
        o,
        u,
        l,
        c,
        f,
        h,
        p,
        d,
        _,
        g = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: { lineHeight: "" },
        },
        m = { duration: 0.5, overwrite: !1, delay: 0 },
        v = 2 * Math.PI,
        y = v / 4,
        x = 0,
        b = Math.sqrt,
        w = Math.cos,
        T = Math.sin,
        k = function (t) {
          return "string" == typeof t;
        },
        M = function (t) {
          return "function" == typeof t;
        },
        O = function (t) {
          return "number" == typeof t;
        },
        C = function (t) {
          return void 0 === t;
        },
        E = function (t) {
          return "object" == typeof t;
        },
        A = function (t) {
          return !1 !== t;
        },
        S = function () {
          return "undefined" != typeof window;
        },
        P = function (t) {
          return M(t) || k(t);
        },
        D =
          ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        R = Array.isArray,
        z = /(?:-?\.?\d|\.)+/gi,
        F = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        I = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        Y = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        B = /[+-]=-?[.\d]+/,
        L = /[^,'"\[\]\s]+/gi,
        N = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        X = {},
        U = {},
        q = function (t) {
          return (U = tv(t, X)) && ra;
        },
        H = function (t, e) {
          return console.warn(
            "Invalid property",
            t,
            "set to",
            e,
            "Missing plugin? gsap.registerPlugin()"
          );
        },
        W = function (t, e) {
          return !e && console.warn(t);
        },
        V = function (t, e) {
          return (t && (X[t] = e) && U && (U[t] = e)) || X;
        },
        j = function () {
          return 0;
        },
        G = { suppressEvents: !0, isStart: !0, kill: !1 },
        Q = { suppressEvents: !0, kill: !1 },
        Z = { suppressEvents: !0 },
        $ = {},
        K = [],
        J = {},
        tt = {},
        te = {},
        tr = 30,
        tn = [],
        ti = "",
        ts = function (t) {
          var e,
            r,
            n = t[0];
          if ((E(n) || M(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
            for (r = tn.length; r-- && !tn[r].targetTest(n); );
            e = tn[r];
          }
          for (r = t.length; r--; )
            (t[r] && (t[r]._gsap || (t[r]._gsap = new eO(t[r], e)))) ||
              t.splice(r, 1);
          return t;
        },
        ta = function (t) {
          return t._gsap || ts(tK(t))[0]._gsap;
        },
        to = function (t, e, r) {
          return (r = t[e]) && M(r)
            ? t[e]()
            : (C(r) && t.getAttribute && t.getAttribute(e)) || r;
        },
        tu = function (t, e) {
          return (t = t.split(",")).forEach(e) || t;
        },
        tl = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        },
        tc = function (t) {
          return Math.round(1e7 * t) / 1e7 || 0;
        },
        tf = function (t, e) {
          var r = e.charAt(0),
            n = parseFloat(e.substr(2));
          return (
            (t = parseFloat(t)),
            "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
          );
        },
        th = function (t, e) {
          for (var r = e.length, n = 0; 0 > t.indexOf(e[n]) && ++n < r; );
          return n < r;
        },
        tp = function () {
          var t,
            e,
            r = K.length,
            n = K.slice(0);
          for (t = 0, J = {}, K.length = 0; t < r; t++)
            (e = n[t]) &&
              e._lazy &&
              (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
        },
        td = function (t, e, r, n) {
          K.length && !a && tp(),
            t.render(e, r, n || (a && e < 0 && (t._initted || t._startAt))),
            K.length && !a && tp();
        },
        t_ = function (t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(L).length < 2
            ? e
            : k(t)
            ? t.trim()
            : t;
        },
        tg = function (t) {
          return t;
        },
        tm = function (t, e) {
          for (var r in e) r in t || (t[r] = e[r]);
          return t;
        },
        tv = function (t, e) {
          for (var r in e) t[r] = e[r];
          return t;
        },
        ty = function t(e, r) {
          for (var n in r)
            "__proto__" !== n &&
              "constructor" !== n &&
              "prototype" !== n &&
              (e[n] = E(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
          return e;
        },
        tx = function (t, e) {
          var r,
            n = {};
          for (r in t) r in e || (n[r] = t[r]);
          return n;
        },
        tb = function (t) {
          var e,
            r = t.parent || u,
            n = t.keyframes
              ? ((e = R(t.keyframes)),
                function (t, r) {
                  for (var n in r)
                    n in t ||
                      ("duration" === n && e) ||
                      "ease" === n ||
                      (t[n] = r[n]);
                })
              : tm;
          if (A(t.inherit))
            for (; r; ) n(t, r.vars.defaults), (r = r.parent || r._dp);
          return t;
        },
        tw = function (t, e) {
          for (
            var r = t.length, n = r === e.length;
            n && r-- && t[r] === e[r];

          );
          return r < 0;
        },
        tT = function (t, e, r, n, i) {
          void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
          var s,
            a = t[n];
          if (i) for (s = e[i]; a && a[i] > s; ) a = a._prev;
          return (
            a
              ? ((e._next = a._next), (a._next = e))
              : ((e._next = t[r]), (t[r] = e)),
            e._next ? (e._next._prev = e) : (t[n] = e),
            (e._prev = a),
            (e.parent = e._dp = t),
            e
          );
        },
        tk = function (t, e, r, n) {
          void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
          var i = e._prev,
            s = e._next;
          i ? (i._next = s) : t[r] === e && (t[r] = s),
            s ? (s._prev = i) : t[n] === e && (t[n] = i),
            (e._next = e._prev = e.parent = null);
        },
        tM = function (t, e) {
          t.parent &&
            (!e || t.parent.autoRemoveChildren) &&
            t.parent.remove &&
            t.parent.remove(t),
            (t._act = 0);
        },
        tO = function (t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
          return t;
        },
        tC = function (t) {
          for (var e = t.parent; e && e.parent; )
            (e._dirty = 1), e.totalDuration(), (e = e.parent);
          return t;
        },
        tE = function (t, e, r, n) {
          return (
            t._startAt &&
            (a
              ? t._startAt.revert(Q)
              : (t.vars.immediateRender && !t.vars.autoRevert) ||
                t._startAt.render(e, !0, n))
          );
        },
        tA = function (t) {
          return t._repeat
            ? tS(t._tTime, (t = t.duration() + t._rDelay)) * t
            : 0;
        },
        tS = function (t, e) {
          var r = Math.floor((t = tc(t / e)));
          return t && r === t ? r - 1 : r;
        },
        tP = function (t, e) {
          return (
            (t - e._start) * e._ts +
            (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
          );
        },
        tD = function (t) {
          return (t._end = tc(
            t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0)
          ));
        },
        tR = function (t, e) {
          var r = t._dp;
          return (
            r &&
              r.smoothChildTiming &&
              t._ts &&
              ((t._start = tc(
                r._time -
                  (t._ts > 0
                    ? e / t._ts
                    : -(((t._dirty ? t.totalDuration() : t._tDur) - e) / t._ts))
              )),
              tD(t),
              r._dirty || tO(r, t)),
            t
          );
        },
        tz = function (t, e) {
          var r;
          if (
            ((e._time ||
              (!e._dur && e._initted) ||
              (e._start < t._time && (e._dur || !e.add))) &&
              ((r = tP(t.rawTime(), e)),
              (!e._dur || tG(0, e.totalDuration(), r) - e._tTime > 1e-8) &&
                e.render(r, !0)),
            tO(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
          ) {
            if (t._dur < t.duration())
              for (r = t; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
            t._zTime = -1e-8;
          }
        },
        tF = function (t, e, r, n) {
          return (
            e.parent && tM(e),
            (e._start = tc(
              (O(r) ? r : r || t !== u ? tW(t, r, e) : t._time) + e._delay
            )),
            (e._end = tc(
              e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
            )),
            tT(t, e, "_first", "_last", t._sort ? "_start" : 0),
            tL(e) || (t._recent = e),
            n || tz(t, e),
            t._ts < 0 && tR(t, t._tTime),
            t
          );
        },
        tI = function (t, e) {
          return (
            (X.ScrollTrigger || H("scrollTrigger", e)) &&
            X.ScrollTrigger.create(e, t)
          );
        },
        tY = function (t, e, r, n, i) {
          return (eF(t, e, i), t._initted)
            ? !r &&
              t._pt &&
              !a &&
              ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
              p !== ef.frame
              ? (K.push(t), (t._lazy = [i, n]), 1)
              : void 0
            : 1;
        },
        tB = function t(e) {
          var r = e.parent;
          return (
            r && r._ts && r._initted && !r._lock && (0 > r.rawTime() || t(r))
          );
        },
        tL = function (t) {
          var e = t.data;
          return "isFromStart" === e || "isStart" === e;
        },
        tN = function (t, e, r, n) {
          var i,
            s,
            o,
            u = t.ratio,
            l =
              e < 0 ||
              (!e &&
                ((!t._start && tB(t) && !(!t._initted && tL(t))) ||
                  ((t._ts < 0 || t._dp._ts < 0) && !tL(t))))
                ? 0
                : 1,
            c = t._rDelay,
            f = 0;
          if (
            (c &&
              t._repeat &&
              ((s = tS((f = tG(0, t._tDur, e)), c)),
              t._yoyo && 1 & s && (l = 1 - l),
              s !== tS(t._tTime, c) &&
                ((u = 1 - l),
                t.vars.repeatRefresh && t._initted && t.invalidate())),
            l !== u || a || n || 1e-8 === t._zTime || (!e && t._zTime))
          ) {
            if (!t._initted && tY(t, e, n, r, f)) return;
            for (
              o = t._zTime,
                t._zTime = e || (r ? 1e-8 : 0),
                r || (r = e && !o),
                t.ratio = l,
                t._from && (l = 1 - l),
                t._time = 0,
                t._tTime = f,
                i = t._pt;
              i;

            )
              i.r(l, i.d), (i = i._next);
            e < 0 && tE(t, e, r, !0),
              t._onUpdate && !r && t7(t, "onUpdate"),
              f && t._repeat && !r && t.parent && t7(t, "onRepeat"),
              (e >= t._tDur || e < 0) &&
                t.ratio === l &&
                (l && tM(t, 1),
                r ||
                  a ||
                  (t7(t, l ? "onComplete" : "onReverseComplete", !0),
                  t._prom && t._prom()));
          } else t._zTime || (t._zTime = e);
        },
        tX = function (t, e, r) {
          var n;
          if (r > e)
            for (n = t._first; n && n._start <= r; ) {
              if ("isPause" === n.data && n._start > e) return n;
              n = n._next;
            }
          else
            for (n = t._last; n && n._start >= r; ) {
              if ("isPause" === n.data && n._start < e) return n;
              n = n._prev;
            }
        },
        tU = function (t, e, r, n) {
          var i = t._repeat,
            s = tc(e) || 0,
            a = t._tTime / t._tDur;
          return (
            a && !n && (t._time *= s / t._dur),
            (t._dur = s),
            (t._tDur = i
              ? i < 0
                ? 1e10
                : tc(s * (i + 1) + t._rDelay * i)
              : s),
            a > 0 && !n && tR(t, (t._tTime = t._tDur * a)),
            t.parent && tD(t),
            r || tO(t.parent, t),
            t
          );
        },
        tq = function (t) {
          return t instanceof eE ? tO(t) : tU(t, t._dur);
        },
        tH = { _start: 0, endTime: j, totalDuration: j },
        tW = function t(e, r, n) {
          var i,
            s,
            a,
            o = e.labels,
            u = e._recent || tH,
            l = e.duration() >= 1e8 ? u.endTime(!1) : e._dur;
          return k(r) && (isNaN(r) || r in o)
            ? ((s = r.charAt(0)),
              (a = "%" === r.substr(-1)),
              (i = r.indexOf("=")),
              "<" === s || ">" === s)
              ? (i >= 0 && (r = r.replace(/=/, "")),
                ("<" === s ? u._start : u.endTime(u._repeat >= 0)) +
                  (parseFloat(r.substr(1)) || 0) *
                    (a ? (i < 0 ? u : n).totalDuration() / 100 : 1))
              : i < 0
              ? (r in o || (o[r] = l), o[r])
              : ((s = parseFloat(r.charAt(i - 1) + r.substr(i + 1))),
                a && n && (s = (s / 100) * (R(n) ? n[0] : n).totalDuration()),
                i > 1 ? t(e, r.substr(0, i - 1), n) + s : l + s)
            : null == r
            ? l
            : +r;
        },
        tV = function (t, e, r) {
          var n,
            i,
            s = O(e[1]),
            a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
            o = e[a];
          if ((s && (o.duration = e[1]), (o.parent = r), t)) {
            for (n = o, i = r; i && !("immediateRender" in n); )
              (n = i.vars.defaults || {}), (i = A(i.vars.inherit) && i.parent);
            (o.immediateRender = A(n.immediateRender)),
              t < 2 ? (o.runBackwards = 1) : (o.startAt = e[a - 1]);
          }
          return new eU(e[0], o, e[a + 1]);
        },
        tj = function (t, e) {
          return t || 0 === t ? e(t) : e;
        },
        tG = function (t, e, r) {
          return r < t ? t : r > e ? e : r;
        },
        tQ = function (t, e) {
          return k(t) && (e = N.exec(t)) ? e[1] : "";
        },
        tZ = [].slice,
        t$ = function (t, e) {
          return (
            t &&
            E(t) &&
            "length" in t &&
            ((!e && !t.length) || (t.length - 1 in t && E(t[0]))) &&
            !t.nodeType &&
            t !== l
          );
        },
        tK = function (t, e, r) {
          var n;
          return o && !e && o.selector
            ? o.selector(t)
            : k(t) && !r && (c || !eh())
            ? tZ.call((e || f).querySelectorAll(t), 0)
            : R(t)
            ? (void 0 === n && (n = []),
              t.forEach(function (t) {
                var e;
                return (k(t) && !r) || t$(t, 1)
                  ? (e = n).push.apply(e, tK(t))
                  : n.push(t);
              }) || n)
            : t$(t)
            ? tZ.call(t, 0)
            : t
            ? [t]
            : [];
        },
        tJ = function (t) {
          return (
            (t = tK(t)[0] || W("Invalid scope") || {}),
            function (e) {
              var r = t.current || t.nativeElement || t;
              return tK(
                e,
                r.querySelectorAll
                  ? r
                  : r === t
                  ? W("Invalid scope") || f.createElement("div")
                  : t
              );
            }
          );
        },
        t0 = function (t) {
          return t.sort(function () {
            return 0.5 - Math.random();
          });
        },
        t1 = function (t) {
          if (M(t)) return t;
          var e = E(t) ? t : { each: t },
            r = eb(e.ease),
            n = e.from || 0,
            i = parseFloat(e.base) || 0,
            s = {},
            a = n > 0 && n < 1,
            o = isNaN(n) || a,
            u = e.axis,
            l = n,
            c = n;
          return (
            k(n)
              ? (l = c = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
              : !a && o && ((l = n[0]), (c = n[1])),
            function (t, a, f) {
              var h,
                p,
                d,
                _,
                g,
                m,
                v,
                y,
                x,
                w = (f || e).length,
                T = s[w];
              if (!T) {
                if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                  for (
                    v = -1e8;
                    v < (v = f[x++].getBoundingClientRect().left) && x < w;

                  );
                  x < w && x--;
                }
                for (
                  m = 0,
                    T = s[w] = [],
                    h = o ? Math.min(x, w) * l - 0.5 : n % x,
                    p = 1e8 === x ? 0 : o ? (w * c) / x - 0.5 : (n / x) | 0,
                    v = 0,
                    y = 1e8;
                  m < w;
                  m++
                )
                  (d = (m % x) - h),
                    (_ = p - ((m / x) | 0)),
                    (T[m] = g =
                      u ? Math.abs("y" === u ? _ : d) : b(d * d + _ * _)),
                    g > v && (v = g),
                    g < y && (y = g);
                "random" === n && t0(T),
                  (T.max = v - y),
                  (T.min = y),
                  (T.v = w =
                    (parseFloat(e.amount) ||
                      parseFloat(e.each) *
                        (x > w
                          ? w - 1
                          : u
                          ? "y" === u
                            ? w / x
                            : x
                          : Math.max(x, w / x)) ||
                      0) * ("edges" === n ? -1 : 1)),
                  (T.b = w < 0 ? i - w : i),
                  (T.u = tQ(e.amount || e.each) || 0),
                  (r = r && w < 0 ? ey(r) : r);
              }
              return (
                (w = (T[t] - T.min) / T.max || 0),
                tc(T.b + (r ? r(w) : w) * T.v) + T.u
              );
            }
          );
        },
        t2 = function (t) {
          var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
          return function (r) {
            var n = tc(Math.round(parseFloat(r) / t) * t * e);
            return (n - (n % 1)) / e + (O(r) ? 0 : tQ(r));
          };
        },
        t5 = function (t, e) {
          var r,
            n,
            i = R(t);
          return (
            !i &&
              E(t) &&
              ((r = i = t.radius || 1e8),
              t.values
                ? (n = !O((t = tK(t.values))[0])) && (r *= r)
                : (t = t2(t.increment))),
            tj(
              e,
              i
                ? M(t)
                  ? function (e) {
                      return Math.abs((n = t(e)) - e) <= r ? n : e;
                    }
                  : function (e) {
                      for (
                        var i,
                          s,
                          a = parseFloat(n ? e.x : e),
                          o = parseFloat(n ? e.y : 0),
                          u = 1e8,
                          l = 0,
                          c = t.length;
                        c--;

                      )
                        (i = n
                          ? (i = t[c].x - a) * i + (s = t[c].y - o) * s
                          : Math.abs(t[c] - a)) < u && ((u = i), (l = c));
                      return (
                        (l = !r || u <= r ? t[l] : e),
                        n || l === e || O(e) ? l : l + tQ(e)
                      );
                    }
                : t2(t)
            )
          );
        },
        t3 = function (t, e, r, n) {
          return tj(R(t) ? !e : !0 === r ? ((r = 0), !1) : !n, function () {
            return R(t)
              ? t[~~(Math.random() * t.length)]
              : (n =
                  (r = r || 1e-5) < 1
                    ? Math.pow(10, (r + "").length - 2)
                    : 1) &&
                  Math.floor(
                    Math.round(
                      (t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r
                    ) *
                      r *
                      n
                  ) / n;
          });
        },
        t8 = function (t, e, r) {
          return tj(r, function (r) {
            return t[~~e(r)];
          });
        },
        t6 = function (t) {
          for (var e, r, n, i, s = 0, a = ""; ~(e = t.indexOf("random(", s)); )
            (n = t.indexOf(")", e)),
              (i = "[" === t.charAt(e + 7)),
              (r = t.substr(e + 7, n - e - 7).match(i ? L : z)),
              (a +=
                t.substr(s, e - s) +
                t3(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5)),
              (s = n + 1);
          return a + t.substr(s, t.length - s);
        },
        t4 = function (t, e, r, n, i) {
          var s = e - t,
            a = n - r;
          return tj(i, function (e) {
            return r + (((e - t) / s) * a || 0);
          });
        },
        t9 = function (t, e, r) {
          var n,
            i,
            s,
            a = t.labels,
            o = 1e8;
          for (n in a)
            (i = a[n] - e) < 0 == !!r &&
              i &&
              o > (i = Math.abs(i)) &&
              ((s = n), (o = i));
          return s;
        },
        t7 = function (t, e, r) {
          var n,
            i,
            s,
            a = t.vars,
            u = a[e],
            l = o,
            c = t._ctx;
          if (u)
            return (
              (n = a[e + "Params"]),
              (i = a.callbackScope || t),
              r && K.length && tp(),
              c && (o = c),
              (s = n ? u.apply(i, n) : u.call(i)),
              (o = l),
              s
            );
        },
        et = function (t) {
          return (
            tM(t),
            t.scrollTrigger && t.scrollTrigger.kill(!!a),
            1 > t.progress() && t7(t, "onInterrupt"),
            t
          );
        },
        ee = [],
        er = function (t) {
          if (t) {
            if (((t = (!t.name && t.default) || t), S() || t.headless)) {
              var e = t.name,
                r = M(t),
                n =
                  e && !r && t.init
                    ? function () {
                        this._props = [];
                      }
                    : t,
                i = {
                  init: j,
                  render: e$,
                  add: eD,
                  kill: eJ,
                  modifier: eK,
                  rawVars: 0,
                },
                s = {
                  targetTest: 0,
                  get: 0,
                  getSetter: ej,
                  aliases: {},
                  register: 0,
                };
              if ((eh(), t !== n)) {
                if (tt[e]) return;
                tm(n, tm(tx(t, i), s)),
                  tv(n.prototype, tv(i, tx(t, s))),
                  (tt[(n.prop = e)] = n),
                  t.targetTest && (tn.push(n), ($[e] = 1)),
                  (e =
                    ("css" === e
                      ? "CSS"
                      : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
              }
              V(e, n), t.register && t.register(ra, n, e2);
            } else ee.push(t);
          }
        },
        en = {
          aqua: [0, 255, 255],
          lime: [0, 255, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, 255],
          navy: [0, 0, 128],
          white: [255, 255, 255],
          olive: [128, 128, 0],
          yellow: [255, 255, 0],
          orange: [255, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [255, 0, 0],
          pink: [255, 192, 203],
          cyan: [0, 255, 255],
          transparent: [255, 255, 255, 0],
        },
        ei = function (t, e, r) {
          return (
            ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
              ? e + (r - e) * t * 6
              : t < 0.5
              ? r
              : 3 * t < 2
              ? e + (r - e) * (2 / 3 - t) * 6
              : e) *
              255 +
              0.5) |
            0
          );
        },
        es = function (t, e, r) {
          var n,
            i,
            s,
            a,
            o,
            u,
            l,
            c,
            f,
            h,
            p = t ? (O(t) ? [t >> 16, (t >> 8) & 255, 255 & t] : 0) : en.black;
          if (!p) {
            if (
              ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), en[t])
            )
              p = en[t];
            else if ("#" === t.charAt(0)) {
              if (
                (t.length < 6 &&
                  (t =
                    "#" +
                    (n = t.charAt(1)) +
                    n +
                    (i = t.charAt(2)) +
                    i +
                    (s = t.charAt(3)) +
                    s +
                    (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                9 === t.length)
              )
                return [
                  (p = parseInt(t.substr(1, 6), 16)) >> 16,
                  (p >> 8) & 255,
                  255 & p,
                  parseInt(t.substr(7), 16) / 255,
                ];
              p = [
                (t = parseInt(t.substr(1), 16)) >> 16,
                (t >> 8) & 255,
                255 & t,
              ];
            } else if ("hsl" === t.substr(0, 3)) {
              if (((p = h = t.match(z)), e)) {
                if (~t.indexOf("="))
                  return (p = t.match(F)), r && p.length < 4 && (p[3] = 1), p;
              } else
                (a = (+p[0] % 360) / 360),
                  (o = +p[1] / 100),
                  (i = (u = +p[2] / 100) <= 0.5 ? u * (o + 1) : u + o - u * o),
                  (n = 2 * u - i),
                  p.length > 3 && (p[3] *= 1),
                  (p[0] = ei(a + 1 / 3, n, i)),
                  (p[1] = ei(a, n, i)),
                  (p[2] = ei(a - 1 / 3, n, i));
            } else p = t.match(z) || en.transparent;
            p = p.map(Number);
          }
          return (
            e &&
              !h &&
              ((u =
                ((l = Math.max(
                  (n = p[0] / 255),
                  (i = p[1] / 255),
                  (s = p[2] / 255)
                )) +
                  (c = Math.min(n, i, s))) /
                2),
              l === c
                ? (a = o = 0)
                : ((f = l - c),
                  (o = u > 0.5 ? f / (2 - l - c) : f / (l + c)),
                  (a =
                    (l === n
                      ? (i - s) / f + (i < s ? 6 : 0)
                      : l === i
                      ? (s - n) / f + 2
                      : (n - i) / f + 4) * 60)),
              (p[0] = ~~(a + 0.5)),
              (p[1] = ~~(100 * o + 0.5)),
              (p[2] = ~~(100 * u + 0.5))),
            r && p.length < 4 && (p[3] = 1),
            p
          );
        },
        ea = function (t) {
          var e = [],
            r = [],
            n = -1;
          return (
            t.split(eu).forEach(function (t) {
              var i = t.match(I) || [];
              e.push.apply(e, i), r.push((n += i.length + 1));
            }),
            (e.c = r),
            e
          );
        },
        eo = function (t, e, r) {
          var n,
            i,
            s,
            a,
            o = "",
            u = (t + o).match(eu),
            l = e ? "hsla(" : "rgba(",
            c = 0;
          if (!u) return t;
          if (
            ((u = u.map(function (t) {
              return (
                (t = es(t, e, 1)) &&
                l +
                  (e
                    ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                    : t.join(",")) +
                  ")"
              );
            })),
            r && ((s = ea(t)), (n = r.c).join(o) !== s.c.join(o)))
          )
            for (a = (i = t.replace(eu, "1").split(I)).length - 1; c < a; c++)
              o +=
                i[c] +
                (~n.indexOf(c)
                  ? u.shift() || l + "0,0,0,0)"
                  : (s.length ? s : u.length ? u : r).shift());
          if (!i)
            for (a = (i = t.split(eu)).length - 1; c < a; c++) o += i[c] + u[c];
          return o + i[a];
        },
        eu = (function () {
          var t,
            e =
              "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in en) e += "|" + t + "\\b";
          return RegExp(e + ")", "gi");
        })(),
        el = /hsl[a]?\(/,
        ec = function (t) {
          var e,
            r = t.join(" ");
          if (((eu.lastIndex = 0), eu.test(r)))
            return (
              (e = el.test(r)),
              (t[1] = eo(t[1], e)),
              (t[0] = eo(t[0], e, ea(t[1]))),
              !0
            );
        },
        ef = (function () {
          var t,
            e,
            r,
            n,
            i,
            s,
            a = Date.now,
            o = 500,
            u = 33,
            p = a(),
            d = p,
            g = 1e3 / 240,
            m = 1e3 / 240,
            v = [],
            y = function r(l) {
              var c,
                f,
                h,
                _,
                y = a() - d,
                x = !0 === l;
              if (
                ((y > o || y < 0) && (p += y - u),
                (d += y),
                ((c = (h = d - p) - m) > 0 || x) &&
                  ((_ = ++n.frame),
                  (i = h - 1e3 * n.time),
                  (n.time = h /= 1e3),
                  (m += c + (c >= g ? 4 : g - c)),
                  (f = 1)),
                x || (t = e(r)),
                f)
              )
                for (s = 0; s < v.length; s++) v[s](h, i, _, l);
            };
          return (n = {
            time: 0,
            frame: 0,
            tick: function () {
              y(!0);
            },
            deltaRatio: function (t) {
              return i / (1e3 / (t || 60));
            },
            wake: function () {
              h &&
                (!c &&
                  S() &&
                  ((f = (l = c = window).document || {}),
                  (X.gsap = ra),
                  (l.gsapVersions || (l.gsapVersions = [])).push(ra.version),
                  q(U || l.GreenSockGlobals || (!l.gsap && l) || {}),
                  ee.forEach(er)),
                (r =
                  "undefined" != typeof requestAnimationFrame &&
                  requestAnimationFrame),
                t && n.sleep(),
                (e =
                  r ||
                  function (t) {
                    return setTimeout(t, (m - 1e3 * n.time + 1) | 0);
                  }),
                (_ = 1),
                y(2));
            },
            sleep: function () {
              (r ? cancelAnimationFrame : clearTimeout)(t), (_ = 0), (e = j);
            },
            lagSmoothing: function (t, e) {
              u = Math.min(e || 33, (o = t || 1 / 0));
            },
            fps: function (t) {
              (g = 1e3 / (t || 240)), (m = 1e3 * n.time + g);
            },
            add: function (t, e, r) {
              var i = e
                ? function (e, r, s, a) {
                    t(e, r, s, a), n.remove(i);
                  }
                : t;
              return n.remove(t), v[r ? "unshift" : "push"](i), eh(), i;
            },
            remove: function (t, e) {
              ~(e = v.indexOf(t)) && v.splice(e, 1) && s >= e && s--;
            },
            _listeners: v,
          });
        })(),
        eh = function () {
          return !_ && ef.wake();
        },
        ep = {},
        ed = /^[\d.\-M][\d.\-,\s]/,
        e_ = /["']/g,
        eg = function (t) {
          for (
            var e,
              r,
              n,
              i = {},
              s = t.substr(1, t.length - 3).split(":"),
              a = s[0],
              o = 1,
              u = s.length;
            o < u;
            o++
          )
            (r = s[o]),
              (e = o !== u - 1 ? r.lastIndexOf(",") : r.length),
              (n = r.substr(0, e)),
              (i[a] = isNaN(n) ? n.replace(e_, "").trim() : +n),
              (a = r.substr(e + 1).trim());
          return i;
        },
        em = function (t) {
          var e = t.indexOf("(") + 1,
            r = t.indexOf(")"),
            n = t.indexOf("(", e);
          return t.substring(e, ~n && n < r ? t.indexOf(")", r + 1) : r);
        },
        ev = function (t) {
          var e = (t + "").split("("),
            r = ep[e[0]];
          return r && e.length > 1 && r.config
            ? r.config.apply(
                null,
                ~t.indexOf("{") ? [eg(e[1])] : em(t).split(",").map(t_)
              )
            : ep._CE && ed.test(t)
            ? ep._CE("", t)
            : r;
        },
        ey = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        ex = function t(e, r) {
          for (var n, i = e._first; i; )
            i instanceof eE
              ? t(i, r)
              : !i.vars.yoyoEase ||
                (i._yoyo && i._repeat) ||
                i._yoyo === r ||
                (i.timeline
                  ? t(i.timeline, r)
                  : ((n = i._ease),
                    (i._ease = i._yEase),
                    (i._yEase = n),
                    (i._yoyo = r))),
              (i = i._next);
        },
        eb = function (t, e) {
          return (t && (M(t) ? t : ep[t] || ev(t))) || e;
        },
        ew = function (t, e, r, n) {
          void 0 === r &&
            (r = function (t) {
              return 1 - e(1 - t);
            }),
            void 0 === n &&
              (n = function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e((1 - t) * 2) / 2;
              });
          var i,
            s = { easeIn: e, easeOut: r, easeInOut: n };
          return (
            tu(t, function (t) {
              for (var e in ((ep[t] = X[t] = s),
              (ep[(i = t.toLowerCase())] = r),
              s))
                ep[
                  i +
                    ("easeIn" === e
                      ? ".in"
                      : "easeOut" === e
                      ? ".out"
                      : ".inOut")
                ] = ep[t + "." + e] = s[e];
            }),
            s
          );
        },
        eT = function (t) {
          return function (e) {
            return e < 0.5
              ? (1 - t(1 - 2 * e)) / 2
              : 0.5 + t((e - 0.5) * 2) / 2;
          };
        },
        ek = function t(e, r, n) {
          var i = r >= 1 ? r : 1,
            s = (n || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
            a = (s / v) * (Math.asin(1 / i) || 0),
            o = function (t) {
              return 1 === t
                ? 1
                : i * Math.pow(2, -10 * t) * T((t - a) * s) + 1;
            },
            u =
              "out" === e
                ? o
                : "in" === e
                ? function (t) {
                    return 1 - o(1 - t);
                  }
                : eT(o);
          return (
            (s = v / s),
            (u.config = function (r, n) {
              return t(e, r, n);
            }),
            u
          );
        },
        eM = function t(e, r) {
          void 0 === r && (r = 1.70158);
          var n = function (t) {
              return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
            },
            i =
              "out" === e
                ? n
                : "in" === e
                ? function (t) {
                    return 1 - n(1 - t);
                  }
                : eT(n);
          return (
            (i.config = function (r) {
              return t(e, r);
            }),
            i
          );
        };
      tu("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var r = e < 5 ? e + 1 : e;
        ew(
          t + ",Power" + (r - 1),
          e
            ? function (t) {
                return Math.pow(t, r);
              }
            : function (t) {
                return t;
              },
          function (t) {
            return 1 - Math.pow(1 - t, r);
          },
          function (t) {
            return t < 0.5
              ? Math.pow(2 * t, r) / 2
              : 1 - Math.pow((1 - t) * 2, r) / 2;
          }
        );
      }),
        (ep.Linear.easeNone = ep.none = ep.Linear.easeIn),
        ew("Elastic", ek("in"), ek("out"), ek()),
        (function (t, e) {
          var r = 1 / 2.75,
            n = (1 / 2.75) * 2,
            i = (1 / 2.75) * 2.5,
            s = function (s) {
              return s < r
                ? 7.5625 * s * s
                : s < n
                ? 7.5625 * Math.pow(s - 1.5 / 2.75, 2) + 0.75
                : s < i
                ? 7.5625 * (s -= 2.25 / 2.75) * s + 0.9375
                : t * Math.pow(s - 2.625 / e, 2) + 0.984375;
            };
          ew(
            "Bounce",
            function (t) {
              return 1 - s(1 - t);
            },
            s
          );
        })(7.5625, 2.75),
        ew("Expo", function (t) {
          return (
            Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t)
          );
        }),
        ew("Circ", function (t) {
          return -(b(1 - t * t) - 1);
        }),
        ew("Sine", function (t) {
          return 1 === t ? 1 : -w(t * y) + 1;
        }),
        ew("Back", eM("in"), eM("out"), eM()),
        (ep.SteppedEase =
          ep.steps =
          X.SteppedEase =
            {
              config: function (t, e) {
                void 0 === t && (t = 1);
                var r = 1 / t,
                  n = t + (e ? 0 : 1),
                  i = e ? 1 : 0;
                return function (t) {
                  return (((n * tG(0, 0.99999999, t)) | 0) + i) * r;
                };
              },
            }),
        (m.ease = ep["quad.out"]),
        tu(
          "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
          function (t) {
            return (ti += t + "," + t + "Params,");
          }
        );
      var eO = function (t, e) {
          (this.id = x++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : to),
            (this.set = e ? e.getSetter : ej);
        },
        eC = (function () {
          function t(t) {
            (this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              tU(this, +t.duration, 1, 1),
              (this.data = t.data),
              o && ((this._ctx = o), o.data.push(this)),
              _ || ef.wake();
          }
          var e = t.prototype;
          return (
            (e.delay = function (t) {
              return t || 0 === t
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (e.duration = function (t) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                  )
                : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  tU(
                    this,
                    this._repeat < 0
                      ? t
                      : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur;
            }),
            (e.totalTime = function (t, e) {
              if ((eh(), !arguments.length)) return this._tTime;
              var r = this._dp;
              if (r && r.smoothChildTiming && this._ts) {
                for (
                  tR(this, t), !r._dp || r.parent || tz(r, this);
                  r && r.parent;

                )
                  r.parent._time !==
                    r._start +
                      (r._ts >= 0
                        ? r._tTime / r._ts
                        : -((r.totalDuration() - r._tTime) / r._ts)) &&
                    r.totalTime(r._tTime, !0),
                    (r = r.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  tF(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime === t &&
                  (this._dur || e) &&
                  (!this._initted || 1e-8 !== Math.abs(this._zTime)) &&
                  (t || this._initted || (!this.add && !this._ptLookup))) ||
                  (this._ts || (this._pTime = t), td(this, t, e)),
                this
              );
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + tA(this)) %
                      (this._dur + this._rDelay) || (t ? this._dur : 0),
                    e
                  )
                : this._time;
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.rawTime() >= 0 && this._initted
                ? 1
                : 0;
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (this._yoyo && !(1 & this.iteration()) ? 1 - t : t) +
                      tA(this),
                    e
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.rawTime() > 0
                ? 1
                : 0;
            }),
            (e.iteration = function (t, e) {
              var r = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * r, e)
                : this._repeat
                ? tS(this._tTime, r) + 1
                : 1;
            }),
            (e.timeScale = function (t, e) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
              if (this._rts === t) return this;
              var r =
                this.parent && this._ts
                  ? tP(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
                this.totalTime(
                  tG(-Math.abs(this._delay), this._tDur, r),
                  !1 !== e
                ),
                tD(this),
                tC(this)
              );
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (eh(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            1e-8 !== Math.abs(this._zTime) &&
                            (this._tTime -= 1e-8)
                        ))),
                  this)
                : this._ps;
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return (
                  e &&
                    (e._sort || !this.parent) &&
                    tF(e, this, t - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (e.endTime = function (t) {
              return (
                this._start +
                (A(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts || 1)
              );
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp;
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && 1 > this.totalProgress()))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? tP(e.rawTime(t), this)
                  : this._tTime
                : this._tTime;
            }),
            (e.revert = function (t) {
              void 0 === t && (t = Z);
              var e = a;
              return (
                (a = t),
                (this._initted || this._startAt) &&
                  (this.timeline && this.timeline.revert(t),
                  this.totalTime(-0.01, t.suppressEvents)),
                "nested" !== this.data && !1 !== t.kill && this.kill(),
                (a = e),
                this
              );
            }),
            (e.globalTime = function (t) {
              for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                (r = e._start + r / (Math.abs(e._ts) || 1)), (e = e._dp);
              return !this.parent && this._sat ? this._sat.globalTime(t) : r;
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t === 1 / 0 ? -2 : t), tq(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
            }),
            (e.repeatDelay = function (t) {
              if (arguments.length) {
                var e = this._time;
                return (this._rDelay = t), tq(this), e ? this.time(e) : this;
              }
              return this._rDelay;
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (e.seek = function (t, e) {
              return this.totalTime(tW(this, t), A(e));
            }),
            (e.restart = function (t, e) {
              return (
                this.play().totalTime(t ? -this._delay : 0, A(e)),
                this._dur || (this._zTime = -1e-8),
                this
              );
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (e.resume = function () {
              return this.paused(!1);
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                  this)
                : this._rts < 0;
            }),
            (e.invalidate = function () {
              return (
                (this._initted = this._act = 0), (this._zTime = -1e-8), this
              );
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                r = this._start;
              return !!(
                !e ||
                (this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= r &&
                  t < this.endTime(!0) - 1e-8)
              );
            }),
            (e.eventCallback = function (t, e, r) {
              var n = this.vars;
              return arguments.length > 1
                ? (e
                    ? ((n[t] = e),
                      r && (n[t + "Params"] = r),
                      "onUpdate" === t && (this._onUpdate = e))
                    : delete n[t],
                  this)
                : n[t];
            }),
            (e.then = function (t) {
              var e = this;
              return new Promise(function (r) {
                var n = M(t) ? t : tg,
                  i = function () {
                    var t = e.then;
                    (e.then = null),
                      M(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                      r(n),
                      (e.then = t);
                  };
                (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                  ? i()
                  : (e._prom = i);
              });
            }),
            (e.kill = function () {
              et(this);
            }),
            t
          );
        })();
      tm(eC.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var eE = (function (t) {
        function e(e, r) {
          var i;
          return (
            void 0 === e && (e = {}),
            ((i = t.call(this, e) || this).labels = {}),
            (i.smoothChildTiming = !!e.smoothChildTiming),
            (i.autoRemoveChildren = !!e.autoRemoveChildren),
            (i._sort = A(e.sortChildren)),
            u && tF(e.parent || u, n(i), r),
            e.reversed && i.reverse(),
            e.paused && i.paused(!0),
            e.scrollTrigger && tI(n(i), e.scrollTrigger),
            i
          );
        }
        i(e, t);
        var r = e.prototype;
        return (
          (r.to = function (t, e, r) {
            return tV(0, arguments, this), this;
          }),
          (r.from = function (t, e, r) {
            return tV(1, arguments, this), this;
          }),
          (r.fromTo = function (t, e, r, n) {
            return tV(2, arguments, this), this;
          }),
          (r.set = function (t, e, r) {
            return (
              (e.duration = 0),
              (e.parent = this),
              tb(e).repeatDelay || (e.repeat = 0),
              (e.immediateRender = !!e.immediateRender),
              new eU(t, e, tW(this, r), 1),
              this
            );
          }),
          (r.call = function (t, e, r) {
            return tF(this, eU.delayedCall(0, t, e), r);
          }),
          (r.staggerTo = function (t, e, r, n, i, s, a) {
            return (
              (r.duration = e),
              (r.stagger = r.stagger || n),
              (r.onComplete = s),
              (r.onCompleteParams = a),
              (r.parent = this),
              new eU(t, r, tW(this, i)),
              this
            );
          }),
          (r.staggerFrom = function (t, e, r, n, i, s, a) {
            return (
              (r.runBackwards = 1),
              (tb(r).immediateRender = A(r.immediateRender)),
              this.staggerTo(t, e, r, n, i, s, a)
            );
          }),
          (r.staggerFromTo = function (t, e, r, n, i, s, a, o) {
            return (
              (n.startAt = r),
              (tb(n).immediateRender = A(n.immediateRender)),
              this.staggerTo(t, e, n, i, s, a, o)
            );
          }),
          (r.render = function (t, e, r) {
            var n,
              i,
              s,
              o,
              l,
              c,
              f,
              h,
              p,
              d,
              _,
              g,
              m = this._time,
              v = this._dirty ? this.totalDuration() : this._tDur,
              y = this._dur,
              x = t <= 0 ? 0 : tc(t),
              b = this._zTime < 0 != t < 0 && (this._initted || !y);
            if (
              (this !== u && x > v && t >= 0 && (x = v),
              x !== this._tTime || r || b)
            ) {
              if (
                (m !== this._time &&
                  y &&
                  ((x += this._time - m), (t += this._time - m)),
                (n = x),
                (p = this._start),
                (c = !(h = this._ts)),
                b && (y || (m = this._zTime), (t || !e) && (this._zTime = t)),
                this._repeat)
              ) {
                if (
                  ((_ = this._yoyo),
                  (l = y + this._rDelay),
                  this._repeat < -1 && t < 0)
                )
                  return this.totalTime(100 * l + t, e, r);
                if (
                  ((n = tc(x % l)),
                  x === v
                    ? ((o = this._repeat), (n = y))
                    : ((o = ~~(d = tc(x / l))) && o === d && ((n = y), o--),
                      n > y && (n = y)),
                  (d = tS(this._tTime, l)),
                  !m &&
                    this._tTime &&
                    d !== o &&
                    this._tTime - d * l - this._dur <= 0 &&
                    (d = o),
                  _ && 1 & o && ((n = y - n), (g = 1)),
                  o !== d && !this._lock)
                ) {
                  var w = _ && 1 & d,
                    T = w === (_ && 1 & o);
                  if (
                    (o < d && (w = !w),
                    (m = w ? 0 : x % y ? y : x),
                    (this._lock = 1),
                    (this.render(m || (g ? 0 : tc(o * l)), e, !y)._lock = 0),
                    (this._tTime = x),
                    !e && this.parent && t7(this, "onRepeat"),
                    this.vars.repeatRefresh &&
                      !g &&
                      (this.invalidate()._lock = 1),
                    (m && m !== this._time) ||
                      !this._ts !== c ||
                      (this.vars.onRepeat && !this.parent && !this._act) ||
                      ((y = this._dur),
                      (v = this._tDur),
                      T &&
                        ((this._lock = 2),
                        (m = w ? y : -1e-4),
                        this.render(m, !0),
                        this.vars.repeatRefresh && !g && this.invalidate()),
                      (this._lock = 0),
                      !this._ts && !c))
                  )
                    return this;
                  ex(this, g);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  (f = tX(this, tc(m), tc(n))) &&
                  (x -= n - (n = f._start)),
                (this._tTime = x),
                (this._time = n),
                (this._act = !h),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = t),
                  (m = 0)),
                !m && n && !e && !o && (t7(this, "onStart"), this._tTime !== x))
              )
                return this;
              if (n >= m && t >= 0)
                for (i = this._first; i; ) {
                  if (
                    ((s = i._next),
                    (i._act || n >= i._start) && i._ts && f !== i)
                  ) {
                    if (i.parent !== this) return this.render(t, e, r);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (n - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) +
                              (n - i._start) * i._ts,
                        e,
                        r
                      ),
                      n !== this._time || (!this._ts && !c))
                    ) {
                      (f = 0), s && (x += this._zTime = -1e-8);
                      break;
                    }
                  }
                  i = s;
                }
              else {
                i = this._last;
                for (var k = t < 0 ? t : n; i; ) {
                  if (
                    ((s = i._prev), (i._act || k <= i._end) && i._ts && f !== i)
                  ) {
                    if (i.parent !== this) return this.render(t, e, r);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (k - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) +
                              (k - i._start) * i._ts,
                        e,
                        r || (a && (i._initted || i._startAt))
                      ),
                      n !== this._time || (!this._ts && !c))
                    ) {
                      (f = 0), s && (x += this._zTime = k ? -1e-8 : 1e-8);
                      break;
                    }
                  }
                  i = s;
                }
              }
              if (
                f &&
                !e &&
                (this.pause(),
                (f.render(n >= m ? 0 : -1e-8)._zTime = n >= m ? 1 : -1),
                this._ts)
              )
                return (this._start = p), tD(this), this.render(t, e, r);
              this._onUpdate && !e && t7(this, "onUpdate", !0),
                ((x === v && this._tTime >= this.totalDuration()) ||
                  (!x && m)) &&
                  (p === this._start || Math.abs(h) !== Math.abs(this._ts)) &&
                  !this._lock &&
                  ((t || !y) &&
                    ((x === v && this._ts > 0) || (!x && this._ts < 0)) &&
                    tM(this, 1),
                  e ||
                    (t < 0 && !m) ||
                    (!x && !m && v) ||
                    (t7(
                      this,
                      x === v && t >= 0 ? "onComplete" : "onReverseComplete",
                      !0
                    ),
                    this._prom &&
                      !(x < v && this.timeScale() > 0) &&
                      this._prom()));
            }
            return this;
          }),
          (r.add = function (t, e) {
            var r = this;
            if ((O(e) || (e = tW(this, e, t)), !(t instanceof eC))) {
              if (R(t))
                return (
                  t.forEach(function (t) {
                    return r.add(t, e);
                  }),
                  this
                );
              if (k(t)) return this.addLabel(t, e);
              if (!M(t)) return this;
              t = eU.delayedCall(0, t);
            }
            return this !== t ? tF(this, t, e) : this;
          }),
          (r.getChildren = function (t, e, r, n) {
            void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === r && (r = !0),
              void 0 === n && (n = -1e8);
            for (var i = [], s = this._first; s; )
              s._start >= n &&
                (s instanceof eU
                  ? e && i.push(s)
                  : (r && i.push(s),
                    t && i.push.apply(i, s.getChildren(!0, e, r)))),
                (s = s._next);
            return i;
          }),
          (r.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
              if (e[r].vars.id === t) return e[r];
          }),
          (r.remove = function (t) {
            return k(t)
              ? this.removeLabel(t)
              : M(t)
              ? this.killTweensOf(t)
              : (t.parent === this && tk(this, t),
                t === this._recent && (this._recent = this._last),
                tO(this));
          }),
          (r.totalTime = function (e, r) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = tc(
                    ef.time -
                      (this._ts > 0
                        ? e / this._ts
                        : -((this.totalDuration() - e) / this._ts))
                  )),
                t.prototype.totalTime.call(this, e, r),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (r.addLabel = function (t, e) {
            return (this.labels[t] = tW(this, e)), this;
          }),
          (r.removeLabel = function (t) {
            return delete this.labels[t], this;
          }),
          (r.addPause = function (t, e, r) {
            var n = eU.delayedCall(0, e || j, r);
            return (
              (n.data = "isPause"),
              (this._hasPause = 1),
              tF(this, n, tW(this, t))
            );
          }),
          (r.removePause = function (t) {
            var e = this._first;
            for (t = tW(this, t); e; )
              e._start === t && "isPause" === e.data && tM(e), (e = e._next);
          }),
          (r.killTweensOf = function (t, e, r) {
            for (var n = this.getTweensOf(t, r), i = n.length; i--; )
              eA !== n[i] && n[i].kill(t, e);
            return this;
          }),
          (r.getTweensOf = function (t, e) {
            for (var r, n = [], i = tK(t), s = this._first, a = O(e); s; )
              s instanceof eU
                ? th(s._targets, i) &&
                  (a
                    ? (!eA || (s._initted && s._ts)) &&
                      s.globalTime(0) <= e &&
                      s.globalTime(s.totalDuration()) > e
                    : !e || s.isActive()) &&
                  n.push(s)
                : (r = s.getTweensOf(i, e)).length && n.push.apply(n, r),
                (s = s._next);
            return n;
          }),
          (r.tweenTo = function (t, e) {
            e = e || {};
            var r,
              n = this,
              i = tW(n, t),
              s = e,
              a = s.startAt,
              o = s.onStart,
              u = s.onStartParams,
              l = s.immediateRender,
              c = eU.to(
                n,
                tm(
                  {
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration:
                      e.duration ||
                      Math.abs(
                        (i - (a && "time" in a ? a.time : n._time)) /
                          n.timeScale()
                      ) ||
                      1e-8,
                    onStart: function () {
                      if ((n.pause(), !r)) {
                        var t =
                          e.duration ||
                          Math.abs(
                            (i - (a && "time" in a ? a.time : n._time)) /
                              n.timeScale()
                          );
                        c._dur !== t && tU(c, t, 0, 1).render(c._time, !0, !0),
                          (r = 1);
                      }
                      o && o.apply(c, u || []);
                    },
                  },
                  e
                )
              );
            return l ? c.render(0) : c;
          }),
          (r.tweenFromTo = function (t, e, r) {
            return this.tweenTo(e, tm({ startAt: { time: tW(this, t) } }, r));
          }),
          (r.recent = function () {
            return this._recent;
          }),
          (r.nextLabel = function (t) {
            return void 0 === t && (t = this._time), t9(this, tW(this, t));
          }),
          (r.previousLabel = function (t) {
            return void 0 === t && (t = this._time), t9(this, tW(this, t), 1);
          }),
          (r.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.previousLabel(this._time + 1e-8);
          }),
          (r.shiftChildren = function (t, e, r) {
            void 0 === r && (r = 0);
            for (var n, i = this._first, s = this.labels; i; )
              i._start >= r && ((i._start += t), (i._end += t)), (i = i._next);
            if (e) for (n in s) s[n] >= r && (s[n] += t);
            return tO(this);
          }),
          (r.invalidate = function (e) {
            var r = this._first;
            for (this._lock = 0; r; ) r.invalidate(e), (r = r._next);
            return t.prototype.invalidate.call(this, e);
          }),
          (r.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r; )
              (e = r._next), this.remove(r), (r = e);
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              t && (this.labels = {}),
              tO(this)
            );
          }),
          (r.totalDuration = function (t) {
            var e,
              r,
              n,
              i = 0,
              s = this._last,
              a = 1e8;
            if (arguments.length)
              return this.timeScale(
                (this._repeat < 0 ? this.duration() : this.totalDuration()) /
                  (this.reversed() ? -t : t)
              );
            if (this._dirty) {
              for (n = this.parent; s; )
                (e = s._prev),
                  s._dirty && s.totalDuration(),
                  (r = s._start) > a && this._sort && s._ts && !this._lock
                    ? ((this._lock = 1),
                      (tF(this, s, r - s._delay, 1)._lock = 0))
                    : (a = r),
                  r < 0 &&
                    s._ts &&
                    ((i -= r),
                    ((!n && !this._dp) || (n && n.smoothChildTiming)) &&
                      ((this._start += r / this._ts),
                      (this._time -= r),
                      (this._tTime -= r)),
                    this.shiftChildren(-r, !1, -Infinity),
                    (a = 0)),
                  s._end > i && s._ts && (i = s._end),
                  (s = e);
              tU(this, this === u && this._time > i ? this._time : i, 1, 1),
                (this._dirty = 0);
            }
            return this._tDur;
          }),
          (e.updateRoot = function (t) {
            if ((u._ts && (td(u, tP(t, u)), (p = ef.frame)), ef.frame >= tr)) {
              tr += g.autoSleep || 120;
              var e = u._first;
              if ((!e || !e._ts) && g.autoSleep && ef._listeners.length < 2) {
                for (; e && !e._ts; ) e = e._next;
                e || ef.sleep();
              }
            }
          }),
          e
        );
      })(eC);
      tm(eE.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var eA,
        eS,
        eP = function (t, e, r, n, i, s, a) {
          var o,
            u,
            l,
            c,
            f,
            h,
            p,
            d,
            _ = new e2(this._pt, t, e, 0, 1, eZ, null, i),
            g = 0,
            m = 0;
          for (
            _.b = r,
              _.e = n,
              r += "",
              n += "",
              (p = ~n.indexOf("random(")) && (n = t6(n)),
              s && (s((d = [r, n]), t, e), (r = d[0]), (n = d[1])),
              u = r.match(Y) || [];
            (o = Y.exec(n));

          )
            (c = o[0]),
              (f = n.substring(g, o.index)),
              l ? (l = (l + 1) % 5) : "rgba(" === f.substr(-5) && (l = 1),
              c !== u[m++] &&
                ((h = parseFloat(u[m - 1]) || 0),
                (_._pt = {
                  _next: _._pt,
                  p: f || 1 === m ? f : ",",
                  s: h,
                  c: "=" === c.charAt(1) ? tf(h, c) - h : parseFloat(c) - h,
                  m: l && l < 4 ? Math.round : 0,
                }),
                (g = Y.lastIndex));
          return (
            (_.c = g < n.length ? n.substring(g, n.length) : ""),
            (_.fp = a),
            (B.test(n) || p) && (_.e = 0),
            (this._pt = _),
            _
          );
        },
        eD = function (t, e, r, n, i, s, a, o, u, l) {
          M(n) && (n = n(i || 0, t, s));
          var c,
            f = t[e],
            h =
              "get" !== r
                ? r
                : M(f)
                ? u
                  ? t[
                      e.indexOf("set") || !M(t["get" + e.substr(3)])
                        ? e
                        : "get" + e.substr(3)
                    ](u)
                  : t[e]()
                : f,
            p = M(f) ? (u ? eW : eH) : eq;
          if (
            (k(n) &&
              (~n.indexOf("random(") && (n = t6(n)),
              "=" === n.charAt(1) &&
                ((c = tf(h, n) + (tQ(h) || 0)) || 0 === c) &&
                (n = c)),
            !l || h !== n || eS)
          )
            return isNaN(h * n) || "" === n
              ? (f || e in t || H(e, n),
                eP.call(this, t, e, h, n, p, o || g.stringFilter, u))
              : ((c = new e2(
                  this._pt,
                  t,
                  e,
                  +h || 0,
                  n - (h || 0),
                  "boolean" == typeof f ? eQ : eG,
                  0,
                  p
                )),
                u && (c.fp = u),
                a && c.modifier(a, this, t),
                (this._pt = c));
        },
        eR = function (t, e, r, n, i) {
          if (
            (M(t) && (t = eL(t, i, e, r, n)),
            !E(t) || (t.style && t.nodeType) || R(t) || D(t))
          )
            return k(t) ? eL(t, i, e, r, n) : t;
          var s,
            a = {};
          for (s in t) a[s] = eL(t[s], i, e, r, n);
          return a;
        },
        ez = function (t, e, r, n, i, s) {
          var a, o, u, l;
          if (
            tt[t] &&
            !1 !==
              (a = new tt[t]()).init(
                i,
                a.rawVars ? e[t] : eR(e[t], n, i, s, r),
                r,
                n,
                s
              ) &&
            ((r._pt = o =
              new e2(r._pt, i, t, 0, 1, a.render, a, 0, a.priority)),
            r !== d)
          )
            for (
              u = r._ptLookup[r._targets.indexOf(i)], l = a._props.length;
              l--;

            )
              u[a._props[l]] = o;
          return a;
        },
        eF = function t(e, r, n) {
          var i,
            o,
            l,
            c,
            f,
            h,
            p,
            d,
            _,
            g,
            v,
            y,
            x,
            b = e.vars,
            w = b.ease,
            T = b.startAt,
            k = b.immediateRender,
            M = b.lazy,
            O = b.onUpdate,
            C = b.runBackwards,
            E = b.yoyoEase,
            S = b.keyframes,
            P = b.autoRevert,
            D = e._dur,
            R = e._startAt,
            z = e._targets,
            F = e.parent,
            I = F && "nested" === F.data ? F.vars.targets : z,
            Y = "auto" === e._overwrite && !s,
            B = e.timeline;
          if (
            (!B || (S && w) || (w = "none"),
            (e._ease = eb(w, m.ease)),
            (e._yEase = E ? ey(eb(!0 === E ? w : E, m.ease)) : 0),
            E &&
              e._yoyo &&
              !e._repeat &&
              ((E = e._yEase), (e._yEase = e._ease), (e._ease = E)),
            (e._from = !B && !!b.runBackwards),
            !B || (S && !b.stagger))
          ) {
            if (
              ((y = (d = z[0] ? ta(z[0]).harness : 0) && b[d.prop]),
              (i = tx(b, $)),
              R &&
                (R._zTime < 0 && R.progress(1),
                r < 0 && C && k && !P
                  ? R.render(-1, !0)
                  : R.revert(C && D ? Q : G),
                (R._lazy = 0)),
              T)
            ) {
              if (
                (tM(
                  (e._startAt = eU.set(
                    z,
                    tm(
                      {
                        data: "isStart",
                        overwrite: !1,
                        parent: F,
                        immediateRender: !0,
                        lazy: !R && A(M),
                        startAt: null,
                        delay: 0,
                        onUpdate:
                          O &&
                          function () {
                            return t7(e, "onUpdate");
                          },
                        stagger: 0,
                      },
                      T
                    )
                  ))
                ),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                r < 0 && (a || (!k && !P)) && e._startAt.revert(Q),
                k && D && r <= 0 && n <= 0)
              ) {
                r && (e._zTime = r);
                return;
              }
            } else if (C && D && !R) {
              if (
                (r && (k = !1),
                (l = tm(
                  {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: k && !R && A(M),
                    immediateRender: k,
                    stagger: 0,
                    parent: F,
                  },
                  i
                )),
                y && (l[d.prop] = y),
                tM((e._startAt = eU.set(z, l))),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                r < 0 && (a ? e._startAt.revert(Q) : e._startAt.render(-1, !0)),
                (e._zTime = r),
                k)
              ) {
                if (!r) return;
              } else t(e._startAt, 1e-8, 1e-8);
            }
            for (
              o = 0, e._pt = e._ptCache = 0, M = (D && A(M)) || (M && !D);
              o < z.length;
              o++
            ) {
              if (
                ((p = (f = z[o])._gsap || ts(z)[o]._gsap),
                (e._ptLookup[o] = g = {}),
                J[p.id] && K.length && tp(),
                (v = I === z ? o : I.indexOf(f)),
                d &&
                  !1 !== (_ = new d()).init(f, y || i, e, v, I) &&
                  ((e._pt = c =
                    new e2(e._pt, f, _.name, 0, 1, _.render, _, 0, _.priority)),
                  _._props.forEach(function (t) {
                    g[t] = c;
                  }),
                  _.priority && (h = 1)),
                !d || y)
              )
                for (l in i)
                  tt[l] && (_ = ez(l, i, e, v, f, I))
                    ? _.priority && (h = 1)
                    : (g[l] = c =
                        eD.call(e, f, l, "get", i[l], v, I, 0, b.stringFilter));
              e._op && e._op[o] && e.kill(f, e._op[o]),
                Y &&
                  e._pt &&
                  ((eA = e),
                  u.killTweensOf(f, g, e.globalTime(r)),
                  (x = !e.parent),
                  (eA = 0)),
                e._pt && M && (J[p.id] = 1);
            }
            h && e1(e), e._onInit && e._onInit(e);
          }
          (e._onUpdate = O),
            (e._initted = (!e._op || e._pt) && !x),
            S && r <= 0 && B.render(1e8, !0, !0);
        },
        eI = function (t, e, r, n, i, s, a, o) {
          var u,
            l,
            c,
            f,
            h = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
          if (!h)
            for (
              h = t._ptCache[e] = [], c = t._ptLookup, f = t._targets.length;
              f--;

            ) {
              if ((u = c[f][e]) && u.d && u.d._pt)
                for (u = u.d._pt; u && u.p !== e && u.fp !== e; ) u = u._next;
              if (!u)
                return (
                  (eS = 1),
                  (t.vars[e] = "+=0"),
                  eF(t, a),
                  (eS = 0),
                  o ? W(e + " not eligible for reset") : 1
                );
              h.push(u);
            }
          for (f = h.length; f--; )
            ((u = (l = h[f])._pt || l).s =
              (n || 0 === n) && !i ? n : u.s + (n || 0) + s * u.c),
              (u.c = r - u.s),
              l.e && (l.e = tl(r) + tQ(l.e)),
              l.b && (l.b = u.s + tQ(l.b));
        },
        eY = function (t, e) {
          var r,
            n,
            i,
            s,
            a = t[0] ? ta(t[0]).harness : 0,
            o = a && a.aliases;
          if (!o) return e;
          for (n in ((r = tv({}, e)), o))
            if (n in r)
              for (i = (s = o[n].split(",")).length; i--; ) r[s[i]] = r[n];
          return r;
        },
        eB = function (t, e, r, n) {
          var i,
            s,
            a = e.ease || n || "power1.inOut";
          if (R(e))
            (s = r[t] || (r[t] = [])),
              e.forEach(function (t, r) {
                return s.push({ t: (r / (e.length - 1)) * 100, v: t, e: a });
              });
          else
            for (i in e)
              (s = r[i] || (r[i] = [])),
                "ease" === i || s.push({ t: parseFloat(t), v: e[i], e: a });
        },
        eL = function (t, e, r, n, i) {
          return M(t)
            ? t.call(e, r, n, i)
            : k(t) && ~t.indexOf("random(")
            ? t6(t)
            : t;
        },
        eN = ti + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        eX = {};
      tu(eN + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
        return (eX[t] = 1);
      });
      var eU = (function (t) {
        function e(e, r, i, a) {
          "number" == typeof r && ((i.duration = r), (r = i), (i = null));
          var o,
            l,
            c,
            f,
            h,
            p,
            d,
            _,
            m,
            v = (o = t.call(this, a ? r : tb(r)) || this).vars,
            y = v.duration,
            x = v.delay,
            b = v.immediateRender,
            w = v.stagger,
            T = v.overwrite,
            k = v.keyframes,
            M = v.defaults,
            C = v.scrollTrigger,
            S = v.yoyoEase,
            z = r.parent || u,
            F = (R(e) || D(e) ? O(e[0]) : "length" in r) ? [e] : tK(e);
          if (
            ((o._targets = F.length
              ? ts(F)
              : W(
                  "GSAP target " + e + " not found. https://gsap.com",
                  !g.nullTargetWarn
                ) || []),
            (o._ptLookup = []),
            (o._overwrite = T),
            k || w || P(y) || P(x))
          ) {
            if (
              ((r = o.vars),
              (l = o.timeline =
                new eE({
                  data: "nested",
                  defaults: M || {},
                  targets: z && "nested" === z.data ? z.vars.targets : F,
                })).kill(),
              (l.parent = l._dp = n(o)),
              (l._start = 0),
              w || P(y) || P(x))
            ) {
              if (((h = F.length), (_ = w && t1(w)), E(w)))
                for (p in w) ~eN.indexOf(p) && (m || (m = {}), (m[p] = w[p]));
              for (c = 0; c < h; c++)
                ((f = tx(r, eX)).stagger = 0),
                  S && (f.yoyoEase = S),
                  m && tv(f, m),
                  (d = F[c]),
                  (f.duration = +eL(y, n(o), c, d, F)),
                  (f.delay = (+eL(x, n(o), c, d, F) || 0) - o._delay),
                  !w &&
                    1 === h &&
                    f.delay &&
                    ((o._delay = x = f.delay), (o._start += x), (f.delay = 0)),
                  l.to(d, f, _ ? _(c, d, F) : 0),
                  (l._ease = ep.none);
              l.duration() ? (y = x = 0) : (o.timeline = 0);
            } else if (k) {
              tb(tm(l.vars.defaults, { ease: "none" })),
                (l._ease = eb(k.ease || r.ease || "none"));
              var I,
                Y,
                B,
                L = 0;
              if (R(k))
                k.forEach(function (t) {
                  return l.to(F, t, ">");
                }),
                  l.duration();
              else {
                for (p in ((f = {}), k))
                  "ease" === p ||
                    "easeEach" === p ||
                    eB(p, k[p], f, k.easeEach);
                for (p in f)
                  for (
                    c = 0,
                      I = f[p].sort(function (t, e) {
                        return t.t - e.t;
                      }),
                      L = 0;
                    c < I.length;
                    c++
                  )
                    ((B = {
                      ease: (Y = I[c]).e,
                      duration: ((Y.t - (c ? I[c - 1].t : 0)) / 100) * y,
                    })[p] = Y.v),
                      l.to(F, B, L),
                      (L += B.duration);
                l.duration() < y && l.to({}, { duration: y - l.duration() });
              }
            }
            y || o.duration((y = l.duration()));
          } else o.timeline = 0;
          return (
            !0 !== T || s || ((eA = n(o)), u.killTweensOf(F), (eA = 0)),
            tF(z, n(o), i),
            r.reversed && o.reverse(),
            r.paused && o.paused(!0),
            (b ||
              (!y &&
                !k &&
                o._start === tc(z._time) &&
                A(b) &&
                (function t(e) {
                  return !e || (e._ts && t(e.parent));
                })(n(o)) &&
                "nested" !== z.data)) &&
              ((o._tTime = -1e-8), o.render(Math.max(0, -x) || 0)),
            C && tI(n(o), C),
            o
          );
        }
        i(e, t);
        var r = e.prototype;
        return (
          (r.render = function (t, e, r) {
            var n,
              i,
              s,
              a,
              o,
              u,
              l,
              c,
              f,
              h = this._time,
              p = this._tDur,
              d = this._dur,
              _ = t < 0,
              g = t > p - 1e-8 && !_ ? p : t < 1e-8 ? 0 : t;
            if (d) {
              if (
                g !== this._tTime ||
                !t ||
                r ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== _) ||
                this._lazy
              ) {
                if (((n = g), (c = this.timeline), this._repeat)) {
                  if (((a = d + this._rDelay), this._repeat < -1 && _))
                    return this.totalTime(100 * a + t, e, r);
                  if (
                    ((n = tc(g % a)),
                    g === p
                      ? ((s = this._repeat), (n = d))
                      : (s = ~~(o = tc(g / a))) && s === o
                      ? ((n = d), s--)
                      : n > d && (n = d),
                    (u = this._yoyo && 1 & s) &&
                      ((f = this._yEase), (n = d - n)),
                    (o = tS(this._tTime, a)),
                    n === h && !r && this._initted && s === o)
                  )
                    return (this._tTime = g), this;
                  s !== o &&
                    (c && this._yEase && ex(c, u),
                    this.vars.repeatRefresh &&
                      !u &&
                      !this._lock &&
                      n !== a &&
                      this._initted &&
                      ((this._lock = r = 1),
                      (this.render(tc(a * s), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (tY(this, _ ? t : n, r, e, g))
                    return (this._tTime = 0), this;
                  if (
                    h !== this._time &&
                    !(r && this.vars.repeatRefresh && s !== o)
                  )
                    return this;
                  if (d !== this._dur) return this.render(t, e, r);
                }
                if (
                  ((this._tTime = g),
                  (this._time = n),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = l = (f || this._ease)(n / d)),
                  this._from && (this.ratio = l = 1 - l),
                  n &&
                    !h &&
                    !e &&
                    !s &&
                    (t7(this, "onStart"), this._tTime !== g))
                )
                  return this;
                for (i = this._pt; i; ) i.r(l, i.d), (i = i._next);
                (c &&
                  c.render(
                    t < 0 ? t : c._dur * c._ease(n / this._dur),
                    e,
                    r
                  )) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (_ && tE(this, t, e, r), t7(this, "onUpdate")),
                  this._repeat &&
                    s !== o &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    t7(this, "onRepeat"),
                  (g === this._tDur || !g) &&
                    this._tTime === g &&
                    (_ && !this._onUpdate && tE(this, t, !0, !0),
                    (t || !d) &&
                      ((g === this._tDur && this._ts > 0) ||
                        (!g && this._ts < 0)) &&
                      tM(this, 1),
                    !e &&
                      !(_ && !h) &&
                      (g || h || u) &&
                      (t7(
                        this,
                        g === p ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(g < p && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else tN(this, t, e, r);
            return this;
          }),
          (r.targets = function () {
            return this._targets;
          }),
          (r.invalidate = function (e) {
            return (
              (e && this.vars.runBackwards) || (this._startAt = 0),
              (this._pt =
                this._op =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(e),
              t.prototype.invalidate.call(this, e)
            );
          }),
          (r.resetTo = function (t, e, r, n, i) {
            _ || ef.wake(), this._ts || this.play();
            var s = Math.min(
              this._dur,
              (this._dp._time - this._start) * this._ts
            );
            return (this._initted || eF(this, s),
            eI(this, t, e, r, n, this._ease(s / this._dur), s, i))
              ? this.resetTo(t, e, r, n, 1)
              : (tR(this, 0),
                this.parent ||
                  tT(
                    this._dp,
                    this,
                    "_first",
                    "_last",
                    this._dp._sort ? "_start" : 0
                  ),
                this.render(0));
          }),
          (r.kill = function (t, e) {
            if ((void 0 === e && (e = "all"), !t && (!e || "all" === e)))
              return (
                (this._lazy = this._pt = 0),
                this.parent
                  ? et(this)
                  : this.scrollTrigger && this.scrollTrigger.kill(!!a),
                this
              );
            if (this.timeline) {
              var r = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(t, e, eA && !0 !== eA.vars.overwrite)
                  ._first || et(this),
                this.parent &&
                  r !== this.timeline.totalDuration() &&
                  tU(this, (this._dur * this.timeline._tDur) / r, 0, 1),
                this
              );
            }
            var n,
              i,
              s,
              o,
              u,
              l,
              c,
              f = this._targets,
              h = t ? tK(t) : f,
              p = this._ptLookup,
              d = this._pt;
            if ((!e || "all" === e) && tw(f, h))
              return "all" === e && (this._pt = 0), et(this);
            for (
              n = this._op = this._op || [],
                "all" !== e &&
                  (k(e) &&
                    ((u = {}),
                    tu(e, function (t) {
                      return (u[t] = 1);
                    }),
                    (e = u)),
                  (e = eY(f, e))),
                c = f.length;
              c--;

            )
              if (~h.indexOf(f[c]))
                for (u in ((i = p[c]),
                "all" === e
                  ? ((n[c] = e), (o = i), (s = {}))
                  : ((s = n[c] = n[c] || {}), (o = e)),
                o))
                  (l = i && i[u]) &&
                    (("kill" in l.d && !0 !== l.d.kill(u)) ||
                      tk(this, l, "_pt"),
                    delete i[u]),
                    "all" !== s && (s[u] = 1);
            return this._initted && !this._pt && d && et(this), this;
          }),
          (e.to = function (t, r) {
            return new e(t, r, arguments[2]);
          }),
          (e.from = function (t, e) {
            return tV(1, arguments);
          }),
          (e.delayedCall = function (t, r, n, i) {
            return new e(r, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: r,
              onReverseComplete: r,
              onCompleteParams: n,
              onReverseCompleteParams: n,
              callbackScope: i,
            });
          }),
          (e.fromTo = function (t, e, r) {
            return tV(2, arguments);
          }),
          (e.set = function (t, r) {
            return (
              (r.duration = 0), r.repeatDelay || (r.repeat = 0), new e(t, r)
            );
          }),
          (e.killTweensOf = function (t, e, r) {
            return u.killTweensOf(t, e, r);
          }),
          e
        );
      })(eC);
      tm(eU.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        tu("staggerTo,staggerFrom,staggerFromTo", function (t) {
          eU[t] = function () {
            var e = new eE(),
              r = tZ.call(arguments, 0);
            return (
              r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
            );
          };
        });
      var eq = function (t, e, r) {
          return (t[e] = r);
        },
        eH = function (t, e, r) {
          return t[e](r);
        },
        eW = function (t, e, r, n) {
          return t[e](n.fp, r);
        },
        eV = function (t, e, r) {
          return t.setAttribute(e, r);
        },
        ej = function (t, e) {
          return M(t[e]) ? eH : C(t[e]) && t.setAttribute ? eV : eq;
        },
        eG = function (t, e) {
          return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
        },
        eQ = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        eZ = function (t, e) {
          var r = e._pt,
            n = "";
          if (!t && e.b) n = e.b;
          else if (1 === t && e.e) n = e.e;
          else {
            for (; r; )
              (n =
                r.p +
                (r.m
                  ? r.m(r.s + r.c * t)
                  : Math.round((r.s + r.c * t) * 1e4) / 1e4) +
                n),
                (r = r._next);
            n += e.c;
          }
          e.set(e.t, e.p, n, e);
        },
        e$ = function (t, e) {
          for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
        },
        eK = function (t, e, r, n) {
          for (var i, s = this._pt; s; )
            (i = s._next), s.p === n && s.modifier(t, e, r), (s = i);
        },
        eJ = function (t) {
          for (var e, r, n = this._pt; n; )
            (r = n._next),
              (n.p !== t || n.op) && n.op !== t
                ? n.dep || (e = 1)
                : tk(this, n, "_pt"),
              (n = r);
          return !e;
        },
        e0 = function (t, e, r, n) {
          n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
        },
        e1 = function (t) {
          for (var e, r, n, i, s = t._pt; s; ) {
            for (e = s._next, r = n; r && r.pr > s.pr; ) r = r._next;
            (s._prev = r ? r._prev : i) ? (s._prev._next = s) : (n = s),
              (s._next = r) ? (r._prev = s) : (i = s),
              (s = e);
          }
          t._pt = n;
        },
        e2 = (function () {
          function t(t, e, r, n, i, s, a, o, u) {
            (this.t = e),
              (this.s = n),
              (this.c = i),
              (this.p = r),
              (this.r = s || eG),
              (this.d = a || this),
              (this.set = o || eq),
              (this.pr = u || 0),
              (this._next = t),
              t && (t._prev = this);
          }
          return (
            (t.prototype.modifier = function (t, e, r) {
              (this.mSet = this.mSet || this.set),
                (this.set = e0),
                (this.m = t),
                (this.mt = r),
                (this.tween = e);
            }),
            t
          );
        })();
      tu(
        ti +
          "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (t) {
          return ($[t] = 1);
        }
      ),
        (X.TweenMax = X.TweenLite = eU),
        (X.TimelineLite = X.TimelineMax = eE),
        (u = new eE({
          sortChildren: !1,
          defaults: m,
          autoRemoveChildren: !0,
          id: "root",
          smoothChildTiming: !0,
        })),
        (g.stringFilter = ec);
      var e5 = [],
        e3 = {},
        e8 = [],
        e6 = 0,
        e4 = 0,
        e9 = function (t) {
          return (e3[t] || e8).map(function (t) {
            return t();
          });
        },
        e7 = function () {
          var t = Date.now(),
            e = [];
          t - e6 > 2 &&
            (e9("matchMediaInit"),
            e5.forEach(function (t) {
              var r,
                n,
                i,
                s,
                a = t.queries,
                o = t.conditions;
              for (n in a)
                (r = l.matchMedia(a[n]).matches) && (i = 1),
                  r !== o[n] && ((o[n] = r), (s = 1));
              s && (t.revert(), i && e.push(t));
            }),
            e9("matchMediaRevert"),
            e.forEach(function (t) {
              return t.onMatch(t, function (e) {
                return t.add(null, e);
              });
            }),
            (e6 = t),
            e9("matchMedia"));
        },
        rt = (function () {
          function t(t, e) {
            (this.selector = e && tJ(e)),
              (this.data = []),
              (this._r = []),
              (this.isReverted = !1),
              (this.id = e4++),
              t && this.add(t);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, r) {
              M(t) && ((r = e), (e = t), (t = M));
              var n = this,
                i = function () {
                  var t,
                    i = o,
                    s = n.selector;
                  return (
                    i && i !== n && i.data.push(n),
                    r && (n.selector = tJ(r)),
                    (o = n),
                    (t = e.apply(n, arguments)),
                    M(t) && n._r.push(t),
                    (o = i),
                    (n.selector = s),
                    (n.isReverted = !1),
                    t
                  );
                };
              return (
                (n.last = i),
                t === M
                  ? i(n, function (t) {
                      return n.add(null, t);
                    })
                  : t
                  ? (n[t] = i)
                  : i
              );
            }),
            (e.ignore = function (t) {
              var e = o;
              (o = null), t(this), (o = e);
            }),
            (e.getTweens = function () {
              var e = [];
              return (
                this.data.forEach(function (r) {
                  return r instanceof t
                    ? e.push.apply(e, r.getTweens())
                    : r instanceof eU &&
                        !(r.parent && "nested" === r.parent.data) &&
                        e.push(r);
                }),
                e
              );
            }),
            (e.clear = function () {
              this._r.length = this.data.length = 0;
            }),
            (e.kill = function (t, e) {
              var r = this;
              if (
                (t
                  ? (function () {
                      for (var e, n = r.getTweens(), i = r.data.length; i--; )
                        "isFlip" === (e = r.data[i]).data &&
                          (e.revert(),
                          e.getChildren(!0, !0, !1).forEach(function (t) {
                            return n.splice(n.indexOf(t), 1);
                          }));
                      for (
                        n
                          .map(function (t) {
                            return {
                              g:
                                t._dur ||
                                t._delay ||
                                (t._sat && !t._sat.vars.immediateRender)
                                  ? t.globalTime(0)
                                  : -1 / 0,
                              t: t,
                            };
                          })
                          .sort(function (t, e) {
                            return e.g - t.g || -1 / 0;
                          })
                          .forEach(function (e) {
                            return e.t.revert(t);
                          }),
                          i = r.data.length;
                        i--;

                      )
                        (e = r.data[i]) instanceof eE
                          ? "nested" !== e.data &&
                            (e.scrollTrigger && e.scrollTrigger.revert(),
                            e.kill())
                          : e instanceof eU || !e.revert || e.revert(t);
                      r._r.forEach(function (e) {
                        return e(t, r);
                      }),
                        (r.isReverted = !0);
                    })()
                  : this.data.forEach(function (t) {
                      return t.kill && t.kill();
                    }),
                this.clear(),
                e)
              )
                for (var n = e5.length; n--; )
                  e5[n].id === this.id && e5.splice(n, 1);
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            t
          );
        })(),
        re = (function () {
          function t(t) {
            (this.contexts = []), (this.scope = t), o && o.data.push(this);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, r) {
              E(t) || (t = { matches: t });
              var n,
                i,
                s,
                a = new rt(0, r || this.scope),
                u = (a.conditions = {});
              for (i in (o && !a.selector && (a.selector = o.selector),
              this.contexts.push(a),
              (e = a.add("onMatch", e)),
              (a.queries = t),
              t))
                "all" === i
                  ? (s = 1)
                  : (n = l.matchMedia(t[i])) &&
                    (0 > e5.indexOf(a) && e5.push(a),
                    (u[i] = n.matches) && (s = 1),
                    n.addListener
                      ? n.addListener(e7)
                      : n.addEventListener("change", e7));
              return (
                s &&
                  e(a, function (t) {
                    return a.add(null, t);
                  }),
                this
              );
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            (e.kill = function (t) {
              this.contexts.forEach(function (e) {
                return e.kill(t, !0);
              });
            }),
            t
          );
        })(),
        rr = {
          registerPlugin: function () {
            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            e.forEach(function (t) {
              return er(t);
            });
          },
          timeline: function (t) {
            return new eE(t);
          },
          getTweensOf: function (t, e) {
            return u.getTweensOf(t, e);
          },
          getProperty: function (t, e, r, n) {
            k(t) && (t = tK(t)[0]);
            var i = ta(t || {}).get,
              s = r ? tg : t_;
            return (
              "native" === r && (r = ""),
              t
                ? e
                  ? s(((tt[e] && tt[e].get) || i)(t, e, r, n))
                  : function (e, r, n) {
                      return s(((tt[e] && tt[e].get) || i)(t, e, r, n));
                    }
                : t
            );
          },
          quickSetter: function (t, e, r) {
            if ((t = tK(t)).length > 1) {
              var n = t.map(function (t) {
                  return ra.quickSetter(t, e, r);
                }),
                i = n.length;
              return function (t) {
                for (var e = i; e--; ) n[e](t);
              };
            }
            t = t[0] || {};
            var s = tt[e],
              a = ta(t),
              o = (a.harness && (a.harness.aliases || {})[e]) || e,
              u = s
                ? function (e) {
                    var n = new s();
                    (d._pt = 0),
                      n.init(t, r ? e + r : e, d, 0, [t]),
                      n.render(1, n),
                      d._pt && e$(1, d);
                  }
                : a.set(t, o);
            return s
              ? u
              : function (e) {
                  return u(t, o, r ? e + r : e, a, 1);
                };
          },
          quickTo: function (t, e, r) {
            var n,
              i = ra.to(
                t,
                tm(
                  (((n = {})[e] = "+=0.1"),
                  (n.paused = !0),
                  (n.stagger = 0),
                  n),
                  r || {}
                )
              ),
              s = function (t, r, n) {
                return i.resetTo(e, t, r, n);
              };
            return (s.tween = i), s;
          },
          isTweening: function (t) {
            return u.getTweensOf(t, !0).length > 0;
          },
          defaults: function (t) {
            return t && t.ease && (t.ease = eb(t.ease, m.ease)), ty(m, t || {});
          },
          config: function (t) {
            return ty(g, t || {});
          },
          registerEffect: function (t) {
            var e = t.name,
              r = t.effect,
              n = t.plugins,
              i = t.defaults,
              s = t.extendTimeline;
            (n || "").split(",").forEach(function (t) {
              return (
                t &&
                !tt[t] &&
                !X[t] &&
                W(e + " effect requires " + t + " plugin.")
              );
            }),
              (te[e] = function (t, e, n) {
                return r(tK(t), tm(e || {}, i), n);
              }),
              s &&
                (eE.prototype[e] = function (t, r, n) {
                  return this.add(te[e](t, E(r) ? r : (n = r) && {}, this), n);
                });
          },
          registerEase: function (t, e) {
            ep[t] = eb(e);
          },
          parseEase: function (t, e) {
            return arguments.length ? eb(t, e) : ep;
          },
          getById: function (t) {
            return u.getById(t);
          },
          exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var r,
              n,
              i = new eE(t);
            for (
              i.smoothChildTiming = A(t.smoothChildTiming),
                u.remove(i),
                i._dp = 0,
                i._time = i._tTime = u._time,
                r = u._first;
              r;

            )
              (n = r._next),
                (e ||
                  !(
                    !r._dur &&
                    r instanceof eU &&
                    r.vars.onComplete === r._targets[0]
                  )) &&
                  tF(i, r, r._start - r._delay),
                (r = n);
            return tF(u, i, 0), i;
          },
          context: function (t, e) {
            return t ? new rt(t, e) : o;
          },
          matchMedia: function (t) {
            return new re(t);
          },
          matchMediaRefresh: function () {
            return (
              e5.forEach(function (t) {
                var e,
                  r,
                  n = t.conditions;
                for (r in n) n[r] && ((n[r] = !1), (e = 1));
                e && t.revert();
              }) || e7()
            );
          },
          addEventListener: function (t, e) {
            var r = e3[t] || (e3[t] = []);
            ~r.indexOf(e) || r.push(e);
          },
          removeEventListener: function (t, e) {
            var r = e3[t],
              n = r && r.indexOf(e);
            n >= 0 && r.splice(n, 1);
          },
          utils: {
            wrap: function t(e, r, n) {
              var i = r - e;
              return R(e)
                ? t8(e, t(0, e.length), r)
                : tj(n, function (t) {
                    return ((i + ((t - e) % i)) % i) + e;
                  });
            },
            wrapYoyo: function t(e, r, n) {
              var i = r - e,
                s = 2 * i;
              return R(e)
                ? t8(e, t(0, e.length - 1), r)
                : tj(n, function (t) {
                    return (
                      (t = (s + ((t - e) % s)) % s || 0),
                      e + (t > i ? s - t : t)
                    );
                  });
            },
            distribute: t1,
            random: t3,
            snap: t5,
            normalize: function (t, e, r) {
              return t4(t, e, 0, 1, r);
            },
            getUnit: tQ,
            clamp: function (t, e, r) {
              return tj(r, function (r) {
                return tG(t, e, r);
              });
            },
            splitColor: es,
            toArray: tK,
            selector: tJ,
            mapRange: t4,
            pipe: function () {
              for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
              return function (t) {
                return e.reduce(function (t, e) {
                  return e(t);
                }, t);
              };
            },
            unitize: function (t, e) {
              return function (r) {
                return t(parseFloat(r)) + (e || tQ(r));
              };
            },
            interpolate: function t(e, r, n, i) {
              var s = isNaN(e + r)
                ? 0
                : function (t) {
                    return (1 - t) * e + t * r;
                  };
              if (!s) {
                var a,
                  o,
                  u,
                  l,
                  c,
                  f = k(e),
                  h = {};
                if ((!0 === n && (i = 1) && (n = null), f))
                  (e = { p: e }), (r = { p: r });
                else if (R(e) && !R(r)) {
                  for (o = 1, u = [], c = (l = e.length) - 2; o < l; o++)
                    u.push(t(e[o - 1], e[o]));
                  l--,
                    (s = function (t) {
                      var e = Math.min(c, ~~(t *= l));
                      return u[e](t - e);
                    }),
                    (n = r);
                } else i || (e = tv(R(e) ? [] : {}, e));
                if (!u) {
                  for (a in r) eD.call(h, e, a, "get", r[a]);
                  s = function (t) {
                    return e$(t, h) || (f ? e.p : e);
                  };
                }
              }
              return tj(n, s);
            },
            shuffle: t0,
          },
          install: q,
          effects: te,
          ticker: ef,
          updateRoot: eE.updateRoot,
          plugins: tt,
          globalTimeline: u,
          core: {
            PropTween: e2,
            globals: V,
            Tween: eU,
            Timeline: eE,
            Animation: eC,
            getCache: ta,
            _removeLinkedListItem: tk,
            reverting: function () {
              return a;
            },
            context: function (t) {
              return t && o && (o.data.push(t), (t._ctx = o)), o;
            },
            suppressOverwrites: function (t) {
              return (s = t);
            },
          },
        };
      tu("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return (rr[t] = eU[t]);
      }),
        ef.add(eE.updateRoot),
        (d = rr.to({}, { duration: 0 }));
      var rn = function (t, e) {
          for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
            r = r._next;
          return r;
        },
        ri = function (t, e) {
          var r,
            n,
            i,
            s = t._targets;
          for (r in e)
            for (n = s.length; n--; )
              (i = t._ptLookup[n][r]) &&
                (i = i.d) &&
                (i._pt && (i = rn(i, r)),
                i && i.modifier && i.modifier(e[r], t, s[n], r));
        },
        rs = function (t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, r, n) {
              n._onInit = function (t) {
                var n, i;
                if (
                  (k(r) &&
                    ((n = {}),
                    tu(r, function (t) {
                      return (n[t] = 1);
                    }),
                    (r = n)),
                  e)
                ) {
                  for (i in ((n = {}), r)) n[i] = e(r[i]);
                  r = n;
                }
                ri(t, r);
              };
            },
          };
        },
        ra =
          rr.registerPlugin(
            {
              name: "attr",
              init: function (t, e, r, n, i) {
                var s, a, o;
                for (s in ((this.tween = r), e))
                  (o = t.getAttribute(s) || ""),
                    ((a = this.add(
                      t,
                      "setAttribute",
                      (o || 0) + "",
                      e[s],
                      n,
                      i,
                      0,
                      0,
                      s
                    )).op = s),
                    (a.b = o),
                    this._props.push(s);
              },
              render: function (t, e) {
                for (var r = e._pt; r; )
                  a ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
              },
            },
            {
              name: "endArray",
              init: function (t, e) {
                for (var r = e.length; r--; )
                  this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
              },
            },
            rs("roundProps", t2),
            rs("modifiers"),
            rs("snap", t5)
          ) || rr;
      (eU.version = eE.version = ra.version = "3.12.7"),
        (h = 1),
        S() && eh(),
        ep.Power0,
        ep.Power1,
        ep.Power2,
        ep.Power3,
        ep.Power4,
        ep.Linear,
        ep.Quad,
        ep.Cubic,
        ep.Quart,
        ep.Quint,
        ep.Strong,
        ep.Elastic,
        ep.Back,
        ep.SteppedEase,
        ep.Bounce,
        ep.Sine,
        ep.Expo,
        ep.Circ;
      var ro,
        ru,
        rl,
        rc,
        rf,
        rh,
        rp,
        rd = {},
        r_ = 180 / Math.PI,
        rg = Math.PI / 180,
        rm = Math.atan2,
        rv = /([A-Z])/g,
        ry = /(left|right|width|margin|padding|x)/i,
        rx = /[\s,\(]\S/,
        rb = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        rw = function (t, e) {
          return e.set(
            e.t,
            e.p,
            Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
            e
          );
        },
        rT = function (t, e) {
          return e.set(
            e.t,
            e.p,
            1 === t ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
            e
          );
        },
        rk = function (t, e) {
          return e.set(
            e.t,
            e.p,
            t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
            e
          );
        },
        rM = function (t, e) {
          var r = e.s + e.c * t;
          e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
        },
        rO = function (t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e);
        },
        rC = function (t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
        },
        rE = function (t, e, r) {
          return (t.style[e] = r);
        },
        rA = function (t, e, r) {
          return t.style.setProperty(e, r);
        },
        rS = function (t, e, r) {
          return (t._gsap[e] = r);
        },
        rP = function (t, e, r) {
          return (t._gsap.scaleX = t._gsap.scaleY = r);
        },
        rD = function (t, e, r, n, i) {
          var s = t._gsap;
          (s.scaleX = s.scaleY = r), s.renderTransform(i, s);
        },
        rR = function (t, e, r, n, i) {
          var s = t._gsap;
          (s[e] = r), s.renderTransform(i, s);
        },
        rz = "transform",
        rF = rz + "Origin",
        rI = function t(e, r) {
          var n = this,
            i = this.target,
            s = i.style,
            a = i._gsap;
          if (e in rd && s) {
            if (((this.tfm = this.tfm || {}), "transform" === e))
              return rb.transform.split(",").forEach(function (e) {
                return t.call(n, e, r);
              });
            if (
              (~(e = rb[e] || e).indexOf(",")
                ? e.split(",").forEach(function (t) {
                    return (n.tfm[t] = r0(i, t));
                  })
                : (this.tfm[e] = a.x ? a[e] : r0(i, e)),
              e === rF && (this.tfm.zOrigin = a.zOrigin),
              this.props.indexOf(rz) >= 0)
            )
              return;
            a.svg &&
              ((this.svgo = i.getAttribute("data-svg-origin")),
              this.props.push(rF, r, "")),
              (e = rz);
          }
          (s || r) && this.props.push(e, r, s[e]);
        },
        rY = function (t) {
          t.translate &&
            (t.removeProperty("translate"),
            t.removeProperty("scale"),
            t.removeProperty("rotate"));
        },
        rB = function () {
          var t,
            e,
            r = this.props,
            n = this.target,
            i = n.style,
            s = n._gsap;
          for (t = 0; t < r.length; t += 3)
            r[t + 1]
              ? 2 === r[t + 1]
                ? n[r[t]](r[t + 2])
                : (n[r[t]] = r[t + 2])
              : r[t + 2]
              ? (i[r[t]] = r[t + 2])
              : i.removeProperty(
                  "--" === r[t].substr(0, 2)
                    ? r[t]
                    : r[t].replace(rv, "-$1").toLowerCase()
                );
          if (this.tfm) {
            for (e in this.tfm) s[e] = this.tfm[e];
            s.svg &&
              (s.renderTransform(),
              n.setAttribute("data-svg-origin", this.svgo || "")),
              ((t = rh()) && t.isStart) ||
                i[rz] ||
                (rY(i),
                s.zOrigin &&
                  i[rF] &&
                  ((i[rF] += " " + s.zOrigin + "px"),
                  (s.zOrigin = 0),
                  s.renderTransform()),
                (s.uncache = 1));
          }
        },
        rL = function (t, e) {
          var r = { target: t, props: [], revert: rB, save: rI };
          return (
            t._gsap || ra.core.getCache(t),
            e &&
              t.style &&
              t.nodeType &&
              e.split(",").forEach(function (t) {
                return r.save(t);
              }),
            r
          );
        },
        rN = function (t, e) {
          var r = ro.createElementNS
            ? ro.createElementNS(
                (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                t
              )
            : ro.createElement(t);
          return r && r.style ? r : ro.createElement(t);
        },
        rX = function t(e, r, n) {
          var i = getComputedStyle(e);
          return (
            i[r] ||
            i.getPropertyValue(r.replace(rv, "-$1").toLowerCase()) ||
            i.getPropertyValue(r) ||
            (!n && t(e, rq(r) || r, 1)) ||
            ""
          );
        },
        rU = "O,Moz,ms,Ms,Webkit".split(","),
        rq = function (t, e, r) {
          var n = (e || rc).style,
            i = 5;
          if (t in n && !r) return t;
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1);
            i-- && !(rU[i] + t in n);

          );
          return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? rU[i] : "") + t;
        },
        rH = function () {
          "undefined" != typeof window &&
            window.document &&
            ((ru = (ro = window.document).documentElement),
            (rc = rN("div") || { style: {} }),
            rN("div"),
            (rF = (rz = rq(rz)) + "Origin"),
            (rc.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (rp = !!rq("perspective")),
            (rh = ra.core.reverting),
            (rl = 1));
        },
        rW = function (t) {
          var e,
            r = t.ownerSVGElement,
            n = rN(
              "svg",
              (r && r.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
            ),
            i = t.cloneNode(!0);
          (i.style.display = "block"), n.appendChild(i), ru.appendChild(n);
          try {
            e = i.getBBox();
          } catch (t) {}
          return n.removeChild(i), ru.removeChild(n), e;
        },
        rV = function (t, e) {
          for (var r = e.length; r--; )
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
        },
        rj = function (t) {
          var e, r;
          try {
            e = t.getBBox();
          } catch (n) {
            (e = rW(t)), (r = 1);
          }
          return (
            (e && (e.width || e.height)) || r || (e = rW(t)),
            !e || e.width || e.x || e.y
              ? e
              : {
                  x: +rV(t, ["x", "cx", "x1"]) || 0,
                  y: +rV(t, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        rG = function (t) {
          return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && rj(t));
        },
        rQ = function (t, e) {
          if (e) {
            var r,
              n = t.style;
            e in rd && e !== rF && (e = rz),
              n.removeProperty
                ? (("ms" === (r = e.substr(0, 2)) ||
                    "webkit" === e.substr(0, 6)) &&
                    (e = "-" + e),
                  n.removeProperty(
                    "--" === r ? e : e.replace(rv, "-$1").toLowerCase()
                  ))
                : n.removeAttribute(e);
          }
        },
        rZ = function (t, e, r, n, i, s) {
          var a = new e2(t._pt, e, r, 0, 1, s ? rC : rO);
          return (t._pt = a), (a.b = n), (a.e = i), t._props.push(r), a;
        },
        r$ = { deg: 1, rad: 1, turn: 1 },
        rK = { grid: 1, flex: 1 },
        rJ = function t(e, r, n, i) {
          var s,
            a,
            o,
            u,
            l = parseFloat(n) || 0,
            c = (n + "").trim().substr((l + "").length) || "px",
            f = rc.style,
            h = ry.test(r),
            p = "svg" === e.tagName.toLowerCase(),
            d = (p ? "client" : "offset") + (h ? "Width" : "Height"),
            _ = "px" === i,
            g = "%" === i;
          if (i === c || !l || r$[i] || r$[c]) return l;
          if (
            ("px" === c || _ || (l = t(e, r, n, "px")),
            (u = e.getCTM && rG(e)),
            (g || "%" === c) && (rd[r] || ~r.indexOf("adius")))
          )
            return (
              (s = u ? e.getBBox()[h ? "width" : "height"] : e[d]),
              tl(g ? (l / s) * 100 : (l / 100) * s)
            );
          if (
            ((f[h ? "width" : "height"] = 100 + (_ ? c : i)),
            (a =
              ("rem" !== i && ~r.indexOf("adius")) ||
              ("em" === i && e.appendChild && !p)
                ? e
                : e.parentNode),
            u && (a = (e.ownerSVGElement || {}).parentNode),
            (a && a !== ro && a.appendChild) || (a = ro.body),
            (o = a._gsap) &&
              g &&
              o.width &&
              h &&
              o.time === ef.time &&
              !o.uncache)
          )
            return tl((l / o.width) * 100);
          if (g && ("height" === r || "width" === r)) {
            var m = e.style[r];
            (e.style[r] = 100 + i), (s = e[d]), m ? (e.style[r] = m) : rQ(e, r);
          } else
            (g || "%" === c) &&
              !rK[rX(a, "display")] &&
              (f.position = rX(e, "position")),
              a === e && (f.position = "static"),
              a.appendChild(rc),
              (s = rc[d]),
              a.removeChild(rc),
              (f.position = "absolute");
          return (
            h && g && (((o = ta(a)).time = ef.time), (o.width = a[d])),
            tl(_ ? (s * l) / 100 : s && l ? (100 / s) * l : 0)
          );
        },
        r0 = function (t, e, r, n) {
          var i;
          return (
            rl || rH(),
            e in rb &&
              "transform" !== e &&
              ~(e = rb[e]).indexOf(",") &&
              (e = e.split(",")[0]),
            rd[e] && "transform" !== e
              ? ((i = nr(t, n)),
                (i =
                  "transformOrigin" !== e
                    ? i[e]
                    : i.svg
                    ? i.origin
                    : nn(rX(t, rF)) + " " + i.zOrigin + "px"))
              : (!(i = t.style[e]) ||
                  "auto" === i ||
                  n ||
                  ~(i + "").indexOf("calc(")) &&
                (i =
                  (r8[e] && r8[e](t, e, r)) ||
                  rX(t, e) ||
                  to(t, e) ||
                  ("opacity" === e ? 1 : 0)),
            r && !~(i + "").trim().indexOf(" ") ? rJ(t, e, i, r) + r : i
          );
        },
        r1 = function (t, e, r, n) {
          if (!r || "none" === r) {
            var i = rq(e, t, 1),
              s = i && rX(t, i, 1);
            s && s !== r
              ? ((e = i), (r = s))
              : "borderColor" === e && (r = rX(t, "borderTopColor"));
          }
          var a,
            o,
            u,
            l,
            c,
            f,
            h,
            p,
            d,
            _,
            m,
            v = new e2(this._pt, t.style, e, 0, 1, eZ),
            y = 0,
            x = 0;
          if (
            ((v.b = r),
            (v.e = n),
            (r += ""),
            "auto" == (n += "") &&
              ((f = t.style[e]),
              (t.style[e] = n),
              (n = rX(t, e) || n),
              f ? (t.style[e] = f) : rQ(t, e)),
            ec((a = [r, n])),
            (r = a[0]),
            (n = a[1]),
            (u = r.match(I) || []),
            (n.match(I) || []).length)
          ) {
            for (; (o = I.exec(n)); )
              (h = o[0]),
                (d = n.substring(y, o.index)),
                c
                  ? (c = (c + 1) % 5)
                  : ("rgba(" === d.substr(-5) || "hsla(" === d.substr(-5)) &&
                    (c = 1),
                h !== (f = u[x++] || "") &&
                  ((l = parseFloat(f) || 0),
                  (m = f.substr((l + "").length)),
                  "=" === h.charAt(1) && (h = tf(l, h) + m),
                  (p = parseFloat(h)),
                  (_ = h.substr((p + "").length)),
                  (y = I.lastIndex - _.length),
                  _ ||
                    ((_ = _ || g.units[e] || m),
                    y !== n.length || ((n += _), (v.e += _))),
                  m !== _ && (l = rJ(t, e, f, _) || 0),
                  (v._pt = {
                    _next: v._pt,
                    p: d || 1 === x ? d : ",",
                    s: l,
                    c: p - l,
                    m: (c && c < 4) || "zIndex" === e ? Math.round : 0,
                  }));
            v.c = y < n.length ? n.substring(y, n.length) : "";
          } else v.r = "display" === e && "none" === n ? rC : rO;
          return B.test(n) && (v.e = 0), (this._pt = v), v;
        },
        r2 = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        r5 = function (t) {
          var e = t.split(" "),
            r = e[0],
            n = e[1] || "50%";
          return (
            ("top" === r || "bottom" === r || "left" === n || "right" === n) &&
              ((t = r), (r = n), (n = t)),
            (e[0] = r2[r] || r),
            (e[1] = r2[n] || n),
            e.join(" ")
          );
        },
        r3 = function (t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var r,
              n,
              i,
              s = e.t,
              a = s.style,
              o = e.u,
              u = s._gsap;
            if ("all" === o || !0 === o) (a.cssText = ""), (n = 1);
            else
              for (i = (o = o.split(",")).length; --i > -1; )
                rd[(r = o[i])] &&
                  ((n = 1), (r = "transformOrigin" === r ? rF : rz)),
                  rQ(s, r);
            n &&
              (rQ(s, rz),
              u &&
                (u.svg && s.removeAttribute("transform"),
                (a.scale = a.rotate = a.translate = "none"),
                nr(s, 1),
                (u.uncache = 1),
                rY(a)));
          }
        },
        r8 = {
          clearProps: function (t, e, r, n, i) {
            if ("isFromStart" !== i.data) {
              var s = (t._pt = new e2(t._pt, e, r, 0, 0, r3));
              return (
                (s.u = n), (s.pr = -10), (s.tween = i), t._props.push(r), 1
              );
            }
          },
        },
        r6 = [1, 0, 0, 1, 0, 0],
        r4 = {},
        r9 = function (t) {
          return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
        },
        r7 = function (t) {
          var e = rX(t, rz);
          return r9(e) ? r6 : e.substr(7).match(F).map(tl);
        },
        nt = function (t, e) {
          var r,
            n,
            i,
            s,
            a = t._gsap || ta(t),
            o = t.style,
            u = r7(t);
          return a.svg && t.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (u = [
                (i = t.transform.baseVal.consolidate().matrix).a,
                i.b,
                i.c,
                i.d,
                i.e,
                i.f,
              ]).join(",")
              ? r6
              : u
            : (u !== r6 ||
                t.offsetParent ||
                t === ru ||
                a.svg ||
                ((i = o.display),
                (o.display = "block"),
                ((r = t.parentNode) &&
                  (t.offsetParent || t.getBoundingClientRect().width)) ||
                  ((s = 1), (n = t.nextElementSibling), ru.appendChild(t)),
                (u = r7(t)),
                i ? (o.display = i) : rQ(t, "display"),
                s &&
                  (n
                    ? r.insertBefore(t, n)
                    : r
                    ? r.appendChild(t)
                    : ru.removeChild(t))),
              e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
        },
        ne = function (t, e, r, n, i, s) {
          var a,
            o,
            u,
            l,
            c = t._gsap,
            f = i || nt(t, !0),
            h = c.xOrigin || 0,
            p = c.yOrigin || 0,
            d = c.xOffset || 0,
            _ = c.yOffset || 0,
            g = f[0],
            m = f[1],
            v = f[2],
            y = f[3],
            x = f[4],
            b = f[5],
            w = e.split(" "),
            T = parseFloat(w[0]) || 0,
            k = parseFloat(w[1]) || 0;
          r
            ? f !== r6 &&
              (o = g * y - m * v) &&
              ((u = (y / o) * T + (-v / o) * k + (v * b - y * x) / o),
              (l = (-m / o) * T + (g / o) * k - (g * b - m * x) / o),
              (T = u),
              (k = l))
            : ((T =
                (a = rj(t)).x + (~w[0].indexOf("%") ? (T / 100) * a.width : T)),
              (k =
                a.y +
                (~(w[1] || w[0]).indexOf("%") ? (k / 100) * a.height : k))),
            n || (!1 !== n && c.smooth)
              ? ((x = T - h),
                (b = k - p),
                (c.xOffset = d + (x * g + b * v) - x),
                (c.yOffset = _ + (x * m + b * y) - b))
              : (c.xOffset = c.yOffset = 0),
            (c.xOrigin = T),
            (c.yOrigin = k),
            (c.smooth = !!n),
            (c.origin = e),
            (c.originIsAbsolute = !!r),
            (t.style[rF] = "0px 0px"),
            s &&
              (rZ(s, c, "xOrigin", h, T),
              rZ(s, c, "yOrigin", p, k),
              rZ(s, c, "xOffset", d, c.xOffset),
              rZ(s, c, "yOffset", _, c.yOffset)),
            t.setAttribute("data-svg-origin", T + " " + k);
        },
        nr = function (t, e) {
          var r = t._gsap || new eO(t);
          if ("x" in r && !e && !r.uncache) return r;
          var n,
            i,
            s,
            a,
            o,
            u,
            l,
            c,
            f,
            h,
            p,
            d,
            _,
            m,
            v,
            y,
            x,
            b,
            w,
            T,
            k,
            M,
            O,
            C,
            E,
            A,
            S,
            P,
            D,
            R,
            z,
            F,
            I = t.style,
            Y = r.scaleX < 0,
            B = getComputedStyle(t),
            L = rX(t, rF) || "0";
          return (
            (n = i = s = u = l = c = f = h = p = 0),
            (a = o = 1),
            (r.svg = !!(t.getCTM && rG(t))),
            B.translate &&
              (("none" !== B.translate ||
                "none" !== B.scale ||
                "none" !== B.rotate) &&
                (I[rz] =
                  ("none" !== B.translate
                    ? "translate3d(" +
                      (B.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                      ") "
                    : "") +
                  ("none" !== B.rotate ? "rotate(" + B.rotate + ") " : "") +
                  ("none" !== B.scale
                    ? "scale(" + B.scale.split(" ").join(",") + ") "
                    : "") +
                  ("none" !== B[rz] ? B[rz] : "")),
              (I.scale = I.rotate = I.translate = "none")),
            (m = nt(t, r.svg)),
            r.svg &&
              (r.uncache
                ? ((E = t.getBBox()),
                  (L = r.xOrigin - E.x + "px " + (r.yOrigin - E.y) + "px"),
                  (C = ""))
                : (C = !e && t.getAttribute("data-svg-origin")),
              ne(t, C || L, !!C || r.originIsAbsolute, !1 !== r.smooth, m)),
            (d = r.xOrigin || 0),
            (_ = r.yOrigin || 0),
            m !== r6 &&
              ((b = m[0]),
              (w = m[1]),
              (T = m[2]),
              (k = m[3]),
              (n = M = m[4]),
              (i = O = m[5]),
              6 === m.length
                ? ((a = Math.sqrt(b * b + w * w)),
                  (o = Math.sqrt(k * k + T * T)),
                  (u = b || w ? rm(w, b) * r_ : 0),
                  (f = T || k ? rm(T, k) * r_ + u : 0) &&
                    (o *= Math.abs(Math.cos(f * rg))),
                  r.svg &&
                    ((n -= d - (d * b + _ * T)), (i -= _ - (d * w + _ * k))))
                : ((F = m[6]),
                  (R = m[7]),
                  (S = m[8]),
                  (P = m[9]),
                  (D = m[10]),
                  (z = m[11]),
                  (n = m[12]),
                  (i = m[13]),
                  (s = m[14]),
                  (l = (v = rm(F, D)) * r_),
                  v &&
                    ((C = M * (y = Math.cos(-v)) + S * (x = Math.sin(-v))),
                    (E = O * y + P * x),
                    (A = F * y + D * x),
                    (S = -(M * x) + S * y),
                    (P = -(O * x) + P * y),
                    (D = -(F * x) + D * y),
                    (z = -(R * x) + z * y),
                    (M = C),
                    (O = E),
                    (F = A)),
                  (c = (v = rm(-T, D)) * r_),
                  v &&
                    ((C = b * (y = Math.cos(-v)) - S * (x = Math.sin(-v))),
                    (E = w * y - P * x),
                    (A = T * y - D * x),
                    (z = k * x + z * y),
                    (b = C),
                    (w = E),
                    (T = A)),
                  (u = (v = rm(w, b)) * r_),
                  v &&
                    ((C = b * (y = Math.cos(v)) + w * (x = Math.sin(v))),
                    (E = M * y + O * x),
                    (w = w * y - b * x),
                    (O = O * y - M * x),
                    (b = C),
                    (M = E)),
                  l &&
                    Math.abs(l) + Math.abs(u) > 359.9 &&
                    ((l = u = 0), (c = 180 - c)),
                  (a = tl(Math.sqrt(b * b + w * w + T * T))),
                  (o = tl(Math.sqrt(O * O + F * F))),
                  (f = Math.abs((v = rm(M, O))) > 2e-4 ? v * r_ : 0),
                  (p = z ? 1 / (z < 0 ? -z : z) : 0)),
              r.svg &&
                ((C = t.getAttribute("transform")),
                (r.forceCSS =
                  t.setAttribute("transform", "") || !r9(rX(t, rz))),
                C && t.setAttribute("transform", C))),
            Math.abs(f) > 90 &&
              270 > Math.abs(f) &&
              (Y
                ? ((a *= -1),
                  (f += u <= 0 ? 180 : -180),
                  (u += u <= 0 ? 180 : -180))
                : ((o *= -1), (f += f <= 0 ? 180 : -180))),
            (e = e || r.uncache),
            (r.x =
              n -
              ((r.xPercent =
                n &&
                ((!e && r.xPercent) ||
                  (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
                ? (t.offsetWidth * r.xPercent) / 100
                : 0) +
              "px"),
            (r.y =
              i -
              ((r.yPercent =
                i &&
                ((!e && r.yPercent) ||
                  (Math.round(t.offsetHeight / 2) === Math.round(-i)
                    ? -50
                    : 0)))
                ? (t.offsetHeight * r.yPercent) / 100
                : 0) +
              "px"),
            (r.z = s + "px"),
            (r.scaleX = tl(a)),
            (r.scaleY = tl(o)),
            (r.rotation = tl(u) + "deg"),
            (r.rotationX = tl(l) + "deg"),
            (r.rotationY = tl(c) + "deg"),
            (r.skewX = f + "deg"),
            (r.skewY = h + "deg"),
            (r.transformPerspective = p + "px"),
            (r.zOrigin =
              parseFloat(L.split(" ")[2]) || (!e && r.zOrigin) || 0) &&
              (I[rF] = nn(L)),
            (r.xOffset = r.yOffset = 0),
            (r.force3D = g.force3D),
            (r.renderTransform = r.svg ? nu : rp ? no : ns),
            (r.uncache = 0),
            r
          );
        },
        nn = function (t) {
          return (t = t.split(" "))[0] + " " + t[1];
        },
        ni = function (t, e, r) {
          var n = tQ(e);
          return tl(parseFloat(e) + parseFloat(rJ(t, "x", r + "px", n))) + n;
        },
        ns = function (t, e) {
          (e.z = "0px"),
            (e.rotationY = e.rotationX = "0deg"),
            (e.force3D = 0),
            no(t, e);
        },
        na = "0deg",
        no = function (t, e) {
          var r = e || this,
            n = r.xPercent,
            i = r.yPercent,
            s = r.x,
            a = r.y,
            o = r.z,
            u = r.rotation,
            l = r.rotationY,
            c = r.rotationX,
            f = r.skewX,
            h = r.skewY,
            p = r.scaleX,
            d = r.scaleY,
            _ = r.transformPerspective,
            g = r.force3D,
            m = r.target,
            v = r.zOrigin,
            y = "",
            x = ("auto" === g && t && 1 !== t) || !0 === g;
          if (v && (c !== na || l !== na)) {
            var b,
              w = parseFloat(l) * rg,
              T = Math.sin(w),
              k = Math.cos(w);
            (s = ni(m, s, -(T * (b = Math.cos((w = parseFloat(c) * rg))) * v))),
              (a = ni(m, a, -(-Math.sin(w) * v))),
              (o = ni(m, o, -(k * b * v) + v));
          }
          "0px" !== _ && (y += "perspective(" + _ + ") "),
            (n || i) && (y += "translate(" + n + "%, " + i + "%) "),
            (x || "0px" !== s || "0px" !== a || "0px" !== o) &&
              (y +=
                "0px" !== o || x
                  ? "translate3d(" + s + ", " + a + ", " + o + ") "
                  : "translate(" + s + ", " + a + ") "),
            u !== na && (y += "rotate(" + u + ") "),
            l !== na && (y += "rotateY(" + l + ") "),
            c !== na && (y += "rotateX(" + c + ") "),
            (f !== na || h !== na) && (y += "skew(" + f + ", " + h + ") "),
            (1 !== p || 1 !== d) && (y += "scale(" + p + ", " + d + ") "),
            (m.style[rz] = y || "translate(0, 0)");
        },
        nu = function (t, e) {
          var r,
            n,
            i,
            s,
            a,
            o = e || this,
            u = o.xPercent,
            l = o.yPercent,
            c = o.x,
            f = o.y,
            h = o.rotation,
            p = o.skewX,
            d = o.skewY,
            _ = o.scaleX,
            g = o.scaleY,
            m = o.target,
            v = o.xOrigin,
            y = o.yOrigin,
            x = o.xOffset,
            b = o.yOffset,
            w = o.forceCSS,
            T = parseFloat(c),
            k = parseFloat(f);
          (h = parseFloat(h)),
            (p = parseFloat(p)),
            (d = parseFloat(d)) && ((p += d = parseFloat(d)), (h += d)),
            h || p
              ? ((h *= rg),
                (p *= rg),
                (r = Math.cos(h) * _),
                (n = Math.sin(h) * _),
                (i = -(Math.sin(h - p) * g)),
                (s = Math.cos(h - p) * g),
                p &&
                  ((d *= rg),
                  (i *= a = Math.sqrt(1 + (a = Math.tan(p - d)) * a)),
                  (s *= a),
                  d &&
                    ((r *= a = Math.sqrt(1 + (a = Math.tan(d)) * a)),
                    (n *= a))),
                (r = tl(r)),
                (n = tl(n)),
                (i = tl(i)),
                (s = tl(s)))
              : ((r = _), (s = g), (n = i = 0)),
            ((T && !~(c + "").indexOf("px")) ||
              (k && !~(f + "").indexOf("px"))) &&
              ((T = rJ(m, "x", c, "px")), (k = rJ(m, "y", f, "px"))),
            (v || y || x || b) &&
              ((T = tl(T + v - (v * r + y * i) + x)),
              (k = tl(k + y - (v * n + y * s) + b))),
            (u || l) &&
              ((T = tl(T + (u / 100) * (a = m.getBBox()).width)),
              (k = tl(k + (l / 100) * a.height))),
            (a =
              "matrix(" +
              r +
              "," +
              n +
              "," +
              i +
              "," +
              s +
              "," +
              T +
              "," +
              k +
              ")"),
            m.setAttribute("transform", a),
            w && (m.style[rz] = a);
        },
        nl = function (t, e, r, n, i) {
          var s,
            a,
            o = k(i),
            u = parseFloat(i) * (o && ~i.indexOf("rad") ? r_ : 1) - n,
            l = n + u + "deg";
          return (
            o &&
              ("short" === (s = i.split("_")[1]) &&
                (u %= 360) != u % 180 &&
                (u += u < 0 ? 360 : -360),
              "cw" === s && u < 0
                ? (u = ((u + 36e9) % 360) - 360 * ~~(u / 360))
                : "ccw" === s &&
                  u > 0 &&
                  (u = ((u - 36e9) % 360) - 360 * ~~(u / 360))),
            (t._pt = a = new e2(t._pt, e, r, n, u, rT)),
            (a.e = l),
            (a.u = "deg"),
            t._props.push(r),
            a
          );
        },
        nc = function (t, e) {
          for (var r in e) t[r] = e[r];
          return t;
        },
        nf = function (t, e, r) {
          var n,
            i,
            s,
            a,
            o,
            u,
            l,
            c = nc({}, r._gsap),
            f = r.style;
          for (i in (c.svg
            ? ((s = r.getAttribute("transform")),
              r.setAttribute("transform", ""),
              (f[rz] = e),
              (n = nr(r, 1)),
              rQ(r, rz),
              r.setAttribute("transform", s))
            : ((s = getComputedStyle(r)[rz]),
              (f[rz] = e),
              (n = nr(r, 1)),
              (f[rz] = s)),
          rd))
            (s = c[i]) !== (a = n[i]) &&
              0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) &&
              ((o = tQ(s) !== (l = tQ(a)) ? rJ(r, i, s, l) : parseFloat(s)),
              (u = parseFloat(a)),
              (t._pt = new e2(t._pt, n, i, o, u - o, rw)),
              (t._pt.u = l || 0),
              t._props.push(i));
          nc(n, c);
        };
      tu("padding,margin,Width,Radius", function (t, e) {
        var r = "Right",
          n = "Bottom",
          i = "Left",
          s = (
            e < 3 ? ["Top", r, n, i] : ["Top" + i, "Top" + r, n + r, n + i]
          ).map(function (r) {
            return e < 2 ? t + r : "border" + r + t;
          });
        r8[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
          var a, o;
          if (arguments.length < 4)
            return 5 ===
              (o = (a = s.map(function (e) {
                return r0(t, e, r);
              })).join(" ")).split(a[0]).length
              ? a[0]
              : o;
          (a = (n + "").split(" ")),
            (o = {}),
            s.forEach(function (t, e) {
              return (o[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
            }),
            t.init(e, o, i);
        };
      });
      var nh = {
        name: "css",
        register: rH,
        targetTest: function (t) {
          return t.style && t.nodeType;
        },
        init: function (t, e, r, n, i) {
          var s,
            a,
            o,
            u,
            l,
            c,
            f,
            h,
            p,
            d,
            _,
            m,
            v,
            y,
            x,
            b,
            w = this._props,
            T = t.style,
            M = r.vars.startAt;
          for (f in (rl || rH(),
          (this.styles = this.styles || rL(t)),
          (b = this.styles.props),
          (this.tween = r),
          e))
            if (
              "autoRound" !== f &&
              ((a = e[f]), !(tt[f] && ez(f, e, r, n, t, i)))
            ) {
              if (
                ((l = typeof a),
                (c = r8[f]),
                "function" === l && (l = typeof (a = a.call(r, n, t, i))),
                "string" === l && ~a.indexOf("random(") && (a = t6(a)),
                c)
              )
                c(this, t, f, a, r) && (x = 1);
              else if ("--" === f.substr(0, 2))
                (s = (getComputedStyle(t).getPropertyValue(f) + "").trim()),
                  (a += ""),
                  (eu.lastIndex = 0),
                  eu.test(s) || ((h = tQ(s)), (p = tQ(a))),
                  p ? h !== p && (s = rJ(t, f, s, p) + p) : h && (a += h),
                  this.add(T, "setProperty", s, a, n, i, 0, 0, f),
                  w.push(f),
                  b.push(f, 0, T[f]);
              else if ("undefined" !== l) {
                if (
                  (M && f in M
                    ? (k(
                        (s =
                          "function" == typeof M[f]
                            ? M[f].call(r, n, t, i)
                            : M[f])
                      ) &&
                        ~s.indexOf("random(") &&
                        (s = t6(s)),
                      tQ(s + "") ||
                        "auto" === s ||
                        (s += g.units[f] || tQ(r0(t, f)) || ""),
                      "=" === (s + "").charAt(1) && (s = r0(t, f)))
                    : (s = r0(t, f)),
                  (u = parseFloat(s)),
                  (d =
                    "string" === l && "=" === a.charAt(1) && a.substr(0, 2)) &&
                    (a = a.substr(2)),
                  (o = parseFloat(a)),
                  f in rb &&
                    ("autoAlpha" === f &&
                      (1 === u &&
                        "hidden" === r0(t, "visibility") &&
                        o &&
                        (u = 0),
                      b.push("visibility", 0, T.visibility),
                      rZ(
                        this,
                        T,
                        "visibility",
                        u ? "inherit" : "hidden",
                        o ? "inherit" : "hidden",
                        !o
                      )),
                    "scale" !== f &&
                      "transform" !== f &&
                      ~(f = rb[f]).indexOf(",") &&
                      (f = f.split(",")[0])),
                  (_ = f in rd))
                ) {
                  if (
                    (this.styles.save(f),
                    m ||
                      (((v = t._gsap).renderTransform && !e.parseTransform) ||
                        nr(t, e.parseTransform),
                      (y = !1 !== e.smoothOrigin && v.smooth),
                      ((m = this._pt =
                        new e2(
                          this._pt,
                          T,
                          rz,
                          0,
                          1,
                          v.renderTransform,
                          v,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === f)
                  )
                    (this._pt = new e2(
                      this._pt,
                      v,
                      "scaleY",
                      v.scaleY,
                      (d ? tf(v.scaleY, d + o) : o) - v.scaleY || 0,
                      rw
                    )),
                      (this._pt.u = 0),
                      w.push("scaleY", f),
                      (f += "X");
                  else if ("transformOrigin" === f) {
                    b.push(rF, 0, T[rF]),
                      (a = r5(a)),
                      v.svg
                        ? ne(t, a, 0, y, 0, this)
                        : ((p = parseFloat(a.split(" ")[2]) || 0) !==
                            v.zOrigin && rZ(this, v, "zOrigin", v.zOrigin, p),
                          rZ(this, T, f, nn(s), nn(a)));
                    continue;
                  } else if ("svgOrigin" === f) {
                    ne(t, a, 1, y, 0, this);
                    continue;
                  } else if (f in r4) {
                    nl(this, v, f, u, d ? tf(u, d + a) : a);
                    continue;
                  } else if ("smoothOrigin" === f) {
                    rZ(this, v, "smooth", v.smooth, a);
                    continue;
                  } else if ("force3D" === f) {
                    v[f] = a;
                    continue;
                  } else if ("transform" === f) {
                    nf(this, a, t);
                    continue;
                  }
                } else f in T || (f = rq(f) || f);
                if (
                  _ ||
                  ((o || 0 === o) && (u || 0 === u) && !rx.test(a) && f in T)
                )
                  (h = (s + "").substr((u + "").length)),
                    o || (o = 0),
                    (p = tQ(a) || (f in g.units ? g.units[f] : h)),
                    h !== p && (u = rJ(t, f, s, p)),
                    (this._pt = new e2(
                      this._pt,
                      _ ? v : T,
                      f,
                      u,
                      (d ? tf(u, d + o) : o) - u,
                      _ || ("px" !== p && "zIndex" !== f) || !1 === e.autoRound
                        ? rw
                        : rM
                    )),
                    (this._pt.u = p || 0),
                    h !== p &&
                      "%" !== p &&
                      ((this._pt.b = s), (this._pt.r = rk));
                else if (f in T) r1.call(this, t, f, s, d ? d + a : a);
                else if (f in t) this.add(t, f, s || t[f], d ? d + a : a, n, i);
                else if ("parseTransform" !== f) {
                  H(f, a);
                  continue;
                }
                _ ||
                  (f in T
                    ? b.push(f, 0, T[f])
                    : "function" == typeof t[f]
                    ? b.push(f, 2, t[f]())
                    : b.push(f, 1, s || t[f])),
                  w.push(f);
              }
            }
          x && e1(this);
        },
        render: function (t, e) {
          if (e.tween._time || !rh())
            for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
          else e.styles.revert();
        },
        get: r0,
        aliases: rb,
        getSetter: function (t, e, r) {
          var n = rb[e];
          return (
            n && 0 > n.indexOf(",") && (e = n),
            e in rd && e !== rF && (t._gsap.x || r0(t, "x"))
              ? r && rf === r
                ? "scale" === e
                  ? rP
                  : rS
                : ((rf = r || {}), "scale" === e ? rD : rR)
              : t.style && !C(t.style[e])
              ? rE
              : ~e.indexOf("-")
              ? rA
              : ej(t, e)
          );
        },
        core: { _removeProperty: rQ, _getMatrix: nt },
      };
      (ra.utils.checkPrefix = rq),
        (ra.core.getStyleSaver = rL),
        (function (t, e, r, n) {
          var i = tu(t + "," + e + "," + r, function (t) {
            rd[t] = 1;
          });
          tu(e, function (t) {
            (g.units[t] = "deg"), (r4[t] = 1);
          }),
            (rb[i[13]] = t + "," + e),
            tu(n, function (t) {
              var e = t.split(":");
              rb[e[1]] = i[e[0]];
            });
        })(
          "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
          "rotation,rotationX,rotationY,skewX,skewY",
          "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
        ),
        tu(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (t) {
            g.units[t] = "px";
          }
        ),
        ra.registerPlugin(nh);
      var np = ra.registerPlugin(nh) || ra;
      np.core.Tween;
    },
  },
]);
