// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('spaceship.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string.format');
goog.require('reagent.core');
spaceship.core.vector_add = (function spaceship$core$vector_add(v1,v2){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,v1,v2);
});
spaceship.core.vector_inverse = (function spaceship$core$vector_inverse(v1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core._,v1);
});
spaceship.core.vector_sub = (function spaceship$core$vector_sub(v1,v2){
return spaceship.core.vector_add(v1,spaceship.core.vector_inverse(v2));
});
spaceship.core.vector_scale = (function spaceship$core$vector_scale(r,v){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10975_SHARP_){
return (r * p1__10975_SHARP_);
}),v);
});
spaceship.core.vector_magnitude = (function spaceship$core$vector_magnitude(v){
var G__10977 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10976_SHARP_){
return Math.pow(p1__10976_SHARP_,(2));
}),v));
return Math.sqrt(G__10977);
});
spaceship.core.vector_normalize = (function spaceship$core$vector_normalize(v){
return spaceship.core.vector_scale(((1) / spaceship.core.vector_magnitude(v)),v);
});
spaceship.core.vector_distance = (function spaceship$core$vector_distance(v1,v2){
return spaceship.core.vector_magnitude(spaceship.core.vector_sub(v2,v1));
});
spaceship.core.ships = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function spaceship$core$iter__10978(s__10979){
return (new cljs.core.LazySeq(null,(function (){
var s__10979__$1 = s__10979;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10979__$1);
if(temp__5457__auto__){
var s__10979__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10979__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__10979__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__10981 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__10980 = (0);
while(true){
if((i__10980 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__10980);
cljs.core.chunk_append(b__10981,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,i,cljs.core.cst$kw$pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((100) * i),(0)], null),cljs.core.cst$kw$vel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));

var G__10982 = (i__10980 + (1));
i__10980 = G__10982;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10981),spaceship$core$iter__10978(cljs.core.chunk_rest(s__10979__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10981),null);
}
} else {
var i = cljs.core.first(s__10979__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,i,cljs.core.cst$kw$pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((100) * i),(0)], null),cljs.core.cst$kw$vel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),spaceship$core$iter__10978(cljs.core.rest(s__10979__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
})());
spaceship.core.target = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
spaceship.core.update_ship_positions = (function spaceship$core$update_ship_positions(ships){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ship){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ship,cljs.core.cst$kw$pos,spaceship.core.vector_add(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(ship),cljs.core.cst$kw$vel.cljs$core$IFn$_invoke$arity$1(ship)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$vel,(((spaceship.core.vector_distance(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(ship),cljs.core.deref(spaceship.core.target)) > (1)))?spaceship.core.vector_normalize(spaceship.core.vector_sub(cljs.core.deref(spaceship.core.target),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(ship))):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null))], 0));
}),ships);
});
spaceship.core.ships_tick = (function spaceship$core$ships_tick(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(spaceship.core.ships,spaceship.core.update_ship_positions);
});
spaceship.core.ships_mouse_event = (function spaceship$core$ships_mouse_event(x,y){
return cljs.core.reset_BANG_(spaceship.core.target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
setInterval(spaceship.core.ships_tick,((1000) / (30)));
spaceship.core.Ship = (function spaceship$core$Ship(pos,vel){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"ship",cljs.core.cst$kw$src,"./spaceship.svg",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(function (){var G__10983 = "translate(-50%, -50%) translate(%fpx, %fpx) rotate(%frad)";
var G__10984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pos,(0));
var G__10985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pos,(1));
var G__10986 = (function (){var G__10987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vel,(1));
var G__10988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vel,(0));
return Math.atan2(G__10987,G__10988);
})();
return goog.string.format.call(null,G__10983,G__10984,G__10985,G__10986);
})()], null)], null)], null);
});
spaceship.core.Space = (function spaceship$core$Space(ships){
var ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"space",cljs.core.cst$kw$ref,((function (ref){
return (function (p1__10989_SHARP_){
return cljs.core.reset_BANG_(ref,p1__10989_SHARP_);
});})(ref))
,cljs.core.cst$kw$on_DASH_mouse_DASH_move,((function (ref){
return (function (p1__10990_SHARP_){
return spaceship.core.ships_mouse_event(p1__10990_SHARP_.clientX,p1__10990_SHARP_.clientY);
});})(ref))
], null),(function (){var iter__4523__auto__ = ((function (ref){
return (function spaceship$core$Space_$_iter__10991(s__10992){
return (new cljs.core.LazySeq(null,((function (ref){
return (function (){
var s__10992__$1 = s__10992;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10992__$1);
if(temp__5457__auto__){
var s__10992__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10992__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__10992__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__10994 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__10993 = (0);
while(true){
if((i__10993 < size__4522__auto__)){
var map__10995 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__10993);
var map__10995__$1 = (((((!((map__10995 == null))))?(((((map__10995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10995):map__10995);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10995__$1,cljs.core.cst$kw$id);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10995__$1,cljs.core.cst$kw$pos);
var vel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10995__$1,cljs.core.cst$kw$vel);
cljs.core.chunk_append(b__10994,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spaceship.core.Ship,pos,vel], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)));

var G__10999 = (i__10993 + (1));
i__10993 = G__10999;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10994),spaceship$core$Space_$_iter__10991(cljs.core.chunk_rest(s__10992__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10994),null);
}
} else {
var map__10997 = cljs.core.first(s__10992__$2);
var map__10997__$1 = (((((!((map__10997 == null))))?(((((map__10997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10997):map__10997);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10997__$1,cljs.core.cst$kw$id);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10997__$1,cljs.core.cst$kw$pos);
var vel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10997__$1,cljs.core.cst$kw$vel);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spaceship.core.Ship,pos,vel], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)),spaceship$core$Space_$_iter__10991(cljs.core.rest(s__10992__$2)));
}
} else {
return null;
}
break;
}
});})(ref))
,null,null));
});})(ref))
;
return iter__4523__auto__(cljs.core.deref(ships));
})()], null);
});
spaceship.core.mount = (function spaceship$core$mount(el){
var G__11000 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spaceship.core.Space,spaceship.core.ships], null);
var G__11001 = el;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__11000,G__11001) : reagent.core.render_component.call(null,G__11000,G__11001));
});
spaceship.core.mount_app_element = (function spaceship$core$mount_app_element(){
var temp__5457__auto__ = document.getElementById("root");
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return spaceship.core.mount(el);
} else {
return null;
}
});
spaceship.core.mount_app_element();
spaceship.core.on_reload = (function spaceship$core$on_reload(){
return spaceship.core.mount_app_element();
});
