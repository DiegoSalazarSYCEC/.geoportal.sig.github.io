/* Leaflet.ResetView (c) By Wong Hoi Sing Edison */
!function(t,e)
    {
        "function"==typeof define&&define.amd?define
        (
            [
                "leaflet"
            ],
            t
        ):
        "object"==typeof exports&&
        (
            module.exports=t
                (
                    require
                        ("leaflet")
                )
        ),
        void 0!==e&&e.L&&
        (
            e.L.Control.ResetView=t
            (L)
        )
    }
    (
        function(e)
            {
                return ResetView=e.Control.extend
                    (
                        {
                            options:
                                {
                                    position:"topleft",
                                    title:"Reset view",
                                    latlng:null,
                                    zoom:null
                                },onAdd:   
                                function(t)
                                {
                                    return this._map=t,this._container=e.DomUtil.create
                                    (
                                        "div","leaflet-control-resetview leaflet-bar leaflet-control"
                                    ),
                                    this._link=e.DomUtil.create
                                    (
                                        "a","leaflet-bar-part leaflet-bar-part-single",this._container
                                    ),
                                    this._link.title=this.options.title,
                                    this._link.href="#",
                                    this._link.setAttribute
                                    (
                                        "role","button"
                                    ),
                                    this._icon=e.DomUtil.create
                                    (
                                        "span","leaflet-control-resetview-icon",this._link
                                    ),
                                    e.DomEvent.on
                                    (
                                        this._link,"click",
                                        this._resetView,this
                                    ),
                                    this._container
                                },onRemove:
                                function(t)
                                {
                                    e.DomEvent.off
                                    (
                                        this._link,"click",
                                        this._resetView,this
                                    )
                                },_resetView:
                                function(t)
                                {
                                    this._map.setView
                                    (
                                        this.options.latlng,
                                        this.options.zoom
                                        )
                                }
                        }
                    ),
                    e.control.resetView=function(t)
                    {
                        return new ResetView(t)
                    },ResetView 
            },window
    );