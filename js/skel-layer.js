/* skel-layers.js vx.x | (c) n33 | n33.co | MIT licensed */
skel.registerPlugin("layers", function(e) {
    function un(e, r, i) {
        var o, u;
        this.id = e, this.index = i, this[n] = {
            breakpoints: L,
            states: L,
            position: L,
            side: L,
            animation: mt,
            orientation: mt,
            width: 0,
            height: 0,
            zIndex: this.index,
            html: "",
            hidden: P,
            exclusive: kt,
            resetScroll: kt,
            resetForms: kt,
            swipeToClose: kt,
            clickToClose: P
        }, t._.extend(this[n], r), this[z] = t._.newDiv(this[n].html), this[z].id = e, this[z]._layer = this, this[s] = L, this[rt] = L, this[nt] = L, this[zt] = P, u = t._.cacheElement(this.id, this[z], Z, 1), u.onAttach = function() {
            var e = this.object._layer;
            e[Y]() || e.init(), e.resume()
        }, u.onDetach = function() {
            var e = this.object._layer;
            e.suspend()
        }, this[n].states ? (o = t._[sn](this[n].states), t._[Ft](o, function(e) {
            t._.addCachedElementToState(t._.sd + o[e], u)
        })) : (this[n].breakpoints ? o = t._[sn](this[n].breakpoints) : o = t._.breakpointList, t._[Ft](o, function(e) {
            t._.addCachedElementToBreakpoint(o[e], u)
        }))
    }
    var t, n = "config",
        r = "_skel_layers_translateOrigin",
        i = "cache",
        s = "$element",
        o = "_skel_layers_translate",
        u = "_skel_layers_resetForms",
        f = "_skel_layers_resume",
        l = "_skel_layers_promote",
        c = "exclusiveLayer",
        h = "activeWrapper",
        p = "moveToInactiveWrapper",
        d = "_skel_layers_demote",
        v = "moveToActiveWrapper",
        m = "setTimeout",
        g = "right",
        y = "bottom",
        b = "useActive",
        w = "scrollTop",
        E = "deactivate",
        S = "css",
        x = "width",
        T = "center",
        N = "_skel_layers_suspend",
        C = "position",
        k = "prototype",
        L = null,
        A = "left",
        O = "wrapper",
        M = "skel-layers-layer-z-index",
        _ = "_skel_layers_init",
        D = "children",
        P = !1,
        H = "inactiveWrapper",
        B = "top",
        j = "deviceType",
        F = "length",
        I = "height",
        q = "touchstart.lock click.lock scroll.lock",
        R = "window",
        U = "transform",
        z = "element",
        W = "stopPropagation",
        X = "resetForms",
        V = "preventDefault",
        $ = "overflow-x",
        J = "recalcW",
        K = "-webkit-",
        Q = "padding-bottom",
        G = "-webkit-tap-highlight-color",
        Y = "isInitialized",
        Z = "skel_layers_inactiveWrapper",
        et = "originalEvent",
        tt = "animation",
        nt = "touchPosY",
        rt = "touchPosX",
        it = "skel-layers-layer-position",
        st = "skel-layers-layer-index",
        ot = "z-index",
        ut = "unlockView",
        at = "animations",
        ft = '<div id="skel-layers-tmp-',
        lt = "hidden",
        ct = "_skel_layers_initializeCell",
        ht = "resize.lock scroll.lock",
        pt = "find",
        dt = "registerLocation",
        vt = "orientationchange.lock",
        mt = "none",
        gt = "activate",
        yt = "speed",
        bt = "positions",
        wt = "-moz-",
        Et = "_skel_layers_expandCell",
        St = "_skel_layers_hasParent",
        xt = "attr",
        Tt = "layers",
        Nt = "append",
        Ct = "lockView",
        kt = !0,
        Lt = "#skel-layers-tmp-",
        At = "-ms-",
        Ot = "isTouch",
        Mt = "DOMReady",
        _t = "_skel_layers_scrollPos",
        Dt = "auto",
        Pt = "_skel_layers_xcss",
        Ht = "visible",
        Bt = "-o-",
        jt = "transformBreakpoints",
        Ft = "iterate",
        It = "rgba(0,0,0,0)",
        qt = "appendTo",
        Rt = "cell-size",
        Ut = "vars",
        zt = "active",
        Wt = "px",
        Xt = "-",
        Vt = "body",
        $t = "click",
        Jt = "touches",
        Kt = "overflow-",
        Qt = "isVisible",
        Gt = "side",
        Yt = "recalcH",
        Zt = "relative",
        en = "android",
        tn = "transformTest",
        nn = "pointer",
        rn = "#",
        sn = "getArray",
        on = "*";
    return typeof e == "undefined" ? P : (e.fn[St] = function() {
        return e(this).parents()[F] > 0
    }, e.fn[l] = function(r) {
        var i, s, o;
        if (this[F] > 1) {
            for (i = 0; i < this[F]; i++) e(this[i])[l](r);
            return e(this)
        }
        return s = e(this), isNaN(o = parseInt(s.data(st))) && (o = 0), s.data(M, s[S](ot))[S](ot, t[n].baseZIndex + o + (r ? r : 1)), s
    }, e.fn[d] = function() {
        var t, n;
        if (this[F] > 1) {
            for (t = 0; t < this[F]; t++) e(this[t])[d]();
            return e(this)
        }
        return n = e(this), n[S](ot, n.data(M)).data(M, ""), n
    }, e.fn._skel_layers_xcssValue = function(t, n) {
        return e(this)[S](t, n)[S](t, wt + n)[S](t, K + n)[S](t, Bt + n)[S](t, At + n)
    }, e.fn._skel_layers_xcssProperty = function(t, n) {
        return e(this)[S](t, n)[S](wt + t, n)[S](K + t, n)[S](Bt + t, n)[S](At + t, n)
    }, e.fn[Pt] = function(t, n) {
        return e(this)[S](t, n)[S](wt + t, wt + n)[S](K + t, K + n)[S](Bt + t, Bt + n)[S](At + t, At + n)
    }, e.fn[u] = function() {
        var t = e(this);
        return e(this)[pt]("form").each(function() {
            this.reset()
        }), t
    }, e.fn[ct] = function() {
        var t = e(this);
        t[xt]("class").match(/(\s+|^)([0-9]+)u(\s+|$)/) && t.data(Rt, parseInt(RegExp.$2))
    }, e.fn[Et] = function() {
        var t = e(this),
            n = t.parent(),
            r = 12;
        n[D]().each(function() {
            var t = e(this),
                n = t[xt]("class");
            n && n.match(/(\s+|^)([0-9]+)u(\s+|$)/) && (r -= parseInt(RegExp.$2))
        }), r > 0 && (t[ct](), t[S](x, (t.data(Rt) + r) / 12 * 100 + "%"))
    }, un[k][bt] = {
        "top-left": {
            v: B,
            h: A,
            side: A
        },
        "top-right": {
            v: B,
            h: g,
            side: g
        },
        top: {
            v: B,
            h: T,
            side: B
        },
        "top-center": {
            v: B,
            h: T,
            side: B
        },
        "bottom-left": {
            v: y,
            h: A,
            side: A
        },
        "bottom-right": {
            v: y,
            h: g,
            side: g
        },
        bottom: {
            v: y,
            h: T,
            side: y
        },
        "bottom-center": {
            v: y,
            h: T,
            side: y
        },
        left: {
            v: T,
            h: A,
            side: A
        },
        "center-left": {
            v: T,
            h: A,
            side: A
        },
        right: {
            v: T,
            h: g,
            side: g
        },
        "center-right": {
            v: T,
            h: g,
            side: g
        }
    }, un[k][at] = {
        none: {
            activate: function(e) {
                var t = e[n],
                    r = e[s];
                r[w](0)[l](t.zIndex).show(), t[X] && r[u](), e[v]()
            },
            deactivate: function(e) {
                var t = e[n],
                    r = e[s];
                r.hide()[d](), e[p]()
            }
        },
        overlayX: {
            activate: function(e) {
                var r = e[n],
                    i = e[s];
                i[w](0)[l](r.zIndex)[S](r[Gt], Xt + t[J](t._[b](r[x])) + Wt).show(), r[X] && i[u](), t[Ct]("x"), e[v](), window[m](function() {
                    i[o]((r[Gt] == g ? Xt : "") + t[J](t._[b](r[x])), 0)
                }, 50)
            },
            deactivate: function(e) {
                var i = e[n],
                    o = e[s];
                o[pt](on).blur(), o[r](), window[m](function() {
                    t[ut]("x"), e[p](), o[d]().hide()
                }, t[n][yt] + 50)
            }
        },
        overlayY: {
            activate: function(e) {
                var r = e[n],
                    i = e[s];
                i[w](0)[l](r.zIndex)[S](r[Gt], Xt + t[J](t._[b](r[I])) + Wt).show(), r[X] && i[u](), t[Ct]("y"), e[v](), window[m](function() {
                    i[o](0, (r[Gt] == y ? Xt : "") + t[J](t._[b](r[I])))
                }, 50)
            },
            deactivate: function(e) {
                var i = e[n],
                    o = e[s];
                o[pt](on).blur(), o[r](), window[m](function() {
                    t[ut]("y"), e[p](), o[d]().hide()
                }, t[n][yt] + 50)
            }
        },
        pushX: {
            activate: function(e) {
                var r = e[n],
                    a = e[s],
                    f = t[i][O].add(t[i][h][D]());
                a[w](0)[S](r[Gt], Xt + t[J](t._[b](r[x])) + Wt).show(), r[X] && a[u](), f[l](), t[Ct]("x"), e[v](), window[m](function() {
                    a.add(f)[o]((r[Gt] == g ? Xt : "") + t[J](t._[b](r[x])), 0)
                }, 50)
            },
            deactivate: function(e) {
                var o = e[n],
                    u = e[s],
                    a = t[i][O].add(t[i][h][D]());
                u[pt](on).blur(), u.add(a)[r](), window[m](function() {
                    t[ut]("x"), u.hide(), e[p](), a[d]()
                }, t[n][yt] + 50)
            }
        },
        pushY: {
            activate: function(e) {
                var r = e[n],
                    a = e[s],
                    f = t[i][O].add(t[i][h][D]());
                a[w](0)[S](r[Gt], Xt + t[Yt](t._[b](r[I])) + Wt).show(), r[X] && a[u](), t[Ct]("y"), e[v](), window[m](function() {
                    a.add(f)[o](0, (r[Gt] == y ? Xt : "") + t[Yt](t._[b](r[I])))
                }, 50)
            },
            deactivate: function(e) {
                var o = e[n],
                    u = e[s],
                    a = t[i][O].add(t[i][h][D]());
                u[pt](on).blur(), u.add(a)[r](), window[m](function() {
                    t[ut]("y"), u.hide(), e[p]()
                }, t[n][yt] + 50)
            }
        },
        revealX: {
            activate: function(e) {
                var r = e[n],
                    a = e[s],
                    f = t[i][O].add(t[i][h][D]());
                a[w](0).show(), r[X] && a[u](), f[l](), t[Ct]("x"), e[v](), window[m](function() {
                    f[o]((r[Gt] == g ? Xt : "") + t[J](t._[b](r[x])), 0)
                }, 50)
            },
            deactivate: function(e) {
                var o = e[n],
                    u = e[s],
                    a = t[i][O].add(t[i][h][D]());
                u[pt](on).blur(), a[r](), window[m](function() {
                    t[ut]("x"), u.hide(), a[d](), e[p]()
                }, t[n][yt] + 50)
            }
        }
    }, un[k][v] = function() {
        t[i][h][Nt](this[s])
    }, un[k][p] = function() {
        if (!this[s][St]()) return;
        t[i][H][Nt](this[s])
    }, un[k][E] = function() {
        var e, r;
        if (!this[zt]) {
            t[i][H][Nt](this[z]);
            return
        }
        e = this[n], r = t._[b](e[tt]), r in this[at] || (r = mt), this[at][r][E](this), e[lt] && e.exclusive && t[i][c] === this && (t[i][c] = L), this[zt] = P
    }, un[k][gt] = function() {
        var e, r, o, u;
        if (this[zt]) {
            t[i][h][Nt](this[z]);
            return
        }
        e = this[n], r = t._[b](e[tt]), o = this[s], o[S](x, t._[b](e[x]))[S](I, t._[b](e[I])), t._[Ut][j] == "ios" && e[I] == "100%" && !e[lt] && o[S](I, "-webkit-calc(" + t._[b](e[I]) + " + 70px)"), u = this[bt][e[C]], o.addClass("skel-layer-" + e[C]).data(it, e[C]);
        switch (u.v) {
            case B:
                o[S](B, 0);
                break;
            case y:
                o[S](y, 0);
                break;
            case T:
                o[S](B, "50%")[S]("margin-top", Xt + t.getHalf(e[I]))
        }
        switch (u.h) {
            case A:
                o[S](A, 0);
                break;
            case g:
                o[S](g, 0);
                break;
            case T:
                o[S](A, "50%")[S]("margin-left", Xt + t.getHalf(e[x]))
        }
        this[at][r][gt](this), e[lt] && e.exclusive && (t[i][c] = this), this[zt] = kt
    }, un[k][Y] = function() {
        return this[s] !== L
    }, un[k][Qt] = function() {
        return this[s].is(":visible")
    }, un[k].resume = function(r) {
        if (!this[Y]()) return;
        this[s][pt](on).each(function() {
            t.parseResume(e(this))
        }), this[n][lt] || this[gt](r)
    }, un[k].suspend = function() {
        if (!this[Y]()) return;
        this[s][r](), this[s][pt](on).each(function() {
            t.parseSuspend(e(this))
        }), this[zt] && this[E]()
    }, un[k].init = function() {
        var r = this[n],
            o = e(this[z]),
            u = this;
        o[_](), o[pt](on).each(function() {
            t.parseInit(e(this))
        }), o.addClass("skel-layer").data(st, this.index)[S](ot, t[n].baseZIndex)[S](C, "fixed")[S]("-ms-overflow-style", "-ms-autohiding-scrollbar")[S]("-webkit-overflow-scrolling", "touch").hide();
        switch (r.orientation) {
            case "vertical":
                o[S]("overflow-y", Dt);
                break;
            case "horizontal":
                o[S]($, Dt);
                break;
            case mt:
            default:
        }
        if (!r[C] || !(r[C] in this[bt])) r[C] = "top-left";
        r[Gt] || (r[Gt] = this[bt][r[C]][Gt]);
        if (!r[tt] || typeof r[tt] != "object" && !(r[tt] in this[at])) r[tt] = mt;
        r.clickToClose && o[pt]("a")[S](G, It).on("click.skel-layers", function(r) {
            var i, s, o = e(this);
            if (o.hasClass("skel-layers-ignore")) return;
            r[V](), r[W](), u[E]();
            if (o.hasClass("skel-layers-ignoreHref")) return;
            i = o[xt]("href"), s = o[xt]("target"), window[m](function() {
                s == "_blank" && t._[Ut][j] != "wp" ? window.open(i) : window.location.href = i
            }, t[n][yt] + 10)
        }), t._[Ut][j] == "ios" && o[pt]("input,select,textarea").on("focus", function(n) {
            var r = e(this);
            n[V](), n[W](), window[m](function() {
                var e = t[i][R][_t],
                    n = t[i][R][w]() - e;
                t[i][R][w](e), o[w](o[w]() + n), r.hide(), window[m](function() {
                    r.show()
                }, 0)
            }, 100)
        }), t._[Ut][Ot] && o.on("touchstart", function(e) {
            u[rt] = e[et][Jt][0].pageX, u[nt] = e[et][Jt][0].pageY
        }).on("touchmove", function(e) {
            var t, n, i, s, a, f, l;
            if (u[rt] === L || u[nt] === L) return;
            t = u[rt] - e[et][Jt][0].pageX, n = u[nt] - e[et][Jt][0].pageY, i = o.outerHeight(), s = o.get(0).scrollHeight - o[w]();
            if (r.swipeToClose) {
                a = P, f = 20, l = 50;
                switch (r[Gt]) {
                    case A:
                        a = n < f && n > -1 * f && t > l;
                        break;
                    case g:
                        a = n < f && n > -1 * f && t < -1 * l;
                        break;
                    case B:
                        a = t < f && t > -1 * f && n > l;
                        break;
                    case y:
                        a = t < f && t > -1 * f && n < -1 * l
                }
                if (a) return u[rt] = L, u[nt] = L, u[E](), P
            }
            if (o[w]() == 0 && n < 0 || s > i - 2 && s < i + 2 && n > 0) return P
        }), this[s] = o
    }, t = {
        config: {
            baseZIndex: 1e4,
            transform: kt,
            transformBreakpoints: L,
            transformTest: L,
            speed: 250,
            layers: {}
        },
        cache: {
            layers: {},
            body: L,
            window: L,
            wrapper: L,
            inactiveWrapper: L,
            activeWrapper: L,
            exclusiveLayer: L
        },
        eventType: $t,
        getBaseFontSize: function() {
            return t._[Ut].IEVersion < 9 ? 16.5 : parseFloat(getComputedStyle(t[i][Vt].get(0)).fontSize)
        },
        recalc: function(e, n) {
            var r = t._.parseMeasurement(e),
                i;
            switch (r[1]) {
                case "%":
                    i = Math.floor(n * (r[0] / 100));
                    break;
                case "em":
                    i = t.getBaseFontSize() * r[0];
                    break;
                default:
                case Wt:
                    i = r[0]
            }
            return i
        },
        recalcW: function(n) {
            return t.recalc(n, e(window)[x]())
        },
        recalcH: function(n) {
            return t.recalc(n, e(window)[I]())
        },
        getHalf: function(e) {
            var t = parseInt(e);
            return typeof e == "string" && e.charAt(e[F] - 1) == "%" ? Math.floor(t / 2) + "%" : Math.floor(t / 2) + Wt
        },
        parseSuspend: function(e) {
            var t = e.get(0);
            t[N] && t[N]()
        },
        parseResume: function(e) {
            var t = e.get(0);
            t[f] && t[f]()
        },
        parseInit: function(n) {
            var r, s, o = n.get(0),
                u = n[xt]("data-action"),
                a = n[xt]("data-args"),
                l, h;
            u && a && (a = a.split(","));
            switch (u) {
                case "toggleLayer":
                case "layerToggle":
                    n[S](G, It)[S]("cursor", nn), r = function(n) {
                        n[V](), n[W]();
                        if (t[i][c]) return t[i][c][E](), P;
                        var r = e(this),
                            s = t[i][Tt][a[0]];
                        s[Qt]() ? s[E]() : s[gt]()
                    }, t._[Ut][j] == en || t._[Ut][j] == "wp" ? n.on($t, r) : n.on(t.eventType, r);
                    break;
                case "navList":
                    l = e(rn + a[0]), r = l[pt]("a"), s = [], r.each(function() {
                        var t = e(this),
                            n;
                        n = Math.max(0, t.parents("li")[F] - 1), s.push('<a class="link depth-' + n + '" href="' + t[xt]("href") + '"><span class="indent-' + n + '"></span>' + t.text() + "</a>")
                    }), s[F] > 0 && n.html("<nav>" + s.join("") + "</nav>"), n[pt](".link")[S]("cursor", nn)[S]("display", "block");
                    break;
                case "copyText":
                    l = e(rn + a[0]), n.html(l.text());
                    break;
                case "copyHTML":
                    l = e(rn + a[0]), n.html(l.html());
                    break;
                case "moveElementContents":
                    l = e(rn + a[0]), o[f] = function() {
                        l[D]().each(function() {
                            n[Nt](e(this))
                        })
                    }, o[N] = function() {
                        n[D]().each(function() {
                            l[Nt](e(this))
                        })
                    }, o[f]();
                    break;
                case "moveElement":
                    l = e(rn + a[0]), o[f] = function() {
                        e(ft + l[xt]("id") + '" />').insertBefore(l), n[Nt](l)
                    }, o[N] = function() {
                        e(Lt + l[xt]("id")).replaceWith(l)
                    }, o[f]();
                    break;
                case "moveCell":
                    l = e(rn + a[0]), h = e(rn + a[1]), o[f] = function() {
                        e(ft + l[xt]("id") + '" />').insertBefore(l), n[Nt](l), l[S](x, Dt), h && h[Et]()
                    }, o[N] = function() {
                        e(Lt + l[xt]("id")).replaceWith(l), l[S](x, ""), h && h[S](x, "")
                    }, o[f]();
                    break;
                default:
            }
        },
        lockView: function(e) {
            t[i][R][_t] = t[i][R][w](), t._[Ut][Ot] && t[i][Vt][S](Kt + e, lt), t[i][O].on(q, function(e) {
                e[V](), e[W](), t[i][c] && t[i][c][E]()
            }), t[i][R].on(vt, function(e) {
                t[i][c] && t[i][c][E]()
            }), t._[Ut][Ot] || t[i][R].on(ht, function(e) {
                t[i][c] && t[i][c][E]()
            })
        },
        unlockView: function(e) {
            t._[Ut][Ot] && t[i][Vt][S](Kt + e, Ht), t[i][O].off(q), t[i][R].off(vt), t._[Ut][Ot] || t[i][R].off(ht)
        },
        initLayers: function() {
            var r, s, o, u = 1;
            t._[Ft](t[n][Tt], function(r) {
                var s;
                if (!t[n][Tt][r].html && (s = e(rn + r))[F] == 0) return;
                o = new un(r, t[n][Tt][r], u++), t[i][Tt][r] = o, s && (s[D]()[qt](o[z]), s.remove())
            })
        },
        initTransforms: function() {
            if (t[n][U]) e.fn[r] = function() {
                return e(this)[o](0, 0)
            }, e.fn[o] = function(t, n) {
                return e(this)[S](U, "translate(" + t + "px, " + n + "px)")
            }, e.fn[_] = function() {
                return e(this)[S]("backface-visibility", lt)[S]("perspective", "500")[Pt]("transition", "transform " + t[n][yt] / 1e3 + "s ease-in-out")
            };
            else {
                var s, u = [];
                t[i][R].resize(function() {
                    if (t[n][yt] != 0) {
                        var e = t[n][yt];
                        t[n][yt] = 0, window[m](function() {
                            t[n][yt] = e, u = []
                        }, e)
                    }
                }), e.fn[r] = function() {
                    for (var r = 0; r < this[F]; r++) {
                        var s = this[r],
                            o = e(s);
                        u[s.id] && o.animate(u[s.id], t[n][yt], "swing", function() {
                            t._[Ft](u[s.id], function(e) {
                                o[S](e, u[s.id][e])
                            }), t[i][Vt][S]($, Ht), t[i][O][S](x, Dt)[S](Q, 0)
                        })
                    }
                    return e(this)
                }, e.fn[o] = function(r, s) {
                    var o, f, l, c;
                    r = parseInt(r), s = parseInt(s), r != 0 ? (t[i][Vt][S]($, lt), t[i][O][S](x, t[i][R][x]())) : l = function() {
                        t[i][Vt][S]($, Ht), t[i][O][S](x, Dt)
                    }, s < 0 ? t[i][O][S](Q, Math.abs(s)) : c = function() {
                        t[i][O][S](Q, 0)
                    };
                    for (o = 0; o < this[F]; o++) {
                        var h = this[o],
                            p = e(h),
                            d;
                        if (!u[h.id])
                            if (d = un[k][bt][p.data(it)]) {
                                u[h.id] = {};
                                switch (d.v) {
                                    case T:
                                    case B:
                                        u[h.id][B] = parseInt(p[S](B));
                                        break;
                                    case y:
                                        u[h.id][y] = parseInt(p[S](y))
                                }
                                switch (d.h) {
                                    case T:
                                    case A:
                                        u[h.id][A] = parseInt(p[S](A));
                                        break;
                                    case g:
                                        u[h.id][g] = parseInt(p[S](g))
                                }
                            } else d = p[C](), u[h.id] = {
                                top: d[B],
                                left: d[A]
                            };
                        a = {}, t._[Ft](u[h.id], function(e) {
                            var n;
                            switch (e) {
                                case B:
                                    n = t[Yt](u[h.id][e]) + s;
                                    break;
                                case y:
                                    n = t[Yt](u[h.id][e]) - s;
                                    break;
                                case A:
                                    n = t[J](u[h.id][e]) + r;
                                    break;
                                case g:
                                    n = t[J](u[h.id][e]) - r
                            }
                            a[e] = n
                        }), p.animate(a, t[n][yt], "swing", function() {
                            l && l(), c && c()
                        })
                    }
                    return e(this)
                }, e.fn[_] = function() {
                    return e(this)[S](C, "absolute")
                }
            }
        },
        initObjects: function() {
            t[i][R] = e(window), t[i][R].load(function() {
                t[i][R][w]() == 0 && window.scrollTo(0, 1)
            }), t._[Mt](function() {
                t[i][Vt] = e(Vt), t[i][Vt].wrapInner('<div id="skel-layers-wrapper" />'), t[i][O] = e("#skel-layers-wrapper"), t[i][O][S](C, Zt)[S](A, "0")[S](g, "0")[S](B, "0")[_](), t[i][H] = e('<div id="skel-layers-inactiveWrapper" />')[qt](t[i][Vt]), t[i][H][S](I, "100%"), t[i][h] = e('<div id="skel-layers-activeWrapper" />')[qt](t[i][Vt]), t[i][h][S](C, Zt), t._[dt](Z, t[i][H][0]), t._[dt]("skel_layers_activeWrapper", t[i][h][0]), t._[dt]("skel_layers_wrapper", t[i][O][0]), e("[autofocus]").focus()
            })
        },
        initIncludes: function() {
            e(".skel-layers-include").each(function() {
                t.parseInit(e(this))
            })
        },
        init: function() {
            t[n][tn] && (t[n][U] = t[n][tn]());
            if (t[n][U]) {
                if (t._[Ut][j] == en && t._[Ut].deviceVersion < 4 || t._[Ut][j] == "wp") t[n][U] = P;
                t._[Ut].IEVersion < 10 && (t[n][U] = P), t[n][jt] && !t._.hasActive(t._[sn](t[n][jt])) && (t[n][U] = P)
            }
            t.eventType = t._[Ut][Ot] ? "touchend" : $t, t.initObjects(), t.initTransforms(), t._[Mt](function() {
                t.initLayers(), t.initIncludes(), t._.updateState(), t.refresh()
            })
        },
        refresh: function() {
            e(".skel-layers-fixed")[_]()[qt](t[i][h])
        },
        activate: function(e) {
            t._[Mt](function() {
                t[i][Tt][e][gt]()
            })
        },
        deactivate: function(e) {
            t._[Mt](function() {
                t[i][Tt][e][E]()
            })
        },
        toggle: function(e) {
            t._[Mt](function() {
                var n = t[i][Tt][e];
                n[Qt]() ? n[E]() : n[gt]()
            })
        }
    }, t)
}(jQuery));