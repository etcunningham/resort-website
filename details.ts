enum ticketType {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
}

enum attractionType {
  animatronic = 'animatronic show',
  transportation = 'transportation',
  walkthrough = 'walk through',
  play = 'play area',
  boat = 'boat ride',
  dark = 'dark ride',
  coaster = 'rollercoaster',
  film = 'film',
  show = 'show',
  simulator = 'simulator',
  shooter = 'shooter',
  flat = 'flat ride',
  character = 'meet & greet',
  other = 'other',
}

enum diningType {
  table = 'table service',
  snack = 'quick service - snack',
  quick = 'quick service - meal',
  buffet = 'buffet',
  character = 'character dining',
  coffee = 'coffee shop'
}

class Attraction {
  constructor(public name: string, public ticket: ticketType, public type: attractionType, public description?: string) { }
}

class Restaurant {
  constructor(public name: string, public type: diningType, public description?: string) { }
}

class Shop {
  constructor(public name: string, public description?: string) { }
}

class Other {
  constructor(public name: string, public description?: string) { }
}

const resort = {
  parks: [
    {
      name: 'Disneyland Park',
      lands: [
        {
          name: 'Main Street',
          sublands: [
            {
              name: 'Main Street',
              attractions: [
                new Attraction(
                  'Main Street Vehicles',
                  ticketType.B,
                  attractionType.transportation
                ),
                new Attraction(
                  'Disneyland Railroad',
                  ticketType.C,
                  attractionType.transportation
                ),
                new Attraction(
                  'The Walt Disney Story',
                  ticketType.B,
                  attractionType.walkthrough
                ),
                new Attraction(
                  'Penny Arcade',
                  ticketType.A,
                  attractionType.play
                ),
                new Attraction(
                  'Main Street Cinema',
                  ticketType.A,
                  attractionType.film
                )
              ],
              dining: [
                new Restaurant(
                  'Walt\'s',
                  diningType.table
                ),
                new Restaurant(
                  'Plaza Restaurant',
                  diningType.table
                ),
                new Restaurant(
                  'Gibson Girl Ice Cream Parlor',
                  diningType.snack
                ),
                new Restaurant(
                  'Main Street Confectionary',
                  diningType.snack
                ),
                new Restaurant(
                  'Main Street Bakery',
                  diningType.snack
                ),
                new Restaurant(
                  'Coffee House',
                  diningType.coffee
                ),
                new Restaurant(
                  'Crystal Palace',
                  diningType.buffet
                )
              ],
              shopping: [
                new Shop(
                  'The Emporium'
                ),
                new Shop(
                  'Magic Shop',
                ),
                new Shop(
                  'Crystal Arts'
                ),
                new Shop(
                  'Music Shop'
                ),
                new Shop(
                  'Disney Clothiers, Ltd.'
                ), new Shop(
                  'Flower Shop'
                ),
                new Shop(
                  'Uptown Jewelers'
                )
              ],
              other: [
                new Other(
                  'City Hall'
                ),
                new Other(
                  'Firehouse'
                )
              ]
            },
            {
              name: 'Liberty Street',
              attractions: [
                new Attraction(
                  'The Hall of Presidents',
                  ticketType.C,
                  attractionType.animatronic
                )
              ],
              dining: [
                new Restaurant(
                  'Liberty Tavern',
                  diningType.quick
                )
              ],
              shopping: [
                new Shop(
                  'Christmas Shop'
                ),
                new Shop(
                  'Glassblower\'s'
                ),
                new Shop(
                  'Candle Shop'
                ),
                new Shop(
                  'Blacksmith'
                )
              ],
              other: [
                new Other(
                  'Liberty Park'
                )
              ]
            }
          ]
        },
        {
          name: 'Adventureland',
          sublands: [
            {
              name: 'Africa',
              attractions: [
                new Attraction(
                  'African Stage Show',
                  ticketType.B,
                  attractionType.show
                )
              ],
              dining: [
                new Restaurant(
                  '',
                  diningType.snack
                ),
              ],
              shopping: [
                new Shop(
                  ''
                ),
                new Shop(
                  ''
                ),
                new Shop(
                  'Bazaar'
                )
              ]
            },
            {
              name: 'Arabia',
              attractions: [
                new Attraction(
                  '1001 Nights',
                  ticketType.D,
                  attractionType.dark
                ),
                new Attraction(
                  'Aladdin: The Musical',
                  ticketType.D,
                  attractionType.show
                )
              ],
              dining: [

              ],
              shopping: [
                new Shop(
                  'Cave of Wonders'
                )
              ]
            },
            {
              name: 'Polynesia',
              attractions: [
                new Attraction(
                  'Indiana Jones Adventure',
                  ticketType.E,
                  attractionType.dark
                ),
                new Attraction(
                  'Jungle Cruise',
                  ticketType.D,
                  attractionType.boat
                ),
                new Attraction(
                  'Enchanted Tiki Room',
                  ticketType.C,
                  attractionType.animatronic
                ),
                new Attraction(
                  'Swiss Family Treehouse',
                  ticketType.B,
                  attractionType.walkthrough
                ),
                new Attraction(
                  'Exploration Trails',
                  ticketType.A,
                  attractionType.walkthrough
                ),
              ],
              dining: [
                new Restaurant(
                  'Tropical Terrace',
                  diningType.quick
                ),
                new Restaurant(
                  'Sunshine Veranda',
                  diningType.table
                ),
                new Restaurant(
                  'Dole Whip Stand',
                  diningType.snack
                )
              ],
              shopping: [
                new Shop(
                  'Adventure Trading Co'
                ),
                new Shop(
                  'Island Traders'
                )
              ],
              other: [
                new Other(
                  'Picnic Area'
                )
              ]
            },
            {
              name: 'Dinosaurs',
              attractions: [
                new Attraction(
                  'The Boneyard',
                  ticketType.B,
                  attractionType.play
                ),
                new Attraction(
                  'Countdown to Extinction',
                  ticketType.D,
                  attractionType.simulator
                ),
                new Attraction(
                  'Volcano Explorations',
                  ticketType.E,
                  attractionType.coaster
                ),
                new Attraction(
                  'Exploration Trails',
                  ticketType.A,
                  attractionType.walkthrough
                )
              ],
              dining: [
                new Restaurant(
                  'Dinosaur Canteen',
                  diningType.quick
                )
              ],
              shops: [
                new Shop(
                  'Dino Shop'
                )
              ]
            }
          ]
        },
        {
          name: 'Tomorrowland',
          sublands: [
            {
              name: 'Tomorrowland',
              attractions: [
                new Attraction(
                  'Buzz Lightyear: Star Command',
                  ticketType.C,
                  attractionType.shooter
                ),
                new Attraction(
                  'Mission: Space',
                  ticketType.E,
                  attractionType.simulator
                ),
                new Attraction(
                  'Visionarium',
                  ticketType.D,
                  attractionType.dark
                ),
                new Attraction(
                  'PeopleMover',
                  ticketType.C,
                  attractionType.transportation
                ),
                new Attraction(
                  'AstroJets',
                  ticketType.C,
                  attractionType.flat
                ),
                new Attraction(
                  'Galactic Zoo',
                  ticketType.A,
                  attractionType.walkthrough
                ),
                new Attraction(
                  'Plecteau\'s Adventures',
                  ticketType.B,
                  attractionType.show
                ),
                new Attraction(
                  'Space Mountain',
                  ticketType.E,
                  attractionType.coaster
                ),
                new Attraction(
                  'IGC Energy Tour',
                  ticketType.E,
                  attractionType.simulator
                )
              ]
            }
          ]
        },
        {
          name: 'Frontierland',
          attractions: [
            new Attraction(
              'Western River Expedition',
              ticketType.E,
              attractionType.boat
            ),
            new Attraction(
              'Thunder Mountain Railroad',
              ticketType.E,
              attractionType.coaster
            ),
            new Attraction(
              'Riverboat',
              ticketType.B,
              attractionType.transportation
            ),
            new Attraction(
              'Country Bear Jamboree',
              ticketType.C,
              attractionType.animatronic
            ),
            new Attraction(
              'Explorer Canoes',
              ticketType.B,
              attractionType.boat
            ),
            new Attraction(
              'Big Thunder Ranch',
              ticketType.A,
              attractionType.play
            ),
            new Attraction(
              'Shootin\' Gallery',
              ticketType.A,
              attractionType.play
            ),
            new Attraction(
              'Exploration Trails',
              ticketType.A,
              attractionType.walkthrough
            )
          ]
        },
        {
          name: 'Fantasyland',
          sublands: [
            {
              name: 'Londontown',
              attractions: [
                new Attraction(
                  'Carousel',
                  ticketType.C,
                  attractionType.flat
                )
              ],
              other: [
                new Other(
                  'Cherry Blossom Garden'
                )
              ]
            },
            {
              name: 'Neverland',
              attractions: [
                new Attraction(
                  'Peter Pan\'s Flight',
                  ticketType.E,
                  attractionType.dark
                ),
                new Attraction(
                  'Pixie Hollow',
                  ticketType.B,
                  attractionType.character
                ),
                new Attraction(
                  'Exploration Trails',
                  ticketType.A,
                  attractionType.walkthrough
                )
              ]
            },
            {
              name: 'Storybook Land',
              attractions: [
                new Attraction(
                  'Storybook Land Canal Boats',
                  ticketType.C,
                  attractionType.boat
                ),
                new Attraction(
                  'Circus Train through Storybook Land',
                  ticketType.C,
                  attractionType.coaster
                ),
                new Attraction(
                  'Seven Dwarf\'s Mine Train',
                  ticketType.D,
                  attractionType.coaster
                ),
                new Attraction(
                  'Cinderella',
                  ticketType.D,
                  attractionType.dark
                ),
                new Attraction(
                  'Beauty and the Beast',
                  ticketType.D,
                  attractionType.dark
                ),
                new Attraction(
                  'Tangled',
                  ticketType.D,
                  attractionType.boat
                ),
                new Attraction(
                  'Fantasyland Theater',
                  ticketType.C,
                  attractionType.show
                )
              ]
            },
            {
              name: 'Wonderland',
              attractions: [
                new Attraction(
                  'Alice\'s Curious Labyrinth',
                  ticketType.B,
                  attractionType.play
                ),
                new Attraction(
                  'Alice\'s Adventures in Wonderland',
                  ticketType.E,
                  attractionType.dark
                ),
                new Attraction(
                  'Very Mad Tea Party',
                  ticketType.C,
                  attractionType.flat
                )
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Disneysea',
      lands: [
        {
          name: 'City Waterfront',
          attractions: [
            new Attraction(
              'Disneysea Touring',
              ticketType.C,
              attractionType.transportation
            ),
            new Attraction(
              '',
              ticketType.A, // or B
              null
            ),
            new Attraction(
              '',
              ticketType.B, // or A
              null
            )
          ]
        },
        {
          name: 'Mediterranean Harbor',
          attractions: [
            new Attraction(
              'Da Vinci Ride',
              ticketType.D, // or E,
              null
            ),
            new Attraction(
              'Gondola',
              ticketType.B,
              attractionType.boat
            ),
            new Attraction(
              'Exploration Trails',
              ticketType.A,
              attractionType.walkthrough
            )
          ]
        },
        {
          name: 'Mermaid Lagoon',
          attractions: [
            new Attraction(
              'Voyage of the Little Mermaid',
              ticketType.D,
              attractionType.dark
            ),
            new Attraction(
              'Jumping Jellyfish',
              ticketType.C,
              attractionType.flat
            ),
            new Attraction(
              'Flying Fish',
              ticketType.B,
              attractionType.flat
            ),
            new Attraction(
              'The Whirlpool',
              ticketType.C,
              attractionType.flat
            ),
            new Attraction(
              '',
              ticketType.C,
              attractionType.flat
            )
          ]
        },
        {
          name: 'Mysterious Island',
          attractions: [
            new Attraction(
              '20,000 Leagues',
              ticketType.E,
              attractionType.boat
            ),
            new Attraction(
              'Around the World',
              ticketType.D,
              attractionType.dark
            ),
            new Attraction(
              'From the Earth to the Moon',
              ticketType.E,
              attractionType.coaster
            ),
            new Attraction(
              'Exploration Trails',
              ticketType.A,
              attractionType.walkthrough
            )
          ]
        },
        {
          name: 'Point Discovery',
          attractions: [
            new Attraction(
              'StormRider',
              ticketType.D,
              attractionType.simulator
            ),
            new Attraction(
              '',
              ticketType.E,
              attractionType.coaster
            ),
            new Attraction(
              '',
              ticketType.C, // or D
              null
            )
          ]
        },
        {
          name: 'The Kingdom of Arrendale',
          attractions: [
            new Attraction(
              'Frozen Ever After',
              ticketType.D,
              attractionType.boat
            ),
            new Attraction(
              'Icetopia',
              ticketType.C,
              attractionType.flat
            ),
            new Attraction(
              'A Frozen Celebration',
              ticketType.C,
              attractionType.show
            ),
            new Attraction(
              'Olaf\'s Summer Extravananza',
              ticketType.C,
              attractionType.flat
            )
          ]
        },
        {
          name: 'Pirate Cove',
          attractions: [
            new Attraction(
              'Pirates of the Caribbean',
              ticketType.E,
              attractionType.boat
            ),
            new Attraction(
              'Jack Sparrow Show',
              ticketType.C,
              attractionType.show
            ),
            new Attraction(
              'Exploration Trails',
              ticketType.A,
              attractionType.walkthrough
            )
          ]
        },
        {
          name: 'The Bayou',
          attractions: [
            new Attraction(
              'The Princess and the Frog',
              ticketType.C,
              attractionType.dark
            ),
            new Attraction(
              'The Haunted Mansion',
              ticketType.E,
              attractionType.dark
            ),
            new Attraction(
              '',
              ticketType.A, // or B,
              null
            )
          ]
        }
      ]
    },
    {
      name: 'Disney Earth',
      lands: [
        {
          name: 'Europe',
          sublands: [
            {
              name: 'Britain',
              attractions: [
                new Attraction(
                  'Mary Poppins',
                  ticketType.D,
                  attractionType.dark
                ),
                new Attraction(
                  'Double Decker Bus',
                  ticketType.B,
                  attractionType.transportation
                ),
                new Attraction(
                  '',
                  ticketType.E,
                  null
                )
              ]
            },
            {
              name: 'Germany',
              attractions: [
                new Attraction(
                  'Rhine River Cruise',
                  ticketType.C,
                  attractionType.boat
                ),
                new Attraction(
                  '',
                  ticketType.B,
                  null
                )
              ]
            },
            {
              name: 'France',
              attractions: [
                new Attraction(
                  'Ratatouille',
                  ticketType.D,
                  attractionType.dark
                ),
                new Attraction(
                  'French History musical',
                  ticketType.C,
                  attractionType.show
                )
              ]
            },
            {
              name: 'Denmark',
              attractions: [
                new Attraction(
                  '',
                  ticketType.B, // or C
                  null
                )
              ]
            }
          ]
        },
        {
          name: 'Asia',
          sublands: [
            {
              name: 'Nepal',
              attractions: [
                new Attraction(
                  'Expedition Everest',
                  ticketType.E,
                  attractionType.coaster
                ),
                new Attraction(
                  'Kali River Rapids',
                  ticketType.D,
                  attractionType.boat
                ),
                new Attraction(
                  'Exploration Trails',
                  ticketType.A,
                  attractionType.walkthrough
                )
              ]
            },
            {
              name: 'India',
              attractions: [
                new Attraction(
                  'Jungle Book',
                  ticketType.D,
                  attractionType.dark
                )
              ]
            },
            {
              name: 'Japan',
              attractions: [
                new Attraction(
                  'Bullet Train',
                  ticketType.D,
                  attractionType.simulator
                ),
                new Attraction(
                  '',
                  ticketType.B, // or C
                  null
                )
              ]
            },
            {
              name: 'China',
              attractions: [
                new Attraction(
                  'Mulan',
                  ticketType.C,
                  attractionType.show
                ),
                new Attraction(
                  '',
                  ticketType.C,
                  attractionType.boat
                )
              ]
            }
          ]
        },
        {
          name: 'Africa',
          sublands: [
            {
              name: 'Jungle',
              attractions: [
                new Attraction(
                  '',
                  ticketType.D, // or E
                  null
                ),
                new Attraction(
                  'Treehouse',
                  ticketType.B,
                  null
                ),
                new Attraction(
                  'Exploration Trails',
                  ticketType.A,
                  attractionType.walkthrough
                )
              ]
            },
            {
              name: 'Savannah',
              attractions: [
                new Attraction(
                  'Festival of the Lion King',
                  ticketType.D,
                  attractionType.show
                ),
                new Attraction(
                  'Kilimanjaro Safaris',
                  ticketType.E,
                  attractionType.other
                )
              ]
            }
          ]
        },
        {
          name: 'World Plaza',
          attractions: [
            new Attraction(
              'Soarin\'',
              ticketType.E,
              attractionType.simulator
            ),
            new Attraction(
              'it\'s a small world',
              ticketType.D,
              attractionType.boat
            ),
            new Attraction(
              'Heritage Stage',
              ticketType.C,
              attractionType.show
            )
          ]
        },
        {
          name: 'Oceania',
          sublands: [
            {
              name: 'Sydney',
              attractions: [
                new Attraction(
                  'Finding Nemo: The Musical',
                  ticketType.D,
                  attractionType.show
                )
              ]
            },
            {
              name: 'Outback',
              attractions: [
                new Attraction(
                  'Outback Expeditions',
                  ticketType.E,
                  attractionType.other
                ),
                new Attraction(
                  'Exploration Trail',
                  ticketType.A,
                  attractionType.walkthrough
                )
              ]
            }
          ]
        },
        {
          name: 'Americas',
          sublands: [
            {
              name: 'Canada',
              attractions: [
                new Attraction(
                  'Raft Ride',
                  ticketType.E,
                  attractionType.boat
                ),
                new Attraction(
                  '',
                  ticketType.B,
                  null
                )
              ]
            },
            {
              name: 'Mexico',
              attractions: [
                new Attraction(
                  'Coco ride',
                  ticketType.D,
                  attractionType.dark
                ),
                new Attraction(
                  '',
                  ticketType.A, // or B
                  null
                )
              ]
            },
            {
              name: 'Brazil',
              attractions: [
                new Attraction(
                  '',
                  ticketType.C, // or D
                  null
                ),
                new Attraction(
                  'Exploration Trail',
                  ticketType.A,
                  attractionType.walkthrough
                )
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Mythica',
      lands: [
        {
          name: 'El Dorado',
          attractions: [
            new Attraction(
              'Golden Celebrations (idk)',
              ticketType.C,
              attractionType.show
            ),
            new Attraction(
              'Exploration Trail',
              ticketType.A,
              attractionType.walkthrough,
            )
          ]
        },
        {
          name: 'Beastlie Kingdomme',
          attractions: [
            new Attraction(
              'Race the Dragon',
              ticketType.E,
              attractionType.coaster
            ),
            new Attraction(
              'Fantasia Gardens',
              ticketType.C,
              attractionType.boat
            ),
            new Attraction(
              'Beastlie Carousel',
              ticketType.B,
              attractionType.flat
            ),
            new Attraction(
              '',
              ticketType.C, // or D
              null
            ),
            new Attraction(
              'Exploration Trail',
              ticketType.A,
              attractionType.walkthrough
            )
          ]
        },
        {
          name: 'Atlantis',
          attractions: [
            new Attraction(
              'Flume Ride',
              ticketType.D,
              attractionType.boat
            ),
            new Attraction(
              'Poseidon\'s Adventure',
              ticketType.E,
              attractionType.dark
            ),
            new Attraction(
              '',
              ticketType.D,
              null
            ),
            new Attraction(
              '',
              ticketType.B, // or C
              null
            ),
            new Attraction(
              'Exploration Trail',
              ticketType.A,
              attractionType.walkthrough
            )
          ]
        },
        {
          name: 'Olympus',
          attractions: [
            new Attraction(
              'Gods Among Us',
              ticketType.D,
              attractionType.dark
            ),
            new Attraction(
              'Temple of Hades',
              ticketType.E,
              attractionType.coaster
            ),
            new Attraction(
              'Odyssey',
              ticketType.C,
              attractionType.boat
            ),
            new Attraction(
              'Coliseum',
              ticketType.C,
              attractionType.show
            ),
            new Attraction(
              'Labyrinth',
              ticketType.B,
              attractionType.walkthrough
            )
          ]
        },
        {
          name: 'Shangri La',
          attractions: [
            new Attraction(
              'Coaster through the Clouds',
              ticketType.E,
              attractionType.coaster
            ),
            new Attraction(
              '',
              ticketType.D,
              null
            ),
            new Attraction(
              'Ropes Course',
              ticketType.B,
              attractionType.walkthrough
            )
          ]
        },
        {
          name: 'Egypt',
          attractions: [
            new Attraction(
              'Revenge of the Mummy',
              ticketType.E,
              attractionType.dark
            ),
            new Attraction(
              'Nile River Cruise',
              ticketType.D,
              attractionType.boat
            ),
            new Attraction(
              '',
              ticketType.B, // or C
              null
            ),
            new Attraction(
              'Maze throug a pyrimid',
              ticketType.A,
              attractionType.walkthrough
            )
          ]
        }
      ]
    },
    {
      name: 'Disney Adventure',
      lands: [
        {
          name: 'Star Wars',
          attractions: [
            new Attraction(
              'Star Tours',
              ticketType.D,
              attractionType.simulator
            ),
            new Attraction(
              'Rise of the Resistance',
              ticketType.E,
              attractionType.dark
            ),
            new Attraction(
              'Millennium Falcon: Smuggler\'s Run',
              ticketType.E,
              attractionType.simulator
            ),
            new Attraction(
              'Pod Race',
              ticketType.D,
              attractionType.coaster
            ),
            new Attraction(
              'Bantha peoplemover',
              ticketType.C,
              attractionType.transportation
            ),
            new Attraction(
              'Jedi Training Academy',
              ticketType.C,
              attractionType.show
            ),
            new Attraction(
              '',
              ticketType.B,
              null
            ),
            new Attraction(
              'Exploration Trail',
              ticketType.A,
              attractionType.walkthrough
            )
          ]
        },
        {
          name: 'Marvel',
          sublands: [
            {
              name: 'Captain America',
              attractions: [
                new Attraction(
                  'WWII Cap Ride',
                  ticketType.D,
                  null
                ),
                new Attraction(
                  '',
                  ticketType.B,
                  null
                )
              ]
            },
            {
              name: 'Stark Expo',
              attractions: [
                new Attraction(
                  'Stark Expo Presentation',
                  ticketType.C,
                  attractionType.show
                ),
                new Attraction(
                  'Avengers Assemble',
                  ticketType.E,
                  attractionType.coaster
                ),
                new Attraction(
                  'Iron Man Experience',
                  ticketType.D,
                  attractionType.simulator
                )
              ]
            },
            {
              name: 'Asgard',
              attractions: [
                new Attraction(
                  'Journey to Asgard',
                  ticketType.D,
                  attractionType.dark
                ),
                new Attraction(
                  'Entertainment ?',
                  ticketType.B, // or C
                  attractionType.show
                )
              ]
            }
          ]
        },
        {
          name: 'Avatar',
          attractions: [
            new Attraction(
              'Flight of Passage',
              ticketType.E,
              attractionType.simulator
            ),
            new Attraction(
              'Navi River Journey',
              ticketType.D,
              attractionType.boat
            ),
            new Attraction(
              '',
              ticketType.D,
              attractionType.coaster
            ),
            new Attraction(
              'Exploration Trail',
              ticketType.A,
              attractionType.walkthrough
            )
          ]
        },
        {
          name: 'Incredibles',
          attractions: [
            new Attraction(
              'Pod Transportation',
              ticketType.C,
              attractionType.transportation
            ),
            new Attraction(
              '',
              ticketType.E,
              attractionType.dark
            ),
            new Attraction(
              '',
              ticketType.B,
              null
            ),
            new Attraction(
              'Exploration Trail',
              ticketType.A,
              attractionType.walkthrough
            )
          ]
        },
        {
          name: 'Monsters Inc',
          attractions: [
            new Attraction(
              'Door Coaster',
              ticketType.E,
              attractionType.coaster
            ),
            new Attraction(
              'Monster\'s Inc Laugh Floor',
              ticketType.C,
              attractionType.show
            ),
            new Attraction(
              'Something for Monsters U',
              ticketType.A, // or B,
              null
            )
          ]
        },
        {
          name: 'Zootopia',
          attractions: [
            new Attraction(
              '',
              ticketType.E,
              attractionType.dark
            ),
            new Attraction(
              '',
              ticketType.C,
              attractionType.flat
            ),
            new Attraction(
              '',
              ticketType.C,
              null
            )
          ]
        },
        {
          name: 'a bug\'s land',
          attractions: [
            new Attraction(
              'It\'s Tough to be a Bug',
              ticketType.C,
              attractionType.film
            ),
            new Attraction(
              'Flik\'s Flyers',
              ticketType.C,
              attractionType.flat
            ),
            new Attraction(
              'Heimlich\'s Chew Chew Train',
              ticketType.B,
              attractionType.flat
            ),
            new Attraction(
              'Francis\' Ladybug Boogie',
              ticketType.B,
              attractionType.flat
            ),
            new Attraction(
              'Tuck and Roll\'s Drive \'em Buggies',
              ticketType.B,
              attractionType.flat
            )
          ]
        }
      ]
    }
  ],
  hotelAreas: [
    {
      name: 'The Hotels of Disneyland Park',
      hotels: [
        'The Disneyland Hotel',
        'Fantasy Hotel',
        'Frontier Hotel',
        'Tomorrow Hotel'
      ]
    },
    {
      name: 'The Resorts of the World',
      hotels: [
        'Caribbean Beach Resort',
        'Polynesian Village Resort',
        'Asian Resort',
        'Mediterranean Harbor Resort',
        'African Savanna Resort',
        'Arabian Resort',
        'French Resort'
      ]
    },
    {
      name: 'The Resorts of the United States',
      hotels: [
        'Seaside Village Resort',
        'Pueblo Resort',
        'Coronado Sprints Resort',
        'Port Orleans Resort',
        'Mountain Lodge',
        'Saratoga Sprints Resort',
        'Key West Resort'
      ]
    },
    {
      name: 'Other',
      hotels: [
        'Wilderness Cabins and Campground',
        'The Boardwalk Hotel',
        'The Treehouse Resort'
      ]
    }
  ],
  shoppingAndEntertainmentDistricts: [
    {
      name: 'Hollywood Plaza'
    },
    {
      name: 'Electricity District'
    },
    {
      name: 'Boardwalk'
    }
  ],
  waterParks: [
    {
      name: 'Pirate Cove'
    },
    {
      name: 'Volcano Bay'
    }
  ]
}