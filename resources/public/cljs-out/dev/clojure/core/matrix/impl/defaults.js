// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojure.core.matrix.impl.defaults');
goog.require('cljs.core');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.impl.wrappers');
goog.require('clojure.core.matrix.impl.mathsops');
goog.require('clojure.core.matrix.implementations');
goog.require('clojure.core.matrix.impl.double_array');
goog.require('clojure.core.matrix.impl.common');
goog.require('clojure.core.matrix.utils');
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = null;
/**
 * Returns the total count of elements in an array
 */
clojure.core.matrix.impl.defaults.calc_element_count = (function clojure$core$matrix$impl$defaults$calc_element_count(m){
var temp__5455__auto__ = clojure.core.matrix.protocols.get_shape.call(null,m);
if(cljs.core.truth_(temp__5455__auto__)){
var sh = temp__5455__auto__;
return cljs.core.reduce.call(null,cljs.core._STAR_,sh);
} else {
return (1);
}
});
/**
 * Constructs a new mutable matrix with the given data.
 */
clojure.core.matrix.impl.defaults.construct_mutable_matrix = (function clojure$core$matrix$impl$defaults$construct_mutable_matrix(m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
var type = clojure.core.matrix.protocols.element_type.call(null,m);
var double_QMARK_ = cljs.core._EQ_.call(null,Number,type);
if((dims === (0))){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,clojure.core.matrix.protocols.get_0d.call(null,m));
} else {
if((((dims === (1))) && (double_QMARK_))){
return clojure.core.matrix.protocols.coerce_param.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"aljabr","aljabr",1424034715)),m);
} else {
if(double_QMARK_){
return clojure.core.matrix.protocols.coerce_param.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"aljabr","aljabr",1424034715)),m);
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"aljabr","aljabr",1424034715)),m);

}
}
}
});
goog.object.set(clojure.core.matrix.protocols.PImplementation,"object",true);

goog.object.set(clojure.core.matrix.protocols.implementation_key,"object",(function (m){
return new cljs.core.Keyword(null,"default","default",-1987822328);
}));

goog.object.set(clojure.core.matrix.protocols.meta_info,"object",(function (m){
return cljs.core.PersistentArrayMap.EMPTY;
}));

goog.object.set(clojure.core.matrix.protocols.construct_matrix,"object",(function (m,data){
return clojure.core.matrix.protocols.construct_matrix.call(null,cljs.core.PersistentVector.EMPTY,data);
}));

goog.object.set(clojure.core.matrix.protocols.new_vector,"object",(function (m,length){
return clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,length);
}));

goog.object.set(clojure.core.matrix.protocols.new_matrix,"object",(function (m,rows,columns){
return clojure.core.matrix.protocols.new_matrix.call(null,cljs.core.PersistentVector.EMPTY,rows,columns);
}));

goog.object.set(clojure.core.matrix.protocols.new_matrix_nd,"object",(function (m,shape){
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,shape);
}));

goog.object.set(clojure.core.matrix.protocols.supports_dimensionality_QMARK_,"object",(function (m,dimensions){
return true;
}));

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var m__$1 = this;
return clojure.core.matrix.protocols.meta_info.call(null,clojure.core.matrix.implementations.get_canonical_object_or_throw.call(null,m__$1));
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var m__$1 = this;
return clojure.core.matrix.protocols.construct_matrix.call(null,clojure.core.matrix.implementations.get_canonical_object_or_throw.call(null,m__$1),data);
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var m__$1 = this;
return clojure.core.matrix.protocols.new_vector.call(null,clojure.core.matrix.implementations.get_canonical_object_or_throw.call(null,m__$1),length);
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix.call(null,clojure.core.matrix.implementations.get_canonical_object_or_throw.call(null,m__$1),rows,columns);
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,shape){
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix_nd.call(null,clojure.core.matrix.implementations.get_canonical_object_or_throw.call(null,m__$1),shape);
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dimensions){
var m__$1 = this;
return clojure.core.matrix.protocols.supports_dimensionality_QMARK_.call(null,clojure.core.matrix.implementations.get_canonical_object_or_throw.call(null,m__$1),dimensions);
});
goog.object.set(clojure.core.matrix.protocols.PSparse,"null",true);

goog.object.set(clojure.core.matrix.protocols.sparse_coerce,"null",(function (m,data){
return clojure.core.matrix.protocols.sparse.call(null,data);
}));

goog.object.set(clojure.core.matrix.protocols.sparse,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PSparse,"object",true);

goog.object.set(clojure.core.matrix.protocols.sparse_coerce,"object",(function (m,data){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.sparse,"object",(function (m){
return m;
}));
goog.object.set(clojure.core.matrix.protocols.PNative,"null",true);

goog.object.set(clojure.core.matrix.protocols.native$,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.native_QMARK_,"null",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.PNative,"object",true);

goog.object.set(clojure.core.matrix.protocols.native$,"object",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.native_QMARK_,"object",(function (m){
return false;
}));
goog.object.set(clojure.core.matrix.protocols.PNewSparseArray,"object",true);

goog.object.set(clojure.core.matrix.protocols.new_sparse_array,"object",(function (m,shape){
return null;
}));
goog.object.set(clojure.core.matrix.protocols.PDense,"null",true);

goog.object.set(clojure.core.matrix.protocols.dense_coerce,"null",(function (m,data){
return clojure.core.matrix.protocols.dense.call(null,data);
}));

goog.object.set(clojure.core.matrix.protocols.dense,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PDense,"object",true);

goog.object.set(clojure.core.matrix.protocols.dense_coerce,"object",(function (m,data){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.dense,"object",(function (m){
return m;
}));
goog.object.set(clojure.core.matrix.protocols.PIndexedAccess,"null",true);

goog.object.set(clojure.core.matrix.protocols.get_1d,"null",(function (m,x){
throw cljs.core.ex_info.call(null,"Can't do 1D get on nil",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.get_2d,"null",(function (m,x,y){
throw cljs.core.ex_info.call(null,"Can't do 2D get on nil",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.get_nd,"null",(function (m,indexes){
var temp__5455__auto__ = cljs.core.seq.call(null,indexes);
if(temp__5455__auto__){
var s = temp__5455__auto__;
throw cljs.core.ex_info.call(null,["Can't do ND get on nil with indexes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
}));

goog.object.set(clojure.core.matrix.protocols.PIndexedAccess,"number",true);

goog.object.set(clojure.core.matrix.protocols.get_1d,"number",(function (m,x){
throw cljs.core.ex_info.call(null,"Can't do 1D get on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.get_2d,"number",(function (m,x,y){
throw cljs.core.ex_info.call(null,"Can't do 2D get on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.get_nd,"number",(function (m,indexes){
var temp__5455__auto__ = cljs.core.seq.call(null,indexes);
if(temp__5455__auto__){
var s = temp__5455__auto__;
throw cljs.core.ex_info.call(null,["Can't do ND get on a scalar number with indexes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
}));

goog.object.set(clojure.core.matrix.protocols.PIndexedAccess,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_1d,"object",(function (m,x){
if((Array === m.constructor)){
return clojure.core.matrix.protocols.get_0d.call(null,cljs.core.nth.call(null,m,x));
} else {
return clojure.core.matrix.protocols.get_nd.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));

}
}));

goog.object.set(clojure.core.matrix.protocols.get_2d,"object",(function (m,x,y){
if((Array === m.constructor)){
return clojure.core.matrix.protocols.get_1d.call(null,cljs.core.nth.call(null,m,x),y);
} else {
return clojure.core.matrix.protocols.get_nd.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

}
}));

goog.object.set(clojure.core.matrix.protocols.get_nd,"object",(function (m,indexes){
if(cljs.core.seq.call(null,indexes)){
if((Array === m.constructor)){
return clojure.core.matrix.protocols.get_nd.call(null,cljs.core.nth.call(null,m,cljs.core.first.call(null,indexes)),cljs.core.next.call(null,indexes));
} else {
throw cljs.core.ex_info.call(null,["Indexed get failed, not defined for:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
} else {
return clojure.core.matrix.protocols.get_0d.call(null,m);
}
}));

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
return cljs.core.nth.call(null,m__$1,x);
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
if(cljs.core.seqable_QMARK_.call(null,cljs.core.first.call(null,m__$1))){
return clojure.core.matrix.protocols.get_1d.call(null,cljs.core.nth.call(null,m__$1,x),y);
} else {
throw cljs.core.ex_info.call(null,"Can't do 2D get on a lazy seq",cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
if(cljs.core.seq.call(null,indexes)){
return clojure.core.matrix.protocols.get_nd.call(null,cljs.core.nth.call(null,m__$1,cljs.core.first.call(null,indexes)),cljs.core.next.call(null,indexes));
} else {
return clojure.core.matrix.protocols.get_0d.call(null,m__$1);
}
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
return cljs.core.nth.call(null,m__$1,x);
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
throw cljs.core.ex_info.call(null,"Can't do 2D get on a range",cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
if(cljs.core.seq.call(null,indexes)){
return clojure.core.matrix.protocols.get_nd.call(null,cljs.core.nth.call(null,m__$1,cljs.core.first.call(null,indexes)),cljs.core.next.call(null,indexes));
} else {
return clojure.core.matrix.protocols.get_0d.call(null,m__$1);
}
});
goog.object.set(clojure.core.matrix.protocols.PArrayMetrics,"null",true);

goog.object.set(clojure.core.matrix.protocols.nonzero_count,"null",(function (m){
return (1);
}));

goog.object.set(clojure.core.matrix.protocols.PArrayMetrics,"number",true);

goog.object.set(clojure.core.matrix.protocols.nonzero_count,"number",(function (m){
if((m === (0))){
return (0);
} else {
return (1);
}
}));

goog.object.set(clojure.core.matrix.protocols.PArrayMetrics,"object",true);

goog.object.set(clojure.core.matrix.protocols.nonzero_count,"object",(function (m){
return clojure.core.matrix.protocols.element_reduce.call(null,m,(function (cnt,e){
if((e === (0))){
return cnt;
} else {
return (cnt + (1));
}
}),(0));
}));
goog.object.set(clojure.core.matrix.protocols.PZeroDimensionConstruction,"null",true);

goog.object.set(clojure.core.matrix.protocols.new_scalar_array,"null",(function() {
var G__19827 = null;
var G__19827__1 = (function (m){
return 0.0;
});
var G__19827__2 = (function (m,value){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,value);
});
G__19827 = function(m,value){
switch(arguments.length){
case 1:
return G__19827__1.call(this,m);
case 2:
return G__19827__2.call(this,m,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19827.cljs$core$IFn$_invoke$arity$1 = G__19827__1;
G__19827.cljs$core$IFn$_invoke$arity$2 = G__19827__2;
return G__19827;
})()
);

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionConstruction,"object",true);

goog.object.set(clojure.core.matrix.protocols.new_scalar_array,"object",(function() {
var G__19828 = null;
var G__19828__1 = (function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,0.0);
});
var G__19828__2 = (function (m,value){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,value);
});
G__19828 = function(m,value){
switch(arguments.length){
case 1:
return G__19828__1.call(this,m);
case 2:
return G__19828__2.call(this,m,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19828.cljs$core$IFn$_invoke$arity$1 = G__19828__1;
G__19828.cljs$core$IFn$_invoke$arity$2 = G__19828__2;
return G__19828;
})()
);
goog.object.set(clojure.core.matrix.protocols.PZeroDimensionAccess,"null",true);

goog.object.set(clojure.core.matrix.protocols.get_0d,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.set_0d_BANG_,"null",(function (m,value){
throw cljs.core.ex_info.call(null,"Can't set the value of nil!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionAccess,"string",true);

goog.object.set(clojure.core.matrix.protocols.get_0d,"string",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.set_0d_BANG_,"string",(function (m,value){
throw cljs.core.ex_info.call(null,"Can't set a string value!",cljs.core.PersistentArrayMap.EMPTY);
}));

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$get_0d$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$set_0d_BANG_$arity$2 = (function (m,value){
var m__$1 = this;
throw cljs.core.ex_info.call(null,"Can't set a keyword!",cljs.core.PersistentArrayMap.EMPTY);
});

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionAccess,"number",true);

goog.object.set(clojure.core.matrix.protocols.get_0d,"number",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.set_0d_BANG_,"number",(function (m,value){
throw cljs.core.ex_info.call(null,"Can't set a scalar number!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionAccess,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_0d,"object",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.set_0d_BANG_,"object",(function (m,value){
return clojure.core.matrix.protocols.set_nd_BANG_.call(null,m,cljs.core.PersistentVector.EMPTY,value);
}));
goog.object.set(clojure.core.matrix.protocols.PZeroDimensionSet,"null",true);

goog.object.set(clojure.core.matrix.protocols.set_0d,"null",(function (m,value){
return value;
}));

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionSet,"object",true);

goog.object.set(clojure.core.matrix.protocols.set_0d,"object",(function (m,value){
return value;
}));
goog.object.set(clojure.core.matrix.protocols.PIndexedSetting,"null",true);

goog.object.set(clojure.core.matrix.protocols.set_1d,"null",(function (m,row,v){
throw cljs.core.ex_info.call(null,"Can't do 1D set on nil",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.set_2d,"null",(function (m,row,column,v){
throw cljs.core.ex_info.call(null,"Can't do 2D set on nil",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.set_nd,"null",(function (m,indexes,v){
if(cljs.core.seq.call(null,indexes)){
throw cljs.core.ex_info.call(null,["Can't do ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,indexes)),"D set on nil"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return v;
}
}));

goog.object.set(clojure.core.matrix.protocols.is_mutable_QMARK_,"null",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.PIndexedSetting,"number",true);

goog.object.set(clojure.core.matrix.protocols.set_1d,"number",(function (m,row,v){
throw cljs.core.ex_info.call(null,"Can't do 1D set on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.set_2d,"number",(function (m,row,column,v){
throw cljs.core.ex_info.call(null,"Can't do 2D set on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.set_nd,"number",(function (m,indexes,v){
if(cljs.core.seq.call(null,indexes)){
throw cljs.core.ex_info.call(null,["Can't do ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,indexes)),"D set on a scalar number"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return v;
}
}));

goog.object.set(clojure.core.matrix.protocols.is_mutable_QMARK_,"number",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.PIndexedSetting,"object",true);

goog.object.set(clojure.core.matrix.protocols.set_1d,"object",(function (m,row,v){
var m__$1 = clojure.core.matrix.protocols.clone.call(null,m);
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m__$1,row,v);

return m__$1;
}));

goog.object.set(clojure.core.matrix.protocols.set_2d,"object",(function (m,row,column,v){
var m__$1 = clojure.core.matrix.protocols.clone.call(null,m);
clojure.core.matrix.protocols.set_2d_BANG_.call(null,m__$1,row,column,v);

return m__$1;
}));

goog.object.set(clojure.core.matrix.protocols.set_nd,"object",(function (m,indexes,v){
var m__$1 = clojure.core.matrix.protocols.clone.call(null,m);
clojure.core.matrix.protocols.set_nd_BANG_.call(null,m__$1,indexes,v);

return m__$1;
}));

goog.object.set(clojure.core.matrix.protocols.is_mutable_QMARK_,"object",(function (m){
return true;
}));
goog.object.set(clojure.core.matrix.protocols.PNumerical,"number",true);

goog.object.set(clojure.core.matrix.protocols.numerical_QMARK_,"number",(function (m){
return true;
}));

goog.object.set(clojure.core.matrix.protocols.PNumerical,"null",true);

goog.object.set(clojure.core.matrix.protocols.numerical_QMARK_,"null",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.PNumerical,"object",true);

goog.object.set(clojure.core.matrix.protocols.numerical_QMARK_,"object",(function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return false;
} else {
return cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,clojure.core.matrix.protocols.element_seq.call(null,m));
}
}));
goog.object.set(clojure.core.matrix.protocols.PVectorOps,"number",true);

goog.object.set(clojure.core.matrix.protocols.vector_dot,"number",(function (a,b){
return clojure.core.matrix.protocols.pre_scale.call(null,b,a);
}));

goog.object.set(clojure.core.matrix.protocols.length,"number",(function (a){
return Math.abs(a);
}));

goog.object.set(clojure.core.matrix.protocols.length_squared,"number",(function (a){
var a__$1 = a;
return (a__$1 * a__$1);
}));

goog.object.set(clojure.core.matrix.protocols.normalise,"number",(function (a){
var a__$1 = a;
if((a__$1 > 0.0)){
return 1.0;
} else {
if((a__$1 < 0.0)){
return -1.0;
} else {
return 0.0;

}
}
}));

goog.object.set(clojure.core.matrix.protocols.PVectorOps,"object",true);

goog.object.set(clojure.core.matrix.protocols.vector_dot,"object",(function (a,b){
if(((((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a)))) && (((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)))))){
return clojure.core.matrix.protocols.element_sum.call(null,clojure.core.matrix.protocols.element_multiply.call(null,a,b));
} else {
return null;
}
}));

goog.object.set(clojure.core.matrix.protocols.length,"object",(function (a){
return Math.sqrt(clojure.core.matrix.protocols.length_squared.call(null,a));
}));

goog.object.set(clojure.core.matrix.protocols.length_squared,"object",(function (a){
return clojure.core.matrix.protocols.element_reduce.call(null,a,(function (r,x){
return (r + (x * x));
}),0.0);
}));

goog.object.set(clojure.core.matrix.protocols.normalise,"object",(function (a){
return clojure.core.matrix.protocols.scale.call(null,a,(1.0 / Math.sqrt(clojure.core.matrix.protocols.length_squared.call(null,a))));
}));
goog.object.set(clojure.core.matrix.protocols.PVectorDistance,"number",true);

goog.object.set(clojure.core.matrix.protocols.distance,"number",(function (a,b){
if(typeof b === 'number'){
return Math.abs((b - a));
} else {
return clojure.core.matrix.protocols.distance.call(null,b,a);
}
}));

goog.object.set(clojure.core.matrix.protocols.PVectorDistance,"object",true);

goog.object.set(clojure.core.matrix.protocols.distance,"object",(function (a,b){
return clojure.core.matrix.protocols.length.call(null,clojure.core.matrix.protocols.matrix_sub.call(null,a,b));
}));
goog.object.set(clojure.core.matrix.protocols.PVectorCross,"object",true);

goog.object.set(clojure.core.matrix.protocols.cross_product,"object",(function (a,b){
var x1 = clojure.core.matrix.protocols.get_1d.call(null,a,(0));
var y1 = clojure.core.matrix.protocols.get_1d.call(null,a,(1));
var z1 = clojure.core.matrix.protocols.get_1d.call(null,a,(2));
var x2 = clojure.core.matrix.protocols.get_1d.call(null,b,(0));
var y2 = clojure.core.matrix.protocols.get_1d.call(null,b,(1));
var z2 = clojure.core.matrix.protocols.get_1d.call(null,b,(2));
return clojure.core.matrix.protocols.construct_matrix.call(null,a,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((y1 * z2) - (z1 * y2)),((z1 * x2) - (x1 * z2)),((x1 * y2) - (y1 * x2))], null));
}));

goog.object.set(clojure.core.matrix.protocols.cross_product_BANG_,"object",(function (a,b){
var x1 = clojure.core.matrix.protocols.get_1d.call(null,a,(0));
var y1 = clojure.core.matrix.protocols.get_1d.call(null,a,(1));
var z1 = clojure.core.matrix.protocols.get_1d.call(null,a,(2));
var x2 = clojure.core.matrix.protocols.get_1d.call(null,b,(0));
var y2 = clojure.core.matrix.protocols.get_1d.call(null,b,(1));
var z2 = clojure.core.matrix.protocols.get_1d.call(null,b,(2));
clojure.core.matrix.protocols.set_1d_BANG_.call(null,a,(0),((y1 * z2) - (z1 * y2)));

clojure.core.matrix.protocols.set_1d_BANG_.call(null,a,(1),((z1 * x2) - (x1 * z2)));

clojure.core.matrix.protocols.set_1d_BANG_.call(null,a,(2),((x1 * y2) - (y1 * x2)));

return a;
}));
goog.object.set(clojure.core.matrix.protocols.PMutableVectorOps,"object",true);

goog.object.set(clojure.core.matrix.protocols.normalise_BANG_,"object",(function (a){
return clojure.core.matrix.protocols.scale_BANG_.call(null,a,(1.0 / Math.sqrt(clojure.core.matrix.protocols.length_squared.call(null,a))));
}));
goog.object.set(clojure.core.matrix.protocols.PAssignment,"object",true);

goog.object.set(clojure.core.matrix.protocols.assign_BANG_,"object",(function (m,x){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if(((0) === dims)){
return clojure.core.matrix.protocols.set_0d_BANG_.call(null,m,clojure.core.matrix.protocols.get_0d.call(null,x));
} else {
if(((1) === dims)){
if((x instanceof cljs.core.ISeq)){
var x__$1 = cljs.core.seq.call(null,x);
var msize = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
var i = (0);
var s = cljs.core.seq.call(null,x__$1);
while(true){
if((i >= msize)){
if(s){
throw cljs.core.ex_info.call(null,"Mismatches size of sequence in assign!",cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
} else {
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i,cljs.core.first.call(null,s));

var G__19833 = (i + (1));
var G__19834 = cljs.core.next.call(null,s);
i = G__19833;
s = G__19834;
continue;
}
break;
}
} else {
var xdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,x));
var msize = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
if(((0) === xdims)){
var value = clojure.core.matrix.protocols.get_0d.call(null,x);
var n__4607__auto__ = msize;
var i = (0);
while(true){
if((i < n__4607__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i,value);

var G__19835 = (i + (1));
i = G__19835;
continue;
} else {
return null;
}
break;
}
} else {
if(((1) === xdims)){
if(cljs.core.not_EQ_.call(null,msize,cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,x,(0))))){
throw cljs.core.ex_info.call(null,["Mismatched shapes in assign to array of shape: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape.call(null,m))," with argument of shape: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape.call(null,x))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var n__4607__auto__ = msize;
var i = (0);
while(true){
if((i < n__4607__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i,clojure.core.matrix.protocols.get_1d.call(null,x,i));

var G__19836 = (i + (1));
i = G__19836;
continue;
} else {
return null;
}
break;
}
} else {
throw cljs.core.ex_info.call(null,"Can't assign! with an argument of higher dimensionality",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
} else {
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
var xdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,x));
if((dims === xdims)){
var xss = clojure.core.matrix.protocols.get_major_slice_seq.call(null,x);
var _ = (function (){var or__4131__auto__ = clojure.core.matrix.protocols.same_shapes_QMARK_.call(null,xss);
if(or__4131__auto__){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.call(null,"Inconsistent slice shapes for assign!",cljs.core.PersistentArrayMap.EMPTY);
}
})();
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (xss,_,xdims,dims){
return (function (a,b){
return clojure.core.matrix.protocols.assign_BANG_.call(null,a,b);
});})(xss,_,xdims,dims))
,clojure.core.matrix.protocols.get_major_slice_view_seq.call(null,m),xss));
} else {
var seq__19829 = cljs.core.seq.call(null,clojure.core.matrix.protocols.get_major_slice_view_seq.call(null,m));
var chunk__19830 = null;
var count__19831 = (0);
var i__19832 = (0);
while(true){
if((i__19832 < count__19831)){
var ms = cljs.core._nth.call(null,chunk__19830,i__19832);
clojure.core.matrix.protocols.assign_BANG_.call(null,ms,x);


var G__19837 = seq__19829;
var G__19838 = chunk__19830;
var G__19839 = count__19831;
var G__19840 = (i__19832 + (1));
seq__19829 = G__19837;
chunk__19830 = G__19838;
count__19831 = G__19839;
i__19832 = G__19840;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__19829);
if(temp__5457__auto__){
var seq__19829__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19829__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__19829__$1);
var G__19841 = cljs.core.chunk_rest.call(null,seq__19829__$1);
var G__19842 = c__4550__auto__;
var G__19843 = cljs.core.count.call(null,c__4550__auto__);
var G__19844 = (0);
seq__19829 = G__19841;
chunk__19830 = G__19842;
count__19831 = G__19843;
i__19832 = G__19844;
continue;
} else {
var ms = cljs.core.first.call(null,seq__19829__$1);
clojure.core.matrix.protocols.assign_BANG_.call(null,ms,x);


var G__19845 = cljs.core.next.call(null,seq__19829__$1);
var G__19846 = null;
var G__19847 = (0);
var G__19848 = (0);
seq__19829 = G__19845;
chunk__19830 = G__19846;
count__19831 = G__19847;
i__19832 = G__19848;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
throw cljs.core.ex_info.call(null,["Can't assign to a non-array object: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}));

goog.object.set(clojure.core.matrix.protocols.assign_array_BANG_,"object",(function() {
var G__19849 = null;
var G__19849__2 = (function (m,arr){
var alen = cljs.core.long$.call(null,cljs.core.count.call(null,arr));
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,m))){
var n__4607__auto__ = alen;
var i = (0);
while(true){
if((i < n__4607__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i,cljs.core.nth.call(null,arr,i));

var G__19850 = (i + (1));
i = G__19850;
continue;
} else {
return null;
}
break;
}
} else {
return clojure.core.matrix.protocols.assign_array_BANG_.call(null,m,arr,(0),alen);
}
});
var G__19849__4 = (function (m,arr,start,length){
var length__$1 = cljs.core.long$.call(null,length);
var start__$1 = cljs.core.long$.call(null,start);
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,m))){
var n__4607__auto__ = length__$1;
var i = (0);
while(true){
if((i < n__4607__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i,cljs.core.nth.call(null,arr,(start__$1 + i)));

var G__19851 = (i + (1));
i = G__19851;
continue;
} else {
return null;
}
break;
}
} else {
var ss = cljs.core.seq.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
var skip = cljs.core.long$.call(null,((ss)?clojure.core.matrix.impl.defaults.calc_element_count.call(null,cljs.core.first.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m))):(0)));
var vals__8746__auto__ = cljs.core.seq.call(null,ss);
var i = cljs.core.long$.call(null,(0));
while(true){
if(vals__8746__auto__){
var s = cljs.core.first.call(null,vals__8746__auto__);
clojure.core.matrix.protocols.assign_array_BANG_.call(null,s,arr,(start__$1 + (skip * i)),skip);

var G__19852 = cljs.core.next.call(null,vals__8746__auto__);
var G__19853 = (i + (1));
vals__8746__auto__ = G__19852;
i = G__19853;
continue;
} else {
return null;
}
break;
}
}
});
G__19849 = function(m,arr,start,length){
switch(arguments.length){
case 2:
return G__19849__2.call(this,m,arr);
case 4:
return G__19849__4.call(this,m,arr,start,length);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19849.cljs$core$IFn$_invoke$arity$2 = G__19849__2;
G__19849.cljs$core$IFn$_invoke$arity$4 = G__19849__4;
return G__19849;
})()
);
goog.object.set(clojure.core.matrix.protocols.PImmutableAssignment,"null",true);

goog.object.set(clojure.core.matrix.protocols.assign,"null",(function (m,source){
var r = clojure.core.matrix.protocols.broadcast_coerce.call(null,m,source);
if((r === source)){
return clojure.core.matrix.protocols.clone.call(null,r);
} else {
return r;
}
}));

goog.object.set(clojure.core.matrix.protocols.PImmutableAssignment,"number",true);

goog.object.set(clojure.core.matrix.protocols.assign,"number",(function (m,source){
return source;
}));

goog.object.set(clojure.core.matrix.protocols.PImmutableAssignment,"object",true);

goog.object.set(clojure.core.matrix.protocols.assign,"object",(function (m,source){
var r = clojure.core.matrix.protocols.broadcast_coerce.call(null,m,source);
if((r === source)){
return clojure.core.matrix.protocols.clone.call(null,r);
} else {
return r;
}
}));
goog.object.set(clojure.core.matrix.protocols.PMutableFill,"object",true);

goog.object.set(clojure.core.matrix.protocols.fill_BANG_,"object",(function (m,value){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,value);
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixCloning,"null",true);

goog.object.set(clojure.core.matrix.protocols.clone,"null",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixCloning,"number",true);

goog.object.set(clojure.core.matrix.protocols.clone,"number",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixCloning,"object",true);

goog.object.set(clojure.core.matrix.protocols.clone,"object",(function (m){
return clojure.core.matrix.protocols.construct_matrix.call(null,m,m);
}));
goog.object.set(clojure.core.matrix.protocols.PSparseArray,"object",true);

goog.object.set(clojure.core.matrix.protocols.is_sparse_QMARK_,"object",(function (m){
return false;
}));
goog.object.set(clojure.core.matrix.protocols.PImmutableMatrixConstruction,"null",true);

goog.object.set(clojure.core.matrix.protocols.immutable_matrix,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PImmutableMatrixConstruction,"object",true);

goog.object.set(clojure.core.matrix.protocols.immutable_matrix,"object",(function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m))){
return clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m);
} else {
return m;
}
}));
goog.object.set(clojure.core.matrix.protocols.PZeroCount,"null",true);

goog.object.set(clojure.core.matrix.protocols.zero_count,"null",(function (m){
return (0);
}));

goog.object.set(clojure.core.matrix.protocols.PZeroCount,"number",true);

goog.object.set(clojure.core.matrix.protocols.zero_count,"number",(function (m){
if((m === (0))){
return (1);
} else {
return (0);
}
}));

goog.object.set(clojure.core.matrix.protocols.PZeroCount,"object",true);

goog.object.set(clojure.core.matrix.protocols.zero_count,"object",(function (m){
return clojure.core.matrix.protocols.element_reduce.call(null,m,(function (acc,e){
if((e === (0))){
return (acc + (1));
} else {
return acc;
}
}),(0));
}));
goog.object.set(clojure.core.matrix.protocols.PMutableMatrixConstruction,"null",true);

goog.object.set(clojure.core.matrix.protocols.mutable_matrix,"null",(function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,m);
}));

goog.object.set(clojure.core.matrix.protocols.PMutableMatrixConstruction,"number",true);

goog.object.set(clojure.core.matrix.protocols.mutable_matrix,"number",(function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,m);
}));

goog.object.set(clojure.core.matrix.protocols.PMutableMatrixConstruction,"object",true);

goog.object.set(clojure.core.matrix.protocols.mutable_matrix,"object",(function (m){
return clojure.core.matrix.impl.defaults.construct_mutable_matrix.call(null,m);
}));
goog.object.set(clojure.core.matrix.protocols.PMutableCoercion,"null",true);

goog.object.set(clojure.core.matrix.protocols.ensure_mutable,"null",(function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,m);
}));

goog.object.set(clojure.core.matrix.protocols.PMutableCoercion,"number",true);

goog.object.set(clojure.core.matrix.protocols.ensure_mutable,"number",(function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,m);
}));

goog.object.set(clojure.core.matrix.protocols.PMutableCoercion,"object",true);

goog.object.set(clojure.core.matrix.protocols.ensure_mutable,"object",(function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m))){
return m;
} else {
return clojure.core.matrix.impl.defaults.construct_mutable_matrix.call(null,m);
}
}));
goog.object.set(clojure.core.matrix.protocols.PComputeMatrix,"object",true);

goog.object.set(clojure.core.matrix.protocols.compute_matrix,"object",(function (m,shape,f){
var m__$1 = clojure.core.matrix.protocols.new_matrix_nd.call(null,m,shape);
return cljs.core.reduce.call(null,((function (m__$1){
return (function (m__$2,ix){
return clojure.core.matrix.protocols.set_nd.call(null,m__$2,ix,cljs.core.apply.call(null,f,ix));
});})(m__$1))
,m__$1,clojure.core.matrix.utils.base_index_seq_for_shape.call(null,shape));
}));
goog.object.set(clojure.core.matrix.protocols.PDimensionInfo,"null",true);

goog.object.set(clojure.core.matrix.protocols.dimensionality,"null",(function (m){
return (0);
}));

goog.object.set(clojure.core.matrix.protocols.is_scalar_QMARK_,"null",(function (m){
return true;
}));

goog.object.set(clojure.core.matrix.protocols.is_vector_QMARK_,"null",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.get_shape,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.dimension_count,"null",(function (m,i){
throw cljs.core.ex_info.call(null,["nil has zero dimensionality, cannot get count for dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) + (1));
});

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons.call(null,cljs.core.count.call(null,m__$1),clojure.core.matrix.protocols.get_shape.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.first.call(null,m__$1),(x - (1)));
}
});

goog.object.set(clojure.core.matrix.protocols.PDimensionInfo,"object",true);

goog.object.set(clojure.core.matrix.protocols.dimensionality,"object",(function (m){
if(cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,m))){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,m));
if((n > (0))){
return (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,m,(0)))) + (1));
} else {
return (1);
}
} else {
return (0);

}
}));

goog.object.set(clojure.core.matrix.protocols.is_vector_QMARK_,"object",(function (m){
if(cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,m))){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,m));
return (((n === (0))) || (((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,m,(0)))))));
} else {
return false;

}
}));

goog.object.set(clojure.core.matrix.protocols.is_scalar_QMARK_,"object",(function (m){
if(cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,m))){
return false;
} else {
return true;

}
}));

goog.object.set(clojure.core.matrix.protocols.get_shape,"object",(function (m){
if(cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,m))){
var n = cljs.core.count.call(null,m);
if((n === (0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null);
} else {
return cljs.core.cons.call(null,n,clojure.core.matrix.protocols.get_shape.call(null,cljs.core.nth.call(null,m,(0))));
}
} else {
return null;

}
}));

goog.object.set(clojure.core.matrix.protocols.dimension_count,"object",(function (m,i){
var i__$1 = cljs.core.long$.call(null,i);
if(cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,m))){
if((i__$1 === (0))){
return cljs.core.count.call(null,m);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.nth.call(null,m,(0)),(i__$1 - (1)));
}
} else {
if(((0) === i__$1)){
return cljs.core.count.call(null,m);
} else {
throw cljs.core.ex_info.call(null,["Can't determine count of dimension ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__$1)," on Object: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}));

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) + (1));
});

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons.call(null,cljs.core.count.call(null,m__$1),clojure.core.matrix.protocols.get_shape.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.first.call(null,m__$1),(x - (1)));
}
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) + (1));
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons.call(null,cljs.core.count.call(null,m__$1),clojure.core.matrix.protocols.get_shape.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.first.call(null,m__$1),(x - (1)));
}
});

goog.object.set(clojure.core.matrix.protocols.PDimensionInfo,"number",true);

goog.object.set(clojure.core.matrix.protocols.dimensionality,"number",(function (m){
return (0);
}));

goog.object.set(clojure.core.matrix.protocols.is_scalar_QMARK_,"number",(function (m){
return true;
}));

goog.object.set(clojure.core.matrix.protocols.is_vector_QMARK_,"number",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.get_shape,"number",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.dimension_count,"number",(function (m,i){
throw cljs.core.ex_info.call(null,["Number has zero dimensionality, cannot get count for dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) + (1));
});

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons.call(null,cljs.core.count.call(null,m__$1),clojure.core.matrix.protocols.get_shape.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.first.call(null,m__$1),(x - (1)));
}
});

goog.object.set(clojure.core.matrix.protocols.PDimensionInfo,"string",true);

goog.object.set(clojure.core.matrix.protocols.dimensionality,"string",(function (m){
return (0);
}));

goog.object.set(clojure.core.matrix.protocols.is_scalar_QMARK_,"string",(function (m){
return true;
}));

goog.object.set(clojure.core.matrix.protocols.is_vector_QMARK_,"string",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.get_shape,"string",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.dimension_count,"string",(function (m,i){
throw cljs.core.ex_info.call(null,["String has zero dimensionality, cannot get count for dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) + (1));
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons.call(null,cljs.core.count.call(null,m__$1),clojure.core.matrix.protocols.get_shape.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.first.call(null,m__$1),(x - (1)));
}
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (0);
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return true;
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return null;
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,i){
var m__$1 = this;
throw cljs.core.ex_info.call(null,["Keyword has zero dimensionality, cannot get count for dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(clojure.core.matrix.protocols.PSameShape,"null",true);

goog.object.set(clojure.core.matrix.protocols.same_shape_QMARK_,"null",(function (a,b){
return ((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)));
}));

goog.object.set(clojure.core.matrix.protocols.PSameShape,"string",true);

goog.object.set(clojure.core.matrix.protocols.same_shape_QMARK_,"string",(function (a,b){
return ((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)));
}));

goog.object.set(clojure.core.matrix.protocols.PSameShape,"number",true);

goog.object.set(clojure.core.matrix.protocols.same_shape_QMARK_,"number",(function (a,b){
return ((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)));
}));

goog.object.set(clojure.core.matrix.protocols.PSameShape,"object",true);

goog.object.set(clojure.core.matrix.protocols.same_shape_QMARK_,"object",(function (a,b){
return clojure.core.matrix.utils.same_shape_object_QMARK_.call(null,clojure.core.matrix.protocols.get_shape.call(null,a),clojure.core.matrix.protocols.get_shape.call(null,b));
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixOps,"null",true);

goog.object.set(clojure.core.matrix.protocols.trace,"null",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixOps,"number",true);

goog.object.set(clojure.core.matrix.protocols.trace,"number",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.inverse,"number",(function (m){
return ((1) / m);
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixOps,"object",true);

goog.object.set(clojure.core.matrix.protocols.trace,"object",(function (m){
if(((2) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
} else {
throw cljs.core.ex_info.call(null,"Trace requires a 2D matrix",cljs.core.PersistentArrayMap.EMPTY);
}

var rc = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
var cc = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(1)));
var dims = Math.min(rc,cc);
var i = (0);
var res = 0.0;
while(true){
if((i >= dims)){
return res;
} else {
var G__19854 = (i + (1));
var G__19855 = (res + clojure.core.matrix.protocols.get_2d.call(null,m,i,i));
i = G__19854;
res = G__19855;
continue;
}
break;
}
}));

goog.object.set(clojure.core.matrix.protocols.determinant,"object",(function (m){
var imp = (function (){var or__4131__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"vectorz","vectorz",1550942815));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.call(null,"(let Need to load an implementation which supports determinant, e.g. vectorz-clj",cljs.core.PersistentArrayMap.EMPTY);
}
})();
var m__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp,m);
return clojure.core.matrix.protocols.determinant.call(null,m__$1);
}));

goog.object.set(clojure.core.matrix.protocols.inverse,"object",(function (m){
var imp = (function (){var or__4131__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"vectorz","vectorz",1550942815));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.call(null,"Need to load an implementation which supports inverse, e.g. vectorz-clj",cljs.core.PersistentArrayMap.EMPTY);
}
})();
var mm = clojure.core.matrix.protocols.coerce_param.call(null,imp,m);
return clojure.core.matrix.protocols.coerce_param.call(null,m,clojure.core.matrix.protocols.inverse.call(null,mm));
}));
goog.object.set(clojure.core.matrix.protocols.PTranspose,"null",true);

goog.object.set(clojure.core.matrix.protocols.transpose,"null",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PTranspose,"number",true);

goog.object.set(clojure.core.matrix.protocols.transpose,"number",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PTranspose,"object",true);

goog.object.set(clojure.core.matrix.protocols.transpose,"object",(function (m){
return clojure.core.matrix.protocols.coerce_param.call(null,m,(function (){var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
var G__19856 = dims;
switch (G__19856) {
case (0):
return m;

break;
case (1):
return m;

break;
case (2):
return cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m));

break;
default:
return clojure.core.matrix.protocols.transpose_dims.call(null,m,cljs.core.reverse.call(null,cljs.core.range.call(null,dims)));

}
})());
}));
goog.object.set(clojure.core.matrix.protocols.PTransposeDims,"null",true);

goog.object.set(clojure.core.matrix.protocols.transpose_dims,"null",(function (m,ordering){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PTransposeDims,"number",true);

goog.object.set(clojure.core.matrix.protocols.transpose_dims,"number",(function (m,ordering){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PTransposeDims,"object",true);

goog.object.set(clojure.core.matrix.protocols.transpose_dims,"object",(function (m,ordering){
return clojure.core.matrix.protocols.transpose_dims.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),ordering);
}));
goog.object.set(clojure.core.matrix.protocols.PTransposeInPlace,"object",true);

goog.object.set(clojure.core.matrix.protocols.transpose_BANG_,"object",(function (m){
var n_19858 = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
if(cljs.core.not_EQ_.call(null,n_19858,cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(1))))){
throw cljs.core.ex_info.call(null,"transpose! requires a quare matrix",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var n__4607__auto___19859 = n_19858;
var i_19860 = (0);
while(true){
if((i_19860 < n__4607__auto___19859)){
var n__4607__auto___19861__$1 = i_19860;
var j_19862 = (0);
while(true){
if((j_19862 < n__4607__auto___19861__$1)){
var t_19863 = clojure.core.matrix.protocols.get_2d.call(null,m,i_19860,j_19862);
clojure.core.matrix.protocols.set_2d_BANG_.call(null,m,i_19860,j_19862,clojure.core.matrix.protocols.get_2d.call(null,m,j_19862,i_19860));

clojure.core.matrix.protocols.set_2d_BANG_.call(null,m,j_19862,i_19860,t_19863);

var G__19864 = (j_19862 + (1));
j_19862 = G__19864;
continue;
} else {
}
break;
}

var G__19865 = (i_19860 + (1));
i_19860 = G__19865;
continue;
} else {
}
break;
}

return m;
}));
goog.object.set(clojure.core.matrix.protocols.PRotate,"null",true);

goog.object.set(clojure.core.matrix.protocols.rotate,"null",(function (m,dim,places){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PRotate,"number",true);

goog.object.set(clojure.core.matrix.protocols.rotate,"number",(function (m,dim,places){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PRotate,"object",true);

goog.object.set(clojure.core.matrix.protocols.rotate,"object",(function (m,dim,places){
var dim__$1 = cljs.core.long$.call(null,dim);
var places__$1 = cljs.core.long$.call(null,places);
if((cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) <= (0))){
return m;
} else {
if(((0) === dim__$1)){
var ss = clojure.core.matrix.protocols.get_major_slice_seq.call(null,m);
var c = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
var sh = cljs.core.long$.call(null,(((c > (0)))?cljs.core.long$.call(null,cljs.core.mod.call(null,places__$1,c)):(0)));
if((sh === (0))){
return m;
} else {
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.take_last.call(null,(c - sh),ss),cljs.core.take.call(null,sh,ss)));
}
} else {
return clojure.core.matrix.protocols.rotate.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),dim__$1,places__$1);

}
}
}));
goog.object.set(clojure.core.matrix.protocols.PRotateAll,"null",true);

goog.object.set(clojure.core.matrix.protocols.rotate_all,"null",(function (m,shifts){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PRotateAll,"number",true);

goog.object.set(clojure.core.matrix.protocols.rotate_all,"number",(function (m,shifts){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PRotateAll,"object",true);

goog.object.set(clojure.core.matrix.protocols.rotate_all,"object",(function (m,shifts){
return cljs.core.reduce.call(null,(function (m__$1,p__19866){
var vec__19867 = p__19866;
var dim = cljs.core.nth.call(null,vec__19867,(0),null);
var shift = cljs.core.nth.call(null,vec__19867,(1),null);
if((shift === (0))){
return m__$1;
} else {
return clojure.core.matrix.protocols.rotate.call(null,m__$1,dim,shift);
}
}),m,cljs.core.map_indexed.call(null,(function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
}),shifts));
}));
goog.object.set(clojure.core.matrix.protocols.PShift,"object",true);

goog.object.set(clojure.core.matrix.protocols.shift,"object",(function (m,dim,shift){
var shift__$1 = cljs.core.long$.call(null,shift);
var z = clojure.core.matrix.protocols.generic_zero.call(null,m);
var c = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,dim));
var sh = cljs.core.vec.call(null,clojure.core.matrix.protocols.get_shape.call(null,m));
if((shift__$1 === (0))){
return m;
} else {
if((shift__$1 >= c)){
return clojure.core.matrix.protocols.broadcast_coerce.call(null,m,z);
} else {
if((shift__$1 <= (- c))){
return clojure.core.matrix.protocols.broadcast_coerce.call(null,m,z);
} else {
if((shift__$1 < (0))){
return clojure.core.matrix.protocols.join_along.call(null,clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.protocols.construct_matrix.call(null,m,z),cljs.core.assoc.call(null,sh,dim,(- shift__$1))),clojure.core.matrix.protocols.submatrix.call(null,m,cljs.core.map.call(null,cljs.core.vector,cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,sh),(0))),cljs.core.assoc.call(null,sh,dim,(c + shift__$1)))),dim);
} else {
if((shift__$1 > (0))){
return clojure.core.matrix.protocols.join_along.call(null,clojure.core.matrix.protocols.submatrix.call(null,m,cljs.core.map.call(null,cljs.core.vector,cljs.core.assoc.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,sh),(0))),dim,shift__$1),cljs.core.assoc.call(null,sh,dim,(c - shift__$1)))),clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.protocols.construct_matrix.call(null,m,z),cljs.core.assoc.call(null,sh,dim,shift__$1)),dim);
} else {
throw cljs.core.ex_info.call(null,"Shouldn't be possible!!",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
}
}));

goog.object.set(clojure.core.matrix.protocols.shift_all,"object",(function (m,shifts){
return cljs.core.reduce.call(null,(function (m__$1,p__19870){
var vec__19871 = p__19870;
var dim = cljs.core.nth.call(null,vec__19871,(0),null);
var shift = cljs.core.nth.call(null,vec__19871,(1),null);
if((shift === (0))){
return m__$1;
} else {
return clojure.core.matrix.protocols.shift.call(null,m__$1,dim,shift);
}
}),m,cljs.core.map_indexed.call(null,(function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
}),shifts));
}));
goog.object.set(clojure.core.matrix.protocols.POrder,"null",true);

goog.object.set(clojure.core.matrix.protocols.order,"null",(function() {
var G__19877 = null;
var G__19877__2 = (function (m,indices){
throw cljs.core.ex_info.call(null,"Can't reorder a scalar nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__19877__3 = (function (m,dim,indices){
throw cljs.core.ex_info.call(null,"Can't reorder a scalar nil",cljs.core.PersistentArrayMap.EMPTY);
});
G__19877 = function(m,dim,indices){
switch(arguments.length){
case 2:
return G__19877__2.call(this,m,dim);
case 3:
return G__19877__3.call(this,m,dim,indices);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19877.cljs$core$IFn$_invoke$arity$2 = G__19877__2;
G__19877.cljs$core$IFn$_invoke$arity$3 = G__19877__3;
return G__19877;
})()
);

goog.object.set(clojure.core.matrix.protocols.POrder,"number",true);

goog.object.set(clojure.core.matrix.protocols.order,"number",(function() {
var G__19878 = null;
var G__19878__2 = (function (m,indices){
throw cljs.core.ex_info.call(null,"Can't reorder a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});
var G__19878__3 = (function (m,dim,indices){
throw cljs.core.ex_info.call(null,"Can't reorder a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});
G__19878 = function(m,dim,indices){
switch(arguments.length){
case 2:
return G__19878__2.call(this,m,dim);
case 3:
return G__19878__3.call(this,m,dim,indices);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19878.cljs$core$IFn$_invoke$arity$2 = G__19878__2;
G__19878.cljs$core$IFn$_invoke$arity$3 = G__19878__3;
return G__19878;
})()
);

goog.object.set(clojure.core.matrix.protocols.POrder,"object",true);

goog.object.set(clojure.core.matrix.protocols.order,"object",(function() {
var G__19879 = null;
var G__19879__2 = (function (m,indices){
var mshape = cljs.core.vec.call(null,clojure.core.matrix.protocols.get_shape.call(null,m));
var subshape = cljs.core.assoc.call(null,m,(0),(1));
var ss = cljs.core.map.call(null,((function (mshape,subshape){
return (function (p1__19874_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.protocols.get_major_slice.call(null,m,p1__19874_SHARP_),subshape);
});})(mshape,subshape))
,indices);
return cljs.core.reduce.call(null,((function (mshape,subshape,ss){
return (function (p1__19875_SHARP_,p2__19876_SHARP_){
return clojure.core.matrix.protocols.join.call(null,p1__19875_SHARP_,p2__19876_SHARP_);
});})(mshape,subshape,ss))
,ss);
});
var G__19879__3 = (function (m,dim,indices){
return clojure.core.matrix.protocols.order.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),dim,indices);
});
G__19879 = function(m,dim,indices){
switch(arguments.length){
case 2:
return G__19879__2.call(this,m,dim);
case 3:
return G__19879__3.call(this,m,dim,indices);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19879.cljs$core$IFn$_invoke$arity$2 = G__19879__2;
G__19879.cljs$core$IFn$_invoke$arity$3 = G__19879__3;
return G__19879;
})()
);
/**
 * Outputs a vector containing the rank of array elements, given a sorted sequence of [index value] pairs and a length
 */
clojure.core.matrix.impl.defaults.output_rank = (function clojure$core$matrix$impl$defaults$output_rank(pairs,n){
var dest = cljs.core.object_array.call(null,n);
var i_19880 = cljs.core.long$.call(null,(0));
var pairs_19881__$1 = cljs.core.seq.call(null,pairs);
while(true){
if((i_19880 < n)){
(dest[cljs.core.first.call(null,cljs.core.first.call(null,pairs_19881__$1))] = Long.valueOf(i_19880));

var G__19882 = (i_19880 + (1));
var G__19883 = cljs.core.next.call(null,pairs_19881__$1);
i_19880 = G__19882;
pairs_19881__$1 = G__19883;
continue;
} else {
}
break;
}

return cljs.core.vec.call(null,dest);
});
goog.object.set(clojure.core.matrix.protocols.PIndexRank,"object",true);

goog.object.set(clojure.core.matrix.protocols.index_rank,"object",(function() {
var G__19887 = null;
var G__19887__1 = (function (m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
var G__19885 = dims;
switch (G__19885) {
case (0):
throw cljs.core.ex_info.call(null,"Can't get indexed rank of a scalar value",cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
var n = cljs.core.long$.call(null,clojure.core.matrix.protocols.element_count.call(null,m));
return clojure.core.matrix.impl.defaults.output_rank.call(null,cljs.core.sort_by.call(null,cljs.core.second,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,clojure.core.matrix.protocols.element_count.call(null,m)),clojure.core.matrix.protocols.element_seq.call(null,m))),n);

break;
default:
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.index_rank,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));

}
});
var G__19887__2 = (function (m,comp){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
var G__19886 = dims;
switch (G__19886) {
case (0):
throw cljs.core.ex_info.call(null,"Can't get indexed rank of a scalar value",cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
var n = cljs.core.long$.call(null,clojure.core.matrix.protocols.element_count.call(null,m));
return clojure.core.matrix.impl.defaults.output_rank.call(null,cljs.core.sort_by.call(null,cljs.core.second,comp,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,clojure.core.matrix.protocols.element_count.call(null,m)),clojure.core.matrix.protocols.element_seq.call(null,m))),n);

break;
default:
return cljs.core.mapv.call(null,((function (G__19886,dims){
return (function (p1__19884_SHARP_){
return clojure.core.matrix.protocols.index_rank.call(null,p1__19884_SHARP_,comp);
});})(G__19886,dims))
,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));

}
});
G__19887 = function(m,comp){
switch(arguments.length){
case 1:
return G__19887__1.call(this,m);
case 2:
return G__19887__2.call(this,m,comp);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19887.cljs$core$IFn$_invoke$arity$1 = G__19887__1;
G__19887.cljs$core$IFn$_invoke$arity$2 = G__19887__2;
return G__19887;
})()
);
goog.object.set(clojure.core.matrix.protocols.PMatrixProducts,"number",true);

goog.object.set(clojure.core.matrix.protocols.inner_product,"number",(function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.outer_product,"number",(function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixProducts,"object",true);

goog.object.set(clojure.core.matrix.protocols.inner_product,"object",(function (m,a){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,a))){
return clojure.core.matrix.protocols.scale.call(null,m,a);
} else {
if(((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
if(((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a)))){
return clojure.core.matrix.protocols.element_sum.call(null,clojure.core.matrix.protocols.element_multiply.call(null,m,a));
} else {
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.matrix_add,cljs.core.map.call(null,(function (sl,x){
return clojure.core.matrix.protocols.scale.call(null,sl,x);
}),clojure.core.matrix.protocols.get_major_slice_seq.call(null,a),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m)));
}
} else {
return clojure.core.matrix.protocols.construct_matrix.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null),cljs.core.map.call(null,(function (p1__19890_SHARP_){
return clojure.core.matrix.protocols.inner_product.call(null,p1__19890_SHARP_,a);
}),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m)));

}
}
}
}));

goog.object.set(clojure.core.matrix.protocols.outer_product,"object",(function (m,a){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
} else {
return clojure.core.matrix.protocols.element_map.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),(function (x){
return clojure.core.matrix.protocols.pre_scale.call(null,a,x);
}));

}
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixMultiply,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_multiply,"number",(function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.matrix_multiply,"number",(function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,a))){
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
} else {
throw cljs.core.ex_info.call(null,["Don't know how to multiply number with: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,a))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixMultiply,"object",true);

goog.object.set(clojure.core.matrix.protocols.matrix_multiply,"object",(function (m,a){
var mdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
if((adims === (0))){
return clojure.core.matrix.protocols.scale.call(null,m,a);
} else {
if((((mdims === (1))) && ((adims === (1))))){
return clojure.core.matrix.protocols.vector_dot.call(null,m,a);
} else {
if((((mdims === (1))) && ((adims === (2))))){
var vec__19891 = clojure.core.matrix.protocols.get_shape.call(null,a);
var arows = cljs.core.nth.call(null,vec__19891,(0),null);
var acols = cljs.core.nth.call(null,vec__19891,(1),null);
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.matrix_multiply.call(null,clojure.core.matrix.protocols.reshape.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),arows], null)),a),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [acols], null));
} else {
if((((mdims === (2))) && ((adims === (1))))){
var mshape = clojure.core.matrix.protocols.get_shape.call(null,m);
var vec__19894 = mshape;
var mrows = cljs.core.nth.call(null,vec__19894,(0),null);
var mcols = cljs.core.nth.call(null,vec__19894,(1),null);
var acount = clojure.core.matrix.protocols.element_count.call(null,a);
if(cljs.core.not_EQ_.call(null,mcols,acount)){
throw cljs.core.ex_info.call(null,["Can't multiply matrix of shape: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mshape)," with a vector of length ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(acount)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.matrix_multiply.call(null,m,clojure.core.matrix.protocols.reshape.call(null,a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols,(1)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrows], null));
} else {
if((((mdims === (2))) && ((adims === (2))))){
var mutable = clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m);
var vec__19897 = clojure.core.matrix.protocols.get_shape.call(null,m);
var mrows = cljs.core.nth.call(null,vec__19897,(0),null);
var mcols = cljs.core.nth.call(null,vec__19897,(1),null);
var vec__19900 = clojure.core.matrix.protocols.get_shape.call(null,a);
var arows = cljs.core.nth.call(null,vec__19900,(0),null);
var acols = cljs.core.nth.call(null,vec__19900,(1),null);
var new_m_type = (cljs.core.truth_(mutable)?m:clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"ndarray","ndarray",1659822393)));
var new_m = clojure.core.matrix.protocols.new_matrix.call(null,new_m_type,mrows,acols);
var i_19906 = cljs.core.long$.call(null,(0));
while(true){
if((i_19906 < mrows)){
var j_19907 = cljs.core.long$.call(null,(0));
while(true){
if((j_19907 < acols)){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,new_m,i_19906,j_19907,(0));

var G__19908 = (j_19907 + (1));
j_19907 = G__19908;
continue;
} else {
}
break;
}

var G__19909 = (i_19906 + (1));
i_19906 = G__19909;
continue;
} else {
}
break;
}


var i_19910 = cljs.core.long$.call(null,(0));
while(true){
if((i_19910 < mrows)){
var j_19911 = cljs.core.long$.call(null,(0));
while(true){
if((j_19911 < acols)){
var k_19912 = cljs.core.long$.call(null,(0));
while(true){
if((k_19912 < mcols)){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,new_m,i_19910,j_19911,(clojure.core.matrix.protocols.get_2d.call(null,new_m,i_19910,j_19911) + (clojure.core.matrix.protocols.get_2d.call(null,m,i_19910,k_19912) * clojure.core.matrix.protocols.get_2d.call(null,a,k_19912,j_19911))));

var G__19913 = (k_19912 + (1));
k_19912 = G__19913;
continue;
} else {
}
break;
}

var G__19914 = (j_19911 + (1));
j_19911 = G__19914;
continue;
} else {
}
break;
}

var G__19915 = (i_19910 + (1));
i_19910 = G__19915;
continue;
} else {
}
break;
}


return new_m;
} else {
return null;
}
}
}
}
}
}));

goog.object.set(clojure.core.matrix.protocols.element_multiply,"object",(function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.scale.call(null,m,a);
} else {
var vec__19903 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__19903,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__19903,(1),null);
return clojure.core.matrix.protocols.element_map.call(null,m__$1,cljs.core._STAR_,a__$1);
}
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixMultiplyMutable,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_multiply_BANG_,"number",(function (m,a){
throw cljs.core.ex_info.call(null,"Can't do mutable multiply on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.matrix_multiply_BANG_,"number",(function (m,a){
throw cljs.core.ex_info.call(null,"Can't do mutable multiply on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixMultiplyMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_multiply_BANG_,"object",(function (m,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_multiply.call(null,m,a));
}));

goog.object.set(clojure.core.matrix.protocols.matrix_multiply_BANG_,"object",(function (m,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.matrix_multiply.call(null,m,a));
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixDivide,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_divide,"number",(function() {
var G__19916 = null;
var G__19916__1 = (function (m){
return ((1) / m);
});
var G__19916__2 = (function (m,a){
return clojure.core.matrix.protocols.pre_scale.call(null,clojure.core.matrix.protocols.element_divide.call(null,a),m);
});
G__19916 = function(m,a){
switch(arguments.length){
case 1:
return G__19916__1.call(this,m);
case 2:
return G__19916__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19916.cljs$core$IFn$_invoke$arity$1 = G__19916__1;
G__19916.cljs$core$IFn$_invoke$arity$2 = G__19916__2;
return G__19916;
})()
);

goog.object.set(clojure.core.matrix.protocols.PMatrixDivide,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_divide,"object",(function() {
var G__19917 = null;
var G__19917__1 = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.get_shape.call(null,m))){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.protocols.element_divide);
} else {
throw cljs.core.ex_info.call(null,["Don't know how to take reciprocal of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
var G__19917__2 = (function (m,a){
return clojure.core.matrix.protocols.element_multiply.call(null,m,clojure.core.matrix.protocols.element_divide.call(null,a));
});
G__19917 = function(m,a){
switch(arguments.length){
case 1:
return G__19917__1.call(this,m);
case 2:
return G__19917__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19917.cljs$core$IFn$_invoke$arity$1 = G__19917__1;
G__19917.cljs$core$IFn$_invoke$arity$2 = G__19917__2;
return G__19917;
})()
);
goog.object.set(clojure.core.matrix.protocols.PMatrixDivideMutable,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_divide_BANG_,"number",(function() {
var G__19921 = null;
var G__19921__1 = (function (m){
throw cljs.core.ex_info.call(null,"Can't do mutable divide on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});
var G__19921__2 = (function (m,a){
throw cljs.core.ex_info.call(null,"Can't do mutable divide on a scalar numer",cljs.core.PersistentArrayMap.EMPTY);
});
G__19921 = function(m,a){
switch(arguments.length){
case 1:
return G__19921__1.call(this,m);
case 2:
return G__19921__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19921.cljs$core$IFn$_invoke$arity$1 = G__19921__1;
G__19921.cljs$core$IFn$_invoke$arity$2 = G__19921__2;
return G__19921;
})()
);

goog.object.set(clojure.core.matrix.protocols.PMatrixDivideMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_divide_BANG_,"object",(function() {
var G__19922 = null;
var G__19922__1 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,cljs.core._SLASH_);
});
var G__19922__2 = (function (m,a){
var vec__19918 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__19918,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__19918,(1),null);
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m__$1,cljs.core._SLASH_,a__$1);
});
G__19922 = function(m,a){
switch(arguments.length){
case 1:
return G__19922__1.call(this,m);
case 2:
return G__19922__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19922.cljs$core$IFn$_invoke$arity$1 = G__19922__1;
G__19922.cljs$core$IFn$_invoke$arity$2 = G__19922__2;
return G__19922;
})()
);
goog.object.set(clojure.core.matrix.protocols.PSummable,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_sum,"number",(function (a){
return a;
}));

goog.object.set(clojure.core.matrix.protocols.PSummable,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_sum,"object",(function (a){
return clojure.core.matrix.protocols.element_reduce.call(null,a,(cljs.core.truth_(clojure.core.matrix.protocols.numerical_QMARK_.call(null,a))?cljs.core._PLUS_:clojure.core.matrix.protocols.matrix_add));
}));
goog.object.set(clojure.core.matrix.protocols.PElementMinMax,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_min,"number",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.element_max,"number",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.element_clamp,"number",(function (m,a,b){
if((!((a <= b)))){
throw cljs.core.ex_info.call(null,["min argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," should be <= max argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if((m < a)){
return a;
} else {
if((m > b)){
return b;
} else {
return m;
}
}
}
}));

goog.object.set(clojure.core.matrix.protocols.PElementMinMax,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_min,"object",(function (m){
return clojure.core.matrix.protocols.element_reduce.call(null,m,(function (best,v){
if(((cljs.core.not.call(null,best)) || ((v < best)))){
return v;
} else {
return best;
}
}),null);
}));

goog.object.set(clojure.core.matrix.protocols.element_max,"object",(function (m){
return clojure.core.matrix.protocols.element_reduce.call(null,m,(function (best,v){
if(((cljs.core.not.call(null,best)) || ((v > best)))){
return v;
} else {
return best;
}
}),null);
}));

goog.object.set(clojure.core.matrix.protocols.element_clamp,"object",(function (m,a,b){
if((!((a <= b)))){
throw cljs.core.ex_info.call(null,["min argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," should be <= max argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19923_SHARP_){
if((p1__19923_SHARP_ < a)){
return a;
} else {
if((p1__19923_SHARP_ > b)){
return b;
} else {
return p1__19923_SHARP_;
}
}
}));
}
}));
goog.object.set(clojure.core.matrix.protocols.PCompare,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_compare,"number",(function (a,b){
if(typeof b === 'number'){
return cljs.core.long$.call(null,clojure.core.matrix.impl.mathsops.signum.call(null,(a - b)));
} else {
return clojure.core.matrix.protocols.signum.call(null,clojure.core.matrix.protocols.matrix_sub.call(null,a,b));
}
}));

goog.object.set(clojure.core.matrix.protocols.element_if,"number",(function (m,a,b){
var vec__19951 = clojure.core.matrix.protocols.broadcast_same_shape.call(null,a,b);
var a__$1 = cljs.core.nth.call(null,vec__19951,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__19951,(1),null);
if((m > (0))){
return a__$1;
} else {
return b__$1;
}
}));

goog.object.set(clojure.core.matrix.protocols.element_lt,"number",(function (m,a){
if(typeof a === 'number'){
if((m < a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_gt.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_le,"number",(function (m,a){
if(typeof a === 'number'){
if((m <= a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_ge.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_gt,"number",(function (m,a){
if(typeof a === 'number'){
if((m > a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_lt.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_ge,"number",(function (m,a){
if(typeof a === 'number'){
if((m >= a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_le.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_ne,"number",(function (m,a){
if(typeof a === 'number'){
if(cljs.core.not_EQ_.call(null,m,a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_ne.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_eq,"number",(function (m,a){
if(typeof a === 'number'){
if(cljs.core._EQ_.call(null,m,a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_eq.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.PCompare,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_compare,"object",(function (a,b){
return clojure.core.matrix.protocols.element_map.call(null,clojure.core.matrix.protocols.matrix_sub.call(null,a,b),(function (p1__19924_SHARP_){
return cljs.core.long$.call(null,clojure.core.matrix.impl.mathsops.signum.call(null,p1__19924_SHARP_));
}));
}));

goog.object.set(clojure.core.matrix.protocols.element_if,"object",(function (m,a,b){
if(((typeof a === 'number') && (typeof b === 'number'))){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19925_SHARP_){
if((p1__19925_SHARP_ > (0))){
return a;
} else {
return b;
}
}));
} else {
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19926_SHARP_,p2__19927_SHARP_){
if((p1__19926_SHARP_ > (0))){
return a;
} else {
return p2__19927_SHARP_;
}
}),b);
} else {
if(typeof b === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19928_SHARP_,p2__19929_SHARP_){
if((p1__19928_SHARP_ > (0))){
return p2__19929_SHARP_;
} else {
return b;
}
}),a);
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19930_SHARP_,p2__19931_SHARP_,p3__19932_SHARP_){
if((p1__19930_SHARP_ > (0))){
return p2__19931_SHARP_;
} else {
return p3__19932_SHARP_;
}
}),a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null));

}
}
}
}));

goog.object.set(clojure.core.matrix.protocols.element_lt,"object",(function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19933_SHARP_){
if((p1__19933_SHARP_ < a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19934_SHARP_,p2__19935_SHARP_){
if((p1__19934_SHARP_ < p2__19935_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_le,"object",(function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19936_SHARP_){
if((p1__19936_SHARP_ <= a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19937_SHARP_,p2__19938_SHARP_){
if((p1__19937_SHARP_ <= p2__19938_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_gt,"object",(function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19939_SHARP_){
if((p1__19939_SHARP_ > a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19940_SHARP_,p2__19941_SHARP_){
if((p1__19940_SHARP_ > p2__19941_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_ge,"object",(function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19942_SHARP_){
if((p1__19942_SHARP_ >= a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19943_SHARP_,p2__19944_SHARP_){
if((p1__19943_SHARP_ >= p2__19944_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_ne,"object",(function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19945_SHARP_){
if((!((p1__19945_SHARP_ === a)))){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19946_SHARP_,p2__19947_SHARP_){
if((!((p1__19946_SHARP_ === p2__19947_SHARP_)))){
return (1);
} else {
return (0);
}
}),a);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_eq,"object",(function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19948_SHARP_){
if((p1__19948_SHARP_ === a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19949_SHARP_,p2__19950_SHARP_){
if((p1__19949_SHARP_ === p2__19950_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));
goog.object.set(clojure.core.matrix.protocols.PAddProduct,"number",true);

goog.object.set(clojure.core.matrix.protocols.add_product,"number",(function (m,a,b){
return clojure.core.matrix.protocols.matrix_add.call(null,clojure.core.matrix.protocols.element_multiply.call(null,a,b),m);
}));

goog.object.set(clojure.core.matrix.protocols.PAddProduct,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_product,"object",(function (m,a,b){
return clojure.core.matrix.protocols.matrix_add.call(null,m,clojure.core.matrix.protocols.element_multiply.call(null,a,b));
}));
goog.object.set(clojure.core.matrix.protocols.PAddProductMutable,"number",true);

goog.object.set(clojure.core.matrix.protocols.add_product_BANG_,"number",(function (m,a,b){
throw cljs.core.ex_info.call(null,"Numbers are not mutable",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PAddProductMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_product_BANG_,"object",(function (m,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m,clojure.core.matrix.protocols.element_multiply.call(null,a,b));
}));
goog.object.set(clojure.core.matrix.protocols.PAddScaled,"number",true);

goog.object.set(clojure.core.matrix.protocols.add_scaled,"number",(function (m,a,factor){
return clojure.core.matrix.protocols.matrix_add.call(null,clojure.core.matrix.protocols.scale.call(null,a,factor),m);
}));

goog.object.set(clojure.core.matrix.protocols.PAddScaled,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_scaled,"object",(function (m,a,factor){
return clojure.core.matrix.protocols.matrix_add.call(null,m,clojure.core.matrix.protocols.scale.call(null,a,factor));
}));
goog.object.set(clojure.core.matrix.protocols.PAddScaledMutable,"number",true);

goog.object.set(clojure.core.matrix.protocols.add_scaled_BANG_,"number",(function (m,a,factor){
throw cljs.core.ex_info.call(null,"Numbers are not mutable",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PAddScaledMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_scaled_BANG_,"object",(function (m,a,factor){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m,clojure.core.matrix.protocols.scale.call(null,a,factor));
}));
goog.object.set(clojure.core.matrix.protocols.PAddScaledProduct,"number",true);

goog.object.set(clojure.core.matrix.protocols.add_scaled_product,"number",(function (m,a,b,factor){
return clojure.core.matrix.protocols.matrix_add.call(null,clojure.core.matrix.protocols.scale.call(null,clojure.core.matrix.protocols.element_multiply.call(null,a,b),factor),m);
}));

goog.object.set(clojure.core.matrix.protocols.PAddScaledProduct,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_scaled_product,"object",(function (m,a,b,factor){
return clojure.core.matrix.protocols.matrix_add.call(null,m,clojure.core.matrix.protocols.scale.call(null,clojure.core.matrix.protocols.element_multiply.call(null,a,b),factor));
}));
goog.object.set(clojure.core.matrix.protocols.PAddScaledProductMutable,"number",true);

goog.object.set(clojure.core.matrix.protocols.add_scaled_product_BANG_,"number",(function (m,a,b,factor){
throw cljs.core.ex_info.call(null,"Numbers are not mutable",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PAddScaledProductMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_scaled_product_BANG_,"object",(function (m,a,b,factor){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m,clojure.core.matrix.protocols.scale.call(null,clojure.core.matrix.protocols.element_multiply.call(null,a,b),factor));
}));
goog.object.set(clojure.core.matrix.protocols.PScaleAdd,"object",true);

goog.object.set(clojure.core.matrix.protocols.scale_add_BANG_,"object",(function (m1,a,m2,b,constant){
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,m1,a);

if(((typeof b === 'number') && ((b === (0))))){
} else {
clojure.core.matrix.protocols.add_product_BANG_.call(null,m1,m2,b);
}

if(((typeof constant === 'number') && ((constant === (0))))){
} else {
clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m1,constant);
}

return m1;
}));
goog.object.set(clojure.core.matrix.protocols.PScaleAdd2,"object",true);

goog.object.set(clojure.core.matrix.protocols.scale_add,"object",(function (m1,a,m2,b,constant){
var r = clojure.core.matrix.protocols.matrix_add.call(null,clojure.core.matrix.protocols.scale.call(null,m1,a),clojure.core.matrix.protocols.scale.call(null,m2,b));
if((0.0 === constant)){
return r;
} else {
return clojure.core.matrix.protocols.matrix_add.call(null,r,constant);
}
}));
goog.object.set(clojure.core.matrix.protocols.PLerp,"object",true);

goog.object.set(clojure.core.matrix.protocols.lerp,"object",(function (a,b,factor){
return clojure.core.matrix.protocols.scale_add.call(null,a,(1.0 - factor),b,factor,0.0);
}));

goog.object.set(clojure.core.matrix.protocols.lerp_BANG_,"object",(function (a,b,factor){
return clojure.core.matrix.protocols.scale_add_BANG_.call(null,a,(1.0 - factor),b,factor,0.0);
}));
goog.object.set(clojure.core.matrix.protocols.PAddInnerProductMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_inner_product_BANG_,"object",(function() {
var G__19954 = null;
var G__19954__3 = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m,clojure.core.matrix.protocols.inner_product.call(null,a,b));
});
var G__19954__4 = (function (m,a,b,factor){
return clojure.core.matrix.protocols.add_scaled_BANG_.call(null,m,clojure.core.matrix.protocols.inner_product.call(null,a,b),factor);
});
G__19954 = function(m,a,b,factor){
switch(arguments.length){
case 3:
return G__19954__3.call(this,m,a,b);
case 4:
return G__19954__4.call(this,m,a,b,factor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19954.cljs$core$IFn$_invoke$arity$3 = G__19954__3;
G__19954.cljs$core$IFn$_invoke$arity$4 = G__19954__4;
return G__19954;
})()
);
goog.object.set(clojure.core.matrix.protocols.PAddOuterProductMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_outer_product_BANG_,"object",(function() {
var G__19955 = null;
var G__19955__3 = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m,clojure.core.matrix.protocols.outer_product.call(null,a,b));
});
var G__19955__4 = (function (m,a,b,factor){
return clojure.core.matrix.protocols.add_scaled_BANG_.call(null,m,clojure.core.matrix.protocols.outer_product.call(null,a,b),factor);
});
G__19955 = function(m,a,b,factor){
switch(arguments.length){
case 3:
return G__19955__3.call(this,m,a,b);
case 4:
return G__19955__4.call(this,m,a,b,factor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19955.cljs$core$IFn$_invoke$arity$3 = G__19955__3;
G__19955.cljs$core$IFn$_invoke$arity$4 = G__19955__4;
return G__19955;
})()
);
goog.object.set(clojure.core.matrix.protocols.PSetInnerProductMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.set_inner_product_BANG_,"object",(function() {
var G__19956 = null;
var G__19956__3 = (function (m,a,b){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.inner_product.call(null,a,b));
});
var G__19956__4 = (function (m,a,b,factor){
clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.inner_product.call(null,a,b));

return clojure.core.matrix.protocols.scale_BANG_.call(null,m,factor);
});
G__19956 = function(m,a,b,factor){
switch(arguments.length){
case 3:
return G__19956__3.call(this,m,a,b);
case 4:
return G__19956__4.call(this,m,a,b,factor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19956.cljs$core$IFn$_invoke$arity$3 = G__19956__3;
G__19956.cljs$core$IFn$_invoke$arity$4 = G__19956__4;
return G__19956;
})()
);
goog.object.set(clojure.core.matrix.protocols.PTypeInfo,"null",true);

goog.object.set(clojure.core.matrix.protocols.element_type,"null",(function (a){
return Object;
}));

goog.object.set(clojure.core.matrix.protocols.PTypeInfo,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_type,"object",(function (a){
if((Array === a.constructor)){
return cljs.core.type.call(null,a).getComponentType();
} else {
return Object;
}
}));
goog.object.set(clojure.core.matrix.protocols.PGenericValues,"object",true);

goog.object.set(clojure.core.matrix.protocols.generic_zero,"object",(function (m){
return (0);
}));

goog.object.set(clojure.core.matrix.protocols.generic_one,"object",(function (m){
return (1);
}));

goog.object.set(clojure.core.matrix.protocols.generic_value,"object",(function (m){
return (0);
}));
cljs.core.IFn.prototype.clojure$core$matrix$protocols$PVectorTransform$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IFn.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform$arity$2 = (function (m,a){
var m__$1 = this;
if(cljs.core.vector_QMARK_.call(null,m__$1)){
return clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1,a);
} else {
return m__$1.call(null,a);
}
});

cljs.core.IFn.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform_BANG_$arity$2 = (function (m,a){
var m__$1 = this;
if(cljs.core.vector_QMARK_.call(null,m__$1)){
return clojure.core.matrix.protocols.assign_BANG_.call(null,a,clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1,a));
} else {
return clojure.core.matrix.protocols.assign_BANG_.call(null,a,m__$1.call(null,a));
}
});

goog.object.set(clojure.core.matrix.protocols.PVectorTransform,"object",true);

goog.object.set(clojure.core.matrix.protocols.vector_transform,"object",(function (m,a){
if(((2) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
return clojure.core.matrix.protocols.matrix_multiply.call(null,m,a);
} else {
throw cljs.core.ex_info.call(null,["Don't know how to transform using: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}));

goog.object.set(clojure.core.matrix.protocols.vector_transform_BANG_,"object",(function (m,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,a,clojure.core.matrix.protocols.vector_transform.call(null,m,a));
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixScaling,"number",true);

goog.object.set(clojure.core.matrix.protocols.scale,"number",(function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.pre_scale,"number",(function (m,a){
if(typeof a === 'number'){
return (a * m);
} else {
return clojure.core.matrix.protocols.scale.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixScaling,"object",true);

goog.object.set(clojure.core.matrix.protocols.scale,"object",(function (m,a){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19957_SHARP_){
return (p1__19957_SHARP_ * a);
}));
}));

goog.object.set(clojure.core.matrix.protocols.pre_scale,"object",(function (m,a){
return clojure.core.matrix.protocols.element_map.call(null,m,cljs.core.partial.call(null,cljs.core._STAR_,a));
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixMutableScaling,"number",true);

goog.object.set(clojure.core.matrix.protocols.scale_BANG_,"number",(function (m,a){
throw cljs.core.ex_info.call(null,["Can't scale! a numeric value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.pre_scale_BANG_,"number",(function (m,a){
throw cljs.core.ex_info.call(null,["Can't pre-scale! a numeric value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixMutableScaling,"object",true);

goog.object.set(clojure.core.matrix.protocols.scale_BANG_,"object",(function (m,a){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19958_SHARP_){
return (p1__19958_SHARP_ * a);
}));

return m;
}));

goog.object.set(clojure.core.matrix.protocols.pre_scale_BANG_,"object",(function (m,a){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m,cljs.core.partial.call(null,cljs.core._STAR_,a));

return m;
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixAdd,"number",true);

goog.object.set(clojure.core.matrix.protocols.matrix_add,"number",(function (m,a){
if(typeof a === 'number'){
return (m + a);
} else {
return clojure.core.matrix.protocols.matrix_add.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.matrix_sub,"number",(function (m,a){
if(typeof a === 'number'){
return (m - a);
} else {
return clojure.core.matrix.protocols.negate.call(null,clojure.core.matrix.protocols.matrix_sub.call(null,a,m));
}
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixAdd,"object",true);

goog.object.set(clojure.core.matrix.protocols.matrix_add,"object",(function (m,a){
var vec__19959 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__19959,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__19959,(1),null);
return clojure.core.matrix.protocols.element_map.call(null,m__$1,cljs.core._PLUS_,a__$1);
}));

goog.object.set(clojure.core.matrix.protocols.matrix_sub,"object",(function (m,a){
var vec__19962 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__19962,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__19962,(1),null);
return clojure.core.matrix.protocols.element_map.call(null,m__$1,cljs.core._,a__$1);
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixAddMutable,"number",true);

goog.object.set(clojure.core.matrix.protocols.matrix_add_BANG_,"number",(function (m,a){
throw cljs.core.ex_info.call(null,"Can't do mutable add! on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.matrix_sub_BANG_,"number",(function (m,a){
throw cljs.core.ex_info.call(null,"Can't do mutable sub! on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixAddMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.matrix_add_BANG_,"object",(function (m,a){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,cljs.core._PLUS_,a);
}));

goog.object.set(clojure.core.matrix.protocols.matrix_sub_BANG_,"object",(function (m,a){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,cljs.core._,a);
}));
goog.object.set(clojure.core.matrix.protocols.PNegation,"null",true);

goog.object.set(clojure.core.matrix.protocols.negate,"null",(function (m){
throw cljs.core.ex_info.call(null,"Can't negate nil!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PNegation,"number",true);

goog.object.set(clojure.core.matrix.protocols.negate,"number",(function (m){
return (- m);
}));

goog.object.set(clojure.core.matrix.protocols.PNegation,"object",true);

goog.object.set(clojure.core.matrix.protocols.negate,"object",(function (m){
return clojure.core.matrix.protocols.scale.call(null,m,-1.0);
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixEquality,"null",true);

goog.object.set(clojure.core.matrix.protocols.matrix_equals,"null",(function (a,b){
throw cljs.core.ex_info.call(null,"nil is not a valid numerical value in equality testing",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixEquality,"number",true);

goog.object.set(clojure.core.matrix.protocols.matrix_equals,"number",(function (a,b){
if(typeof b === 'number'){
return (a === b);
} else {
if(((0) === clojure.core.matrix.protocols.dimensionality.call(null,b))){
return clojure.core.matrix.protocols.matrix_equals.call(null,b,a);
} else {
return false;

}
}
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixEquality,"object",true);

goog.object.set(clojure.core.matrix.protocols.matrix_equals,"object",(function (a,b){
if((a === b)){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shape_QMARK_.call(null,a,b))){
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a)))){
return (clojure.core.matrix.protocols.get_0d.call(null,a) === (function (){var x__8781__auto__ = b;
if(typeof x__8781__auto__ === 'number'){
return x__8781__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__8781__auto__);

}
})());
} else {
return cljs.core.not_any_QMARK_.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,cljs.core._EQ__EQ_,clojure.core.matrix.protocols.element_seq.call(null,a),clojure.core.matrix.protocols.element_seq.call(null,b)));
}
} else {
return false;

}
}
}));
goog.object.set(clojure.core.matrix.protocols.PValueEquality,"null",true);

goog.object.set(clojure.core.matrix.protocols.value_equals,"null",(function (a,b){
return (((b == null)) || (((((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)))) && ((clojure.core.matrix.protocols.get_0d.call(null,b) == null)))));
}));

goog.object.set(clojure.core.matrix.protocols.PValueEquality,"number",true);

goog.object.set(clojure.core.matrix.protocols.value_equals,"number",(function (a,b){
return ((((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)))) && ((a === clojure.core.matrix.protocols.get_0d.call(null,b))));
}));

goog.object.set(clojure.core.matrix.protocols.PValueEquality,"object",true);

goog.object.set(clojure.core.matrix.protocols.value_equals,"object",(function (a,b){
var and__4120__auto__ = clojure.core.matrix.protocols.same_shape_QMARK_.call(null,a,b);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,cljs.core._EQ_,clojure.core.matrix.protocols.element_seq.call(null,a),clojure.core.matrix.protocols.element_seq.call(null,b)));
} else {
return and__4120__auto__;
}
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixEqualityEpsilon,"null",true);

goog.object.set(clojure.core.matrix.protocols.matrix_equals_epsilon,"null",(function (a,b,eps){
throw cljs.core.ex_info.call(null,"nil is not a valid numerical value in equality testing",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixEqualityEpsilon,"number",true);

goog.object.set(clojure.core.matrix.protocols.matrix_equals_epsilon,"number",(function (a,b,eps){
if(typeof b === 'number'){
return (Math.abs((a - b)) <= eps);
} else {
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)))){
return (Math.abs((a - clojure.core.matrix.protocols.get_0d.call(null,b))) <= eps);
} else {
return false;

}
}
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixEqualityEpsilon,"object",true);

goog.object.set(clojure.core.matrix.protocols.matrix_equals_epsilon,"object",(function (a,b,eps){
if((a === b)){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shape_QMARK_.call(null,a,b))){
var eps__$1 = eps;
return cljs.core.every_QMARK_.call(null,((function (eps__$1){
return (function (p1__19965_SHARP_){
return (Math.abs(p1__19965_SHARP_) <= eps__$1);
});})(eps__$1))
,cljs.core.map.call(null,cljs.core._,clojure.core.matrix.protocols.element_seq.call(null,a),clojure.core.matrix.protocols.element_seq.call(null,b)));
} else {
return false;

}
}
}));
goog.object.set(clojure.core.matrix.protocols.PDoubleArrayOutput,"number",true);

goog.object.set(clojure.core.matrix.protocols.to_double_array,"number",(function (m){
var arr = cljs.core.double_array.call(null,(1));
(arr[(0)] = m);

return arr;
}));

goog.object.set(clojure.core.matrix.protocols.as_double_array,"number",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PDoubleArrayOutput,"object",true);

goog.object.set(clojure.core.matrix.protocols.to_double_array,"object",(function (m){
return cljs.core.double_array.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
}));

goog.object.set(clojure.core.matrix.protocols.as_double_array,"object",(function (m){
return null;
}));
goog.object.set(clojure.core.matrix.protocols.PObjectArrayOutput,"null",true);

goog.object.set(clojure.core.matrix.protocols.to_object_array,"null",(function (m){
var arr = cljs.core.object_array.call(null,(1));
return arr;
}));

goog.object.set(clojure.core.matrix.protocols.as_object_array,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PObjectArrayOutput,"number",true);

goog.object.set(clojure.core.matrix.protocols.to_object_array,"number",(function (m){
var arr = cljs.core.object_array.call(null,(1));
(arr[(0)] = m);

return arr;
}));

goog.object.set(clojure.core.matrix.protocols.as_object_array,"number",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PObjectArrayOutput,"object",true);

goog.object.set(clojure.core.matrix.protocols.to_object_array,"object",(function (m){
return cljs.core.object_array.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
}));

goog.object.set(clojure.core.matrix.protocols.as_object_array,"object",(function (m){
return null;
}));
goog.object.set(clojure.core.matrix.protocols.PRowOperations,"object",true);

goog.object.set(clojure.core.matrix.protocols.swap_rows,"object",(function (m,i,j){
return clojure.core.matrix.protocols.swap_rows.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),i,j);
}));

goog.object.set(clojure.core.matrix.protocols.multiply_row,"object",(function (m,i,k){
return clojure.core.matrix.protocols.multiply_row.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),i,k);
}));

goog.object.set(clojure.core.matrix.protocols.add_row,"object",(function (m,i,j,k){
return clojure.core.matrix.protocols.add_row.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),i,j,k);
}));
goog.object.set(clojure.core.matrix.protocols.PRowSetting,"object",true);

goog.object.set(clojure.core.matrix.protocols.set_row,"object",(function (m,i,row){
var svec = cljs.core.vec.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
var row__$1 = clojure.core.matrix.protocols.broadcast_like.call(null,svec.call(null,(0)),row);
return clojure.core.matrix.protocols.coerce_param.call(null,m,cljs.core.assoc.call(null,svec,i,row__$1));
}));

goog.object.set(clojure.core.matrix.protocols.set_row_BANG_,"object",(function (m,i,row){
var sl = clojure.core.matrix.protocols.get_major_slice_view.call(null,m,i);
var row__$1 = clojure.core.matrix.protocols.broadcast_like.call(null,sl,row);
clojure.core.matrix.protocols.assign_BANG_.call(null,sl,row__$1);

return m;
}));
goog.object.set(clojure.core.matrix.protocols.PColumnSetting,"object",true);

goog.object.set(clojure.core.matrix.protocols.set_column,"object",(function (m,i,column){
var scol = clojure.core.matrix.protocols.get_column.call(null,m,(0));
var column__$1 = clojure.core.matrix.protocols.broadcast_like.call(null,scol,column);
var indices = cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,column__$1,(0)));
var new_m = cljs.core.reduce.call(null,((function (scol,column__$1,indices){
return (function (acc,idx){
return clojure.core.matrix.protocols.set_2d.call(null,acc,idx,i,clojure.core.matrix.protocols.get_1d.call(null,column__$1,idx));
});})(scol,column__$1,indices))
,m,indices);
return clojure.core.matrix.protocols.coerce_param.call(null,m,new_m);
}));

goog.object.set(clojure.core.matrix.protocols.set_column_BANG_,"object",(function (m,i,column){
var scol = clojure.core.matrix.protocols.get_column.call(null,m,(0));
var column__$1 = clojure.core.matrix.protocols.broadcast_like.call(null,scol,column);
var n__4607__auto__ = clojure.core.matrix.protocols.dimension_count.call(null,column__$1,(0));
var j = (0);
while(true){
if((j < n__4607__auto__)){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,m,j,i,clojure.core.matrix.protocols.get_1d.call(null,column__$1,j));

var G__19966 = (j + (1));
j = G__19966;
continue;
} else {
return null;
}
break;
}
}));
goog.object.set(clojure.core.matrix.protocols.PSliceMap,"object",true);

goog.object.set(clojure.core.matrix.protocols.slice_map,"object",(function() {
var G__19967 = null;
var G__19967__2 = (function (m,f){
return clojure.core.matrix.impl.common.construct_matrix.call(null,m,cljs.core.mapv.call(null,f,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m)));
});
var G__19967__3 = (function (m,f,a){
return clojure.core.matrix.impl.common.construct_matrix.call(null,m,cljs.core.mapv.call(null,f,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m),clojure.core.matrix.protocols.get_major_slice_seq.call(null,a)));
});
var G__19967__4 = (function (m,f,a,more){
return clojure.core.matrix.impl.common.construct_matrix.call(null,m,cljs.core.apply.call(null,cljs.core.mapv,f,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m),clojure.core.matrix.protocols.get_major_slice_seq.call(null,a),cljs.core.map.call(null,clojure.core.matrix.protocols.get_major_slice_seq,more)));
});
G__19967 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__19967__2.call(this,m,f);
case 3:
return G__19967__3.call(this,m,f,a);
case 4:
return G__19967__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19967.cljs$core$IFn$_invoke$arity$2 = G__19967__2;
G__19967.cljs$core$IFn$_invoke$arity$3 = G__19967__3;
G__19967.cljs$core$IFn$_invoke$arity$4 = G__19967__4;
return G__19967;
})()
);
goog.object.set(clojure.core.matrix.protocols.PFilterSlices,"object",true);

goog.object.set(clojure.core.matrix.protocols.filter_slices,"object",(function (m,f){
var slcs = cljs.core.filterv.call(null,f,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
if(cljs.core.seq.call(null,slcs)){
return slcs;
} else {
return null;
}
}));
goog.object.set(clojure.core.matrix.protocols.PAddEmap,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_emap_BANG_,"object",(function() {
var G__19968 = null;
var G__19968__3 = (function (dest,f,a){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,dest,clojure.core.matrix.protocols.element_map.call(null,a,f));
});
var G__19968__4 = (function (dest,f,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,dest,clojure.core.matrix.protocols.element_map.call(null,a,f,b));
});
var G__19968__5 = (function (dest,f,a,b,more){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,dest,clojure.core.matrix.protocols.element_map.call(null,a,f,b,more));
});
G__19968 = function(dest,f,a,b,more){
switch(arguments.length){
case 3:
return G__19968__3.call(this,dest,f,a);
case 4:
return G__19968__4.call(this,dest,f,a,b);
case 5:
return G__19968__5.call(this,dest,f,a,b,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19968.cljs$core$IFn$_invoke$arity$3 = G__19968__3;
G__19968.cljs$core$IFn$_invoke$arity$4 = G__19968__4;
G__19968.cljs$core$IFn$_invoke$arity$5 = G__19968__5;
return G__19968;
})()
);
goog.object.set(clojure.core.matrix.protocols.PSetEmap,"object",true);

goog.object.set(clojure.core.matrix.protocols.set_emap_BANG_,"object",(function() {
var G__19969 = null;
var G__19969__3 = (function (dest,f,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,dest,clojure.core.matrix.protocols.element_map.call(null,a,f));
});
var G__19969__4 = (function (dest,f,a,b){
return clojure.core.matrix.protocols.assign_BANG_.call(null,dest,clojure.core.matrix.protocols.element_map.call(null,a,f,b));
});
var G__19969__5 = (function (dest,f,a,b,more){
return clojure.core.matrix.protocols.assign_BANG_.call(null,dest,clojure.core.matrix.protocols.element_map.call(null,a,f,b,more));
});
G__19969 = function(dest,f,a,b,more){
switch(arguments.length){
case 3:
return G__19969__3.call(this,dest,f,a);
case 4:
return G__19969__4.call(this,dest,f,a,b);
case 5:
return G__19969__5.call(this,dest,f,a,b,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19969.cljs$core$IFn$_invoke$arity$3 = G__19969__3;
G__19969.cljs$core$IFn$_invoke$arity$4 = G__19969__4;
G__19969.cljs$core$IFn$_invoke$arity$5 = G__19969__5;
return G__19969;
})()
);
goog.object.set(clojure.core.matrix.protocols.PFunctionalOperations,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_seq,"number",(function (m){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[m],null));
}));

goog.object.set(clojure.core.matrix.protocols.element_map,"number",(function() {
var G__19980 = null;
var G__19980__2 = (function (m,f){
return f.call(null,m);
});
var G__19980__3 = (function (m,f,a){
return clojure.core.matrix.protocols.element_map.call(null,a,(function (p1__19970_SHARP_){
return f.call(null,m,p1__19970_SHARP_);
}));
});
var G__19980__4 = (function (m,f,a,more){
var temp__5455__auto__ = cljs.core.next.call(null,more);
if(temp__5455__auto__){
var moremore = temp__5455__auto__;
return clojure.core.matrix.protocols.element_map.call(null,a,((function (moremore,temp__5455__auto__){
return (function() { 
var G__19981__delegate = function (p1__19971_SHARP_,p2__19972_SHARP_,rest__19973_SHARP_){
return cljs.core.apply.call(null,f,m,p1__19971_SHARP_,p2__19972_SHARP_,rest__19973_SHARP_);
};
var G__19981 = function (p1__19971_SHARP_,p2__19972_SHARP_,var_args){
var rest__19973_SHARP_ = null;
if (arguments.length > 2) {
var G__19982__i = 0, G__19982__a = new Array(arguments.length -  2);
while (G__19982__i < G__19982__a.length) {G__19982__a[G__19982__i] = arguments[G__19982__i + 2]; ++G__19982__i;}
  rest__19973_SHARP_ = new cljs.core.IndexedSeq(G__19982__a,0,null);
} 
return G__19981__delegate.call(this,p1__19971_SHARP_,p2__19972_SHARP_,rest__19973_SHARP_);};
G__19981.cljs$lang$maxFixedArity = 2;
G__19981.cljs$lang$applyTo = (function (arglist__19983){
var p1__19971_SHARP_ = cljs.core.first(arglist__19983);
arglist__19983 = cljs.core.next(arglist__19983);
var p2__19972_SHARP_ = cljs.core.first(arglist__19983);
var rest__19973_SHARP_ = cljs.core.rest(arglist__19983);
return G__19981__delegate(p1__19971_SHARP_,p2__19972_SHARP_,rest__19973_SHARP_);
});
G__19981.cljs$core$IFn$_invoke$arity$variadic = G__19981__delegate;
return G__19981;
})()
;})(moremore,temp__5455__auto__))
,cljs.core.first.call(null,more),moremore);
} else {
return clojure.core.matrix.protocols.element_map.call(null,a,((function (temp__5455__auto__){
return (function (p1__19974_SHARP_,p2__19975_SHARP_){
return f.call(null,m,p1__19974_SHARP_,p2__19975_SHARP_);
});})(temp__5455__auto__))
,cljs.core.first.call(null,more));
}
});
G__19980 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__19980__2.call(this,m,f);
case 3:
return G__19980__3.call(this,m,f,a);
case 4:
return G__19980__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19980.cljs$core$IFn$_invoke$arity$2 = G__19980__2;
G__19980.cljs$core$IFn$_invoke$arity$3 = G__19980__3;
G__19980.cljs$core$IFn$_invoke$arity$4 = G__19980__4;
return G__19980;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_map_BANG_,"number",(function() {
var G__19984 = null;
var G__19984__2 = (function (m,f){
throw cljs.core.ex_info.call(null,"java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
var G__19984__3 = (function (m,f,a){
throw cljs.core.ex_info.call(null,"java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
var G__19984__4 = (function (m,f,a,more){
throw cljs.core.ex_info.call(null,"java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
G__19984 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__19984__2.call(this,m,f);
case 3:
return G__19984__3.call(this,m,f,a);
case 4:
return G__19984__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19984.cljs$core$IFn$_invoke$arity$2 = G__19984__2;
G__19984.cljs$core$IFn$_invoke$arity$3 = G__19984__3;
G__19984.cljs$core$IFn$_invoke$arity$4 = G__19984__4;
return G__19984;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_reduce,"number",(function() {
var G__19985 = null;
var G__19985__2 = (function (m,f){
return m;
});
var G__19985__3 = (function (m,f,init){
return f.call(null,init,m);
});
G__19985 = function(m,f,init){
switch(arguments.length){
case 2:
return G__19985__2.call(this,m,f);
case 3:
return G__19985__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19985.cljs$core$IFn$_invoke$arity$2 = G__19985__2;
G__19985.cljs$core$IFn$_invoke$arity$3 = G__19985__3;
return G__19985;
})()
);

goog.object.set(clojure.core.matrix.protocols.PFunctionalOperations,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_seq,"object",(function (m){
var c = cljs.core.type.call(null,m);
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if((dims > (1))){
return cljs.core.mapcat.call(null,clojure.core.matrix.protocols.element_seq,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
} else {
if(cljs.core.seq_QMARK_.call(null,m)){
return m;
} else {
if(((0) === dims)){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[clojure.core.matrix.protocols.get_0d.call(null,m)],null));
} else {
if(cljs.core._EQ_.call(null,Array,c)){
return m;
} else {
if(((1) === dims)){
return clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m);
} else {
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return cljs.core.mapcat.call(null,clojure.core.matrix.protocols.element_seq,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
} else {
throw cljs.core.ex_info.call(null,["Don't know how to create element-seq from: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
}
}
}));

goog.object.set(clojure.core.matrix.protocols.element_map,"object",(function() {
var G__19986 = null;
var G__19986__2 = (function (m,f){
return clojure.core.matrix.impl.common.construct_matrix.call(null,m,clojure.core.matrix.impl.common.mapmatrix.call(null,f,m));
});
var G__19986__3 = (function (m,f,a){
var vec__19977 = clojure.core.matrix.protocols.broadcast_same_shape.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__19977,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__19977,(1),null);
return clojure.core.matrix.impl.common.construct_matrix.call(null,m__$1,clojure.core.matrix.impl.common.mapmatrix.call(null,f,m__$1,a__$1));
});
var G__19986__4 = (function (m,f,a,more){
var arrays = cljs.core.cons.call(null,m,cljs.core.cons.call(null,a,more));
var shapes = cljs.core.map.call(null,clojure.core.matrix.protocols.get_shape,arrays);
var sh = (function (){var or__4131__auto__ = clojure.core.matrix.protocols.common_shape.call(null,shapes);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.call(null,["Attempt to do element map with incompatible shapes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.call(null,clojure.core.matrix.protocols.get_shape,arrays))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var arrays__$1 = cljs.core.map.call(null,((function (arrays,shapes,sh){
return (function (p1__19976_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,p1__19976_SHARP_,sh);
});})(arrays,shapes,sh))
,arrays);
return clojure.core.matrix.impl.common.construct_matrix.call(null,m,cljs.core.apply.call(null,clojure.core.matrix.impl.common.mapmatrix,f,arrays__$1));
});
G__19986 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__19986__2.call(this,m,f);
case 3:
return G__19986__3.call(this,m,f,a);
case 4:
return G__19986__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19986.cljs$core$IFn$_invoke$arity$2 = G__19986__2;
G__19986.cljs$core$IFn$_invoke$arity$3 = G__19986__3;
G__19986.cljs$core$IFn$_invoke$arity$4 = G__19986__4;
return G__19986;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_map_BANG_,"object",(function() {
var G__19987 = null;
var G__19987__2 = (function (m,f){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map.call(null,m,f));
});
var G__19987__3 = (function (m,f,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map.call(null,m,f,a));
});
var G__19987__4 = (function (m,f,a,more){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map.call(null,m,f,a,more));
});
G__19987 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__19987__2.call(this,m,f);
case 3:
return G__19987__3.call(this,m,f,a);
case 4:
return G__19987__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19987.cljs$core$IFn$_invoke$arity$2 = G__19987__2;
G__19987.cljs$core$IFn$_invoke$arity$3 = G__19987__3;
G__19987.cljs$core$IFn$_invoke$arity$4 = G__19987__4;
return G__19987;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_reduce,"object",(function() {
var G__19988 = null;
var G__19988__2 = (function (m,f){
return cljs.core.reduce.call(null,f,clojure.core.matrix.protocols.element_seq.call(null,m));
});
var G__19988__3 = (function (m,f,init){
return cljs.core.reduce.call(null,f,init,clojure.core.matrix.protocols.element_seq.call(null,m));
});
G__19988 = function(m,f,init){
switch(arguments.length){
case 2:
return G__19988__2.call(this,m,f);
case 3:
return G__19988__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19988.cljs$core$IFn$_invoke$arity$2 = G__19988__2;
G__19988.cljs$core$IFn$_invoke$arity$3 = G__19988__3;
return G__19988;
})()
);

goog.object.set(clojure.core.matrix.protocols.PFunctionalOperations,"null",true);

goog.object.set(clojure.core.matrix.protocols.element_seq,"null",(function (m){
return cljs.core.list(null);
}));

goog.object.set(clojure.core.matrix.protocols.element_map,"null",(function() {
var G__19989 = null;
var G__19989__2 = (function (m,f){
return f.call(null,null);
});
var G__19989__3 = (function (m,f,a){
return f.call(null,null,a);
});
var G__19989__4 = (function (m,f,a,more){
return cljs.core.apply.call(null,f,null,a,more);
});
G__19989 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__19989__2.call(this,m,f);
case 3:
return G__19989__3.call(this,m,f,a);
case 4:
return G__19989__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19989.cljs$core$IFn$_invoke$arity$2 = G__19989__2;
G__19989.cljs$core$IFn$_invoke$arity$3 = G__19989__3;
G__19989.cljs$core$IFn$_invoke$arity$4 = G__19989__4;
return G__19989;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_map_BANG_,"null",(function() {
var G__19990 = null;
var G__19990__2 = (function (m,f){
throw cljs.core.ex_info.call(null,"Can't do element-map! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__19990__3 = (function (m,f,a){
throw cljs.core.ex_info.call(null,"Can't do element-map! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__19990__4 = (function (m,f,a,more){
throw cljs.core.ex_info.call(null,"Can't do element-map! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
G__19990 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__19990__2.call(this,m,f);
case 3:
return G__19990__3.call(this,m,f,a);
case 4:
return G__19990__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19990.cljs$core$IFn$_invoke$arity$2 = G__19990__2;
G__19990.cljs$core$IFn$_invoke$arity$3 = G__19990__3;
G__19990.cljs$core$IFn$_invoke$arity$4 = G__19990__4;
return G__19990;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_reduce,"null",(function() {
var G__19991 = null;
var G__19991__2 = (function (m,f){
return null;
});
var G__19991__3 = (function (m,f,init){
return f.call(null,init,null);
});
G__19991 = function(m,f,init){
switch(arguments.length){
case 2:
return G__19991__2.call(this,m,f);
case 3:
return G__19991__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19991.cljs$core$IFn$_invoke$arity$2 = G__19991__2;
G__19991.cljs$core$IFn$_invoke$arity$3 = G__19991__3;
return G__19991;
})()
);

cljs.core.List.prototype.clojure$core$matrix$protocols$PFunctionalOperations$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_seq$arity$1 = (function (m){
var m__$1 = this;
if(((0) === cljs.core.count.call(null,m__$1))){
return null;
} else {
if((cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,m__$1,(0)))) >= (1))){
return cljs.core.mapcat.call(null,clojure.core.matrix.protocols.element_seq,m__$1);
} else {
return m__$1;

}
}
});
clojure.core.matrix.impl.defaults.cart = (function clojure$core$matrix$impl$defaults$cart(colls){
if(cljs.core.empty_QMARK_.call(null,colls)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
var iter__4523__auto__ = (function clojure$core$matrix$impl$defaults$cart_$_iter__19992(s__19993){
return (new cljs.core.LazySeq(null,(function (){
var s__19993__$1 = s__19993;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__19993__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4519__auto__ = ((function (s__19993__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function clojure$core$matrix$impl$defaults$cart_$_iter__19992_$_iter__19994(s__19995){
return (new cljs.core.LazySeq(null,((function (s__19993__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__19995__$1 = s__19995;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__19995__$1);
if(temp__5457__auto____$1){
var s__19995__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19995__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__19995__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__19997 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__19996 = (0);
while(true){
if((i__19996 < size__4522__auto__)){
var more = cljs.core._nth.call(null,c__4521__auto__,i__19996);
cljs.core.chunk_append.call(null,b__19997,cljs.core.cons.call(null,x,more));

var G__19998 = (i__19996 + (1));
i__19996 = G__19998;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19997),clojure$core$matrix$impl$defaults$cart_$_iter__19992_$_iter__19994.call(null,cljs.core.chunk_rest.call(null,s__19995__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19997),null);
}
} else {
var more = cljs.core.first.call(null,s__19995__$2);
return cljs.core.cons.call(null,cljs.core.cons.call(null,x,more),clojure$core$matrix$impl$defaults$cart_$_iter__19992_$_iter__19994.call(null,cljs.core.rest.call(null,s__19995__$2)));
}
} else {
return null;
}
break;
}
});})(s__19993__$1,x,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__19993__$1,x,xs__6012__auto__,temp__5457__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,clojure.core.matrix.impl.defaults.cart.call(null,cljs.core.rest.call(null,colls))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,clojure$core$matrix$impl$defaults$cart_$_iter__19992.call(null,cljs.core.rest.call(null,s__19993__$1)));
} else {
var G__19999 = cljs.core.rest.call(null,s__19993__$1);
s__19993__$1 = G__19999;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.first.call(null,colls));
}
});
clojure.core.matrix.impl.defaults.indices_seq = (function clojure$core$matrix$impl$defaults$indices_seq(m){
return clojure.core.matrix.impl.defaults.cart.call(null,cljs.core.map.call(null,cljs.core.range,clojure.core.matrix.protocols.get_shape.call(null,m)));
});
goog.object.set(clojure.core.matrix.protocols.PMapIndexed,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_map_indexed,"number",(function() {
var G__20011 = null;
var G__20011__2 = (function (m,f){
return f.call(null,cljs.core.PersistentVector.EMPTY,m);
});
var G__20011__3 = (function (m,f,a){
return clojure.core.matrix.protocols.element_map.call(null,a,(function (p1__20000_SHARP_){
return f.call(null,cljs.core.PersistentVector.EMPTY,m,p1__20000_SHARP_);
}));
});
var G__20011__4 = (function (m,f,a,more){
var temp__5455__auto__ = cljs.core.next.call(null,more);
if(temp__5455__auto__){
var moremore = temp__5455__auto__;
return clojure.core.matrix.protocols.element_map.call(null,a,((function (moremore,temp__5455__auto__){
return (function() { 
var G__20012__delegate = function (p1__20001_SHARP_,p2__20002_SHARP_,rest__20003_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.PersistentVector.EMPTY,m,p1__20001_SHARP_,p2__20002_SHARP_,rest__20003_SHARP_);
};
var G__20012 = function (p1__20001_SHARP_,p2__20002_SHARP_,var_args){
var rest__20003_SHARP_ = null;
if (arguments.length > 2) {
var G__20013__i = 0, G__20013__a = new Array(arguments.length -  2);
while (G__20013__i < G__20013__a.length) {G__20013__a[G__20013__i] = arguments[G__20013__i + 2]; ++G__20013__i;}
  rest__20003_SHARP_ = new cljs.core.IndexedSeq(G__20013__a,0,null);
} 
return G__20012__delegate.call(this,p1__20001_SHARP_,p2__20002_SHARP_,rest__20003_SHARP_);};
G__20012.cljs$lang$maxFixedArity = 2;
G__20012.cljs$lang$applyTo = (function (arglist__20014){
var p1__20001_SHARP_ = cljs.core.first(arglist__20014);
arglist__20014 = cljs.core.next(arglist__20014);
var p2__20002_SHARP_ = cljs.core.first(arglist__20014);
var rest__20003_SHARP_ = cljs.core.rest(arglist__20014);
return G__20012__delegate(p1__20001_SHARP_,p2__20002_SHARP_,rest__20003_SHARP_);
});
G__20012.cljs$core$IFn$_invoke$arity$variadic = G__20012__delegate;
return G__20012;
})()
;})(moremore,temp__5455__auto__))
,cljs.core.first.call(null,more),moremore);
} else {
return clojure.core.matrix.protocols.element_map.call(null,a,((function (temp__5455__auto__){
return (function (p1__20004_SHARP_,p2__20005_SHARP_){
return f.call(null,cljs.core.PersistentVector.EMPTY,m,p1__20004_SHARP_,p2__20005_SHARP_);
});})(temp__5455__auto__))
,cljs.core.first.call(null,more));
}
});
G__20011 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__20011__2.call(this,m,f);
case 3:
return G__20011__3.call(this,m,f,a);
case 4:
return G__20011__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20011.cljs$core$IFn$_invoke$arity$2 = G__20011__2;
G__20011.cljs$core$IFn$_invoke$arity$3 = G__20011__3;
G__20011.cljs$core$IFn$_invoke$arity$4 = G__20011__4;
return G__20011;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_map_indexed_BANG_,"number",(function() {
var G__20015 = null;
var G__20015__2 = (function (m,f){
throw cljs.core.ex_info.call(null,"java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
var G__20015__3 = (function (m,f,a){
throw cljs.core.ex_info.call(null,"java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
var G__20015__4 = (function (m,f,a,more){
throw cljs.core.ex_info.call(null,"java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
G__20015 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__20015__2.call(this,m,f);
case 3:
return G__20015__3.call(this,m,f,a);
case 4:
return G__20015__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20015.cljs$core$IFn$_invoke$arity$2 = G__20015__2;
G__20015.cljs$core$IFn$_invoke$arity$3 = G__20015__3;
G__20015.cljs$core$IFn$_invoke$arity$4 = G__20015__4;
return G__20015;
})()
);

goog.object.set(clojure.core.matrix.protocols.PMapIndexed,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_map_indexed,"object",(function() {
var G__20016 = null;
var G__20016__2 = (function (m,f){
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
return f.call(null,cljs.core.PersistentVector.EMPTY,clojure.core.matrix.protocols.get_0d.call(null,m));
} else {
var s = cljs.core.map.call(null,f,clojure.core.matrix.impl.defaults.indices_seq.call(null,m),clojure.core.matrix.protocols.element_seq.call(null,m));
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.coerce_param.call(null,m,s),clojure.core.matrix.protocols.get_shape.call(null,m));
}
});
var G__20016__3 = (function (m,f,a){
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
var v = clojure.core.matrix.protocols.get_0d.call(null,m);
return clojure.core.matrix.protocols.element_map_indexed.call(null,a,((function (v){
return (function (p1__20006_SHARP_,p2__20007_SHARP_){
return f.call(null,p1__20006_SHARP_,v,p2__20007_SHARP_);
});})(v))
);
} else {
var vec__20008 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__20008,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__20008,(1),null);
var s = cljs.core.map.call(null,f,clojure.core.matrix.impl.defaults.indices_seq.call(null,m__$1),clojure.core.matrix.protocols.element_seq.call(null,m__$1),clojure.core.matrix.protocols.element_seq.call(null,a__$1));
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.coerce_param.call(null,m__$1,s),clojure.core.matrix.protocols.get_shape.call(null,m__$1));
}
});
var G__20016__4 = (function (m,f,a,more){
var s = cljs.core.map.call(null,f,clojure.core.matrix.protocols.element_seq.call(null,m),clojure.core.matrix.protocols.element_seq.call(null,a));
var s__$1 = cljs.core.apply.call(null,cljs.core.map,f,cljs.core.list_STAR_.call(null,clojure.core.matrix.impl.defaults.indices_seq.call(null,m),clojure.core.matrix.protocols.element_seq.call(null,m),clojure.core.matrix.protocols.element_seq.call(null,a),cljs.core.map.call(null,clojure.core.matrix.protocols.element_seq,more)));
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.coerce_param.call(null,m,s__$1),clojure.core.matrix.protocols.get_shape.call(null,m));
});
G__20016 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__20016__2.call(this,m,f);
case 3:
return G__20016__3.call(this,m,f,a);
case 4:
return G__20016__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20016.cljs$core$IFn$_invoke$arity$2 = G__20016__2;
G__20016.cljs$core$IFn$_invoke$arity$3 = G__20016__3;
G__20016.cljs$core$IFn$_invoke$arity$4 = G__20016__4;
return G__20016;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_map_indexed_BANG_,"object",(function() {
var G__20017 = null;
var G__20017__2 = (function (m,f){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map_indexed.call(null,m,f));
});
var G__20017__3 = (function (m,f,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map_indexed.call(null,m,f,a));
});
var G__20017__4 = (function (m,f,a,more){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map_indexed.call(null,m,f,a,more));
});
G__20017 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__20017__2.call(this,m,f);
case 3:
return G__20017__3.call(this,m,f,a);
case 4:
return G__20017__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20017.cljs$core$IFn$_invoke$arity$2 = G__20017__2;
G__20017.cljs$core$IFn$_invoke$arity$3 = G__20017__3;
G__20017.cljs$core$IFn$_invoke$arity$4 = G__20017__4;
return G__20017;
})()
);

goog.object.set(clojure.core.matrix.protocols.PMapIndexed,"null",true);

goog.object.set(clojure.core.matrix.protocols.element_map_indexed,"null",(function() {
var G__20018 = null;
var G__20018__2 = (function (m,f){
return f.call(null,cljs.core.PersistentVector.EMPTY,null);
});
var G__20018__3 = (function (m,f,a){
return f.call(null,cljs.core.PersistentVector.EMPTY,null,a);
});
var G__20018__4 = (function (m,f,a,more){
return cljs.core.apply.call(null,f,cljs.core.PersistentVector.EMPTY,null,a,more);
});
G__20018 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__20018__2.call(this,m,f);
case 3:
return G__20018__3.call(this,m,f,a);
case 4:
return G__20018__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20018.cljs$core$IFn$_invoke$arity$2 = G__20018__2;
G__20018.cljs$core$IFn$_invoke$arity$3 = G__20018__3;
G__20018.cljs$core$IFn$_invoke$arity$4 = G__20018__4;
return G__20018;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_map_indexed_BANG_,"null",(function() {
var G__20019 = null;
var G__20019__2 = (function (m,f){
throw cljs.core.ex_info.call(null,"Can't do element-map-indexed! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__20019__3 = (function (m,f,a){
throw cljs.core.ex_info.call(null,"Can't do element-map-indexed! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__20019__4 = (function (m,f,a,more){
throw cljs.core.ex_info.call(null,"Can't do element-map-indexed! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
G__20019 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__20019__2.call(this,m,f);
case 3:
return G__20019__3.call(this,m,f,a);
case 4:
return G__20019__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20019.cljs$core$IFn$_invoke$arity$2 = G__20019__2;
G__20019.cljs$core$IFn$_invoke$arity$3 = G__20019__3;
G__20019.cljs$core$IFn$_invoke$arity$4 = G__20019__4;
return G__20019;
})()
);
goog.object.set(clojure.core.matrix.protocols.PElementCount,"null",true);

goog.object.set(clojure.core.matrix.protocols.element_count,"null",(function (m){
return (1);
}));

goog.object.set(clojure.core.matrix.protocols.PElementCount,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_count,"number",(function (m){
return (1);
}));

goog.object.set(clojure.core.matrix.protocols.PElementCount,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_count,"object",(function (m){
return clojure.core.matrix.impl.defaults.calc_element_count.call(null,m);
}));
goog.object.set(clojure.core.matrix.protocols.PValidateShape,"null",true);

goog.object.set(clojure.core.matrix.protocols.validate_shape,"null",(function() {
var G__20021 = null;
var G__20021__1 = (function (m){
return null;
});
var G__20021__2 = (function (m,shape){
if((shape == null)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Shape validation failed, was scalar but expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
G__20021 = function(m,shape){
switch(arguments.length){
case 1:
return G__20021__1.call(this,m);
case 2:
return G__20021__2.call(this,m,shape);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20021.cljs$core$IFn$_invoke$arity$1 = G__20021__1;
G__20021.cljs$core$IFn$_invoke$arity$2 = G__20021__2;
return G__20021;
})()
);

goog.object.set(clojure.core.matrix.protocols.PValidateShape,"object",true);

goog.object.set(clojure.core.matrix.protocols.validate_shape,"object",(function() {
var G__20022 = null;
var G__20022__1 = (function (m){
return clojure.core.matrix.protocols.validate_shape.call(null,m,clojure.core.matrix.protocols.get_shape.call(null,m));
});
var G__20022__2 = (function (m,expected_shape){
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
var sh = clojure.core.matrix.protocols.get_shape.call(null,m);
if((sh == null)){
if((expected_shape == null)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Shape validation failed, was scalar but expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.vec.call(null,sh),cljs.core.vec.call(null,expected_shape))){
return sh;
} else {
throw cljs.core.ex_info.call(null,["Shape validation failed, was ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sh)," but expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
} else {
var sh = clojure.core.matrix.protocols.get_shape.call(null,m);
var ss = clojure.core.matrix.protocols.get_major_slice_seq.call(null,m);
var efirst = (function (){var or__4131__auto__ = cljs.core.first.call(null,expected_shape);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.call(null,["Shape validation failed, was ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sh)," but expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var enext = cljs.core.next.call(null,expected_shape);
var shapes = cljs.core.mapv.call(null,((function (sh,ss,efirst,enext){
return (function (p1__20020_SHARP_){
return clojure.core.matrix.protocols.validate_shape.call(null,p1__20020_SHARP_,enext);
});})(sh,ss,efirst,enext))
,ss);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,enext,shapes))){
return cljs.core.vec.call(null,cljs.core.cons.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)),cljs.core.first.call(null,shapes)));
} else {
throw cljs.core.ex_info.call(null,["Inconsistent shapes for sub arrays in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

}
});
G__20022 = function(m,expected_shape){
switch(arguments.length){
case 1:
return G__20022__1.call(this,m);
case 2:
return G__20022__2.call(this,m,expected_shape);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20022.cljs$core$IFn$_invoke$arity$1 = G__20022__1;
G__20022.cljs$core$IFn$_invoke$arity$2 = G__20022__2;
return G__20022;
})()
);
goog.object.set(clojure.core.matrix.protocols.PMatrixSlices,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_row,"object",(function (m,i){
if((Array === m.constructor)){
return cljs.core.nth.call(null,m,i);
} else {
return clojure.core.matrix.protocols.get_major_slice.call(null,m,i);
}
}));

goog.object.set(clojure.core.matrix.protocols.get_column,"object",(function (m,i){
return clojure.core.matrix.protocols.get_slice.call(null,m,(1),i);
}));

goog.object.set(clojure.core.matrix.protocols.get_major_slice,"object",(function (m,i){
if((Array === m.constructor)){
return cljs.core.nth.call(null,m,i);
} else {
if(((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
return clojure.core.matrix.protocols.get_1d.call(null,m,i);
} else {
return clojure.core.matrix.impl.wrappers.wrap_slice.call(null,m,i);

}
}
}));

goog.object.set(clojure.core.matrix.protocols.get_slice,"object",(function (m,dimension,i){
var ldimension = cljs.core.long$.call(null,dimension);
if(((0) === ldimension)){
return clojure.core.matrix.protocols.get_major_slice.call(null,m,i);
} else {
return clojure.core.matrix.protocols.get_slice.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),dimension,i);

}
}));
goog.object.set(clojure.core.matrix.protocols.PBLASBase,"object",true);

goog.object.set(clojure.core.matrix.protocols.gemm_BANG_,"object",(function (c,trans_a_QMARK_,trans_b_QMARK_,alpha,a,b,beta){
var a__$1 = (cljs.core.truth_(trans_a_QMARK_)?clojure.core.matrix.protocols.transpose.call(null,a):a);
var b__$1 = (cljs.core.truth_(trans_b_QMARK_)?clojure.core.matrix.protocols.transpose.call(null,b):b);
if((!((1.0 === beta)))){
clojure.core.matrix.protocols.scale_BANG_.call(null,c,beta);
} else {
}

return clojure.core.matrix.protocols.add_inner_product_BANG_.call(null,c,a__$1,b__$1,alpha);
}));

goog.object.set(clojure.core.matrix.protocols.gemv_BANG_,"object",(function (c,trans_a_QMARK_,alpha,a,b,beta){
var a__$1 = (cljs.core.truth_(trans_a_QMARK_)?clojure.core.matrix.protocols.transpose.call(null,a):a);
if((!((1.0 === beta)))){
clojure.core.matrix.protocols.scale_BANG_.call(null,c,beta);
} else {
}

return clojure.core.matrix.protocols.add_inner_product_BANG_.call(null,c,a__$1,b,alpha);
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixColumns,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_columns,"object",(function (m){
var G__20023 = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
switch (G__20023) {
case (0):
throw cljs.core.ex_info.call(null,"Can't get columns of a 0-dimensional object",cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
throw cljs.core.ex_info.call(null,"Can't get columns of a 1-dimensional object",cljs.core.PersistentArrayMap.EMPTY);

break;
case (2):
return cljs.core.vec.call(null,clojure.core.matrix.protocols.get_slice_seq.call(null,m,(1)));

break;
default:
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,clojure.core.matrix.protocols.get_columns,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m)));

}
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixRows,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_rows,"object",(function (m){
var G__20025 = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
switch (G__20025) {
case (0):
throw cljs.core.ex_info.call(null,"Can't get rows of a 0-dimensional object",cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
throw cljs.core.ex_info.call(null,"Can't get rows of a 1-dimensional object",cljs.core.PersistentArrayMap.EMPTY);

break;
case (2):
return cljs.core.vec.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));

break;
default:
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,clojure.core.matrix.protocols.get_rows,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m)));

}
}));
goog.object.set(clojure.core.matrix.protocols.PSliceView,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_major_slice_view,"object",(function (m,i){
if((Array === m.constructor)){
var ss = cljs.core.nth.call(null,m,i);
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,ss))){
return ss;
} else {
return clojure.core.matrix.impl.wrappers.wrap_slice.call(null,m,i);
}
} else {
return clojure.core.matrix.impl.wrappers.wrap_slice.call(null,m,i);

}
}));
goog.object.set(clojure.core.matrix.protocols.PSliceView2,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_slice_view,"object",(function (m,dim,i){
if((dim === (0))){
return clojure.core.matrix.protocols.get_major_slice_view.call(null,m,i);
} else {
return clojure.core.matrix.protocols.get_slice_view.call(null,clojure.core.matrix.impl.wrappers.wrap_nd.call(null,m),dim,i);
}
}));
goog.object.set(clojure.core.matrix.protocols.PSliceSeq,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_major_slice_seq,"object",(function (m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if((dims <= (0))){
throw cljs.core.ex_info.call(null,["Can't get slices on [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dims),"]-dimensional object"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,m))){
return cljs.core.seq.call(null,m);
} else {
if((dims === (1))){
var iter__4523__auto__ = ((function (dims){
return (function clojure$core$matrix$impl$defaults$iter__20028(s__20029){
return (new cljs.core.LazySeq(null,((function (dims){
return (function (){
var s__20029__$1 = s__20029;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__20029__$1);
if(temp__5457__auto__){
var s__20029__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20029__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__20029__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__20031 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__20030 = (0);
while(true){
if((i__20030 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__20030);
cljs.core.chunk_append.call(null,b__20031,clojure.core.matrix.protocols.get_1d.call(null,m,i));

var G__20032 = (i__20030 + (1));
i__20030 = G__20032;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20031),clojure$core$matrix$impl$defaults$iter__20028.call(null,cljs.core.chunk_rest.call(null,s__20029__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20031),null);
}
} else {
var i = cljs.core.first.call(null,s__20029__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.get_1d.call(null,m,i),clojure$core$matrix$impl$defaults$iter__20028.call(null,cljs.core.rest.call(null,s__20029__$2)));
}
} else {
return null;
}
break;
}
});})(dims))
,null,null));
});})(dims))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0))));
} else {
return cljs.core.map.call(null,((function (dims){
return (function (p1__20027_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,m,p1__20027_SHARP_);
});})(dims))
,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0))));

}
}
}
}));
goog.object.set(clojure.core.matrix.protocols.PSliceSeq2,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_slice_seq,"object",(function (m,dimension){
var ldimension = cljs.core.long$.call(null,dimension);
if((ldimension === (0))){
return clojure.core.matrix.protocols.get_major_slice_seq.call(null,m);
} else {
if((ldimension < (0))){
throw cljs.core.ex_info.call(null,["Can't get slices of a negative dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dimension)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.map.call(null,((function (ldimension){
return (function (p1__20033_SHARP_){
return clojure.core.matrix.protocols.get_slice.call(null,m,dimension,p1__20033_SHARP_);
});})(ldimension))
,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,dimension)));

}
}
}));
goog.object.set(clojure.core.matrix.protocols.PSliceViewSeq,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_major_slice_view_seq,"object",(function (m){
var n = clojure.core.matrix.protocols.dimension_count.call(null,m,(0));
var iter__4523__auto__ = ((function (n){
return (function clojure$core$matrix$impl$defaults$iter__20034(s__20035){
return (new cljs.core.LazySeq(null,((function (n){
return (function (){
var s__20035__$1 = s__20035;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__20035__$1);
if(temp__5457__auto__){
var s__20035__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20035__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__20035__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__20037 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__20036 = (0);
while(true){
if((i__20036 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__20036);
cljs.core.chunk_append.call(null,b__20037,clojure.core.matrix.protocols.get_major_slice_view.call(null,m,i));

var G__20038 = (i__20036 + (1));
i__20036 = G__20038;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20037),clojure$core$matrix$impl$defaults$iter__20034.call(null,cljs.core.chunk_rest.call(null,s__20035__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20037),null);
}
} else {
var i = cljs.core.first.call(null,s__20035__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.get_major_slice_view.call(null,m,i),clojure$core$matrix$impl$defaults$iter__20034.call(null,cljs.core.rest.call(null,s__20035__$2)));
}
} else {
return null;
}
break;
}
});})(n))
,null,null));
});})(n))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,n));
}));
goog.object.set(clojure.core.matrix.protocols.PSliceJoin,"null",true);

goog.object.set(clojure.core.matrix.protocols.join,"null",(function (m,a){
throw cljs.core.ex_info.call(null,"Can't join an array to a nil value!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PSliceJoin,"number",true);

goog.object.set(clojure.core.matrix.protocols.join,"number",(function (m,a){
throw cljs.core.ex_info.call(null,"Can't join an array to a scalar number!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PSliceJoin,"object",true);

goog.object.set(clojure.core.matrix.protocols.join,"object",(function (m,a){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
if((dims === (0))){
throw cljs.core.ex_info.call(null,"Can't join to a 0-dimensional array!",cljs.core.PersistentArrayMap.EMPTY);
} else {
if((dims === adims)){
return clojure.core.matrix.protocols.coerce_param.call(null,m,cljs.core.concat.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m),clojure.core.matrix.protocols.get_major_slice_seq.call(null,a)));
} else {
if((dims === (adims + (1)))){
return clojure.core.matrix.protocols.coerce_param.call(null,m,cljs.core.concat.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null)));
} else {
throw cljs.core.ex_info.call(null,"Joining with array of incompatible size",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}));
goog.object.set(clojure.core.matrix.protocols.PSliceJoinAlong,"null",true);

goog.object.set(clojure.core.matrix.protocols.join_along,"null",(function (m,a,dim){
throw cljs.core.ex_info.call(null,"Can't join an array to a nil value!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PSliceJoinAlong,"number",true);

goog.object.set(clojure.core.matrix.protocols.join_along,"number",(function (m,a,dim){
throw cljs.core.ex_info.call(null,"Can't join an array to a scalar number!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PSliceJoinAlong,"object",true);

goog.object.set(clojure.core.matrix.protocols.join_along,"object",(function (m,a,dim){
return clojure.core.matrix.protocols.coerce_param.call(null,m,(function (){var dim__$1 = cljs.core.long$.call(null,dim);
if((dim__$1 === (0))){
return clojure.core.matrix.protocols.join.call(null,m,a);
} else {
var ddim = (dim__$1 - (1));
return cljs.core.mapv.call(null,((function (ddim,dim__$1){
return (function (p1__20039_SHARP_,p2__20040_SHARP_){
return clojure.core.matrix.protocols.join_along.call(null,p1__20039_SHARP_,p2__20040_SHARP_,ddim);
});})(ddim,dim__$1))
,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m),clojure.core.matrix.protocols.get_major_slice_seq.call(null,a));

}
})());
}));
goog.object.set(clojure.core.matrix.protocols.PSubVector,"null",true);

goog.object.set(clojure.core.matrix.protocols.subvector,"null",(function (m,start,length){
throw cljs.core.ex_info.call(null,"Can't take subvector of nil",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PSubVector,"number",true);

goog.object.set(clojure.core.matrix.protocols.subvector,"number",(function (m,start,length){
throw cljs.core.ex_info.call(null,"Can't take subvector of a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PSubVector,"object",true);

goog.object.set(clojure.core.matrix.protocols.subvector,"object",(function (m,start,length){
return clojure.core.matrix.protocols.subvector.call(null,clojure.core.matrix.impl.wrappers.wrap_nd.call(null,m),start,length);
}));
goog.object.set(clojure.core.matrix.protocols.PSubMatrix,"null",true);

goog.object.set(clojure.core.matrix.protocols.submatrix,"null",(function (m,index_ranges){
if(cljs.core.seq.call(null,index_ranges)){
throw cljs.core.ex_info.call(null,"Can't take partial submatrix of nil",cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
}));

goog.object.set(clojure.core.matrix.protocols.PSubMatrix,"number",true);

goog.object.set(clojure.core.matrix.protocols.submatrix,"number",(function (m,index_ranges){
if(cljs.core.seq.call(null,index_ranges)){
throw cljs.core.ex_info.call(null,"Can't take partial submatrix of a scalar number",cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
}));

goog.object.set(clojure.core.matrix.protocols.PSubMatrix,"object",true);

goog.object.set(clojure.core.matrix.protocols.submatrix,"object",(function (m,index_ranges){
return clojure.core.matrix.impl.wrappers.wrap_submatrix.call(null,m,index_ranges);
}));
goog.object.set(clojure.core.matrix.protocols.PBroadcast,"null",true);

goog.object.set(clojure.core.matrix.protocols.broadcast,"null",(function (m,new_shape){
return clojure.core.matrix.impl.wrappers.wrap_broadcast.call(null,m,new_shape);
}));

goog.object.set(clojure.core.matrix.protocols.PBroadcast,"number",true);

goog.object.set(clojure.core.matrix.protocols.broadcast,"number",(function (m,new_shape){
return clojure.core.matrix.impl.wrappers.wrap_broadcast.call(null,m,new_shape);
}));

goog.object.set(clojure.core.matrix.protocols.PBroadcast,"object",true);

goog.object.set(clojure.core.matrix.protocols.broadcast,"object",(function (m,new_shape){
var nshape = new_shape;
var mshape = clojure.core.matrix.protocols.get_shape.call(null,m);
var mdims = cljs.core.count.call(null,mshape);
var ndims = cljs.core.count.call(null,nshape);
if((((mdims === ndims)) && (clojure.core.matrix.utils.same_shape_object_QMARK_.call(null,nshape,mshape)))){
return m;
} else {
return clojure.core.matrix.impl.wrappers.wrap_broadcast.call(null,m,new_shape);

}
}));
goog.object.set(clojure.core.matrix.protocols.PBroadcastLike,"null",true);

goog.object.set(clojure.core.matrix.protocols.broadcast_like,"null",(function (m,a){
return clojure.core.matrix.impl.wrappers.wrap_broadcast.call(null,a,clojure.core.matrix.protocols.get_shape.call(null,m));
}));

goog.object.set(clojure.core.matrix.protocols.PBroadcastLike,"object",true);

goog.object.set(clojure.core.matrix.protocols.broadcast_like,"object",(function (m,a){
var sm = clojure.core.matrix.protocols.get_shape.call(null,m);
var sa = clojure.core.matrix.protocols.get_shape.call(null,a);
if(clojure.core.matrix.utils.same_shape_object_QMARK_.call(null,sm,sa)){
return a;
} else {
return clojure.core.matrix.protocols.broadcast.call(null,a,sm);
}
}));
goog.object.set(clojure.core.matrix.protocols.PBroadcastCoerce,"null",true);

goog.object.set(clojure.core.matrix.protocols.broadcast_coerce,"null",(function (m,a){
return clojure.core.matrix.protocols.coerce_param.call(null,m,clojure.core.matrix.protocols.broadcast_like.call(null,m,a));
}));

goog.object.set(clojure.core.matrix.protocols.PBroadcastCoerce,"object",true);

goog.object.set(clojure.core.matrix.protocols.broadcast_coerce,"object",(function (m,a){
return clojure.core.matrix.protocols.coerce_param.call(null,m,clojure.core.matrix.protocols.broadcast_like.call(null,m,a));
}));
goog.object.set(clojure.core.matrix.protocols.PPack,"null",true);

goog.object.set(clojure.core.matrix.protocols.pack,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PPack,"object",true);

goog.object.set(clojure.core.matrix.protocols.pack,"object",(function (m){
return m;
}));
goog.object.set(clojure.core.matrix.protocols.PConversion,"null",true);

goog.object.set(clojure.core.matrix.protocols.convert_to_nested_vectors,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PConversion,"number",true);

goog.object.set(clojure.core.matrix.protocols.convert_to_nested_vectors,"number",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PConversion,"object",true);

goog.object.set(clojure.core.matrix.protocols.convert_to_nested_vectors,"object",(function (m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if((dims === (0))){
return clojure.core.matrix.protocols.get_0d.call(null,m);
} else {
if(((1) === dims)){
if(((cljs.core.seq_QMARK_.call(null,m)) || (cljs.core.sequential_QMARK_.call(null,m)))){
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.get_0d,m);
} else {
var n = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
var i = (0);
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < n)){
var G__20041 = (i + (1));
var G__20042 = cljs.core.conj.call(null,res,clojure.core.matrix.protocols.get_1d.call(null,m,i));
i = G__20041;
res = G__20042;
continue;
} else {
return res;
}
break;
}
}
} else {
if(cljs.core.sequential_QMARK_.call(null,m)){
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,m);
} else {
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
} else {
if(cljs.core.seq_QMARK_.call(null,m)){
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,m);
} else {
throw cljs.core.ex_info.call(null,["Can't work out how to convert to nested vectors: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,m))," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
}
}));
goog.object.set(clojure.core.matrix.protocols.PRowColMatrix,"null",true);

goog.object.set(clojure.core.matrix.protocols.column_matrix,"null",(function (m,data){
throw cljs.core.ex_info.call(null,"Can't create a column matrix from nil",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.row_matrix,"null",(function (m,data){
throw cljs.core.ex_info.call(null,"Can't create a column matrix from nil",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PRowColMatrix,"object",true);

goog.object.set(clojure.core.matrix.protocols.column_matrix,"object",(function (m,data){
if(((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,data)))){
return clojure.core.matrix.protocols.coerce_param.call(null,m,cljs.core.mapv.call(null,cljs.core.vector,clojure.core.matrix.protocols.element_seq.call(null,data)));
} else {
throw cljs.core.ex_info.call(null,"Can't create a column matrix: input must be 1D vector",cljs.core.PersistentArrayMap.EMPTY);
}
}));

goog.object.set(clojure.core.matrix.protocols.row_matrix,"object",(function (m,data){
if(((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,data)))){
return clojure.core.matrix.protocols.coerce_param.call(null,m,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[data],null)));
} else {
throw cljs.core.ex_info.call(null,"Can't create a row matrix: input must be 1D vector",cljs.core.PersistentArrayMap.EMPTY);
}
}));
goog.object.set(clojure.core.matrix.protocols.PVectorView,"null",true);

goog.object.set(clojure.core.matrix.protocols.as_vector,"null",(function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
}));

goog.object.set(clojure.core.matrix.protocols.PVectorView,"number",true);

goog.object.set(clojure.core.matrix.protocols.as_vector,"number",(function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null);
}));

goog.object.set(clojure.core.matrix.protocols.PVectorView,"object",true);

goog.object.set(clojure.core.matrix.protocols.as_vector,"object",(function (m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if((dims === (0))){
return clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.impl.wrappers.wrap_nd.call(null,m),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
} else {
if((dims === (1))){
return m;
} else {
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m))){
return clojure.core.matrix.protocols.to_vector.call(null,m);
} else {
return null;

}
}
}
}));
goog.object.set(clojure.core.matrix.protocols.PVectorisable,"null",true);

goog.object.set(clojure.core.matrix.protocols.to_vector,"null",(function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
}));

goog.object.set(clojure.core.matrix.protocols.PVectorisable,"number",true);

goog.object.set(clojure.core.matrix.protocols.to_vector,"number",(function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null);
}));

goog.object.set(clojure.core.matrix.protocols.PVectorisable,"object",true);

goog.object.set(clojure.core.matrix.protocols.to_vector,"object",(function (m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if(((0) === dims)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.protocols.get_0d.call(null,m)], null);
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,m))){
return clojure.core.matrix.protocols.clone.call(null,m);
} else {
return cljs.core.vec.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));

}
}
}));
goog.object.set(clojure.core.matrix.protocols.PReshaping,"null",true);

goog.object.set(clojure.core.matrix.protocols.reshape,"null",(function (m,shape){
return clojure.core.matrix.protocols.reshape.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),shape);
}));

goog.object.set(clojure.core.matrix.protocols.PReshaping,"number",true);

goog.object.set(clojure.core.matrix.protocols.reshape,"number",(function (m,shape){
return clojure.core.matrix.protocols.reshape.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null),shape);
}));

goog.object.set(clojure.core.matrix.protocols.PReshaping,"object",true);

goog.object.set(clojure.core.matrix.protocols.reshape,"object",(function (m,shape){
if(cljs.core._EQ_.call(null,clojure.core.matrix.protocols.get_shape.call(null,m),shape)){
return m;
} else {
var gv = clojure.core.matrix.protocols.generic_value.call(null,m);
var es = cljs.core.concat.call(null,clojure.core.matrix.protocols.element_seq.call(null,m),cljs.core.repeat.call(null,gv));
var partition_shape = ((function (gv,es){
return (function clojure$core$matrix$impl$defaults$partition_shape(es__$1,shape__$1){
var temp__5455__auto__ = cljs.core.seq.call(null,shape__$1);
if(temp__5455__auto__){
var s = temp__5455__auto__;
var ns = cljs.core.next.call(null,s);
var plen = cljs.core.reduce.call(null,cljs.core._STAR_,(1),ns);
return cljs.core.map.call(null,((function (ns,plen,s,temp__5455__auto__,gv,es){
return (function (p1__20043_SHARP_){
return clojure$core$matrix$impl$defaults$partition_shape.call(null,p1__20043_SHARP_,ns);
});})(ns,plen,s,temp__5455__auto__,gv,es))
,cljs.core.partition.call(null,plen,es__$1));
} else {
return cljs.core.first.call(null,es__$1);
}
});})(gv,es))
;
var temp__5455__auto__ = cljs.core.seq.call(null,shape);
if(temp__5455__auto__){
var shape__$1 = temp__5455__auto__;
var fs = cljs.core.long$.call(null,cljs.core.first.call(null,shape__$1));
var parts = partition_shape.call(null,es,shape__$1);
var or__4131__auto__ = clojure.core.matrix.protocols.construct_matrix.call(null,m,cljs.core.take.call(null,fs,parts));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.core.matrix.protocols.construct_matrix.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,fs,parts));
}
} else {
return cljs.core.first.call(null,es);
}
}
}));
goog.object.set(clojure.core.matrix.protocols.PReshapeView,"null",true);

goog.object.set(clojure.core.matrix.protocols.reshape_view,"null",(function (m,shape){
return clojure.core.matrix.protocols.broadcast.call(null,null,shape);
}));

goog.object.set(clojure.core.matrix.protocols.PReshapeView,"number",true);

goog.object.set(clojure.core.matrix.protocols.reshape_view,"number",(function (m,shape){
return clojure.core.matrix.protocols.broadcast.call(null,m,shape);
}));

goog.object.set(clojure.core.matrix.protocols.PReshapeView,"object",true);

goog.object.set(clojure.core.matrix.protocols.reshape_view,"object",(function (m,shape){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m))){
throw cljs.core.ex_info.call(null,["TODO: ","reshape-view not supported on mutable array of type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.impl.defaults.class$.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return clojure.core.matrix.protocols.reshape.call(null,m,shape);
}
}));
goog.object.set(clojure.core.matrix.protocols.PCoercion,"null",true);

goog.object.set(clojure.core.matrix.protocols.coerce_param,"null",(function (m,param){
return param;
}));

goog.object.set(clojure.core.matrix.protocols.PCoercion,"number",true);

goog.object.set(clojure.core.matrix.protocols.coerce_param,"number",(function (m,param){
return param;
}));

goog.object.set(clojure.core.matrix.protocols.PCoercion,"object",true);

goog.object.set(clojure.core.matrix.protocols.coerce_param,"object",(function (m,param){
var param__$1 = (((param instanceof cljs.core.ISeq))?clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,param):param);
var or__4131__auto__ = clojure.core.matrix.protocols.construct_matrix.call(null,m,param__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return param__$1;
}
}));
goog.object.set(clojure.core.matrix.protocols.PExponent,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_pow,"number",(function (m,exponent){
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,exponent))){
return clojure.core.matrix.protocols.element_map.call(null,exponent,(function (p1__20045_SHARP_){
return Math.pow(m,p1__20045_SHARP_);
}));
} else {
return Math.pow(m,exponent);
}
}));

goog.object.set(clojure.core.matrix.protocols.PExponent,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_pow,"object",(function (m,exponent){
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,exponent))){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__20049_SHARP_,p2__20050_SHARP_){
return Math.pow(p1__20049_SHARP_,p2__20050_SHARP_);
}),exponent);
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__20051_SHARP_){
return Math.pow(p1__20051_SHARP_,exponent);
}));
}
}));
goog.object.set(clojure.core.matrix.protocols.PSquare,"number",true);

goog.object.set(clojure.core.matrix.protocols.square,"number",(function (m){
return (m * m);
}));

goog.object.set(clojure.core.matrix.protocols.PSquare,"object",true);

goog.object.set(clojure.core.matrix.protocols.square,"object",(function (m){
return clojure.core.matrix.protocols.element_multiply.call(null,m,m);
}));
goog.object.set(clojure.core.matrix.protocols.PLogistic,"number",true);

goog.object.set(clojure.core.matrix.protocols.logistic,"number",(function (m){
var e_t = Math.exp((- m));
return (1.0 / (1.0 + e_t));
}));

goog.object.set(clojure.core.matrix.protocols.PLogistic,"object",true);

goog.object.set(clojure.core.matrix.protocols.logistic,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.common.logistic_fn);
}));
goog.object.set(clojure.core.matrix.protocols.PLogisticMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.logistic_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,clojure.core.matrix.impl.common.logistic_fn);
}));
goog.object.set(clojure.core.matrix.protocols.PSoftplus,"number",true);

goog.object.set(clojure.core.matrix.protocols.softplus,"number",(function (m){
var et = Math.exp(m);
return Math.log((1.0 + et));
}));

goog.object.set(clojure.core.matrix.protocols.PSoftplus,"object",true);

goog.object.set(clojure.core.matrix.protocols.softplus,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.common.softplus_fn);
}));
goog.object.set(clojure.core.matrix.protocols.PSoftmax,"object",true);

goog.object.set(clojure.core.matrix.protocols.softmax,"object",(function (m){
var em = clojure.core.matrix.protocols.exp.call(null,m);
return clojure.core.matrix.protocols.element_divide.call(null,em,clojure.core.matrix.protocols.element_sum.call(null,em));
}));
goog.object.set(clojure.core.matrix.protocols.PSoftmaxMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.softmax_BANG_,"object",(function (m){
clojure.core.matrix.protocols.exp_BANG_.call(null,m);

clojure.core.matrix.protocols.element_divide_BANG_.call(null,m,clojure.core.matrix.protocols.element_sum.call(null,m));

return m;
}));
goog.object.set(clojure.core.matrix.protocols.PSoftplusMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.softplus_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,clojure.core.matrix.impl.common.softplus_fn);
}));
goog.object.set(clojure.core.matrix.protocols.PReLU,"number",true);

goog.object.set(clojure.core.matrix.protocols.relu,"number",(function (m){
return Math.max(0.0,m);
}));

goog.object.set(clojure.core.matrix.protocols.PReLU,"object",true);

goog.object.set(clojure.core.matrix.protocols.relu,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.common.relu_fn);
}));
goog.object.set(clojure.core.matrix.protocols.PReLUMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.relu_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,clojure.core.matrix.impl.common.relu_fn);
}));
goog.object.set(clojure.core.matrix.protocols.PMathsFunctions,"number",true);

goog.object.set(clojure.core.matrix.protocols.abs,"number",(function (m){
return Math.abs(m);
}));

goog.object.set(clojure.core.matrix.protocols.acos,"number",(function (m){
return Math.acos(m);
}));

goog.object.set(clojure.core.matrix.protocols.asin,"number",(function (m){
return Math.asin(m);
}));

goog.object.set(clojure.core.matrix.protocols.atan,"number",(function (m){
return Math.atan(m);
}));

goog.object.set(clojure.core.matrix.protocols.cbrt,"number",(function (m){
return Math.cbrt(m);
}));

goog.object.set(clojure.core.matrix.protocols.ceil,"number",(function (m){
return Math.ceil(m);
}));

goog.object.set(clojure.core.matrix.protocols.cos,"number",(function (m){
return Math.cos(m);
}));

goog.object.set(clojure.core.matrix.protocols.cosh,"number",(function (m){
return Math.cosh(m);
}));

goog.object.set(clojure.core.matrix.protocols.exp,"number",(function (m){
return Math.exp(m);
}));

goog.object.set(clojure.core.matrix.protocols.floor,"number",(function (m){
return Math.floor(m);
}));

goog.object.set(clojure.core.matrix.protocols.log,"number",(function (m){
return Math.log(m);
}));

goog.object.set(clojure.core.matrix.protocols.log10,"number",(function (m){
return Math.log10(m);
}));

goog.object.set(clojure.core.matrix.protocols.round,"number",(function (m){
return Math.rint(m);
}));

goog.object.set(clojure.core.matrix.protocols.signum,"number",(function (m){
return Math.sign(m);
}));

goog.object.set(clojure.core.matrix.protocols.sin,"number",(function (m){
return Math.sin(m);
}));

goog.object.set(clojure.core.matrix.protocols.sinh,"number",(function (m){
return Math.sinh(m);
}));

goog.object.set(clojure.core.matrix.protocols.sqrt,"number",(function (m){
return Math.sqrt(m);
}));

goog.object.set(clojure.core.matrix.protocols.tan,"number",(function (m){
return Math.tan(m);
}));

goog.object.set(clojure.core.matrix.protocols.tanh,"number",(function (m){
return Math.tanh(m);
}));

goog.object.set(clojure.core.matrix.protocols.to_degrees,"number",(function (m){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_.call(null,m);
}));

goog.object.set(clojure.core.matrix.protocols.to_radians,"number",(function (m){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_.call(null,m);
}));

goog.object.set(clojure.core.matrix.protocols.PMathsFunctions,"object",true);

goog.object.set(clojure.core.matrix.protocols.abs,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19132__19133__auto__){
return Math.abs(p1__19132__19133__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.acos,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19132__19133__auto__){
return Math.acos(p1__19132__19133__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.asin,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19132__19133__auto__){
return Math.asin(p1__19132__19133__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.atan,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19132__19133__auto__){
return Math.atan(p1__19132__19133__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cbrt,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19132__19133__auto__){
return Math.cbrt(p1__19132__19133__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.ceil,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19132__19133__auto__){
return Math.ceil(p1__19132__19133__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cos,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19132__19133__auto__){
return Math.cos(p1__19132__19133__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cosh,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19132__19133__auto__){
return Math.cosh(p1__19132__19133__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.exp,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19132__19133__auto__){
return Math.exp(p1__19132__19133__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.floor,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19132__19133__auto__){
return Math.floor(p1__19132__19133__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.log,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19132__19133__auto__){
return Math.log(p1__19132__19133__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.log10,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19132__19133__auto__){
return Math.log10(p1__19132__19133__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.round,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19132__19133__auto__){
return Math.rint(p1__19132__19133__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.signum,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19132__19133__auto__){
return Math.sign(p1__19132__19133__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sin,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19132__19133__auto__){
return Math.sin(p1__19132__19133__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sinh,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19132__19133__auto__){
return Math.sinh(p1__19132__19133__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sqrt,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19132__19133__auto__){
return Math.sqrt(p1__19132__19133__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.tan,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19132__19133__auto__){
return Math.tan(p1__19132__19133__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.tanh,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19132__19133__auto__){
return Math.tanh(p1__19132__19133__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.to_degrees,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19132__19133__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_.call(null,p1__19132__19133__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.to_radians,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19132__19133__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_.call(null,p1__19132__19133__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.PMathsFunctions,"array",true);

goog.object.set(clojure.core.matrix.protocols.abs,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19134__19135__auto__){
return Math.abs(p1__19134__19135__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.acos,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19134__19135__auto__){
return Math.acos(p1__19134__19135__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.asin,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19134__19135__auto__){
return Math.asin(p1__19134__19135__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.atan,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19134__19135__auto__){
return Math.atan(p1__19134__19135__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cbrt,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19134__19135__auto__){
return Math.cbrt(p1__19134__19135__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.ceil,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19134__19135__auto__){
return Math.ceil(p1__19134__19135__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cos,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19134__19135__auto__){
return Math.cos(p1__19134__19135__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cosh,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19134__19135__auto__){
return Math.cosh(p1__19134__19135__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.exp,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19134__19135__auto__){
return Math.exp(p1__19134__19135__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.floor,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19134__19135__auto__){
return Math.floor(p1__19134__19135__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.log,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19134__19135__auto__){
return Math.log(p1__19134__19135__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.log10,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19134__19135__auto__){
return Math.log10(p1__19134__19135__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.round,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19134__19135__auto__){
return Math.rint(p1__19134__19135__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.signum,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19134__19135__auto__){
return Math.sign(p1__19134__19135__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sin,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19134__19135__auto__){
return Math.sin(p1__19134__19135__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sinh,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19134__19135__auto__){
return Math.sinh(p1__19134__19135__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sqrt,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19134__19135__auto__){
return Math.sqrt(p1__19134__19135__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.tan,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19134__19135__auto__){
return Math.tan(p1__19134__19135__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.tanh,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19134__19135__auto__){
return Math.tanh(p1__19134__19135__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.to_degrees,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19134__19135__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_.call(null,p1__19134__19135__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.to_radians,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19134__19135__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_.call(null,p1__19134__19135__auto__);
}));
}));
goog.object.set(clojure.core.matrix.protocols.PMathsFunctionsMutable,"number",true);

goog.object.set(clojure.core.matrix.protocols.abs_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.acos_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.asin_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.atan_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.cbrt_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.ceil_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.cos_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.cosh_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.exp_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.floor_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.log_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.log10_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.round_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.signum_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.sin_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.sinh_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.sqrt_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.tan_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.tanh_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.to_degrees_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.to_radians_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PMathsFunctionsMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.abs_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19136__19137__auto__){
return Math.abs(p1__19136__19137__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.acos_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19136__19137__auto__){
return Math.acos(p1__19136__19137__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.asin_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19136__19137__auto__){
return Math.asin(p1__19136__19137__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.atan_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19136__19137__auto__){
return Math.atan(p1__19136__19137__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cbrt_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19136__19137__auto__){
return Math.cbrt(p1__19136__19137__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.ceil_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19136__19137__auto__){
return Math.ceil(p1__19136__19137__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cos_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19136__19137__auto__){
return Math.cos(p1__19136__19137__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cosh_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19136__19137__auto__){
return Math.cosh(p1__19136__19137__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.exp_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19136__19137__auto__){
return Math.exp(p1__19136__19137__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.floor_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19136__19137__auto__){
return Math.floor(p1__19136__19137__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.log_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19136__19137__auto__){
return Math.log(p1__19136__19137__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.log10_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19136__19137__auto__){
return Math.log10(p1__19136__19137__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.round_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19136__19137__auto__){
return Math.rint(p1__19136__19137__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.signum_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19136__19137__auto__){
return Math.sign(p1__19136__19137__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sin_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19136__19137__auto__){
return Math.sin(p1__19136__19137__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sinh_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19136__19137__auto__){
return Math.sinh(p1__19136__19137__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sqrt_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19136__19137__auto__){
return Math.sqrt(p1__19136__19137__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.tan_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19136__19137__auto__){
return Math.tan(p1__19136__19137__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.tanh_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19136__19137__auto__){
return Math.tanh(p1__19136__19137__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.to_degrees_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19136__19137__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_.call(null,p1__19136__19137__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.to_radians_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19136__19137__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_.call(null,p1__19136__19137__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.PMathsFunctionsMutable,"array",true);

goog.object.set(clojure.core.matrix.protocols.abs_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19138__19139__auto__){
return Math.abs(p1__19138__19139__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.acos_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19138__19139__auto__){
return Math.acos(p1__19138__19139__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.asin_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19138__19139__auto__){
return Math.asin(p1__19138__19139__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.atan_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19138__19139__auto__){
return Math.atan(p1__19138__19139__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cbrt_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19138__19139__auto__){
return Math.cbrt(p1__19138__19139__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.ceil_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19138__19139__auto__){
return Math.ceil(p1__19138__19139__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cos_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19138__19139__auto__){
return Math.cos(p1__19138__19139__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cosh_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19138__19139__auto__){
return Math.cosh(p1__19138__19139__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.exp_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19138__19139__auto__){
return Math.exp(p1__19138__19139__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.floor_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19138__19139__auto__){
return Math.floor(p1__19138__19139__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.log_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19138__19139__auto__){
return Math.log(p1__19138__19139__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.log10_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19138__19139__auto__){
return Math.log10(p1__19138__19139__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.round_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19138__19139__auto__){
return Math.rint(p1__19138__19139__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.signum_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19138__19139__auto__){
return Math.sign(p1__19138__19139__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sin_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19138__19139__auto__){
return Math.sin(p1__19138__19139__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sinh_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19138__19139__auto__){
return Math.sinh(p1__19138__19139__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sqrt_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19138__19139__auto__){
return Math.sqrt(p1__19138__19139__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.tan_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19138__19139__auto__){
return Math.tan(p1__19138__19139__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.tanh_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19138__19139__auto__){
return Math.tanh(p1__19138__19139__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.to_degrees_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19138__19139__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_.call(null,p1__19138__19139__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.to_radians_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19138__19139__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_.call(null,p1__19138__19139__auto__);
}));
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixSubComponents,"object",true);

goog.object.set(clojure.core.matrix.protocols.main_diagonal,"object",(function (m){
var sh = clojure.core.matrix.protocols.get_shape.call(null,m);
var rank = cljs.core.count.call(null,sh);
var dims = cljs.core.apply.call(null,cljs.core.min,sh);
var diag_vals = (function (){var iter__4523__auto__ = ((function (sh,rank,dims){
return (function clojure$core$matrix$impl$defaults$iter__20060(s__20061){
return (new cljs.core.LazySeq(null,((function (sh,rank,dims){
return (function (){
var s__20061__$1 = s__20061;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__20061__$1);
if(temp__5457__auto__){
var s__20061__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20061__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__20061__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__20063 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__20062 = (0);
while(true){
if((i__20062 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__20062);
cljs.core.chunk_append.call(null,b__20063,clojure.core.matrix.protocols.get_nd.call(null,m,cljs.core.repeat.call(null,rank,i)));

var G__20064 = (i__20062 + (1));
i__20062 = G__20064;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20063),clojure$core$matrix$impl$defaults$iter__20060.call(null,cljs.core.chunk_rest.call(null,s__20061__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20063),null);
}
} else {
var i = cljs.core.first.call(null,s__20061__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.get_nd.call(null,m,cljs.core.repeat.call(null,rank,i)),clojure$core$matrix$impl$defaults$iter__20060.call(null,cljs.core.rest.call(null,s__20061__$2)));
}
} else {
return null;
}
break;
}
});})(sh,rank,dims))
,null,null));
});})(sh,rank,dims))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,dims));
})();
return clojure.core.matrix.implementations.construct.call(null,m,diag_vals);
}));
goog.object.set(clojure.core.matrix.protocols.PSpecialisedConstructors,"object",true);

goog.object.set(clojure.core.matrix.protocols.identity_matrix,"object",(function (m,dims){
return clojure.core.matrix.protocols.diagonal_matrix.call(null,m,cljs.core.repeat.call(null,dims,1.0));
}));

goog.object.set(clojure.core.matrix.protocols.diagonal_matrix,"object",(function (m,diagonal_values){
var dims = cljs.core.count.call(null,diagonal_values);
var diagonal_values__$1 = clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,diagonal_values);
var zs = cljs.core.vec.call(null,cljs.core.repeat.call(null,dims,0.0));
var dm = cljs.core.vec.call(null,(function (){var iter__4523__auto__ = ((function (dims,diagonal_values__$1,zs){
return (function clojure$core$matrix$impl$defaults$iter__20065(s__20066){
return (new cljs.core.LazySeq(null,((function (dims,diagonal_values__$1,zs){
return (function (){
var s__20066__$1 = s__20066;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__20066__$1);
if(temp__5457__auto__){
var s__20066__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20066__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__20066__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__20068 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__20067 = (0);
while(true){
if((i__20067 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__20067);
cljs.core.chunk_append.call(null,b__20068,cljs.core.assoc.call(null,zs,i,cljs.core.nth.call(null,diagonal_values__$1,i)));

var G__20069 = (i__20067 + (1));
i__20067 = G__20069;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20068),clojure$core$matrix$impl$defaults$iter__20065.call(null,cljs.core.chunk_rest.call(null,s__20066__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20068),null);
}
} else {
var i = cljs.core.first.call(null,s__20066__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,zs,i,cljs.core.nth.call(null,diagonal_values__$1,i)),clojure$core$matrix$impl$defaults$iter__20065.call(null,cljs.core.rest.call(null,s__20066__$2)));
}
} else {
return null;
}
break;
}
});})(dims,diagonal_values__$1,zs))
,null,null));
});})(dims,diagonal_values__$1,zs))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,dims));
})());
return clojure.core.matrix.protocols.coerce_param.call(null,m,dm);
}));
goog.object.set(clojure.core.matrix.protocols.PPermutationMatrix,"object",true);

goog.object.set(clojure.core.matrix.protocols.permutation_matrix,"object",(function (m,permutation){
var v = clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,permutation);
var n = cljs.core.count.call(null,v);
var r = clojure.core.matrix.protocols.new_matrix.call(null,m,n,n);
var r__$1 = (cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,r))?r:clojure.core.matrix.impl.defaults.construct_mutable_matrix.call(null,r));
var n__4607__auto___20070 = n;
var i_20071 = (0);
while(true){
if((i_20071 < n__4607__auto___20070)){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,r__$1,i_20071,v.call(null,i_20071),1.0);

var G__20072 = (i_20071 + (1));
i_20071 = G__20072;
continue;
} else {
}
break;
}

return r__$1;
}));
goog.object.set(clojure.core.matrix.protocols.PBlockDiagonalMatrix,"object",true);

goog.object.set(clojure.core.matrix.protocols.block_diagonal_matrix,"object",(function (m,blocks){
var aux = (function clojure$core$matrix$impl$defaults$aux(acc,blocks__$1){
if(cljs.core.empty_QMARK_.call(null,blocks__$1)){
return acc;
} else {
var acc_dim = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,acc,(0)));
var new_block = blocks__$1.call(null,(0));
var new_block_dim = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,new_block,(0)));
var new_dim = (acc_dim + new_block_dim);
var dm = cljs.core.vec.call(null,(function (){var iter__4523__auto__ = ((function (acc_dim,new_block,new_block_dim,new_dim){
return (function clojure$core$matrix$impl$defaults$aux_$_iter__20073(s__20074){
return (new cljs.core.LazySeq(null,((function (acc_dim,new_block,new_block_dim,new_dim){
return (function (){
var s__20074__$1 = s__20074;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__20074__$1);
if(temp__5457__auto__){
var s__20074__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20074__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__20074__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__20076 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__20075 = (0);
while(true){
if((i__20075 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__20075);
cljs.core.chunk_append.call(null,b__20076,(((i < acc_dim))?cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,acc.call(null,i),clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,new_block_dim))):cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,acc_dim),new_block.call(null,(i - acc_dim))))));

var G__20077 = (i__20075 + (1));
i__20075 = G__20077;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20076),clojure$core$matrix$impl$defaults$aux_$_iter__20073.call(null,cljs.core.chunk_rest.call(null,s__20074__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20076),null);
}
} else {
var i = cljs.core.first.call(null,s__20074__$2);
return cljs.core.cons.call(null,(((i < acc_dim))?cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,acc.call(null,i),clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,new_block_dim))):cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,acc_dim),new_block.call(null,(i - acc_dim))))),clojure$core$matrix$impl$defaults$aux_$_iter__20073.call(null,cljs.core.rest.call(null,s__20074__$2)));
}
} else {
return null;
}
break;
}
});})(acc_dim,new_block,new_block_dim,new_dim))
,null,null));
});})(acc_dim,new_block,new_block_dim,new_dim))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,new_dim));
})());
return clojure$core$matrix$impl$defaults$aux.call(null,dm,cljs.core.subvec.call(null,blocks__$1,(1)));
}
});
return aux.call(null,cljs.core.PersistentVector.EMPTY,blocks);
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixPredicates,"object",true);

goog.object.set(clojure.core.matrix.protocols.identity_matrix_QMARK_,"object",(function (m){
var rc = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
var cc = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(1)));
if((((cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) === (2))) && ((rc === cc)))){
var i = cljs.core.long$.call(null,(0));
while(true){
if((i < rc)){
if((function (){var j = cljs.core.long$.call(null,(0));
while(true){
if((j < cc)){
var elem = clojure.core.matrix.protocols.get_2d.call(null,m,i,j);
if(typeof elem === 'number'){
if((i === j)){
if((elem === 1.0)){
var G__20080 = (j + (1));
j = G__20080;
continue;
} else {
return false;
}
} else {
if((elem === (0))){
var G__20081 = (j + (1));
j = G__20081;
continue;
} else {
return false;
}
}
} else {
return false;
}
} else {
return true;
}
break;
}
})()){
var G__20082 = (i + (1));
i = G__20082;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
}));

goog.object.set(clojure.core.matrix.protocols.zero_matrix_QMARK_,"object",(function (m){
return cljs.core.every_QMARK_.call(null,(function (p1__20078_SHARP_){
return ((typeof p1__20078_SHARP_ === 'number') && ((p1__20078_SHARP_ === (0))));
}),clojure.core.matrix.protocols.element_seq.call(null,m));
}));

goog.object.set(clojure.core.matrix.protocols.symmetric_QMARK_,"object",(function (m){
var G__20079 = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
switch (G__20079) {
case (0):
return true;

break;
case (1):
return true;

break;
case (2):
var and__4120__auto__ = clojure.core.matrix.impl.common.square_QMARK_.call(null,m);
if(and__4120__auto__){
return clojure.core.matrix.impl.common.symmetric_matrix_entries_QMARK_.call(null,m);
} else {
return and__4120__auto__;
}

break;
default:
return cljs.core._EQ_.call(null,m,clojure.core.matrix.protocols.transpose.call(null,m));

}
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixPredicates,"null",true);

goog.object.set(clojure.core.matrix.protocols.identity_matrix_QMARK_,"null",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.zero_matrix_QMARK_,"null",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.symmetric_QMARK_,"null",(function (m){
return true;
}));
goog.object.set(clojure.core.matrix.protocols.PIndicesAccess,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_indices,"object",(function (a,indices){
var vals = cljs.core.map.call(null,(function (p1__20084_SHARP_){
return clojure.core.matrix.protocols.get_nd.call(null,a,p1__20084_SHARP_);
}),cljs.core.map.call(null,clojure.core.matrix.protocols.element_seq,indices));
var or__4131__auto__ = ((cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,a)))?clojure.core.matrix.protocols.construct_matrix.call(null,a,vals):null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.core.matrix.protocols.construct_matrix.call(null,cljs.core.PersistentVector.EMPTY,vals);
}
}));
goog.object.set(clojure.core.matrix.protocols.PIndicesSetting,"object",true);

goog.object.set(clojure.core.matrix.protocols.set_indices,"object",(function (a,indices,values){
var indices__$1 = cljs.core.map.call(null,clojure.core.matrix.protocols.element_seq,indices);
var values__$1 = clojure.core.matrix.protocols.element_seq.call(null,clojure.core.matrix.protocols.broadcast.call(null,values,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,indices__$1)], null)));
var a__$1 = a;
var G__20091 = indices__$1;
var vec__20093 = G__20091;
var seq__20094 = cljs.core.seq.call(null,vec__20093);
var first__20095 = cljs.core.first.call(null,seq__20094);
var seq__20094__$1 = cljs.core.next.call(null,seq__20094);
var id = first__20095;
var idx = seq__20094__$1;
var G__20092 = values__$1;
var vec__20096 = G__20092;
var seq__20097 = cljs.core.seq.call(null,vec__20096);
var first__20098 = cljs.core.first.call(null,seq__20097);
var seq__20097__$1 = cljs.core.next.call(null,seq__20097);
var v = first__20098;
var vs = seq__20097__$1;
var a__$2 = a__$1;
var G__20091__$1 = G__20091;
var G__20092__$1 = G__20092;
while(true){
var a__$3 = a__$2;
var vec__20105 = G__20091__$1;
var seq__20106 = cljs.core.seq.call(null,vec__20105);
var first__20107 = cljs.core.first.call(null,seq__20106);
var seq__20106__$1 = cljs.core.next.call(null,seq__20106);
var id__$1 = first__20107;
var idx__$1 = seq__20106__$1;
var vec__20108 = G__20092__$1;
var seq__20109 = cljs.core.seq.call(null,vec__20108);
var first__20110 = cljs.core.first.call(null,seq__20109);
var seq__20109__$1 = cljs.core.next.call(null,seq__20109);
var v__$1 = first__20110;
var vs__$1 = seq__20109__$1;
if(cljs.core.truth_(id__$1)){
var G__20137 = clojure.core.matrix.protocols.set_nd.call(null,a__$3,id__$1,v__$1);
var G__20138 = idx__$1;
var G__20139 = vs__$1;
a__$2 = G__20137;
G__20091__$1 = G__20138;
G__20092__$1 = G__20139;
continue;
} else {
return a__$3;
}
break;
}
}));

goog.object.set(clojure.core.matrix.protocols.set_indices_BANG_,"object",(function (a,indices,values){
var indices__$1 = cljs.core.map.call(null,clojure.core.matrix.protocols.element_seq,indices);
var values__$1 = clojure.core.matrix.protocols.element_seq.call(null,clojure.core.matrix.protocols.broadcast.call(null,values,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,indices__$1)], null)));
var G__20117 = indices__$1;
var vec__20119 = G__20117;
var seq__20120 = cljs.core.seq.call(null,vec__20119);
var first__20121 = cljs.core.first.call(null,seq__20120);
var seq__20120__$1 = cljs.core.next.call(null,seq__20120);
var id = first__20121;
var idx = seq__20120__$1;
var G__20118 = values__$1;
var vec__20122 = G__20118;
var seq__20123 = cljs.core.seq.call(null,vec__20122);
var first__20124 = cljs.core.first.call(null,seq__20123);
var seq__20123__$1 = cljs.core.next.call(null,seq__20123);
var v = first__20124;
var vs = seq__20123__$1;
var G__20117__$1 = G__20117;
var G__20118__$1 = G__20118;
while(true){
var vec__20131 = G__20117__$1;
var seq__20132 = cljs.core.seq.call(null,vec__20131);
var first__20133 = cljs.core.first.call(null,seq__20132);
var seq__20132__$1 = cljs.core.next.call(null,seq__20132);
var id__$1 = first__20133;
var idx__$1 = seq__20132__$1;
var vec__20134 = G__20118__$1;
var seq__20135 = cljs.core.seq.call(null,vec__20134);
var first__20136 = cljs.core.first.call(null,seq__20135);
var seq__20135__$1 = cljs.core.next.call(null,seq__20135);
var v__$1 = first__20136;
var vs__$1 = seq__20135__$1;
if(cljs.core.truth_(id__$1)){
clojure.core.matrix.protocols.set_nd_BANG_.call(null,a,id__$1,v__$1);

var G__20140 = idx__$1;
var G__20141 = vs__$1;
G__20117__$1 = G__20140;
G__20118__$1 = G__20141;
continue;
} else {
return null;
}
break;
}
}));
goog.object.set(clojure.core.matrix.protocols.PNonZeroIndices,"object",true);

goog.object.set(clojure.core.matrix.protocols.non_zero_indices,"object",(function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,m))){
return cljs.core.vec.call(null,(function (){var iter__4523__auto__ = (function clojure$core$matrix$impl$defaults$iter__20142(s__20143){
return (new cljs.core.LazySeq(null,(function (){
var s__20143__$1 = s__20143;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__20143__$1);
if(temp__5457__auto__){
var s__20143__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20143__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__20143__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__20145 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__20144 = (0);
while(true){
if((i__20144 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__20144);
if((!((clojure.core.matrix.protocols.get_1d.call(null,m,i) === (0))))){
cljs.core.chunk_append.call(null,b__20145,i);

var G__20150 = (i__20144 + (1));
i__20144 = G__20150;
continue;
} else {
var G__20151 = (i__20144 + (1));
i__20144 = G__20151;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20145),clojure$core$matrix$impl$defaults$iter__20142.call(null,cljs.core.chunk_rest.call(null,s__20143__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20145),null);
}
} else {
var i = cljs.core.first.call(null,s__20143__$2);
if((!((clojure.core.matrix.protocols.get_1d.call(null,m,i) === (0))))){
return cljs.core.cons.call(null,i,clojure$core$matrix$impl$defaults$iter__20142.call(null,cljs.core.rest.call(null,s__20143__$2)));
} else {
var G__20152 = cljs.core.rest.call(null,s__20143__$2);
s__20143__$1 = G__20152;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0))));
})());
} else {
return cljs.core.vec.call(null,(function (){var iter__4523__auto__ = (function clojure$core$matrix$impl$defaults$iter__20146(s__20147){
return (new cljs.core.LazySeq(null,(function (){
var s__20147__$1 = s__20147;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__20147__$1);
if(temp__5457__auto__){
var s__20147__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20147__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__20147__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__20149 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__20148 = (0);
while(true){
if((i__20148 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__20148);
cljs.core.chunk_append.call(null,b__20149,clojure.core.matrix.protocols.non_zero_indices.call(null,clojure.core.matrix.protocols.get_major_slice.call(null,m,i)));

var G__20153 = (i__20148 + (1));
i__20148 = G__20153;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20149),clojure$core$matrix$impl$defaults$iter__20146.call(null,cljs.core.chunk_rest.call(null,s__20147__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20149),null);
}
} else {
var i = cljs.core.first.call(null,s__20147__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.non_zero_indices.call(null,clojure.core.matrix.protocols.get_major_slice.call(null,m,i)),clojure$core$matrix$impl$defaults$iter__20146.call(null,cljs.core.rest.call(null,s__20147__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0))));
})());
}
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixTypes,"object",true);

goog.object.set(clojure.core.matrix.protocols.diagonal_QMARK_,"object",(function (m){
if(cljs.core._EQ_.call(null,cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)),(2))){
var vec__20154 = clojure.core.matrix.protocols.get_shape.call(null,m);
var mrows = cljs.core.nth.call(null,vec__20154,(0),null);
var mcols = cljs.core.nth.call(null,vec__20154,(1),null);
return cljs.core.every_QMARK_.call(null,((function (vec__20154,mrows,mcols){
return (function (p__20157){
var vec__20158 = p__20157;
var i = cljs.core.nth.call(null,vec__20158,(0),null);
var j = cljs.core.nth.call(null,vec__20158,(1),null);
var v = cljs.core.nth.call(null,vec__20158,(2),null);
if(cljs.core._EQ_.call(null,i,j)){
return true;
} else {
if(((cljs.core.not_EQ_.call(null,i,j)) && ((v === (0))))){
return true;
} else {
return false;

}
}
});})(vec__20154,mrows,mcols))
,cljs.core.map.call(null,((function (vec__20154,mrows,mcols){
return (function (i,elem){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.quot.call(null,i,mcols),cljs.core.rem.call(null,i,mcols),elem],null));
});})(vec__20154,mrows,mcols))
,cljs.core.range.call(null,(mrows * mcols)),clojure.core.matrix.protocols.element_seq.call(null,m)));
} else {
return false;
}
}));

goog.object.set(clojure.core.matrix.protocols.upper_triangular_QMARK_,"object",(function (m){
if(clojure.core.matrix.impl.common.square_QMARK_.call(null,m)){
return cljs.core.every_QMARK_.call(null,cljs.core.zero_QMARK_,cljs.core.mapcat.call(null,(function (p__20161){
var vec__20162 = p__20161;
var idx = cljs.core.nth.call(null,vec__20162,(0),null);
var xs = cljs.core.nth.call(null,vec__20162,(1),null);
return cljs.core.take.call(null,idx,xs);
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),clojure.core.matrix.protocols.get_slice_seq.call(null,m,(0)))));
} else {
return false;
}
}));

goog.object.set(clojure.core.matrix.protocols.lower_triangular_QMARK_,"object",(function (m){
if(clojure.core.matrix.impl.common.square_QMARK_.call(null,m)){
return cljs.core.every_QMARK_.call(null,cljs.core.zero_QMARK_,cljs.core.mapcat.call(null,(function (p__20165){
var vec__20166 = p__20165;
var idx = cljs.core.nth.call(null,vec__20166,(0),null);
var xs = cljs.core.nth.call(null,vec__20166,(1),null);
return cljs.core.drop.call(null,(idx + (1)),xs);
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),clojure.core.matrix.protocols.get_slice_seq.call(null,m,(0)))));
} else {
return false;
}
}));

goog.object.set(clojure.core.matrix.protocols.positive_definite_QMARK_,"object",(function (m){
throw cljs.core.ex_info.call(null,"TODO: Not yet implemented",cljs.core.PersistentArrayMap.EMPTY);

return clojure.core.matrix.protocols.positive_definite_QMARK_.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m));
}));

goog.object.set(clojure.core.matrix.protocols.positive_semidefinite_QMARK_,"object",(function (m){
throw cljs.core.ex_info.call(null,"TODO: Not yet implemented",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.orthogonal_QMARK_,"object",(function (m,eps){
var and__4120__auto__ = clojure.core.matrix.impl.common.square_QMARK_.call(null,m);
if(and__4120__auto__){
return clojure.core.matrix.protocols.matrix_equals_epsilon.call(null,clojure.core.matrix.protocols.matrix_multiply.call(null,m,clojure.core.matrix.protocols.transpose.call(null,m)),clojure.core.matrix.protocols.identity_matrix.call(null,m,clojure.core.matrix.protocols.dimension_count.call(null,m,(0))),eps);
} else {
return and__4120__auto__;
}
}));
goog.object.set(clojure.core.matrix.protocols.PSelect,"null",true);

goog.object.set(clojure.core.matrix.protocols.select,"null",(function (a,area){
if(cljs.core.seq.call(null,area)){
throw cljs.core.ex_info.call(null,["Trying to select on nil with selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return null;
}));

goog.object.set(clojure.core.matrix.protocols.PSelect,"number",true);

goog.object.set(clojure.core.matrix.protocols.select,"number",(function (a,area){
if(cljs.core.seq.call(null,area)){
throw cljs.core.ex_info.call(null,["Trying to select on numerical scalar with selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return a;
}));

goog.object.set(clojure.core.matrix.protocols.PSelect,"object",true);

goog.object.set(clojure.core.matrix.protocols.select,"object",(function (a,area){
var or__4131__auto__ = clojure.core.matrix.protocols.select_view.call(null,a,area);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.core.matrix.impl.wrappers.wrap_selection.call(null,a,area);
}
}));
goog.object.set(clojure.core.matrix.protocols.PSelectView,"null",true);

goog.object.set(clojure.core.matrix.protocols.select_view,"null",(function (a,area){
if(cljs.core.seq.call(null,area)){
throw cljs.core.ex_info.call(null,["Trying to select on nil with selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return null;
}));

goog.object.set(clojure.core.matrix.protocols.PSelectView,"object",true);

goog.object.set(clojure.core.matrix.protocols.select_view,"object",(function (a,area){
return clojure.core.matrix.impl.wrappers.wrap_selection.call(null,a,area);
}));

goog.object.set(clojure.core.matrix.protocols.PSelectView,"number",true);

goog.object.set(clojure.core.matrix.protocols.select_view,"number",(function (a,area){
if(cljs.core.seq.call(null,area)){
throw cljs.core.ex_info.call(null,["Trying to select on numerical scalar with selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return a;
}));
goog.object.set(clojure.core.matrix.protocols.PSelect,"number",true);

goog.object.set(clojure.core.matrix.protocols.select,"number",(function (a,area){
if(cljs.core.empty_QMARK_.call(null,area)){
return a;
} else {
throw cljs.core.ex_info.call(null,["Non empty area argument in select, called on Number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));
clojure.core.matrix.impl.defaults.area_indices = (function clojure$core$matrix$impl$defaults$area_indices(area){
return cljs.core.reduce.call(null,(function (io,in$){
var iter__4523__auto__ = (function clojure$core$matrix$impl$defaults$area_indices_$_iter__20169(s__20170){
return (new cljs.core.LazySeq(null,(function (){
var s__20170__$1 = s__20170;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__20170__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var a = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4519__auto__ = ((function (s__20170__$1,a,xs__6012__auto__,temp__5457__auto__){
return (function clojure$core$matrix$impl$defaults$area_indices_$_iter__20169_$_iter__20171(s__20172){
return (new cljs.core.LazySeq(null,((function (s__20170__$1,a,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__20172__$1 = s__20172;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__20172__$1);
if(temp__5457__auto____$1){
var s__20172__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20172__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__20172__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__20174 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__20173 = (0);
while(true){
if((i__20173 < size__4522__auto__)){
var b = cljs.core._nth.call(null,c__4521__auto__,i__20173);
cljs.core.chunk_append.call(null,b__20174,cljs.core.cons.call(null,a,b));

var G__20175 = (i__20173 + (1));
i__20173 = G__20175;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20174),clojure$core$matrix$impl$defaults$area_indices_$_iter__20169_$_iter__20171.call(null,cljs.core.chunk_rest.call(null,s__20172__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20174),null);
}
} else {
var b = cljs.core.first.call(null,s__20172__$2);
return cljs.core.cons.call(null,cljs.core.cons.call(null,a,b),clojure$core$matrix$impl$defaults$area_indices_$_iter__20169_$_iter__20171.call(null,cljs.core.rest.call(null,s__20172__$2)));
}
} else {
return null;
}
break;
}
});})(s__20170__$1,a,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__20170__$1,a,xs__6012__auto__,temp__5457__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,io));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,clojure$core$matrix$impl$defaults$area_indices_$_iter__20169.call(null,cljs.core.rest.call(null,s__20170__$1)));
} else {
var G__20176 = cljs.core.rest.call(null,s__20170__$1);
s__20170__$1 = G__20176;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,in$);
}),cljs.core.mapv.call(null,cljs.core.vector,cljs.core.last.call(null,area)),cljs.core.rest.call(null,cljs.core.reverse.call(null,area)));
});
clojure.core.matrix.impl.defaults.indices = (function clojure$core$matrix$impl$defaults$indices(vals){
return clojure.core.matrix.impl.defaults.area_indices.call(null,cljs.core.mapv.call(null,cljs.core.range,clojure.core.matrix.protocols.get_shape.call(null,vals)));
});
goog.object.set(clojure.core.matrix.protocols.PSetSelection,"object",true);

goog.object.set(clojure.core.matrix.protocols.set_selection,"object",(function (m,area,vals){
var mm = (function (){var or__4131__auto__ = clojure.core.matrix.protocols.mutable_matrix.call(null,m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.core.matrix.impl.defaults.construct_mutable_matrix.call(null,m);
}
})();
var v = clojure.core.matrix.protocols.select_view.call(null,m,area);
clojure.core.matrix.protocols.assign_BANG_.call(null,v,vals);

return mm;
}));
goog.object.set(clojure.core.matrix.protocols.PIndexImplementation,"object",true);

goog.object.set(clojure.core.matrix.protocols.index_QMARK_,"object",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.index_to_longs,"object",(function (m){
return cljs.core.long_array.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
}));

goog.object.set(clojure.core.matrix.protocols.index_to_ints,"object",(function (m){
return cljs.core.int_array.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
}));

goog.object.set(clojure.core.matrix.protocols.index_from_longs,"object",(function (m,xs){
return cljs.core.long_array.call(null,xs);
}));

goog.object.set(clojure.core.matrix.protocols.index_from_ints,"object",(function (m,xs){
return cljs.core.int_array.call(null,xs);
}));

goog.object.set(clojure.core.matrix.protocols.index_coerce,"object",(function (m,a){
return clojure.core.matrix.protocols.index_to_longs.call(null,m);
}));
goog.object.set(clojure.core.matrix.protocols.PDimensionLabels,"object",true);

goog.object.set(clojure.core.matrix.protocols.label,"object",(function (m,dim,i){
if(((((0) <= cljs.core.long$.call(null,i))) && ((cljs.core.long$.call(null,i) <= (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,dim)) - (1)))))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Dimension index out of range: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));

goog.object.set(clojure.core.matrix.protocols.labels,"object",(function (m,dim){
if(((((0) <= cljs.core.long$.call(null,dim))) && ((cljs.core.long$.call(null,dim) <= (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) - (1)))))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Dimension out of range: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dim)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));
goog.object.set(clojure.core.matrix.protocols.PColumnNames,"object",true);

goog.object.set(clojure.core.matrix.protocols.column_name,"object",(function (m,i){
var dim = (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) - (1));
return clojure.core.matrix.protocols.label.call(null,m,dim,i);
}));

goog.object.set(clojure.core.matrix.protocols.column_names,"object",(function (m){
var dim = (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) - (1));
return clojure.core.matrix.protocols.labels.call(null,m,dim);
}));
goog.object.set(clojure.core.matrix.protocols.PNorm,"object",true);

goog.object.set(clojure.core.matrix.protocols.norm,"object",(function (m,p){
if(cljs.core._EQ_.call(null,p,Number.POSITIVE_INFINITY)){
return clojure.core.matrix.protocols.element_max.call(null,clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.mathsops.abs));
} else {
if(typeof p === 'number'){
var sum_of_element_powers = clojure.core.matrix.protocols.element_sum.call(null,clojure.core.matrix.protocols.element_pow.call(null,clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.mathsops.abs),p));
var pred__20177 = cljs.core._EQ__EQ_;
var expr__20178 = p;
if(cljs.core.truth_(pred__20177.call(null,(1),expr__20178))){
return sum_of_element_powers;
} else {
if(cljs.core.truth_(pred__20177.call(null,(2),expr__20178))){
return Math.sqrt(sum_of_element_powers);
} else {
if(cljs.core.truth_(pred__20177.call(null,(3),expr__20178))){
return Math.cbrt(sum_of_element_powers);
} else {
return Math.pow(sum_of_element_powers,(1.0 / p));
}
}
}
} else {
throw cljs.core.ex_info.call(null,"p must be a number",cljs.core.PersistentArrayMap.EMPTY);

}
}
}));
clojure.core.matrix.impl.defaults.compute_q = (function clojure$core$matrix$impl$defaults$compute_q(m,qr_data,mcols,mrows,min_len,us,vs,gammas){
var q = clojure.core.matrix.protocols.to_double_array.call(null,clojure.core.matrix.protocols.identity_matrix.call(null,cljs.core.PersistentVector.EMPTY,mrows));
var mcols__$1 = cljs.core.long$.call(null,mcols);
var mrows__$1 = cljs.core.long$.call(null,mrows);
var min_len__$1 = cljs.core.long$.call(null,min_len);
var i_20180 = (min_len__$1 - (1));
while(true){
if((i_20180 > (-1))){
var gamma_20181 = (gammas[i_20180]);
(us[i_20180] = 1.0);

var j_20182 = (i_20180 + (1));
while(true){
if((j_20182 < mrows__$1)){
(us[j_20182] = (qr_data[((j_20182 * mcols__$1) + i_20180)]));

var G__20183 = (j_20182 + (1));
j_20182 = G__20183;
continue;
} else {
}
break;
}


var j_20184 = i_20180;
while(true){
if((j_20184 < mrows__$1)){
(vs[j_20184] = ((us[i_20180]) * (q[((i_20180 * mrows__$1) + j_20184)])));

var G__20185 = (j_20184 + (1));
j_20184 = G__20185;
continue;
} else {
}
break;
}


var j_20186 = (i_20180 + (1));
while(true){
if((j_20186 < mrows__$1)){
var u_20187 = (us[j_20186]);
var k_20188 = i_20180;
while(true){
if((k_20188 < mrows__$1)){
var q_idx_20189 = (((j_20186 * mrows__$1) + i_20180) + (k_20188 - i_20180));
(vs[k_20188] = ((vs[k_20188]) + (u_20187 * (q[q_idx_20189]))));

var G__20190 = (k_20188 + (1));
k_20188 = G__20190;
continue;
} else {
}
break;
}


var G__20191 = (j_20186 + (1));
j_20186 = G__20191;
continue;
} else {
}
break;
}


var j_20192 = i_20180;
while(true){
if((j_20192 < mrows__$1)){
(vs[j_20192] = ((vs[j_20192]) * gamma_20181));

var G__20193 = (j_20192 + (1));
j_20192 = G__20193;
continue;
} else {
}
break;
}


var j_20194 = i_20180;
while(true){
if((j_20194 < mrows__$1)){
var u_20195 = (us[j_20194]);
var k_20196 = i_20180;
while(true){
if((k_20196 < mrows__$1)){
var qr_idx_20197 = (((j_20194 * mrows__$1) + i_20180) + (k_20196 - i_20180));
(q[qr_idx_20197] = ((q[qr_idx_20197]) - (u_20195 * (vs[k_20196]))));

var G__20198 = (k_20196 + (1));
k_20196 = G__20198;
continue;
} else {
}
break;
}


var G__20199 = (j_20194 + (1));
j_20194 = G__20199;
continue;
} else {
}
break;
}


var G__20200 = (i_20180 - (1));
i_20180 = G__20200;
continue;
} else {
}
break;
}


return clojure.core.matrix.protocols.compute_matrix.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrows__$1,mrows__$1], null),((function (q,mcols__$1,mrows__$1,min_len__$1){
return (function (i,j){
return (q[((i * mrows__$1) + j)]);
});})(q,mcols__$1,mrows__$1,min_len__$1))
);
});
clojure.core.matrix.impl.defaults.compute_r = (function clojure$core$matrix$impl$defaults$compute_r(m,data,mcols,mrows,min_len,compact_QMARK_){
var mrows__$1 = cljs.core.long$.call(null,mrows);
var mcols__$1 = cljs.core.long$.call(null,mcols);
var min_len__$1 = cljs.core.long$.call(null,min_len);
var cm = clojure.core.matrix.protocols.compute_matrix.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrows__$1,mcols__$1], null),((function (mrows__$1,mcols__$1,min_len__$1){
return (function (i,j){
if((((i < min_len__$1)) && ((j >= i)) && ((j < mcols__$1)))){
return (data[((i * mcols__$1) + j)]);
} else {
return (0);
}
});})(mrows__$1,mcols__$1,min_len__$1))
);
if(cljs.core.truth_(compact_QMARK_)){
var slcs = clojure.core.matrix.protocols.get_major_slice_seq.call(null,cm);
var non_zero_rows = cljs.core.long$.call(null,cljs.core.reduce.call(null,((function (slcs,mrows__$1,mcols__$1,min_len__$1,cm){
return (function (cnt,slice){
if(cljs.core.every_QMARK_.call(null,cljs.core.zero_QMARK_,slice)){
return (cnt + (1));
} else {
return cnt;
}
});})(slcs,mrows__$1,mcols__$1,min_len__$1,cm))
,(0),slcs));
return clojure.core.matrix.protocols.reshape.call(null,cm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols__$1,(mrows__$1 - non_zero_rows)], null));
} else {
return cm;
}
});
clojure.core.matrix.impl.defaults.householder_qr = (function clojure$core$matrix$impl$defaults$householder_qr(qr_data,idx,mcols,mrows,us,gammas){
var idx__$1 = cljs.core.long$.call(null,idx);
var mcols__$1 = cljs.core.long$.call(null,mcols);
var mrows__$1 = cljs.core.long$.call(null,mrows);
var qr_idx_20202 = cljs.core.long$.call(null,(idx__$1 + (idx__$1 * mcols__$1)));
var i_20203 = cljs.core.long$.call(null,idx__$1);
while(true){
if((i_20203 < mrows__$1)){
(us[i_20203] = (qr_data[qr_idx_20202]));

var G__20204 = (qr_idx_20202 + mcols__$1);
var G__20205 = (i_20203 + (1));
qr_idx_20202 = G__20204;
i_20203 = G__20205;
continue;
} else {
}
break;
}

var max_ = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (idx__$1,mcols__$1,mrows__$1){
return (function (p1__20201_SHARP_){
return Math.abs(p1__20201_SHARP_);
});})(idx__$1,mcols__$1,mrows__$1))
,clojure.core.matrix.protocols.subvector.call(null,us,idx__$1,(mrows__$1 - idx__$1))));
if(cljs.core._EQ_.call(null,max_,0.0)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null);
} else {
var _ = (function (){
var i_20206 = idx__$1;
while(true){
if((i_20206 < mrows__$1)){
(us[i_20206] = ((us[i_20206]) / max_));

var G__20207 = (i_20206 + (1));
i_20206 = G__20207;
continue;
} else {
}
break;
}

return null;
})()
;
var tau = Math.sqrt(cljs.core.reduce.call(null,((function (_,max_,idx__$1,mcols__$1,mrows__$1){
return (function (acc,x){
return (acc + (x * x));
});})(_,max_,idx__$1,mcols__$1,mrows__$1))
,0.0,clojure.core.matrix.protocols.subvector.call(null,us,idx__$1,(mrows__$1 - idx__$1))));
var u_idx = (us[idx__$1]);
var tau__$1 = (((u_idx < (0)))?(- tau):tau);
var u_0 = (u_idx + tau__$1);
var gamma = (u_0 / tau__$1);
var tau__$2 = (tau__$1 * max_);
(gammas[idx__$1] = gamma);

var i_20208 = (idx__$1 + (1));
while(true){
if((i_20208 < mrows__$1)){
(us[i_20208] = ((us[i_20208]) / u_0));

var G__20209 = (i_20208 + (1));
i_20208 = G__20209;
continue;
} else {
}
break;
}


(us[idx__$1] = 1.0);

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gamma","gamma",1883969687),gamma,new cljs.core.Keyword(null,"gammas","gammas",-195052461),gammas,new cljs.core.Keyword(null,"us","us",746429226),us,new cljs.core.Keyword(null,"tau","tau",89782904),tau__$2,new cljs.core.Keyword(null,"error","error",-978969032),false], null);
}
});
clojure.core.matrix.impl.defaults.update_qr = (function clojure$core$matrix$impl$defaults$update_qr(qr_data,idx,mcols,mrows,vs,us,gamma,tau){
var idx__$1 = cljs.core.long$.call(null,idx);
var mrows__$1 = cljs.core.long$.call(null,mrows);
var mcols__$1 = cljs.core.long$.call(null,mcols);
var u = (us[idx__$1]);
var idx_PLUS_1 = (idx__$1 + (1));
var gamma__$1 = gamma;
var tau__$1 = tau;
var i_20210 = idx_PLUS_1;
while(true){
if((i_20210 < mcols__$1)){
(vs[i_20210] = (qr_data[(i_20210 + (idx__$1 * mcols__$1))]));

var G__20211 = (i_20210 + (1));
i_20210 = G__20211;
continue;
} else {
}
break;
}


var i_20212 = idx_PLUS_1;
while(true){
if((i_20212 < mrows__$1)){
var qr_idx_20213 = (idx_PLUS_1 + (i_20212 * mcols__$1));
var j_20214 = idx_PLUS_1;
while(true){
if((j_20214 < mcols__$1)){
(vs[j_20214] = ((vs[j_20214]) + ((us[i_20212]) * (qr_data[(qr_idx_20213 + (j_20214 - idx_PLUS_1))]))));

var G__20215 = (j_20214 + (1));
j_20214 = G__20215;
continue;
} else {
}
break;
}


var G__20216 = (i_20212 + (1));
i_20212 = G__20216;
continue;
} else {
}
break;
}


var i_20217 = idx_PLUS_1;
while(true){
if((i_20217 < mcols__$1)){
(vs[i_20217] = ((vs[i_20217]) * gamma__$1));

var G__20218 = (i_20217 + (1));
i_20217 = G__20218;
continue;
} else {
}
break;
}


var i_20219 = idx__$1;
while(true){
if((i_20219 < mrows__$1)){
var u_20220__$1 = (us[i_20219]);
var j_20221 = idx_PLUS_1;
while(true){
if((j_20221 < mcols__$1)){
var qr_idx_20222 = (((i_20219 * mcols__$1) + idx_PLUS_1) + (j_20221 - idx_PLUS_1));
(qr_data[qr_idx_20222] = ((qr_data[qr_idx_20222]) - (u_20220__$1 * (vs[j_20221]))));

var G__20223 = (j_20221 + (1));
j_20221 = G__20223;
continue;
} else {
}
break;
}


var G__20224 = (i_20219 + (1));
i_20219 = G__20224;
continue;
} else {
}
break;
}


if((idx__$1 < mcols__$1)){
(qr_data[(idx__$1 + (idx__$1 * mcols__$1))] = (- tau__$1));
} else {
}

var i_20225 = idx_PLUS_1;
while(true){
if((i_20225 < mrows__$1)){
(qr_data[(idx__$1 + (i_20225 * mcols__$1))] = (us[i_20225]));

var G__20226 = (i_20225 + (1));
i_20225 = G__20226;
continue;
} else {
}
break;
}


return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"qr-data","qr-data",-504970292),qr_data,new cljs.core.Keyword(null,"vs","vs",-2022097090),vs], null);
});
goog.object.set(clojure.core.matrix.protocols.PQRDecomposition,"object",true);

goog.object.set(clojure.core.matrix.protocols.qr,"object",(function (m,options){
var vec__20227 = clojure.core.matrix.protocols.get_shape.call(null,m);
var mrows = cljs.core.nth.call(null,vec__20227,(0),null);
var mcols = cljs.core.nth.call(null,vec__20227,(1),null);
var mrows__$1 = cljs.core.long$.call(null,mrows);
var mcols__$1 = cljs.core.long$.call(null,mcols);
var min_len = (function (){var x__4222__auto__ = mcols__$1;
var y__4223__auto__ = mrows__$1;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var max_len = (function (){var x__4219__auto__ = mcols__$1;
var y__4220__auto__ = mrows__$1;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var qr_data = clojure.core.matrix.protocols.to_double_array.call(null,m);
var vs = cljs.core.double_array.call(null,max_len);
var us = cljs.core.double_array.call(null,max_len);
var gammas = cljs.core.double_array.call(null,min_len);
var gamma = 0.0;
var tau = 0.0;
var i = (0);
while(true){
if((i < min_len)){
var map__20238 = clojure.core.matrix.impl.defaults.householder_qr.call(null,qr_data,i,mcols__$1,mrows__$1,us,gammas);
var map__20238__$1 = (((((!((map__20238 == null))))?(((((map__20238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20238):map__20238);
var us__$1 = cljs.core.get.call(null,map__20238__$1,new cljs.core.Keyword(null,"us","us",746429226));
var gamma__$1 = cljs.core.get.call(null,map__20238__$1,new cljs.core.Keyword(null,"gamma","gamma",1883969687));
var gammas__$1 = cljs.core.get.call(null,map__20238__$1,new cljs.core.Keyword(null,"gammas","gammas",-195052461));
var tau__$1 = cljs.core.get.call(null,map__20238__$1,new cljs.core.Keyword(null,"tau","tau",89782904));
var error = cljs.core.get.call(null,map__20238__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return null;
} else {
var map__20240 = clojure.core.matrix.impl.defaults.update_qr.call(null,qr_data,i,mcols__$1,mrows__$1,vs,us__$1,gamma__$1,tau__$1);
var map__20240__$1 = (((((!((map__20240 == null))))?(((((map__20240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20240):map__20240);
var qr_data__$1 = cljs.core.get.call(null,map__20240__$1,new cljs.core.Keyword(null,"qr-data","qr-data",-504970292));
var vs__$1 = cljs.core.get.call(null,map__20240__$1,new cljs.core.Keyword(null,"vs","vs",-2022097090));
var G__20246 = qr_data__$1;
var G__20247 = vs__$1;
var G__20248 = us__$1;
var G__20249 = gammas__$1;
var G__20250 = gamma__$1;
var G__20251 = tau__$1;
var G__20252 = (i + (1));
qr_data = G__20246;
vs = G__20247;
us = G__20248;
gammas = G__20249;
gamma = G__20250;
tau = G__20251;
i = G__20252;
continue;
}
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (qr_data,vs,us,gammas,gamma,tau,i,vec__20227,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len){
return (function (p__20242){
var vec__20243 = p__20242;
var k = cljs.core.nth.call(null,vec__20243,(0),null);
var v = cljs.core.nth.call(null,vec__20243,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v.call(null)], null);
});})(qr_data,vs,us,gammas,gamma,tau,i,vec__20227,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len))
,cljs.core.select_keys.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Q","Q",663320520),((function (qr_data,vs,us,gammas,gamma,tau,i,vec__20227,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len){
return (function (){
return clojure.core.matrix.impl.defaults.compute_q.call(null,m,qr_data,mcols__$1,mrows__$1,min_len,us,vs,gammas);
});})(qr_data,vs,us,gammas,gamma,tau,i,vec__20227,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len))
,new cljs.core.Keyword(null,"R","R",-936662523),((function (qr_data,vs,us,gammas,gamma,tau,i,vec__20227,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len){
return (function (){
return clojure.core.matrix.impl.defaults.compute_r.call(null,m,qr_data,mcols__$1,mrows__$1,min_len,new cljs.core.Keyword(null,"compact","compact",-348732150).cljs$core$IFn$_invoke$arity$1(options));
});})(qr_data,vs,us,gammas,gamma,tau,i,vec__20227,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len))
], null),new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(options))));
}
break;
}
}));
goog.object.set(clojure.core.matrix.protocols.PCholeskyDecomposition,"object",true);

goog.object.set(clojure.core.matrix.protocols.cholesky,"object",(function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__20253 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__20254 = true;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__20254;

try{var imp__9009__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var m__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__9009__auto__,m);
return clojure.core.matrix.protocols.cholesky.call(null,m__$1,options);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__20253;
}} else {
return null;
}
}));
goog.object.set(clojure.core.matrix.protocols.PLUDecomposition,"object",true);

goog.object.set(clojure.core.matrix.protocols.lu,"object",(function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__20255 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__20256 = true;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__20256;

try{var imp__9009__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var m__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__9009__auto__,m);
return clojure.core.matrix.protocols.lu.call(null,m__$1,options);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__20255;
}} else {
return null;
}
}));
goog.object.set(clojure.core.matrix.protocols.PSVDDecomposition,"object",true);

goog.object.set(clojure.core.matrix.protocols.svd,"object",(function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__20257 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__20258 = true;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__20258;

try{var imp__9009__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var m__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__9009__auto__,m);
return clojure.core.matrix.protocols.svd.call(null,m__$1,options);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__20257;
}} else {
return null;
}
}));
goog.object.set(clojure.core.matrix.protocols.PEigenDecomposition,"object",true);

goog.object.set(clojure.core.matrix.protocols.eigen,"object",(function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__20259 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__20260 = true;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__20260;

try{var imp__9009__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var m__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__9009__auto__,m);
return clojure.core.matrix.protocols.eigen.call(null,m__$1,options);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__20259;
}} else {
return null;
}
}));
goog.object.set(clojure.core.matrix.protocols.PSolveLinear,"object",true);

goog.object.set(clojure.core.matrix.protocols.solve,"object",(function (a,b){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__20261 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__20262 = true;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__20262;

try{var imp__9009__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var a__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__9009__auto__,a);
return clojure.core.matrix.protocols.solve.call(null,a__$1,b);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__20261;
}} else {
return null;
}
}));
goog.object.set(clojure.core.matrix.protocols.PLeastSquares,"object",true);

goog.object.set(clojure.core.matrix.protocols.least_squares,"object",(function (a,b){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__20263 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__20264 = true;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__20264;

try{var imp__9009__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var a__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__9009__auto__,a);
return clojure.core.matrix.protocols.least_squares.call(null,a__$1,b);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__20263;
}} else {
return null;
}
}));

//# sourceMappingURL=defaults.js.map
