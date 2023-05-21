(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[734], {
		69403: function(e, n, t) {
			"use strict";
			var r, a, i, o, s, l, u, c, d;
			t.d(n, {
					Jq: function() {
						return s
					},
					Os: function() {
						return i
					},
					uU: function() {
						return o
					}
				}), (l = r || (r = {})).Default = "default", l.Dark = "dark", (a || (a = {})).Retrieval =
				"retrieval", (u = i || (i = {})).Next = "next", u.Variant = "variant", u.Continue =
				"continue", (c = o || (o = {})).Unknown = "unknown", c.User = "user", c.Assistant =
				"assistant", c.System = "system", c.Critic = "critic", c.Tool = "tool", (d = s || (s = {}))
				.Root = "root", d.System = "system", d.Prompt = "prompt", d.Completion = "completion"
		},
		75515: function(e, n, t) {
			"use strict";
			t.d(n, {
				Z: function() {
					return i
				}
			});
			var r = t(35250),
				a = t(19841);

			function i(e) {
				var n = e.url,
					t = e.name,
					i = e.size,
					o = e.large,
					s = e.className;
				return (0, r.jsxs)("div", {
					className: (0, a.Z)("relative", s),
					style: {
						width: i,
						height: i
					},
					children: [(0, r.jsx)("img", {
						src: n,
						alt: "".concat(t, " logo"),
						className: (0, a.Z)("h-full w-full bg-white", o ?
							"rounded-[5px]" : "rounded-sm")
					}), (0, r.jsx)("div", {
						className: (0, a.Z)(
							"absolute inset-0 ring-1 ring-inset ring-black/10", o ?
							"rounded-[5px]" : "rounded-sm")
					})]
				})
			}
		},
		78042: function(e, n, t) {
			"use strict";
			t.d(n, {
				Z: function() {
					return es
				}
			});
			var r = t(22830),
				a = t(35250),
				i = t(61888),
				o = t(70079),
				s = t(39324),
				l = t(71209),
				u = t(3001),
				c = t(75908),
				d = t(35290),
				f = t(82841),
				h = t(36218),
				g = t(32787),
				m = t(85023),
				p = t(64135),
				v = t(88038),
				x = t(55041),
				b = (0, u.vU)({
					welcomeBack: {
						id: "existingUserAgeConfirmationModal.welcomeBack",
						defaultMessage: "Welcome back, Italy!",
						description: "Title for the age confirmation modal for Italian users"
					},
					ageRequirementsButton: {
						id: "existingUserAgeConfirmationModal.ageRequirementsButton",
						defaultMessage: "I meet OpenAI's age requirements",
						description: "Primary button to confirm the user meets the age requirements"
					},
					logoutButton: {
						id: "existingUserAgeConfirmationModal.logoutButton",
						defaultMessage: "Log out",
						description: "Secondary button to log out of the platform"
					},
					announcementParagraph1: {
						id: "existingUserAgeConfirmationModal.announcementParagraph1",
						defaultMessage: "We’re pleased to resume offering ChatGPT in Italy. To continue on ChatGPT, please confirm that you are 18+ or are 13+ and have consent from your parent or guardian to use ChatGPT.",
						description: "First paragraph of the announcement, explaining the age requirements"
					},
					privacyPolicyLink: {
						id: "existingUserAgeConfirmationModal.privacyPolicyLink",
						defaultMessage: "Privacy policy",
						description: "Link to the privacy policy"
					},
					helpCenterArticleLink: {
						id: "existingUserAgeConfirmationModal.helpCenterArticleLink",
						defaultMessage: "this help center article",
						description: "Link to the help center article about ChatGPT development"
					},
					announcementParagraph2: {
						id: "existingUserAgeConfirmationModal.announcementParagraph2",
						defaultMessage: "For information about how we collect and use personal data, please see our {privacyPolicyLink}. For information about how we develop and train ChatGPT, please see {helpCenterArticleLink}.",
						description: "Second paragraph of the announcement, providing links to more information"
					}
				}),
				y = "2023-04-25",
				j = "".concat("oai/apps/hasSeenAgeConfirmationModal", "/").concat(y);

			function w(e) {
				var n = e.onClose,
					t = (0, c.Z)(),
					r = (0, o.useCallback)(function() {
						m.m.setItem(j, !0), n()
					}, [n]),
					s = (0, f.WS)();
				return (0, o.useEffect)(function() {
					s && s(h.s6.ageConfirmationModal, {
						content: y
					})
				}, []), (0, a.jsx)(x.ZP, {
					isOpen: !0,
					onModalClose: i.noop,
					type: "success",
					title: t.formatMessage(b.welcomeBack),
					primaryButton: (0, a.jsx)(x.mH, {
						title: t.formatMessage(b.ageRequirementsButton),
						color: "primary",
						onClick: r
					}),
					secondaryButton: (0, a.jsx)(x.mH, {
						title: t.formatMessage(b.logoutButton),
						color: "light",
						onClick: function() {
							s(h.s6.clickLogOut, {
								eventSource: "mouse"
							}), (0, g.w7)()
						},
						className: "border-gray-800 hover:border-gray-700"
					}),
					children: (0, a.jsx)(C, {})
				})
			}
			var C = function() {
					var e = (0, c.Z)();
					return (0, a.jsx)("div", {
						className: "mb-6 mt-4 sm:mt-6",
						children: (0, a.jsxs)("div", {
							className: "prose prose-invert text-base text-gray-500",
							children: [(0, a.jsx)("p", {
								children: (0, a.jsx)(d.Z, (0, s._)({}, b
									.announcementParagraph1))
							}), (0, a.jsx)("p", {
								children: (0, a.jsx)(d.Z, (0, l._)((0, s._)({},
									b.announcementParagraph2), {
									values: {
										privacyPolicyLink: (0, a
											.jsx)("a", {
											href: "https://openai.com/policies/privacy-policy",
											target: "_blank",
											className: "text-gray-500 underline",
											rel: "noreferrer",
											children: e
												.formatMessage(
													b
													.privacyPolicyLink
													)
										}),
										helpCenterArticleLink: (0, a
											.jsx)("a", {
											href: "https://help.openai.com/en/articles/7842364-how-chatgpt-and-our-language-models-are-developed",
											target: "_blank",
											className: "text-gray-500 underline",
											rel: "noreferrer",
											children: e
												.formatMessage(
													b
													.helpCenterArticleLink
													)
										})
									}
								}))
							})]
						})
					})
				},
				k = t(19208),
				_ = t.n(k),
				M = t(68555),
				T = t(4337),
				N = t(34303),
				P = t(53086),
				S = t(5759),
				I = t(66958);

			function Z() {
				var e = (0, T._)(["flex gap-4 mt-6"]);
				return Z = function() {
					return e
				}, e
			}

			function D(e) {
				var n = e.onBack,
					t = e.onNext,
					r = e.onSubmit;
				return (0, a.jsxs)(F, {
					children: [n && (0, a.jsx)(I.z, {
						as: "button",
						color: "neutral",
						onClick: n,
						children: "Back"
					}), t && (0, a.jsx)(I.z, {
						as: "button",
						onClick: t,
						color: "neutral",
						className: "ml-auto",
						children: "Next"
					}), r && (0, a.jsx)(I.z, {
						as: "button",
						onClick: r,
						color: "primary",
						className: "ml-auto",
						children: "Done"
					})]
				})
			}
			var F = N.Z.div(Z());

			function E() {
				var e = (0, T._)(["prose dark:prose-invert"]);
				return E = function() {
					return e
				}, e
			}

			function R() {
				var e = (0, T._)(["!mt-4 font-normal !mb-2"]);
				return R = function() {
					return e
				}, e
			}

			function L() {
				var e = (0, T._)(["mb-4"]);
				return L = function() {
					return e
				}, e
			}

			function A() {
				var e = (0, T._)(["w-full h-[1px] bg-gray-300 opacity-20"]);
				return A = function() {
					return e
				}, e
			}
			var B = (0, u.vU)({
					pageTitle: {
						id: "onboarding.pageTitle",
						defaultMessage: "Welcome to {name}",
						description: "Page title displayed at the beginning of the onboarding process"
					},
					keepInMind: {
						id: "onboarding.keepInMind",
						defaultMessage: "Here are a few things to keep in mind before we get started:",
						description: "Introduction text for the onboarding process"
					},
					page0Subtitle: {
						id: "onboarding.page0Subtitle",
						defaultMessage: "This is a free research preview.",
						description: "Subtitle for Page 0"
					},
					page0Disclaimer1: {
						id: "onboarding.page0Disclaimer1",
						defaultMessage: "Our goal is to get external feedback in order to improve our systems and make them safer.",
						description: "Disclaimer 1 for Page 0"
					},
					page0Disclaimer2: {
						id: "onboarding.page0Disclaimer2",
						defaultMessage: "While we have safeguards in place, the system may occasionally generate incorrect or misleading information and produce offensive or biased content. It is not intended to give advice.",
						description: "Disclaimer 2 for Page 0"
					},
					page1Subtitle: {
						id: "onboarding.page1Subtitle",
						defaultMessage: "How we collect data",
						description: "Subtitle for Page 1"
					},
					page1Disclaimer1: {
						id: "onboarding.page1Disclaimer1",
						defaultMessage: "Conversations may be reviewed by our AI trainers to improve our systems.",
						description: "Disclaimer 1 for Page 1"
					},
					page1Disclaimer2: {
						id: "onboarding.page1Disclaimer2",
						defaultMessage: "Please don't share any sensitive information in your conversations.",
						description: "Disclaimer 2 for Page 1"
					},
					page2Subtitle: {
						id: "onboarding.page2Subtitle",
						defaultMessage: "We'd love your feedback!",
						description: "Subtitle for Page 2"
					},
					page2Disclaimer1: {
						id: "onboarding.page2Disclaimer1",
						defaultMessage: "This system is optimized for dialogue. Let us know if a particular response was good or unhelpful.",
						description: "Disclaimer 1 for Page 2"
					},
					page2Disclaimer2: {
						id: "onboarding.page2Disclaimer2",
						defaultMessage: "Share your feedback in our <link>Discord server</link>.",
						description: "Disclaimer 2 for Page 2, with link to Discord"
					}
				}),
				U = "oai/apps/hasSeenOnboarding",
				q = P.G.id,
				O = P.G.name,
				z = function() {
					var e = (0, o.useCallback)(function() {
							m.m.setItem("".concat(U, "/").concat(q), new Date().toLocaleDateString(
								"en-CA", {
									year: "numeric",
									month: "2-digit",
									day: "2-digit"
								}))
						}, []),
						n = (0, r._)((0, o.useState)(null), 2),
						t = n[0],
						a = n[1];
					(0, o.useEffect)(function() {
						var e = m.m.getItem("".concat(U, "/").concat(q));
						a(!!e && e)
					}, [a]);
					var i = (0, o.useCallback)(function() {
						return new Date()
					}, [t]);
					return (0, o.useMemo)(function() {
						return {
							setHasSeenOnboarding: e,
							getHasSeenOnboardingDate: i
						}
					}, [i, e])
				};

			function H(e) {
				var n = e.onClose,
					t = z().setHasSeenOnboarding,
					i = (0, r._)((0, o.useState)(0), 2),
					s = i[0],
					l = i[1],
					u = (0, o.useCallback)(function() {
						n(!0), t()
					}, [n, t]);
				return (0, a.jsxs)($, {
					children: [0 === s && (0, a.jsx)(G, {
						onChangePage: l
					}), 1 === s && (0, a.jsx)(W, {
						onChangePage: l
					}), 2 === s && (0, a.jsx)(Q, {
						onChangePage: l,
						onSubmit: u
					})]
				})
			}
			var V = function() {
					return "chat" === q ? (0, a.jsxs)(a.Fragment, {
						children: [(0, a.jsx)("div", {
							className: "mb-5",
							children: (0, a.jsx)(J, {
								children: (0, a.jsx)("b", {
									children: O
								})
							})
						}), (0, a.jsx)(K, {})]
					}) : (0, a.jsxs)(a.Fragment, {
						children: [(0, a.jsx)(J, {
							children: (0, a.jsx)(d.Z, (0, l._)((0, s._)({}, B
								.pageTitle), {
									values: {
										name: (0, a.jsx)("b", {
											children: O
										})
									}
								}))
						}), (0, a.jsx)("p", {
							children: (0, a.jsx)(d.Z, (0, s._)({}, B.keepInMind))
						}), (0, a.jsx)(K, {})]
					})
				},
				G = function(e) {
					var n = e.onChangePage;
					return (0, a.jsxs)(a.Fragment, {
						children: [(0, a.jsx)(V, {}), (0, a.jsx)(Y, {
							children: (0, a.jsx)(d.Z, (0, s._)({}, B.page0Subtitle))
						}), (0, a.jsxs)(S.I, {
							children: [(0, a.jsx)(S.Z, {
								icon: "\uD83D\uDD2C",
								children: (0, a.jsx)(d.Z, (0, s._)({}, B
									.page0Disclaimer1))
							}), (0, a.jsx)(S.Z, {
								icon: "\uD83D\uDEA8",
								children: (0, a.jsx)(d.Z, (0, s._)({}, B
									.page0Disclaimer2))
							})]
						}), (0, a.jsx)(D, {
							onNext: function() {
								return n(1)
							}
						})]
					})
				},
				W = function(e) {
					var n = e.onChangePage;
					return (0, a.jsxs)(a.Fragment, {
						children: [(0, a.jsx)(V, {}), (0, a.jsx)(Y, {
							children: (0, a.jsx)(d.Z, (0, s._)({}, B.page1Subtitle))
						}), (0, a.jsxs)(S.I, {
							children: [(0, a.jsx)(S.Z, {
								icon: "\uD83E\uDDBE",
								children: (0, a.jsx)(d.Z, (0, s._)({}, B
									.page1Disclaimer1))
							}), (0, a.jsx)(S.Z, {
								icon: "\uD83D\uDD10",
								children: (0, a.jsx)(d.Z, (0, s._)({}, B
									.page1Disclaimer2))
							})]
						}), (0, a.jsx)(D, {
							onBack: function() {
								return n(0)
							},
							onNext: function() {
								return n(2)
							}
						})]
					})
				},
				Q = function(e) {
					var n = e.onChangePage,
						t = e.onSubmit,
						r = (0, o.useRef)(null);
					return (0, a.jsxs)(a.Fragment, {
						children: [(0, a.jsx)(V, {}), (0, a.jsx)(Y, {
							children: (0, a.jsx)(d.Z, (0, s._)({}, B.page2Subtitle))
						}), (0, a.jsxs)(S.I, {
							children: [(0, a.jsx)(S.Z, {
								icon: "\uD83D\uDC4D",
								children: (0, a.jsx)(d.Z, (0, s._)({}, B
									.page2Disclaimer1))
							}), (0, a.jsx)(S.Z, {
								icon: "\uD83D\uDCAC",
								children: (0, a.jsx)(d.Z, (0, l._)((0, s._)
							({}, B.page2Disclaimer2), {
									values: {
										link: function(e) {
											return (0, a
												.jsx)(
												"a", {
													href: "https://discord.gg/openai",
													target: "_blank",
													rel: "noreferrer",
													children: e
												})
										}
									}
								}))
							})]
						}), (0, a.jsx)(D, {
							onBack: function() {
								return n(1)
							},
							onSubmit: function() {
								return null == t ? void 0 : t(r)
							}
						})]
					})
				},
				$ = N.Z.div(E()),
				J = N.Z.h2(R()),
				Y = N.Z.h4(L()),
				K = N.Z.div(A()),
				X = t(44541),
				ee = (0, u.vU)({
					tryGPT4: {
						id: "releaseAnnouncement.tryGPT4",
						defaultMessage: "Try GPT-4",
						description: "Button text to try GPT-4"
					},
					maybeLater: {
						id: "releaseAnnouncement.maybeLater",
						defaultMessage: "Maybe later",
						description: "Button text to dismiss the release announcement"
					},
					introducingGPT4: {
						id: "releaseAnnouncement.introducingGPT4",
						defaultMessage: "Introducing GPT-4",
						description: "Heading for the GPT-4 release announcement"
					},
					ourLatestModel: {
						id: "releaseAnnouncement.ourLatestModel",
						defaultMessage: "Our latest model, <link>GPT-4</link>, is now available to Plus subscribers.",
						description: "Text to introduce GPT-4 and provide a link to its product page"
					},
					advancedReasoning: {
						id: "releaseAnnouncement.advancedReasoning",
						defaultMessage: "Advanced reasoning",
						description: "List item highlighting advanced reasoning in GPT-4"
					},
					complexInstructions: {
						id: "releaseAnnouncement.complexInstructions",
						defaultMessage: "Complex instructions",
						description: "List item highlighting complex instructions in GPT-4"
					},
					moreCreativity: {
						id: "releaseAnnouncement.moreCreativity",
						defaultMessage: "More creativity",
						description: "List item highlighting more creativity in GPT-4"
					},
					dynamicAdjustment: {
						id: "releaseAnnouncement.dynamicAdjustment",
						defaultMessage: "To give every Plus subscriber a chance to try the model, we'll dynamically adjust the cap for GPT-4 usage based on demand.",
						description: "Text explaining the dynamic adjustment of GPT-4 usage based on demand"
					},
					feb13Update: {
						id: "releaseAnnouncement.feb13Update",
						defaultMessage: "Feb 13 update",
						description: "Text for the February 13 update announcement"
					},
					turboToDefault: {
						id: "releaseAnnouncement.turboToDefault",
						defaultMessage: "Turbo",
						description: "Text for Turbo version in the announcement"
					},
					defaultVersion: {
						id: "releaseAnnouncement.defaultVersion",
						defaultMessage: "Default",
						description: "Text for the Default version in the announcement"
					},
					turboDefaultSwitch: {
						id: "releaseAnnouncement.turboDefaultSwitch",
						defaultMessage: "Based on user feedback, we're defaulting you to a faster version of ChatGPT, previously known as Turbo. We'll keep the previous version around for a while.",
						description: "Text explaining the switch from Turbo to the Default version based on user feedback"
					},
					gpt4HasEnhancedCapabilities: {
						id: "releaseAnnouncement.gpt4HasEnhancedCapabilities",
						defaultMessage: "GPT-4 has enhanced capabilities in:",
						description: "Text to introduce GPT-4's enhanced capabilities"
					}
				}),
				en = "2023-03-12",
				et = "".concat("oai/apps/hasSeenReleaseAnnouncement", "/").concat(en);

			function er(e) {
				var n = e.onClose,
					t = (0, M.useRouter)(),
					r = (0, o.useCallback)(function() {
						m.m.setItem(et, !0), n()
					}, [n]),
					i = (0, o.useCallback)(function() {
						r(), t.replace("/?model=".concat(X.f_))
					}, [r, t]),
					s = (0, f.WS)();
				return (0, o.useEffect)(function() {
					s && s(h.s6.announcementViewed, {
						content: en
					})
				}, []), (0, a.jsx)(x.ZP, {
					isOpen: !0,
					onModalClose: r,
					type: "success",
					title: "",
					theme: "dark",
					fullBleed: !0,
					primaryButton: (0, a.jsx)(x.mH, {
						title: "Try GPT-4",
						color: "light",
						onClick: i
					}),
					secondaryButton: (0, a.jsx)(x.mH, {
						title: "Maybe later",
						color: "dark",
						onClick: r,
						className: "border-gray-800 hover:border-gray-700"
					}),
					children: (0, a.jsx)(ea, {})
				})
			}
			var ea = function() {
					return (0, a.jsxs)(a.Fragment, {
						children: [(0, a.jsx)(_(), {
							src: "/images/gpt-4-motif.svg",
							alt: "Gpt-4 announcement banner",
							width: "480",
							height: "160",
							className: "mt-3.5 w-full"
						}), (0, a.jsx)("div", {
							className: "m-4 mb-6 flex flex-col gap-6 sm:m-6",
							children: (0, a.jsxs)("div", {
								className: "prose prose-invert text-base",
								children: [(0, a.jsx)("h2", {
									children: (0, a.jsx)(d.Z, (0, s
										._)({}, ee
										.introducingGPT4))
								}), (0, a.jsx)("p", {
									children: (0, a.jsx)(d.Z, (0, l
										._)((0, s._)({}, ee
											.ourLatestModel
											), {
											tagName: "span",
											values: {
												link: function(
													e) {
													return (0,
															a
															.jsx
															)
														("a", {
															href: "https://openai.com/product/gpt-4",
															target: "_blank",
															rel: "noreferrer",
															children: e
														})
												}
											}
										}))
								}), (0, a.jsx)("p", {
									children: (0, a.jsx)(d.Z, (0, s
										._)({}, ee
										.gpt4HasEnhancedCapabilities
										))
								}), (0, a.jsxs)("ul", {
									children: [(0, a.jsxs)("li", {
										children: [(0, a
												.jsx
												)(d
												.Z,
												(0, s
													._
													)
												({}, ee
													.advancedReasoning
													)
												),
											" "
										]
									}), (0, a.jsx)("li", {
										children: (0, a
											.jsx)(d
											.Z, (0,
												s._)
											({}, ee
												.complexInstructions
												))
									}), (0, a.jsx)("li", {
										children: (0, a
											.jsx)(d
											.Z, (0,
												s._)
											({}, ee
												.moreCreativity
												))
									})]
								}), (0, a.jsx)("p", {
									children: (0, a.jsx)(d.Z, (0, s
										._)({}, ee
										.dynamicAdjustment))
								})]
							})
						})]
					})
				},
				ei = function(e) {
					var n = e.onClose;
					return (0, a.jsx)(x.ZP, {
						isOpen: !0,
						onModalClose: i.noop,
						type: "success",
						primaryButton: void 0,
						children: (0, a.jsx)(H, {
							onClose: n
						})
					})
				},
				eo = function(e) {
					var n = e.onClose;
					return (0, a.jsx)(er, {
						onClose: n
					})
				};

			function es(e) {
				var n, t, i, s = e.userCountry,
					l = (0, r._)((0, o.useState)(0), 2),
					u = l[0],
					c = l[1],
					d = z().getHasSeenOnboardingDate,
					f = (t = (n = (0, p.hz)()).has(v.Vn), i = !!m.m.getItem(j), 0 === n.size ? "loading" :
						"IT" !== s || i ? "hide" : t ? "show" : "hide"),
					h = function() {
						var e = z().getHasSeenOnboardingDate,
							n = (0, p.Xj)().isLoading,
							t = (0, p.hz)();
						if (n) return "loading";
						var r = e();
						return m.m.getItem(et) || !r ? "hide" : t.has("model_preview") && r < new Date(en) ?
							"show" : "hide"
					}(),
					g = (0, o.useMemo)(function() {
						return [{
							Modal: w,
							getModalState: function() {
								return f
							}
						}, {
							Modal: ei,
							getModalState: function() {
								var e = d();
								return null === e ? "loading" : !1 === e ? "show" : "hide"
							}
						}, {
							Modal: eo,
							getModalState: function() {
								return h
							}
						}]
					}, [d, f, h]);
				(0, o.useEffect)(function() {
					g[u] && "hide" === g[u].getModalState() && c(g.findIndex(function(e) {
						return "hide" !== e.getModalState()
					}))
				}, [u, g]);
				var x = g[u];
				if (!x) return null;
				var b = x.getModalState();
				if ("loading" === b) return null;
				"hide" === b && c(function(e) {
					return e + 1
				});
				var y = g[u].Modal;
				return (0, a.jsx)(y, {
					onClose: function() {
						c(function(e) {
							return e + 1
						})
					}
				})
			}
		},
		21172: function(e, n, t) {
			"use strict";
			t.r(n), t.d(n, {
				default: function() {
					return g
				}
			});
			var r = t(22830),
				a = t(35250),
				i = t(70079),
				o = t(5914),
				s = t(97688),
				l = t(87316),
				u = t(32983),
				c = t(64135),
				d = t(75527),
				f = t(78042),
				h = t(63959);

			function g(e) {
				var n = e.urlThreadId,
					t = e.clientThreadId,
					g = e.isUserInCanPayGroup,
					m = e.serviceStatus,
					p = e.serviceAnnouncement,
					v = e.userCountry,
					x = (0, r._)((0, i.useState)(function() {
						return void 0 !== n ? n : void 0 !== t ? t : (0, d.OX)()
					}), 2),
					b = x[0],
					y = x[1];
				void 0 !== n && b !== n && y(n), void 0 !== n || (0, d.Zz)(b) || y((0, d.OX)());
				var j = (0, c.Xj)().data,
					w = null == j ? void 0 : j.accountPlan.hasPaidSubscription,
					C = (0, l.g)(function(e) {
						return e.updateFlagValue
					});
				(0, i.useEffect)(function() {
					void 0 !== g && C("isUserInCanPayGroup", g)
				}, [C, g]), (0, i.useEffect)(function() {
					(null == m ? void 0 : m.type) && !1 === w && s.m.warning(m.message, {
						hasCloseButton: !0,
						duration: 5
					})
				}, [w, null == m ? void 0 : m.message, null == m ? void 0 : m.type]);
				var k = (0, d.GR)(b),
					_ = (0, i.useRef)(!1);
				return (0, i.useEffect)(function() {
					if (null != j) {
						var e = j.accountPlan.hasPaidSubscription ? p.paid : p.public;
						if ((null == e ? void 0 : e.type) && (null == e ? void 0 : e.message) && !_
							.current) {
							_.current = !0;
							var n = e.message,
								t = {
									hasCloseButton: !0,
									duration: 15
								};
							switch (e.type) {
								case "danger":
									s.m.danger(n, t);
									break;
								case "info":
									s.m.info(n, t);
									break;
								case "warning":
									s.m.warning(n, t)
							}
						}
					}
				}, [p, j]), (0, a.jsxs)(u.AX.Provider, {
					value: k,
					children: [(0, a.jsx)(f.Z, {
						userCountry: v
					}), (0, a.jsx)(o.j, {}), (0, a.jsx)(h.Z, {
						clientThreadId: b,
						setClientThreadId: y,
						isStaticSharedThread: !1
					})]
				})
			}
		},
		22208: function(e, n, t) {
			"use strict";
			t.r(n), t.d(n, {
				SANDBOX_LINK_PREFIX: function() {
					return j
				},
				default: function() {
					return C
				},
				handleSandboxLinkClick: function() {
					return w
				}
			});
			var r = t(21722),
				a = t(22830),
				i = t(39889),
				o = t(35250),
				s = t(70079),
				l = t(24274),
				u = t(64135),
				c = t(75527),
				d = t(4337),
				f = t(1454),
				h = t(34303),
				g = t(66958),
				m = t(38317),
				p = t(19265);

			function v() {
				var e = (0, d._)(["absolute -left-1 top-1 md:left-0 md:top-2"]);
				return v = function() {
					return e
				}, e
			}

			function x(e) {
				var n = e.accept,
					t = e.onFilePicked,
					r = e.loading,
					a = e.disabled,
					i = (0, s.useRef)(null),
					l = (0, s.useCallback)(function() {
						var e;
						null === (e = i.current) || void 0 === e || e.click()
					}, []),
					u = (0, s.useCallback)(function(e) {
						var n, r = null === (n = e.target.files) || void 0 === n ? void 0 : n[0];
						r && (t(r), e.target.value = "")
					}, [t]);
				return (0, o.jsxs)(b, {
					children: [(0, o.jsx)(g.z, {
						onClick: l,
						disabled: a || r,
						color: "none",
						children: r ? (0, o.jsx)(p.Z, {}) : (0, o.jsx)(m.ZP, {
							icon: f.Cje,
							size: "small"
						})
					}), (0, o.jsx)("input", {
						type: "file",
						accept: n,
						ref: i,
						className: "hidden",
						onChange: u
					})]
				})
			}
			var b = h.Z.div(v()),
				y = t(97688),
				j = "sandbox:";

			function w(e, n) {
				var t;
				return t = (0, r._)(function(t, a) {
						var o, s, u, c, d, f, h, g, m, p;
						return (0, i.Jh)(this, function(v) {
							switch (v.label) {
								case 0:
									var x;
									if (o = a.substring(8), s = null, !e.has("fs_sandbox_down"))
										return [3, 7];
									x = 100, u = (0, r._)(function() {
										return (0, i.Jh)(this, function(e) {
											switch (e.label) {
												case 0:
													var n;
													return x < 1e3 && (x +=
														100), [4, (n = x,
															new Promise(
																function(
																e) {
																	return setTimeout(
																		e,
																		n
																		)
																}))];
												case 1:
													return e.sent(), [2]
											}
										})
									}), v.label = 1;
								case 1:
									return [4, l.ZP.downloadFromSandbox(t, n, o)];
								case 2:
									if (null == (c = v.sent()) ? void 0 : c.download_url)
									return s = c.download_url, [3, 6];
									if ((null == c ? void 0 : c.state) !== "not_ready") return [
										3, 4
									];
									return [4, u()];
								case 3:
									return v.sent(), [3, 5];
								case 4:
									return y.m.warning("Download failed: ".concat(o)), [2];
								case 5:
									return [3, 1];
								case 6:
									return (d = document.createElement("a")).href = s, d
									.click(), [3, 11];
								case 7:
									return [4, l.ZP.checkFile(n, o)];
								case 8:
									if (!(f = v.sent()).exists) return y.m.warning(
										"File does not exist: ".concat(o)), [2];
									if (f.too_large) return h = (f.size / 1024 / 1024).toFixed(
										0), y.m.warning(
										"File is larger than download limit: ".concat(h,
											" MB vs ").concat("100", " MB")), [2];
									return [4, l.ZP.fetchFileForDownload(n, o)];
								case 9:
									return [4, v.sent().blob()];
								case 10:
									g = v.sent(), s = window.URL.createObjectURL(g), (m =
											document.createElement("a")).href = s, null != (p =
											o.split("/").pop()) && (m.download = p), m.click(),
										v.label = 11;
								case 11:
									return [2]
							}
						})
					}),
					function(e, n) {
						return t.apply(this, arguments)
					}
			}

			function C(e) {
				var n, t = e.onFileUpload,
					d = e.clientThreadId,
					f = e.currentLeafId,
					h = e.modelBackend,
					g = e.disabled,
					m = (0, a._)((0, s.useState)(!1), 2),
					p = m[0],
					v = m[1],
					b = (0, u.hz)(),
					j = (0, s.useCallback)((n = (0, r._)(function(e) {
						var n, r, a, o, s;
						return (0, i.Jh)(this, function(i) {
							switch (i.label) {
								case 0:
									v(!0), i.label = 1;
								case 1:
									if (i.trys.push([1, , 6, 7]), e.size > 104857600)
										return r = (e.size / 1024 / 1024).toFixed(0), y
											.m.warning(
												"File is larger than upload limit: "
												.concat(r, " MB vs ").concat("100",
													" MB"), {
													hasCloseButton: !0,
													duration: 15
												}), [2];
									if (o = (null === (n = (a = c.tQ.getTree(d).getNode(
												f)).message) || void 0 === n ? void 0 :
											n.id) || a.id, !b.has("fs_uploads"))
									return [3, 3];
									return [4, l.ZP.uploadUsingFileService(o, c.tQ
										.getServerThreadId(d), h, e)];
								case 2:
									return s = i.sent(), [3, 5];
								case 3:
									return [4, l.ZP.uploadDirectly(o, c.tQ
										.getServerThreadId(d), h, e)];
								case 4:
									s = i.sent(), i.label = 5;
								case 5:
									return t(s), [3, 7];
								case 6:
									return v(!1), [7];
								case 7:
									return [2]
							}
						})
					}), function(e) {
						return n.apply(this, arguments)
					}), [t, d, f, h, b]);
				return (0, o.jsx)(x, {
					disabled: p || g,
					onFilePicked: j
				})
			}
		},
		2368: function(e, n, t) {
			"use strict";
			t.d(n, {
				$: function() {
					return b
				},
				Z: function() {
					return x
				}
			});
			var r = t(4337),
				a = t(35250),
				i = t(70079),
				o = t(34303),
				s = t(64135),
				l = t(88038),
				u = t(13282);

			function c() {
				var e = (0, r._)(["bg-black rounded-md"]);
				return c = function() {
					return e
				}, e
			}

			function d() {
				var e = (0, r._)([
					"flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md ",
					""
				]);
				return d = function() {
					return e
				}, e
			}

			function f() {
				var e = (0, r._)(["p-4 overflow-y-auto"]);
				return f = function() {
					return e
				}, e
			}

			function h() {
				var e = (0, r._)(["", ""]);
				return h = function() {
					return e
				}, e
			}
			var g = o.Z.div(c()),
				m = o.Z.div(d(), function(e) {
					return e.$isMessageRedesign && "dark:bg-gray-900"
				}),
				p = o.Z.div(f()),
				v = o.Z.code(h(), function(e) {
					return e.$shouldWrap ? "!whitespace-pre-wrap" : "!whitespace-pre"
				});

			function x(e) {
				var n = e.children,
					t = e.className,
					r = e.language,
					o = e.content,
					s = (0, i.useCallback)(function() {
						navigator.clipboard.writeText(o)
					}, [o]);
				return (0, a.jsx)(b, {
					title: r,
					headerDecoration: (0, a.jsx)(u.Z, {
						buttonText: "Copy code",
						onCopy: s
					}),
					className: "mb-4",
					codeClassName: t,
					children: n
				})
			}

			function b(e) {
				var n = e.children,
					t = e.title,
					r = e.headerDecoration,
					i = e.shouldWrapCode,
					o = e.className,
					u = e.codeClassName,
					c = (0, s.hz)().has(l.FZ);
				return (0, a.jsxs)(g, {
					className: o,
					children: [(0, a.jsxs)(m, {
						$isMessageRedesign: c,
						children: [t && (0, a.jsx)("span", {
							children: t
						}), r]
					}), (0, a.jsx)(p, {
						children: (0, a.jsx)(v, {
							$shouldWrap: void 0 !== i && i,
							className: u,
							children: n
						})
					})]
				})
			}
		},
		13282: function(e, n, t) {
			"use strict";
			t.d(n, {
				Z: function() {
					return f
				}
			});
			var r = t(22830),
				a = t(4337),
				i = t(35250),
				o = t(70079),
				s = t(1454),
				l = t(34303),
				u = t(86526),
				c = t(38317);

			function d() {
				var e = (0, a._)(["flex ml-auto gap-2"]);
				return d = function() {
					return e
				}, e
			}

			function f(e) {
				var n = e.buttonText,
					t = e.onCopy,
					a = e.className,
					l = (0, r._)((0, o.useState)(!1), 2),
					d = l[0],
					f = l[1],
					g = (0, u.Z)(),
					m = (0, o.useCallback)(function() {
						t(), f(!0), setTimeout(function() {
							g() && f(!1)
						}, 2e3)
					}, [g, t]);
				return (0, i.jsxs)(i.Fragment, {
					children: [!d && (0, i.jsxs)(h, {
						onClick: m,
						className: a,
						children: [(0, i.jsx)(c.ZP, {
							icon: s.j4u
						}), n]
					}), d && (0, i.jsxs)(h, {
						className: a,
						children: [(0, i.jsx)(c.ZP, {
							icon: s.UgA
						}), n && "Copied!"]
					})]
				})
			}
			var h = l.Z.button(d())
		},
		180: function(e, n, t) {
			"use strict";
			t.d(n, {
				Z: function() {
					return a
				}
			});
			var r = t(35250);

			function a(e) {
				var n, t = e.url,
					a = e.size,
					i = void 0 === a ? 16 : a,
					o = e.className;
				try {
					n = new URL(t)
				} catch (e) {
					return console.error(e), null
				}
				return (0, r.jsx)("img", {
					src: "https://icons.duckduckgo.com/ip3/".concat(n.hostname, ".ico"),
					alt: "Favicon",
					width: i,
					height: i,
					className: o
				})
			}
		},
		5914: function(e, n, t) {
			"use strict";
			t.d(n, {
				j: function() {
					return f
				}
			});
			var r = t(35250),
				a = t(70079),
				i = t(82841),
				o = t(36218),
				s = t(85023),
				l = t(64135),
				u = t(88038),
				c = t(97688),
				d = "oai/apps/hasSeenStatusUpdate/".concat("2023-03-25"),
				f = function() {
					var e = (0, l.hz)().has(u.Id),
						n = (0, a.useRef)(!!s.m.getItem(d)),
						t = (0, i.WS)();
					return (0, a.useEffect)(function() {
						e && !n.current && t && (t(o.s6.oneOffStatusMessageShown), c.m.warning(
							"You attempted to purchase ChatGPT Plus during an outage. We've issued a refund and apologize for the inconvenience. If you’d like to continue your subscription, please re-subscribe.", {
								duration: 0,
								hasCloseButton: !0,
								onRemove: function() {
									s.m.setItem(d, !0), n.current = !0
								}
							}))
					}, [n, e, t]), (0, r.jsx)("div", {})
				}
		},
		63959: function(e, n, t) {
			"use strict";
			t.d(n, {
				Z: function() {
					return sf
				}
			});
			var r, a, i, o, s, l, u, c, d, f, h = t(39324),
				g = t(70216),
				m = t(22830),
				p = t(4337),
				v = t(35250),
				x = t(35448),
				b = t(68555),
				y = t(70079),
				j = t(34303),
				w = t(82841),
				C = t(36218),
				k = t(64135),
				_ = t(75527),
				M = t(81292),
				T = t(58392),
				N = (0, M.ZP)((0, T.n)(function() {
					return {
						aborters: {}
					}
				})),
				P = N.setState,
				S = {
					addAborter: function(e, n) {
						P(function(t) {
							null != t.aborters[e] && console.warn("Setting aborter for id "
								.concat(e, " but it already exists")), t.aborters[e] = n
						})
					},
					abortAndRemoveById: function(e) {
						P(function(n) {
							var t = n.aborters[e];
							null != t && (t.abort(), delete n.aborters[e])
						})
					},
					removeAborterById: function(e) {
						P(function(n) {
							delete n.aborters[e]
						})
					},
					reset: function() {
						P(function() {
							return {
								aborters: {}
							}
						})
					},
					abortAllAndReset: function() {
						P(function(e) {
							Object.keys(e.aborters).forEach(function(n) {
								e.aborters[n].abort(), delete e.aborters[n]
							})
						})
					}
				},
				I = t(32983),
				Z = t(19841),
				D = t(7851),
				F = t(26430),
				E = t(84913),
				R = t(44043),
				L = t(82187),
				A = t(69262),
				B = t(75861),
				U = t(70575),
				q = t(91530),
				O = t.n(q),
				z = t(1454),
				H = t(3001),
				V = t(75908),
				G = t(35290),
				W = t(24274),
				Q = t(88038),
				$ = t(77442),
				J = t(19051),
				Y = t(51217),
				K = t(86526);

			function X(e) {
				var n = e.text,
					t = (0, K.Z)(),
					r = (0, m._)((0, y.useState)(!0), 2),
					a = r[0],
					i = r[1],
					o = (0, m._)((0, y.useState)(0), 2),
					s = o[0],
					l = o[1],
					u = (0, y.useMemo)(function() {
						return new ee().humanTypingDelaysQuertyDistance(n)
					}, [n]);
				return (0, y.useEffect)(function() {
					n && a && (i(!0), u.forEach(function(e, n) {
						setTimeout(function() {
							t() && (l(n), n === u.length - 1 && i(!1))
						}, e)
					}))
				}, [u, t, a, n]), (0, v.jsxs)(v.Fragment, {
					children: [n.substring(0, s + 1), a && "▋"]
				})
			}
			var ee = function() {
					function e() {
						(0, Y._)(this, e)
					}
					var n = e.prototype;
					return n.qwertyDistance = function(e, n) {
						var t, r, a = {
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
								m: [6, 2]
							},
							i = (0, m._)(null !== (t = a[e.toLowerCase()]) && void 0 !== t ? t : [0, 0],
								2),
							o = i[0],
							s = i[1],
							l = (0, m._)(null !== (r = a[n.toLowerCase()]) && void 0 !== r ? r : [0, 0],
								2);
						return Math.abs(o - l[0]) + Math.abs(s - l[1])
					}, n.humanTypingDelaysQuertyDistance = function(e) {
						for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] :
								10, t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] :
								100, r = 0, a = [], i = 0; i < e.length; ++i) {
							var o = void 0;
							if (i > 0) {
								var s = this.qwertyDistance(e[i - 1], e[i]);
								o = 0 === s ? this.getRandomInt(n, Math.floor(t / 2)) : 1 === s ? this
									.getRandomInt(n, Math.floor(2 * t / 3)) : this.getRandomInt(n, t)
							} else o = this.getRandomInt(n, t);
							a.push(o + r), r += o
						}
						return a
					}, n.getRandomInt = function(e, n) {
						return Math.floor(Math.random() * (n - e + 1)) + e
					}, e
				}(),
				en = t(66958),
				et = t(38317),
				er = t(19265),
				ea = t(38675),
				ei = t(32787),
				eo = t(85023),
				es = t(97688),
				el = "oai/apps/hasSeenHistoryFilteredDisclosure/".concat("2023-03-21"),
				eu = "conversationHistory";

			function ec() {
				var e, n = (0, k.hz)().has(Q.Ud),
					t = (0, k.Xj)().isLoading,
					r = (0, ei.kP)().session,
					a = null == r ? void 0 : r.accessToken,
					i = !n && !!a && !t,
					o = (0, ea.N)({
						queryKey: [eu],
						queryFn: function(e) {
							var n = e.pageParam;
							return W.ZP.getConversations(n || 0, 28, null == r ? void 0 : r
								.accessToken)
						},
						getNextPageParam: function(e) {
							var n = e.offset + e.limit;
							return n < e.total ? n : void 0
						},
						enabled: i
					}),
					s = o.data,
					l = o.fetchNextPage,
					u = o.hasNextPage,
					c = o.isInitialLoading,
					d = o.isFetchingNextPage,
					f = o.isError,
					h = (0, y.useMemo)(function() {
						return null !== (e = null == s ? void 0 : s.pages.flatMap(function(e) {
							return e.items
						})) && void 0 !== e ? e : []
					}, [s]);
				return {
					data: s,
					conversations: h,
					fetchNextPage: l,
					hasNextPage: u,
					isLoading: c,
					isFetchingNextPage: d,
					isError: i && f
				}
			}

			function ed() {
				var e = (0, x.NL)();
				return (0, y.useCallback)(function() {
					e.invalidateQueries([eu])
				}, [e])
			}

			function ef() {
				var e = (0, p._)(["flex flex-col gap-2 pb-2 text-gray-100 text-sm\n", ""]);
				return ef = function() {
					return e
				}, e
			}

			function eh() {
				var e = (0, p._)([
					"flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all\n",
					")}\n", ")}\n", "\n"
				]);
				return eh = function() {
					return e
				}, e
			}

			function eg() {
				var e = (0, p._)([
					"flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer hover:pr-14 break-all\n",
					"\n"
				]);
				return eg = function() {
					return e
				}, e
			}

			function em() {
				var e = (0, p._)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
				return em = function() {
					return e
				}, e
			}

			function ep() {
				var e = (0, p._)(["flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative"]);
				return ep = function() {
					return e
				}, e
			}

			function ev() {
				var e = (0, p._)([
					"h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-gray-900"
				]);
				return ev = function() {
					return e
				}, e
			}

			function ex() {
				var e = (0, p._)(["absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l\n", ""]);
				return ex = function() {
					return e
				}, e
			}

			function eb() {
				var e = (0, p._)(["absolute flex right-1 z-10 text-gray-300\n", ""]);
				return eb = function() {
					return e
				}, e
			}

			function ey() {
				var e = (0, p._)(["p-1 hover:text-white"]);
				return ey = function() {
					return e
				}, e
			}
			var ej = (0, H.vU)({
					historyBucketToday: {
						id: "history.bucket.today",
						defaultMessage: "Today",
						description: "Label for today's history bucket"
					},
					historyBucketYesterday: {
						id: "history.bucket.yesterday",
						defaultMessage: "Yesterday",
						description: "Label for yesterday's history bucket"
					},
					historyBucketLastSeven: {
						id: "history.bucket.lastSeven",
						defaultMessage: "Previous 7 Days",
						description: "Label for the history bucket of the previous 7 days"
					},
					historyBucketLastThirty: {
						id: "history.bucket.lastThirty",
						defaultMessage: "Previous 30 Days",
						description: "Label for the history bucket of the previous 30 days"
					},
					unableToLoadHistory: {
						id: "history.unableToLoad",
						defaultMessage: "Unable to load history",
						description: "Error message when history fails to load"
					},
					retryButton: {
						id: "history.retryButton",
						defaultMessage: "Retry",
						description: "Button to retry loading history"
					},
					showMoreButton: {
						id: "history.showMoreButton",
						defaultMessage: "Show more",
						description: "Button to show more history items"
					}
				}),
				ew = {
					initial: function(e) {
						return e.isNew ? {
							opacity: 0,
							height: 0,
							overflow: "hidden"
						} : {}
					},
					animate: function() {
						return {
							opacity: 1,
							height: "auto"
						}
					},
					exit: function() {
						return {
							opacity: 0,
							height: 0
						}
					}
				};

			function eC(e) {
				var n, t, r, a, i, o, s = e.activeId,
					l = e.onNewThread,
					u = e.onUpdateUserModifiedTitle,
					c = e.userModifiedTitle,
					d = e.newChatName,
					f = e.onSetSharingModalOpen,
					g = e.setNewChatName,
					p = e.setActiveRequests,
					x = (0, V.Z)(),
					b = (0, m._)((0, y.useState)(!1), 2),
					j = b[0],
					w = b[1],
					C = (0, m._)((0, y.useState)(0), 2),
					_ = C[0],
					M = C[1],
					T = (0, J.Z)(),
					N = ec(),
					P = N.conversations,
					S = N.hasNextPage,
					I = N.fetchNextPage,
					q = N.isLoading,
					O = N.isFetchingNextPage,
					z = N.isError,
					H = (0, k.hz)().has(Q.DY),
					W = (0, y.useRef)(null),
					$ = (0, y.useCallback)(function(e) {
						var n;
						H && !q && null != e && (null === (n = W.current) || void 0 === n || n
							.disconnect(), W.current = new IntersectionObserver(function(e) {
								e[0].isIntersecting && S && I()
							}), W.current.observe(e))
					}, [H, q, S, I]);
				(0, y.useEffect)(function() {
					return function() {
						var e;
						null === (e = W.current) || void 0 === e || e.disconnect()
					}
				}, []);
				var Y = ed();
				n = (0, y.useRef)(!!eo.m.getItem(el)), r = (t = ec()).data, a = t.isError, (0, y.useEffect)(
					function() {
						var e, t;
						a || (null == r ? void 0 : null === (e = r.pages) || void 0 === e ? void 0 :
							null === (t = e[0]) || void 0 === t ? void 0 : t
							.has_missing_conversations) !== !0 || n.current || es.m.warning(
							"We've restored conversation history for all ChatGPT users and resolved the underlying issue, which was caused by a significant bug in an open-source library.\n\nIn order to ensure that this issue does not reoccur, users will not be able to retrieve their chat history from the morning of March 20th. We apologize to our users for any difficulties this may cause.", {
								duration: 0,
								hasCloseButton: !0,
								onRemove: function() {
									eo.m.setItem(el, !0), n.current = !0
								}
							})
					}, [null == r ? void 0 : r.pages, a]);
				var K = (i = (0, y.useRef)(), o = (0, y.useRef)(), ((0, y.useEffect)(function() {
					i.current = o.current, o.current = P
				}, [P]), P === o.current) ? i.current : o.current);
				(0, y.useEffect)(function() {
					T(function() {
						M(_ + 1)
					}, (0, F.Z)((0, E.Z)(), Date.now()) + 1e3)
				}, [_, T]);
				var X = 0 === P.length,
					ee = (0, y.useMemo)(function() {
						return P.reduce(function(e, n) {
							var t, r, a = new Date(null !== (r = null !== (t = n.update_time) &&
										void 0 !== t ? t : n.create_time) && void 0 !== r ? r :
									0),
								i = (0, D.Z)(new Date, a);
							if (0 === i) e.recent.today.items.push(n);
							else if (i <= 1) e.recent.yesterday.items.push(n);
							else if (i <= 7) e.recent.lastSeven.items.push(n);
							else if (i <= 30) e.recent.lastThirty.items.push(n);
							else if ((0, A.Z)(a)) {
								var o = (0, L.Z)(a),
									s = (0, R.Z)(a),
									l = "".concat(o, "-").concat(s);
								e.dynamicMonths[l] ? e.dynamicMonths[l].items.push(n) : e
									.dynamicMonths[l] = {
										label: x.formatDate(a, {
											month: "long"
										}),
										items: [n]
									}
							} else {
								var u = (0, L.Z)(a),
									c = "".concat(u, "-");
								e.dynamicYears[c] ? e.dynamicYears[c].items.push(n) : e
									.dynamicYears[c] = {
										label: x.formatDate(a, {
											year: "numeric"
										}),
										items: [n]
									}
							}
							return e
						}, {
							recent: {
								today: {
									label: (0, v.jsx)(G.Z, (0, h._)({}, ej.historyBucketToday)),
									items: []
								},
								yesterday: {
									label: (0, v.jsx)(G.Z, (0, h._)({}, ej
										.historyBucketYesterday)),
									items: []
								},
								lastSeven: {
									label: (0, v.jsx)(G.Z, (0, h._)({}, ej
										.historyBucketLastSeven)),
									items: []
								},
								lastThirty: {
									label: (0, v.jsx)(G.Z, (0, h._)({}, ej
										.historyBucketLastThirty)),
									items: []
								}
							},
							dynamicMonths: {},
							dynamicYears: {}
						})
					}, [_, P]);
				return (0, v.jsxs)(ek, {
					$centered: q || z && X,
					children: [X && q && (0, v.jsx)(er.Z, {
						className: "m-auto"
					}), X && z && (0, v.jsxs)("div", {
						className: "p-3 text-center italic text-gray-500",
						children: [(0, v.jsx)(G.Z, (0, h._)({}, ej
							.unableToLoadHistory)), !j && (0, v.jsx)("div", {
								className: "mt-1",
								children: (0, v.jsx)(en.z, {
									as: "button",
									color: "dark",
									size: "small",
									className: "m-auto mt-2",
									onClick: function() {
										w(!0), Y()
									},
									children: (0, v.jsx)(G.Z, (0, h._)
									({}, ej.retryButton))
								})
							})
						]
					}), !q && (0, v.jsx)("div", {
						children: (0, v.jsx)(B.M, {
							initial: !1,
							children: [ee.recent, ee.dynamicMonths, ee
								.dynamicYears
							].flatMap(function(e, n) {
								return (0, v.jsx)("span", {
									children: Object.entries(e)
										.map(function(e) {
											var n = (0, m._)
												(e, 2),
												t = n[0],
												r = n[1],
												a = r.items,
												i = r.label;
											if ("today" !==
												t && !a
												.length)
												return null;
											var o = !!a
												.find(
													function(
														e) {
														var
														n;
														return P
															.length >
															0 &&
															e
															.id ===
															(null ===
																(n = P[
																	0]) ||
																void 0 ===
																n ?
																void 0 :
																n
																.id
																)
													});
											return (0, v
												.jsxs)(U
												.E
												.div, {
													className: "relative",
													layoutId: "bucket-"
														.concat(
															t
															),
													layout: "position",
													initial: {
														height: 0,
														opacity: 1,
														position: "relative"
													},
													animate: {
														height: "auto",
														opacity: 1,
														transition: {
															duration: .2,
															ease: "easeIn"
														}
													},
													children: [
														a
														.length >
														0 &&
														(0, v
															.jsx
															)
														(U.E.div, {
															className: (
																	0,
																	Z
																	.Z
																	)
																("sticky top-0",
																	o ?
																	"z-[16]" :
																	"z-[14]"
																	),
															layoutId: "bucketTitle-"
																.concat(
																	t
																	),
															layout: "position",
															children: (
																	0,
																	v
																	.jsx
																	)
																(eS, {
																	children: i
																})
														}),
														(0, v
															.jsx
															)
														("ol", {
															children: a
																.map(
																	function(
																		e,
																		n
																		) {
																		var t =
																			s ===
																			e
																			.id,
																			r =
																			null ==
																			K ?
																			void 0 :
																			K
																			.find(
																				function(
																					n
																					) {
																					return n
																						.id ===
																						e
																						.id
																				}
																				);
																		return (0,
																				v
																				.jsx
																				)
																			(U.E.li, {
																					className: (
																							0,
																							Z
																							.Z
																							)
																						("relative",
																							o &&
																							0 ===
																							n ?
																							"z-[15]" :
																							""
																							),
																					layoutId: ""
																						.concat(
																							e
																							.id
																							),
																					layout: "position",
																					custom: {
																						isNew:
																							!
																							r
																					},
																					variants: ew,
																					initial: "initial",
																					animate: "animate",
																					exit: "exit",
																					children: (
																							0,
																							v
																							.jsx
																							)
																						(e_, {
																							id: e
																								.id,
																							title: e
																								.title,
																							newChatName: t ?
																								d :
																								void 0,
																							setNewChatName: g,
																							userModifiedTitle: t ?
																								c :
																								"",
																							onUpdateUserModifiedTitle: u,
																							active: t,
																							onNewThread: l,
																							setActiveRequests: p,
																							onSetSharingModalOpen: f,
																							forwardRef: S &&
																								P[P.length -
																									5 -
																									1
																									]
																								.id ===
																								e
																								.id ?
																								$ :
																								void 0
																						})
																				},
																				"history-item-"
																				.concat(
																					e
																					.id
																					)
																				)
																	}
																	)
														})
													]
												}, t)
										})
								}, "category-".concat(n))
							})
						})
					}), H ? O && (0, v.jsx)("div", {
						className: "m-4 mb-5 flex justify-center",
						children: (0, v.jsx)(er.Z, {})
					}) : (0, v.jsx)(v.Fragment, {
						children: S && (0, v.jsx)(en.z, {
							as: "button",
							onClick: function() {
								return I()
							},
							color: "dark",
							className: "m-auto mb-2",
							size: "small",
							loading: O,
							children: (0, v.jsx)(G.Z, (0, h._)({}, ej
								.showMoreButton))
						})
					})]
				})
			}
			var ek = j.Z.div(ef(), function(e) {
				return e.$centered && "h-full justify-center items-center"
			});

			function e_(e) {
				var n = e.id,
					t = e.title,
					r = e.active,
					a = e.onNewThread,
					i = e.onUpdateUserModifiedTitle,
					o = e.newChatName,
					s = e.setNewChatName,
					l = e.userModifiedTitle,
					u = e.forwardRef,
					c = e.onSetSharingModalOpen,
					d = e.setActiveRequests,
					f = (0, $.lj)(),
					h = (0, w.WS)(),
					g = (0, b.useRouter)(),
					p = (0, m._)((0, y.useState)(!1), 2),
					x = p[0],
					j = p[1],
					_ = (0, y.useRef)(null),
					M = (0, m._)((0, y.useState)(!1), 2),
					T = M[0],
					N = M[1],
					P = (0, k.hz)(),
					I = (0, m._)((0, y.useState)(), 2),
					D = I[0],
					F = I[1],
					E = P.has("shareable_links") && r,
					R = ed(),
					L = (0, y.useCallback)(function(e) {
						var r, a;
						if (null == e || e.preventDefault(), j(!1), (null === (r = _.current) ||
								void 0 === r ? void 0 : r.value) && (null === (a = _.current) ||
								void 0 === a ? void 0 : a.value) !== t) {
							var o = _.current.value;
							W.ZP.patchConversation(n, {
								title: o
							}), i(o), h(C.s6.renameThread, {
								threadId: n,
								content: o
							}), R()
						}
					}, [h, n, R, i, t]),
					A = (0, y.useCallback)(function(e) {
						"Enter" === e.key && L()
					}, [L]),
					B = (0, y.useCallback)(function() {
						W.ZP.patchConversation(n, {
							is_visible: !1
						}).then(function() {
							R()
						}), a()
					}, [n, a, R]),
					U = (0, y.useCallback)(function(e) {
						S.abortAllAndReset(), d(new Set), e.preventDefault(), s(""), F(void 0), h(C.s6
							.loadThread, {
								threadId: n
							}), g.push("/c/".concat(n), void 0, {
							shallow: !0
						})
					}, [h, n, g, d, s]),
					q = l || r && o || t;
				if ((0, y.useEffect)(function() {
						r && o && o !== D && F(o)
					}, [r, o, q, D, l]), x) return (0, v.jsxs)(eT, {
					$active: r,
					children: [(0, v.jsx)(et.ZP, {
						icon: z.IC0,
						className: "flex-shrink-0"
					}), (0, v.jsx)(eN, {
						ref: _,
						type: "text",
						defaultValue: q,
						autoFocus: !0,
						onKeyDown: A,
						className: "mr-0",
						onBlur: L
					}), (0, v.jsxs)(eZ, {
						$active: !0,
						children: [(0, v.jsx)(eD, {
							onClick: L,
							children: (0, v.jsx)(et.ZP, {
								icon: z.UgA
							})
						}), (0, v.jsx)(eD, {
							onClick: function(e) {
								e.preventDefault(), j(!1)
							},
							children: (0, v.jsx)(et.ZP, {
								icon: z.q5L
							})
						})]
					})]
				});
				var H = D && r && !f && !l;
				return (0, v.jsxs)(eM, {
					onClick: r ? O() : U,
					$active: r,
					$sharing: E,
					className: (0, Z.Z)("group", H && "animate-flash"),
					ref: u,
					children: [(0, v.jsx)(et.ZP, {
						icon: T ? z.Ybf : z.IC0
					}), (0, v.jsxs)(eP, {
						children: [H ? (0, v.jsx)(X, {
							text: q
						}) : T ? 'Delete "'.concat(q, '"?') : q, (!D || !r) && (
							0, v.jsx)(eI, {
							$active: r
						})]
					}), T && (0, v.jsxs)(eZ, {
						$active: !0,
						children: [(0, v.jsx)(eD, {
							onClick: B,
							children: (0, v.jsx)(et.ZP, {
								icon: z.UgA
							})
						}), (0, v.jsx)(eD, {
							onClick: function() {
								N(!1)
							},
							children: (0, v.jsx)(et.ZP, {
								icon: z.q5L
							})
						})]
					}), r && !T && (0, v.jsxs)(eZ, {
						$active: r,
						children: [(0, v.jsx)(eD, {
							onClick: function(e) {
								e.preventDefault(), j(!0)
							},
							children: (0, v.jsx)(et.ZP, {
								icon: z.Nte
							})
						}), E && (0, v.jsx)(eD, {
							onClick: function(e) {
								e.preventDefault(), c()
							},
							children: (0, v.jsx)(et.ZP, {
								icon: z.A8q
							})
						}), (0, v.jsx)(eD, {
							onClick: function() {
								return N(!0)
							},
							children: (0, v.jsx)(et.ZP, {
								icon: z.Ybf
							})
						})]
					})]
				})
			}
			var eM = j.Z.a(eh(), function(e) {
					var n = e.$active,
						t = e.$sharing;
					return n && t ? "pr-[4.5rem]" : ""
				}, function(e) {
					var n = e.$active,
						t = e.$sharing;
					return n && !t ? "pr-14" : ""
				}, function(e) {
					return e.$active ? "bg-gray-800 hover:bg-gray-800" : "hover:pr-4 bg-gray-900"
				}),
				eT = j.Z.div(eg(), function(e) {
					return e.$active ? "pr-14 bg-gray-800 hover:bg-gray-800" : "bg-gray-900"
				}),
				eN = j.Z.input(em()),
				eP = j.Z.div(ep()),
				eS = j.Z.div(ev()),
				eI = j.Z.div(ex(), function(e) {
					return e.$active ? "from-gray-800" : "from-gray-900 group-hover:from-[#2A2B32]"
				}),
				eZ = j.Z.div(eb(), function(e) {
					return e.$active ? "visible" : "invisible group-hover:visible"
				}),
				eD = j.Z.button(ey()),
				eF = t(71209),
				eE = t(9849),
				eR = t(40638),
				eL = t(24760),
				eA = t(87316),
				eB = {
					isNavigationCollapsed: !1
				},
				eU = (0, M.ZP)()(function(e, n) {
					return (0, eF._)((0, h._)({}, eB), {
						toggleNavigation: function() {
							e({
								isNavigationCollapsed: !n().isNavigationCollapsed
							})
						}
					})
				}),
				eq = t(53086),
				eO = t(54887),
				ez = t.n(eO),
				eH = t(13002),
				eV = t(75515);

			function eG() {
				var e = (0, p._)(["relative p-1 ", " text-white flex items-center justify-center"]);
				return eG = function() {
					return e
				}, e
			}

			function eW() {
				var e = (0, p._)([
					"\n  absolute w-4 h-4 rounded-full text-[10px] text-white flex  justify-center items-center right-0 top-[20px] -mr-2 border border-white\n  ",
					"\n  ", "\n"
				]);
				return eW = function() {
					return e
				}, e
			}

			function eQ() {
				var e = (0, p._)([
					"bg-[#5436DA] text-white flex justify-center items-center relative tracking-widest"
				]);
				return eQ = function() {
					return e
				}, e
			}

			function e$() {
				var e = (0, p._)(["relative flex"]);
				return e$ = function() {
					return e
				}, e
			}
			var eJ = j.Z.div(eG(), function(e) {
					return e.$isMessageRedesign ? "rounded-full h-7 w-7" :
						"rounded-sm h-[30px] w-[30px]"
				}),
				eY = j.Z.span(eW(), function(e) {
					return "warning" === e.$type && "bg-orange-500 text-white"
				}, function(e) {
					return "danger" === e.$type && "bg-red-500 text-white"
				}),
				eK = function(e) {
					var n = e.iconName,
						t = e.background,
						r = e.notice,
						a = (0, k.hz)().has(Q.FZ),
						i = et.nI;
					switch (n) {
						case "globe":
							i = z.RsK;
							break;
						case "terminal":
							i = z.cDN;
							break;
						case "text":
							i = z.RUS;
							break;
						case "browsing":
							i = z.jRj;
							break;
						case "code":
							i = eH.oT$;
							break;
						case "plugin":
							i = z.yG
					}
					return (0, v.jsxs)(eJ, {
						$isMessageRedesign: a,
						style: {
							backgroundColor: t
						},
						children: [(0, v.jsx)(et.ZP, {
							icon: i,
							size: "medium",
							className: a ? "!h-5 !w-5" : ""
						}), r && (0, v.jsx)(eY, {
							$type: r,
							children: "!"
						})]
					})
				},
				eX = function(e) {
					var n = e.plugin,
						t = e.notice,
						r = (0, k.hz)().has(Q.FZ);
					return (0, v.jsxs)(eJ, {
						$isMessageRedesign: r,
						className: "p-0",
						children: [(0, v.jsx)(eV.Z, {
							url: n.manifest.logo_url,
							name: n.manifest.name_for_human,
							size: "100%"
						}), t && (0, v.jsx)(eY, {
							$type: t,
							children: "!"
						})]
					})
				},
				e0 = j.Z.div(eQ()),
				e1 = j.Z.div(e$()),
				e2 = {
					small: 20,
					redesign: 28,
					medium: 38
				},
				e3 = function(e) {
					var n, t = e.user,
						r = e.size,
						a = e.notice,
						i = a && (0, v.jsx)(eY, {
							$type: a,
							children: "!"
						}),
						o = (0, k.hz)().has(Q.FZ);
					if ((null == t ? void 0 : t.picture) != null) return (0, v.jsxs)(e1, {
						children: [(0, v.jsx)(ez(), {
							src: t.picture,
							alt: "User",
							width: e2[r],
							height: e2[r],
							className: o ? "rounded-full" : "rounded-sm"
						}), i]
					});
					var s = (null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : "").split(" ")
						.map(function(e) {
							return e[0]
						}).join("").toUpperCase();
					return (0, v.jsxs)(e0, {
						className: (0, Z.Z)("redesign" === r ? "h-7 w-7 text-xs" : "small" === r ?
							"h-5 w-5 text-xs" : "h-[30px] w-[30px] text-xs", o ?
							"rounded-full" : "rounded-sm"),
						children: [s || (0, v.jsx)(et.ZP, {
							icon: z.fzv,
							size: "redesign" === r ? "small" : r
						}), i]
					})
				};

			function e5(e) {
				var n = e.children;
				return (0, v.jsx)(eR.u, {
					as: y.Fragment,
					enter: "transition ease-out duration-200",
					enterFrom: "opacity-0 translate-y-1",
					enterTo: "opacity-100 translate-y-0",
					leave: "transition ease-in duration-150",
					leaveFrom: "opacity-100 translate-y-0",
					leaveTo: "opacity-0 translate-y-1",
					children: n
				})
			}
			var e4 = t(24396),
				e7 = t(2827),
				e8 = t(55041),
				e6 = (0, H.vU)({
					profilePlaceholder: {
						id: "profile.myprofile.placeholder",
						defaultMessage: "• Where I live: San Francisco\n• My native language is: English\n• What I do for work: Researcher at OpenAI\n• What I do for fun: Hiking, music, and cooking\n• Preferred communication style: concise, simple language\n• I'd like ChatGPT to be: a helpful assistant",
						description: "placeholder for my profile textarea"
					},
					save: {
						id: "profile.myprofile.save",
						defaultMessage: "Save",
						description: "save button for my profile modal"
					},
					close: {
						id: "profile.myprofile.close",
						defaultMessage: "Close",
						description: "close button for my profile modal"
					},
					helpText: {
						id: "profile.myprofile.helptext",
						defaultMessage: "Add any information that you’d like ChatGPT to remember about you and your preferences.",
						description: "help text for my profile modal"
					},
					profileTitle: {
						id: "profile.myprofile.title",
						defaultMessage: "My Profile",
						description: "title for my profile modal"
					}
				}),
				e9 = (0, M.ZP)(function() {
					return {
						isProfileModalOpen: !1,
						userMessage: ""
					}
				}),
				ne = {
					setIsProfileModalOpen: function(e) {
						e9.setState({
							isProfileModalOpen: e
						})
					},
					setUserMessage: function(e) {
						e9.setState({
							userMessage: e
						})
					}
				};

			function nn() {
				var e = e9(),
					n = e.isProfileModalOpen,
					t = e.userMessage,
					r = (0, y.useCallback)(function() {
						ne.setIsProfileModalOpen(!1)
					}, []),
					a = (0, ei.kP)(),
					i = a.session,
					o = a.loading,
					s = (0, y.useCallback)(function() {
						W.ZP.createOrUpdateUserSystemMessage((null == i ? void 0 : i.accessToken) || "",
							t), ne.setIsProfileModalOpen(!1)
					}, [t, i]),
					l = (0, k.hz)();
				(0, e4.a)([null == i ? void 0 : i.accessToken], function() {
					return W.ZP.getUserSystemMessage((null == i ? void 0 : i.accessToken) || "")
				}, {
					enabled: !!(!o && (null == i ? void 0 : i.accessToken) && l.has("system_message2")),
					onSuccess: function(e) {
						(null == e ? void 0 : e.data) && ne.setUserMessage(e.data)
					},
					onError: function() {
						es.m.danger("Failed to get the profile")
					}
				});
				var u = (0, V.Z)();
				return (0, v.jsxs)(e8.ZP, {
					isOpen: n,
					onModalClose: function() {
						ne.setIsProfileModalOpen(!1)
					},
					type: "success",
					title: u.formatMessage(e6.profileTitle),
					closeButton: (0, v.jsx)(e8.ol, {
						onClose: r
					}),
					secondaryButton: (0, v.jsx)(e8.mH, {
						onClick: r,
						children: (0, v.jsx)(G.Z, (0, h._)({}, e6.close))
					}),
					primaryButton: (0, v.jsx)(e8.mH, {
						onClick: s,
						color: "primary",
						children: (0, v.jsx)(G.Z, (0, h._)({}, e6.save))
					}),
					children: [(0, v.jsx)("p", {
						className: "pb-4 pt-2 text-gray-600 dark:text-gray-200",
						children: (0, v.jsx)(G.Z, (0, h._)({}, e6.helpText))
					}), (0, v.jsx)(e7.ZP, {
						className: "w-full rounded border-gray-300 p-4 placeholder:text-gray-300  dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white",
						rows: 8,
						placeholder: u.formatMessage(e6.profilePlaceholder),
						value: t,
						onChange: function(e) {
							return ne.setUserMessage(e.target.value)
						}
					})]
				})
			}
			var nt = t(40394),
				nr = t(13451),
				na = t(86546),
				ni = t(21437),
				no = t(21722),
				ns = t(39889),
				nl = t(14412);

			function nu() {
				var e, n, t = (0, b.useRouter)(),
					r = (0, ei.kP)().session,
					a = (null == r ? void 0 : null === (e = r.user) || void 0 === e ? void 0 : e.idp) ===
					"auth0",
					i = !!(null == r ? void 0 : null === (n = r.user) || void 0 === n ? void 0 : n.mfa),
					o = (0, m._)((0, y.useState)(!1), 2),
					s = o[0],
					l = o[1],
					u = (0, y.useCallback)((0, no._)(function() {
						var e;
						return (0, ns.Jh)(this, function(n) {
							if (e = new URL(t.asPath, window.location.origin).toString(), !
								a) throw Error(
								"Only username/password users can enable MFA");
							if (!r) throw Error("No session found, cannot enable MFA");
							if ("mocked" === r.authProvider) throw Error(
								"Mock users can't enable MFA! Please setup Auth0 following the instructions in the README"
								);
							return (0, nl.signIn)(r.authProvider, {
								callbackUrl: e
							}, {
								prompt: "login",
								oai_enforce_mfa: "true"
							}), [2]
						})
					}), [t.asPath, r, a]),
					c = (0, y.useCallback)((0, no._)(function() {
						var e;
						return (0, ns.Jh)(this, function(n) {
							switch (n.label) {
								case 0:
									if (!a) throw Error(
										"Only username/password users can disable MFA"
										);
									if (!r) throw Error(
										"No session found, cannot enable MFA");
									if ("mocked" === r.authProvider) throw Error(
										"Mock users can't enable MFA! Please setup Auth0 following the instructions in the README"
										);
									return l(!0), [4, W.ZP.deleteMfa()];
								case 1:
									return n.sent(), [4, (0, nl.signOut)({
										redirect: !1,
										callbackUrl: "/auth/login?next=".concat(
											encodeURIComponent(t.asPath))
									})];
								case 2:
									return e = n.sent(), l(!1), t.push(e.url), [2]
							}
						})
					}), [a, t, r]);
				return {
					setupMfa: u,
					isUsernamePassword: a,
					isLoggedInWithMfa: i,
					removeMfa: c,
					isLoading: s
				}
			}

			function nc() {
				var e = (0, p._)(["absolute right-0 top-1/2 -translate-y-1/2"]);
				return nc = function() {
					return e
				}, e
			}
			var nd = y.forwardRef(function(e, n) {
					var t = e.name,
						r = e.placeholder,
						a = e.type,
						i = e.displayName,
						o = e.onChange,
						s = e.onBlur,
						l = e.value,
						u = e.saveOnBlur,
						c = e.icon,
						d = e.onInputIconClick,
						f = e.className,
						g = e.autoComplete,
						p = e.autoFocus,
						x = e.onPressEnter,
						b = (0, m._)((0, y.useState)(l), 2),
						j = b[0],
						w = b[1],
						C = (0, y.useCallback)(function(e) {
							null == s || s(e), u && w(e.target.value)
						}, [s, u]),
						k = (0, y.useCallback)(function(e) {
							null == o || o(e), u && w(e.target.value)
						}, [o, u]),
						_ = (0, y.useCallback)(function(e) {
							"Enter" === e.key && x && (e.preventDefault(), x())
						}, [x]);
					(0, y.useEffect)(function() {
						w(l)
					}, [l]);
					var M = (0, h._)({}, u ? {} : {
						value: l
					}, u ? {
						value: j
					} : {});
					return (0, v.jsxs)("div", {
						className: (0, Z.Z)(
							"rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 dark:bg-gray-700",
							f),
						children: [(0, v.jsx)("label", {
							htmlFor: t,
							className: "block text-xs font-medium text-gray-900 dark:text-gray-100",
							children: i
						}), (0, v.jsxs)("div", {
							className: (0, Z.Z)(i && "mt-1", "relative"),
							children: [(0, v.jsx)("input", (0, h._)({
								ref: n,
								type: a,
								name: t,
								id: t,
								className: (0, Z.Z)(
									"block w-full border-0 p-0 text-gray-900 placeholder-gray-500 outline-none focus:ring-0 dark:bg-gray-700 dark:text-gray-100 sm:text-sm",
									c && "pr-6"),
								placeholder: r,
								onBlur: C,
								onChange: k,
								onKeyDown: _,
								autoComplete: g,
								autoFocus: p
							}, M)), c && (0, v.jsx)(nf, {
								onClick: d,
								children: (0, v.jsx)(et.ZP, {
									icon: c
								})
							})]
						})]
					})
				}),
				nf = j.Z.button(nc()),
				nh = t(84569);

			function ng(e) {
				var n = e.onChange,
					t = e.enabled,
					r = e.label,
					a = e.disabled,
					i = (0, y.useCallback)(function() {
						n(!t)
					}, [t, n]);
				return (0, v.jsx)(nh.fC, {
					checked: t,
					disabled: a,
					onCheckedChange: i,
					"aria-label": r,
					className: (0, Z.Z)(a && "cursor-not-allowed opacity-30",
						"bg-gray-200 radix-state-checked:bg-green-600",
						"relative h-[25px] w-[42px] cursor-pointer rounded-full"),
					children: (0, v.jsx)(nh.bU, {
						className: (0, Z.Z)("block h-[21px] w-[21px] rounded-full",
							"translate-x-0.5 transition-transform duration-100 will-change-transform radix-state-checked:translate-x-[19px]",
							"bg-white shadow-[0_1px_2px_rgba(0,0,0,0.45)]")
					})
				})
			}

			function nm() {
				var e = (0, p._)(["block text-sm font-medium mb-1"]);
				return nm = function() {
					return e
				}, e
			}
			var np = (0, H.vU)({
				settings: {
					id: "settingsModal.settings",
					defaultMessage: "Settings",
					description: "Title for the settings modal"
				},
				theme: {
					id: "settingsModal.theme",
					defaultMessage: "Theme",
					description: "Label for the theme setting"
				},
				system: {
					id: "settingsModal.system",
					defaultMessage: "System",
					description: "Option for the system theme"
				},
				dark: {
					id: "settingsModal.dark",
					defaultMessage: "Dark",
					description: "Option for the dark theme"
				},
				light: {
					id: "settingsModal.light",
					defaultMessage: "Light",
					description: "Option for the light theme"
				},
				exportData: {
					id: "settingsModal.exportData",
					defaultMessage: "Export data",
					description: "Label for the export data button"
				},
				exportButton: {
					id: "settingsModal.exportButton",
					defaultMessage: "Export",
					description: "Export data button"
				},
				deleteAccount: {
					id: "settingsModal.deleteAccount",
					defaultMessage: "Delete account",
					description: "Label for the delete account button"
				},
				deleteAccountButton: {
					id: "settingsModal.deleteButton",
					defaultMessage: "Delete",
					description: "Delete account button"
				},
				openPluginDevtools: {
					id: "settingsModal.openPluginDevtools",
					defaultMessage: "Open plugin devtools",
					description: "Label for the open plugin devtools setting"
				},
				enable2fa: {
					id: "settingsModal.enable2fa",
					defaultMessage: "Enable two-factor authentication",
					description: "Label for the enable 2FA button"
				},
				enable: {
					id: "settingsModal.enable",
					defaultMessage: "Enable",
					description: "Enable 2FA button"
				},
				disable: {
					id: "settingsModal.disable",
					defaultMessage: "Disable",
					description: "Disable 2FA button"
				},
				disable2fa: {
					id: "settingsModal.disable2fa",
					defaultMessage: "Disable two factor authentication",
					description: "Label for the mfa remove button."
				},
				chatHistoryDescription: {
					id: "settingsModal.chatHistoryDescription",
					defaultMessage: "Save new chats to your history and allow them to be used to improve ChatGPT via model training. Unsaved chats will be deleted from our systems within 30 days. <link>Learn more</link>",
					description: "Description for the chat history setting"
				},
				dataExportRequested: {
					id: "settingsModal.dataExportRequested",
					defaultMessage: "Successfully exported data. You should receive an email shortly with your data.",
					description: "Message shown when a data export request is received"
				},
				dataExportFailed: {
					id: "settingsModal.dataExportFailed",
					defaultMessage: "We were unable to process your export at this time. Please try again later.",
					description: "Message shown when a data export request fails"
				},
				dataExportModalTitle: {
					id: "settingsModal.dataExportModalTitle",
					defaultMessage: "Request data export - are you sure?",
					description: "Title for the data export modal"
				},
				dataExportModalConfirm: {
					id: "settingsModal.dataExportModalConfirm",
					defaultMessage: "Confirm export",
					description: "Confirm button for the data export modal"
				},
				dataExportModalCancel: {
					id: "settingsModal.dataExportModalCancel",
					defaultMessage: "Cancel",
					description: "Cancel button for the data export modal"
				},
				dataExportModalDescription1: {
					id: "settingsModal.dataExportModalDescription1",
					defaultMessage: "Your account details and conversations will be included in the export.",
					description: "Description for the data export modal"
				},
				dataExportModalDescription2: {
					id: "settingsModal.dataExportModalDescription2",
					defaultMessage: "The data will be sent to your registered email in a downloadable file.",
					description: "Description for the data export modal"
				},
				dataExportModalDescription3: {
					id: "settingsModal.dataExportModalDescription3",
					defaultMessage: "Processing may take some time. You'll be notified when it's ready.",
					description: "Description for the data export modal"
				},
				dataExportModalDescription4: {
					id: "settingsModal.dataExportModalDescription4",
					defaultMessage: 'To proceed, click "Confirm export" below.',
					description: "Description for the data export modal"
				},
				deleteAccountSessionTooOld: {
					id: "settingsModal.deleteAccountSessionTooOld",
					defaultMessage: "Your login session is too old. Please log in again before deleting your account.",
					description: "Message shown when the user's login session is too old to delete their account."
				},
				deleteAccountFailed: {
					id: "settingsModal.deleteAccountFailed",
					defaultMessage: "Failed to delete account. Please try again later.",
					description: "Message shown when there's an error deleting the user's account."
				},
				deleteAccountTitle: {
					id: "settingsModal.deleteAccountTitle",
					defaultMessage: "Delete account - are you sure?",
					description: "Title for the delete account confirmation modal."
				},
				deleteAccountWarning: {
					id: "settingsModal.deleteAccountWarning",
					defaultMessage: "Deleting your account is permanent and cannot be undone.",
					description: "Warning message about account deletion being permanent."
				},
				reuseEmailPhoneWarning: {
					id: "settingsModal.reuseEmailPhoneWarning",
					defaultMessage: "For security reasons, you cannot reuse the same email or phone number for a new account.",
					description: "Warning message about not being able to reuse email or phone number for a new account."
				},
				dataRemovalWarning: {
					id: "settingsModal.dataRemovalWarning",
					defaultMessage: "All your data, including profile, conversations, and API usage, will be removed.",
					description: "Warning message about data removal after account deletion."
				},
				apiAccessDeletionWarning: {
					id: "settingsModal.apiAccessDeletionWarning",
					defaultMessage: "If you've been using ChatGPT with the API, this access will also be deleted.",
					description: "Warning message about API access being deleted."
				},
				typeEmailLabel: {
					id: "settingsModal.typeEmailLabel",
					defaultMessage: "Please type your account email.",
					description: "Label for email input field when deleting an account."
				},
				typeDeleteInputLabel: {
					id: "settingsModal.typeDeleteInputLabel",
					defaultMessage: 'To proceed, type "DELETE" in the input field below.',
					description: "Label for DELETE input field when deleting an account."
				},
				lockedButtonLabel: {
					id: "settingsModal.lockedButtonLabel",
					defaultMessage: "Locked",
					description: "Label for the locked button when deleting an account."
				},
				deleteAccountButtonLabel: {
					id: "settingsModal.deleteAccountButtonLabel",
					defaultMessage: "Permanently delete my account",
					description: "Label for the button to confirm account deletion."
				},
				recentLoginMessage: {
					id: "settingsModal.recentLoginMessage",
					defaultMessage: "You may only delete your account if you have logged in within the last 10 minutes. Please log in again, then return here to continue.",
					description: "Message shown when the user needs to log in again to delete their account."
				},
				refreshLoginButtonLabel: {
					id: "settingsModal.refreshLoginButtonLabel",
					defaultMessage: "Refresh login",
					description: "Label for the button to refresh login."
				},
				dataControlsLabel: {
					id: "settingsModal.dataControlsLabel",
					defaultMessage: "Data Controls",
					description: "Label for the data controls section."
				},
				hideLabel: {
					id: "settingsModal.hideLabel",
					defaultMessage: "Hide",
					description: "Label for the hide button."
				},
				showLabel: {
					id: "settingsModal.showLabel",
					defaultMessage: "Show",
					description: "Label for the show button."
				},
				chatHistoryToggleLabel: {
					id: "settingsModal.chatHistoryToggleLabel",
					defaultMessage: "Chat History & Training",
					description: "Label for the chat history toggle."
				},
				dataControlsTab: {
					id: "settingsModal.dataControls",
					defaultMessage: "Data controls",
					description: "Label for the data controls tab"
				},
				betaIntro: {
					id: "settingsModal.betaIntro",
					defaultMessage: "As a Plus user, enjoy early access to experimental new features, which may change during development.",
					description: "Introduction for the beta features tab"
				},
				betaSettingsUpdateFailed: {
					id: "settingsModal.betaSettingsUpdateFailed",
					defaultMessage: "Failed to update your beta setting",
					description: "Message shown when there's an error updating beta settings"
				},
				betaPluginToggleLabel: {
					id: "settingsModal.betaPluginToggleLabel",
					defaultMessage: "Plugins",
					description: "Label for the Plugins beta toggle."
				},
				betaPluginToggleDescription: {
					id: "settingsModal.betaPluginToggleDescription",
					defaultMessage: "Try a version of ChatGPT that knows when and how to use third-party plugins that you enable.",
					description: "Description for the Plugins beta toggle."
				},
				betaBrowsingToggleLabel: {
					id: "settingsModal.betaBrowsingToggleLabel",
					defaultMessage: "Web browsing",
					description: "Label for the Browsing beta toggle."
				},
				betaBrowsingToggleDescription: {
					id: "settingsModal.betaBrowsingToggleDescription",
					defaultMessage: "Try a version of ChatGPT that knows when and how to browse the internet to answer questions about recent topics and events.",
					description: "Description for the Browsing beta toggle."
				},
				betaCodeInterpreterToggleLabel: {
					id: "settingsModal.betaCodeInterpreterToggleLabel",
					defaultMessage: "Code interpreter",
					description: "Label for the Code interpreter beta toggle."
				},
				betaCodeInterpreterToggleDescription: {
					id: "settingsModal.betaCodeInterpreterToggleDescription",
					defaultMessage: "Your favorite GPT models now use a python sandbox. Once enabled, ChatGPT can build and run python code.",
					description: "Description for the Code interpreter beta toggle."
				},
				generalTab: {
					id: "settingsModal.general",
					defaultMessage: "General",
					description: "Label for the general tab"
				},
				betaTab: {
					id: "settingsModal.beta",
					defaultMessage: "Beta features",
					description: "Label for the Beta Features tab"
				},
				clearChatLabel: {
					id: "settingsModal.clearChatLabel",
					defaultMessage: "Clear all chats",
					description: "Label for the clear chat button"
				},
				clearChatButton: {
					id: "settingsModal.clearChatButton",
					defaultMessage: "Clear",
					description: "Clear chat button"
				}
			});

			function nv(e) {
				var n, t, r = e.onClose,
					a = e.onToggleHistoryDisabled,
					i = e.onDeleteHistory,
					o = (0, V.Z)(),
					s = ec().conversations.length > 0,
					u = (0, $.H8)(),
					c = (0, m._)((0, y.useState)(!1), 2),
					d = c[0],
					f = c[1],
					g = (0, m._)((0, y.useState)(!1), 2),
					p = g[0],
					x = g[1],
					b = (0, m._)((0, y.useState)(l.General), 2),
					j = b[0],
					w = b[1],
					C = (0, y.useContext)(I.QL),
					_ = C.historyDisabled,
					M = C.toggleHistoryDisabled,
					T = (0, k.hz)(),
					N = T.has("data_export_enabled"),
					P = T.has("data_deletion_enabled"),
					S = (0, ei.kP)().session,
					D = (0, ni.Fl)(),
					F = D.isBetaFeaturesUiEnabled,
					E = D.isPluginsAvailable,
					R = D.isBrowsingAvailable,
					L = D.isCodeInterpreterAvailable,
					A = (0, y.useCallback)(function() {
						f(!1)
					}, []),
					B = (0, y.useCallback)(function() {
						x(!1)
					}, []),
					U = (0, y.useCallback)(function() {
						f(!0)
					}, []),
					q = (0, y.useCallback)(function() {
						x(!0)
					}, []),
					O = (0, y.useCallback)(function() {
						a(), M()
					}, [a, M]),
					z = nu(),
					H = z.setupMfa,
					W = z.isUsernamePassword,
					Q = z.removeMfa;
				return d ? (0, v.jsx)(nw, {
					onClose: A
				}) : p ? (0, v.jsx)(nM, {
					onClose: B
				}) : (0, v.jsx)(e8.ZP, {
					size: "custom",
					isOpen: !0,
					onModalClose: r,
					className: "md:w-[680px]",
					type: "success",
					title: o.formatMessage(np.settings),
					closeButton: (0, v.jsx)(e8.ol, {
						onClose: r
					}),
					children: (0, v.jsxs)(nt.fC, {
						className: "flex flex-col gap-6 md:flex-row",
						defaultValue: j,
						orientation: u ? "vertical" : void 0,
						onValueChange: function(e) {
							w(e)
						},
						children: [(0, v.jsxs)(nt.aV, {
							className: (0, Z.Z)(
								"-ml-[8px] flex min-w-[180px] flex-shrink-0",
								u ? "flex-col" :
								"flex-row rounded-lg bg-gray-100 p-1 dark:bg-gray-800/30"
								),
							children: [(0, v.jsx)(nC, {
								value: l.General,
								icon: eH.oq2,
								label: (0, v.jsx)(G.Z, (0, h._)({},
									np.generalTab))
							}), F && (R || E || L) && (0, v.jsx)(nC, {
								value: l.BetaFeatures,
								icon: eH.rTN,
								label: (0, v.jsx)(G.Z, (0, h._)({},
									np.betaTab))
							}), (0, v.jsx)(nC, {
								value: l.DataControls,
								icon: eH.tQn,
								label: (0, v.jsx)(G.Z, (0, h._)({},
									np.dataControlsTab))
							})]
						}), (0, v.jsxs)(nk, {
							value: l.General,
							children: [(0, v.jsx)(n_, {
								children: (0, v.jsx)(nj, {})
							}), (0, v.jsx)(n_, {
								children: (0, v.jsx)(ny, {
									color: "danger",
									disabled: !s,
									label: o.formatMessage(
											np
											.clearChatLabel
											),
									buttonLabel: o
										.formatMessage(np
											.clearChatButton
											),
									onClick: i
								})
							})]
						}), (0, v.jsx)(nk, {
							value: l.BetaFeatures,
							children: (0, v.jsx)(nx, {})
						}), (0, v.jsxs)(nk, {
							value: l.DataControls,
							children: [(0, v.jsx)(n_, {
								children: (0, v.jsx)(nb, {
									label: o.formatMessage(
										np
										.chatHistoryToggleLabel
										),
									enabled: !_,
									onChange: O,
									description: (0, v.jsx)(
										G.Z, (0, eF._)((
											0, h._)
										({}, np
											.chatHistoryDescription
											), {
											values: {
												link: function(
													e
													) {
													return (0,
															v
															.jsx
															)
														("a", {
															href: "https://help.openai.com/en/articles/7730893 ",
															target: "_blank",
															className: "underline",
															rel: "noreferrer",
															children: e
														})
												}
											}
										}))
								})
							}), N && (0, v.jsx)(n_, {
								children: (0, v.jsx)(ny, {
									label: o.formatMessage(
										np.exportData),
									buttonLabel: o
										.formatMessage(np
											.exportButton),
									onClick: U
								})
							}), P && (0, v.jsx)(n_, {
								children: (0, v.jsx)(ny, {
									label: o.formatMessage(
										np.deleteAccount
										),
									buttonLabel: o
										.formatMessage(np
											.deleteAccountButton
											),
									color: "danger",
									onClick: q
								})
							}), !(null == S ? void 0 : null === (n = S
									.user) || void 0 === n ? void 0 : n
								.mfa) && W && (0, v.jsx)(n_, {
								children: (0, v.jsx)(ny, {
									label: o.formatMessage(
										np.enable2fa),
									buttonLabel: o
										.formatMessage(np
											.enable),
									onClick: H
								})
							}), (null == S ? void 0 : null === (t = S
									.user) || void 0 === t ? void 0 : t
								.mfa) && W && (0, v.jsx)(n_, {
								children: (0, v.jsx)(ny, {
									label: o.formatMessage(
										np.disable2fa),
									buttonLabel: o
										.formatMessage(np
											.disable),
									onClick: Q,
									color: "danger"
								})
							})]
						})]
					})
				})
			}

			function nx() {
				var e, n = (0, V.Z)(),
					t = (0, ei.kP)().session,
					r = (0, ni.N2)(),
					a = (0, ni.Fl)(),
					i = a.isBrowsingAvailable,
					o = a.isBrowsingEnabled,
					s = a.isPluginsAvailable,
					l = a.isPluginsEnabled,
					u = a.isCodeInterpreterAvailable,
					c = a.isCodeInterpreterEnabled,
					d = (0, nr.D)({
						mutationFn: function(n) {
							var r = n.feature,
								a = n.enabled;
							return W.ZP.setUserSettingsBetaFeature(null !== (e = null == t ?
								void 0 : t.accessToken) && void 0 !== e ? e : "", r, a)
						},
						onSettled: r,
						onError: function() {
							es.m.danger(n.formatMessage(np.betaSettingsUpdateFailed))
						}
					}),
					f = d.isLoading,
					g = d.variables,
					m = d.mutate,
					p = f && (null == g ? void 0 : g.feature) === ni.tr.BROWSING,
					x = f && (null == g ? void 0 : g.feature) === ni.tr.CODE_INTERPRETER,
					b = f && (null == g ? void 0 : g.feature) === ni.tr.PLUGINS;
				return (0, v.jsxs)(v.Fragment, {
					children: [(0, v.jsx)(n_, {
						children: (0, v.jsx)("p", {
							children: (0, v.jsx)(G.Z, (0, h._)({}, np
								.betaIntro))
						})
					}), i && (0, v.jsx)(n_, {
						children: (0, v.jsx)(nb, {
							label: n.formatMessage(np.betaBrowsingToggleLabel),
							disabled: p,
							enabled: p ? null == g ? void 0 : g.enabled : o,
							onChange: function(e) {
								m({
									feature: ni.tr.BROWSING,
									enabled: e
								})
							},
							description: (0, v.jsx)(G.Z, (0, h._)({}, np
								.betaBrowsingToggleDescription))
						})
					}), s && (0, v.jsx)(n_, {
						children: (0, v.jsx)(nb, {
							label: n.formatMessage(np.betaPluginToggleLabel),
							disabled: b,
							enabled: b ? null == g ? void 0 : g.enabled : l,
							onChange: function(e) {
								m({
									feature: ni.tr.PLUGINS,
									enabled: e
								})
							},
							description: (0, v.jsx)(G.Z, (0, h._)({}, np
								.betaPluginToggleDescription))
						})
					}), u && (0, v.jsx)(n_, {
						children: (0, v.jsx)(nb, {
							label: n.formatMessage(np
								.betaCodeInterpreterToggleLabel),
							disabled: x,
							enabled: x ? null == g ? void 0 : g.enabled : c,
							onChange: function(e) {
								m({
									feature: ni.tr.CODE_INTERPRETER,
									enabled: e
								})
							},
							description: (0, v.jsx)(G.Z, (0, h._)({}, np
								.betaCodeInterpreterToggleDescription))
						})
					})]
				})
			}

			function nb(e) {
				var n = e.label,
					t = e.disabled,
					r = e.enabled,
					a = e.onChange,
					i = e.description;
				return (0, v.jsxs)(v.Fragment, {
					children: [(0, v.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [(0, v.jsx)("div", {
							children: n
						}), (0, v.jsx)(ng, {
							disabled: t,
							enabled: r,
							onChange: a,
							label: n
						})]
					}), null != i && (0, v.jsx)("div", {
						className: "mt-2 text-xs text-gray-500 dark:text-gray-600",
						children: i
					})]
				})
			}

			function ny(e) {
				var n = e.color,
					t = e.disabled,
					r = e.label,
					a = e.buttonLabel,
					i = e.onClick;
				return (0, v.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [(0, v.jsx)("div", {
						children: r
					}), (0, v.jsx)(en.z, {
						color: void 0 === n ? "neutral" : n,
						disabled: !!t,
						onClick: i,
						children: a
					})]
				})
			}

			function nj() {
				var e = (0, na.F)(),
					n = e.theme,
					t = e.setTheme;
				return (0, v.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [(0, v.jsx)("div", {
						children: (0, v.jsx)(G.Z, (0, h._)({}, np.theme))
					}), (0, v.jsxs)("select", {
						value: n,
						onChange: function(e) {
							t(e.target.value)
						},
						className: "rounded border border-black/10 bg-transparent text-sm dark:border-white/20",
						children: [(0, v.jsx)("option", {
							value: "system",
							children: (0, v.jsx)(G.Z, (0, h._)({}, np
								.system))
						}), (0, v.jsx)("option", {
							value: "dark",
							children: (0, v.jsx)(G.Z, (0, h._)({}, np.dark))
						}), (0, v.jsx)("option", {
							value: "light",
							children: (0, v.jsx)(G.Z, (0, h._)({}, np
								.light))
						})]
					})]
				})
			}

			function nw(e) {
				var n = e.onClose,
					t = (0, V.Z)(),
					r = (0, ei.kP)().session,
					a = null == r ? void 0 : r.accessToken,
					i = (0, y.useCallback)(function() {
						try {
							W.ZP.submitDataExport(a).then(function() {
								es.m.success(t.formatMessage(np.dataExportRequested)), n()
							})
						} catch (e) {
							es.m.warning(t.formatMessage(np.dataExportFailed), {
								hasCloseButton: !0
							})
						}
					}, [a, t, n]);
				return (0, v.jsx)(e8.ZP, {
					isOpen: !0,
					onModalClose: n,
					type: "success",
					title: t.formatMessage(np.dataExportModalTitle),
					primaryButton: (0, v.jsx)(e8.mH, {
						title: t.formatMessage(np.dataExportModalConfirm),
						color: "primary",
						onClick: i
					}),
					secondaryButton: (0, v.jsx)(e8.mH, {
						title: t.formatMessage(np.dataExportModalCancel),
						color: "neutral",
						onClick: n
					}),
					children: (0, v.jsxs)("div", {
						className: "text-sm",
						children: [(0, v.jsxs)("ul", {
							className: "my-3 flex list-disc flex-col gap-1 pl-3",
							children: [(0, v.jsx)("li", {
								children: (0, v.jsx)(G.Z, (0, h._)
								({}, np
									.dataExportModalDescription1
									))
							}), (0, v.jsx)("li", {
								children: (0, v.jsx)(G.Z, (0, h._)
								({}, np
									.dataExportModalDescription2
									))
							}), (0, v.jsx)("li", {
								children: (0, v.jsx)(G.Z, (0, h._)
								({}, np
									.dataExportModalDescription3
									))
							})]
						}), (0, v.jsx)("div", {
							children: (0, v.jsx)(G.Z, (0, h._)({}, np
								.dataExportModalDescription4))
						})]
					})
				})
			}

			function nC(e) {
				var n = e.value,
					t = e.icon,
					r = e.label,
					a = (0, $.H8)();
				return (0, v.jsxs)(nt.xz, {
					className: (0, Z.Z)(
						"group flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm radix-state-active:bg-gray-800 radix-state-active:text-white dark:text-gray-500 dark:radix-state-active:text-white", {
							"flex-1 items-center justify-center": !a
						}),
					value: n,
					children: [(0, v.jsx)(et.ZP, {
						icon: t,
						strokeWidth: 0,
						className: "h-5 w-5 fill-gray-800 group-radix-state-active:fill-white dark:fill-gray-500"
					}), (0, v.jsx)("div", {
						children: r
					})]
				})
			}

			function nk(e) {
				var n = e.value,
					t = e.children;
				return (0, v.jsx)(nt.VY, {
					className: "w-full md:min-h-[300px]",
					value: n,
					children: (0, v.jsx)("div", {
						className: "flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300",
						children: t
					})
				})
			}

			function n_(e) {
				var n = e.children;
				return (0, v.jsx)("div", {
					className: "border-b pb-3 last-of-type:border-b-0 dark:border-gray-700",
					children: n
				})
			}

			function nM(e) {
				var n, t = e.onClose,
					r = (0, V.Z)(),
					a = (0, ei.kP)().session,
					i = null == a ? void 0 : a.accessToken,
					o = null == a ? void 0 : null === (n = a.user) || void 0 === n ? void 0 : n.email,
					s = (0, m._)((0, y.useState)(""), 2),
					l = s[0],
					u = s[1],
					c = (0, m._)((0, y.useState)(""), 2),
					d = c[0],
					f = c[1],
					g = (0, y.useCallback)(function() {
						var e, n = null == a ? void 0 : null === (e = a.user) || void 0 === e ? void 0 :
							e.iat;
						return void 0 === n || Date.now() / 1e3 - n < 600
					}, [a]),
					p = (0, y.useCallback)(function() {
						try {
							g() ? W.ZP.deactivateAccount(i).then(function() {
								(0, ei.w7)()
							}) : es.m.warning(r.formatMessage(np.deleteAccountSessionTooOld), {
								hasCloseButton: !0
							})
						} catch (e) {
							es.m.warning(r.formatMessage(np.deleteAccountFailed), {
								hasCloseButton: !0
							})
						}
					}, [i, r, g]),
					x = (0, y.useCallback)(function() {
						(0, ei.w7)()
					}, []),
					b = "DELETE" === d && (void 0 === o || l === o),
					j = (0, m._)((0, y.useState)(function() {
						return g()
					}), 1)[0];
				return (0, v.jsx)(e8.ZP, {
					isOpen: !0,
					onModalClose: t,
					type: "success",
					title: r.formatMessage(np.deleteAccountTitle),
					closeButton: (0, v.jsx)(e8.ol, {
						onClose: t
					}),
					children: (0, v.jsxs)("div", {
						className: "text-sm",
						children: [(0, v.jsxs)("ul", {
							className: "mb-6 mt-4 flex list-disc flex-col gap-1 pl-3",
							children: [(0, v.jsx)("li", {
								children: (0, v.jsx)(G.Z, (0, h._)
								({}, np.deleteAccountWarning
									))
							}), (0, v.jsx)("li", {
								children: (0, v.jsx)(G.Z, (0, h._)
									({}, np
										.reuseEmailPhoneWarning
										))
							}), (0, v.jsx)("li", {
								children: (0, v.jsx)(G.Z, (0, h._)
								({}, np.dataRemovalWarning))
							}), (0, v.jsx)("li", {
								children: (0, v.jsx)(G.Z, (0, h._)
								({}, np
									.apiAccessDeletionWarning
									))
							})]
						}), j ? (0, v.jsxs)(v.Fragment, {
							children: [void 0 !== o ? (0, v.jsxs)("div", {
								className: "mb-4",
								children: [(0, v.jsx)(nT, {
									children: (0, v.jsx)
										(G.Z, (0, h._)
										({}, np
											.typeEmailLabel
											))
								}), (0, v.jsx)(nd, {
									value: l,
									placeholder: o,
									name: "email",
									onChange: function(
										e) {
										u(e.target
											.value
											)
									}
								})]
							}) : null, (0, v.jsxs)("div", {
								className: "mb-4",
								children: [(0, v.jsx)(nT, {
									children: (0, v.jsx)
										(G.Z, (0, h._)
										({}, np
											.typeDeleteInputLabel
											))
								}), (0, v.jsx)(nd, {
									value: d,
									onChange: function(
										e) {
										f(e.target
											.value
											)
									},
									name: "delete",
									className: "mb-4"
								})]
							}), (0, v.jsx)(en.z, {
								color: b ? "danger" : "disabled",
								onClick: p,
								disabled: !b,
								className: "w-full",
								children: b ? (0, v.jsxs)(v
									.Fragment, {
										children: [(0, v.jsx)(et
											.ZP, {
												icon: z
													.BJv
											}), " ", (0,
											v.jsx)(G.Z,
											(0, h._)({},
												np
												.deleteAccountButtonLabel
												))]
									}) : (0, v.jsxs)(v
								.Fragment, {
									children: [(0, v.jsx)(et
										.ZP, {
											icon: z
												.UIZ
										}), " ", (0,
										v.jsx)(G.Z,
										(0, h._)({},
											np
											.lockedButtonLabel
											))]
								})
							})]
						}) : (0, v.jsxs)(v.Fragment, {
							children: [(0, v.jsx)("p", {
								className: "pb-4 text-xs text-gray-500",
								children: (0, v.jsx)(G.Z, (0, h._)
								({}, np.recentLoginMessage))
							}), (0, v.jsx)(en.z, {
								color: "primary",
								onClick: x,
								className: "w-full",
								children: (0, v.jsx)(G.Z, (0, h._)
								({}, np
									.refreshLoginButtonLabel
									))
							})]
						})]
					})
				})
			}(r = l || (l = {})).General = "General", r.BetaFeatures = "BetaFeatures", r.DataControls =
				"DataControls";
			var nT = j.Z.label(nm());

			function nN() {
				var e = (0, p._)([
					"flex py-3 px-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm"
				]);
				return nN = function() {
					return e
				}, e
			}

			function nP() {
				var e = (0, p._)(["", ""]);
				return nP = function() {
					return e
				}, e
			}

			function nS() {
				var e = (0, p._)(["my-1.5 h-px bg-white/20"]);
				return nS = function() {
					return e
				}, e
			}

			function nI() {
				var e = (0, p._)(["rounded-md border border-white/20 hover:bg-gray-500/10"]);
				return nI = function() {
					return e
				}, e
			}

			function nZ() {
				var e = (0, p._)(["flex-col flex-1 transition-opacity duration-500\n", "\n", ""]);
				return nZ = function() {
					return e
				}, e
			}
			var nD = (0, H.vU)({
					helpAndFaq: {
						id: "navigation.helpAndFaq",
						defaultMessage: "Pandora On Github",
						description: "GitHub source menu item"
					},
					confirmClearConversations: {
						id: "navigation.confirmClearConversations",
						defaultMessage: "Confirm clear conversations",
						description: "Confirmation text for clearing conversations"
					},
					clearConversations: {
						id: "navigation.clearConversations",
						defaultMessage: "Clear conversations",
						description: "Clear conversations menu item"
					},
					myPlan: {
						id: "navigation.myPlan",
						defaultMessage: "My plan",
						description: "My plan menu item"
					},
					myProfile: {
						id: "navigation.myProfile",
						defaultMessage: "My profile",
						description: "Profile menu item"
					},
					settings: {
						id: "navigation.settings",
						defaultMessage: "Settings",
						description: "Settings menu item"
					},
					logOut: {
						id: "navigation.logOut",
						defaultMessage: "Log out",
						description: "Log out menu item"
					},
					upgradeToPlus: {
						id: "navigation.upgradeToPlus",
						defaultMessage: "Upgrade to Plus",
						description: "Upgrade to Plus menu item"
					},
					newChat: {
						id: "navigation.newChat",
						defaultMessage: "New chat",
						description: "New chat button label"
					},
					clearChat: {
						id: "navigation.clearChat",
						defaultMessage: "Clear chat",
						description: "Clear chat button label"
					},
					chatHistoryOff: {
						id: "navigation.chatHistoryOff",
						defaultMessage: "Chat History is off.",
						description: "Text indicating that chat history is turned off"
					},
					chatHistoryOffDescription: {
						id: "navigation.chatHistoryOffDescription",
						defaultMessage: "Chats won’t be saved in your history or used for training our models to improve ChatGPT. Unsaved chats will be deleted from our systems within 30 days. {learnMore}",
						description: "Description for chat history being off"
					},
					learnMore: {
						id: "navigation.learnMore",
						defaultMessage: "Learn more",
						description: "Learn more link text"
					},
					enableChatHistory: {
						id: "navigation.enableChatHistory",
						defaultMessage: "Enable chat history",
						description: "Enable chat history button label"
					},
					closeSidebar: {
						id: "navigation.closeSidebar",
						defaultMessage: "Close sidebar",
						description: "Close sidebar button label"
					},
					openSidebar: {
						id: "navigation.openSidebar",
						defaultMessage: "Open sidebar",
						description: "Open sidebar button label"
					},
					newLabel: {
						id: "navigation.newLabel",
						defaultMessage: "NEW",
						description: "Label for new features or items"
					}
				}),
				nF = j.Z.a(nN()),
				nE = (0, j.Z)(nF)(nP(), function(e) {
					return e.$active ? "bg-gray-800" : "hover:bg-gray-800"
				});

			function nR(e) {
				var n = e.onClick,
					t = e.href,
					r = e.target,
					a = e.children;
				return (0, v.jsx)(eE.v.Item, {
					children: function(e) {
						var i = e.active;
						return (0, v.jsx)(nF, {
							as: void 0 !== t ? "a" : "button",
							onClick: n,
							href: t,
							target: r,
							className: (0, Z.Z)(i ? "bg-gray-700" :
								"hover:bg-gray-700"),
							children: a
						})
					}
				})
			}
			var nL = j.Z.div(nS()),
				nA = (0, j.Z)(nF)(nI()),
				nB = j.Z.div(nZ(), function(e) {
					return e.$disableScroll ? "overflow-y-hidden opacity-20 pointer-events-none" :
						"overflow-y-auto"
				}, function(e) {
					return e.$offsetScrollbar && "-mr-2"
				});

			function nU(e) {
				var n = e.showCustomerPortalMenuItem,
					t = e.onClickCustomerPortal,
					r = e.onClickSettings,
					a = e.onDeleteHistory,
					i = (0, w.WS)(),
					o = (0, m._)((0, y.useState)(!1), 2),
					s = o[0],
					l = o[1],
					u = (0, y.useCallback)(function() {
						l(!1), a()
					}, [a]),
					c = ec().conversations.length > 0,
					d = (0, k.hz)();
				return (0, v.jsxs)("nav", {
					children: [(0, v.jsxs)(nR, {
						as: "a",
						href: "https://github.com/pengzhile/pandora",
						target: "_blank",
						onClick: function() {
							i(C.s6.clickFaqLink)
						},
						children: [(0, v.jsx)(et.ZP, {
							icon: z.AlO
						}), (0, v.jsx)(G.Z, (0, h._)({}, nD.helpAndFaq))]
					}), (0, v.jsx)(nL, {}), c && (0, v.jsxs)(nR, {
						onClick: function(e) {
							s ? u() : (l(!0), e.preventDefault())
						},
						children: [(0, v.jsx)(et.ZP, {
							icon: s ? z.UgA : z.Ybf
						}), s ? (0, v.jsx)(G.Z, (0, h._)({}, nD
							.confirmClearConversations)) : (0, v.jsx)(G.Z, (0, h
							._)({}, nD.clearConversations))]
					}), n && t && (0, v.jsxs)(nR, {
						onClick: t,
						children: [(0, v.jsx)(et.ZP, {
							icon: z.fzv
						}), (0, v.jsx)(G.Z, (0, h._)({}, nD.myPlan))]
					}), d.has("system_message2") && (0, v.jsxs)(nR, {
						onClick: function() {
							return ne.setIsProfileModalOpen(!0)
						},
						children: [(0, v.jsx)(et.ZP, {
							icon: z.yK7
						}), (0, v.jsx)(G.Z, (0, h._)({}, nD.myProfile))]
					}), (0, v.jsxs)(nR, {
						onClick: r,
						children: [(0, v.jsx)(et.ZP, {
							icon: z.nbt
						}), (0, v.jsx)(G.Z, (0, h._)({}, nD.settings))]
					}), (0, v.jsx)(nL, {}), (0, v.jsxs)(nR, {
						onClick: function() {
							i(C.s6.clickLogOut, {
								eventSource: "mouse"
							}), (0, ei.w7)()
						},
						children: [(0, v.jsx)(et.ZP, {
							icon: z.xqh
						}), (0, v.jsx)(G.Z, (0, h._)({}, nD.logOut))]
					})]
				})
			}

			function nq(e) {
				var n, t = e.showCustomerPortalMenuItem,
					r = e.onClickCustomerPortal,
					a = e.onClickSettings,
					i = e.onDeleteHistory,
					o = (0, ei.kP)().session;
				return (0, v.jsxs)(eE.v, {
					as: "div",
					className: "group relative",
					children: [(0, v.jsxs)(eE.v.Button, {
						className: "flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800",
						children: [(0, v.jsx)("div", {
							className: "-ml-0.5 w-5 flex-shrink-0",
							children: null != o ? (0, v.jsx)(e3, {
								user: o.user,
								size: "small"
							}) : null
						}), (0, v.jsx)("div", {
							className: "grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-white",
							children: null == o ? void 0 : null === (n = o
								.user) || void 0 === n ? void 0 : n.name
						}), (0, v.jsx)(et.ZP, {
							icon: z.K9M,
							size: "small",
							className: "flex-shrink-0 text-gray-500"
						})]
					}), (0, v.jsx)(e5, {
						children: (0, v.jsx)(eE.v.Items, {
							className: "absolute bottom-full left-0 z-20 mb-2 w-full overflow-hidden rounded-md bg-[#050509] py-1.5 outline-none",
							children: (0, v.jsx)(nU, {
								showCustomerPortalMenuItem: t,
								onClickCustomerPortal: r,
								onClickSettings: a,
								onDeleteHistory: i
							})
						})
					})]
				})
			}
			var nO = eq.G.href;

			function nz(e) {
				var n = e.onClickAccountPayment,
					t = e.showAccountPaymentMenuItem,
					r = e.onClickCustomerPortal,
					a = e.showCustomerPortalMenuItem,
					i = e.onDeleteHistory,
					o = e.onNewThread,
					s = e.children,
					l = (0, k.hz)(),
					u = (0, y.useRef)(null),
					c = (0, m._)((0, y.useState)(!1), 2),
					d = c[0],
					f = c[1],
					g = (0, y.useContext)(I.QL),
					p = g.historyDisabled,
					x = g.toggleHistoryDisabled,
					b = g.getModifiedSettings,
					j = g.unsetModifiedSettings,
					w = b(),
					C = (0, m._)((0, y.useState)(w), 2),
					_ = C[0],
					M = C[1],
					T = (0, y.useCallback)(function() {
						M(!0)
					}, []),
					N = (0, y.useCallback)(function() {
						M(!1), j()
					}, [j]),
					P = (0, y.useCallback)(function() {
						o(), x()
					}, [o, x]),
					S = (0, y.useMemo)(function() {
						return (0, v.jsxs)("div", {
							className: (0, Z.Z)(
								"absolute left-0 top-14 z-20 overflow-hidden transition-all duration-500",
								p ? "visible max-h-72" : "invisible max-h-0"),
							children: [(0, v.jsxs)("div", {
								className: "bg-gray-900 px-4 py-3",
								children: [(0, v.jsx)("div", {
									className: "p-1 text-sm text-gray-100",
									children: (0, v.jsx)(G.Z, (0, h._)
									({}, nD.chatHistoryOff))
								}), (0, v.jsx)("div", {
									className: "p-1 text-xs text-gray-500",
									children: (0, v.jsx)(G.Z, (0, eF._)(
										(0, h._)({}, nD
											.chatHistoryOffDescription
											), {
											values: {
												learnMore: (0, v
													.jsx)(
													"a", {
														href: "https://help.openai.com/en/articles/7730893",
														target: "_blank",
														className: "underline",
														rel: "noreferrer",
														children: (
																0,
																v
																.jsx
																)
															(G.Z,
																(0, h
																	._
																	)
																({}, nD
																	.learnMore
																	)
																)
													})
											}
										}))
								}), (0, v.jsxs)(en.z, {
									className: "mt-4 w-full",
									onClick: P,
									color: "primary",
									size: "medium",
									children: [(0, v.jsx)(et.ZP, {
											icon: z.$IY
										}), (0, v.jsx)(G.Z, (0, h._)
											({}, nD
												.enableChatHistory)
											)]
								})]
							}), (0, v.jsx)("div", {
								className: "h-24 bg-gradient-to-t from-gray-900/0 to-gray-900"
							})]
						})
					}, [p, P]);
				(0, y.useEffect)(function() {
					if (u.current) {
						var e;
						f((e = u.current).scrollHeight > e.clientHeight || e.scrollWidth > e
							.clientWidth)
					}
				}, [s]);
				var D = !(0, k.nR)() && !l.has("disable_upgrade_ui");
				return (0, v.jsxs)(v.Fragment, {
					children: [(0, v.jsx)("div", {
						className: "scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20",
						children: (0, v.jsxs)("nav", {
							className: "flex h-full w-full flex-col p-2",
							children: [(0, v.jsxs)(nA, {
								onClick: o,
								className: "mb-1 flex-shrink-0",
								children: [(0, v.jsx)(et.ZP, {
									icon: p ? z.Bw1 : z
										.OvN
								}), (0, v.jsx)(G.Z, (0, h._)
									({}, p ? nD.clearChat :
										nD.newChat))]
							}), S, (0, v.jsx)(nB, {
								ref: u,
								$offsetScrollbar: d,
								$disableScroll: p,
								children: s
							}), (0, v.jsxs)("div", {
								className: "border-t border-white/20 pt-2",
								children: [t && (0, v.jsx)(nE, {
									onClick: n,
									className: "rounded-md",
									children: (0, v
										.jsxs)(
										"span", {
											className: "flex w-full flex-row justify-between",
											children: [
												(0, v
													.jsxs
													)
												("span", {
													className: "gold-new-button flex items-center gap-3",
													children: [
														(0, v
															.jsx
															)
														(et.ZP, {
															icon: z
																.fzv
														}),
														(0, v
															.jsx
															)
														(G.Z,
															(0, h
																._
																)
															({}, nD
																.upgradeToPlus
																)
															)
													]
												}),
												D &&
												(0, v
													.jsx
													)
												("span", {
													className: "rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800",
													children: (
															0,
															v
															.jsx
															)
														(G.Z,
															(0, h
																._
																)
															({}, nD
																.newLabel
																)
															)
												})
											]
										})
								}), (0, v.jsx)(nq, {
									showCustomerPortalMenuItem: a,
									onClickCustomerPortal: r,
									onClickSettings: T,
									onDeleteHistory: i
								})]
							})]
						})
					}), _ && (0, v.jsx)(nv, {
						onClose: N,
						onToggleHistoryDisabled: o,
						onDeleteHistory: i
					}), l.has("system_message2") && (0, v.jsx)(nn, {})]
				})
			}
			var nH = function(e) {
					var n = e.onClickAccountPayment,
						t = e.showAccountPaymentMenuItem,
						r = e.onClickCustomerPortal,
						a = e.showCustomerPortalMenuItem,
						i = e.onDeleteHistory,
						o = e.onNewThread,
						s = e.children;
					return (0, v.jsx)(v.Fragment, {
						children: (0, v.jsx)("div", {
							className: "flex h-full min-h-0 flex-col ",
							children: (0, v.jsx)(nz, {
								onClickAccountPayment: n,
								showAccountPaymentMenuItem: t,
								onClickCustomerPortal: r,
								showCustomerPortalMenuItem: a,
								onDeleteHistory: i,
								onNewThread: o,
								children: s
							})
						})
					})
				},
				nV = function(e) {
					var n = e.onClickAccountPayment,
						t = e.showAccountPaymentMenuItem,
						r = e.onClickCustomerPortal,
						a = e.showCustomerPortalMenuItem,
						i = e.onDeleteHistory,
						o = e.onClose,
						s = e.sidebarOpen,
						l = e.onNewThread,
						u = e.children;
					return (0, v.jsx)(eR.u.Root, {
						show: s,
						as: y.Fragment,
						children: (0, v.jsxs)(eL.V, {
							as: "div",
							className: "relative",
							onClose: o,
							children: [(0, v.jsx)(eR.u.Child, {
								as: y.Fragment,
								enter: "transition-opacity ease-linear duration-300",
								enterFrom: "opacity-0",
								enterTo: "opacity-100",
								leave: "transition-opacity ease-linear duration-300",
								leaveFrom: "opacity-100",
								leaveTo: "opacity-0",
								children: (0, v.jsx)("div", {
									className: "fixed inset-0 bg-gray-600 bg-opacity-75"
								})
							}), (0, v.jsxs)("div", {
								className: "fixed inset-0 flex",
								children: [(0, v.jsx)(eR.u.Child, {
									as: y.Fragment,
									enter: "transition ease-in-out duration-300 transform",
									enterFrom: "-translate-x-full",
									enterTo: "translate-x-0",
									leave: "transition ease-in-out duration-300 transform",
									leaveFrom: "translate-x-0",
									leaveTo: "-translate-x-full",
									children: (0, v.jsxs)(eL.V
										.Panel, {
											className: "relative flex w-full max-w-xs flex-1 flex-col bg-gray-900",
											children: [(0, v
												.jsx)(eR
												.u
												.Child, {
													as: y
														.Fragment,
													enter: "ease-in-out duration-300",
													enterFrom: "opacity-0",
													enterTo: "opacity-100",
													leave: "ease-in-out duration-300",
													leaveFrom: "opacity-100",
													leaveTo: "opacity-0",
													children: (
															0,
															v
															.jsx
															)
														("div", {
															className: "absolute right-0 top-0 -mr-12 pt-2",
															children: (
																	0,
																	v
																	.jsxs
																	)
																("button", {
																	type: "button",
																	className: "ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
																	onClick: o,
																	children: [
																		(0, v
																			.jsx
																			)
																		("span", {
																			className: "sr-only",
																			children: (
																					0,
																					v
																					.jsx
																					)
																				(G.Z,
																					(0, h
																						._
																						)
																					({}, nD
																						.closeSidebar
																						)
																					)
																		}),
																		(0, v
																			.jsx
																			)
																		(et.ZP, {
																			icon: z
																				.q5L,
																			size: "medium",
																			className: "text-white",
																			"aria-hidden": "true"
																		})
																	]
																})
														})
												}), (0,
												v.jsx)(
												nz, {
													onClickAccountPayment: n,
													showAccountPaymentMenuItem: t,
													onClickCustomerPortal: r,
													showCustomerPortalMenuItem: a,
													onDeleteHistory: i,
													onNewThread: l,
													children: u
												})]
										})
								}), (0, v.jsx)("div", {
									className: "w-14 flex-shrink-0"
								})]
							})]
						})
					})
				},
				nG = function(e) {
					var n = e.onClickOpenSidebar,
						t = e.onNewThread,
						r = e.title,
						a = e.newChatName,
						i = (0, m._)((0, y.useState)(), 2),
						o = i[0],
						s = i[1],
						l = (0, y.useContext)(I.QL),
						u = l.historyDisabled,
						c = l.toggleHistoryDisabled;
					return (0, y.useEffect)(function() {
						a !== o && s(a)
					}, [a, o]), (0, v.jsxs)("div", {
						className: "sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden",
						children: [(0, v.jsxs)("button", {
							type: "button",
							className: "-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white",
							onClick: n,
							children: [(0, v.jsx)("span", {
								className: "sr-only",
								children: (0, v.jsx)(G.Z, (0, h._)({}, nD
									.openSidebar))
							}), (0, v.jsx)(et.ZP, {
								icon: z.cur,
								"aria-hidden": "true",
								size: "medium"
							})]
						}), (0, v.jsx)("h1", {
							className: "flex-1 text-center text-base font-normal",
							children: u ? (0, v.jsxs)("div", {
								className: "flex cursor-pointer flex-row place-items-center items-center justify-center gap-3",
								onClick: c,
								children: [(0, v.jsx)(z.$IY, {}), (0, v.jsx)(G
									.Z, (0, h._)({}, nD
										.enableChatHistory))]
							}) : o && a ? (0, v.jsx)(X, {
								text: a
							}) : r || (0, v.jsx)(G.Z, (0, h._)({}, nD.newChat))
						}), (0, v.jsx)("button", {
							type: "button",
							className: "px-3",
							onClick: t,
							children: (0, v.jsx)(et.ZP, {
								icon: u ? z.Bw1 : z.OvN,
								size: "medium"
							})
						})]
					})
				};

			function nW(e) {
				var n = e.toggleNavigationSidebar,
					t = e.handleAccountPayment,
					r = e.handleClickCustomerPortal,
					a = e.handleResetThread,
					i = e.activeSidebar,
					o = e.isAccountPaid,
					s = e.children,
					l = (0, b.useRouter)(),
					u = (0, y.useRef)(null),
					c = (0, $.lj)(),
					d = (0, eA.g)(function(e) {
						return e.flags.isUserInCanPayGroup
					}),
					f = ed(),
					h = eU(function(e) {
						return e.isNavigationCollapsed
					}),
					g = !0 === o,
					m = (0, y.useCallback)(function() {
						W.ZP.deleteConversations().then(function() {
							f()
						}), a(), l.asPath !== nO && l.replace({
							pathname: nO
						})
					}, [a, f, l]);
				return c ? (0, v.jsx)(nV, {
					onClose: n,
					sidebarOpen: "navigation" === i,
					onClickAccountPayment: t,
					showAccountPaymentMenuItem: !1 === o && d,
					onClickCustomerPortal: r,
					showCustomerPortalMenuItem: g,
					onDeleteHistory: m,
					onNewThread: a,
					children: s
				}) : (0, v.jsx)(U.E.div, {
					className: "dark flex-shrink-0 overflow-x-hidden bg-gray-900",
					ref: u,
					initial: !1,
					animate: {
						width: h ? 0 : "260px",
						transition: {
							duration: .2,
							ease: "easeOut"
						}
					},
					onAnimationStart: function() {
						u.current && (u.current.style.visibility = "visible")
					},
					onAnimationComplete: function() {
						u.current && h && (u.current.style.visibility = "hidden")
					},
					children: (0, v.jsx)("div", {
						className: "h-full w-[260px]",
						children: (0, v.jsx)(nH, {
							onClickAccountPayment: t,
							showAccountPaymentMenuItem: !1 === o && d,
							onClickCustomerPortal: r,
							showCustomerPortalMenuItem: g,
							onDeleteHistory: m,
							onNewThread: a,
							children: s
						})
					})
				})
			}
			var nQ = t(70060),
				n$ = t.n(nQ),
				nJ = function(e) {
					var n = e.children;
					return (0, v.jsx)(v.Fragment, {
						children: n
					})
				},
				nY = n$()(function() {
					return Promise.resolve(nJ)
				}, {
					ssr: !1
				}),
				nK = t(6128),
				nX = t(5437),
				n0 = t.n(nX),
				n1 = t(11253),
				n2 = t.n(n1),
				n3 = t(75179),
				n5 = t(69403),
				n4 = t(57311),
				n7 = t(22208),
				n8 = t(81949);

			function n6(e) {
				var n = e.id,
					t = e.label;
				return (0, v.jsxs)("div", {
					className: "form-check",
					children: [(0, v.jsx)("input", {
						className: "form-check-input float-left mr-2 mt-1 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none",
						type: "checkbox",
						value: "",
						id: n
					}), (0, v.jsx)("label", {
						className: "form-check-label inline-block text-gray-800 dark:text-gray-100",
						htmlFor: n,
						children: t
					})]
				})
			}
			var n9 = t(54655),
				te = t(64664);

			function tn(e) {
				var n, t;
				if (e.author.role === n5.uU.Assistant) {
					if ("bing_search" === e.recipient) return u.SimpleBrowsing;
					if ("browser" === e.recipient || "restricted_browser" === e.recipient) return u
					.Browsing;
					if ("code" === e.content.content_type || "python" === e.recipient && "text" === e
						.content.content_type) return u.Code;
					if (null === (n = e.recipient) || void 0 === n ? void 0 : n.includes(".")) return u
						.Plugin;
					if ("text" === e.content.content_type) return u.Text
				} else if (e.author.role === n5.uU.Tool) {
					if ("bing_search" === e.author.name || "browser" === e.author.name ||
						"restricted_browser" === e.author.name) return u.BrowseTool;
					if ("execution_output" === e.content.content_type) return u.CodeExecutionOutput;
					if ((null === (t = e.author.name) || void 0 === t ? void 0 : t.includes(".")) ||
						"plugin_service" === e.author.name) return u.PluginTool
				} else if ("text" === e.content.content_type) return u.Text;
				return u.Unknown
			}(a = u || (u = {}))[a.Text = 0] = "Text", a[a.SimpleBrowsing = 1] = "SimpleBrowsing", a[a
					.Browsing = 2] = "Browsing", a[a.BrowseTool = 3] = "BrowseTool", a[a.Code = 4] = "Code",
				a[a.CodeExecutionOutput = 5] = "CodeExecutionOutput", a[a.Plugin = 6] = "Plugin", a[a
					.PluginTool = 7] = "PluginTool", a[a.Unknown = 8] = "Unknown";
			var tt = t(13282),
				tr = t(95182),
				ta = t.n(tr);

			function ti() {
				var e = (0, p._)(["text-xs flex items-center justify-center gap-1"]);
				return ti = function() {
					return e
				}, e
			}

			function to() {
				var e = (0, p._)(["dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400"]);
				return to = function() {
					return e
				}, e
			}

			function ts() {
				var e = (0, p._)(["flex-grow flex-shrink-0"]);
				return ts = function() {
					return e
				}, e
			}

			function tl(e) {
				var n = e.currentPage,
					t = e.onChangeIndex,
					r = e.length,
					a = e.className,
					i = function(e) {
						t(ta()(n + e, 0, r - 1))
					};
				return (0, v.jsxs)(tu, {
					className: a,
					children: [(0, v.jsx)(tc, {
						onClick: function() {
							return i(-1)
						},
						disabled: 0 === n,
						children: (0, v.jsx)(et.ZP, {
							size: "xsmall",
							icon: z.YFh
						})
					}), (0, v.jsx)(td, {
						children: "".concat(n + 1, " / ").concat(r)
					}), (0, v.jsx)(tc, {
						onClick: function() {
							return i(1)
						},
						disabled: n === r - 1,
						children: (0, v.jsx)(et.ZP, {
							size: "xsmall",
							icon: z.Tfp
						})
					})]
				})
			}
			var tu = j.Z.div(ti()),
				tc = j.Z.button(to()),
				td = j.Z.span(ts()),
				tf = t(36716);

			function th() {
				var e = (0, p._)(["flex flex-col items-start"]);
				return th = function() {
					return e
				}, e
			}

			function tg() {
				var e = (0, p._)(["flex items-center text-xs bg-green-100 rounded p-3 text-gray-900 ", ""]);
				return tg = function() {
					return e
				}, e
			}

			function tm() {
				var e = (0, p._)([
					"max-w-full overflow-x-auto mt-3 flex flex-col gap-2 rounded bg-gray-100 p-3 text-sm text-gray-800"
				]);
				return tm = function() {
					return e
				}, e
			}
			var tp = y.memo(function(e) {
					var n = e.children,
						t = e.isComplete,
						r = e.expanderClosedLabel,
						a = e.expanderOpenLabel,
						i = e.resultsPreview,
						o = e.results,
						s = e.initialExpanded,
						l = e.onExpand,
						u = (0, m._)((0, y.useState)(void 0 !== s && s), 2),
						c = u[0],
						d = u[1],
						f = (0, y.useCallback)(function() {
							d(function(e) {
								return !e
							}), null == l || l()
						}, [l]);
					return (0, v.jsxs)(tv, {
						children: [(0, v.jsxs)(tx, {
							$complete: t,
							children: [(0, v.jsx)("div", {
								children: n
							}), !t && (0, v.jsx)(er.Z, {
								className: o ? "ml-1" : "ml-12"
							}), o && (0, v.jsxs)("div", {
								className: "ml-12 flex items-center gap-2",
								role: "button",
								onClick: f,
								children: [a && r && (0, v.jsx)("div", {
									className: "text-xs text-gray-600",
									children: c ? a : r
								}), !c && i, (0, v.jsx)(et.ZP, {
									icon: c ? z.rH8 : z.bTu
								})]
							})]
						}), c && o]
					})
				}),
				tv = j.Z.div(th()),
				tx = j.Z.div(tg(), function(e) {
					return e.$complete && "bg-gray-100"
				}),
				tb = j.Z.div(tm()),
				ty = (0, H.vU)({
					startingBrowsing: {
						id: "browsingMessage.startingBrowsing",
						defaultMessage: "Browsing the web...",
						description: "Status message when browsing is starting"
					},
					finishedBrowsing: {
						id: "browsingMessage.finishedBrowsing",
						defaultMessage: "Finished browsing",
						description: "Status message when browsing is finished"
					},
					thinking: {
						id: "browsingMessage.thinking",
						defaultMessage: "Thinking...",
						description: "Status message when the next browsing command is being generated"
					},
					searchInProgress: {
						id: "browsingMessage.command.search.inProgress",
						defaultMessage: "Searching: <bold>“{searchQuery}”</bold>",
						description: "Browsing command to search the web is in progress"
					},
					searchFinished: {
						id: "browsingMessage.command.search.finished",
						defaultMessage: "Searched: <bold>“{searchQuery}”</bold>",
						description: "Browsing command to search the web finished"
					},
					searchError: {
						id: "browsingMessage.command.search.error",
						defaultMessage: "Search failed",
						description: "Browsing command to search the web failed"
					},
					clickInProgress: {
						id: "browsingMessage.command.click.inProgress",
						defaultMessage: "Clicking on a link...",
						description: "Browsing command to click on a link is in progress"
					},
					clickFinished: {
						id: "browsingMessage.command.click.finished",
						defaultMessage: "Clicked on a link",
						description: "Browsing command to click on a link finished"
					},
					clickFinishedWithLink: {
						id: "browsingMessage.command.click.finishedWithLink",
						defaultMessage: "Clicked on:",
						description: "Browsing command to click on a link finished. The link that was clicked will be displayed after the :"
					},
					clickError: {
						id: "browsingMessage.command.click.error",
						defaultMessage: "Click failed",
						description: "Browsing command to click on a link failed"
					},
					quote: {
						id: "browsingMessage.command.quote",
						defaultMessage: "Reading content",
						description: "Browsing command to read a specific quote from a page"
					},
					quoteError: {
						id: "browsingMessage.command.quote.error",
						defaultMessage: "Reading content failed",
						description: "Browsing command to read a specific quote from a page failed"
					},
					back: {
						id: "browsingMessage.command.back",
						defaultMessage: "Going back to last page",
						description: "Browsing command to go back to the last page"
					},
					backError: {
						id: "browsingMessage.command.back.error",
						defaultMessage: "Going back failed",
						description: "Browsing command to go back to the last page failed"
					},
					scroll: {
						id: "browsingMessage.command.scroll",
						defaultMessage: "Scrolling down",
						description: "Browsing command to scroll down on a page"
					},
					scrollError: {
						id: "browsingMessage.command.scroll.error",
						defaultMessage: "Scroll failed",
						description: "Browsing command to scroll down on a page failed"
					}
				}),
				tj = y.memo(function(e) {
					var n, t = e.messages,
						r = e.isComplete,
						a = (0, k.hz)(),
						i = t.map(function(e) {
							return e.message
						}),
						o = i.map(function(e, n) {
							if (e.author.role !== n5.uU.Tool || n > 0 && tZ(e) && tZ(i[n - 1]))
								return null;
							var t = e.metadata;
							if (!t) return null;
							var r = t.command,
								a = t.status;
							return r ? {
								type: r,
								status: a,
								didError: "system_error" === e.content.content_type,
								message: e
							} : null
						}).filter(Boolean),
						s = o.map(function(e, n) {
							return (0, v.jsx)(tw, {
								command: e
							}, n)
						});
					r ? (s.push((0, v.jsx)(tS, {}, "finished")), n = (0, v.jsx)(tS, {
						compact: !0
					})) : 0 === s.length ? (s.push((0, v.jsx)(tP, {}, "waiting")), n = (0, v.jsx)(
						tP, {
							compact: !0
						})) : "finished" === o[o.length - 1].status && s.push((0, v.jsx)(tI, {
						icon: z.Wqx,
						children: (0, v.jsx)(G.Z, (0, h._)({}, ty.thinking))
					}, "thinking")), n || (n = (0, v.jsx)(tw, {
						command: o[o.length - 1],
						compact: !0
					}));
					var l = a.has(Q.UG) && !r ? function(e) {
						var n, t = e.reverse().find(function(e) {
							return e.author.role === n5.uU.Assistant
						});
						if (!t) return null;
						for (var r = n4.Cv.getTextFromMessage(t), a = /^#\s*(.*)/gm,
						i = []; null !== (n = a.exec(r));) i.push(n[1]);
						return i.length > 0 ? i.join("\n") : null
					}(i) : null;
					return (0, v.jsxs)(tp, {
						isComplete: r,
						results: (0, v.jsx)(tb, {
							className: "text-xs",
							children: s
						}),
						children: [null != l && (0, v.jsx)("div", {
							className: "mb-2 whitespace-pre-wrap font-medium",
							children: l
						}), n]
					})
				});

			function tw(e) {
				var n = e.command,
					t = e.compact;
				if (n.didError) return (0, v.jsx)(tN, {
					commandType: n.type
				});
				switch (n.type) {
					case "search":
						var r, a, i = null === (r = n.message.metadata) || void 0 === r ? void 0 : null ===
							(a = r.args) || void 0 === a ? void 0 : a[0];
						if (!i) return null;
						return (0, v.jsx)(tC, {
							searchQuery: i,
							isComplete: "finished" === n.status,
							compact: t
						});
					case "click":
					case "open_url":
						var o, s, l = null === (o = n.message.metadata) || void 0 === o ? void 0 : null ===
							(s = o._cite_metadata) || void 0 === s ? void 0 : s.metadata_list[0];
						return (0, v.jsx)(tk, {
							pageInfo: l,
							compact: t
						});
					case "quote":
					case "quote_full":
						return (0, v.jsx)(t_, {
							compact: t
						});
					case "back":
						return (0, v.jsx)(tM, {
							compact: t
						});
					case "scroll":
						return (0, v.jsx)(tT, {
							compact: t
						});
					default:
						return null
				}
			}

			function tC(e) {
				var n = e.searchQuery,
					t = e.isComplete,
					r = e.compact;
				return (0, v.jsx)(tI, {
					icon: z.jRj,
					compact: r,
					children: t ? (0, v.jsx)(G.Z, (0, eF._)((0, h._)({}, ty.searchFinished), {
						values: {
							bold: function(e) {
								return (0, v.jsx)("span", {
									className: "font-medium",
									children: e
								})
							},
							searchQuery: n
						}
					})) : (0, v.jsx)(G.Z, (0, eF._)((0, h._)({}, ty.searchInProgress), {
						values: {
							bold: function(e) {
								return (0, v.jsx)("span", {
									className: "font-medium",
									children: e
								})
							},
							searchQuery: n
						}
					}))
				})
			}

			function tk(e) {
				var n = e.pageInfo,
					t = e.compact;
				return (0, v.jsx)(tI, {
					icon: z.PS6,
					compact: t,
					children: n ? !0 === t ? (0, v.jsx)(G.Z, (0, h._)({}, ty.clickFinished)) : (0, v
						.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [(0, v.jsx)(G.Z, (0, h._)({}, ty.clickFinishedWithLink)),
							(0, v.jsx)("div", {
								className: "rounded border border-black/10 bg-white px-2 py-1",
								children: (0, v.jsx)(tf.Op, {
									pageInfo: n
								})
							})
						]
					}) : (0, v.jsx)(G.Z, (0, h._)({}, ty.clickInProgress))
				})
			}

			function t_(e) {
				var n = e.compact;
				return (0, v.jsx)(tI, {
					icon: z.SnF,
					compact: n,
					children: (0, v.jsx)(G.Z, (0, h._)({}, ty.quote))
				})
			}

			function tM(e) {
				var n = e.compact;
				return (0, v.jsx)(tI, {
					icon: z.cww,
					compact: n,
					children: (0, v.jsx)(G.Z, (0, h._)({}, ty.back))
				})
			}

			function tT(e) {
				var n = e.compact;
				return (0, v.jsx)(tI, {
					icon: z.nlg,
					compact: n,
					children: (0, v.jsx)(G.Z, (0, h._)({}, ty.scroll))
				})
			}

			function tN(e) {
				var n, t = e.commandType,
					r = e.compact;
				switch (t) {
					case "search":
						n = ty.searchError;
						break;
					case "click":
					case "open_url":
						n = ty.clickError;
						break;
					case "quote":
					case "quote_full":
						n = ty.quoteError;
						break;
					case "back":
						n = ty.backError;
						break;
					case "scroll":
						n = ty.scrollError;
						break;
					default:
						return null
				}
				return (0, v.jsx)(tI, {
					icon: z.bcx,
					compact: r,
					children: (0, v.jsx)(G.Z, (0, h._)({}, n))
				})
			}

			function tP(e) {
				var n = e.compact;
				return (0, v.jsx)(tI, {
					icon: z.jRj,
					compact: n,
					children: (0, v.jsx)(G.Z, (0, h._)({}, ty.startingBrowsing))
				})
			}

			function tS(e) {
				var n = e.compact;
				return (0, v.jsx)(tI, {
					icon: z._rq,
					compact: n,
					children: (0, v.jsx)(G.Z, (0, h._)({}, ty.finishedBrowsing))
				})
			}

			function tI(e) {
				var n = e.children,
					t = e.icon,
					r = e.compact;
				return (0, v.jsxs)("div", {
					className: (0, Z.Z)("flex items-center gap-2", !0 !== r && "min-h-[24px]"),
					children: [(0, v.jsx)(et.ZP, {
						icon: t,
						className: "shrink-0"
					}), (0, v.jsx)("div", {
						children: n
					})]
				})
			}

			function tZ(e) {
				var n, t;
				return (null === (n = e.metadata) || void 0 === n ? void 0 : n.command) === "quote" || (
					null === (t = e.metadata) || void 0 === t ? void 0 : t.command) === "quote_full"
			}
			var tD = y.memo(function(e) {
				var n, t = e.message,
					r = e.isCollapsed,
					a = null === (n = t.message.metadata) || void 0 === n ? void 0 : n
					.aggregate_result;
				if (!a) return console.error("Corrupt code execution result message"), null;
				var i = a.messages.filter(tL),
					o = r && i.length > 0,
					s = r && null != a.final_expression_output,
					l = r && null != a.in_kernel_exception,
					u = !r && a.messages.filter(tR).length > 0;
				return (0, v.jsxs)(v.Fragment, {
					children: [o && (0, v.jsx)(tF, {
						label: "STDOUT/STDERR",
						output: i.map(function(e, n) {
							return (0, v.jsx)("span", {
								className: "stderr" === e
									.stream_name ?
									"text-red-500" : "",
								children: e.text
							}, "".concat(n))
						})
					}), s && (0, v.jsx)(tF, {
						label: "RESULT",
						output: a.final_expression_output
					}), l && (0, v.jsx)("div", {
						className: "overflow-auto rounded border-t border-gray-500 bg-black text-white",
						children: (0, v.jsx)("div", {
							className: "border-l-4 border-red-500 p-2 text-xs",
							children: (0, v.jsx)("div", {
								className: "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 flex max-h-64 flex-col-reverse",
								children: (0, v.jsx)("pre", {
									className: "shrink-0",
									children: a
										.in_kernel_exception
										.traceback.join(
											"")
								})
							})
						})
					}), u && a.messages.filter(tR).map(function(e, n) {
						var t = null != e.image_payload ? (0, v.jsx)("img", {
							src: "data:image/png;base64,".concat(e
								.image_payload)
						}) : null != e.image_url ? (0, v.jsx)(tE, {
							downloadUrl: e.image_url
						}) : null;
						return t ? (0, v.jsx)("div", {
							children: t
						}, n) : null
					})]
				})
			});

			function tF(e) {
				var n = e.label,
					t = e.output;
				return (0, v.jsxs)("div", {
					className: "rounded-md bg-black p-4 text-xs",
					children: [(0, v.jsx)("div", {
						className: "mb-1 text-gray-400",
						children: n
					}), (0, v.jsx)("div", {
						className: "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 prose flex max-h-64 flex-col-reverse overflow-auto text-white",
						children: (0, v.jsx)("pre", {
							className: "shrink-0",
							children: t
						})
					})]
				})
			}

			function tE(e) {
				var n = e.downloadUrl,
					t = (0, m._)((0, y.useState)(""), 2),
					r = t[0],
					a = t[1];
				return (0, e4.a)(["fsDownloadUrl", n], (0, no._)(function() {
					return (0, ns.Jh)(this, function(e) {
						switch (e.label) {
							case 0:
								return [4, W.ZP.downloadFileService(n)];
							case 1:
								return [2, e.sent()]
						}
					})
				}), {
					onSuccess: function(e) {
						e.url && a(e.url)
					}
				}), (0, v.jsxs)(v.Fragment, {
					children: [" ", r && (0, v.jsx)("img", {
						src: r
					}), " "]
				})
			}

			function tR(e) {
				return "image" === e.message_type
			}

			function tL(e) {
				return "stream" === e.message_type
			}
			var tA = t(28869);

			function tB(e) {
				return n4.Cv.getIsMessageFinished(e.message) && !n4.Cv.getIsStopFromMessage(e.message)
			}
			var tU = {},
				tq = {};

			function tO(e) {
				var n, t = e.message,
					r = e.outputMessage,
					a = (0, na.F)().theme,
					i = (0, w.WS)(),
					o = null === (n = null == r ? void 0 : r.message.metadata) || void 0 === n ? void 0 : n
					.aggregate_result,
					s = (null == o ? void 0 : o.status) !== void 0 && (null == o ? void 0 : o.status) !==
					"running" || tB(t);
				(0, y.useEffect)(function() {
					tU[t.message.id] || (i(C.s6.renderTool2Message, {
						id: t.message.id,
						finishedExecuting: s
					}), tU[t.message.id] = !0)
				}, [i, t, s]);
				var l = (0, y.useCallback)(function() {
						tq[t.message.id] || (i(C.s6.expandTool2Message, {
							id: t.message.id,
							finishedExecuting: s
						}), tq[t.message.id] = !0)
					}, [i, t, s]),
					u = (0, v.jsxs)(v.Fragment, {
						children: [(0, v.jsx)("div", {
							className: "mt-3 self-stretch",
							children: (0, v.jsx)(tA.Z, {
								className: (0, Z.Z)(
									"markdown prose w-full break-words dark:prose-invert",
									"dark" === a ? "dark" : "light"),
								children: function(e) {
									var n = function(e, n) {
										return "```".concat(n, "\n").concat(
											e, "\n```")
									};
									if ("code" === e.message.content
										.content_type) return n(e.message
										.content.text, "python");
									if ("python" === e.message.recipient) {
										if ("text" !== e.message.content
											.content_type) throw Error(
											"Unexpected content type for code message"
											);
										var t = e.message.content.parts;
										if (1 !== t.length || "string" !=
											typeof t[0]) throw Error(
											"Unexpected parts for code message"
											);
										return n(t[0], "python")
									}
									throw Error(
										"Unexpected code message format")
								}(t)
							})
						}), r && (0, v.jsx)("div", {
							className: "self-stretch",
							children: (0, v.jsx)(tD, {
								message: r,
								isCollapsed: !0
							})
						})]
					});
				return (0, v.jsx)(tp, {
					expanderClosedLabel: "Show work",
					expanderOpenLabel: "Hide work",
					isComplete: s,
					results: u,
					onExpand: l,
					children: s ? "Finished working" : "Working..."
				})
			}
			var tz = t(99585);

			function tH(e) {
				var n = e.messages,
					t = e.isCompletionInProgress,
					r = e.isCompletion,
					a = e.onRequestMoreCompletions,
					i = n.reduce(function(e, n) {
						return n.err ? e : e + n4.Cv.getTextFromMessage(n.message)
					}, "");
				return (0, v.jsx)(tz.Cf, {
					text: i,
					format: !0,
					isCompletion: r,
					isCompletionInProgress: t,
					id: "",
					onRequestMoreCompletions: a
				})
			}
			var tV = t(2368),
				tG = t(57924),
				tW = t(8844),
				tQ = t(22121);

			function t$() {
				return (t$ = (0, no._)(function(e) {
					var n;
					return (0, ns.Jh)(this, function(t) {
						switch (t.label) {
							case 0:
								return t.trys.push([0, 2, , 3]), [4, function(e) {
									return tJ.apply(this, arguments)
								}(e)];
							case 1:
								return [2, t.sent()];
							case 2:
								return console.error(
									"Error making localhost plugin HTTP call", n = t
									.sent()), [2, [{
									id: (0, tW.Z)(),
									author: {
										role: n5.uU.Tool,
										name: "plugin_service"
									},
									content: {
										content_type: "text",
										parts: ["Error making localhost plugin HTTP call: "
											.concat(n)
										]
									},
									metadata: {
										parent_message_id: e
											.parent_message_id,
										is_complete: !0
									},
									recipient: "all"
								}]];
							case 3:
								return [2]
						}
					})
				})).apply(this, arguments)
			}

			function tJ() {
				return (tJ = (0, no._)(function(e) {
					var n, t, r, a;

					function i(e) {
						return Object.keys(e).map(function(e) {
							return e.toLowerCase()
						})
					}
					return (0, ns.Jh)(this, function(o) {
						switch (o.label) {
							case 0:
								var s;
								if (n = {
										"content-type": "application/json"
									}, s = [i(e.headers), i(n)].flat(), new Set(s)
									.size !== s.length) throw Error(
									"Refusing to make localhost plugin HTTP call with duplicate header keys"
									);
								return t = e.url, e.qs_params.length > 0 && (t = t +
										"?" + new URLSearchParams(e.qs_params)), r =
									void 0, null !== e.body && (r = JSON.stringify(e
										.body)), [4, fetch(t, {
										method: e.method,
										headers: (0, h._)({}, n, e.headers),
										body: r
									})];
							case 1:
								return [4, o.sent().text()];
							case 2:
								if (a = o.sent(), "chat" === e.api_function_type)
								return [2, [JSON.parse(a)]];
								if ("kwargs" === e.api_function_type) return [2, [{
									id: (0, tW.Z)(),
									author: {
										role: n5.uU.Tool,
										name: "".concat(e.namespace,
											".").concat(e
											.function_name)
									},
									content: {
										content_type: "text",
										parts: [a]
									},
									metadata: {
										parent_message_id: e
											.parent_message_id,
										is_complete: !0
									},
									recipient: "all"
								}]];
								throw Error("Not implemented")
						}
					})
				})).apply(this, arguments)
			}

			function tY(e) {
				return !!tK(e.domain)
			}

			function tK(e) {
				return /^localhost:\d+$/.test(e) ? "http://".concat(e) : /^https?:\/\/localhost:\d+$/.test(
					e) ? e : null
			}

			function tX(e) {
				return t0.apply(this, arguments)
			}

			function t0() {
				return (t0 = (0, no._)(function(e) {
					var n, t, r, a, i;
					return (0, ns.Jh)(this, function(o) {
						switch (o.label) {
							case 0:
								return [4, fetch(e + "/.well-known/ai-plugin.json")
									.then(function(e) {
										return e.json()
									}).catch(function(e) {
										throw Error(
											"Failed to fetch localhost manifest. Check to ensure your localhost is running and your localhost server has CORS enabled."
											)
									})
								];
							case 1:
								if (!(r = null == (t = o.sent()) ? void 0 : null === (
										n = t.api) || void 0 === n ? void 0 : n.url))
									throw Error(
										"Localhost manifest is missing OpenAPI spec URL."
										);
								if ("pathname" === (a = function(e) {
										try {
											return new URL(e), "full url"
										} catch (n) {
											if (e.startsWith("/"))
										return "pathname";
											return "neither"
										}
									}(r))) r = e + r;
								else if ("neither" === a) throw Error(
									"Localhost manifest OpenAPI spec URL is not a valid URL or path."
									);
								return [4, fetch(r).then(function(e) {
									return e.text()
								}).catch(function(e) {
									throw Error(
										"Failed to fetch localhost OpenAPI spec."
										)
								}).then(function(e) {
									try {
										return tQ.ZP.parse(e)
									} catch (e) {}
									try {
										return JSON.parse(e)
									} catch (e) {}
									throw Error(
										"Failed to parse localhost OpenAPI spec as JSON or YAML."
										)
								})];
							case 2:
								i = o.sent(), o.label = 3;
							case 3:
								return o.trys.push([3, 5, , 6]), [4, W.ZP
									.createOrUpdateLocalhostPlugin({
										localhost: e,
										manifest: t,
										openapiSpec: i
									})
								];
							case 4:
								return [2, o.sent()];
							case 5:
								return o.sent(), es.m.danger(
									"Failed to create or update localhost plugin at "
									.concat(e)), [3, 6];
							case 6:
								return [2]
						}
					})
				})).apply(this, arguments)
			}
			var t1 = t(44878);

			function t2() {
				var e = (0, p._)([
					"flex items-center gap-1 rounded-[5px] bg-red-200 py-0.5 px-1.5 text-xs font-medium uppercase text-red-800"
				]);
				return t2 = function() {
					return e
				}, e
			}
			var t3 = y.memo(function(e) {
				var n, t = e.messages,
					r = (0, m._)(t, 2),
					a = r[0],
					i = r[1],
					o = (0, t1.Z)(),
					s = null === (n = a.message.recipient) || void 0 === n ? void 0 : n.split(".")[
						0],
					l = o.find(function(e) {
						return e.namespace === s
					}),
					u = null == l ? void 0 : l.manifest.name_for_human;
				if (!u) return (0, v.jsx)("div", {
					className: "result-streaming prose dark:prose-invert",
					children: (0, v.jsx)("span", {
						children: "​"
					})
				});
				var c = tB(a),
					d = null != i ? (0, v.jsxs)("div", {
						children: ["Used ", (0, v.jsx)("b", {
							children: u
						})]
					}) : c ? (0, v.jsxs)("div", {
						children: ["Tried to use ", (0, v.jsx)("b", {
							children: u
						})]
					}) : (0, v.jsxs)("div", {
						children: ["Using ", (0, v.jsx)("b", {
							children: u
						}), "..."]
					}),
					f = tY(l) ? (0, v.jsx)(t4, {}) : "approved" !== l.status ? (0, v.jsx)(t5, {}) :
					void 0;
				return (0, v.jsx)(tp, {
					isComplete: null != i || c,
					results: (0, v.jsx)(t8, {
						pluginName: u,
						pluginMessage: a,
						toolMessage: i
					}),
					children: (0, v.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [d, f]
					})
				})
			});

			function t5() {
				return (0, v.jsxs)(t7, {
					children: [(0, v.jsx)(et.ZP, {
						icon: z.OH,
						className: "h-3 w-3",
						strokeWidth: 2.5
					}), (0, v.jsx)("div", {
						children: "Unverified"
					})]
				})
			}

			function t4() {
				return (0, v.jsxs)(t7, {
					children: [(0, v.jsx)(et.ZP, {
						icon: z.V7f,
						className: "h-3 w-3"
					}), (0, v.jsx)("div", {
						children: "Localhost"
					})]
				})
			}
			var t7 = j.Z.div(t2());

			function t8(e) {
				var n = e.pluginName,
					t = e.pluginMessage,
					r = e.toolMessage,
					a = n4.Cv.getTextFromMessage(t.message),
					i = r ? n4.Cv.getTextFromMessage(r.message) : null;
				try {
					a = JSON.stringify(JSON.parse(a), null, 2), i && (i = JSON.stringify(JSON.parse(i),
						null, 2))
				} catch (e) {}
				var o = (null == r ? void 0 : r.message.author.name) === "plugin_service";
				return (0, v.jsxs)("div", {
					className: "my-3 flex max-w-full flex-col gap-3",
					children: [(0, v.jsx)(t6, {
						title: "Request to ".concat(n),
						infoTooltip: t.message.recipient,
						children: a
					}), i && (0, v.jsx)(t6, {
						title: o ? "Error" : "Response from ".concat(n),
						infoTooltip: t.message.recipient,
						children: (0, v.jsx)("span", {
							className: (0, Z.Z)(o && "text-red-500"),
							children: i
						})
					})]
				})
			}

			function t6(e) {
				var n = e.title,
					t = e.infoTooltip,
					r = e.children;
				return (0, v.jsx)(tV.$, {
					title: (0, v.jsx)("span", {
						className: "uppercase",
						children: n
					}),
					headerDecoration: void 0 !== t ? (0, v.jsx)(tG.u, {
						label: t,
						children: (0, v.jsx)(et.ZP, {
							icon: z.H33,
							className: "text-white/50"
						})
					}) : void 0,
					shouldWrapCode: !0,
					className: "w-full text-xs text-white/80",
					children: r
				})
			}
			var t9 = y.memo(function(e) {
					var n = e.messages,
						t = (0, m._)(n, 2),
						r = t[0],
						a = t[1],
						i = n4.Cv.getTextFromMessage(r.message).match(/^search\(["'](.+)["'].*\)$/),
						o = i ? i[1] : null;
					if (!o) return (0, v.jsx)("div", {
						className: "result-streaming prose dark:prose-invert",
						children: (0, v.jsx)("span", {
							children: "​"
						})
					});
					var s = tB(r);
					return (0, v.jsx)(tp, {
						isComplete: null != a || s,
						children: null != a ? (0, v.jsxs)(v.Fragment, {
							children: ["Searched: ", (0, v.jsxs)("b", {
								children: ["“", o, "”"]
							})]
						}) : s ? (0, v.jsxs)(v.Fragment, {
							children: ["Tried to search: ", (0, v.jsxs)("b", {
								children: ["“", o, "”"]
							})]
						}) : (0, v.jsxs)(v.Fragment, {
							children: ["Searching the web: ", (0, v.jsxs)("b", {
								children: ["“", o, "”"]
							})]
						})
					})
				}),
				re = t(44541);

			function rn() {
				var e = (0, p._)([""]);
				return rn = function() {
					return e
				}, e
			}

			function rt() {
				var e = (0, p._)(["flex flex-grow flex-col gap-3"]);
				return rt = function() {
					return e
				}, e
			}

			function rr() {
				var e = (0, p._)(["flex p-4 gap-4 ", ""]);
				return rr = function() {
					return e
				}, e
			}

			function ra() {
				var e = (0, p._)(["flex-shrink-0 flex flex-col relative items-end"]);
				return ra = function() {
					return e
				}, e
			}

			function ri() {
				var e = (0, p._)([
					"p-2 rounded-md hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 flex items-center gap-2"
				]);
				return ri = function() {
					return e
				}, e
			}

			function ro() {
				var e = (0, p._)(["p-1 ", ""]);
				return ro = function() {
					return e
				}, e
			}

			function rs() {
				var e = (0, p._)([
					"text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-2 md:gap-3 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2\n",
					""
				]);
				return rs = function() {
					return e
				}, e
			}

			function rl() {
				var e = (0, p._)([
					"text-center border-b p-3 text-gray-500 dark:border-black/20 dark:text-gray-400 text-xs"
				]);
				return rl = function() {
					return e
				}, e
			}

			function ru() {
				var e = (0, p._)([
					"flex justify-between items-center p-4 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm"
				]);
				return ru = function() {
					return e
				}, e
			}(i = c || (c = {}))[i.Text = 0] = "Text", i[i.MultiText = 1] = "MultiText", i[i
					.SimpleBrowsing = 2] = "SimpleBrowsing", i[i.Browsing = 3] = "Browsing", i[i.Code = 4] =
				"Code", i[i.CodeExecutionOutput = 5] = "CodeExecutionOutput", i[i.Plugin = 6] = "Plugin";
			var rc = y.memo(function(e) {
					var n, t, r = e.turnIndex,
						a = e.turnLeafId,
						i = e.isFinalTurn,
						o = e.clientThreadId,
						s = e.onChangeItemInView,
						l = e.onChangeRating,
						d = e.onRequestMoreCompletions,
						f = e.onDeleteNode,
						g = e.onRequestCompletion,
						p = e.onUpdateNode,
						x = e.onSandboxLinkClick,
						b = e.onHandleChangeVariantFeedbackInlineComparisonRating,
						j = e.activeRequests,
						M = e.showInlineEmbeddedDisplay,
						T = void 0 !== M && M,
						N = e.modelBackend,
						P = e.isStaticSharedThread,
						S = void 0 !== P && P,
						D = e.onTurnEnteredViewport,
						F = e.initiallyHighlightedMessageId,
						E = e.avatarColor,
						R = (0, _.GD)(o, r, a),
						L = R.role,
						A = R.messages,
						B = R.variantIds,
						U = eq.G.theme,
						q = U.color,
						O = U.icon,
						H = U.activeColor,
						V = (0, ei.kP)().session,
						G = (0, $.Ui)(),
						W = (0, w.WS)(),
						J = (0, m._)((0, y.useState)(!1), 2),
						Y = J[0],
						K = J[1],
						X = (0, y.useMemo)(function() {
							return B.findIndex(function(e) {
								return e === A[0].nodeId
							})
						}, [B, A]),
						ee = L !== n5.uU.User,
						en = (0, y.useContext)(I.QL).historyDisabled,
						er = (0, k.hz)().has(Q.FZ),
						ea = (0, ni.Fl)(),
						eo = ea.isBrowsingAvailable,
						es = ea.isPluginsAvailable,
						el = ea.isCodeInterpreterAvailable,
						eu = eo || es || el,
						ec = (0, y.useRef)(null);
					(0, y.useEffect)(function() {
						var e = ec.current;
						if (D && e) {
							var n = new IntersectionObserver(function(e, n) {
								D(R, r, e[0].isIntersecting)
							}, {
								threshold: .51
							});
							return n.observe(e),
								function() {
									n.unobserve(e)
								}
						}
					}, [ec, D, R, r]), (0, y.useEffect)(function() {
						var e;
						null != F && R.messages.map(function(e) {
							return e.message.id
						}).includes(F) && (null === (e = ec.current) || void 0 === e || e
							.scrollIntoView({
								behavior: "auto"
							}))
					}, [F]);
					var ed = A[A.length - 1],
						ef = (0, m._)((0, y.useState)(ed.rating), 2),
						eh = ef[0],
						eg = ef[1],
						em = (0, k.hz)(),
						ep = (0, t1.Z)(),
						ev = (0, y.useMemo)(function() {
							return ee && (null == A ? void 0 : A[0]) && n4.Cv.getModelFromMessage(
								null == A ? void 0 : A[0].message) || N
						}, [ee, A, N]),
						ex = (0, y.useCallback)(function() {
							1 === A.length && (W(L === n5.uU.User ? C.s6.editPrompt : C.s6
								.editCompletion, {
									id: A[0].message.id,
									threadId: _.tQ.getServerThreadId(o)
								}), K(!0))
						}, [A, W, L, o]),
						eb = (0, y.useCallback)(function() {
							K(!1)
						}, []),
						ey = (0, y.useCallback)(function() {
							var e = A.reduce(function(e, n) {
								return n.err || n.message.author.role !== n5.uU.Assistant ||
									"all" !== n.message.recipient ? e : e + (e ? "\n\n" :
										"") + n4.Cv.getTextFromMessage(n.message)
							}, "");
							navigator.clipboard.writeText(e), W(C.s6.copyToClipboard, {
								threadId: _.tQ.getServerThreadId(o),
								id: A[0].message.id,
								eventSource: "mouse",
								model: ev
							}), te.m.logEvent("chatgpt_copy_to_clipboard")
						}, [ev, W, A, o]),
						ej = (0, y.useCallback)(function(e) {
							l(ed.nodeId, ed.message.id, e), eg(e)
						}, [ed, l]),
						ew = (0, m._)((0, y.useState)(ed.inlineComparisonRating), 2),
						eC = ew[0],
						ek = ew[1];
					(0, y.useEffect)(function() {
						eg(function(e) {
							return null != e ? e : ed.rating
						}), ek(function(e) {
							return null != e ? e : ed.inlineComparisonRating
						})
					}, [ed]);
					var e_ = (0, y.useMemo)(function() {
							return n4.Cv.getRequestIdFromConversationTurn(R)
						}, [R]),
						eM = (0, y.useMemo)(function() {
							return j.has(e_)
						}, [j, e_]),
						eT = (0, y.useMemo)(function() {
							var e = !0,
								n = !1,
								t = void 0;
							try {
								for (var r, a = A[Symbol.iterator](); !(e = (r = a.next())
									.done); e = !0) {
									var i = r.value;
									if (i.errType) return i.errType
								}
							} catch (e) {
								n = !0, t = e
							} finally {
								try {
									e || null == a.return || a.return()
								} finally {
									if (n) throw t
								}
							}
							return !1
						}, [A]),
						eN = (0, y.useMemo)(function() {
							if (ee) {
								var e, n, t = _.tQ.getTree(o),
									r = null === (e = t.getParentPromptNode(A[0].nodeId)) ||
									void 0 === e ? void 0 : e.parentId,
									a = r && (null === (n = t.getNode(r).message.metadata) ||
										void 0 === n ? void 0 : n.model_slug);
								if (ev && a && ev !== a) return re.n2.has(a) ?
									"The previous model used in this conversation has been deprecated. We've switched you to the latest default model." :
									"The previous model used in this conversation is unavailable. We've switched you to the latest default model."
							}
							return null
						}, [ev, ee, A, o]),
						eP = (0, y.useMemo)(function() {
							if (!eu) return {
								avatarIcon: O,
								avatarColor: q
							};
							if (eM && A.length > 0) {
								var e = A[A.length - 1],
									n = tn(e.message);
								switch (n) {
									case u.Text:
										if (n4.Cv.getTextFromMessage(e.message).length > 0 || A
											.length > 1) return {
											avatarIcon: "text",
											avatarColor: H
										};
										break;
									case u.SimpleBrowsing:
									case u.Browsing:
									case u.BrowseTool:
										return {
											avatarIcon: "browsing", avatarColor: H
										};
									case u.Code:
									case u.CodeExecutionOutput:
										return {
											avatarIcon: "code", avatarColor: H
										};
									case u.Plugin:
									case u.PluginTool:
										var t = n === u.Plugin ? e.message.recipient : e.message
											.author.name,
											r = null == t ? void 0 : t.split(".")[0],
											a = ep.find(function(e) {
												return e.namespace === r
											});
										if (a) return {
											avatarPlugin: a
										};
										return {
											avatarIcon: "plugin", avatarColor: H
										}
								}
							}
							return {
								avatarIcon: O,
								avatarColor: q
							}
						}, [eu, eM, A, O, q, H, ep]),
						eS = eP.avatarIcon,
						eI = eP.avatarColor,
						eZ = eP.avatarPlugin,
						eD = (0, y.useCallback)(function(e, n) {
							_.tQ.updateTree(o, function(t) {
								var r = t.getParentId(e);
								t.addNode(n, "", r, n5.Jq.Prompt)
							})
						}, [o]),
						eE = (0, y.useMemo)(function() {
							var e = [];
							return A.forEach(function(n, t) {
								var r = tn(n.message),
									a = null == A ? void 0 : A[t - 1],
									i = a && (n4.Cv.getIsIncompleteFromMessage(a.message) ||
										n4.Cv.getIsContinuedFromMessage(a.message)),
									o = n4.Cv.getIsContinuedFromMessage(n.message) || n
									.message.author.role === n5.uU.Assistant,
									s = r === u.Text && n4.Cv.getTextFromMessage(n.message);
								if (i && o && s) {
									var l = e.pop();
									(null == l ? void 0 : l.type) === c.MultiText ? (l
										.messages.push(n), e.push(l)) : (null == l ?
										void 0 : l.type) === c.Text && e.push({
										type: c.MultiText,
										messages: [l.message, n]
									})
								} else if (r === u.SimpleBrowsing || r === u.Browsing ||
									r === u.BrowseTool) {
									var d = e[e.length - 1];
									(null == d ? void 0 : d.type) === c.SimpleBrowsing || (
											null == d ? void 0 : d.type) === c.Browsing ? d
										.messages.push(n) : e.push({
											type: r === u.SimpleBrowsing ? c
												.SimpleBrowsing : c.Browsing,
											messages: [n]
										})
								} else if (r === u.Plugin || r === u.PluginTool) {
									var f = e[e.length - 1];
									r === u.PluginTool && (null == f ? void 0 : f.type) ===
										c.Plugin ? f.messages.push(n) : e.push({
											type: c.Plugin,
											messages: [n]
										})
								} else {
									var h = c.Text;
									r === u.Code ? h = c.Code : r === u
										.CodeExecutionOutput && (h = c.CodeExecutionOutput),
										e.push({
											type: h,
											message: n
										})
								}
							}), e.map(function(n, t) {
								var r, a, i = t === e.length - 1;
								switch (n.type) {
									case c.Text:
										return (0, v.jsx)(tz.ZP, {
											className: "min-h-[20px]",
											message: n.message,
											isEditing: Y,
											format: ee,
											isCompletionInProgress: i && eM,
											onCreateEditNode: eD,
											clientThreadId: o,
											onUpdateNode: p,
											onDeleteNode: f,
											onChangeItemInView: s,
											onRequestCompletion: g,
											onExitEdit: eb,
											disabled: 0 !== j.size,
											onSandboxLinkClick: (r = (0, no._)(
												function(e) {
													return (0, ns.Jh)(this,
														function(t) {
															return [2,
																x(n.message
																	.nodeId,
																	e
																	)
															]
														})
												}), function(e) {
												return r.apply(this,
													arguments)
											}),
											isCompletion: ee,
											onRequestMoreCompletions: d,
											isResponseToPluginMessage: (null === (
														a = e[t - 1]) || void 0 ===
													a ? void 0 : a.type) === c
												.Plugin
										}, n.message.nodeId);
									case c.MultiText:
										return (0, v.jsx)(tH, {
											messages: n.messages,
											isCompletionInProgress: i && eM,
											isCompletion: ee,
											onRequestMoreCompletions: d
										}, t);
									case c.SimpleBrowsing:
										return (0, v.jsx)(t9, {
											messages: n.messages
										}, n.messages[0].nodeId);
									case c.Browsing:
										var l = n.messages[n.messages.length - 1];
										return (0, v.jsx)(tj, {
											messages: n.messages,
											isComplete: !i || tB(l)
										}, n.messages[0].nodeId);
									case c.Code:
										var u = e[t + 1],
											h = u && u.type === c.CodeExecutionOutput ? u
											.message : void 0;
										return (0, v.jsx)(tO, {
											message: n.message,
											outputMessage: h
										}, n.message.nodeId);
									case c.CodeExecutionOutput:
										return (0, v.jsx)(tD, {
											message: n.message,
											isCollapsed: !1
										}, n.message.nodeId);
									case c.Plugin:
										return (0, v.jsx)(t3, {
											messages: n.messages
										}, n.messages[0].nodeId);
									default:
										return null
								}
							})
						}, [A, Y, ee, eM, eD, o, p, f, s, g, eb, j.size, x, d]),
						eR = (0, _.r7)(o),
						eL = !S && !eR && !G && ee && !T && !Y && 1 === X && i && !eC && !eh && 2 === B
						.length && Date.now() - (null !== (n = ed.message.create_time) && void 0 !== n ?
							n : 0) * 1e3 < 6e5 && !eM && em.has(Q.st),
						eA = (0, y.useRef)(Date.now()),
						eB = (0, y.useRef)((null !== (t = ed.message.create_time) && void 0 !== t ? t :
							Date.now()) * 1e3),
						eU = (0, y.useRef)(Date.now());
					(0, y.useEffect)(function() {
						eM || (eU.current = Date.now())
					}, [eM]);
					var eO = (0, y.useCallback)(function(e) {
							if (eL) {
								var n, t, r = _.tQ.getTree(o),
									a = B[0] || "",
									i = (null == r ? void 0 : r.getConversationTurns(a)) || [],
									s = i[i.length - 1],
									l = (null == s ? void 0 : s.messages) || [],
									u = l[l.length - 1],
									c = (null == u ? void 0 : null === (n = u.message) || void 0 ===
										n ? void 0 : n.id) || "",
									d = B[1] || "",
									f = (null == r ? void 0 : r.getConversationTurns(d)) || [],
									g = f[f.length - 1],
									m = (null == g ? void 0 : g.messages) || [],
									p = m[m.length - 1];
								b(c, (null == p ? void 0 : null === (t = p.message) || void 0 ===
										t ? void 0 : t.id) || "", e, eA.current, eA.current, eB
									.current, eU.current), _.tQ.updateTree(o, function(n) {
									n.updateNode(ed.nodeId, {
										metadata: {
											$set: (0, eF._)((0, h._)({}, n
												.getMetadata(ed.nodeId)), {
												inlineComparisonRating: e
											})
										}
									})
								}), ek(e), _.tQ.updateTree(o, function(e) {
									e.updateNode(u.nodeId, {
										metadata: {
											$set: (0, eF._)((0, h._)({}, e
												.getMetadata(u.nodeId)), {
												inlineComparisonRating: "baseline"
											})
										}
									})
								})
							}
						}, [eL, ed.nodeId, b, o, B]),
						ez = (0, y.useCallback)(function() {
							_.tQ.updateTree(o, function(e) {
								e.updateNode(ed.nodeId, {
									metadata: {
										$set: (0, eF._)((0, h._)({}, e.getMetadata(
											ed.nodeId)), {
											inlineComparisonRating: "skip"
										})
									}
								})
							}), ek("skip")
						}, [ed.nodeId, o]),
						eH = ee && !T && !S && !eR,
						eV = !T && !Y,
						eG = !ee && !T && !S && 1 === A.length && !Y,
						eW = (0, _.je)(o);
					if (R.role === n5.uU.Unknown || R.role === n5.uU.System) return null;
					var eQ = eG ? (0, v.jsx)(rp, {
							$isMessageRedesign: er,
							onClick: ex,
							className: (0, Z.Z)(!er && !G && "md:invisible md:group-hover:visible"),
							children: (0, v.jsx)(et.ZP, {
								icon: z.vPQ
							})
						}) : null,
						e$ = ee && !T ? (0, v.jsx)(tt.Z, {
							onCopy: ey,
							className: (0, Z.Z)("rounded-md p-1", er ?
								"text-gray-500 hover:text-gray-700 dark:hover:text-gray-400" :
								"hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400"
								)
						}) : null,
						eJ = eH && !1 ? (0, v.jsxs)("div", {
							className: "flex gap-1",
							children: ["thumbsDown" !== eh && !en && (0, v.jsx)(rp, {
								$isMessageRedesign: er,
								onClick: function() {
									return ej("thumbsUp")
								},
								disabled: "thumbsUp" === eh,
								className: (0, Z.Z)("thumbsUp" === eh && (er ?
									"bg-gray-100 dark:bg-gray-700" :
									"!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700"
									)),
								children: (0, v.jsx)(et.ZP, {
									icon: z.fmn
								})
							}, "thumbsUp:".concat(ed.nodeId)), "thumbsUp" !== eh && !en && (
								0, v.jsx)(rp, {
								$isMessageRedesign: er,
								onClick: function() {
									return ej("thumbsDown")
								},
								disabled: "thumbsDown" === eh,
								className: (0, Z.Z)("thumbsDown" === eh && (er ?
									"bg-gray-100 dark:bg-gray-700" :
									"!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700"
									)),
								children: (0, v.jsx)(et.ZP, {
									icon: z.oLd
								})
							}, "thumbsDown:".concat(ed.nodeId))]
						}) : null,
						eY = eL && !en ? (0, v.jsxs)(rb, {
							children: [(0, v.jsx)("div", {
								className: (0, Z.Z)("mr-4"),
								children: "Was this response better or worse?"
							}), (0, v.jsxs)(rm, {
								onClick: function() {
									return eO("new")
								},
								title: "This response was better than the previous response",
								children: [(0, v.jsx)(et.ZP, {
									icon: z.fmn,
									className: (0, Z.Z)("mr-1")
								}), "Better"]
							}), (0, v.jsxs)(rm, {
								onClick: function() {
									return eO("original")
								},
								title: "This response was worse than the previous response",
								children: [(0, v.jsx)(et.ZP, {
									icon: z.oLd,
									className: (0, Z.Z)("mr-1")
								}), "Worse"]
							}), (0, v.jsxs)(rm, {
								onClick: function() {
									return eO("same")
								},
								title: "This response was the same in quality",
								children: [(0, v.jsx)(et.ZP, {
									icon: n9.Ny3,
									className: (0, Z.Z)(
										"mr-1 rounded-full border border-gray-400 dark:border-gray-300"
										)
								}), "Same"]
							}), (0, v.jsx)(rm, {
								onClick: ez,
								title: "Skip this comparison",
								children: (0, v.jsx)(et.ZP, {
									icon: z.q5L,
									size: "medium"
								})
							})]
						}) : null,
						e0 = eV && B.length > 1,
						e1 = function() {
							return (0, v.jsxs)("div", {
								className: "flex gap-1",
								children: [eJ, eQ, e$]
							})
						};
					return (0, v.jsxs)(rd, {
						className: (0, Z.Z)("group", "w-full text-gray-800 dark:text-gray-100",
							er ? (0, Z.Z)("sm:rounded-2xl", ee ?
								"my-2 hover:bg-gray-50/50 dark:hover:bg-gray-700/50" :
								"bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
								) : (0, Z.Z)(!T &&
								"border-b border-black/10 dark:border-gray-900/50", ee ?
								"bg-gray-50 dark:bg-[#444654]" : "dark:bg-gray-800")),
						ref: ec,
						children: [eN && (0, v.jsx)(rx, {
							children: eN
						}), (0, v.jsxs)(rh, {
							$isMessageRedesign: er,
							className: (0, Z.Z)(T ? "ml-5" : "m-auto"),
							children: [(0, v.jsxs)(rg, {
								children: [(0, v.jsx)("div", {
									className: er ? "" :
										"w-[30px]",
									children: ee ? eZ ? (0,
										v.jsx)(eX, {
										plugin: eZ,
										notice: eT ||
											void 0
									}) : (0, v.jsx)(
									eK, {
										background: null !=
											E ? E :
											eI,
										iconName: eS,
										notice: eT ||
											void 0
									}) : (0, v.jsx)(
									e3, {
										user: S ? {
												name: null !=
													eW ?
													eW :
													"User"
											} :
											null ==
											V ?
											void 0 :
											V.user,
										notice: eT ||
											void 0,
										size: er ?
											"redesign" :
											"medium"
									})
								}), !er && eV && !G && (0, v
									.jsx)(tl, {
									currentPage: X,
									onChangeIndex: function(
										e) {
										return s(B[e])
									},
									length: B.length,
									className: (0, Z.Z)(
										"invisible absolute left-0 top-2 -ml-4 -translate-x-full group-hover:visible",
										B.length > 1 ?
										"visible" :
										"!invisible")
								})]
							}), (0, v.jsxs)("div", {
								className: (0, Z.Z)("relative", er ?
									"min-w-0 grow" :
									"flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]"
									),
								children: [er && (0, v.jsxs)("div", {
										className: "mb-1 select-none text-xs font-medium tracking-wide text-gray-400",
										children: [ee &&
											"ChatGPT", !
											ee && !S &&
											"You", !ee &&
											S && (null !=
												eW ? eW :
												"Anonymous User"
												)
										]
									}), (0, v.jsx)(rf, {
										children: eE
									}), er ? (G || e0 || null !=
									eY) && (0, v.jsxs)("div", {
										className: "mt-2 flex flex-col gap-4",
										children: [(0, v.jsxs)(
											"div", {
												className: "flex gap-2 text-gray-400",
												children: [
													e0 &&
													(0, v
														.jsx
														)
													(tl, {
														currentPage: X,
														onChangeIndex: function(
															e
															) {
															return s(
																B[
																	e]
																)
														},
														length: B
															.length,
														className: "rounded-xl border border-gray-100 bg-white p-1 dark:border-gray-600 dark:bg-gray-700"
													}),
													G &&
													e1()
												]
											}), eY]
									}) : (0, v.jsxs)(v.Fragment, {
										children: [eG && !G && (
											0, v.jsx)(
											rv, {
												$hidden: 0 !==
													j
													.size,
												children: eQ
											}), (eH ||
											eV) && (0, v
											.jsxs)(
											"div", {
												className: "flex justify-between lg:block",
												children: [
													G &&
													eV &&
													(0, v
														.jsx
														)
													(tl, {
														currentPage: X,
														onChangeIndex: function(
															e
															) {
															return s(
																B[
																	e]
																)
														},
														length: B
															.length,
														className: (
																0,
																Z
																.Z
																)
															("self-center pt-2",
																B
																.length >
																1 ?
																"visible" :
																"!invisible"
																)
													}),
													eG &&
													G &&
													(0, v
														.jsx
														)
													(rv, {
														$hidden: eM,
														children: eQ
													}),
													eH &&
													(0, v
														.jsxs
														)
													(rv, {
														$hidden: eM,
														children: [
															e$,
															eJ
														]
													}),
													eL &&
													!
													en &&
													eY
												]
											})]
									})
								]
							}), er && !G && !Y && (!S || ee) && (0, v.jsx)(
								"div", {
									className: "absolute -top-4 right-4 hidden rounded bg-white p-1 shadow-[0_0.5px_2px_rgba(0,0,0,0.15)] group-hover:block dark:bg-gray-900",
									children: e1()
								})]
						})]
					})
				}),
				rd = j.Z.div(rn()),
				rf = j.Z.div(rt()),
				rh = j.Z.div(rr(), function(e) {
					return e.$isMessageRedesign ? "relative" :
						"text-base md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl md:py-6 lg:px-0"
				}),
				rg = j.Z.div(ra()),
				rm = j.Z.button(ri()),
				rp = j.Z.button(ro(), function(e) {
					return e.$isMessageRedesign ?
						"text-gray-500 enabled:hover:text-gray-700 enabled:dark:hover:text-gray-400 rounded-sm" :
						"rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400"
				}),
				rv = j.Z.div(rs(), function(e) {
					return e.$hidden ? "invisible" : "visible"
				}),
				rx = j.Z.div(rl()),
				rb = j.Z.div(ru());

			function ry() {
				var e = (0, p._)(["mb-2 mt-auto ml-auto mr-auto"]);
				return ry = function() {
					return e
				}, e
			}

			function rj() {
				var e = (0, p._)([
					"relative rounded-md border border-black/10 bg-gray-50 dark:border-gray-900/50 dark:bg-[#444654] flex flex-col overflow-hidden"
				]);
				return rj = function() {
					return e
				}, e
			}

			function rw() {
				var e = (0, p._)(["mb-5 border dark:bg-gray-800 overflow-hidden"]);
				return rw = function() {
					return e
				}, e
			}

			function rC() {
				var e = (0, p._)([""]);
				return rC = function() {
					return e
				}, e
			}
			var rk = (0, H.vU)({
				submitFeedback: {
					id: "feedbackModal.submitFeedback",
					defaultMessage: "Submit feedback",
					description: "Button text for submitting the feedback"
				},
				thumbsUpPlaceholder: {
					id: "feedbackModal.thumbsUpPlaceholder",
					defaultMessage: "What do you like about the response?",
					description: "Placeholder for textarea input when user chooses thumbs up"
				},
				thumbsDownPlaceholder: {
					id: "feedbackModal.thumbsDownPlaceholder",
					defaultMessage: "What was the issue with the response? How could it be improved?",
					description: "Placeholder for textarea input when user chooses thumbs down"
				},
				harmfulUnsafe: {
					id: "feedbackModal.harmfulUnsafe",
					defaultMessage: "This is harmful / unsafe",
					description: "Label for harmful/unsafe checkbox"
				},
				notTrue: {
					id: "feedbackModal.notTrue",
					defaultMessage: "This isn't true",
					description: "Label for not true checkbox"
				},
				notHelpful: {
					id: "feedbackModal.notHelpful",
					defaultMessage: "This isn't helpful",
					description: "Label for not helpful checkbox"
				},
				provideAdditionalFeedback: {
					id: "feedbackModal.provideAdditionalFeedback",
					defaultMessage: "Provide additional feedback",
					description: "Title for the critique feedback modal"
				},
				pickBestAnswer: {
					id: "feedbackModal.pickBestAnswer",
					defaultMessage: "Pick the best answer to improve the model",
					description: "Title for the compare feedback modal"
				},
				newAnswer: {
					id: "feedbackModal.newAnswer",
					defaultMessage: "New Answer",
					description: "Title for the new answer during comparison"
				},
				originalAnswer: {
					id: "feedbackModal.originalAnswer",
					defaultMessage: "Original Answer",
					description: "Title for the original answer during comparison"
				},
				newAnswerBetter: {
					id: "feedbackModal.newAnswerBetter",
					defaultMessage: "New answer is better",
					description: "Button text for choosing new answer during comparison"
				},
				originalAnswerBetter: {
					id: "feedbackModal.originalAnswerBetter",
					defaultMessage: "Original answer is better",
					description: "Button text for choosing original answer during comparison"
				},
				neitherAnswerBetter: {
					id: "feedbackModal.neitherAnswerBetter",
					defaultMessage: "Neither answer is better",
					description: "Button text for choosing neither answer during comparison"
				},
				skipStep: {
					id: "feedbackModal.skipStep",
					defaultMessage: "Skip this step",
					description: "Button text for skipping comparison step"
				},
				continueWithChosenAnswer: {
					id: "feedbackModal.continueWithChosenAnswer",
					defaultMessage: "The conversation will continue with the answer you choose.",
					description: "Information text for user during comparison"
				}
			});

			function r_(e) {
				var n, t, r, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				return (null == e ? void 0 : null === (n = e.messages) || void 0 === n ? void 0 : n
					.length) === 1 && !(null == e ? void 0 : null === (t = e.messages) || void 0 === t ?
						void 0 : t.some(function(e) {
							return "error" in e
						})) && (!a || !((null == e ? void 0 : null === (r = e.messages) || void 0 === r ?
						void 0 : r.length) === 1 && n4.Cv.getTextFromMessage(null == e ? void 0 : e
						.messages[0].message).length < 20))
			}

			function rM(e) {
				var n, t, r = e.ratingModalNodeId,
					a = e.ratingModalOpen,
					i = e.setRatingModalOpen,
					o = e.handleSubmitFeedback,
					s = e.onHandleChangeFeedbackComparisonRating,
					l = e.feedbackTextareaRef,
					u = e.clientThreadId,
					c = e.activeRequests,
					d = e.modelBackend,
					f = e.onChangeItemInView,
					g = e.onRequestMoreCompletions,
					p = e.onDeleteNode,
					x = e.onRequestCompletion,
					b = e.onUpdateNode,
					j = e.onSandboxLinkClick,
					M = (0, V.Z)(),
					T = _.tQ.getTree(u),
					N = (0, _.XK)(u),
					P = (0, y.useRef)(.5 > Math.random() ? "left" : "right"),
					S = null == T ? void 0 : T.getConversationTurns(r || "root"),
					I = S.length - 1,
					D = S[S.length - 1],
					F = (0, k.hz)().has(Q.FZ),
					E = (0, m._)((0, y.useState)("critique"), 2),
					R = E[0],
					L = E[1],
					A = (0, $.lj)(),
					B = (0, k.hz)().has(Q.Pt) && r_(D, !0) && !A,
					U = (0, w.WS)(),
					q = (0, y.useMemo)(function() {
						return {
							id: r || "root",
							threadId: _.tQ.getServerThreadId(u),
							rating: a,
							model: d
						}
					}, [r, u, a, d]),
					H = null == S ? void 0 : S[(null == S ? void 0 : S.length) - 1].variantIds,
					W = null == H ? void 0 : H[(null == H ? void 0 : H.length) - 1],
					J = (t = (n = null == T ? void 0 : T.getConversationTurns(W))[n.length - 1]).messages[t
						.messages.length - 1].nodeId,
					Y = null == T ? void 0 : T.getConversationTurns(J),
					K = (0, y.useMemo)(function() {
						var e = null == Y ? void 0 : Y[(null == Y ? void 0 : Y.length) - 1];
						return "thumbsDown" === a && B && r_(e) && r_(D)
					}, [a, B, Y, D]),
					X = (0, y.useRef)(Date.now()),
					ee = (0, y.useRef)(-1),
					en = (0, y.useRef)(Date.now()),
					et = (0, y.useRef)(Date.now());
				(0, y.useEffect)(function() {
					"compare" === R ? (ee.current = Date.now(), U(C.s6.displayedComparisonUIV0, q)) :
						"critique" === R && "thumbsDown" === a && U(C.s6
							.displayedThumbsDownFeedbackForm, q)
				}, [R]);
				var er = S.length - 2,
					ea = Y.length - 1,
					ei = Y[Y.length - 1],
					eo = (0, y.useMemo)(function() {
						return ei && n4.Cv.getRequestIdFromConversationTurn(ei)
					}, [ei]),
					es = (0, y.useMemo)(function() {
						return c.has(eo)
					}, [c, eo]);
				(0, y.useMemo)(function() {
					es || (et.current = Date.now())
				}, [es]);
				var el = D.messages,
					eu = el[el.length - 1],
					ec = eu.message.id,
					ed = eu.nodeId,
					ef = T.getLeafFromNode(ed),
					eh = ei.messages,
					eg = eh[eh.length - 1],
					em = eg.message.id,
					ep = eg.nodeId,
					ev = T.getLeafFromNode(ep),
					ex = "critique" === R ? M.formatMessage(rk.provideAdditionalFeedback) : M.formatMessage(
						rk.pickBestAnswer),
					eb = (0, y.useRef)([]),
					ey = (0, y.useRef)(""),
					ej = (0, y.useCallback)(function() {
						var e, n = null === (e = l.current) || void 0 === e ? void 0 : e.elements;
						eb.current = (0, n8._)(n || []).filter(function(e) {
							return e.checked
						}).map(function(e) {
							return e.id
						}).map(function(e) {
							return e.replace("feedback-", "")
						}), ey.current = (null == n ? void 0 : n["feedback-other"].value) || "", o(
							ey.current, eb.current), "thumbsDown" === a && U(C.s6
							.submitThumbsDownFeedbackForm, q), K ? L("compare") : i(void 0)
					}, [K, U, q, l, o, a, i]),
					ew = "critique" === R ? (0, v.jsx)(e8.mH, {
						title: M.formatMessage(rk.submitFeedback),
						onClick: ej
					}) : null,
					eC = "left" === P.current,
					ek = eC ? "new" : "original",
					e_ = eC ? "original" : "new",
					eM = eC ? M.formatMessage(rk.newAnswer) : M.formatMessage(rk.originalAnswer),
					eT = eC ? M.formatMessage(rk.originalAnswer) : M.formatMessage(rk.newAnswer),
					eN = eC ? M.formatMessage(rk.newAnswerBetter) : M.formatMessage(rk
					.originalAnswerBetter),
					eP = eC ? M.formatMessage(rk.originalAnswerBetter) : M.formatMessage(rk
					.newAnswerBetter),
					eS = (0, y.useCallback)(function(e) {
						var n = "left" === e ? ek : "right" === e ? e_ : "same";
						if (U(C.s6.submittedComparisonUIV0, Object.assign({}, q, {
								choice: n
							})), a) {
							var t = _.tQ.getTree(u),
								r = t.getMetadata(ed);
							t.updateNode(ed, {
								metadata: {
									$set: (0, eF._)((0, h._)({}, r), {
										inlineComparisonRating: "baseline"
									})
								}
							});
							var o = t.getMetadata(ep);
							t.updateNode(ep, {
								metadata: {
									$set: (0, eF._)((0, h._)({}, o), {
										inlineComparisonRating: n
									})
								}
							}), s(ec, em, a, n, P.current, X.current, ee.current, en.current, et
								.current, ey.current, eb.current)
						}
						_.tQ.setThreadCurrentLeafId(u, e === P.current ? ev.id : ef.id), i(void 0)
					}, [ek, e_, U, q, a, u, ev.id, ef.id, i, ed, ep, s, ec, em]),
					eI = !es && null != et.current && K,
					eZ = (0, y.useCallback)(function() {
						i(void 0), "critique" === R ? U(C.s6.skippedThumbsDownFeedbackForm, Object
							.assign({}, q)) : "compare" === R && U(C.s6.skippedComparisonUIV0,
							Object.assign({}, q))
					}, [i, U, q, R]);
				return (0, v.jsxs)(e8.ZP, {
					isOpen: !0,
					onModalClose: eZ,
					closeButton: (0, v.jsx)(e8.ol, {
						onClose: eZ
					}),
					size: "custom",
					className: "md:w-[672px] lg:w-[896px] xl:w-[1024px] xl:max-w-7xl",
					type: "critique" === R ? "thumbsUp" === a ? "success" : "danger" : "success",
					icon: "critique" === R ? "thumbsUp" === a ? z.fmn : z.oLd : void 0,
					title: ex,
					primaryButton: ew,
					children: ["critique" === R && (0, v.jsxs)("form", {
						ref: l,
						children: [(0, v.jsx)(e7.ZP, {
							id: "feedback-other",
							placeholder: "thumbsUp" === a ? M.formatMessage(
									rk.thumbsUpPlaceholder) : M
								.formatMessage(rk.thumbsDownPlaceholder),
							rows: 3,
							className: "mb-1 mt-4 w-full rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white"
						}), "thumbsDown" === a && (0, v.jsxs)("div", {
							className: "mb-4",
							children: [(0, v.jsx)(n6, {
								id: "feedback-harmful",
								label: M.formatMessage(rk
									.harmfulUnsafe)
							}), (0, v.jsx)(n6, {
								id: "feedback-false",
								label: M.formatMessage(rk
									.notTrue)
							}), (0, v.jsx)(n6, {
								id: "feedback-not-helpful",
								label: M.formatMessage(rk
									.notHelpful)
							})]
						})]
					}), "compare" === R && Y && void 0 !== N && (0, v.jsxs)("div", {
						className: (0, Z.Z)("w-full"),
						children: [(0, v.jsx)("p", {
							className: (0, Z.Z)("mb-7 mt-3"),
							children: (0, v.jsx)(G.Z, (0, h._)({}, rk
								.continueWithChosenAnswer))
						}), (0, v.jsx)(rP, {
							className: F ? "rounded-2xl" : "rounded-md",
							children: (0, v.jsx)(rS, {
								children: (0, v.jsx)(rc, {
									modelBackend: d,
									turnIndex: er,
									isFinalTurn: !1,
									clientThreadId: u,
									onChangeItemInView: f,
									onChangeRating: O(),
									onRequestMoreCompletions: g,
									onDeleteNode: p,
									onRequestCompletion: x,
									onUpdateNode: b,
									onSandboxLinkClick: j,
									activeRequests: c,
									showInlineEmbeddedDisplay:
										!0,
									onHandleChangeVariantFeedbackInlineComparisonRating: O()
								})
							})
						}), (0, v.jsxs)("div", {
							className: (0, Z.Z)(),
							children: [(0, v.jsxs)("div", {
								className: (0, Z.Z)(
									"mb-2 grid w-full grid-cols-2 gap-5"
									),
								children: [(0, v.jsx)("div", {
									children: (0, v
										.jsx)(
										"p", {
											className: (
													0,
													Z
													.Z
													)
												(
													"font-semibold"),
											children: eM
										})
								}), (0, v.jsx)("div", {
									children: (0, v
										.jsx)(
										"p", {
											className: (
													0,
													Z
													.Z
													)
												(
													"font-semibold"),
											children: eT
										})
								})]
							}), (0, v.jsxs)("div", {
								className: (0, Z.Z)(
									"mb-5 grid w-full grid-cols-2 gap-5"
									),
								children: [(0, v.jsxs)(rN, {
									children: [(0, v
											.jsx
											)(
											rS, {
												children: (
														0,
														v
														.jsx
														)
													(rc, {
														modelBackend: d,
														turnIndex: eC ?
															ea :
															I,
														turnLeafId: eC ?
															ep :
															ed,
														isFinalTurn:
															!
															0,
														clientThreadId: u,
														onChangeItemInView: f,
														onChangeRating: O(),
														onDeleteNode: p,
														onRequestMoreCompletions: g,
														onRequestCompletion: x,
														onUpdateNode: b,
														onSandboxLinkClick: j,
														activeRequests: c,
														showInlineEmbeddedDisplay:
															!
															0,
														onHandleChangeVariantFeedbackInlineComparisonRating: O()
													})
											}),
										(0, v
											.jsx
											)(
											rT, {
												children: (
														0,
														v
														.jsx
														)
													(e8.mH, {
														disabled:
															!
															eI,
														title: eN,
														onClick: function() {
															return eS(
																"left"
																)
														},
														color: "dark"
													})
											})
									]
								}), (0, v.jsxs)(rN, {
									children: [(0, v
											.jsx
											)(
											rS, {
												children: (
														0,
														v
														.jsx
														)
													(rc, {
														modelBackend: d,
														turnIndex: eC ?
															I :
															ea,
														turnLeafId: eC ?
															ed :
															ep,
														isFinalTurn:
															!
															0,
														clientThreadId: u,
														onChangeItemInView: f,
														onChangeRating: O(),
														onDeleteNode: p,
														onRequestMoreCompletions: g,
														onRequestCompletion: x,
														onUpdateNode: b,
														onSandboxLinkClick: j,
														activeRequests: c,
														showInlineEmbeddedDisplay:
															!
															0,
														onHandleChangeVariantFeedbackInlineComparisonRating: O()
													})
											}),
										(0, v
											.jsx
											)(
											rT, {
												children: (
														0,
														v
														.jsx
														)
													(e8.mH, {
														disabled:
															!
															eI,
														title: eP,
														onClick: function() {
															return eS(
																"right"
																)
														},
														color: "dark"
													})
											})
									]
								})]
							}), (0, v.jsx)("div", {
								className: (0, Z.Z)(
									"grid w-full"),
								children: (0, v.jsxs)("div", {
									className: (0, Z.Z)(
										"mb-2 text-right"
										),
									children: [(0, v
										.jsx)(e8
										.mH, {
											disabled:
												!
												eI,
											title: M
												.formatMessage(
													rk
													.neitherAnswerBetter
													),
											color: "primary",
											onClick: function() {
												return eS(
													"same"
													)
											},
											className: (
													0,
													Z
													.Z
													)
												(
													"mr-2")
										}), (0,
										v.jsx)(
										e8.mH, {
											title: M
												.formatMessage(
													rk
													.skipStep
													),
											onClick: function() {
												return i(
													void 0
													)
											}
										})]
								})
							})]
						})]
					})]
				}, "RatingModal-".concat(r))
			}
			var rT = j.Z.div(ry()),
				rN = j.Z.div(rj()),
				rP = j.Z.div(rw()),
				rS = j.Z.div(rC());

			function rI() {
				var e = (0, p._)([
					"\nflex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]\n",
					"\n", "\n"
				]);
				return rI = function() {
					return e
				}, e
			}

			function rZ() {
				var e = (0, p._)([
					"\nabsolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5  hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent\n",
					" ", ""
				]);
				return rZ = function() {
					return e
				}, e
			}

			function rD() {
				var e = (0, p._)(["",
					" flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center"]);
				return rD = function() {
					return e
				}, e
			}
			var rF = n$()(Promise.resolve().then(t.bind(t, 22208)), {
					loadableGenerated: {
						webpack: function() {
							return [22208]
						}
					},
					ssr: !1
				}),
				rE = (0, H.vU)({
					errorGeneratingResponse: {
						id: "PromptTextarea.errorGeneratingResponse",
						defaultMessage: "There was an error generating a response",
						description: "Error message shown when the response generation fails"
					},
					regenerateResponse: {
						id: "PromptTextarea.regenerateResponse",
						defaultMessage: "Regenerate response",
						description: "Button label for regenerating response"
					},
					continueGenerating: {
						id: "PromptTextarea.continueGenerating",
						defaultMessage: "Continue generating",
						description: "Button label for continuing response generation"
					},
					stopGenerating: {
						id: "PromptTextarea.stopGenerating",
						defaultMessage: "Stop generating",
						description: "Button label for stopping response generation"
					},
					placeholder: {
						id: "PromptTextarea.placeholder",
						defaultMessage: "Send a message.",
						description: "Placeholder text for the input field"
					},
					continueSharedConversationPlaceholder: {
						id: "PromptTextarea.ontinueSharedConversationPplaceholder",
						defaultMessage: "Send a message to continue the conversation.",
						description: "Placeholder text for the input field when viewing a shared conversation"
					},
					suggestionTooltip: {
						id: "PromptTextarea.suggestionTooltip",
						defaultMessage: "Click to send",
						description: "Tooltip for the suggestion button"
					}
				});

			function rR(e) {
				var n, t = e.onAbortCompletion,
					r = e.onCreateNewCompletion,
					a = e.onRequestMoreCompletions,
					i = e.onContinueGenerating,
					o = e.onFileUpload,
					s = e.canUpload,
					l = e.modelBackend,
					u = e.clientThreadId,
					c = e.isCompletionInProgress,
					d = e.className,
					f = e.currentPrompt,
					g = e.onChangeCurrentPrompt,
					m = e.clearOnSubmit,
					p = void 0 === m || m,
					x = e.disabled,
					b = void 0 !== x && x,
					j = e.shouldRetry,
					M = e.canPause,
					T = void 0 !== M && M,
					N = e.canContinue,
					P = void 0 !== N && N,
					S = e.suggestions,
					D = e.isInteractableSharedThread,
					F = (0, V.Z)(),
					E = (0, _.oq)(u),
					R = (0, _.Hk)(u),
					L = (0, $.lj)(),
					A = (0, w.WS)(),
					B = (0, y.useContext)(I.gt).serviceStatus,
					U = (0, y.useContext)(I.QL).historyDisabled,
					q = (0, y.useRef)(null),
					O = (0, y.useCallback)(function(e) {
						g(e.currentTarget.value)
					}, [g]),
					H = (0, y.useCallback)(function(e, n) {
						if (null == e || e.preventDefault(), !b) {
							var t, a, i = null === (t = q.current) || void 0 === t ? void 0 : t.value,
								o = "".concat(null === (a = q.current) || void 0 === a ? void 0 : a
									.dataset.id, "-nextPrompt");
							i && (r(o, {
								value: i || ""
							}, {
								eventSource: e ? "mouse" : "keyboard"
							}, {
								suggestions: S
							}), p && g(""), (0, e7.SI)(1, q.current), void 0 !== S && (
								void 0 !== n ? te.m.logEvent("chatgpt_prompt_use_suggestion",
								i, {
									index: "".concat(n)
								}) : te.m.logEvent("chatgpt_prompt_ignore_suggestions")))
						}
					}, [p, b, r, g, S]),
					W = (0, y.useCallback)(function() {
						t("", R), a(E, {
							eventSource: "mouse"
						})
					}, [E, R, t, a]),
					J = (0, y.useCallback)(function() {
						t("", R), A(C.s6.pauseCompletion, {
							threadId: _.tQ.getServerThreadId(u),
							eventSource: "mouse"
						})
					}, [R, u, A, t]),
					Y = (0, y.useMemo)(function() {
						return {
							Enter: {
								validator: function() {
									return !b
								},
								handler: function(e) {
									!e.metaKey && (L || e.shiftKey || e.nativeEvent.isComposing) ||
										(e.preventDefault(), c || H())
								}
							},
							Escape: {
								validator: function() {
									return T && c
								},
								handler: function() {
									t("", R), A(C.s6.pauseCompletion, {
										threadId: _.tQ.getServerThreadId(u),
										eventSource: "keyboard"
									})
								}
							}
						}
					}, [b, L, c, H, T, t, R, A, u]),
					K = (0, y.useCallback)(function(e) {
						var n;
						(null === (n = Y[e.key]) || void 0 === n ? void 0 : n.validator(e)) && Y[e.key]
							.handler(e)
					}, [Y]);
				(0, y.useEffect)(function() {
					var e;
					null === (e = q.current) || void 0 === e || e.focus()
				}, []);
				var X = "root" !== E && !c && !(null == B ? void 0 : B.oof),
					ee = null === (n = q.current) || void 0 === n ? void 0 : n.value,
					er = (0, y.useCallback)(function() {
						i(E)
					}, [E, i]),
					ea = (0, k.hz)().has(Q.uj),
					ei = (0, y.useMemo)(function() {
						return (0, v.jsxs)("div", {
							className: j ? "w-full" : "",
							children: [j && (0, v.jsx)("div", {
								className: "mb-3 text-center text-xs",
								children: (0, v.jsx)(G.Z, (0, h._)({}, rE
									.errorGeneratingResponse))
							}), (0, v.jsxs)(rq, {
								$shouldRetry: j,
								children: [!j && ea && (0, v.jsx)(rA, {
									suggestions: S,
									shouldRetry: j,
									currentInputRef: q,
									onChangeCurrentPrompt: g,
									handleCreateNewCompletion: H
								}), X && (0, v.jsxs)(en.z, {
									as: "button",
									color: j ? "primary" : "neutral",
									onClick: W,
									className: (0, Z.Z)(j ? "m-auto" :
										"border-0 md:border"),
									children: [(0, v.jsx)(et.ZP, {
										icon: z.Qxo,
										size: L ? "small" :
											"xsmall",
										className: "flex-shrink-0"
									}), (!L || j) && (0, v.jsx)(
										G.Z, (0, h._)({}, rE
											.regenerateResponse)
										)]
								}), P && (0, v.jsxs)(en.z, {
									as: "button",
									color: "neutral",
									onClick: er,
									className: "border-0 md:border",
									children: [(0, v.jsx)(et.ZP, {
										icon: z.lV_,
										className: "-rotate-180",
										size: L ? "small" :
											"xsmall"
									}), !L && (0, v.jsx)(G.Z, (
											0, h._)({}, rE
											.continueGenerating
											))]
								}), T && c && (0, v.jsxs)(en.z, {
									as: "button",
									color: "neutral",
									onClick: J,
									className: "border-0 md:border",
									children: [(0, v.jsx)(et.ZP, {
										icon: z.jxP,
										size: L ? "small" :
											"xsmall"
									}), !L && (0, v.jsx)(G.Z, (
										0, h._)({}, rE
										.stopGenerating))]
								})]
							})]
						})
					}, [P, T, X, ea, J, H, g, W, er, c, L, j, S]);
				return (0, v.jsx)("form", {
					className: d,
					onSubmit: H,
					children: (0, v.jsxs)("div", {
						className: "relative flex h-full flex-1 items-stretch md:flex-col",
						children: [!L && ei, !j && (0, v.jsxs)(rB, {
							$disabled: j,
							$historyDisabled: U,
							children: [(0, v.jsx)(e7.ZP, {
								tabIndex: 0,
								value: f,
								"data-id": E,
								ref: q,
								style: {
									maxHeight: "200px"
								},
								rows: 1,
								onKeyDown: K,
								onChange: O,
								placeholder: D ? F.formatMessage(rE
									.continueSharedConversationPlaceholder
									) : F.formatMessage(rE
									.placeholder),
								className: (0, Z.Z)(
									"m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent",
									s ? "pl-8 md:pl-5" :
									"pl-2 md:pl-0"),
								disabled: j
							}), s && (0, v.jsx)(rF, {
								clientThreadId: u,
								onFileUpload: o,
								currentLeafId: E,
								modelBackend: l,
								disabled: c
							}), (0, v.jsx)(rU, {
								disabled: c || j || !ee || b,
								$onRightSide: !0,
								$nudgeBottom: c,
								className: c ? "" :
									"disabled:opacity-40",
								children: c ? (0, v.jsx)("div", {
									className: "text-2xl",
									children: (0, v.jsx)(
									rL, {})
								}) : (0, v.jsx)(et.ZP, {
									icon: z.LbG,
									size: "small",
									className: "mr-1"
								})
							})]
						}), L && ei]
					})
				})
			}

			function rL() {
				var e = (0, m._)((0, y.useState)(0), 2),
					n = e[0],
					t = e[1];
				(0, y.useEffect)(function() {
					var e = setInterval(function() {
						t(function(e) {
							return (e + 1) % 3
						})
					}, 350);
					return function() {
						return clearInterval(e)
					}
				}, []);
				for (var r = [], a = 0; a < 3; a++) r.push((0, v.jsx)("span", {
					className: a <= n ? "" : "invisible",
					children: "\xb7"
				}, a));
				return (0, v.jsx)(v.Fragment, {
					children: r
				})
			}

			function rA(e) {
				var n = e.suggestions,
					t = e.shouldRetry,
					r = e.currentInputRef,
					a = e.onChangeCurrentPrompt,
					i = e.handleCreateNewCompletion,
					o = (0, V.Z)(),
					s = (0, y.useCallback)(function(e, n) {
						null !== r.current && (a(e), r.current.value = e, i(void 0, n))
					}, [r, i, a]);
				return (0, y.useEffect)(function() {
					void 0 !== n && te.m.logEvent("chatgpt_prompt_show_suggestions")
				}, [n]), (0, v.jsx)("div", {
					className: "absolute -left-2 bottom-full mb-4 flex max-w-[100vw] grow gap-2 overflow-auto px-2 md:static md:mb-0 md:max-w-none md:overflow-visible md:px-0",
					children: t || void 0 === n ? null : n.slice(0, 2).map(function(e, n) {
						return (0, v.jsxs)(en.z, {
							as: "button",
							color: "neutral",
							onClick: function() {
								return s(e, n)
							},
							className: "group whitespace-nowrap text-left md:whitespace-normal",
							children: [e, (0, v.jsx)("div", {
								className: "absolute bottom-0 right-0 top-0 flex items-center bg-gradient-to-l from-gray-100 from-[60%] pl-6 pr-2 text-gray-700 opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:text-gray-200",
								children: (0, v.jsx)(tG.u, {
									label: o.formatMessage(rE
										.suggestionTooltip),
									side: "top",
									children: (0, v.jsx)(et
									.ZP, {
										icon: z.LbG,
										size: "small"
									})
								})
							})]
						}, n)
					})
				})
			}
			var rB = j.Z.div(rI(), function(e) {
					return e.$historyDisabled ?
						"bg-gray-900 text-white shadow-[0_0_15px_rgba(0,0,0,0.10)] dark:bg-gray-900 dark:text-white dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]" :
						""
				}, function(e) {
					return e.$disabled && "bg-gray-100"
				}),
				rU = j.Z.button(rZ(), function(e) {
					return e.$nudgeBottom && "disabled:bottom-0.5 md:disabled:bottom-1"
				}, function(e) {
					return e.$onRightSide ? "right-1 md:right-2" : "left-1 md:left-2"
				}),
				rq = j.Z.div(rD(), function(e) {
					return e.$shouldRetry ? "" : "h-full"
				}),
				rO = t(56060),
				rz = t(97703),
				rH = (0, y.createContext)(),
				rV = function(e) {
					return (0, M.oR)((0, y.useContext)(rH), e)
				},
				rG = t(1215);

			function rW() {
				var e = (0, p._)([
					"bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase"
				]);
				return rW = function() {
					return e
				}, e
			}
			var rQ = j.Z.span(rW()),
				r$ = t(96237),
				rJ = t(90209),
				rY = t(52477),
				rK = t(7137);

			function rX() {
				var e = (0, p._)([
					"absolute w-[2.5px] h-5 -rotate-45 -top-0.5 left-1.5 bg-gray-500 border-[0.5px] border-gray-100 group-hover/toggle:bg-red-500 dark:border-gray-900"
				]);
				return rX = function() {
					return e
				}, e
			}

			function r0() {
				var e = (0, p._)([
					"flex flex-col rounded-md border border-gray-100 bg-white text-left shadow-sm dark:text-gray-100 dark:bg-gray-900 dark:border-gray-900 dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]"
				]);
				return r0 = function() {
					return e
				}, e
			}

			function r1() {
				var e = (0, p._)(["px-5 flex gap-1 flex-col py-3 whitespace-pre-line"]);
				return r1 = function() {
					return e
				}, e
			}

			function r2() {
				var e = (0, p._)(["block"]);
				return r2 = function() {
					return e
				}, e
			}

			function r3() {
				var e = (0, p._)(["block text-xs text-gray-500"]);
				return r3 = function() {
					return e
				}, e
			}

			function r5(e) {
				var n = e.items,
					t = e.value,
					r = e.onChange,
					a = (0, m._)((0, y.useState)(function() {
						return n.reduce(function(e, n) {
							if (n.options.length > 0) {
								if (n.options.some(function(e) {
										return e.value === t
									})) return e[n.value] = t, e;
								e[n.value] = n.options[0].value
							}
							return e
						}, {})
					}), 2),
					i = a[0],
					o = a[1],
					s = (0, y.useCallback)(function(e, a) {
						var s = t;
						void 0 !== a && o(function(n) {
							return (0, eF._)((0, h._)({}, n), (0, r$._)({}, e, a))
						}), (s = void 0 !== a ? a : (null == i ? void 0 : i[e]) !== void 0 && n
							.some(function(n) {
								return n.value === e && n.options.some(function(n) {
									return n.value === i[e]
								})
							}) ? i[e] : e) !== t && r(s)
					}, [n, i, r, t]);
				return (0, v.jsxs)(rY.fC, {
					className: "relative gap-2 rounded-xl bg-gray-100 p-1 w-radix-navigation-menu-viewport dark:bg-gray-900",
					children: [(0, v.jsx)(rY.aV, {
						className: "flex w-full list-none",
						children: n.map(function(e, n) {
							var r, a, o, l, u, c = (null == i ? void 0 : i[e
									.value]) !== void 0 ? i[e.value] : null ===
								(r = e.options) || void 0 === r ? void 0 :
								null === (a = r[0]) || void 0 === a ? void 0 : a
								.value,
								d = null !== (o = e.options.find(function(e) {
									return e.value === c
								})) && void 0 !== o ? o : e.options[0],
								f = null !== (l = null == d ? void 0 : d
								.icon) && void 0 !== l ? l : null,
								h = t === e.value || e.options.some(function(
								e) {
									return e.value === t
								});
							return (0, v.jsx)(r7, {
								item: e,
								isSelected: h,
								currentValue: t,
								defaultOption: null == d ? void 0 : d
									.value,
								onChange: s,
								currentIcon: f,
								displayCurrentValue: h && e
									.showSelectedValueBelow && null !==
									(u = null == d ? void 0 : d.name) &&
									void 0 !== u ? u : ""
							}, n)
						})
					}), (0, v.jsx)("div", {
						className: "absolute left-0 top-full z-10 flex w-full justify-center",
						style: {
							perspective: "2000px"
						},
						children: (0, v.jsx)(rY.l_, {
							className: "relative z-20 w-full translate-y-3 overflow-hidden h-radix-navigation-menu-viewport"
						})
					})]
				})
			}

			function r4(e) {
				var n = e.item,
					t = e.isSelected,
					r = e.isOpen,
					a = e.onChange,
					i = e.currentIcon,
					o = e.displayCurrentValue,
					s = n.options.length > 1,
					l = null != i ? i : n.icon;
				return (0, v.jsxs)("div", {
					className: (0, Z.Z)(
						"relative flex w-full select-none items-center justify-center gap-1 rounded-lg border px-5 py-3 md:gap-2 md:px-8 md:py-3",
						"group/toggle", t ?
						"border-black/10 bg-white shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] dark:border-gray-600/50 dark:bg-white/10" :
						"border-transparent text-gray-500"),
					onClick: function() {
						n.disabled || a(n.value)
					},
					children: [(0, v.jsxs)("span", {
						className: (0, Z.Z)("relative max-[370px]:hidden", n.disabled &&
							"group-hover/toggle:text-red-500"),
						children: [null != l && (0, v.jsx)(et.ZP, {
							icon: l,
							className: (0, Z.Z)(t && n.activeClass)
						}), n.disabled && (0, v.jsx)(at, {})]
					}), (0, v.jsx)("span", {
						className: "truncate text-sm group-hover/toggle:text-gray-800 group-hover/toggle:dark:text-gray-100",
						children: n.name
					}), !n.disabled && s && (0, v.jsx)(et.ZP, {
						icon: void 0 !== r && r ? z.rH8 : z.bTu,
						strokeWidth: 1
					}), "" !== o && (0, v.jsx)("span", {
						className: "absolute left-0 top-full mt-4 w-full truncate overflow-ellipsis text-sm text-gray-500",
						children: o
					})]
				})
			}

			function r7(e) {
				var n = e.item,
					t = e.isSelected,
					r = e.defaultOption,
					a = e.onChange,
					i = e.currentIcon,
					o = e.currentValue,
					s = e.displayCurrentValue,
					l = (0, y.useRef)(null),
					u = n.options.length > 1,
					c = !(void 0 === n.description && void 0 === n.disclaimer);
				return (0, v.jsxs)(rY.ck, {
					value: u ? n.options[0].value : void 0,
					className: "flex-1",
					children: [(0, v.jsx)(rY.xz, {
						className: "w-full select-none",
						ref: l,
						children: (0, v.jsx)(r4, {
							item: n,
							isSelected: t,
							onChange: a,
							currentIcon: i,
							displayCurrentValue: s
						})
					}), (0, v.jsx)(rY.VY, {
						className: "absolute left-0 top-0 w-full",
						children: (0, v.jsxs)(ar, {
							children: [c && (0, v.jsx)(r8, {
								item: n
							}), u && (0, v.jsx)(r6, {
								defaultOption: r,
								item: n,
								currentValue: o,
								onChange: function(e, n) {
									var t;
									a(e, n), null === (t = l
											.current) ||
										void 0 === t || t
										.click()
								},
								className: (0, Z.Z)("text-sm", c &&
									"border-t dark:border-gray-800"
									)
							})]
						})
					})]
				})
			}

			function r8(e) {
				var n = e.item;
				return (0, v.jsxs)(aa, {
					className: "text-sm sm:text-base",
					children: [void 0 !== n.description && (0, v.jsx)(ai, {
						children: n.description
					}), void 0 !== n.disclaimer && (0, v.jsx)(ao, {
						children: n.disclaimer
					})]
				})
			}

			function r6(e) {
				var n = e.item,
					t = e.className,
					r = e.onChange,
					a = e.currentValue,
					i = e.defaultOption,
					o = n.icon;
				return (0, v.jsx)(rY.Tr, {
					defaultValue: i,
					orientation: "vertical",
					className: t,
					children: (0, v.jsx)(rY.aV, {
						className: "group/options",
						children: n.options.map(function(e, t) {
							return (0, v.jsx)(r9, {
								option: e,
								selected: a === e.value,
								active: i === e.value,
								activeClass: n.activeClass,
								overlayIcon: null != o && 0 !== t ? o :
									null,
								showBorder: t !== n.options.length - 1,
								isDisabled: e.disabled,
								onChange: function() {
									e.disabled || r(n.value, e.value)
								}
							}, e.value)
						})
					})
				})
			}

			function r9(e) {
				var n = e.option,
					t = e.selected,
					r = e.active,
					a = e.activeClass,
					i = e.overlayIcon,
					o = e.isDisabled,
					s = e.onChange,
					l = e.showBorder,
					u = t ? rK.xik : rK.l_A;
				return (0, v.jsx)(rY.ck, {
					asChild: !0,
					value: n.value,
					onClick: s,
					children: (0, v.jsxs)(rY.Lo, {
						className: (0, Z.Z)(
							"group/option relative flex w-full items-center gap-2 p-2 px-5 pr-9", {
								"text-gray-800 dark:text-gray-100": t || r,
								"cursor-pointer": !o,
								"border-b dark:border-gray-800": l
							}),
						children: [null != n.icon ? (0, v.jsxs)("span", {
							className: (0, Z.Z)(
								"text-gray-500 max-[370px]:hidden", !o &&
								"group-hover/option:text-gray-600 dark:group-hover/option:text-gray-400"
								),
							children: [(0, v.jsx)(et.ZP, {
								icon: n.icon,
								className: (0, Z.Z)(t ? null == i ?
									a :
									"text-gray-600 dark:text-gray-400" :
									"")
							}), null != i && (0, v.jsx)(et.ZP, {
								icon: i,
								className: (0, Z.Z)(
									"absolute left-6 top-2 h-4 w-4 stroke-white stroke-[1px] dark:stroke-gray-900",
									t && a)
							})]
						}) : null, (0, v.jsx)("span", {
							className: (0, Z.Z)({
								"truncate text-gray-500 dark:text-gray-300":
									!0,
								"group-hover/option:text-gray-800 dark:group-hover/option:text-gray-100":
									!o,
								"text-gray-800 dark:text-gray-100": r
							}),
							children: n.name
						}), n.tags.map(function(e) {
							return an(e)
						}), (0, v.jsx)("span", {
							className: (0, Z.Z)({
								"absolute right-3 rounded-full p-1 text-blue-400 group-hover/options:group-hover/option:opacity-100":
									!0,
								"group-hover/options:opacity-50": t,
								"opacity-0": !t && !o && !r,
								"text-red-500": o
							}),
							children: (0, v.jsx)(et.ZP, {
								icon: o ? rJ.Z : u,
								size: t && !o ? "small" : "xsmall"
							})
						})]
					})
				})
			}
			var ae = new Set(["beta", "confidential", "alpha"]),
				an = function(e) {
					return ae.has(e) && (0, v.jsx)("span", {
						className: (0, Z.Z)("py-0.25 rounded px-1 text-sm capitalize", "beta" ===
							e && "bg-blue-200 text-blue-500", "alpha" === e &&
							"bg-blue-200 text-blue-500", "confidential" === e &&
							"bg-red-200 text-red-800"),
						children: e
					}, e)
				},
				at = j.Z.span(rX()),
				ar = j.Z.div(r0()),
				aa = j.Z.div(r1()),
				ai = j.Z.span(r2()),
				ao = j.Z.span(r3()),
				as = t(92186);

			function al(e) {
				var n = e.onModelChange,
					t = e.currentModel,
					r = (0, w.WS)(),
					a = (0, re.BT)(),
					i = (0, as.ZP)().items,
					o = (0, y.useCallback)(function(e) {
						a !== e && (n(e), r(C.s6.toggleModel, {
							model: e
						}))
					}, [a, r, n]);
				return (0, v.jsx)(r5, {
					value: null == t ? void 0 : t.id,
					onChange: o,
					items: i
				})
			}
			var au = t(12285),
				ac = t(57526),
				ad = t(99581),
				af = t(30892),
				ah = t.n(af),
				ag = t(7361),
				am = t.n(ag);

			function ap(e) {
				var n = e.values,
					t = e.className,
					r = Object.keys(n),
					a = Object.values(n);
				return (0, v.jsxs)("div", {
					className: (0, Z.Z)("flex w-full items-stretch gap-2", t),
					children: [(0, v.jsx)("div", {
						className: "flex w-1/2 flex-col justify-between gap-1 text-sm text-gray-600 dark:text-gray-300",
						children: r.map(function(e, n) {
							return (0, v.jsx)("span", {
								children: ah()(e)
							}, n)
						})
					}), (0, v.jsx)("div", {
						className: "my-1.5 flex flex-1 flex-col justify-between gap-2",
						children: a.map(function(e, n) {
							var t = (0, m._)(e, 2),
								r = t[0],
								a = t[1];
							return (0, v.jsx)(av, {
								num: r,
								max: a
							}, n)
						})
					})]
				})
			}

			function av(e) {
				var n = e.num,
					t = e.max,
					r = (0, y.useMemo)(function() {
						var e = am()(Array(t), !1);
						return am()(e, !0, 0, n)
					}, [t, n]);
				return (0, v.jsx)("div", {
					className: "flex w-full gap-1",
					children: r.map(function(e, n) {
						return (0, v.jsx)("div", {
							className: (0, Z.Z)("h-2 w-full rounded-lg", e ?
									"bg-green-600" : "bg-gray-200 dark:bg-gray-600"
									),
							children: e
						}, n)
					})
				})
			}

			function ax() {
				var e = (0, p._)([
					"rounded bg-white ring-1 ring-black/10 dark:bg-gray-800 dark:ring-white/20"
				]);
				return ax = function() {
					return e
				}, e
			}

			function ab() {
				var e = (0, p._)([
					"absolute z-[17] mt-2 flex max-h-60 w-full flex-col overflow-hidden text-base focus:outline-none dark:last:border-0 sm:text-xs md:w-[100%]"
				]);
				return ab = function() {
					return e
				}, e
			}

			function ay() {
				var e = (0, p._)(["absolute z-[17] -ml-[1px] flex flex-col gap-2 p-3 sm:p-4"]);
				return ay = function() {
					return e
				}, e
			}

			function aj() {
				var e = (0, p._)(["flex items-center gap-1.5 truncate"]);
				return aj = function() {
					return e
				}, e
			}

			function aw() {
				var e = (0, p._)(["h-6 w-6 shrink-0"]);
				return aw = function() {
					return e
				}, e
			}

			function aC() {
				var e = (0, p._)([
					"absolute inset-y-0 right-0 flex items-center pr-3 text-gray-800 dark:text-gray-100"
				]);
				return aC = function() {
					return e
				}, e
			}
			var ak = ["confidential", "alpha", "plus"];

			function a_(e) {
				var n = e.selectedOption,
					t = e.onChange,
					r = e.onAction,
					a = e.onOpen,
					i = e.onClose,
					o = e.dropdownRef,
					s = (0, g._)(e, ["selectedOption", "onChange", "onAction", "onOpen", "onClose",
						"dropdownRef"
					]),
					l = (0, y.useCallback)(function(e) {
						"string" == typeof e ? null == r || r(e) : t(e)
					}, [t, r]);
				return (0, v.jsx)(au.R, {
					value: n.value,
					onChange: l,
					children: function(e) {
						var t = e.open;
						return (0, v.jsx)(aT, (0, h._)({
							ref: o,
							selectedLabel: (0, v.jsxs)(v.Fragment, {
								children: [n.title, n.tags.map(function(e) {
									return aD(e)
								}), n.customTags]
							}),
							open: t,
							onOpen: a,
							onClose: i
						}, s))
					}
				})
			}

			function aM(e) {
				var n = e.selectedOptions,
					t = e.selectedLabel,
					r = e.onChange,
					a = e.onAction,
					i = e.onOpen,
					o = e.onClose,
					s = e.dropdownRef,
					l = (0, g._)(e, ["selectedOptions", "selectedLabel", "onChange", "onAction", "onOpen",
						"onClose", "dropdownRef"
					]),
					u = (0, y.useCallback)(function(e) {
						if (e.some(function(e) {
								return "string" == typeof e
							})) {
							var n = e.find(function(e) {
								return "string" == typeof e
							});
							null == a || a(n)
						} else r(e)
					}, [r, a]);
				return (0, v.jsx)(au.R, {
					value: n.map(function(e) {
						return e.value
					}),
					multiple: !0,
					onChange: u,
					children: function(e) {
						var r = e.open;
						return (0, v.jsx)(aT, (0, h._)({
							ref: s,
							selectedLabel: t || "".concat(n.length, " selected"),
							open: r,
							onOpen: i,
							onClose: o,
							multiple: !0
						}, l))
					}
				})
			}
			var aT = (0, y.forwardRef)(function(e, n) {
				var t = e.name,
					r = e.selectedLabel,
					a = e.open,
					i = e.options,
					o = e.actions,
					s = e.multiple,
					l = e.isLoading,
					u = e.loadingState,
					c = e.header,
					d = e.onOpen,
					f = e.onClose,
					h = e.theme,
					g = (0, y.useRef)(null),
					m = (0, y.useRef)(null),
					p = (0, $.dD)();
				(0, y.useImperativeHandle)(n, function() {
					return {
						open: function() {
							if (!a) {
								var e;
								null === (e = g.current) || void 0 === e || e.click()
							}
						},
						close: function() {
							if (a) {
								var e;
								null === (e = g.current) || void 0 === e || e.click()
							}
						}
					}
				}, [a]);
				var x = l ? u || (0, v.jsx)("div", {
					className: "flex h-[42px] items-center justify-center",
					children: (0, v.jsx)(er.Z, {})
				}) : (0, v.jsxs)(v.Fragment, {
					children: [c, (0, v.jsxs)(au.R.Options, {
						className: "overflow-auto",
						children: [i.map(function(e, n) {
							return (0, v.jsx)(aN, {
								value: e.value,
								disabled: e.disabled,
								children: function(n) {
									var t = n.selected,
										r = n.active;
									return (0, v.jsxs)(v
										.Fragment, {
											children: [
												(0, v
													.jsxs
													)
												(aA, {
													children: [
														e
														.imageUrl &&
														(0, v
															.jsx
															)
														(aB, {
															children: (
																	0,
																	v
																	.jsx
																	)
																(eV.Z, {
																	url: e
																		.imageUrl,
																	name: e
																		.title,
																	size: "100%"
																})
														}),
														(0, v
															.jsxs
															)
														("span", {
															className: (
																	0,
																	Z
																	.Z
																	)
																(t &&
																	!
																	s &&
																	"font-semibold",
																	"flex h-6 items-center gap-1 text-gray-800 dark:text-gray-100"
																	),
															children: [
																e
																.title,
																e
																.tags
																.map(
																	function(
																		e
																		) {
																		return aD(
																			e
																			)
																	}
																	),
																e
																.customTags
															]
														})
													]
												}),
												s &&
												!
												e
												.disabled ?
												(0, v
													.jsx
													)
												(aS, {
													selected: t
												}) :
												t &&
												(0, v
													.jsx
													)
												(aP, {
													icon: z
														.UgA
												}),
												e
												.disabled &&
												(0, v
													.jsx
													)
												(aP, {
													icon: ac
														.Z,
													className: "text-red-700 dark:text-red-500"
												}),
												r &&
												!
												p &&
												(0, ad
													.createPortal
													)
												((0, v
														.jsx)
													(aZ, {
														option: e,
														dropdownRef: m
													}),
													document
													.body
													)
											]
										})
								}
							}, n)
						}), null == o ? void 0 : o.map(function(e, n) {
							return (0, v.jsx)(aN, {
								value: e.id,
								children: function() {
									return (0, v.jsxs)(v
										.Fragment, {
											children: [
												(0, v
													.jsx
													)
												("div", {
													className: "text-gray-800 dark:text-gray-100",
													children: e
														.label
												}),
												(0, v
													.jsx
													)
												(aP, {
													icon: e
														.icon
												})
											]
										})
								}
							}, n)
						})]
					})]
				});
				return (0, v.jsxs)("div", {
					className: "relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4",
					children: [(0, v.jsxs)(au.R.Button, {
						ref: g,
						onClick: a ? f : d,
						className: (0, Z.Z)(
							"relative flex cursor-pointer flex-col rounded-md bg-white py-2 pl-3 pr-10 text-left dark:bg-gray-800 sm:text-sm",
							"mini" === h ?
							"mx-auto w-auto border border-transparent pr-8 hover:border-black/10 dark:hover:border-white/10" :
							"w-full border border-black/10 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20"
							),
						children: ["mini" !== h && (0, v.jsx)(au.R.Label, {
							className: "block text-xs text-gray-700 dark:text-gray-500",
							children: t
						}), (0, v.jsx)("span", {
							className: "inline-flex w-full truncate",
							children: (0, v.jsx)("span", {
								className: "flex h-6 items-center gap-1 truncate",
								children: r
							})
						}), (0, v.jsx)("span", {
							className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
							children: (0, v.jsx)(et.ZP, {
								icon: z.bTu,
								className: " text-gray-400",
								"aria-hidden": "true"
							})
						})]
					}), (0, v.jsx)(eR.u, {
						show: a,
						as: y.Fragment,
						leave: "transition ease-in duration-100",
						leaveFrom: "opacity-100",
						leaveTo: "opacity-0",
						children: (0, v.jsx)(aE, {
							ref: m,
							children: x
						})
					})]
				})
			});

			function aN(e) {
				var n = e.value,
					t = e.disabled,
					r = e.children;
				return (0, v.jsx)(au.R.Option, {
					className: function(e) {
						var n = e.active;
						return (0, Z.Z)(aL, n && !t ? "bg-gray-100 dark:bg-gray-700" :
							"text-gray-900", t &&
							"cursor-auto bg-gray-50 text-gray-400 dark:bg-gray-700 dark:text-gray-100"
							)
					},
					value: n,
					children: r
				})
			}

			function aP(e) {
				var n = e.icon,
					t = e.className;
				return (0, v.jsx)(aU, {
					children: (0, v.jsx)(et.ZP, {
						icon: n,
						className: (0, Z.Z)("h-5 w-5", t),
						"aria-hidden": "true"
					})
				})
			}

			function aS(e) {
				var n = e.selected,
					t = e.disabled;
				return (0, v.jsx)(aU, {
					children: (0, v.jsx)("div", {
						className: (0, Z.Z)(
							"flex h-6 w-6 items-center justify-center rounded-full border transition-colors",
							n ? "border-transparent bg-green-600 text-white" :
							"border-black/5 dark:border-white/20"),
						"aria-hidden": "true",
						children: (0, v.jsx)(et.ZP, {
							icon: z.UgA,
							className: (0, Z.Z)("h-3 w-3 transition-opacity", n &&
								"opacity-100", !n && "opacity-0", !n && !t &&
								"group-hover:opacity-50"),
							strokeWidth: n ? 2.5 : 2
						})
					})
				})
			}

			function aI(e) {
				var n = e.showCheckbox;
				return (0, v.jsxs)("div", {
					className: (0, Z.Z)(aL, "cursor-auto"),
					children: [(0, v.jsxs)(aA, {
						children: [(0, v.jsx)(aB, {
							children: (0, v.jsx)("div", {
								className: "h-full w-full rounded-sm bg-gray-200"
							})
						}), (0, v.jsx)("div", {
							className: "h-[12px] w-[88px] rounded-sm bg-gray-100"
						})]
					}), n && (0, v.jsx)(aS, {
						selected: !1,
						disabled: !0
					})]
				})
			}

			function aZ(e) {
				var n = e.option,
					t = e.dropdownRef,
					r = (0, m._)((0, y.useState)(), 2),
					a = r[0],
					i = r[1];
				(0, y.useEffect)(function() {
					var e = function() {
						if (t.current) {
							var e = t.current.getBoundingClientRect();
							i({
								top: e.top,
								left: e.left - 260,
								minHeight: e.height
							})
						}
					};
					return e(), window.addEventListener("resize", e),
						function() {
							return window.removeEventListener("resize", e)
						}
				}, [t]);
				var o = n.value.properties,
					s = (0, y.useMemo)(function() {
						return o ? (0, v.jsx)(ap, {
							values: o,
							className: "mt-auto"
						}) : null
					}, [o]);
				return a ? (0, v.jsxs)(aR, {
					style: {
						width: 260,
						minHeight: a.minHeight,
						top: a.top,
						left: a.left
					},
					children: [n.disabled && (0, v.jsx)(et.ZP, {
						icon: ac.Z,
						size: "medium",
						className: "text-red-700 dark:text-red-500"
					}), n.imageUrl && (0, v.jsx)(eV.Z, {
						url: n.imageUrl,
						name: n.title,
						size: 70
					}), (0, v.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [n.title, " ", n.tags.map(function(e) {
							return aD(e)
						}), " ", n.customTags]
					}), (0, v.jsx)("div", {
						className: "whitespace-pre-line text-xs",
						children: n.description
					}), !n.disabled && s]
				}) : null
			}
			var aD = function(e) {
					return ak.includes(e) && (0, v.jsx)("span", {
						className: (0, Z.Z)(
							"py-0.25 rounded px-1 text-[10px] font-semibold uppercase",
							"confidential" === e && "bg-red-200 text-red-800", "alpha" === e &&
							"bg-blue-200 text-blue-500", "plus" === e &&
							"bg-yellow-200 text-yellow-900"),
						children: e
					}, e)
				},
				aF = j.Z.div(ax()),
				aE = (0, j.Z)(aF)(ab()),
				aR = (0, j.Z)(aF)(ay()),
				aL =
				"group relative flex h-[42px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-3 pr-9 last:border-0 dark:border-white/20",
				aA = j.Z.span(aj()),
				aB = j.Z.span(aw()),
				aU = j.Z.span(aC()),
				aq = t(20485),
				aO = t(697);

			function az(e) {
				var n = e.plugin,
					t = n.manifest.name_for_human;
				return (0, v.jsxs)("div", {
					className: "flex gap-4 rounded bg-gray-50 px-4 py-2 dark:bg-gray-800",
					children: [(0, v.jsx)(eV.Z, {
						url: n.manifest.logo_url,
						name: t,
						size: 32,
						className: "flex-shrink-0"
					}), (0, v.jsxs)("div", {
						className: "flex flex-col gap-1",
						children: [(0, v.jsx)("h2", {
							className: "align-top text-base font-medium",
							children: t
						}), (0, v.jsx)("div", {
							className: "text-sm",
							children: n.manifest.description_for_human
						})]
					})]
				})
			}

			function aH() {
				var e = (0, p._)(["mt-4 flex flex-col gap-4"]);
				return aH = function() {
					return e
				}, e
			}

			function aV() {
				var e = (0, p._)(["text-sm text-red-500"]);
				return aV = function() {
					return e
				}, e
			}
			var aG = j.Z.div(aH()),
				aW = j.Z.div(aV());

			function aQ(e) {
				var n = e.manifestValidationInfo,
					t = (0, g._)(e, ["manifestValidationInfo"]),
					r = n.manifest_dict,
					a = n.warnings,
					i = n.errors;
				return (0, v.jsx)(aY, (0, h._)({
					name: "manifest",
					content: r,
					warnings: a,
					errors: i
				}, t))
			}

			function a$(e) {
				var n = e.apiValidationInfo,
					t = (0, g._)(e, ["apiValidationInfo"]),
					r = n.openapi_spec_dict,
					a = n.warnings,
					i = n.errors;
				return (0, v.jsx)(aY, (0, h._)({
					name: "OpenAPI spec",
					content: r,
					warnings: a,
					errors: i
				}, t))
			}

			function aJ(e) {
				var n = e.apiValidationInfo,
					t = (0, g._)(e, ["apiValidationInfo"]),
					r = n.api_typescript;
				return r ? (0, v.jsx)(aK, (0, h._)({
					text: "Prompt for ChatGPT",
					content: r
				}, t)) : null
			}

			function aY(e) {
				var n = e.name,
					t = e.content,
					r = e.warnings,
					a = e.errors,
					i = (0, g._)(e, ["name", "content", "warnings", "errors"]),
					o = r && r.length > 0,
					s = a && a.length > 0,
					l = "Validated ".concat(n),
					u = (0, v.jsx)(et.ZP, {
						icon: z.UgA,
						className: "text-green-500"
					});
				return s ? (l = "Errors in ".concat(n), u = (0, v.jsx)(et.ZP, {
					icon: z.q5L,
					className: "text-red-500"
				})) : o && (l = "Warnings in ".concat(n), u = (0, v.jsx)(et.ZP, {
					icon: z.bcx,
					className: "text-yellow-500"
				})), (0, v.jsx)(aK, (0, h._)({
					icon: u,
					text: l,
					content: t,
					warnings: r,
					errors: a
				}, i))
			}

			function aK(e) {
				var n = e.icon,
					t = e.text,
					r = e.content,
					a = e.warnings,
					i = e.errors,
					o = e.expanded,
					s = e.onChangeExpanded,
					l = (0, m._)((0, y.useState)(!1), 2),
					u = l[0],
					c = l[1],
					d = null != o ? o : u,
					f = (0, y.useCallback)(function() {
						s ? s(!d) : c(function(e) {
							return !e
						})
					}, [d, s]);
				return (0, v.jsxs)("div", {
					className: "flex flex-col gap-2 text-sm",
					children: [(0, v.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [n && (0, v.jsx)("div", {
							children: n
						}), (0, v.jsx)("div", {
							children: t
						}), (0, v.jsx)("div", {
							role: "button",
							className: "cursor-pointer text-gray-500 hover:text-gray-700",
							onClick: f,
							children: (0, v.jsx)(et.ZP, {
								icon: d ? z.rH8 : z.bTu
							})
						})]
					}), d && (0, v.jsxs)(v.Fragment, {
						children: [(0, v.jsxs)("div", {
							className: "flex flex-col gap-2 font-semibold",
							children: [i && i.map(function(e, n) {
								return (0, v.jsx)("div", {
									className: "text-red-500",
									children: e
								}, n)
							}), a && a.map(function(e, n) {
								return (0, v.jsx)("div", {
									className: "text-yellow-500",
									children: e
								}, n)
							})]
						}), r && (0, v.jsx)("pre", {
							className: "overflow-auto whitespace-pre-wrap text-xs",
							children: "string" == typeof r ? r : JSON
								.stringify(r, null, 2)
						})]
					})]
				})
			}

			function aX(e) {
				var n = e.onSuccess,
					t = e.onError,
					r = e.onSettled,
					a = (0, x.NL)(),
					i = (0, nr.D)(W.ZP.updatePluginUserSettings.bind(W.ZP), {
						onSuccess: function(e) {
							a0(e, a, ["installedAip"]), a1(e, a, ["approvedAip"]), n(e)
						},
						onError: t,
						onSettled: r
					}).mutate;
				return (0, y.useCallback)(function(e) {
					i({
						pluginId: e,
						isInstalled: !0
					})
				}, [i])
			}

			function a0(e, n, t) {
				n.setQueryData(t, function(n) {
					var t = (0, n8._)((null == n ? void 0 : n.items) || []),
						r = t.findIndex(function(n) {
							return n.id === e.id
						});
					return -1 !== r ? t[r] = e : t.push(e), {
						count: t.length,
						items: t
					}
				})
			}

			function a1(e, n, t) {
				n.setQueryData(t, function(n) {
					var t = (0, n8._)((null == n ? void 0 : n.items) || []),
						r = t.findIndex(function(n) {
							return n.id === e.id
						});
					return -1 !== r && (t[r] = e), {
						count: t.length,
						items: t
					}
				})
			}

			function a2(e) {
				var n = e.manifest.auth;
				if ("oauth" !== n.type || !e.oauth_client_id) return null;
				var t = new URLSearchParams({
					response_type: "code",
					client_id: e.oauth_client_id,
					redirect_uri: "".concat(window.location.origin, "/aip/").concat(e.id,
						"/oauth/callback"),
					scope: n.scope
				});
				return n.client_url.includes("slack.com") && (t.delete("scope"), t.append("user_scope", n
					.scope)), "".concat(n.client_url, "?").concat(t)
			}

			function a3(e) {
				var n = e.onClickInstall,
					t = e.onInstallLocalhost,
					r = e.onClose,
					a = (0, m._)((0, y.useState)(), 2),
					i = a[0],
					o = a[1],
					s = (0, m._)((0, y.useState)(), 2),
					l = s[0],
					u = s[1],
					c = (0, m._)((0, y.useState)(!1), 2),
					d = c[0],
					f = c[1],
					h = (0, y.useCallback)(function(e) {
						o(e)
					}, []),
					g = (0, y.useCallback)(function() {
						f(!0)
					}, []);
				return d && (null == i ? void 0 : i.scrapeManifestResponse.plugin) ? (0, v.jsx)(a6, {
					plugin: null == i ? void 0 : i.scrapeManifestResponse.plugin,
					onClickInstall: n,
					onClose: r
				}) : l && (null == i ? void 0 : i.scrapeManifestResponse.plugin) ? (0, v.jsx)(a8, {
					plugin: i.scrapeManifestResponse.plugin,
					manifestAccessToken: i.manifestAccessToken,
					verificationTokens: l,
					onReadyToInstall: g,
					onClose: r
				}) : i ? (0, v.jsx)(a7, {
					loadManifestResult: i,
					onRefetch: h,
					onSubmitAuthInfo: u,
					onReadyToInstall: g,
					onInstallLocalhost: t,
					onClose: r
				}) : (0, v.jsx)(a5, {
					onFetch: h,
					onClose: r
				})
			}

			function a5(e) {
				var n = e.onFetch,
					t = e.onClose,
					r = (0, m._)((0, y.useState)(!1), 2),
					a = r[0],
					i = r[1],
					o = (0, m._)((0, y.useState)("bearer"), 2),
					s = o[0],
					l = o[1],
					u = (0, m._)((0, y.useState)(), 2),
					c = u[0],
					d = u[1],
					f = (0, y.useRef)(null),
					h = (0, y.useRef)(null),
					g = a9(),
					p = g.fetchManifestAndSpec,
					x = g.isLoading,
					b = (0, k.hz)();
				(0, y.useEffect)(function() {
					var e;
					null === (e = f.current) || void 0 === e || e.focus()
				}, []);
				var j = (0, y.useCallback)(function() {
						i(function(e) {
							return !e
						})
					}, []),
					w = (0, y.useCallback)(function(e) {
						l(e.target.value)
					}, []),
					C = (0, y.useCallback)((0, no._)(function() {
						var e, t, r;
						return (0, ns.Jh)(this, function(i) {
							return (r = null === (e = f.current) || void 0 === e ? void 0 :
								e.value) ? (p({
								domain: r,
								manifestAccessToken: a ? {
									authorization_type: s,
									token: (null === (t = h.current) ||
											void 0 === t ? void 0 : t.value
											) || ""
								} : void 0,
								onSuccess: n,
								onError: function(e) {
									return d((null == e ? void 0 : e
											.message) ||
										"Couldn't find manifest.")
								}
							}), [2]) : (d("Please provide a domain."), [2])
						})
					}), [p, n, s, a]);
				return (0, v.jsx)(e8.ZP, {
					isOpen: !0,
					onModalClose: t,
					type: "success",
					title: "Enter your website domain",
					primaryButton: (0, v.jsx)(e8.mH, {
						title: "Find manifest file",
						color: "primary",
						onClick: C,
						loading: x
					}),
					secondaryButton: (0, v.jsx)(e8.mH, {
						title: "Cancel",
						color: "neutral",
						onClick: t
					}),
					children: (0, v.jsxs)(aG, {
						children: [(0, v.jsxs)("div", {
							children: [(0, v.jsx)("a", {
									href: "https://platform.openai.com/docs/plugins/getting-started",
									target: "_blank",
									rel: "noreferrer",
									className: "text-green-600",
									children: "Visit our documentation to learn how to build a plugin."
								}), " ",
								"If your plugin has been approved to be in the ChatGPT plugin store, and you have made changes to your ",
								"plugin's",
								" manifest, your plugin will be removed from the store, and you will need to",
								" ", (0, v.jsx)("a", {
									target: "_blank",
									rel: "noreferrer",
									className: "text-green-600",
									href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
									children: "resubmit it for review"
								}), "."
							]
						}), (0, v.jsx)(nd, {
							ref: f,
							name: "url",
							displayName: "Domain",
							placeholder: "ex: openai.com or localhost:3000",
							onPressEnter: C,
							autoFocus: !0
						}), b.has("tools3_admin") && (0, v.jsxs)(v.Fragment, {
							children: [(0, v.jsxs)("div", {
								role: "button",
								className: "flex cursor-pointer items-center gap-1 text-sm text-black/60 hover:text-black/70",
								onClick: j,
								children: [(0, v.jsx)("div", {
									children: "My file requires authentication"
								}), (0, v.jsx)(et.ZP, {
									icon: a ? z.rH8 : z
										.bTu
								})]
							}), a && (0, v.jsxs)(v.Fragment, {
								children: [(0, v.jsxs)("div", {
									className: "flex flex-col gap-2 text-sm",
									children: [(0, v
										.jsx)(
										"div", {
											children: "Authentication type"
										}), (0,
										v.jsxs)(
										"div", {
											className: "flex gap-6",
											children: [
												(0, v
													.jsx
													)
												(a4, {
													label: "Bearer",
													value: "bearer",
													checked: "bearer" ===
														s,
													onChange: w
												}),
												(0, v
													.jsx
													)
												(a4, {
													label: "Basic",
													value: "basic",
													checked: "basic" ===
														s,
													onChange: w
												})
											]
										})]
								}), (0, v.jsxs)("div", {
									className: "flex flex-col gap-2 text-sm",
									children: [(0, v
										.jsx)(
										"div", {
											children: "Access token"
										}), (0,
										v.jsx)(
										nd, {
											ref: h,
											name: "manifestToken",
											onPressEnter: C
										})]
								})]
							})]
						}), c && (0, v.jsx)(aW, {
							children: c
						})]
					})
				})
			}

			function a4(e) {
				var n = e.label,
					t = e.value,
					r = e.checked,
					a = e.onChange;
				return (0, v.jsxs)("label", {
					className: "flex items-center gap-2",
					children: [(0, v.jsx)("input", {
						name: "manifestAuthType",
						type: "radio",
						value: t,
						checked: r,
						onChange: a,
						className: "text-green-600 focus:ring-green-600"
					}), n]
				})
			}

			function a7(e) {
				var n = e.loadManifestResult,
					t = e.onRefetch,
					r = e.onSubmitAuthInfo,
					a = e.onReadyToInstall,
					i = e.onInstallLocalhost,
					o = e.onClose,
					s = n.domain,
					l = n.manifestAccessToken,
					u = n.scrapeManifestResponse,
					c = n.apiValidationInfo,
					d = u.plugin,
					f = u.manifest_validation_info,
					h = (0, m._)((0, y.useState)(), 2),
					g = h[0],
					p = h[1],
					b = (0, m._)((0, y.useState)(!1), 2),
					j = b[0],
					w = b[1],
					C = (0, y.useRef)(null),
					k = (0, y.useRef)(null),
					_ = (0, y.useRef)(null),
					M = a9(),
					T = M.fetchManifestAndSpec,
					N = M.isLoading,
					P = (0, x.NL)(),
					S = d && tY(d),
					I = (null == d ? void 0 : d.manifest.auth.type) === "service_http",
					Z = (null == d ? void 0 : d.manifest.auth.type) === "oauth",
					D = f.errors && f.errors.length > 0 || (null == c ? void 0 : c.errors) && (null == c ?
						void 0 : c.errors.length) > 0,
					F = (0, y.useCallback)((0, no._)(function() {
						var e, n, u, c, f;
						return (0, ns.Jh)(this, function(h) {
							switch (h.label) {
								case 0:
									if (!D) return [3, 1];
									return T({
										domain: s,
										manifestAccessToken: l,
										onSuccess: t,
										onError: function(e) {
											return p((null == e ? void 0 : e
													.message) ||
												"Couldn't find manifest.")
										}
									}), [3, 15];
								case 1:
									if (!S) return [3, 2];
									return a0(d, P, ["installedAip"]), i(d), [3, 15];
								case 2:
									if (!I) return [3, 8];
									if (!(null === (e = C.current) || void 0 === e ?
											void 0 : e.value)) return p(
											"Please provide your service access token."
											), [2];
									h.label = 3;
								case 3:
									return h.trys.push([3, 5, 6, 7]), w(!0), [4, W.ZP
										.setPluginServiceHttpToken({
											id: d.id,
											serviceAccessToken: C.current.value
										})
									];
								case 4:
									return r(h.sent().verification_tokens), [3, 7];
								case 5:
									return h.sent(), p("Error setting access token."), [3,
										7];
								case 6:
									return w(!1), [7];
								case 7:
									return [3, 15];
								case 8:
									if (!Z) return [3, 14];
									if (c = null === (n = k.current) || void 0 === n ?
										void 0 : n.value, f = null === (u = _.current) ||
										void 0 === u ? void 0 : u.value, !c || !f) return p(
										"Please provide your OAuth credentials."), [
										2
									];
									h.label = 9;
								case 9:
									return h.trys.push([9, 11, 12, 13]), [4, W.ZP
										.setPluginOAuthClientCredentials({
											id: d.id,
											clientId: k.current.value,
											clientSecret: _.current.value
										})
									];
								case 10:
									return r(h.sent().verification_tokens), [3, 13];
								case 11:
									return h.sent(), p("Error setting OAuth credentials."),
										[3, 13];
								case 12:
									return w(!1), [7];
								case 13:
									return [3, 15];
								case 14:
									d ? a(d) : o(), h.label = 15;
								case 15:
									return [2]
							}
						})
					}), [I, Z, d, s, l, D, S, P, T, t, r, a, i, o]);
				return (0, v.jsx)(e8.ZP, {
					isOpen: !0,
					onModalClose: o,
					type: "success",
					title: "Found plugin",
					primaryButton: (0, v.jsx)(e8.mH, {
						title: D ? "Refetch manifest" : S ? "Install localhost plugin" :
							"Next",
						color: "primary",
						onClick: F,
						loading: j || N
					}),
					secondaryButton: (D || I || Z) && (0, v.jsx)(e8.mH, {
						title: "Cancel",
						color: "neutral",
						onClick: o
					}),
					children: (0, v.jsxs)(aG, {
						children: [(0, v.jsx)(aQ, {
							manifestValidationInfo: f
						}), c && (0, v.jsx)(a$, {
							apiValidationInfo: c
						}), d && (0, v.jsx)(az, {
							plugin: d
						}), I && !D && (0, v.jsxs)("div", {
							children: [(0, v.jsx)("div", {
								className: "text-sm",
								children: "Enter your service access token:"
							}), (0, v.jsx)("div", {
								className: "mt-2",
								children: (0, v.jsx)(nd, {
									ref: C,
									name: "serviceToken",
									placeholder: "Service access token",
									autoComplete: "off",
									onPressEnter: F,
									autoFocus: !0
								})
							})]
						}), Z && !D && (0, v.jsxs)("div", {
							children: [(0, v.jsx)("div", {
								className: "text-sm",
								children: "Enter your OAuth credentials:"
							}), (0, v.jsx)("div", {
								className: "mt-2",
								children: (0, v.jsx)(nd, {
									ref: k,
									name: "clientId",
									placeholder: "Client ID",
									autoComplete: "off",
									onPressEnter: F,
									autoFocus: !0
								})
							}), (0, v.jsx)("div", {
								className: "mt-2",
								children: (0, v.jsx)(nd, {
									ref: _,
									type: "password",
									name: "clientSecret",
									placeholder: "Client secret",
									autoComplete: "off",
									onPressEnter: F
								})
							})]
						}), g && (0, v.jsx)(aW, {
							children: g
						})]
					})
				})
			}

			function a8(e) {
				var n = e.plugin,
					t = e.manifestAccessToken,
					r = e.verificationTokens,
					a = e.onReadyToInstall,
					i = e.onClose,
					o = (0, m._)((0, y.useState)(), 2),
					s = o[0],
					l = o[1],
					u = (0, m._)((0, y.useState)(!1), 2),
					c = u[0],
					d = u[1],
					f = (0, y.useCallback)((0, no._)(function() {
						var e, i;
						return (0, ns.Jh)(this, function(o) {
							switch (o.label) {
								case 0:
									return o.trys.push([0, 2, 3, 4]), d(!0), [4, W.ZP
										.scrapePluginManifest({
											domain: n.domain,
											manifestAccessToken: t
										})
									];
								case 1:
									if (e = o.sent().plugin) {
										for (var s in i = "service_http" === e.manifest.auth
												.type || "oauth" === e.manifest.auth.type ?
												e.manifest.auth.verification_tokens : {}, r)
											if (r[s] !== i[s]) return l('Please add the "'
												.concat(s,
													'" token to your manifest file.'
													)), [2];
										a(e)
									} else l("Error creating plugin.");
									return [3, 4];
								case 2:
									return o.sent(), l("Error creating plugin."), [3, 4];
								case 3:
									return d(!1), [7];
								case 4:
									return [2]
							}
						})
					}), [n, t, r, a]);
				return (0, v.jsx)(e8.ZP, {
					isOpen: !0,
					onModalClose: i,
					type: "success",
					title: "Add verification token",
					primaryButton: (0, v.jsx)(e8.mH, {
						title: "Verify tokens",
						color: "primary",
						onClick: f,
						loading: c
					}),
					secondaryButton: (0, v.jsx)(e8.mH, {
						title: "I'll add the tokens later",
						color: "neutral",
						onClick: i
					}),
					children: (0, v.jsxs)(aG, {
						children: [(0, v.jsx)(az, {
							plugin: n
						}), (0, v.jsx)("div", {
							className: "text-sm",
							children: "Add the following verification tokens to your manifest file:"
						}), (0, v.jsx)("pre", {
							className: "text-sm",
							children: JSON.stringify(r, null)
						}), s && (0, v.jsx)(aW, {
							children: s
						})]
					})
				})
			}

			function a6(e) {
				var n = e.plugin,
					t = e.onClickInstall,
					r = e.onClose,
					a = (0, y.useCallback)(function() {
						t(n)
					}, [n, t]);
				return (0, v.jsx)(e8.ZP, {
					isOpen: !0,
					onModalClose: r,
					type: "success",
					title: "Ready to install",
					primaryButton: (0, v.jsx)(e8.mH, {
						title: "Install for me",
						color: "primary",
						onClick: a
					}),
					secondaryButton: (0, v.jsx)(e8.mH, {
						title: "Install later",
						color: "neutral",
						onClick: r
					}),
					children: (0, v.jsx)(aG, {
						children: (0, v.jsxs)("div", {
							className: "text-sm",
							children: [
								"Your unverified plugin can now be installed by",
								" ", (0, v.jsx)("a", {
									href: "https://platform.openai.com/docs/plugins/production/can-i-invite-people-to-try-my-plugin",
									target: "_blank",
									rel: "noreferrer",
									className: "text-green-600",
									children: "up to 15 developers"
								}), ". Once ", "you're",
								" ready to make your plugin available to everyone, you can",
								" ", (0, v.jsx)("a", {
									href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
									target: "_blank",
									rel: "noreferrer",
									className: "text-green-600",
									children: "submit your plugin for review"
								}), "."
							]
						})
					})
				})
			}

			function a9() {
				var e, n = (0, m._)((0, y.useState)(!1), 2),
					t = n[0],
					r = n[1];
				return {
					fetchManifestAndSpec: (0, y.useCallback)((e = (0, no._)(function(e) {
						var n, t, a, i, o, s, l, u, c;
						return (0, ns.Jh)(this, function(d) {
							switch (d.label) {
								case 0:
									n = e.domain, t = e.manifestAccessToken, a = e
										.onSuccess, i = e.onError, o = tK(n), d
										.label = 1;
								case 1:
									if (d.trys.push([1, 10, 11, 12]), r(!0), !o)
										return [3, 3];
									return [4, tX(o)];
								case 2:
									if (void 0 === (s = d.sent())) return [2];
									return a({
										domain: o,
										scrapeManifestResponse: {
											plugin: s.plugin,
											manifest_validation_info: s
												.manifest_validation_info
										},
										apiValidationInfo: s
											.api_validation_info
									}), [3, 9];
								case 3:
									return [4, W.ZP.scrapePluginManifest({
										domain: n,
										manifestAccessToken: t
									})];
								case 4:
									if (!(l = d.sent()).plugin) return [3, 8];
									d.label = 5;
								case 5:
									return d.trys.push([5, 7, , 8]), [4, W.ZP
										.getPluginApi({
											id: l.plugin.id
										})
									];
								case 6:
									return u = d.sent().api_validation_info, [3, 8];
								case 7:
									return d.sent(), [3, 8];
								case 8:
									a({
										domain: n,
										scrapeManifestResponse: l,
										apiValidationInfo: u,
										manifestAccessToken: t
									}), d.label = 9;
								case 9:
									return [3, 12];
								case 10:
									return c = d.sent(), i(o ? c : void 0), [3, 12];
								case 11:
									return r(!1), [7];
								case 12:
									return [2]
							}
						})
					}), function(n) {
						return e.apply(this, arguments)
					}), []),
					isLoading: t
				}
			}
			var ie = t(5759);

			function it(e) {
				var n = e.onConfirm,
					t = e.onClose;
				return (0, v.jsx)(e8.ZP, {
					isOpen: !0,
					onModalClose: t,
					type: "success",
					title: "Unverified plugin",
					primaryButton: (0, v.jsx)(e8.mH, {
						title: "Continue",
						color: "primary",
						onClick: n
					}),
					secondaryButton: (0, v.jsx)(e8.mH, {
						title: "Cancel",
						color: "neutral",
						onClick: t
					}),
					children: (0, v.jsx)(aG, {
						children: (0, v.jsx)(ie.I, {
							children: (0, v.jsx)(ie.Z, {
								icon: "\uD83D\uDEA8",
								children: "OpenAI hasn't vetted this plugin. This plugin may pose risks to your information. Be sure you trust this plugin before proceeding."
							})
						})
					})
				})
			}

			function ir(e) {
				var n = e.plugin,
					t = e.onInstall,
					r = e.onClose,
					a = (0, m._)((0, y.useState)(!1), 2),
					i = a[0],
					o = a[1],
					s = (0, m._)((0, y.useState)(n), 2),
					l = s[0],
					u = s[1],
					c = (0, y.useCallback)(function() {
						o(!0)
					}, []);
				return l ? i ? (0, v.jsx)(ii, {
					plugin: l,
					onInstall: t,
					onClose: r
				}) : (0, v.jsx)(it, {
					onConfirm: c,
					onClose: r
				}) : (0, v.jsx)(ia, {
					onLoad: u,
					onClose: r
				})
			}

			function ia(e) {
				var n = e.onLoad,
					t = e.onClose,
					r = (0, y.useRef)(null),
					a = (0, m._)((0, y.useState)(!1), 2),
					i = a[0],
					o = a[1],
					s = (0, m._)((0, y.useState)(), 2),
					l = s[0],
					u = s[1];
				(0, y.useEffect)(function() {
					setTimeout(function() {
						var e;
						null === (e = r.current) || void 0 === e || e.focus()
					}, 50)
				}, []);
				var c = (0, y.useCallback)((0, no._)(function() {
					var e, t, a;
					return (0, ns.Jh)(this, function(i) {
						switch (i.label) {
							case 0:
								if (!(t = null === (e = r.current) || void 0 === e ?
										void 0 : e.value)) return u(
									"Please provide a URL."), [2];
								if (tK(t)) return u(
									'To add a localhost plugin, please go to "Develop your own plugin."'
									), [2];
								i.label = 1;
							case 1:
								return i.trys.push([1, 3, 4, 5]), o(!0), [4, W.ZP
									.getPluginByDomain({
										domain: t
									})
								];
							case 2:
								return (a = i.sent()) ? n(a) : u(
									"That plugin doesn't exist."), [3, 5];
							case 3:
								return i.sent(), u("Couldn't find plugin."), [3, 5];
							case 4:
								return o(!1), [7];
							case 5:
								return [2]
						}
					})
				}), [n, o, u]);
				return (0, v.jsx)(e8.ZP, {
					isOpen: !0,
					onModalClose: t,
					type: "success",
					title: "Install an unverified plugin",
					primaryButton: (0, v.jsx)(e8.mH, {
						title: "Find plugin",
						color: "primary",
						onClick: c,
						loading: i
					}),
					secondaryButton: (0, v.jsx)(e8.mH, {
						title: "Cancel",
						color: "neutral",
						onClick: t
					}),
					children: (0, v.jsxs)(aG, {
						children: [(0, v.jsx)("div", {
							children: "Please provide the website domain of the unverified plugin you'd like to install."
						}), (0, v.jsx)(nd, {
							ref: r,
							name: "url",
							placeholder: "openai.com",
							onPressEnter: c
						}), l && (0, v.jsx)(aW, {
							children: l
						})]
					})
				})
			}

			function ii(e) {
				var n = e.plugin,
					t = e.onInstall,
					r = e.onClose,
					a = (0, m._)((0, y.useState)(), 2),
					i = a[0],
					o = a[1],
					s = (0, m._)((0, y.useState)(!1), 2),
					l = s[0],
					u = s[1],
					c = (0, y.useRef)(null),
					d = aX({
						onSuccess: function(e) {
							t(e), r()
						},
						onError: function(e) {
							o("Couldn't install plugin.")
						}
					}),
					f = n.manifest.name_for_human,
					h = "user_http" === n.manifest.auth.type,
					g = "oauth" === n.manifest.auth.type,
					p = (0, y.useCallback)((0, no._)(function() {
						var e, t;
						return (0, ns.Jh)(this, function(r) {
							switch (r.label) {
								case 0:
									if (!g) return [3, 1];
									return (e = a2(n)) ? window.location.href = e : o(
										"Missing plugin configuration for ".concat(f,
											".")), [3, 8];
								case 1:
									if (!h) return [3, 7];
									if (!(null === (t = c.current) || void 0 === t ?
											void 0 : t.value)) return o(
										"Please provide your credentials."), [2];
									r.label = 2;
								case 2:
									return r.trys.push([2, 4, 5, 6]), u(!0), [4, W.ZP
										.setPluginUserHttpToken({
											id: n.id,
											userAccessToken: c.current.value
										})
									];
								case 3:
									return r.sent(), d(n.id), [3, 6];
								case 4:
									return r.sent(), o("Couldn't install plugin."), [3, 6];
								case 5:
									return u(!1), [7];
								case 6:
									return [3, 8];
								case 7:
									try {
										u(!0), d(n.id)
									} catch (e) {
										o("Couldn't install plugin.")
									} finally {
										u(!1)
									}
									r.label = 8;
								case 8:
									return [2]
							}
						})
					}), [n, f, g, h, d]);
				return (0, v.jsx)(e8.ZP, {
					isOpen: !0,
					onModalClose: r,
					type: "success",
					title: "Unverified plugin",
					primaryButton: (0, v.jsx)(e8.mH, {
						title: g ? "Log in with ".concat(f) : "Install plugin",
						color: "primary",
						onClick: p,
						loading: l
					}),
					secondaryButton: (0, v.jsx)(e8.mH, {
						title: "Cancel",
						color: "neutral",
						onClick: r
					}),
					children: (0, v.jsxs)(aG, {
						children: [(0, v.jsx)(az, {
							plugin: n
						}), h && (0, v.jsxs)("div", {
							children: [(0, v.jsx)("div", {
								className: "text-sm",
								children: n.manifest.auth
									.instructions ||
									"Enter your HTTP access token below:"
							}), (0, v.jsx)("div", {
								className: "mt-2",
								children: (0, v.jsx)(nd, {
									ref: c,
									type: "password",
									name: "token",
									placeholder: "Enter your credentials",
									autoComplete: "off",
									onPressEnter: p
								})
							})]
						}), g && (0, v.jsxs)("div", {
							children: ["You will be redirected to", " ", (0, v
								.jsx)("span", {
								className: "font-medium",
								children: f
							}), " to log in."]
						}), i && (0, v.jsx)(aW, {
							children: i
						})]
					})
				})
			}
			var io = t(74437);

			function is() {
				var e = (0, p._)(["flex items-center gap-2 text-xs"]);
				return is = function() {
					return e
				}, e
			}

			function il(e) {
				var n = e.onClose,
					t = (0, k.hz)(),
					r = (0, io.Z)().installedPlugins;
				if (!t.has("tools3_admin")) return null;
				var a = r.map(function(e) {
					return (0, v.jsx)(iu, {
						plugin: e
					}, e.id)
				});
				return (0, v.jsx)(e8.ZP, {
					isOpen: !0,
					onModalClose: n,
					type: "success",
					title: "Plugins admin",
					primaryButton: (0, v.jsx)(e8.mH, {
						title: "Done",
						color: "primary",
						onClick: n
					}),
					children: (0, v.jsx)(aG, {
						children: a
					})
				})
			}

			function iu(e) {
				var n = e.plugin,
					t = (0, m._)((0, y.useState)(!1), 2),
					r = t[0],
					a = t[1],
					i = (0, x.NL)(),
					o = (0, nr.D)(W.ZP.scrapePluginManifest.bind(W.ZP), {
						onSuccess: function(e) {
							var n = e.plugin,
								t = e.manifest_validation_info;
							if (!n) {
								console.log("Error refreshing manifest:", t), alert(
									"Failed to refresh manifest. See console for detailed errors."
									);
								return
							}
							i.setQueryData(["allAip"], function(e) {
								var t = (0, n8._)((null == e ? void 0 : e.items) || []),
									r = t.findIndex(function(e) {
										return e.id === n.id
									});
								return -1 !== r && (t[r] = n), {
									count: t.length,
									items: t
								}
							})
						},
						onError: function(e) {
							console.error(e)
						}
					}).mutate,
					s = (0, nr.D)(W.ZP.deletePlugin.bind(W.ZP), {
						onSuccess: function() {
							i.setQueryData(["allAip"], function(e) {
								var t = (0, n8._)((null == e ? void 0 : e.items) || []),
									r = t.findIndex(function(e) {
										return e.id === n.id
									});
								return -1 !== r && t.splice(r, 1), {
									count: t.length,
									items: t
								}
							})
						},
						onError: function(e) {
							console.error(e)
						}
					}).mutate,
					l = (0, y.useCallback)(function() {
						a(!r)
					}, [r]),
					u = (0, y.useCallback)(function() {
						window.confirm("Are you sure you want to refresh ".concat(n.manifest
							.name_for_human, "'s manifest?")) && o({
							domain: n.domain
						})
					}, [n, o]),
					c = (0, y.useCallback)(function() {
						window.confirm("Are you sure you want to delete the ".concat(n.manifest
							.name_for_human, " plugin?")) && s({
							id: n.id
						})
					}, [n, s]);
				return (0, v.jsxs)("div", {
					children: [(0, v.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [(0, v.jsxs)(id, {
							children: [(0, v.jsx)("div", {
								children: (0, v.jsx)(eV.Z, {
									url: n.manifest
										.logo_url,
									name: n.manifest
										.name_for_human,
									size: 24
								})
							}), (0, v.jsxs)("div", {
								children: [(0, v.jsx)("div", {
									children: n
										.manifest
										.name_for_human
								}), (0, v.jsx)("div", {
									className: "text-gray-500",
									children: n
										.domain
								})]
							})]
						}), (0, v.jsxs)(id, {
							children: [(0, v.jsx)(ic, {
								icon: z.Qxo,
								onClick: u
							}), (0, v.jsx)(ic, {
								icon: z.Ybf,
								onClick: c
							}), (0, v.jsx)(ic, {
								icon: r ? z.rH8 : z.bTu,
								onClick: l
							})]
						})]
					}), r && (0, v.jsx)("pre", {
						className: "mt-1 overflow-x-auto text-[10px]",
						children: JSON.stringify(n, null, 2)
					})]
				})
			}

			function ic(e) {
				var n = e.icon,
					t = e.onClick;
				return (0, v.jsx)("div", {
					role: "button",
					className: "cursor-pointer text-gray-500 hover:text-gray-700",
					onClick: t,
					children: (0, v.jsx)(et.ZP, {
						icon: n
					})
				})
			}
			var id = j.Z.div(is()),
				ih = t(95552),
				ig = t.n(ih);

			function im(e) {
				var n = e.onClose,
					t = nu().setupMfa;
				return (0, v.jsx)(e8.ZP, {
					isOpen: !0,
					onModalClose: n,
					type: "success",
					title: "Enable two-factor authentication",
					primaryButton: (0, v.jsx)(e8.mH, {
						title: "Enable two-factor authentication",
						color: "primary",
						onClick: t
					}),
					secondaryButton: (0, v.jsx)(e8.mH, {
						title: "Cancel",
						color: "neutral",
						onClick: n
					}),
					children: (0, v.jsx)(aG, {
						children: (0, v.jsx)(ie.I, {
							children: (0, v.jsx)(ie.Z, {
								icon: "\uD83D\uDEA8",
								children: "This plugin requires you to have two-factor authentication enabled for additional security. Please set up two-factor authentication and try again."
							})
						})
					})
				})
			}

			function ip() {
				var e = (0, p._)(["text-sm text-black/70 dark:text-white/70 whitespace-nowrap ", ""]);
				return ip = function() {
					return e
				}, e
			}

			function iv() {
				var e = (0, p._)(["hidden h-4 border-l border-black/30 dark:border-white/30 sm:block"]);
				return iv = function() {
					return e
				}, e
			}
			var ix = (d = {}, (0, r$._)(d, $._G.Small, 8), (0, r$._)(d, $._G.Medium, 4), (0, r$._)(d, $._G
				.Large, 4), (0, r$._)(d, $._G.XLarge, 6), (0, r$._)(d, $._G.Full, 8), d);

			function ib(e) {
				var n, t, r, a, i, o, s, l, u, c, d, h, g, p, x = e.onInstallWithAuthRequired,
					b = e.onClickInstallDeveloper,
					j = e.onClickDevelop,
					w = e.onClickManage,
					C = e.onClickAbout,
					_ = e.onClose,
					M = (0, ei.kP)().session,
					T = (0, io.Z)(),
					N = T.installedPlugins,
					P = T.isLoading,
					S = (u = (0, ei.kP)().session, c = (0, ni.Fl)().isPluginsAvailable, h = (d = (0, e4.a)([
						"approvedAip"
					], function() {
						return W.ZP.getPlugins({
							offset: 0,
							limit: 250,
							statuses: ["approved"],
							accessToken: null == u ? void 0 : u.accessToken
						})
					}, {
						enabled: c && !!(null == u ? void 0 : u.accessToken),
						onError: function(e) {
							console.error(e)
						}
					})).data, g = d.isLoading, (0, y.useMemo)(function() {
						var e = h ? h.items.reduce(function(e, n) {
							var t = !0,
								r = !1,
								a = void 0;
							try {
								for (var i, o = (n.categories || [])[Symbol.iterator](); !(
										t = (i = o.next()).done); t = !0) {
									var s = i.value;
									e[s.id] || (e[s.id] = {
										id: s.id,
										title: s.title,
										items: []
									}), e[s.id].items.push(n)
								}
							} catch (e) {
								r = !0, a = e
							} finally {
								try {
									t || null == o.return || o.return()
								} finally {
									if (r) throw a
								}
							}
							return e
						}, {}) : {};
						return {
							approvedPlugins: h ? h.items : [],
							approvedPluginsByCategory: e,
							isLoading: g
						}
					}, [h, g])),
					I = S.approvedPlugins,
					Z = S.isLoading,
					D = S.approvedPluginsByCategory,
					F = (0, y.useMemo)(function() {
						return N.filter(function(e) {
							return "approved" !== e.status
						})
					}, [N]),
					E = (0, y.useMemo)(function() {
						var e = [];
						for (var n in D) D[n].items.length > 0 && e.push({
							id: n,
							title: D[n].title
						});
						return e.push({
							id: f.All,
							title: "All plugins"
						}), F.length > 0 && e.push({
							id: f.Developer,
							title: "Unverified plugins"
						}), e
					}, [F.length, D]),
					R = (0, m._)((0, y.useState)(E[0].id), 2),
					L = R[0],
					A = R[1],
					B = function(e, n) {
						for (var t = (0, n8._)(e), r = ig()(n), a = t.length - 1; a > 0; a--) {
							var i, o = Math.floor(r() * (a + 1));
							i = [t[o], t[a]], t[a] = i[0], t[o] = i[1]
						}
						var s = t.findIndex(function(e) {
							return "api.openai.com" === e.domain
						});
						if (-1 !== s) {
							var l = t.splice(s, 1)[0];
							t.unshift(l)
						}
						return t
					}(iy((0, y.useMemo)(function() {
						if (L === f.All) return I;
						if (L !== f.Developer) {
							var e, n;
							return null !== (n = null === (e = D[L]) || void 0 === e ? void 0 :
								e.items) && void 0 !== n ? n : []
						}
						return []
					}, [I, L, D])), (null == M ? void 0 : null === (p = M.user) || void 0 === p ?
						void 0 : p.id) || ""),
					U = iy(F),
					q = (0, k.hz)(),
					O = ix[(0, $.dQ)()],
					z = [],
					H = !1;
				L === f.Developer ? (z = U, H = P) : (z = B, H = Z);
				var V = (t = (n = {
							items: z,
							numItemsPerPage: O
						}).items, r = n.numItemsPerPage, i = (a = (0, m._)((0, y.useState)(0), 2))[0], o =
						a[1], s = Math.ceil(t.length / r), l = i * r, {
							page: i,
							numPages: s,
							pageItems: t.slice(l, l + r),
							goToPage: (0, y.useCallback)(function(e) {
								o(e)
							}, [])
						}),
					G = V.page,
					Q = V.numPages,
					J = V.pageItems,
					Y = V.goToPage;
				(0, y.useEffect)(function() {
					L === f.Developer && 0 === F.length && (A(E[0].id), Y(0))
				}, [L, F, Y, E]), (0, y.useEffect)(function() {
					Z || A(E[0].id)
				}, [Z]);
				var K = (0, m._)((0, y.useState)(!1), 2),
					X = K[0],
					ee = K[1];
				return X ? (0, v.jsx)(im, {
					onClose: function() {
						ee(!1)
					}
				}) : (0, v.jsx)(e8.ZP, {
					isOpen: !0,
					onModalClose: _,
					type: "success",
					title: "Plugin store",
					size: "custom",
					className: "w-full max-w-7xl bg-gray-50 md:min-w-[672px] lg:min-w-[896px] xl:min-w-[1024px]",
					closeButton: (0, v.jsx)(e8.ol, {
						onClose: _
					}),
					children: (0, v.jsxs)(aG, {
						children: [!H && E.length > 1 && (0, v.jsx)("div", {
							className: "flex gap-3",
							children: E.map(function(e) {
								return (0, v.jsx)(ij, {
									selected: L === e.id,
									onClick: function() {
										A(e.id), Y(0)
									},
									children: e.title
								}, e.id)
							})
						}), (0, v.jsx)(iw, {
							plugins: J,
							numSkeletons: O,
							isLoading: H,
							onInstallWithAuthRequired: x,
							onRequestMfa: function() {
								return ee(!0)
							}
						}), (0, v.jsxs)("div", {
							className: "flex flex-col flex-wrap items-center justify-center gap-6 sm:flex-row md:justify-between",
							children: [(0, v.jsx)("div", {
								className: "flex flex-1 flex-grow justify-start max-lg:justify-center",
								children: Q > 1 && (0, v.jsx)(iT, {
									page: G,
									numPages: Q,
									goToPage: Y
								})
							}), (0, v.jsxs)("div", {
								className: "flex flex-1 flex-col items-center justify-between gap-2 sm:flex-row",
								children: [q.has("tools3_dev") && (
									0, v.jsxs)(v.Fragment, {
									children: [(0, v
											.jsx)(
											iN, {
												onClick: b,
												children: "Install an unverified plugin"
											}), (0,
											v.jsx)(
											iP, {}),
										(0, v.jsx)(
											iN, {
												onClick: j,
												children: "Develop your own plugin"
											}), q
										.has(
											"tools3_admin"
											) && (0,
											v.jsxs)(
											v
											.Fragment, {
												children: [
													(0, v
														.jsx
														)
													(
														iP, {}),
													(0, v
														.jsx
														)
													(iN, {
														onClick: w,
														children: "Plugins admin"
													})
												]
											}), (0,
											v.jsx)(
											iP, {})
									]
								}), !1 && (0, v.jsx)(iN, {
									onClick: C,
									children: "About plugins"
								})]
							})]
						})]
					})
				})
			}

			function iy(e) {
				return (0, y.useMemo)(function() {
					return e.sort(function(e, n) {
						return e.manifest.name_for_human.localeCompare(n.manifest
							.name_for_human)
					})
				}, [e])
			}

			function ij(e) {
				var n = e.selected,
					t = e.onClick,
					r = e.children;
				return (0, v.jsx)(en.z, {
					color: n ? "light" : "neutral",
					className: (0, Z.Z)("focus:ring-0", n && "hover:bg-gray-200", !n &&
						"text-black/50"),
					onClick: t,
					children: r
				})
			}

			function iw(e) {
				var n = e.plugins,
					t = e.numSkeletons,
					r = e.isLoading,
					a = e.onInstallWithAuthRequired,
					i = e.onRequestMfa,
					o = r ? Array(t).fill(0).map(function(e, n) {
						return (0, v.jsx)(ik, {}, n)
					}) : n.map(function(e) {
						return (0, v.jsx)(iC, {
							plugin: e,
							onInstallWithAuthRequired: a,
							onRequestMfa: i
						}, e.id)
					});
				return (0, v.jsx)("div", {
					className: "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 xl:grid-cols-4",
					children: o
				})
			}

			function iC(e) {
				var n, t, r, a, i, o, s, l = e.plugin,
					u = e.onInstallWithAuthRequired,
					c = e.onRequestMfa,
					d = (0, m._)((0, y.useState)(!1), 2),
					f = d[0],
					h = d[1],
					g = (0, m._)((0, y.useState)(!1), 2),
					p = g[0],
					b = g[1],
					j = aX({
						onSuccess: function(e) {
							(0, aO.wu)(e.id)
						},
						onError: function(e) {
							console.error(e), es.m.danger("Error installing ".concat(l.manifest
								.name_for_human, "."))
						},
						onSettled: function() {
							h(!1)
						}
					}),
					w = (t = (n = {
						onSuccess: function() {},
						onError: function(e) {
							console.error(e), es.m.danger("Error uninstalling ".concat(l
								.manifest.name_for_human, "."))
						},
						onSettled: function() {
							b(!1)
						}
					}).onSuccess, r = n.onError, a = n.onSettled, i = (0, x.NL)(), o = (0, nr.D)(W.ZP
						.updatePluginUserSettings.bind(W.ZP), {
							onSuccess: function(e) {
								(function(e, n, t) {
									n.setQueryData(t, function(n) {
										var t = (0, n8._)((null == n ? void 0 : n
												.items) || []),
											r = t.findIndex(function(n) {
												return n.id === e.id
											});
										return -1 !== r && t.splice(r, 1), {
											count: t.length,
											items: t
										}
									})
								})(e, i, ["installedAip"]), a1(e, i, ["approvedAip"]), t(e)
							},
							onError: r,
							onSettled: a
						}).mutate, (0, y.useCallback)(function(e) {
						o({
							pluginId: e,
							isInstalled: !1
						})
					}, [o])),
					C = (0, ei.kP)().session,
					k = nu().isUsernamePassword,
					_ = (0, y.useCallback)(function() {
						var e, n = l.manifest.auth.type;
						if (!("none" === n || "service_http" === n) && !(null == C ? void 0 : null === (
								e = C.user) || void 0 === e ? void 0 : e.mfa) && k) {
							c();
							return
						}
						if ("oauth" === n) {
							var t = a2(l);
							t ? window.location.href = t : es.m.danger(
								"Missing plugin configuration for ".concat(l.manifest
									.name_for_human, "."))
						} else "user_http" === n ? u(l) : (h(!0), j(l.id))
					}, [l, j, u, c, k, C]),
					M = (0, y.useCallback)(function() {
						b(!0), w(l.id)
					}, [l, w]);
				return s = f || p ? (0, v.jsxs)(en.z, {
					color: "light",
					className: "bg-green-100 hover:bg-green-100",
					children: [f ? "Installing" : "Uninstalling", (0, v.jsx)(er.Z, {})]
				}) : l.user_settings.is_installed ? (0, v.jsxs)(en.z, {
					color: "light",
					className: "hover:bg-gray-200",
					onClick: M,
					children: ["Uninstall", (0, v.jsx)(et.ZP, {
						icon: z.$Rx
					})]
				}) : (0, v.jsxs)(en.z, {
					onClick: _,
					children: ["Install", (0, v.jsx)(et.ZP, {
						icon: z.wzc
					})]
				}), (0, v.jsx)(i_, {
					logo: (0, v.jsx)(eV.Z, {
						url: l.manifest.logo_url,
						name: l.manifest.name_for_human,
						size: "100%",
						large: !0
					}),
					tag: tY(l) && (0, v.jsx)(iM, {}),
					title: (0, v.jsx)("div", {
						className: "max-w-full truncate text-lg leading-5",
						children: l.manifest.name_for_human
					}),
					button: s,
					description: l.manifest.description_for_human
				})
			}

			function ik() {
				return (0, v.jsx)(i_, {
					logo: (0, v.jsx)("div", {
						className: "h-full w-full rounded-[5px] bg-gray-300"
					}),
					title: (0, v.jsx)("div", {
						className: "h-[19px] w-[103px] rounded-[5px] bg-gray-100"
					}),
					button: (0, v.jsx)("div", {
						className: "h-[36px] w-[103px] rounded-[5px] bg-gray-200"
					}),
					description: (0, v.jsxs)("div", {
						className: "flex flex-col gap-1.5",
						children: [(0, v.jsx)("div", {
							className: "h-[14px] w-[209px] rounded-[5px] bg-gray-100"
						}), (0, v.jsx)("div", {
							className: "h-[14px] w-[218px] rounded-[5px] bg-gray-100"
						}), (0, v.jsx)("div", {
							className: "h-[14px] w-[184px] rounded-[5px] bg-gray-100"
						})]
					})
				})
			}

			function i_(e) {
				var n = e.logo,
					t = e.tag,
					r = e.title,
					a = e.button,
					i = e.description;
				return (0, v.jsxs)("div", {
					className: "flex flex-col gap-4 rounded border border-black/10 bg-white p-6 dark:border-white/20 dark:bg-gray-900",
					children: [(0, v.jsxs)("div", {
						className: "flex gap-4",
						children: [(0, v.jsx)("div", {
							className: "h-[70px] w-[70px] shrink-0",
							children: n
						}), (0, v.jsxs)("div", {
							className: "flex min-w-0 flex-col items-start justify-between",
							children: [t ? (0, v.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [t, r]
							}) : r, a]
						})]
					}), (0, v.jsx)("div", {
						className: "h-[60px] text-sm text-black/70 line-clamp-3 dark:text-white/70",
						children: i
					})]
				})
			}

			function iM() {
				return (0, v.jsx)("div", {
					className: "flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-red-200 text-red-800",
					children: (0, v.jsx)(et.ZP, {
						icon: z.V7f,
						className: "h-3 w-3"
					})
				})
			}

			function iT(e) {
				for (var n = function(e) {
						u.push((0, v.jsx)(iN, {
							role: "button",
							className: (0, Z.Z)("flex h-5 w-5 items-center justify-center",
								e === t &&
								"text-blue-600 hover:text-blue-600 dark:text-blue-600 dark:hover:text-blue-600"
								),
							onClick: function() {
								return a(e)
							},
							children: e + 1
						}, e))
					}, t = e.page, r = e.numPages, a = e.goToPage, i = t > 0, o = t < r - 1, s = (0, y
						.useCallback)(function() {
						a(Math.max(t - 1, 0))
					}, [t, a]), l = (0, y.useCallback)(function() {
						a(Math.min(t + 1, r - 1))
					}, [t, r, a]), u = [], c = 0; c < r; c++) n(c);
				return (0, v.jsxs)("div", {
					className: "flex flex-wrap gap-2 text-sm text-black/60 dark:text-white/70",
					children: [(0, v.jsxs)(iN, {
						role: "button",
						className: (0, Z.Z)("flex items-center", !i && "opacity-50"),
						onClick: s,
						$disabled: !i,
						children: [(0, v.jsx)(et.ZP, {
							icon: z.YFh
						}), "Prev"]
					}), u, (0, v.jsxs)(iN, {
						role: "button",
						className: (0, Z.Z)("flex items-center", !o && "opacity-50"),
						onClick: l,
						$disabled: !o,
						children: ["Next", (0, v.jsx)(et.ZP, {
							icon: z.Tfp
						})]
					})]
				})
			}(o = f || (f = {}))[o.All = 0] = "All", o[o.Developer = 1] = "Developer";
			var iN = j.Z.button(ip(), function(e) {
					return e.$disabled ? "opacity-50 cursor-default" :
						"hover:text-black/50 dark:hover:text-white/50"
				}),
				iP = j.Z.div(iv());

			function iS(e) {
				var n = e.allowClose,
					t = e.onConfirm,
					r = e.onClose;
				return (0, v.jsx)(e8.ZP, {
					isOpen: !0,
					onModalClose: r,
					type: "success",
					title: "About plugins",
					primaryButton: (0, v.jsx)(e8.mH, {
						title: "OK",
						color: "primary",
						onClick: t
					}),
					secondaryButton: n && (0, v.jsx)(e8.mH, {
						title: "Cancel",
						color: "neutral",
						onClick: r
					}),
					children: (0, v.jsx)(aG, {
						children: (0, v.jsxs)(ie.I, {
							children: [(0, v.jsx)(ie.Z, {
								icon: "\uD83D\uDEA8",
								children: "Plugins are powered by third party applications that are not controlled by OpenAI. Be sure you trust a plugin before installation."
							}), (0, v.jsx)(ie.Z, {
								icon: "\uD83C\uDF10",
								children: "Plugins connect ChatGPT to external apps. If you enable a plugin, ChatGPT may send parts of your conversation and the country or state you're in to the plugin to enhance your conversation."
							}), (0, v.jsx)(ie.Z, {
								icon: "\uD83E\uDDE0",
								children: "ChatGPT automatically chooses when to use plugins during a conversation, depending on the plugins you've enabled."
							})]
						})
					})
				})
			}
			var iI = "oai/apps/hasSeenPluginsDisclaimer";

			function iZ(e) {
				var n = e.onInstall,
					t = e.onClose,
					r = (0, m._)((0, y.useState)(!!eo.m.getItem(iI)), 2),
					a = !0,
					i = r[1],
					o = (0, m._)((0, y.useState)(!1), 2),
					s = o[0],
					l = o[1],
					u = (0, m._)((0, y.useState)(!1), 2),
					c = u[0],
					d = u[1],
					f = (0, m._)((0, y.useState)(), 2),
					h = f[0],
					g = f[1],
					p = (0, m._)((0, y.useState)(!1), 2),
					x = p[0],
					b = p[1],
					j = (0, m._)((0, y.useState)(!1), 2),
					w = j[0],
					C = j[1],
					k = (0, y.useCallback)(function() {
						i(!0), l(!1), eo.m.setItem(iI, !0)
					}, []),
					_ = (0, y.useCallback)(function(e) {
						g(e), d(!0)
					}, []),
					M = (0, y.useCallback)(function() {
						d(!0)
					}, []),
					T = (0, y.useCallback)(function() {
						b(!0)
					}, []),
					N = (0, y.useCallback)(function() {
						C(!0)
					}, []),
					P = (0, y.useCallback)(function() {
						l(!0)
					}, []),
					S = (0, y.useCallback)(function(e) {
						(0, aO.wu)(e.id), t(), n(e)
					}, [n, t]),
					I = (0, y.useCallback)(function() {
						g(void 0), d(!1), t()
					}, [t]),
					Z = (0, y.useCallback)(function() {
						b(!1), t()
					}, [t]),
					D = (0, y.useCallback)(function() {
						C(!1), t()
					}, [t]);
				return !a || s ? (0, v.jsx)(iS, {
					allowClose: !a,
					onConfirm: k,
					onClose: t
				}) : c ? (0, v.jsx)(ir, {
					plugin: h,
					onInstall: S,
					onClose: I
				}) : x ? (0, v.jsx)(a3, {
					onClickInstall: _,
					onInstallLocalhost: S,
					onClose: Z
				}) : w ? (0, v.jsx)(il, {
					onClose: D
				}) : (0, v.jsx)(ib, {
					onInstallWithAuthRequired: _,
					onClickInstallDeveloper: M,
					onClickDevelop: T,
					onClickManage: N,
					onClickAbout: P,
					onClose: t
				})
			}

			function iD() {
				var e = (0, p._)([
					"flex h-8 flex-shrink-0 items-center justify-center border-b border-black/10 bg-gray-50 text-xs text-gray-800 dark:border-white/20 dark:bg-[#272832] dark:text-white"
				]);
				return iD = function() {
					return e
				}, e
			}

			function iF() {
				var e = (0, p._)([
					"flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-red-200 text-red-800"
				]);
				return iF = function() {
					return e
				}, e
			}

			function iE(e) {
				var n, t = e.theme,
					r = (0, m._)((0, y.useState)(!1), 2),
					a = r[0],
					i = r[1],
					o = (0, m._)((0, y.useState)(!1), 2),
					s = o[0],
					l = o[1],
					u = (0, b.useRouter)(),
					c = (0, io.Z)(),
					d = c.installedPlugins,
					f = c.isLoading,
					h = (0, aO.p0)(),
					p = (0, y.useRef)(null);
				(0, y.useEffect)(function() {
					if (!f) {
						var e = u.query,
							n = e.loginAip,
							t = e.loginSuccess,
							r = (0, g._)(e, ["loginAip", "loginSuccess"]);
						if (n) {
							var a, i = d.find(function(e) {
								return e.id === n
							});
							i && "true" === t ? ((0, aO.wu)(u.query.loginAip), null === (a = p
								.current) || void 0 === a || a.open()) : es.m.warning(
								"Couldn't log in with ".concat((null == i ? void 0 : i.manifest
									.name_for_human) || "plugin", ".")), u.replace({
								pathname: u.pathname,
								query: r
							})
						}
					}
				}, [u, d, f]);
				var x = (0, y.useCallback)(function() {
						var e;
						null === (e = p.current) || void 0 === e || e.open()
					}, []),
					j = (0, y.useCallback)(function() {
						i(!1)
					}, []),
					w = (0, m._)((0, y.useState)(h), 2),
					C = w[0],
					k = w[1],
					_ = (0, y.useCallback)(function(e) {
						if (e.length > aO.hZ) l(!0), setTimeout(function() {
							l(!1)
						}, 600);
						else {
							var n = e.filter(function(e) {
									return !h.find(function(n) {
										return n.id === e.id
									})
								}),
								t = !0,
								r = !1,
								a = void 0;
							try {
								for (var i, o = aO.iO[Symbol.iterator](); !(t = (i = o.next())
									.done); t = !0) {
									var s = function() {
										var e = i.value,
											t = h.find(function(n) {
												return e.includes(n.domain)
											});
										if (t) {
											var r = e.find(function(e) {
													return e !== t.domain
												}),
												a = n.find(function(e) {
													return e.domain === r
												});
											if (a) return es.m.warning("You can't enable ".concat(a
													.manifest.name_for_human, " while ")
												.concat(t.manifest.name_for_human,
													" is enabled.")), {
												v: void 0
											}
										}
									}();
									if ("object" === (0, aq._)(s)) return s.v
								}
							} catch (e) {
								r = !0, a = e
							} finally {
								try {
									t || null == o.return || o.return()
								} finally {
									if (r) throw a
								}
							}(0, aO.dT)(e.map(function(e) {
								return e.id
							}))
						}
					}, [h]),
					M = (0, y.useCallback)(function(e) {
						var n;
						null === (n = p.current) || void 0 === n || n.close(), "store" === e && i(!0)
					}, []),
					T = (0, y.useCallback)(function() {
						k(h), te.m.logEvent("chatgpt_plugin_chooser_opened", null, {
							num_enabled_plugins: "".concat(h.length)
						})
					}, [h]),
					N = (0, y.useCallback)(function() {
						var e = C.filter(function(e) {
								return !h.find(function(n) {
									return n.id === e.id
								})
							}),
							n = h.filter(function(e) {
								return !C.find(function(n) {
									return n.id === e.id
								})
							}),
							t = !0,
							r = !1,
							a = void 0;
						try {
							for (var i, o = n[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
								var s = i.value;
								te.m.logEvent("chatgpt_plugin_enabled", null, {
									plugin_id: s.id
								})
							}
						} catch (e) {
							r = !0, a = e
						} finally {
							try {
								t || null == o.return || o.return()
							} finally {
								if (r) throw a
							}
						}
						var l = !0,
							u = !1,
							c = void 0;
						try {
							for (var d, f = e[Symbol.iterator](); !(l = (d = f.next()).done); l = !0) {
								var g = d.value;
								te.m.logEvent("chatgpt_plugin_disabled", null, {
									plugin_id: g.id
								})
							}
						} catch (e) {
							u = !0, c = e
						} finally {
							try {
								l || null == f.return || f.return()
							} finally {
								if (u) throw c
							}
						}
					}, [h, C]),
					P = d.map(function(e) {
						return {
							value: e,
							title: e.manifest.name_for_human,
							description: e.manifest.description_for_human,
							tags: [],
							customTags: tY(e) ? (0, v.jsx)(iL, {}) : "approved" !== e.status ? (0, v
								.jsx)(iR, {}) : void 0,
							imageUrl: e.manifest.logo_url
						}
					}),
					S = P.filter(function(e) {
						return h.find(function(n) {
							return n.id === e.value.id
						})
					}),
					I = "".concat(0 === h.length ? "No" : h.length, " plugins enabled");
				if (h.length > 0 && h.length < 6) {
					var D = h.map(function(e, n) {
						return (0, v.jsx)(eV.Z, {
							url: e.manifest.logo_url,
							name: e.manifest.name_for_human,
							size: 16
						}, n)
					});
					I = (0, v.jsx)("div", {
						className: "flex gap-1",
						children: D
					})
				}
				var F = [{
					id: "store",
					label: "Plugin store",
					icon: z.Rgz
				}];
				d.length > aO.hZ && (n = (0, v.jsxs)(iA, {
					className: (0, Z.Z)("transition-colors duration-300", s &&
						"bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800"),
					children: [h.length, "/", aO.hZ, " Enabled"]
				}));
				var E = (0, v.jsxs)(v.Fragment, {
					children: [(0, v.jsx)(iA, {
						children: "Loading..."
					}), (0, v.jsx)(aI, {
						showCheckbox: !0
					}), (0, v.jsx)(aI, {
						showCheckbox: !0
					}), (0, v.jsx)(aI, {
						showCheckbox: !0
					}), (0, v.jsx)(aI, {
						showCheckbox: !0
					}), (0, v.jsx)(aI, {
						showCheckbox: !0
					})]
				});
				return (0, v.jsxs)(v.Fragment, {
					children: [(0, v.jsx)(aM, {
						name: "Plugins",
						selectedOptions: S,
						selectedLabel: I,
						options: P,
						actions: F,
						onChange: _,
						onAction: M,
						onOpen: T,
						onClose: N,
						dropdownRef: p,
						isLoading: f,
						loadingState: E,
						header: n,
						theme: "mini" === t ? "mini" : "default"
					}), a && (0, v.jsx)(iZ, {
						onInstall: x,
						onClose: j
					})]
				})
			}

			function iR() {
				return (0, v.jsx)(iB, {
					children: (0, v.jsx)(et.ZP, {
						icon: z.OH,
						className: "h-3 w-3",
						strokeWidth: 2.5
					})
				})
			}

			function iL() {
				return (0, v.jsx)(iB, {
					children: (0, v.jsx)(et.ZP, {
						icon: z.V7f,
						className: "h-3 w-3"
					})
				})
			}
			var iA = j.Z.div(iD()),
				iB = j.Z.div(iF()),
				iU = t(66523);

			function iq(e) {
				var n, t, r = e.onChangeModelSetting,
					a = e.availableModels,
					i = e.modelBackend,
					o = (0, k.hz)(),
					s = (0, ni.Fl)(),
					l = s.isBetaFeaturesUiEnabled,
					u = s.isPluginsAvailable,
					c = s.isBrowsingAvailable,
					d = s.isCodeInterpreterAvailable,
					f = (0, y.useMemo)(function() {
						return a.find(function(e) {
							return e.id === i
						})
					}, [a, i]);
				return l && o.has("new_model_switcher_20230512") && (u || c || d) ? f ? (0, v.jsxs)("div", {
					className: "relative flex flex-col items-stretch justify-center gap-2 sm:items-center",
					children: [(0, v.jsx)(al, {
						currentModel: f,
						onModelChange: function(e) {
							return r(re.G3.Model, e)
						}
					}), u && (null == f ? void 0 : null === (t = f.enabledTools) ||
						void 0 === t ? void 0 : t.includes("tools3")) && (0, v.jsx)(iE, {
						theme: "mini"
					})]
				}) : null : (0, v.jsxs)("div", {
					className: "flex items-center justify-center gap-2",
					children: [(0, v.jsx)(iO, {
						onChangeModelSetting: r,
						availableModels: a,
						modelBackend: i
					}), u && (null == f ? void 0 : null === (n = f.enabledTools) ||
						void 0 === n ? void 0 : n.includes("tools3")) && (0, v.jsx)(iE, {})]
				})
			}

			function iO(e) {
				var n = e.onChangeModelSetting,
					t = e.availableModels,
					r = e.modelBackend,
					a = (0, re.BT)(),
					i = (0, w.WS)(),
					o = (0, iU.Z)(),
					s = (0, y.useCallback)(function(e) {
						e.id !== a && (n(re.G3.Model, e.id), i(C.s6.toggleModel, {
							model: e.id
						}))
					}, [a, i, n]),
					l = "".concat(o.modelSwitcherDisclaimer),
					u = t.map(function(e) {
						return {
							value: e,
							title: e.title,
							description: e.id === a ? l : e.description,
							tags: e.tags,
							disabled: e.id === a
						}
					}),
					c = u.find(function(e) {
						return e.value.id === r
					}) || u[0];
				return (0, v.jsx)(a_, {
					name: "Model",
					selectedOption: c,
					options: u,
					onChange: s,
					theme: "default"
				})
			}
			var iz = function(e) {
					var n, t = e.modelBackend,
						r = e.availableModels,
						a = e.clientThreadId,
						i = e.isStaticSharedThread,
						o = e.continueConversationUrl,
						s = e.icon,
						l = r.find(function(e) {
							return e.id === t
						}) || r[0],
						u = l.tags.filter(function(e) {
							return ak.includes(e)
						}).map(function(e) {
							return aD(e)
						}),
						c = (0, t1.Z)();
					if (c.length > 0) {
						var d = c.map(function(e, n) {
							return (0, v.jsx)(eV.Z, {
								url: e.manifest.logo_url,
								name: e.manifest.name_for_human,
								size: 16
							}, n)
						});
						n = (0, v.jsxs)(v.Fragment, {
							children: [(0, v.jsx)("div", {
								children: "Enabled plugins:"
							}), d]
						})
					}
					var f = (0, _.qA)(a),
						h = (0, _.je)(a);
					return (0, v.jsxs)("div", {
						className: (0, Z.Z)(
							"flex w-full items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300",
							i ? "sticky top-0 z-50" : ""),
						children: [i && (0, v.jsxs)(v.Fragment, {
							children: [(0, v.jsxs)(v.Fragment, {
								children: [null != h ? "Shared By: ".concat(
										h) : "Shared Conversation", " ",
									(0, v.jsx)("span", {
										className: "px-1",
										children: "•"
									})
								]
							}), f && (0, v.jsxs)(v.Fragment, {
								children: [f, (0, v.jsx)("span", {
									className: "px-1",
									children: "•"
								})]
							})]
						}), !i && void 0 !== s && (0, v.jsx)(et.ZP, {
							icon: s
						}), "Model: ", l.title, u, n ? (0, v.jsxs)(v.Fragment, {
							children: [(0, v.jsx)("span", {
								className: "px-1",
								children: "•"
							}), n]
						}) : null, i && null != o && (0, v.jsxs)(v.Fragment, {
							children: [(0, v.jsx)("span", {
								className: "px-1",
								children: "•"
							}), (0, v.jsx)(en.z, {
								as: "link",
								color: "neutral",
								size: "small",
								to: o,
								children: "Continue this conversation"
							})]
						})]
					})
				},
				iH = t(75318);

			function iV() {
				var e = (0, p._)([
					"text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100"
				]);
				return iV = function() {
					return e
				}, e
			}

			function iG() {
				var e = (0, p._)([
					"text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center"
				]);
				return iG = function() {
					return e
				}, e
			}

			function iW() {
				var e = (0, p._)(["md:flex items-start text-center gap-3.5"]);
				return iW = function() {
					return e
				}, e
			}

			function iQ() {
				var e = (0, p._)(["flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"]);
				return iQ = function() {
					return e
				}, e
			}

			function i$() {
				var e = (0, p._)([
					"flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2"]);
				return i$ = function() {
					return e
				}, e
			}

			function iJ() {
				var e = (0, p._)(["flex flex-col gap-3.5 w-full sm:max-w-md m-auto"]);
				return iJ = function() {
					return e
				}, e
			}

			function iY() {
				var e = (0, p._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"]);
				return iY = function() {
					return e
				}, e
			}

			function iK() {
				var e = (0, p._)([
					"w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']"
				]);
				return iK = function() {
					return e
				}, e
			}

			function iX() {
				var e = (0, p._)([
					"w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900"
				]);
				return iX = function() {
					return e
				}, e
			}
			var i0 = j.Z.div(iV()),
				i1 = j.Z.h1(iG()),
				i2 = j.Z.div(iW()),
				i3 = j.Z.div(iQ()),
				i5 = j.Z.h2(i$()),
				i4 = j.Z.ul(iJ()),
				i7 = j.Z.li(iY());
			j.Z.li(iK());
			var i8 = j.Z.button(iX());

			function i6(e) {
				var n = e.text,
					t = e.onChangeCurrentPrompt,
					r = (0, y.useCallback)(function() {
						t(n)
					}, [n, t]);
				return (0, v.jsxs)(i8, {
					onClick: r,
					children: ['"', n, '" →']
				})
			}

			function i9(e) {
				var n = e.onChangeCurrentPrompt,
					t = (0, k.nR)();
				return (0, v.jsxs)(i0, {
					children: [(0, v.jsxs)(i1, {
						children: ["Unofficial ChatGPT", t && (0, v.jsx)(rQ, {
							children: "Plus"
						})]
					}), (0, v.jsxs)(i2, {
						children: [(0, v.jsxs)(i3, {
							children: [(0, v.jsxs)(i5, {
								children: [(0, v.jsx)(et.ZP, {
									icon: z.kXG,
									size: "medium"
								}), "Examples"]
							}), (0, v.jsxs)(i4, {
								children: [(0, v.jsx)(i6, {
									text: "Explain quantum computing in simple terms",
									onChangeCurrentPrompt: n
								}), (0, v.jsx)(i6, {
									text: "Got any creative ideas for a 10 year old’s birthday?",
									onChangeCurrentPrompt: n
								}), (0, v.jsx)(i6, {
									text: "How do I make an HTTP request in Javascript?",
									onChangeCurrentPrompt: n
								})]
							})]
						}), (0, v.jsxs)(i3, {
							children: [(0, v.jsxs)(i5, {
								children: [(0, v.jsx)(et.ZP, {
									icon: iH.Z,
									size: "medium"
								}), "Capabilities"]
							}), (0, v.jsxs)(i4, {
								children: [(0, v.jsx)(i7, {
									children: "Remembers what user said earlier in the conversation"
								}), (0, v.jsx)(i7, {
									children: "Allows user to provide follow-up corrections"
								}), (0, v.jsx)(i7, {
									children: "Trained to decline inappropriate requests"
								})]
							})]
						}), (0, v.jsxs)(i3, {
							children: [(0, v.jsxs)(i5, {
								children: [(0, v.jsx)(et.ZP, {
									icon: z.BJv,
									size: "medium"
								}), "Limitations"]
							}), (0, v.jsxs)(i4, {
								children: [(0, v.jsx)(i7, {
									children: "May occasionally generate incorrect information"
								}), (0, v.jsx)(i7, {
									children: "May occasionally produce harmful instructions or biased content"
								}), (0, v.jsx)(i7, {
									children: "Limited knowledge of world and events after 2021"
								})]
							})]
						})]
					})]
				})
			}
			var oe = t(60382);

			function on() {
				var e = (0, p._)(["flex flex-col items-center text-sm dark:bg-gray-800"]);
				return on = function() {
					return e
				}, e
			}

			function ot() {
				var e = (0, p._)(["w-full h-32 md:h-48 flex-shrink-0"]);
				return ot = function() {
					return e
				}, e
			}

			function or() {
				var e = (0, p._)([
					"cursor-pointer absolute right-6 bottom-[124px] md:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200"
				]);
				return or = function() {
					return e
				}, e
			}

			function oa() {
				var e = (0, p._)(["px-2 py-10 relative w-full flex flex-col h-full"]);
				return oa = function() {
					return e
				}, e
			}

			function oi() {
				var e = (0, p._)([
					"text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow"
				]);
				return oi = function() {
					return e
				}, e
			}

			function oo(e) {
				var n, t = e.onChangeItemInView,
					r = e.onRequestMoreCompletions,
					a = e.onUpdateNode,
					i = e.onChangeRating,
					o = e.onDeleteNode,
					s = e.onRequestCompletion,
					l = e.onChangeCurrentPrompt,
					u = e.onSandboxLinkClick,
					c = e.onHandleChangeVariantFeedbackInlineComparisonRating,
					d = e.clientThreadId,
					f = e.isNewThread,
					h = e.activeRequests,
					g = e.isLoading,
					p = e.onChangeModelSetting,
					x = e.currentThreadModel,
					b = e.isStaticSharedThread,
					j = e.inlineEmbeddedDisplay,
					w = e.onTurnEnteredViewport,
					C = e.initiallyHighlightedMessageId,
					M = e.continueConversationUrl,
					T = (0, rG.useScrollToBottom)(),
					N = (0, m._)((0, rG.useSticky)(), 1)[0],
					P = (0, K.Z)(),
					S = (0, k.hz)(),
					I = (0, as.ZP)().items,
					Z = (0, ni.Fl)().isBetaFeaturesUiEnabled,
					D = (0, oe.Z)(),
					F = D.availableModels,
					E = D.isLoading,
					R = S.has("model_switcher") && F.length > 1,
					L = f && !g && R,
					A = (0, k.nR)(),
					B = (0, m._)((0, y.useState)(!1), 2),
					U = B[0],
					q = B[1],
					O = (0, re.ZP)(F, x, d).modelBackend,
					H = (0, as.Zf)(I, O),
					V = (0, _.U0)(d);
				(0, y.useEffect)(function() {
					g ? setTimeout(function() {
						P() && q(!0)
					}, 1e3) : q(!1)
				}, [g, P]);
				var G = S.has(Q.FZ),
					W = !Z && O.startsWith(re.f_) ? "black" : null !== (n = null == H ? void 0 : H
						.backgroundColor) && void 0 !== n ? n : void 0,
					$ = (0, n8._)(Array(V).keys()).map(function(e) {
						return (0, v.jsx)(rc, {
							isFinalTurn: e === V - 1,
							turnIndex: e,
							clientThreadId: d,
							onChangeItemInView: t,
							onChangeRating: i,
							onRequestMoreCompletions: r,
							onDeleteNode: o,
							onRequestCompletion: s,
							onUpdateNode: a,
							onSandboxLinkClick: u,
							onHandleChangeVariantFeedbackInlineComparisonRating: c,
							activeRequests: h,
							modelBackend: O,
							isStaticSharedThread: b,
							showInlineEmbeddedDisplay: j,
							onTurnEnteredViewport: w,
							initiallyHighlightedMessageId: C,
							avatarColor: W
						}, e)
					});
				return (0, v.jsxs)(v.Fragment, {
					children: [L && (0, v.jsxs)(oc, {
						children: [(0, v.jsx)(iq, {
							onChangeModelSetting: p,
							availableModels: F,
							modelBackend: O
						}), (0, v.jsxs)(od, {
							children: ["Unofficial ChatGPT", A && (0, v.jsx)
								(rQ, {
									children: "Plus"
								})
							]
						})]
					}), (0, v.jsxs)(os, {
						children: [f && !g && !E && !R && (0, v.jsx)(i9, {
							onChangeCurrentPrompt: l
						}), U && g && (0, v.jsx)(er.Z, {
							className: "mx-auto mt-4"
						}), !f && !g && R && !j && (0, v.jsx)(iz, {
							icon: Z ? null == H ? void 0 : H.icon : void 0,
							availableModels: F,
							modelBackend: O,
							clientThreadId: d,
							isStaticSharedThread: b,
							continueConversationUrl: M
						}), G ? $.length > 0 && (0, v.jsx)("div", {
							className: "flex w-full flex-col items-center sm:px-4",
							children: (0, v.jsx)("div", {
								className: "w-full max-w-[44rem] pt-4",
								children: $
							})
						}) : $, !L && !j && (0, v.jsx)(ol, {})]
					}), !N && !j && (0, v.jsx)(ou, {
						onClick: T,
						children: (0, v.jsx)(et.ZP, {
							icon: z.tv1,
							className: "m-1"
						})
					})]
				})
			}
			var os = j.Z.div(on()),
				ol = j.Z.div(ot()),
				ou = j.Z.button(or()),
				oc = j.Z.div(oa()),
				od = j.Z.h1(oi());

			function of() {
				var e = (0, p._)([
					"relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch"
				]);
				return of = function() {
					return e
				}, e
			}

			function oh() {
				var e = (0, p._)(["grow flex-1 overflow-hidden"]);
				return oh = function() {
					return e
				}, e
			}

			function og() {
				var e = (0, p._)([
					"w-full mb-2 shadow-[0_2px_12px_0px_rgba(0,0,0,0.08)] dark:bg-gray-800/90 rounded border border-[rgba(0, 0, 0, 0.1)]"
				]);
				return og = function() {
					return e
				}, e
			}

			function om() {
				var e = (0, p._)([
					"m-2 shadow-[0px_0px_24px_0px_rgba(0,0,0,0.25)] rounded max-h-80 overflow-scroll"
				]);
				return om = function() {
					return e
				}, e
			}

			function op() {
				var e = (0, p._)([
					"flex p-4 relative -top-4 bg-white dark:bg-gray-800/90 border-t w-full h-full\n",
					"\n"
				]);
				return op = function() {
					return e
				}, e
			}

			function ov() {
				var e = (0, p._)(["flex w-full items-center justify-left"]);
				return ov = function() {
					return e
				}, e
			}

			function ox() {
				var e = (0, p._)(["mt-2 text-gray-500"]);
				return ox = function() {
					return e
				}, e
			}

			function ob() {
				var e = (0, p._)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
				return ob = function() {
					return e
				}, e
			}

			function oy() {
				var e = (0, p._)(["flex-none h-full mt-auto mb-auto"]);
				return oy = function() {
					return e
				}, e
			}

			function oj(e) {
				var n = e.serverThreadId,
					t = e.setSharingModalOpen,
					r = (0, _.U0)(n),
					a = (0, _.GD)(n, r - 1),
					i = a.messages[a.messages.length - 1],
					o = (0, _.nh)(n, i.nodeId).message.id,
					s = (0, _.qA)(n),
					l = (0, y.useRef)((0, rz.Z)(function(e, n) {
						return {
							requestsInflight: 0,
							title: s,
							highlightedMessageId: o,
							initiallyHighlightedMessageId: "",
							shareLinkId: "",
							shareLinkUrl: "",
							isPublic: !1,
							isDeleted: !1,
							isAnonymous: !0,
							linkAlreadyExisted: !1
						}
					})),
					u = (0, m._)((0, y.useState)(!1), 2),
					c = u[0],
					d = u[1],
					f = (0, y.useRef)(!1);
				return ((0, y.useEffect)(function() {
					f.current || (f.current = !0, W.ZP.createShareLink({
						message_id: l.current.getState().highlightedMessageId,
						conversation_id: n,
						is_anonymous: !0
					}).then(function(e) {
						l.current.setState({
							shareLinkId: e.share_id,
							shareLinkUrl: e.share_url,
							isPublic: e.is_public,
							isDeleted: !e.is_visible,
							title: e.title,
							highlightedMessageId: e.highlighted_message_id,
							initiallyHighlightedMessageId: e
								.highlighted_message_id,
							linkAlreadyExisted: e.already_exists,
							isAnonymous: e.is_anonymous
						}), d(!0)
					}).catch(function(e) {
						es.m.danger(
							"Failed to copy link to clipboard - could not create link"
							), t(!1)
					}))
				}, []), c) ? (0, v.jsx)(rH.Provider, {
					value: l.current,
					children: (0, v.jsx)(ow, (0, h._)({}, e))
				}) : null
			}

			function ow(e) {
				var n, t, r, a, i, o, s = e.serverThreadId,
					l = e.isNewThread,
					u = e.isLoading,
					c = e.sharingModalOpen,
					d = e.setSharingModalOpen,
					f = e.activeRequests,
					h = e.currentThreadModel,
					g = (0, y.useRef)(null),
					p = (0, m._)((0, y.useState)(!1), 2),
					x = p[0],
					b = p[1],
					j = (0, m._)((0, y.useState)(!1), 2),
					w = j[0],
					C = j[1],
					k = (0, m._)((0, y.useState)(!1), 2),
					M = k[0],
					T = k[1],
					N = (0, y.useContext)(rH),
					P = rV(function(e) {
						return e.title
					}),
					S = rV(function(e) {
						return e.isAnonymous
					}),
					I = rV(function(e) {
						return e.initiallyHighlightedMessageId
					}),
					D = rV(function(e) {
						return e.isPublic
					}),
					F = rV(function(e) {
						return e.linkAlreadyExisted
					}) && D,
					E = (0, ei.kP)().session,
					R = function() {
						d(!1)
					},
					L = (n = (0, no._)(function() {
						var e, n, t, r, a, i, o;
						return (0, ns.Jh)(this, function(s) {
							switch (s.label) {
								case 0:
									C(!0), n = (e = N.getState()).shareLinkId, t = e
										.shareLinkUrl, r = e.highlightedMessageId, a = e
										.title, i = e.isDeleted, o = e.isAnonymous;
									try {
										navigator.clipboard.writeText(t)
									} catch (e) {
										return console.warn(
												"Could not copy link to clipboard: " + e),
											es.m.warning(
											"Failed to copy link to clipboard"), C(!1), [2]
									}
									if (null == t || null == n) return console.error(
										"Failed to copy link to clipboard - no url yet"
										), [2];
									if (!(null != n)) return [3, 2];
									return N.setState({
										isPublic: !0
									}), [4, W.ZP.updateShareLink({
										share_id: n,
										highlighted_message_id: r,
										title: a,
										is_public: !i,
										is_visible: !i,
										is_anonymous: o
									})];
								case 1:
									s.sent(), s.label = 2;
								case 2:
									return C(!1), T(!0), setTimeout(function() {
										T(!1), d(!1), es.m.success(
											"Copied shared conversation URL to clipboard!"
											)
									}, 500), [2]
							}
						})
					}), function() {
						return n.apply(this, arguments)
					}),
					A = (0, v.jsxs)(e8.mH, {
						onClick: L,
						color: "primary",
						disabled: w || M,
						children: [M ? (0, v.jsx)(et.ZP, {
								icon: z.LSm
							}) : w ? (0, v.jsx)(er.Z, {}) : (0, v.jsx)(et.ZP, {
								icon: z.UH
							}), M ? "Copied!" : w ? "Copying..." : F ? "Save and Copy (INTERNAL)" :
							"Copy (INTERNAL)"
						]
					}),
					B = (0, y.useCallback)(function(e) {
						var n;
						null == e || e.preventDefault(), N.setState({
							title: null === (n = g.current) || void 0 === n ? void 0 : n.value
						}), b(!1)
					}, [N]),
					U = (0, y.useCallback)(function(e) {
						"Enter" === e.key && B()
					}, [B]),
					q = (t = (0, no._)(function() {
						return (0, ns.Jh)(this, function(e) {
							switch (e.label) {
								case 0:
									return [4, W.ZP.deleteShareLink({
										share_id: N.getState().shareLinkId
									}).catch(function(e) {
										es.m.danger(
											"Failed to delete shared link")
									}).then(function() {
										d(!1)
									})];
								case 1:
									return e.sent(), [2]
							}
						})
					}), function() {
						return t.apply(this, arguments)
					}),
					H = (r = (0, no._)(function() {
						return (0, ns.Jh)(this, function(e) {
							return N.setState({
								isAnonymous: !0
							}), _.qN.setState(function(e) {
								e.threads[s].initialThreadData.authorName = void 0
							}), [2]
						})
					}), function() {
						return r.apply(this, arguments)
					}),
					V = (a = (0, no._)(function() {
						return (0, ns.Jh)(this, function(e) {
							return N.setState({
								isAnonymous: !1
							}), _.qN.setState(function(e) {
								var n;
								e.threads[s].initialThreadData.authorName = null ==
									E ? void 0 : null === (n = E.user) || void 0 ===
									n ? void 0 : n.name
							}), [2]
						})
					}), function() {
						return a.apply(this, arguments)
					}),
					G = (0, v.jsxs)(oT, {
						$active: x,
						children: [(0, v.jsxs)("div", {
							className: "flex-1 pr-1",
							children: [x ? (0, v.jsx)(oS, {
								ref: g,
								type: "text",
								defaultValue: P,
								autoFocus: !0,
								onKeyDown: U,
								className: "mr-0",
								onBlur: B
							}) : (0, v.jsxs)(oN, {
								onDoubleClick: function() {
									return b(!0)
								},
								children: [P, x ? null : (0, v.jsx)(et.ZP, {
									icon: z.Nte,
									size: "small",
									onClick: function() {
										return b(!0)
									}
								})]
							}), S ? (0, v.jsxs)(oP, {
								children: ["Anonymous \xb7 ", new Date()
									.toLocaleDateString()
								]
							}) : (0, v.jsxs)(oP, {
								children: [null == E ? void 0 : null === (o = E
										.user) || void 0 === o ? void 0 : o
									.name, " \xb7 ", new Date()
									.toLocaleDateString()
								]
							})]
						}), (0, v.jsx)(oI, {
							children: (0, v.jsxs)(rO.fC, {
								children: [(0, v.jsx)(rO.xz, {
									asChild: !0,
									children: (0, v.jsx)(en.z, {
										color: "neutral",
										className: "mb-auto mt-auto",
										children: (0, v.jsx)(eH
											.JEI, {})
									})
								}), (0, v.jsx)(rO.h_, {
									children: (0, v.jsxs)(rO.VY, {
										className: "PopoverContent rounded-sm bg-white p-2 pb-0.5 shadow-xl dark:bg-gray-800/90",
										side: "top",
										align: "end",
										children: [S && (0, v
											.jsx)(en
										.z, {
											color: "neutral",
											className: "mb-2 flex w-full border-0",
											onClick: V,
											children: (
													0,
													v
													.jsxs
													)
												("div", {
													className: "flex w-full items-start",
													children: [
														(0, v
															.jsx
															)
														(et.ZP, {
															icon: z
																.fzv,
															className: "float-left mb-auto mr-4 mt-auto"
														}),
														" ",
														(0, v
															.jsx
															)
														("div", {
															children: "Share your name"
														})
													]
												})
										}), !S && (0, v
											.jsx)(en
										.z, {
											color: "neutral",
											className: "mb-2 flex w-full border-0",
											onClick: H,
											children: (
													0,
													v
													.jsxs
													)
												("div", {
													className: "flex w-full items-start",
													children: [
														(0, v
															.jsx
															)
														(et.ZP, {
															icon: z
																.fzv,
															className: "float-left mb-auto mr-4 mt-auto"
														}),
														" ",
														(0, v
															.jsx
															)
														("div", {
															children: "Share anonymously"
														})
													]
												})
										}), F && (0, v
											.jsx)(en
										.z, {
											color: "neutral",
											className: "mb-2 flex w-full border-0",
											onClick: q,
											children: (
													0,
													v
													.jsxs
													)
												("div", {
													className: "flex w-full items-start",
													children: [
														(0, v
															.jsx
															)
														(et.ZP, {
															icon: z
																.Ybf,
															className: "float-left mb-auto mr-4 mt-auto"
														}),
														" ",
														(0, v
															.jsx
															)
														("div", {
															children: "Delete Link"
														})
													]
												})
										})]
									})
								})]
							})
						})]
					}),
					Q = (i = (0, no._)(function(e, n) {
						return (0, ns.Jh)(this, function(e) {
							return [2]
						})
					}), function(e, n) {
						return i.apply(this, arguments)
					}),
					$ = (0, y.useRef)({}),
					J = (0, y.useRef)({}),
					Y = (0, y.useRef)(0),
					K = (0, y.useCallback)(function(e, n, t) {
						$.current[n] = t;
						var r = N.getState().highlightedMessageId,
							a = r;
						if (t && null == J.current[n]) {
							var i = e.messages[e.messages.length - 1],
								o = _.tQ.getTree(s).getNode(i.nodeId);
							J.current[n] = o.message.id
						}
						if (t && n > Y.current && (Y.current = n, a = J.current[n]), !t && n === Y
							.current)
							for (; Y.current >= 0 && !1 === $.current[Y.current];) Y.current--, a = J
								.current[Y.current];
						a !== r && N.setState({
							highlightedMessageId: a
						})
					}, [N, s]);
				return (0, v.jsxs)(e8.ZP, {
					isOpen: c,
					onModalClose: R,
					closeButton: null,
					type: "success",
					icon: void 0,
					title: "Share Chat - INTERNAL ONLY",
					primaryButton: null,
					children: [(0, v.jsxs)("div", {
						className: (0, Z.Z)("w-full"),
						children: [(0, v.jsx)("p", {
							className: (0, Z.Z)("mb-7 mt-3 text-[#8E8EA0]"),
							children: "Create a sharable link to a snapshot of your conversation. Messages you send after creating your link won't be shared."
						}), (0, v.jsx)("p", {
							className: (0, Z.Z)("mb-7 mt-3 text-[#8E8EA0]"),
							children: (0, v.jsx)("b", {
								children: "INTERNAL ONLY. DO NOT SHARE LINKS EXTERNALLY."
							})
						})]
					}), (0, v.jsx)(o_, {
						children: (0, v.jsx)("div", {
							className: "flex h-full max-w-full flex-1 flex-col",
							children: (0, v.jsx)(oC, {
								children: (0, v.jsxs)(ok, {
									children: [(0, v.jsx)(oM, {
										children: (
											0, v
											.jsx
											)(
											oo, {
												isLoading: u,
												onChangeItemInView: O(),
												onRequestMoreCompletions: O(),
												onUpdateNode: O(),
												onChangeRating: O(),
												onDeleteNode: O(),
												onRequestCompletion: O(),
												onChangeCurrentPrompt: O(),
												onSandboxLinkClick: Q,
												onHandleChangeVariantFeedbackInlineComparisonRating: O(),
												clientThreadId: s,
												activeRequests: f,
												onChangeModelSetting: O(),
												currentThreadModel: h,
												inlineEmbeddedDisplay:
													!
													0,
												isStaticSharedThread:
													!
													0,
												isNewThread: l,
												onTurnEnteredViewport: K,
												initiallyHighlightedMessageId: I
											})
									}), G]
								})
							})
						})
					}), (0, v.jsxs)("div", {
						className: (0, Z.Z)("grid grid-cols-2"),
						children: [(0, v.jsx)("div", {
							children: (0, v.jsxs)(e8.mH, {
								onClick: R,
								className: (0, Z.Z)(
									"ml-0 border-0 pl-0 hover:bg-transparent"
									),
								children: [(0, v.jsx)(et.ZP, {
										icon: z.H33
									}),
									"INTERNAL ONLY - DO NOT SHARE LINKS EXTERNALLY"
								]
							})
						}), (0, v.jsx)("div", {
							className: (0, Z.Z)("text-right"),
							children: A
						})]
					})]
				})
			}
			var oC = j.Z.main(of()),
				ok = j.Z.div(oh()),
				o_ = j.Z.div(og()),
				oM = j.Z.div(om()),
				oT = j.Z.div(op(), function(e) {
					return e.$active, ""
				}),
				oN = j.Z.div(ov()),
				oP = j.Z.div(ox()),
				oS = j.Z.input(ob()),
				oI = j.Z.div(oy());

			function oZ() {
				var e = (0, p._)(["p-2 rounded-md ", ""]);
				return oZ = function() {
					return e
				}, e
			}
			var oD = (0, H.vU)({
				newChat: {
					defaultMessage: "New chat",
					id: "Stage.newChat",
					description: "New chat button tooltip"
				},
				closeSidebar: {
					defaultMessage: "Close sidebar",
					id: "Stage.closeSidebar",
					description: "Close sidebar button tooltip"
				},
				openSidebar: {
					defaultMessage: "Open sidebar",
					id: "Stage.openSidebar",
					description: "Open sidebar button tooltip"
				},
				closeDebug: {
					defaultMessage: "Close debug sidebar",
					id: "Stage.closeDebug",
					description: "Close debug sidebar button tooltip"
				},
				openDebug: {
					defaultMessage: "Open debug sidebar",
					id: "Stage.openDebug",
					description: "Open debug sidebar button tooltip"
				}
			});

			function oF(e) {
				var n = e.isStaticSharedThread,
					t = e.handleResetThread,
					r = e.toggleDebugSidebar,
					a = e.activeSidebar,
					i = (0, V.Z)(),
					o = eU(),
					s = o.isNavigationCollapsed,
					l = o.toggleNavigation,
					u = (0, k.hz)(),
					c = u.has(Q.M6),
					d = "debug" === a,
					f = u.has("debug") && (c || !d);
				return n ? null : (0, v.jsxs)(v.Fragment, {
					children: [c && (0, v.jsx)("div", {
						className: "absolute left-4 top-4 z-10 hidden md:inline-block",
						children: (0, v.jsx)(tG.u, {
							side: "right",
							label: s ? i.formatMessage(oD.openSidebar) : i
								.formatMessage(oD.closeSidebar),
							children: (0, v.jsx)(oE, {
								$isNewLayout: c,
								onClick: l,
								"aria-label": s ? i.formatMessage(oD
									.openSidebar) : i.formatMessage(
									oD.closeSidebar),
								children: (0, v.jsx)(et.ZP, {
									icon: z.iYc
								})
							})
						})
					}), (0, v.jsxs)("div", {
						className: (0, Z.Z)(
							"absolute z-10 hidden flex-col gap-2 md:flex", c ?
							"right-4 top-4" : "right-3 top-3"),
						children: [c && (0, v.jsxs)(v.Fragment, {
							children: [(0, v.jsx)(tG.u, {
								side: "left",
								label: i.formatMessage(oD
									.newChat),
								children: (0, v.jsx)(oE, {
									$isNewLayout: c,
									onClick: function() {
										t()
									},
									"aria-label": i
										.formatMessage(
											oD.newChat),
									children: (0, v.jsx)
										(et.ZP, {
											icon: z
												.vPQ
										})
								})
							}), f && (0, v.jsx)("div", {
								className: "my-3 border-t-[1px] border-black/20 dark:border-white/20"
							})]
						}), f && (0, v.jsx)(tG.u, {
							side: "left",
							label: d ? i.formatMessage(oD.closeDebug) : i
								.formatMessage(oD.openDebug),
							children: (0, v.jsx)(oE, {
								className: (0, Z.Z)(f &&
									"opacity-40 hover:opacity-100"
									),
								onClick: r,
								$isNewLayout: c,
								"aria-label": d ? i.formatMessage(oD
										.closeDebug) : i
									.formatMessage(oD.openDebug),
								children: (0, v.jsx)(et.ZP, {
									icon: z.cDN
								})
							})
						})]
					})]
				})
			}
			var oE = j.Z.button(oZ(), function(e) {
					return e.$isNewLayout ? "hover:bg-black/10 hover:dark:bg-white/10" :
						"bg-black/10 dark:bg-white/10 "
				}),
				oR = n$()(function() {
					return Promise.resolve().then(t.bind(t, 1215))
				}, {
					loadableGenerated: {
						webpack: function() {
							return [1215]
						}
					},
					ssr: !1
				});

			function oL(e) {
				var n = e.children;
				return (0, v.jsx)(oR, {
					className: "h-full dark:bg-gray-800",
					followButtonClassName: "scroll-convo",
					initialScrollBehavior: "auto",
					children: n
				})
			}

			function oA(e) {
				var n = e.children,
					t = e.sidebarOpen,
					r = e.onClose;
				return (0, v.jsx)(eR.u.Root, {
					show: t,
					as: y.Fragment,
					children: (0, v.jsxs)(eL.V, {
						as: "div",
						className: "relative z-10",
						onClose: r,
						children: [(0, v.jsx)("div", {
							className: "fixed inset-0"
						}), (0, v.jsx)("div", {
							className: "fixed inset-0 overflow-hidden",
							children: (0, v.jsx)("div", {
								className: "absolute inset-0 overflow-hidden",
								children: (0, v.jsx)("div", {
									className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",
									children: (0, v.jsx)(eR.u
										.Child, {
											as: y.Fragment,
											enter: "transform transition ease-in-out duration-100 sm:duration-300",
											enterFrom: "translate-x-full",
											enterTo: "translate-x-0",
											leave: "transform transition ease-in-out duration-300 sm:duration-500",
											leaveFrom: "translate-x-0",
											leaveTo: "translate-x-full",
											children: (0, v
												.jsx)(eL
												.V
												.Panel, {
													className: "pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",
													children: (
															0,
															v
															.jsx
															)
														("div", {
															className: "h-full overflow-y-auto bg-white shadow-xl dark:bg-gray-800",
															children: n
														})
												})
										})
								})
							})
						})]
					})
				})
			}

			function oB() {
				var e = (0, p._)([
					"overflow-y-auto h-full md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] md:border-l md:border-gray-100 md:dark:border-gray-700 bg-white dark:bg-gray-800"
				]);
				return oB = function() {
					return e
				}, e
			}

			function oU() {
				var e = (0, p._)(["whitespace-pre-wrap text-sm"]);
				return oU = function() {
					return e
				}, e
			}

			function oq() {
				var e = (0, p._)([
					"px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-black/10 border-gray-200"
				]);
				return oq = function() {
					return e
				}, e
			}

			function oO(e) {
				var n = e.children,
					t = e.title,
					r = e.icon,
					a = e.isOpen,
					i = e.slideOver,
					o = e.onClose,
					s = (0, v.jsxs)(oV, {
						children: [(0, v.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [(0, v.jsxs)("div", {
								className: "flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 dark:text-white",
								children: [(0, v.jsx)(et.ZP, {
									icon: r
								}), t]
							}), (0, v.jsx)("div", {
								className: "mr-2 mt-2 flex h-7 items-center",
								children: (0, v.jsxs)("button", {
									type: "button",
									className: "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
									onClick: o,
									children: [(0, v.jsx)("span", {
										className: "sr-only",
										children: "Close sidebar"
									}), (0, v.jsx)(et.ZP, {
										icon: z.q5L,
										size: "medium",
										"aria-hidden": "true"
									})]
								})
							})]
						}), n]
					});
				return i ? (0, v.jsx)(oA, {
					sidebarOpen: a,
					onClose: o,
					children: s
				}) : a ? s : null
			}

			function oz(e) {
				var n = e.clientThreadId,
					t = e.currentLeafId,
					r = e.isOpen,
					a = e.slideOver,
					i = e.onClose,
					o = (0, _.u9)(n, t),
					s = (0, m._)((0, y.useState)(), 2),
					l = s[0],
					u = s[1],
					c = (0, k.hz)(),
					d = (0, y.useCallback)(function() {
						u(void 0)
					}, []),
					f = (0, y.useCallback)(function() {
						var e = _.tQ.getTree(n);
						navigator.clipboard.writeText(e.getTextFromThread(t))
					}, [t, n]);
				if (!c.has("debug")) return null;
				var h = o.map(function(e, n) {
					var t = e.author,
						r = t.role,
						a = t.name;
					return (0, v.jsxs)(oW, {
						role: "button",
						onClick: function() {
							return u(n)
						},
						children: [(0, v.jsxs)("div", {
							className: "text-xs font-medium uppercase text-gray-400",
							children: [r, a && a !== r && " (".concat(a, ")"),
								" -> ", n4.Cv.getRecipientFromMessage(e)
							]
						}), (0, v.jsx)("div", {
							children: n4.Cv.getTextFromMessage(e)
						})]
					}, e.id)
				});
				return (0, v.jsxs)(oO, {
					icon: z.cDN,
					title: "Debug",
					isOpen: r,
					slideOver: a,
					onClose: i,
					children: [(0, v.jsxs)("div", {
						className: "flex items-center justify-between border-y bg-gray-100 px-4 py-1 text-xs font-medium uppercase text-gray-700",
						children: ["Conversation messages", (0, v.jsxs)("div", {
							className: "flex gap-2",
							children: [(0, v.jsx)(tG.u, {
								label: "Copy conversation text to clipboard",
								children: (0, v.jsx)(tt.Z, {
									onCopy: f
								})
							}), (0, v.jsx)(tG.u, {
								label: "Download raw conversation",
								children: (0, v.jsx)(oH, {
									clientThreadId: n,
									messages: o
								})
							})]
						})]
					}), (0, v.jsx)(oG, {
						children: h
					}), void 0 !== l && (0, v.jsx)(e8.ZP, {
						isOpen: !0,
						onModalClose: d,
						type: "success",
						children: (0, v.jsx)("pre", {
							className: "max-h-[80vh] overflow-auto whitespace-pre-wrap text-xs",
							children: JSON.stringify(o[l], null, 2)
						})
					}, "DebugMessageModal-".concat(l))]
				})
			}

			function oH(e) {
				var n = e.clientThreadId,
					t = e.messages,
					r = (0, y.useCallback)(function() {
						var e = JSON.stringify(t) + "\n",
							r = new Blob([e], {
								type: "application/json"
							}),
							a = URL.createObjectURL(r),
							i = document.createElement("a");
						i.href = a, i.download = "messages-".concat(_.tQ.getServerThreadId(n),
							".jsonl"), i.click(), URL.revokeObjectURL(a)
					}, [n, t]);
				return (0, v.jsx)("button", {
					onClick: r,
					children: (0, v.jsx)(et.ZP, {
						icon: z._hL
					})
				})
			}
			var oV = j.Z.div(oB()),
				oG = j.Z.pre(oU()),
				oW = j.Z.div(oq()),
				oQ = (0, M.ZP)(function() {
					return {
						isOpen: !1
					}
				});

			function o$() {
				oQ.setState(function() {
					return {
						isOpen: !1
					}
				})
			}

			function oJ(e) {
				var n = e.slideOver,
					t = (0, m._)((0, y.useState)(), 2),
					r = t[0],
					a = t[1],
					i = (0, m._)((0, y.useState)(!1), 2),
					o = i[0],
					s = i[1],
					l = (0, m._)((0, y.useState)(!1), 2),
					u = l[0],
					c = l[1],
					d = (0, m._)((0, y.useState)(!1), 2),
					f = d[0],
					h = d[1],
					g = (0, k.hz)(),
					p = (0, x.NL)(),
					b = oQ().isOpen,
					j = (0, aO.p0)(),
					w = (0, y.useMemo)(function() {
						return j.find(tY)
					}, [j]),
					C = (0, y.useCallback)((0, no._)(function() {
						var e, n;
						return (0, ns.Jh)(this, function(t) {
							switch (t.label) {
								case 0:
									if (!w) return [3, 2];
									return a(void 0), [4, tX(w.domain)];
								case 1:
									if (void 0 === (e = t.sent())) return [2];
									n = e.plugin, a({
										manifestValidationInfo: e
											.manifest_validation_info,
										apiValidationInfo: e.api_validation_info
									}), n && a1(n, p, ["installedAip"]), t.label = 2;
								case 2:
									return [2]
							}
						})
					}), [w, p]);
				return ((0, y.useEffect)(function() {
					C()
				}, [C]), g.has("tools3_dev")) ? (0, v.jsx)(oO, {
					icon: z.V7f,
					title: "Plugin devtools",
					isOpen: b,
					slideOver: n,
					onClose: o$,
					children: (0, v.jsx)("div", {
						className: "border-t border-gray-100 p-2 text-sm dark:border-gray-700",
						children: w ? (0, v.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [(0, v.jsx)("div", {
								children: (0, v.jsx)(en.z, {
									size: "small",
									color: "neutral",
									onClick: C,
									children: "Refresh plugin"
								})
							}), r ? (0, v.jsxs)(v.Fragment, {
								children: [(0, v.jsx)(az, {
									plugin: w
								}), (0, v.jsx)(aQ, {
									manifestValidationInfo: r
										.manifestValidationInfo,
									expanded: o,
									onChangeExpanded: s
								}), (0, v.jsx)(a$, {
									apiValidationInfo: r
										.apiValidationInfo,
									expanded: u,
									onChangeExpanded: c
								}), (0, v.jsx)(aJ, {
									apiValidationInfo: r
										.apiValidationInfo,
									expanded: f,
									onChangeExpanded: h
								})]
							}) : (0, v.jsx)("div", {
								className: "self-center",
								children: (0, v.jsx)(er.Z, {})
							})]
						}) : (0, v.jsx)("div", {
							className: "mt-4 text-center",
							children: "Please enable a localhost plugin to use devtools."
						})
					})
				}) : null
			}

			function oY() {
				var e, n, t, r, a, i, o = (n = (e = nu()).isLoggedInWithMfa, t = e.isUsernamePassword, r = e
						.setupMfa, i = (a = (0, aO.p0)()).filter(function(e) {
							return !("none" === e.manifest.auth.type || "service_http" === e.manifest
								.auth.type)
						}), (n || !t) && (i = []), {
							disablePluginsThatWeCantUse: function() {
								var e = a.filter(function(e) {
									return "none" === e.manifest.auth.type || "service_http" ===
										e.manifest.auth.type
								});
								(0, aO.dT)(e.map(function(e) {
									return e.id
								}))
							},
							pluginsWeCantUse: i,
							setupMfa: r
						}),
					s = o.disablePluginsThatWeCantUse,
					l = o.pluginsWeCantUse,
					u = o.setupMfa,
					c = (0, y.useCallback)(function() {
						s()
					}, [s]);
				return 0 === l.length ? null : (0, v.jsx)(e8.ZP, {
					isOpen: !0,
					onModalClose: c,
					title: "Some of your plugins require two-factor authentication.",
					primaryButton: (0, v.jsx)(e8.mH, {
						onClick: u,
						title: "Setup two-factor authentication",
						color: "primary"
					}),
					secondaryButton: (0, v.jsx)(e8.mH, {
						onClick: s,
						title: "Turn off the plugins"
					}),
					type: "danger",
					children: (0, v.jsx)("div", {
						className: "flex flex-col gap-2 py-4",
						children: l.map(function(e) {
							return (0, v.jsx)("div", {
								className: "w-full",
								children: (0, v.jsx)(az, {
									plugin: e
								})
							}, e.id)
						})
					})
				})
			}
			var oK = t(16578),
				oX = t.n(oK),
				o0 = t(74853),
				o1 = t(99652),
				o2 = t(44925),
				o3 = t(1220);

			function o5(e) {
				var n = e.isOpen,
					t = e.onClose,
					r = (0, w.WS)(),
					a = (0, m._)((0, y.useState)(!1), 2),
					i = a[0],
					o = a[1],
					s = (0, b.useRouter)(),
					l = (0, y.useCallback)(function() {
						r(C.s6.closeAccountPaymentModal), t()
					}, [t, r]),
					u = (0, y.useCallback)((0, no._)(function() {
						var e;
						return (0, ns.Jh)(this, function(n) {
							switch (n.label) {
								case 0:
									o(!0), r(C.s6.clickAccountCustomerPortal), n.label = 1;
								case 1:
									return n.trys.push([1, 3, 4, 5]), [4, W.ZP
										.fetchCustomerPortalUrl()
									];
								case 2:
									return e = n.sent(), s.push(e.url), [3, 5];
								case 3:
									return n.sent(), es.m.warning(
										"The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.", {
											hasCloseButton: !0
										}), [3, 5];
								case 4:
									return o(!1), [7];
								case 5:
									return [2]
							}
						})
					}), [s, r, o]),
					c = (0, y.useCallback)(function() {
						r(C.s6.clickAccountPaymentGetHelp)
					}, [r]);
				return (0, v.jsxs)(o0.x, {
					isOpen: n,
					onClose: t,
					children: [(0, v.jsxs)("div", {
						className: "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
						children: [(0, v.jsx)("span", {
							className: "text-base font-semibold sm:text-base",
							children: "Your plan"
						}), (0, v.jsx)("button", {
							className: "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
							onClick: l,
							children: (0, v.jsx)(z.q5L, {
								className: "h-6 w-6"
							})
						})]
					}), (0, v.jsx)("div", {
						className: "grid",
						children: (0, v.jsx)("div", {
							className: "relative order-1 col-span-1 sm:order-2",
							children: (0, v.jsx)(o1.Oi, {
								rowElements: [(0, v.jsx)(o1.Cu, {
										text: o3.S.plus.name,
										children: (0, v.jsx)(
											"span", {
												className: "font-semibold text-gray-500",
												children: o3
													.S.plus
													.costInDollars
											})
									}, "row-plus-plan-name"), (0, v
										.jsx)(o1.hi, {
										disabled: !0,
										variant: "primary-disabled",
										text: o3.S.plus
											.callToAction.active
									}, "row-plus-plan-button"), (0,
										v.jsx)(o1.G, {
										text: o3.S.plus
											.demandAccess
									}, "row-plus-plan-demand"), (0,
										v.jsx)(o1.G, {
										text: o3.S.plus
											.responseSpeed
									}, "row-plus-plan-speed"), (0, v
										.jsx)(o1.G, {
										className: "sm:pb-1",
										text: o3.S.plus
											.modelFeatures
									}, "row-plus-plan-feathers"), !
									1 && (0, v.jsx)(o1.nR, {
										className: "sm:pb-1",
										isLoading: i,
										text: o3.S
											.manageSubscription
											.callToAction,
										onClick: u
									}, "row-plus-plan-manage"), !
									1 && (0, v.jsx)(oX(), {
											href: o2.L,
											target: "_blank",
											passHref: !0,
											children: (0, v.jsx)(o1
												.nR, {
													className: "sm:pb-1",
													isLoading: !
														1,
													text: o3.S
														.getHelp
														.callToAction,
													onClick: c
												},
												"row-plus-plan-help"
												)
										},
										"row-plus-plan-help-link")
								]
							})
						})
					})]
				})
			}
			var o4 = t(48432),
				o7 = {
					showAccountPaymentModal: !1
				},
				o8 = (0, M.ZP)()(function(e) {
					return (0, eF._)((0, h._)({}, o7), {
						setShowAccountPaymentModal: function(n) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ?
								arguments[1] : O();
							e({
								showAccountPaymentModal: n
							}), t && t()
						}
					})
				}),
				o6 = t(89678),
				o9 = t.n(o6),
				se = t(55989),
				sn = [/\bnigger\w*/i, /\bfaggot\w*/i, /\bkike\w*/i, /\bdykes?\b/i, /\bwetbacks?\b/i,
					/\bchinks?\b/i, /\bgooks?\b/i, /\bpakis?\b/i, /\binjuns?\b/i, /\btrannys?\b/i,
					/\btrannies\b/i, /\bspicks?\b/i, /\bshemales?\b/i
				];

			function st() {
				var e = (0, p._)([
					"relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch"
				]);
				return st = function() {
					return e
				}, e
			}

			function sr() {
				var e = (0, p._)(["grow flex-1 overflow-hidden"]);
				return sr = function() {
					return e
				}, e
			}

			function sa() {
				var e = (0, p._)([
					"absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2"
				]);
				return sa = function() {
					return e
				}, e
			}
			var si = (0, H.vU)({
					contentPolicyViolation: {
						id: "thread.modal.restrictedTerms.title",
						defaultMessage: "This prompt may violate our content policy.",
						description: "Title for the restricted terms modal"
					},
					acknowledge: {
						id: "thread.modal.common.acknowledge",
						defaultMessage: "Acknowledge",
						description: "Acknowledge button text"
					},
					doNotShareSensitive: {
						id: "thread.modal.onboarding.title",
						defaultMessage: "Do not share sensitive materials with this application",
						description: "Title for the onboarding warning modal"
					},
					freeResearchPreview: {
						id: "thread.chatgptFreeResearchPreview",
						defaultMessage: "Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. <link>ChatGPT May 12 Version</link>",
						description: "Free Research Preview disclaimer"
					},
					mayProduceInaccurateInformation: {
						id: "thread.chatgptMayProduceInaccurateInformation",
						defaultMessage: "ChatGPT may produce inaccurate information about people, places, or facts. <link>ChatGPT May 12 Version</link>",
						description: "ChatGPT disclaimer for producing inaccurate information"
					},
					somethingWentWrong: {
						id: "thread.modal.unrecoverableError.title",
						defaultMessage: "Something went wrong",
						description: "Title for the UnrecoverableErrorModal"
					},
					tryAgainLater: {
						id: "thread.modal.unrecoverableError.description",
						defaultMessage: "We're sorry, but something went wrong. Please try again later.",
						description: "Description for the UnrecoverableErrorModal"
					},
					resetThread: {
						id: "thread.modal.unrecoverableError.resetThread",
						defaultMessage: "Reset thread",
						description: "Reset thread button text"
					}
				}),
				so = function(e) {
					var n, t, r, a, i, o, s, l, u, c, d, f, g, p, x, b, j, M, T, P, D, F, E, R, L, A, B, U,
						q = e.initialThreadData,
						H = e.clientThreadId,
						J = e.showAccountPortalModal,
						Y = e.setShowAccountPortalModal,
						K = e.activeSidebar,
						X = e.setActiveSidebar,
						ee = e.activeRequests,
						et = e.setActiveRequests,
						er = e.newChatName,
						ea = e.setNewChatName,
						ei = e.userModifiedTitle,
						es = e.handleResetThread,
						el = e.sharingModalOpen,
						eu = e.setSharingModalOpen,
						ec = e.isStaticSharedThread,
						ef = e.initiallyHighlightedMessageId,
						eh = e.continueConversationUrl,
						eg = (0, V.Z)(),
						em = (0, k.hz)(),
						ep = (0, ni.Fl)(),
						ev = ep.isPluginsAvailable,
						ex = ep.isCodeInterpreterAvailable,
						eb = (0, $.lj)(),
						ey = (0, w.WS)(),
						ej = em.has(Q.Pt) && !eb,
						ew = (0, y.useContext)(I.QL).historyDisabled,
						eC = (0, _.U0)(H),
						ek = (0, _.Kt)(H),
						e_ = (0, _.oq)(H),
						eM = (0, m._)((0, y.useState)(), 2),
						eT = eM[0],
						eN = eM[1],
						eP = (0, m._)((0, y.useState)(), 2),
						eS = eP[0],
						eI = eP[1],
						eZ = (0, m._)((0, y.useState)(), 2),
						eD = eZ[0],
						eE = eZ[1],
						eR = (0, y.useRef)(null),
						eL = (0, k.Xj)().isLoading,
						eB = (0, k.nR)(),
						eU = (0, eA.g)(function(e) {
							return e.flags.isUserInCanPayGroup
						}),
						eq = em.has(Q.FZ),
						eO = (0, m._)((0, y.useState)(!1), 2),
						ez = eO[0],
						eH = eO[1],
						eV = (t = (n = {
							exempt: !1,
							onRestrictedTermFound: (0, y.useCallback)(function(e) {
								eH(!0), ey(C.s6.promptUsedRestrictedWords, {
									threadId: _.tQ.getServerThreadId(H),
									content: e
								})
							}, [ey, H])
						}).exempt, r = n.onRestrictedTermFound, i = (a = (0, m._)((0, y.useState)(!1),
							2))[0], o = a[1], {
							hasRestrictedTerms: i,
							checkRestrictedTerms: (0, y.useCallback)(function(e) {
								var n;
								return (sn.some(function(t) {
									var r = t.exec(e);
									return r && (n = r[0]), r
								}), !t && n) ? (o(!0), null == r || r(n), !0) : (o(!1), !1)
							}, [t, r])
						}),
						eG = eV.hasRestrictedTerms,
						eW = eV.checkRestrictedTerms,
						eQ = (0, m._)((0, y.useState)(!0), 2),
						e$ = eQ[0],
						eJ = eQ[1],
						eY = (0, m._)((0, y.useState)(!1), 2),
						eK = eY[0],
						eX = eY[1],
						e0 = (0, oe.Z)().availableModels,
						e1 = (0, aO.p0)(),
						e2 = (0, re.ZP)(e0, q.lastModelUsed, H),
						e3 = e2.modelBackend,
						e5 = e2.onChangeModelSetting,
						e4 = (0, y.useMemo)(function() {
							return e0.find(function(e) {
								return e.id === e3
							})
						}, [e0, e3]),
						e7 = ed(),
						e6 = (0, y.useCallback)(function() {
							e7(), ea(""), ey(C.s6.newThread)
						}, [ey, e7, ea]),
						e9 = ei || er || q.title,
						ne = (0, m._)((0, y.useState)(), 2),
						nn = ne[0],
						nt = ne[1],
						nr = (0, y.useCallback)(function(e, n) {
							ew || W.ZP.generateTitle(null != n ? n : "", e, e3).then(function(e) {
								var t = e.title;
								ea(t), e7(), ey(C.s6.renameThread, {
									threadId: n,
									content: t,
									model: e3
								})
							}).catch(function(e) {
								console.error(e)
							})
						}, [ew, ey, e3, ea, e7]),
						na = (0, y.useCallback)(function(e, n, t) {
							var r = em.has(Q.uj);
							ew || !r || void 0 === t || n4.Cv.getIsIncompleteFromMessage(t) || n4.Cv
								.getWasInterruptedFromMessage(t) || W.ZP.generateSuggestions(e, n, e3)
								.then(function(e) {
									nt({
										messageId: n,
										suggestions: e.suggestions
									})
								}).catch(function(e) {
									console.error(e)
								})
						}, [em, ew, e3]),
						nl = (0, _.Uy)(H),
						nu = (s = ev && (null == e4 ? void 0 : null === (R = e4.enabledTools) || void 0 ===
							R ? void 0 : R.includes("tools3")) ? e1.map(function(e) {
							return e.id
						}) : void 0, l = (0, k.hz)(), u = (0, y.useId)(), c = (0, w.WS)(), d = (0, re
							.CS)(function(e) {
							return null == e ? void 0 : e.setCapTimeout
						}), f = (0, re.CS)(function(e) {
							return null == e ? void 0 : e.clearCapTimeout
						}), g = (0, y.useContext)(I.QL).historyDisabled, p = (0, y.useRef)(0), x = (0, y
							.useRef)({}), b = (0, y.useCallback)(function(e, n, t, r) {
							var a, i, o = r.eventSource,
								s = function() {
									setTimeout(function() {
										S.removeAborterById(t), et(function(e) {
											var n = new Set(e);
											return n.delete(t), n
										}), delete x.current[t], _.tQ.releaseThread(H)
									}, 0)
								},
								u = _.tQ.getTree(H),
								g = t,
								m = u.getParentId(g),
								p = n === n5.Os.Continue,
								v = !0,
								b = !1,
								y = u.getMessage(g),
								j = new Set,
								w = u.getIsBlockedFromNode(m),
								k = !1,
								T = !1,
								N = o9()(function() {
									w || k || _.tQ.updateTree(H, function(e) {
										e.updateNodeMessage(g, y)
									})
								}, 50, {
									leading: !0,
									maxWait: 50
								});

							function P(e, n, t) {
								return I.apply(this, arguments)
							}

							function I() {
								return (I = (0, no._)(function(e, n, t) {
									var r, a, i, o, s, l = arguments;
									return (0, ns.Jh)(this, function(d) {
										switch (d.label) {
											case 0:
												r = l.length > 3 && void 0 !==
													l[3] && l[3], d.label = 1;
											case 1:
												return d.trys.push([1, 3, , 4]),
													[4, (0, n3._I)(t, !1, e, u
														.getMessageId(n))];
											case 2:
												return i = (a = d.sent())
													.isBlocked, o = a.isFlagged,
													(i || o) && (T = !0), i ? (
														k = !0, r || (w = !0), _
														.tQ.updateTree(H,
															function(e) {
																e.updateNode(
																n, {
																	message: {
																		content: {
																			parts: {
																				$set: [
																					""]
																			}
																		}
																	},
																	metadata: {
																		$set: (0,
																				eF
																				._
																				)
																			((0, h
																					._)
																				({}, n3
																					.sK
																					), {
																					completionSampleFinishTime: Date
																						.now()
																				}
																				)
																	}
																})
															}), c(r ? C.s6
															.completionBlockedByModeration :
															C.s6
															.promptBlockedByModeration, {
																threadId: e,
																id: n
															})) : o ? (_.tQ
														.updateTree(H, function(
															e) {
															e.updateNode(
															n, {
																metadata: {
																	$set: n3
																		.Mf
																}
															})
														}), c(r ? C.s6
															.completionFlaggedByModeration :
															C.s6
															.promptFlaggedByModeration, {
																threadId: e,
																id: n
															})) : r && w && _.tQ
													.updateTree(H, function(e) {
														e.updateNodeMessage(
															n, y)
													}), [3, 4];
											case 3:
												return s = d.sent(), k = !0, _
													.tQ.updateTree(H, function(
														e) {
														e.updateNode(n, {
															metadata: {
																$set: {
																	err: "An error occured",
																	errType: "danger",
																	completionSampleFinishTime: Date
																		.now()
																}
															}
														})
													}), c(C.s6
													.moderationError, {
														threadId: e,
														content: JSON
															.stringify(s ||
																"")
													}), n2().publish(
														"UnrecoverableError"), [
														3, 4
													];
											case 4:
												return [2]
										}
									})
								})).apply(this, arguments)
							}
							return a = (0, no._)(function(r) {
									var a, I, Z, D, F, E, R, L, A, B, U, q, O, z, V, G, W;
									return (0, ns.Jh)(this, function(Q) {
										switch (Q.label) {
											case 0:
												if ("error" === r.type) return console
													.error(a = r.error), I = (
														null == a ? void 0 : a
														.message) ||
													"Something went wrong", _.tQ
													.updateTree(H, function(e) {
														e.updateNode(g, {
															message: {
																$set: y
															},
															metadata: {
																$set: {
																	err: I,
																	errType: "danger",
																	errCode: (
																			0,
																			se
																			.T
																			)
																		(
																			a) &&
																		a
																		.code ||
																		"",
																	completionSampleFinishTime: Date
																		.now()
																}
															}
														})
													}), s(), (0, se.T)(a) && (
														null == a ? void 0 : a.code
														) === re.uU && (null == a ?
														void 0 : a.clearsIn) && (d(
															new Date(Date.now() +
																1e3 * a.clearsIn)
															.toISOString()),
														setTimeout(function() {
															f()
														}, 1e3 * a.clearsIn)), [2];
												if ("moderation" === r.type && (Z = r
														.isCompletion, D = r.messageId,
														F = r.conversationId, E = r
														.flagged, ((R = r.blocked) ||
														E) && _.tQ.updateTree(H,
															function(e) {
																var n = e
																	.messageIdToNodeId(
																		D);
																e.updateNode(n, {
																	message: {
																		content: {
																			parts: {
																				$set: [
																					""]
																			}
																		}
																	},
																	metadata: {
																		$set: (0,
																				eF
																				._
																				)
																			((0, h
																					._)
																				({}, R ?
																					n3
																					.sK :
																					n3
																					.Mf
																					), {
																					completionSampleFinishTime: Date
																						.now()
																				}
																				)
																	}
																})
															}), (E || R) && c(Z ? R ? C
															.s6
															.completionBlockedByModeration :
															C.s6
															.completionFlaggedByModeration :
															R ? C.s6
															.promptBlockedByModeration :
															C.s6
															.promptFlaggedByModeration, {
																threadId: F,
																id: D
															})), "message" === r.type) {
													if (L = r.message, A = r
														.conversationId, v && u
														.isFirstCompletion) {
														if ((null == L ? void 0 : L
																.author.role) === n5.uU
															.System) return u
															.appendSystemMessageToRoot(
																L), [2];
														if ((null == L ? void 0 : L
																.author.role) === n5.uU
															.User) return [2]
													}
													v ? (U = (null === (B = _.qN
																	.getState().threads[
																		H]) ||
																void 0 === B ? void 0 :
																B
																.continuingFromSharedConversationId
																) != null, _.tQ
															.removeContinuingFromSharedConversationId(
																H), v = !1, b = u
															.isFirstCompletion || U, (
																null == L ? void 0 : L
																.id) && j.add(t),
															void 0 !== A && (i = A, (0,
																	_.Zz)(H) && _.tQ
																.setServerIdForNewThread(
																	H, A)), _.tQ
															.updateTree(H, function(e) {
																e.updateNodeMessage(
																	g, L)
															}), b && e6(A), p || P(A, m,
																u.getTextFromLastNTurns(
																	m, 1), !1), c(C.s6
																.generateCompletion, {
																	id: t,
																	threadId: A,
																	completionType: n,
																	eventSource: o,
																	model: e
																}), S.addAborter(t, x
																.current[t])) : p || L
														.id === u.getMessageId(g) || (j
															.add(L.id), N.flush(), _.tQ
															.updateTree(H, function(e) {
																e.addNode(L.id, L,
																	g, n5.Jq
																	.Completion)
															}), g = L.id, _.tQ
															.setThreadCurrentLeafId(H,
																g)), y = L
												}
												if (N(), "done" !== r.type || (w || k ||
														(N.flush(), T || (q = u
															.getMessageId(g), b &&
															nr(q, i), na(i, q, y))), O =
														u.getTextFromTurnsById(Array
															.from(j)), z = u
														.getTextFromLastNTurns(m, 2) +
														"\n\n" + O, P(i, g, z, !0), _.tQ
														.updateTree(H, function(e) {
															e.updateNode(g, {
																metadata: {
																	$set: (0,
																			eF
																			._
																			)
																		((0, h
																				._)
																			({}, u
																				.getMetadata(
																					g
																					)
																				), {
																				completionSampleFinishTime: Date
																					.now()
																			}
																			)
																}
															})
														}), s(), !l.has("tools3_dev") ||
														!(V = function(e) {
															var n, t, r, a = (
																null === (n = e
																	.metadata
																	) ||
																void 0 === n ?
																void 0 :
																null === (t = n
																	.invoked_plugin
																	) ||
																void 0 === t ?
																void 0 : t
																.http_api_call_data
																) || (null === (
																	r = e
																	.metadata
																	) ||
																void 0 === r ?
																void 0 : r
																.http_api_call_data
																);
															if (void 0 !== a) {
																if (e.author
																	.role !== n5.uU
																	.Assistant) {
																	console.error(
																		"Refusing to make localhost plugin HTTP call from non-assistant message",
																		e);
																	return
																}
																if ("object" !=
																	typeof a ||
																	"string" !=
																	typeof a
																	.namespace ||
																	0 === a
																	.namespace
																	.length ||
																	"string" !=
																	typeof a
																	.function_name ||
																	0 === a
																	.function_name
																	.length ||
																	"string" !=
																	typeof a
																	.parent_message_id ||
																	0 === a
																	.parent_message_id
																	.length ||
																	"string" !=
																	typeof a.url ||
																	0 === a.url
																	.length ||
																	"string" !=
																	typeof a
																	.method || ![
																		"get",
																		"post",
																		"put",
																		"delete",
																		"patch"
																	].includes(a
																		.method) ||
																	!Array.isArray(a
																		.qs_params
																		) || a
																	.qs_params.some(
																		function(
																		e) {
																			return !
																				Array
																				.isArray(
																					e
																					) ||
																				2 !==
																				e
																				.length ||
																				"string" !=
																				typeof e[
																					0
																					] ||
																				"string" !=
																				typeof e[
																					1
																					]
																		}) ||
																	"object" !=
																	typeof a
																	.headers ||
																	Object.keys(a
																		.headers)
																	.some(function(
																		e) {
																		return "string" !=
																			typeof e
																	}) || Object
																	.values(a
																		.headers)
																	.some(function(
																		e) {
																		return "string" !=
																			typeof e
																	}) || !(null ===
																		a.body ||
																		"object" ==
																		typeof a
																		.body &&
																		Object.keys(
																			a.body)
																		.every(
																			function(
																				e) {
																				return "string" ==
																					typeof e
																			})) ||
																	"string" !=
																	typeof a
																	.api_function_type ||
																	!["kwargs",
																		"chat"
																	].includes(a
																		.api_function_type
																		)) {
																	console.error(
																		"Refusing to make localhost plugin HTTP call with invalid metadata",
																		e);
																	return
																}
																if (!
																	/^https?:\/\/localhost:/
																	.test(a.url)) {
																	console.error(
																		"Refusing to make localhost plugin HTTP call with non-localhost URL",
																		e);
																	return
																}
																return a
															}
														}(y)))) return [3, 2];
												return [4, function(e) {
													return t$.apply(this,
														arguments)
												}(V)];
											case 1:
												G = Q.sent(), W = g, _.tQ.updateTree(H,
													function(e) {
														var n = !0,
															t = !1,
															r = void 0;
														try {
															for (var a, i = G[Symbol
																	.iterator](); !(
																	n = (a = i
																	.next()).done
																	); n = !0) {
																var o = a.value;
																e.addNode(o.id, o,
																	W, n5.Jq
																	.Completion, {
																		completionSampleFinishTime: Date
																			.now()
																	}), W = o.id
															}
														} catch (e) {
															t = !0, r = e
														} finally {
															try {
																n || null == i
																	.return || i
																	.return()
															} finally {
																if (t) throw r
															}
														}
													}), _.tQ.setThreadCurrentLeafId(
													H, W), M(e, n5.Os.Next, W, {},
													void 0, void 0), Q.label = 2;
											case 2:
												return [2]
										}
									})
								}),
								function(e) {
									return a.apply(this, arguments)
								}
						}, [c, e6, nr, et, H]), M = (0, y.useCallback)((j = (0, no._)(function(e, n, t,
							r) {
							var a, i, o, l, c, d, f, h, m, v, y, j = arguments;
							return (0, ns.Jh)(this, function(w) {
								switch (w.label) {
									case 0:
										return a = !(j.length > 4) || void 0 === j[
												4] || j[4], i = j.length > 5 ? j[
											5] : void 0, o = _.tQ.getTree(H), _.tQ
											.retainThread(H), l = "request-".concat(
												u, "-").concat(p.current++), et(
												function(e) {
													var n = new Set(e);
													return n.add(l), n
												}), _.tQ.updateTree(H, function(e) {
												e.addNode(l, "", t, n5.Jq
													.Completion)
											}), a && _.tQ.setThreadCurrentLeafId(H,
												l), d = [], f = o.getNode(t), n ===
											n5.Os.Next || n === n5.Os.Variant ? (c =
												(null === (h = (m = o.getNode(f
														.parentId)).message) ||
													void 0 === h ? void 0 : h.id) ||
												m.id, d.push(f.message)) : c = f
											.message.id, void 0 === (v = _.tQ
												.getServerThreadId(H)) && (0, _.Zz)(
												H) && _.tQ
											.updateInitialThreadDataForNewThread(H,
												e, s), [4, W.ZP
												.publicApiCompletionStream({
													model: e,
													completionType: n,
													threadId: v,
													continueFromSharedConversationId: nl,
													historyDisabled: g,
													parentMessageId: c,
													messages: d,
													enabledPluginIds: s,
													completionMetadata: i
												}, b(e, n, l, r))
											];
									case 1:
										return y = w.sent(), x.current[l] = y, [2]
								}
							})
						}), function(e, n, t, r) {
							return j.apply(this, arguments)
						}), [H, u, et, nl, g, s, b])),
						nc = (0, y.useCallback)(function() {
							if (e_) {
								var e = _.tQ.getTree(H).getBranchFromLeaf(e_);
								e.forEach(function(e) {
									S.abortAndRemoveById(e.id)
								}), et(function(n) {
									var t = new Set(n);
									return e.forEach(function(e) {
										t.delete(e.id)
									}), t
								})
							}
						}, [e_, et, H]),
						nd = (0, y.useCallback)((T = (0, no._)(function(e, n, t, r) {
							var a, i, o, s, l = arguments;
							return (0, ns.Jh)(this, function(u) {
								return a = !(l.length > 4) || void 0 === l[4] || l[4],
									i = l.length > 5 ? l[5] : void 0, o = l.length > 6 ?
									l[6] : void 0, r && nc(), s = _.tQ.getTree(H), e !==
									n5.Os.Continue && eW(s.getTextFromNode(n)) || nu(i ?
										(0, re.xt)(!1, e0) : e3, e, n, t, a, o), [2]
							})
						}), function(e, n, t, r) {
							return T.apply(this, arguments)
						}), [eW, H, nu, e0, e3, nc]),
						nf = (0, y.useCallback)(function(e, n, t, r) {
							_.tQ.updateTree(H, function(t) {
								t.addNode(e, r, n, n5.Jq.Prompt)
							})
						}, [H]),
						nh = (0, y.useCallback)(function(e, n, t) {
							var r = n.value,
								a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
							nf(e, e_, n5.Jq.Prompt, r), nd(n5.Os.Next, e, t, !0, void 0, void 0, a)
						}, [e_, nf, nd]),
						ng = (0, _.nh)(H, e_),
						nm = (0, y.useMemo)(function() {
							var e, n, t = ng.type === n5.Jq.Prompt,
								r = (null === (e = ng.metadata) || void 0 === e ? void 0 : e.err) && (
									null === (n = ng.metadata) || void 0 === n ? void 0 : n.errCode) !==
								n3.Dd;
							return !!(t || r) && 0 === ee.size
						}, [ee.size, ng]),
						np = (0, re.CS)(function(e) {
							return e.isoDate
						}),
						nv = (0, y.useMemo)(function() {
							var e, n = (null === (e = ng.metadata) || void 0 === e ? void 0 : e
								.errCode) === re.uU;
							return nm && n && null != np && "" !== np
						}, [null === (L = ng.metadata) || void 0 === L ? void 0 : L.errCode, nm, np]),
						nx = (0, y.useCallback)(function(e, n) {
							var t, r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[
									2],
								a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] :
								"none",
								i = arguments.length > 4 ? arguments[4] : void 0,
								o = _.tQ.getTree(H);
							t = nm ? o.getLastValidNode(e).id : o.getParentPromptNode(e).id, nd(n5.Os
								.Variant, t, n, !1, r, i, {
									variantPurpose: a
								})
						}, [nd, nm, H]),
						nb = (0, y.useCallback)(function(e) {
							nd(n5.Os.Continue, e, {
								eventSource: "mouse"
							}, !1)
						}, [nd]),
						ny = (0, y.useCallback)(function(e) {
							var n = e_,
								t = !0,
								r = !1,
								a = void 0;
							try {
								for (var i, o = e[Symbol.iterator](); !(t = (i = o.next()).done); t = !
									0) ! function() {
									var e = i.value;
									e.conversation_id && (0, _.Zz)(H) && _.tQ
										.setServerIdForNewThread(H, e.conversation_id), _.tQ
										.updateTree(H, function(t) {
											t.addNode(e.message.id, e.message, n, n5.Jq
												.Completion)
										}), n = e.message.id
								}()
							} catch (e) {
								r = !0, a = e
							} finally {
								try {
									t || null == o.return || o.return()
								} finally {
									if (r) throw a
								}
							}
							_.tQ.setThreadCurrentLeafId(H, n), nd(n5.Os.Next, n, {}, !0, void 0, void 0,
								void 0)
						}, [e_, nd, H]),
						nj = !!(ex && (null == e4 ? void 0 : null === (A = e4.enabledTools) || void 0 ===
							A ? void 0 : A.includes("tools2"))),
						nw = (0, y.useCallback)((P = (0, no._)(function(e, n) {
							var t, r;
							return (0, ns.Jh)(this, function(a) {
								switch (a.label) {
									case 0:
										if (!nj) return [3, 2];
										return n.preventDefault(), n.stopPropagation(),
											t = n.currentTarget.href, r = _.tQ
											.getServerThreadId(H), [4, (0, n7
												.handleSandboxLinkClick)(em, r)(e,
												t)];
									case 1:
										a.sent(), a.label = 2;
									case 2:
										return [2]
								}
							})
						}), function(e, n) {
							return P.apply(this, arguments)
						}), [em, nj, H]),
						nC = (0, y.useCallback)(function(e) {
							var n = _.tQ.getTree(H).getLeafFromNode(e);
							_.tQ.setThreadCurrentLeafId(H, n.id), ey(C.s6.changeNode)
						}, [ey, H]),
						nk = (0, y.useCallback)(function(e, n) {
							_.tQ.updateTree(H, function(t) {
								t.updateNodeText(e, n)
							})
						}, [H]),
						n_ = (0, y.useCallback)(function(e, n, t) {
							var r = _.tQ.getServerThreadId(H);
							if (ey(C.s6.thumbRating, {
									id: n,
									threadId: r,
									rating: t,
									model: e3
								}), void 0 !== r && W.ZP.submitMessageFeedback({
									message_id: n,
									conversation_id: r,
									rating: t
								}), eI(e), eE(n), eN(t), _.tQ.updateTree(H, function(n) {
									var r = n.getMetadata(e);
									n.updateNode(e, {
										metadata: {
											$set: (0, eF._)((0, h._)({}, r), {
												rating: t
											})
										}
									})
								}), "thumbsDown" === t && ej) {
								var a = _.tQ.getTree(H).getConversationTurns(e || "root");
								r_(a[a.length - 1]) && nx(e, {
									eventSource: "mouse",
									intent: "comparison"
								}, !1, "comparison")
							}
						}, [ey, H, e3, ej, nx]),
						nM = (0, y.useCallback)(function(e, n) {
							if (eT && eS && (e || n.length > 0)) {
								var t = _.tQ.getServerThreadId(H);
								ey(C.s6.reportResult, {
									id: eD,
									threadId: t,
									content: e,
									model: e3,
									rating: eT,
									tags: n
								}), H && eD && W.ZP.submitMessageFeedback({
									message_id: eD,
									conversation_id: t,
									rating: eT,
									text: e,
									tags: n
								})
							}
						}, [eT, eS, ey, eD, H, e3]),
						nT = (0, y.useCallback)((D = (0, no._)(function(e, n, t, r, a, i, o, s, l, u, c) {
							return (0, ns.Jh)(this, function(d) {
								switch (d.label) {
									case 0:
										return [4, W.ZP
									.submitMessageComparisonFeedback({
											feedback_version: "comparison_feedback_modal:a:1.0",
											original_message_id: e,
											new_message_id: n,
											rating: t,
											conversation_id: _.tQ
												.getServerThreadId(H),
											text: u,
											tags: c.map(function(e) {
												return e.replace(
													"feedback-",
													"")
											}),
											completion_comparison_rating: r,
											new_completion_placement: a,
											feedback_start_time: i,
											compare_step_start_time: o,
											new_completion_load_start_time: s,
											new_completion_load_end_time: l,
											frontend_submission_time: Date
												.now(),
											timezone_offset_min: new Date()
												.getTimezoneOffset()
										})];
									case 1:
										return d.sent(), [2]
								}
							})
						}), function(e, n, t, r, a, i, o, s, l, u, c) {
							return D.apply(this, arguments)
						}), [H]),
						nN = (0, y.useCallback)((F = (0, no._)(function(e, n, t, r, a, i, o) {
							return (0, ns.Jh)(this, function(s) {
								switch (s.label) {
									case 0:
										return [4, W.ZP
									.submitMessageComparisonFeedback({
											feedback_version: "inline_regen_feedback:a:1.0",
											original_message_id: e,
											new_message_id: n,
											rating: "none",
											conversation_id: _.tQ
												.getServerThreadId(H),
											text: "",
											tags: [],
											completion_comparison_rating: t,
											new_completion_placement: "not-applicable",
											feedback_start_time: r,
											compare_step_start_time: a,
											new_completion_load_start_time: i,
											new_completion_load_end_time: o,
											frontend_submission_time: Date
												.now(),
											timezone_offset_min: new Date()
												.getTimezoneOffset()
										})];
									case 1:
										return s.sent(), [2]
								}
							})
						}), function(e, n, t, r, a, i, o) {
							return F.apply(this, arguments)
						}), [H]),
						nP = (0, y.useCallback)(function(e, n) {
							var t = _.tQ.getTree(H).getConversationTurns(e),
								r = null == t ? void 0 : t[(null == t ? void 0 : t.length) - 1]
								.variantIds,
								a = (null == r ? void 0 : r.length) === 1;
							nx(e, a ? (0, eF._)((0, h._)({}, n), {
								intent: "comparison_implicit"
							}) : n, !0, a ? "comparison_implicit" : "none")
						}, [nx, H]),
						nS = (0, y.useCallback)(function(e) {
							_.tQ.updateTree(H, function(n) {
								n.deleteNode(e)
							})
						}, [H]),
						nI = (0, y.useCallback)(function() {
							X(function(e) {
								return "navigation" !== e && "navigation"
							})
						}, [X]),
						nZ = (0, y.useCallback)(function() {
							X(function(e) {
								return "debug" !== e && "debug"
							})
						}, [X]),
						nD = (0, y.useCallback)(function() {
							Y(!1)
						}, [Y]),
						nF = o8(function(e) {
							return {
								setShowAccountPaymentModal: e.setShowAccountPaymentModal,
								showAccountPaymentModal: e.showAccountPaymentModal
							}
						}),
						nE = nF.showAccountPaymentModal,
						nR = nF.setShowAccountPaymentModal,
						nL = (0, y.useCallback)(function() {
							nR(!1)
						}, [nR]),
						nA = (0, y.useCallback)(function(e, n) {
							var t = _.tQ.getTree(H);
							if (t.isFirstCompletion && !ew) {
								var r, a = t.getParent(n);
								(null === (r = a.metadata) || void 0 === r ? void 0 : r.errCode) !== n3
									.Dd && setTimeout(function() {
										nr(a.message.id)
									}, 500)
							}
							S.abortAndRemoveById(n), ee.has(n) && (_.tQ.updateTree(H, function(e) {
								e.updateNodeMessageMetadata(n, {
									finish_details: {
										type: "interrupted"
									}
								})
							}), et(function(e) {
								var t = new Set(e);
								return t.delete(n), t
							}))
						}, [nr, ew, ee, et, H]),
						nB = (0, y.useCallback)(function() {
							eX(!0)
						}, []);
					(0, y.useEffect)(function() {
						var e = n2().subscribe("AbortCompletion", nA),
							n = n2().subscribe("UnrecoverableError", nB);
						return function() {
							n2().unsubscribe(e), n2().unsubscribe(n)
						}
					}, [nA, nB]);
					var nU = (0, _.Hk)(H),
						nq = eC >= 2,
						nO = (0, _.Zz)(H) && !nq,
						nz = (0, m._)((0, y.useState)(""), 2),
						nH = nz[0],
						nV = nz[1];
					(0, y.useEffect)(function() {
						nV("")
					}, [H]);
					var nW = (0, y.useCallback)(function() {
							eJ(!0), eo.m.setItem("oai/librarian/hasSeenWarning", "true")
						}, []),
						nQ = (0, y.useCallback)(function() {
							eH(!1)
						}, []),
						n$ = (0, _.lA)(H, e_),
						nJ = (0, _.dz)(H, e_),
						nX = (0, y.useMemo)(function() {
							return !!em.has("can_continue") && !n$ && nJ
						}, [e_, em, n$, nJ]),
						n1 = (0, iU.Z)(),
						n8 = ek || eL,
						n6 = N(function(e) {
							return null != e.aborters[nU]
						}),
						n9 = (0, _.XK)(H),
						te = (0, _.r7)(H);
					return (0, v.jsxs)(v.Fragment, {
						children: [(0, v.jsxs)(n0(), {
							children: [(0, v.jsx)("title", {
								children: e9
							}), ec && (0, v.jsxs)(v.Fragment, {
								children: [(0, v.jsx)("meta", {
									property: "og:site_name",
									content: "ChatGPT"
								}), (0, v.jsx)("meta", {
									name: "robots",
									content: "noindex,nofollow"
								}), (0, v.jsx)("meta", {
									property: "og:title",
									content: null != e9 ? e9 :
										"Shared Conversation on ChatGPT"
								}), (0, v.jsx)("meta", {
									property: "og:image",
									content: "/api/share/og/"
										.concat(n9)
								})]
							})]
						}), (0, v.jsx)(oY, {}), !e$ && (0, v.jsx)(e8.ZP, {
							isOpen: !0,
							onModalClose: nW,
							icon: nK.Z,
							title: eg.formatMessage(si.doNotShareSensitive),
							primaryButton: (0, v.jsx)(e8.mH, {
								onClick: nW,
								title: eg.formatMessage(si.acknowledge)
							}),
							type: "danger"
						}, "OnboardingModal"), eG && ez && (0, v.jsx)(e8.ZP, {
							isOpen: !0,
							onModalClose: nQ,
							icon: z.U0j,
							title: eg.formatMessage(si.contentPolicyViolation),
							primaryButton: (0, v.jsx)(e8.mH, {
								onClick: nQ,
								title: eg.formatMessage(si.acknowledge)
							}),
							type: "danger"
						}, "RestrictedTerms"), el && null != n9 && (0, v.jsx)(oj, {
							serverThreadId: n9,
							isNewThread: nO,
							isLoading: n8,
							currentLeafId: e_,
							sharingModalOpen: el,
							setSharingModalOpen: eu,
							activeRequests: ee,
							currentThreadModel: q.lastModelUsed
						}), null != eT && (0, v.jsx)(rM, {
							ratingModalNodeId: eS,
							ratingModalOpen: eT,
							setRatingModalOpen: eN,
							handleSubmitFeedback: nM,
							onHandleChangeFeedbackComparisonRating: nT,
							modelBackend: e3,
							feedbackTextareaRef: eR,
							clientThreadId: H,
							activeRequests: ee,
							onChangeItemInView: nC,
							onRequestMoreCompletions: nx,
							onUpdateNode: nk,
							onChangeRating: n_,
							onDeleteNode: nS,
							onRequestCompletion: nd,
							onSandboxLinkClick: nw
						}), (0, v.jsxs)("div", {
							className: "flex h-full max-w-full flex-1 flex-col",
							children: [eb && (0, v.jsx)(nY, {
								children: (0, v.jsx)(nG, {
									onNewThread: es,
									onClickOpenSidebar: nI,
									title: q.title,
									newChatName: er
								})
							}), (0, v.jsxs)(ss, {
								className: "flex-1",
								children: [(0, v.jsx)(oF, {
									isStaticSharedThread: ec,
									handleResetThread: es,
									activeSidebar: K,
									toggleDebugSidebar: nZ
								}), (0, v.jsx)(sl, {
									children: !ek && (nO ||
										nq) && (E = (0, v.jsx)(
											oo, {
												isLoading: n8,
												onChangeItemInView: nC,
												onRequestMoreCompletions: nx,
												onUpdateNode: nk,
												onChangeRating: n_,
												onDeleteNode: nS,
												onRequestCompletion: nd,
												onChangeCurrentPrompt: nV,
												onSandboxLinkClick: nw,
												onHandleChangeVariantFeedbackInlineComparisonRating: nN,
												isNewThread: nO,
												clientThreadId: H,
												isStaticSharedThread: ec,
												activeRequests: ee,
												onChangeModelSetting: e5,
												currentThreadModel: q
													.lastModelUsed,
												initiallyHighlightedMessageId: ef,
												inlineEmbeddedDisplay:
													!1,
												continueConversationUrl: eh
											}, H), ec ? (0,
											v.jsx)("div", {
											className: "h-full overflow-auto dark:bg-gray-800",
											children: E
										}) : (0, v.jsx)(
										oL, {
											children: E
										}))
								}), (0, v.jsxs)(su, {
									children: [em.has(
											"model_preview"
											) && nO && e3
										.startsWith(re
										.f_) && (0, v.jsx)(
											"div", {
												className: "stretch mx-2 mb-2 text-center text-xs text-gray-600 dark:text-gray-200 md:mx-4 md:text-sm lg:m-auto lg:max-w-3xl",
												children: n1
													.textareaDisclaimer
											}), !nv && !
										ec && (0, v.jsx)(
										nY, {
											children: (
												0, v
												.jsx
												)(
												rR, {
													clientThreadId: H,
													currentPrompt: nH,
													onChangeCurrentPrompt: nV,
													onRequestMoreCompletions: nP,
													onCreateNewCompletion: nh,
													onAbortCompletion: nA,
													onContinueGenerating: nb,
													onFileUpload: ny,
													modelBackend: e3,
													canUpload: nj,
													isCompletionInProgress: ee
														.has(
															nU
															),
													className: (
															0,
															Z
															.Z
															)
														("stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto",
															eq ?
															"max-w-[44rem]" :
															"lg:max-w-2xl xl:max-w-3xl"
															),
													shouldRetry: nm,
													canContinue: nX,
													suggestions: void 0 !==
														nn &&
														(null ==
															nn ?
															void 0 :
															nn
															.messageId
															) ===
														(null ===
															(B = _
																.tQ
																.getTree(
																	H
																	)
																.getLastValidNode(
																	e_
																	)
																) ||
															void 0 ===
															B ?
															void 0 :
															null ===
															(U = B
																.message
																) ||
															void 0 ===
															U ?
															void 0 :
															U
															.id
															) ?
														null ==
														nn ?
														void 0 :
														nn
														.suggestions :
														void 0,
													disabled:
														!
														e0
														.length,
													canPause: n6,
													isInteractableSharedThread: te
												}, H
												)
										}), ec && (0, v.jsx)
										(v.Fragment, {
											children: (
												0, v
												.jsx
												)(
												"div", {
													className: "relative flex h-full flex-1 items-stretch md:flex-col",
													children: (
															0,
															v
															.jsx
															)
														(en.z, {
															className: "ml-auto mr-auto flex-1",
															as: "link",
															to: eh,
															children: "Continue this conversation"
														})
												})
										}), !1 && (0, v.jsx)
										("div", {
											className: "px-3 pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-4 md:pb-6 md:pt-3",
											children: eB ?
												(0, v
													.jsx
													)(
													"span", {
														children: (
																0,
																v
																.jsx
																)
															(G.Z,
																(0, eF
																	._
																	)
																((0, h
																		._)
																	({}, si
																		.mayProduceInaccurateInformation
																		), {
																		values: {
																			link: function(
																				e
																				) {
																				return (0,
																						v
																						.jsx
																						)
																					("a", {
																						href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
																						target: "_blank",
																						rel: "noreferrer",
																						className: "underline",
																						children: e
																					})
																			}
																		}
																	}
																	)
																)
													}) :
												(0, v
													.jsx
													)(
													"span", {
														children: (
																0,
																v
																.jsx
																)
															(G.Z,
																(0, eF
																	._
																	)
																((0, h
																		._)
																	({}, si
																		.freeResearchPreview
																		), {
																		values: {
																			link: function(
																				e
																				) {
																				return (0,
																						v
																						.jsx
																						)
																					("a", {
																						href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
																						target: "_blank",
																						rel: "noreferrer",
																						className: "underline",
																						children: e
																					})
																			}
																		}
																	}
																	)
																)
													})
										})
									]
								})]
							})]
						}), em.has("debug") && "debug" === K && (0, v.jsx)(oz, {
							clientThreadId: H,
							currentLeafId: e_,
							isOpen: "debug" === K,
							slideOver: eb,
							onClose: nZ
						}), em.has("tools3_dev") && (0, v.jsx)(oJ, {
							slideOver: eb
						}), eU && (0, v.jsx)(o4.Z, {
							isOpen: nE,
							onClose: nL
						}), void 0 !== eB && eB && (0, v.jsx)(o5, {
							isOpen: J,
							onClose: nD
						}), eK && (0, v.jsx)(e8.ZP, {
							onModalClose: O(),
							isOpen: !0,
							icon: nK.Z,
							title: eg.formatMessage(si.somethingWentWrong),
							description: eg.formatMessage(si.tryAgainLater),
							primaryButton: (0, v.jsx)(e8.mH, {
								onClick: function() {
									es(), eX(!1)
								},
								title: eg.formatMessage(si.resetThread)
							}),
							type: "danger"
						}, "UnrecoverableErrorModal")]
					})
				},
				ss = j.Z.main(st()),
				sl = j.Z.div(sr()),
				su = j.Z.div(sa());

			function sc() {
				var e = (0, p._)(["overflow-hidden w-full h-full relative flex z-0"]);
				return sc = function() {
					return e
				}, e
			}
			var sd = j.Z.div(sc()),
				sf = (s = function(e) {
					var n = e.clientThreadId,
						t = e.setClientThreadId,
						r = e.isStaticSharedThread,
						a = (0, g._)(e, ["clientThreadId", "setClientThreadId",
						"isStaticSharedThread"]),
						i = (0, _.UL)(n),
						o = a.setShowAccountPortalModal,
						s = a.activeSidebar,
						l = a.setActiveSidebar,
						u = a.setActiveRequests,
						c = a.newChatName,
						d = a.setNewChatName,
						f = a.userModifiedTitle,
						m = a.setUserModifiedTitle,
						p = a.setSharingModalOpen,
						j = (0, _.XK)(n),
						M = (0, b.useRouter)(),
						T = (0, w.WS)(),
						N = (0, k.nR)(),
						P = (0, oe.Z)().availableModels,
						Z = (0, y.useContext)(I.QL).historyDisabled,
						D = (0, re.ZP)(P, i.lastModelUsed, n).modelBackend,
						F = (0, x.NL)();
					(0, y.useEffect)(function() {
						return _.tQ.retainThread(n),
							function() {
								setTimeout(function() {
									F.invalidateQueries(["conversation", n])
								}, 0), _.tQ.releaseThread(n)
							}
					}, [n, F]), (0, y.useEffect)(function() {
						p(!1)
					}, [n, j, p]);
					var E = (0, y.useCallback)(function() {
							l(function(e) {
								return "navigation" !== e && "navigation"
							})
						}, [l]),
						R = (0, y.useCallback)(function() {
							T(C.s6.clickSidebarAccountPortalMenuItem), o(!0)
						}, [T, o]),
						L = o8(function(e) {
							return {
								setShowAccountPaymentModal: e.setShowAccountPaymentModal,
								showAccountPaymentModal: e.showAccountPaymentModal
							}
						}).setShowAccountPaymentModal,
						A = (0, y.useCallback)(function() {
							L(!0, function() {
								T(C.s6.clickSidebarAccountPaymentMenuItem)
							})
						}, [T, L]),
						B = (0, y.useCallback)(function() {
							d(""), m(""), t((0, _.OX)()), p(!1), D === re.f_ ? M.replace("/",
								void 0, {
									shallow: !0
								}) : M.replace("/?model=".concat(D))
						}, [D, M, d, m, t, p]);
					(0, y.useEffect)(function() {
						return function() {
							S.abortAllAndReset(), u(new Set)
						}
					}, [u, n]);
					var U = (0, y.useCallback)(function() {
						p(!0)
					}, [p]);
					return (0, v.jsxs)(sd, {
						children: [!r && (0, v.jsx)(nY, {
							children: (0, v.jsx)(nW, {
								toggleNavigationSidebar: E,
								handleAccountPayment: A,
								handleClickCustomerPortal: R,
								handleResetThread: B,
								activeSidebar: s,
								isAccountPaid: N,
								children: (0, v.jsx)(eC, {
									activeId: Z ? void 0 : j,
									onNewThread: B,
									onUpdateUserModifiedTitle: m,
									userModifiedTitle: f,
									newChatName: c,
									setNewChatName: d,
									setActiveRequests: u,
									onSetSharingModalOpen: U
								})
							})
						}), (0, v.jsx)("div", {
							className: "relative flex h-full max-w-full flex-1 overflow-hidden",
							children: (0, v.jsx)(so, (0, h._)({
								initialThreadData: i,
								clientThreadId: n,
								handleResetThread: B,
								isStaticSharedThread: r
							}, a), n)
						})]
					})
				}, function(e) {
					var n = e.clientThreadId,
						t = e.isStaticSharedThread;
					(0, _.ax)(n, t);
					var r = (0, _.UL)(n),
						a = (0, m._)((0, y.useState)(!1), 2),
						i = a[0],
						o = a[1],
						l = (0, m._)((0, y.useState)(!1), 2),
						u = l[0],
						c = l[1],
						d = (0, m._)((0, y.useState)(new Set), 2),
						f = d[0],
						g = d[1],
						p = (0, m._)((0, y.useState)(""), 2),
						x = p[0],
						b = p[1],
						j = (0, m._)((0, y.useState)(""), 2),
						w = j[0],
						C = j[1],
						k = (0, m._)((0, y.useState)(!1), 2),
						M = k[0],
						T = k[1];
					return (0, y.useEffect)(function() {
						c(!1), S.reset(), g(new Set), C("")
					}, [r.threadId]), (0, v.jsx)(s, (0, h._)({}, e, {
						showAccountPortalModal: i,
						setShowAccountPortalModal: o,
						activeSidebar: u,
						setActiveSidebar: c,
						activeRequests: f,
						setActiveRequests: g,
						newChatName: x,
						setNewChatName: b,
						userModifiedTitle: w,
						setUserModifiedTitle: C,
						sharingModalOpen: M,
						setSharingModalOpen: T
					}))
				})
		},
		28869: function(e, n, t) {
			"use strict";
			t.d(n, {
				Z: function() {
					return O
				}
			});
			var r = t(39324),
				a = t(71209),
				i = t(70216),
				o = t(35250),
				s = t(19841),
				l = t(86546),
				u = t(70079),
				c = t(45306),
				d = t(64135),
				f = t(22208),
				h = t(61110),
				g = t(55975),
				m = t(46050),
				p = t(29874),
				v = t(8449),
				x = t(15472);
			let b = {
					tokenize: function(e, n, t) {
						let r = this,
							a = this.events[this.events.length - 1],
							i = a && a[1].type === x.V.linePrefix ? a[2].sliceSerialize(a[1], !0)
							.length : 0,
							o = [];
						return function(n) {
							return g.q.backslash, e.enter("mathFlow"), e.enter("mathFlowFence"), e
								.enter("mathFlowFenceSequence"),
								function n(r) {
									return r === g.q.backslash || r === g.q.leftSquareBracket && o[
										0] === g.q.backslash ? (e.consume(r), o.push(r), n) : (e
										.exit("mathFlowFenceSequence"), o.length < 2 ? t(r) : (
											0, m.f)(e, s, x.V.whitespace)(r))
								}(n)
						};

						function s(n) {
							return n === g.q.eof || (0, p.Ch)(n) ? l(n) : (e.enter("mathFlowFenceMeta"),
								e.enter(x.V.chunkString, {
									contentType: v._.contentTypeString
								}),
								function n(r) {
									return r === g.q.eof || (0, p.Ch)(r) ? (e.exit(x.V.chunkString),
											e.exit("mathFlowFenceMeta"), l(r)) : r === g.q
										.rightSquareBracket ? t(r) : (e.consume(r), n)
								}(n))
						}

						function l(t) {
							return e.exit("mathFlowFence"), r.interrupt ? n(t) : function n(t) {
								return t === g.q.eof ? u(t) : (0, p.Ch)(t) ? e.attempt(y, e
							.attempt({
									tokenize: c,
									partial: !0
								}, u, i ? (0, m.f)(e, n, x.V.linePrefix, i + 1) : n), u)(t) : (e
									.enter("mathFlowValue"),
									function t(r) {
										return r === g.q.eof || (0, p.Ch)(r) ? (e.exit(
											"mathFlowValue"), n(r)) : (e.consume(r), t)
									}(t))
							}(t)
						}

						function u(t) {
							return e.exit("mathFlow"), n(t)
						}

						function c(e, n, t) {
							let r = [];
							return (0, m.f)(e, function(n) {
								return e.enter("mathFlowFence"), e.enter(
										"mathFlowFenceSequence"),
									function n(i) {
										return i === g.q.backslash && 0 === r.length || i === g
											.q.rightSquareBracket && r[0] === g.q.backslash ? (e
												.consume(i), r.push(i), n) : r < o ? t(i) : (e
												.exit("mathFlowFenceSequence"), (0, m.f)(e, a, x
													.V.whitespace)(i))
									}(n)
							}, x.V.linePrefix, v._.tabSize);

							function a(r) {
								return r === g.q.eof || (0, p.Ch)(r) ? (e.exit("mathFlowFence"), n(r)) :
									t(r)
							}
						}
					},
					concrete: !0
				},
				y = {
					tokenize: function(e, n, t) {
						let r = this;
						return function(n) {
							return e.enter(x.V.lineEnding), e.consume(n), e.exit(x.V.lineEnding), a
						};

						function a(e) {
							return r.parser.lazy[r.now().line] ? t(e) : n(e)
						}
					},
					partial: !0
				},
				j = {
					tokenize: function(e, n, t) {
						let r = this,
							a = r.events[r.events.length - 1],
							i = a && a[1].type === x.V.linePrefix ? a[2].sliceSerialize(a[1], !0)
							.length : 0,
							o = 0;
						return function(n) {
							return g.q.dollarSign, e.enter("mathFlow"), e.enter("mathFlowFence"), e
								.enter("mathFlowFenceSequence"),
								function n(r) {
									return r === g.q.dollarSign ? (e.consume(r), o++, n) : (e.exit(
										"mathFlowFenceSequence"), o < 2 ? t(r) : (0, m.f)(e,
										s, x.V.whitespace)(r))
								}(n)
						};

						function s(n) {
							return n === g.q.eof || (0, p.Ch)(n) ? l(n) : (e.enter("mathFlowFenceMeta"),
								e.enter(x.V.chunkString, {
									contentType: v._.contentTypeString
								}),
								function n(r) {
									return r === g.q.eof || (0, p.Ch)(r) ? (e.exit(x.V.chunkString),
											e.exit("mathFlowFenceMeta"), l(r)) : r === g.q
										.dollarSign ? t(r) : (e.consume(r), n)
								}(n))
						}

						function l(t) {
							return e.exit("mathFlowFence"), r.interrupt ? n(t) : function n(t) {
								return t === g.q.eof ? u(t) : (0, p.Ch)(t) ? e.attempt(w, e
							.attempt({
									tokenize: c,
									partial: !0
								}, u, i ? (0, m.f)(e, n, x.V.linePrefix, i + 1) : n), u)(t) : (e
									.enter("mathFlowValue"),
									function t(r) {
										return r === g.q.eof || (0, p.Ch)(r) ? (e.exit(
											"mathFlowValue"), n(r)) : (e.consume(r), t)
									}(t))
							}(t)
						}

						function u(t) {
							return e.exit("mathFlow"), n(t)
						}

						function c(e, n, t) {
							let r = 0;
							return (0, m.f)(e, function(n) {
								return e.enter("mathFlowFence"), e.enter(
										"mathFlowFenceSequence"),
									function n(i) {
										return i === g.q.dollarSign ? (e.consume(i), r++, n) :
											r < o ? t(i) : (e.exit("mathFlowFenceSequence"), (0,
												m.f)(e, a, x.V.whitespace)(i))
									}(n)
							}, x.V.linePrefix, v._.tabSize);

							function a(r) {
								return r === g.q.eof || (0, p.Ch)(r) ? (e.exit("mathFlowFence"), n(r)) :
									t(r)
							}
						}
					},
					concrete: !0
				},
				w = {
					tokenize: function(e, n, t) {
						let r = this;
						return function(n) {
							return (0, p.Ch)(n), e.enter(x.V.lineEnding), e.consume(n), e.exit(x.V
								.lineEnding), a
						};

						function a(e) {
							return r.parser.lazy[r.now().line] ? t(e) : n(e)
						}
					},
					partial: !0
				};

			function C(e) {
				let n, t, r = e.length - 4,
					a = 3;
				if ((e[3][1].type === x.V.lineEnding || "space" === e[a][1].type) && (e[r][1].type === x.V
						.lineEnding || "space" === e[r][1].type)) {
					for (n = a; ++n < r;)
						if ("mathTextData" === e[n][1].type) {
							e[r][1].type = "mathTextPadding", e[a][1].type = "mathTextPadding", a += 2, r -=
								2;
							break
						}
				}
				for (n = a - 1, r++; ++n <= r;) void 0 === t ? n !== r && e[n][1].type !== x.V.lineEnding &&
					(t = n) : (n === r || e[n][1].type === x.V.lineEnding) && (e[t][1].type =
						"mathTextData", n !== t + 2 && (e[t][1].end = e[n - 1][1].end, e.splice(t + 2, n -
							t - 2), r -= n - t - 2, n = t + 2), t = void 0);
				return e
			}

			function k(e) {
				return e !== g.q.backslash || this.events[this.events.length - 1][1].type === x.V
					.characterEscape
			}

			function _(e) {
				let n, t, r = e.length - 4,
					a = 3;
				if ((e[3][1].type === x.V.lineEnding || "space" === e[a][1].type) && (e[r][1].type === x.V
						.lineEnding || "space" === e[r][1].type)) {
					for (n = a; ++n < r;)
						if ("mathTextData" === e[n][1].type) {
							e[r][1].type = "mathTextPadding", e[a][1].type = "mathTextPadding", a += 2, r -=
								2;
							break
						}
				}
				for (n = a - 1, r++; ++n <= r;) void 0 === t ? n !== r && e[n][1].type !== x.V.lineEnding &&
					(t = n) : (n === r || e[n][1].type === x.V.lineEnding) && (e[t][1].type =
						"mathTextData", n !== t + 2 && (e[t][1].end = e[n - 1][1].end, e.splice(t + 2, n -
							t - 2), r -= n - t - 2, n = t + 2), t = void 0);
				return e
			}

			function M(e) {
				return e !== g.q.dollarSign || this.events[this.events.length - 1][1].type === x.V
					.characterEscape
			}

			function T(e) {
				let n, t, r = e.length - 4,
					a = 3;
				if ((e[3][1].type === x.V.lineEnding || "space" === e[a][1].type) && (e[r][1].type === x.V
						.lineEnding || "space" === e[r][1].type)) {
					for (n = a; ++n < r;)
						if ("mathTextData" === e[n][1].type) {
							e[r][1].type = "mathTextPadding", e[a][1].type = "mathTextPadding", a += 2, r -=
								2;
							break
						}
				}
				for (n = a - 1, r++; ++n <= r;) void 0 === t ? n !== r && e[n][1].type !== x.V.lineEnding &&
					(t = n) : (n === r || e[n][1].type === x.V.lineEnding) && (e[t][1].type =
						"mathTextData", n !== t + 2 && (e[t][1].end = e[n - 1][1].end, e.splice(t + 2, n -
							t - 2), r -= n - t - 2, n = t + 2), t = void 0);
				return e
			}

			function N(e) {
				return e !== g.q.backslash || this.events[this.events.length - 1][1].type === x.V
					.characterEscape
			}
			var P = t(67726),
				S = t(9871),
				I = t(93362),
				Z = t(45369),
				D = t(42426),
				F = t(65028),
				E = t(88366),
				R = t(36716),
				L = t(2368),
				A = function(e) {
					return e.startsWith(f.SANDBOX_LINK_PREFIX) ? e : (0, S.A)(e)
				},
				B = [F.Z, [function() {
					let e = this.data();

					function n(n, t) {
						let r = e[n] ? e[n] : e[n] = [];
						r.push(t)
					}
					n("micromarkExtensions", {
						flow: {
							[g.q.dollarSign]: j,
							[g.q.backslash]: b
						},
						text: {
							[g.q.dollarSign]: {
								tokenize: function(e, n, t) {
									let r, a, i = 0;
									return function(n) {
										return e.enter("mathText"), e.enter(
												"mathTextSequence"),
											function n(r) {
												return r === g.q.dollarSign ? (e
														.consume(r), i++, n) : i <
													2 ? t(r) : (e.exit(
														"mathTextSequence"), o(
														r))
											}(n)
									};

									function o(l) {
										return l === g.q.eof ? t(l) : l === g.q
											.dollarSign ? (a = e.enter(
													"mathTextSequence"), r = 0,
												function t(o) {
													return o === g.q.dollarSign ? (e
															.consume(o), r++, t) : r ===
														i ? (e.exit("mathTextSequence"),
															e.exit("mathText"), n(o)) :
														(a.type = "mathTextData", s(o))
												}(l)) : l === g.q.space ? (e.enter(
												"space"), e.consume(l), e.exit(
												"space"), o) : (0, p.Ch)(l) ? (e.enter(x
													.V.lineEnding), e.consume(l), e
												.exit(x.V.lineEnding), o) : (e.enter(
												"mathTextData"), s(l))
									}

									function s(n) {
										return n === g.q.eof || n === g.q.space || n ===
											g.q.dollarSign || (0, p.Ch)(n) ? (e.exit(
												"mathTextData"), o(n)) : (e.consume(n),
												s)
									}
								},
								resolve: _,
								previous: M
							},
							[g.q.backslash]: [{
								tokenize: function(e, n, t) {
									let r;
									let a = [],
										i = [],
										o = this;
									return function(n) {
										return g.q.backslash, k.call(o, o
												.previous) && o.previous, e
											.enter("mathText"), e.enter(
												"mathTextSequence"),
											function n(r) {
												return (a.join(","), r === g
														.q.backslash &&
														0 === a.length ||
														r === g.q
														.leftParenthesis &&
														1 === a.length) ? (e
														.consume(r), a.push(
															r), n) : a
													.length < 2 ? t(r) : (e
														.exit(
															"mathTextSequence"
															), s(r))
											}(n)
									};

									function s(o) {
										return o === g.q.eof ? t(o) : o === g.q
											.backslash ? (r = e.enter(
													"mathTextSequence"), i = [],
												function t(o) {
													return (a.join(","), o === g
															.q.backslash &&
															0 === i.length ||
															o === g.q
															.rightParenthesis &&
															1 === i.length) ? (e
															.consume(o), i.push(
																o), t) : i
														.length === a.length ? (
															e.exit(
																"mathTextSequence"
																), e.exit(
																"mathText"), n(
																o)) : (r.type =
															"mathTextData", l(o)
															)
												}(o)) : o === g.q.space ? (e
												.enter("space"), e.consume(o), e
												.exit("space"), s) : (0, p.Ch)(
												o) ? (e.enter(x.V.lineEnding), e
												.consume(o), e.exit(x.V
													.lineEnding), s) : (e.enter(
												"mathTextData"), l(o))
									}

									function l(n) {
										return n === g.q.eof || n === g.q
											.space || n === g.q.backslash || (0,
												p.Ch)(n) ? (e.exit(
												"mathTextData"), s(n)) : (e
												.consume(n), l)
									}
								},
								resolve: C,
								previous: k
							}, {
								tokenize: function(e, n, t) {
									let r;
									let a = [],
										i = [],
										o = this;
									return function(n) {
										return g.q.backslash, N.call(o, o
												.previous) && o.previous, e
											.enter("mathText"), e.enter(
												"mathTextSequence"),
											function n(r) {
												return (a.join(","), r === g
														.q.backslash &&
														0 === a.length ||
														r === g.q
														.leftSquareBracket &&
														1 === a.length) ? (e
														.consume(r), a.push(
															r), n) : a
													.length < 2 ? t(r) : (e
														.exit(
															"mathTextSequence"
															), s(r))
											}(n)
									};

									function s(o) {
										return o === g.q.eof ? t(o) : o === g.q
											.backslash ? (r = e.enter(
													"mathTextSequence"), i = [],
												function t(o) {
													return (a.join(","), o === g
															.q.backslash &&
															0 === i.length ||
															o === g.q
															.rightSquareBracket &&
															1 === i.length) ? (e
															.consume(o), i.push(
																o), t) : i
														.length === a.length ? (
															e.exit(
																"mathTextSequence"
																), e.exit(
																"mathText"), n(
																o)) : (r.type =
															"mathTextData", l(o)
															)
												}(o)) : o === g.q.space ? (e
												.enter("space"), e.consume(o), e
												.exit("space"), s) : (0, p.Ch)(
												o) ? (e.enter(x.V.lineEnding), e
												.consume(o), e.exit(x.V
													.lineEnding), s) : (e.enter(
												"mathTextData"), l(o))
									}

									function l(n) {
										return n === g.q.eof || n === g.q
											.space || n === g.q.backslash || (0,
												p.Ch)(n) ? (e.exit(
												"mathTextData"), s(n)) : (e
												.consume(n), l)
									}
								},
								resolve: T,
								previous: N
							}]
						}
					}), n("fromMarkdownExtensions", (0, h.N)()), n("toMarkdownExtensions", (0, h
						.O)())
				}, {
					singleDollarTextMath: !1
				}]],
				U = [
					[I.Z, {
						languages: {
							mathematica: P.Z
						},
						detect: !0,
						subset: ["arduino", "bash", "c", "cpp", "csharp", "css", "diff", "go",
							"graphql", "java", "javascript", "json", "kotlin", "latex", "less",
							"lua", "makefile", "makefile", "markdown", "matlab", "mathematica",
							"nginx", "objectivec", "perl", "pgsql", "php-template", "php",
							"plaintext", "python-repl", "python", "r", "ruby", "rust", "scss",
							"shell", "sql", "swift", "typescript", "vbnet", "wasm", "xml", "yaml"
						],
						ignoreMissing: !0,
						aliases: {
							mathematica: "wolfram"
						}
					}], Z.Z, [D.Z, {
						newlines: !0
					}]
				],
				q = {
					code: function(e) {
						var n = e.inline,
							t = e.node,
							s = e.className,
							l = e.children,
							u = (0, i._)(e, ["inline", "node", "className", "children"]);
						if (n) {
							var c = (0, E.B)(t),
								d = (0, R.T$)(c);
							return d ? (0, o.jsx)(R.s8, {
								displayInfo: d
							}) : (0, o.jsx)("code", (0, a._)((0, r._)({
								className: s
							}, u), {
								children: l
							}))
						}
						var f, h = null === (f = null == s ? void 0 : s.split(" ").filter(function(e) {
								return e.startsWith("language-")
							})) || void 0 === f ? void 0 : f[0],
							g = h ? h.split("-")[1] : "";
						return (0, o.jsx)(L.Z, {
							language: g,
							className: s,
							content: (0, E.B)(t),
							children: l
						})
					}
				};

			function O(e) {
				var n = e.size,
					t = e.children,
					h = e.className,
					g = e.onSandboxLinkClick,
					m = (0, l.F)().theme,
					p = (0, d.hz)().has("tools2"),
					v = (0, u.useMemo)(function() {
						return (0, a._)((0, r._)({}, q), {
							a: function(e) {
								var n = e.node,
									t = (0, i._)(e, ["node"]),
									s = n.properties.href;
								return g && p && s.startsWith(f.SANDBOX_LINK_PREFIX) ? (0, o
									.jsx)("a", (0, a._)((0, r._)({}, t), {
									onClick: g
								})) : (0, o.jsx)("a", (0, r._)({}, t))
							},
							img: function(e) {
								var n = e.node,
									t = (0, i._)(e, ["node"]),
									a = n.properties.src;
								return a.startsWith("sandbox:") || a.startsWith(
									"attachment:") ? null : (0, o.jsx)("img", (0, r._)
								({}, t))
							}
						})
					}, [g, p]);
				return (0, o.jsx)(c.D, {
					rehypePlugins: U,
					remarkPlugins: B,
					linkTarget: "_new",
					className: (0, s.Z)(h, "markdown prose w-full break-words dark:prose-invert",
						"dark" === m ? "dark" : "light", "small" === (void 0 === n ? "medium" :
							n) && "prose-xs"),
					transformLinkUri: A,
					components: v,
					children: t
				})
			}
		},
		99585: function(e, n, t) {
			"use strict";
			t.d(n, {
				Cf: function() {
					return ed
				},
				ZP: function() {
					return ec
				},
				xz: function() {
					return ef
				}
			});
			var r, a = t(39324),
				i = t(70216),
				o = t(4337),
				s = t(35250),
				l = t(19841),
				u = t(68555),
				c = t(70079),
				d = t(34303),
				f = t(75179),
				h = t(64135),
				g = t(88038),
				m = t(75527),
				p = t(36716),
				v = t(59710),
				x = t(57311),
				b = t(66958),
				y = t(22830),
				j = t(2827),
				w = t(82841),
				C = t(36218),
				k = t(69403);

			function _() {
				var e = (0, o._)(["text-center mt-2 flex justify-center"]);
				return _ = function() {
					return e
				}, e
			}
			var M = d.Z.div(_());

			function T(e) {
				var n = e.initialText,
					t = e.role,
					r = e.clientThreadId,
					a = e.currentLeaf,
					i = e.onUpdateNode,
					o = e.onChangeItemInView,
					l = e.onExitEdit,
					u = e.onDeleteNode,
					d = e.onRequestCompletion,
					f = e.onCreateEditNode,
					h = e.disabled,
					g = (0, w.WS)(),
					p = (0, c.useId)(),
					v = "".concat(a, "-").concat(p),
					x = (0, y._)((0, c.useState)(n || ""), 2),
					_ = x[0],
					T = x[1],
					N = (0, c.useRef)(null);
				(0, c.useEffect)(function() {
					f(a, v)
				}, []);
				var P = (0, c.useCallback)(function(e) {
						T(e.currentTarget.value)
					}, []),
					S = (0, c.useCallback)(function() {
						i(v, _), o(v), d(k.Os.Next, v, {
							eventSource: "mouse"
						}, !0), l()
					}, [i, v, _, o, d, l]),
					I = (0, c.useCallback)(function() {
						u(v), o(a), l(), g(t === k.uU.User ? C.s6.cancelEditPrompt : C.s6
							.cancelEditCompletion, {
								threadId: m.tQ.getServerThreadId(r)
							})
					}, [v, a, g, o, u, l, t, r]);
				return (0, c.useEffect)(function() {
					var e = N.current,
						n = function(e) {
							"Enter" === e.key && e.metaKey ? S() : "Escape" === e.key && I()
						};
					return e && e.addEventListener("keydown", n),
						function() {
							e && e.removeEventListener("keydown", n)
						}
				}, [I, S]), (0, s.jsxs)(s.Fragment, {
					children: [(0, s.jsx)(j.ZP, {
						ref: N,
						value: _,
						onChange: P,
						className: "m-0 resize-none border-0 bg-transparent p-0 focus:ring-0 focus-visible:ring-0"
					}), (0, s.jsxs)(M, {
						children: [(0, s.jsx)(b.z, {
							as: "button",
							onClick: S,
							className: "mr-2",
							disabled: h,
							children: "Save & Submit"
						}), (0, s.jsx)(b.z, {
							as: "button",
							color: "neutral",
							onClick: I,
							children: "Cancel"
						})]
					})]
				})
			}
			var N = t(21722),
				P = t(39889),
				S = t(10642),
				I = t(47635),
				Z = t(32787),
				D = t(24274),
				F = t(75515),
				E = t(180);

			function R() {
				var e = (0, o._)(["text-xs text-black\n", ""]);
				return R = function() {
					return e
				}, e
			}

			function L() {
				var e = (0, o._)(["relative w-full overflow-hidden pt-[67%]"]);
				return L = function() {
					return e
				}, e
			}

			function A(e) {
				var n, t = e.title,
					r = e.url,
					a = e.imageUrl,
					i = e.logoUrl,
					o = e.className,
					u = e.mini,
					d = !!a,
					f = (0, w.WS)(),
					h = (0, c.useCallback)(function() {
						f(C.s6.carouselCardClick, {
							content: r
						})
					}, [f, r]);
				try {
					n = I.get(new URL(r).hostname)
				} catch (e) {
					return console.error("Invalid card url: ", e), null
				}
				return (0, s.jsxs)(r ? "a" : "div", {
					className: (0, l.Z)(
						"flex h-full w-full flex-col overflow-hidden rounded-md border border-black/10 bg-gray-50 shadow-[0_2px_24px_rgba(0,0,0,0.05)]",
						o),
					href: r,
					target: r ? "_blank" : "",
					onClick: h,
					children: [d && (0, s.jsx)(U, {
						children: (0, s.jsx)("div", {
							className: "absolute inset-0",
							children: (0, s.jsx)("img", {
								src: a,
								alt: "image of ".concat(t),
								className: "h-full w-full border-b border-black/10 object-cover"
							})
						})
					}), (0, s.jsxs)("div", {
						className: "flex flex-1 flex-col justify-between gap-1.5 p-3",
						children: [(0, s.jsx)(B, {
							$clamp: void 0 !== u && u || d,
							children: t
						}), (0, s.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [i ? (0, s.jsx)(F.Z, {
								url: i,
								name: n,
								size: 13
							}) : (0, s.jsx)(E.Z, {
								url: r,
								size: 13
							}), (0, s.jsx)("div", {
								className: "text-[10px] leading-3 text-gray-500 line-clamp-1",
								children: n
							})]
						})]
					})]
				})
			}
			var B = d.Z.div(R(), function(e) {
					return e.$clamp && "line-clamp-2"
				}),
				U = d.Z.div(L()),
				q = t(96237),
				O = t(21260),
				z = t(52422),
				H = t(95182),
				V = t.n(H),
				G = t(1454),
				W = t(77442),
				Q = t(38317);

			function $(e) {
				var n = e.disabled,
					t = e.onClick,
					r = e.left,
					a = e.children;
				return (0, s.jsx)("button", {
					disabled: n,
					onClick: t,
					"aria-disabled": n,
					className: (0, l.Z)(
						"flex h-6 w-[30px] items-center justify-center rounded-full",
						"bg-gray-900 text-white shadow-sm hover:bg-gray-700 disabled:hover:bg-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:disabled:hover:bg-white",
						"transition-opacity disabled:opacity-20",
						"cursor-pointer disabled:cursor-auto",
						"absolute top-full translate-y-3 lg:top-1/2 lg:-translate-y-1/2",
						void 0 !== r && r ?
						"left-1/2 -translate-x-[calc(100%+4px)] lg:-left-3 lg:-translate-x-full" :
						"left-1/2 translate-x-1 lg:-right-3 lg:left-auto lg:translate-x-full",
						n && "lg:hidden"),
					children: a
				})
			}
			var J = t(70575),
				Y = function(e) {
					var n = e.x,
						t = e.children,
						r = e.className;
					return (0, s.jsx)(J.E.div, {
						className: (0, l.Z)(
							"mr-3 h-full w-full flex-none sm:w-[calc((100%-12px)/2)] lg:w-[calc((100%-24px)/3)]",
							r),
						style: {
							x: n
						},
						children: t
					})
				},
				K = {
					type: "spring",
					bounce: 0
				},
				X = (0, c.forwardRef)(function(e, n) {
					return (0, s.jsx)("div", {
						ref: n,
						className: (0, l.Z)("relative flex h-full w-full overflow-hidden", e
							.className),
						children: e.children
					})
				});
			X.displayName = "CarouselContainer";
			var ee = (r = {}, (0, q._)(r, W._G.Small, 1), (0, q._)(r, W._G.Medium, 2), (0, q._)(r, W._G
				.Large, 2), (0, q._)(r, W._G.XLarge, 3), (0, q._)(r, W._G.Full, 3), r);

			function en(e) {
				var n = e.children,
					t = e.loop,
					r = void 0 === t || t,
					a = e.className,
					i = (0, O.c)(0),
					o = (0, c.useRef)(null),
					u = (0, y._)((0, c.useState)(0), 2),
					d = u[0],
					f = u[1],
					h = ee[(0, W.dQ)()] || 1,
					g = c.Children.count(n) > h,
					m = c.Children.toArray(n),
					p = (0, c.useCallback)(function() {
						var e, n = null === (e = o.current) || void 0 === e ? void 0 : e.clientWidth;
						return n ? -Math.floor(d / h) * (n + 12) : 0
					}, [h, d]),
					v = (0, c.useCallback)(function(e) {
						var n = h * e;
						r ? f(function(e) {
							return (e + n) % m.length - 1
						}) : f(function(e) {
							return V()(e + n, 0, m.length - 1)
						})
					}, [m.length, r, h]),
					x = (0, c.useCallback)(function() {
						v(1)
					}, [v]),
					b = (0, c.useCallback)(function() {
						v(-1)
					}, [v]),
					j = (0, y._)((0, c.useMemo)(function() {
						if (r) return [!0, !0];
						var e = d < m.length - h;
						return [d > 0, e]
					}, [m.length, d, r, h]), 2),
					w = j[0],
					C = j[1];
				return (0, c.useEffect)(function() {
					return (0, z.j)(i, p(), K).stop
				}, [p, d, i]), (0, s.jsxs)("div", {
					className: (0, l.Z)("relative h-full w-full", a, g && "mb-12 lg:mb-0"),
					children: [(0, s.jsx)(X, {
						ref: o,
						children: m.map(function(e, n) {
							return (0, s.jsx)(Y, {
								x: i,
								children: e
							}, n)
						})
					}), g && (0, s.jsxs)(s.Fragment, {
						children: [(0, s.jsx)($, {
							onClick: b,
							left: !0,
							disabled: !w,
							children: (0, s.jsx)(Q.ZP, {
								icon: G.YFh
							})
						}), (0, s.jsx)($, {
							onClick: x,
							disabled: !C,
							children: (0, s.jsx)(Q.ZP, {
								icon: G.Tfp
							})
						})]
					})]
				})
			}
			var et = t(44878),
				er = new Set(["og:site_name", "og:title", "og:description", "og:image", "og:url"]),
				ea = {
					"og:site_name": "metadataTitle",
					"og:title": "title",
					"og:description": "description",
					"og:image": "imageUrl",
					"og:url": "url"
				},
				ei =
				/https:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
				eo = c.memo(function(e) {
					var n, t, r = e.urls,
						a = (0, et.Z)(),
						i = (n = (0, Z.kP)().session, t = (0, S.h)({
							queries: r.map(function(e) {
								return {
									queryKey: ["opengraph", e],
									queryFn: (0, N._)(function() {
										return (0, P.Jh)(this, function(n) {
											switch (n.label) {
												case 0:
													return [4, D.ZP
														.getPageMetadata({
															url: e
														})
													];
												case 1:
													return [2, n.sent()]
											}
										})
									}),
									enabled: !!(e && (null == n ? void 0 : n
										.accessToken)),
									retry: !1
								}
							})
						}), (0, c.useMemo)(function() {
							return t.map(function(e, n) {
								var t = e.data,
									a = e.isError,
									i = e.isLoading,
									o = r[n];
								if (a || i) return null;
								var s = t.tags.reduce(function(e, n) {
									return er.has(n.type) && (e[ea[n.type]] = n
										.value), e
								}, {});
								try {
									var l, u = o.split(/[#?]/)[0],
										c = null === (l = s.url) || void 0 === l ?
										void 0 : l.endsWith("/login"),
										d = s.url && "/" === new URL(s.url || "")
										.pathname;
									if (u !== s.url && (c || d)) return null
								} catch (e) {
									return null
								}
								return s.url = o, s
							}).filter(Boolean)
						}, [t, r])),
						o = (0, c.useMemo)(function() {
							return !i.some(function(e) {
								return !!(null == e ? void 0 : e.imageUrl)
							})
						}, [i]),
						l = (0, c.useMemo)(function() {
							return a.reduce(function(e, n) {
								return e[I.get(n.domain)] = n.manifest.logo_url, e
							}, {})
						}, [a]),
						u = (0, c.useMemo)(function() {
							return i.map(function(e) {
								var n, t;
								if (!e) return null;
								try {
									n = I.get(new URL(e.url).hostname)
								} catch (e) {
									return console.error("Invalid card url: ", e), null
								}
								return n in l && (t = l[n]), (0, s.jsx)(A, {
									title: e.title || "",
									url: e.url,
									imageUrl: e.imageUrl,
									logoUrl: t,
									mini: o
								}, e.url)
							})
						}, [i, o, l]);
					return 0 === i.length ? null : (0, s.jsx)(en, {
						loop: !1,
						children: u
					})
				}),
				es = t(28869),
				el = t(44541);

			function eu() {
				var e = (0, o._)([
					"\npy-2 px-3 border text-gray-600 rounded-md text-sm dark:text-gray-100\n",
					"\n", "\n", "\n"
				]);
				return eu = function() {
					return e
				}, e
			}
			var ec = c.memo(function(e) {
				var n, t = e.message,
					r = e.isEditing,
					o = e.format,
					l = e.isCompletionInProgress,
					u = e.className,
					c = e.onSandboxLinkClick,
					d = e.isCompletion,
					f = e.isResponseToPluginMessage,
					h = (0, i._)(e, ["message", "isEditing", "format", "isCompletionInProgress",
						"className", "onSandboxLinkClick", "isCompletion",
						"isResponseToPluginMessage"
					]);
				return r ? (0, s.jsx)(T, (0, a._)({
					currentLeaf: t.nodeId,
					initialText: x.Cv.getTextFromMessage(t.message),
					role: t.message.author.role
				}, h)) : (0, s.jsx)(ed, {
					text: x.Cv.getTextFromMessage(t.message),
					errCode: t.errCode,
					err: t.err,
					flag: t.errType,
					isCompletionInProgress: l,
					format: o,
					className: u,
					citations: null === (n = t.message.metadata) || void 0 === n ? void 0 :
						n.citations,
					isCompletion: d,
					onSandboxLinkClick: c,
					id: t.nodeId,
					onRequestMoreCompletions: h.onRequestMoreCompletions,
					clientThreadId: h.clientThreadId,
					showExtractedLinkCards: f
				})
			});

			function ed(e) {
				var n, t, r, a = e.citations,
					i = e.className,
					o = e.err,
					u = e.errCode,
					d = e.flag,
					m = e.format,
					x = e.isCompletionInProgress,
					b = e.size,
					y = e.text,
					j = e.onSandboxLinkClick,
					w = e.isCompletion,
					C = e.id,
					k = e.onRequestMoreCompletions,
					_ = e.clientThreadId,
					M = e.showExtractedLinkCards,
					T = u === f.Dd,
					N = (0, h.hz)(),
					P = (t = (n = {
						text: y,
						isCompletionInProgress: x
					}).text, r = n.isCompletionInProgress, (0, c.useMemo)(function() {
						if (r) return [];
						var e = t.match(ei);
						return Array.from(new Set(e))
					}, [r, t])),
					S = (0, c.useMemo)(function() {
						switch (u) {
							case f.Dd:
								return (0, s.jsx)(em, {
									$flag: d,
									children: (0, s.jsx)(eg, {})
								});
							case el.uU:
								if (N.has("model_preview")) return (0, s.jsx)(eh, {
									id: C,
									onRequestMoreCompletions: k,
									flag: d,
									clientThreadId: _
								});
								return (0, s.jsx)(em, {
									$flag: d,
									children: o
								});
							case v.wp:
								return (0, s.jsx)(em, {
									$flag: d,
									children: "Sorry, conversations created when Chat History is off expire after 6 hours of inactivity. Please start a new conversation to continue using ChatGPT."
								});
							default:
								return (0, s.jsx)(em, {
									$flag: d,
									children: o
								})
						}
					}, [o, u, N, d, C, k, _]),
					I = (0, h.hz)().has(g.FZ);
				return (0, s.jsxs)("div", {
					className: (0, l.Z)(i,
						"flex flex-col items-start gap-4 whitespace-pre-wrap break-words",
						"danger" === d && "flex flex-row gap-2 text-red-500", "warning" === d &&
						"text-orange-500", I && "text-base"),
					children: [o && !y || T || !m ? "danger" === d && T ? null : y : (0, s.jsx)(es
						.Z, {
							size: void 0 === b ? "medium" : b,
							className: (0, l.Z)("danger" !== d && x && "result-streaming",
								"danger" === d && "text-red-500", "warning" === d &&
								"text-orange-500"),
							onSandboxLinkClick: j,
							children: "" === y ? "&#8203;" : (0, p.Qd)(y, a)
						}), w && M && P.length > 0 && (0, s.jsx)(eo, {
						urls: P
					}), d && S]
				})
			}

			function ef(e) {
				var n = e && new Date(e),
					t = n && new Date(n);
				return t ? "after ".concat(t.getHours() % 12 || 12, ":").concat(10 > t.getMinutes() ? "0" :
					"").concat(t.getMinutes(), " ").concat(t.getHours() >= 12 ? "PM" : "AM") : "later"
			}

			function eh(e) {
				var n = e.id,
					t = e.onRequestMoreCompletions,
					r = e.flag,
					a = e.clientThreadId,
					i = (0, u.useRouter)(),
					o = (0, el.CS)(function(e) {
						return e.isoDate
					}),
					l = ef(o),
					d = (0, c.useCallback)(function() {
						t(n, {
							eventSource: "mouse"
						}, !0, "none", !1)
					}, [n, t]),
					f = (0, c.useCallback)(function() {
						var e = void 0 !== a ? m.tQ.getServerThreadId(a) : void 0;
						void 0 === e ? i.replace("/", void 0, {
							shallow: !0
						}) : (0, el.m0)(e), t(n, {
							eventSource: "mouse"
						}, !0, "none", !0)
					}, [n, t, i, a]),
					h = o ? (0, s.jsxs)("span", {
						children: [
							"You've reached the current usage cap for GPT-4. You can continue with the default model now, or try again "
							.concat(l, "."), " ", (0, s.jsx)("a", {
								href: "https://share.hsforms.com/16d0ZZVM3QZirXnCD_q7u1Q4sk30",
								target: "_blank",
								rel: "noreferrer",
								className: "underline",
								children: "Learn more"
							})
						]
					}) :
					"You previously reached your usage cap for GPT-4, but you can now try sending your message again";
				return (0, s.jsx)(em, {
					$flag: !!o && r,
					children: (0, s.jsxs)("div", {
						className: "flex items-center gap-6",
						children: [h, !o && (0, s.jsx)(b.z, {
							color: "light",
							className: "flex-shrink-0 bg-white",
							onClick: d,
							children: "Try again"
						}), o && (0, s.jsx)(b.z, {
							color: "light",
							className: "flex-shrink-0 bg-white",
							onClick: f,
							children: "Use default model"
						})]
					})
				})
			}

			function eg() {
				return (0, s.jsxs)(s.Fragment, {
					children: ["This content may violate our", " ", (0, s.jsx)("a", {
						target: "_blank",
						href: "https://platform.openai.com/docs/usage-policies/content-policy",
						rel: "noreferrer",
						className: "bold underline",
						children: "content policy"
					}), ". If you believe this to be in error, please", " ", (0, s.jsx)(
					"a", {
						target: "_blank",
						href: "https://forms.gle/3gyAMj5r5rTEcgbs5",
						rel: "noreferrer",
						className: "bold underline",
						children: "submit your feedback"
					}), " ", "— your input will aid our research in this area."]
				})
			}
			var em = d.Z.div(eu(), function(e) {
				return "warning" === e.$flag && "border-orange-500 bg-orange-500/10"
			}, function(e) {
				return "danger" === e.$flag && "border-red-500 bg-red-500/10"
			}, function(e) {
				return !e.$flag && "border-green-500 bg-green-500/10"
			})
		},
		5759: function(e, n, t) {
			"use strict";
			t.d(n, {
				I: function() {
					return g
				},
				Z: function() {
					return c
				}
			});
			var r = t(4337),
				a = t(35250),
				i = t(34303);

			function o() {
				var e = (0, r._)([
					"flex p-4 bg-gray-50 dark:bg-white/5 rounded-md items-center gap-4 min-h-[71px]"
				]);
				return o = function() {
					return e
				}, e
			}

			function s() {
				var e = (0, r._)(["w-10 text-2xl text-center"]);
				return s = function() {
					return e
				}, e
			}

			function l() {
				var e = (0, r._)(["flex-1 leading-5"]);
				return l = function() {
					return e
				}, e
			}

			function u() {
				var e = (0, r._)(["flex gap-4 flex-col text-sm"]);
				return u = function() {
					return e
				}, e
			}

			function c(e) {
				var n = e.icon,
					t = e.children;
				return (0, a.jsxs)(d, {
					children: [(0, a.jsx)(f, {
						children: n
					}), (0, a.jsx)(h, {
						children: t
					})]
				})
			}
			var d = i.Z.div(o()),
				f = i.Z.div(s()),
				h = i.Z.div(l()),
				g = i.Z.div(u())
		},
		44878: function(e, n, t) {
			"use strict";
			t.d(n, {
				Z: function() {
					return o
				}
			});
			var r = t(70079),
				a = t(32983),
				i = t(74437);

			function o() {
				var e = (0, r.useContext)(a.AX),
					n = (0, i.Z)().installedPlugins;
				return (0, r.useMemo)(function() {
					return n.filter(function(n) {
						return e.has(n.id)
					})
				}, [e, n])
			}
		},
		697: function(e, n, t) {
			"use strict";
			t.d(n, {
				dT: function() {
					return h
				},
				hZ: function() {
					return l
				},
				iO: function() {
					return u
				},
				p0: function() {
					return f
				},
				wu: function() {
					return g
				}
			});
			var r = t(81949),
				a = t(70079),
				i = t(81292),
				o = t(85023),
				s = t(74437),
				l = 3,
				u = [
					["www.klarna.com", "server.shop.app"],
					["apim.expedia.com", "kayak.com"],
					["www.redfin.com", "plugins.zillow.com"],
					["instacart.com", "api.tasty.co"]
				],
				c = "oai/enabledPluginIds",
				d = (0, i.ZP)(function() {
					var e = Array.from(new Set(o.m.getItem(c)));
					return {
						enabledPluginIds: new Set(e.splice(0, l))
					}
				});

			function f() {
				var e = (0, s.Z)().installedPlugins,
					n = d().enabledPluginIds;
				return (0, a.useMemo)(function() {
					return e.filter(function(e) {
						return n.has(e.id)
					})
				}, [n, e])
			}

			function h(e) {
				e.length > l || d.setState(function() {
					return o.m.setItem(c, e), {
						enabledPluginIds: new Set(e)
					}
				})
			}

			function g(e) {
				d.setState(function(n) {
					if (n.enabledPluginIds.size >= l) return n;
					var t = (0, r._)(n.enabledPluginIds).concat([e]);
					return o.m.setItem(c, t), {
						enabledPluginIds: new Set(t)
					}
				})
			}
		},
		74437: function(e, n, t) {
			"use strict";
			t.d(n, {
				Z: function() {
					return l
				}
			});
			var r = t(24396),
				a = t(70079),
				i = t(32787),
				o = t(24274),
				s = t(21437);

			function l() {
				var e = (0, i.kP)().session,
					n = (0, s.Fl)().isPluginsAvailable,
					t = (0, r.a)(["installedAip"], function() {
						return o.ZP.getPlugins({
							offset: 0,
							limit: 250,
							isInstalled: !0,
							accessToken: null == e ? void 0 : e.accessToken
						})
					}, {
						enabled: n && !!(null == e ? void 0 : e.accessToken),
						onError: function(e) {
							console.error(e)
						}
					}),
					l = t.data,
					u = t.isLoading;
				return (0, a.useMemo)(function() {
					return {
						installedPlugins: l ? l.items : [],
						isLoading: u
					}
				}, [l, u])
			}
		},
		60382: function(e, n, t) {
			"use strict";
			t.d(n, {
				Z: function() {
					return h
				}
			});
			var r = t(21722),
				a = t(39889),
				i = t(30331),
				o = t(24396),
				s = t(70079),
				l = t(32787),
				u = t(24274),
				c = t(32983);

			function d(e) {
				return e.map(function(e) {
					return {
						id: e.slug,
						maxTokens: e.max_tokens,
						title: e.title,
						description: e.description,
						tags: e.tags,
						enabledTools: e.enabled_tools,
						properties: e.qualitative_properties
					}
				})
			}
			var f = d([{
				slug: "text-davinci-002-render",
				max_tokens: 4097,
				title: "Default",
				description: "",
				tags: []
			}]);

			function h() {
				var e, n, t = (0, s.useContext)(c.QL).historyDisabled,
					h = (0, l.kP)(),
					g = h.session,
					m = h.loading,
					p = (0, o.a)(["models", {
						isHistoryDisabled: !t
					}], (0, r._)(function() {
						var e;
						return (0, a.Jh)(this, function(n) {
							switch (n.label) {
								case 0:
									return [4, u.ZP.getModels(g.accessToken, t)];
								case 1:
									return [2, {
										models: d((e = n.sent()).models),
										categories: e.categories
									}]
							}
						})
					}), {
						enabled: !m && (null == g ? void 0 : g.accessToken) != null,
						onError: function(e) {
							try {
								i.Tb("Error in useAvailableModels: ".concat(e))
							} catch (e) {}
						}
					}),
					v = p.data,
					x = p.isLoading;
				return {
					availableModels: null !== (e = null == v ? void 0 : v.models) && void 0 !== e ? e : f,
					categories: null !== (n = null == v ? void 0 : v.categories) && void 0 !== n ? n : [],
					isLoading: x
				}
			}
		},
		92186: function(e, n, t) {
			"use strict";
			t.d(n, {
				ZP: function() {
					return C
				},
				Zf: function() {
					return w
				}
			});
			var r, a = t(96237),
				i = t(39324),
				o = t(81949),
				s = t(86235),
				l = t(87607),
				u = t(41170),
				c = t(84677),
				d = t(70079),
				f = t(1454),
				h = t(32787),
				g = t(64135),
				m = t(21437),
				p = t(38317),
				v = t(60382),
				x = t(66523),
				b = t(44541),
				y = (r = {}, (0, a._)(r, "gpt_3.5", {
					icon: s.Z,
					activeClass: "text-brand-green",
					disclaimer: "Available to Free and Plus users",
					showSelectedValueBelow: !1
				}), (0, a._)(r, "gpt_4", {
					icon: l.Z,
					activeClass: "text-brand-purple",
					backgroundColor: "#AB68FF",
					disclaimer: "Available exclusively to Plus users",
					showSelectedValueBelow: !1
				}), (0, a._)(r, "other", {
					icon: u.Z,
					activeClass: "text-orange-500",
					showSelectedValueBelow: !0,
					disclaimer: "Experimental models"
				}), r),
				j = {
					browsing_model: {
						icon: f.RsK,
						activeClass: "text-blue-400",
						name: "Browsing"
					},
					code_interpreter_model: {
						icon: p.Fx,
						activeClass: "text-green-600",
						name: "Code Interpreter"
					},
					plugins_model: {
						icon: c.Z,
						activeClass: "text-brand-purple",
						name: "Plugins"
					}
				};

			function w(e, n) {
				for (var t = 0; t < e.length; t++) {
					var r = e[t];
					if (r.options.length > 0) {
						var a = r.options.find(function(e) {
							return e.value === n
						});
						if (a) return {
							item: a,
							categoryId: r.categoryId,
							backgroundColor: y[r.categoryId].backgroundColor,
							icon: a.icon || r.icon || y[r.categoryId].icon
						}
					}
				}
			}

			function C() {
				var e, n = (0, v.Z)(),
					t = n.categories,
					r = n.availableModels,
					a = (0, h.kP)().session,
					i = (0, b.BT)(),
					s = (0, m.Fl)(),
					l = (0, x.Z)(),
					u = (0, g.hz)();
				return (0, d.useMemo)(function() {
					var n;
					return function(e, n, t, r, a, i, s) {
						var l = [],
							u = e.reduce(function(e, r) {
								var a = e.modelsInDropdown,
									i = e.allModels,
									o = n.find(function(e) {
										return e.id === r.default_model
									});
								o && (i.set(o.id, o), a.set(o.id, o));
								var s = n.find(function(e) {
									return e.id === r.browsing_model
								});
								s && (i.set(s.id, s), t.isBrowsingEnabled && a.set(s.id,
								s));
								var l = n.find(function(e) {
									return e.id === r.code_interpreter_model
								});
								l && (i.set(l.id, l), t.isCodeInterpreterEnabled && a.set(l
									.id, l));
								var u = n.find(function(e) {
									return e.id === r.plugins_model
								});
								return u && (i.set(u.id, u), t.isPluginsEnabled && a.set(u
									.id, u)), e
							}, {
								modelsInDropdown: new Map,
								allModels: new Map
							}),
							c = u.modelsInDropdown,
							d = u.allModels,
							f = !0,
							h = !1,
							g = void 0;
						try {
							for (var m, p = e[Symbol.iterator](); !(f = (m = p.next())
								.done); f = !0) {
								var v = m.value;
								if (c.has(v.default_model)) {
									var x = y[v.category] || {},
										b = a === v.default_model,
										w = c.get(v.default_model),
										C = function(e, n, t, r) {
											var a = e.isBrowsingEnabled,
												i = e.isPluginsEnabled,
												o = e.isCodeInterpreterEnabled,
												s = [];
											if (a && t.browsing_model && r.has(t
												.browsing_model)) {
												var l = j.browsing_model;
												s.push(k(r.get(t.browsing_model), {
													icon: l.icon,
													name: l.name,
													disabled: n.has(
														"browsing_disabled")
												}))
											}
											if (o && t.code_interpreter_model && r.has(t
													.code_interpreter_model)) {
												var u = j.code_interpreter_model;
												s.push(k(r.get(t.code_interpreter_model), {
													icon: u.icon,
													name: u.name
												}))
											}
											if (i && t.plugins_model && r.has(t
												.plugins_model)) {
												var c = j.plugins_model;
												s.push(k(r.get(t.plugins_model), {
													icon: c.icon,
													name: c.name,
													disabled: n.has(
														"plugins_disabled")
												}))
											}
											return s
										}(t, r, v, c);
									l.push({
										categoryId: v.category,
										value: w.id,
										name: v.human_category_name,
										description: b ? i : w.description,
										disclaimer: x.disclaimer,
										activeClass: x.activeClass,
										icon: x.icon,
										options: [k(w, {
											icon: x.icon,
											name: "Default"
										})].concat((0, o._)(C)),
										disabled: b,
										showSelectedValueBelow: !1
									})
								}
							}
						} catch (e) {
							h = !0, g = e
						} finally {
							try {
								f || null == p.return || p.return()
							} finally {
								if (h) throw g
							}
						}
						var _ = n.filter(function(e) {
							return !d.has(e.id)
						});
						if (_.length > 0 && s) {
							var M = _[0],
								T = y.other;
							l.push({
								categoryId: "other",
								value: M.id,
								name: "Alpha",
								activeClass: T.activeClass,
								options: _.map(function(e) {
									return k(e)
								}),
								showSelectedValueBelow: !0,
								icon: T.icon
							})
						}
						return {
							items: l,
							models: (0, o._)(c.values()).concat((0, o._)(_))
						}
					}(t, r, s, u, i, l.modelSwitcherDisclaimer, null !== (e = null == a ?
						void 0 : null === (n = a.user) || void 0 === n ? void 0 : n.email
						.endsWith("@openai.com")) && void 0 !== e && e)
				}, [r, t, i, u, l.modelSwitcherDisclaimer, s, a])
			}

			function k(e) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return (0, i._)({
					value: e.id,
					name: e.title,
					tags: e.tags
				}, n)
			}
		},
		66523: function(e, n, t) {
			"use strict";
			t.d(n, {
				Z: function() {
					return c
				}
			});
			var r = t(24396),
				a = t(70079),
				i = t(24274),
				o = t(64135),
				s = t(99585),
				l = t(44541),
				u = {
					textarea: "",
					"model-switcher": ""
				};

			function c() {
				var e = (0, o.hz)(),
					n = (0, l.CS)(function(e) {
						return e.isoDate
					}),
					t = (0, s.xz)(n),
					c = (0, r.a)(["modelMessageCap"], function() {
						return i.ZP.getModelMessageCap()
					}, {
						enabled: e.has("model_preview")
					}).data;
				return (0, a.useMemo)(function() {
					var e = (null == c ? void 0 : c.message_cap) || 0,
						n = (null == c ? void 0 : c.message_cap_window) || 1,
						r = function(e) {
							if (e < 60) return e < 2 ? "minute" : "".concat(e, " minutes");
							var n = Math.floor(e / 60);
							if (n < 24) return n < 2 ? "hour" : "".concat(n, " hours");
							var t = Math.floor(n / 24);
							if (t < 7) return t < 2 ? "day" : "".concat(t, " days")
						}(n),
						a = (null == c ? void 0 : c.message_disclaimer) || u;
					return r ? c && n && e ? {
						textareaDisclaimer: a.textarea.replaceAll("%FORMATTED_TIME%", t)
							.replaceAll("%NUMERATOR%", "".concat(e)).replaceAll("%DENOMINATOR%",
								r),
						modelSwitcherDisclaimer: a["model-switcher"].replaceAll(
								"%FORMATTED_TIME%", t).replaceAll("%NUMERATOR%", "".concat(e))
							.replaceAll("%DENOMINATOR%", r)
					} : {
						textareaDisclaimer: u.textarea,
						modelSwitcherDisclaimer: u["model-switcher"]
					} : {
						textareaDisclaimer: a.textarea,
						modelSwitcherDisclaimer: a["model-switcher"]
					}
				}, [c, t])
			}
		},
		44541: function(e, n, t) {
			"use strict";
			t.d(n, {
				BT: function() {
					return C
				},
				CS: function() {
					return w
				},
				G3: function() {
					return a
				},
				ZP: function() {
					return _
				},
				f_: function() {
					return x
				},
				m0: function() {
					return j
				},
				n2: function() {
					return v
				},
				uU: function() {
					return b
				},
				xt: function() {
					return k
				}
			});
			var r, a, i = t(96237),
				o = t(39324),
				s = t(71209),
				l = t(81949),
				u = t(68555),
				c = t(70079),
				d = t(81292),
				f = t(51132),
				h = t(64135),
				g = t(75527),
				m = t(21437),
				p = t(92186);
			(r = a || (a = {})).Model = "model", r.Temperature = "temperature", r.Context = "context";
			var v = new Set(["text-davinci-002-render-paid"]),
				x = "gpt-4",
				b = "model_cap_exceeded",
				y = (0, d.ZP)(function() {
					return {
						serverThreadIds: new Set
					}
				});

			function j(e) {
				y.setState(function(n) {
					return {
						serverThreadIds: new Set((0, l._)(n.serverThreadIds).concat([e]))
					}
				})
			}
			var w = (0, d.ZP)()((0, f.tJ)(function(e) {
				return {
					isoDate: "",
					setCapTimeout: function(n) {
						e(function() {
							return {
								isoDate: n
							}
						})
					},
					clearCapTimeout: function() {
						e(function() {
							return {
								isoDate: ""
							}
						})
					}
				}
			}, {
				name: "oai/apps/capExpiresAt"
			}));

			function C() {
				var e = w(function(e) {
						return e.isoDate
					}),
					n = w(function(e) {
						return e.clearCapTimeout
					}),
					t = Date.now(),
					r = e && new Date(e).getTime();
				return e && r && r <= t ? (n(), null) : e ? x : null
			}

			function k(e, n) {
				var t;
				return e ? n[0].id : (null === (t = n.find(function(e) {
					return e.id.includes("text-davinci")
				})) || void 0 === t ? void 0 : t.id) || n[0].id
			}

			function _(e, n, t) {
				var r = (0, u.useRouter)(),
					l = r.query,
					d = n || decodeURIComponent(l[a.Model] || ""),
					f = (0, h.hz)(),
					v = y().serverThreadIds,
					x = (0, g.XK)(t),
					b = (0, p.ZP)().models,
					j = (0, m.Fl)().isBetaFeaturesUiEnabled ? b : e,
					w = (0, c.useMemo)(function() {
						if (0 !== j.length) {
							var e, n = void 0 !== x && v.has(x),
								t = null === (e = j.find(function(e) {
									return e.id === d
								})) || void 0 === e ? void 0 : e.id,
								r = k(f.has("priority_driven_models_list"), j),
								a = j.some(function(e) {
									return e.id === r
								}) ? r : j[0].id,
								i = !n && t || a;
							return j.find(function(e) {
								return e.id === i
							})
						}
					}, [j, x, v, f, d]),
					C = parseFloat(l[a.Temperature] || "1"),
					_ = (0, c.useCallback)(function(e, n) {
						r.replace({
							pathname: r.basePath,
							query: (0, s._)((0, o._)({}, l), (0, i._)({}, e, encodeURIComponent(
								n)))
						}, void 0, {
							shallow: !0
						})
					}, [l, r]);
				return (0, c.useMemo)(function() {
					return {
						temperature: C,
						modelBackend: (null == w ? void 0 : w.id) || "",
						onChangeModelSetting: _
					}
				}, [_, null == w ? void 0 : w.id, C])
			}
		},
		75527: function(e, n, t) {
			"use strict";
			t.d(n, {
				tQ: function() {
					return S
				},
				OX: function() {
					return k
				},
				Zz: function() {
					return _
				},
				ax: function() {
					return I
				},
				r7: function() {
					return W
				},
				XK: function() {
					return Z
				},
				je: function() {
					return O
				},
				Uy: function() {
					return q
				},
				GD: function() {
					return A
				},
				U0: function() {
					return L
				},
				oq: function() {
					return R
				},
				Hk: function() {
					return B
				},
				UL: function() {
					return D
				},
				Kt: function() {
					return F
				},
				GR: function() {
					return E
				},
				qA: function() {
					return U
				},
				u9: function() {
					return G
				},
				nh: function() {
					return z
				},
				lA: function() {
					return H
				},
				dz: function() {
					return V
				},
				qN: function() {
					return T
				}
			});
			var r = t(39324),
				a = t(71209),
				i = t(24396),
				o = t(61888),
				s = t(68555),
				l = t(70079),
				u = t(81292),
				c = t(58392),
				d = t(32787),
				f = t(70216);
			t(59710);
			var h = t(57311),
				g = t(75179);
			t(44675).env.INTERNAL_API_URL;
			var m = t(69403),
				p = t(697),
				v = t(97688),
				x = t(60382),
				b = t(44541),
				y = t(24274),
				j = t(32983),
				w = "NEW:",
				C = 0;

			function k() {
				return "".concat(w).concat(C++)
			}

			function _(e) {
				return e.startsWith(w)
			}
			var M = {},
				T = (0, u.ZP)((0, c.n)(function() {
					return {
						threads: {},
						clientNewThreadIdToServerIdMapping: {},
						threadRetainCounts: {}
					}
				})),
				N = T.getState,
				P = T.setState,
				S = {
					getOrInitThread: function(e, n, t) {
						var r = S.resolveThreadId(e);
						return null != N().threads[r] ? N().threads[r] : (S.resetThread(e, n, t), N()
							.threads[e])
					},
					getServerThreadId: function(e) {
						return _(e) ? N().clientNewThreadIdToServerIdMapping[e] : e
					},
					setServerIdForNewThread: function(e, n) {
						void 0 === N().clientNewThreadIdToServerIdMapping[e] && P(function(t) {
							t.threads[n] = t.threads[e], delete t.threads[e], t
								.clientNewThreadIdToServerIdMapping[e] = n
						})
					},
					initThreadFromServerData: function(e, n) {
						var t, i, o, s, l, u, c, d, m, p, v = arguments.length > 2 && void 0 !==
							arguments[2] && arguments[2],
							x = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
							b = S.resolveThreadId(e);
						if (null != N().threads[b] || v) {
							var y = (i = null === (t = Object.values(n.mapping).find(function(e) {
								return null === e.parent
							})) || void 0 === t ? void 0 : t.id, o = new Set, s = new Set, (n
								.moderation_results || []).forEach(function(e) {
								e.blocked ? s.add(e.message_id) : e.flagged && o.add(e
									.message_id)
							}), {
								rootId: i,
								mapping: Object.keys(n.mapping).reduce(function(e, t) {
									var i, l = n.mapping[t],
										u = l.parent,
										c = l.children,
										d = (0, f._)(l, ["parent", "children"]),
										m = n.mapping[t].message || h.Cv
										.createRootMessage();
									return s.has(m.id) ? i = g.sK : o.has(m.id) && (i =
										g.Mf), e[t] = (0, r._)((0, a._)((0, r._)({},
										d), {
										message: m,
										children: c || [],
										parentId: u || "",
										type: h.uV[m.author.role]
									}), i && {
										metadata: i
									}), e
								}, {}),
								initialCurrentLeafId: n.current_node,
								authorName: n.author_name
							});
							if ((null === (l = N().threads[b]) || void 0 === l ? void 0 : l
								.isLoading) !== !1) {
								var j = null !== (u = y.mapping) && void 0 !== u ? u : h.Cv
								.createTree(),
									w = {
										thread: j,
										initialCurrentLeafId: null !== (d = null !== (c = y
												.initialCurrentLeafId) && void 0 !== c ? c : y
											.rootId) && void 0 !== d ? d : "root",
										threadId: b,
										title: null !== (m = n.title) && void 0 !== m ? m : null,
										lastModelUsed: function e(n, t) {
											var r, a, i = n[t];
											return (null == i ? void 0 : null === (r = i.message) ||
												void 0 === r ? void 0 : null === (a = r
													.metadata) || void 0 === a ? void 0 : a
												.model_slug) ? i.message.metadata.model_slug : (
												null == i ? void 0 : i.parentId) ? e(n, i
												.parentId) : null
										}(y.mapping, y.initialCurrentLeafId),
										pluginIds: null !== (p = n.plugin_ids) && void 0 !== p ? p : [],
										authorName: y.authorName
									},
									C = new h.Cv(j),
									k = w.initialCurrentLeafId;
								P(function(e) {
									var n;
									e.threads[b] = (0, a._)((0, r._)({}, null !== (n = e
										.threads[b]) && void 0 !== n ? n : {}), {
										initialThreadData: w,
										tree: C,
										currentLeafId: k,
										isLoading: !1,
										continuingFromSharedConversationId: x
									})
								}), S.recomputeConversationTurns(b, N().threads[b].currentLeafId,
								[])
							}
						}
					},
					resetThread: function(e, n, t) {
						var r, a, i = (a = (null == n ? void 0 : null === (r = n.enabledTools) ||
							void 0 === r ? void 0 : r.includes("tools3")) === !0 ? t.map(
							function(e) {
								return e.id
							}) : [], {
							thread: h.Cv.createTree(),
							initialCurrentLeafId: "root",
							threadId: null,
							title: "New chat",
							lastModelUsed: null,
							pluginIds: a || [],
							authorName: ""
						});
						S.deleteThread(e), P(function(t) {
							t.threads[e] = {
								initialThreadData: i,
								tree: new h.Cv(i.thread),
								currentLeafId: i.initialCurrentLeafId,
								conversationTurns: [],
								currentModel: n,
								isLoading: !_(e)
							}
						})
					},
					updateInitialThreadDataForNewThread: function(e, n, t) {
						P(function(r) {
							r.threads[e].initialThreadData.lastModelUsed = n, r.threads[e]
								.initialThreadData.pluginIds = t
						})
					},
					getThreadCurrentLeafId: function(e) {
						var n, t, r = S.resolveThreadId(e);
						return null !== (t = null === (n = N().threads[r]) || void 0 === n ? void 0 : n
							.currentLeafId) && void 0 !== t ? t : "root"
					},
					setThreadCurrentLeafId: function(e, n) {
						var t, r, a = S.resolveThreadId(e);
						if (null != N().threads[a]) {
							P(function(e) {
								e.threads[a].currentLeafId = n
							});
							var i = N();
							S.recomputeConversationTurns(a, n, null !== (r = null === (t = i.threads[
									a]) || void 0 === t ? void 0 : t.conversationTurns) &&
								void 0 !== r ? r : [])
						}
					},
					updateTree: function(e, n) {
						var t, r, a, i, o = S.resolveThreadId(e);
						if (!(null != N().threads[o])) {
							console.warn("Thread does not exist, cannot update tree: ", o);
							return
						}
						n(S.getTree(e));
						var s = N(),
							l = null !== (a = null === (t = s.threads[o]) || void 0 === t ? void 0 : t
								.currentLeafId) && void 0 !== a ? a : "root",
							u = null !== (i = null === (r = s.threads[o]) || void 0 === r ? void 0 : r
								.conversationTurns) && void 0 !== i ? i : [];
						S.recomputeConversationTurns(o, l, u)
					},
					getTree: function(e) {
						var n, t, r = S.resolveThreadId(e);
						return null !== (t = null === (n = N().threads[r]) || void 0 === n ? void 0 : n
							.tree) && void 0 !== t ? t : new h.Cv
					},
					resolveThreadId: function(e) {
						var n;
						return null !== (n = N().clientNewThreadIdToServerIdMapping[e]) && void 0 !==
							n ? n : e
					},
					recomputeConversationTurns: function(e, n, t) {
						var r = S.resolveThreadId(e);
						P(function(e) {
							e.threads[r] && (e.threads[r].conversationTurns = S
								.computeThreadConversationTurns(r, n, t))
						})
					},
					computeThreadConversationTurns: function(e, n, t) {
						var r = S.resolveThreadId(e);
						return S.getTree(r).getConversationTurns(n).map(function(e, n) {
							var r = null == t ? void 0 : t[n];
							return (0, o.isEqual)(r, e) ? r : e
						})
					},
					getThreadConversationTurns: function(e, n, t) {
						var r, a, i, o, s = S.resolveThreadId(e),
							l = null !== (i = null === (r = N().threads[s]) || void 0 === r ? void 0 : r
								.currentLeafId) && void 0 !== i ? i : "root";
						return null != n && n !== l ? S.computeThreadConversationTurns(s, n, null != t ?
							t : []) : null !== (o = null === (a = N().threads[s]) || void 0 === a ?
							void 0 : a.conversationTurns) && void 0 !== o ? o : []
					},
					removeContinuingFromSharedConversationId: function(e) {
						var n = S.resolveThreadId(e);
						P(function(e) {
							var t;
							(null === (t = e.threads[n]) || void 0 === t ? void 0 : t
								.continuingFromSharedConversationId) != null && delete e
								.threads[n].continuingFromSharedConversationId
						})
					},
					deleteThread: function(e) {
						P(function(n) {
							delete n.threads[e], delete n.clientNewThreadIdToServerIdMapping[e]
						})
					},
					retainThread: function(e) {
						P(function(n) {
							var t;
							n.threadRetainCounts[e] = (null !== (t = n.threadRetainCounts[e]) &&
								void 0 !== t ? t : 0) + 1
						}), clearTimeout(M[e])
					},
					releaseThread: function(e) {
						null != N().threads[e] && (P(function(n) {
							var t;
							n.threadRetainCounts[e] = Math.max((null !== (t = n
									.threadRetainCounts[e]) && void 0 !== t ? t : 0) -
								1, 0)
						}), N().threadRetainCounts[e] > 0 || (clearTimeout(M[e]), M[e] =
							setTimeout(function() {
								null == N().threads[e] || N().threadRetainCounts[e] > 0 || S
									.deleteThread(e)
							}, 3e4)))
					}
				},
				I = function(e, n) {
					var t = (0, s.useRouter)(),
						r = (0, d.kP)().session,
						a = (0, x.Z)().availableModels,
						o = (0, p.p0)(),
						u = (0, b.ZP)(a, null, e).modelBackend,
						c = (0, l.useMemo)(function() {
							return a.find(function(e) {
								return e.id === u
							})
						}, [a, u]),
						f = (0, l.useContext)(j.QL).historyDisabled;
					(0, i.a)(["conversation", e], function() {
						return y.ZP.getConversation(e, null == r ? void 0 : r.accessToken)
					}, {
						enabled: !_(e) && (null == r ? void 0 : r.accessToken) !== void 0 && !f && !n,
						onError: function() {
							t.replace("/"), v.m.danger("Unable to load conversation ".concat(e))
						},
						onSuccess: function(n) {
							n && S.initThreadFromServerData(e, n)
						}
					}), (0, l.useEffect)(function() {
						c && S.getOrInitThread(e, c, o)
					}, [e, c, o, t])
				},
				Z = function(e) {
					return T(function(n) {
						return _(e) ? n.clientNewThreadIdToServerIdMapping[e] : e
					})
				},
				D = function(e) {
					return T(function(n) {
						var t, r, a = S.resolveThreadId(e);
						return null !== (r = null === (t = n.threads[a]) || void 0 === t ? void 0 :
							t.initialThreadData) && void 0 !== r ? r : Object.freeze({
							thread: h.Cv.createTree(),
							threadId: null,
							initialCurrentLeafId: "root",
							title: null,
							lastModelUsed: null
						})
					})
				},
				F = function(e) {
					return T(function(n) {
						var t, r, a = S.resolveThreadId(e);
						return null !== (r = null === (t = n.threads[a]) || void 0 === t ? void 0 :
							t.isLoading) && void 0 !== r && r
					})
				},
				E = function(e) {
					var n = T(function(n) {
						var t, r, a = S.resolveThreadId(e);
						return null === (t = n.threads[a]) || void 0 === t ? void 0 : null === (r =
							t.initialThreadData) || void 0 === r ? void 0 : r.pluginIds
					});
					return (0, l.useMemo)(function() {
						return new Set(null != n ? n : [])
					}, [n])
				},
				R = function(e) {
					return T(function() {
						return S.getThreadCurrentLeafId(e)
					})
				},
				L = function(e, n) {
					var t = (0, l.useRef)([]);
					return T(function() {
						var r, a = S.getThreadConversationTurns(e, n, t.current);
						return t.current = a, null !== (r = null == a ? void 0 : a.length) &&
							void 0 !== r ? r : 0
					})
				},
				A = function(e, n, t) {
					var r = (0, l.useRef)([]);
					return T(function() {
						var a = S.getThreadConversationTurns(e, t, r.current);
						return r.current = a, a[n]
					})
				},
				B = function(e) {
					var n = R(e);
					return (0, l.useMemo)(function() {
						var t, r, a = S.getThreadConversationTurns(e, n, []),
							i = null !== (t = null == a ? void 0 : a.length) && void 0 !== t ? t :
							0,
							o = null !== (r = null == a ? void 0 : a[i - 1]) && void 0 !== r ? r :
							null;
						return 0 === i ? n : h.Cv.getRequestIdFromConversationTurn(o)
					}, [n, e])
				},
				U = function(e) {
					return T(function() {
						var n, t, r, a = S.resolveThreadId(e);
						return null !== (r = null === (n = N().threads[a]) || void 0 === n ?
							void 0 : null === (t = n.initialThreadData) || void 0 === t ?
							void 0 : t.title) && void 0 !== r ? r : ""
					})
				},
				q = function(e) {
					return T(function() {
						var n, t = S.resolveThreadId(e);
						return null === (n = N().threads[t]) || void 0 === n ? void 0 : n
							.continuingFromSharedConversationId
					})
				},
				O = function(e) {
					return T(function() {
						var n, t, r = S.resolveThreadId(e);
						return null === (n = N().threads[r]) || void 0 === n ? void 0 : null === (
							t = n.initialThreadData) || void 0 === t ? void 0 : t.authorName
					})
				},
				z = function(e, n) {
					return T(function() {
						return S.getTree(e).getNode(n)
					})
				},
				H = function(e, n) {
					return T(function() {
						var t, r;
						return null !== (r = null === (t = S.getTree(e)) || void 0 === t ? void 0 :
							t.getHasErrorFromNode(n)) && void 0 !== r && r
					})
				},
				V = function(e, n) {
					return T(function() {
						var t, r;
						return null !== (r = null === (t = S.getTree(e)) || void 0 === t ? void 0 :
							t.isMessageIncomplete(n)) && void 0 !== r && r
					})
				},
				G = function(e, n) {
					return T(function() {
						var t = S.getTree(e);
						return null == t ? [] : t.getBranchFromLeaf(n).filter(function(e) {
							return e.type !== m.Jq.Root
						}).map(function(e) {
							return e.message
						})
					})
				},
				W = function(e) {
					return T(function() {
						var n, t = S.resolveThreadId(e);
						return (null === (n = N().threads[t]) || void 0 === n ? void 0 : n
							.continuingFromSharedConversationId) != null
					})
				}
		},
		21437: function(e, n, t) {
			"use strict";
			t.d(n, {
				Fl: function() {
					return C
				},
				N2: function() {
					return w
				},
				tr: function() {
					return a
				}
			});
			var r, a, i, o = t(96237),
				s = t(39324),
				l = t(71209),
				u = t(22830),
				c = t(35448),
				d = t(24396),
				f = t(70079),
				h = t(81292),
				g = t(32787),
				m = t(24274),
				p = t(64135),
				v = {
					isBetaFeaturesUiEnabled: !1,
					isBrowsingAvailable: !1,
					isBrowsingEnabled: !1,
					isPluginsAvailable: !1,
					isPluginsEnabled: !1,
					isCodeInterpreterAvailable: !1,
					isCodeInterpreterEnabled: !1,
					isLegacyToolsUser: !1,
					isNewToolsUser: !1
				};
			(r = a || (a = {})).BROWSING = "browsing", r.CODE_INTERPRETER = "code_interpreter", r.PLUGINS =
				"plugins";
			var x = (i = {}, (0, o._)(i, a.BROWSING, "isBrowsingEnabled"), (0, o._)(i, a.CODE_INTERPRETER,
					"isCodeInterpreterEnabled"), (0, o._)(i, a.PLUGINS, "isPluginsEnabled"), i),
				b = (0, h.ZP)()(function() {
					return v
				}),
				y = {
					updateUserSettings: function(e) {
						b.setState(function(n) {
							return (0, s._)({}, n, e)
						})
					},
					updateUserSettingsFromFeatures: function(e) {
						b.setState(function(n) {
							return (0, s._)({}, n, y.getUserSettingsFromFeatures(e))
						})
					},
					getUserSettingsFromFeatures: function(e) {
						return Object.entries(e).reduce(function(e, n) {
							var t = (0, u._)(n, 2),
								r = t[0],
								a = t[1],
								i = x[r];
							return i ? (0, l._)((0, s._)({}, e), (0, o._)({}, i, a)) : e
						}, {})
					}
				},
				j = function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
					return ["userSettings", e]
				};

			function w() {
				var e = (0, g.kP)().session,
					n = (0, c.NL)();
				return function() {
					return n.invalidateQueries({
						queryKey: j(null == e ? void 0 : e.accessToken)
					})
				}
			}

			function C() {
				var e = (0, g.kP)().session,
					n = (0, p.hz)(),
					t = n.has("beta_features");
				return (0, d.a)(j(null == e ? void 0 : e.accessToken), function() {
					return m.ZP.getUserSettingBetaFeatures(e.accessToken).then(function(e) {
						return null != e && y.updateUserSettingsFromFeatures(e), e
					})
				}, {
					enabled: t && (null == e ? void 0 : e.accessToken) != null
				}), (0, f.useEffect)(function() {
					y.updateUserSettings({
						isBetaFeaturesUiEnabled: t,
						isBrowsingAvailable: n.has("browsing_available") || n.has("tools"),
						isCodeInterpreterAvailable: n.has("tools2"),
						isPluginsAvailable: n.has("plugins_available") || n.has("tools3"),
						isLegacyToolsUser: n.has("tools") && n.has("browsing_available") ||
							n.has("tools3") && n.has("plugins_available"),
						isNewToolsUser: n.has("browsing_available") && !n.has("tools") || n
							.has("plugins_available") && !n.has("tools3")
					})
				}, [n, t]), b(function(e) {
					return e
				})
			}
		},
		36716: function(e, n, t) {
			"use strict";
			t.d(n, {
				Op: function() {
					return h
				},
				Qd: function() {
					return c
				},
				T$: function() {
					return d
				},
				s8: function() {
					return f
				}
			});
			var r = t(35250),
				a = t(1454),
				i = t(180),
				o = t(38317),
				s = t(57924),
				l = "&#8203;",
				u = "oaicite:";

			function c(e, n) {
				if (!n) return e;
				for (var t = n.length - 1; t >= 0; t--) {
					var r = n[t],
						a = r.start_ix,
						i = r.end_ix,
						o = r.metadata,
						s = r.invalid_reason,
						c = {
							index: t
						};
					o ? c.metadata = o : s && (c.invalid_reason = s), e = e.slice(0, a) + "".concat(l, "`")
						.concat(u).concat(JSON.stringify(c), "`").concat(l) + e.slice(i)
				}
				return e
			}

			function d(e) {
				if (!e.startsWith(u)) return null;
				try {
					return JSON.parse(e.slice(u.length))
				} catch (e) {
					return {
						index: -1
					}
				}
			}

			function f(e) {
				var n, t = e.displayInfo;
				return (0, r.jsx)(s.u, {
					label: (0, r.jsx)(h, {
						pageInfo: t.metadata,
						invalidReason: t.invalid_reason
					}),
					side: "top",
					sideOffset: 4,
					withArrow: !1,
					interactive: !0,
					wide: !0,
					children: (0, r.jsx)("a", {
						href: null === (n = t.metadata) || void 0 === n ? void 0 : n.url,
						target: "_blank",
						rel: "noreferrer",
						className: "px-0.5 text-green-600 !no-underline",
						children: (0, r.jsx)("sup", {
							children: t.index + 1
						})
					})
				})
			}

			function h(e) {
				var n = e.pageInfo,
					t = e.invalidReason;
				return (0, r.jsx)("a", {
					href: null == n ? void 0 : n.url,
					target: "_blank",
					rel: "noreferrer",
					className: "text-xs !no-underline",
					children: n ? (0, r.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [(0, r.jsx)("div", {
							className: "flex shrink-0 items-center justify-center",
							children: (0, r.jsx)(i.Z, {
								url: n.url,
								className: "my-0"
							})
						}), (0, r.jsx)("div", {
							className: "max-w-xs truncate",
							children: n.title
						}), (0, r.jsx)("div", {
							className: "shrink-0",
							children: (0, r.jsx)(o.ZP, {
								icon: a.AlO,
								size: "xsmall"
							})
						})]
					}) : (0, r.jsx)("div", {
						className: "text-red-500",
						children: null != t ? t : "Invalid citation"
					})
				})
			}
		},
		53086: function(e, n, t) {
			"use strict";
			t.d(n, {
				G: function() {
					return r
				}
			});
			var r = {
				id: "chat",
				name: "ChatGPT",
				href: "/",
				theme: {
					icon: "openai",
					color: "#10a37f",
					activeColor: "#1a7f64"
				}
			}
		},
		77442: function(e, n, t) {
			"use strict";
			t.d(n, {
				H8: function() {
					return h
				},
				Ui: function() {
					return g
				},
				_G: function() {
					return a
				},
				dD: function() {
					return d
				},
				dQ: function() {
					return m
				},
				lj: function() {
					return f
				}
			});
			var r, a, i, o = t(96237),
				s = t(22830),
				l = t(70079);
			(r = a || (a = {})).Small = "small", r.Medium = "medium", r.Large = "large", r.XLarge =
				"xlarge", r.Full = "full";
			var u = (i = {}, (0, o._)(i, a.Small, 640), (0, o._)(i, a.Medium, 768), (0, o._)(i, a.Large,
				1024), (0, o._)(i, a.XLarge, 1280), (0, o._)(i, a.Full, 1536), i);

			function c(e) {
				var n = function() {
						i(t(e))
					},
					t = function(e) {
						return window.matchMedia(e).matches
					},
					r = (0, s._)((0, l.useState)(t(e)), 2),
					a = r[0],
					i = r[1];
				return (0, l.useEffect)(function() {
					var t = window.matchMedia(e);
					return n(), t.addListener ? t.addListener(n) : t.addEventListener("change", n),
						function() {
							t.removeListener ? t.removeListener(n) : t.removeEventListener("change",
								n)
						}
				}, [e]), a
			}

			function d() {
				return c("(max-width: ".concat(u[a.Small], "px)"))
			}

			function f() {
				return c("(max-width: ".concat(u[a.Medium], "px)"))
			}

			function h() {
				return c("(min-width: ".concat(u[a.Medium], "px)"))
			}

			function g() {
				return c("(max-width: ".concat(u[a.Large], "px)"))
			}

			function m() {
				var e = d(),
					n = f(),
					t = g(),
					r = c("(max-width: ".concat(u[a.XLarge], "px)"));
				return e ? a.Small : n ? a.Medium : t ? a.Large : r ? a.XLarge : a.Full
			}
		},
		57311: function(e, n, t) {
			"use strict";
			t.d(n, {
				Cv: function() {
					return _
				},
				uV: function() {
					return j
				}
			});
			var r, a, i = t(51217),
				o = t(53596),
				s = t(54084),
				l = t(49406),
				u = t(31819),
				c = t(96237),
				d = t(39324),
				f = t(70216),
				h = t(81949),
				g = t(74050),
				m = t(84251),
				p = t.n(m),
				v = t(8844),
				x = t(75179),
				b = t(69403),
				y = (r = {}, (0, c._)(r, b.Jq.Root, b.uU.Unknown), (0, c._)(r, b.Jq.Prompt, b.uU.User), (0,
					c._)(r, b.Jq.Completion, b.uU.Assistant), (0, c._)(r, b.Jq.System, b.uU.System), r),
				j = (a = {}, (0, c._)(a, b.uU.Unknown, b.Jq.Root), (0, c._)(a, b.uU.System, b.Jq.System), (
						0, c._)(a, b.uU.User, b.Jq.Prompt), (0, c._)(a, b.uU.Assistant, b.Jq.Completion), (
						0, c._)(a, b.uU.Critic, b.Jq.Completion), (0, c._)(a, b.uU.Tool, b.Jq.Completion),
					a);

			function w(e) {
				var n = (0, v.Z)();
				return "".concat(e).concat(n.substring(e.length))
			}
			var C = new WeakMap,
				k = new WeakMap,
				_ = function() {
					function e(n) {
						(0, i._)(this, e), (0, s._)(this, C, {
							writable: !0,
							value: void 0
						}), (0, s._)(this, k, {
							writable: !0,
							value: void 0
						}), (0, l._)(this, C, n || e.createTree());
						var t = Object.values((0, o._)(this, C)).find(function(e) {
							return e.type === b.Jq.Root
						});
						(0, l._)(this, k, (null == t ? void 0 : t.id) || "root")
					}
					var n = e.prototype;
					return n.getNode = function(e) {
						return (0, o._)(this, C)[e]
					}, n.getMessage = function(e) {
						return (0, o._)(this, C)[e].message
					}, n.getMessageId = function(e) {
						try {
							return (0, o._)(this, C)[e].message.id
						} catch (n) {
							throw console.error("Tree: Unable to getMessageId for node ".concat(e)), n
						}
					}, n.getMetadata = function(e) {
						return (0, o._)(this, C)[e].metadata
					}, n.getLeafFromNode = function(e) {
						for (var n = (0, o._)(this, C)[e];;) {
							if (0 === n.children.length) return n;
							n = (0, o._)(this, C)[n.children.values().next().value]
						}
					}, n.getParent = function(e) {
						var n = (0, o._)(this, C)[e].parentId;
						return (0, o._)(this, C)[n]
					}, n.getParentId = function(e) {
						var n;
						return (null === (n = this.getParent(e)) || void 0 === n ? void 0 : n.id) ||
							"root"
					}, n.getBranchFromLeaf = function(e) {
						for (var n = [], t = (0, o._)(this, C)[e];;) {
							if (n.includes(t)) {
								console.error("Infinite loop detected in getBranchFromLeaf.");
								break
							}
							if (!t || (n.push(t), "root" === t.type)) break;
							t = (0, o._)(this, C)[t.parentId]
						}
						return n.reverse()
					}, n.getChildrenFromNode = function(e) {
						var n = this,
							t = (0, o._)(this, C)[e];
						return t ? Array.from(t.children).map(function(e) {
							return (0, o._)(n, C)[e]
						}) : []
					}, n.getFirstPrompt = function() {
						for (var e, n, t = this.getNode((0, o._)(this, k));;) {
							if (!t) return;
							if (t.type === b.Jq.Prompt || t.type === b.Jq.System && (null === (e = t
									.message.metadata) || void 0 === e ? void 0 : e.upload_filename))
								return t;
							t = (0, o._)(this, C)[null === (n = t.children) || void 0 === n ? void 0 :
								n[0]]
						}
					}, n.isMessageIncomplete = function(n) {
						var t = this.getMessage(n);
						return e.getIsIncompleteFromMessage(t)
					}, n.addNodeToEnd = function(e, n) {
						if (!(0, o._)(this, C)[e]) return (0, c._)({}, n.id, n);
						(0, l._)(this, C, p()((0, o._)(this, C), (0, c._)({
							$merge: (0, c._)({}, n.id, n)
						}, e, {
							children: {
								$apply: function(e) {
									return Array.from(new Set((0, h._)(e).concat([n
										.id])))
								}
							}
						})))
					}, n.appendSystemMessageToRoot = function(e) {
						var n, t, r = null === (n = this.getFirstPrompt()) || void 0 === n ? void 0 : n
							.parentId;
						if (r) {
							var a = this.getNode(r),
								i = this.getNode(a.children[0]),
								s = {
									id: e.id,
									children: a.children,
									parentId: a.id,
									message: e
								};
							(0, l._)(this, C, p()((0, o._)(this, C), (t = {
								$merge: (0, c._)({}, s.id, s)
							}, (0, c._)(t, a.id, {
								children: {
									$set: [s.id]
								}
							}), (0, c._)(t, i.id, {
								parentId: {
									$set: s.id
								}
							}), t)))
						}
					}, n.addNode = function(e, n, t, r, a) {
						var i = "string" == typeof n ? {
								id: w("aaa2"),
								author: {
									role: y[r]
								},
								content: {
									content_type: "text",
									parts: [n]
								}
							} : n,
							o = (0, d._)({
								id: e,
								children: [],
								parentId: t,
								type: r,
								message: i
							}, a ? {
								metadata: a
							} : {});
						this.addNodeToEnd(t, o)
					}, n.updateNode = function(e, n) {
						(0, l._)(this, C, p()((0, o._)(this, C), (0, c._)({}, e, n)))
					}, n.updateNodeMessage = function(e, n) {
						(0, l._)(this, C, p()((0, o._)(this, C), (0, c._)({}, e, {
							message: {
								$set: n
							}
						})))
					}, n.updateNodeMessageMetadata = function(e, n) {
						(0, l._)(this, C, p()((0, o._)(this, C), (0, c._)({}, e, {
							message: {
								metadata: {
									$merge: n
								}
							}
						})))
					}, n.updateNodeText = function(e, n) {
						(0, l._)(this, C, p()((0, o._)(this, C), (0, c._)({}, e, {
							message: {
								content: {
									parts: {
										$set: [n]
									}
								}
							}
						})))
					}, n.deleteNode = function(e) {
						var n = (0, o._)(this, C),
							t = n[e],
							r = (0, f._)(n, [e].map(g._)),
							a = t.parentId;
						(0, l._)(this, C, p()(r, (0, c._)({}, a, {
							children: {
								$apply: function(n) {
									return n.filter(function(n) {
										return n !== e
									})
								}
							}
						})))
					}, n.getTextFromNode = function(n) {
						return e.getTextFromMessage(this.getMessage(n))
					}, n.getHasErrorFromNode = function(e) {
						var n, t, r = this.getNode(e);
						return r && ((null === (n = r.metadata) || void 0 === n ? void 0 : n
							.errType) === "danger" || (null === (t = r.metadata) || void 0 === t ?
								void 0 : t.errType) === "warning")
					}, n.getIsBlockedFromNode = function(e) {
						var n, t, r = this.getNode(e);
						return r && (null === (n = r.metadata) || void 0 === n ? void 0 : n.errCode) ===
							x.Dd && (null === (t = r.metadata) || void 0 === t ? void 0 : t.errType) ===
							"danger"
					}, n.getTextFromThread = function(n) {
						return this.getBranchFromLeaf(n).filter(function(e) {
							return e.type !== b.Jq.Root && e.type !== b.Jq.System
						}).map(function(n) {
							return e.getTextFromMessage(n.message)
						}).join("\n\n")
					}, n.shouldFilterNode = function(e) {
						var n = e.message,
							t = n.content.content_type,
							r = e.message.author.role === b.uU.System,
							a = e.message.author.role === b.uU.Tool,
							i = void 0 !== n.recipient && "all" !== n.recipient;
						return r || i || a && !("code" === t || "execution_output" === t ||
							"system_error" === t)
					}, n.getTextFromTurnsById = function(e) {
						var n = this;
						return e.map(function(e) {
							return n.getNode(e)
						}).filter(function(e) {
							return !n.shouldFilterNode(e)
						}).map(function(e) {
							return n.getTextFromNode(e.id)
						}).join("\n\n")
					}, n.getTextFromLastNTurns = function(n, t) {
						var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
						return this.getConversationTurns(n, this.shouldFilterNode).slice(-t).map(
							function(n) {
								var t = n.messages.map(function(n) {
									return e.getTextFromMessage(n.message)
								}).filter(function(e) {
									return "" !== e
								}).join("\n");
								return r ? "[".concat(n.role, "]\n").concat(t) : t
							}).join("\n")
					}, n.getConversationTurns = function(e, n) {
						var t = this,
							r = [];
						return this.getBranchFromLeaf(e).forEach(function(e) {
							var a = e.id,
								i = e.parentId,
								s = e.message,
								l = e.metadata;
							if (null == n || !n(e)) {
								var u = r[r.length - 1];
								(null == u ? void 0 : u.role) === s.author.role || s.author
									.role === b.uU.Tool ? r[r.length - 1].messages.push((0, d._)
										({
											nodeId: a,
											parentId: i,
											message: s
										}, l)) : r.push({
										role: s.author.role,
										messages: [(0, d._)({
											nodeId: a,
											parentId: i,
											message: s
										}, l)],
										variantIds: i ? Array.from((0, o._)(t, C)[i]
											.children) : [a]
									})
							}
						}), r
					}, n.getLastValidNode = function(e) {
						for (var n, t = this.getNode(e); t && t && (null === (n = t.metadata) ||
								void 0 === n ? void 0 : n.err);) t = this.getNode(t.parentId);
						return t
					}, n.getParentPromptNode = function(e) {
						for (var n, t = this.getNode(e); t && t && (null === (n = t.message) ||
								void 0 === n ? void 0 : n.author.role) !== b.uU.User;) t = this.getNode(
							t.parentId);
						return t
					}, n.messageIdToNodeId = function(e) {
						if (null != (0, o._)(this, C)[e]) return e;
						var n = !0,
							t = !1,
							r = void 0;
						try {
							for (var a, i = Object.values((0, o._)(this, C))[Symbol.iterator](); !(n = (
									a = i.next()).done); n = !0) {
								var s, l = a.value;
								if ((null === (s = l.message) || void 0 === s ? void 0 : s.id) === e)
									return l.id
							}
						} catch (e) {
							t = !0, r = e
						} finally {
							try {
								n || null == i.return || i.return()
							} finally {
								if (t) throw r
							}
						}
						return e
					}, n.unstable_getMapping = function() {
						return (0, o._)(this, C)
					}, e.createTree = function() {
						return {
							root: {
								id: "root",
								children: [],
								parentId: "",
								type: b.Jq.Root,
								message: e.createRootMessage()
							}
						}
					}, e.createRootMessage = function() {
						return {
							id: w("aaa1"),
							author: {
								role: y[b.Jq.Root]
							},
							content: {
								content_type: "text",
								parts: []
							}
						}
					}, e.getIsMessageFinished = function(e) {
						var n;
						return (null === (n = e.metadata) || void 0 === n ? void 0 : n
							.finish_details) != null
					}, e.getIsStopFromMessage = function(e) {
						var n, t;
						return (null === (n = e.metadata) || void 0 === n ? void 0 : null === (t = n
							.finish_details) || void 0 === t ? void 0 : t.type) === "stop"
					}, e.getIsIncompleteFromMessage = function(e) {
						var n, t;
						return (null === (n = e.metadata) || void 0 === n ? void 0 : null === (t = n
							.finish_details) || void 0 === t ? void 0 : t.type) === "max_tokens"
					}, e.getWasInterruptedFromMessage = function(e) {
						var n, t;
						return (null === (n = e.metadata) || void 0 === n ? void 0 : null === (t = n
							.finish_details) || void 0 === t ? void 0 : t.type) === "interrupted"
					}, e.getIsContinuedFromMessage = function(e) {
						var n;
						return (null === (n = e.metadata) || void 0 === n ? void 0 : n.message_type) ===
							"continue"
					}, e.getModelFromMessage = function(e) {
						var n;
						return null === (n = e.metadata) || void 0 === n ? void 0 : n.model_slug
					}, e.getTextFromMessage = function(e) {
						switch (e.content.content_type) {
							case "text":
								return e.content.parts.join("");
							case "tether_browsing_code":
							case "code":
							case "execution_output":
							case "system_error":
								return e.content.text;
							case "system_message":
								var n = e.content.text,
									t = !0,
									r = !1,
									a = void 0;
								try {
									for (var i, o = Object.values(e.content.tools_section)[Symbol
											.iterator](); !(t = (i = o.next()).done); t = !0) {
										var s = i.value;
										n += "\n\n".concat(s)
									}
								} catch (e) {
									r = !0, a = e
								} finally {
									try {
										t || null == o.return || o.return()
									} finally {
										if (r) throw a
									}
								}
								return n;
							default:
								return ""
						}
					}, e.getRequestIdFromConversationTurn = function(e) {
						var n = e.messages[e.messages.length - 1];
						return this.getIsContinuedFromMessage(n.message) ? n.nodeId : e.messages[0]
							.nodeId
					}, e.getRecipientFromMessage = function(e) {
						return e.recipient || ""
					}, (0, u._)(e, [{
						key: "isFirstCompletion",
						get: function() {
							var e = this.getFirstPrompt();
							if (e) {
								var n = (0, o._)(this, C)[e.children[0]];
								if (n && 0 === n.children.length) return !0
							}
							return !1
						}
					}]), e
				}()
		},
		86526: function(e, n, t) {
			"use strict";
			var r = t(70079);
			n.Z = function() {
				var e = (0, r.useRef)(!1);
				return (0, r.useEffect)(function() {
					return e.current = !0,
						function() {
							e.current = !1
						}
				}, []), (0, r.useCallback)(function() {
					return e.current
				}, [])
			}
		},
		19051: function(e, n, t) {
			"use strict";
			t.d(n, {
				Z: function() {
					return a
				}
			});
			var r = t(70079);

			function a() {
				var e = (0, r.useRef)([]),
					n = (0, r.useRef)(function(n, t) {
						var r = setTimeout(n, t);
						return e.current.push(r), r
					});
				return (0, r.useEffect)(function() {
					var n = e.current;
					return function() {
						n.forEach(function(e) {
							clearTimeout(e)
						})
					}
				}, []), n.current
			}
		},
		75179: function(e, n, t) {
			"use strict";
			t.d(n, {
				Dd: function() {
					return o
				},
				Mf: function() {
					return s
				},
				_I: function() {
					return u
				},
				sK: function() {
					return l
				}
			});
			var r = t(95182),
				a = t.n(r),
				i = t(24274),
				o = "content_policy",
				s = {
					errType: "warning",
					errCode: o
				},
				l = {
					err: "Contents may violate our content policy",
					errType: "danger",
					errCode: o
				};

			function u(e) {
				var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					t = arguments.length > 2 ? arguments[2] : void 0,
					r = arguments.length > 3 ? arguments[3] : void 0,
					o = a()(e.length, 0, 4e3),
					s = a()(e.length - o, 0, e.length - 1),
					l = n ? e.substring(s, e.length) : e;
				return !1 && l ? i.ZP.runModerationApi(l, t, r).then(function(e) {
					return {
						isBlocked: !!e.blocked,
						isFlagged: !!e.flagged
					}
				}).catch(function(e) {
					return console.error(e), {
						isBlocked: !1,
						isFlagged: !1,
						error: e
					}
				}) : Promise.resolve({
					isBlocked: !1,
					isFlagged: !1
				})
			}
		},
		41402: function() {}
	}
]);