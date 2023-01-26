import h, { createContext as N, version as O, useContext as _, memo as j, useRef as A, useMemo as U, isValidElement as W, Children as b, useState as q } from "react";
import { jsx as M } from "react/jsx-runtime";
const w = 3;
function H(e) {
  return e != null && e.kind === w;
}
const D = {}, G = (e) => {
  var r;
  return D({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - Compat for React <= 17.x
    now: Date.now,
    // Timeout
    scheduleTimeout: setTimeout,
    cancelTimeout: clearTimeout,
    noTimeout: !1,
    // Microtask scheduling
    // @see https://github.com/facebook/react/blob/2c8a1452b82b9ec5ebfa3f370b31fda19610ae92/packages/react-dom/src/client/ReactDOMHostConfig.js#L391-L401
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - types in `@types/react-reconciler` are outdated
    supportsMicrotasks: !0,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - types in `@types/react-reconciler` are outdated
    scheduleMicrotask: k,
    // Compat for React <= 17.x
    queueMicrotask: k,
    isPrimaryRenderer: (r = e == null ? void 0 : e.primary) !== null && r !== void 0 ? r : !0,
    supportsMutation: !0,
    supportsHydration: !1,
    supportsPersistence: !1,
    // Context
    getRootHostContext() {
      return {};
    },
    getChildHostContext(t) {
      return t;
    },
    // Instances
    createTextInstance(t, n) {
      return n.createText(t);
    },
    createInstance(t, n, o) {
      const {
        children: a,
        ...u
      } = n;
      return o.createComponent(t, u);
    },
    // Updates
    commitTextUpdate(t, n, o) {
      t.update(o);
    },
    prepareUpdate(t, n, o, a) {
      const u = {};
      let i = !1;
      for (const c in o)
        !x(o, c) || c === "children" || (c in a ? o[c] !== a[c] && (i = !0, u[c] = a[c]) : (i = !0, u[c] = void 0));
      for (const c in a)
        !x(a, c) || c === "children" || c in o || (i = !0, u[c] = a[c]);
      return i ? u : null;
    },
    commitUpdate(t, n) {
      t.updateProps(n);
    },
    // Update root
    appendChildToContainer(t, n) {
      t.append(n);
    },
    insertInContainerBefore(t, n, o) {
      t.insertBefore(n, o);
    },
    removeChildFromContainer(t, n) {
      t.removeChild(n);
    },
    clearContainer(t) {
      for (const n of t.children)
        t.removeChild(n);
    },
    // Update children
    appendInitialChild(t, n) {
      t.append(n);
    },
    appendChild(t, n) {
      t.append(n);
    },
    insertBefore(t, n, o) {
      t.insertBefore(n, o);
    },
    removeChild(t, n) {
      t.removeChild(n);
    },
    // Unknown
    finalizeInitialChildren() {
      return !1;
    },
    shouldSetTextContent() {
      return !1;
    },
    getPublicInstance() {
    },
    prepareForCommit() {
      return null;
    },
    resetAfterCommit() {
    },
    commitMount() {
    },
    preparePortalMount() {
    }
  });
};
function k(e) {
  return typeof queueMicrotask == "function" ? queueMicrotask : Promise.resolve(null).then(e).catch(S);
}
function S(e) {
  setTimeout(() => {
    throw e;
  });
}
const {
  hasOwnProperty: Y
} = {};
function x(e, r) {
  return Y.call(e, r);
}
const g = /* @__PURE__ */ N(null), m = /* @__PURE__ */ new WeakMap(), T = 0, z = G();
function K(e) {
  return {
    render(r) {
      y(r, e);
    },
    unmount() {
      m.has(e) && (y(null, e), m.delete(e));
    }
  };
}
function y(e, r, t, n = z) {
  let o = m.get(r);
  if (!o) {
    var a;
    const s = {
      container: Number(((a = O.split(".")) === null || a === void 0 ? void 0 : a[0]) || 18) >= 18 ? n.createContainer(
        r,
        T,
        null,
        !1,
        null,
        // Might not be necessary
        "r-ui",
        () => null,
        null
      ) : (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - this is to support React 17
        n.createContainer(r, T, !1, null)
      ),
      // We also cache the render context to avoid re-creating it on subsequent render calls
      renderContext: {
        root: r,
        reconciler: n
      }
    };
    m.set(r, s), o = s;
  }
  const {
    container: u,
    renderContext: i
  } = o;
  n.updateContainer(e && /* @__PURE__ */ M(g.Provider, {
    value: i,
    children: e
  }), u, null, t);
}
function L() {
  const e = _(g);
  if (e == null)
    throw new Error("No remote-ui Render instance found in context");
  return e;
}
function E(e, {
  fragmentProps: r
} = {}) {
  if (!r || !r.length)
    return e;
  const t = V(e, r);
  return t.displayName = e, t;
}
function V(e, r) {
  const t = e;
  return /* @__PURE__ */ j(function({
    children: o = [],
    ...a
  }) {
    const u = A({}), {
      root: i,
      reconciler: c
    } = L(), {
      props: s,
      children: I
    } = U(() => {
      const v = [], f = {};
      for (const l of Object.keys(a)) {
        const p = a[l];
        if (r.includes(l) && /* @__PURE__ */ W(p)) {
          const R = u.current[l], d = H(R) ? R : i.createFragment();
          u.current[l] = d, Object.assign(d, {
            createText(...C) {
              return i.createText(...C);
            },
            createComponent(C, ...F) {
              return i.createComponent(C, ...F);
            }
          });
          const B = c.createPortal(p, d, null, null);
          v.push(B), f[l] = d;
        } else
          f[l] = p, delete u.current[l];
      }
      return {
        props: f,
        children: [...b.toArray(o), ...v]
      };
    }, [o, a, i, c, u]);
    return /* @__PURE__ */ M(t, {
      ...s,
      children: I
    });
  });
}
const J = E("Card"), Q = E(
  "Button"
);
self.onRender((e) => {
  K(e).render(/* @__PURE__ */ h.createElement(X, null)), e.mount();
});
function X() {
  const [e, r] = q("Card content");
  return /* @__PURE__ */ h.createElement(J, null, e, /* @__PURE__ */ h.createElement(
    Q,
    {
      onPress: () => {
        r("You’ve clicked!");
      }
    },
    "Click me!"
  ));
}
export {
  X as default
};
