"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [262],
  {
    1262: (e, a, l) => {
      l.r(a), l.d(a, { PfpLeftPanel: () => d });
      var t = l(5155),
        i = l(2115),
        s = l(5565),
        r = l(3478),
        o = l(4644);
      let n = (e) => {
        let {
          selectedAssets: a,
          previewRef: l,
          handleRandomize: i,
          downloadImage: n,
          formattedCombinations: d,
        } = e;
        return (0, t.jsx)("div", {
          className: "lg:w-6/12 lg:sticky lg:top-6 lg:self-start",
          children: (0, t.jsxs)(r.P.div, {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.3 },
            className: "p-4 rounded-2xl bg-neutral-200 bg-opacity-90",
            style: {
              border: "3px solid #fff",
              borderRadius: "16px",
              boxShadow:
                "0 0 0 2px #4a3728, 4px 4px 0 0 #4a3728, 0 0 20px rgba(0,0,0,0.2)",
            },
            children: [
              (0, t.jsx)("div", {
                className:
                  "border-2 border-black rounded-xl shadow-xl mb-4 bg-white/50 p-2",
                children: (0, t.jsxs)(r.P.div, {
                  ref: l,
                  className:
                    "relative bg-white rounded-lg overflow-hidden mx-auto",
                  style: {
                    aspectRatio: "1/1",
                    width: "100%",
                    boxShadow: "inset 0 0 20px rgba(0,0,0,0.1)",
                  },
                  whileHover: { scale: 1.02 },
                  transition: { duration: 0.2 },
                  children: [
                    (0, t.jsx)("div", {
                      className: "absolute inset-0 opacity-5",
                      style: {
                        backgroundImage:
                          "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      },
                    }),
                    o.FS.map(
                      (e) =>
                        a[e] &&
                        (0, t.jsx)(
                          s.default,
                          {
                            src: a[e],
                            alt: "".concat(e, " layer"),
                            fill: !0,
                            className: "object-cover",
                            priority: !0,
                            style: { position: "absolute", top: 0, left: 0 },
                          },
                          e
                        )
                    ),
                  ],
                }),
              }),
              (0, t.jsxs)("div", {
                className: "lg:static lg:z-0",
                children: [
                  (0, t.jsxs)("div", {
                    className: "flex gap-4 mb-4 lg:my-2 px-2",
                    children: [
                      (0, t.jsx)(r.P.button, {
                        onClick: i,
                        className:
                          "flex-1 py-3 bg-indigo-300 text-black font-chalk text-xl rounded-full border-2 border-black transition-transform shadow-lg hover:bg-indigo-400",
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        children: "Randomize",
                      }),
                      (0, t.jsx)(r.P.button, {
                        onClick: n,
                        className:
                          "flex-1 py-3 bg-green-300 text-black font-chalk text-xl rounded-full border-2 border-black transition-transform shadow-lg hover:bg-green-400",
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        children: "Download",
                      }),
                    ],
                  }),
                  (0, t.jsx)(r.P.div, {
                    className: "text-center mb-2",
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.3 },
                    children: (0, t.jsxs)("p", {
                      className: "font-chalk text-lg text-black",
                      children: [d, " unique combinations possible!"],
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      n.displayName = "PfpLeftPanel";
      let d = i.memo(n);
    },
  },
]);
