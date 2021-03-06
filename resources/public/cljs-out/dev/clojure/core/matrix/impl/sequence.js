// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojure.core.matrix.impl.sequence');
goog.require('cljs.core');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.implementations');
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.Keyword(null,"sequence","sequence",926807414);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Core.matrix implementation for Clojure ISeq objects"], null);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var m__$1 = this;
return clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,length);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix.call(null,cljs.core.PersistentVector.EMPTY,rows,columns);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,dims);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var m__$1 = this;
return clojure.core.matrix.protocols.coerce_param.call(null,cljs.core.PersistentVector.EMPTY,data);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var m__$1 = this;
return true;
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
var x__8781__auto__ = cljs.core.nth.call(null,m__$1,x);
if(typeof x__8781__auto__ === 'number'){
return x__8781__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__8781__auto__);

}
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
var row = cljs.core.nth.call(null,m__$1,x);
return clojure.core.matrix.protocols.get_1d.call(null,row,y);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
var temp__5455__auto__ = cljs.core.seq.call(null,indexes);
if(temp__5455__auto__){
var indexes__$1 = temp__5455__auto__;
var temp__5455__auto____$1 = cljs.core.next.call(null,indexes__$1);
if(temp__5455__auto____$1){
var next_indexes = temp__5455__auto____$1;
var mv = cljs.core.nth.call(null,m__$1,cljs.core.first.call(null,indexes__$1));
return clojure.core.matrix.protocols.get_nd.call(null,mv,next_indexes);
} else {
return cljs.core.nth.call(null,m__$1,cljs.core.first.call(null,indexes__$1));
}
} else {
return m__$1;
}
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,row,v){
var m__$1 = this;
return clojure.core.matrix.protocols.set_1d.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m__$1),row,v);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,row,column,v){
var m__$1 = this;
return clojure.core.matrix.protocols.set_2d.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m__$1),row,column,v);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var m__$1 = this;
return clojure.core.matrix.protocols.set_nd.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m__$1),indexes,v);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PBroadcast$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PBroadcast$broadcast$arity$2 = (function (m,new_shape){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m__$1),new_shape);
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PBroadcastLike$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PBroadcastLike$broadcast_like$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,a),clojure.core.matrix.protocols.get_shape.call(null,m__$1));
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceView$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceView$get_major_slice_view$arity$2 = (function (m,i){
var m__$1 = this;
return cljs.core.nth.call(null,m__$1,i);
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceSeq$get_major_slice_seq$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.vec.call(null,m__$1);
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMatrixRows$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMatrixRows$get_rows$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.vec.call(null,m__$1);
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMatrixColumns$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMatrixColumns$get_columns$arity$1 = (function (m){
var m__$1 = this;
var m__$2 = clojure.core.matrix.protocols.coerce_param.call(null,cljs.core.PersistentVector.EMPTY,m__$1);
return clojure.core.matrix.protocols.get_columns.call(null,m__$2);
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceSeq2$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceSeq2$get_slice_seq$arity$2 = (function (m,dimension){
var m__$1 = this;
var ldimension = cljs.core.long$.call(null,dimension);
if((ldimension === (0))){
return clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1);
} else {
if((ldimension < (0))){
throw cljs.core.ex_info.call(null,["Can't get slices of a negative dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dimension)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.mapv.call(null,((function (ldimension,m__$1){
return (function (p1__16904_SHARP_){
return clojure.core.matrix.protocols.get_slice.call(null,m__$1,dimension,p1__16904_SHARP_);
});})(ldimension,m__$1))
,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m__$1,dimension)));

}
}
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PConversion$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1 = (function (m){
var m__$1 = this;
if((clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) > (0))){
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,m__$1);
} else {
return cljs.core.vec.call(null,m__$1);
}
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) + (1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
console.log(["shape of seq: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m__$1)].join(''));

return cljs.core.cons.call(null,cljs.core.count.call(null,m__$1),clojure.core.matrix.protocols.get_shape.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.first.call(null,m__$1),(x - (1)));
}
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_seq$arity$1 = (function (m){
var m__$1 = this;
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1))))){
return m__$1;
} else {
return cljs.core.mapcat.call(null,clojure.core.matrix.protocols.element_seq,m__$1);
}
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$2 = (function (m,f){
var m__$1 = this;
return cljs.core.mapv.call(null,((function (m__$1){
return (function (p1__16905_SHARP_){
return clojure.core.matrix.protocols.element_map.call(null,p1__16905_SHARP_,f);
});})(m__$1))
,m__$1);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$3 = (function (m,f,a){
var m__$1 = this;
var vec__16911 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__16911,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__16911,(1),null);
return cljs.core.mapv.call(null,((function (vec__16911,m__$2,a__$1,m__$1){
return (function (p1__16906_SHARP_,p2__16907_SHARP_){
return clojure.core.matrix.protocols.element_map.call(null,p1__16906_SHARP_,f,p2__16907_SHARP_);
});})(vec__16911,m__$2,a__$1,m__$1))
,m__$2,clojure.core.matrix.protocols.get_major_slice_seq.call(null,a__$1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var vec__16914 = cljs.core.apply.call(null,clojure.core.matrix.protocols.broadcast_compatible,m__$1,a,more);
var seq__16915 = cljs.core.seq.call(null,vec__16914);
var first__16916 = cljs.core.first.call(null,seq__16915);
var seq__16915__$1 = cljs.core.next.call(null,seq__16915);
var m__$2 = first__16916;
var first__16916__$1 = cljs.core.first.call(null,seq__16915__$1);
var seq__16915__$2 = cljs.core.next.call(null,seq__16915__$1);
var a__$1 = first__16916__$1;
var more__$1 = seq__16915__$2;
return cljs.core.mapv.call(null,((function (vec__16914,seq__16915,first__16916,seq__16915__$1,m__$2,first__16916__$1,seq__16915__$2,a__$1,more__$1,m__$1){
return (function (p1__16908_SHARP_,p2__16909_SHARP_,p3__16910_SHARP_){
return clojure.core.matrix.protocols.element_map.call(null,p1__16908_SHARP_,f,p2__16909_SHARP_,p3__16910_SHARP_);
});})(vec__16914,seq__16915,first__16916,seq__16915__$1,m__$2,first__16916__$1,seq__16915__$2,a__$1,more__$1,m__$1))
,m__$2,clojure.core.matrix.protocols.get_major_slice_seq.call(null,a__$1),cljs.core.map.call(null,clojure.core.matrix.protocols.get_major_slice_seq,more__$1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
throw cljs.core.ex_info.call(null,"Sequence arrays are not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
throw cljs.core.ex_info.call(null,"Sequence arrays are not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
throw cljs.core.ex_info.call(null,"Sequence arrays are not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$2 = (function (m,f){
var m__$1 = this;
return cljs.core.reduce.call(null,f,cljs.core.mapcat.call(null,clojure.core.matrix.protocols.element_seq,m__$1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$3 = (function (m,f,init){
var m__$1 = this;
return cljs.core.reduce.call(null,f,init,cljs.core.mapcat.call(null,clojure.core.matrix.protocols.element_seq,m__$1));
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$2 = (function (ms,f){
var ms__$1 = this;
return cljs.core.mapv.call(null,((function (ms__$1){
return (function (i,m){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (ms__$1){
return (function() { 
var G__16929__delegate = function (p1__16917_SHARP_,rest__16918_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__16917_SHARP_),rest__16918_SHARP_);
};
var G__16929 = function (p1__16917_SHARP_,var_args){
var rest__16918_SHARP_ = null;
if (arguments.length > 1) {
var G__16930__i = 0, G__16930__a = new Array(arguments.length -  1);
while (G__16930__i < G__16930__a.length) {G__16930__a[G__16930__i] = arguments[G__16930__i + 1]; ++G__16930__i;}
  rest__16918_SHARP_ = new cljs.core.IndexedSeq(G__16930__a,0,null);
} 
return G__16929__delegate.call(this,p1__16917_SHARP_,rest__16918_SHARP_);};
G__16929.cljs$lang$maxFixedArity = 1;
G__16929.cljs$lang$applyTo = (function (arglist__16931){
var p1__16917_SHARP_ = cljs.core.first(arglist__16931);
var rest__16918_SHARP_ = cljs.core.rest(arglist__16931);
return G__16929__delegate(p1__16917_SHARP_,rest__16918_SHARP_);
});
G__16929.cljs$core$IFn$_invoke$arity$variadic = G__16929__delegate;
return G__16929;
})()
;})(ms__$1))
);
});})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$3 = (function (ms,f,as){
var ms__$1 = this;
var vec__16923 = clojure.core.matrix.protocols.broadcast_compatible.call(null,ms__$1,as);
var ms__$2 = cljs.core.nth.call(null,vec__16923,(0),null);
var as__$1 = cljs.core.nth.call(null,vec__16923,(1),null);
return cljs.core.mapv.call(null,((function (vec__16923,ms__$2,as__$1,ms__$1){
return (function (i,m,a){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (vec__16923,ms__$2,as__$1,ms__$1){
return (function() { 
var G__16932__delegate = function (p1__16919_SHARP_,rest__16920_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__16919_SHARP_),rest__16920_SHARP_);
};
var G__16932 = function (p1__16919_SHARP_,var_args){
var rest__16920_SHARP_ = null;
if (arguments.length > 1) {
var G__16933__i = 0, G__16933__a = new Array(arguments.length -  1);
while (G__16933__i < G__16933__a.length) {G__16933__a[G__16933__i] = arguments[G__16933__i + 1]; ++G__16933__i;}
  rest__16920_SHARP_ = new cljs.core.IndexedSeq(G__16933__a,0,null);
} 
return G__16932__delegate.call(this,p1__16919_SHARP_,rest__16920_SHARP_);};
G__16932.cljs$lang$maxFixedArity = 1;
G__16932.cljs$lang$applyTo = (function (arglist__16934){
var p1__16919_SHARP_ = cljs.core.first(arglist__16934);
var rest__16920_SHARP_ = cljs.core.rest(arglist__16934);
return G__16932__delegate(p1__16919_SHARP_,rest__16920_SHARP_);
});
G__16932.cljs$core$IFn$_invoke$arity$variadic = G__16932__delegate;
return G__16932;
})()
;})(vec__16923,ms__$2,as__$1,ms__$1))
,a);
});})(vec__16923,ms__$2,as__$1,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$2)),ms__$2,clojure.core.matrix.protocols.get_major_slice_seq.call(null,as__$1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$4 = (function (ms,f,as,more){
var ms__$1 = this;
var vec__16926 = cljs.core.apply.call(null,clojure.core.matrix.protocols.broadcast_compatible,ms__$1,as,more);
var seq__16927 = cljs.core.seq.call(null,vec__16926);
var first__16928 = cljs.core.first.call(null,seq__16927);
var seq__16927__$1 = cljs.core.next.call(null,seq__16927);
var ms__$2 = first__16928;
var first__16928__$1 = cljs.core.first.call(null,seq__16927__$1);
var seq__16927__$2 = cljs.core.next.call(null,seq__16927__$1);
var as__$1 = first__16928__$1;
var more__$1 = seq__16927__$2;
return cljs.core.mapv.call(null,((function (vec__16926,seq__16927,first__16928,seq__16927__$1,ms__$2,first__16928__$1,seq__16927__$2,as__$1,more__$1,ms__$1){
return (function() { 
var G__16935__delegate = function (i,m,a,mr){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (vec__16926,seq__16927,first__16928,seq__16927__$1,ms__$2,first__16928__$1,seq__16927__$2,as__$1,more__$1,ms__$1){
return (function() { 
var G__16936__delegate = function (p1__16921_SHARP_,rest__16922_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__16921_SHARP_),rest__16922_SHARP_);
};
var G__16936 = function (p1__16921_SHARP_,var_args){
var rest__16922_SHARP_ = null;
if (arguments.length > 1) {
var G__16937__i = 0, G__16937__a = new Array(arguments.length -  1);
while (G__16937__i < G__16937__a.length) {G__16937__a[G__16937__i] = arguments[G__16937__i + 1]; ++G__16937__i;}
  rest__16922_SHARP_ = new cljs.core.IndexedSeq(G__16937__a,0,null);
} 
return G__16936__delegate.call(this,p1__16921_SHARP_,rest__16922_SHARP_);};
G__16936.cljs$lang$maxFixedArity = 1;
G__16936.cljs$lang$applyTo = (function (arglist__16938){
var p1__16921_SHARP_ = cljs.core.first(arglist__16938);
var rest__16922_SHARP_ = cljs.core.rest(arglist__16938);
return G__16936__delegate(p1__16921_SHARP_,rest__16922_SHARP_);
});
G__16936.cljs$core$IFn$_invoke$arity$variadic = G__16936__delegate;
return G__16936;
})()
;})(vec__16926,seq__16927,first__16928,seq__16927__$1,ms__$2,first__16928__$1,seq__16927__$2,as__$1,more__$1,ms__$1))
,a,mr);
};
var G__16935 = function (i,m,a,var_args){
var mr = null;
if (arguments.length > 3) {
var G__16939__i = 0, G__16939__a = new Array(arguments.length -  3);
while (G__16939__i < G__16939__a.length) {G__16939__a[G__16939__i] = arguments[G__16939__i + 3]; ++G__16939__i;}
  mr = new cljs.core.IndexedSeq(G__16939__a,0,null);
} 
return G__16935__delegate.call(this,i,m,a,mr);};
G__16935.cljs$lang$maxFixedArity = 3;
G__16935.cljs$lang$applyTo = (function (arglist__16940){
var i = cljs.core.first(arglist__16940);
arglist__16940 = cljs.core.next(arglist__16940);
var m = cljs.core.first(arglist__16940);
arglist__16940 = cljs.core.next(arglist__16940);
var a = cljs.core.first(arglist__16940);
var mr = cljs.core.rest(arglist__16940);
return G__16935__delegate(i,m,a,mr);
});
G__16935.cljs$core$IFn$_invoke$arity$variadic = G__16935__delegate;
return G__16935;
})()
;})(vec__16926,seq__16927,first__16928,seq__16927__$1,ms__$2,first__16928__$1,seq__16927__$2,as__$1,more__$1,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$2)),ms__$2,clojure.core.matrix.protocols.get_major_slice_seq.call(null,as__$1),cljs.core.map.call(null,clojure.core.matrix.protocols.get_major_slice_seq,more__$1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
throw cljs.core.ex_info.call(null,"Sequence arrays are not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
throw cljs.core.ex_info.call(null,"Sequence arrays are not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
throw cljs.core.ex_info.call(null,"Sequence arrays are not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=sequence.js.map
