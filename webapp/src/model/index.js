const ticketType = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
};

const attractionType = {
  animatronic: 'Animatronic Show',
  transportation: 'Transportation',
  walkthrough: 'Walkthrough',
  play: 'Play Area',
  boat: 'Boat Ride',
  darkThrill: 'Dark Ride - Thrill',
  darkTame: 'Dark Ride - Tame',
  coaster: 'Rollercoaster',
  kiddieCoaster: 'Kiddie Coaster',
  film: 'Film',
  show: 'Show',
  simulator: 'Simulator',
  shooter: 'Shooter',
  flat: 'Flat Ride',
  character: 'Meet & Greet',
  flume: 'Flume',
  exhibit: 'Exhibit',
  other: 'Other',
  tbd: 'TBD',
};

const diningType = {
  table: 'Table Service',
  snack: 'Quick Service - Snack',
  quick: 'Quick Service - Meal',
  buffet: 'Buffet',
  character: 'Character Dining',
  coffee: 'Coffee Shop',
};

class Attraction {
  constructor(name, ticket, type, description) {
    this.name = name || 'TBD';
    this.ticket = ticket;
    this.type = type || 'TBD';
    if (description) this.description = description;
  }
}

class Restaurant {
  constructor(name, type, description) {
    this.name = name || 'TBD';
    this.type = type || 'TBD';
    if (description) this.description = description;
  }
}

class Shop {
  constructor(name, description) {
    this.name = name || 'TBD';
    if (description) this.description = description;
  }
}

class Other {
  constructor(name, description) {
    this.name = name || 'TBD';
    if (description) this.description = description;
  }
}

const resort = {
  parks: [
    {
      name: 'Disneyland Park',
      imgSrc: 'https://i.pinimg.com/originals/ee/38/ab/ee38abf19151b79f885e690a02a4c1a8.jpg',
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
                  attractionType.transportation,
                  'Horse drawn trolley, omnibus, and horseless carriage rides up and down Main Street',
                ),
                new Attraction(
                  'Disneyland Railroad',
                  ticketType.C,
                  attractionType.transportation,
                  'A grand circle tour of Disneyland Park, with stops in Frontierland, Fantasyland, and right here on Main Street',
                ),
                new Attraction(
                  'The Walt Disney Story',
                  ticketType.B,
                  attractionType.exhibit,
                  'A self guided exhibit focusing on Walt Disney, from Mickey Mouse to EPCOT',
                ),
                new Attraction(
                  'Penny Arcade',
                  ticketType.A,
                  attractionType.play,
                  'Play old fashioned arcade games',
                ),
                new Attraction(
                  'Main Street Cinema',
                  ticketType.A,
                  attractionType.film,
                  'Watch old Disney cartoons',
                ),
                new Attraction(
                  'Firehouse',
                  ticketType.A,
                  attractionType.exhibit,
                  'Learn how old fire companies kept their communities safe, and explore a horse drawn fire engine',
                ),
              ],
              dining: [
                new Restaurant(
                  'Walt\'s',
                  diningType.table,
                  'Serves upscale classic American cuisine',
                ),
                new Restaurant(
                  'Plaza Restaurant',
                  diningType.table,
                  'Serves classic American cuisine',
                ),
                new Restaurant(
                  'Gibson Girl Ice Cream Parlor',
                  diningType.snack,
                  'All kinds of gourmet ice cream treats',
                ),
                new Restaurant(
                  'Main Street Confectionary',
                  diningType.snack,
                  'Old fashioned penny candy, much of it made fresh in the display kitchen',
                ),
                new Restaurant(
                  'Main Street Bakery',
                  diningType.snack,
                  'Fresh baked goods and treats',
                ),
                new Restaurant(
                  'Coffee House',
                  diningType.coffee,
                  'All kinds of high end and exotic coffee',
                ),
                new Restaurant(
                  'Crystal Palace',
                  diningType.buffet,
                  'Dine under a beautify iron and glass canopy with a fantastic view of the Castle. Buffet with classic American cuisine',
                ),
              ],
              shopping: [
                new Shop(
                  'The Emporium',
                  'All your favorite Disney merchandise',
                ),
                new Shop(
                  'Magic Shop',
                  'Card tricks and other interesting tricks and trinkets',
                ),
                new Shop(
                  'Crystal Arts',
                  'Fine china and blown glass',
                ),
                new Shop(
                  'Music Shop',
                  'Instruments and Disney albums',
                ),
                new Shop(
                  'Disney Clothiers, Ltd.',
                  'Disney clothes',
                ),
                new Shop(
                  'Flower Shop',
                  'Real and artificial flowers and bouquets',
                ),
                new Shop(
                  'Uptown Jewelers',
                  'Jewelery',
                ),
                new Shop(
                  'Barber Shop',
                  'Get your hair cut right on Main Street',
                ),
                new Shop(
                  'Walt Disney Story Shop',
                  '',
                ),
                new Shop(
                  'Railroad Station Shop',
                  '',
                ),
                new Shop(
                  'Newsstand under railroad station',
                  '',
                ),
                new Shop(
                  'Small Hub Shop',
                  '',
                ),
                new Shop(
                  'Chapeau',
                  '',
                ),
              ],
              other: [
                new Other(
                  'City Hall',
                  'The home of Guest Relations',
                ),
              ],
            },
            {
              name: 'Liberty Street',
              attractions: [
                new Attraction(
                  'American Adventure',
                  ticketType.D,
                  attractionType.animatronic,
                  'Watch an animatronic extravaganza about the history of the United States, and how our diversity and ingenuity brought us to where we are today',
                ),
              ],
              dining: [
                new Restaurant(
                  'Liberty Inn',
                  diningType.quick,
                  'American cuisine in a 1700\'s Inn',
                ),
              ],
              shopping: [
                new Shop(
                  'Christmas Shop',
                  'All things Christmas. Stockings, ornaments, gifts.',
                ),
                new Shop(
                  'Glassblower\'s',
                  'Watch a glassblower go about his craft, and buy custom blown glassware',
                ),
                new Shop(
                  'Candle Shop',
                  'Make your own candles, or buy premade',
                ),
                new Shop(
                  'Blacksmith',
                  'Learn a blacksmith works, and buy iron goods',
                ),
              ],
              other: [
                new Other(
                  'Liberty Park',
                  'Relax in this hidden park, enjoy the fountain, or feed the birds',
                ),
              ],
            },
          ],
        },
        {
          name: 'Adventureland',
          sublands: [
            {
              name: 'Arabia',
              attractions: [
                new Attraction(
                  'Aladdin\'s Magic Carpets',
                  ticketType.D,
                  attractionType.darkTame,
                  'Follow Aladdin and Jasmine on a Magic Carpet Ride through Agrabah and beyond. But watch out! Genie might have a few tricks up his sleeve.',
                ),
                new Attraction(
                  'Meet Aladdin and the Gang',
                  ticketType.A,
                  attractionType.character,
                  'Meet Aladdin, Jasmine, and Genie.',
                ),
              ],
              dining: [
                new Restaurant(
                  '',
                  diningType.table,
                  'Fresh middle eastern cuisine in an authentic setting.',
                ),
                new Restaurant(
                  '',
                  diningType.snack,
                  'Middle eastern snacks and bites, along with a couple more traditional selections',
                ),
              ],
              shopping: [
                new Shop(
                  'Cave of Wonders',
                  'Your spot for Aladdin merchandise',
                ),
                new Shop(
                  'Small Shop Across from Restrooms',
                  'Traditional Arabian crafts',
                ),
                new Shop(
                  'Small Shop Across from Restrooms Two',
                  'Additional Arabian products',
                ),
                new Shop(
                  'Shop next to restaurant',
                  '',
                ),
                new Shop(
                  'Bazaar',
                  'This outdoor shopping plaza offers may traditional African and Arabian products',
                ),
              ],
            },
            {
              name: 'Jungle / Polynesia',
              attractions: [
                new Attraction(
                  'Indiana Jones Adventure',
                  ticketType.E,
                  attractionType.darkThrill,
                  'Go on an adventure with Indiana Jones as he searches for the lost treasure of the Aztec Temple. But be careful, according to ancient legend, the temple is cursed.',
                ),
                new Attraction(
                  'Jungle Cruise',
                  ticketType.D,
                  attractionType.boat,
                  'Travel down the rivers of the world, viewing local flora and fauna with your hilarious skipper',
                ),
                new Attraction(
                  'Enchanted Tiki Room',
                  ticketType.C,
                  attractionType.animatronic,
                  'Sit and watch a group of tiki birds put on a show in this enchanted room',
                ),
                new Attraction(
                  'Swiss Family Treehouse',
                  ticketType.B,
                  attractionType.walkthrough,
                  'Take a tour of the treehouse constructed by the Swiss Family Robinson',
                ),
                new Attraction(
                  'Exploration Trails',
                  ticketType.A,
                  attractionType.walkthrough,
                  'Travel down these jungle trails at your own pace.',
                ),
              ],
              dining: [
                new Restaurant(
                  'Tropical Terrace',
                  diningType.quick,
                  'Exotic, jungle themed cuisine.',
                ),
                new Restaurant(
                  'Sunshine Veranda',
                  diningType.table,
                  'Exotic, jungle themed cuisine overlooking the Swiss family treehouse and jungle river',
                ),
                new Restaurant(
                  'Dole Whip Stand',
                  diningType.snack,
                  'A selection of Dole whip treats',
                ),
              ],
              shopping: [
                new Shop(
                  'Adventure Trading Co',
                  'Jungle Cruise and other Adventureland attraction merchandise, along with traditional polynesian, african, and south american wares',
                ),
                new Shop(
                  'Island Traders',
                  'Traditional polynesian, african, and south american wares',
                ),
                new Shop(
                  'Shop next to Island Traders',
                  '',
                ),
              ],
              other: [
                new Other(
                  'Picnic Area',
                  'Overflow seating available overlooking the jungle river. Sit a while and enjoy.',
                ),
                new Other(
                  'Disneyland Railroad',
                  'The Disneyland Railroad leaves Main Street Station and begins its journey through Adventureland, and travels through the jungle. You can just catch a glimpse of the Jungle Cruise temple, before passing by an elephant bathing pool and other jungle animal tableaus',
                ),
              ],
            },
            {
              name: 'Dinosaurs',
              attractions: [
                new Attraction(
                  'The Dig Zone',
                  ticketType.B,
                  attractionType.play,
                  'Explor an active paleontological dig site, and help unearth dinosaurs.',
                ),
                new Attraction(
                  'Countdown to Extinction',
                  ticketType.D,
                  attractionType.simulator,
                  'In this simulator attraction, travel back in time to try to save dinosaurs from going extinct. Can you make it before the asteroid strikes?',
                ),
                new Attraction(
                  'Fire Mountain',
                  ticketType.E,
                  attractionType.coaster,
                  'Here in the land that time forgot, go on an expedition to view the last remaining dinosaurs. Unfortunately, a pterodactyl snatches your ride vehicle and brings you swooping and soaring through an active volcano',
                ),
                new Attraction(
                  'Dino Encounter',
                  ticketType.A,
                  attractionType.character,
                  'Meet a real live dinosaur',
                ),
                new Attraction(
                  'Exploration Trails',
                  ticketType.A,
                  attractionType.walkthrough,
                  'Explore the land that time forgot, look out over the lake, and meander through the forest and caves. Who knows what you might find.',
                ),
              ],
              dining: [
                new Restaurant(
                  'Dinosaur Canteen',
                  diningType.quick,
                  'Enjoy American cuisine in the cafeteria for those working on the archeological dig',
                ),
                new Restaurant(
                  'Snacks in the Dig Zone',
                  diningType.snack,
                  '',
                ),
              ],
              shops: [
                new Shop(
                  'Dino Shop',
                  'Buy Dinosaur attraction merch, along with dinosaur books and archaeological equipment',
                ),
                new Shop(
                  'Gifts above the snacks in the dig zone',
                  '',
                ),
              ],
              other: [
                new Other(
                  'Disneyland Railroad',
                  'The Disneyland Railroad travels through the Primeval World Dinorama, giving riders a firsthand look into the world of 65 million years ago. It emerges from the Dinorama, and crosses over the entrance to the Dig Zone. It hugs the ridge of Fire Mountain and overlooks the Dinosaur Canteen as it makes its way to Frontierland.',
                ),
              ],
            },
          ],
        },
        {
          name: 'Frontierland',
          attractions: [
            new Attraction(
              'Western River Expedition',
              ticketType.E,
              attractionType.boat,
              'Travel down the Western River, taking in the sights and sounds of the old west.',
            ),
            new Attraction(
              'Thunder Mountain Railroad',
              ticketType.E,
              attractionType.coaster,
              'Ride a runaway mine train through the gold mines on Thunder Mountain.',
            ),
            new Attraction(
              'Riverboat',
              ticketType.B,
              attractionType.transportation,
              'Ride the riverboat on a tour of the Rivers of Adventure, around Thunder Mountain, through the gorge, with a stop in Fantasyland, then through Adventureland and back to Frontierland.',
            ),
            new Attraction(
              'Country Bear Jamboree',
              ticketType.C,
              attractionType.animatronic,
              'A country hoedown put on by animatronic bears',
            ),
            new Attraction(
              'Explorer Canoes',
              ticketType.B,
              attractionType.boat,
              'Ride a canoe through Frontierland and around Thunder Mountain on Disneyland\'s only people powered attraction',
            ),
            new Attraction(
              'Big Thunder Ranch',
              ticketType.A,
              attractionType.play,
              'Enjoy arts and crafts, a petting zoo, and special performances.',
            ),
            new Attraction(
              'Shootin\' Gallery',
              ticketType.A,
              attractionType.play,
              'An old west themed shooting gallery',
            ),
          ],
          dining: [
            new Restaurant(
              'Diamond Horseshoe Saloon',
              diningType.character,
              '',
            ),
            new Restaurant(
              'Restaurant Next to Thunder Mountain',
              diningType.quick,
              '',
            ),
            new Restaurant(
              'Snacks on parade viewing platform',
              diningType.snack,
              '',
            ),
            new Restaurant(
              'Snacks next to Geyser',
              diningType.snack,
            ),
          ],
          shops: [
            new Shop(
              'Frontier Woodcraft',
              '',
            ),
            new Shop(
              'Frontierland Mercantile',
              '',
            ),
            new Shop(
              'Shop next to Country Beat Jamboree',
              '',
            ),
            new Shop(
              'Shop next to Thunder Mountain entrance',
              '',
            ),
            new Shop(
              'Shop next to Frontier Woodcraftt',
            ),
          ],
          other: [
            new Other(
              'Old Unfaithful',
              'Sit and watch Frontierland\'s own geyser. You never know when it might go off.',
            ),
            new Other(
              'Disneyland Railroad',
              'The Disneyland Railroad travels along the Thunder Ridge until it reaches Frontierland Station. After it leaves the station, it enters a tunnel. The tunnel leads into the Western River Expedition, where the train travels through and interacts with several show scenes. Exiting Western River Expedition, the Train travels around the Rivers of the Frontier, with a view past a Native American village to Thunder Mountain. It then passes behind Big Thunder Ranch, and into another tunnel. This tunnel contains the Gold Mine Diorama, with a view into a working gold mine. It exists the tunnel into the Great Gorge, with views to the waterfalls and river below. Then it\'s time for another short tunnel before heading into Fantasyland.',
            ),
          ],
        },
        {
          name: 'Fantasyland',
          sublands: [
            {
              name: 'Neverland',
              attractions: [
                new Attraction(
                  'Peter Pan\'s Flight',
                  ticketType.E,
                  attractionType.darkTame,
                  'This suspended dark ride promises an exhilarating trip in Captain Hook\'s pirate ship from Londontwon, past the second start to the right, and on to Neverland!',
                ),
                new Attraction(
                  'Pixie Hollow',
                  ticketType.A,
                  attractionType.character,
                  'Shrink down to the size of a fairy to Meet Tinkerbell and her friends.',
                ),
                new Attraction(
                  'Exploration Trails',
                  ticketType.B,
                  attractionType.walkthrough,
                  'Explore Neverland, including the Lost Boy\'s Treehouse, Captain Hook\'s Pirate Ship, Skull Rock, and the Mermaid Lagoon.',
                ),
              ],
            },
            {
              name: 'Storybook Land',
              attractions: [
                new Attraction(
                  'Carousel',
                  ticketType.C,
                  attractionType.flat,
                  'This antique carousel is located in a beautiful park setting.',
                ),
                new Attraction(
                  'Dumbo The Flying Elephant',
                  ticketType.C,
                  attractionType.flat,
                  'Hop on board Dumbo as he takes flight!',
                ),
                new Attraction(
                  'Storybook Land Canal Boats',
                  ticketType.C,
                  attractionType.boat,
                  'Take a trip through Storybookland and see locations from all your favorite Disney stories, presented in miniature.',
                ),
                new Attraction(
                  'Circus Train through Storybook Land',
                  ticketType.C,
                  attractionType.kiddieCoaster,
                  'Hop on board Casey Junior Circus Train for a slightly more thrilling ride through Storybookland.',
                ),
                new Attraction(
                  'Seven Dwarf\'s Mine Train',
                  ticketType.D,
                  attractionType.coaster,
                  'Enter the story of Snow White and the Seven Dwarfs, explore their mine, and maybe catch a glimpse of the Wicked Witch',
                ),
                new Attraction(
                  'Cinderella',
                  ticketType.C,
                  attractionType.darkTame,
                  'Experience the story of Cinderella',
                ),
                new Attraction(
                  'The Enchanted Tale of Beauty and the Beast',
                  ticketType.D,
                  attractionType.darkTame,
                  'Explore the Beast\'s Castle and experience all your favorite moments from the films',
                ),
                new Attraction(
                  'Tangled',
                  ticketType.D,
                  attractionType.boat,
                  'Take a boat ride through the story of Tangled',
                ),
                new Attraction(
                  'Woodland Theater',
                  ticketType.D,
                  attractionType.show,
                  'This fully functioning theater always has a new story to tell.',
                ),
                new Attraction(
                  'Princess Fairytale Hall',
                  ticketType.A,
                  attractionType.character,
                  'Meet all your favorite princesses here, includng Cinderella, Snow White, Aurora, and Rapunzel.',
                ),
                new Attraction(
                  'Woodland Meet and Greet',
                  ticketType.A,
                  attractionType.character,
                  'Meet Mickey and Minnie in a forest setting. And you never know who might be joining them.',
                ),
                new Attraction(
                  'Meet Belle',
                  ticketType.A,
                  attractionType.character,
                  'Visit Belle\'s cottage, see all her father\'s crazy inventions, and meet Belle.',
                ),
                new Attraction(
                  'The Old Mill',
                  ticketType.A,
                  attractionType.walkthrough,
                  'Explore an old mill, see its inner workings, as well as the animals that have taken refuge inside. Once you reach the top, enjoy a view of all of Fantasyland.',
                ),
                new Attraction(
                  'Storybook Castle Walkthrough',
                  ticketType.A,
                  attractionType.walkthrough,
                  'Travel up to the higher levels of Storybook Castle to see animated stained glass displays portraying the stories of many of your favorite Disney fairytales. Then take a trip to the dungeons, and exit into the caverns under the castle, where the great Dragon lives. Be careful not to wake him!',
                ),
              ],
              shops: [
                new Shop(
                  'Castle forecourt Shop',
                  'This shop looks out onto the Castle Forecourt, and across to Dumbo the Flying Elephant. ',
                ),
                new Shop(
                  'Second Castle forecourt shop',
                  '',
                ),
                new Shop(
                  'Cinderella Shop',
                  '',
                ),
                new Shop(
                  'Second Cinderella Shop',
                  '',
                ),
                new Shop(
                  'Inside Castle shop',
                  '',
                ),
                new Shop(
                  'Path to railroad shop',
                  '',
                ),
                new Shop(
                  'Second path to railroad shop',
                  '',
                ),
                new Shop(
                  'Third path to railroad shop',
                ),
                new Shop(
                  'Tangled Shop',
                  '',
                ),
                new Shop(
                  'Belle\'s Bookstore',
                  'Shop for books at this store owned by Belle',
                ),
                new Shop(
                  'Second Belle\'s Village shop',
                  '',
                ),
                new Shop(
                  'Third Belle\'s Village Shop',
                  '',
                ),
                new Shop(
                  'Shop by Woodland Theater',
                  '',
                ),
                new Shop(
                  'Shop next to Dumbo',
                ),
              ],
              dining: [
                new Restaurant(
                  'Inside Castle Restaurant',
                  diningType.character,
                  '',
                ),
                new Restaurant(
                  'Castle Forecourt Restaurant',
                  diningType.table,
                  '',
                ),
                new Restaurant(
                  'Snow White\'s Grotto Restaurant',
                  diningType.quick,
                  '',
                ),
                new Restaurant(
                  'Old Mill snacks',
                  diningType.snack,
                  '',
                ),
                new Restaurant(
                  'Tangled Restaurant',
                  diningType.quick,
                  '',
                ),
                new Restaurant(
                  'Gaston\'s Tavern',
                  diningType.quick,
                  '',
                ),
                new Restaurant(
                  'Woodland Restaurant',
                  diningType.table,
                  '',
                ),
                new Restaurant(
                  'Belle\'s Village Snack Stand',
                  diningType.snack,
                  '',
                ),
                new Restaurant(
                  'Princess Fairytale Hall Snack Stand',
                  diningType.snack,
                  '',
                ),
              ],
              other: [
                new Other(
                  'Cherry Blossom Garden',
                  'The entrance to Fantasyland from Adventureland is a promenade lined on both sides by a row of Cherry Trees. Off the promenade is a small park with a fountain.',
                ),
                new Other(
                  'Disneyland Railroad',
                  'The Disneyland Railroad enters Fantasyland just in front of the Beast\'s Castle. It overlooks the Seven Dwarfs\' mine train on its way to Fantasyland Station. Leaving Fantasyland Station, the railroad heads toward Wonderland.',
                ),
                new Other(
                  'Castle Caverns',
                  'Under the castle are large caverns, where a dragon lives. Fortunately, he is often sleepy and naps during the day. A tunnel connects the Cherry Blossom Garden to the Castle Forecourt, and provides access to the Caverns. They are also accessible from the Castle Walkthrough',
                ),
                new Other(
                  'Snow White\'s Grotto',
                  'See Snow White\'s Wishing Well and overlook a beautiful waterfall right next to the castle.',
                ),
                new Other(
                  'Dance Hall',
                  'Grab a bite to eat and spend the night dancing next to Storybook Castle.',
                ),
              ],
            },
            {
              name: 'Wonderland',
              attractions: [
                new Attraction(
                  'Alice\'s Curious Labyrinth',
                  ticketType.B,
                  attractionType.play,
                ),
                new Attraction(
                  'Alice\'s Adventures in Wonderland',
                  ticketType.E,
                  attractionType.darkThrill,
                ),
                new Attraction(
                  'Very Mad Tea Party',
                  ticketType.C,
                  attractionType.flat,
                ),
                new Attraction(
                  'Meet Alice',
                  ticketType.A,
                  attractionType.character,
                ),
              ],
              shops: [
                new Shop(
                  'Wonderland Shop',
                  '',
                ),
              ],
              dining: [
                new Restaurant(
                  'Queen of Hearts\' Banquet Hall',
                  diningType.quick,
                  '',
                ),
              ],
              other: [
                new Other(
                  'White Rabbit\'s House',
                  '',
                ),
                new Other(
                  'Wonderland Woods',
                  'The woods between Wonderland and Tomorrowland include many curious sights from Wonderland. You might catch a glimpse of the Cheshire Cat, or Tweedle Dee and Tweedle Dum',
                ),
                new Other(
                  'Disneyland Railroad',
                  'The Disneyland Railroad begins its journey through Wonderland by travelling past the Very Mad Tea Party and Alice\'s Curious Labyrinth. Then it enters a tunnel and travels through the Fairytale Forest Diorama. You\'ll see the Three Little Pigs, Red Riding Hood, and other classic fairy tales and children\'s stories in this diorama. You emerge from the diorama in Tomorrowland.',
                ),
              ],
            },
          ],
        },
        {
          name: 'Tomorrowland',
          attractions: [
            new Attraction(
              'Buzz Lightyear: Star Command',
              ticketType.C,
              attractionType.shooter,
            ),
            new Attraction(
              'Meet Buzz',
              ticketType.A,
              attractionType.character,
            ),
            new Attraction(
              'Mission: Space',
              ticketType.E,
              attractionType.simulator,
            ),
            new Attraction(
              'The Main Expo Floor',
              ticketType.B,
              attractionType.walkthrough,
            ),
            new Attraction(
              'Visionarium',
              ticketType.D,
              attractionType.darkTame,
            ),
            new Attraction(
              'PeopleMover',
              ticketType.C,
              attractionType.transportation,
            ),
            new Attraction(
              'Astro Jets',
              ticketType.C,
              attractionType.flat,
            ),
            new Attraction(
              'Alien Encounter',
              ticketType.D,
              attractionType.animatronic,
            ),
            new Attraction(
              'Galactic Zoo',
              ticketType.A,
              attractionType.walkthrough,
            ),
            new Attraction(
              'Plecteau\'s Adventures',
              ticketType.B,
              attractionType.show,
            ),
            new Attraction(
              'Space Mountain',
              ticketType.E,
              attractionType.coaster,
            ),
            new Attraction(
              'IGC Energy',
              ticketType.E,
              attractionType.darkThrill,
            ),
          ],
          dining: [
            new Restaurant(
              'Gorgo\'s Fine Dining',
              diningType.table,
            ),
            new Restaurant(
              'Main Expo Floor Snacks',
              diningType.snack,
            ),
            new Restaurant(
              'Garden to Table',
              diningType.quick,
            ),
            new Restaurant(
              'Market next to Space Mountain',
              diningType.snack,
            ),
            new Restaurant(
              'Snacks under Rockettower',
              diningType.snack,
            ),
          ],
          shops: [
            new Shop(
              'Shop next to Visionarium',
            ),
            new Shop(
              'Big shop on the Lagoon',
            ),
            new Shop(
              'Buzz Gift Shop',
            ),
            new Shop(
              'Galactic Zoo Gift Shop',
            ),
            new Shop(
              'Main Expo Floor Shopping',
            ),
            new Shop(
              'Shop under Rockettower',
            ),
          ],
          other: [
            new Other(
              'Disneyland Railroad',
              'The Disneyland Railroad emerges from the Fairytale Forest Diorama, and passes by the reflection pond. It then passes through a field dotted with circular retention ponds and a great view of Space Mountain. Then it enters the Epcot City Diorama, which is a model of the city Walt Disney proposed for the Florida Project',
            ),
          ],
        },
      ],
    },
    {
      name: 'Disneysea',
      imgSrc: 'https://blog.disneygeek.com/wp-content/uploads/2015/04/wpid-20150415_173407_richtonehdr.jpg',
      lands: [
        {
          name: 'Fishing Village',
          attractions: [
            new Attraction(
              'Disneysea Touring',
              ticketType.C,
              attractionType.transportation,
            ),
            new Attraction(
              'Sea Shanty',
              ticketType.B,
              attractionType.animatronic,
            ),
            new Attraction(
              'Fishing Boat Walkthrough',
              ticketType.A,
              attractionType.walkthrough,
            ),
          ],
        },
        {
          name: 'Big City Waterfront',
          attractions: [
            new Attraction(
              'Train',
              ticketType.B,
              attractionType.transportation,
            ),
            new Attraction(
              'Hightower Hotel',
              ticketType.E,
              attractionType.darkThrill,
            ),
            new Attraction(
              'Broadway Show',
              ticketType.D,
              attractionType.show,
            ),
            new Attraction(
              'Museum of Natural History',
              ticketType.D,
              attractionType.darkThrill,
            ),
            new Attraction(
              'Toy Story Midway Mania',
              ticketType.C,
              attractionType.shooter,
            ),
            new Attraction(
              'Woody\'s Roundup',
              ticketType.C,
              attractionType.flat,
            ),
            new Attraction(
              'Meet Woody and Jessie',
              ticketType.A,
              attractionType.character,
            ),
            new Attraction(
              'The Docks Play Zone',
              ticketType.A,
              attractionType.play,
            ),
          ],
        },
        {
          name: 'Mediterranean Harbor',
          attractions: [
            new Attraction(
              'Da Vinci\'s Journey',
              ticketType.E,
              attractionType.darkThrill,
            ),
            new Attraction(
              'Gondola',
              ticketType.B,
              attractionType.boat,
            ),
            new Attraction(
              'Fortress Explorations',
              ticketType.B,
              attractionType.walkthrough,
            ),
            new Attraction(
              'Kiddie Coaster',
              ticketType.C,
              attractionType.kiddieCoaster,
            ),
          ],
        },
        {
          name: 'Mermaid Lagoon',
          attractions: [
            new Attraction(
              'Voyage of the Little Mermaid',
              ticketType.D,
              attractionType.darkTame,
            ),
            new Attraction(
              'Jumping Jellyfish',
              ticketType.C,
              attractionType.flat,
            ),
            new Attraction(
              'Flying Fish',
              ticketType.B,
              attractionType.flat,
            ),
            new Attraction(
              'The Whirlpool',
              ticketType.B,
              attractionType.flat,
            ),
            new Attraction(
              'Blowfish Balloon Race',
              ticketType.B,
              attractionType.flat,
            ),
            new Attraction(
              'Under The Sea Water Play Zone',
              ticketType.A,
              attractionType.play,
            ),
            new Attraction(
              'Ariel\'s Grotto',
              ticketType.A,
              attractionType.character,
            ),
          ],
        },
        {
          name: 'Mysterious Island',
          attractions: [
            new Attraction(
              '20,000 Leagues Under the Sea',
              ticketType.E,
              attractionType.boat,
            ),
            new Attraction(
              'Around the World in 80 Days',
              ticketType.D,
              attractionType.darkTame,
            ),
            new Attraction(
              'From the Earth to the Moon',
              ticketType.E,
              attractionType.coaster,
            ),
            new Attraction(
              'Exploration Trails',
              ticketType.A,
              attractionType.walkthrough,
            ),
          ],
        },
        {
          name: 'Point Discovery',
          attractions: [
            new Attraction(
              'StormRider',
              ticketType.D,
              attractionType.simulator,
            ),
            new Attraction(
              'Coaster',
              ticketType.E,
              attractionType.coaster,
            ),
            new Attraction(
              'Undersea Explorations',
              ticketType.D,
              attractionType.darkThrill,
            ),
            new Attraction(
              'Aquatopia',
              ticketType.C,
              attractionType.flat,
            ),
            new Attraction(
              'The Living Seas',
              ticketType.D,
              attractionType.darkTame,
            ),
            new Attraction(
              'Turtle Talk with Crush',
              ticketType.B,
              attractionType.character,
            ),
            new Attraction(
              'Aquarium',
              ticketType.C,
              attractionType.exhibit,
            ),
            new Attraction(
              'Ocean Zone',
              ticketType.A,
              attractionType.play,
            ),
          ],
        },
        {
          name: 'The Kingdom of Arrendale',
          attractions: [
            new Attraction(
              'Frozen Ever After',
              ticketType.D,
              attractionType.boat,
            ),
            new Attraction(
              'A Frozen Celebration',
              ticketType.B,
              attractionType.show,
            ),
            new Attraction(
              'Olaf\'s Sliding Sleighs',
              ticketType.D,
              attractionType.coaster,
            ),
            new Attraction(
              'Meet the Frozen Gang',
              ticketType.A,
              attractionType.character,
            ),
          ],
        },
        {
          name: 'Moana\'s Village',
          attractions: [
            new Attraction(
              'Moana\'s Journey',
              ticketType.C,
              attractionType.boat,
            ),
            new Attraction(
              'Polynesian Show',
              ticketType.B,
              attractionType.show,
            ),
            new Attraction(
              'Meet Moana',
              ticketType.A,
              attractionType.character,
            ),
          ],
        },
        {
          name: 'Pirate Cove',
          attractions: [
            new Attraction(
              'Pirates of the Caribbean',
              ticketType.E,
              attractionType.boat,
            ),
            new Attraction(
              'A Pirate\'s Life for Me',
              ticketType.C,
              attractionType.show,
            ),
            new Attraction(
              'Meet Captain Jack',
              ticketType.A,
              attractionType.character,
            ),
            new Attraction(
              'Explore the Black Pearl',
              ticketType.A,
              attractionType.walkthrough,
            ),
          ],
        },
        {
          name: 'The Bayou',
          attractions: [
            new Attraction(
              'The Princess and the Frog',
              ticketType.E,
              attractionType.flume,
            ),
            new Attraction(
              'The Haunted Mansion',
              ticketType.E,
              attractionType.darkTame,
            ),
            new Attraction(
              'Mardi Gras Show',
              ticketType.C,
              attractionType.animatronic,
            ),
            new Attraction(
              'Meet Tiana',
              ticketType.A,
              attractionType.character,
            ),
            new Attraction(
              'Exploration Trails',
              ticketType.A,
              attractionType.walkthrough,
            ),
          ],
        },
      ],
    },
    {
      name: 'Disney Earth',
      imgSrc: 'https://66.media.tumblr.com/44f6c6b94363aa0f93823b2958dd2bd5/tumblr_p9xo9rIFPT1vnkd3mo4_250.jpg',
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
                  attractionType.darkTame,
                ),
                new Attraction(
                  'Double Decker Bus',
                  ticketType.B,
                  attractionType.transportation,
                ),
                new Attraction(
                  'Winnie The Pooh',
                  ticketType.E,
                  attractionType.darkTame,
                ),
                new Attraction(
                  'Britain Exhibit',
                  ticketType.A,
                  attractionType.exhibit,
                ),
                new Attraction(
                  'Meet Mary Poppins',
                  ticketType.A,
                  attractionType.character,
                ),
                new Attraction(
                  'Meet Pooh and Friends',
                  ticketType.A,
                  attractionType.character,
                ),
              ],
            },
            {
              name: 'Germany',
              attractions: [
                new Attraction(
                  'Rhine River Cruise',
                  ticketType.C,
                  attractionType.boat,
                ),
                new Attraction(
                  'Carousel',
                  ticketType.C,
                  attractionType.flat,
                ),
                new Attraction(
                  'Model Trains',
                  ticketType.A,
                  attractionType.walkthrough,
                ),
                new Attraction(
                  'Germany Exhibit',
                  ticketType.A,
                  attractionType.exhibit,
                ),
              ],
            },
            {
              name: 'France',
              attractions: [
                new Attraction(
                  'Ratatouille',
                  ticketType.D,
                  attractionType.darkTame,
                ),
                new Attraction(
                  'French History Show',
                  ticketType.C,
                  attractionType.animatronic,
                ),
                new Attraction(
                  'France Exhibit',
                  ticketType.A,
                  attractionType.exhibit,
                ),
              ],
            },
          ],
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
                  attractionType.coaster,
                ),
                new Attraction(
                  'Exploration Trails',
                  ticketType.B,
                  attractionType.walkthrough,
                ),
              ],
            },
            {
              name: 'India',
              attractions: [
                new Attraction(
                  'Jungle Book',
                  ticketType.D,
                  attractionType.darkThrill,
                ),
                new Attraction(
                  'Jungle Book Play Area',
                  ticketType.A,
                  attractionType.play,
                ),
              ],
            },
            {
              name: 'Japan',
              attractions: [
                new Attraction(
                  'Bullet Train',
                  ticketType.D,
                  attractionType.simulator,
                ),
                new Attraction(
                  'Mount Fuji',
                  ticketType.E,
                  attractionType.coaster,
                ),
                new Attraction(
                  'Japan Exhibit',
                  ticketType.A,
                  attractionType.exhibit,
                ),
              ],
            },
            {
              name: 'China',
              attractions: [
                new Attraction(
                  'Mulan',
                  ticketType.C,
                  attractionType.show,
                ),
                new Attraction(
                  'China boat ride',
                  ticketType.C,
                  attractionType.boat,
                ),
                new Attraction(
                  'China Exhibit',
                  ticketType.A,
                  attractionType.exhibit,
                ),
                new Attraction(
                  'Meet Mulan',
                  ticketType.A,
                  attractionType.character,
                ),
              ],
            },
          ],
        },
        {
          name: 'Africa',
          sublands: [
            {
              name: 'Jungle',
              attractions: [
                new Attraction(
                  'Coaster',
                  ticketType.E,
                  attractionType.coaster,
                ),
                new Attraction(
                  'Treehouse',
                  ticketType.B,
                  attractionType.walkthrough,
                ),
                new Attraction(
                  'Exploration Trails',
                  ticketType.B,
                  attractionType.walkthrough,
                ),
              ],
            },
            {
              name: 'Savannah',
              attractions: [
                new Attraction(
                  'Festival of the Lion King',
                  ticketType.D,
                  attractionType.show,
                ),
                new Attraction(
                  'Kilimanjaro Safaris',
                  ticketType.E,
                  attractionType.other,
                ),
                new Attraction(
                  'Exploration Trail',
                  ticketType.B,
                  attractionType.walkthrough,
                ),
                new Attraction(
                  'Africa Exhibit',
                  ticketType.A,
                  attractionType.exhibit,
                ),
              ],
            },
          ],
        },
        {
          name: 'World Plaza',
          attractions: [
            new Attraction(
              'Soarin\'',
              ticketType.E,
              attractionType.simulator,
            ),
            new Attraction(
              'it\'s a small world',
              ticketType.D,
              attractionType.boat,
            ),
            new Attraction(
              'Spinner',
              ticketType.C,
              attractionType.flat,
            ),
            new Attraction(
              'World Heritage Stage',
              ticketType.C,
              attractionType.show,
            ),
            new Attraction(
              'Animal Care Exhibit',
              ticketType.C,
              attractionType.exhibit,
            ),
            new Attraction(
              'Splash Zone',
              ticketType.A,
              attractionType.play,
            ),
          ],
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
                  attractionType.show,
                ),
                new Attraction(
                  'Australia Exhibit',
                  ticketType.A,
                  attractionType.exhibit,
                ),
              ],
            },
            {
              name: 'Outback',
              attractions: [
                new Attraction(
                  'Outback Expeditions',
                  ticketType.E,
                  attractionType.other,
                ),
                new Attraction(
                  'Coaster',
                  ticketType.E,
                  attractionType.coaster,
                ),
                new Attraction(
                  'Exploration Trail',
                  ticketType.B,
                  attractionType.walkthrough,
                ),
              ],
            },
          ],
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
                  attractionType.boat,
                ),
                new Attraction(
                  'Oh Canada!',
                  ticketType.C,
                  attractionType.film,
                ),
                new Attraction(
                  'Canada Exhibit',
                  ticketType.A,
                  attractionType.exhibit,
                ),
              ],
            },
            {
              name: 'Mexico',
              attractions: [
                new Attraction(
                  'Coco ride',
                  ticketType.D,
                  attractionType.darkTame,
                ),
                new Attraction(
                  'Coco Meet and Greet',
                  ticketType.A,
                  attractionType.character,
                ),
                new Attraction(
                  'Mexico Exhibit',
                  ticketType.A,
                  attractionType.exhibit,
                ),
              ],
            },
            {
              name: 'Amazonia',
              attractions: [
                new Attraction(
                  'Amazon River Journey',
                  ticketType.D,
                  attractionType.boat,
                ),
                new Attraction(
                  'Raya and the Last Dragon',
                  ticketType.C,
                  attractionType.kiddieCoaster,
                ),
                new Attraction(
                  'Meet Raya',
                  ticketType.A,
                  attractionType.character,
                ),
                new Attraction(
                  'Exploration Trail',
                  ticketType.B,
                  attractionType.walkthrough,
                ),
              ],
            },
          ],
        },
      ],
    },
    // {
    //   name: 'Mythica',
    //   imgSrc: 'http://vignette2.wikia.nocookie.net/godofwar/images/d/df/Mt._olympus1_CC.jpg/revision/latest?cb=20120225064601',
    //   lands: [
    //     {
    //       name: 'El Dorado',
    //       attractions: [
    //         new Attraction(
    //           'Golden Celebrations (idk)',
    //           ticketType.C,
    //           attractionType.show,
    //         ),
    //         new Attraction(
    //           'Exploration Trail',
    //           ticketType.A,
    //           attractionType.walkthrough,
    //         ),
    //       ],
    //     },
    //     {
    //       name: 'Beastlie Kingdomme',
    //       attractions: [
    //         new Attraction(
    //           'Race the Dragon',
    //           ticketType.E,
    //           attractionType.coaster,
    //         ),
    //         new Attraction(
    //           'Fantasia Gardens',
    //           ticketType.C,
    //           attractionType.boat,
    //         ),
    //         new Attraction(
    //           'Beastlie Carousel',
    //           ticketType.B,
    //           attractionType.flat,
    //         ),
    //         new Attraction(
    //           '',
    //           ticketType.C, // or D
    //           null,
    //         ),
    //         new Attraction(
    //           'Exploration Trail',
    //           ticketType.A,
    //           attractionType.walkthrough,
    //         ),
    //       ],
    //     },
    //     {
    //       name: 'Atlantis',
    //       attractions: [
    //         new Attraction(
    //           'Flume Ride',
    //           ticketType.D,
    //           attractionType.boat,
    //         ),
    //         new Attraction(
    //           'Poseidon\'s Adventure',
    //           ticketType.E,
    //           attractionType.darkThrill,
    //         ),
    //         new Attraction(
    //           '',
    //           ticketType.D,
    //           null,
    //         ),
    //         new Attraction(
    //           '',
    //           ticketType.B, // or C
    //           null,
    //         ),
    //         new Attraction(
    //           'Exploration Trail',
    //           ticketType.A,
    //           attractionType.walkthrough,
    //         ),
    //       ],
    //     },
    //     {
    //       name: 'Olympus',
    //       attractions: [
    //         new Attraction(
    //           'Gods Among Us',
    //           ticketType.D,
    //           attractionType.darkThrill,
    //         ),
    //         new Attraction(
    //           'Temple of Hades',
    //           ticketType.E,
    //           attractionType.coaster,
    //         ),
    //         new Attraction(
    //           'Odyssey',
    //           ticketType.C,
    //           attractionType.boat,
    //         ),
    //         new Attraction(
    //           'Coliseum',
    //           ticketType.C,
    //           attractionType.show,
    //         ),
    //         new Attraction(
    //           'Labyrinth',
    //           ticketType.B,
    //           attractionType.walkthrough,
    //         ),
    //       ],
    //     },
    //     {
    //       name: 'Shangri La',
    //       attractions: [
    //         new Attraction(
    //           'Coaster through the Clouds',
    //           ticketType.E,
    //           attractionType.coaster,
    //         ),
    //         new Attraction(
    //           '',
    //           ticketType.D,
    //           null,
    //         ),
    //         new Attraction(
    //           'Ropes Course',
    //           ticketType.B,
    //           attractionType.walkthrough,
    //         ),
    //       ],
    //     },
    //     {
    //       name: 'Egypt',
    //       attractions: [
    //         new Attraction(
    //           'Revenge of the Mummy',
    //           ticketType.E,
    //           attractionType.darkThrill,
    //         ),
    //         new Attraction(
    //           'Nile River Cruise',
    //           ticketType.D,
    //           attractionType.boat,
    //         ),
    //         new Attraction(
    //           '',
    //           ticketType.B, // or C
    //           null,
    //         ),
    //         new Attraction(
    //           'Maze throug a pyrimid',
    //           ticketType.A,
    //           attractionType.walkthrough,
    //         ),
    //       ],
    //     },
    //   ],
    // },
    {
      name: 'Disney Adventure',
      imgSrc: 'https://www.concordmonitor.com/getattachment/84641be4-1efc-4a9d-9832-723e394fb9bd/AvatarLand-cmae-050917-ph07',
      lands: [
        {
          name: 'Star Wars',
          attractions: [
            new Attraction(
              'Rise of the Resistance',
              ticketType.E,
              attractionType.darkThrill,
            ),
            new Attraction(
              'Millennium Falcon: Smuggler\'s Run',
              ticketType.E,
              attractionType.simulator,
            ),
            new Attraction(
              'Coaster',
              ticketType.D,
              attractionType.coaster,
            ),
            new Attraction(
              'Star Tours',
              ticketType.D,
              attractionType.simulator,
            ),
            new Attraction(
              'Boat Ride',
              ticketType.D,
              attractionType.boat,
            ),
            new Attraction(
              'Pod Race',
              ticketType.C,
              attractionType.kiddieCoaster,
            ),
            new Attraction(
              'Bantha peoplemover',
              ticketType.C,
              attractionType.transportation,
            ),
            new Attraction(
              'Jedi Training Academy',
              ticketType.B,
              attractionType.show,
            ),
            new Attraction(
              'Meet Star Wars Characters',
              ticketType.A,
              attractionType.character,
            ),
            new Attraction(
              'Exploration Trail',
              ticketType.A,
              attractionType.walkthrough,
            ),
          ],
        },
        {
          name: 'Marvel',
          sublands: [
            {
              name: 'Stark Expo',
              attractions: [
                new Attraction(
                  'Avengers Assemble',
                  ticketType.E,
                  attractionType.darkThrill,
                ),
                new Attraction(
                  'Iron Man Experience',
                  ticketType.D,
                  attractionType.simulator,
                ),
                new Attraction(
                  'Guardians of the Galaxy Coaster',
                  ticketType.D,
                  attractionType.coaster,
                ),
                new Attraction(
                  'Spider Man Shooter',
                  ticketType.C,
                  attractionType.shooter,
                ),
                new Attraction(
                  'Avengers Jet Packs',
                  ticketType.C,
                  attractionType.flat,
                ),
                new Attraction(
                  'Stark Expo Presentation',
                  ticketType.B,
                  attractionType.exhibit,
                ),
                new Attraction(
                  'Doctor Strange Show',
                  ticketType.B,
                  attractionType.show,
                ),
                new Attraction(
                  'Hero Meet and Greet',
                  ticketType.A,
                  attractionType.character,
                ),
              ],
            },
            {
              name: 'Wakanda',
              attractions: [
                new Attraction(
                  'Black Panther',
                  ticketType.D,
                  attractionType.darkThrill,
                ),
                new Attraction(
                  'Vibranium Mines',
                  ticketType.C,
                  attractionType.boat,
                ),
                new Attraction(
                  'Meet Black Panther',
                  ticketType.A,
                  attractionType.character,
                ),
                new Attraction(
                  'Exploration Trail',
                  ticketType.A,
                  attractionType.walkthrough,
                ),
              ],
            },
          ],
        },
        {
          name: 'Avatar',
          attractions: [
            new Attraction(
              'Flight of Passage',
              ticketType.E,
              attractionType.simulator,
            ),
            new Attraction(
              'Navi River Journey',
              ticketType.D,
              attractionType.boat,
            ),
            new Attraction(
              'Coaster',
              ticketType.D,
              attractionType.coaster,
            ),
            new Attraction(
              'Show',
              ticketType.B,
              attractionType.animatronic,
            ),
            new Attraction(
              'Water play area',
              ticketType.B,
              attractionType.play,
            ),
            new Attraction(
              'Navi Meet and Greet',
              ticketType.A,
              attractionType.character,
            ),
            new Attraction(
              'Exploration Trail',
              ticketType.A,
              attractionType.walkthrough,
            ),
          ],
        },
        {
          name: 'Incredibles',
          attractions: [
            new Attraction(
              'Dark Ride',
              ticketType.E,
              attractionType.darkThrill,
            ),
            new Attraction(
              'Monorail',
              ticketType.B,
              attractionType.transportation,
            ),
            new Attraction(
              'Exploration Trail',
              ticketType.A,
              attractionType.walkthrough,
            ),
            new Attraction(
              'Meet the Incredibles',
              ticketType.A,
              attractionType.character,
            ),
          ],
        },
        {
          name: 'Monsters Inc',
          attractions: [
            new Attraction(
              'Door Coaster',
              ticketType.E,
              attractionType.coaster,
            ),
            new Attraction(
              'Monster\'s Inc Laugh Floor',
              ticketType.C,
              attractionType.show,
            ),
            new Attraction(
              'Meet Mike and Sully',
              ticketType.A,
              attractionType.character,
            ),
          ],
        },
        {
          name: 'Zootopia',
          attractions: [
            new Attraction(
              'Zootopia dark ride',
              ticketType.E,
              attractionType.darkTame,
            ),
            new Attraction(
              'Zootopia Show',
              ticketType.C,
              attractionType.animatronic,
            ),
            new Attraction(
              'Meet the Zootopia Characters',
              ticketType.A,
              attractionType.character,
            ),
            new Attraction(
              'Exploration Trail',
              ticketType.A,
              attractionType.walkthrough,
            ),
          ],
        },
        {
          name: 'Toontown',
          attractions: [
            new Attraction(
              'Mickey and Minnie\'s Runaway Railway',
              ticketType.E,
              attractionType.darkTame,
            ),
            new Attraction(
              'Goofy\'s Sky School',
              ticketType.D,
              attractionType.kiddieCoaster,
            ),
            new Attraction(
              'Roger Rabbit\'s Cartoon Spin',
              ticketType.D,
              attractionType.darkTame,
            ),
            new Attraction(
              'Mickey and Minnie\'s Neighborhood',
              ticketType.B,
              attractionType.play,
            ),
            new Attraction(
              'Meet the Fab 5',
              ticketType.A,
              attractionType.character,
            ),
          ],
        },
        {
          name: 'a bug\'s land',
          attractions: [
            new Attraction(
              'It\'s Tough to be a Bug',
              ticketType.C,
              attractionType.film,
            ),
            new Attraction(
              'Flik\'s Flyers',
              ticketType.C,
              attractionType.flat,
            ),
            new Attraction(
              'Heimlich\'s Chew Chew Train',
              ticketType.B,
              attractionType.flat,
            ),
            new Attraction(
              'Francis\' Ladybug Boogie',
              ticketType.B,
              attractionType.flat,
            ),
            new Attraction(
              'Tuck and Roll\'s Drive \'em Buggies',
              ticketType.B,
              attractionType.flat,
            ),
            new Attraction(
              'Tiny Playground',
              ticketType.A,
              attractionType.play,
            ),
          ],
        },
        {
          name: 'Cars Land',
          attractions: [
            new Attraction(
              'Radiator Springs Racers',
              ticketType.E,
              attractionType.darkThrill,
            ),
            new Attraction(
              'Autopia',
              ticketType.C,
              attractionType.flat,
            ),
            new Attraction(
              'Mater\'s Junkyard Jamboree',
              ticketType.C,
              attractionType.flat,
            ),
          ],
        },
      ],
    },
  ],
  hotelAreas: [
    {
      name: 'The Hotels of Disneyland Park',
      hotels: [
        'The Disneyland Hotel',
        'Fantasy Hotel',
        'Frontier Hotel',
        'Tomorrow Hotel',
      ],
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
        'French Resort',
      ],
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
        'Key West Resort',
      ],
    },
    {
      name: 'Other',
      hotels: [
        'Wilderness Cabins and Campground',
        'The Boardwalk Hotel',
        'The Treehouse Resort',
      ],
    },
  ],
  shoppingAndEntertainmentDistricts: [
    {
      name: 'Hollywood Plaza',
    },
    {
      name: 'Electricity District',
    },
    {
      name: 'Boardwalk',
    },
  ],
  waterParks: [
    {
      name: 'Pirate Cove',
    },
    {
      name: 'Volcano Bay',
    },
  ],
}
;

export default {
  resort,
  attractionType,
  ticketType,
  diningType,
};
