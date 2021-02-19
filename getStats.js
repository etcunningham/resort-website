const {resort, attractionType, ticketType, diningType} = require('./webapp/src/model')

const {parks} = resort;

const parkInfo = {}

const getBlankParkInfo = () => {
    const blankParkInfo = {
        ticketType: {},
        attractionType: {},
        diningType: {},
        shops: 0
    };

    Object.keys(ticketType).forEach(key => {
        blankParkInfo.ticketType[ticketType[key]] = 0;
    });

    Object.keys(attractionType).forEach(key => {
        blankParkInfo.attractionType[attractionType[key]] = 0;
    });
    
    console.log(diningType)
    Object.keys(diningType).forEach(key => {
        blankParkInfo.diningType[diningType[key]] = 0;
    });

    return blankParkInfo;
};

const getLandInfo = (land, parkName) => {
    land.attractions.forEach(attraction => {
        parkInfo[parkName].ticketType[attraction.ticket] += 1;
        parkInfo[parkName].attractionType[attraction.type] += 1;
    }) 
    if(land.dining) {
        land.dining.forEach(restaurant => {
            parkInfo[parkName].diningType[restaurant.type] += 1;
        })
    }
    if(land.shops) parkInfo[parkName].shops += land.shops.length
};

parks.forEach(park => {
    parkInfo[park.name] = getBlankParkInfo()
    park.lands.forEach(land => {
        if(land.sublands) {
            land.sublands.forEach(subland => {
                getLandInfo(subland, park.name)
            })
        } else {
            getLandInfo(land, park.name)
        }
    })
})

console.log(parkInfo)