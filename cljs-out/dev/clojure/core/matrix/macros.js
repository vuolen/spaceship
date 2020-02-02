// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojure.core.matrix.macros');
goog.require('cljs.core');
var ret__4776__auto___8665 = (function (){
/**
 * Throws an error with the provided message(s)
 */
clojure.core.matrix.macros.error = (function clojure$core$matrix$macros$error(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8666 = arguments.length;
var i__4731__auto___8667 = (0);
while(true){
if((i__4731__auto___8667 < len__4730__auto___8666)){
args__4736__auto__.push((arguments[i__4731__auto___8667]));

var G__8668 = (i__4731__auto___8667 + (1));
i__4731__auto___8667 = G__8668;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return clojure.core.matrix.macros.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

clojure.core.matrix.macros.error.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),vals))),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)))));
});

clojure.core.matrix.macros.error.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clojure.core.matrix.macros.error.cljs$lang$applyTo = (function (seq8662){
var G__8663 = cljs.core.first.call(null,seq8662);
var seq8662__$1 = cljs.core.next.call(null,seq8662);
var G__8664 = cljs.core.first.call(null,seq8662__$1);
var seq8662__$2 = cljs.core.next.call(null,seq8662__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8663,G__8664,seq8662__$2);
});

return null;
})()
;
clojure.core.matrix.macros.error.cljs$lang$macro = true;

var ret__4776__auto___8674 = (function (){
clojure.core.matrix.macros.TODO = (function clojure$core$matrix$macros$TODO(var_args){
var G__8673 = arguments.length;
switch (G__8673) {
case 2:
return clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___8676 = arguments.length;
var i__4731__auto___8677 = (0);
while(true){
if((i__4731__auto___8677 < len__4730__auto___8676)){
args_arr__4751__auto__.push((arguments[i__4731__auto___8677]));

var G__8678 = (i__4731__auto___8677 + (1));
i__4731__auto___8677 = G__8678;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core.matrix.macros","error","clojure.core.matrix.macros/error",-1013616626,null),null,(1),null)),(new cljs.core.List(null,"TODO: not yet implemented",null,(1),null)))));
});

clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core.matrix.macros","error","clojure.core.matrix.macros/error",-1013616626,null),null,(1),null)),(new cljs.core.List(null,"TODO: ",null,(1),null)),vals)));
});

/** @this {Function} */
clojure.core.matrix.macros.TODO.cljs$lang$applyTo = (function (seq8670){
var G__8671 = cljs.core.first.call(null,seq8670);
var seq8670__$1 = cljs.core.next.call(null,seq8670);
var G__8672 = cljs.core.first.call(null,seq8670__$1);
var seq8670__$2 = cljs.core.next.call(null,seq8670__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8671,G__8672,seq8670__$2);
});

clojure.core.matrix.macros.TODO.cljs$lang$maxFixedArity = (2);

return null;
})()
;
clojure.core.matrix.macros.TODO.cljs$lang$macro = true;

var ret__4776__auto___8679 = /**
 * Throws IllegalArgumentException with provided string
 */
clojure.core.matrix.macros.iae = (function clojure$core$matrix$macros$iae(_AMPERSAND_form,_AMPERSAND_env,exception_str){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"IllegalArgumentException.","IllegalArgumentException.",-1885081185,null),null,(1),null)),(new cljs.core.List(null,exception_str,null,(1),null))))),null,(1),null)))));
});
clojure.core.matrix.macros.iae.cljs$lang$macro = true;

var ret__4776__auto___8680 = /**
 * Throws an IllegalArgumentException when the predicate is not satisfied
 */
clojure.core.matrix.macros.iae_when_not = (function clojure$core$matrix$macros$iae_when_not(_AMPERSAND_form,_AMPERSAND_env,pred_QMARK_,exception_str){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,pred_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core.matrix.macros","iae","clojure.core.matrix.macros/iae",926591908,null),null,(1),null)),(new cljs.core.List(null,exception_str,null,(1),null))))),null,(1),null)))));
});
clojure.core.matrix.macros.iae_when_not.cljs$lang$macro = true;

var ret__4776__auto___8690 = (function (){
/**
 * loops over a set of values, binding index-sym to the 0-based index of each value
 */
clojure.core.matrix.macros.doseq_indexed = (function clojure$core$matrix$macros$doseq_indexed(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8691 = arguments.length;
var i__4731__auto___8692 = (0);
while(true){
if((i__4731__auto___8692 < len__4730__auto___8691)){
args__4736__auto__.push((arguments[i__4731__auto___8692]));

var G__8693 = (i__4731__auto___8692 + (1));
i__4731__auto___8692 = G__8693;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return clojure.core.matrix.macros.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

clojure.core.matrix.macros.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__8686,code){
var vec__8687 = p__8686;
var val_sym = cljs.core.nth.call(null,vec__8687,(0),null);
var values = cljs.core.nth.call(null,vec__8687,(1),null);
var index_sym = cljs.core.nth.call(null,vec__8687,(2),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"vals__8681__auto__","vals__8681__auto__",-459116950,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,values,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,index_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","long","cljs.core/long",241154833,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"vals__8681__auto__","vals__8681__auto__",-459116950,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,val_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"vals__8681__auto__","vals__8681__auto__",-459116950,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),code,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"vals__8681__auto__","vals__8681__auto__",-459116950,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),null,(1),null)),(new cljs.core.List(null,index_sym,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)))));
});

clojure.core.matrix.macros.doseq_indexed.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clojure.core.matrix.macros.doseq_indexed.cljs$lang$applyTo = (function (seq8682){
var G__8683 = cljs.core.first.call(null,seq8682);
var seq8682__$1 = cljs.core.next.call(null,seq8682);
var G__8684 = cljs.core.first.call(null,seq8682__$1);
var seq8682__$2 = cljs.core.next.call(null,seq8682__$1);
var G__8685 = cljs.core.first.call(null,seq8682__$2);
var seq8682__$3 = cljs.core.next.call(null,seq8682__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8683,G__8684,G__8685,seq8682__$3);
});

return null;
})()
;
clojure.core.matrix.macros.doseq_indexed.cljs$lang$macro = true;

var ret__4776__auto___8694 = clojure.core.matrix.macros.is_object_array_QMARK_ = (function clojure$core$matrix$macros$is_object_array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Array","js/Array",-423508366,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null))))),null,(1),null)))));
});
clojure.core.matrix.macros.is_object_array_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___8695 = clojure.core.matrix.macros.is_long_array_QMARK_ = (function clojure$core$matrix$macros$is_long_array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Array","js/Array",-423508366,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null))))),null,(1),null)))));
});
clojure.core.matrix.macros.is_long_array_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___8696 = clojure.core.matrix.macros.is_double_array_QMARK_ = (function clojure$core$matrix$macros$is_double_array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Array","js/Array",-423508366,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null))))),null,(1),null)))));
});
clojure.core.matrix.macros.is_double_array_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___8707 = (function (){
/**
 * C-like loop with nested loops support
 */
clojure.core.matrix.macros.c_for = (function clojure$core$matrix$macros$c_for(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8708 = arguments.length;
var i__4731__auto___8709 = (0);
while(true){
if((i__4731__auto___8709 < len__4730__auto___8708)){
args__4736__auto__.push((arguments[i__4731__auto___8709]));

var G__8710 = (i__4731__auto___8709 + (1));
i__4731__auto___8709 = G__8710;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return clojure.core.matrix.macros.c_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

clojure.core.matrix.macros.c_for.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,loops,body){
var c_for_rec = (function clojure$core$matrix$macros$c_for_rec(loops__$1,body_stmts){
if(cljs.core.seq.call(null,loops__$1)){
var vec__8704 = cljs.core.take.call(null,(4),loops__$1);
var var$ = cljs.core.nth.call(null,vec__8704,(0),null);
var init = cljs.core.nth.call(null,vec__8704,(1),null);
var check = cljs.core.nth.call(null,vec__8704,(2),null);
var next = cljs.core.nth.call(null,vec__8704,(3),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,var$,null,(1),null)),(new cljs.core.List(null,init,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,check,null,(1),null)),clojure$core$matrix$macros$c_for_rec.call(null,cljs.core.nthrest.call(null,loops__$1,(4)),body_stmts),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,next,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return body_stmts;
}
});
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),c_for_rec.call(null,loops,body),(new cljs.core.List(null,null,null,(1),null)))));
});

clojure.core.matrix.macros.c_for.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clojure.core.matrix.macros.c_for.cljs$lang$applyTo = (function (seq8697){
var G__8698 = cljs.core.first.call(null,seq8697);
var seq8697__$1 = cljs.core.next.call(null,seq8697);
var G__8699 = cljs.core.first.call(null,seq8697__$1);
var seq8697__$2 = cljs.core.next.call(null,seq8697__$1);
var G__8700 = cljs.core.first.call(null,seq8697__$2);
var seq8697__$3 = cljs.core.next.call(null,seq8697__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8698,G__8699,G__8700,seq8697__$3);
});

return null;
})()
;
clojure.core.matrix.macros.c_for.cljs$lang$macro = true;

var ret__4776__auto___8712 = /**
 * Macro to coerce to scalar value with an efficient dispatch sequence
 */
clojure.core.matrix.macros.scalar_coerce = (function clojure$core$matrix$macros$scalar_coerce(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__8711__auto__","x__8711__auto__",714881986,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__8711__auto__","x__8711__auto__",714881986,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__8711__auto__","x__8711__auto__",714881986,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core.matrix.protocols","get-0d","clojure.core.matrix.protocols/get-0d",1926949216,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__8711__auto__","x__8711__auto__",714881986,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
clojure.core.matrix.macros.scalar_coerce.cljs$lang$macro = true;

var ret__4776__auto___8713 = /**
 * Returns true if the parameter is an N-dimensional array of any type
 */
clojure.core.matrix.macros.array_QMARK_ = (function clojure$core$matrix$macros$array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core.matrix.protocols","is-scalar?","clojure.core.matrix.protocols/is-scalar?",-355472862,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null))))),null,(1),null)))));
});
clojure.core.matrix.macros.array_QMARK_.cljs$lang$macro = true;


//# sourceMappingURL=macros.js.map
