"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [809],
  {
    5809: (e, t, l) => {
      l.r(t), l.d(t, { PfpRightPanel: () => j });
      var a = l(5155),
        n = l(2115),
        r = l(5565),
        i = l(3478),
        o = l(4710),
        s = l(9234),
        c = l(9656),
        d = l(7249);
      class u extends n.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = t.offsetParent,
              l = (e instanceof HTMLElement && e.offsetWidth) || 0,
              a = this.props.sizeRef.current;
            (a.height = t.offsetHeight || 0),
              (a.width = t.offsetWidth || 0),
              (a.top = t.offsetTop),
              (a.left = t.offsetLeft),
              (a.right = l - a.width - a.left);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function p(e) {
        let { children: t, isPresent: l, anchorX: r } = e,
          i = (0, n.useId)(),
          o = (0, n.useRef)(null),
          s = (0, n.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
          { nonce: c } = (0, n.useContext)(d.Q);
        return (
          (0, n.useInsertionEffect)(() => {
            let { width: e, height: t, top: a, left: n, right: d } = s.current;
            if (l || !o.current || !e || !t) return;
            o.current.dataset.motionPopId = i;
            let u = document.createElement("style");
            return (
              c && (u.nonce = c),
              document.head.appendChild(u),
              u.sheet &&
                u.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      i,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(e, "px !important;\n            height: ")
                    .concat(t, "px !important;\n            ")
                    .concat(
                      "left" === r ? "left: ".concat(n) : "right: ".concat(d),
                      "px !important;\n            top: "
                    )
                    .concat(a, "px !important;\n          }\n        ")
                ),
              () => {
                document.head.removeChild(u);
              }
            );
          }, [l]),
          (0, a.jsx)(u, {
            isPresent: l,
            childRef: o,
            sizeRef: s,
            children: n.cloneElement(t, { ref: o }),
          })
        );
      }
      let h = (e) => {
        let {
            children: t,
            initial: l,
            isPresent: r,
            onExitComplete: i,
            custom: o,
            presenceAffectsLayout: d,
            mode: u,
            anchorX: h,
          } = e,
          x = (0, s.M)(f),
          g = (0, n.useId)(),
          m = (0, n.useCallback)(
            (e) => {
              for (let t of (x.set(e, !0), x.values())) if (!t) return;
              i && i();
            },
            [x, i]
          ),
          b = (0, n.useMemo)(
            () => ({
              id: g,
              initial: l,
              isPresent: r,
              custom: o,
              onExitComplete: m,
              register: (e) => (x.set(e, !1), () => x.delete(e)),
            }),
            d ? [Math.random(), m] : [r, m]
          );
        return (
          (0, n.useMemo)(() => {
            x.forEach((e, t) => x.set(t, !1));
          }, [r]),
          n.useEffect(() => {
            r || x.size || !i || i();
          }, [r]),
          "popLayout" === u &&
            (t = (0, a.jsx)(p, { isPresent: r, anchorX: h, children: t })),
          (0, a.jsx)(c.t.Provider, { value: b, children: t })
        );
      };
      function f() {
        return new Map();
      }
      var x = l(5087);
      let g = (e) => e.key || "";
      function m(e) {
        let t = [];
        return (
          n.Children.forEach(e, (e) => {
            (0, n.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var b = l(5403);
      let v = (e) => {
        let {
            children: t,
            custom: l,
            initial: r = !0,
            onExitComplete: i,
            presenceAffectsLayout: c = !0,
            mode: d = "sync",
            propagate: u = !1,
            anchorX: p = "left",
          } = e,
          [f, v] = (0, x.xQ)(u),
          w = (0, n.useMemo)(() => m(t), [t]),
          y = u && !f ? [] : w.map(g),
          j = (0, n.useRef)(!0),
          k = (0, n.useRef)(w),
          N = (0, s.M)(() => new Map()),
          [P, R] = (0, n.useState)(w),
          [C, E] = (0, n.useState)(w);
        (0, b.E)(() => {
          (j.current = !1), (k.current = w);
          for (let e = 0; e < C.length; e++) {
            let t = g(C[e]);
            y.includes(t) ? N.delete(t) : !0 !== N.get(t) && N.set(t, !1);
          }
        }, [C, y.length, y.join("-")]);
        let z = [];
        if (w !== P) {
          let e = [...w];
          for (let t = 0; t < C.length; t++) {
            let l = C[t],
              a = g(l);
            y.includes(a) || (e.splice(t, 0, l), z.push(l));
          }
          return "wait" === d && z.length && (e = z), E(m(e)), R(w), null;
        }
        let { forceRender: M } = (0, n.useContext)(o.L);
        return (0, a.jsx)(a.Fragment, {
          children: C.map((e) => {
            let t = g(e),
              n = (!u || !!f) && (w === C || y.includes(t));
            return (0, a.jsx)(
              h,
              {
                isPresent: n,
                initial: (!j.current || !!r) && void 0,
                custom: l,
                presenceAffectsLayout: c,
                mode: d,
                onExitComplete: n
                  ? void 0
                  : () => {
                      if (!N.has(t)) return;
                      N.set(t, !0);
                      let e = !0;
                      N.forEach((t) => {
                        t || (e = !1);
                      }),
                        e &&
                          (null == M || M(),
                          E(k.current),
                          u && (null == v || v()),
                          i && i());
                    },
                anchorX: p,
                children: e,
              },
              t
            );
          }),
        });
      };
      var w = l(4644);
      let y = (e) => {
        var t, l;
        let {
          assets: n,
          selectedTab: o,
          selectedAssets: s,
          scrollContainerRef: c,
          handleSelectTab: d,
          handleSelectAsset: u,
        } = e;
        return (0, a.jsxs)("div", {
          className: "lg:w-6/12 mt-8 lg:mt-0 lg:flex lg:flex-col",
          children: [
            (0, a.jsx)(i.P.div, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: 0.1 },
              className: "p-4 rounded-2xl bg-neutral-200 bg-opacity-90 lg:mb-4",
              style: {
                border: "3px solid #fff",
                borderRadius: "16px",
                boxShadow:
                  "0 0 0 2px #4a3728, 4px 4px 0 0 #4a3728, 0 0 20px rgba(0,0,0,0.2)",
              },
              children: (0, a.jsx)("div", {
                className: "flex flex-wrap gap-3 justify-center",
                children: w.R6.map((e) =>
                  (0, a.jsx)(
                    i.P.button,
                    {
                      onClick: () => d(e.id),
                      className:
                        "px-6 py-3 rounded-full font-chalk text-xl transition border-2 border-black ".concat(
                          o === e.id
                            ? "bg-yellow-300 text-black shadow-lg scale-105"
                            : "bg-blue-100 text-black hover:bg-blue-200"
                        ),
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      children: e.name,
                    },
                    e.id
                  )
                ),
              }),
            }),
            (0, a.jsx)(i.P.div, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: 0.2 },
              ref: c,
              className:
                "mt-4 p-4 rounded-2xl bg-neutral-200 bg-opacity-80 flex-1 overflow-y-auto overscroll-auto touch-pan-y",
              style: {
                border: "3px solid #fff",
                borderRadius: "16px",
                boxShadow:
                  "0 0 0 2px #4a3728, 4px 4px 0 0 #4a3728, 0 0 20px rgba(0,0,0,0.2)",
                minHeight: "700px",
                maxHeight: "900px",
              },
              children: (0, a.jsx)(v, {
                mode: "wait",
                children: (0, a.jsxs)(
                  i.P.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    transition: { duration: 0.2 },
                    className:
                      "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-4",
                    children: [
                      !(null === (t = w.R6.find((e) => e.id === o)) ||
                      void 0 === t
                        ? void 0
                        : t.required) &&
                        (0, a.jsx)(i.P.button, {
                          onClick: () => u(o, null),
                          className:
                            "aspect-square h-auto flex items-center justify-center rounded-xl border-3 transition-all ".concat(
                              null === s[o]
                                ? "border-blue-600 bg-blue-50 shadow-lg"
                                : "border-black border-dashed bg-gray-100 hover:bg-gray-200"
                            ),
                          whileHover: { scale: 1.03 },
                          whileTap: { scale: 0.97 },
                          children: (0, a.jsx)("span", {
                            className: "text-black text-lg font-bold",
                            children: "None",
                          }),
                        }),
                      null === (l = n[o]) || void 0 === l
                        ? void 0
                        : l.map((e) => {
                            let t = w.FS.map((t) => ({
                              path: t === o ? e.path : s[t],
                              zIndex: w.FS.indexOf(t),
                            }));
                            return (0, a.jsxs)(
                              i.P.button,
                              {
                                onClick: (t) => {
                                  u(o, e.path), t.currentTarget.blur();
                                },
                                className:
                                  "relative overflow-hidden rounded-xl transition-all bg-white ".concat(
                                    s[o] === e.path
                                      ? "ring-4 ring-blue-500 shadow-xl scale-105 z-10"
                                      : "border-2 border-black hover:shadow-xl",
                                    " aspect-square"
                                  ),
                                whileHover: { scale: 1.03 },
                                whileTap: { scale: 0.97 },
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "w-full h-full",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: "absolute inset-0 opacity-5",
                                        style: {
                                          backgroundImage:
                                            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                                          backgroundSize: "20px 20px",
                                        },
                                      }),
                                      t.map(
                                        (e, t) =>
                                          e.path &&
                                          (0, a.jsx)(
                                            r.default,
                                            {
                                              src: e.path,
                                              alt: "".concat(o, " preview"),
                                              fill: !0,
                                              className: "object-cover",
                                              loading: t < 2 ? "eager" : "lazy",
                                              style: {
                                                position: "absolute",
                                                zIndex: e.zIndex,
                                                imageRendering: "crisp-edges",
                                              },
                                            },
                                            "preview-"
                                              .concat(t, "-")
                                              .concat(e.path)
                                          )
                                      ),
                                    ],
                                  }),
                                  s[o] === e.path &&
                                    (0, a.jsx)("div", {
                                      className:
                                        "absolute bottom-2 right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center",
                                      children: (0, a.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-5 w-5 text-white",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        children: (0, a.jsx)("path", {
                                          fillRule: "evenodd",
                                          d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                          clipRule: "evenodd",
                                        }),
                                      }),
                                    }),
                                ],
                              },
                              e.path
                            );
                          }),
                    ],
                  },
                  o
                ),
              }),
            }),
          ],
        });
      };
      y.displayName = "PfpRightPanel";
      let j = n.memo(y);
    },
  },
]);
