import projects from '../data/landlines.json'
// import * as turf from '@turf/turf'
// import { greatCircle, randomPoint } from "@turf/turf";

projects.features.forEach(function(project, i){
    project.properties.id = i;
    // console.log(project.geometry.coordinates)
});


// const rando = new Array(40).fill().map(() => Math.round(Math.random() * 12))



const landLines = [
                // [-106.14563226699829,38.08748186656206],
                // [-105.52831649780273,37.74139927315054],
                // [-105.87673326457147,37.46810043923201],
                // [-105.9272,37.1054],
                // [-105.62305748462676,37.00289111300673],
                // [-105.92538051959495,37.06187200399451],
                // [-105.4632568359375,37.189860709456596],
                // [-106.14563226699829,38.08748186656206],
                // [-106.92546844482422,37.846392577323286],
                // [-105.62305748462676,37.00289111300673],
                // [-105.4632568359375,37.189860709456596],
                // [-105.87673326457147,37.46810043923201],
                // [-106.92546844482422,37.846392577323286],
                // [-105.87673326457147,37.46810043923201],
                // [-106.14563226699829,38.08748186656206],
                // [-106.354274, 37.686382],
                // [-106.01840972900389, 36.85668612175977],
                // [-105.70632934570311, 37.97018468810549],
                // [-106.091481, 37.057333]

                // projects.features[9].geometry.coordinates,
                // projects.features[11].geometry.coordinates,
                // projects.features[6].geometry.coordinates,
                // projects.features[8].geometry.coordinates,
                // projects.features[7].geometry.coordinates,
                // projects.features[4].geometry.coordinates,
                // projects.features[1].geometry.coordinates,
                // projects.features[10].geometry.coordinates,
                // projects.features[8].geometry.coordinates,
                // projects.features[5].geometry.coordinates,
                // projects.features[3].geometry.coordinates,
                // projects.features[2].geometry.coordinates,
                // projects.features[1].geometry.coordinates,
                // projects.features[3].geometry.coordinates,
                // projects.features[6].geometry.coordinates,
                // projects.features[2].geometry.coordinates,
                // projects.features[0].geometry.coordinates,
                // projects.features[9].geometry.coordinates,
                ]

export default landLines
