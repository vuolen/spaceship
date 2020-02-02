// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojure.core.matrix.utils');
goog.require('cljs.core');
clojure.core.matrix.utils.class$ = cljs.core.type;
var ret__4776__auto___8797 = (function (){
/**
 * Throws an error with the provided message(s)
 */
clojure.core.matrix.utils.error = (function clojure$core$matrix$utils$error(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8798 = arguments.length;
var i__4731__auto___8799 = (0);
while(true){
if((i__4731__auto___8799 < len__4730__auto___8798)){
args__4736__auto__.push((arguments[i__4731__auto___8799]));

var G__8800 = (i__4731__auto___8799 + (1));
i__4731__auto___8799 = G__8800;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return clojure.core.matrix.utils.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

clojure.core.matrix.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),vals))),null,(1),null))))),null,(1),null)))));
});

clojure.core.matrix.utils.error.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clojure.core.matrix.utils.error.cljs$lang$applyTo = (function (seq8794){
var G__8795 = cljs.core.first.call(null,seq8794);
var seq8794__$1 = cljs.core.next.call(null,seq8794);
var G__8796 = cljs.core.first.call(null,seq8794__$1);
var seq8794__$2 = cljs.core.next.call(null,seq8794__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8795,G__8796,seq8794__$2);
});

return null;
})()
;
clojure.core.matrix.utils.error.cljs$lang$macro = true;

var ret__4776__auto___8810 = (function (){
/**
 * loops over a set of values, binding index-sym to the 0-based index of each value
 */
clojure.core.matrix.utils.doseq_indexed = (function clojure$core$matrix$utils$doseq_indexed(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8811 = arguments.length;
var i__4731__auto___8812 = (0);
while(true){
if((i__4731__auto___8812 < len__4730__auto___8811)){
args__4736__auto__.push((arguments[i__4731__auto___8812]));

var G__8813 = (i__4731__auto___8812 + (1));
i__4731__auto___8812 = G__8813;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__8806,code){
var vec__8807 = p__8806;
var val_sym = cljs.core.nth.call(null,vec__8807,(0),null);
var values = cljs.core.nth.call(null,vec__8807,(1),null);
var index_sym = cljs.core.nth.call(null,vec__8807,(2),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"vals__8801__auto__","vals__8801__auto__",1602453383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,values,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,index_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","long","cljs.core/long",241154833,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"vals__8801__auto__","vals__8801__auto__",1602453383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,val_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"vals__8801__auto__","vals__8801__auto__",1602453383,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),code,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"vals__8801__auto__","vals__8801__auto__",1602453383,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),null,(1),null)),(new cljs.core.List(null,index_sym,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)))));
});

clojure.core.matrix.utils.doseq_indexed.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clojure.core.matrix.utils.doseq_indexed.cljs$lang$applyTo = (function (seq8802){
var G__8803 = cljs.core.first.call(null,seq8802);
var seq8802__$1 = cljs.core.next.call(null,seq8802);
var G__8804 = cljs.core.first.call(null,seq8802__$1);
var seq8802__$2 = cljs.core.next.call(null,seq8802__$1);
var G__8805 = cljs.core.first.call(null,seq8802__$2);
var seq8802__$3 = cljs.core.next.call(null,seq8802__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8803,G__8804,G__8805,seq8802__$3);
});

return null;
})()
;
clojure.core.matrix.utils.doseq_indexed.cljs$lang$macro = true;

/**
 * returns true if the given object is a valid core.matrix array shape.
 */
clojure.core.matrix.utils.valid_shape_QMARK_ = (function clojure$core$matrix$utils$valid_shape_QMARK_(shape){
try{return (((cljs.core.count.call(null,shape) >= (0))) && (cljs.core.every_QMARK_.call(null,cljs.core.integer_QMARK_,shape)));
}catch (e8815){if((e8815 instanceof Error)){
var t = e8815;
return false;
} else {
throw e8815;

}
}});
/**
 * Returns true if two shapes are the same.
 */
clojure.core.matrix.utils.same_shape_object_QMARK_ = (function clojure$core$matrix$utils$same_shape_object_QMARK_(sa,sb){
if((sa === sb)){
return true;
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,sa),cljs.core.count.call(null,sb))){
return false;
} else {
var ca = cljs.core.count.call(null,sa);
var i = (0);
while(true){
if((i >= ca)){
return true;
} else {
if((cljs.core.nth.call(null,sa,i) === cljs.core.nth.call(null,sb,i))){
var G__8816 = (i + (1));
i = G__8816;
continue;
} else {
return false;
}
}
break;
}

}
}
});
/**
 * Returns the logical xor of a set of values, considered as booleans
 */
clojure.core.matrix.utils.xor = (function clojure$core$matrix$utils$xor(var_args){
var G__8821 = arguments.length;
switch (G__8821) {
case 0:
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___8823 = arguments.length;
var i__4731__auto___8824 = (0);
while(true){
if((i__4731__auto___8824 < len__4730__auto___8823)){
args_arr__4751__auto__.push((arguments[i__4731__auto___8824]));

var G__8825 = (i__4731__auto___8824 + (1));
i__4731__auto___8824 = G__8825;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$0 = (function (){
return false;
});

clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$1 = (function (x){
return cljs.core.boolean$.call(null,x);
});

clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(cljs.core.truth_(x)){
return cljs.core.not.call(null,y);
} else {
return cljs.core.boolean$.call(null,y);
}
});

clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var p = clojure.core.matrix.utils.xor.call(null,x,y);
var ss = cljs.core.seq.call(null,more);
while(true){
if(ss){
var G__8826 = (cljs.core.truth_(cljs.core.first.call(null,ss))?(!(p)):p);
var G__8827 = cljs.core.next.call(null,ss);
p = G__8826;
ss = G__8827;
continue;
} else {
return p;
}
break;
}
});

/** @this {Function} */
clojure.core.matrix.utils.xor.cljs$lang$applyTo = (function (seq8818){
var G__8819 = cljs.core.first.call(null,seq8818);
var seq8818__$1 = cljs.core.next.call(null,seq8818);
var G__8820 = cljs.core.first.call(null,seq8818__$1);
var seq8818__$2 = cljs.core.next.call(null,seq8818__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8819,G__8820,seq8818__$2);
});

clojure.core.matrix.utils.xor.cljs$lang$maxFixedArity = (2);

/**
 * Returns a copy of a double array
 */
clojure.core.matrix.utils.copy_double_array = (function clojure$core$matrix$utils$copy_double_array(arr){
return arr.slice((0));
});
/**
 * Returns a copy of a long array
 */
clojure.core.matrix.utils.copy_long_array = (function clojure$core$matrix$utils$copy_long_array(arr){
return arr.slice((0));
});
/**
 * Returns a copy of a long array
 */
clojure.core.matrix.utils.copy_object_array = (function clojure$core$matrix$utils$copy_object_array(arr){
return arr.slice((0));
});
/**
 * Returns a range of longs in a long[] array
 */
clojure.core.matrix.utils.long_range = (function clojure$core$matrix$utils$long_range(end){
var end__$1 = (end | (0));
var arr = cljs.core.long_array.call(null,end__$1);
var n__4607__auto___8828 = end__$1;
var i_8829 = (0);
while(true){
if((i_8829 < n__4607__auto___8828)){
(arr[i_8829] = cljs.core.long$.call(null,i_8829));

var G__8830 = (i_8829 + (1));
i_8829 = G__8830;
continue;
} else {
}
break;
}

return arr;
});
/**
 * Creates a long array with the specified values.
 */
clojure.core.matrix.utils.long_array_of = (function clojure$core$matrix$utils$long_array_of(var_args){
var G__8835 = arguments.length;
switch (G__8835) {
case 0:
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___8837 = arguments.length;
var i__4731__auto___8838 = (0);
while(true){
if((i__4731__auto___8838 < len__4730__auto___8837)){
args_arr__4751__auto__.push((arguments[i__4731__auto___8838]));

var G__8839 = (i__4731__auto___8838 + (1));
i__4731__auto___8838 = G__8839;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.long_array.call(null,(0));
});

clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$1 = (function (a){
var arr = cljs.core.long_array.call(null,(1));
(arr[(0)] = cljs.core.long$.call(null,a));

return arr;
});

clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var arr = cljs.core.long_array.call(null,(2));
(arr[(0)] = cljs.core.long$.call(null,a));

(arr[(1)] = cljs.core.long$.call(null,b));

return arr;
});

clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
var arr = cljs.core.long_array.call(null,((2) + cljs.core.count.call(null,more)));
(arr[(0)] = cljs.core.long$.call(null,a));

(arr[(1)] = cljs.core.long$.call(null,b));

clojure.core.matrix.utils.doseq_indexed.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.utils.x,more,clojure.core.matrix.utils.i], null),(arr[((2) + clojure.core.matrix.utils.i)] = cljs.core.long$.call(null,clojure.core.matrix.utils.x)));

return arr;
});

/** @this {Function} */
clojure.core.matrix.utils.long_array_of.cljs$lang$applyTo = (function (seq8832){
var G__8833 = cljs.core.first.call(null,seq8832);
var seq8832__$1 = cljs.core.next.call(null,seq8832);
var G__8834 = cljs.core.first.call(null,seq8832__$1);
var seq8832__$2 = cljs.core.next.call(null,seq8832__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8833,G__8834,seq8832__$2);
});

clojure.core.matrix.utils.long_array_of.cljs$lang$maxFixedArity = (2);

/**
 * Creates a long array with the specified values.
 */
clojure.core.matrix.utils.object_array_of = (function clojure$core$matrix$utils$object_array_of(var_args){
var G__8844 = arguments.length;
switch (G__8844) {
case 0:
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___8846 = arguments.length;
var i__4731__auto___8847 = (0);
while(true){
if((i__4731__auto___8847 < len__4730__auto___8846)){
args_arr__4751__auto__.push((arguments[i__4731__auto___8847]));

var G__8848 = (i__4731__auto___8847 + (1));
i__4731__auto___8847 = G__8848;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.object_array.call(null,(0));
});

clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$1 = (function (a){
var arr = cljs.core.object_array.call(null,(1));
(arr[(0)] = a);

return arr;
});

clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var arr = cljs.core.object_array.call(null,(2));
(arr[(0)] = a);

(arr[(1)] = b);

return arr;
});

clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
var arr = cljs.core.object_array.call(null,((2) + cljs.core.count.call(null,more)));
(arr[(0)] = a);

(arr[(1)] = b);

clojure.core.matrix.utils.doseq_indexed.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.utils.x,more,clojure.core.matrix.utils.i], null),(arr[((2) + clojure.core.matrix.utils.i)] = clojure.core.matrix.utils.x));

return arr;
});

/** @this {Function} */
clojure.core.matrix.utils.object_array_of.cljs$lang$applyTo = (function (seq8841){
var G__8842 = cljs.core.first.call(null,seq8841);
var seq8841__$1 = cljs.core.next.call(null,seq8841);
var G__8843 = cljs.core.first.call(null,seq8841__$1);
var seq8841__$2 = cljs.core.next.call(null,seq8841__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8842,G__8843,seq8841__$2);
});

clojure.core.matrix.utils.object_array_of.cljs$lang$maxFixedArity = (2);

/**
 * Returns the index of a value in a vector, or nil if not present
 */
clojure.core.matrix.utils.find_index = (function clojure$core$matrix$utils$find_index(v,value){
var n = cljs.core.count.call(null,v);
var i = (0);
while(true){
if((i < n)){
if(cljs.core._EQ_.call(null,value,cljs.core.nth.call(null,v,i))){
return i;
} else {
var G__8849 = (i + (1));
i = G__8849;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Returns a sequence of all possible index vectors for a given shape, in row-major order
 */
clojure.core.matrix.utils.base_index_seq_for_shape = (function clojure$core$matrix$utils$base_index_seq_for_shape(sh){
var gen = (function clojure$core$matrix$utils$base_index_seq_for_shape_$_gen(prefix,rem){
if(cljs.core.truth_(rem)){
var nrem = cljs.core.next.call(null,rem);
return cljs.core.mapcat.call(null,((function (nrem){
return (function (p1__8850_SHARP_){
return clojure$core$matrix$utils$base_index_seq_for_shape_$_gen.call(null,cljs.core.conj.call(null,prefix,p1__8850_SHARP_),nrem);
});})(nrem))
,cljs.core.range.call(null,cljs.core.first.call(null,rem)));
} else {
return (new cljs.core.List(null,prefix,null,(1),null));
}
});
return gen.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.seq.call(null,sh));
});
/**
 * Returns the smallest shape that both shapes a and b can broadcast to, or nil if the the shapes
 * are not compatible.
 */
clojure.core.matrix.utils.broadcast_shape_STAR_ = (function clojure$core$matrix$utils$broadcast_shape_STAR_(var_args){
var G__8852 = arguments.length;
switch (G__8852) {
case 2:
return clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(cljs.core.empty_QMARK_.call(null,a)){
var or__4131__auto__ = b;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.List.EMPTY;
}
} else {
if(cljs.core.empty_QMARK_.call(null,b)){
return a;
} else {
if(((1) === cljs.core.first.call(null,a))){
return clojure.core.matrix.utils.broadcast_shape_STAR_.call(null,cljs.core.first.call(null,b),cljs.core.next.call(null,a),cljs.core.next.call(null,b));
} else {
if(((1) === cljs.core.first.call(null,b))){
return clojure.core.matrix.utils.broadcast_shape_STAR_.call(null,cljs.core.first.call(null,a),cljs.core.next.call(null,a),cljs.core.next.call(null,b));
} else {
if((cljs.core.first.call(null,a) === cljs.core.first.call(null,b))){
return clojure.core.matrix.utils.broadcast_shape_STAR_.call(null,cljs.core.first.call(null,a),cljs.core.next.call(null,a),cljs.core.next.call(null,b));
} else {
return null;

}
}
}
}
}
});

clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (prefix,a,b){
if(cljs.core.truth_((function (){var or__4131__auto__ = a;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return b;
}
})())){
var r = clojure.core.matrix.utils.broadcast_shape_STAR_.call(null,a,b);
if(cljs.core.truth_(r)){
return cljs.core.cons.call(null,prefix,r);
} else {
return null;
}
} else {
return cljs.core.cons.call(null,prefix,null);
}
});

clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Returns the smallest compatible shape that a set of shapes can all broadcast to.
 * Returns nil if this is not possible (i.e. the shapes are incompatible).
 * Returns an empty list if both shape sequences are empty (i.e. represent scalars)
 */
clojure.core.matrix.utils.broadcast_shape = (function clojure$core$matrix$utils$broadcast_shape(var_args){
var G__8855 = arguments.length;
switch (G__8855) {
case 1:
return clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var a__$1 = cljs.core.seq.call(null,cljs.core.reverse.call(null,a));
var b__$1 = cljs.core.seq.call(null,cljs.core.reverse.call(null,b));
var r = clojure.core.matrix.utils.broadcast_shape_STAR_.call(null,a__$1,b__$1);
if(cljs.core.truth_(r)){
return cljs.core.reverse.call(null,r);
} else {
return null;
}
});

clojure.core.matrix.utils.broadcast_shape.cljs$lang$maxFixedArity = 2;

/**
 * Returns truthy if the first shape a can be broadcast to the shape b
 */
clojure.core.matrix.utils.can_broadcast = (function clojure$core$matrix$utils$can_broadcast(from_shape,to_shape){
throw cljs.core.ex_info.call(null,"TODO: not yet implemented",cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Returns true if an argument is a protocol'
 */
clojure.core.matrix.utils.protocol_QMARK_ = (function clojure$core$matrix$utils$protocol_QMARK_(p){
var and__4120__auto__ = cljs.core.map_QMARK_.call(null,p);
if(and__4120__auto__){
var and__4120__auto____$1 = new cljs.core.Keyword(null,"on-interface","on-interface",1993482222).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(and__4120__auto____$1)){
return new cljs.core.Keyword(null,"on-interface","on-interface",1993482222).cljs$core$IFn$_invoke$arity$1(p).isInterface();
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * Transform MapEntry to just map with some additional fields
 */
clojure.core.matrix.utils.enhance_protocol_kv = (function clojure$core$matrix$utils$enhance_protocol_kv(p__8857){
var vec__8858 = p__8857;
var name = cljs.core.nth.call(null,vec__8858,(0),null);
var p = cljs.core.nth.call(null,vec__8858,(1),null);
var m = cljs.core.meta.call(null,new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p)));
return cljs.core.assoc.call(null,cljs.core.deref.call(null,p),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"name","name",1843675177),name);
});
clojure.core.matrix.utils.update_indexed = (function clojure$core$matrix$utils$update_indexed(xs,idxs,f){
return cljs.core.reduce.call(null,(function (p1__8862_SHARP_,p2__8863_SHARP_){
return cljs.core.assoc.call(null,p1__8862_SHARP_,p2__8863_SHARP_,f.call(null,p2__8863_SHARP_,cljs.core.get.call(null,p1__8862_SHARP_,p2__8863_SHARP_)));
}),xs,idxs);
});

//# sourceMappingURL=utils.js.map
