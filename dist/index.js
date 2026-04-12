"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=a(function(R,c){
var t=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-ln/dist');function l(e,r,n){return t(r)||t(n)||t(e)||n<=0||e<0||e>1?NaN:r-n*s(-s(e))}c.exports=l
});var v=a(function(g,f){
var y=require('@stdlib/utils-constant-function/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-ln/dist');function x(e,r){if(u(e)||u(r)||r<=0)return y(NaN);return n;function n(i){return u(i)||i<0||i>1?NaN:e-r*q(-q(i))}}f.exports=x
});var d=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=o(),F=v();d(N,"factory",F);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
