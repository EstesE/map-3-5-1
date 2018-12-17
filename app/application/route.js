import Route from '@ember/routing/route';

export default Route.extend({
    model() {

        let tours = [{
            "pov" : {
                "zoom" : 0.782086597462747,
                "heading" : 34.500004,
                "pitch" : 2.93387
            },
            "location" : {
                "lng" : -71.0717209179228,
                "lat" : 42.3677450522525
            },
            "pano" : "JSEmcxaYBODVat3MifFGww",
            "description" : "test1",
            "title" : "test1"
        }, 
        {
            "title" : "test2",
            "description" : "test2",
            "pano" : "cmL0KpLHy9QsktZBm46ghA",
            "location" : {
                "lat" : 42.3679728781428,
                "lng" : -71.0720402363661
            },
            "pov" : {
                "pitch" : 0,
                "heading" : 306.88928,
                "zoom" : 0.782086597462747
            }
        }];

        return {
            tours: tours
        }

    }
});
