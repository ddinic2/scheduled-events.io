// export const fakeDayData = [
//     { user_name: 'Dejan Dinic', event_name: 'Meeting', from: 7, to: 12, offset: 0, colspan: 6 },
//     { user_name: 'Jovan Kovacina', event_name: 'Presentation', from: 10, to: 12, offset: 3, colspan: 2 },
//     { user_name: 'Marko Markovic', event_name: 'Meeting', from: 11, to: 14, offset: 4, colspan: 4 },
//     { user_name: 'Nikola Nikolic', event_name: 'Meeting', from: 7, to: 8, offset: 0, colspan: 1 },
//     { user_name: 'Jovan Jovanovic', event_name: 'Meeting', from: 13, to: 15, offset: 6, colspan: 2 },
//     { user_name: 'Petar Kovacina', event_name: 'Meeting', from: 13, to: 14, offset: 6, colspan: 1 },
//     { user_name: 'Vukasin Dinic', event_name: 'Meeting', from: 7, to: 16, offset: 0, colspan: 9 },
//     { user_name: 'Zivota Zivotic', event_name: 'Meeting', from: 8, to: 17, offset: 1, colspan: 9 },
//     { user_name: 'Pera Zdera', event_name: 'Meeting', from: 12, to: 17, offset: 5, colspan: 5 },
//     { user_name: 'Dusko Dugousko', event_name: 'Meeting', from: 10, to: 15, offset: 3, colspan: 5 }
// ];

import { v4 as uuidv4 } from 'uuid';

export const fakeDayData = [
    {
        user_name: 'Dejan Dinic',
        id: uuidv4(),
        max_col: 10,
        events: [{ event_name: 'Meeting', from: 7, to: 12, offset: 0, colspan: 6, id: uuidv4() }]
    },
    {
        user_name: 'Jovan Kovacina',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Presentation', from: 10, to: 12, offset: 3, colspan: 2, id: uuidv4() }]
    },
    {
        user_name: 'Marko Markovic',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Meeting', from: 11, to: 14, offset: 4, colspan: 4, id: uuidv4() }]
    },
    {
        user_name: 'Nikola Nikolic',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Meeting', from: 7, to: 8, offset: 0, colspan: 1, id: uuidv4() }]
    },
    {
        user_name: 'Jovan Jovanovic',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Meeting', from: 13, to: 15, offset: 6, colspan: 2, id: uuidv4() }]
    },
    {
        user_name: 'Petar Kovacina',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Meeting', from: 8, to: 9, offset: 1, colspan: 1, id: uuidv4() }, { event_name: 'Training', from: 11, to: 12, offset: 2, colspan: 1, id: uuidv4() }]
    },
    {
        user_name: 'Vukasin Dinic',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Meeting', from: 7, to: 16, offset: 0, colspan: 9, id: uuidv4() }]
    },
    {
        user_name: 'Zivota Zivotic',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Meeting', from: 8, to: 17, offset: 1, colspan: 9, id: uuidv4() }]
    },
    {
        user_name: 'Pera Zdera',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Meeting', from: 12, to: 17, offset: 5, colspan: 5, id: uuidv4() }]
    },
    {
        user_name: 'Dusko Dugousko',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Meeting', from: 10, to: 15, offset: 3, colspan: 5, id: uuidv4() }]
    }
];

export const fakeWeekData = [
    {
        user_name: 'Dejan Dinic',
        id: uuidv4(),
        max_col: 10,
        events: [{ event_name: 'Meeting', from:  7, to: 12, offset: 0, colspan: 6, id: uuidv4() }]
    },
    {
        user_name: 'Jovan Kovacina',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Presentation', from: 10, to: 12, offset: 2, colspan: 3, id: uuidv4() }]
    },
    {
        user_name: 'Marko Markovic',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Meeting', from: 11, to: 14, offset: 0, colspan: 7, id: uuidv4() }]
    },
    {
        user_name: 'Nikola Nikolic',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Meeting', from: 7, to: 8, offset: 3, colspan: 2, id: uuidv4() }]
    },
    {
        user_name: 'Jovan Jovanovic',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Meeting', from: 13, to: 15, offset: 5, colspan: 1, id: uuidv4() }]
    },
    {
        user_name: 'Petar Kovacina',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Meeting', from: 8, to: 9, offset: 0, colspan: 2, id: uuidv4() }, { event_name: 'Training', from: 11, to: 12, offset: 1, colspan: 3, id: uuidv4() }]
    },
    {
        user_name: 'Vukasin Dinic',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Meeting', from: 7, to: 16, offset: 5, colspan: 2, id: uuidv4() }]
    },
    {
        user_name: 'Zivota Zivotic',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Meeting', from: 8, to: 17, offset: 4, colspan: 3, id: uuidv4() }]
    },
    {
        user_name: 'Pera Zdera',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Meeting', from: 12, to: 17, offset: 6, colspan: 1, id: uuidv4() }]
    },
    {
        user_name: 'Dusko Dugousko',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Meeting', from: 10, to: 15, offset: 0, colspan: 7, id: uuidv4() }]
    }
]

export const fakeMonthData = [
    {
        user_name: 'Dejan Dinic',
        id: uuidv4(),
        max_col: 10,
        events: [{ event_name: 'Meeting', from:  7, to: 12, offset: 0, colspan: 11, id: uuidv4() }]
    },
    {
        user_name: 'Jovan Kovacina',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Presentation', from: 10, to: 12, offset: 1, colspan: 3, id: uuidv4() }, { event_name: 'Presentation', from: 10, to: 12, offset: 7, colspan: 6, id: uuidv4() }, { event_name: 'Presentation', from: 10, to: 12, offset: 2, colspan: 4, id: uuidv4() }]
    },
    {
        user_name: 'Marko Markovic',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Meeting', from: 11, to: 14, offset: 0, colspan: 7, id: uuidv4() }, { event_name: 'Meeting', from: 11, to: 14, offset: 5, colspan: 12, id: uuidv4() }]
    },
    {
        user_name: 'Nikola Nikolic',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Meeting', from: 7, to: 8, offset: 3, colspan: 22, id: uuidv4() }]
    },
    {
        user_name: 'Jovan Jovanovic',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Meeting', from: 13, to: 15, offset: 25, colspan: 5, id: uuidv4() }]
    },
    {
        user_name: 'Petar Kovacina',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Meeting', from: 8, to: 9, offset: 0, colspan: 2, id: uuidv4() }, { event_name: 'Training', from: 11, to: 12, offset: 1, colspan: 3, id: uuidv4() }]
    },
    {
        user_name: 'Vukasin Dinic',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Meeting', from: 7, to: 16, offset: 5, colspan: 2, id: uuidv4() }]
    },
    {
        user_name: 'Zivota Zivotic',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Meeting', from: 8, to: 17, offset: 4, colspan: 3, id: uuidv4() }]
    },
    {
        user_name: 'Pera Zdera',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Meeting', from: 12, to: 17, offset: 6, colspan: 1, id: uuidv4() }]
    },
    {
        user_name: 'Dusko Dugousko',
        max_col: 10,
        id: uuidv4(),
        events: [{ event_name: 'Meeting', from: 10, to: 15, offset: 0, colspan: 7, id: uuidv4() }]
    }
]