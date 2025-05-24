const words = {
  3: [
  { word: "cat", clue: "A small domesticated animal." },
  { word: "sun", clue: "Bright object in the sky." },
  { word: "pen", clue: "Used for writing." },
  { word: "dog", clue: "Man's best friend." },
  { word: "car", clue: "A four-wheeled vehicle." },
  { word: "hat", clue: "Worn on the head." },
  { word: "box", clue: "Used for storing things." },
  { word: "key", clue: "Opens a lock." },
  { word: "bee", clue: "Insect that makes honey." },
  { word: "egg", clue: "Laid by birds and reptiles." },
  { word: "rat", clue: "A small rodent." },
  { word: "ice", clue: "Frozen water." },
  { word: "jar", clue: "Container for storing." },
  { word: "log", clue: "A piece of wood." },
  { word: "map", clue: "Shows locations." },
  { word: "net", clue: "Used to catch fish." },
  { word: "owl", clue: "A nocturnal bird." },
  { word: "pig", clue: "Farm animal that oinks." },
  { word: "red", clue: "A color." },
  { word: "sky", clue: "Above the earth." },
  { word: "toy", clue: "Object for children to play." },
  { word: "van", clue: "Type of vehicle." },
  { word: "wax", clue: "Used in candles." },
  { word: "yam", clue: "A type of root vegetable." },
  { word: "zip", clue: "Fastener on clothes." },
  { word: "bat", clue: "Nocturnal flying mammal." },
  { word: "cap", clue: "Headwear." },
  { word: "dip", clue: "To immerse briefly." },
  { word: "ear", clue: "Used to hear." },
  { word: "fan", clue: "Device to cool air." },
  { word: "gap", clue: "A space between." },
  { word: "hit", clue: "To strike something." },
  { word: "ink", clue: "Used for writing or printing." },
  { word: "jam", clue: "Fruit spread." },
  { word: "kid", clue: "A child." },
  { word: "leg", clue: "Body part used for walking." },
  { word: "mud", clue: "Wet dirt." },
  { word: "nap", clue: "Short sleep." },
  { word: "oil", clue: "Used for cooking or lubrication." },
  { word: "pit", clue: "A hole in the ground." },
  { word: "rod", clue: "A thin stick or bar." },
  { word: "sap", clue: "Tree fluid." },
  { word: "tap", clue: "Faucet for water." },
  { word: "urn", clue: "Container for ashes." },
  { word: "vet", clue: "Animal doctor." },
  { word: "wig", clue: "Artificial hair." },
  { word: "yak", clue: "A long-haired bovine." },
  { word: "zip", clue: "Fastener on clothes." },
  { word: "ace", clue: "Highest card in many games." },
  { word: "bad", clue: "Not good." },
  { word: "cut", clue: "To divide with a blade." },
  { word: "dry", clue: "Opposite of wet." },
  { word: "elf", clue: "Mythical small creature." },
  { word: "fig", clue: "A sweet fruit." },
  { word: "god", clue: "A deity." },
  { word: "hog", clue: "A large pig." },
  { word: "ice", clue: "Frozen water." },
  { word: "jet", clue: "A fast airplane." },
  { word: "kit", clue: "Set of tools or equipment." },
  { word: "lid", clue: "Cover for a container." },
  { word: "man", clue: "An adult male." },
  { word: "new", clue: "Not old." },
  { word: "oak", clue: "Type of tree." },
  { word: "paw", clue: "Animal foot." },
  { word: "rat", clue: "A small rodent." },
  { word: "saw", clue: "Tool to cut wood." },
  { word: "tan", clue: "Brown skin color." },
  { word: "use", clue: "To employ something." },
  { word: "van", clue: "Type of vehicle." },
  { word: "wet", clue: "Covered with water." },
  { word: "yap", clue: "Sharp bark of a small dog." },
  { word: "zip", clue: "Fastener on clothes." },
  { word: "ant", clue: "Small insect." },
  { word: "bid", clue: "To offer a price." },
  { word: "cow", clue: "Farm animal that gives milk." },
  { word: "dip", clue: "To immerse briefly." },
  { word: "elf", clue: "Mythical small creature." },
  { word: "fun", clue: "Enjoyment or amusement." },
  { word: "gym", clue: "Place to exercise." },
  { word: "hop", clue: "To jump lightly." },
  { word: "ink", clue: "Used for writing or printing." },
  { word: "jog", clue: "Run at a slow pace." },
  { word: "lab", clue: "Place for scientific work." },
  { word: "mom", clue: "Mother." },
  { word: "nod", clue: "Move head up and down." },
  { word: "owl", clue: "A nocturnal bird." },
  { word: "pig", clue: "Farm animal that oinks." },
  { word: "row", clue: "A line of things." },
  { word: "sun", clue: "Bright object in the sky." },
  { word: "tip", clue: "Helpful advice or end of something." },
  { word: "urn", clue: "Container for ashes." },
  { word: "vet", clue: "Animal doctor." },
  { word: "win", clue: "To be victorious." },
  { word: "yes", clue: "Affirmative response." },
  { word: "zoo", clue: "Place to see animals." }
],
4: [
  { word: "code", clue: "What developers write." },
  { word: "book", clue: "You read it." },
  { word: "game", clue: "Played for fun." },
  { word: "tree", clue: "Has leaves and branches." },
  { word: "fish", clue: "Lives in water." },
  { word: "milk", clue: "White liquid from cows." },
  { word: "door", clue: "You open it to enter." },
  { word: "bird", clue: "Can fly in the sky." },
  { word: "shoe", clue: "Worn on feet." },
  { word: "lamp", clue: "Provides light." },
  { word: "road", clue: "Where vehicles drive." },
  { word: "cake", clue: "A sweet dessert." },
  { word: "fish", clue: "Lives in water." },
  { word: "wind", clue: "Air in motion." },
  { word: "fire", clue: "Gives heat and light." },
  { word: "frog", clue: "Amphibian that jumps." },
  { word: "king", clue: "A male ruler." },
  { word: "milk", clue: "White liquid from cows." },
  { word: "nest", clue: "Bird's home." },
  { word: "park", clue: "Place to relax outside." },
  { word: "rain", clue: "Water falling from clouds." },
  { word: "salt", clue: "Used to season food." },
  { word: "soap", clue: "Used for cleaning." },
  { word: "star", clue: "Shines at night." },
  { word: "time", clue: "Measured in seconds." },
  { word: "tree", clue: "Has leaves and branches." },
  { word: "wall", clue: "Structure that divides rooms." },
  { word: "yard", clue: "Area around a house." },
  { word: "zero", clue: "Number meaning none." },
  { word: "band", clue: "Group of musicians." },
  { word: "bell", clue: "Makes a ringing sound." },
  { word: "bird", clue: "Can fly in the sky." },
  { word: "blue", clue: "A color." },
  { word: "boat", clue: "Floats on water." },
  { word: "bull", clue: "Male cow." },
  { word: "calf", clue: "Baby cow or leg part." },
  { word: "camp", clue: "Place to stay outside." },
  { word: "care", clue: "Attention and help." },
  { word: "city", clue: "Large town." },
  { word: "club", clue: "Group of people." },
  { word: "coat", clue: "Worn to keep warm." },
  { word: "cold", clue: "Opposite of hot." },
  { word: "corn", clue: "A grain crop." },
  { word: "cow", clue: "Farm animal that gives milk." },
  { word: "dark", clue: "Opposite of light." },
  { word: "dawn", clue: "Early morning." },
  { word: "desk", clue: "Furniture for work." },
  { word: "dirt", clue: "Earth or soil." },
  { word: "dish", clue: "Used to serve food." },
  { word: "dust", clue: "Fine dirt particles." },
  { word: "east", clue: "Direction of sunrise." },
  { word: "easy", clue: "Not difficult." },
  { word: "edge", clue: "Border or margin." },
  { word: "farm", clue: "Place to grow crops." },
  { word: "fast", clue: "Quick or rapid." },
  { word: "feet", clue: "Body part for standing." },
  { word: "file", clue: "Collection of documents." },
  { word: "fill", clue: "To make full." },
  { word: "fire", clue: "Gives heat and light." },
  { word: "fish", clue: "Lives in water." },
  { word: "flat", clue: "Level and even." },
  { word: "flow", clue: "Move smoothly." },
  { word: "fold", clue: "To bend over." },
  { word: "food", clue: "What we eat." },
  { word: "foot", clue: "Body part." },
  { word: "fork", clue: "Used to eat." },
  { word: "form", clue: "Shape or document." },
  { word: "frog", clue: "Amphibian that jumps." },
  { word: "fuel", clue: "Provides energy." },
  { word: "game", clue: "Played for fun." },
  { word: "gate", clue: "Entryway." },
  { word: "girl", clue: "A female child." },
  { word: "goal", clue: "Target or aim." },
  { word: "gold", clue: "Precious metal." },
  { word: "hand", clue: "Body part." },
  { word: "hard", clue: "Not soft." },
  { word: "head", clue: "Top part of the body." },
  { word: "heat", clue: "Warmth." },
  { word: "hill", clue: "Small raised land." },
  { word: "home", clue: "Where you live." },
  { word: "hook", clue: "Curved tool." },
  { word: "hope", clue: "Wish for something." },
  { word: "hour", clue: "60 minutes." },
  { word: "iron", clue: "Metal or appliance." },
  { word: "jack", clue: "Tool or name." },
  { word: "jail", clue: "Place for prisoners." },
  { word: "join", clue: "To connect." },
  { word: "jump", clue: "To leap." },
  { word: "jury", clue: "Group deciding cases." },
  { word: "just", clue: "Fair or exactly." },
  { word: "keen", clue: "Sharp or eager." },
  { word: "kick", clue: "Strike with foot." },
  { word: "kill", clue: "Cause death." },
  { word: "kind", clue: "Nice or type." },
  { word: "king", clue: "A male ruler." },
  { word: "kiss", clue: "Touch with lips." },
  { word: "kite", clue: "Flies in the wind." },
  { word: "knee", clue: "Leg joint." },
  { word: "know", clue: "To be aware." },
  { word: "lack", clue: "Not enough." },
  { word: "lamp", clue: "Provides light." },
  { word: "land", clue: "Earth's surface." },
  { word: "lane", clue: "Narrow road." },
  { word: "last", clue: "Final." },
  { word: "late", clue: "Not on time." },
  { word: "lead", clue: "To guide or metal." },
  { word: "leaf", clue: "Part of a plant." },
  { word: "left", clue: "Opposite of right." },
  { word: "life", clue: "Existence." },
  { word: "lift", clue: "To raise." },
  { word: "like", clue: "To enjoy." },
  { word: "line", clue: "Straight mark." },
  { word: "lion", clue: "King of the jungle." },
  { word: "list", clue: "Series of items." },
  { word: "live", clue: "To be alive." },
  { word: "load", clue: "To carry." },
  { word: "loan", clue: "Money lent." },
  { word: "lock", clue: "Secures something." },
  { word: "logo", clue: "Symbol or brand." },
  { word: "long", clue: "Not short." },
  { word: "look", clue: "To see." },
  { word: "lord", clue: "A nobleman." },
  { word: "lost", clue: "Unable to find." },
  { word: "love", clue: "Deep affection." },
  { word: "luck", clue: "Good fortune." },
  { word: "lung", clue: "Organ for breathing." },
  { word: "made", clue: "Created." },
  { word: "mail", clue: "Sent letters." },
  { word: "main", clue: "Most important." },
  { word: "make", clue: "To create." },
  { word: "male", clue: "Opposite of female." },
  { word: "many", clue: "A lot of." },
  { word: "mark", clue: "A sign or grade." },
  { word: "mask", clue: "Worn on the face." },
  { word: "mass", clue: "Amount of matter." },
  { word: "mate", clue: "Friend or partner." },
  { word: "meal", clue: "Food eaten at one time." },
  { word: "mean", clue: "To signify." },
  { word: "meat", clue: "Animal flesh eaten as food." },
  { word: "meet", clue: "To come together." },
  { word: "menu", clue: "List of food choices." },
  { word: "mice", clue: "Small rodents." },
  { word: "mile", clue: "A unit of distance." },
  { word: "milk", clue: "White liquid from cows." },
  { word: "mind", clue: "Part of the brain." },
  { word: "mine", clue: "Belongs to me or a hole for minerals." },
  { word: "miss", clue: "To fail to hit or catch." },
  { word: "mode", clue: "A way or manner." },
  { word: "mood", clue: "A feeling." },
  { word: "moon", clue: "Earth's satellite." },
  { word: "more", clue: "Additional amount." },
  { word: "most", clue: "Greatest amount." },
  { word: "move", clue: "To change position." },
  { word: "much", clue: "A large amount." },
  { word: "must", clue: "Required." },
  { word: "name", clue: "A word to identify." },
  { word: "navy", clue: "Military fleet." },
  { word: "near", clue: "Close by." },
  { word: "neck", clue: "Part connecting head and body." },
  { word: "need", clue: "Require." },
  { word: "news", clue: "Information about current events." },
  { word: "next", clue: "Coming immediately after." },
  { word: "nice", clue: "Pleasant." },
  { word: "night", clue: "Time after sunset." },
  { word: "nose", clue: "Used for smelling." },
  { word: "note", clue: "Written message." },
  { word: "okay", clue: "All right." },
  { word: "open", clue: "Not closed." },
  { word: "oven", clue: "Used for baking or cooking." },
  { word: "over", clue: "Above or finished." },
  { word: "pack", clue: "To put things together." },
  { word: "page", clue: "A sheet in a book." },
  { word: "pain", clue: "Physical discomfort." },
  { word: "pair", clue: "Two similar things." },
  { word: "park", clue: "Place to relax outside." },
  { word: "part", clue: "A piece of something." },
  { word: "pass", clue: "To go by." },
  { word: "path", clue: "Way or track." },
  { word: "pick", clue: "To choose or gather." },
  { word: "pile", clue: "A heap." },
  { word: "pink", clue: "A color." },
  { word: "pipe", clue: "Tube for liquids or gases." },
  { word: "plan", clue: "A detailed proposal." },
  { word: "play", clue: "To engage in fun." },
  { word: "plot", clue: "Storyline or piece of land." },
  { word: "plug", clue: "To block or connect." },
  { word: "pole", clue: "Long cylindrical object." },
  { word: "pool", clue: "Small body of water." },
  { word: "poor", clue: "Not wealthy." },
  { word: "port", clue: "Harbor for ships." },
  { word: "post", clue: "To mail or a pole." },
  { word: "pull", clue: "To tug." },
  { word: "pump", clue: "To push or device for liquids." },
  { word: "pure", clue: "Not mixed with anything else." },
  { word: "push", clue: "To press forward." },
  { word: "race", clue: "Competition of speed." },
  { word: "rail", clue: "Track for trains." },
  { word: "rain", clue: "Water falling from clouds." },
  { word: "rank", clue: "Position or level." },
  { word: "read", clue: "To interpret written words." },
  { word: "real", clue: "Not fake." },
  { word: "rear", clue: "Back part." },
  { word: "rest", clue: "Relax." },
  { word: "rice", clue: "A staple grain." },
  { word: "rich", clue: "Wealthy." },
  { word: "ride", clue: "To sit on and control." },
  { word: "ring", clue: "Circular band." },
  { word: "rise", clue: "To move upward." },
  { word: "road", clue: "Where vehicles drive." },
  { word: "rock", clue: "Solid mineral." },
  { word: "roll", clue: "To turn over." },
  { word: "roof", clue: "Top of a building." },
  { word: "room", clue: "Space inside a building." },
  { word: "root", clue: "Part of a plant underground." },
  { word: "rope", clue: "Thick cord." },
  { word: "rose", clue: "A flower." },
  { word: "rule", clue: "Guideline." },
  { word: "rush", clue: "To hurry." },
  { word: "safe", clue: "Secure." },
  { word: "sale", clue: "Selling at reduced price." },
  { word: "salt", clue: "Used to season food." },
  { word: "sand", clue: "Small grains found on beaches." },
  { word: "save", clue: "To keep or rescue." },
  { word: "seat", clue: "Where you sit." },
  { word: "seed", clue: "Part that grows a plant." },
  { word: "seek", clue: "To look for." },
  { word: "self", clue: "One's own person." },
  { word: "send", clue: "To dispatch." },
  { word: "ship", clue: "Large boat." },
  { word: "shop", clue: "Place to buy goods." },
  { word: "show", clue: "To display." },
  { word: "shut", clue: "To close." },
  { word: "side", clue: "Surface or part." },
  { word: "sign", clue: "Indication or gesture." },
  { word: "silk", clue: "Smooth fabric." },
  { word: "sink", clue: "To go down in water." },
  { word: "site", clue: "Place or location." },
  { word: "size", clue: "How big or small." },
  { word: "skin", clue: "Covers the body." },
  { word: "slam", clue: "To shut loudly." },
  { word: "slap", clue: "Hit with open hand." },
  { word: "sleep", clue: "Rest with eyes closed." },
  { word: "slow", clue: "Not fast." },
  { word: "snow", clue: "Frozen precipitation." },
  { word: "soap", clue: "Used for cleaning." },
  { word: "soft", clue: "Not hard." },
  { word: "soil", clue: "Earth or dirt." },
  { word: "sold", clue: "Past tense of sell." },
  { word: "sole", clue: "Bottom of a foot or shoe." },
  { word: "some", clue: "An unspecified amount." },
  { word: "song", clue: "Music with words." },
  { word: "soon", clue: "In a short time." },
  { word: "sort", clue: "Type or category." },
  { word: "star", clue: "Shines at night." },
  { word: "stay", clue: "To remain." },
  { word: "step", clue: "Movement of foot." },
  { word: "stop", clue: "To cease moving." },
  { word: "such", clue: "Of that kind." },
  { word: "suit", clue: "Set of clothes." },
  { word: "sun", clue: "Gives daylight and warmth." },
  { word: "sure", clue: "Certain." },
  { word: "take", clue: "To get or grab." },
  { word: "talk", clue: "To speak." },
  { word: "tall", clue: "High in height." },
  { word: "tank", clue: "Large container or military vehicle." },
  { word: "task", clue: "Job to do." },
  { word: "team", clue: "Group working together." },
  { word: "tear", clue: "Rip or cry drop." },
  { word: "tell", clue: "To inform." },
  { word: "tend", clue: "To care for." },
  { word: "term", clue: "Word or period." },
  { word: "test", clue: "Assessment." },
  { word: "text", clue: "Written words." },
  { word: "thin", clue: "Not thick." },
  { word: "this", clue: "Refers to something near." },
  { word: "thus", clue: "Therefore." },
  { word: "time", clue: "Measured in seconds." },
  { word: "tire", clue: "Rubber part of a wheel." },
  { word: "toil", clue: "Hard work." },
  { word: "told", clue: "Informed." },
  { word: "tool", clue: "Instrument for work." },
  { word: "tour", clue: "Trip or journey." },
  { word: "town", clue: "Small city." },
  { word: "trap", clue: "Device to catch." },
  { word: "tree", clue: "Has leaves and branches." },
  { word: "trip", clue: "Journey or stumble." },
  { word: "true", clue: "Not false." },
  { word: "turn", clue: "Change direction." },
  { word: "type", clue: "Category or form." },
  { word: "unit", clue: "Single thing or measure." },
  { word: "upon", clue: "On or immediately after." },
  { word: "used", clue: "Not new." },
  { word: "user", clue: "One who uses something." },
  { word: "vast", clue: "Very large." },
  { word: "very", clue: "To a high degree." },
  { word: "view", clue: "Sight or opinion." },
  { word: "vote", clue: "To choose in an election." },
  { word: "wait", clue: "To stay." },
  { word: "walk", clue: "Move on foot." },
  { word: "wall", clue: "Structure that divides rooms." },
  { word: "want", clue: "Desire." },
  { word: "warm", clue: "Not cold." },
  { word: "warn", clue: "To advise of danger." },
  { word: "wash", clue: "To clean." },
  { word: "wave", clue: "Move hand or water form." },
  { word: "weak", clue: "Not strong." },
  { word: "wear", clue: "To have on." },
  { word: "week", clue: "Seven days." },
  { word: "well", clue: "In good health or a water source." },
  { word: "west", clue: "Direction of sunset." },
  { word: "what", clue: "Asking for information." },
  { word: "when", clue: "At what time." },
  { word: "wide", clue: "Broad." },
  { word: "wife", clue: "Married woman." },
  { word: "wild", clue: "Not tame." },
  { word: "will", clue: "Desire or future tense." },
  { word: "wind", clue: "Air in motion." },
  { word: "wine", clue: "Alcoholic drink." },
  { word: "wing", clue: "Bird's limb for flying." },
  { word: "wire", clue: "Thin metal strand." },
  { word: "wise", clue: "Having good judgment." },
  { word: "wish", clue: "Desire for something." },
  { word: "with", clue: "Accompanied by." },
  { word: "wood", clue: "Material from trees." },
  { word: "word", clue: "Unit of language." },
  { word: "work", clue: "Activity involving effort." },
  { word: "yard", clue: "Area around a house." },
  { word: "year", clue: "12 months." },
  { word: "your", clue: "Belonging to you." },
  { word: "zero", clue: "Number meaning none." }
],
5:[
  { "word": "apple", "clue": "A popular fruit." },
  { "word": "plane", "clue": "Flies in the sky." },
  { "word": "mouse", "clue": "Computer tool or small rodent." },
  { "word": "chair", "clue": "Used for sitting." },
  { "word": "clock", "clue": "Shows time." },
  { "word": "table", "clue": "Furniture with a flat top." },
  { "word": "light", "clue": "Makes things visible." },
  { "word": "green", "clue": "Color of grass." },
  { "word": "water", "clue": "Essential liquid for life." },
  { "word": "plant", "clue": "Grows in the ground." },
  { "word": "stone", "clue": "Hard mineral material." },
  { "word": "heart", "clue": "Organ that pumps blood." },
  { "word": "bread", "clue": "Made from flour and baked." },
  { "word": "grass", "clue": "Covers the ground in lawns." },
  { "word": "storm", "clue": "Severe weather." },
  { "word": "river", "clue": "Flowing body of water." },
  { "word": "cloud", "clue": "White mass in the sky." },
  { "word": "glass", "clue": "Transparent material." },
  { "word": "horse", "clue": "Large animal used for riding." },
  { "word": "shoes", "clue": "Worn on feet." },
  { "word": "music", "clue": "Organized sound." },
  { "word": "phone", "clue": "Used for calls." },
  { "word": "shirt", "clue": "Clothing for upper body." },
  { "word": "paint", "clue": "Used for coloring surfaces." },
  { "word": "watch", "clue": "Timepiece worn on wrist." },
  { "word": "bread", "clue": "Staple food from wheat." },
  { "word": "juice", "clue": "Liquid from fruits." },
  { "word": "laugh", "clue": "Express happiness with sound." },
  { "word": "light", "clue": "Opposite of dark." },
  { "word": "money", "clue": "Used to buy things." },
  { "word": "night", "clue": "Time of darkness." },
  { "word": "plant", "clue": "Green organism that grows." },
  { "word": "queen", "clue": "Female monarch." },
  { "word": "river", "clue": "Natural watercourse." },
  { "word": "smile", "clue": "Facial expression of happiness." },
  { "word": "snake", "clue": "Legless reptile." },
  { "word": "sound", "clue": "What we hear." },
  { "word": "spoon", "clue": "Utensil for eating." },
  { "word": "train", "clue": "Rail vehicle." },
  { "word": "truck", "clue": "Large vehicle for transport." },
  { "word": "voice", "clue": "Sound produced by humans." },
  { "word": "water", "clue": "Liquid essential to life." },
  { "word": "woman", "clue": "Adult female human." },
  { "word": "world", "clue": "The Earth and all its people." },
  { "word": "write", "clue": "To form letters on paper." },
  { "word": "yield", "clue": "To produce or give way." },
  { "word": "young", "clue": "Not old." }
],
6:[
  { "word": "animal", "clue": "A living creature." },
  { "word": "bridge", "clue": "Structure to cross water." },
  { "word": "circle", "clue": "Round shape." },
  { "word": "doctor", "clue": "Medical professional." },
  { "word": "flower", "clue": "Grows from a plant." },
  { "word": "forest", "clue": "Large area with many trees." },
  { "word": "guitar", "clue": "String musical instrument." },
  { "word": "hammer", "clue": "Tool for pounding nails." },
  { "word": "island", "clue": "Land surrounded by water." },
  { "word": "jungle", "clue": "Dense tropical forest." },
  { "word": "kitten", "clue": "Young cat." },
  { "word": "letter", "clue": "Written message." },
  { "word": "market", "clue": "Place to buy and sell." },
  { "word": "mother", "clue": "Female parent." },
  { "word": "needle", "clue": "Used for sewing." },
  { "word": "office", "clue": "Workplace." },
  { "word": "pencil", "clue": "Used for writing or drawing." },
  { "word": "pirate", "clue": "Sea robber." },
  { "word": "rocket", "clue": "Vehicle for space travel." },
  { "word": "season", "clue": "Part of the year." },
  { "word": "shield", "clue": "Protective gear." },
  { "word": "silver", "clue": "Precious metal." },
  { "word": "street", "clue": "Road in a town." },
  { "word": "summer", "clue": "Warm season." },
  { "word": "teacher", "clue": "Educator." },
  { "word": "ticket", "clue": "Pass for entry or travel." },
  { "word": "tomato", "clue": "Red fruit used in salads." },
  { "word": "tunnel", "clue": "Underground passage." },
  { "word": "vacuum", "clue": "Device to clean floors." },
  { "word": "window", "clue": "Opening in a wall for light." },
  { "word": "winter", "clue": "Cold season." },
  { "word": "wizard", "clue": "Magic user." },
  { "word": "yellow", "clue": "Color of a lemon." },
  { "word": "zipper", "clue": "Used to close clothes." },
  { "word": "castle", "clue": "Large fortified building." },
  { "word": "circle", "clue": "A round shape." },
  { "word": "doctor", "clue": "Medical professional." },
  { "word": "engine", "clue": "Machine that powers vehicles." },
  { "word": "family", "clue": "Group related by blood or marriage." },
  { "word": "garden", "clue": "Place to grow plants." },
  { "word": "helmet", "clue": "Protective headgear." },
  { "word": "island", "clue": "Land surrounded by water." },
  { "word": "jungle", "clue": "Dense tropical forest." },
  { "word": "ladder", "clue": "Used to climb." },
  { "word": "letter", "clue": "Written message." },
  { "word": "market", "clue": "Place to buy and sell." },
  { "word": "mother", "clue": "Female parent." },
  { "word": "needle", "clue": "Used for sewing." }
],
7:[
  { "word": "airport", "clue": "Place where planes take off and land." },
  { "word": "balance", "clue": "Even distribution of weight." },
  { "word": "cabinet", "clue": "Furniture with shelves or drawers." },
  { "word": "diamond", "clue": "Precious gemstone." },
  { "word": "economy", "clue": "System of production and consumption." },
  { "word": "factory", "clue": "Place where goods are made." },
  { "word": "gallery", "clue": "Place to display art." },
  { "word": "harvest", "clue": "Gathering crops." },
  { "word": "imagine", "clue": "To form a mental picture." },
  { "word": "journey", "clue": "Travel from one place to another." },
  { "word": "kingdom", "clue": "Land ruled by a king or queen." },
  { "word": "library", "clue": "Place with many books." },
  { "word": "machine", "clue": "Device that performs work." },
  { "word": "natural", "clue": "Not made by humans." },
  { "word": "octagon", "clue": "Shape with eight sides." },
  { "word": "passage", "clue": "Path or corridor." },
  { "word": "quality", "clue": "Degree of excellence." },
  { "word": "rainbow", "clue": "Colors seen after rain." },
  { "word": "science", "clue": "Study of the natural world." },
  { "word": "teacher", "clue": "One who educates." },
  { "word": "uncover", "clue": "To reveal." },
  { "word": "village", "clue": "Small community." },
  { "word": "weather", "clue": "Conditions outside like rain or sun." },
  { "word": "xylitol", "clue": "A sugar substitute." },
  { "word": "zephyrs", "clue": "Gentle breezes." },
  { "word": "ability", "clue": "Skill or talent." },
  { "word": "beneath", "clue": "Underneath." },
  { "word": "capture", "clue": "To catch." },
  { "word": "defense", "clue": "Protection against attack." },
  { "word": "explore", "clue": "To travel and discover." },
  { "word": "fashion", "clue": "Style of clothing." },
  { "word": "genuine", "clue": "Real or authentic." },
  { "word": "harbour", "clue": "Sheltered place for ships." },
  { "word": "impress", "clue": "To make someone admire." },
  { "word": "justice", "clue": "Fairness." },
  { "word": "kingpin", "clue": "Most important person." },
  { "word": "loyalty", "clue": "Faithfulness." },
  { "word": "marvels", "clue": "Amazing things." },
  { "word": "notable", "clue": "Worthy of attention." },
  { "word": "optical", "clue": "Related to sight." },
  { "word": "perform", "clue": "To carry out an action." },
  { "word": "quickly", "clue": "At a fast speed." },
  { "word": "restore", "clue": "To bring back." },
  { "word": "silence", "clue": "Absence of sound." },
  { "word": "tunnel", "clue": "Underground passage." },
  { "word": "uphold", "clue": "To support or maintain." },
  { "word": "venture", "clue": "A risky journey." },
  { "word": "welcome", "clue": "Greeting someone warmly." }
],
8:[
  { "word": "elephant", "clue": "Large animal with a trunk." },
  { "word": "computer", "clue": "Machine for processing data." },
  { "word": "building", "clue": "Structure with walls and a roof." },
  { "word": "painting", "clue": "Artwork made with paint." },
  { "word": "football", "clue": "Sport played with a round ball." },
  { "word": "language", "clue": "Method of human communication." },
  { "word": "sentence", "clue": "Group of words expressing a thought." },
  { "word": "backpack", "clue": "Bag carried on the back." },
  { "word": "mountain", "clue": "Very tall natural elevation." },
  { "word": "airplane", "clue": "Vehicle that flies in the sky." },
  { "word": "birthday", "clue": "Anniversary of one’s birth." },
  { "word": "children", "clue": "Young human beings." },
  { "word": "hospital", "clue": "Place for medical treatment." },
  { "word": "sentence", "clue": "Grammatical unit with subject and verb." },
  { "word": "umbrella", "clue": "Used to block rain." },
  { "word": "exercise", "clue": "Physical activity for health." },
  { "word": "activity", "clue": "Something that is done." },
  { "word": "dinosaur", "clue": "Extinct reptile from ancient times." },
  { "word": "solution", "clue": "Answer to a problem." },
  { "word": "elevenpm", "clue": "Late evening time." },
  { "word": "notebook", "clue": "Used to write notes." },
  { "word": "bathroom", "clue": "Room with toilet and sink." },
  { "word": "magazine", "clue": "Periodical publication." },
  { "word": "calendar", "clue": "Shows days, weeks, and months." },
  { "word": "daughter", "clue": "Female child." },
  { "word": "passport", "clue": "Document for international travel." },
  { "word": "security", "clue": "Freedom from danger." },
  { "word": "resource", "clue": "Something useful or valuable." },
  { "word": "lighting", "clue": "Illumination." },
  { "word": "medicine", "clue": "Used to treat illness." },
  { "word": "vacation", "clue": "Time away from work or school." },
  { "word": "painting", "clue": "A picture made with paint." },
  { "word": "sandwich", "clue": "Two slices of bread with filling." },
  { "word": "keyboard", "clue": "Used to type on a computer." },
  { "word": "distance", "clue": "Space between two points." },
  { "word": "scissors", "clue": "Tool for cutting." },
  { "word": "property", "clue": "Something owned." },
  { "word": "vacuumed", "clue": "Cleaned using suction." },
  { "word": "deadline", "clue": "Due date for a task." },
  { "word": "learning", "clue": "Process of gaining knowledge." },
  { "word": "download", "clue": "To transfer from internet to device." },
  { "word": "campaign", "clue": "Organized effort to influence people." },
  { "word": "triangle", "clue": "Shape with three sides." },
  { "word": "equation", "clue": "Mathematical statement of equality." },
  { "word": "customer", "clue": "One who buys goods or services." },
  { "word": "personal", "clue": "Relating to an individual." },
  { "word": "aircraft", "clue": "Vehicle for air travel." },
  { "word": "alligator", "clue": "Large reptile with a wide snout." },
  { "word": "umbrella", "clue": "Used for rain protection." }
]
}


  let currentLevel = 3;
  let wordObj = {};
  let guessedLetters = [];
  const maxAttempts = 6;
  let attemptsLeft = maxAttempts;

  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  const wordDisplay = document.getElementById("wordDisplay");
  const clueDisplay = document.getElementById("clue");
  const lettersContainer = document.getElementById("letters");
  const statusText = document.getElementById("status");
  const restartBtn = document.getElementById("restartBtn");
  const startBtn = document.getElementById("startBtn");
  const levelSelect = document.getElementById("level");
  const uiContainer = document.getElementById("uiContainer");
  const levelSelectDiv = document.getElementById("levelSelect");

  const correctSound = document.getElementById("correctSound");
  const wrongSound = document.getElementById("wrongSound");
  const winSound = document.getElementById("winSound");
  const loseSound = document.getElementById("loseSound");

  // Draw stickman fully at fixed position (no rope)
  function drawStickman(x=125, y=150, offsetY=0) {
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 4;

    // Head (circle)
    ctx.beginPath();
    ctx.arc(x, y + offsetY, 30, 0, Math.PI * 2);
    ctx.stroke();

    // Body
    ctx.beginPath();
    ctx.moveTo(x, y + 30 + offsetY);
    ctx.lineTo(x, y + 110 + offsetY);
    ctx.stroke();

    // Arms
    ctx.beginPath();
    ctx.moveTo(x, y + 50 + offsetY);
    ctx.lineTo(x - 40, y + 80 + offsetY);
    ctx.moveTo(x, y + 50 + offsetY);
    ctx.lineTo(x + 40, y + 80 + offsetY);
    ctx.stroke();

    // Legs
    ctx.beginPath();
    ctx.moveTo(x, y + 110 + offsetY);
    ctx.lineTo(x - 30, y + 150 + offsetY);
    ctx.moveTo(x, y + 110 + offsetY);
    ctx.lineTo(x + 30, y + 150 + offsetY);
    ctx.stroke();
  }

  // Draw hanger parts progressively based on wrong attempt count
  // step = attemptsLeft from maxAttempts downwards
  function drawHanger(step) {
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 5;

    if(step <= 5) {
      // Base - draw only once
      ctx.beginPath();
      ctx.moveTo(30, 310);
      ctx.lineTo(220, 310);
      ctx.stroke();
    }
    if(step <= 4) {
      // Vertical pole
      ctx.beginPath();
      ctx.moveTo(60, 310);
      ctx.lineTo(60, 20);
      ctx.stroke();
    }
    if(step <= 3) {
      // Horizontal beam
      ctx.beginPath();
      ctx.moveTo(60, 20);
      ctx.lineTo(130, 20);
      ctx.stroke();
    }
    if(step <= 2) {
      // Rope: from beam to just top of stickman's head
      ctx.beginPath();
      ctx.moveTo(125, 20);
      ctx.lineTo(125, 120); // lowered to just above head (head center y=150, radius=30, so top ~120)
      ctx.stroke();
    }
  }

  // Animate pulling the stickman up
  function animateHang(callback) {
    let offsetY = 0;
    const maxOffset = -100; // pull up distance
    const step = 2;
    const interval = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawHanger(1); // base
      drawHanger(2); // pole
      drawHanger(3); // beam
      drawHanger(4); // rope
      drawStickman(125, 160, offsetY);
      offsetY -= step;
      if (offsetY < maxOffset) {
        clearInterval(interval);
        callback();
      }
    }, 25);
  }

  // Clear and redraw scene with stickman only (no hanger)
  function drawStartScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStickman();
  }

  // Display word with guessed letters or underscores
  function displayWord() {
    let display = "";
    for(let ch of wordObj.word){
      display += guessedLetters.includes(ch) ? ch.toUpperCase() + " " : "_ ";
    }
    wordDisplay.textContent = display.trim();
  }

  // Create letter buttons
  function createLetterButtons() {
    lettersContainer.innerHTML = "";
    for(let i=65; i<=90; i++){
      const letter = String.fromCharCode(i);
      const btn = document.createElement("button");
      btn.textContent = letter;
      btn.classList.add("letter-btn");
      btn.id = "btn_" + letter;
      btn.addEventListener("click", () => handleGuess(letter.toLowerCase()));
      lettersContainer.appendChild(btn);
    }
  }

  // Disable all letter buttons
  function disableLetterButtons() {
    document.querySelectorAll(".letter-btn").forEach(btn => btn.disabled = true);
  }

  // Enable all letter buttons
  function enableLetterButtons() {
    document.querySelectorAll(".letter-btn").forEach(btn => btn.disabled = false);
  }

  // Handle letter guess
  function handleGuess(letter) {
    if(guessedLetters.includes(letter)) return;
    guessedLetters.push(letter);

    const btn = document.getElementById("btn_" + letter.toUpperCase());
    if(btn) btn.disabled = true;

    if(wordObj.word.includes(letter)){
      correctSound.play();
      displayWord();
      checkWin();
    } else {
      attemptsLeft--;
      wrongSound.play();

      // Draw hanger parts step by step
      drawScene();

      if(attemptsLeft === 0){
        // Last wrong guess, animate hang and then lose
        animateHang(() => {
          loseSound.play();
          gameOver(false);
        });
      } else {
        statusText.textContent = `Attempts left: ${attemptsLeft}`;
      }
    }
  }

  // Draw hanger and stickman according to attemptsLeft
  function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(attemptsLeft < maxAttempts) {
      // Draw hanger progressively
      drawHanger(attemptsLeft);
    }
    // Stickman always drawn fully on start (no rope)
    drawStickman();
  }

  // Check if player won
  function checkWin() {
    if(wordObj.word.split("").every(ch => guessedLetters.includes(ch))){
      winSound.play();
      statusText.textContent = "🎉 Congratulations! You won!";
      disableLetterButtons();
      restartBtn.style.display = "inline-block";
    }
  }

  // Handle game over
  function gameOver(win) {
    if(!win){
      statusText.textContent = `Game Over! The word was "${wordObj.word.toUpperCase()}"`;
      disableLetterButtons();
      restartBtn.style.display = "inline-block";
    }
  }

  // Pick random word by level
  function pickRandomWord(level) {
    const pool = words[level] || words[3];
    return pool[Math.floor(Math.random() * pool.length)];
  }

  // Start game function
  function startGame() {
    currentLevel = parseInt(levelSelect.value);
    wordObj = pickRandomWord(currentLevel);
    guessedLetters = [];
    attemptsLeft = maxAttempts;

    levelSelectDiv.style.display = "none";
    startBtn.style.display = "none";
    uiContainer.style.display = "block";
    canvas.style.display = "block";

    statusText.textContent = `Attempts left: ${attemptsLeft}`;
    clueDisplay.textContent = "Clue: " + wordObj.clue;

    enableLetterButtons();
    createLetterButtons();
    displayWord();

    drawStartScene();
  }

  restartBtn.addEventListener("click", () => {
    restartBtn.style.display = "none";
    statusText.textContent = "";
    startGame();
  });

  startBtn.addEventListener("click", () => {
    startGame();
  });

  // Initial
  createLetterButtons();
  disableLetterButtons();
