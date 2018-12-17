/* global google */
import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['embed-responsive', 'embed-responsive-16by9'],

    didInsertElement() {
        const component = this;
        component._super(...arguments);

        let tour = this.get('virtualTour');
        // debugger;
        var sv = new google.maps.StreetViewService();
        sv.getPanorama({ location: tour.location }, (/*data, status*/) => {
            var panorama = new google.maps.StreetViewPanorama(
                this.element, {
                    pov: tour.pov,
                    links:[],
                    linksControl: false,
                    motionTracking: false,
                    motionTrackingControl: false,
                    addressControl: false,
                    panControl: false,
                    enableCloseButton: false
                });

            // panorama.addListener('pov_changed', () => {
            //     if (panorama.getPosition()) {
            //         console.log({ pano: panorama.getPano(), location: { lat: panorama.getPosition().lat(), lng: panorama.getPosition().lng()}, pov: panorama.getPov() });
            //     }
            // });

            panorama.setPano(tour.pano);
            panorama.setLinks([]);
            panorama.setVisible(true);
        });
    }
});