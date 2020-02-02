(ns ^:figwheel-hooks spaceship.core
  (:require
   [goog.string.format]
   [reagent.core :as r]))

(defn vector-add [v1 v2]
  (map + v1 v2))

(defn vector-inverse [v1]
  (map - v1))

(defn vector-sub [v1 v2]
  (vector-add v1
              (vector-inverse v2)))

(defn vector-scale [r v]
  (map #(* r %) v))

(defn vector-magnitude [v] 
  (Math/sqrt (reduce +
                     (map #(Math/pow % 2)
                          v))))

(defn vector-normalize [v]
  (vector-scale (/ 1 (vector-magnitude v))
                v))

(defn vector-distance [v1 v2]
  (vector-magnitude (vector-sub v2 v1)))

(def ships (r/atom (for [i (range 10)]
                     {:id i
                      :pos [(* 100 i) 0]
                      :vel [0 0]})))

(def target (clojure.core/atom [0 0]))

(defn update-ship-positions [ships] 
  (map (fn [ship] 
         (assoc ship
                :pos (vector-add
                      (:pos ship)
                      (:vel ship))
                :vel (if (> (vector-distance (:pos ship)
                                             @target)
                            1)
                       (vector-normalize (vector-sub @target
                                                     (:pos ship)))
                       [0 0])
                ))
       ships))

(defn ships-tick [] 
  (swap! ships
         update-ship-positions))

(defn ships-mouse-event [x y]
  (reset! target [x y]))

(js/setInterval ships-tick (/ 1000 30))

(defn Ship [pos vel] 
  [:img {:class "ship" 
         :src "./spaceship.svg"
         :style {:transform (goog.string.format "translate(-50%, -50%) translate(%fpx, %fpx) rotate(%frad)"
                                                (nth pos 0)
                                                (nth pos 1)
                                                (Math/atan2 (nth vel 1)
                                                            (nth vel 0)))}}])

(defn Space [ships]
  (let* [ref (clojure.core/atom nil)]
    [:div {:class "space"
           :ref #(reset! ref %)
           :on-mouse-move #(ships-mouse-event (.-clientX %)
                                              (.-clientY %))}
     (for [{:keys [id pos vel]} @ships]
       ^{:key id} [Ship pos vel])]))


(defn mount [el]
  (r/render-component [Space ships] el))

(defn mount-app-element []
  (when-let [el (.getElementById js/document "root")]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
