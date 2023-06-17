(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [734],
  {
    71047: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Q;
        },
      });
      var r = n(22830),
        a = n(35250),
        i = n(61888),
        o = n(70079),
        s = n(48727),
        l = n(39324),
        u = n(71209),
        c = n(3001),
        d = n(75908),
        m = n(35290),
        f = n(82841),
        h = n(36218),
        g = n(32787),
        p = n(85023),
        v = n(64135),
        x = n(88038),
        b = n(59114),
        y = (0, c.vU)({
          welcomeBack: {
            id: "existingUserAgeConfirmationModal.welcomeBack",
            defaultMessage: "Welcome back, Italy!",
            description:
              "Title for the age confirmation modal for Italian users",
          },
          ageRequirementsButton: {
            id: "existingUserAgeConfirmationModal.ageRequirementsButton",
            defaultMessage: "I meet OpenAI's age requirements",
            description:
              "Primary button to confirm the user meets the age requirements",
          },
          logoutButton: {
            id: "existingUserAgeConfirmationModal.logoutButton",
            defaultMessage: "Log out",
            description: "Secondary button to log out of the platform",
          },
          announcementParagraph1: {
            id: "existingUserAgeConfirmationModal.announcementParagraph1",
            defaultMessage:
              "We’re pleased to resume offering ChatGPT in Italy. To continue on ChatGPT, please confirm that you are 18+ or are 13+ and have consent from your parent or guardian to use ChatGPT.",
            description:
              "First paragraph of the announcement, explaining the age requirements",
          },
          privacyPolicyLink: {
            id: "existingUserAgeConfirmationModal.privacyPolicyLink",
            defaultMessage: "Privacy policy",
            description: "Link to the privacy policy",
          },
          helpCenterArticleLink: {
            id: "existingUserAgeConfirmationModal.helpCenterArticleLink",
            defaultMessage: "this help center article",
            description:
              "Link to the help center article about ChatGPT development",
          },
          announcementParagraph2: {
            id: "existingUserAgeConfirmationModal.announcementParagraph2",
            defaultMessage:
              "For information about how we collect and use personal data, please see our {privacyPolicyLink}. For information about how we develop and train ChatGPT, please see {helpCenterArticleLink}.",
            description:
              "Second paragraph of the announcement, providing links to more information",
          },
        }),
        j = "2023-04-25",
        k = "".concat("oai/apps/hasSeenAgeConfirmationModal", "/").concat(j);
      function w(e) {
        var t = e.onClose,
          n = (0, d.Z)(),
          r = (0, o.useCallback)(
            function () {
              p.m.setItem(k, !0), t();
            },
            [t]
          ),
          l = (0, f.WS)();
        return (
          (0, o.useEffect)(function () {
            l && l(h.s6.ageConfirmationModal, { content: j });
          }, []),
          (0, a.jsx)(s.Z, {
            isOpen: !0,
            onClose: i.noop,
            type: "success",
            title: n.formatMessage(y.welcomeBack),
            primaryButton: (0, a.jsx)(b.ZP.Button, {
              title: n.formatMessage(y.ageRequirementsButton),
              color: "primary",
              onClick: r,
            }),
            secondaryButton: (0, a.jsx)(b.ZP.Button, {
              title: n.formatMessage(y.logoutButton),
              color: "light",
              onClick: function () {
                l(h.s6.clickLogOut, { eventSource: "mouse" }), (0, g.w7)();
              },
              className: "border-gray-800 hover:border-gray-700",
            }),
            children: (0, a.jsx)(C, {}),
          })
        );
      }
      var C = function () {
          var e = (0, d.Z)();
          return (0, a.jsx)("div", {
            className: "mb-6 mt-4 sm:mt-6",
            children: (0, a.jsxs)("div", {
              className: "prose prose-invert text-base text-gray-500",
              children: [
                (0, a.jsx)("p", {
                  children: (0, a.jsx)(
                    m.Z,
                    (0, l._)({}, y.announcementParagraph1)
                  ),
                }),
                (0, a.jsx)("p", {
                  children: (0, a.jsx)(
                    m.Z,
                    (0, u._)((0, l._)({}, y.announcementParagraph2), {
                      values: {
                        privacyPolicyLink: (0, a.jsx)("a", {
                          href: "https://openai.com/policies/privacy-policy",
                          target: "_blank",
                          className: "text-gray-500 underline",
                          rel: "noreferrer",
                          children: e.formatMessage(y.privacyPolicyLink),
                        }),
                        helpCenterArticleLink: (0, a.jsx)("a", {
                          href: "https://help.openai.com/en/articles/7842364-how-chatgpt-and-our-language-models-are-developed",
                          target: "_blank",
                          className: "text-gray-500 underline",
                          rel: "noreferrer",
                          children: e.formatMessage(y.helpCenterArticleLink),
                        }),
                      },
                    })
                  ),
                }),
              ],
            }),
          });
        },
        _ = n(4337),
        M = n(34303),
        T = n(5759),
        N = n(66958);
      function I() {
        var e = (0, _._)(["flex gap-4 mt-6"]);
        return (
          (I = function () {
            return e;
          }),
          e
        );
      }
      function Z(e) {
        var t = e.onBack,
          n = e.onNext,
          r = e.onSubmit;
        return (0, a.jsxs)(S, {
          children: [
            t &&
              (0, a.jsx)(N.z, {
                as: "button",
                color: "neutral",
                onClick: t,
                children: "Back",
              }),
            n &&
              (0, a.jsx)(N.z, {
                as: "button",
                onClick: n,
                color: "neutral",
                className: "ml-auto",
                children: "Next",
              }),
            r &&
              (0, a.jsx)(N.z, {
                as: "button",
                onClick: r,
                color: "primary",
                className: "ml-auto",
                children: "Done",
              }),
          ],
        });
      }
      var S = M.Z.div(I());
      function P() {
        var e = (0, _._)(["prose dark:prose-invert"]);
        return (
          (P = function () {
            return e;
          }),
          e
        );
      }
      function R() {
        var e = (0, _._)(["mb-4"]);
        return (
          (R = function () {
            return e;
          }),
          e
        );
      }
      var D = (0, c.vU)({
          keepInMind: {
            id: "onboarding.keepInMind",
            defaultMessage:
              "Here are a few things to keep in mind before we get started:",
            description: "Introduction text for the onboarding process",
          },
          page0Subtitle: {
            id: "onboarding.page0Subtitle",
            defaultMessage: "This is a free research preview.",
            description: "Subtitle for Page 0",
          },
          page0Disclaimer1: {
            id: "onboarding.page0Disclaimer1",
            defaultMessage:
              "Our goal is to get external feedback in order to improve our systems and make them safer.",
            description: "Disclaimer 1 for Page 0",
          },
          page0Disclaimer2: {
            id: "onboarding.page0Disclaimer2",
            defaultMessage:
              "While we have safeguards in place, the system may occasionally generate incorrect or misleading information and produce offensive or biased content. It is not intended to give advice.",
            description: "Disclaimer 2 for Page 0",
          },
          page1Subtitle: {
            id: "onboarding.page1Subtitle",
            defaultMessage: "How we collect data",
            description: "Subtitle for Page 1",
          },
          page1Disclaimer1: {
            id: "onboarding.page1Disclaimer1",
            defaultMessage:
              "Conversations may be reviewed by our AI trainers to improve our systems.",
            description: "Disclaimer 1 for Page 1",
          },
          page1Disclaimer2: {
            id: "onboarding.page1Disclaimer2",
            defaultMessage:
              "Please don't share any sensitive information in your conversations.",
            description: "Disclaimer 2 for Page 1",
          },
          page2Subtitle: {
            id: "onboarding.page2Subtitle",
            defaultMessage: "We'd love your feedback!",
            description: "Subtitle for Page 2",
          },
          page2Disclaimer1: {
            id: "onboarding.page2Disclaimer1",
            defaultMessage:
              "This system is optimized for dialogue. Let us know if a particular response was good or unhelpful.",
            description: "Disclaimer 1 for Page 2",
          },
          page2Disclaimer2: {
            id: "onboarding.page2Disclaimer2",
            defaultMessage:
              "Share your feedback in our <link>Discord server</link>.",
            description: "Disclaimer 2 for Page 2, with link to Discord",
          },
        }),
        A = "oai/apps/hasSeenOnboarding",
        E = function () {
          var e = (0, o.useCallback)(function () {
              p.m.setItem(
                "".concat(A, "/chat"),
                new Date().toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
              );
            }, []),
            t = (0, r._)((0, o.useState)(null), 2),
            n = t[0],
            a = t[1];
          (0, o.useEffect)(
            function () {
              var e = p.m.getItem("".concat(A, "/chat"));
              a(!!e && e);
            },
            [a]
          );
          var i = (0, o.useCallback)(
            function () {
              return n ? new Date(!0 === n ? "2022-12-14" : n) : n;
            },
            [n]
          );
          return (0, o.useMemo)(
            function () {
              return { setHasSeenOnboarding: e, getHasSeenOnboardingDate: i };
            },
            [i, e]
          );
        };
      function F(e) {
        var t = e.onClose,
          n = E().setHasSeenOnboarding,
          i = (0, r._)((0, o.useState)(0), 2),
          s = i[0],
          l = i[1],
          u = (0, o.useCallback)(
            function () {
              t(!0), n();
            },
            [t, n]
          );
        return (0, a.jsxs)(O, {
          children: [
            0 === s && (0, a.jsx)(B, { onChangePage: l }),
            1 === s && (0, a.jsx)(L, { onChangePage: l }),
            2 === s && (0, a.jsx)(q, { onChangePage: l, onSubmit: u }),
          ],
        });
      }
      var B = function (e) {
          var t = e.onChangePage;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(U, {
                children: (0, a.jsx)(m.Z, (0, l._)({}, D.page0Subtitle)),
              }),
              (0, a.jsxs)(T.I, {
                children: [
                  (0, a.jsx)(T.Z, {
                    icon: "\uD83D\uDD2C",
                    children: (0, a.jsx)(m.Z, (0, l._)({}, D.page0Disclaimer1)),
                  }),
                  (0, a.jsx)(T.Z, {
                    icon: "\uD83D\uDEA8",
                    children: (0, a.jsx)(m.Z, (0, l._)({}, D.page0Disclaimer2)),
                  }),
                ],
              }),
              (0, a.jsx)(Z, {
                onNext: function () {
                  return t(1);
                },
              }),
            ],
          });
        },
        L = function (e) {
          var t = e.onChangePage;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(U, {
                children: (0, a.jsx)(m.Z, (0, l._)({}, D.page1Subtitle)),
              }),
              (0, a.jsxs)(T.I, {
                children: [
                  (0, a.jsx)(T.Z, {
                    icon: "\uD83E\uDDBE",
                    children: (0, a.jsx)(m.Z, (0, l._)({}, D.page1Disclaimer1)),
                  }),
                  (0, a.jsx)(T.Z, {
                    icon: "\uD83D\uDD10",
                    children: (0, a.jsx)(m.Z, (0, l._)({}, D.page1Disclaimer2)),
                  }),
                ],
              }),
              (0, a.jsx)(Z, {
                onBack: function () {
                  return t(0);
                },
                onNext: function () {
                  return t(2);
                },
              }),
            ],
          });
        },
        q = function (e) {
          var t = e.onChangePage,
            n = e.onSubmit,
            r = (0, o.useRef)(null);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(U, {
                children: (0, a.jsx)(m.Z, (0, l._)({}, D.page2Subtitle)),
              }),
              (0, a.jsxs)(T.I, {
                children: [
                  (0, a.jsx)(T.Z, {
                    icon: "\uD83D\uDC4D",
                    children: (0, a.jsx)(m.Z, (0, l._)({}, D.page2Disclaimer1)),
                  }),
                  (0, a.jsx)(T.Z, {
                    icon: "\uD83D\uDCAC",
                    children: (0, a.jsx)(
                      m.Z,
                      (0, u._)((0, l._)({}, D.page2Disclaimer2), {
                        values: {
                          link: function (e) {
                            return (0, a.jsx)("a", {
                              href: "https://discord.gg/openai",
                              target: "_blank",
                              rel: "noreferrer",
                              children: e,
                            });
                          },
                        },
                      })
                    ),
                  }),
                ],
              }),
              (0, a.jsx)(Z, {
                onBack: function () {
                  return t(1);
                },
                onSubmit: function () {
                  return null == n ? void 0 : n(r);
                },
              }),
            ],
          });
        },
        O = M.Z.div(P()),
        U = M.Z.h4(R()),
        z = function (e) {
          var t = e.onClose;
          return (0, a.jsx)(s.Z, {
            isOpen: !0,
            onClose: i.noop,
            type: "success",
            primaryButton: void 0,
            title: "ChatGPT",
            children: (0, a.jsx)(F, { onClose: t }),
          });
        };
      function Q(e) {
        var t,
          n,
          i,
          s = e.userCountry,
          l = (0, r._)((0, o.useState)(0), 2),
          u = l[0],
          c = l[1],
          d = E().getHasSeenOnboardingDate,
          m =
            ((n = (t = (0, v.hz)()).has(x.Vn)),
            (i = !!p.m.getItem(k)),
            0 === t.size
              ? "loading"
              : "IT" !== s || i
              ? "hide"
              : n
              ? "show"
              : "hide"),
          f = (0, o.useMemo)(
            function () {
              return [
                {
                  Modal: w,
                  getModalState: function () {
                    return m;
                  },
                },
                {
                  Modal: z,
                  getModalState: function () {
                    var e = d();
                    return null === e ? "loading" : !1 === e ? "show" : "hide";
                  },
                },
              ];
            },
            [d, m]
          );
        (0, o.useEffect)(
          function () {
            f[u] &&
              "hide" === f[u].getModalState() &&
              c(
                f.findIndex(function (e) {
                  return "hide" !== e.getModalState();
                })
              );
          },
          [u, f]
        );
        var h = f[u];
        if (!h) return null;
        var g = h.getModalState();
        if ("loading" === g) return null;
        "hide" === g &&
          c(function (e) {
            return e + 1;
          });
        var b = f[u].Modal;
        return (0, a.jsx)(b, {
          onClose: function () {
            c(function (e) {
              return e + 1;
            });
          },
        });
      }
    },
    21172: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var r = n(22830),
        a = n(35250),
        i = n(70079),
        o = n(97688),
        s = n(87316),
        l = n(32983),
        u = n(64135),
        c = n(75527),
        d = n(71047),
        m = n(16280);
      function f(e) {
        var t = e.urlThreadId,
          n = e.clientThreadId,
          f = e.isUserInCanPayGroup,
          h = e.serviceStatus,
          g = e.serviceAnnouncement,
          p = e.userCountry,
          v = (0, r._)(
            (0, i.useState)(function () {
              return void 0 !== t ? t : void 0 !== n ? n : (0, c.OX)();
            }),
            2
          ),
          x = v[0],
          b = v[1];
        void 0 !== t && x !== t && b(t),
          void 0 !== t || (0, c.Zz)(x) || b((0, c.OX)());
        var y = (0, u.Xj)().data,
          j = null == y ? void 0 : y.accountPlan.hasPaidSubscription,
          k = (0, s.g)(function (e) {
            return e.updateFlagValue;
          });
        (0, i.useEffect)(
          function () {
            void 0 !== f && k("isUserInCanPayGroup", f);
          },
          [k, f]
        ),
          (0, i.useEffect)(
            function () {
              (null == h ? void 0 : h.type) &&
                !1 === j &&
                o.m.warning(h.message, { hasCloseButton: !0, duration: 5 });
            },
            [j, null == h ? void 0 : h.message, null == h ? void 0 : h.type]
          );
        var w = (0, c.GR)(x),
          C = (0, i.useRef)(!1);
        return (
          (0, i.useEffect)(
            function () {
              if (null != y) {
                var e = y.accountPlan.hasPaidSubscription ? g.paid : g.public;
                if (
                  (null == e ? void 0 : e.type) &&
                  (null == e ? void 0 : e.message) &&
                  !C.current
                ) {
                  C.current = !0;
                  var t = e.message,
                    n = { hasCloseButton: !0, duration: 15 };
                  switch (e.type) {
                    case "danger":
                      o.m.danger(t, n);
                      break;
                    case "info":
                      o.m.info(t, n);
                      break;
                    case "warning":
                      o.m.warning(t, n);
                  }
                }
              }
            },
            [g, y]
          ),
          (0, a.jsxs)(l.XA.Provider, {
            value: w,
            children: [
              (0, a.jsx)(d.Z, { userCountry: p }),
              (0, a.jsx)(m.Z, {
                clientThreadId: x,
                setClientThreadId: b,
                isStaticSharedThread: !1,
              }),
            ],
          })
        );
      }
    },
    16280: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return og;
        },
      });
      var r,
        a,
        i,
        o,
        s,
        l,
        u,
        c,
        d,
        m,
        f,
        h,
        g,
        p,
        v = n(39324),
        x = n(70216),
        b = n(22830),
        y = n(35250),
        j = n(35448),
        k = n(68555),
        w = n(70079),
        C = n(1454),
        _ = n(35290),
        M = n(3001),
        T = n(64135),
        N = n(75527),
        I = n(81292),
        Z = n(58392),
        S = (0, I.ZP)(
          (0, Z.n)(function () {
            return { aborters: {} };
          })
        ),
        P = S.setState,
        R = {
          addAborter: function (e, t) {
            P(function (n) {
              null != n.aborters[e] &&
                console.warn(
                  "Setting aborter for id ".concat(e, " but it already exists")
                ),
                (n.aborters[e] = t);
            });
          },
          abortAndRemoveById: function (e) {
            P(function (t) {
              var n = t.aborters[e];
              null != n && (n.abort(), delete t.aborters[e]);
            });
          },
          removeAborterById: function (e) {
            P(function (t) {
              delete t.aborters[e];
            });
          },
          reset: function () {
            P(function () {
              return { aborters: {} };
            });
          },
          abortAllAndReset: function () {
            P(function (e) {
              Object.keys(e.aborters).forEach(function (t) {
                e.aborters[t].abort(), delete e.aborters[t];
              });
            });
          },
        },
        D = n(32689),
        A = n(32983),
        E = n(77442);
      function F(e, t, n) {
        var r = (0, N.XL)(e),
          a = r.title,
          i = r.titleSource,
          o = (0, b._)((0, w.useState)(!1), 2),
          s = o[0],
          l = o[1],
          u = null != a ? a : t,
          c = (0, w.useRef)(u);
        return (
          (0, w.useEffect)(
            function () {
              return (
                n && i === N._L.Generated && u !== c.current && l(!0),
                function () {
                  c.current = u;
                }
              );
            },
            [n, u, i]
          ),
          { isTypingEffect: s, resolvedTitle: u }
        );
      }
      var B = n(51217),
        L = n(86526);
      function q(e) {
        var t = e.text,
          n = (0, L.Z)(),
          r = (0, b._)((0, w.useState)(!0), 2),
          a = r[0],
          i = r[1],
          o = (0, b._)((0, w.useState)(0), 2),
          s = o[0],
          l = o[1],
          u = (0, w.useMemo)(
            function () {
              return new O().humanTypingDelaysQuertyDistance(t);
            },
            [t]
          );
        return (
          (0, w.useEffect)(
            function () {
              t &&
                a &&
                (i(!0),
                u.forEach(function (e, t) {
                  setTimeout(function () {
                    n() && (l(t), t === u.length - 1 && i(!1));
                  }, e);
                }));
            },
            [u, n, a, t]
          ),
          (0, y.jsxs)(y.Fragment, {
            children: [t.substring(0, s + 1), a && "▋"],
          })
        );
      }
      var O = (function () {
          function e() {
            (0, B._)(this, e);
          }
          var t = e.prototype;
          return (
            (t.qwertyDistance = function (e, t) {
              var n,
                r,
                a = {
                  q: [0, 0],
                  w: [1, 0],
                  e: [2, 0],
                  r: [3, 0],
                  t: [4, 0],
                  y: [5, 0],
                  u: [6, 0],
                  i: [7, 0],
                  o: [8, 0],
                  p: [9, 0],
                  a: [0, 1],
                  s: [1, 1],
                  d: [2, 1],
                  f: [3, 1],
                  g: [4, 1],
                  h: [5, 1],
                  j: [6, 1],
                  k: [7, 1],
                  l: [8, 1],
                  z: [0, 2],
                  x: [1, 2],
                  c: [2, 2],
                  v: [3, 2],
                  b: [4, 2],
                  n: [5, 2],
                  m: [6, 2],
                },
                i = (0, b._)(
                  null !== (n = a[e.toLowerCase()]) && void 0 !== n
                    ? n
                    : [0, 0],
                  2
                ),
                o = i[0],
                s = i[1],
                l = (0, b._)(
                  null !== (r = a[t.toLowerCase()]) && void 0 !== r
                    ? r
                    : [0, 0],
                  2
                );
              return Math.abs(o - l[0]) + Math.abs(s - l[1]);
            }),
            (t.humanTypingDelaysQuertyDistance = function (e) {
              for (
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 10,
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 100,
                  r = 0,
                  a = [],
                  i = 0;
                i < e.length;
                ++i
              ) {
                var o = void 0;
                if (i > 0) {
                  var s = this.qwertyDistance(e[i - 1], e[i]);
                  o =
                    0 === s
                      ? this.getRandomInt(t, Math.floor(n / 2))
                      : 1 === s
                      ? this.getRandomInt(t, Math.floor((2 * n) / 3))
                      : this.getRandomInt(t, n);
                } else o = this.getRandomInt(t, n);
                a.push(o + r), (r += o);
              }
              return a;
            }),
            (t.getRandomInt = function (e, t) {
              return Math.floor(Math.random() * (t - e + 1)) + e;
            }),
            e
          );
        })(),
        U = n(4337),
        z = n(19841),
        Q = n(72201),
        H = n(26430),
        $ = n(84913),
        G = n(44043),
        W = n(82187),
        V = n(69262),
        J = n(75861),
        Y = n(70575),
        K = n(91530),
        X = n.n(K),
        ee = n(75908),
        et = n(34303),
        en = n(82841),
        er = n(36218),
        ea = n(24274),
        ei = n(88038),
        eo = n(19051),
        es = n(66958),
        el = n(38317),
        eu = n(56060),
        ec = n(85023),
        ed = n(21722),
        em = n(71209),
        ef = n(39889),
        eh = n(63020),
        eg = n(13002),
        ep = n(32787),
        ev = n(97703),
        ex = (0, w.createContext)(),
        eb = function (e) {
          return (0, I.oR)((0, w.useContext)(ex), e);
        },
        ey = n(59710),
        ej = n(24396),
        ek = n(25094),
        ew = w.memo(function (e) {
          var t,
            n = e.message,
            r = e.isCollapsed,
            a =
              null === (t = n.message.metadata) || void 0 === t
                ? void 0
                : t.aggregate_result;
          if (!a)
            return console.error("Corrupt code execution result message"), null;
          var i = a.messages.filter(eN),
            o = r && i.length > 0,
            s = r && null != a.final_expression_output,
            l = r && null != a.in_kernel_exception,
            u = !r && a.messages.filter(eT).length > 0;
          return (0, y.jsxs)(y.Fragment, {
            children: [
              o &&
                (0, y.jsx)(eC, {
                  label: "STDOUT/STDERR",
                  output: i.map(function (e, t) {
                    return (0,
                    y.jsx)("span", { className: "stderr" === e.stream_name ? "text-red-500" : "", children: e.text }, "".concat(t));
                  }),
                }),
              s &&
                (0, y.jsx)(eC, {
                  label: "RESULT",
                  output: a.final_expression_output,
                }),
              l &&
                (0, y.jsx)("div", {
                  className:
                    "overflow-auto rounded border-t border-gray-500 bg-black text-white",
                  children: (0, y.jsx)("div", {
                    className: "border-l-4 border-red-500 p-2 text-xs",
                    children: (0, y.jsx)("div", {
                      className:
                        "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 flex max-h-64 flex-col-reverse",
                      children: (0, y.jsx)("pre", {
                        className: "shrink-0",
                        children: a.in_kernel_exception.traceback.join(""),
                      }),
                    }),
                  }),
                }),
              u &&
                a.messages.filter(eT).map(function (e, t) {
                  var n = (function (e) {
                    if (null != e.image_payload)
                      return (0, y.jsx)("img", {
                        src: "data:image/png;base64,".concat(e.image_payload),
                      });
                    if (null != e.image_url) {
                      var t = (0, ek.Iy)(e.image_url);
                      return (0, y.jsx)(eM, { fileId: t });
                    }
                    return null;
                  })(e);
                  return n ? (0, y.jsx)("div", { children: n }, t) : null;
                }),
            ],
          });
        });
      function eC(e) {
        var t = e.label,
          n = e.output;
        return (0, y.jsxs)("div", {
          className: "rounded-md bg-black p-4 text-xs",
          children: [
            (0, y.jsx)("div", { className: "mb-1 text-gray-400", children: t }),
            (0, y.jsx)("div", {
              className:
                "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 prose flex max-h-64 flex-col-reverse overflow-auto text-white",
              children: (0, y.jsx)("pre", {
                className: "shrink-0",
                children: n,
              }),
            }),
          ],
        });
      }
      var e_ = Math.log(151) / Math.log(1.5);
      function eM(e) {
        var t = e.fileId,
          n = (0, b._)((0, w.useState)(""), 2),
          r = n[0],
          a = n[1];
        return (
          (0, ej.a)({
            queryKey: ["getFileDownloadLink", t],
            queryFn: function () {
              return ea.ZP.getFileDownloadLink(t).then(function (e) {
                return (
                  (null == e ? void 0 : e.status) === "success" &&
                    a(e.download_url),
                  e
                );
              });
            },
            refetchInterval: function (e, t) {
              var n = t.state.dataUpdateCount;
              return (
                (null == e ? void 0 : e.status) !== "success" &&
                !(n > e_) &&
                100 * Math.pow(1.5, n)
              );
            },
          }),
          (0, y.jsxs)(y.Fragment, {
            children: [" ", r && (0, y.jsx)("img", { src: r }), " "],
          })
        );
      }
      function eT(e) {
        return (
          "image" === e.message_type ||
          ("image_url" in e && (0, ek.$H)(e.image_url + ""))
        );
      }
      function eN(e) {
        return "stream" === e.message_type;
      }
      function eI(e) {
        return e.some(function (e) {
          return e.messages.some(function (e) {
            var t, n, r, a;
            return (
              (null ==
              (r =
                null === (t = e.message.metadata) || void 0 === t
                  ? void 0
                  : t.aggregate_result)
                ? void 0
                : null === (n = r.messages) || void 0 === n
                ? void 0
                : n.some(eT)) ||
              ("parts" in (a = e.message.content)
                ? a.parts.join("")
                : ""
              ).includes("sandbox:")
            );
          });
        });
      }
      var eZ = n(59114),
        eS = n(48727),
        eP = n(19265),
        eR = n(81949),
        eD = n(1215),
        eA = n(21437),
        eE = n(11626),
        eF = n(54655),
        eB = n(75955),
        eL = n(69403),
        eq = n(56244),
        eO = n(57311),
        eU = n(46110),
        ez = n(13282),
        eQ = n(47635),
        eH = n(36716);
      function e$() {
        var e = (0, U._)(["flex flex-col items-start"]);
        return (
          (e$ = function () {
            return e;
          }),
          e
        );
      }
      function eG() {
        var e = (0, U._)([
          "flex items-center text-xs bg-green-100 rounded p-3 text-gray-900 ",
          "",
        ]);
        return (
          (eG = function () {
            return e;
          }),
          e
        );
      }
      function eW() {
        var e = (0, U._)([
          "max-w-full overflow-x-auto mt-3 flex flex-col gap-2 rounded bg-gray-100 p-3 text-sm text-gray-800",
        ]);
        return (
          (eW = function () {
            return e;
          }),
          e
        );
      }
      var eV = w.memo(function (e) {
          var t = e.children,
            n = e.isComplete,
            r = e.expanderClosedLabel,
            a = e.expanderOpenLabel,
            i = e.resultsPreview,
            o = e.results,
            s = e.initialExpanded,
            l = e.onExpand,
            u = (0, b._)((0, w.useState)(void 0 !== s && s), 2),
            c = u[0],
            d = u[1],
            m = (0, w.useCallback)(
              function () {
                d(function (e) {
                  return !e;
                }),
                  null == l || l();
              },
              [l]
            );
          return (0,
          y.jsxs)(eJ, { children: [(0, y.jsxs)(eY, { $complete: n, children: [(0, y.jsx)("div", { children: t }), !n && (0, y.jsx)(eP.Z, { className: o ? "ml-1" : "ml-12" }), o && (0, y.jsxs)("div", { className: "ml-12 flex items-center gap-2", role: "button", onClick: m, children: [a && r && (0, y.jsx)("div", { className: "text-xs text-gray-600", children: c ? a : r }), !c && i, (0, y.jsx)(el.ZP, { icon: c ? C.rH8 : C.bTu })] })] }), c && o] });
        }),
        eJ = et.Z.div(e$()),
        eY = et.Z.div(eG(), function (e) {
          return e.$complete && "bg-gray-100";
        }),
        eK = et.Z.div(eW()),
        eX = (0, M.vU)({
          startingBrowsing: {
            id: "browsingMessage.startingBrowsing",
            defaultMessage: "Browsing the web...",
            description: "Status message when browsing is starting",
          },
          finishedBrowsing: {
            id: "browsingMessage.finishedBrowsing",
            defaultMessage: "Finished browsing",
            description: "Status message when browsing is finished",
          },
          thinking: {
            id: "browsingMessage.thinking",
            defaultMessage: "Thinking...",
            description:
              "Status message when the next browsing command is being generated",
          },
          searchInProgress: {
            id: "browsingMessage.command.search.inProgress",
            defaultMessage:
              "Searching Bing: <bold>“<link>{searchQuery}</link>”</bold>",
            description: "Browsing command to search Bing is in progress",
          },
          searchFinished: {
            id: "browsingMessage.command.search.finished",
            defaultMessage:
              "Searched Bing: <bold>“<link>{searchQuery}</link>”</bold>",
            description: "Browsing command to search Bing finished",
          },
          searchError: {
            id: "browsingMessage.command.search.error",
            defaultMessage: "Search failed",
            description: "Browsing command to search the web failed",
          },
          clickInProgress: {
            id: "browsingMessage.command.click.inProgress",
            defaultMessage: "Clicking on a link...",
            description: "Browsing command to click on a link is in progress",
          },
          clickFinished: {
            id: "browsingMessage.command.click.finished",
            defaultMessage: "Clicked on a link",
            description: "Browsing command to click on a link finished",
          },
          clickFinishedWithLink: {
            id: "browsingMessage.command.click.finishedWithLink",
            defaultMessage: "Clicked on:",
            description:
              "Browsing command to click on a link finished. The link that was clicked will be displayed after the :",
          },
          clickError: {
            id: "browsingMessage.command.click.error",
            defaultMessage: "Click failed",
            description: "Browsing command to click on a link failed",
          },
          quote: {
            id: "browsingMessage.command.quote",
            defaultMessage: "Reading content",
            description:
              "Browsing command to read a specific quote from a page",
          },
          quoteError: {
            id: "browsingMessage.command.quote.error",
            defaultMessage: "Reading content failed",
            description:
              "Browsing command to read a specific quote from a page failed",
          },
          back: {
            id: "browsingMessage.command.back",
            defaultMessage: "Going back to last page",
            description: "Browsing command to go back to the last page",
          },
          backError: {
            id: "browsingMessage.command.back.error",
            defaultMessage: "Going back failed",
            description: "Browsing command to go back to the last page failed",
          },
          scroll: {
            id: "browsingMessage.command.scroll",
            defaultMessage: "Scrolling down",
            description: "Browsing command to scroll down on a page",
          },
          scrollError: {
            id: "browsingMessage.command.scroll.error",
            defaultMessage: "Scroll failed",
            description: "Browsing command to scroll down on a page failed",
          },
        }),
        e0 = w.memo(function (e) {
          var t,
            n = e.messages,
            r = e.isComplete,
            a = (0, T.hz)(),
            i = n.map(function (e) {
              return e.message;
            }),
            o = i
              .map(function (e, t) {
                if (
                  e.author.role !== eL.uU.Tool ||
                  (t > 0 && tt(e) && tt(i[t - 1]))
                )
                  return null;
                var n = e.metadata;
                if (!n) return null;
                if ("browser_one_box" === e.author.name)
                  return {
                    type: "search",
                    status: "finished",
                    didError: "system_error" === e.content.content_type,
                    message: e,
                  };
                var r = n.command,
                  a = n.status;
                return r
                  ? {
                      type: r,
                      status: a,
                      didError: "system_error" === e.content.content_type,
                      message: e,
                    }
                  : null;
              })
              .filter(Boolean),
            s = o.map(function (e, t) {
              return (0, y.jsx)(e1, { command: e }, t);
            });
          r
            ? (s.push((0, y.jsx)(e9, {}, "finished")),
              (t = (0, y.jsx)(e9, { compact: !0 })))
            : 0 === s.length
            ? (s.push((0, y.jsx)(e8, {}, "waiting")),
              (t = (0, y.jsx)(e8, { compact: !0 })))
            : "finished" === o[o.length - 1].status &&
              s.push(
                (0, y.jsx)(
                  te,
                  {
                    icon: C.Wqx,
                    children: (0, y.jsx)(_.Z, (0, v._)({}, eX.thinking)),
                  },
                  "thinking"
                )
              ),
            t ||
              (t = (0, y.jsx)(e1, { command: o[o.length - 1], compact: !0 }));
          var l =
            a.has(ei.UG) && !r
              ? (function (e) {
                  var t,
                    n = e.reverse().find(function (e) {
                      return e.author.role === eL.uU.Assistant;
                    });
                  if (!n) return null;
                  for (
                    var r = (0, eq.RR)(n), a = /^#\s*(.*)/gm, i = [];
                    null !== (t = a.exec(r));

                  )
                    i.push(t[1]);
                  return i.length > 0 ? i.join("\n") : null;
                })(i)
              : null;
          return (0,
          y.jsxs)(eV, { isComplete: r, results: (0, y.jsx)(eK, { className: "text-xs", children: s }), children: [null != l && (0, y.jsx)("div", { className: "mb-2 whitespace-pre-wrap font-medium", children: l }), t] });
        });
      function e1(e) {
        var t = e.command,
          n = e.compact;
        if (t.didError) return (0, y.jsx)(e7, { commandType: t.type });
        switch (t.type) {
          case "search":
            var r,
              a,
              i,
              o,
              s =
                "browser_one_box" === t.message.author.name
                  ? null === (r = t.message.metadata) || void 0 === r
                    ? void 0
                    : null === (a = r._cite_metadata) || void 0 === a
                    ? void 0
                    : a.original_query
                  : null === (i = t.message.metadata) || void 0 === i
                  ? void 0
                  : null === (o = i.args) || void 0 === o
                  ? void 0
                  : o[0];
            if (!s) return null;
            return (0, y.jsx)(e2, {
              searchQuery: s,
              isComplete: "finished" === t.status,
              compact: n,
            });
          case "click":
          case "open_url":
            var l,
              u,
              c =
                null === (l = t.message.metadata) || void 0 === l
                  ? void 0
                  : null === (u = l._cite_metadata) || void 0 === u
                  ? void 0
                  : u.metadata_list[0];
            return (0, y.jsx)(e5, { pageInfo: c, compact: n });
          case "quote":
          case "quote_full":
            return (0, y.jsx)(e3, { compact: n });
          case "back":
            return (0, y.jsx)(e4, { compact: n });
          case "scroll":
            return (0, y.jsx)(e6, { compact: n });
          default:
            return null;
        }
      }
      function e2(e) {
        var t = e.searchQuery,
          n = e.isComplete,
          r = e.compact,
          a = function (e) {
            var n = "https://www.bing.com/search?q=".concat(
              encodeURIComponent(t)
            );
            return (0, y.jsx)("a", {
              href: n,
              target: "_blank",
              rel: "noreferrer",
              className: "text-green-600",
              children: e,
            });
          };
        return (0, y.jsx)(te, {
          icon: C.jRj,
          compact: r,
          children: n
            ? (0, y.jsx)(
                _.Z,
                (0, em._)((0, v._)({}, eX.searchFinished), {
                  values: {
                    bold: function (e) {
                      return (0, y.jsx)("span", {
                        className: "font-medium",
                        children: e,
                      });
                    },
                    link: a,
                    searchQuery: t,
                  },
                })
              )
            : (0, y.jsx)(
                _.Z,
                (0, em._)((0, v._)({}, eX.searchInProgress), {
                  values: {
                    bold: function (e) {
                      return (0, y.jsx)("span", {
                        className: "font-medium",
                        children: e,
                      });
                    },
                    link: a,
                    searchQuery: t,
                  },
                })
              ),
        });
      }
      function e5(e) {
        var t,
          n = e.pageInfo,
          r = e.compact;
        return (0, y.jsx)(te, {
          icon: C.PS6,
          compact: r,
          children: n
            ? !0 === r
              ? (0, y.jsx)(_.Z, (0, v._)({}, eX.clickFinished))
              : (0, y.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, y.jsx)(_.Z, (0, v._)({}, eX.clickFinishedWithLink)),
                    (0, y.jsx)("div", {
                      className:
                        "rounded border border-black/10 bg-white px-2 py-1",
                      children: (0, y.jsx)(eH.Op, {
                        pageInfo: n,
                        onClick: function () {
                          return eB.m.logEvent(
                            "chatgpt_browsing_click_link",
                            n.url,
                            {
                              domain:
                                null !==
                                  (t = eQ.get(new URL(n.url).hostname)) &&
                                void 0 !== t
                                  ? t
                                  : "",
                            }
                          );
                        },
                      }),
                    }),
                  ],
                })
            : (0, y.jsx)(_.Z, (0, v._)({}, eX.clickInProgress)),
        });
      }
      function e3(e) {
        var t = e.compact;
        return (0, y.jsx)(te, {
          icon: C.SnF,
          compact: t,
          children: (0, y.jsx)(_.Z, (0, v._)({}, eX.quote)),
        });
      }
      function e4(e) {
        var t = e.compact;
        return (0, y.jsx)(te, {
          icon: C.cww,
          compact: t,
          children: (0, y.jsx)(_.Z, (0, v._)({}, eX.back)),
        });
      }
      function e6(e) {
        var t = e.compact;
        return (0, y.jsx)(te, {
          icon: C.nlg,
          compact: t,
          children: (0, y.jsx)(_.Z, (0, v._)({}, eX.scroll)),
        });
      }
      function e7(e) {
        var t,
          n = e.commandType,
          r = e.compact;
        switch (n) {
          case "search":
            t = eX.searchError;
            break;
          case "click":
          case "open_url":
            t = eX.clickError;
            break;
          case "quote":
          case "quote_full":
            t = eX.quoteError;
            break;
          case "back":
            t = eX.backError;
            break;
          case "scroll":
            t = eX.scrollError;
            break;
          default:
            return null;
        }
        return (0, y.jsx)(te, {
          icon: C.bcx,
          compact: r,
          children: (0, y.jsx)(_.Z, (0, v._)({}, t)),
        });
      }
      function e8(e) {
        var t = e.compact;
        return (0, y.jsx)(te, {
          icon: C.jRj,
          compact: t,
          children: (0, y.jsx)(_.Z, (0, v._)({}, eX.startingBrowsing)),
        });
      }
      function e9(e) {
        var t = e.compact;
        return (0, y.jsx)(te, {
          icon: C._rq,
          compact: t,
          children: (0, y.jsx)(_.Z, (0, v._)({}, eX.finishedBrowsing)),
        });
      }
      function te(e) {
        var t = e.children,
          n = e.icon,
          r = e.compact;
        return (0, y.jsxs)("div", {
          className: (0, z.Z)(
            "flex items-center gap-2",
            !0 !== r && "min-h-[24px]"
          ),
          children: [
            (0, y.jsx)(el.ZP, { icon: n, className: "shrink-0" }),
            (0, y.jsx)("div", { children: t }),
          ],
        });
      }
      function tt(e) {
        var t, n;
        return (
          (null === (t = e.metadata) || void 0 === t ? void 0 : t.command) ===
            "quote" ||
          (null === (n = e.metadata) || void 0 === n ? void 0 : n.command) ===
            "quote_full"
        );
      }
      var tn = n(86546),
        tr = n(87105),
        ta = {},
        ti = {};
      function to(e) {
        var t = e.message,
          n = e.outputMessage,
          r = e.clientThreadId,
          a = e.isComplete,
          i = (0, tn.F)().theme,
          o = (0, en.WS)();
        (0, w.useEffect)(
          function () {
            ta[t.message.id] ||
              (o(er.s6.renderTool2Message, {
                id: t.message.id,
                finishedExecuting: a,
              }),
              (ta[t.message.id] = !0));
          },
          [o, t, a]
        );
        var s = (0, w.useCallback)(
            function () {
              ti[t.message.id] ||
                (o(er.s6.expandTool2Message, {
                  id: t.message.id,
                  finishedExecuting: a,
                }),
                (ti[t.message.id] = !0));
            },
            [o, t, a]
          ),
          l = (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsx)("div", {
                className: "mt-3 self-stretch",
                children: (0, y.jsx)(tr.Z, {
                  clientThreadId: r,
                  messageId: t.message.id,
                  className: (0, z.Z)(
                    "markdown prose w-full break-words dark:prose-invert",
                    "dark" === i ? "dark" : "light"
                  ),
                  children: (function (e) {
                    var t = function (e, t) {
                      return "```".concat(t, "\n").concat(e, "\n```");
                    };
                    if ("code" === e.message.content.content_type)
                      return t(e.message.content.text, "python");
                    if ("python" === e.message.recipient) {
                      if ("text" !== e.message.content.content_type)
                        throw Error("Unexpected content type for code message");
                      var n = e.message.content.parts;
                      if (1 !== n.length || "string" != typeof n[0])
                        throw Error("Unexpected parts for code message");
                      return t(n[0], "python");
                    }
                    throw Error("Unexpected code message format");
                  })(t),
                }),
              }),
              n &&
                (0, y.jsx)("div", {
                  className: "self-stretch",
                  children: (0, y.jsx)(ew, { message: n, isCollapsed: !0 }),
                }),
            ],
          });
        return (0, y.jsx)(eV, {
          expanderClosedLabel: "Show work",
          expanderOpenLabel: "Hide work",
          isComplete: a,
          results: l,
          onExpand: s,
          children: a ? "Finished working" : "Working...",
        });
      }
      var ts = n(63390);
      function tl(e) {
        var t = e.messages,
          n = e.clientThreadId,
          r = e.isCompletionInProgress,
          a = e.isCompletion,
          i = e.onRequestMoreCompletions,
          o = (0, w.useMemo)(
            function () {
              return [
                t.reduce(function (e, t) {
                  return null == t.err ? e + (0, eq.RR)(t.message) : e;
                }, ""),
              ];
            },
            [t]
          );
        return (0, y.jsx)(ts.Cf, {
          clientThreadId: n,
          parts: o,
          format: !0,
          isCompletion: a,
          isCompletionInProgress: r,
          id: "",
          onRequestMoreCompletions: i,
        });
      }
      var tu = n(2368),
        tc = n(86573);
      function td(e) {
        return (0, eq.qi)(e) && !(0, eq.oH)(e);
      }
      function tm() {
        var e = (0, U._)(["grid gap-4\n", ""]);
        return (
          (tm = function () {
            return e;
          }),
          e
        );
      }
      var tf = (0, M.vU)({
        generatedImage: {
          id: "pluginDisplayParams.generatedImage",
          defaultMessage: "Generated by plugin",
          description:
            "Description text for an image that was generated by a plugin",
        },
      });
      function th(e) {
        var t,
          n,
          r,
          a = e.plugin,
          i = e.pluginMessage,
          o = e.toolMessage;
        if ("plugin-bd1fbb6d-40f9-4159-8da9-7a8975c5793b" !== a.id) return null;
        var s = !1,
          l = c.WIDE;
        if ("text" === i.content.content_type)
          try {
            var u = (function (e) {
                var t = !0,
                  n = !1,
                  r = void 0;
                try {
                  for (
                    var a, i = ["", "}", '"}', "]}", '"]}'][Symbol.iterator]();
                    !(t = (a = i.next()).done);
                    t = !0
                  ) {
                    var o = a.value,
                      s = e.trimEnd().endsWith(",")
                        ? e.trimEnd().slice(0, -1)
                        : e;
                    try {
                      return {
                        result: JSON.parse(s + o),
                        isComplete: "" === o,
                      };
                    } catch (e) {}
                  }
                } catch (e) {
                  (n = !0), (r = e);
                } finally {
                  try {
                    t || null == i.return || i.return();
                  } finally {
                    if (n) throw r;
                  }
                }
                return { result: JSON.parse(e), isComplete: !1 };
              })(i.content.parts[0]),
              d = u.result,
              m = u.isComplete;
            (t = d),
              (s = m),
              (null == t ? void 0 : t.image_shape) != null &&
                (l = t.image_shape);
          } catch (e) {}
        var f = !1;
        if (null != o) {
          if ("text" === o.content.content_type) {
            try {
              n = JSON.parse(o.content.parts[0]);
            } catch (e) {}
            if ((null == n ? void 0 : n.images) != null)
              return (0, y.jsx)(tp, { imageUrls: n.images, gridItemShape: l });
          }
          f = !0;
        }
        return (null == t ? void 0 : t.prompts) != null
          ? (0, y.jsx)(tg, {
              numItems:
                null !== (r = null == t ? void 0 : t.n) && void 0 !== r
                  ? r
                  : Math.max(t.prompts.length, 1),
              prompts: t.prompts,
              gridItemShape: l,
              isPromptListComplete: null != s && s,
              showErrorState: f || td(i),
            })
          : null;
      }
      function tg(e) {
        for (
          var t = e.numItems,
            n = e.prompts,
            r = e.gridItemShape,
            a = e.isPromptListComplete,
            i = e.showErrorState,
            o = [],
            s = 0;
          s < t;
          s++
        ) {
          var l = n[s],
            u = s < n.length - 1 || a || i;
          o.push(
            (0, y.jsx)(
              tv,
              {
                className: (0, z.Z)("text-sm", i && "text-gray-500"),
                shape: r,
                bgColor: i ? "medium" : null == l ? "dark" : "light",
                children: (0, y.jsx)(eD.default, {
                  className: "hide-scrollbar h-full",
                  followButtonClassName: "hidden",
                  children: (0, y.jsxs)("div", {
                    className:
                      "flex min-h-full flex-col justify-between gap-3 px-4 pb-5",
                    children: [
                      null != l &&
                        (0, y.jsx)("div", {
                          className: (0, z.Z)("pt-4", !u && "result-streaming"),
                          children: (0, y.jsx)("span", { children: l }),
                        }),
                      u &&
                        !i &&
                        (0, y.jsx)(eP.Z, { className: "h-4 w-4 self-center" }),
                      i &&
                        (0, y.jsx)(el.ZP, {
                          icon: C.bcx,
                          className: "self-center text-gray-400",
                        }),
                    ],
                  }),
                }),
              },
              s
            )
          );
        }
        return (0, y.jsx)(tb, { $numItems: t, children: o });
      }
      function tp(e) {
        var t = e.imageUrls,
          n = e.gridItemShape,
          r = t.map(function (e, t) {
            return (0, y.jsx)(tx, { imageUrl: e, shape: n }, t);
          });
        return (0, y.jsx)(tb, { $numItems: r.length, children: r });
      }
      function tv(e) {
        var t = e.children,
          n = e.shape,
          r = e.className,
          a = e.bgColor,
          i = void 0 === a ? "light" : a;
        return (0, y.jsxs)("div", {
          className: (0, z.Z)(
            "relative overflow-hidden rounded",
            r,
            n === c.WIDE && "aspect-[7/4]",
            n === c.SQUARE && "aspect-square max-w-[400px]",
            n === c.TALL && "aspect-[4/7] max-w-xs"
          ),
          children: [
            (0, y.jsx)("div", {
              className: (0, z.Z)(
                "pointer-events-none absolute inset-0 blur-xl",
                "light" === i && "bg-black/[.04]",
                "medium" === i && "bg-black/[.08]",
                "dark" === i && "bg-black/[.12]"
              ),
            }),
            t,
          ],
        });
      }
      function tx(e) {
        var t = e.imageUrl,
          n = e.shape,
          r = (0, ee.Z)();
        return (0, y.jsx)(tv, {
          shape: n,
          children: (0, y.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noreferrer",
            children: (0, y.jsx)("img", {
              src: t,
              alt: r.formatMessage(tf.generatedImage),
            }),
          }),
        });
      }
      ((r = c || (c = {})).WIDE = "wide"),
        (r.SQUARE = "square"),
        (r.TALL = "tall");
      var tb = et.Z.div(tm(), function (e) {
        return 1 === e.$numItems ? "grid-cols-1" : "grid-cols-2";
      });
      function ty() {
        var e = (0, U._)([
          "flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-red-200 text-red-800",
        ]);
        return (
          (ty = function () {
            return e;
          }),
          e
        );
      }
      function tj() {
        var e = (0, U._)([
          "flex items-center gap-1 rounded-[5px] bg-red-200 py-0.5 px-1.5 text-xs font-medium uppercase text-red-800",
        ]);
        return (
          (tj = function () {
            return e;
          }),
          e
        );
      }
      var tk = et.Z.div(ty());
      function tw() {
        return (0, y.jsx)(tk, {
          children: (0, y.jsx)(el.ZP, {
            icon: C.OH,
            className: "h-3 w-3",
            strokeWidth: 2.5,
          }),
        });
      }
      function tC() {
        return (0, y.jsx)(tk, {
          children: (0, y.jsx)(el.ZP, { icon: C.V7f, className: "h-3 w-3" }),
        });
      }
      var t_ = et.Z.div(tj());
      function tM() {
        return (0, y.jsxs)(t_, {
          children: [
            (0, y.jsx)(el.ZP, {
              icon: C.OH,
              className: "h-3 w-3",
              strokeWidth: 2.5,
            }),
            (0, y.jsx)("div", { children: "Unverified" }),
          ],
        });
      }
      function tT() {
        return (0, y.jsxs)(t_, {
          children: [
            (0, y.jsx)(el.ZP, { icon: C.V7f, className: "h-3 w-3" }),
            (0, y.jsx)("div", { children: "Localhost" }),
          ],
        });
      }
      var tN = n(31721),
        tI = n(57924),
        tZ = w.memo(function (e) {
          var t,
            n,
            r = e.messages,
            a = (0, b._)(r, 2),
            i = a[0],
            o = a[1],
            s = (0, tN.v)(),
            l =
              null === (t = i.message.recipient) || void 0 === t
                ? void 0
                : t.split(".")[0],
            u = s.find(function (e) {
              return e.namespace === l;
            }),
            c = null == u ? void 0 : u.manifest.name_for_human,
            d = td(i.message),
            m = null != c ? (0, y.jsx)("b", { children: c }) : "unknown plugin",
            f =
              null != o
                ? (0, y.jsxs)("div", { children: ["Used ", m] })
                : d
                ? (0, y.jsxs)("div", { children: ["Tried to use ", m] })
                : (0, y.jsxs)("div", { children: ["Using ", m, "..."] });
          return (
            u &&
              ((0, tc.cf)(u)
                ? (n = (0, y.jsx)(tT, {}))
                : "approved" !== u.status && (n = (0, y.jsx)(tM, {}))),
            (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsx)(eV, {
                  isComplete: null != o || d,
                  results: (0, y.jsx)(tS, {
                    pluginName: null != c ? c : "unknown plugin",
                    pluginMessage: i,
                    toolMessage: o,
                  }),
                  children: (0, y.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [f, n],
                  }),
                }),
                null != u &&
                  (0, y.jsx)(th, {
                    plugin: u,
                    pluginMessage: i.message,
                    toolMessage: null == o ? void 0 : o.message,
                  }),
              ],
            })
          );
        });
      function tS(e) {
        var t = e.pluginName,
          n = e.pluginMessage,
          r = e.toolMessage,
          a = (0, eq.RR)(n.message),
          i = r ? (0, eq.RR)(r.message) : null;
        try {
          (a = JSON.stringify(JSON.parse(a), null, 2)),
            null != i && (i = JSON.stringify(JSON.parse(i), null, 2));
        } catch (e) {}
        var o =
          (null == r ? void 0 : r.message.author.name) === "plugin_service";
        return (0, y.jsxs)("div", {
          className: "my-3 flex max-w-full flex-col gap-3",
          children: [
            (0, y.jsx)(tP, {
              title: "Request to ".concat(t),
              infoTooltip: n.message.recipient,
              children: a,
            }),
            null != i &&
              (0, y.jsx)(tP, {
                title: o ? "Error" : "Response from ".concat(t),
                infoTooltip: n.message.recipient,
                children: (0, y.jsx)("span", {
                  className: (0, z.Z)(o && "text-red-500"),
                  children: i,
                }),
              }),
          ],
        });
      }
      function tP(e) {
        var t = e.title,
          n = e.infoTooltip,
          r = e.children;
        return (0, y.jsx)(tu.$, {
          title: (0, y.jsx)("span", { className: "uppercase", children: t }),
          headerDecoration:
            void 0 !== n
              ? (0, y.jsx)(tI.u, {
                  label: n,
                  children: (0, y.jsx)(el.ZP, {
                    icon: C.H33,
                    className: "text-white/50",
                  }),
                })
              : void 0,
          shouldWrapCode: !0,
          className: "w-full text-xs text-white/80",
          children: r,
        });
      }
      var tR = n(85449),
        tD = n(90076);
      function tA() {
        var e = (0, U._)([""]);
        return (
          (tA = function () {
            return e;
          }),
          e
        );
      }
      function tE() {
        var e = (0, U._)(["flex flex-grow flex-col gap-3"]);
        return (
          (tE = function () {
            return e;
          }),
          e
        );
      }
      function tF() {
        var e = (0, U._)(["flex p-4 gap-4 ", ""]);
        return (
          (tF = function () {
            return e;
          }),
          e
        );
      }
      function tB() {
        var e = (0, U._)(["flex-shrink-0 flex flex-col relative items-end"]);
        return (
          (tB = function () {
            return e;
          }),
          e
        );
      }
      function tL() {
        var e = (0, U._)([
          "p-2 rounded-md hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 flex items-center gap-2",
        ]);
        return (
          (tL = function () {
            return e;
          }),
          e
        );
      }
      function tq() {
        var e = (0, U._)(["p-1 ", ""]);
        return (
          (tq = function () {
            return e;
          }),
          e
        );
      }
      function tO() {
        var e = (0, U._)([
          "text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-2 md:gap-3 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2\n",
          "",
        ]);
        return (
          (tO = function () {
            return e;
          }),
          e
        );
      }
      function tU() {
        var e = (0, U._)([
          "text-center border-b p-3 text-gray-500 dark:border-black/20 dark:text-gray-400 text-xs",
        ]);
        return (
          (tU = function () {
            return e;
          }),
          e
        );
      }
      function tz() {
        var e = (0, U._)([
          "flex justify-between items-center p-4 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm",
        ]);
        return (
          (tz = function () {
            return e;
          }),
          e
        );
      }
      var tQ = ["#ab68ff"];
      ((a = d || (d = {}))[(a.Text = 0)] = "Text"),
        (a[(a.MultiText = 1)] = "MultiText"),
        (a[(a.Browsing = 2)] = "Browsing"),
        (a[(a.Code = 3)] = "Code"),
        (a[(a.CodeExecutionOutput = 4)] = "CodeExecutionOutput"),
        (a[(a.Plugin = 5)] = "Plugin");
      var tH = "#19c37d",
        t$ = "openai",
        tG = "#1a7f64",
        tW = w.memo(function (e) {
          var t,
            n,
            r,
            a,
            i = e.turnIndex,
            o = e.conversationLeafId,
            s = e.isFinalTurn,
            l = e.clientThreadId,
            u = e.onChangeItemInView,
            c = e.onChangeRating,
            m = e.onRequestMoreCompletions,
            f = e.onDeleteNode,
            h = e.onRequestCompletion,
            g = e.onUpdateNode,
            p = e.onHandleChangeVariantFeedbackInlineComparisonRating,
            x = e.activeRequests,
            j = e.showInlineEmbeddedDisplay,
            k = void 0 !== j && j,
            _ = e.currentModelId,
            M = e.isStaticSharedThread,
            I = void 0 !== M && M,
            Z = e.initiallyHighlightedMessageId,
            S = e.avatarColor,
            P = (0, N.GD)(l, i, o),
            R = P.role,
            F = P.messages,
            B = P.variantIds,
            L = (0, ep.kP)().session,
            q = (0, E.x_)(),
            O = (0, en.WS)(),
            U = (0, b._)((0, w.useState)(!1), 2),
            Q = U[0],
            H = U[1],
            $ = (0, w.useMemo)(
              function () {
                return B.findIndex(function (e) {
                  return e === F[0].nodeId;
                });
              },
              [B, F]
            ),
            G = R !== eL.uU.User,
            W = (0, w.useContext)(A.QL).historyDisabled,
            V = (0, T.hz)().has(ei.FZ),
            J = (0, eA.Fl)(),
            Y = J.isBrowsingAvailable,
            K = J.isPluginsAvailable,
            X = J.isCodeInterpreterAvailable,
            ee = (0, D.tN)(function (e) {
              return e.isDesktopNavCollapsed;
            }),
            et = F.some(function (e) {
              return e.message.content.content_type === eL.PX.MultimodalText;
            }),
            ea = Y || K || X,
            eo = (0, w.useRef)(null);
          (0, w.useEffect)(
            function () {
              var e;
              null != Z &&
                P.messages
                  .map(function (e) {
                    return e.message.id;
                  })
                  .includes(Z) &&
                (null === (e = eo.current) ||
                  void 0 === e ||
                  e.scrollIntoView({ behavior: "auto" }));
            },
            [Z]
          );
          var es = F[F.length - 1],
            eu = (0, b._)((0, w.useState)(es.rating), 2),
            ec = eu[0],
            ed = eu[1],
            ef = (0, T.hz)(),
            eh = (0, tN.v)(),
            eg = (0, w.useMemo)(
              function () {
                return (
                  (G &&
                    (null == F ? void 0 : F[0]) != null &&
                    (0, eq.Rc)(F[0].message)) ||
                  _
                );
              },
              [G, F, _]
            ),
            ev = (0, w.useCallback)(
              function () {
                1 === F.length &&
                  (O(
                    R === eL.uU.User ? er.s6.editPrompt : er.s6.editCompletion,
                    { id: F[0].message.id, threadId: N.tQ.getServerThreadId(l) }
                  ),
                  H(!0));
              },
              [F, O, R, l]
            ),
            ex = (0, w.useCallback)(function () {
              H(!1);
            }, []),
            eb = (0, w.useCallback)(
              function () {
                var e = F.reduce(function (e, t) {
                  return t.err ||
                    t.message.author.role !== eL.uU.Assistant ||
                    "all" !== t.message.recipient
                    ? e
                    : e + (e ? "\n\n" : "") + (0, eq.RR)(t.message);
                }, "");
                navigator.clipboard.writeText(e),
                  O(er.s6.copyToClipboard, {
                    threadId: N.tQ.getServerThreadId(l),
                    id: F[0].message.id,
                    eventSource: "mouse",
                    model: eg,
                  }),
                  eB.m.logEvent("chatgpt_copy_to_clipboard");
              },
              [eg, O, F, l]
            ),
            ey = (0, w.useCallback)(
              function (e) {
                c(es.nodeId, es.message.id, e), ed(e);
              },
              [es, c]
            ),
            ej = (0, b._)((0, w.useState)(es.inlineComparisonRating), 2),
            ek = ej[0],
            eC = ej[1];
          (0, w.useEffect)(
            function () {
              ed(function (e) {
                return null != e ? e : es.rating;
              }),
                eC(function (e) {
                  return null != e ? e : es.inlineComparisonRating;
                });
            },
            [es]
          );
          var e_ = (0, w.useMemo)(
              function () {
                return eO.Cv.getRequestIdFromConversationTurn(P);
              },
              [P]
            ),
            eM = (0, w.useMemo)(
              function () {
                return x.has(e_);
              },
              [x, e_]
            ),
            eT = (0, w.useMemo)(
              function () {
                var e = !0,
                  t = !1,
                  n = void 0;
                try {
                  for (
                    var r, a = F[Symbol.iterator]();
                    !(e = (r = a.next()).done);
                    e = !0
                  ) {
                    var i = r.value;
                    if (i.errType) return i.errType;
                  }
                } catch (e) {
                  (t = !0), (n = e);
                } finally {
                  try {
                    e || null == a.return || a.return();
                  } finally {
                    if (t) throw n;
                  }
                }
                return !1;
              },
              [F]
            ),
            eN = (0, w.useMemo)(
              function () {
                if (G) {
                  var e,
                    t,
                    n = N.tQ.getTree(l),
                    r =
                      null === (e = n.getParentPromptNode(F[0].nodeId)) ||
                      void 0 === e
                        ? void 0
                        : e.parentId,
                    a =
                      r &&
                      (null === (t = n.getNode(r).message.metadata) ||
                      void 0 === t
                        ? void 0
                        : t.model_slug);
                  if (eg && a && eg !== a)
                    return tD.n2.has(a)
                      ? "The previous model used in this conversation has been deprecated. We've switched you to the latest default model."
                      : "The previous model used in this conversation is unavailable. We've switched you to the latest default model.";
                }
                return null;
              },
              [eg, G, F, l]
            ),
            eI = (0, w.useMemo)(
              function () {
                if (!ea) return { avatarIcon: t$, avatarColor: tH };
                if (eM && F.length > 0) {
                  var e = F[F.length - 1],
                    t = (0, eq.rH)(e.message);
                  switch (t) {
                    case eq.Cs.Text:
                      if ((0, eq.RR)(e.message).length > 0 || F.length > 1)
                        return { avatarIcon: "text", avatarColor: tG };
                      break;
                    case eq.Cs.Browsing:
                    case eq.Cs.BrowseTool:
                      return { avatarIcon: "browsing", avatarColor: tG };
                    case eq.Cs.Code:
                    case eq.Cs.CodeExecutionOutput:
                      return { avatarIcon: "code", avatarColor: tG };
                    case eq.Cs.Plugin:
                    case eq.Cs.PluginTool:
                      var n =
                          t === eq.Cs.Plugin
                            ? e.message.recipient
                            : e.message.author.name,
                        r = null == n ? void 0 : n.split(".")[0],
                        a = eh.find(function (e) {
                          return e.namespace === r;
                        });
                      if (a) return { avatarPlugin: a };
                      return { avatarIcon: "plugin", avatarColor: tG };
                  }
                }
                return { avatarIcon: t$, avatarColor: tH };
              },
              [ea, eM, F, eh]
            ),
            eZ = eI.avatarIcon,
            eS = eI.avatarColor,
            eP = eI.avatarPlugin,
            eR = (0, w.useCallback)(
              function (e, t, n, r) {
                N.tQ.updateTree(l, function (a) {
                  var i = a.getParentId(e);
                  a.addNode(t, n, i, eL.Jq.Prompt, void 0, r);
                });
              },
              [l]
            ),
            eD = (0, w.useMemo)(
              function () {
                var e = [];
                return (
                  F.forEach(function (t, n) {
                    var r = (0, eq.rH)(t.message),
                      a = null == F ? void 0 : F[n - 1],
                      i =
                        null != a &&
                        ((0, eq.lD)(a.message) || (0, eq.qs)(t.message)),
                      o = r === eq.Cs.Text && (0, eq.RR)(t.message);
                    if (r === eq.Cs.Browsing || r === eq.Cs.BrowseTool) {
                      var s = e[e.length - 1];
                      (null == s ? void 0 : s.type) === d.Browsing
                        ? s.messages.push(t)
                        : e.push({ type: d.Browsing, messages: [t] });
                    } else if (r === eq.Cs.Plugin || r === eq.Cs.PluginTool) {
                      var l = e[e.length - 1];
                      r === eq.Cs.PluginTool &&
                      (null == l ? void 0 : l.type) === d.Plugin
                        ? l.messages.push(t)
                        : e.push({ type: d.Plugin, messages: [t] });
                    } else if (r === eq.Cs.Code)
                      e.push({ type: d.Code, message: t });
                    else if (r === eq.Cs.CodeExecutionOutput)
                      e.push({ type: d.CodeExecutionOutput, message: t });
                    else if (i && null != o) {
                      var u = e.pop();
                      (null == u ? void 0 : u.type) === d.MultiText
                        ? (u.messages.push(t), e.push(u))
                        : (null == u ? void 0 : u.type) === d.Text &&
                          e.push({
                            type: d.MultiText,
                            messages: [u.message, t],
                          });
                    } else e.push({ type: d.Text, message: t });
                  }),
                  e.map(function (t, n) {
                    var r,
                      a = n === e.length - 1;
                    switch (t.type) {
                      case d.Text:
                        return (0,
                        y.jsx)(ts.ZP, { className: "min-h-[20px]", message: t.message, isEditing: Q, format: G, isCompletionInProgress: a && eM, onCreateEditNode: eR, clientThreadId: l, onUpdateNode: g, onDeleteNode: f, onChangeItemInView: u, onRequestCompletion: h, onExitEdit: ex, disabled: 0 !== x.size, isCompletion: G, onRequestMoreCompletions: m, isResponseToPluginMessage: (null === (r = e[n - 1]) || void 0 === r ? void 0 : r.type) === d.Plugin }, t.message.nodeId);
                      case d.MultiText:
                        return (0,
                        y.jsx)(tl, { clientThreadId: l, messages: t.messages, isCompletionInProgress: a && eM, isCompletion: G, onRequestMoreCompletions: m }, n);
                      case d.Browsing:
                        var i = t.messages[t.messages.length - 1];
                        return (0,
                        y.jsx)(e0, { messages: t.messages, isComplete: !s || !a || 0 === x.size || td(i.message) }, t.messages[0].nodeId);
                      case d.Code:
                        var o,
                          c,
                          p = e[n + 1],
                          v =
                            p && p.type === d.CodeExecutionOutput
                              ? p.message
                              : void 0;
                        return (0,
                        y.jsx)(to, { clientThreadId: l, message: t.message, outputMessage: v, isComplete: !s || !a || 0 === x.size || ((null == (c = null === (o = null == v ? void 0 : v.message.metadata) || void 0 === o ? void 0 : o.aggregate_result) ? void 0 : c.status) !== void 0 && (null == c ? void 0 : c.status) !== "running") || td(t.message.message) }, t.message.nodeId);
                      case d.CodeExecutionOutput:
                        return (0,
                        y.jsx)(ew, { message: t.message, isCollapsed: !1 }, t.message.nodeId);
                      case d.Plugin:
                        return (0,
                        y.jsx)(tZ, { messages: t.messages }, t.messages[0].nodeId);
                      default:
                        return null;
                    }
                  })
                );
              },
              [F, Q, G, eM, eR, l, g, f, u, h, ex, x.size, m, s]
            ),
            eE = (0, N.r7)(l),
            eQ =
              !I &&
              !eE &&
              q &&
              G &&
              !k &&
              !Q &&
              1 === $ &&
              s &&
              !ek &&
              !ec &&
              2 === B.length &&
              Date.now() -
                (null !== (r = es.message.create_time) && void 0 !== r
                  ? r
                  : 0) *
                  1e3 <
                6e5 &&
              !eM &&
              ef.has(ei.st),
            eH = (0, w.useRef)(Date.now()),
            e$ = (0, w.useRef)(
              (null !== (a = es.message.create_time) && void 0 !== a
                ? a
                : Date.now()) * 1e3
            ),
            eG = (0, w.useRef)(Date.now());
          (0, w.useEffect)(
            function () {
              eM || (eG.current = Date.now());
            },
            [eM]
          );
          var eW = (0, w.useCallback)(
              function (e) {
                if (eQ) {
                  var t,
                    n,
                    r = N.tQ.getTree(l),
                    a = B[0] || "",
                    i = (null == r ? void 0 : r.getConversationTurns(a)) || [],
                    o = i[i.length - 1],
                    s = (null == o ? void 0 : o.messages) || [],
                    u = s[s.length - 1],
                    c =
                      (null == u
                        ? void 0
                        : null === (t = u.message) || void 0 === t
                        ? void 0
                        : t.id) || "",
                    d = B[1] || "",
                    m = (null == r ? void 0 : r.getConversationTurns(d)) || [],
                    f = m[m.length - 1],
                    h = (null == f ? void 0 : f.messages) || [],
                    g = h[h.length - 1];
                  p(
                    c,
                    (null == g
                      ? void 0
                      : null === (n = g.message) || void 0 === n
                      ? void 0
                      : n.id) || "",
                    e,
                    eH.current,
                    eH.current,
                    e$.current,
                    eG.current
                  ),
                    N.tQ.updateTree(l, function (t) {
                      t.updateNode(es.nodeId, {
                        metadata: {
                          $set: (0, em._)(
                            (0, v._)({}, t.getMetadata(es.nodeId)),
                            { inlineComparisonRating: e }
                          ),
                        },
                      });
                    }),
                    eC(e),
                    N.tQ.updateTree(l, function (e) {
                      e.updateNode(u.nodeId, {
                        metadata: {
                          $set: (0, em._)(
                            (0, v._)({}, e.getMetadata(u.nodeId)),
                            { inlineComparisonRating: "baseline" }
                          ),
                        },
                      });
                    });
                }
              },
              [eQ, es.nodeId, p, l, B]
            ),
            eV = (0, w.useCallback)(
              function () {
                N.tQ.updateTree(l, function (e) {
                  e.updateNode(es.nodeId, {
                    metadata: {
                      $set: (0, em._)((0, v._)({}, e.getMetadata(es.nodeId)), {
                        inlineComparisonRating: "skip",
                      }),
                    },
                  });
                }),
                  eC("skip");
              },
              [es.nodeId, l]
            ),
            eJ = G && !k && !I && !eE,
            eY = !I && !k && !Q,
            eK = !G && !k && !I && !et && 1 === F.length && !Q;
          if (P.role === eL.uU.Unknown || P.role === eL.uU.System) return null;
          var eX = eK
              ? (0, y.jsx)(t0, {
                  $isMessageRedesign: V,
                  onClick: ev,
                  className: (0, z.Z)(
                    !V && q && "md:invisible md:group-hover:visible"
                  ),
                  children: (0, y.jsx)(el.ZP, { icon: C.vPQ }),
                })
              : null,
            e1 =
              G && !k
                ? (0, y.jsx)(ez.Z, {
                    onCopy: eb,
                    className: (0, z.Z)(
                      "rounded-md p-1",
                      V
                        ? "text-gray-500 hover:text-gray-700 dark:hover:text-gray-400"
                        : "hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400"
                    ),
                  })
                : null,
            e2 = eJ
              ? (0, y.jsxs)("div", {
                  className: "flex gap-1",
                  children: [
                    "thumbsDown" !== ec &&
                      !W &&
                      (0, y.jsx)(
                        t0,
                        {
                          $isMessageRedesign: V,
                          onClick: function () {
                            return ey("thumbsUp");
                          },
                          disabled: "thumbsUp" === ec,
                          className: (0, z.Z)(
                            "thumbsUp" === ec &&
                              (V
                                ? "bg-gray-100 dark:bg-gray-700"
                                : "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700")
                          ),
                          children: (0, y.jsx)(el.ZP, { icon: C.fmn }),
                        },
                        "thumbsUp:".concat(es.nodeId)
                      ),
                    "thumbsUp" !== ec &&
                      !W &&
                      (0, y.jsx)(
                        t0,
                        {
                          $isMessageRedesign: V,
                          onClick: function () {
                            return ey("thumbsDown");
                          },
                          disabled: "thumbsDown" === ec,
                          className: (0, z.Z)(
                            "thumbsDown" === ec &&
                              (V
                                ? "bg-gray-100 dark:bg-gray-700"
                                : "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700")
                          ),
                          children: (0, y.jsx)(el.ZP, { icon: C.oLd }),
                        },
                        "thumbsDown:".concat(es.nodeId)
                      ),
                  ],
                })
              : null,
            e5 =
              eQ && !W
                ? (0, y.jsxs)(t5, {
                    children: [
                      (0, y.jsx)("div", {
                        className: (0, z.Z)("mr-4"),
                        children: "Was this response better or worse?",
                      }),
                      (0, y.jsxs)(tX, {
                        onClick: function () {
                          return eW("new");
                        },
                        title:
                          "This response was better than the previous response",
                        children: [
                          (0, y.jsx)(el.ZP, {
                            icon: C.fmn,
                            className: (0, z.Z)("mr-1"),
                          }),
                          "Better",
                        ],
                      }),
                      (0, y.jsxs)(tX, {
                        onClick: function () {
                          return eW("original");
                        },
                        title:
                          "This response was worse than the previous response",
                        children: [
                          (0, y.jsx)(el.ZP, {
                            icon: C.oLd,
                            className: (0, z.Z)("mr-1"),
                          }),
                          "Worse",
                        ],
                      }),
                      (0, y.jsxs)(tX, {
                        onClick: function () {
                          return eW("same");
                        },
                        title: "This response was the same in quality",
                        children: [
                          (0, y.jsx)(el.ZP, {
                            icon: eF.Ny3,
                            className: (0, z.Z)(
                              "mr-1 rounded-full border border-gray-400 dark:border-gray-300"
                            ),
                          }),
                          "Same",
                        ],
                      }),
                      (0, y.jsx)(tX, {
                        onClick: eV,
                        title: "Skip this comparison",
                        children: (0, y.jsx)(el.ZP, {
                          icon: C.q5L,
                          size: "medium",
                        }),
                      }),
                    ],
                  })
                : null,
            e3 = eY && B.length > 1,
            e4 = function () {
              return (0, y.jsxs)("div", {
                className: "flex gap-1",
                children: [e2, eX, e1],
              });
            },
            e6 =
              null === (n = F[0].message.metadata) || void 0 === n
                ? void 0
                : n.shared_conversation_id,
            e7 = null != e6;
          return (0, y.jsxs)(tV, {
            className: (0, z.Z)(
              "group",
              "w-full text-gray-800 dark:text-gray-100",
              V
                ? (0, z.Z)(
                    "sm:rounded-2xl",
                    G
                      ? "my-2 hover:bg-gray-50/50 dark:hover:bg-gray-700/50"
                      : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                  )
                : (0, z.Z)(
                    !k && "border-b border-black/10 dark:border-gray-900/50",
                    G ? "bg-gray-50 dark:bg-[#444654]" : "dark:bg-gray-800"
                  )
            ),
            ref: eo,
            children: [
              eN && (0, y.jsx)(t2, { children: eN }),
              (0, y.jsxs)(tY, {
                $isDesktopNavCollapsed: ee,
                $isMessageRedesign: V,
                className: (0, z.Z)(k ? "ml-5" : "m-auto"),
                children: [
                  (0, y.jsxs)(tK, {
                    children: [
                      (0, y.jsx)("div", {
                        className: V ? "" : "w-[30px]",
                        children: G
                          ? eP
                            ? (0, y.jsx)(eU.Ph, {
                                plugin: eP,
                                notice: eT || void 0,
                              })
                            : (0, y.jsx)(eU.k$, {
                                background: null != S ? S : eS,
                                iconName: eZ,
                                notice: eT || void 0,
                              })
                          : e7 || k
                          ? (0, y.jsx)(eU.k$, {
                              background:
                                tQ[
                                  (null !==
                                    (t =
                                      null == e6 ? void 0 : e6.charCodeAt(0)) &&
                                  void 0 !== t
                                    ? t
                                    : 0) % tQ.length
                                ],
                              iconName: "user",
                            })
                          : (0, y.jsx)(eU.Yt, {
                              user: null == L ? void 0 : L.user,
                              notice: eT || void 0,
                              size: V ? "redesign" : "medium",
                            }),
                      }),
                      !V &&
                        eY &&
                        q &&
                        (0, y.jsx)(tR.Z, {
                          currentPage: $,
                          onChangeIndex: function (e) {
                            return u(B[e]);
                          },
                          length: B.length,
                          className: (0, z.Z)(
                            "invisible absolute left-0 top-2 -ml-4 -translate-x-full group-hover:visible",
                            B.length > 1 ? "visible" : "!invisible"
                          ),
                        }),
                    ],
                  }),
                  (0, y.jsxs)("div", {
                    className: (0, z.Z)(
                      "relative",
                      V
                        ? "min-w-0 grow"
                        : "flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]"
                    ),
                    children: [
                      V &&
                        (0, y.jsx)("div", {
                          className:
                            "mb-1 select-none text-xs font-medium tracking-wide text-gray-400",
                          children: G ? "ChatGPT" : e7 ? "User" : "You",
                        }),
                      (0, y.jsx)(tJ, { children: eD }),
                      V
                        ? (!q || e3 || null != e5) &&
                          !k &&
                          (0, y.jsxs)("div", {
                            className: "mt-2 flex flex-col gap-4",
                            children: [
                              (0, y.jsxs)("div", {
                                className: "flex gap-2 text-gray-400",
                                children: [
                                  e3 &&
                                    (0, y.jsx)(tR.Z, {
                                      currentPage: $,
                                      onChangeIndex: function (e) {
                                        return u(B[e]);
                                      },
                                      length: B.length,
                                      className:
                                        "rounded-xl border border-gray-100 bg-white p-1 dark:border-gray-600 dark:bg-gray-700",
                                    }),
                                  !q && e4(),
                                ],
                              }),
                              e5,
                            ],
                          })
                        : (0, y.jsxs)(y.Fragment, {
                            children: [
                              eK &&
                                q &&
                                (0, y.jsx)(t1, {
                                  $hidden: 0 !== x.size,
                                  children: eX,
                                }),
                              (eJ || eY) &&
                                (0, y.jsxs)("div", {
                                  className: "flex justify-between lg:block",
                                  children: [
                                    !q &&
                                      eY &&
                                      (0, y.jsx)(tR.Z, {
                                        currentPage: $,
                                        onChangeIndex: function (e) {
                                          return u(B[e]);
                                        },
                                        length: B.length,
                                        className: (0, z.Z)(
                                          "self-center pt-2",
                                          B.length > 1
                                            ? "visible"
                                            : "!invisible"
                                        ),
                                      }),
                                    eK &&
                                      !q &&
                                      (0, y.jsx)(t1, {
                                        $hidden: eM,
                                        children: eX,
                                      }),
                                    eJ &&
                                      (0, y.jsxs)(t1, {
                                        $hidden: eM,
                                        children: [e1, e2],
                                      }),
                                    eQ && !W && e5,
                                  ],
                                }),
                            ],
                          }),
                    ],
                  }),
                  V &&
                    q &&
                    !Q &&
                    !k &&
                    (!I || G) &&
                    (0, y.jsx)("div", {
                      className:
                        "absolute -top-4 right-4 hidden rounded bg-white p-1 shadow-[0_0.5px_2px_rgba(0,0,0,0.15)] group-hover:block dark:bg-gray-900",
                      children: e4(),
                    }),
                ],
              }),
            ],
          });
        }),
        tV = et.Z.div(tA()),
        tJ = et.Z.div(tE()),
        tY = et.Z.div(tF(), function (e) {
          return e.$isMessageRedesign
            ? "relative"
            : e.$isDesktopNavCollapsed
            ? "text-base md:gap-6 md:max-w-3xl md:py-6 lg:px-0"
            : "text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0";
        }),
        tK = et.Z.div(tB()),
        tX = et.Z.button(tL()),
        t0 = et.Z.button(tq(), function (e) {
          return e.$isMessageRedesign
            ? "text-gray-500 enabled:hover:text-gray-700 enabled:dark:hover:text-gray-400 rounded-sm"
            : "rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400";
        }),
        t1 = et.Z.div(tO(), function (e) {
          return e.$hidden ? "invisible" : "visible";
        }),
        t2 = et.Z.div(tU()),
        t5 = et.Z.div(tz()),
        t3 = n(75318);
      function t4() {
        var e = (0, U._)([
          "text-gray-800 w-full mx-auto md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100",
        ]);
        return (
          (t4 = function () {
            return e;
          }),
          e
        );
      }
      function t6() {
        var e = (0, U._)([
          "text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center",
        ]);
        return (
          (t6 = function () {
            return e;
          }),
          e
        );
      }
      function t7() {
        var e = (0, U._)(["md:flex items-start text-center gap-3.5"]);
        return (
          (t7 = function () {
            return e;
          }),
          e
        );
      }
      function t8() {
        var e = (0, U._)(["flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"]);
        return (
          (t8 = function () {
            return e;
          }),
          e
        );
      }
      function t9() {
        var e = (0, U._)([
          "flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2",
        ]);
        return (
          (t9 = function () {
            return e;
          }),
          e
        );
      }
      function ne() {
        var e = (0, U._)(["flex flex-col gap-3.5 w-full sm:max-w-md m-auto"]);
        return (
          (ne = function () {
            return e;
          }),
          e
        );
      }
      function nt() {
        var e = (0, U._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"]);
        return (
          (nt = function () {
            return e;
          }),
          e
        );
      }
      function nn() {
        var e = (0, U._)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']",
        ]);
        return (
          (nn = function () {
            return e;
          }),
          e
        );
      }
      function nr() {
        var e = (0, U._)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900",
        ]);
        return (
          (nr = function () {
            return e;
          }),
          e
        );
      }
      var na = et.Z.div(t4()),
        ni = et.Z.h1(t6()),
        no = et.Z.div(t7()),
        ns = et.Z.div(t8()),
        nl = et.Z.h2(t9()),
        nu = et.Z.ul(ne()),
        nc = et.Z.li(nt());
      et.Z.li(nn());
      var nd = et.Z.button(nr());
      function nm(e) {
        var t = e.text,
          n = e.onChangeCurrentPrompt,
          r = (0, w.useCallback)(
            function () {
              n(t);
            },
            [t, n]
          );
        return (0, y.jsxs)(nd, { onClick: r, children: ['"', t, '" →'] });
      }
      function nf(e) {
        var t = function (e) {
            var t;
            null == n ||
              null === (t = n.current) ||
              void 0 === t ||
              t.setInputValue(e);
          },
          n = e.promptTextareaRef;
        return (0, y.jsxs)(na, {
          children: [
            (0, y.jsxs)(ni, { children: ["ChatGPT", (0, y.jsx)(eE.IS, {})] }),
            (0, y.jsxs)(no, {
              children: [
                (0, y.jsxs)(ns, {
                  children: [
                    (0, y.jsxs)(nl, {
                      children: [
                        (0, y.jsx)(el.ZP, { icon: C.kXG, size: "medium" }),
                        "Examples",
                      ],
                    }),
                    (0, y.jsxs)(nu, {
                      children: [
                        (0, y.jsx)(nm, {
                          text: "Explain quantum computing in simple terms",
                          onChangeCurrentPrompt: t,
                        }),
                        (0, y.jsx)(nm, {
                          text: "Got any creative ideas for a 10 year old’s birthday?",
                          onChangeCurrentPrompt: t,
                        }),
                        (0, y.jsx)(nm, {
                          text: "How do I make an HTTP request in Javascript?",
                          onChangeCurrentPrompt: t,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, y.jsxs)(ns, {
                  children: [
                    (0, y.jsxs)(nl, {
                      children: [
                        (0, y.jsx)(el.ZP, { icon: t3.Z, size: "medium" }),
                        "Capabilities",
                      ],
                    }),
                    (0, y.jsxs)(nu, {
                      children: [
                        (0, y.jsx)(nc, {
                          children:
                            "Remembers what user said earlier in the conversation",
                        }),
                        (0, y.jsx)(nc, {
                          children:
                            "Allows user to provide follow-up corrections",
                        }),
                        (0, y.jsx)(nc, {
                          children: "Trained to decline inappropriate requests",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, y.jsxs)(ns, {
                  children: [
                    (0, y.jsxs)(nl, {
                      children: [
                        (0, y.jsx)(el.ZP, { icon: C.BJv, size: "medium" }),
                        "Limitations",
                      ],
                    }),
                    (0, y.jsxs)(nu, {
                      children: [
                        (0, y.jsx)(nc, {
                          children:
                            "May occasionally generate incorrect information",
                        }),
                        (0, y.jsx)(nc, {
                          children:
                            "May occasionally produce harmful instructions or biased content",
                        }),
                        (0, y.jsx)(nc, {
                          children:
                            "Limited knowledge of world and events after 2021",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var nh = n(75515),
        ng = n(96237),
        np = n(90209),
        nv = n(68789),
        nx = n(76483),
        nb = n(97739),
        ny = n(2827),
        nj = n(32402),
        nk = n(27009);
      function nw(e) {
        var t = e.disabled,
          n = e.getInputProps,
          r = e.onClick,
          a = (0, ee.Z)();
        return (0, y.jsxs)(tI.u, {
          label: a.formatMessage(nC.uploadFile),
          side: "top",
          sideOffset: 4,
          children: [
            (0, y.jsx)(es.z, {
              onClick: function (e) {
                e.preventDefault(), r();
              },
              disabled: t,
              color: "none",
              className:
                "rounded-full bg-gray-500 p-0 text-white hover:bg-black",
              "aria-label": a.formatMessage(nC.uploadFile),
              children: (0, y.jsx)(el.ZP, { icon: C.OvN, size: "small" }),
            }),
            (0, y.jsx)("input", (0, v._)({}, n({ className: "hidden" }))),
          ],
        });
      }
      var nC = (0, M.vU)({
          uploadFile: {
            id: "PromptFilePicker.uploadFile",
            defaultMessage: "Upload file",
            description: "Tooltip label for uploading a file button",
          },
          errorFileTooLarge: {
            id: "PromptFilePicker.errorFileTooLarge",
            defaultMessage: "File is too large. Maximum file size is {size}MB",
            description: "Error message when file is too large",
          },
          errorTooManyFiles: {
            id: "PromptFilePicker.errorTooManyFiles",
            defaultMessage: "Only one file upload at a time is supported",
            description: "Error message when too many files are uploaded",
          },
        }),
        n_ = n(97688),
        nM = Math.floor(Math.log(1501) / Math.log(1.5)),
        nT = { duration: 20, hasCloseButton: !0 },
        nN = n(56115),
        nI = Math.floor(Math.log(1201) / Math.log(2)),
        nZ = { duration: 20, hasCloseButton: !0 },
        nS = n(30931),
        nP = n(97732);
      function nR() {
        var e = (0, U._)([
          "absolute inset-0 bg-gray-100 opacity-80 flex gap-2 justify-center items-center rounded-xl dark:bg-gray-800 dark:text-gray-100",
        ]);
        return (
          (nR = function () {
            return e;
          }),
          e
        );
      }
      function nD() {
        var e = (0, U._)(["mb-3 mx-[10px] md:mx-0"]);
        return (
          (nD = function () {
            return e;
          }),
          e
        );
      }
      function nA() {
        var e = (0, U._)([
          "absolute p-1 rounded-md bottom-[10px] md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white",
        ]);
        return (
          (nA = function () {
            return e;
          }),
          e
        );
      }
      function nE() {
        var e = (0, U._)(["absolute left-4 bottom-2 md:left-4 md:bottom-3.5"]);
        return (
          (nE = function () {
            return e;
          }),
          e
        );
      }
      function nF() {
        var e = (0, U._)([
          "\nflex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs\n",
          "\n",
          "\n",
        ]);
        return (
          (nF = function () {
            return e;
          }),
          e
        );
      }
      function nB() {
        var e = (0, U._)([
          "",
          " flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center",
        ]);
        return (
          (nB = function () {
            return e;
          }),
          e
        );
      }
      ((i = m || (m = {}))[(i.None = 0)] = "None"),
        (i[(i.Multimodal = 1)] = "Multimodal"),
        (i[(i.Interpreter = 2)] = "Interpreter");
      var nL = (0, w.forwardRef)(function (e, t) {
        var n,
          r,
          a,
          i,
          o,
          s,
          l,
          u,
          c,
          d,
          m,
          f,
          h,
          g,
          p,
          x,
          j,
          k,
          M,
          I,
          Z,
          S,
          P,
          R,
          D,
          F,
          B,
          L,
          q,
          O,
          U,
          Q,
          H,
          $,
          G,
          W,
          V,
          J,
          Y,
          K,
          X,
          et,
          eo,
          eu,
          ec,
          eh,
          eg,
          ep,
          ev,
          ex,
          eb,
          ey,
          ew,
          eC,
          e_,
          eM,
          eT,
          eN,
          eI,
          eZ = e.onAbortCompletion,
          eS = e.onCreateNewCompletion,
          eP = e.onRequestMoreCompletions,
          eR = e.onContinueGenerating,
          eD = e.currentModelId,
          eE = e.clientThreadId,
          eF = e.isCompletionInProgress,
          eq = e.className,
          eO = e.disabled,
          eU = void 0 !== eO && eO,
          ez = e.shouldRetry,
          eQ = e.canPause,
          eH = void 0 !== eQ && eQ,
          e$ = e.canContinue,
          eG = void 0 !== e$ && e$,
          eW = e.suggestions,
          eV = e.isInteractableSharedThread,
          eJ = (0, ee.Z)(),
          eY = (0, N.oq)(eE),
          eK = (0, N.Hk)(eE),
          eX = (0, nP.Ri)(eD),
          e0 = (0, E.w$)(),
          e1 = (0, en.WS)(),
          e2 = (0, w.useContext)(A.gt).serviceStatus,
          e5 = (0, w.useContext)(A.QL).historyDisabled,
          e3 = (0, w.useRef)(null),
          e4 = (0, b._)((0, w.useState)(""), 2),
          e6 = e4[0],
          e7 = e4[1],
          e8 = (0, b._)((0, w.useState)(null), 2),
          e9 = e8[0],
          te = e8[1],
          tt = (0, tD.B9)(),
          tn = null !== eD ? tt.get(eD) : void 0,
          tr =
            (0, eA.Fl)().isCodeInterpreterAvailable &&
            (null == tn
              ? void 0
              : null === (eM = tn.enabledTools) || void 0 === eM
              ? void 0
              : eM.includes("tools2"))
              ? 2
              : (null == tn
                  ? void 0
                  : null === (eT = tn.capabilities) || void 0 === eT
                  ? void 0
                  : eT.multimodal) !== void 0 ||
                (null == tn
                  ? void 0
                  : null === (eN = tn.enabledTools) || void 0 === eN
                  ? void 0
                  : eN.includes(
                      "Hi Jane, come visit us for lunch at OpenAI? \uD83D\uDC9C"
                    ))
              ? 1
              : 0,
          ta = 0 !== tr,
          ti = (0, w.useCallback)(
            function (e, t) {
              null === t
                ? e1(er.s6.uploadFile, { eventSource: "mouse" })
                : e1(er.s6.uploadFile, { eventSource: "drag" }),
                e.length > 0 && te(e[0]);
            },
            [e1]
          ),
          to = (0, w.useCallback)(
            function (e) {
              e[0].errors.forEach(function (e) {
                var t = (function (e) {
                  var t = e.code,
                    n = e.message;
                  switch (t) {
                    case nk.jK.FileTooLarge:
                      return nC.errorFileTooLarge;
                    case nk.jK.TooManyFiles:
                      return nC.errorTooManyFiles;
                    default:
                      return n;
                  }
                })(e);
                "string" == typeof t
                  ? n_.m.danger(t)
                  : n_.m.danger(eJ.formatMessage(t, { size: 512 }));
              });
            },
            [eJ]
          ),
          ts = (0, w.useCallback)(function () {
            te(null);
          }, []),
          tl = (0, nx.uI)(
            (0, v._)(
              {
                maxFiles: 1,
                disabled: eU || !ta,
                noClick: !0,
                onDropAccepted: ti,
                onDropRejected: to,
                multiple: !1,
                maxSize: 536870912,
              },
              (0, w.useMemo)(
                function () {
                  var e,
                    t,
                    n,
                    r =
                      null !==
                        (n =
                          null == tn
                            ? void 0
                            : null === (e = tn.capabilities) || void 0 === e
                            ? void 0
                            : null === (t = e.multimodal) || void 0 === t
                            ? void 0
                            : t.accepted_mime_types) && void 0 !== n
                        ? n
                        : [];
                  if (void 0 === r) return {};
                  var a = {
                    "image/jpeg": [".jpg", ".jpeg"],
                    "image/svg+xml": [".svg"],
                  };
                  return {
                    accept: r.reduce(function (e, t) {
                      return (
                        t in a
                          ? (e[t] = a[t])
                          : t.includes("/") &&
                            (e[t] = [".".concat(t.split("/")[1])]),
                        e
                      );
                    }, {}),
                  };
                },
                [tn]
              )
            )
          ),
          tu = tl.getRootProps,
          tc = tl.getInputProps,
          td = tl.isDragActive,
          tm = tl.open,
          tf =
            ((u = ((s = o =
              null !== (i = 2 === tr ? e9 : null)
                ? JSON.stringify({
                    file: i.name,
                    modified: i.lastModified,
                    size: i.size,
                  })
                : null),
            (l = (0, ej.a)({
              queryKey: ["interpreterUploadLink", s],
              queryFn: (0, ed._)(function () {
                return (0, ef.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.createFile(i.name, i.size, nj.Ei.AceUpload).catch(
                          function (e) {
                            return (
                              n_.m.danger(
                                "Failed to get upload link for file ".concat(
                                  null == i ? void 0 : i.name,
                                  ". Please try again."
                                ),
                                nT
                              ),
                              e
                            );
                          }
                        ),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!i,
            }))).data),
            (c = l.isLoading),
            (d = l.isError),
            (h = ((m = null == u ? void 0 : u.upload_url),
            (f = (0, ej.a)({
              queryKey: ["startFileUpload", o],
              queryFn: (0, ed._)(function () {
                return (0, ef.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.uploadFileToAzureStorage(i, m).then(function (e) {
                          if (e.ok) return m;
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!(i && m),
            }))).data),
            (g = f.isLoading),
            (p = f.isError),
            (M = ((x = null == u ? void 0 : u.file_id),
            (j = N.tQ.getServerThreadId(eE)),
            (k = (0, ej.a)({
              queryKey: ["startInterpreterUpload", o],
              queryFn: (0, ed._)(function () {
                return (0, ef.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.startInterpreterUpload(
                          null != j ? j : null,
                          x,
                          eD
                        ).catch(function (e) {
                          return (
                            n_.m.danger(
                              "Failed to start interpreter upload for file ".concat(
                                null == i ? void 0 : i.name
                              ),
                              nT
                            ),
                            e
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!(
                null !== x &&
                null !== i &&
                void 0 !== h &&
                null !== eD
              ),
            }))).data),
            (I = k.isLoading),
            (Z = k.isError),
            (R = ((S = null == u ? void 0 : u.file_id),
            (P = (0, ej.a)({
              queryKey: ["interpreterFileStatus", o],
              queryFn: (0, ed._)(function () {
                return (0, ef.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.getFileDownloadLink(S).catch(function (e) {
                          return (
                            n_.m.danger(
                              "Failed to get interpreter upload status for file ".concat(
                                null == i ? void 0 : i.name
                              ),
                              nT
                            ),
                            null == ts || ts(null == i ? void 0 : i.name),
                            e
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!(void 0 !== M && i && S),
              refetchInterval: function (e, t) {
                var n = t.state.dataUpdateCount;
                return (null == e ? void 0 : e.status) === "error"
                  ? (n_.m.danger("File upload failed. Please try again", nT),
                    null == ts || ts(null == i ? void 0 : i.name),
                    !1)
                  : n > nM
                  ? (n_.m.danger("File upload timed out. Please try again", nT),
                    null == ts || ts(null == i ? void 0 : i.name),
                    !1)
                  : (null == e ? void 0 : e.status) === "retry" &&
                    100 * Math.pow(1.5, n);
              },
            }))).data),
            (D = P.isLoading),
            (F = P.isError),
            (B = (0, w.useMemo)(
              function () {
                return M ? 50 : void 0 !== h ? 30 : u ? 10 : void 0;
              },
              [h, M, u]
            )),
            (L = d || p || Z || F),
            (q =
              c ||
              g ||
              I ||
              D ||
              (null == R ? void 0 : R.status) !== "success"),
            (0, w.useEffect)(
              function () {
                if (L) {
                  var e;
                  ts(
                    null !== (e = null == i ? void 0 : i.name) && void 0 !== e
                      ? e
                      : ""
                  );
                }
              },
              [null == i ? void 0 : i.name, L, ts]
            ),
            (0, w.useMemo)(
              function () {
                var e =
                    null !== i &&
                    (null == i ? void 0 : i.name) &&
                    (null == R ? void 0 : R.status) === "success" &&
                    void 0 !== h,
                  t = e ? { name: i.name, url: h } : null;
                return {
                  isLoading: q,
                  loadingPercentage: L || e ? void 0 : B,
                  isError: L,
                  uploadedFile: t,
                };
              },
              [i, null == R ? void 0 : R.status, h, L, q, B]
            )),
          th =
            ((O = 1 === tr ? e9 : null),
            (U = nj.Ei.Multimodal),
            (G = ((H = Q =
              null !== O
                ? JSON.stringify({
                    file: O.name,
                    modified: O.lastModified,
                    size: O.size,
                  })
                : null),
            ($ = (0, ej.a)({
              queryKey: ["createFile", H],
              queryFn: (0, ed._)(function () {
                var e, t, n;
                return (0, ef.Jh)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        (e = (0, nN.Z)(new Date(), "yyyy-MM-dd_HH-mm-ss")),
                        (t = O.name.split(".").pop()),
                        (n = "chatgpt-file-".concat(e, ".").concat(t)),
                        [
                          4,
                          ea.ZP.createFile(n, O.size, U).catch(function (e) {
                            throw (
                              (console.error(
                                "Failed to create file for ".concat(
                                  null == O ? void 0 : O.name
                                ),
                                e.message
                              ),
                              e)
                            );
                          }),
                        ]
                      );
                    case 1:
                      return [2, r.sent()];
                  }
                });
              }),
              enabled: !!O,
            }))).data),
            (W = $.isLoading),
            (V = $.isError),
            (J = null == G ? void 0 : G.file_id),
            (Y = null == G ? void 0 : G.upload_url),
            (X = (K = (0, ej.a)({
              queryKey: ["uploadFile", Q],
              queryFn: (0, ed._)(function () {
                return (0, ef.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      var t;
                      return [
                        4,
                        ea.ZP.uploadFileToAzureStorage(O, Y).then(
                          ((t = (0, ed._)(function (e) {
                            var t;
                            return (0, ef.Jh)(this, function (n) {
                              switch (n.label) {
                                case 0:
                                  if (e.ok) return [2];
                                  (t = "Unknown error"), (n.label = 1);
                                case 1:
                                  return (
                                    n.trys.push([1, 3, , 4]), [4, e.text()]
                                  );
                                case 2:
                                  return (t = n.sent()), [3, 4];
                                case 3:
                                  return n.sent(), [3, 4];
                                case 4:
                                  throw (
                                    (console.error(
                                      "File upload failed at blobstore upload step",
                                      e.status,
                                      t
                                    ),
                                    Error("File upload failed"))
                                  );
                              }
                            });
                          })),
                          function (e) {
                            return t.apply(this, arguments);
                          })
                        ),
                      ];
                    case 1:
                      return e.sent(), [4, ea.ZP.markFileUploadComplete(J)];
                    case 2:
                      return e.sent(), [2, { success: !0 }];
                  }
                });
              }),
              enabled: !!(O && J && Y),
            })).data),
            (et = K.isLoading),
            (eo = K.isError),
            (ec = (eu = (0, ej.a)({
              queryKey: ["pollForFileReady", Q],
              queryFn: (0, ed._)(function () {
                return (0, ef.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.getFileDownloadLink(J).catch(function (e) {
                          throw (
                            (console.error(
                              "Filed upload failed during processing ".concat(
                                null == O ? void 0 : O.name
                              ),
                              e.message
                            ),
                            e)
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!(X && O && J),
              refetchInterval: function (e, t) {
                if ((null == e ? void 0 : e.status) === nj.KF.Retry) {
                  var n = t.state.dataUpdateCount;
                  return n > nI
                    ? (null == ts || ts(null == O ? void 0 : O.name), !1)
                    : 500 * Math.pow(2, n);
                }
                return !1;
              },
            })).data),
            (eh = eu.isLoading),
            (eg = eu.isError),
            (ep = null == ec ? void 0 : ec.download_url),
            (ev = null !== O && "string" == typeof ep && !!J),
            (ex = V || eo || eg),
            (eb =
              W ||
              et ||
              eh ||
              (null == ec ? void 0 : ec.status) === nj.KF.Retry),
            (ey = (0, w.useMemo)(
              function () {
                return ev ? 100 : X ? 50 : G ? 10 : 0;
              },
              [ev, X, G]
            )),
            (0, w.useEffect)(
              function () {
                if (ex) {
                  var e;
                  n_.m.danger("File upload failed", nZ),
                    ts(
                      null !== (e = null == O ? void 0 : O.name) && void 0 !== e
                        ? e
                        : ""
                    );
                }
              },
              [null == O ? void 0 : O.name, ex, ts]
            ),
            (eC = (ew = (0, b._)(
              ((r = (n = (0, b._)((0, w.useState)([null, null]), 2))[0]),
              (a = n[1]),
              (0, w.useEffect)(
                function () {
                  if (!O) {
                    a([null, null]);
                    return;
                  }
                  var e = new FileReader();
                  (e.onload = function () {
                    var t = new Image();
                    (t.onload = function () {
                      a([t.width, t.height]);
                    }),
                      (t.src = e.result);
                  }),
                    e.readAsDataURL(O);
                },
                [O]
              ),
              r),
              2
            ))[0]),
            (e_ = ew[1]),
            (0, w.useMemo)(
              function () {
                var e = ev
                  ? null !== eC && null !== e_
                    ? {
                        id: J,
                        name: O.name,
                        size: O.size,
                        url: ep,
                        width: eC,
                        height: e_,
                      }
                    : { id: J, name: O.name, size: O.size, url: ep }
                  : null;
                return {
                  isLoading: eb,
                  loadingPercentage: ex || ev ? void 0 : ey,
                  isError: ex,
                  uploadedFile: e,
                };
              },
              [ev, O, J, ep, ex, eb, ey, eC, e_]
            )),
          tg = (0, w.useMemo)(
            function () {
              return 2 === tr ? tf : th;
            },
            [tr, tf, th]
          ),
          tp = tg.isLoading,
          tv = tg.isError,
          tx = tg.loadingPercentage,
          tb = tg.uploadedFile,
          ty = (0, w.useCallback)(function () {
            e7(""), te(null), (0, ny.SI)(1, e3.current);
          }, []),
          tj = "root" !== eY && !eF && !(null == e2 ? void 0 : e2.oof),
          tk = !!(null === (eI = e3.current) || void 0 === eI
            ? void 0
            : eI.value),
          tw = null === e9 ? tk : !tp && !tv,
          tC = tw && !eU && !eF,
          t_ = (0, w.useCallback)(
            function (e, t) {
              if ((null == e || e.preventDefault(), !eU)) {
                var n,
                  r,
                  a =
                    null === (n = e3.current) || void 0 === n
                      ? void 0
                      : n.value,
                  i = "".concat(
                    null === (r = e3.current) || void 0 === r
                      ? void 0
                      : r.dataset.id,
                    "-nextPrompt"
                  );
                if (tw) {
                  var o = null != a ? a : "",
                    s = [];
                  tb &&
                    (2 === tr
                      ? s.push(tb)
                      : 1 === tr &&
                        "width" in tb &&
                        (o = {
                          content_type: eL.PX.MultimodalText,
                          parts: [
                            {
                              asset_pointer: (0, ek.L8)(tb.id),
                              size_bytes: tb.size,
                              width: tb.width,
                              height: tb.height,
                            },
                            null != a ? a : "",
                          ],
                        })),
                    eS(
                      i,
                      { content: o, attachments: s },
                      { eventSource: e ? "mouse" : "keyboard" },
                      { suggestions: eW }
                    ),
                    ty(),
                    void 0 !== eW &&
                      (void 0 !== t
                        ? eB.m.logEvent("chatgpt_prompt_use_suggestion", a, {
                            index: "".concat(t),
                          })
                        : eB.m.logEvent("chatgpt_prompt_ignore_suggestions"));
                }
              }
            },
            [eU, ty, tw, eS, eW, tb, tr]
          ),
          tM = (0, w.useCallback)(
            function () {
              eZ("", eK), eP(eY, { eventSource: "mouse" });
            },
            [eY, eK, eZ, eP]
          ),
          tT = (0, w.useCallback)(
            function () {
              eZ("", eK),
                e1(er.s6.pauseCompletion, {
                  threadId: N.tQ.getServerThreadId(eE),
                  eventSource: "mouse",
                });
            },
            [eK, eE, e1, eZ]
          ),
          tN = (0, w.useCallback)(
            function () {
              eR(eY);
            },
            [eY, eR]
          ),
          tZ = (0, w.useMemo)(
            function () {
              return {
                Enter: {
                  validator: function () {
                    return tC;
                  },
                  handler: function (e) {
                    (e.metaKey ||
                      (e0 && !e.shiftKey && !e.nativeEvent.isComposing)) &&
                      (e.preventDefault(), t_());
                  },
                },
                Escape: {
                  validator: function () {
                    return eH && eF;
                  },
                  handler: function () {
                    eZ("", eK),
                      e1(er.s6.pauseCompletion, {
                        threadId: N.tQ.getServerThreadId(eE),
                        eventSource: "keyboard",
                      });
                  },
                },
              };
            },
            [tC, e0, eF, t_, eH, eZ, eK, e1, eE]
          ),
          tS = (0, w.useCallback)(
            function (e) {
              var t;
              (null === (t = tZ[e.key]) || void 0 === t
                ? void 0
                : t.validator(e)) && tZ[e.key].handler(e);
            },
            [tZ]
          ),
          tP = (0, w.useCallback)(
            function (e) {
              if (e.clipboardData.files.length > 0 && 1 === tr) {
                var t,
                  n,
                  r,
                  a = e.clipboardData.files[0];
                if (
                  !(
                    null !==
                      (r =
                        null == tn
                          ? void 0
                          : null === (t = tn.capabilities) || void 0 === t
                          ? void 0
                          : null === (n = t.multimodal) || void 0 === n
                          ? void 0
                          : n.accepted_mime_types) && void 0 !== r
                      ? r
                      : []
                  ).includes(a.type)
                ) {
                  n_.m.danger(
                    eJ.formatMessage(nV.unsupportedFileType, {
                      file_type: a.type,
                    })
                  ),
                    e.preventDefault();
                  return;
                }
                te(a);
              }
            },
            [tn, te, tr, eJ]
          );
        (0, w.useEffect)(function () {
          var e;
          null === (e = e3.current) || void 0 === e || e.focus();
        }, []),
          (0, w.useEffect)(
            function () {
              te(null);
            },
            [eD]
          );
        var tR = (0, T.hz)().has(ei.uj),
          tA = ez || tj || eG || eH,
          tE = e0 ? "neutral" : "none",
          tF = (0, w.useMemo)(
            function () {
              return (0, y.jsxs)("div", {
                className: ez ? "w-full" : "",
                children: [
                  ez &&
                    (0, y.jsx)("div", {
                      className: "mb-3 text-center text-xs",
                      children: (0, y.jsx)(
                        _.Z,
                        (0, v._)({}, nV.errorGeneratingResponse)
                      ),
                    }),
                  (0, y.jsxs)(nW, {
                    $shouldRetry: ez,
                    children: [
                      !ez &&
                        tR &&
                        eW &&
                        (0, y.jsx)(nO, {
                          suggestions: eW,
                          shouldRetry: ez,
                          currentInputRef: e3,
                          onSelectSuggestion: e7,
                          handleCreateNewCompletion: t_,
                        }),
                      tj &&
                        (0, y.jsxs)(es.z, {
                          as: "button",
                          color: ez ? "primary" : tE,
                          onClick: tM,
                          className: (0, z.Z)(
                            ez ? "m-auto" : "-z-0 border-0 md:border"
                          ),
                          children: [
                            (0, y.jsx)(el.ZP, {
                              icon: C.Qxo,
                              size: e0 ? "xsmall" : "small",
                              className: "flex-shrink-0",
                            }),
                            (e0 || ez) &&
                              (0, y.jsx)(
                                _.Z,
                                (0, v._)({}, nV.regenerateResponse)
                              ),
                          ],
                        }),
                      eG &&
                        (0, y.jsxs)(es.z, {
                          as: "button",
                          color: "neutral",
                          onClick: tN,
                          className: "border-0 md:border",
                          children: [
                            (0, y.jsx)(el.ZP, {
                              icon: C.lV_,
                              className: "-rotate-180",
                              size: e0 ? "xsmall" : "small",
                            }),
                            e0 &&
                              (0, y.jsx)(
                                _.Z,
                                (0, v._)({}, nV.continueGenerating)
                              ),
                          ],
                        }),
                      eH &&
                        eF &&
                        (0, y.jsxs)(es.z, {
                          as: "button",
                          color: "neutral",
                          onClick: tT,
                          className: "border-0 md:border",
                          children: [
                            (0, y.jsx)(el.ZP, {
                              icon: C.jxP,
                              size: e0 ? "xsmall" : "small",
                            }),
                            e0 &&
                              (0, y.jsx)(_.Z, (0, v._)({}, nV.stopGenerating)),
                          ],
                        }),
                    ],
                  }),
                ],
              });
            },
            [ez, tR, eW, t_, tj, tE, tM, e0, eG, tN, eH, eF, tT]
          );
        (0, w.useImperativeHandle)(t, function () {
          return { setInputValue: e7 };
        });
        var tB = tC
          ? { backgroundColor: null == eX ? void 0 : eX.backgroundColor }
          : {};
        return (0, y.jsx)("form", {
          className: eq,
          onSubmit: t_,
          children: (0, y.jsxs)(
            "div",
            (0, em._)(
              (0, v._)(
                {
                  className:
                    "relative flex h-full flex-1 items-stretch md:flex-col",
                },
                tu()
              ),
              {
                children: [
                  e0 && tA && tF,
                  !ez &&
                    (0, y.jsxs)(nG, {
                      $disabled: ez,
                      $historyDisabled: e5,
                      children: [
                        e9 &&
                          (0, y.jsx)(nQ, {
                            children: (0, y.jsx)(nS.Z, {
                              onRemoveFileClick: function () {
                                return te(null);
                              },
                              file: e9,
                              loadingPercentage: tx,
                            }),
                          }),
                        (0, y.jsx)(ny.ZP, {
                          id: nU,
                          tabIndex: 0,
                          value: e6,
                          "data-id": eY,
                          ref: e3,
                          style: { maxHeight: "200px" },
                          rows: 1,
                          onKeyDown: tS,
                          onChange: function (e) {
                            e7(e.target.value);
                          },
                          onPaste: tP,
                          placeholder: eV
                            ? eJ.formatMessage(
                                nV.continueSharedConversationPlaceholder
                              )
                            : eJ.formatMessage(nV.placeholder),
                          className: (0, z.Z)(
                            "m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12",
                            !e9 && ta ? "pl-12 md:pl-[30px]" : "pl-3 md:pl-0"
                          ),
                          disabled: ez,
                        }),
                        !e9 &&
                          ta &&
                          (0, y.jsx)(n$, {
                            children: (0, y.jsx)(nw, {
                              onClick: tm,
                              disabled: ez,
                              getInputProps: tc,
                            }),
                          }),
                        (0, y.jsx)(nH, {
                          disabled: !tC || ez,
                          style: tB,
                          className: (0, z.Z)(
                            "bottom-1.5",
                            eF
                              ? "disabled:bottom-0.5 md:disabled:bottom-0"
                              : "transition-colors disabled:opacity-40"
                          ),
                          children: eF
                            ? (0, y.jsx)("div", {
                                className: "text-2xl",
                                children: (0, y.jsx)(nq, {}),
                              })
                            : (0, y.jsx)(tI.u, {
                                label: eJ.formatMessage(nV.sendMessageTooltip),
                                children: (0, y.jsx)(el.ZP, {
                                  icon: el.IX,
                                  size: "small",
                                  className: "m-1 md:m-0",
                                }),
                              }),
                        }),
                        td &&
                          (0, y.jsxs)(nz, {
                            children: [
                              (0, y.jsx)(el.ZP, { icon: C.tHe }),
                              eJ.formatMessage(nV.dragInstructions),
                            ],
                          }),
                      ],
                    }),
                  !e0 && tA && tF,
                ],
              }
            )
          ),
        });
      });
      function nq() {
        var e = (0, b._)((0, w.useState)(0), 2),
          t = e[0],
          n = e[1];
        (0, w.useEffect)(function () {
          var e = setInterval(function () {
            n(function (e) {
              return (e + 1) % 3;
            });
          }, 350);
          return function () {
            return clearInterval(e);
          };
        }, []);
        for (var r = [], a = 0; a < 3; a++)
          r.push(
            (0, y.jsx)(
              "span",
              { className: a <= t ? "" : "invisible", children: "\xb7" },
              a
            )
          );
        return (0, y.jsx)(y.Fragment, { children: r });
      }
      function nO(e) {
        var t = e.suggestions,
          n = e.shouldRetry,
          r = e.currentInputRef,
          a = e.onSelectSuggestion,
          i = e.handleCreateNewCompletion,
          o = (0, ee.Z)(),
          s = (0, w.useCallback)(
            function (e, t) {
              null !== r.current && (a(e), (r.current.value = e), i(void 0, t));
            },
            [r, i, a]
          );
        return (
          (0, w.useEffect)(
            function () {
              void 0 !== t && eB.m.logEvent("chatgpt_prompt_show_suggestions");
            },
            [t]
          ),
          (0, y.jsx)("div", {
            className:
              "absolute -left-2 bottom-full mb-4 flex max-w-[100vw] grow gap-2 overflow-auto px-2 md:static md:mb-0 md:max-w-none md:overflow-visible md:px-0",
            children:
              n || void 0 === t
                ? null
                : t.slice(0, 2).map(function (e, t) {
                    return (0, y.jsxs)(
                      es.z,
                      {
                        as: "button",
                        color: "neutral",
                        onClick: function () {
                          return s(e, t);
                        },
                        className:
                          "group whitespace-nowrap text-left md:whitespace-normal",
                        children: [
                          e,
                          (0, y.jsx)("div", {
                            className:
                              "absolute bottom-0 right-0 top-0 flex items-center bg-gradient-to-l from-gray-100 from-[60%] pl-6 pr-2 text-gray-700 opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:text-gray-200",
                            children: (0, y.jsx)(tI.u, {
                              label: o.formatMessage(nV.suggestionTooltip),
                              side: "top",
                              children: (0, y.jsx)(el.ZP, {
                                icon: nb.Z,
                                size: "small",
                              }),
                            }),
                          }),
                        ],
                      },
                      t
                    );
                  }),
          })
        );
      }
      var nU = "prompt-textarea",
        nz = et.Z.div(nR()),
        nQ = et.Z.div(nD()),
        nH = et.Z.button(nA()),
        n$ = et.Z.div(nE()),
        nG = et.Z.div(
          nF(),
          function (e) {
            return e.$historyDisabled
              ? "bg-gray-900 text-white shadow-xs dark:bg-gray-900 dark:text-white dark:shadow-xs"
              : "";
          },
          function (e) {
            return e.$disabled && "bg-gray-100";
          }
        ),
        nW = et.Z.div(nB(), function (e) {
          return e.$shouldRetry ? "" : "h-full";
        }),
        nV = (0, M.vU)({
          errorGeneratingResponse: {
            id: "PromptTextarea.errorGeneratingResponse",
            defaultMessage: "There was an error generating a response",
            description:
              "Error message shown when the response generation fails",
          },
          regenerateResponse: {
            id: "PromptTextarea.regenerateResponse",
            defaultMessage: "Regenerate response",
            description: "Button label for regenerating response",
          },
          continueGenerating: {
            id: "PromptTextarea.continueGenerating",
            defaultMessage: "Continue generating",
            description: "Button label for continuing response generation",
          },
          stopGenerating: {
            id: "PromptTextarea.stopGenerating",
            defaultMessage: "Stop generating",
            description: "Button label for stopping response generation",
          },
          placeholder: {
            id: "PromptTextarea.placeholder",
            defaultMessage: "Send a message",
            description: "Placeholder text for the input field",
          },
          continueSharedConversationPlaceholder: {
            id: "PromptTextarea.continueSharedConversationPlaceholder",
            defaultMessage: "Send a message to continue the conversation.",
            description:
              "Placeholder text for the input field when viewing a shared chat",
          },
          suggestionTooltip: {
            id: "PromptTextarea.suggestionTooltip",
            defaultMessage: "Click to send",
            description: "Tooltip for the suggestion button",
          },
          sendMessageTooltip: {
            id: "PromptTextarea.sendMessageTooltip",
            defaultMessage: "Send message",
            description: "Tooltip for the send message button",
          },
          pauseTooltip: {
            id: "PromptTextarea.pauseTooltip",
            defaultMessage: "Pause",
            description: "Tooltip for the pause button",
          },
          dragInstructions: {
            id: "PromptTextarea.dragInstructions",
            defaultMessage: "Upload file",
            description:
              "Instructions for dragging and dropping a file to upload",
          },
          unsupportedFileType: {
            id: "PromptTextarea.unsupportedFileType",
            defaultMessage:
              'Uploads with file type "{file_type}" are not supported, please try another file.',
            description: "Error shown when an invalid file type is uploaded",
          },
        });
      function nJ() {
        var e = (0, U._)([
          "absolute w-[2.5px] h-5 -rotate-45 -top-0.5 left-1.5 bg-gray-500 border-[0.5px] border-gray-100 group-hover/toggle:bg-red-500 dark:border-[#4E4F60]",
        ]);
        return (
          (nJ = function () {
            return e;
          }),
          e
        );
      }
      function nY() {
        var e = (0, U._)([
          "group/options flex flex-col rounded-xl border border-gray-100 bg-white text-left shadow-xxs dark:text-gray-100 dark:bg-gray-900 dark:border-gray-800 dark:shadow-xs mx-2 sm:mx-1 overflow-hidden",
        ]);
        return (
          (nY = function () {
            return e;
          }),
          e
        );
      }
      function nK() {
        var e = (0, U._)([
          "px-5 flex gap-2.5 flex-col py-4 whitespace-pre-line",
        ]);
        return (
          (nK = function () {
            return e;
          }),
          e
        );
      }
      function nX() {
        var e = (0, U._)(["block dark:text-white text-gray-900"]);
        return (
          (nX = function () {
            return e;
          }),
          e
        );
      }
      function n0() {
        var e = (0, U._)(["block text-xs text-gray-500"]);
        return (
          (n0 = function () {
            return e;
          }),
          e
        );
      }
      function n1(e) {
        var t = e.items,
          n = e.value,
          r = e.onChange,
          a = (0, b._)(
            (0, w.useState)(function () {
              return t.reduce(function (e, t) {
                if (t.options.length > 0) {
                  var r = t.options.find(function (e) {
                    return e.value === n;
                  });
                  if (r) return (e[t.value] = r.value), e;
                  e[t.value] = t.options[0].value;
                }
                return e;
              }, {});
            }),
            2
          ),
          i = a[0],
          o = a[1],
          s = (0, w.useCallback)(
            function (e, a) {
              var s = n;
              void 0 !== a &&
                o(function (t) {
                  return (0, em._)((0, v._)({}, t), (0, ng._)({}, e, a));
                }),
                (s =
                  void 0 !== a
                    ? a
                    : (null == i ? void 0 : i[e]) !== void 0 &&
                      t.some(function (t) {
                        return (
                          t.value === e &&
                          t.options.some(function (t) {
                            return t.value === i[e];
                          })
                        );
                      })
                    ? i[e]
                    : e) !== n && r(s);
            },
            [t, i, r, n]
          ),
          l = (0, b._)((0, w.useState)(new Set()), 2),
          u = l[0],
          c = l[1],
          d = (0, w.useCallback)(function (e, t) {
            t
              ? c(function (t) {
                  var n = new Set(t);
                  return n.add(e), n;
                })
              : c(function (t) {
                  var n = new Set(t);
                  return n.delete(e), n;
                });
          }, []);
        return (0, y.jsx)("div", {
          className:
            "relative flex rounded-xl bg-gray-100 p-1 text-gray-900 dark:bg-gray-900",
          children: (0, y.jsx)("ul", {
            className: "flex w-full list-none gap-1 sm:w-auto",
            children: t.map(function (e, r) {
              var a,
                o,
                l,
                c,
                m,
                f,
                h =
                  n === e.value ||
                  e.options.some(function (e) {
                    return e.value === n;
                  }),
                g = h ? n : null == i ? void 0 : i[e.value],
                p =
                  null != g
                    ? g
                    : null === (o = e.options) || void 0 === o
                    ? void 0
                    : null === (l = o[0]) || void 0 === l
                    ? void 0
                    : l.value,
                v =
                  null !==
                    (c = e.options.find(function (e) {
                      return e.value === p;
                    })) && void 0 !== c
                    ? c
                    : e.options[0],
                x =
                  null !== (m = null == v ? void 0 : v.icon) && void 0 !== m
                    ? m
                    : null;
              return (0,
              y.jsx)(n5, { onToggleItemOpenChanged: d, item: e, isSelected: h, isOtherToggleDropdownOpen: u.size > 0 && !u.has(e.categoryId), currentValue: n, defaultOption: null == v ? void 0 : v.value, onChange: s, currentIcon: x, displayCurrentValue: h && e.showSelectedValueBelow && null !== (f = null == v ? void 0 : v.name) && void 0 !== f ? f : "", contentAlign: ((a = t.length), 0 === r ? "start" : r === a - 1 ? "end" : "center") }, r);
            }),
          }),
        });
      }
      function n2(e) {
        var t = e.item,
          n = e.isSelected,
          r = e.isOtherToggleDropdownOpen,
          a = e.isOpen,
          i = void 0 !== a && a,
          o = e.onChange,
          s = e.currentIcon,
          l = e.displayCurrentValue,
          u = t.options.length > 1,
          c = null != s ? s : t.icon,
          d = !t.disabled && u;
        return (0, y.jsxs)("div", {
          className: (0, z.Z)(
            "group/button",
            "relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5",
            n
              ? "border-black/10 bg-white text-gray-900 shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] hover:!opacity-100 dark:border-[#4E4F60] dark:bg-gray-700 dark:text-gray-100"
              : "border-transparent text-gray-500 hover:text-gray-800 hover:dark:text-gray-100",
            i && "text-gray-800 dark:text-gray-100",
            r && n && "opacity-50"
          ),
          onClick: function () {
            t.disabled || o(t.value);
          },
          children: [
            (0, y.jsxs)("span", {
              className: (0, z.Z)(
                "relative max-[370px]:hidden",
                t.disabled && "group-hover/button:text-red-500"
              ),
              children: [
                null != c &&
                  (0, y.jsx)(el.ZP, {
                    icon: c,
                    className: (0, z.Z)(
                      "transition-colors",
                      n ? t.buttonActiveClass : t.buttonHoverClass
                    ),
                  }),
                t.disabled && (0, y.jsx)(n9, {}),
              ],
            }),
            (0, y.jsx)("span", {
              className: (0, z.Z)(
                "truncate text-sm font-medium md:pr-1.5",
                !d && "pr-1.5"
              ),
              children: t.name,
            }),
            d &&
              (0, y.jsx)(el.ZP, {
                icon: i ? C.rH8 : C.bTu,
                strokeWidth: 2,
                className: "md:hidden",
              }),
            null != l &&
              "" !== l &&
              (0, y.jsx)("span", {
                className:
                  "absolute left-0 top-full mt-4 w-full truncate overflow-ellipsis text-sm text-gray-500",
                children: l,
              }),
          ],
        });
      }
      function n5(e) {
        var t = e.item,
          n = e.isSelected,
          r = e.defaultOption,
          a = e.onChange,
          i = e.currentIcon,
          o = e.currentValue,
          s = e.displayCurrentValue,
          l = e.contentAlign,
          u = e.onToggleItemOpenChanged,
          c = e.isOtherToggleDropdownOpen,
          d = (0, b._)((0, w.useState)(void 0), 2),
          m = d[0],
          f = d[1],
          h = (0, w.useRef)(null),
          g = t.options.length > 1,
          p = !(void 0 === t.description && void 0 === t.disclaimer),
          v = (0, w.useCallback)(
            function (e) {
              f(e), u(t.categoryId, !!e);
            },
            [t.categoryId, u]
          );
        return (0, y.jsx)(nv.fC, {
          open: m,
          modal: !1,
          children: (0, y.jsxs)("li", {
            className: "group/toggle w-full",
            onMouseEnter: function () {
              return v(!0);
            },
            onMouseLeave: function () {
              return v(void 0);
            },
            children: [
              (0, y.jsx)(nv.xz, {
                ref: h,
                className: "w-full",
                children: (0, y.jsx)(n2, {
                  isOpen: !!m,
                  isOtherToggleDropdownOpen: c,
                  item: t,
                  isSelected: n,
                  onChange: a,
                  currentIcon: i,
                  displayCurrentValue: s,
                }),
              }),
              (0, y.jsx)(
                nv.Uv,
                {
                  children: (0, y.jsx)(nv.VY, {
                    className: (0, z.Z)(
                      "w-full min-w-[100vw] max-w-[100vw] select-none pt-4 font-medium sm:w-[312px] sm:min-w-[312px] md:max-w-none",
                      "will-change-[opacity,transform] radix-side-bottom:animate-slideDownAndFade radix-side-left:animate-slideLeftAndFade radix-side-right:animate-slideRightAndFade radix-side-top:animate-slideUpAndFade",
                      { "sm:min-w-[420px]": "Alpha" === t.name }
                    ),
                    align: l,
                    alignOffset: -6,
                    onCloseAutoFocus: function (e) {
                      m || e.preventDefault();
                    },
                    onEscapeKeyDown: function (e) {
                      var t;
                      e.preventDefault(),
                        null === (t = h.current) || void 0 === t || t.focus();
                    },
                    children: (0, y.jsxs)(re, {
                      children: [
                        p && (0, y.jsx)(n3, { item: t }),
                        (g || !m) &&
                          (0, y.jsx)(n4, {
                            defaultOption: n ? o : r,
                            item: t,
                            currentValue: o,
                            onChange: function (e, t) {
                              var n;
                              a(e, t),
                                v(void 0),
                                null === (n = document.getElementById(nU)) ||
                                  void 0 === n ||
                                  n.focus();
                            },
                            className: (0, z.Z)(
                              "text-sm",
                              p &&
                                "mb-1 border-t border-gray-100 dark:border-gray-800"
                            ),
                          }),
                      ],
                    }),
                  }),
                },
                t.categoryId
              ),
            ],
          }),
        });
      }
      function n3(e) {
        var t = e.item;
        return (0, y.jsxs)(rt, {
          className: "text-sm sm:text-base",
          children: [
            void 0 !== t.description &&
              (0, y.jsx)(rn, { children: t.description }),
            void 0 !== t.disclaimer &&
              (0, y.jsx)(rr, { children: t.disclaimer }),
          ],
        });
      }
      function n4(e) {
        var t = e.item,
          n = e.className,
          r = e.onChange,
          a = e.currentValue,
          i = e.defaultOption;
        return (0, y.jsx)(nv.Ee, {
          defaultValue: i,
          value: a,
          className: n,
          children: t.options.map(function (e, n) {
            return (0, y.jsx)(
              n6,
              {
                option: e,
                selected: a === e.value,
                active: i === e.value,
                iconClass: t.iconClass,
                iconActiveClass: t.buttonActiveClass,
                showBorder: n !== t.options.length - 1,
                isDisabled: e.disabled,
                onChange: function () {
                  e.disabled || r(t.value, e.value);
                },
              },
              e.value
            );
          }),
        });
      }
      function n6(e) {
        var t,
          n = e.option,
          r = e.selected,
          a = e.active,
          i = e.iconClass,
          o = e.iconActiveClass,
          s = e.isDisabled,
          l = e.onChange,
          u = e.showBorder,
          c = null !== (t = n.activeIcon) && void 0 !== t ? t : n.icon;
        return (0, y.jsx)(nv.Rk, {
          asChild: !0,
          value: n.value,
          onClick: l,
          className: "select-none outline-none",
          children: (0, y.jsxs)("div", {
            className: (0, z.Z)(
              "group/option relative flex w-full items-center gap-2 px-5 py-3 pr-11 font-medium text-gray-900 focus:bg-gray-50 dark:text-gray-100",
              {
                "cursor-pointer hover:!bg-gray-50 dark:hover:!bg-gray-700": !s,
                "bg-gray-50 group-hover/options:bg-transparent dark:bg-gray-700":
                  a && !r,
                "text-gray-800 dark:text-gray-100": r || a,
                "border-b border-gray-100 dark:border-gray-800": u,
              }
            ),
            children: [
              null != n.icon && null != c
                ? (0, y.jsx)(el.ZP, {
                    icon: r ? n.icon : c,
                    className: (0, z.Z)(
                      "max-[370px]:hidden",
                      !s && !r && i,
                      r || a ? o : "text-gray-500"
                    ),
                  })
                : null,
              (0, y.jsx)("span", {
                title: "string" == typeof n.name && n.name ? n.name : "",
                className: (0, z.Z)("truncate", {
                  "group-hover/option:text-gray-800 dark:group-hover/option:text-gray-100":
                    !s,
                  "text-gray-800 dark:text-gray-100": a && !s,
                }),
                children: n.name,
              }),
              n.tags.map(function (e) {
                return n8(e);
              }),
              (0, y.jsx)("span", {
                className: (0, z.Z)({
                  "absolute right-3 rounded-full p-1 text-blue-400": !0,
                  "opacity-0": !r && !s,
                  "group-hover/options:opacity-0": !r,
                  "text-red-500": s,
                }),
                children: (0, y.jsx)(el.ZP, {
                  icon: s ? np.Z : el.nQ,
                  className: "h-5 w-5",
                }),
              }),
            ],
          }),
        });
      }
      var n7 = new Set(["beta", "confidential", "alpha"]),
        n8 = function (e) {
          return (
            n7.has(e) &&
            (0, y.jsx)(
              "span",
              {
                className: (0, z.Z)(
                  "py-0.25 rounded px-1 text-sm capitalize",
                  "beta" === e && "bg-blue-200 text-blue-500",
                  "alpha" === e && "bg-blue-200 text-blue-500",
                  "confidential" === e && "bg-red-200 text-red-800"
                ),
                children: e,
              },
              e
            )
          );
        },
        n9 = et.Z.span(nJ()),
        re = et.Z.div(nY()),
        rt = et.Z.div(nK()),
        rn = et.Z.span(nX()),
        rr = et.Z.span(n0()),
        ra = n(5046);
      function ri(e) {
        var t = e.onModelChange,
          n = e.currentModel,
          r = (0, en.WS)(),
          a = (0, ra.BT)(),
          i = (0, nP.ZP)(),
          o = (0, w.useCallback)(
            function (e) {
              a !== e && (t(e), r(er.s6.toggleModel, { model: e }));
            },
            [a, r, t]
          );
        return (0, y.jsx)(n1, {
          value: null == n ? void 0 : n.id,
          onChange: o,
          items: i,
        });
      }
      var ro = n(20485),
        rs = n(12285),
        rl = n(40638),
        ru = n(57526),
        rc = n(99581);
      function rd() {
        var e = (0, U._)([
          "rounded-lg bg-white ring-1 ring-black/10 dark:bg-gray-800 dark:ring-white/20 shadow-[0_1px_7px_0_rgba(0,0,0,0.03)]",
        ]);
        return (
          (rd = function () {
            return e;
          }),
          e
        );
      }
      function rm() {
        var e = (0, U._)([
          "absolute z-[17] mt-2 flex max-h-60 w-full flex-col overflow-hidden text-base focus:outline-none dark:last:border-0 sm:text-sm md:w-[100%]",
        ]);
        return (
          (rm = function () {
            return e;
          }),
          e
        );
      }
      function rf() {
        var e = (0, U._)([
          "absolute z-[17] -ml-[1px] flex flex-col gap-2 p-3 sm:p-4",
        ]);
        return (
          (rf = function () {
            return e;
          }),
          e
        );
      }
      function rh() {
        var e = (0, U._)(["flex items-center gap-2 truncate"]);
        return (
          (rh = function () {
            return e;
          }),
          e
        );
      }
      function rg() {
        var e = (0, U._)(["h-6 w-6 shrink-0"]);
        return (
          (rg = function () {
            return e;
          }),
          e
        );
      }
      function rp() {
        var e = (0, U._)([
          "absolute inset-y-0 right-0 flex items-center pr-5 text-gray-800 dark:text-gray-100",
        ]);
        return (
          (rp = function () {
            return e;
          }),
          e
        );
      }
      function rv() {
        var e = (0, U._)([
          "absolute inset-y-0 right-0 flex items-center pr-3 text-gray-800 dark:text-gray-100",
        ]);
        return (
          (rv = function () {
            return e;
          }),
          e
        );
      }
      var rx = ["confidential", "alpha", "plus"];
      function rb(e) {
        var t = e.selectedOptions,
          n = e.selectedLabel,
          r = e.onChange,
          a = e.onAction,
          i = e.onOpen,
          o = e.onClose,
          s = e.dropdownRef,
          l = (0, x._)(e, [
            "selectedOptions",
            "selectedLabel",
            "onChange",
            "onAction",
            "onOpen",
            "onClose",
            "dropdownRef",
          ]),
          u = (0, w.useCallback)(
            function (e) {
              if (
                e.some(function (e) {
                  return "string" == typeof e;
                })
              ) {
                var t = e.find(function (e) {
                  return "string" == typeof e;
                });
                null == a || a(t);
              } else r(e);
            },
            [r, a]
          );
        return (0, y.jsx)(rs.R, {
          value: t.map(function (e) {
            return e.value;
          }),
          multiple: !0,
          onChange: u,
          children: function (e) {
            var r = e.open;
            return (0, y.jsx)(
              ry,
              (0, v._)(
                {
                  ref: s,
                  selectedLabel: n || "".concat(t.length, " selected"),
                  open: r,
                  onOpen: i,
                  onClose: o,
                  multiple: !0,
                },
                l
              )
            );
          },
        });
      }
      var ry = (0, w.forwardRef)(function (e, t) {
        var n = e.name,
          r = e.selectedLabel,
          a = e.open,
          i = e.options,
          o = e.actions,
          s = e.multiple,
          l = e.isLoading,
          u = e.loadingState,
          c = e.header,
          d = e.onOpen,
          m = e.onClose,
          f = e.theme,
          h = (0, w.useRef)(null),
          g = (0, w.useRef)(null),
          p = (0, E.oc)();
        (0, w.useImperativeHandle)(
          t,
          function () {
            return {
              open: function () {
                if (!a) {
                  var e;
                  null === (e = h.current) || void 0 === e || e.click();
                }
              },
              close: function () {
                if (a) {
                  var e;
                  null === (e = h.current) || void 0 === e || e.click();
                }
              },
            };
          },
          [a]
        );
        var v = l
          ? u ||
            (0, y.jsx)("div", {
              className: "flex h-[42px] items-center justify-center",
              children: (0, y.jsx)(eP.Z, {}),
            })
          : (0, y.jsxs)(y.Fragment, {
              children: [
                c,
                (0, y.jsxs)(rs.R.Options, {
                  className: "overflow-auto",
                  children: [
                    i.map(function (e, t) {
                      return (0, y.jsx)(
                        rj,
                        {
                          value: e.value,
                          disabled: e.disabled,
                          theme: f,
                          children: function (t) {
                            var n = t.selected,
                              r = t.active;
                            return (0, y.jsxs)(y.Fragment, {
                              children: [
                                (0, y.jsxs)(rP, {
                                  children: [
                                    e.imageUrl &&
                                      (0, y.jsx)(rR, {
                                        children: (0, y.jsx)(nh.Z, {
                                          url: e.imageUrl,
                                          name: e.title,
                                          size: "100%",
                                        }),
                                      }),
                                    (0, y.jsxs)("span", {
                                      className: (0, z.Z)(
                                        n && !s && "font-semibold",
                                        "flex h-6 items-center gap-1 text-gray-800 dark:text-gray-100"
                                      ),
                                      children: [
                                        e.title,
                                        e.tags.map(function (e) {
                                          return rM(e);
                                        }),
                                        e.customTags,
                                      ],
                                    }),
                                  ],
                                }),
                                s && !e.disabled
                                  ? (0, y.jsx)(rw, { theme: f, selected: n })
                                  : n &&
                                    (0, y.jsx)(rk, {
                                      theme: f,
                                      icon: "mini" === f ? el.HQ : C.UgA,
                                    }),
                                e.disabled &&
                                  (0, y.jsx)(rk, {
                                    theme: f,
                                    icon: ru.Z,
                                    className: "text-red-700 dark:text-red-500",
                                  }),
                                r &&
                                  p &&
                                  (0, rc.createPortal)(
                                    (0, y.jsx)(r_, {
                                      option: e,
                                      dropdownRef: g,
                                    }),
                                    document.body
                                  ),
                              ],
                            });
                          },
                        },
                        t
                      );
                    }),
                    null == o
                      ? void 0
                      : o.map(function (e, t) {
                          return (0, y.jsx)(
                            rj,
                            {
                              value: e.id,
                              theme: f,
                              children: function () {
                                return (0, y.jsxs)(y.Fragment, {
                                  children: [
                                    (0, y.jsx)("div", {
                                      className:
                                        "text-gray-800 dark:text-gray-100",
                                      children: e.label,
                                    }),
                                    (0, y.jsx)(rk, { theme: f, icon: e.icon }),
                                  ],
                                });
                              },
                            },
                            t
                          );
                        }),
                  ],
                }),
              ],
            });
        return (0,
        y.jsxs)("div", { className: "relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4", children: [(0, y.jsxs)(rs.R.Button, { ref: h, onClick: a ? m : d, className: (0, z.Z)("relative flex cursor-pointer flex-col bg-white py-2 pr-10 text-left dark:bg-gray-800 sm:text-sm", "mini" === f ? "mx-auto w-auto rounded-lg border border-transparent pl-4 pr-7 hover:border-black/10 dark:hover:border-white/10" : "w-full rounded-md border border-black/10 pl-3 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20"), children: ["mini" !== f && (0, y.jsx)(rs.R.Label, { className: "block text-xs text-gray-700 dark:text-gray-500", children: n }), (0, y.jsx)("span", { className: "inline-flex w-full truncate", children: (0, y.jsx)("span", { className: "flex h-6 items-center gap-1 truncate", children: r }) }), (0, y.jsx)("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: (0, y.jsx)(el.ZP, { icon: C.bTu, className: " text-gray-400", "aria-hidden": "true" }) })] }), (0, y.jsx)(rl.u, { show: a, as: w.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: (0, y.jsx)(rN, { ref: g, children: v }) })] });
      });
      function rj(e) {
        var t = e.value,
          n = e.disabled,
          r = e.children,
          a = e.theme;
        return (0, y.jsx)(rs.R.Option, {
          className: function (e) {
            var t = e.active;
            return (0, z.Z)(
              "mini" === a ? rZ : rS,
              t && !n ? "bg-gray-100 dark:bg-gray-700" : "text-gray-900",
              n &&
                "cursor-auto bg-gray-50 text-gray-400 dark:bg-gray-700 dark:text-gray-100"
            );
          },
          value: t,
          children: r,
        });
      }
      function rk(e) {
        var t = e.icon,
          n = e.className,
          r = e.theme;
        return (0, y.jsx)("mini" === r ? rD : rA, {
          children: (0, y.jsx)(el.ZP, {
            icon: t,
            className: (0, z.Z)("h-5 w-5", n),
            "aria-hidden": "true",
          }),
        });
      }
      function rw(e) {
        var t = e.selected,
          n = e.disabled;
        return "mini" === e.theme
          ? (0, y.jsxs)(rD, {
              children: [
                (0, y.jsx)(el.ZP, {
                  icon: t ? el.HQ : el.i9,
                  className: "h-5 w-5 text-blue-600",
                  strokeWidth: t ? 2.5 : 2,
                }),
                !t &&
                  (0, y.jsx)(el.ZP, {
                    icon: el.nQ,
                    className: (0, z.Z)(
                      "absolute h-5 w-5 text-blue-600 opacity-0 transition-opacity",
                      !n && "group-hover:opacity-100"
                    ),
                  }),
              ],
            })
          : (0, y.jsx)(rA, {
              children: (0, y.jsx)("div", {
                className: (0, z.Z)(
                  "flex h-6 w-6 items-center justify-center rounded-full border transition-colors",
                  t
                    ? "border-transparent bg-green-600 text-white"
                    : "border-black/5 dark:border-white/20"
                ),
                "aria-hidden": "true",
                children: (0, y.jsx)(el.ZP, {
                  icon: C.UgA,
                  className: (0, z.Z)(
                    "h-3 w-3 transition-opacity",
                    t && "opacity-100",
                    !t && "opacity-0",
                    !t && !n && "group-hover:opacity-50"
                  ),
                  strokeWidth: t ? 2.5 : 2,
                }),
              }),
            });
      }
      function rC(e) {
        var t = e.showCheckbox,
          n = e.theme;
        return (0, y.jsxs)("div", {
          className: (0, z.Z)("mini" === n ? rZ : rS, "cursor-auto"),
          children: [
            (0, y.jsxs)(rP, {
              children: [
                (0, y.jsx)(rR, {
                  children: (0, y.jsx)("div", {
                    className: "h-full w-full rounded-sm bg-gray-200",
                  }),
                }),
                (0, y.jsx)("div", {
                  className: "h-[12px] w-[88px] rounded-sm bg-gray-100",
                }),
              ],
            }),
            t && (0, y.jsx)(rw, { theme: n, selected: !1, disabled: !0 }),
          ],
        });
      }
      function r_(e) {
        var t = e.option,
          n = e.dropdownRef,
          r = (0, b._)((0, w.useState)(), 2),
          a = r[0],
          i = r[1];
        return ((0, w.useEffect)(
          function () {
            var e = function () {
              if (n.current) {
                var e = n.current.getBoundingClientRect();
                i({ top: e.top, left: e.left - 260, minHeight: e.height });
              }
            };
            return (
              e(),
              window.addEventListener("resize", e),
              function () {
                return window.removeEventListener("resize", e);
              }
            );
          },
          [n]
        ),
        a)
          ? (0, y.jsxs)(rI, {
              style: {
                width: 260,
                minHeight: a.minHeight,
                top: a.top,
                left: a.left,
              },
              children: [
                t.disabled &&
                  (0, y.jsx)(el.ZP, {
                    icon: ru.Z,
                    size: "medium",
                    className: "text-red-700 dark:text-red-500",
                  }),
                t.imageUrl &&
                  (0, y.jsx)(nh.Z, {
                    url: t.imageUrl,
                    name: t.title,
                    size: 70,
                  }),
                (0, y.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    t.title,
                    " ",
                    t.tags.map(function (e) {
                      return rM(e);
                    }),
                    " ",
                    t.customTags,
                  ],
                }),
                (0, y.jsx)("div", {
                  className: "whitespace-pre-line text-xs",
                  children: t.description,
                }),
              ],
            })
          : null;
      }
      var rM = function (e) {
          return (
            rx.includes(e) &&
            (0, y.jsx)(
              "span",
              {
                className: (0, z.Z)(
                  "py-0.25 rounded px-1 text-[10px] font-semibold uppercase",
                  "confidential" === e && "bg-red-200 text-red-800",
                  "alpha" === e && "bg-blue-200 text-blue-500",
                  "plus" === e && "bg-yellow-200 text-yellow-900"
                ),
                children: e,
              },
              e
            )
          );
        },
        rT = et.Z.div(rd()),
        rN = (0, et.Z)(rT)(rm()),
        rI = (0, et.Z)(rT)(rf()),
        rZ =
          "group relative flex h-[50px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-5 pr-12 last:border-0 dark:border-white/20",
        rS =
          "group relative flex h-[42px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-3 pr-9 last:border-0 dark:border-white/20",
        rP = et.Z.span(rh()),
        rR = et.Z.span(rg()),
        rD = et.Z.span(rp()),
        rA = et.Z.span(rv()),
        rE = n(697),
        rF = n(10604),
        rB = n(5759),
        rL = n(17915),
        rq = n(38631);
      function rO() {
        var e = (0, U._)(["mt-4 flex flex-col gap-4"]);
        return (
          (rO = function () {
            return e;
          }),
          e
        );
      }
      function rU() {
        var e = (0, U._)(["text-sm text-red-500"]);
        return (
          (rU = function () {
            return e;
          }),
          e
        );
      }
      var rz = et.Z.div(rO()),
        rQ = et.Z.div(rU()),
        rH = n(49910);
      function r$(e) {
        var t = e.onClickInstall,
          n = e.onInstallLocalhost,
          r = e.onClose,
          a = (0, b._)((0, w.useState)(), 2),
          i = a[0],
          o = a[1],
          s = (0, b._)((0, w.useState)(), 2),
          l = s[0],
          u = s[1],
          c = (0, b._)((0, w.useState)(!1), 2),
          d = c[0],
          m = c[1],
          f = (0, w.useCallback)(function (e) {
            o(e);
          }, []),
          h = (0, w.useCallback)(function () {
            m(!0);
          }, []);
        return d && (null == i ? void 0 : i.scrapeManifestResponse.plugin)
          ? (0, y.jsx)(rY, {
              plugin: null == i ? void 0 : i.scrapeManifestResponse.plugin,
              onClickInstall: t,
              onClose: r,
            })
          : l && (null == i ? void 0 : i.scrapeManifestResponse.plugin)
          ? (0, y.jsx)(rJ, {
              plugin: i.scrapeManifestResponse.plugin,
              manifestAccessToken: i.manifestAccessToken,
              verificationTokens: l,
              onReadyToInstall: h,
              onClose: r,
            })
          : i
          ? (0, y.jsx)(rV, {
              loadManifestResult: i,
              onRefetch: f,
              onSubmitAuthInfo: u,
              onReadyToInstall: h,
              onInstallLocalhost: n,
              onClose: r,
            })
          : (0, y.jsx)(rG, { onFetch: f, onClose: r });
      }
      function rG(e) {
        var t = e.onFetch,
          n = e.onClose,
          r = (0, ep.kP)().session,
          a = (0, b._)((0, w.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, b._)((0, w.useState)("bearer"), 2),
          l = s[0],
          u = s[1],
          c = (0, b._)((0, w.useState)(), 2),
          d = c[0],
          m = c[1],
          f = (0, w.useRef)(null),
          h = (0, w.useRef)(null),
          g = (0, rL.sd)(),
          p = g.fetchManifestAndSpec,
          v = g.isLoading;
        (0, w.useEffect)(function () {
          var e;
          null === (e = f.current) || void 0 === e || e.focus();
        }, []);
        var x = (0, w.useCallback)(function () {
            o(function (e) {
              return !e;
            });
          }, []),
          j = (0, w.useCallback)(function (e) {
            u(e.target.value);
          }, []),
          k = (0, w.useCallback)(
            (0, ed._)(function () {
              var e, n, r;
              return (0, ef.Jh)(this, function (a) {
                return (r =
                  null === (e = f.current) || void 0 === e ? void 0 : e.value)
                  ? (p({
                      domain: r,
                      manifestAccessToken: i
                        ? {
                            authorization_type: l,
                            token:
                              (null === (n = h.current) || void 0 === n
                                ? void 0
                                : n.value) || "",
                          }
                        : void 0,
                      onSuccess: t,
                      onError: function (e) {
                        return m(
                          (null == e ? void 0 : e.message) ||
                            "Couldn't find manifest."
                        );
                      },
                    }),
                    [2])
                  : (m("Please provide a domain."), [2]);
              });
            }),
            [p, t, l, i]
          );
        return (0, y.jsx)(eS.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: "Enter your website domain",
          primaryButton: (0, y.jsx)(eZ.ZP.Button, {
            title: "Find manifest file",
            color: "primary",
            onClick: k,
            loading: v,
          }),
          secondaryButton: (0, y.jsx)(eZ.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: n,
          }),
          children: (0, y.jsxs)(rz, {
            children: [
              (0, y.jsx)("a", {
                href: "https://platform.openai.com/docs/plugins/getting-started",
                target: "_blank",
                rel: "noreferrer",
                className: "text-green-600",
                children:
                  "Visit our documentation to learn how to build a plugin.",
              }),
              (0, y.jsxs)(rB.Z, {
                icon: "\uD83D\uDEA8",
                children: [
                  "If your plugin has been approved to be in the ChatGPT plugin store, and you have made changes to your ",
                  "plugin's",
                  " manifest, your plugin will be removed from the store, and you will need to",
                  " ",
                  (0, y.jsx)("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    className: "text-green-600",
                    href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                    children: "resubmit it for review",
                  }),
                  ".",
                ],
              }),
              (0, y.jsx)(rF.Z, {
                ref: f,
                name: "url",
                displayName: "Domain",
                placeholder: "ex: openai.com or localhost:3000",
                onPressEnter: k,
                autoFocus: !0,
              }),
              (null == r ? void 0 : r.user) != null &&
                (0, ep.yl)(r.user) &&
                (0, y.jsxs)(y.Fragment, {
                  children: [
                    (0, y.jsxs)("div", {
                      role: "button",
                      className:
                        "flex cursor-pointer items-center gap-1 text-sm text-black/60 hover:text-black/70",
                      onClick: x,
                      children: [
                        (0, y.jsx)("div", {
                          children: "My file requires authentication",
                        }),
                        (0, y.jsx)(el.ZP, { icon: i ? C.rH8 : C.bTu }),
                      ],
                    }),
                    i &&
                      (0, y.jsxs)(y.Fragment, {
                        children: [
                          (0, y.jsxs)("div", {
                            className: "flex flex-col gap-2 text-sm",
                            children: [
                              (0, y.jsx)("div", {
                                children: "Authentication type",
                              }),
                              (0, y.jsxs)("div", {
                                className: "flex gap-6",
                                children: [
                                  (0, y.jsx)(rW, {
                                    label: "Bearer",
                                    value: "bearer",
                                    checked: "bearer" === l,
                                    onChange: j,
                                  }),
                                  (0, y.jsx)(rW, {
                                    label: "Basic",
                                    value: "basic",
                                    checked: "basic" === l,
                                    onChange: j,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, y.jsxs)("div", {
                            className: "flex flex-col gap-2 text-sm",
                            children: [
                              (0, y.jsx)("div", { children: "Access token" }),
                              (0, y.jsx)(rF.Z, {
                                ref: h,
                                name: "manifestToken",
                                onPressEnter: k,
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              d && (0, y.jsx)(rQ, { children: d }),
            ],
          }),
        });
      }
      function rW(e) {
        var t = e.label,
          n = e.value,
          r = e.checked,
          a = e.onChange;
        return (0, y.jsxs)("label", {
          className: "flex items-center gap-2",
          children: [
            (0, y.jsx)("input", {
              name: "manifestAuthType",
              type: "radio",
              value: n,
              checked: r,
              onChange: a,
              className: "text-green-600 focus:ring-green-600",
            }),
            t,
          ],
        });
      }
      function rV(e) {
        var t = e.loadManifestResult,
          n = e.onRefetch,
          r = e.onSubmitAuthInfo,
          a = e.onReadyToInstall,
          i = e.onInstallLocalhost,
          o = e.onClose,
          s = t.domain,
          l = t.manifestAccessToken,
          u = t.scrapeManifestResponse,
          c = t.apiValidationInfo,
          d = u.plugin,
          m = u.manifest_validation_info,
          f = (0, b._)((0, w.useState)(), 2),
          h = f[0],
          g = f[1],
          p = (0, b._)((0, w.useState)(!1), 2),
          v = p[0],
          x = p[1],
          k = (0, w.useRef)(null),
          C = (0, w.useRef)(null),
          _ = (0, w.useRef)(null),
          M = (0, rL.sd)(),
          T = M.fetchManifestAndSpec,
          N = M.isLoading,
          I = (0, j.NL)(),
          Z = d && (0, tc.cf)(d),
          S = (null == d ? void 0 : d.manifest.auth.type) === "service_http",
          P = (null == d ? void 0 : d.manifest.auth.type) === "oauth",
          R =
            (m.errors && m.errors.length > 0) ||
            ((null == c ? void 0 : c.errors) &&
              (null == c ? void 0 : c.errors.length) > 0),
          D = (0, w.useCallback)(
            (0, ed._)(function () {
              var e, t, u, c, m;
              return (0, ef.Jh)(this, function (f) {
                switch (f.label) {
                  case 0:
                    if (!R) return [3, 1];
                    return (
                      T({
                        domain: s,
                        manifestAccessToken: l,
                        onSuccess: n,
                        onError: function (e) {
                          return g(
                            (null == e ? void 0 : e.message) ||
                              "Couldn't find manifest."
                          );
                        },
                      }),
                      [3, 15]
                    );
                  case 1:
                    if (!Z) return [3, 2];
                    return (0, rL.GI)(d, I, ["installedAip"]), i(d), [3, 15];
                  case 2:
                    if (!S) return [3, 8];
                    if (
                      !(null === (e = k.current) || void 0 === e
                        ? void 0
                        : e.value)
                    )
                      return (
                        g("Please provide your service access token."), [2]
                      );
                    f.label = 3;
                  case 3:
                    return (
                      f.trys.push([3, 5, 6, 7]),
                      x(!0),
                      [
                        4,
                        ea.ZP.setPluginServiceHttpToken({
                          id: d.id,
                          serviceAccessToken: k.current.value,
                        }),
                      ]
                    );
                  case 4:
                    return r(f.sent().verification_tokens), [3, 7];
                  case 5:
                    return f.sent(), g("Error setting access token."), [3, 7];
                  case 6:
                    return x(!1), [7];
                  case 7:
                    return [3, 15];
                  case 8:
                    if (!P) return [3, 14];
                    if (
                      ((c =
                        null === (t = C.current) || void 0 === t
                          ? void 0
                          : t.value),
                      (m =
                        null === (u = _.current) || void 0 === u
                          ? void 0
                          : u.value),
                      !c || !m)
                    )
                      return g("Please provide your OAuth credentials."), [2];
                    f.label = 9;
                  case 9:
                    return (
                      f.trys.push([9, 11, 12, 13]),
                      [
                        4,
                        ea.ZP.setPluginOAuthClientCredentials({
                          id: d.id,
                          clientId: C.current.value,
                          clientSecret: _.current.value,
                        }),
                      ]
                    );
                  case 10:
                    return r(f.sent().verification_tokens), [3, 13];
                  case 11:
                    return (
                      f.sent(), g("Error setting OAuth credentials."), [3, 13]
                    );
                  case 12:
                    return x(!1), [7];
                  case 13:
                    return [3, 15];
                  case 14:
                    d ? a(d) : o(), (f.label = 15);
                  case 15:
                    return [2];
                }
              });
            }),
            [S, P, d, s, l, R, Z, I, T, n, r, a, i, o]
          );
        return (0, y.jsx)(eS.Z, {
          isOpen: !0,
          onClose: o,
          type: "success",
          title: "Found plugin",
          primaryButton: (0, y.jsx)(eZ.ZP.Button, {
            title: R
              ? "Refetch manifest"
              : Z
              ? "Install localhost plugin"
              : "Next",
            color: "primary",
            onClick: D,
            loading: v || N,
          }),
          secondaryButton:
            (R || S || P) &&
            (0, y.jsx)(eZ.ZP.Button, {
              title: "Cancel",
              color: "neutral",
              onClick: o,
            }),
          children: (0, y.jsxs)(rz, {
            children: [
              (0, y.jsx)(rH.rC, { manifestValidationInfo: m }),
              c && (0, y.jsx)(rH.q6, { apiValidationInfo: c }),
              d && (0, y.jsx)(rq.Z, { plugin: d }),
              S &&
                !R &&
                (0, y.jsxs)("div", {
                  children: [
                    (0, y.jsx)("div", {
                      className: "text-sm",
                      children: "Enter your service access token:",
                    }),
                    (0, y.jsx)("div", {
                      className: "mt-2",
                      children: (0, y.jsx)(rF.Z, {
                        ref: k,
                        name: "serviceToken",
                        placeholder: "Service access token",
                        autoComplete: "off",
                        onPressEnter: D,
                        autoFocus: !0,
                      }),
                    }),
                  ],
                }),
              P &&
                !R &&
                (0, y.jsxs)("div", {
                  children: [
                    (0, y.jsx)("div", {
                      className: "text-sm",
                      children: "Enter your OAuth credentials:",
                    }),
                    (0, y.jsx)("div", {
                      className: "mt-2",
                      children: (0, y.jsx)(rF.Z, {
                        ref: C,
                        name: "clientId",
                        placeholder: "Client ID",
                        autoComplete: "off",
                        onPressEnter: D,
                        autoFocus: !0,
                      }),
                    }),
                    (0, y.jsx)("div", {
                      className: "mt-2",
                      children: (0, y.jsx)(rF.Z, {
                        ref: _,
                        type: "password",
                        name: "clientSecret",
                        placeholder: "Client secret",
                        autoComplete: "off",
                        onPressEnter: D,
                      }),
                    }),
                  ],
                }),
              h && (0, y.jsx)(rQ, { children: h }),
            ],
          }),
        });
      }
      function rJ(e) {
        var t = e.plugin,
          n = e.manifestAccessToken,
          r = e.verificationTokens,
          a = e.onReadyToInstall,
          i = e.onClose,
          o = (0, b._)((0, w.useState)(), 2),
          s = o[0],
          l = o[1],
          u = (0, b._)((0, w.useState)(!1), 2),
          c = u[0],
          d = u[1],
          m = (0, w.useCallback)(
            (0, ed._)(function () {
              var e, i;
              return (0, ef.Jh)(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      o.trys.push([0, 2, 3, 4]),
                      d(!0),
                      [
                        4,
                        ea.ZP.scrapePluginManifest({
                          domain: t.domain,
                          manifestAccessToken: n,
                        }),
                      ]
                    );
                  case 1:
                    if ((e = o.sent().plugin)) {
                      for (var s in ((i =
                        "service_http" === e.manifest.auth.type ||
                        "oauth" === e.manifest.auth.type
                          ? e.manifest.auth.verification_tokens
                          : {}),
                      r))
                        if (r[s] !== i[s])
                          return (
                            l(
                              'Please add the "'.concat(
                                s,
                                '" token to your manifest file.'
                              )
                            ),
                            [2]
                          );
                      a(e);
                    } else l("Error creating plugin.");
                    return [3, 4];
                  case 2:
                    return o.sent(), l("Error creating plugin."), [3, 4];
                  case 3:
                    return d(!1), [7];
                  case 4:
                    return [2];
                }
              });
            }),
            [t, n, r, a]
          );
        return (0, y.jsx)(eS.Z, {
          isOpen: !0,
          onClose: i,
          type: "success",
          title: "Add verification token",
          primaryButton: (0, y.jsx)(eZ.ZP.Button, {
            title: "Verify tokens",
            color: "primary",
            onClick: m,
            loading: c,
          }),
          secondaryButton: (0, y.jsx)(eZ.ZP.Button, {
            title: "I'll add the tokens later",
            color: "neutral",
            onClick: i,
          }),
          children: (0, y.jsxs)(rz, {
            children: [
              (0, y.jsx)(rq.Z, { plugin: t }),
              (0, y.jsx)("div", {
                className: "text-sm",
                children:
                  "Add the following verification tokens to your manifest file:",
              }),
              (0, y.jsx)("pre", {
                className: "text-sm",
                children: JSON.stringify(r, null),
              }),
              s && (0, y.jsx)(rQ, { children: s }),
            ],
          }),
        });
      }
      function rY(e) {
        var t = e.plugin,
          n = e.onClickInstall,
          r = e.onClose,
          a = (0, w.useCallback)(
            function () {
              n(t);
            },
            [t, n]
          );
        return (0, y.jsx)(eS.Z, {
          isOpen: !0,
          onClose: r,
          type: "success",
          title: "Ready to install",
          primaryButton: (0, y.jsx)(eZ.ZP.Button, {
            title: "Install for me",
            color: "primary",
            onClick: a,
          }),
          secondaryButton: (0, y.jsx)(eZ.ZP.Button, {
            title: "Install later",
            color: "neutral",
            onClick: r,
          }),
          children: (0, y.jsx)(rz, {
            children: (0, y.jsxs)("div", {
              className: "text-sm",
              children: [
                "Your unverified plugin can now be installed by",
                " ",
                (0, y.jsx)("a", {
                  href: "https://platform.openai.com/docs/plugins/production/can-i-invite-people-to-try-my-plugin",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "text-green-600",
                  children: "up to 15 developers",
                }),
                ". Once ",
                "you're",
                " ready to make your plugin available to everyone, you can",
                " ",
                (0, y.jsx)("a", {
                  href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "text-green-600",
                  children: "submit your plugin for review",
                }),
                ".",
              ],
            }),
          }),
        });
      }
      function rK(e) {
        var t = e.onConfirm,
          n = e.onClose;
        return (0, y.jsx)(eS.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: "Unverified plugin",
          primaryButton: (0, y.jsx)(eZ.ZP.Button, {
            title: "Continue",
            color: "primary",
            onClick: t,
          }),
          secondaryButton: (0, y.jsx)(eZ.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: n,
          }),
          children: (0, y.jsx)(rz, {
            children: (0, y.jsx)(rB.I, {
              children: (0, y.jsx)(rB.Z, {
                icon: "\uD83D\uDEA8",
                children:
                  "OpenAI hasn't vetted this plugin. This plugin may pose risks to your information. Be sure you trust this plugin before proceeding.",
              }),
            }),
          }),
        });
      }
      function rX(e) {
        var t = e.plugin,
          n = e.onInstall,
          r = e.onClose,
          a = (0, b._)((0, w.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, b._)((0, w.useState)(t), 2),
          l = s[0],
          u = s[1],
          c = (0, w.useCallback)(function () {
            o(!0);
          }, []);
        return l
          ? i
            ? (0, y.jsx)(r1, { plugin: l, onInstall: n, onClose: r })
            : (0, y.jsx)(rK, { onConfirm: c, onClose: r })
          : (0, y.jsx)(r0, { onLoad: u, onClose: r });
      }
      function r0(e) {
        var t = e.onLoad,
          n = e.onClose,
          r = (0, w.useRef)(null),
          a = (0, b._)((0, w.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, b._)((0, w.useState)(), 2),
          l = s[0],
          u = s[1];
        (0, w.useEffect)(function () {
          setTimeout(function () {
            var e;
            null === (e = r.current) || void 0 === e || e.focus();
          }, 50);
        }, []);
        var c = (0, w.useCallback)(
          (0, ed._)(function () {
            var e, n, a;
            return (0, ef.Jh)(this, function (i) {
              switch (i.label) {
                case 0:
                  if (
                    !(n =
                      null === (e = r.current) || void 0 === e
                        ? void 0
                        : e.value)
                  )
                    return u("Please provide a URL."), [2];
                  if ((0, tc.NB)(n))
                    return (
                      u(
                        'To add a localhost plugin, please go to "Develop your own plugin."'
                      ),
                      [2]
                    );
                  i.label = 1;
                case 1:
                  return (
                    i.trys.push([1, 3, 4, 5]),
                    o(!0),
                    [4, ea.ZP.getPluginByDomain({ domain: n })]
                  );
                case 2:
                  return (
                    (a = i.sent()) ? t(a) : u("That plugin doesn't exist."),
                    [3, 5]
                  );
                case 3:
                  return i.sent(), u("Couldn't find plugin."), [3, 5];
                case 4:
                  return o(!1), [7];
                case 5:
                  return [2];
              }
            });
          }),
          [t, o, u]
        );
        return (0, y.jsx)(eS.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: "Install an unverified plugin",
          primaryButton: (0, y.jsx)(eZ.ZP.Button, {
            title: "Find plugin",
            color: "primary",
            onClick: c,
            loading: i,
          }),
          secondaryButton: (0, y.jsx)(eZ.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: n,
          }),
          children: (0, y.jsxs)(rz, {
            children: [
              (0, y.jsx)("div", {
                children:
                  "Please provide the website domain of the unverified plugin you'd like to install.",
              }),
              (0, y.jsx)(rF.Z, {
                ref: r,
                name: "url",
                placeholder: "openai.com",
                onPressEnter: c,
              }),
              l && (0, y.jsx)(rQ, { children: l }),
            ],
          }),
        });
      }
      function r1(e) {
        var t = e.plugin,
          n = e.onInstall,
          r = e.onClose,
          a = (0, b._)((0, w.useState)(), 2),
          i = a[0],
          o = a[1],
          s = (0, b._)((0, w.useState)(!1), 2),
          l = s[0],
          u = s[1],
          c = (0, w.useRef)(null),
          d = (0, rL.U$)({
            onSuccess: function (e) {
              n(e), r();
            },
            onError: function (e) {
              o("Couldn't install plugin.");
            },
          }),
          m = t.manifest.name_for_human,
          f = "user_http" === t.manifest.auth.type,
          h = "oauth" === t.manifest.auth.type,
          g = (0, w.useCallback)(
            (0, ed._)(function () {
              var e, n;
              return (0, ef.Jh)(this, function (r) {
                switch (r.label) {
                  case 0:
                    if (!h) return [3, 1];
                    return (
                      (e = (0, rL.nT)(t))
                        ? (window.location.href = e)
                        : o("Missing plugin configuration for ".concat(m, ".")),
                      [3, 8]
                    );
                  case 1:
                    if (!f) return [3, 7];
                    if (
                      !(null === (n = c.current) || void 0 === n
                        ? void 0
                        : n.value)
                    )
                      return o("Please provide your credentials."), [2];
                    r.label = 2;
                  case 2:
                    return (
                      r.trys.push([2, 4, 5, 6]),
                      u(!0),
                      [
                        4,
                        ea.ZP.setPluginUserHttpToken({
                          id: t.id,
                          userAccessToken: c.current.value,
                        }),
                      ]
                    );
                  case 3:
                    return r.sent(), d(t.id), [3, 6];
                  case 4:
                    return r.sent(), o("Couldn't install plugin."), [3, 6];
                  case 5:
                    return u(!1), [7];
                  case 6:
                    return [3, 8];
                  case 7:
                    try {
                      u(!0), d(t.id);
                    } catch (e) {
                      o("Couldn't install plugin.");
                    } finally {
                      u(!1);
                    }
                    r.label = 8;
                  case 8:
                    return [2];
                }
              });
            }),
            [t, m, h, f, d]
          );
        return (0, y.jsx)(eS.Z, {
          isOpen: !0,
          onClose: r,
          type: "success",
          title: "Unverified plugin",
          primaryButton: (0, y.jsx)(eZ.ZP.Button, {
            title: h ? "Log in with ".concat(m) : "Install plugin",
            color: "primary",
            onClick: g,
            loading: l,
          }),
          secondaryButton: (0, y.jsx)(eZ.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: r,
          }),
          children: (0, y.jsxs)(rz, {
            children: [
              (0, y.jsx)(rq.Z, { plugin: t }),
              f &&
                (0, y.jsxs)("div", {
                  children: [
                    (0, y.jsx)("div", {
                      className: "text-sm",
                      children:
                        t.manifest.auth.instructions ||
                        "Enter your HTTP access token below:",
                    }),
                    (0, y.jsx)("div", {
                      className: "mt-2",
                      children: (0, y.jsx)(rF.Z, {
                        ref: c,
                        type: "password",
                        name: "token",
                        placeholder: "Enter your credentials",
                        autoComplete: "off",
                        onPressEnter: g,
                      }),
                    }),
                  ],
                }),
              h &&
                (0, y.jsxs)("div", {
                  children: [
                    "You will be redirected to",
                    " ",
                    (0, y.jsx)("span", {
                      className: "font-medium",
                      children: m,
                    }),
                    " to log in.",
                  ],
                }),
              i && (0, y.jsx)(rQ, { children: i }),
            ],
          }),
        });
      }
      var r2 = n(95552),
        r5 = n.n(r2),
        r3 = n(86433),
        r4 = n(76559),
        r6 = n(74437);
      function r7(e) {
        var t = e.onClose,
          n = (0, r3.S)().setupMfa;
        return (0, y.jsx)(eS.Z, {
          isOpen: !0,
          onClose: t,
          type: "success",
          title: "Enable two-factor authentication",
          primaryButton: (0, y.jsx)(eZ.ZP.Button, {
            title: "Enable two-factor authentication",
            color: "primary",
            onClick: n,
          }),
          secondaryButton: (0, y.jsx)(eZ.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: t,
          }),
          children: (0, y.jsx)(rz, {
            children: (0, y.jsx)(rB.I, {
              children: (0, y.jsx)(rB.Z, {
                icon: "\uD83D\uDEA8",
                children:
                  "This plugin requires you to have two-factor authentication enabled for additional security. Please set up two-factor authentication and try again.",
              }),
            }),
          }),
        });
      }
      function r8() {
        var e = (0, U._)([
          "text-sm text-black/70 dark:text-white/70 whitespace-nowrap ",
          "",
        ]);
        return (
          (r8 = function () {
            return e;
          }),
          e
        );
      }
      function r9() {
        var e = (0, U._)([
          "hidden h-4 border-l border-black/30 dark:border-white/30 sm:block",
        ]);
        return (
          (r9 = function () {
            return e;
          }),
          e
        );
      }
      var ae =
        ((f = {}),
        (0, ng._)(f, E._G.Mobile, 8),
        (0, ng._)(f, E._G.Small, 4),
        (0, ng._)(f, E._G.Medium, 4),
        (0, ng._)(f, E._G.Large, 6),
        (0, ng._)(f, E._G.XLarge, 8),
        f);
      ((o = h || (h = {}))[(o.All = 0)] = "All"),
        (o[(o.Installed = 1)] = "Installed"),
        ((s = g || (g = {})).New = "newly_added"),
        (s.Popular = "most_popular");
      var at = (0, M.vU)({
          searchPlaceholder: {
            id: "PluginStoreModal.search_placeholder",
            defaultMessage: "Search plugins",
            description: "Placeholder text for the plugin store search bar",
          },
          noSearchResultsTitle: {
            id: "PluginStoreModal.no_search_results",
            defaultMessage: 'No plugins found for "{query}"',
            description:
              "Message shown when no plugins are found for a search query",
          },
          noSearchResultsHint: {
            id: "PluginStoreModal.no_search_results_hint",
            defaultMessage: "Try a different query or category",
            description:
              "Hint shown when no plugins are found for a search query",
          },
        }),
        an = [
          { id: g.Popular, title: "Popular" },
          { id: g.New, title: "New" },
          { id: h.All, title: "All" },
          { id: h.Installed, title: "Installed" },
        ];
      function ar(e) {
        var t,
          n,
          r,
          a,
          i,
          o,
          s,
          l,
          u,
          c,
          d,
          m,
          f,
          p,
          v,
          j,
          k,
          _,
          M,
          N,
          I,
          Z,
          S,
          P,
          R,
          D,
          A,
          F,
          B = e.onInstallWithAuthRequired,
          L = e.onClickInstallDeveloper,
          q = e.onClickDevelop,
          O = e.onClickAbout,
          U = e.onClose,
          z = (0, ee.Z)(),
          Q = (0, T.hz)(),
          H = (0, b._)((0, w.useState)(), 2),
          $ = H[0],
          G = H[1],
          W = (0, b._)((0, w.useState)(""), 2),
          V = W[0],
          J = W[1],
          Y = ae[(0, E.dQ)()],
          K =
            ((r = (t = { numItemsPerPage: Y, filter: $, query: V })
              .numItemsPerPage),
            (a = t.filter),
            (i = t.query),
            (o = (0, ep.kP)().session),
            (l = (s = (0, r6.C)()).installedPlugins),
            (u = s.isLoading),
            (d = (c = (0, r4.Z)()).approvedPlugins),
            (m = c.isLoading),
            (f = c.approvedPluginsByCategory),
            (p = (0, w.useMemo)(
              function () {
                var e = [],
                  t = !0,
                  n = !1,
                  r = void 0;
                try {
                  for (
                    var a, i = an[Symbol.iterator]();
                    !(t = (a = i.next()).done);
                    t = !0
                  ) {
                    var o,
                      s = a.value;
                    Object.values(g).includes(s.id)
                      ? (null === (o = f[s.id]) || void 0 === o
                          ? void 0
                          : o.items.length) > 0 && e.push(s)
                      : s.id === h.Installed
                      ? l.length > 0 && e.push(s)
                      : e.push(s);
                  }
                } catch (e) {
                  (n = !0), (r = e);
                } finally {
                  try {
                    t || null == i.return || i.return();
                  } finally {
                    if (n) throw r;
                  }
                }
                return e;
              },
              [l.length, f]
            )),
            (j = (function (e, t) {
              for (
                var n = (0, eR._)(e), r = r5()(t), a = n.length - 1;
                a > 0;
                a--
              ) {
                var i,
                  o = Math.floor(r() * (a + 1));
                (i = [n[o], n[a]]), (n[a] = i[0]), (n[o] = i[1]);
              }
              return (
                ad("retrieval.apps.openai.com", n), ad("api.openai.com", n), n
              );
            })(
              (v = aa(
                (0, w.useMemo)(
                  function () {
                    if (a === h.All) return d;
                    if (a && Object.values(g).includes(a)) {
                      var e, t;
                      return null !==
                        (t =
                          null === (e = f[a]) || void 0 === e
                            ? void 0
                            : e.items) && void 0 !== t
                        ? t
                        : [];
                    }
                    return [];
                  },
                  [d, a, f]
                ),
                i
              )),
              (null == o
                ? void 0
                : null === (n = o.user) || void 0 === n
                ? void 0
                : n.id) || ""
            )),
            (k = aa(l, i)),
            (_ = []),
            (M = !1),
            a === h.Installed
              ? ((_ = k), (M = u))
              : i
              ? ((_ = v), (M = m))
              : ((_ = j), (M = m)),
            {
              isLoading: M,
              availableFilters: p,
              items: ((I = (N = { items: _, numItemsPerPage: r }).items),
              (Z = N.numItemsPerPage),
              (P = (S = (0, b._)((0, w.useState)(0), 2))[0]),
              (R = S[1]),
              (D = Math.ceil(I.length / Z)),
              (A = P * Z),
              (F = {
                page: P,
                numPages: D,
                pageItems: I.slice(A, A + Z),
                goToPage: (0, w.useCallback)(function (e) {
                  R(e);
                }, []),
              })).pageItems,
              pagination: (0, x._)(F, ["pageItems"]),
            }),
          X = K.availableFilters,
          et = K.isLoading,
          en = K.items,
          er = K.pagination,
          ea = er.page,
          ei = er.numPages,
          eo = er.goToPage,
          es = (0, r6.C)().installedPlugins;
        (0, w.useEffect)(
          function () {
            $ === h.Installed && 0 === es.length && (G(X[0].id), eo(0));
          },
          [$, es, eo, X]
        ),
          (0, w.useEffect)(
            function () {
              et || void 0 !== $ || G(X[0].id);
            },
            [et, $]
          );
        var eu = (0, b._)((0, w.useState)(!1), 2),
          ec = eu[0],
          ed = eu[1],
          em = (0, w.useCallback)(
            function (e) {
              J(e), eo(0), G(h.All);
            },
            [eo]
          );
        return ec
          ? (0, y.jsx)(r7, {
              onClose: function () {
                ed(!1);
              },
            })
          : (0, y.jsx)(eS.Z, {
              isOpen: !0,
              onClose: U,
              size: "custom",
              className:
                "w-full max-w-7xl bg-gray-50 md:min-w-[672px] lg:min-w-[896px] xl:min-w-[1024px]",
              type: "success",
              title: "Plugin store",
              closeButton: (0, y.jsx)(eZ.ZP.CloseButton, { onClose: U }),
              children: (0, y.jsxs)(rz, {
                children: [
                  !et &&
                    X.length > 1 &&
                    (0, y.jsxs)("div", {
                      className: "flex flex-wrap gap-3",
                      children: [
                        X.map(function (e) {
                          return (0, y.jsx)(
                            ai,
                            {
                              selected: $ === e.id,
                              onClick: function () {
                                G(e.id), eo(0);
                              },
                              children: e.title,
                            },
                            e.id
                          );
                        }),
                        (0, y.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, y.jsx)("div", {
                              className:
                                "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                              children: (0, y.jsx)(el.ZP, {
                                icon: C.jRj,
                                className:
                                  "h-5 w-5 text-gray-500 dark:text-gray-400",
                              }),
                            }),
                            (0, y.jsx)(rF.Z, {
                              className: "pl-10",
                              autoFocus: !0,
                              type: "search",
                              placeholder: z.formatMessage(
                                at.searchPlaceholder
                              ),
                              value: V,
                              onChange: function (e) {
                                return em(e.target.value);
                              },
                              name: "search",
                            }),
                          ],
                        }),
                      ],
                    }),
                  (0, y.jsx)(ao, {
                    plugins: en,
                    numSkeletons: Y,
                    query: V,
                    isLoading: et,
                    onInstallWithAuthRequired: B,
                    onRequestMfa: function () {
                      return ed(!0);
                    },
                  }),
                  (0, y.jsxs)("div", {
                    className:
                      "flex flex-col flex-wrap items-center justify-center gap-6 sm:flex-row md:justify-between",
                    children: [
                      (0, y.jsx)("div", {
                        className:
                          "flex flex-1 justify-start max-lg:justify-center",
                        children:
                          ei > 1 &&
                          (0, y.jsx)(ac, {
                            page: ea,
                            numPages: ei,
                            goToPage: eo,
                          }),
                      }),
                      (0, y.jsxs)("div", {
                        className:
                          "flex flex-col items-center gap-2 sm:flex-row",
                        children: [
                          Q.has("tools3_dev") &&
                            (0, y.jsxs)(y.Fragment, {
                              children: [
                                (0, y.jsx)(am, {
                                  onClick: L,
                                  children: "Install an unverified plugin",
                                }),
                                (0, y.jsx)(af, {}),
                                (0, y.jsx)(am, {
                                  onClick: q,
                                  children: "Develop your own plugin",
                                }),
                                (0, y.jsx)(af, {}),
                              ],
                            }),
                          (0, y.jsx)(am, {
                            onClick: O,
                            children: "About plugins",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
      }
      function aa(e, t) {
        return (0, w.useMemo)(
          function () {
            return "" !== t
              ? e
                  .map(function (e) {
                    return {
                      plugin: e,
                      score: (function (e, t) {
                        var n = t.toLowerCase(),
                          r = n.trim().split(/\s+/),
                          a = e.manifest.description_for_human.toLowerCase(),
                          i = e.manifest.name_for_human.toLowerCase(),
                          o = 0;
                        if (i === n || e.domain.toLowerCase() === n) return 1e3;
                        if (i.startsWith(n)) return 500;
                        if (i.includes(n)) return 100;
                        var s = !0,
                          l = !1,
                          u = void 0;
                        try {
                          for (
                            var c, d = r[Symbol.iterator]();
                            !(s = (c = d.next()).done);
                            s = !0
                          ) {
                            var m = c.value;
                            if (i.startsWith(m)) o += 50;
                            else if (i.includes(m)) o += 10;
                            else {
                              if (!a.includes(m)) return 0;
                              o += 1;
                            }
                          }
                        } catch (e) {
                          (l = !0), (u = e);
                        } finally {
                          try {
                            s || null == d.return || d.return();
                          } finally {
                            if (l) throw u;
                          }
                        }
                        return o;
                      })(e, t),
                    };
                  })
                  .filter(function (e) {
                    return e.score > 0;
                  })
                  .sort(function (e, t) {
                    return t.score - e.score;
                  })
                  .map(function (e) {
                    return e.plugin;
                  })
              : e.sort(function (e, t) {
                  return e.manifest.name_for_human.localeCompare(
                    t.manifest.name_for_human
                  );
                });
          },
          [e, t]
        );
      }
      function ai(e) {
        var t = e.selected,
          n = e.onClick,
          r = e.children;
        return (0, y.jsx)(es.z, {
          color: t ? "light" : "neutral",
          className: (0, z.Z)(
            "focus:ring-0",
            t && "hover:bg-gray-200",
            !t && "text-black/50"
          ),
          onClick: n,
          children: r,
        });
      }
      function ao(e) {
        var t = e.plugins,
          n = e.numSkeletons,
          r = e.isLoading,
          a = e.onInstallWithAuthRequired,
          i = e.onRequestMfa,
          o = e.query;
        if (0 === t.length && !r && o)
          return (0, y.jsxs)("div", {
            className:
              "flex h-[404px] flex-col items-center justify-center gap-4",
            children: [
              (0, y.jsx)("div", {
                className: "text-lg font-medium",
                children: (0, y.jsx)(
                  _.Z,
                  (0, em._)((0, v._)({}, at.noSearchResultsTitle), {
                    values: { query: o },
                  })
                ),
              }),
              (0, y.jsx)("div", {
                className: "text-sm text-black/50",
                children: (0, y.jsx)(_.Z, (0, v._)({}, at.noSearchResultsHint)),
              }),
            ],
          });
        var s = r
          ? Array(n)
              .fill(0)
              .map(function (e, t) {
                return (0, y.jsx)(al, {}, t);
              })
          : t.map(function (e) {
              return (0,
              y.jsx)(as, { plugin: e, onInstallWithAuthRequired: a, onRequestMfa: i }, e.id);
            });
        return (0, y.jsx)("div", {
          className:
            "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 xl:grid-cols-4",
          children: s,
        });
      }
      function as(e) {
        var t,
          n,
          r = e.plugin,
          a = e.onInstallWithAuthRequired,
          i = e.onRequestMfa,
          o = (0, b._)((0, w.useState)(!1), 2),
          s = o[0],
          l = o[1],
          u = (0, b._)((0, w.useState)(!1), 2),
          c = u[0],
          d = u[1],
          m = (0, rL.U$)({
            onSuccess: function (e) {
              (0, rE.wu)(e.id);
            },
            onError: function (e) {
              console.error(e),
                n_.m.danger(
                  "Error installing ".concat(r.manifest.name_for_human, ".")
                );
            },
            onSettled: function () {
              l(!1);
            },
          }),
          f = (0, rL.qo)({
            onSuccess: function () {},
            onError: function (e) {
              console.error(e),
                n_.m.danger(
                  "Error uninstalling ".concat(r.manifest.name_for_human, ".")
                );
            },
            onSettled: function () {
              d(!1);
            },
          }),
          h = (0, ep.kP)().session,
          g = (0, T.hz)(),
          p = (0, r3.S)().isUsernamePassword,
          v = (0, w.useCallback)(
            function () {
              var e,
                t = r.manifest.auth.type;
              if (
                !("none" === t || "service_http" === t) &&
                !(null == h
                  ? void 0
                  : null === (e = h.user) || void 0 === e
                  ? void 0
                  : e.mfa) &&
                g.has(ei.i) &&
                p
              ) {
                i();
                return;
              }
              if ("oauth" === t) {
                var n = (0, rL.nT)(r);
                n
                  ? (window.location.href = n)
                  : n_.m.danger(
                      "Missing plugin configuration for ".concat(
                        r.manifest.name_for_human,
                        "."
                      )
                    );
              } else "user_http" === t ? a(r) : (l(!0), m(r.id));
            },
            [r, m, a, i, p, h, g]
          ),
          x = (0, w.useCallback)(
            function () {
              d(!0), f(r.id);
            },
            [r, f]
          );
        return (
          (n =
            s || c
              ? (0, y.jsxs)(es.z, {
                  color: "light",
                  className: "bg-green-100 hover:bg-green-100",
                  children: [
                    s ? "Installing" : "Uninstalling",
                    (0, y.jsx)(eP.Z, {}),
                  ],
                })
              : (
                  null === (t = r.user_settings) || void 0 === t
                    ? void 0
                    : t.is_installed
                )
              ? (0, y.jsxs)(es.z, {
                  color: "light",
                  className: "hover:bg-gray-200",
                  onClick: x,
                  children: ["Uninstall", (0, y.jsx)(el.ZP, { icon: C.$Rx })],
                })
              : (0, y.jsxs)(es.z, {
                  onClick: v,
                  children: ["Install", (0, y.jsx)(el.ZP, { icon: C.wzc })],
                })),
          (0, y.jsx)(au, {
            logo: (0, y.jsx)(nh.Z, {
              url: r.manifest.logo_url,
              name: r.manifest.name_for_human,
              size: "100%",
              large: !0,
            }),
            tag: (0, tc.cf)(r)
              ? (0, y.jsx)(tC, {})
              : "approved" !== r.status
              ? (0, y.jsx)(tw, {})
              : void 0,
            title: (0, y.jsx)("div", {
              className: "max-w-full truncate text-lg leading-6",
              children: r.manifest.name_for_human,
            }),
            button: n,
            description: r.manifest.description_for_human,
          })
        );
      }
      function al() {
        return (0, y.jsx)(au, {
          logo: (0, y.jsx)("div", {
            className: "h-full w-full rounded-[5px] bg-gray-300",
          }),
          title: (0, y.jsx)("div", {
            className: "h-[19px] w-[103px] rounded-[5px] bg-gray-100",
          }),
          button: (0, y.jsx)("div", {
            className: "h-[36px] w-[103px] rounded-[5px] bg-gray-200",
          }),
          description: (0, y.jsxs)("div", {
            className: "flex flex-col gap-1.5",
            children: [
              (0, y.jsx)("div", {
                className: "h-[14px] w-[209px] rounded-[5px] bg-gray-100",
              }),
              (0, y.jsx)("div", {
                className: "h-[14px] w-[218px] rounded-[5px] bg-gray-100",
              }),
              (0, y.jsx)("div", {
                className: "h-[14px] w-[184px] rounded-[5px] bg-gray-100",
              }),
            ],
          }),
        });
      }
      function au(e) {
        var t = e.logo,
          n = e.tag,
          r = e.title,
          a = e.button,
          i = e.description;
        return (0, y.jsxs)("div", {
          className:
            "flex flex-col gap-4 rounded border border-black/10 bg-white p-6 dark:border-white/20 dark:bg-gray-900",
          children: [
            (0, y.jsxs)("div", {
              className: "flex gap-4",
              children: [
                (0, y.jsx)("div", {
                  className: "h-[70px] w-[70px] shrink-0",
                  children: t,
                }),
                (0, y.jsxs)("div", {
                  className:
                    "flex min-w-0 flex-col items-start justify-between",
                  children: [
                    n
                      ? (0, y.jsxs)("div", {
                          className: "flex items-center gap-1.5",
                          children: [n, r],
                        })
                      : r,
                    a,
                  ],
                }),
              ],
            }),
            (0, y.jsx)("div", {
              className:
                "h-[60px] text-sm text-black/70 line-clamp-3 dark:text-white/70",
              children: i,
            }),
          ],
        });
      }
      function ac(e) {
        for (
          var t = function (e) {
              u.push(
                (0, y.jsx)(
                  am,
                  {
                    role: "button",
                    className: (0, z.Z)(
                      "flex h-5 w-5 items-center justify-center",
                      e === n &&
                        "text-blue-600 hover:text-blue-600 dark:text-blue-600 dark:hover:text-blue-600"
                    ),
                    onClick: function () {
                      return a(e);
                    },
                    children: e + 1,
                  },
                  e
                )
              );
            },
            n = e.page,
            r = e.numPages,
            a = e.goToPage,
            i = n > 0,
            o = n < r - 1,
            s = (0, w.useCallback)(
              function () {
                a(Math.max(n - 1, 0));
              },
              [n, a]
            ),
            l = (0, w.useCallback)(
              function () {
                a(Math.min(n + 1, r - 1));
              },
              [n, r, a]
            ),
            u = [],
            c = 0;
          c < r;
          c++
        )
          t(c);
        return (0, y.jsxs)("div", {
          className:
            "flex flex-wrap gap-2 text-sm text-black/60 dark:text-white/70",
          children: [
            (0, y.jsxs)(am, {
              role: "button",
              className: (0, z.Z)("flex items-center", !i && "opacity-50"),
              onClick: s,
              $disabled: !i,
              children: [(0, y.jsx)(el.ZP, { icon: C.YFh }), "Prev"],
            }),
            u,
            (0, y.jsxs)(am, {
              role: "button",
              className: (0, z.Z)("flex items-center", !o && "opacity-50"),
              onClick: l,
              $disabled: !o,
              children: ["Next", (0, y.jsx)(el.ZP, { icon: C.Tfp })],
            }),
          ],
        });
      }
      function ad(e, t) {
        var n = t.findIndex(function (t) {
          return t.domain === e;
        });
        if (-1 !== n) {
          var r = t.splice(n, 1)[0];
          t.unshift(r);
        }
      }
      var am = et.Z.button(r8(), function (e) {
          return e.$disabled
            ? "opacity-50 cursor-default"
            : "hover:text-black/50 dark:hover:text-white/50";
        }),
        af = et.Z.div(r9());
      function ah(e) {
        var t = e.allowClose,
          n = e.onConfirm,
          r = e.onClose;
        return (0, y.jsx)(eS.Z, {
          isOpen: !0,
          onClose: r,
          type: "success",
          title: "About plugins",
          primaryButton: (0, y.jsx)(eZ.ZP.Button, {
            title: "OK",
            color: "primary",
            onClick: n,
          }),
          secondaryButton:
            t &&
            (0, y.jsx)(eZ.ZP.Button, {
              title: "Cancel",
              color: "neutral",
              onClick: r,
            }),
          children: (0, y.jsx)(rz, {
            children: (0, y.jsxs)(rB.I, {
              children: [
                (0, y.jsx)(rB.Z, {
                  icon: "\uD83D\uDEA8",
                  children:
                    "Plugins are powered by third party applications that are not controlled by OpenAI. Be sure you trust a plugin before installation.",
                }),
                (0, y.jsx)(rB.Z, {
                  icon: "\uD83C\uDF10",
                  children:
                    "Plugins connect ChatGPT to external apps. If you enable a plugin, ChatGPT may send parts of your conversation and the country or state you're in to the plugin to enhance your conversation.",
                }),
                (0, y.jsx)(rB.Z, {
                  icon: "\uD83E\uDDE0",
                  children:
                    "ChatGPT automatically chooses when to use plugins during a conversation, depending on the plugins you've enabled.",
                }),
              ],
            }),
          }),
        });
      }
      var ag = "oai/apps/hasSeenPluginsDisclaimer";
      function ap(e) {
        var t = e.onInstall,
          n = e.onClose,
          r = (0, b._)((0, w.useState)(!!ec.m.getItem(ag)), 2),
          a = r[0],
          i = r[1],
          o = (0, b._)((0, w.useState)(!1), 2),
          s = o[0],
          l = o[1],
          u = (0, b._)((0, w.useState)(!1), 2),
          c = u[0],
          d = u[1],
          m = (0, b._)((0, w.useState)(), 2),
          f = m[0],
          h = m[1],
          g = (0, b._)((0, w.useState)(!1), 2),
          p = g[0],
          v = g[1],
          x = (0, w.useCallback)(function () {
            i(!0), l(!1), ec.m.setItem(ag, !0);
          }, []),
          j = (0, w.useCallback)(function (e) {
            h(e), d(!0);
          }, []),
          k = (0, w.useCallback)(function () {
            d(!0);
          }, []),
          C = (0, w.useCallback)(function () {
            v(!0);
          }, []),
          _ = (0, w.useCallback)(function () {
            l(!0);
          }, []),
          M = (0, w.useCallback)(
            function (e) {
              (0, rE.wu)(e.id), n(), t(e);
            },
            [t, n]
          ),
          T = (0, w.useCallback)(
            function () {
              h(void 0), d(!1), n();
            },
            [n]
          ),
          N = (0, w.useCallback)(
            function () {
              v(!1), n();
            },
            [n]
          );
        return !a || s
          ? (0, y.jsx)(ah, { allowClose: !a, onConfirm: x, onClose: n })
          : c
          ? (0, y.jsx)(rX, { plugin: f, onInstall: M, onClose: T })
          : p
          ? (0, y.jsx)(r$, {
              onClickInstall: j,
              onInstallLocalhost: M,
              onClose: N,
            })
          : (0, y.jsx)(ar, {
              onInstallWithAuthRequired: j,
              onClickInstallDeveloper: k,
              onClickDevelop: C,
              onClickAbout: _,
              onClose: n,
            });
      }
      function av() {
        var e = (0, U._)([
          "flex h-8 flex-shrink-0 items-center justify-center border-b border-black/10 bg-gray-50 text-xs text-gray-800 dark:border-white/20 dark:bg-[#272832] dark:text-white",
        ]);
        return (
          (av = function () {
            return e;
          }),
          e
        );
      }
      function ax(e) {
        var t,
          n = e.theme,
          r = void 0 === n ? "default" : n,
          a = (0, b._)((0, w.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, b._)((0, w.useState)(!1), 2),
          l = s[0],
          u = s[1],
          c = (0, k.useRouter)(),
          d = (0, r6.C)(),
          m = d.installedPlugins,
          f = d.isLoading,
          h = (0, rE.p0)(),
          g = (0, w.useRef)(null);
        (0, w.useEffect)(
          function () {
            if (!f) {
              var e = c.query,
                t = e.loginAip,
                n = e.loginSuccess,
                r = (0, x._)(e, ["loginAip", "loginSuccess"]);
              if (t) {
                var a,
                  i,
                  o = m.find(function (e) {
                    return e.id === t;
                  });
                o && "true" === n
                  ? ((0, rE.wu)(c.query.loginAip),
                    null === (a = g.current) || void 0 === a || a.open())
                  : n_.m.warning(
                      "Couldn't log in with ".concat(
                        null !==
                          (i =
                            null == o ? void 0 : o.manifest.name_for_human) &&
                          void 0 !== i
                          ? i
                          : "plugin",
                        "."
                      )
                    ),
                  c.replace({ pathname: c.pathname, query: r });
              }
            }
          },
          [c, m, f]
        );
        var p = (0, w.useCallback)(function () {
            var e;
            null === (e = g.current) || void 0 === e || e.open();
          }, []),
          v = (0, w.useCallback)(function () {
            o(!1);
          }, []),
          j = (0, b._)((0, w.useState)(h), 2),
          _ = j[0],
          M = j[1],
          T = (0, w.useCallback)(
            function (e) {
              if (e.length > rE.hZ)
                u(!0),
                  setTimeout(function () {
                    u(!1);
                  }, 600);
              else {
                var t = e.filter(function (e) {
                    return !h.find(function (t) {
                      return t.id === e.id;
                    });
                  }),
                  n = !0,
                  r = !1,
                  a = void 0;
                try {
                  for (
                    var i, o = rE.iO[Symbol.iterator]();
                    !(n = (i = o.next()).done);
                    n = !0
                  ) {
                    var s = (function () {
                      var e = i.value,
                        n = h.find(function (t) {
                          return e.includes(t.domain);
                        });
                      if (n) {
                        var r = e.find(function (e) {
                            return e !== n.domain;
                          }),
                          a = t.find(function (e) {
                            return e.domain === r;
                          });
                        if (a)
                          return (
                            n_.m.warning(
                              "You can't enable "
                                .concat(a.manifest.name_for_human, " while ")
                                .concat(
                                  n.manifest.name_for_human,
                                  " is enabled."
                                )
                            ),
                            { v: void 0 }
                          );
                      }
                    })();
                    if ("object" === (0, ro._)(s)) return s.v;
                  }
                } catch (e) {
                  (r = !0), (a = e);
                } finally {
                  try {
                    n || null == o.return || o.return();
                  } finally {
                    if (r) throw a;
                  }
                }
                (0, rE.dT)(
                  e.map(function (e) {
                    return e.id;
                  })
                );
              }
            },
            [h]
          ),
          N = (0, w.useCallback)(function (e) {
            var t;
            null === (t = g.current) || void 0 === t || t.close(),
              "store" === e && o(!0);
          }, []),
          I = (0, w.useCallback)(
            function () {
              M(h),
                eB.m.logEvent("chatgpt_plugin_chooser_opened", null, {
                  num_enabled_plugins: "".concat(h.length),
                });
            },
            [h]
          ),
          Z = (0, w.useCallback)(
            function () {
              var e = _.filter(function (e) {
                  return !h.find(function (t) {
                    return t.id === e.id;
                  });
                }),
                t = h.filter(function (e) {
                  return !_.find(function (t) {
                    return t.id === e.id;
                  });
                }),
                n = !0,
                r = !1,
                a = void 0;
              try {
                for (
                  var i, o = t[Symbol.iterator]();
                  !(n = (i = o.next()).done);
                  n = !0
                ) {
                  var s = i.value;
                  eB.m.logEvent("chatgpt_plugin_enabled", null, {
                    plugin_id: s.id,
                  });
                }
              } catch (e) {
                (r = !0), (a = e);
              } finally {
                try {
                  n || null == o.return || o.return();
                } finally {
                  if (r) throw a;
                }
              }
              var l = !0,
                u = !1,
                c = void 0;
              try {
                for (
                  var d, m = e[Symbol.iterator]();
                  !(l = (d = m.next()).done);
                  l = !0
                ) {
                  var f = d.value;
                  eB.m.logEvent("chatgpt_plugin_disabled", null, {
                    plugin_id: f.id,
                  });
                }
              } catch (e) {
                (u = !0), (c = e);
              } finally {
                try {
                  l || null == m.return || m.return();
                } finally {
                  if (u) throw c;
                }
              }
            },
            [h, _]
          ),
          S = m.map(function (e) {
            return {
              value: e,
              title: e.manifest.name_for_human,
              description: e.manifest.description_for_human,
              tags: [],
              customTags: (0, tc.cf)(e)
                ? (0, y.jsx)(tC, {})
                : "approved" !== e.status
                ? (0, y.jsx)(tw, {})
                : void 0,
              imageUrl: e.manifest.logo_url,
            };
          }),
          P = S.filter(function (e) {
            return h.find(function (t) {
              return t.id === e.value.id;
            });
          }),
          R = "".concat(0 === h.length ? "No" : h.length, " plugins enabled");
        if (h.length > 0 && h.length < 6) {
          var D = h.map(function (e, t) {
            return (0,
            y.jsx)(nh.Z, { url: e.manifest.logo_url, name: e.manifest.name_for_human, size: 24 }, t);
          });
          R = (0, y.jsx)("div", { className: "flex gap-2", children: D });
        }
        var A = [{ id: "store", label: "Plugin store", icon: C.Rgz }];
        m.length > rE.hZ &&
          (t = (0, y.jsxs)(ab, {
            className: (0, z.Z)(
              "transition-colors duration-300",
              l && "bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800"
            ),
            children: [h.length, "/", rE.hZ, " Enabled"],
          }));
        var E = (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsx)(ab, { children: "Loading..." }),
            (0, y.jsx)(rC, { showCheckbox: !0, theme: r }),
            (0, y.jsx)(rC, { showCheckbox: !0, theme: r }),
            (0, y.jsx)(rC, { showCheckbox: !0, theme: r }),
            (0, y.jsx)(rC, { showCheckbox: !0, theme: r }),
            (0, y.jsx)(rC, { showCheckbox: !0, theme: r }),
          ],
        });
        return (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsx)(rb, {
              name: "Plugins",
              selectedOptions: P,
              selectedLabel: R,
              options: S,
              actions: A,
              onChange: T,
              onAction: N,
              onOpen: I,
              onClose: Z,
              dropdownRef: g,
              isLoading: f,
              loadingState: E,
              header: t,
              theme: "mini" === r ? "mini" : "default",
            }),
            i && (0, y.jsx)(ap, { onInstall: p, onClose: v }),
          ],
        });
      }
      var ab = et.Z.div(av()),
        ay = n(48101);
      function aj(e) {
        var t,
          n = e.currentModelId,
          r = (0, T.hz)(),
          a = (0, tD.fm)(),
          i = (0, tD.B9)(),
          o = void 0 !== n ? i.get(n) : void 0,
          s = (0, eA.Fl)().isPluginsAvailable,
          l = (0, tD.iu)();
        return r.has("model_switcher") && l.size > 1 && o
          ? (0, y.jsxs)("div", {
              className:
                "relative flex flex-col items-stretch justify-center gap-2 sm:items-center",
              children: [
                (0, y.jsx)(ri, { currentModel: o, onModelChange: a }),
                s &&
                  (null == o
                    ? void 0
                    : null === (t = o.enabledTools) || void 0 === t
                    ? void 0
                    : t.includes("tools3")) &&
                  (0, y.jsx)(ax, { theme: "mini" }),
              ],
            })
          : null;
      }
      var ak = function (e) {
        var t,
          n,
          r,
          a = e.currentModelConfig,
          i = e.clientThreadId,
          o = e.isStaticSharedThread,
          s = e.icon,
          l = (0, T.hz)().has(ei.b5),
          u = (0, N.Ro)(i);
        void 0 === u && (u = a);
        var c = u.tags
            .filter(function (e) {
              return rx.includes(e);
            })
            .map(function (e) {
              return rM(e);
            }),
          d = (0, tN.v)();
        if (d.length > 0) {
          var m = d.map(function (e, t) {
            return (0,
            y.jsx)(nh.Z, { url: e.manifest.logo_url, name: e.manifest.name_for_human, size: 16 }, t);
          });
          r = (0, y.jsxs)(y.Fragment, {
            children: [(0, y.jsx)("div", { children: "Enabled plugins:" }), m],
          });
        }
        var f = (0, k.useRouter)(),
          h =
            o &&
            (null === (t = f.query) || void 0 === t
              ? void 0
              : null === (n = t.shareParams) || void 0 === n
              ? void 0
              : n[1]) === "moderate",
          g = (0, D.tN)(function (e) {
            return e.activeModals.has(D.B.DownloadMessages);
          }),
          p = N.tQ.getThreadCurrentLeafId(i),
          v = (0, N.u9)(i, p),
          x = (0, w.useCallback)(
            function () {
              l && (0, ay.Ub)(i, v);
            },
            [i, l, v]
          );
        return (0, y.jsxs)(y.Fragment, {
          children: [
            l &&
              (0, y.jsx)(eS.Z, {
                type: "success",
                isOpen: g,
                onClose: function () {
                  D.vm.closeModal(D.B.DownloadMessages);
                },
                closeButton: (0, y.jsx)(eZ.ZP.CloseButton, {
                  onClose: function () {
                    D.vm.closeModal(D.B.DownloadMessages);
                  },
                }),
                primaryButton: (0, y.jsx)(eZ.ZP.Button, {
                  onClick: x,
                  children: "Download",
                }),
                title: "Download chat debug info",
                secondaryButton: (0, y.jsx)(eZ.ZP.Button, {
                  onClick: function () {
                    D.vm.closeModal(D.B.DownloadMessages);
                  },
                  children: "Cancel",
                }),
              }),
            (0, y.jsxs)("div", {
              className: (0, z.Z)(
                "flex items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300",
                o ? "sticky top-0 z-50" : ""
              ),
              onClick: function (e) {
                l &&
                  !o &&
                  3 === e.detail &&
                  D.vm.openModal(D.B.DownloadMessages);
              },
              children: [
                o &&
                  (0, y.jsxs)(y.Fragment, {
                    children: [
                      (0, y.jsx)("span", { children: "Shared Chat" }),
                      (0, y.jsx)("span", { className: "px-1", children: "•" }),
                    ],
                  }),
                !o && void 0 !== s && (0, y.jsx)(el.ZP, { icon: s }),
                "Model: ",
                a.title,
                c,
                r
                  ? (0, y.jsxs)(y.Fragment, {
                      children: [
                        (0, y.jsx)("span", {
                          className: "px-1",
                          children: "•",
                        }),
                        r,
                      ],
                    })
                  : null,
                h &&
                  (0, y.jsxs)(y.Fragment, {
                    children: [
                      (0, y.jsx)("span", { className: "px-1", children: "•" }),
                      (0, y.jsx)("strong", { children: "MODERATION VIEW" }),
                    ],
                  }),
              ],
            }),
          ],
        });
      };
      function aw() {
        var e = (0, U._)(["flex flex-col text-sm dark:bg-gray-800"]);
        return (
          (aw = function () {
            return e;
          }),
          e
        );
      }
      function aC() {
        var e = (0, U._)(["h-32 md:h-48 flex-shrink-0"]);
        return (
          (aC = function () {
            return e;
          }),
          e
        );
      }
      function a_() {
        var e = (0, U._)([
          "cursor-pointer absolute right-6 bottom-[124px] md:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200",
        ]);
        return (
          (a_ = function () {
            return e;
          }),
          e
        );
      }
      function aM() {
        var e = (0, U._)([
          "px-2 relative w-full flex flex-col h-full py-2 md:py-6",
        ]);
        return (
          (aM = function () {
            return e;
          }),
          e
        );
      }
      function aT() {
        var e = (0, U._)([
          "text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow",
        ]);
        return (
          (aT = function () {
            return e;
          }),
          e
        );
      }
      var aN = (0, M.vU)({
        codeInterpreterSupportDisclaimer: {
          id: "sharedConversation.codeInterpreterSupportDisclaimer",
          defaultMessage:
            "This chat contains files or images produced by Code Interpreter which are not yet visible in Shared Chats.",
          description:
            "Disclaimer about our lack of support for Code Interpreter inline images and file downloads with shared links",
        },
      });
      function aI(e) {
        var t = e.clientThreadId,
          n = (0, N.qA)(t),
          r = (0, N.je)(t),
          a = (0, N.qN)(function (e) {
            return N.iN.getThreadCreateTime(t, e);
          }),
          i = (0, N.JI)(t),
          o = (0, w.useMemo)(
            function () {
              return eI(i);
            },
            [i]
          );
        return (0, y.jsxs)("div", {
          className:
            "mb-1 border-b border-gray-100 pt-3 sm:mb-2 sm:pb-10 sm:pt-8",
          children: [
            (0, y.jsx)("h1", {
              className:
                "max-w-md text-3xl font-semibold leading-tight text-gray-700 dark:text-gray-100 sm:text-4xl",
              children: n,
            }),
            (null != r || null != a) &&
              (0, y.jsxs)("div", {
                className: "pt-3 text-base text-gray-400 sm:pt-4",
                children: [
                  null != r && (0, y.jsx)("span", { children: r }),
                  null != r &&
                    null != a &&
                    (0, y.jsx)("span", { className: "px-2", children: "•" }),
                  null != a &&
                    (0, y.jsx)(M.Ji, {
                      value: a,
                      month: "long",
                      year: "numeric",
                      day: "numeric",
                    }),
                ],
              }),
            (0, y.jsx)(y.Fragment, {
              children:
                o &&
                (0, y.jsx)("div", {
                  className: "mt-4 rounded-md bg-[#FFF3C9] p-4 text-[#756B5C]",
                  children: (0, y.jsx)(
                    _.Z,
                    (0, v._)({}, aN.codeInterpreterSupportDisclaimer)
                  ),
                }),
            }),
          ],
        });
      }
      function aZ(e) {
        var t,
          n = e.onChangeItemInView,
          r = e.onRequestMoreCompletions,
          a = e.onUpdateNode,
          i = e.onChangeRating,
          o = e.onDeleteNode,
          s = e.onRequestCompletion,
          l = e.onHandleChangeVariantFeedbackInlineComparisonRating,
          u = e.clientThreadId,
          c = e.conversationLeafId,
          d = e.isNewThread,
          m = e.activeRequests,
          f = e.currentThreadModel,
          h = e.isStaticSharedThread,
          g = e.inlineEmbeddedDisplay,
          p = e.initiallyHighlightedMessageId,
          v = e.promptTextareaRef,
          x = (0, eD.useScrollToBottom)(),
          j = (0, b._)((0, eD.useSticky)(), 1)[0],
          k = (0, T.hz)(),
          _ = (0, eA.Fl)().isBetaFeaturesUiEnabled,
          M = (0, N.Kt)(u),
          I = (0, T.Xj)().isLoading,
          Z = (0, tD.iu)(),
          S = (0, tD.ZL)(),
          P = (0, tD.Xy)(f, u),
          R = (0, D.tN)(function (e) {
            return e.isDesktopNavCollapsed;
          }),
          A = k.has("model_switcher") && Z.size > 1,
          E = d && !I && A,
          F = (0, b._)((0, w.useState)(!1), 2),
          B = F[0],
          L = F[1],
          q = (0, nP.Ri)(P.id),
          O = (0, N.U0)(u, c);
        (0, w.useEffect)(
          function () {
            if (M) {
              var e = setTimeout(function () {
                L(!0);
              }, 1e3);
              return function () {
                clearTimeout(e);
              };
            }
            L(!1);
          },
          [M]
        );
        var U = k.has(ei.FZ),
          Q =
            !_ && P.tags.includes(tD.S.GPT_4)
              ? "black"
              : null !== (t = null == q ? void 0 : q.backgroundColor) &&
                void 0 !== t
              ? t
              : void 0,
          H = (0, eR._)(Array(O).keys()).map(function (e) {
            return (0,
            y.jsx)(tW, { isFinalTurn: e === O - 1, turnIndex: e, clientThreadId: u, conversationLeafId: c, onChangeItemInView: n, onChangeRating: i, onRequestMoreCompletions: r, onDeleteNode: o, onRequestCompletion: s, onUpdateNode: a, onHandleChangeVariantFeedbackInlineComparisonRating: l, activeRequests: m, currentModelId: P.id, isStaticSharedThread: h, showInlineEmbeddedDisplay: g, initiallyHighlightedMessageId: p, avatarColor: Q }, e);
          });
        return (0, y.jsxs)(y.Fragment, {
          children: [
            E &&
              (0, y.jsxs)(aD, {
                children: [
                  (0, y.jsx)(aj, { currentModelId: P.id }),
                  (0, y.jsxs)(aA, {
                    children: ["ChatGPT", (0, y.jsx)(eE.IS, {})],
                  }),
                ],
              }),
            (0, y.jsxs)(aS, {
              children: [
                d && !I && !S && !A && (0, y.jsx)(nf, { promptTextareaRef: v }),
                B && (0, y.jsx)(eP.Z, { className: "mt-4 self-center" }),
                !d &&
                  (h || (!I && A)) &&
                  !g &&
                  (0, y.jsx)(ak, {
                    icon: _ ? (null == q ? void 0 : q.icon) : void 0,
                    currentModelConfig: P,
                    clientThreadId: u,
                    isStaticSharedThread: h,
                  }),
                U
                  ? H.length > 0 &&
                    (0, y.jsx)("div", {
                      className: (0, z.Z)(
                        "flex flex-col items-center",
                        R ? "sm:px-14" : "sm:px-4"
                      ),
                      children: (0, y.jsxs)("div", {
                        className: "w-full max-w-[44rem] pt-4",
                        children: [
                          h && !g && (0, y.jsx)(aI, { clientThreadId: u }),
                          H,
                        ],
                      }),
                    })
                  : (0, y.jsxs)(y.Fragment, {
                      children: [
                        h &&
                          !g &&
                          (0, y.jsx)("div", {
                            className:
                              "mx-auto w-full p-4 md:max-w-2xl lg:max-w-xl lg:px-0 xl:max-w-3xl",
                            children: (0, y.jsx)(aI, { clientThreadId: u }),
                          }),
                        H,
                      ],
                    }),
                !E && !g && (0, y.jsx)(aP, {}),
              ],
            }),
            !j &&
              !g &&
              (0, y.jsx)(aR, {
                onClick: x,
                children: (0, y.jsx)(el.ZP, { icon: C.tv1, className: "m-1" }),
              }),
          ],
        });
      }
      var aS = et.Z.div(aw()),
        aP = et.Z.div(aC()),
        aR = et.Z.button(a_()),
        aD = et.Z.div(aM()),
        aA = et.Z.h1(aT());
      function aE() {
        var e = (0, U._)([
          "relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch",
        ]);
        return (
          (aE = function () {
            return e;
          }),
          e
        );
      }
      function aF() {
        var e = (0, U._)(["grow flex-1 overflow-hidden"]);
        return (
          (aF = function () {
            return e;
          }),
          e
        );
      }
      function aB() {
        var e = (0, U._)([
          "w-full mb-4 shadow-[0_2px_12px_0px_rgba(0,0,0,0.08)] dark:bg-gray-800/90 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden bg-gray-50",
        ]);
        return (
          (aB = function () {
            return e;
          }),
          e
        );
      }
      function aL() {
        var e = (0, U._)([
          "flex p-4 bg-white dark:bg-gray-800/90 border-t border-gray-100 dark:border-gray-700 rounded-b-lg w-full h-full\n",
          "\n",
        ]);
        return (
          (aL = function () {
            return e;
          }),
          e
        );
      }
      function aq() {
        var e = (0, U._)([
          "flex w-full items-center justify-left gap-2 min-h-[1.5rem]",
        ]);
        return (
          (aq = function () {
            return e;
          }),
          e
        );
      }
      function aO() {
        var e = (0, U._)([
          "border-none focus:ring-gray-200 dark:focus:ring-gray-600 bg-transparent py-0.5 -my-0.5 pl-1 -ml-1 w-full",
        ]);
        return (
          (aO = function () {
            return e;
          }),
          e
        );
      }
      function aU() {
        var e = (0, U._)(["flex-none h-full mt-auto mb-auto"]);
        return (
          (aU = function () {
            return e;
          }),
          e
        );
      }
      var az = (0, M.vU)({
        sharingModalTitle: {
          id: "thread.sharingModal.title",
          defaultMessage: "Share Link to Chat",
          description:
            "Title of sharing feature in the title of the sharing modal",
        },
        sharingModalDescription: {
          id: "sharingModal.description",
          defaultMessage:
            "Messages you send after creating your link won't be shared. Anyone with the URL will be able to view the shared chat.",
          description:
            "Description of sharing feature in the first paragraph of the sharing modal",
        },
        existingShareDescription: {
          id: "sharingModal.exisitingDescription",
          defaultMessage:
            "You have shared this chat <existingLink>before</existingLink>. If you want to update the shared chat content, <deleteLink>delete this link</deleteLink> and create a new shared link.",
          description:
            "Description in sharing modal when viewing an existing link",
        },
        sharingModalMoreInfo: {
          id: "thread.sharingModal.moreInfo",
          defaultMessage: "More Info",
          description:
            "Link to a helpdesk article with more information about the sharing modal",
        },
        moderationBlocked: {
          id: "sharingModal.moderationBlocked",
          defaultMessage: "This shared link has been disabled by moderation.",
          description:
            "Error message in sharing modal when shared link has been moderated.",
        },
        confirmCloseWithChanges: {
          id: "thread.sharingModal.confirmCloseWithChanges",
          defaultMessage: "You have unsaved changes. Do you want to continue?",
          description:
            "Confirmation message when closing share modal with changes",
        },
        confirmDeleteLink: {
          id: "sharingModal.confirmDeleteLink",
          defaultMessage: "Are you sure you want to delete the share link?",
          description: "Confirmation message when deleting share link",
        },
        codeInterpreterSupportDisclaimer: {
          id: "sharingModal.codeInterpreterSupportDisclaimer",
          defaultMessage:
            "Recipients won't be able to view Code Interpreter images or download files.",
          description:
            "Disclaimer about our lack of support for Code Interpreter inline images and file downloads with shared links",
        },
      });
      function aQ(e) {
        var t = e.serverThreadId,
          n = e.activeRequests,
          r = (0, N.oq)(t),
          a = (0, b._)(
            (0, w.useState)(function () {
              return (0, ev.Z)(function (e, t) {
                return {
                  title: void 0,
                  highlightedMessageId: void 0,
                  initiallyHighlightedMessageId: void 0,
                  currentNodeId: void 0,
                  shareLinkId: void 0,
                  shareLinkUrl: void 0,
                  isPublic: !1,
                  isDeleted: !1,
                  isAnonymous: !0,
                  linkAlreadyExisted: !1,
                  linkError: void 0,
                  moderationState: void 0,
                };
              });
            }),
            1
          )[0],
          i = 0 === n.size && "root" !== r,
          o = (0, w.useRef)(!1);
        return (
          (0, w.useEffect)(
            function () {
              if (i && !o.current) {
                o.current = !0;
                var e = N.tQ.getThreadCurrentLeafId(t),
                  n = N.tQ.getTree(t).getMessageId(e);
                ea.ZP.createShareLink({
                  current_node_id: n,
                  conversation_id: t,
                  is_anonymous: !0,
                })
                  .then(function (e) {
                    a.setState({
                      shareLinkId: e.share_id,
                      shareLinkUrl: e.share_url,
                      isPublic: e.is_public,
                      isDeleted: !e.is_visible,
                      title: e.title,
                      highlightedMessageId: e.highlighted_message_id,
                      initiallyHighlightedMessageId: e.highlighted_message_id,
                      currentNodeId: e.current_node_id,
                      linkAlreadyExisted: e.already_exists,
                      isAnonymous: e.is_anonymous,
                      moderationState: e.moderation_state,
                    });
                  })
                  .catch(function (e) {
                    e instanceof ey.Q0 && "string" == typeof e.message
                      ? a.setState({ linkError: e.message })
                      : (n_.m.danger(
                          "Failed to copy link to clipboard - could not create link"
                        ),
                        D.vm.closeSharingModal());
                  });
              }
            },
            [i]
          ),
          (0, y.jsx)(ex.Provider, {
            value: a,
            children: (0, y.jsx)(aG, (0, v._)({}, e)),
          })
        );
      }
      function aH(e) {
        return (
          !0 === e.has_been_auto_blocked ||
          !0 === e.has_been_auto_moderated ||
          !0 === e.has_been_blocked
        );
      }
      var a$ =
        "https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq";
      function aG(e) {
        var t,
          n,
          r,
          a,
          i,
          o = e.serverThreadId,
          s = e.activeRequests,
          l = e.currentThreadModel,
          u = function () {
            (!V ||
              window.confirm(c.formatMessage(az.confirmCloseWithChanges))) &&
              D.vm.closeSharingModal();
          },
          c = (0, ee.Z)(),
          d = (0, w.useRef)(null),
          m = (0, b._)((0, w.useState)(!1), 2),
          f = m[0],
          h = m[1],
          g = (0, b._)((0, w.useState)(!1), 2),
          p = g[0],
          x = g[1],
          j = (0, b._)((0, w.useState)(!1), 2),
          k = j[0],
          T = j[1],
          I = (0, w.useContext)(ex),
          Z = eb(function (e) {
            return e.title;
          }),
          S = eb(function (e) {
            return e.shareLinkId;
          }),
          P = eb(function (e) {
            return e.shareLinkUrl;
          }),
          R = eb(function (e) {
            return e.isAnonymous;
          }),
          A = eb(function (e) {
            return e.initiallyHighlightedMessageId;
          }),
          E = eb(function (e) {
            return e.currentNodeId;
          }),
          F = eb(function (e) {
            return e.isPublic;
          }),
          B =
            eb(function (e) {
              return e.linkAlreadyExisted;
            }) && F,
          L = eb(function (e) {
            return e.linkError;
          }),
          q = eb(function (e) {
            return e.moderationState;
          }),
          O = null != q && aH(q),
          U = (0, w.useRef)(),
          Q = (0, w.useRef)();
        (0, w.useEffect)(
          function () {
            B && ((U.current = Z), (Q.current = R));
          },
          [B]
        );
        var H = (0, ep.kP)().session,
          $ = (0, N.JI)(o, E),
          G = (0, w.useMemo)(
            function () {
              return eI($);
            },
            [$]
          ),
          W =
            ((t = (0, ed._)(function (e, t) {
              var n, r, a, i, o, s, l;
              return (0, ef.Jh)(this, function (u) {
                switch (u.label) {
                  case 0:
                    x(!0),
                      (r = (n = I.getState()).highlightedMessageId),
                      (a = n.title),
                      (i = n.isDeleted),
                      (o = n.isAnonymous);
                    try {
                      navigator.clipboard.writeText(t);
                    } catch (e) {
                      return (
                        console.warn("Could not copy link to clipboard: " + e),
                        n_.m.warning("Failed to copy link to clipboard"),
                        x(!1),
                        [2]
                      );
                    }
                    u.label = 1;
                  case 1:
                    return (
                      u.trys.push([1, 3, 4, 5]),
                      [
                        4,
                        ea.ZP.updateShareLink({
                          share_id: e,
                          highlighted_message_id: r,
                          title: null != a ? a : void 0,
                          is_public: !i,
                          is_visible: !i,
                          is_anonymous: o,
                        }),
                      ]
                    );
                  case 2:
                    if (aH((s = u.sent().moderation_state)))
                      return I.setState({ moderationState: s }), [2];
                    return (
                      I.setState({ isPublic: !0, moderationState: s }),
                      T(!0),
                      setTimeout(function () {
                        D.vm.closeSharingModal(),
                          n_.m.success(
                            "Copied shared conversation URL to clipboard!"
                          );
                      }, 500),
                      [3, 5]
                    );
                  case 3:
                    return (
                      (l = u.sent()) instanceof ey.Q0 &&
                        "string" == typeof l.message &&
                        I.setState({ linkError: l.message }),
                      [3, 5]
                    );
                  case 4:
                    return x(!1), [7];
                  case 5:
                    return [2];
                }
              });
            })),
            function (e, n) {
              return t.apply(this, arguments);
            }),
          V = B && (Z !== U.current || R !== Q.current),
          J = (0, y.jsxs)(eZ.ZP.Button, {
            onClick: function () {
              return W(S, P);
            },
            color: "primary",
            disabled: p || k || null == S || null == P || null != L || O,
            children: [
              k
                ? (0, y.jsx)(el.ZP, { icon: C.LSm })
                : p
                ? (0, y.jsx)(eP.Z, {})
                : (0, y.jsx)(el.ZP, { icon: C.XKb }),
              k
                ? "Copied!"
                : p
                ? "Copying..."
                : V
                ? "Update and Copy Link"
                : "Copy Link",
            ],
          }),
          Y = (0, w.useCallback)(
            function (e) {
              var t;
              null == e || e.preventDefault(),
                I.setState({
                  title:
                    null === (t = d.current) || void 0 === t ? void 0 : t.value,
                }),
                h(!1);
            },
            [I]
          ),
          K = (0, w.useCallback)(
            function (e) {
              "Enter" === e.key && Y();
            },
            [Y]
          ),
          et =
            ((n = (0, ed._)(function () {
              return (0, ef.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      ea.ZP.deleteShareLink({
                        share_id: I.getState().shareLinkId,
                      })
                        .catch(function (e) {
                          n_.m.danger("Failed to delete shared link");
                        })
                        .then(function () {
                          D.vm.closeSharingModal();
                        }),
                    ];
                  case 1:
                    return e.sent(), [2];
                }
              });
            })),
            function () {
              return n.apply(this, arguments);
            }),
          en =
            ((r = (0, ed._)(function () {
              return (0, ef.Jh)(this, function (e) {
                return (
                  I.setState({ isAnonymous: !0 }),
                  N.qN.setState(function (e) {
                    e.threads[o].initialThreadData.authorName = void 0;
                  }),
                  [2]
                );
              });
            })),
            function () {
              return r.apply(this, arguments);
            }),
          er =
            ((a = (0, ed._)(function () {
              return (0, ef.Jh)(this, function (e) {
                return (
                  I.setState({ isAnonymous: !1 }),
                  N.qN.setState(function (e) {
                    var t;
                    e.threads[o].initialThreadData.authorName =
                      null == H
                        ? void 0
                        : null === (t = H.user) || void 0 === t
                        ? void 0
                        : t.name;
                  }),
                  [2]
                );
              });
            })),
            function () {
              return a.apply(this, arguments);
            }),
          ei = (0, y.jsxs)(aY, {
            $active: f,
            children: [
              (0, y.jsxs)("div", {
                className: "flex-1 pr-1",
                children: [
                  void 0 !== Z
                    ? f
                      ? (0, y.jsx)(aX, {
                          ref: d,
                          type: "text",
                          defaultValue: null != Z ? Z : "",
                          autoFocus: !0,
                          onKeyDown: K,
                          onBlur: Y,
                        })
                      : (0, y.jsxs)(aK, {
                          onDoubleClick: function () {
                            return h(!0);
                          },
                          children: [
                            Z,
                            f || null == Z || B
                              ? null
                              : (0, y.jsx)("button", {
                                  onClick: function () {
                                    return h(!0);
                                  },
                                  className: "text-gray-500",
                                  children: (0, y.jsx)(el.ZP, {
                                    icon: C.Nte,
                                    size: "small",
                                  }),
                                }),
                          ],
                        })
                    : (0, y.jsx)("div", { className: "h-6" }),
                  (0, y.jsxs)("div", {
                    className: "mt-1 text-gray-500",
                    children: [
                      !R &&
                        (0, y.jsxs)("span", {
                          children: [
                            null == H
                              ? void 0
                              : null === (i = H.user) || void 0 === i
                              ? void 0
                              : i.name,
                            " \xb7 ",
                          ],
                        }),
                      (0, y.jsx)(M.Ji, {
                        value: new Date(),
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }),
                    ],
                  }),
                ],
              }),
              (0, y.jsx)(a0, {
                children: (0, y.jsxs)(eu.fC, {
                  children: [
                    (0, y.jsx)(eu.xz, {
                      asChild: !0,
                      children: (0, y.jsx)(es.z, {
                        color: "neutral",
                        className: "mb-auto mt-auto",
                        children: (0, y.jsx)(eg.JEI, {}),
                      }),
                    }),
                    (0, y.jsx)(eu.h_, {
                      children: (0, y.jsxs)(eu.VY, {
                        className:
                          "PopoverContent rounded-sm bg-white p-2 pb-0.5 shadow-xl dark:bg-gray-800/90",
                        side: "top",
                        align: "end",
                        children: [
                          R &&
                            (0, y.jsx)(es.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: er,
                              children: (0, y.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, y.jsx)(el.ZP, {
                                    icon: C.fzv,
                                    className:
                                      "float-left mb-auto mr-4 mt-auto",
                                  }),
                                  " ",
                                  (0, y.jsx)("div", {
                                    children: "Share your name",
                                  }),
                                ],
                              }),
                            }),
                          !R &&
                            (0, y.jsx)(es.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: en,
                              children: (0, y.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, y.jsx)(el.ZP, {
                                    icon: C.fzv,
                                    className:
                                      "float-left mb-auto mr-4 mt-auto",
                                  }),
                                  " ",
                                  (0, y.jsx)("div", {
                                    children: "Share anonymously",
                                  }),
                                ],
                              }),
                            }),
                          B &&
                            (0, y.jsx)(es.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: et,
                              children: (0, y.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, y.jsx)(el.ZP, {
                                    icon: C.Ybf,
                                    className:
                                      "float-left mb-auto mr-4 mt-auto",
                                  }),
                                  " ",
                                  (0, y.jsx)("div", {
                                    children: "Delete Link",
                                  }),
                                ],
                              }),
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          eo = L;
        return (
          null == eo &&
            ((null == q ? void 0 : q.has_been_auto_blocked) ||
              (null == q ? void 0 : q.has_been_auto_moderated) ||
              (null == q ? void 0 : q.has_been_blocked)) &&
            (eo = (0, y.jsx)(_.Z, (0, v._)({}, az.moderationBlocked))),
          (0, y.jsxs)(eS.Z, {
            isOpen: !0,
            onClose: function () {
              u();
            },
            size: "custom",
            className: "max-w-[550px]",
            type: "success",
            title: c.formatMessage(az.sharingModalTitle),
            closeButton: (0, y.jsx)(eZ.ZP.CloseButton, {
              onClose: function () {
                u();
              },
            }),
            children: [
              null != eo &&
                (0, y.jsx)("div", {
                  className: "mb-4 rounded-md bg-red-500 p-4 text-white",
                  children: eo,
                }),
              (0, y.jsx)("div", {
                className: (0, z.Z)("w-full"),
                children: (0, y.jsx)("p", {
                  className: (0, z.Z)("mb-6 text-gray-500"),
                  children: B
                    ? (0, y.jsx)(
                        _.Z,
                        (0, em._)((0, v._)({}, az.existingShareDescription), {
                          values: {
                            existingLink: function (e) {
                              return (0, y.jsx)("a", {
                                href: P,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "underline",
                                children: e,
                              });
                            },
                            deleteLink: function (e) {
                              return (0, y.jsx)("a", {
                                href: "#",
                                onClick: function (e) {
                                  e.preventDefault(),
                                    window.confirm(
                                      c.formatMessage(az.confirmDeleteLink)
                                    ) && et();
                                },
                                className: "underline",
                                children: e,
                              });
                            },
                          },
                        })
                      )
                    : (0, y.jsx)(_.Z, (0, v._)({}, az.sharingModalDescription)),
                }),
              }),
              (0, y.jsx)(y.Fragment, {
                children:
                  G &&
                  (0, y.jsx)("div", {
                    className:
                      "mb-4 rounded-md bg-[#FFF3C9] p-4 text-[#756B5C]",
                    children: (0, y.jsx)(
                      _.Z,
                      (0, v._)({}, az.codeInterpreterSupportDisclaimer)
                    ),
                  }),
              }),
              (0, y.jsx)(aJ, {
                children: (0, y.jsx)("div", {
                  className: "flex h-full max-w-full flex-1 flex-col",
                  children: (0, y.jsx)(aW, {
                    children: (0, y.jsxs)(aV, {
                      children: [
                        (0, y.jsx)(eh.f, {
                          ratio: 1.9,
                          className: "overflow-auto bg-white dark:bg-gray-800",
                          children:
                            null != E
                              ? (0, y.jsx)(aZ, {
                                  onChangeItemInView: X(),
                                  onRequestMoreCompletions: X(),
                                  onUpdateNode: X(),
                                  onChangeRating: X(),
                                  onDeleteNode: X(),
                                  onRequestCompletion: X(),
                                  onHandleChangeVariantFeedbackInlineComparisonRating:
                                    X(),
                                  clientThreadId: o,
                                  conversationLeafId: E,
                                  activeRequests: s,
                                  currentThreadModel: l,
                                  inlineEmbeddedDisplay: !0,
                                  isStaticSharedThread: !0,
                                  isNewThread: !1,
                                  initiallyHighlightedMessageId: A,
                                })
                              : (0, y.jsx)("div", {
                                  className:
                                    "flex h-full items-center justify-center",
                                  children: (0, y.jsx)(eP.Z, {
                                    className:
                                      "text-gray-400 dark:text-gray-500",
                                  }),
                                }),
                        }),
                        ei,
                      ],
                    }),
                  }),
                }),
              }),
              (0, y.jsx)(eZ.ZP.Actions, {
                isSpacedBetween: !0,
                primaryButton: J,
                secondaryButton: (0, y.jsx)("div", {
                  children: (0, y.jsxs)("a", {
                    href: a$,
                    className:
                      "flex items-center gap-2 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                    target: "_blank",
                    rel: "noreferrer",
                    children: [
                      c.formatMessage(az.sharingModalMoreInfo),
                      (0, y.jsx)(el.ZP, { icon: C.AlO }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      }
      var aW = et.Z.main(aE()),
        aV = et.Z.div(aF()),
        aJ = et.Z.div(aB()),
        aY = et.Z.div(aL(), function (e) {
          return e.$active, "";
        }),
        aK = et.Z.div(aq()),
        aX = et.Z.input(aO()),
        a0 = et.Z.div(aU());
      function a1() {
        var e = (0, U._)([
          "bg-green-500 text-white py-0.5 px-1.5 text-[10px] leading-normal font-semibold rounded uppercase",
        ]);
        return (
          (a1 = function () {
            return e;
          }),
          e
        );
      }
      var a2 = (0, M.vU)({
          learnMore: {
            id: "sharedConversationAnnouncement.learnMore",
            defaultMessage: "Learn more",
            description: "Link text to shared links help page",
          },
          shareConversations: {
            id: "sharedConversationAnnouncement.shareConversations",
            defaultMessage: "Share a link to this chat",
            description:
              "Text displayed in tooltip announcing shared conversations",
          },
          new: {
            id: "sharedConversationAnnouncement.new",
            defaultMessage: "New",
            description: "New badge text",
          },
        }),
        a5 = "oai/apps/announcement/sharedConversations";
      function a3(e) {
        var t = e.children,
          n = function () {
            var e = Date.now();
            ec.m.setItem(a5, e), o(e);
          },
          r = (0, E.w$)(),
          a = (0, b._)(
            (0, w.useState)(function () {
              var e = ec.m.getItem(a5);
              return "number" == typeof e && e;
            }),
            2
          ),
          i = a[0],
          o = a[1],
          s = (0, w.useRef)(null),
          l = (0, ee.Z)();
        return (0, y.jsxs)(eu.fC, {
          open: r && !1 === i,
          onOpenChange: function (e) {
            e || n();
          },
          children: [
            (0, y.jsx)(eu.xz, { asChild: !0, ref: s, children: t }),
            (0, y.jsx)(eu.h_, {
              children: (0, y.jsxs)(eu.VY, {
                side: "right",
                sideOffset: 36,
                onOpenAutoFocus: function (e) {
                  e.preventDefault();
                },
                onCloseAutoFocus: function (e) {
                  e.preventDefault();
                },
                onInteractOutside: function (e) {
                  var t;
                  e.target instanceof Element &&
                  (null === (t = s.current) || void 0 === t
                    ? void 0
                    : t.contains(e.target))
                    ? n()
                    : e.preventDefault();
                },
                className:
                  "relative animate-slideLeftAndFade select-none rounded-xl bg-gray-900 p-4 text-sm text-white shadow-sm dark:bg-gray-50 dark:text-gray-700",
                children: [
                  (0, y.jsxs)("div", {
                    children: [
                      (0, y.jsxs)("div", {
                        className: "mb-0.5 flex items-center gap-2",
                        children: [
                          (0, y.jsx)(a4, {
                            children: (0, y.jsx)(_.Z, (0, v._)({}, a2.new)),
                          }),
                          (0, y.jsx)("div", {
                            className: "font-medium",
                            children: (0, y.jsx)(
                              _.Z,
                              (0, v._)({}, a2.shareConversations)
                            ),
                          }),
                          (0, y.jsx)(eu.x8, {
                            className:
                              "-my-1 -mr-1 ml-1 p-1 opacity-70 transition hover:opacity-100",
                            children: (0, y.jsx)(el.ZP, { icon: C.q5L }),
                          }),
                        ],
                      }),
                      (0, y.jsxs)("a", {
                        href: a$,
                        className:
                          "inline-flex items-center gap-1.5 opacity-70 transition hover:opacity-100",
                        target: "_blank",
                        rel: "noreferrer",
                        children: [
                          l.formatMessage(a2.learnMore),
                          (0, y.jsx)(el.ZP, { icon: C.AlO, size: "xsmall" }),
                        ],
                      }),
                    ],
                  }),
                  (0, y.jsx)(eu.Eh, {
                    asChild: !0,
                    children: (0, y.jsx)("div", {
                      className:
                        "relative top-[-6px] h-3 w-3 rotate-45 transform rounded-br-sm bg-gray-900 dark:bg-gray-50",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var a4 = et.Z.span(a1()),
        a6 = n(36112);
      function a7() {
        var e = (0, U._)([
          "flex flex-col gap-2 pb-2 text-gray-100 text-sm\n",
          "",
        ]);
        return (
          (a7 = function () {
            return e;
          }),
          e
        );
      }
      function a8() {
        var e = (0, U._)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all\n",
          ")}\n",
          ")}\n",
          "\n",
        ]);
        return (
          (a8 = function () {
            return e;
          }),
          e
        );
      }
      function a9() {
        var e = (0, U._)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer hover:pr-14 break-all\n",
          "\n",
        ]);
        return (
          (a9 = function () {
            return e;
          }),
          e
        );
      }
      function ie() {
        var e = (0, U._)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
        return (
          (ie = function () {
            return e;
          }),
          e
        );
      }
      function it() {
        var e = (0, U._)([
          "flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative",
        ]);
        return (
          (it = function () {
            return e;
          }),
          e
        );
      }
      function ir() {
        var e = (0, U._)([
          "h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-gray-900",
        ]);
        return (
          (ir = function () {
            return e;
          }),
          e
        );
      }
      function ia() {
        var e = (0, U._)([
          "absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l\n",
          "",
        ]);
        return (
          (ia = function () {
            return e;
          }),
          e
        );
      }
      function ii() {
        var e = (0, U._)(["absolute flex right-1 z-10 text-gray-300\n", ""]);
        return (
          (ii = function () {
            return e;
          }),
          e
        );
      }
      function io() {
        var e = (0, U._)(["p-1 hover:text-white"]);
        return (
          (io = function () {
            return e;
          }),
          e
        );
      }
      var is = (0, M.vU)({
          historyBucketToday: {
            id: "history.bucket.today",
            defaultMessage: "Today",
            description: "Label for today's history bucket",
          },
          historyBucketYesterday: {
            id: "history.bucket.yesterday",
            defaultMessage: "Yesterday",
            description: "Label for yesterday's history bucket",
          },
          historyBucketLastSeven: {
            id: "history.bucket.lastSeven",
            defaultMessage: "Previous 7 Days",
            description: "Label for the history bucket of the previous 7 days",
          },
          historyBucketLastThirty: {
            id: "history.bucket.lastThirty",
            defaultMessage: "Previous 30 Days",
            description: "Label for the history bucket of the previous 30 days",
          },
          unableToLoadHistory: {
            id: "history.unableToLoad",
            defaultMessage: "Unable to load history",
            description: "Error message when history fails to load",
          },
          retryButton: {
            id: "history.retryButton",
            defaultMessage: "Retry",
            description: "Button to retry loading history",
          },
          showMoreButton: {
            id: "history.showMoreButton",
            defaultMessage: "Show more",
            description: "Button to show more history items",
          },
        }),
        il = {
          initial: function (e) {
            return e.isNew ? { opacity: 0, height: 0, overflow: "hidden" } : {};
          },
          animate: function () {
            return { opacity: 1, height: "auto" };
          },
          exit: function () {
            return { opacity: 0, height: 0 };
          },
        };
      function iu(e) {
        var t,
          n,
          r = e.activeId,
          a = e.onNewThread,
          i = e.setActiveRequests,
          o = (0, ee.Z)(),
          s = (0, b._)((0, w.useState)(!1), 2),
          l = s[0],
          u = s[1],
          c = (0, b._)((0, w.useState)(0), 2),
          d = c[0],
          m = c[1],
          f = (0, eo.Z)(),
          h = (0, a6.MO)(),
          g = h.conversations,
          p = h.hasNextPage,
          x = h.fetchNextPage,
          j = h.isLoading,
          k = h.isFetchingNextPage,
          C = h.isError,
          M = (0, T.hz)().has(ei.DY),
          N = (0, w.useRef)(null),
          I = (0, w.useCallback)(
            function (e) {
              var t;
              M &&
                !j &&
                null != e &&
                (null === (t = N.current) || void 0 === t || t.disconnect(),
                (N.current = new IntersectionObserver(function (e) {
                  e[0].isIntersecting && p && x();
                })),
                N.current.observe(e));
            },
            [M, j, p, x]
          );
        (0, w.useEffect)(function () {
          return function () {
            var e;
            null === (e = N.current) || void 0 === e || e.disconnect();
          };
        }, []);
        var Z = (0, a6.iF)();
        (0, a6.Od)();
        var S =
          ((t = (0, w.useRef)()),
          (n = (0, w.useRef)()),
          ((0, w.useEffect)(
            function () {
              (t.current = n.current), (n.current = g);
            },
            [g]
          ),
          g === n.current)
            ? t.current
            : n.current);
        (0, w.useEffect)(
          function () {
            f(function () {
              m(d + 1);
            }, (0, H.Z)((0, $.Z)(), Date.now()) + 1e3);
          },
          [d, f]
        );
        var P = 0 === g.length,
          R = (0, w.useMemo)(
            function () {
              return g.reduce(
                function (e, t) {
                  var n,
                    r,
                    a = new Date(
                      null !==
                        (r =
                          null !== (n = t.update_time) && void 0 !== n
                            ? n
                            : t.create_time) && void 0 !== r
                        ? r
                        : 0
                    ),
                    i = (0, Q.Z)(new Date(), a);
                  if (0 === i) e.recent.today.items.push(t);
                  else if (i <= 1) e.recent.yesterday.items.push(t);
                  else if (i <= 7) e.recent.lastSeven.items.push(t);
                  else if (i <= 30) e.recent.lastThirty.items.push(t);
                  else if ((0, V.Z)(a)) {
                    var s = (0, W.Z)(a),
                      l = (0, G.Z)(a),
                      u = "".concat(s, "-").concat(l);
                    e.dynamicMonths[u]
                      ? e.dynamicMonths[u].items.push(t)
                      : (e.dynamicMonths[u] = {
                          label: o.formatDate(a, { month: "long" }),
                          items: [t],
                        });
                  } else {
                    var c = (0, W.Z)(a),
                      d = "".concat(c, "-");
                    e.dynamicYears[d]
                      ? e.dynamicYears[d].items.push(t)
                      : (e.dynamicYears[d] = {
                          label: o.formatDate(a, { year: "numeric" }),
                          items: [t],
                        });
                  }
                  return e;
                },
                {
                  recent: {
                    today: {
                      label: (0, y.jsx)(
                        _.Z,
                        (0, v._)({}, is.historyBucketToday)
                      ),
                      items: [],
                    },
                    yesterday: {
                      label: (0, y.jsx)(
                        _.Z,
                        (0, v._)({}, is.historyBucketYesterday)
                      ),
                      items: [],
                    },
                    lastSeven: {
                      label: (0, y.jsx)(
                        _.Z,
                        (0, v._)({}, is.historyBucketLastSeven)
                      ),
                      items: [],
                    },
                    lastThirty: {
                      label: (0, y.jsx)(
                        _.Z,
                        (0, v._)({}, is.historyBucketLastThirty)
                      ),
                      items: [],
                    },
                  },
                  dynamicMonths: {},
                  dynamicYears: {},
                }
              );
            },
            [d, g]
          );
        return (0, y.jsxs)(ic, {
          $centered: j || (C && P),
          children: [
            P && j && (0, y.jsx)(eP.Z, { className: "m-auto" }),
            P &&
              C &&
              (0, y.jsxs)("div", {
                className: "p-3 text-center italic text-gray-500",
                children: [
                  (0, y.jsx)(_.Z, (0, v._)({}, is.unableToLoadHistory)),
                  !l &&
                    (0, y.jsx)("div", {
                      className: "mt-1",
                      children: (0, y.jsx)(es.z, {
                        as: "button",
                        color: "dark",
                        size: "small",
                        className: "m-auto mt-2",
                        onClick: function () {
                          u(!0), Z();
                        },
                        children: (0, y.jsx)(_.Z, (0, v._)({}, is.retryButton)),
                      }),
                    }),
                ],
              }),
            !j &&
              (0, y.jsx)("div", {
                children: (0, y.jsx)(J.M, {
                  initial: !1,
                  children: [R.recent, R.dynamicMonths, R.dynamicYears].flatMap(
                    function (e, t) {
                      return (0, y.jsx)(
                        "span",
                        {
                          children: Object.entries(e).map(function (e) {
                            var t = (0, b._)(e, 2),
                              n = t[0],
                              o = t[1],
                              s = o.items,
                              l = o.label;
                            if ("today" !== n && !s.length) return null;
                            var u = !!s.find(function (e) {
                              var t;
                              return (
                                g.length > 0 &&
                                e.id ===
                                  (null === (t = g[0]) || void 0 === t
                                    ? void 0
                                    : t.id)
                              );
                            });
                            return (0, y.jsxs)(
                              Y.E.div,
                              {
                                className: "relative",
                                layoutId: "bucket-".concat(n),
                                layout: "position",
                                initial: {
                                  height: 0,
                                  opacity: 1,
                                  position: "relative",
                                },
                                animate: {
                                  height: "auto",
                                  opacity: 1,
                                  transition: { duration: 0.2, ease: "easeIn" },
                                },
                                children: [
                                  s.length > 0 &&
                                    (0, y.jsx)(Y.E.div, {
                                      className: (0, z.Z)(
                                        "sticky top-0",
                                        u ? "z-[16]" : "z-[14]"
                                      ),
                                      layoutId: "bucketTitle-".concat(n),
                                      layout: "position",
                                      children: (0, y.jsx)(iv, { children: l }),
                                    }),
                                  (0, y.jsx)("ol", {
                                    children: s.map(function (e, t) {
                                      var n = r === e.id,
                                        o =
                                          null == S
                                            ? void 0
                                            : S.find(function (t) {
                                                return t.id === e.id;
                                              });
                                      return (0,
                                      y.jsx)(Y.E.li, { className: (0, z.Z)("relative", u && 0 === t ? "z-[15]" : ""), layoutId: "".concat(e.id), layout: "position", custom: { isNew: !o }, variants: il, initial: "initial", animate: "animate", exit: "exit", children: (0, y.jsx)(id, { id: e.id, title: e.title, active: n, onNewThread: a, setActiveRequests: i, forwardRef: p && g[g.length - 5 - 1].id === e.id ? I : void 0 }) }, "history-item-".concat(e.id));
                                    }),
                                  }),
                                ],
                              },
                              n
                            );
                          }),
                        },
                        "category-".concat(t)
                      );
                    }
                  ),
                }),
              }),
            M
              ? k &&
                (0, y.jsx)("div", {
                  className: "m-4 mb-5 flex justify-center",
                  children: (0, y.jsx)(eP.Z, {}),
                })
              : (0, y.jsx)(y.Fragment, {
                  children:
                    p &&
                    (0, y.jsx)(es.z, {
                      as: "button",
                      onClick: function () {
                        return x();
                      },
                      color: "dark",
                      className: "m-auto mb-2",
                      size: "small",
                      loading: k,
                      children: (0, y.jsx)(
                        _.Z,
                        (0, v._)({}, is.showMoreButton)
                      ),
                    }),
                }),
          ],
        });
      }
      var ic = et.Z.div(a7(), function (e) {
        return e.$centered && "h-full justify-center items-center";
      });
      function id(e) {
        var t = e.id,
          n = e.title,
          r = e.active,
          a = e.onNewThread,
          i = e.forwardRef,
          o = e.setActiveRequests,
          s = (0, E.w$)(),
          l = (0, en.WS)(),
          u = (0, k.useRouter)(),
          c = (0, b._)((0, w.useState)(!1), 2),
          d = c[0],
          m = c[1],
          f = (0, w.useRef)(null),
          h = (0, b._)((0, w.useState)(!1), 2),
          g = h[0],
          p = h[1],
          v = (0, T.hz)().has(ei.RJ) && r,
          x = (0, a6.iF)(),
          j = (0, w.useCallback)(
            function (e) {
              var r, a;
              if (
                (null == e || e.preventDefault(),
                m(!1),
                (null === (r = f.current) || void 0 === r ? void 0 : r.value) &&
                  (null === (a = f.current) || void 0 === a
                    ? void 0
                    : a.value) !== n)
              ) {
                var i = f.current.value;
                ea.ZP.patchConversation(t, { title: i }),
                  N.tQ.setTitle(t, i, N._L.User),
                  l(er.s6.renameThread, { threadId: t, content: i }),
                  x();
              }
            },
            [l, t, x, n]
          ),
          _ = (0, w.useCallback)(
            function (e) {
              "Enter" === e.key && j();
            },
            [j]
          ),
          M = (0, w.useCallback)(
            function () {
              ea.ZP.patchConversation(t, { is_visible: !1 }).then(function () {
                x();
              }),
                a();
            },
            [t, a, x]
          ),
          I = (0, w.useCallback)(
            function (e) {
              R.abortAllAndReset(),
                o(new Set()),
                e.preventDefault(),
                l(er.s6.loadThread, { threadId: t }),
                u.push("/c/".concat(t), void 0, { shallow: !0 });
            },
            [l, t, u, o]
          ),
          Z = F(t, n, r),
          S = Z.resolvedTitle,
          P = Z.isTypingEffect;
        if (d)
          return (0, y.jsxs)(ih, {
            $active: r,
            children: [
              (0, y.jsx)(el.ZP, { icon: C.IC0, className: "flex-shrink-0" }),
              (0, y.jsx)(ig, {
                ref: f,
                type: "text",
                defaultValue: null != S ? S : "",
                autoFocus: !0,
                onKeyDown: _,
                className: "mr-0",
                onBlur: j,
              }),
              (0, y.jsxs)(ib, {
                $active: !0,
                children: [
                  (0, y.jsx)(iy, {
                    onClick: j,
                    children: (0, y.jsx)(el.ZP, { icon: C.UgA }),
                  }),
                  (0, y.jsx)(iy, {
                    onClick: function (e) {
                      e.preventDefault(), m(!1);
                    },
                    children: (0, y.jsx)(el.ZP, { icon: C.q5L }),
                  }),
                ],
              }),
            ],
          });
        var A = P && r && s;
        return (0, y.jsxs)(im, {
          onClick: r ? X() : I,
          $active: r,
          $sharing: v,
          className: (0, z.Z)("group", A && "animate-flash"),
          ref: i,
          children: [
            (0, y.jsx)(el.ZP, { icon: g ? C.Ybf : C.IC0 }),
            (0, y.jsxs)(ip, {
              children: [
                A
                  ? (0, y.jsx)(q, { text: null != S ? S : "" })
                  : g
                  ? 'Delete "'.concat(S, '"?')
                  : S,
                (!P || !r) && (0, y.jsx)(ix, { $active: r }),
              ],
            }),
            g &&
              (0, y.jsxs)(ib, {
                $active: !0,
                children: [
                  (0, y.jsx)(iy, {
                    onClick: M,
                    children: (0, y.jsx)(el.ZP, { icon: C.UgA }),
                  }),
                  (0, y.jsx)(iy, {
                    onClick: function () {
                      p(!1);
                    },
                    children: (0, y.jsx)(el.ZP, { icon: C.q5L }),
                  }),
                ],
              }),
            r &&
              !g &&
              (0, y.jsxs)(ib, {
                $active: r,
                children: [
                  (0, y.jsx)(iy, {
                    onClick: function (e) {
                      e.preventDefault(), m(!0);
                    },
                    children: (0, y.jsx)(el.ZP, { icon: C.Nte }),
                  }),
                  v &&
                    (0, y.jsx)(a3, {
                      children: (0, y.jsx)(iy, {
                        onClick: function (e) {
                          e.preventDefault(), D.vm.openSharingModal(t);
                        },
                        children: (0, y.jsx)(el.ZP, { icon: C.A8q }),
                      }),
                    }),
                  (0, y.jsx)(iy, {
                    onClick: function () {
                      return p(!0);
                    },
                    children: (0, y.jsx)(el.ZP, { icon: C.Ybf }),
                  }),
                ],
              }),
          ],
        });
      }
      var im = et.Z.a(
          a8(),
          function (e) {
            var t = e.$active,
              n = e.$sharing;
            return t && n ? "pr-[4.5rem]" : "";
          },
          function (e) {
            var t = e.$active,
              n = e.$sharing;
            return t && !n ? "pr-14" : "";
          },
          function (e) {
            return e.$active
              ? "bg-gray-800 hover:bg-gray-800"
              : "hover:pr-4 bg-gray-900";
          }
        ),
        ih = et.Z.div(a9(), function (e) {
          return e.$active
            ? "pr-14 bg-gray-800 hover:bg-gray-800"
            : "bg-gray-900";
        }),
        ig = et.Z.input(ie()),
        ip = et.Z.div(it()),
        iv = et.Z.h3(ir()),
        ix = et.Z.div(ia(), function (e) {
          return e.$active
            ? "from-gray-800"
            : "from-gray-900 group-hover:from-[#2A2B32]";
        }),
        ib = et.Z.div(ii(), function (e) {
          return e.$active ? "visible" : "invisible group-hover:visible";
        }),
        iy = et.Z.button(io()),
        ij = n(61119),
        ik = n(62059),
        iw = n(6128),
        iC = n(5437),
        i_ = n.n(iC),
        iM = n(11253),
        iT = n.n(iM),
        iN = n(15300),
        iI = n(44675),
        iZ = "https://tcr9i.chat.openai.com/v2/".concat(
          "35536E1E-65B4-4D96-9D97-6ADB7EFF8147",
          "/api.js"
        );
      ((l = p || (p = {})).Idle = "idle"),
        (l.Loading = "loading"),
        (l.ScriptLoaded = "script_loaded"),
        (l.Ready = "ready"),
        (l.Done = "done"),
        (l.Error = "error"),
        (l.Failed = "failed"),
        (l.CAPTCHA = "captcha");
      var iS = new ((function () {
          function e() {
            (0, B._)(this, e), (this.status = p.Idle);
            var t,
              n = this;
            this.getEnforcementToken =
              ((t = (0, ed._)(function (e) {
                var t;
                return (0, ef.Jh)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, n._getArkosePromise()];
                    case 1:
                      return (
                        (t = r.sent()),
                        [
                          2,
                          new Promise(function (r, a) {
                            n.setOnCompleted(function (e) {
                              r(e.token);
                            }),
                              n.setOnError(function (i) {
                                if (e) {
                                  var o, s, l, u, c;
                                  iN.U.addAction("arkose_get_token_error", {
                                    app_release:
                                      null !== (l = iI.env.APP_RELEASE) &&
                                      void 0 !== l
                                        ? l
                                        : "",
                                    error:
                                      null !==
                                        (u =
                                          null === (o = i.error) || void 0 === o
                                            ? void 0
                                            : o.error) && void 0 !== u
                                        ? u
                                        : "",
                                  }),
                                    a(
                                      null !==
                                        (c =
                                          null === (s = i.error) || void 0 === s
                                            ? void 0
                                            : s.error) && void 0 !== c
                                        ? c
                                        : "Unknown Arkose error"
                                    ),
                                    n._showUserError();
                                } else t.reset(), n.getEnforcementToken(!0).then(r, a);
                              }),
                              n.setOnFailed(function () {
                                var e;
                                iN.U.addAction(
                                  "arkose_failed_to_get_challenge",
                                  {
                                    app_release:
                                      null !== (e = iI.env.APP_RELEASE) &&
                                      void 0 !== e
                                        ? e
                                        : "",
                                  }
                                ),
                                  a(Error("Failed challenge too many times")),
                                  n._showUserError();
                              }),
                              t.run();
                          }),
                        ]
                      );
                  }
                });
              })),
              function (e) {
                return t.apply(this, arguments);
              });
          }
          var t = e.prototype;
          return (
            (t._getArkosePromise = function (e) {
              var t = this;
              return (
                null == this.arkoseInstancePromise &&
                  (this.arkoseInstancePromise = new Promise(function (n, r) {
                    (window.useArkoseSetupEnforcement = void 0),
                      t.setStatus(p.Loading);
                    var a = document.createElement("script");
                    (a.src = iZ),
                      (a.async = !0),
                      (a.defer = !0),
                      a.setAttribute("data-status", p.Loading),
                      a.setAttribute(
                        "data-callback",
                        "useArkoseSetupEnforcement"
                      ),
                      (window.useArkoseSetupEnforcement = function (e) {
                        n(e),
                          t.setStatus(p.Ready),
                          e.setConfig({
                            onCompleted: function (e) {
                              t.onCompleted(e);
                            },
                            onError: function (e) {
                              t.onError(e);
                            },
                            onFailed: function (e) {
                              t.onFailed(e);
                            },
                            onShown: function (e) {
                              t.onShown(e);
                            },
                          });
                      }),
                      document.body.appendChild(a);
                    var i = function (o) {
                      if ("load" === o.type && t.status !== p.Ready)
                        t._startReadyTimeout(), t.setStatus(p.ScriptLoaded);
                      else if ("error" === o.type) {
                        if ((t.setStatus(p.Error), e)) {
                          var s;
                          iN.U.addAction("arkose_script_load_error", {
                            app_release:
                              null !== (s = iI.env.APP_RELEASE) && void 0 !== s
                                ? s
                                : "",
                          }),
                            r("Arkose script failed to load"),
                            t._showUserError();
                        } else
                          a.removeEventListener("load", i),
                            a.removeEventListener("error", i),
                            a.remove(),
                            (t.arkoseInstancePromise = void 0),
                            t._getArkosePromise(!0).then(n, r);
                      }
                    };
                    a.addEventListener("load", i),
                      a.addEventListener("error", i);
                  })),
                this.arkoseInstancePromise
              );
            }),
            (t._startReadyTimeout = function () {
              var e = this;
              setTimeout(function () {
                if (e.status === p.ScriptLoaded) {
                  var t;
                  iN.U.addAction("arkose_script_ready_timeout", {
                    app_release:
                      null !== (t = iI.env.APP_RELEASE) && void 0 !== t
                        ? t
                        : "",
                  }),
                    e._showUserError();
                }
              }, 15e3);
            }),
            (t._showUserError = function () {
              n_.m.danger(
                "There was a problem preparing your chat. Please refresh the page and try again."
              );
            }),
            (t.gatherData = function () {
              return this._getArkosePromise();
            }),
            (t.setStatus = function (e) {
              this.status = e;
            }),
            (t.onCompleted = function (e) {
              var t;
              null === (t = this._onCompleted) ||
                void 0 === t ||
                t.call(this, e);
            }),
            (t.setOnCompleted = function (e) {
              this._onCompleted = e;
            }),
            (t.onError = function (e) {
              var t;
              null === (t = this._onError) || void 0 === t || t.call(this, e);
            }),
            (t.setOnError = function (e) {
              this._onError = e;
            }),
            (t.onFailed = function (e) {
              var t;
              null === (t = this._onFailed) || void 0 === t || t.call(this, e);
            }),
            (t.setOnFailed = function (e) {
              this._onFailed = e;
            }),
            (t.onShown = function (e) {
              var t;
              null === (t = this._onShown) || void 0 === t || t.call(this, e);
            }),
            (t.setOnShown = function (e) {
              this._onShown = e;
            }),
            e
          );
        })())(),
        iP = n(75179),
        iR = n(87316);
      function iD(e) {
        var t = e.id,
          n = e.label,
          r = e.disabled;
        return (0, y.jsxs)("div", {
          className: "form-check",
          children: [
            (0, y.jsx)("input", {
              className:
                "form-check-input float-left mr-2 mt-1 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none",
              type: "checkbox",
              disabled: r,
              value: "",
              id: t,
            }),
            (0, y.jsx)("label", {
              className: "form-check-label text-gray-800 dark:text-gray-100",
              htmlFor: t,
              children: n,
            }),
          ],
        });
      }
      function iA() {
        var e = (0, U._)(["mb-2 mt-auto ml-auto mr-auto"]);
        return (
          (iA = function () {
            return e;
          }),
          e
        );
      }
      function iE() {
        var e = (0, U._)([
          "relative rounded-md border border-black/10 bg-gray-50 dark:border-gray-900/50 dark:bg-[#444654] flex flex-col overflow-hidden",
        ]);
        return (
          (iE = function () {
            return e;
          }),
          e
        );
      }
      function iF() {
        var e = (0, U._)(["mb-5 border dark:bg-gray-800 overflow-hidden"]);
        return (
          (iF = function () {
            return e;
          }),
          e
        );
      }
      function iB() {
        var e = (0, U._)([""]);
        return (
          (iB = function () {
            return e;
          }),
          e
        );
      }
      var iL = (0, M.vU)({
        submitFeedback: {
          id: "feedbackModal.submitFeedback",
          defaultMessage: "Submit feedback",
          description: "Button text for submitting the feedback",
        },
        submitReport: {
          id: "feedbackModal.submitReport",
          defaultMessage: "Submit report",
          description: "Button text for submitting a content-moderation report",
        },
        submitRejectModeration: {
          id: "feedbackModal.moderationReject",
          defaultMessage: "Block Content",
          description:
            "Button text for rejecting the share link and blocking it from being viewed",
        },
        submitAcceptModeration: {
          id: "feedbackModal.moderationAccept",
          defaultMessage: "Allow Content",
          description:
            "Button text for accepting the share link and allowing it to be viewed",
        },
        thumbsUpPlaceholder: {
          id: "feedbackModal.thumbsUpPlaceholder",
          defaultMessage: "What do you like about the response?",
          description:
            "Placeholder for textarea input when user chooses thumbs up",
        },
        thumbsDownPlaceholder: {
          id: "feedbackModal.thumbsDownPlaceholder",
          defaultMessage:
            "What was the issue with the response? How could it be improved?",
          description:
            "Placeholder for textarea input when user chooses thumbs down",
        },
        reportContentExplanationPlaceholder: {
          id: "feedbackModal.reportContentExplanationPlaceholder",
          defaultMessage:
            "What is wrong with the response? What about this response is harmful? Please be as specific as possible, and add any details that are not present in the checkboxes below.",
          description:
            "Placeholder for textarea input when user chooses to report a shared chat",
        },
        harmfulUnsafe: {
          id: "feedbackModal.harmfulUnsafe",
          defaultMessage: "This is harmful / unsafe",
          description: "Label for harmful/unsafe checkbox",
        },
        harmfulOffensive: {
          id: "feedbackModal.harmfulOffensive",
          defaultMessage: "This content is harmful or offensive",
          description: "Label for harmful/offensive checkbox",
        },
        copyrightContent: {
          id: "feedbackModal.copyrightContent",
          defaultMessage: "This content violates copyright law",
          description: "Label for Copyrighted Content checkbox",
        },
        reportOtherContent: {
          id: "feedbackModal.reportOtherContent",
          defaultMessage:
            "I don't like this for some other reason (please describe)",
          description: "Label for Report Other Content checkbox",
        },
        notTrue: {
          id: "feedbackModal.notTrue",
          defaultMessage: "This isn't true",
          description: "Label for not true checkbox",
        },
        notHelpful: {
          id: "feedbackModal.notHelpful",
          defaultMessage: "This isn't helpful",
          description: "Label for not helpful checkbox",
        },
        dontLikeThis: {
          id: "feedbackModal.dontLikeThis",
          defaultMessage: "I don't like this",
          description: "Label for I Don't Like This checkbox",
        },
        sexualAbuse: {
          id: "feedbackModal.sexualAbuse",
          defaultMessage: "This content contains sexual abuse",
          description: "Label for Sexual Abuse checkbox",
        },
        provideAdditionalFeedback: {
          id: "feedbackModal.provideAdditionalFeedback",
          defaultMessage: "Provide additional feedback",
          description: "Title for the critique feedback modal",
        },
        provideReportModalTitle: {
          id: "feedbackModal.provideReportModalTitle",
          defaultMessage: "Report This Content",
          description: "Title for the 'report' feedback modal",
        },
        pickBestAnswer: {
          id: "feedbackModal.pickBestAnswer",
          defaultMessage: "Pick the best answer to improve the model",
          description: "Title for the compare feedback modal",
        },
        newAnswer: {
          id: "feedbackModal.newAnswer",
          defaultMessage: "New Answer",
          description: "Title for the new answer during comparison",
        },
        originalAnswer: {
          id: "feedbackModal.originalAnswer",
          defaultMessage: "Original Answer",
          description: "Title for the original answer during comparison",
        },
        newAnswerBetter: {
          id: "feedbackModal.newAnswerBetter",
          defaultMessage: "New answer is better",
          description: "Button text for choosing new answer during comparison",
        },
        originalAnswerBetter: {
          id: "feedbackModal.originalAnswerBetter",
          defaultMessage: "Original answer is better",
          description:
            "Button text for choosing original answer during comparison",
        },
        neitherAnswerBetter: {
          id: "feedbackModal.neitherAnswerBetter",
          defaultMessage: "Neither answer is better",
          description:
            "Button text for choosing neither answer during comparison",
        },
        skipStep: {
          id: "feedbackModal.skipStep",
          defaultMessage: "Skip this step",
          description: "Button text for skipping comparison step",
        },
        continueWithChosenAnswer: {
          id: "feedbackModal.continueWithChosenAnswer",
          defaultMessage:
            "The conversation will continue with the answer you choose.",
          description: "Information text for user during comparison",
        },
      });
      function iq(e) {
        var t,
          n,
          r,
          a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          (null == e
            ? void 0
            : null === (t = e.messages) || void 0 === t
            ? void 0
            : t.length) === 1 &&
          !(null == e
            ? void 0
            : null === (n = e.messages) || void 0 === n
            ? void 0
            : n.some(function (e) {
                return "error" in e;
              })) &&
          (!a ||
            !(
              (null == e
                ? void 0
                : null === (r = e.messages) || void 0 === r
                ? void 0
                : r.length) === 1 &&
              (0, eq.RR)(null == e ? void 0 : e.messages[0].message).length < 20
            ))
        );
      }
      function iO(e) {
        var t,
          n,
          r = e.ratingModalNodeId,
          a = e.ratingModalOpen,
          i = e.onCloseRatingModal,
          o = e.handleSubmitFeedback,
          s = e.onHandleChangeFeedbackComparisonRating,
          l = e.feedbackTextareaRef,
          u = e.clientThreadId,
          c = e.activeRequests,
          d = e.currentModelId,
          m = e.onChangeItemInView,
          f = e.onRequestMoreCompletions,
          h = e.onDeleteNode,
          g = e.onRequestCompletion,
          p = e.onUpdateNode,
          x = (0, ee.Z)(),
          j = N.tQ.getTree(u),
          k = (0, N.XK)(u);
        (0, w.useEffect)(
          function () {
            "report" === a && ep.pg.forceEnableSession();
          },
          [a]
        );
        var M = (0, w.useRef)(0.5 > Math.random() ? "left" : "right"),
          I = null == j ? void 0 : j.getConversationTurns(r || "root"),
          Z = I.length - 1,
          S = I[I.length - 1],
          P = (0, T.hz)().has(ei.FZ),
          R = (0, b._)((0, w.useState)("critique"), 2),
          D = R[0],
          A = R[1],
          F = (0, E.w$)(),
          B = (0, T.hz)().has(ei.Pt) && iq(S, !0) && F,
          L = (0, en.WS)(),
          q = (0, w.useMemo)(
            function () {
              return {
                id: r || "root",
                threadId: N.tQ.getServerThreadId(u),
                rating: a,
                model: d,
              };
            },
            [r, u, a, d]
          ),
          O =
            null == I
              ? void 0
              : I[(null == I ? void 0 : I.length) - 1].variantIds,
          U = null == O ? void 0 : O[(null == O ? void 0 : O.length) - 1],
          Q = (n = (t = null == j ? void 0 : j.getConversationTurns(U))[
            t.length - 1
          ]).messages[n.messages.length - 1].nodeId,
          H = null == j ? void 0 : j.getConversationTurns(Q),
          $ = (0, w.useMemo)(
            function () {
              var e =
                null == H ? void 0 : H[(null == H ? void 0 : H.length) - 1];
              return "thumbsDown" === a && B && iq(e) && iq(S);
            },
            [a, B, H, S]
          ),
          G = (0, w.useRef)(Date.now()),
          W = (0, w.useRef)(-1),
          V = (0, w.useRef)(Date.now()),
          J = (0, w.useRef)(Date.now());
        (0, w.useEffect)(
          function () {
            "compare" === D
              ? ((W.current = Date.now()), L(er.s6.displayedComparisonUIV0, q))
              : "critique" === D &&
                "thumbsDown" === a &&
                L(er.s6.displayedThumbsDownFeedbackForm, q);
          },
          [D]
        );
        var Y = I.length - 2,
          K = H.length - 1,
          et = H[H.length - 1],
          eo = (0, w.useMemo)(
            function () {
              return et && eO.Cv.getRequestIdFromConversationTurn(et);
            },
            [et]
          ),
          es = (0, w.useMemo)(
            function () {
              return c.has(eo);
            },
            [c, eo]
          );
        (0, w.useMemo)(
          function () {
            es || (J.current = Date.now());
          },
          [es]
        );
        var el = S.messages,
          eu = el[el.length - 1],
          ec = eu.message.id,
          ed = eu.nodeId,
          ef = j.getLeafFromNode(ed),
          eh = et.messages,
          eg = eh[eh.length - 1],
          ev = eg.message.id,
          ex = eg.nodeId,
          eb = j.getLeafFromNode(ex),
          ey =
            "critique" === D
              ? "report" === a
                ? x.formatMessage(iL.provideReportModalTitle)
                : x.formatMessage(iL.provideAdditionalFeedback)
              : x.formatMessage(iL.pickBestAnswer),
          ej = (0, w.useRef)([]),
          ek = (0, w.useRef)(""),
          ew = (0, w.useCallback)(
            function () {
              var e,
                t =
                  null === (e = l.current) || void 0 === e
                    ? void 0
                    : e.elements;
              (ej.current = (0, eR._)(t || [])
                .filter(function (e) {
                  return e.checked;
                })
                .map(function (e) {
                  return e.id;
                })
                .map(function (e) {
                  return e.replace("feedback-", "");
                })),
                (ek.current =
                  (null == t ? void 0 : t["feedback-other"].value) || "");
            },
            [l]
          ),
          eC = (0, w.useCallback)(
            function () {
              ew(),
                o(ek.current, ej.current),
                "thumbsDown" === a && L(er.s6.submitThumbsDownFeedbackForm, q),
                $ ? A("compare") : i();
            },
            [ew, o, a, $, L, q, i]
          ),
          e_ = (0, w.useCallback)(
            function (e, t) {
              var n = N.tQ.getServerThreadId(u);
              if (null != n) {
                var r = N.tQ.getThreadCurrentLeafId(u);
                ea.ZP.submitSharedConversationReportFeedback({
                  message_id: r,
                  shared_conversation_id: n,
                  text: e,
                  tags: t,
                })
                  .then(function () {
                    n_.m.success("Moderation logged successfully");
                  })
                  .catch(function () {
                    n_.m.danger(
                      "Moderation NOT logged successfully! Please try again"
                    );
                  }),
                  i();
              }
            },
            [u, i]
          ),
          eM = (0, w.useCallback)(
            function () {
              ew(),
                ej.current.push("moderation-reject"),
                e_(ek.current, ej.current);
            },
            [e_, ew]
          ),
          eT = (0, w.useCallback)(
            function () {
              ew(),
                ej.current.push("moderation-accept"),
                e_(ek.current, ej.current);
            },
            [e_, ew]
          ),
          eN =
            "moderate" === a
              ? (0, y.jsxs)(y.Fragment, {
                  children: [
                    (0, y.jsx)(eZ.ZP.Button, {
                      title: x.formatMessage(iL.submitRejectModeration),
                      color: "danger",
                      onClick: eM,
                    }),
                    (0, y.jsx)(eZ.ZP.Button, {
                      title: x.formatMessage(iL.submitAcceptModeration),
                      color: "primary",
                      onClick: eT,
                    }),
                  ],
                })
              : "critique" === D
              ? (0, y.jsx)(eZ.ZP.Button, {
                  title: x.formatMessage(
                    "report" === a ? iL.submitReport : iL.submitFeedback
                  ),
                  onClick: eC,
                })
              : null,
          eI = "left" === M.current,
          eP = eI ? "new" : "original",
          eD = eI ? "original" : "new",
          eA = eI
            ? x.formatMessage(iL.newAnswer)
            : x.formatMessage(iL.originalAnswer),
          eE = eI
            ? x.formatMessage(iL.originalAnswer)
            : x.formatMessage(iL.newAnswer),
          eF = eI
            ? x.formatMessage(iL.newAnswerBetter)
            : x.formatMessage(iL.originalAnswerBetter),
          eB = eI
            ? x.formatMessage(iL.originalAnswerBetter)
            : x.formatMessage(iL.newAnswerBetter),
          eL = a && "report" !== a && "moderate" !== a,
          eq = (0, w.useCallback)(
            function (e) {
              var t = "left" === e ? eP : "right" === e ? eD : "same";
              if (
                (L(
                  er.s6.submittedComparisonUIV0,
                  Object.assign({}, q, { choice: t })
                ),
                eL)
              ) {
                var n = N.tQ.getTree(u),
                  r = n.getMetadata(ed);
                n.updateNode(ed, {
                  metadata: {
                    $set: (0, em._)((0, v._)({}, r), {
                      inlineComparisonRating: "baseline",
                    }),
                  },
                });
                var o = n.getMetadata(ex);
                n.updateNode(ex, {
                  metadata: {
                    $set: (0, em._)((0, v._)({}, o), {
                      inlineComparisonRating: t,
                    }),
                  },
                }),
                  s(
                    ec,
                    ev,
                    a,
                    t,
                    M.current,
                    G.current,
                    W.current,
                    V.current,
                    J.current,
                    ek.current,
                    ej.current
                  );
              }
              N.tQ.setThreadCurrentLeafId(u, e === M.current ? eb.id : ef.id),
                i();
            },
            [eP, eD, L, q, eL, u, eb.id, ef.id, i, ed, ex, s, ec, ev, a]
          ),
          eU = !es && null != J.current && $,
          ez = (0, w.useCallback)(
            function () {
              i(),
                "critique" === D
                  ? L(er.s6.skippedThumbsDownFeedbackForm, Object.assign({}, q))
                  : "compare" === D &&
                    L(er.s6.skippedComparisonUIV0, Object.assign({}, q));
            },
            [i, L, q, D]
          ),
          eQ = (0, b._)((0, w.useState)([]), 2),
          eH = eQ[0],
          e$ = eQ[1];
        return (
          (0, w.useEffect)(function () {
            "moderate" === a &&
              ea.ZP.fetchShareModerationCategories().then(function (e) {
                var t = e.moderation_categories;
                e$(
                  Object.keys(t).map(function (e) {
                    return [e, t[e]];
                  })
                );
              });
          }, []),
          (0, y.jsxs)(
            eS.Z,
            {
              isOpen: !0,
              onClose: ez,
              size: "custom",
              className: "md:max-w-[672px] lg:max-w-[896px] xl:max-w-6xl",
              type:
                "critique" === D
                  ? "thumbsUp" === a
                    ? "success"
                    : "danger"
                  : "success",
              icon:
                "critique" === D ? ("thumbsUp" === a ? C.fmn : C.oLd) : void 0,
              title: ey,
              closeButton: (0, y.jsx)(eZ.ZP.CloseButton, { onClose: ez }),
              children: [
                "critique" === D &&
                  (0, y.jsxs)("form", {
                    ref: l,
                    children: [
                      (0, y.jsx)(ny.ZP, {
                        id: "feedback-other",
                        placeholder:
                          "thumbsUp" === a
                            ? x.formatMessage(iL.thumbsUpPlaceholder)
                            : "report" === a
                            ? x.formatMessage(
                                iL.reportContentExplanationPlaceholder
                              )
                            : x.formatMessage(iL.thumbsDownPlaceholder),
                        rows: 3,
                        className:
                          "mb-1 mt-4 w-full rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white",
                      }),
                      "thumbsDown" === a &&
                        (0, y.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, y.jsx)(iD, {
                              id: "feedback-harmful",
                              label: x.formatMessage(iL.harmfulUnsafe),
                            }),
                            (0, y.jsx)(iD, {
                              id: "feedback-false",
                              label: x.formatMessage(iL.notTrue),
                            }),
                            (0, y.jsx)(iD, {
                              id: "feedback-not-helpful",
                              label: x.formatMessage(iL.notHelpful),
                            }),
                          ],
                        }),
                      null != a &&
                        !eL &&
                        (0, y.jsx)(y.Fragment, {
                          children: (0, y.jsxs)("div", {
                            className: "mb-4",
                            children: [
                              "report" === a &&
                                (0, y.jsxs)(y.Fragment, {
                                  children: [
                                    (0, y.jsx)(iD, {
                                      id: "feedback-dont-like-this",
                                      label: x.formatMessage(iL.dontLikeThis),
                                    }),
                                    (0, y.jsx)(iD, {
                                      id: "feedback-false",
                                      label: x.formatMessage(iL.notTrue),
                                    }),
                                    (0, y.jsx)(iD, {
                                      id: "feedback-not-helpful",
                                      label: x.formatMessage(iL.notHelpful),
                                    }),
                                    (0, y.jsx)(iD, {
                                      id: "feedback-harmful-offensive",
                                      label: x.formatMessage(
                                        iL.harmfulOffensive
                                      ),
                                    }),
                                    (0, y.jsx)(iD, {
                                      id: "feedback-sexual-abuse",
                                      label: x.formatMessage(iL.sexualAbuse),
                                    }),
                                  ],
                                }),
                              "moderate" === a &&
                                (0, y.jsxs)(y.Fragment, {
                                  children: [
                                    eH.map(function (e) {
                                      var t = (0, b._)(e, 2),
                                        n = t[0],
                                        r = t[1];
                                      return (0,
                                      y.jsx)(iD, { id: "feedback-" + n, label: r }, n);
                                    }),
                                    (0, y.jsx)(iD, {
                                      id: "feedback-copyright",
                                      label: x.formatMessage(
                                        iL.copyrightContent
                                      ),
                                    }),
                                  ],
                                }),
                              (0, y.jsx)(iD, {
                                id: "feedback-content-other",
                                label: x.formatMessage(iL.reportOtherContent),
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                "compare" === D &&
                  H &&
                  void 0 !== k &&
                  (0, y.jsxs)("div", {
                    className: (0, z.Z)("w-full"),
                    children: [
                      (0, y.jsx)("p", {
                        className: (0, z.Z)("mb-7 mt-3"),
                        children: (0, y.jsx)(
                          _.Z,
                          (0, v._)({}, iL.continueWithChosenAnswer)
                        ),
                      }),
                      (0, y.jsx)(iQ, {
                        className: P ? "rounded-2xl" : "rounded-md",
                        children: (0, y.jsx)(iH, {
                          children: (0, y.jsx)(tW, {
                            currentModelId: d,
                            turnIndex: Y,
                            isFinalTurn: !1,
                            clientThreadId: u,
                            onChangeItemInView: m,
                            onChangeRating: X(),
                            onRequestMoreCompletions: f,
                            onDeleteNode: h,
                            onRequestCompletion: g,
                            onUpdateNode: p,
                            activeRequests: c,
                            showInlineEmbeddedDisplay: !0,
                            onHandleChangeVariantFeedbackInlineComparisonRating:
                              X(),
                          }),
                        }),
                      }),
                      (0, y.jsxs)("div", {
                        className: (0, z.Z)(),
                        children: [
                          (0, y.jsxs)("div", {
                            className: (0, z.Z)(
                              "mb-2 grid w-full grid-cols-2 gap-5"
                            ),
                            children: [
                              (0, y.jsx)("div", {
                                children: (0, y.jsx)("p", {
                                  className: (0, z.Z)("font-semibold"),
                                  children: eA,
                                }),
                              }),
                              (0, y.jsx)("div", {
                                children: (0, y.jsx)("p", {
                                  className: (0, z.Z)("font-semibold"),
                                  children: eE,
                                }),
                              }),
                            ],
                          }),
                          (0, y.jsxs)("div", {
                            className: (0, z.Z)(
                              "mb-5 grid w-full grid-cols-2 gap-5"
                            ),
                            children: [
                              (0, y.jsxs)(iz, {
                                children: [
                                  (0, y.jsx)(iH, {
                                    children: (0, y.jsx)(tW, {
                                      currentModelId: d,
                                      turnIndex: eI ? K : Z,
                                      conversationLeafId: eI ? ex : ed,
                                      isFinalTurn: !0,
                                      clientThreadId: u,
                                      onChangeItemInView: m,
                                      onChangeRating: X(),
                                      onDeleteNode: h,
                                      onRequestMoreCompletions: f,
                                      onRequestCompletion: g,
                                      onUpdateNode: p,
                                      activeRequests: c,
                                      showInlineEmbeddedDisplay: !0,
                                      onHandleChangeVariantFeedbackInlineComparisonRating:
                                        X(),
                                    }),
                                  }),
                                  (0, y.jsx)(iU, {
                                    children: (0, y.jsx)(eZ.ZP.Button, {
                                      disabled: !eU,
                                      title: eF,
                                      onClick: function () {
                                        return eq("left");
                                      },
                                      color: "dark",
                                    }),
                                  }),
                                ],
                              }),
                              (0, y.jsxs)(iz, {
                                children: [
                                  (0, y.jsx)(iH, {
                                    children: (0, y.jsx)(tW, {
                                      currentModelId: d,
                                      turnIndex: eI ? Z : K,
                                      conversationLeafId: eI ? ed : ex,
                                      isFinalTurn: !0,
                                      clientThreadId: u,
                                      onChangeItemInView: m,
                                      onChangeRating: X(),
                                      onDeleteNode: h,
                                      onRequestMoreCompletions: f,
                                      onRequestCompletion: g,
                                      onUpdateNode: p,
                                      activeRequests: c,
                                      showInlineEmbeddedDisplay: !0,
                                      onHandleChangeVariantFeedbackInlineComparisonRating:
                                        X(),
                                    }),
                                  }),
                                  (0, y.jsx)(iU, {
                                    children: (0, y.jsx)(eZ.ZP.Button, {
                                      disabled: !eU,
                                      title: eB,
                                      onClick: function () {
                                        return eq("right");
                                      },
                                      color: "dark",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, y.jsx)("div", {
                            className: (0, z.Z)("grid w-full"),
                            children: (0, y.jsxs)("div", {
                              className: (0, z.Z)("mb-2 text-right"),
                              children: [
                                (0, y.jsx)(eZ.ZP.Button, {
                                  disabled: !eU,
                                  title: x.formatMessage(
                                    iL.neitherAnswerBetter
                                  ),
                                  color: "primary",
                                  onClick: function () {
                                    return eq("same");
                                  },
                                  className: (0, z.Z)("mr-2"),
                                }),
                                (0, y.jsx)(eZ.ZP.Button, {
                                  title: x.formatMessage(iL.skipStep),
                                  onClick: function () {
                                    return i();
                                  },
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, y.jsx)(eZ.ZP.Actions, { primaryButton: eN }),
              ],
            },
            "RatingModal-".concat(r)
          )
        );
      }
      var iU = et.Z.div(iA()),
        iz = et.Z.div(iE()),
        iQ = et.Z.div(iF()),
        iH = et.Z.div(iB()),
        i$ = n(37541);
      function iG() {
        var e,
          t,
          n,
          r,
          a,
          i,
          o =
            ((t = (e = (0, r3.S)()).isLoggedInWithMfa),
            (n = e.isUsernamePassword),
            (r = e.setupMfa),
            (i = (a = (0, rE.p0)()).filter(function (e) {
              return !(
                "none" === e.manifest.auth.type ||
                "service_http" === e.manifest.auth.type
              );
            })),
            (t || !n) && (i = []),
            {
              disablePluginsThatWeCantUse: function () {
                var e = a.filter(function (e) {
                  return (
                    "none" === e.manifest.auth.type ||
                    "service_http" === e.manifest.auth.type
                  );
                });
                (0, rE.dT)(
                  e.map(function (e) {
                    return e.id;
                  })
                );
              },
              pluginsWeCantUse: i,
              setupMfa: r,
            }),
          s = o.disablePluginsThatWeCantUse,
          l = o.pluginsWeCantUse,
          u = o.setupMfa,
          c = (0, w.useCallback)(
            function () {
              s();
            },
            [s]
          );
        return 0 === l.length
          ? null
          : (0, y.jsx)(eS.Z, {
              isOpen: !0,
              onClose: c,
              title: "Some of your plugins require two-factor authentication.",
              primaryButton: (0, y.jsx)(eZ.ZP.Button, {
                onClick: u,
                title: "Setup two-factor authentication",
                color: "primary",
              }),
              secondaryButton: (0, y.jsx)(eZ.ZP.Button, {
                onClick: s,
                title: "Turn off the plugins",
              }),
              type: "danger",
              children: (0, y.jsx)("div", {
                className: "flex flex-col gap-2 py-4",
                children: l.map(function (e) {
                  return (0,
                  y.jsx)("div", { className: "w-full", children: (0, y.jsx)(rq.Z, { plugin: e }) }, e.id);
                }),
              }),
            });
      }
      var iW = n(16578),
        iV = n.n(iW),
        iJ = n(44925),
        iY = n(74853),
        iK = n(99652),
        iX = n(1220);
      function i0(e) {
        var t = e.isOpen,
          n = e.onClose,
          r = (0, en.WS)(),
          a = (0, b._)((0, w.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, k.useRouter)(),
          l = (0, w.useCallback)(
            function () {
              r(er.s6.closeAccountPaymentModal), n();
            },
            [n, r]
          ),
          u = (0, w.useCallback)(
            (0, ed._)(function () {
              var e;
              return (0, ef.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    o(!0), r(er.s6.clickAccountCustomerPortal), (t.label = 1);
                  case 1:
                    return (
                      t.trys.push([1, 3, 4, 5]),
                      [4, ea.ZP.fetchCustomerPortalUrl()]
                    );
                  case 2:
                    return (e = t.sent()), s.push(e.url), [3, 5];
                  case 3:
                    return (
                      t.sent(),
                      n_.m.warning(
                        "The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    );
                  case 4:
                    return o(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [s, r, o]
          ),
          c = (0, w.useCallback)(
            function () {
              r(er.s6.clickAccountPaymentGetHelp);
            },
            [r]
          ),
          d = (0, w.useCallback)(
            function () {
              r(er.s6.clickAccountManageIos);
            },
            [r]
          ),
          m = (0, T.hz)(),
          f = (0, T.e2)(),
          h = (0, T.YD)();
        return (0, y.jsxs)(iY.x, {
          isOpen: t,
          onClose: n,
          children: [
            (0, y.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
              children: [
                (0, y.jsx)("span", {
                  className: "text-base font-semibold sm:text-base",
                  children: "Your plan",
                }),
                (0, y.jsx)("button", {
                  className:
                    "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                  onClick: l,
                  children: (0, y.jsx)(C.q5L, { className: "h-6 w-6" }),
                }),
              ],
            }),
            (0, y.jsx)("div", {
              className: "grid",
              children: (0, y.jsx)("div", {
                className: "relative order-1 col-span-1 sm:order-2",
                children: (0, y.jsx)(iK.Oi, {
                  rowElements: [
                    (0, y.jsx)(
                      iK.Cu,
                      {
                        text: iX.S.plus.name,
                        children: (0, y.jsx)("span", {
                          className: "font-semibold text-gray-500",
                          children: iX.S.plus.costInDollars,
                        }),
                      },
                      "row-plus-plan-name"
                    ),
                    (0, y.jsx)(
                      iK.hi,
                      {
                        disabled: !0,
                        variant: "primary-disabled",
                        text: iX.S.plus.callToAction.active,
                      },
                      "row-plus-plan-button"
                    ),
                    (0, y.jsx)(
                      iK.G,
                      { text: iX.S.plus.demandAccess },
                      "row-plus-plan-demand"
                    ),
                    (0, y.jsx)(
                      iK.G,
                      { text: iX.S.plus.responseSpeed },
                      "row-plus-plan-speed"
                    ),
                    (0, y.jsx)(
                      iK.G,
                      { className: "sm:pb-1", text: iX.S.plus.modelFeatures },
                      "row-plus-plan-feathers"
                    ),
                    (null == f ? void 0 : f.purchase_origin_platform) ===
                      iJ._4.MOBILE_IOS &&
                      (0, y.jsx)(
                        iV(),
                        {
                          href: iJ.m1,
                          target: "_blank",
                          passHref: !0,
                          children: (0, y.jsx)(iK.nR, {
                            className: "sm:pb-1",
                            isLoading: !1,
                            text: iX.S.manageSubscriptionIos.callToAction,
                            onClick: d,
                          }),
                        },
                        "row-plus-plan-manage-ios"
                      ),
                    (!f ||
                      f.purchase_origin_platform === iJ._4.WEBAPP ||
                      f.purchase_origin_platform === iJ._4.GRANTED) &&
                      h &&
                      (0, y.jsx)(
                        iK.nR,
                        {
                          className: "sm:pb-1",
                          isLoading: i,
                          text: iX.S.manageSubscriptionWeb.callToAction,
                          onClick: u,
                        },
                        "row-plus-plan-manage"
                      ),
                    (0, y.jsx)(
                      iV(),
                      {
                        href: iJ.ti,
                        target: "_blank",
                        passHref: !0,
                        children: (0, y.jsx)(
                          iK.nR,
                          {
                            className: "sm:pb-1",
                            isLoading: !1,
                            text: iX.S.getHelp.callToAction,
                            onClick: c,
                          },
                          "row-plus-plan-help"
                        ),
                      },
                      "row-plus-plan-help-link"
                    ),
                    m.has("business_seats")
                      ? (0, y.jsx)(
                          iV(),
                          {
                            href: "/payments/business",
                            target: "_blank",
                            passHref: !0,
                            children: (0, y.jsx)(
                              iK.nR,
                              {
                                className: "sm:pb-1",
                                isLoading: !1,
                                text: iX.S.business.callToAction,
                                onClick: c,
                              },
                              "row-plus-plan-help"
                            ),
                          },
                          "row-plus-plan-create-business-team"
                        )
                      : null,
                  ],
                }),
              }),
            }),
          ],
        });
      }
      var i1 = n(48432),
        i2 = n(24148);
      function i5() {
        var e = (0, U._)([
          "flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border bg-white dark:bg-gray-800 border-black/10 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-gray-700 h-11",
        ]);
        return (
          (i5 = function () {
            return e;
          }),
          e
        );
      }
      var i3 = (0, M.vU)({
        newChat: {
          defaultMessage: "New chat",
          id: "Stage.newChat",
          description: "New chat button tooltip",
        },
        openSidebar: {
          defaultMessage: "Show sidebar",
          id: "Stage.openSidebar",
          description: "Open sidebar button tooltip",
        },
        openDebug: {
          defaultMessage: "Open debug sidebar",
          id: "Stage.openDebug",
          description: "Open debug sidebar button tooltip",
        },
      });
      function i4(e) {
        var t = e.isStaticSharedThread,
          n = (0, ee.Z)(),
          r = (0, D.tN)(function (e) {
            return {
              activeSidebar: e.activeSidebar,
              isDesktopNavCollapsed: e.isDesktopNavCollapsed,
            };
          }),
          a = r.isDesktopNavCollapsed,
          i = r.activeSidebar,
          o = (0, T.hz)(),
          s = o.has(ei.Ue),
          l = o.has("debug") && "debug" !== i;
        return t
          ? null
          : (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsx)(J.M, {
                  initial: !1,
                  children:
                    s &&
                    a &&
                    (0, y.jsx)(Y.E.div, {
                      className:
                        "absolute left-2 top-2 z-10 hidden md:inline-block",
                      initial: { opacity: 0 },
                      animate: {
                        opacity: 1,
                        transition: { duration: 0.165, ease: "easeIn" },
                      },
                      children: (0, y.jsx)(tI.u, {
                        side: "right",
                        label: n.formatMessage(i3.openSidebar),
                        children: (0, y.jsx)(i6, {
                          onClick: D.vm.toggleDesktopNavCollapsed,
                          "aria-label": n.formatMessage(i3.openSidebar),
                          children: (0, y.jsx)(el.ZP, {
                            className: "text-black dark:text-white",
                            icon: C.iYc,
                          }),
                        }),
                      }),
                    }),
                }),
                (0, y.jsx)("div", {
                  className:
                    "absolute right-4 top-2 z-10 hidden flex-col gap-2 md:flex",
                  children:
                    l &&
                    (0, y.jsx)(tI.u, {
                      side: "left",
                      label: n.formatMessage(i3.openDebug),
                      children: (0, y.jsx)(i6, {
                        onClick: function () {
                          return D.vm.toggleActiveSidebar("debug");
                        },
                        "aria-label": n.formatMessage(i3.openDebug),
                        children: (0, y.jsx)(el.ZP, {
                          className: "text-black dark:text-white",
                          icon: C.cDN,
                        }),
                      }),
                    }),
                }),
              ],
            });
      }
      var i6 = et.Z.button(i5()),
        i7 = n(89678),
        i8 = n.n(i7),
        i9 = n(55989),
        oe = n(66523),
        ot = [
          /\bnigger\w*/i,
          /\bfaggot\w*/i,
          /\bkike\w*/i,
          /\bdykes?\b/i,
          /\bwetbacks?\b/i,
          /\bchinks?\b/i,
          /\bgooks?\b/i,
          /\bpakis?\b/i,
          /\binjuns?\b/i,
          /\btrannys?\b/i,
          /\btrannies\b/i,
          /\bspicks?\b/i,
          /\bshemales?\b/i,
        ];
      function on(e) {
        return or.apply(this, arguments);
      }
      function or() {
        return (or = (0, ed._)(function (e) {
          var t, n;
          return (0, ef.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (t = (0, b._)(e.queryKey, 2))[0],
                  (n = t[1]),
                  [
                    4,
                    ea.ZP.getThreadInterpreterState(n).then(function (e) {
                      return (
                        0 === e.time_remaining_ms &&
                          e.kernel_started &&
                          n_.m.warning(
                            "This code interpreter (beta) chat has timed out. You may continue the conversation, but previous files, links, and code blocks below may not work as expected.",
                            { hasCloseButton: !0, duration: 0 }
                          ),
                        e
                      );
                    }),
                  ]
                );
              case 1:
                return [2, r.sent()];
            }
          });
        })).apply(this, arguments);
      }
      var oa = n(70060),
        oi = n.n(oa)()(
          function () {
            return Promise.resolve().then(n.bind(n, 1215));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [1215];
              },
            },
            ssr: !1,
          }
        );
      function oo(e) {
        var t = e.children;
        return (0, y.jsx)(oi, {
          className: "h-full dark:bg-gray-800",
          followButtonClassName: "scroll-convo",
          initialScrollBehavior: "auto",
          children: t,
        });
      }
      function os() {
        var e = (0, U._)(["grow flex-1 overflow-hidden"]);
        return (
          (os = function () {
            return e;
          }),
          e
        );
      }
      function ol() {
        var e = (0, U._)([
          "absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2 md:-left-2",
        ]);
        return (
          (ol = function () {
            return e;
          }),
          e
        );
      }
      var ou = (0, M.vU)({
        contentPolicyViolation: {
          id: "thread.modal.restrictedTerms.title",
          defaultMessage: "This prompt may violate our content policy.",
          description: "Title for the restricted terms modal",
        },
        acknowledge: {
          id: "thread.modal.common.acknowledge",
          defaultMessage: "Acknowledge",
          description: "Acknowledge button text",
        },
        doNotShareSensitive: {
          id: "thread.modal.onboarding.title",
          defaultMessage:
            "Do not share sensitive materials with this application",
          description: "Title for the onboarding warning modal",
        },
        freeResearchPreview: {
          id: "thread.chatgptFreeResearchPreview",
          defaultMessage:
            "Free Research Preview. ChatGPT 中文镜像 <link>ChatGPT May 24 Version</link>",
          description: "Free Research Preview disclaimer",
        },
        mayProduceInaccurateInformation: {
          id: "thread.chatgptMayProduceInaccurateInformation",
          defaultMessage:
            "ChatGPT 中文镜像 <link>ChatGPT May 24 Version</link>",
          description:
            "ChatGPT disclaimer for producing inaccurate information",
        },
        somethingWentWrong: {
          id: "thread.modal.unrecoverableError.title",
          defaultMessage: "Something went wrong",
          description: "Title for the UnrecoverableErrorModal",
        },
        tryAgainLater: {
          id: "thread.modal.unrecoverableError.description",
          defaultMessage:
            "We're sorry, but something went wrong. Please try again later.",
          description: "Description for the UnrecoverableErrorModal",
        },
        resetThread: {
          id: "thread.modal.unrecoverableError.resetThread",
          defaultMessage: "Reset thread",
          description: "Reset thread button text",
        },
        reportModalThankYouTitle: {
          id: "thread.modal.reportModalThankYou.title",
          defaultMessage: "Thank you for your report!",
          description: "Title for the post-report thank-you modal",
        },
        reportModalThankYouDescription: {
          id: "thread.modal.reportModalThankYou.description",
          defaultMessage: "Thank you for your report.",
          description: "Description for the post-report thank-you modal",
        },
        reportModalThankYouDismiss: {
          id: "thread.modal.reportModalThankYou.dismissButton",
          defaultMessage: "Close",
          description: "Close button for the post-report thank-you modal",
        },
        sharedConversationContinueConversation: {
          id: "thread.sharedConversation.continue",
          defaultMessage: "Continue this conversation",
          description:
            "Button for shared links to allow user to continue conversation in their own history",
        },
        sharedConversationReportConversation: {
          id: "thread.sharedConversation.report",
          defaultMessage: "Report conversation",
          description:
            "Button for shared links to report chat for legal, safety, or other reasons",
        },
        sharedConversationModerateConversation: {
          id: "thread.sharedConversation.moderate",
          defaultMessage: "Moderate conversation",
          description:
            "Button for shared links to moderate a chat for legal, safety, or other reasons",
        },
        reportSharedConversation: {
          id: "thread.reportSharedConversation",
          defaultMessage: "Report content",
          description: "Report shared chat footer link text",
        },
        termsOfUse: {
          id: "thread.termsOfUse",
          defaultMessage: "Terms of use",
          description: "Terms of use footer link text",
        },
        privacyPolicy: {
          id: "thread.privacyPolicy",
          defaultMessage: "Privacy policy",
          description: "Privacy policy footer link text",
        },
      });
      function oc(e) {
        var t = e.onClickReportSharedConversation;
        return (0, y.jsxs)("div", {
          className: "flex justify-center gap-3 text-gray-500",
          children: [
            (0, y.jsx)("button", {
              onClick: function () {
                t();
              },
              children: (0, y.jsx)(
                _.Z,
                (0, v._)({}, ou.reportSharedConversation)
              ),
            }),
            (0, y.jsx)("span", { children: "|" }),
            (0, y.jsx)("a", {
              href: "https://openai.com/policies/terms-of-use",
              target: "_blank",
              rel: "noreferrer",
              children: (0, y.jsx)(_.Z, (0, v._)({}, ou.termsOfUse)),
            }),
            (0, y.jsx)("span", { children: "|" }),
            (0, y.jsx)("a", {
              href: "https://openai.com/policies/privacy-policy",
              target: "_blank",
              rel: "noreferrer",
              children: (0, y.jsx)(_.Z, (0, v._)({}, ou.privacyPolicy)),
            }),
          ],
        });
      }
      var od = function (e) {
          var t,
            n,
            r,
            a,
            i,
            o,
            s,
            l,
            u,
            c,
            d,
            m,
            f,
            h,
            g,
            p,
            x,
            j,
            M,
            I,
            Z,
            P,
            F,
            B,
            L,
            q,
            O,
            U,
            Q,
            H,
            $,
            G,
            W,
            V,
            J,
            Y,
            K,
            et,
            eo,
            el = e.initialThreadData,
            eu = e.clientThreadId,
            eh = e.activeRequests,
            eg = e.setActiveRequests,
            ev = e.handleResetThread,
            ex = e.isStaticSharedThread,
            eb = e.initiallyHighlightedMessageId,
            ey = e.continueConversationUrl,
            ek = (0, ee.Z)(),
            ew = (0, T.hz)(),
            eC = (0, eA.Fl)().isPluginsAvailable,
            e_ = (0, E.w$)(),
            eM = (0, en.WS)(),
            eT = ew.has(ei.Pt) && e_,
            eN = (0, w.useContext)(A.QL).historyDisabled,
            eI = (0, k.useRouter)(),
            eP =
              ex &&
              (null === (G = eI.query) || void 0 === G
                ? void 0
                : null === (W = G.shareParams) || void 0 === W
                ? void 0
                : W[1]) === "moderate",
            eR = (0, N.U0)(eu),
            eD = (0, N.Kt)(eu),
            eE = (0, N.oq)(eu),
            eF = (0, b._)((0, w.useState)(!1), 2),
            eB = eF[0],
            eU = eF[1],
            ez = (0, b._)((0, w.useState)(!1), 2),
            eQ = ez[0],
            eH = ez[1],
            e$ = (0, b._)((0, w.useState)(), 2),
            eG = e$[0],
            eW = e$[1],
            eV = (0, b._)((0, w.useState)(!1), 2),
            eJ = eV[0],
            eY = eV[1],
            eK = (0, b._)((0, w.useState)(), 2),
            eX = eK[0],
            e0 = eK[1],
            e1 = (0, b._)((0, w.useState)(), 2),
            e2 = e1[0],
            e5 = e1[1],
            e3 = (0, b._)((0, w.useState)(), 2),
            e4 = e3[0],
            e6 = e3[1],
            e7 = (0, w.useRef)(null),
            e8 = (0, T.nR)(),
            e9 = (0, iR.g)(function (e) {
              return e.flags.isUserInCanPayGroup;
            }),
            te = ew.has(ei.FZ),
            tt = (0, b._)((0, w.useState)(!1), 2),
            tn = tt[0],
            tr = tt[1],
            ta =
              ((i = (a = {
                exempt: !1,
                onRestrictedTermFound: (0, w.useCallback)(
                  function (e) {
                    tr(!0),
                      eM(er.s6.promptUsedRestrictedWords, {
                        threadId: N.tQ.getServerThreadId(eu),
                        content: e,
                      });
                  },
                  [eM, eu]
                ),
              }).exempt),
              (o = a.onRestrictedTermFound),
              (l = (s = (0, b._)((0, w.useState)(!1), 2))[0]),
              (u = s[1]),
              {
                hasRestrictedTerms: l,
                checkRestrictedTerms: (0, w.useCallback)(
                  function (e) {
                    var t;
                    return (ot.some(function (n) {
                      var r = n.exec(e);
                      return r && (t = r[0]), r;
                    }),
                    !i && t)
                      ? (u(!0), null == o || o(t), !0)
                      : (u(!1), !1);
                  },
                  [i, o]
                ),
              }),
            ti = ta.hasRestrictedTerms,
            to = ta.checkRestrictedTerms,
            ts = (0, b._)((0, w.useState)(!0), 2),
            tl = ts[0],
            tu = ts[1],
            td = (0, b._)((0, w.useState)(!1), 2),
            tm = td[0],
            tf = td[1],
            th = (0, tD.iu)(),
            tg = (0, rE.p0)(),
            tp = (0, tD.Gg)(th, !0),
            tv =
              null !== (eo = (0, tD.Bv)(el.lastModelUsed, eu)) && void 0 !== eo
                ? eo
                : tp,
            tx = (0, tD.B9)(),
            tb = void 0 !== tv ? tx.get(tv) : void 0,
            ty = (0, a6.iF)(),
            tj = (0, w.useCallback)(
              function () {
                ty(), eM(er.s6.newThread);
              },
              [eM, ty]
            ),
            tk = N.tQ.getTitle(eu),
            tw = (0, b._)((0, w.useState)(), 2),
            tC = tw[0],
            t_ = tw[1],
            tM = (0, w.useCallback)(
              function (e, t) {
                var n = null != t ? t : "";
                eN ||
                  "" === n ||
                  ea.ZP.generateTitle(n, e, tv)
                    .then(function (e) {
                      var r = e.title;
                      N.tQ.setTitle(n, r, N._L.Generated),
                        ty(),
                        eM(er.s6.renameThread, {
                          threadId: t,
                          content: r,
                          model: tv,
                        });
                    })
                    .catch(function (e) {
                      console.error(e);
                    });
              },
              [eN, eM, tv, ty]
            ),
            tT = (0, w.useCallback)(
              function (e, t, n) {
                var r = ew.has(ei.uj);
                eN ||
                  !r ||
                  void 0 === n ||
                  (0, eq.lD)(n) ||
                  (0, eq.JD)(n) ||
                  ea.ZP.generateSuggestions(e, t, tv)
                    .then(function (e) {
                      t_({ messageId: t, suggestions: e.suggestions });
                    })
                    .catch(function (e) {
                      console.error(e);
                    });
              },
              [ew, eN, tv]
            ),
            tN = (0, N.Uy)(eu),
            tI =
              ((c =
                eC &&
                (null == tb
                  ? void 0
                  : null === (V = tb.enabledTools) || void 0 === V
                  ? void 0
                  : V.includes("tools3"))
                  ? tg.map(function (e) {
                      return e.id;
                    })
                  : void 0),
              (m = (d = (0, T.hz)()).has(ei.PL)),
              (f = (0, w.useId)()),
              (h = (0, en.WS)()),
              (g = (0, ra.Y8)(function (e) {
                return null == e ? void 0 : e.setCapTimeout;
              })),
              (p = (0, ra.Y8)(function (e) {
                return null == e ? void 0 : e.clearCapTimeout;
              })),
              (x = (0, w.useContext)(A.QL).historyDisabled),
              (j = (0, tD.B9)()),
              (M = (0, w.useRef)(0)),
              (I = (0, w.useRef)({})),
              (Z = (0, w.useCallback)(
                function (e, t, n, r) {
                  var a,
                    i,
                    o = r.eventSource,
                    s = function () {
                      setTimeout(function () {
                        R.removeAborterById(n),
                          eg(function (e) {
                            var t = new Set(e);
                            return t.delete(n), t;
                          }),
                          delete I.current[n],
                          N.tQ.releaseThread(eu);
                      }, 0);
                    },
                    l = N.tQ.getTree(eu),
                    u = n,
                    c = l.getParentId(u),
                    f = t === eL.Os.Continue,
                    x = !0,
                    b = !1,
                    y = l.getMessage(u),
                    k = new Set(),
                    w = l.getIsBlockedFromNode(c),
                    C = !1,
                    _ = !1,
                    M = i8()(
                      function () {
                        w ||
                          C ||
                          N.tQ.updateTree(eu, function (e) {
                            e.updateNodeMessage(u, y);
                          });
                      },
                      50,
                      { leading: !0, maxWait: 50 }
                    );
                  function T() {
                    return (T = (0, ed._)(function (e, t, n) {
                      var r,
                        a,
                        i,
                        o,
                        s,
                        u = arguments;
                      return (0, ef.Jh)(this, function (c) {
                        switch (c.label) {
                          case 0:
                            (r = u.length > 3 && void 0 !== u[3] && u[3]),
                              (c.label = 1);
                          case 1:
                            return (
                              c.trys.push([1, 3, , 4]),
                              [4, (0, iP._I)(n, !1, e, l.getMessageId(t))]
                            );
                          case 2:
                            return (
                              (i = (a = c.sent()).isBlocked),
                              (o = a.isFlagged),
                              (i || o) && (_ = !0),
                              i
                                ? ((C = !0),
                                  r || (w = !0),
                                  N.tQ.updateTree(eu, function (e) {
                                    e.updateNode(t, {
                                      message: {
                                        content: { parts: { $set: [""] } },
                                      },
                                      metadata: {
                                        $set: (0, em._)((0, v._)({}, iP.sK), {
                                          completionSampleFinishTime:
                                            Date.now(),
                                        }),
                                      },
                                    });
                                  }),
                                  h(
                                    r
                                      ? er.s6.completionBlockedByModeration
                                      : er.s6.promptBlockedByModeration,
                                    { threadId: e, id: t }
                                  ))
                                : o
                                ? (N.tQ.updateTree(eu, function (e) {
                                    e.updateNode(t, {
                                      metadata: { $set: iP.Mf },
                                    });
                                  }),
                                  h(
                                    r
                                      ? er.s6.completionFlaggedByModeration
                                      : er.s6.promptFlaggedByModeration,
                                    { threadId: e, id: t }
                                  ))
                                : r &&
                                  w &&
                                  N.tQ.updateTree(eu, function (e) {
                                    e.updateNodeMessage(t, y);
                                  }),
                              [3, 4]
                            );
                          case 3:
                            return (
                              (s = c.sent()),
                              (C = !0),
                              N.tQ.updateTree(eu, function (e) {
                                e.updateNode(t, {
                                  metadata: {
                                    $set: {
                                      err: "An error occured",
                                      errType: "danger",
                                      completionSampleFinishTime: Date.now(),
                                    },
                                  },
                                });
                              }),
                              h(er.s6.moderationError, {
                                threadId: e,
                                content: JSON.stringify(s || ""),
                              }),
                              iT().publish("UnrecoverableError"),
                              [3, 4]
                            );
                          case 4:
                            return [2];
                        }
                      });
                    })).apply(this, arguments);
                  }
                  return (
                    (a = (0, ed._)(function (r) {
                      var a, Z, S, P, D, A, E, B, L, q, O, U, z, Q, H, $, G, W;
                      return (0, ef.Jh)(this, function (V) {
                        switch (V.label) {
                          case 0:
                            if ("error" === r.type)
                              return (
                                console.error((a = r.error)),
                                (Z =
                                  (null == a ? void 0 : a.message) ||
                                  "Something went wrong"),
                                N.tQ.updateTree(eu, function (e) {
                                  e.updateNode(u, {
                                    message: { $set: y },
                                    metadata: {
                                      $set: {
                                        err: Z,
                                        errType: "danger",
                                        errCode: ((0, i9.T)(a) && a.code) || "",
                                        completionSampleFinishTime: Date.now(),
                                      },
                                    },
                                  });
                                }),
                                s(),
                                (0, i9.T)(a) &&
                                  (null == a ? void 0 : a.code) === ra.uU &&
                                  (null == a ? void 0 : a.clearsIn) &&
                                  (g(
                                    new Date(
                                      Date.now() + 1e3 * a.clearsIn
                                    ).toISOString()
                                  ),
                                  setTimeout(function () {
                                    p();
                                  }, 1e3 * a.clearsIn)),
                                [2]
                              );
                            if (
                              ("moderation" === r.type &&
                                ((S = r.isCompletion),
                                (P = r.messageId),
                                (D = r.conversationId),
                                (A = r.flagged),
                                ((E = r.blocked) || A) &&
                                  N.tQ.updateTree(eu, function (e) {
                                    var t = e.messageIdToNodeId(P);
                                    e.updateNode(t, {
                                      message: {
                                        content: { parts: { $set: [""] } },
                                      },
                                      metadata: {
                                        $set: (0, em._)(
                                          (0, v._)({}, E ? iP.sK : iP.Mf),
                                          {
                                            completionSampleFinishTime:
                                              Date.now(),
                                          }
                                        ),
                                      },
                                    });
                                  }),
                                (A || E) &&
                                  h(
                                    S
                                      ? E
                                        ? er.s6.completionBlockedByModeration
                                        : er.s6.completionFlaggedByModeration
                                      : E
                                      ? er.s6.promptBlockedByModeration
                                      : er.s6.promptFlaggedByModeration,
                                    { threadId: D, id: P }
                                  )),
                              "message" === r.type)
                            ) {
                              if (
                                ((B = r.message),
                                (L = r.conversationId),
                                x && l.isFirstCompletion)
                              ) {
                                if (
                                  (null == B ? void 0 : B.author.role) ===
                                  eL.uU.System
                                )
                                  return l.appendSystemMessageToRoot(B), [2];
                                if (
                                  (null == B ? void 0 : B.author.role) ===
                                  eL.uU.User
                                )
                                  return [2];
                              }
                              x
                                ? ((O =
                                    (null ===
                                      (q = N.qN.getState().threads[eu]) ||
                                    void 0 === q
                                      ? void 0
                                      : q.continuingFromSharedConversationId) !=
                                    null),
                                  N.tQ.removeContinuingFromSharedConversationId(
                                    eu
                                  ),
                                  (x = !1),
                                  (b = l.isFirstCompletion || O),
                                  (null == B ? void 0 : B.id) && k.add(n),
                                  void 0 !== L &&
                                    ((i = L),
                                    (0, N.Zz)(eu) &&
                                      N.tQ.setServerIdForNewThread(eu, L)),
                                  N.tQ.updateTree(eu, function (e) {
                                    e.updateNodeMessage(u, B);
                                  }),
                                  b && tj(L),
                                  f ||
                                    (function (e, t, n) {
                                      T.apply(this, arguments);
                                    })(L, c, l.getTextFromLastNTurns(c, 1), !1),
                                  h(er.s6.generateCompletion, {
                                    id: n,
                                    threadId: L,
                                    completionType: t,
                                    eventSource: o,
                                    model: e,
                                  }),
                                  R.addAborter(n, I.current[n]))
                                : f ||
                                  B.id === l.getMessageId(u) ||
                                  (k.add(B.id),
                                  M.flush(),
                                  N.tQ.updateTree(eu, function (e) {
                                    e.addNode(B.id, B, u, eL.Jq.Completion);
                                  }),
                                  (u = B.id),
                                  N.tQ.setThreadCurrentLeafId(eu, u)),
                                (y = B);
                            }
                            if (
                              (M(),
                              "done" !== r.type ||
                                (w ||
                                  C ||
                                  (M.flush(),
                                  _ ||
                                    ((U = l.getMessageId(u)),
                                    b && tM(U, i),
                                    tT(i, U, y))),
                                N.tQ.updateTree(eu, function (e) {
                                  e.updateNode(u, {
                                    metadata: {
                                      $set: (0, em._)(
                                        (0, v._)({}, l.getMetadata(u)),
                                        {
                                          completionSampleFinishTime:
                                            Date.now(),
                                        }
                                      ),
                                    },
                                  });
                                }),
                                s(),
                                !d.has("tools3_dev")) ||
                                ((Q =
                                  null === (z = j.get(e)) || void 0 === z
                                    ? void 0
                                    : z.tags.includes(tD.S.GPT_4)),
                                m && Q && iS.gatherData(),
                                !(H = (0, tc.wR)(y))))
                            )
                              return [3, 4];
                            return [4, (0, tc.qZ)(H)];
                          case 1:
                            if (
                              (($ = V.sent()),
                              (G = u),
                              N.tQ.updateTree(eu, function (e) {
                                var t = !0,
                                  n = !1,
                                  r = void 0;
                                try {
                                  for (
                                    var a, i = $[Symbol.iterator]();
                                    !(t = (a = i.next()).done);
                                    t = !0
                                  ) {
                                    var o = a.value;
                                    e.addNode(o.id, o, G, eL.Jq.Completion, {
                                      completionSampleFinishTime: Date.now(),
                                    }),
                                      (G = o.id);
                                  }
                                } catch (e) {
                                  (n = !0), (r = e);
                                } finally {
                                  try {
                                    t || null == i.return || i.return();
                                  } finally {
                                    if (n) throw r;
                                  }
                                }
                              }),
                              N.tQ.setThreadCurrentLeafId(eu, G),
                              !(m && Q))
                            )
                              return [3, 3];
                            return [4, iS.getEnforcementToken()];
                          case 2:
                            (W = V.sent()), (V.label = 3);
                          case 3:
                            F({
                              model: e,
                              completionType: eL.Os.Next,
                              parentNodeId: G,
                              metadata: {},
                              arkoseToken: null != W ? W : null,
                            }),
                              (V.label = 4);
                          case 4:
                            return [2];
                        }
                      });
                    })),
                    function (e) {
                      return a.apply(this, arguments);
                    }
                  );
                },
                [h, tj, tM, eg, eu]
              )),
              (F = (0, w.useCallback)(
                ((P = (0, ed._)(function (e) {
                  var t, n, r, a, i, o, s, l, u, d, m, h, g, p, v, b, y;
                  return (0, ef.Jh)(this, function (j) {
                    switch (j.label) {
                      case 0:
                        return (
                          (t = e.model),
                          (n = e.completionType),
                          (r = e.parentNodeId),
                          (a = e.metadata),
                          (o = void 0 === (i = e.focusOnNewCompletion) || i),
                          (s = e.completionMetadata),
                          (l = e.arkoseToken),
                          (u = N.tQ.getTree(eu)),
                          N.tQ.retainThread(eu),
                          (d = ""
                            .concat(eO.Vh)
                            .concat(f, "-")
                            .concat(M.current++)),
                          eg(function (e) {
                            var t = new Set(e);
                            return t.add(d), t;
                          }),
                          N.tQ.updateTree(eu, function (e) {
                            e.addNode(d, "", r, eL.Jq.Completion);
                          }),
                          o && N.tQ.setThreadCurrentLeafId(eu, d),
                          (h = []),
                          (g = u.getNode(r)),
                          n === eL.Os.Next || n === eL.Os.Variant
                            ? ((m =
                                (null ===
                                  (p = (v = u.getNode(g.parentId)).message) ||
                                void 0 === p
                                  ? void 0
                                  : p.id) || v.id),
                              h.push(g.message))
                            : (m = g.message.id),
                          void 0 === (b = N.tQ.getServerThreadId(eu)) &&
                            (0, N.Zz)(eu) &&
                            N.tQ.updateInitialThreadDataForNewThread(eu, t, c),
                          [
                            4,
                            ea.ZP.publicApiCompletionStream(
                              {
                                model: t,
                                completionType: n,
                                threadId: b,
                                continueFromSharedConversationId: tN,
                                historyDisabled: x,
                                parentMessageId: m,
                                messages: h,
                                arkoseToken: null != l ? l : null,
                                enabledPluginIds: c,
                                completionMetadata: s,
                              },
                              Z(t, n, d, a)
                            ),
                          ]
                        );
                      case 1:
                        return (y = j.sent()), (I.current[d] = y), [2];
                    }
                  });
                })),
                function (e) {
                  return P.apply(this, arguments);
                }),
                [eu, f, eg, tN, x, c, Z]
              ))),
            tZ = (0, w.useCallback)(
              function () {
                if (eE) {
                  var e = N.tQ.getTree(eu).getBranchFromLeaf(eE);
                  e.forEach(function (e) {
                    R.abortAndRemoveById(e.id);
                  }),
                    eg(function (t) {
                      var n = new Set(t);
                      return (
                        e.forEach(function (e) {
                          n.delete(e.id);
                        }),
                        n
                      );
                    });
                }
              },
              [eE, eg, eu]
            ),
            tS =
              null === (J = tx.get(tv)) || void 0 === J
                ? void 0
                : J.tags.includes(tD.S.GPT_4),
            tP = ew.has(ei.PL);
          (0, w.useEffect)(
            function () {
              tP && tS && iS.gatherData();
            },
            [tP, tS]
          );
          var tR = (0, w.useCallback)(
              ((B = (0, ed._)(function (e, t, n, r) {
                var a,
                  i,
                  o,
                  s,
                  l,
                  u,
                  c,
                  d,
                  m = arguments;
                return (0, ef.Jh)(this, function (f) {
                  switch (f.label) {
                    case 0:
                      if (
                        ((a = !(m.length > 4) || void 0 === m[4] || m[4]),
                        (i = m.length > 5 ? m[5] : void 0),
                        (o = m.length > 6 ? m[6] : void 0),
                        r && tZ(),
                        (l = N.tQ.getTree(eu)),
                        e !== eL.Os.Continue && to(l.getTextFromNode(t)))
                      )
                        return [2];
                      if (
                        ((u = i ? tp : tv),
                        (c =
                          null === (s = tx.get(u)) || void 0 === s
                            ? void 0
                            : s.tags.includes(tD.S.GPT_4)),
                        !(tP && c))
                      )
                        return [3, 2];
                      return [4, iS.getEnforcementToken()];
                    case 1:
                      (d = f.sent()), (f.label = 2);
                    case 2:
                      return (
                        tI({
                          model: u,
                          completionType: e,
                          parentNodeId: t,
                          metadata: n,
                          focusOnNewCompletion: a,
                          completionMetadata: o,
                          arkoseToken: null != d ? d : null,
                        }),
                        [2]
                      );
                  }
                });
              })),
              function (e, t, n, r) {
                return B.apply(this, arguments);
              }),
              [eu, to, tp, tv, tx, tP, tI, tZ]
            ),
            tA = (0, w.useCallback)(
              function (e, t, n, r) {
                N.tQ.updateTree(eu, function (a) {
                  a.addNode(e, n, t, eL.Jq.Prompt, void 0, r);
                });
              },
              [eu]
            ),
            tE = (0, w.useCallback)(
              function (e, t, n) {
                var r = t.content,
                  a = t.attachments,
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {};
                tA(e, eE, r, a.length > 0 ? { attachments: a } : {}),
                  tR(eL.Os.Next, e, n, !0, void 0, void 0, i);
              },
              [eE, tA, tR]
            ),
            tF = (0, N.nh)(eu, eE),
            tB = (0, w.useMemo)(
              function () {
                var e,
                  t,
                  n = tF.type === eL.Jq.Prompt,
                  r =
                    (null === (e = tF.metadata) || void 0 === e
                      ? void 0
                      : e.err) &&
                    (null === (t = tF.metadata) || void 0 === t
                      ? void 0
                      : t.errCode) !== iP.Dd;
                return !!(n || r) && 0 === eh.size;
              },
              [eh.size, tF]
            ),
            tL = (0, ra.Y8)(function (e) {
              return e.isoDate;
            }),
            tq = (0, w.useMemo)(
              function () {
                var e,
                  t =
                    (null === (e = tF.metadata) || void 0 === e
                      ? void 0
                      : e.errCode) === ra.uU;
                return tB && t && null != tL && "" !== tL;
              },
              [
                null === (Y = tF.metadata) || void 0 === Y ? void 0 : Y.errCode,
                tB,
                tL,
              ]
            ),
            tO = (0, w.useCallback)(
              function (e, t) {
                var n =
                    !(arguments.length > 2) ||
                    void 0 === arguments[2] ||
                    arguments[2],
                  r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : "none",
                  a = arguments.length > 4 ? arguments[4] : void 0,
                  i = N.tQ.getTree(eu).getParentPromptNode(e).id;
                tR(eL.Os.Variant, i, t, !1, n, a, { variantPurpose: r });
              },
              [tR, eu]
            ),
            tU = (0, w.useCallback)(
              function (e) {
                eM(er.s6.continueCompletion),
                  tR(eL.Os.Continue, e, { eventSource: "mouse" }, !1);
              },
              [eM, tR]
            ),
            tz = (0, w.useCallback)(
              function (e) {
                var t = N.tQ.getTree(eu).getLeafFromNode(e);
                N.tQ.setThreadCurrentLeafId(eu, t.id), eM(er.s6.changeNode);
              },
              [eM, eu]
            ),
            tQ = (0, w.useCallback)(
              function (e, t) {
                N.tQ.updateTree(eu, function (n) {
                  n.updateNodeText(e, t);
                });
              },
              [eu]
            ),
            tH = (0, w.useCallback)(
              function (e, t, n) {
                var r = N.tQ.getServerThreadId(eu);
                if (
                  (eM(er.s6.thumbRating, {
                    id: t,
                    threadId: r,
                    rating: n,
                    model: tv,
                  }),
                  void 0 !== r &&
                    ea.ZP.submitMessageFeedback({
                      message_id: t,
                      conversation_id: r,
                      rating: n,
                    }),
                  e5(e),
                  e6(t),
                  e0(n),
                  N.tQ.updateTree(eu, function (t) {
                    var r = t.getMetadata(e);
                    t.updateNode(e, {
                      metadata: {
                        $set: (0, em._)((0, v._)({}, r), { rating: n }),
                      },
                    });
                  }),
                  "thumbsDown" === n && eT)
                ) {
                  var a = N.tQ.getTree(eu).getConversationTurns(e || "root");
                  iq(a[a.length - 1]) &&
                    tO(
                      e,
                      { eventSource: "mouse", intent: "comparison" },
                      !1,
                      "comparison"
                    );
                }
              },
              [eM, eu, tv, eT, tO]
            ),
            t$ = (0, w.useCallback)(
              function (e, t) {
                if (eX && null != e2 && "" !== e2 && (e || t.length > 0)) {
                  var n = N.tQ.getServerThreadId(eu);
                  eM(er.s6.reportResult, {
                    id: e4,
                    threadId: n,
                    content: e,
                    model: tv,
                    rating: eX,
                    tags: t,
                  }),
                    eu &&
                      e4 &&
                      ea.ZP.submitMessageFeedback({
                        message_id: e4,
                        conversation_id: n,
                        rating: eX,
                        text: e,
                        tags: t,
                      });
                }
              },
              [eX, e2, eu, eM, e4, tv]
            ),
            tG = (0, w.useCallback)(
              function (e, t) {
                if (eB && null != eG && "" !== eG) {
                  var n = N.tQ.getServerThreadId(eu);
                  eM(er.s6.reportResult, {
                    id: e4,
                    threadId: n,
                    content: e,
                    model: tv,
                    rating: eX,
                    tags: t,
                  }),
                    ea.ZP.submitSharedConversationReportFeedback({
                      message_id: eG,
                      shared_conversation_id: n,
                      text: e,
                      tags: t,
                    }),
                    eH(!0);
                }
              },
              [eX, eB, eG, eu, eM, e4, tv]
            ),
            tW = (0, w.useCallback)(
              ((L = (0, ed._)(function (e, t, n, r, a, i, o, s, l, u, c) {
                return (0, ef.Jh)(this, function (d) {
                  switch (d.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.submitMessageComparisonFeedback({
                          feedback_version: "comparison_feedback_modal:a:1.0",
                          original_message_id: e,
                          new_message_id: t,
                          rating: n,
                          conversation_id: N.tQ.getServerThreadId(eu),
                          text: u,
                          tags: c.map(function (e) {
                            return e.replace("feedback-", "");
                          }),
                          completion_comparison_rating: r,
                          new_completion_placement: a,
                          feedback_start_time: i,
                          compare_step_start_time: o,
                          new_completion_load_start_time: s,
                          new_completion_load_end_time: l,
                          frontend_submission_time: Date.now(),
                          timezone_offset_min: new Date().getTimezoneOffset(),
                        }),
                      ];
                    case 1:
                      return d.sent(), [2];
                  }
                });
              })),
              function (e, t, n, r, a, i, o, s, l, u, c) {
                return L.apply(this, arguments);
              }),
              [eu]
            ),
            tV = (0, w.useCallback)(
              ((q = (0, ed._)(function (e, t, n, r, a, i, o) {
                return (0, ef.Jh)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.submitMessageComparisonFeedback({
                          feedback_version: "inline_regen_feedback:a:1.0",
                          original_message_id: e,
                          new_message_id: t,
                          rating: "none",
                          conversation_id: N.tQ.getServerThreadId(eu),
                          text: "",
                          tags: [],
                          completion_comparison_rating: n,
                          new_completion_placement: "not-applicable",
                          feedback_start_time: r,
                          compare_step_start_time: a,
                          new_completion_load_start_time: i,
                          new_completion_load_end_time: o,
                          frontend_submission_time: Date.now(),
                          timezone_offset_min: new Date().getTimezoneOffset(),
                        }),
                      ];
                    case 1:
                      return s.sent(), [2];
                  }
                });
              })),
              function (e, t, n, r, a, i, o) {
                return q.apply(this, arguments);
              }),
              [eu]
            ),
            tJ = (0, w.useCallback)(
              function (e, t) {
                var n = N.tQ.getTree(eu).getConversationTurns(e),
                  r =
                    null == n
                      ? void 0
                      : n[(null == n ? void 0 : n.length) - 1].variantIds,
                  a = (null == r ? void 0 : r.length) === 1;
                tO(
                  e,
                  a
                    ? (0, em._)((0, v._)({}, t), {
                        intent: "comparison_implicit",
                      })
                    : t,
                  !0,
                  a ? "comparison_implicit" : "none"
                );
              },
              [tO, eu]
            ),
            tY = (0, w.useCallback)(
              function (e) {
                N.tQ.updateTree(eu, function (t) {
                  t.deleteNode(e);
                });
              },
              [eu]
            ),
            tK = (0, w.useCallback)(function () {
              D.vm.closeModal(D.B.AccountPortal);
            }, []),
            tX = (0, i2.t)(function (e) {
              return {
                setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                showAccountPaymentModal: e.showAccountPaymentModal,
              };
            }),
            t0 = tX.showAccountPaymentModal,
            t1 = tX.setShowAccountPaymentModal,
            t2 = (0, w.useCallback)(
              function () {
                t1(!1);
              },
              [t1]
            ),
            t5 = (0, w.useCallback)(
              function (e, t) {
                var n = N.tQ.getTree(eu);
                if (n.isFirstCompletion && !eN) {
                  var r,
                    a = n.getParent(t);
                  (null === (r = a.metadata) || void 0 === r
                    ? void 0
                    : r.errCode) !== iP.Dd &&
                    setTimeout(function () {
                      tM(a.message.id);
                    }, 500);
                }
                R.abortAndRemoveById(t),
                  eh.has(t) &&
                    (N.tQ.updateTree(eu, function (e) {
                      e.updateNodeMessageMetadata(t, {
                        finish_details: { type: "interrupted" },
                      });
                    }),
                    eg(function (e) {
                      var n = new Set(e);
                      return n.delete(t), n;
                    }));
              },
              [tM, eN, eh, eg, eu]
            ),
            t3 = (0, w.useCallback)(function () {
              tf(!0);
            }, []);
          (0, w.useEffect)(
            function () {
              var e = iT().subscribe("AbortCompletion", t5),
                t = iT().subscribe("UnrecoverableError", t3);
              return function () {
                iT().unsubscribe(e), iT().unsubscribe(t);
              };
            },
            [t5, t3]
          );
          var t4 = (0, N.Hk)(eu),
            t6 = eR >= 2,
            t7 = (0, N.Zz)(eu) && !t6,
            t8 = (0, w.useCallback)(function () {
              tu(!0), ec.m.setItem("oai/librarian/hasSeenWarning", "true");
            }, []),
            t9 = (0, w.useCallback)(function () {
              tr(!1);
            }, []),
            ne = (0, N.lA)(eu, eE),
            nt = (0, N.dz)(eu, eE),
            nn = S(function (e) {
              return null != e.aborters[t4];
            }),
            nr = (0, w.useRef)(null),
            na = (0, w.useMemo)(
              function () {
                return !nn && !ne && nt;
              },
              [ne, nt, nn]
            ),
            ni = (0, D.tN)(function (e) {
              return e.activeModals.has(D.B.AccountPortal);
            }),
            no = (0, oe.Z)(),
            ns = (0, N.XK)(eu),
            nl = (0, D.tN)(function (e) {
              return e.sharingModalThreadId === ns;
            });
          (U = (O = {
            clientThreadId: eu,
            currentModelId: tv,
            isStaticSharedThread: ex,
          }).clientThreadId),
            (Q = O.currentModelId),
            (H = O.isStaticSharedThread),
            (t = (0, nP.i0)(Q, nP.dN.CODE_INTERPRETER)),
            (n = (0, ep.kP)().session),
            (r = N.tQ.getServerThreadId(U)),
            (0, ej.a)({
              queryKey: ["interpreterState", r],
              queryFn: on,
              enabled: !!(t && r && !H && (null == n ? void 0 : n.accessToken)),
              cacheTime: 0,
            });
          var nu = (0, N.r7)(eu);
          return (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsxs)(i_(), {
                children: [
                  null != tk && (0, y.jsx)("title", { children: tk }),
                  ex &&
                    (0, y.jsxs)(y.Fragment, {
                      children: [
                        (0, y.jsx)("meta", {
                          property: "og:site_name",
                          content: "ChatGPT",
                        }),
                        (0, y.jsx)(
                          "meta",
                          { name: "robots", content: "noindex,nofollow" },
                          "robots"
                        ),
                        (0, y.jsx)(
                          "meta",
                          {
                            property: "og:title",
                            content: null != tk ? tk : "Shared Chat on ChatGPT",
                          },
                          "og:title"
                        ),
                        (0, y.jsx)(
                          "meta",
                          {
                            property: "og:image",
                            content: "/images/chatgpt-share-og.png",
                          },
                          "og:image"
                        ),
                      ],
                    }),
                ],
              }),
              ew.has(ei.i) ? (0, y.jsx)(iG, {}) : null,
              !tl &&
                (0, y.jsx)(
                  eS.Z,
                  {
                    isOpen: !0,
                    onClose: t8,
                    icon: iw.Z,
                    title: ek.formatMessage(ou.doNotShareSensitive),
                    primaryButton: (0, y.jsx)(eZ.ZP.Button, {
                      onClick: t8,
                      title: ek.formatMessage(ou.acknowledge),
                    }),
                    type: "danger",
                  },
                  "OnboardingModal"
                ),
              ti &&
                tn &&
                (0, y.jsx)(
                  eS.Z,
                  {
                    isOpen: !0,
                    onClose: t9,
                    icon: C.U0j,
                    title: ek.formatMessage(ou.contentPolicyViolation),
                    primaryButton: (0, y.jsx)(eZ.ZP.Button, {
                      onClick: t9,
                      title: ek.formatMessage(ou.acknowledge),
                    }),
                    type: "danger",
                  },
                  "RestrictedTerms"
                ),
              nl &&
                null != ns &&
                (0, y.jsx)(aQ, {
                  serverThreadId: ns,
                  activeRequests: eh,
                  currentThreadModel: el.lastModelUsed,
                }),
              null != eX &&
                (0, y.jsx)(iO, {
                  ratingModalNodeId: e2,
                  ratingModalOpen: eX,
                  onCloseRatingModal: function () {
                    return e0(void 0);
                  },
                  handleSubmitFeedback: t$,
                  onHandleChangeFeedbackComparisonRating: tW,
                  currentModelId: tv,
                  feedbackTextareaRef: e7,
                  clientThreadId: eu,
                  activeRequests: eh,
                  onChangeItemInView: tz,
                  onRequestMoreCompletions: tO,
                  onUpdateNode: tQ,
                  onChangeRating: tH,
                  onDeleteNode: tY,
                  onRequestCompletion: tR,
                }),
              eB &&
                (0, y.jsx)(iO, {
                  ratingModalNodeId: eG,
                  ratingModalOpen: "report",
                  onCloseRatingModal: function () {
                    return eU(!1);
                  },
                  handleSubmitFeedback: tG,
                  onHandleChangeFeedbackComparisonRating: function () {},
                  currentModelId: tv,
                  feedbackTextareaRef: e7,
                  clientThreadId: eu,
                  activeRequests: eh,
                  onChangeItemInView: tz,
                  onRequestMoreCompletions: tO,
                  onUpdateNode: tQ,
                  onChangeRating: tH,
                  onDeleteNode: tY,
                  onRequestCompletion: tR,
                }),
              eQ &&
                (0, y.jsx)(eS.Z, {
                  onClose: function () {
                    return eH(!1);
                  },
                  isOpen: !0,
                  icon: iw.Z,
                  title: ek.formatMessage(ou.reportModalThankYouTitle),
                  description: ek.formatMessage(
                    ou.reportModalThankYouDescription
                  ),
                  primaryButton: (0, y.jsx)(eZ.ZP.Button, {
                    onClick: function () {
                      return eH(!1);
                    },
                    title: ek.formatMessage(ou.reportModalThankYouDismiss),
                  }),
                  type: "danger",
                }),
              eJ &&
                (0, y.jsx)(iO, {
                  ratingModalNodeId: eE,
                  ratingModalOpen: "moderate",
                  onCloseRatingModal: function () {
                    return eY(!1);
                  },
                  handleSubmitFeedback: X(),
                  onHandleChangeFeedbackComparisonRating: function () {},
                  currentModelId: tv,
                  feedbackTextareaRef: e7,
                  clientThreadId: eu,
                  activeRequests: eh,
                  onChangeItemInView: tz,
                  onRequestMoreCompletions: tO,
                  onUpdateNode: tQ,
                  onChangeRating: tH,
                  onDeleteNode: tY,
                  onRequestCompletion: tR,
                }),
              (0, y.jsx)(i4, { isStaticSharedThread: ex }),
              (0, y.jsx)(om, {
                children:
                  !eD &&
                  (t7 || t6) &&
                  (($ = (0, y.jsx)(
                    aZ,
                    {
                      onChangeItemInView: tz,
                      onRequestMoreCompletions: tO,
                      onUpdateNode: tQ,
                      onChangeRating: tH,
                      onDeleteNode: tY,
                      onRequestCompletion: tR,
                      onHandleChangeVariantFeedbackInlineComparisonRating: tV,
                      isNewThread: t7,
                      clientThreadId: eu,
                      isStaticSharedThread: ex,
                      activeRequests: eh,
                      currentThreadModel: el.lastModelUsed,
                      initiallyHighlightedMessageId: eb,
                      inlineEmbeddedDisplay: !1,
                      promptTextareaRef: nr,
                    },
                    eu
                  )),
                  ex
                    ? (0, y.jsx)("div", {
                        className: "h-full overflow-auto dark:bg-gray-800",
                        children: $,
                      })
                    : (0, y.jsx)(oo, { children: $ })),
              }),
              (0, y.jsxs)(of, {
                children: [
                  ew.has("model_preview") &&
                    t7 &&
                    (null == tb ? void 0 : tb.tags.includes(tD.S.GPT_4)) &&
                    (0, y.jsx)("div", {
                      className:
                        "stretch mx-2 mb-2 text-center text-xs text-gray-600 dark:text-gray-200 md:mx-4 md:text-sm lg:mx-auto lg:max-w-3xl",
                      children: no.textareaDisclaimer,
                    }),
                  !tq &&
                    !ex &&
                    (0, y.jsx)(i$.Z, {
                      children: (0, y.jsx)(
                        nL,
                        {
                          clientThreadId: eu,
                          onRequestMoreCompletions: tJ,
                          onCreateNewCompletion: tE,
                          onAbortCompletion: t5,
                          onContinueGenerating: tU,
                          currentModelId: tv,
                          isCompletionInProgress: eh.has(t4),
                          className: (0, z.Z)(
                            "stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto",
                            te
                              ? "mx-auto max-w-[44rem] px-2 sm:px-0"
                              : "lg:max-w-2xl xl:max-w-3xl"
                          ),
                          shouldRetry: tB,
                          canContinue: na,
                          suggestions:
                            void 0 !== tC &&
                            (null == tC ? void 0 : tC.messageId) ===
                              (null ===
                                (K = N.tQ.getTree(eu).getLastValidNode(eE)) ||
                              void 0 === K
                                ? void 0
                                : null === (et = K.message) || void 0 === et
                                ? void 0
                                : et.id)
                              ? null == tC
                                ? void 0
                                : tC.suggestions
                              : void 0,
                          disabled: !th.size,
                          canPause: nn,
                          isInteractableSharedThread: nu,
                          ref: nr,
                        },
                        eu
                      ),
                    }),
                  ex &&
                    (0, y.jsx)(y.Fragment, {
                      children: (0, y.jsxs)("div", {
                        className:
                          "relative flex h-full w-full flex-1 items-center justify-center gap-2",
                        children: [
                          (0, y.jsx)(es.z, {
                            as: "link",
                            to: ey,
                            children: ek.formatMessage(
                              ou.sharedConversationContinueConversation
                            ),
                          }),
                          eP &&
                            (0, y.jsx)(es.z, {
                              onClick: function () {
                                eY(!0);
                              },
                              children: ek.formatMessage(
                                ou.sharedConversationModerateConversation
                              ),
                            }),
                        ],
                      }),
                    }),
                  (0, y.jsx)("div", {
                    className:
                      "px-3 pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-4 md:pb-6 md:pt-3",
                    children: ex
                      ? (0, y.jsx)(oc, {
                          onClickReportSharedConversation: function () {
                            eW(eE), eU(!0);
                          },
                        })
                      : e8
                      ? (0, y.jsx)("span", {
                          children: (0, y.jsx)(
                            _.Z,
                            (0, em._)(
                              (0, v._)({}, ou.mayProduceInaccurateInformation),
                              {
                                values: {
                                  link: function (e) {
                                    return (0, y.jsx)("a", {
                                      href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
                                      target: "_blank",
                                      rel: "noreferrer",
                                      className: "underline",
                                      children: e,
                                    });
                                  },
                                },
                              }
                            )
                          ),
                        })
                      : (0, y.jsx)("span", {
                          children: (0, y.jsx)(
                            _.Z,
                            (0, em._)((0, v._)({}, ou.freeResearchPreview), {
                              values: {
                                link: function (e) {
                                  return (0, y.jsx)("a", {
                                    href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "underline",
                                    children: e,
                                  });
                                },
                              },
                            })
                          ),
                        }),
                  }),
                ],
              }),
              e9 && (0, y.jsx)(i1.Z, { isOpen: t0, onClose: t2 }),
              void 0 !== e8 &&
                e8 &&
                (0, y.jsx)(i0, { isOpen: ni, onClose: tK }),
              tm &&
                (0, y.jsx)(
                  eS.Z,
                  {
                    onClose: X(),
                    isOpen: !0,
                    icon: iw.Z,
                    title: ek.formatMessage(ou.somethingWentWrong),
                    description: ek.formatMessage(ou.tryAgainLater),
                    primaryButton: (0, y.jsx)(eZ.ZP.Button, {
                      onClick: function () {
                        ev(), tf(!1);
                      },
                      title: ek.formatMessage(ou.resetThread),
                    }),
                    type: "danger",
                  },
                  "UnrecoverableErrorModal"
                ),
            ],
          });
        },
        om = et.Z.div(os()),
        of = et.Z.div(ol());
      function oh(e) {
        var t,
          n = e.clientThreadId,
          r = null !== (t = N.tQ.getTitle(n)) && void 0 !== t ? t : "New chat",
          a = F(n, r, !0),
          i = a.resolvedTitle,
          o = a.isTypingEffect,
          s = (0, w.useContext)(A.QL),
          l = s.historyDisabled,
          u = s.toggleHistoryDisabled;
        return (0, y.jsx)(y.Fragment, {
          children: l
            ? (0, y.jsxs)("button", {
                className:
                  "flex cursor-pointer flex-row place-items-center items-center justify-center gap-3",
                onClick: function () {
                  return u();
                },
                children: [
                  (0, y.jsx)(el.ZP, { icon: C.$IY }),
                  (0, y.jsx)(_.Z, (0, v._)({}, op.enableChatHistory)),
                ],
              })
            : o && null != i
            ? (0, y.jsx)(q, { text: i })
            : null != i
            ? i
            : (0, y.jsx)(_.Z, (0, v._)({}, op.newChat)),
        });
      }
      var og =
          ((u = function (e) {
            var t = e.clientThreadId,
              n = e.setClientThreadId,
              r = e.isStaticSharedThread,
              a = (0, x._)(e, [
                "clientThreadId",
                "setClientThreadId",
                "isStaticSharedThread",
              ]),
              i = (0, N.UL)(t),
              o = a.setActiveRequests,
              s = (0, N.XK)(t),
              l = (0, k.useRouter)(),
              u = (0, T.hz)(),
              c = (0, w.useContext)(A.QL).historyDisabled,
              d = (0, tD.Xy)(i.lastModelUsed, t),
              m = (0, j.NL)();
            (0, w.useEffect)(
              function () {
                return (
                  N.tQ.retainThread(t),
                  function () {
                    setTimeout(function () {
                      m.invalidateQueries(["conversation", t]);
                    }, 0),
                      N.tQ.releaseThread(t);
                  }
                );
              },
              [t, m]
            ),
              (0, w.useEffect)(
                function () {
                  D.vm.closeSharingModal();
                },
                [t, s]
              );
            var f = (0, w.useCallback)(
                function () {
                  n((0, N.OX)()),
                    d.tags.includes(tD.S.GPT_4)
                      ? l.replace("/", void 0, { shallow: !0 })
                      : l.replace("/?model=".concat(d.id));
                },
                [n, d.tags, d.id, l]
              ),
              h = (0, D.tN)(function (e) {
                return e.activeSidebar;
              }),
              g = (0, E.w$)();
            return (
              (0, w.useEffect)(
                function () {
                  return function () {
                    R.abortAllAndReset(), o(new Set());
                  };
                },
                [o, t]
              ),
              (0, y.jsxs)(ik.Z, {
                onResetThread: f,
                showNavigation: !r,
                renderTitle: (0, y.jsx)(oh, { clientThreadId: t }),
                children: [
                  (0, y.jsxs)(ik.Z.NavigationPrimaryActionDesktop, {
                    onClick: f,
                    children: [
                      (0, y.jsx)(el.ZP, { icon: c ? C.Bw1 : C.OvN }),
                      (0, y.jsx)(
                        _.Z,
                        (0, v._)({}, c ? op.clearChat : op.newChat)
                      ),
                    ],
                  }),
                  (0, y.jsx)(ik.Z.NavigationPrimaryActionMobile, {
                    onClick: f,
                    children: (0, y.jsx)(el.ZP, {
                      icon: c ? C.Bw1 : C.OvN,
                      size: "medium",
                    }),
                  }),
                  (0, y.jsx)(ik.Z.NavigationContent, {
                    children: (0, y.jsx)(iu, {
                      activeId: c ? void 0 : s,
                      onNewThread: f,
                      setActiveRequests: o,
                    }),
                  }),
                  (0, y.jsx)(
                    od,
                    (0, v._)(
                      {
                        initialThreadData: i,
                        clientThreadId: t,
                        handleResetThread: f,
                        isStaticSharedThread: r,
                      },
                      a
                    ),
                    t
                  ),
                  (0, y.jsxs)(ik.Z.Sidebars, {
                    children: [
                      u.has("debug") &&
                        "debug" === h &&
                        (0, y.jsx)(ay.fv, {
                          clientThreadId: t,
                          slideOver: !g,
                          onClose: function () {
                            return D.vm.toggleActiveSidebar("debug");
                          },
                          isOpen: !0,
                        }),
                      u.has("tools3_dev") &&
                        (0, y.jsx)(ij.ZP, { slideOver: !g }),
                    ],
                  }),
                ],
              })
            );
          }),
          function (e) {
            var t = e.clientThreadId,
              n = e.isStaticSharedThread;
            (0, N.ax)(t, n);
            var r = (0, N.UL)(t),
              a = (0, b._)((0, w.useState)(new Set()), 2),
              i = a[0],
              o = a[1];
            return (
              (0, w.useEffect)(
                function () {
                  D.vm.setActiveSidebar(!1), R.reset(), o(new Set());
                },
                [r.threadId]
              ),
              (0, y.jsx)(
                u,
                (0, v._)({}, e, { activeRequests: i, setActiveRequests: o })
              )
            );
          }),
        op = (0, M.vU)({
          enableChatHistory: {
            id: "navigation.enableChatHistory",
            defaultMessage: "Enable chat history",
            description: "Enable chat history button label",
          },
          newChat: {
            id: "navigation.newChat",
            defaultMessage: "New chat",
            description: "New chat button label",
          },
          clearChat: {
            id: "navigation.clearChat",
            defaultMessage: "Clear chat",
            description: "Clear chat button label",
          },
        });
    },
    5759: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return h;
        },
        Z: function () {
          return c;
        },
      });
      var r = n(4337),
        a = n(35250),
        i = n(34303);
      function o() {
        var e = (0, r._)([
          "flex p-4 bg-gray-50 dark:bg-white/5 rounded-md items-center gap-4 min-h-[71px]",
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = (0, r._)(["w-10 text-2xl text-center"]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        var e = (0, r._)(["flex-1 leading-5"]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = (0, r._)(["flex gap-4 flex-col text-sm"]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function c(e) {
        var t = e.icon,
          n = e.children;
        return (0, a.jsxs)(d, {
          children: [
            (0, a.jsx)(m, { children: t }),
            (0, a.jsx)(f, { children: n }),
          ],
        });
      }
      var d = i.Z.div(o()),
        m = i.Z.div(s()),
        f = i.Z.div(l()),
        h = i.Z.div(u());
    },
    48432: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return j;
        },
      });
      var r = n(21722),
        a = n(22830),
        i = n(39889),
        o = n(35250),
        s = n(16578),
        l = n.n(s),
        u = n(68555),
        c = n(70079),
        d = n(1454),
        m = n(82841),
        f = n(36218),
        h = n(24274),
        g = n(64135),
        p = n(97688),
        v = n(44925),
        x = n(74853),
        b = n(99652),
        y = n(1220);
      function j(e) {
        var t = e.isOpen,
          n = e.onClose,
          s = (0, g.hz)(),
          j = (0, m.WS)(),
          k = (0, a._)((0, c.useState)(!1), 2),
          w = k[0],
          C = k[1],
          _ = (0, u.useRouter)(),
          M = (0, c.useCallback)(
            function () {
              j(f.s6.closeAccountPaymentModal), n();
            },
            [n, j]
          ),
          T = (0, c.useCallback)(
            (0, r._)(function () {
              var e;
              return (0, i.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    C(!0), j(f.s6.clickAccountPaymentCheckout), (t.label = 1);
                  case 1:
                    return (
                      t.trys.push([1, 3, 4, 5]), [4, h.ZP.getCheckoutLink()]
                    );
                  case 2:
                    return (e = t.sent()), _.push(e.url), [3, 5];
                  case 3:
                    return (
                      t.sent(),
                      p.m.warning(
                        "The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    );
                  case 4:
                    return C(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [_, j, C]
          ),
          N = (0, c.useCallback)(
            (0, r._)(function () {
              var e;
              return (0, i.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    C(!0), j(f.s6.clickAccountCustomerPortal), (t.label = 1);
                  case 1:
                    return (
                      t.trys.push([1, 3, 4, 5]),
                      [4, h.ZP.fetchCustomerPortalUrl()]
                    );
                  case 2:
                    return (e = t.sent()), _.push(e.url), [3, 5];
                  case 3:
                    return (
                      t.sent(),
                      p.m.warning(
                        "The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    );
                  case 4:
                    return C(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [_, j, C]
          ),
          I = (0, c.useCallback)(
            function () {
              j(f.s6.clickAccountPaymentGetHelp);
            },
            [j]
          ),
          Z = (0, g.YD)(),
          S = s.has("disable_upgrade_ui");
        return (0, o.jsxs)(x.x, {
          isOpen: t,
          onClose: n,
          children: [
            (0, o.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
              children: [
                (0, o.jsx)("span", {
                  className: "text-base font-semibold sm:text-base",
                  children: "Your plan",
                }),
                (0, o.jsx)("button", {
                  className:
                    "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                  onClick: M,
                  children: (0, o.jsx)(d.q5L, { className: "h-6 w-6" }),
                }),
              ],
            }),
            (0, o.jsxs)("div", {
              className: "grid sm:grid-cols-2",
              children: [
                (0, o.jsx)("div", {
                  className:
                    "relative order-2 col-span-1 border-r-0 border-t dark:border-gray-700 sm:order-1 sm:border-r sm:border-t-0",
                  children: (0, o.jsx)(b.Oi, {
                    rowElements: [
                      (0, o.jsx)(
                        b.Cu,
                        { text: "Free plan" },
                        "row-free-plan-name"
                      ),
                      (0, o.jsx)(
                        b.hi,
                        {
                          variant: "disabled",
                          disabled: !0,
                          text: y.S.free.callToAction.active,
                        },
                        "row-free-plan-button"
                      ),
                      (0, o.jsx)(
                        b.G,
                        { variant: "secondary", text: y.S.free.demandAccess },
                        "row-free-plan-demand"
                      ),
                      (0, o.jsx)(
                        b.G,
                        { variant: "secondary", text: y.S.free.responseSpeed },
                        "row-free-plan-speed"
                      ),
                      (0, o.jsx)(
                        b.G,
                        {
                          className: "sm:pb-2",
                          variant: "secondary",
                          text: y.S.free.modelFeatures,
                        },
                        "row-free-plan-updates"
                      ),
                    ],
                  }),
                }),
                (0, o.jsx)("div", {
                  className: "relative order-1 col-span-1 sm:order-2",
                  children: (0, o.jsx)(b.Oi, {
                    rowElements: [
                      (0, o.jsx)(
                        b.Cu,
                        {
                          text: y.S.plus.name,
                          children: (0, o.jsx)("span", {
                            className: "font-semibold text-gray-500",
                            children: y.S.plus.costInDollars,
                          }),
                        },
                        "row-plus-plan-title"
                      ),
                      (0, o.jsx)(
                        b.hi,
                        {
                          variant: "primary",
                          disabledText: S
                            ? "Due to high demand, we've temporarily paused upgrades."
                            : "",
                          disabled: w,
                          isLoading: w,
                          onClick: T,
                          text: y.S.plus.callToAction.inactivePayment,
                        },
                        "row-plus-plan-button"
                      ),
                      (0, o.jsx)(
                        b.G,
                        { variant: "primary", text: y.S.plus.demandAccess },
                        "row-plus-plan-demand"
                      ),
                      (0, o.jsx)(
                        b.G,
                        { variant: "primary", text: y.S.plus.responseSpeed },
                        "row-plus-plan-speed"
                      ),
                      (0, o.jsx)(
                        b.G,
                        {
                          className: "sm:pb-2",
                          variant: "primary",
                          text: y.S.plus.modelFeatures,
                        },
                        "row-plus-plan-updates"
                      ),
                      Z &&
                        (0, o.jsx)(
                          b.nR,
                          {
                            className: "sm:pb-1",
                            isLoading: w,
                            text: y.S.manageSubscriptionWeb.callToAction,
                            onClick: N,
                          },
                          "row-plus-plan-manage"
                        ),
                      (0, o.jsx)(
                        l(),
                        {
                          target: "_blank",
                          href: v.ti,
                          passHref: !0,
                          children: (0, o.jsx)(
                            b.nR,
                            {
                              className: "sm:pb-1",
                              isLoading: !1,
                              text: y.S.getHelp.callToAction,
                              onClick: I,
                            },
                            "row-plus-plan-help"
                          ),
                        },
                        "row-plus-plan-help-link"
                      ),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    74853: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return l;
        },
      });
      var r = n(4337),
        a = n(35250),
        i = n(34303),
        o = n(48727);
      function s() {
        var e = (0, r._)([
          "flex grow justify-center bg-white dark:bg-gray-900 rounded-md flex-col items-start overflow-hidden border shadow-md dark:border-gray-700",
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      var l = function (e) {
          var t = e.children,
            n = e.isOpen,
            r = e.onClose;
          return (0, a.jsx)(o.Z, {
            size: "fullscreen",
            isOpen: n,
            onClose: r,
            type: "success",
            className:
              "!bg-transparent !shadow-none md:w-[672px] lg:w-[896px] xl:w-[1024px]",
            children: (0, a.jsx)("div", {
              className: "flex h-full flex-col items-center justify-start",
              children: (0, a.jsx)("div", {
                className: "relative",
                children: (0, a.jsx)(u, { children: t }),
              }),
            }),
          });
        },
        u = i.Z.div(s());
    },
    99652: function (e, t, n) {
      "use strict";
      n.d(t, {
        Cu: function () {
          return p;
        },
        G: function () {
          return b;
        },
        Oi: function () {
          return g;
        },
        hi: function () {
          return x;
        },
        nR: function () {
          return y;
        },
      });
      var r = n(4337),
        a = n(35250),
        i = n(19841),
        o = n(70079),
        s = n(1454),
        l = n(34303),
        u = n(66958),
        c = n(38317),
        d = n(57924);
      function m() {
        var e = (0, r._)([
          "p-4 flex flex-col gap-3 bg-white z-20 relative dark:bg-gray-900",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = (0, r._)([
          "gap-2 flex flex-row justify-start items-center text-sm",
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = (0, r._)([
          "text-xl font-semibold justify-between items-center flex",
        ]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      var g = function (e) {
          var t = e.rowElements;
          return (0, a.jsx)(j, {
            children: t.map(function (e) {
              return e;
            }),
          });
        },
        p = function (e) {
          var t = e.className,
            n = e.text,
            r = e.children;
          return (0, a.jsxs)(w, {
            className: t,
            children: [(0, a.jsx)("span", { children: n }), r],
          });
        },
        v = {
          "primary-disabled":
            "border-none bg-gray-200 py-3 font-semibold hover:bg-gray-200",
          primary: "border-none py-3 font-semibold",
          disabled:
            "dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100",
        },
        x = (0, o.forwardRef)(function (e, t) {
          var n = e.isLoading,
            r = void 0 !== n && n,
            o = e.disabled,
            l = e.onClick,
            m = e.variant,
            f = void 0 === m ? "primary" : m,
            h = e.text,
            g = e.disabledText;
          return g
            ? (0, a.jsx)("div", {
                className: "relative",
                children: (0, a.jsx)(d.u, {
                  side: "bottom",
                  sideOffset: 20,
                  label: g,
                  usePortal: !1,
                  children: (0, a.jsxs)(u.z, {
                    ref: t,
                    as: "button",
                    color: "disabled",
                    className: (0, i.Z)("w-full", v[f]),
                    children: [
                      h,
                      r &&
                        (0, a.jsx)(c.ZP, {
                          className: "animate-spin",
                          icon: s.dAq,
                        }),
                    ],
                  }),
                }),
              })
            : (0, a.jsxs)(u.z, {
                disabled: void 0 !== o && o,
                onClick: l,
                ref: t,
                as: "button",
                className: (0, i.Z)(v[f]),
                children: [
                  (0, a.jsx)("span", {
                    className: (0, i.Z)("inline-block", {
                      "text-gray-700": "primary-disabled" === f,
                      "text-white": "primary" === f,
                    }),
                    children: h,
                  }),
                  r &&
                    (0, a.jsx)(c.ZP, {
                      className: "animate-spin",
                      icon: s.dAq,
                    }),
                ],
              });
        });
      x.displayName = "PricingPlanButton";
      var b = function (e) {
          var t = e.variant,
            n = void 0 === t ? "primary" : t,
            r = e.className,
            o = e.text;
          return (0, a.jsxs)(k, {
            className: r,
            children: [
              (0, a.jsx)(c.ZP, {
                icon: s._rq,
                className: (0, i.Z)("h-5 w-5", {
                  "text-green-700": "primary" == n,
                  "text-gray-400": "secondary" == n,
                }),
              }),
              (0, a.jsx)("span", { children: o }),
            ],
          });
        },
        y = function (e) {
          var t = e.className,
            n = e.text,
            r = e.isLoading,
            i = e.onClick;
          return (0, a.jsx)(k, {
            className: t,
            children: (0, a.jsxs)("button", {
              onClick: i,
              className: "flex flex-row items-center space-x-1 underline",
              children: [
                (0, a.jsx)("span", { children: n }),
                r &&
                  (0, a.jsx)(c.ZP, { className: "animate-spin", icon: s.dAq }),
              ],
            }),
          });
        },
        j = l.Z.div(m()),
        k = l.Z.div(f()),
        w = l.Z.div(h());
    },
    1220: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return r;
        },
      });
      var r = {
        free: {
          name: "Free plan",
          callToAction: {
            active: "Your current plan",
            inactive: "Your current plan",
          },
          costInDollars: "",
          demandAccess: "Available when demand is low",
          responseSpeed: "Standard response speed",
          modelFeatures: "Regular model updates",
        },
        plus: {
          name: "ChatGPT Plus",
          callToAction: {
            active: "Your current plan",
            inactive: "I'm interested",
            inactivePayment: "Upgrade plan",
          },
          costInDollars: "USD $20/mo",
          demandAccess: "Available even when demand is high",
          responseSpeed: "Faster response speed",
          modelFeatures: "Priority access to new features",
        },
        manageSubscriptionWeb: { callToAction: "Manage my subscription" },
        manageSubscriptionIos: {
          callToAction: "Manage my subscription in the ChatGPT iOS app",
        },
        getHelp: { callToAction: "I need help with a billing issue" },
        business: { callToAction: "Buy for my team" },
      };
    },
    19051: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(70079);
      function a() {
        var e = (0, r.useRef)([]),
          t = (0, r.useRef)(function (t, n) {
            var r = setTimeout(t, n);
            return e.current.push(r), r;
          });
        return (
          (0, r.useEffect)(function () {
            var t = e.current;
            return function () {
              t.forEach(function (e) {
                clearTimeout(e);
              });
            };
          }, []),
          t.current
        );
      }
    },
    41402: function () {},
  },
]);
