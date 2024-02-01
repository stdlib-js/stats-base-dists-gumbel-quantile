// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";function r(t,e,r){return n(e)||n(r)||n(t)||r<=0||t<0||t>1?NaN:e-r*s(-s(t))}function i(t,r){return n(t)||n(r)||r<=0?e(NaN):function(e){if(n(e)||e<0||e>1)return NaN;return t-r*s(-s(e))}}t(r,"factory",i);export{r as default,i as factory};
//# sourceMappingURL=index.mjs.map
