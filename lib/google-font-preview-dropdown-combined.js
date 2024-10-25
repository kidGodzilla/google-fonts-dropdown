class FontPreviewDropdown {
    constructor(selector, callback, imagesPath = '../images/', popularityThreshold = 250) {
        const fontNames = 'Roboto,Open Sans,Lato,Noto Sans JP,Montserrat,Roboto Condensed,Oswald,Poppins,Raleway,Material Icons,Slabo 27px,PT Sans,Noto Sans,Roboto Mono,Roboto Slab,Ubuntu,Merriweather,Lora,Inter,Playfair Display,Nunito,PT Serif,Rubik,Titillium Web,Nunito Sans,Noto Sans KR,Work Sans,PT Sans Narrow,Arimo,Fira Sans,Mukta,Noto Serif,Quicksand,Inconsolata,Noto Sans TC,Nanum Gothic,Dosis,Oxygen,Bitter,Karla,Josefin Sans,Barlow,Cabin,Heebo,Kanit,Lobster,Anton,Hind Siliguri,Libre Baskerville,Yanone Kaffeesatz,Fjalla One,Arvo,Libre Franklin,Indie Flower,Hind,Crimson Text,Abel,IBM Plex Sans,Mulish,Dancing Script,Source Code Pro,Pacifico,DM Sans,Exo 2,Varela Round,Shadows Into Light,EB Garamond,Merriweather Sans,Asap,Bebas Neue,Cairo,Maven Pro,Comfortaa,Manrope,Teko,Bree Serif,Material Icons Outlined,Abril Fatface,Play,Noto Sans SC,Questrial,Barlow Condensed,Archivo Narrow,Signika,Ubuntu Condensed,Prompt,Catamaran,Francois One,Exo,Vollkorn,Amatic SC,Overpass,Rajdhani,Assistant,Acme,Righteous,Cuprum,Rokkitt,Permanent Marker,Signika Negative,Cormorant Garamond,Poiret One,Alegreya Sans,PT Sans Caption,Alegreya,Fira Sans Condensed,Domine,Noto Serif JP,Satisfy,Hind Madurai,Patua One,Caveat,Crete Round,Zilla Slab,Archivo,Gloria Hallelujah,Cinzel,Material Icons Round,Archivo Black,Noto Sans HK,Passion One,ABeeZee,Orbitron,Jost,Alfa Slab One,Architects Daughter,M PLUS Rounded 1c,Pathway Gothic One,Noticia Text,IBM Plex Serif,Courgette,Russo One,Lobster Two,Tajawal,Tinos,Material Symbols Outlined,News Cycle,Monda,Amiri,Barlow Semi Condensed,Ropa Sans,Cardo,Kaushan Script,Old Standard TT,Space Grotesk,Didact Gothic,Nanum Myeongjo,Cantarell,Quattrocento Sans,Great Vibes,Josefin Slab,Martel,Public Sans,Antic Slab,Material Icons Sharp,Patrick Hand,Philosopher,Istok Web,IBM Plex Mono,Kalam,Cookie,Red Hat Display,Bangers,Frank Ruhl Libre,Yantramanav,M PLUS 1p,Luckiest Guy,Chivo,Hammersmith One,Material Icons Two Tone,Chakra Petch,Quattrocento,Gudea,Special Elite,Yellowtail,Saira Condensed,Sanchez,Concert One,Sacramento,Prata,Pontano Sans,Sarabun,Cabin Condensed,BenchNine,DM Serif Display,Outfit,Montserrat Alternates,Playfair Display SC,Armata,Secular One,Paytone One,Tangerine,Economica,Volkhov,Handlee,Neuton,Changa,Chewy,Vidaloka,Asap Condensed,Sigmar One,Lilita One,Staatliches,Ubuntu Mono,Candal,Plus Jakarta Sans,Coming Soon,Rock Salt,Marck Script,Source Sans 3,Amaranth,Playball,Kreon,Khand,Ruda,Padauk,Squada One,Advent Pro,Arapey,Covered By Your Grace,Oleo Script,Black Ops One,Changa One,Ultra,Audiowide,Neucha,Alice,Spectral,Viga,Jura,Fira Sans Extra Condensed,Varela,Parisienne,Nobile,Space Mono,Press Start 2P,Merienda,Gothic A1,Actor,Cormorant,Homemade Apple,Shadows Into Light Two,Marcellus,PT Mono,Encode Sans,Sawarabi Mincho,Bad Script,Sorts Mill Goudy,Hind Vadodara,Balsamiq Sans,Lusitana,Sora,Bevan,Material Symbols Rounded,Noto Serif TC,Monoton,Carter One,Gochi Hand,Sintony,Boogaloo,Adamina,Fugaz One,Damion,Glegoo,Figtree,Encode Sans Condensed,Voltaire,IBM Plex Sans Arabic,Unica One,Julius Sans One,Lexend,Crafty Girls,Saira,Khula,Baloo 2,Allura,Reenie Beanie,Cantata One,Unna,Nanum Gothic Coding,Nothing You Could Do,Electrolize,Pinyon Script,Taviraj,Enriqueta,Pragati Narrow,Alegreya Sans SC,Molengo,Syncopate,El Messiri,Berkshire Swash,Coda,Gruppo,Rambla,Michroma,Alex Brush,Calligraffitti,Cousine,Noto Sans Display,Allerta,Basic,Yeseva One,Alata,Hind Guntur,Quantico,Mitr,Days One,Scada,Just Another Hand,Itim,Tenor Sans,PT Serif Caption,Titan One,Aldrich,Noto Serif KR,Urbanist,Rowdies,Sawarabi Gothic,Shrikhand,Rancho,Alef,VT323,Sarala,Marvel,Lexend Deca,Faustina,Copse,Lalezar,Italianno,Pangolin,Cabin Sketch,Kameron,Antic,Allerta Stencil,Overlock,Karma,Eczar,Forum,DM Serif Text,Arsenal,Telex,Leckerli One,Mr Dafoe,Bungee,Share,Niconne,Crimson Pro,Six Caps,Saira Semi Condensed,Aclonica,Mate,Rubik Mono One,Jockey One,Gelasio,Jaldi,Coustard,Arbutus Slab,Spinnaker,Fredericka the Great,Rufina,The Girl Next Door,Anonymous Pro,Roboto Flex,Zeyada,Marmelad,Carme,Abhaya Libre,Fauna One,Yrsa,Limelight,Cherry Cream Soda,Rochester,Source Serif 4,Unkempt,Palanquin,Average,Ramabhadra,Nixie One,Aleo,Contrail One,Pridi,Carrois Gothic,Goudy Bookletter 1911,Schoolbell,Magra,Nanum Pen Script,Bubblegum Sans,Be Vietnam Pro,Bowlby One SC,Caveat Brush,IBM Plex Sans Condensed,Lustria,Mukta Malar,Mate SC,Waiting for the Sunrise,Share Tech Mono,Annie Use Your Telescope,Walter Turncoat,Londrina Solid,Sen,Oranienbaum,Noto Serif SC,Judson,Cinzel Decorative,Racing Sans One,Martel Sans,Noto Sans Thai,Kosugi Maru,Saira Extra Condensed,Trocchi,Sriracha,Bodoni Moda,Bai Jamjuree,Mada,Marcellus SC,Rosario,Radley,Gilda Display,Doppio One,Fira Mono,Caudex,Average Sans,Yesteryear,Homenaje,Creepster,Grand Hotel,Ovo,Commissioner,Reem Kufi,Allan,Belleza,Hanuman,Lateef,Metrophobic,Love Ya Like A Sister,Alegreya SC,Mali,Cutive,Cutive Mono,Red Hat Text,Convergence,Capriola,Graduate,Norican,Petit Formal Script,Knewave,Slabo 13px,Literata,Markazi Text,Fontdiner Swanky,Delius,Just Me Again Down Here,Corben,Libre Caslon Text,Kristi,Puritan,Krona One,Courier Prime,Lemonada,Alike,Laila,Lemon,Holtwood One SC,Halant,Black Han Sans,Krub,Short Stack,Ceviche One,Crushed,Arizonia,Sofia,Bentham,Happy Monkey,Cambay,Lekton,Cedarville Cursive,Inder,Readex Pro,IM Fell English,Niramit,Sue Ellen Francisco,La Belle Aurore,Kelly Slab,Biryani,Fanwood Text,Inter Tight,Chelsea Market,Andika,Freckle Face,Prosto One,Mandali,Podkova,Bowlby One,Herr Von Muellerhoff,Sansita,Suez One,Rammetto One,Duru Sans,Baskervville,Noto Naskh Arabic,Slackey,Mako,Palanquin Dark,Macondo,Miriam Libre,Blinker,Metamorphous,Trirong,Do Hyeon,Averia Serif Libre,Pompiere,Montez,Aladin,Brawler,Roboto Serif,Yatra One,League Spartan,IM Fell English SC,Seaweed Script,Rozha One,Give You Glory,Rye,Athiti,Denk One,Tauri,Oxygen Mono,Bungee Inline,Nanum Brush Script,Comic Neue,Mountains of Christmas,IM Fell DW Pica,Poly,Quando,Anaheim,Antonio,Skranji,Pattaya,Orienta,Schibsted Grotesk,Rasa,Epilogue,Fredoka,Kumbh Sans,Gabriela,Noto Sans Mono,UnifrakturMaguntia,Stardos Stencil,Sniglet,Libre Barcode 39,Amethysta,Megrim,Oleo Script Swash Caps,Nova Square,Mr De Haviland,Zen Kaku Gothic New,Strait,Amita,IM Fell Double Pica,Overpass Mono,Castoro,Buenard,Wallpoet,Gravitas One,Baumans,Mrs Saint Delafield,Federo,Frijole,Belgrano,Qwigley,Loved by the King,Mallanna,Kurale,Wire One,Mukta Vaani,Charm,Dawning of a New Day,David Libre,Kranky,Mouse Memoirs,Salsa,Patrick Hand SC,Stint Ultra Condensed,Port Lligat Slab,Shanti,Cambo,Unbounded,Cormorant Infant,Kotta One,Albert Sans,Oregano,Expletus Sans,Clicker Script,Maitree,DM Mono,Quintessential,Noto Sans Tamil,Noto Sans Devanagari,JetBrains Mono,Raleway Dots,Suranna,Headland One,Poller One,Petrona,Chonburi,Tienne,Noto Sans Bengali,Amiko,Finger Paint,Fraunces,Chau Philomene One,Fjord One,Imprima,Geo,Koulen,Alatsi,Shojumaru,Syne,Lily Script One,Balthazar,Prociono,Fondamento,Vast Shadow,Meddon,Zen Maru Gothic,Averia Libre,K2D,Big Shoulders Display,Jua,Shippori Mincho,Cormorant SC,Wendy One,Darker Grotesque,Over the Rainbow,Noto Serif Bengali,Kadwa,McLaren,Nova Mono,Rouge Script,Voces,Esteban,Euphoria Script,NTR,Silkscreen,Fira Code,Alike Angular,Delius Swash Caps,Calistoga,Ruslan Display,Iceland,Share Tech,Gurajada,Kite One,Spirax,Maiden Orange,Carrois Gothic SC,Numans,Germania One,Spicy Rice,STIX Two Text,Cantora One,Julee,Henny Penny,Codystar,Montserrat Subrayada,Pirata One,Artifika,Recursive,Atkinson Hyperlegible,Bellefair,Gafata,BioRhyme,Averia Sans Libre,Italiana,Noto Sans Malayalam,Proza Libre,Englebert,Rationale,Bilbo Swash Caps,Vesper Libre,Kosugi,Sunshiney,Emilys Candy,Fenix,Ledger,Sancreek,Aguafina Script,Monsieur La Doulaise,Battambang,Vibur,Rubik Bubbles,Delius Unicase,Harmattan,Bungee Shade,Baloo Chettan 2,Oxanium,Noto Sans Hebrew,Fresca,Life Savers,Spectral SC,Mirza,Sail,Nova Round,ZCOOL XiaoWei,Ranchers,Manjari,Galada,Cherry Swash,Dela Gothic One,Irish Grover,Tulpen One,Livvic,Antic Didone,Faster One,Encode Sans Semi Condensed,Engagement,Grandstander,Newsreader,Timmana,Flamenco,Medula One,MedievalSharp,Simonetta,Amarante,Sedgwick Ave,Caladea,Thasadith,BIZ UDPGothic,Dynalight,IM Fell French Canon,Redressed,Cormorant Upright,Ibarra Real Nova,Dorsa,Encode Sans Expanded,Aref Ruqaa,Sarpanch,Noto Serif Display,Gugi,IM Fell DW Pica SC,Arya,Baloo Tamma 2,Della Respira,Condiment,Rakkas,Baloo Da 2,League Script,Swanky and Moo Moo,Montaga,Trade Winds,B612,Material Symbols Sharp,Almendra,Elsie,Georama,Kiwi Maru,Hepta Slab,Asul,B612 Mono,League Gothic,Kavoon,Libre Bodoni,Tillana,IM Fell French Canon SC,Overlock SC,Vollkorn SC,Geologica,Bilbo,Mystery Quest,Sumana,Port Lligat Sans,Miltonian Tattoo,Junge,IM Fell Great Primer,Inknut Antiqua,Playfair,Rosarivo,Habibi,Mansalva,Stalemate,Eater,Londrina Outline,Alexandria,Grenze Gotisch,Donegal One,Tenali Ramakrishna,Turret Road,Goblin One,Bubbler One,Ruluko,Sonsie One,Lovers Quarrel,Paprika,Katibeh,Odibee Sans,Sofia Sans Condensed,Milonga,Vazirmatn,Trykker,Modak,IBM Plex Sans Thai,Atma,Stoke,Big Shoulders Text,Original Surfer,Baloo Bhaijaan 2,Snippet,Baloo Thambi 2,Noto Nastaliq Urdu,Peralta,Poor Story,Griffy,Bigshot One,Piedra,Coiny,IM Fell Great Primer SC,Monofett,Cagliostro,Pavanam,Vampiro One,KoHo,Rubik Moonrocks,Encode Sans Semi Expanded,Nova Flat,Farro,Nosifer,Nova Slim,Scope One,Hi Melody,Linden Hill,Text Me One,Nokora,Zen Old Mincho,Sofia Sans,Baloo Paaji 2,Fahkwang,Uncial Antiqua,Miniver,Inika,Brygada 1918,ZCOOL QingKe HuangYou,Ribeye,Mukta Mahee,Meera Inimai,Hanken Grotesk,Angkor,Chango,Jomhuria,Ma Shan Zheng,Stint Ultra Expanded,Inria Sans,Ruthie,M PLUS 1,Alumni Sans,Sarina,Croissant One,Chicle,Oldenburg,Caesar Dressing,Supermercado One,Shippori Mincho B1,Dokdo,Dekko,Major Mono Display,Galdeano,Averia Gruesa Libre,Wellfleet,Ranga,Modern Antiqua,IM Fell Double Pica SC,Sansita Swashed,Radio Canada,Allison,Notable,Smythe,Smokum,Revalia,Hanalei Fill,RocknRoll One,Iceberg,Offside,Kodchasan,Galindo,Akshar,Akronim,Lexend Zetta,Ramaraja,Bellota Text,Rum Raisin,Klee One,Suwannaphum,Golos Text,IBM Plex Sans KR,Tomorrow,Kenia,Pathway Extreme,Gaegu,New Rocker,Jolly Lodger,Mogra,Anuphan,Astloch,Sree Krushnadevaraya,Noto Serif Devanagari,Dongle,Saira Stencil One,Asset,Sura,Gorditas,Autour One,Macondo Swash Caps,Margarine,Lancelot,Style Script,Glass Antiqua,Atomic Age,Manuale,Cormorant Unicase,Noto Sans Telugu,Yusei Magic,Princess Sofia,Mina,Elsie Swash Caps,Trochut,Goldman,Eagle Lake,Zen Kaku Gothic Antique,Keania One,Lexend Exa,Jacques Francois Shadow,Farsan,Nova Oval,Freehand,Joti One,Red Rose,Nova Script,DotGothic16,Moul,Jacques Francois,Ribeye Marrow,Noto Sans Kannada,Wix Madefor Text,Hahmlet,Geostar Fill,Libre Barcode 39 Text,Noto Sans Sinhala,Song Myung,Bayon,Meie Script,Besley,Marko One,Zen Antique,Sirin Stencil,Gamja Flower,MuseoModerno,Londrina Shadow,Solway,Nerko One,Glory,Reggae One,Snowburst One,Metal Mania,Zilla Slab Highlight,Ewert,Andada Pro,Anek Malayalam,Charmonman,Ms Madi,Azeret Mono,Inria Serif,Miltonian,Libre Barcode 39 Extended Text,Anek Devanagari,Nova Cut,Baloo Tammudu 2,Chela One,Fascinate Inline,Oooh Baby,Passero One,M PLUS 2,Libre Caslon Display,Underdog,Asar,Gayathri,Kufam,Baloo Bhai 2,Odor Mean Chey,Libre Barcode 128,Baloo Bhaina 2,Rhodium Libre,Mrs Sheppards,Risque,Seymour One,Devonshire,Barrio,Chivo Mono,Ephesis,Diplomata,Plaster,Kumar One,Instrument Sans,Sofia Sans Extra Condensed,Kaisei Decol,Mochiy Pop One,Sulphur Point,Bokor,Zen Kurenaido,Federant,Lakki Reddy,Geostar,Felipa,Noto Sans Georgian,Aubrey,Aboreto,Chathura,Bellota,Sofadi One,Dr Sugiyama,Orelega One,ZCOOL KuaiLe,Jim Nightshade,Gotu,Sahitya,Syne Mono,Noto Sans Gujarati,Onest,Cute Font,Diplomata SC,Arbutus,Almendra SC,Unlock,Fascinate,Noto Sans Oriya,Romanesco,Yeon Sung,Stylish,Hurricane,East Sea Dokdo,Bigelow Rules,Purple Purse,Ravi Prakash,Bakbak One,Potta One,Emblema One,Srisakdi,Dangrek,Noto Serif Malayalam,Bricolage Grotesque,Shalimar,Comforter Brush,Sevillana,Gloock,Noto Sans Gurmukhi,Barriecito,Gabarito,Flavors,Viaoda Libre,Familjen Grotesk,Rampart One,Londrina Sketch,Akaya Telivigala,Varta,Butterfly Kids,Kulim Park,Qwitcher Grypen,Grape Nuts,BhuTuka Expanded One,Xanh Mono,Wix Madefor Display,Gowun Batang,Kavivanar,Agdasima,Piazzolla,Spline Sans,Combo,Noto Sans Symbols,Kaisei Tokumin,Fasthand,Scheherazade New,Sedgwick Ave Display,BIZ UDGothic,Jomolhari,Kaisei Opti,Metal,Gemunu Libre,Hachi Maru Pop,Gupter,Miss Fajardose,Butcherman,Noto Serif Thai,Gantari,Zen Dots,Bahiana,Stick,Girassol,Road Rage,BIZ UDPMincho,Libre Barcode 128 Text,Gluten,Chilanka,Taprom,Noto Sans Armenian,Rubik Dirt,Murecho,Grenze,Shantell Sans,Ruge Boogie,Kdam Thmor Pro,Sofia Sans Semi Condensed,Lexend Giga,Stalinist One,Birthstone,Preahvihear,Peddana,Erica One,Almendra Display,Young Serif,Hina Mincho,WindSong,Fuggles,Abyssinica SIL,Lexend Mega,Zen Antique Soft,Red Hat Mono,Gowun Dodum,Mr Bedfort,IBM Plex Sans JP,Beth Ellen,Corinthia,Flow Circular,Anek Telugu,Square Peg,Akaya Kanadaka,Bonbon,Bona Nova,Black And White Picture,Imbue,Whisper,Train One,Montagu Slab,Kirang Haerang,Fruktur,Anek Latin,Mochiy Pop P One,MonteCarlo,Bungee Outline,Liu Jian Mao Cao,Lexend Peta,Anek Tamil,Mohave,Bungee Hairline,Tiro Devanagari Hindi,Libre Barcode 39 Extended,Noto Sans Khmer,Instrument Serif,REM,Karantina,Noto Sans NKo Unjoined,Zhi Mang Xing,Fragment Mono,Warnes,Gidugu,Anybody,Shippori Antique,Smooch,Kumar One Outline,Licorice,Moulpali,IBM Plex Sans Thai Looped,Arima,Noto Sans Meetei Mayek,Tiro Kannada,Noto Sans Lao Looped,Yomogi,Martian Mono,Long Cang,Tilt Warp,ADLaM Display,Vibes,Monomaniac One,Comforter,Yuji Syuku,Anek Bangla,Praise,Trispace,Hanalei,Fuzzy Bubbles,Noto Serif Hebrew,Vina Sans,Moon Dance,Bahianita,Caprasimo,Vujahday Script,Big Shoulders Stencil Display,Noto Sans Mandaic,Festive,New Tegomin,Texturina,Tilt Neon,Noto Serif Georgian,Alkalami,Yaldevi,IBM Plex Sans Devanagari,M PLUS 1 Code,Kaisei HarunoUmi,Dhurjati,Edu SA Beginner,IBM Plex Sans Hebrew,Charis SIL,Meow Script,Carattere,Big Shoulders Stencil Text,Tiro Bangla,Sono,Birthstone Bounce,Benne,Suravaram,Kantumruy Pro,Stick No Bills,Alkatra,The Nautigal,Lexend Tera,BioRhyme Expanded,Noto Sans Lao,Spline Sans Mono,Waterfall,Smooch Sans,Passions Conflict,Noto Serif HK,Beau Rivage,Lacquer,Encode Sans SC,Tourney,Pixelify Sans,Tilt Prism,Bruno Ace SC,Poltawski Nowy,Inspiration,Noto Serif Telugu,Genos,Shippori Antique B1,Delicious Handrawn,Joan,Qahiri,Noto Sans Gothic,Truculenta,Koh Santepheap,Tektur,Bungee Spice,Gulzar,Noto Serif Kannada,Noto Sans Anatolian Hieroglyphs,Zen Tokyo Zoo,Noto Sans Ethiopic,AR One Sans,BIZ UDMincho,Noto Sans Symbols 2,Carlito,Redacted,Edu TAS Beginner,Akatab,Nuosu SIL,Noto Sans Thai Looped,Water Brush,Playpen Sans,DynaPuff,Anek Gujarati,Big Shoulders Inline Text,Gentium Plus,Langar,Bonheur Royale,Aoboshi One,Belanosima,Finlandica,Noto Serif Khmer,Marhey,Ysabeau Office,Ballet,Alumni Sans Inline One,Gwendolyn,Imperial Script,Luxurious Script,Tiro Devanagari Marathi,Noto Serif Armenian,Rubik Glitch,Zen Loop,Amiri Quran,Gentium Book Plus,Diphylleia,Noto Sans Buhid,Tiro Gurmukhi,Phudu,Edu NSW ACT Foundation,Solitreo,Mea Culpa,Lavishly Yours,Neonderthaw,Braah One,Hubballi,Syne Tactile,Noto Serif Khojki,Anek Kannada,Alumni Sans Collegiate One,Gideon Roman,Anek Gurmukhi,Noto Serif Tamil,Rubik Beastly,Libre Barcode EAN13 Text,Tiro Devanagari Sanskrit,Noto Sans Samaritan,Noto Sans Tai Viet,Noto Sans Adlam,Uchen,Edu VIC WA NT Beginner,Updock,Noto Serif Gujarati,Labrada,Caramel,Ysabeau,Climate Crisis,Noto Sans Tamil Supplement,Mynerve,Noto Serif Lao,Babylonica,Noto Music,Borel,Big Shoulders Inline Display,Rubik Wet Paint,Noto Serif Sinhala,Handjet,Rubik Distressed,Luxurious Roman,Palette Mosaic,Tai Heritage Pro,Island Moments,Rubik Iso,Tiro Telugu,Ysabeau Infant,Yuji Boku,Flow Block,Fleur De Leah,Mooli,Noto Sans Glagolitic,Cairo Play,Gasoek One,Blaka,Oi,Grechen Fuemen,Petemoss,Sassy Frass,Reem Kufi Fun,Cherry Bomb One,Ysabeau SC,Comme,Nabla,Darumadrop One,Anek Odia,Rubik Microbe,Noto Sans Javanese,Redacted Script,Aref Ruqaa Ink,Noto Sans Osmanya,Yuji Mai,Love Light,Foldit,Lumanosimo,Victor Mono,Shizuru,Send Flowers,Alumni Sans Pinstripe,Lugrasimo,Noto Serif Balinese,My Soul,Noto Sans Syloti Nagri,Kolker Brush,Tiro Tamil,Rubik Vinyl,Castoro Titling,Noto Sans Mongolian,Explora,Grey Qo,Konkhmer Sleokchher,Rock 3D,Noto Sans Hanunoo,Mingzat,Reem Kufi Ink,Sometype Mono,Tapestry,Noto Rashi Hebrew,Are You Serious,Splash,Bacasime Antique,Rubik Marker Hatch,Edu QLD Beginner,Rubik Puddles,Sigmar,Noto Sans Coptic,Inclusive Sans,Noto Serif Tibetan,Noto Serif Vithkuqi,Noto Sans Tangsa,Estonia,Twinkle Star,Bagel Fat One,Cherish,Noto Sans Limbu,Noto Sans Avestan,Bruno Ace,Noto Sans Adlam Unjoined,Rubik 80s Fade,Noto Sans Lepcha,Flow Rounded,Noto Serif Ethiopic,Kablammo,Noto Serif Tangut,Noto Sans Tagalog,M PLUS Code Latin,Tsukimi Rounded,Moirai One,Blaka Hollow,Moo Lah Lah,Noto Sans Cherokee,Noto Sans Linear B,Noto Sans Carian,Ole,Rubik Spray Paint,Noto Sans Chorasmian,Yuji Hentaigana Akari,Kings,Orbit,Noto Serif NP Hmong,Noto Sans Egyptian Hieroglyphs,Rubik Pixels,Dai Banna SIL,Noto Sans Warang Citi,Noto Serif Ahom,Ruwudu,Noto Sans Miao,Noto Sans Nandinagari,Noto Sans Sora Sompeng,Noto Sans Canadian Aboriginal,Rubik Burned,Noto Sans Deseret,Noto Sans Thaana,Noto Serif Oriya,Slackside One,Gajraj One,Noto Sans Multani,Noto Sans Vai,Noto Sans Balinese,Noto Sans Indic Siyaq Numbers,Noto Serif Toto,Puppies Play,Noto Sans Zanabazar Square,Lunasima,Noto Traditional Nushu,Rubik Gemstones,Grandiflora One,Noto Sans Imperial Aramaic,Noto Sans Pahawh Hmong,Noto Sans Cham,Noto Sans Old Hungarian,Noto Sans Old Italic,Noto Serif Khitan Small Script,Noto Sans Linear A,Noto Sans Nag Mundari,Noto Sans Cypro Minoan,Noto Sans Bamum,Noto Sans Sharada,Noto Sans Tifinagh,Noto Sans Tai Le,Noto Sans Wancho,Noto Sans Sogdian,Ingrid Darling,Noto Sans Khojki,Noto Sans Sundanese,Rubik Storm,Lisu Bosa,Yuji Hentaigana Akebono,Noto Sans Tirhuta,Noto Sans Shavian,Noto Sans Old Permic,Noto Sans Old Persian,Noto Sans Nabataean,Noto Sans Mahajani,Noto Serif Yezidi,Noto Sans Tagbanwa,Noto Serif Ottoman Siyaq,Noto Sans Chakma,Noto Sans Vithkuqi,Rubik Maze,Noto Sans Old South Arabian,Noto Sans Marchen,Blaka Ink,Noto Sans Brahmi,Noto Sans Bassa Vah,Padyakke Expanded One,Noto Sans Batak,Noto Sans Old Turkic,Noto Serif Makasar,Noto Sans Cuneiform,Narnoor,Wavefont,Noto Sans NKo,Noto Serif Gurmukhi,Noto Sans Kaithi,Noto Sans Tai Tham,Noto Sans Ol Chiki,Noto Sans Old North Arabian,Noto Sans Yi,Noto Sans Masaram Gondi,Noto Sans Mende Kikakui,Noto Sans Saurashtra,Noto Sans Medefaidrin,Noto Sans Mro,Noto Sans Siddham,Noto Sans Kayah Li,Noto Serif Grantha,Noto Sans Inscriptional Pahlavi,Noto Sans Osage,Noto Sans New Tai Lue,Noto Sans Lisu,Noto Sans Grantha,Noto Sans Duployan,Noto Sans Takri,Noto Sans Buginese,Noto Sans Lydian,Noto Sans Inscriptional Parthian,Noto Sans SignWriting,Noto Sans Psalter Pahlavi,Noto Sans Pau Cin Hau,Noto Sans Ugaritic,Noto Sans Mayan Numerals,Noto Sans Palmyrene,Noto Serif Dogra,Noto Sans Newa,Noto Sans Khudawadi,Noto Sans Meroitic,Noto Sans Nushu,Noto Sans Hanifi Rohingya,Noto Sans Bhaiksuki,Noto Sans Ogham,Noto Sans Soyombo,Noto Sans Rejang,Noto Sans Modi,Noto Sans Syriac,Noto Sans Runic,Noto Sans Gunjala Gondi,Noto Sans Syriac Eastern,Noto Sans Hatran,Noto Sans Elbasan,Chokokutai,Noto Sans Phoenician,Noto Sans Old Sogdian,Noto Sans Kharoshthi,Noto Sans Manichaean'.split(',');

        this.container = document.querySelector(selector);
        this.popularity = [...fontNames];
        this.fontNames = fontNames.sort();
        this.callback = callback; // Callback function for font selection
        this.imagesPath = imagesPath || '../images/';
        this.popularityThreshold = popularityThreshold;
        this.selectedFont = 'Select a font';
        this.init();
    }

    init() {
        this.createDropdown();
        this.populateOptions();
        this.setupEvents();
    }

    createDropdown() {
        this.container.innerHTML = `
            <div class="google-font-preview-dropdown">
                <div class="font-dropdown">
                    <div class="selected-font">
                        <span class="selected-font-display">${this.selectedFont}</span>
                        <span class="dropdown-caret"></span>
                    </div>
                    <div class="font-options">
                        <input type="text" class="font-search-input" placeholder="Search fonts...">
                    </div>
                </div>
                <div class="font-preview"></div>
            </div>
        `;
        this.fontOptions = this.container.querySelector('.font-options');
        this.selectedFontDisplay = this.container.querySelector('.selected-font-display');
        this.searchInput = this.container.querySelector('.font-search-input');
        this.previewDiv = this.container.querySelector('.font-preview');

        const style = document.createElement('style');

        const css = `.google-font-preview-dropdown {
position: relative;
min-width: 300px;
width: 300px;
font-family: sans-serif;
}
.google-font-preview-dropdown .font-dropdown {
border: 1px solid #ccc;
border-radius: 4px;
padding: 10px;
cursor: pointer;
background-color: #fff;
position: relative;
width: 320px;
}
.google-font-preview-dropdown .selected-font {
font-family: sans-serif;
display: flex;
justify-content: space-between;
align-items: center;
}
.google-font-preview-dropdown .font-options {
display: none;
position: absolute;
top: 100%;
left: 0;
right: 0;
border: 1px solid #ccc;
border-radius: 4px;
background-color: #fff;
z-index: 1000;
max-height: 50vh;
overflow: scroll;
}
.google-font-preview-dropdown .font-options > div {
padding: 10px;
display: flex;
align-items: center;
}
.google-font-preview-dropdown .font-options > div > img {
width: 320px;
height: auto;
margin-right: 10px;
}
.google-font-preview-dropdown .font-options div:hover {
background: #f0f0f0;
}
.google-font-preview-dropdown .font-preview {
margin-top: 20px;
height: 40px;
}
.google-font-preview-dropdown .font-preview img {
width: 320px;
height: auto;
}
.google-font-preview-dropdown .dropdown-caret {
width: 0;
height: 0;
border-left: 5px solid transparent;
border-right: 5px solid transparent;
border-top: 5px solid #000;
margin-left: 10px;
}
.google-font-preview-dropdown .font-search-input {
padding: 10px;
border: 1px solid #ccc;
border-radius: 4px;
width: calc(100% - 22px);
margin-bottom: 5px;
}`;

        style.innerHTML = css;
        document.head.appendChild(style);
    }

    populateOptions() {
        this.fontNames.forEach(fontName => {
            if (this.popularity.indexOf(fontName) < this.popularityThreshold && !fontName.toLowerCase().includes('icon')) {
                const option = document.createElement('div');
                const imagePath = `${this.imagesPath}${fontName.replace(/ /g, '_')}.png`;

                option.innerHTML = `<img src="${imagePath}" alt="${fontName}" loading="lazy" onerror="this.parentElement.remove();">`;
                option.setAttribute('data-font-name', fontName);

                option.onclick = (e) => {
                    e.stopPropagation();
                    this.selectedFontDisplay.textContent = fontName;
                    this.fontOptions.style.display = 'none';

                    const fontCssUrl = `https://fonts.googleapis.com/css2?family=${fontName.replace(/ /g, '+')}&display=swap`;

                    // Call the callback function with the selected font and image path
                    if (this.callback) {
                        this.callback(fontName, fontCssUrl, imagePath);
                    }
                };

                this.fontOptions.appendChild(option);
            }
        });
    }

    setupEvents() {
        const dropdown = this.container.querySelector('.font-dropdown');

        dropdown.onclick = (e) => {
            this.fontOptions.style.display = this.fontOptions.style.display === 'block' ? 'none' : 'block';
            this.searchInput.focus();
        };

        this.searchInput.addEventListener('input', () => {
            const searchTerm = this.searchInput.value.toLowerCase();
            const options = this.fontOptions.querySelectorAll('div');

            options.forEach(option => {
                const fontName = option.getAttribute('data-font-name').toLowerCase();
                option.style.display = fontName.includes(searchTerm) ? 'flex' : 'none';
            });
        });

        window.onclick = (event) => {
            if (!dropdown.contains(event.target)) {
                this.fontOptions.style.display = 'none';
            }
        };
    }
}

// Export the library if using modules
if (typeof module !== 'undefined') {
    module.exports = FontPreviewDropdown;
}
