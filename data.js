// terroir.guide — wine data
// All content lives here. Update this file to add regions, producers, grapes, pairings.
// Structure: REGIONS → APPELLATIONS → PRODUCERS → WINES

const TERROIR = {

  meta: {
    name: "terroir.guide",
    tagline: "A field guide to French wine",
    version: "1.1.0",
    updated: "2025"
  },

  // ─── REGIONS ────────────────────────────────────────────────────────────────
  regions: {

    champagne: {
      id: "champagne",
      name: "Champagne",
      style: "Sparkling",
      color: "#6d63c8",
      lon: 4.1, lat: 48.75,
      summary: "The world's most celebrated sparkling wine, produced exclusively by méthode champenoise on chalk subsoil northeast of Paris. Three grapes — Pinot Noir, Chardonnay, Pinot Meunier — blended across vintages to maintain house style.",
      climate: "Cool continental. The northernmost major wine region in France, perpetually on the edge of ripening — which produces the high acidity essential for great sparkling wine.",
      soils: "Pure Belemnite chalk (Côte des Blancs), Micraster chalk and clay (Montagne de Reims), clay-limestone (Vallée de la Marne). Chalk stores water and reflects heat, regulating vine stress.",
      grapes: ["chardonnay", "pinot_noir", "pinot_meunier"],
      appellations: ["champagne_aoc", "coteaux_champenois", "ratafia"],
      pairings: ["oysters", "sushi", "smoked salmon", "soft cheese", "fried food", "risotto", "caviar", "lobster"],
      vintages: {
        "2019": { rating: 95, notes: "Rich, generous, excellent ripeness. Drink 2024–2040." },
        "2018": { rating: 94, notes: "Warm year, full-bodied style. Drink 2024–2038." },
        "2016": { rating: 96, notes: "Classic, precise, age-worthy. Drink 2024–2045." },
        "2015": { rating: 93, notes: "Rich and opulent. Drink now–2035." },
        "2013": { rating: 92, notes: "Elegant, lean, needs time. Drink 2026–2040." },
        "2012": { rating: 97, notes: "One of the decade's best. Drink 2024–2050." }
      },
      producers: ["egly_ouriet", "pierre_peters", "bereche", "chartogne_taillet", "laherte"]
    },

    alsace: {
      id: "alsace",
      name: "Alsace",
      style: "Aromatic whites",
      color: "#c45a2a",
      lon: 7.4, lat: 48.2,
      summary: "A narrow corridor east of the Vosges mountains — France's driest wine region. Uniquely, wines are labeled by grape variety rather than appellation. Riesling, Gewurztraminer, Pinot Gris, Muscat, Sylvaner, Pinot Blanc.",
      climate: "Semi-continental, rain shadow of the Vosges makes this France's driest wine region. Long warm summers, cold winters. The extended growing season develops intense aromatics.",
      soils: "Extraordinary diversity: granite, volcanic, limestone, clay, sandstone, gneiss. The 51 Grand Cru sites each have distinct geology that expresses through the wine.",
      grapes: ["riesling", "gewurztraminer", "pinot_gris", "muscat", "sylvaner", "pinot_blanc", "pinot_noir"],
      appellations: ["alsace_aoc", "alsace_grand_cru", "cremant_alsace", "vendanges_tardives", "sgn"],
      pairings: ["choucroute", "foie gras", "thai food", "munster cheese", "tarte flambée", "mild curry", "smoked fish", "charcuterie"],
      vintages: {
        "2021": { rating: 93, notes: "Elegant, fresh, excellent Riesling year. Drink 2024–2038." },
        "2019": { rating: 95, notes: "Rich and aromatic, great Gewurz. Drink 2024–2035." },
        "2018": { rating: 94, notes: "Powerful, ripe. Drink now–2032." },
        "2017": { rating: 92, notes: "Classic balance. Drink 2024–2030." },
        "2015": { rating: 96, notes: "Exceptional ripeness, VT/SGN outstanding. Drink 2024–2045." }
      },
      producers: ["josmeyer", "ostertag", "bott_geyl", "jean_paul_schmitt", "weinbach"]
    },

    loire: {
      id: "loire",
      name: "Loire Valley",
      style: "Whites · Reds · Rosé",
      color: "#1a8c68",
      lon: 0.2, lat: 47.0,
      summary: "France's longest river (1,006 km) spans maritime to continental climates. Chenin Blanc dominates the centre, Sauvignon Blanc in the east, Cabernet Franc for reds, and Melon de Bourgogne at the Atlantic mouth.",
      climate: "Varies dramatically west to east. Muscadet sees Atlantic influence (cool, wet). Touraine/Anjou is temperate. Sancerre/Pouilly-Fumé is semi-continental with cold winters.",
      soils: "Muscadet: gneiss and granite (Sèvre et Maine). Anjou: schist, spilite. Touraine: tufa limestone (tuffeau). Sancerre: Kimmeridgian limestone and clay (silex).",
      grapes: ["chenin_blanc", "sauvignon_blanc", "cabernet_franc", "melon_de_bourgogne", "muscadet", "gamay", "pinot_noir"],
      appellations: ["sancerre", "pouilly_fume", "vouvray", "muscadet", "chinon", "bourgueil", "anjou", "savennieres", "quarts_de_chaume", "bonnezeaux", "cremant_de_loire"],
      pairings: ["goat cheese", "mussels", "asparagus", "rillettes", "pike", "salmon", "chicken", "charcuterie"],
      vintages: {
        "2022": { rating: 95, notes: "Outstanding Chenin year, rich and pure. Drink 2025–2045." },
        "2020": { rating: 93, notes: "Warm, ripe reds. Whites lush. Drink 2024–2035." },
        "2019": { rating: 94, notes: "Excellent balance. Drink 2024–2038." },
        "2018": { rating: 96, notes: "Historic Sancerre vintage. Drink 2024–2040." },
        "2017": { rating: 90, notes: "Frost damage reduced yields, concentrated. Drink 2024–2030." }
      },
      producers: ["huet", "clos_rougeard", "baumard", "marionnet", "luneau_papin"]
    },

    burgundy: {
      id: "burgundy",
      name: "Burgundy",
      style: "Pinot Noir · Chardonnay",
      color: "#a8680f",
      lon: 4.4, lat: 47.4,
      summary: "The most terroir-obsessed wine region on earth. Only two grapes — Pinot Noir for reds, Chardonnay for whites — yet expressed across hundreds of named lieux-dits. The grand cru / premier cru hierarchy originated here.",
      climate: "Continental with Burgundian nuance. Cold winters, warm summers, but subject to spring frost and harvest hail. The Côte d'Or's east-facing slope catches morning sun and afternoon shade — the ideal aspect for Pinot Noir.",
      soils: "Limestone-marl-clay on the Côte d'Or. Chablis: pure Kimmeridgian limestone (fossilised oyster shells). Mâconnais: limestone. Each village-level appellation has distinct geology.",
      grapes: ["pinot_noir", "chardonnay", "aligote", "gamay"],
      appellations: ["chablis", "chablis_grand_cru", "gevrey_chambertin", "chambolle_musigny", "vosne_romanee", "nuits_saint_georges", "meursault", "puligny_montrachet", "chassagne_montrachet", "pommard", "volnay", "saint_aubin", "macon_villages", "pouilly_fuisse"],
      pairings: ["boeuf bourguignon", "coq au vin", "roast duck", "lobster", "époisses", "oysters", "mushrooms", "truffle", "veal"],
      vintages: {
        "2023": { rating: 94, notes: "Elegant and fresh. Outstanding Chablis. Drink 2026–2040." },
        "2022": { rating: 97, notes: "Possibly the vintage of the decade. Rich, pure. Drink 2027–2055." },
        "2021": { rating: 88, notes: "Small crop from frost. Elegant but lean. Drink 2024–2035." },
        "2020": { rating: 95, notes: "Superb ripeness, great balance. Drink 2025–2048." },
        "2019": { rating: 96, notes: "Rich, generous, exceptional. Drink 2025–2050." },
        "2018": { rating: 93, notes: "Warm year, opulent whites. Drink 2024–2040." }
      },
      producers: ["barthod", "fourrier", "roulot", "simon_bize", "rijckaert"]
    },

    beaujolais: {
      id: "beaujolais",
      name: "Beaujolais",
      style: "Gamay",
      color: "#b84870",
      lon: 4.5, lat: 46.1,
      summary: "South of Burgundy on granite and schist soils. Single grape: Gamay. The ten named Crus — a world away from Nouveau — can age 10–20 years and develop complex truffle and earth notes.",
      climate: "Semi-continental, warmer and drier than Burgundy. Granite soils drain freely, preventing waterlogging. The northern Cru villages sit on more complex geology.",
      soils: "Granite and schist in the northern Crus (Morgon, Moulin-à-Vent, Fleurie). Clay-granite in the south. Morgon's 'rotten rock' (gabbro) gives the wine its distinctive earthy depth.",
      grapes: ["gamay"],
      appellations: ["beaujolais_aoc", "beaujolais_villages", "morgon", "moulin_a_vent", "fleurie", "brouilly", "cote_de_brouilly", "chiroubles", "regnie", "chenas", "julienas", "saint_amour"],
      pairings: ["charcuterie", "roast chicken", "grilled salmon", "bresse poultry", "pizza", "cheeseburger", "mushrooms"],
      vintages: {
        "2022": { rating: 95, notes: "Exceptional year. Crus can age 15+ years. Drink 2025–2040." },
        "2021": { rating: 91, notes: "Elegant, fresh style. Drink 2024–2032." },
        "2020": { rating: 94, notes: "Rich, deep, classic Morgon. Drink 2024–2035." },
        "2019": { rating: 93, notes: "Ripe and generous. Drink now–2030." },
        "2018": { rating: 92, notes: "Warm year, structured. Drink now–2028." }
      },
      producers: ["lapierre", "foillard", "yvon_metras", "chateau_thivin", "dupeuble"]
    },

    bordeaux: {
      id: "bordeaux",
      name: "Bordeaux",
      style: "Cab · Merlot blends",
      color: "#922222",
      lon: -0.4, lat: 44.9,
      summary: "The world's most famous wine region, straddling the Gironde estuary. Gravelly Left Bank (Cabernet Sauvignon dominant) contrasts with clay-limestone Right Bank (Merlot dominant). Also produces world-class dry whites and Sauternes.",
      climate: "Maritime, temperate. The Atlantic moderates extremes. However, spring frost (1991, 2017) and summer drought (2003) create vintage variation. The Gironde estuary acts as a heat reservoir.",
      soils: "Left Bank (Médoc/Graves): gravel and sand over clay — drains fast, forces vines deep. Right Bank (St-Émilion/Pomerol): clay-limestone and clay — retains moisture, suits Merlot. Sauternes: clay-gravel, morning mists promote botrytis.",
      grapes: ["cabernet_sauvignon", "merlot", "cabernet_franc", "petit_verdot", "malbec", "sauvignon_blanc", "semillon"],
      appellations: ["pauillac", "margaux", "saint_julien", "saint_estephe", "pessac_leognan", "graves", "saint_emilion", "pomerol", "fronsac", "castillon", "sauternes", "barsac", "entre_deux_mers"],
      pairings: ["rack of lamb", "côte de boeuf", "duck confit", "aged cheddar", "foie gras", "roquefort", "venison", "truffle"],
      vintages: {
        "2022": { rating: 98, notes: "Century vintage. Perfect balance. Drink 2030–2070." },
        "2021": { rating: 91, notes: "Classic, elegant. Good value. Drink 2026–2045." },
        "2020": { rating: 97, notes: "Exceptional across all appellations. Drink 2028–2060." },
        "2019": { rating: 96, notes: "Great ripeness and freshness. Drink 2027–2055." },
        "2018": { rating: 97, notes: "Powerful and structured. Drink 2028–2060." },
        "2016": { rating: 98, notes: "Classic Left Bank vintage. Drink 2028–2065." }
      },
      producers: ["aiguilhe", "la_dauphine", "clos_jaugueyron", "falfas", "thieuley"]
    },

    rhone: {
      id: "rhone",
      name: "Rhône Valley",
      style: "Syrah · Grenache",
      color: "#4a40a8",
      lon: 4.75, lat: 44.85,
      summary: "Two very different regions share one name. Northern Rhône: steep granite terraces, cool, Syrah only — peppery, violet, smoky. Southern Rhône: broad hot plains, Grenache-dominant blends — warm, herbal, garrigue.",
      climate: "Northern: continental with cold mistral winds, steep slopes concentrate heat. Southern: Mediterranean — hot dry summers, the mistral desiccates grapes and prevents rot, enabling very ripe fruit.",
      soils: "Northern: decomposed granite (Côte-Rôtie), granite and gneiss (Hermitage), decomposed granite (Cornas). Southern: large galets roulés (river stones) at Châteauneuf, sand and clay at Gigondas.",
      grapes: ["syrah", "grenache", "mourvedre", "viognier", "roussanne", "marsanne", "cinsault", "counoise"],
      appellations: ["cote_rotie", "condrieu", "chateau_grillet", "saint_joseph", "hermitage", "crozes_hermitage", "cornas", "saint_peray", "chateauneuf_du_pape", "gigondas", "vacqueyras", "lirac", "tavel", "rasteau", "beaumes_de_venise"],
      pairings: ["grilled lamb", "venison", "cassoulet", "truffle", "scallops", "tapenade", "wild boar", "daube"],
      vintages: {
        "2022": { rating: 96, notes: "Superb across north and south. Drink 2026–2050." },
        "2020": { rating: 95, notes: "Classic vintage, great balance. Drink 2025–2045." },
        "2019": { rating: 97, notes: "Outstanding, especially Hermitage. Drink 2026–2055." },
        "2017": { rating: 93, notes: "Fresh and elegant. Drink 2024–2038." },
        "2016": { rating: 95, notes: "Excellent northern Rhône. Drink 2025–2045." }
      },
      producers: ["allemand", "gonon", "graillot", "vieux_telegraphe", "gramenon"]
    },

    provence: {
      id: "provence",
      name: "Provence",
      style: "Rosé · Mediterranean",
      color: "#0d6048",
      lon: 6.0, lat: 43.7,
      summary: "France's oldest wine region — Greek settlers planted vines near Marseille around 600 BC. Produces 40% of all French rosé. Hot, dry Mediterranean climate moderated by the Mistral.",
      climate: "True Mediterranean: hot dry summers, mild winters, strong Mistral wind from the north. The Mistral desiccates grapes, reducing disease pressure and concentrating flavours. Over 3,000 hours of sunshine per year.",
      soils: "Calcareous limestone (Bandol, Cassis), schist and gneiss (Les Baux), clay-limestone (Coteaux d'Aix), crystalline schist (Palette). Diversity drives Provence's range of styles.",
      grapes: ["grenache", "cinsault", "mourvedre", "tibouren", "vermentino", "ugni_blanc", "clairette"],
      appellations: ["cotes_de_provence", "bandol", "cassis", "les_baux", "coteaux_aix", "palette", "coteaux_varois", "pierrevert"],
      pairings: ["bouillabaisse", "grilled fish", "ratatouille", "salade niçoise", "lamb", "charcuterie", "anchoïade", "tapenade"],
      vintages: {
        "2022": { rating: 94, notes: "Outstanding Bandol. Drink rosé now, reds 2026–2040." },
        "2021": { rating: 91, notes: "Fresh and elegant rosé. Drink now." },
        "2020": { rating: 95, notes: "Bandol rouge exceptional. Drink reds 2025–2042." },
        "2019": { rating: 93, notes: "Rich year. Drink 2024–2038." },
        "2018": { rating: 94, notes: "Classic vintage. Drink now–2036." }
      },
      producers: ["tempier", "chateau_simone", "clos_cibonne", "begude", "richeaume"]
    },

    languedoc: {
      id: "languedoc",
      name: "Languedoc-Roussillon",
      style: "Value · Variety",
      color: "#8c3415",
      lon: 2.5, lat: 43.3,
      summary: "France's largest wine region by volume — a vast Mediterranean arc from the Rhône delta to the Spanish border. The most diverse region: Syrah, Grenache, Mourvèdre, Carignan, Picpoul. Quality rising sharply.",
      climate: "Mediterranean, hot and dry. Garrigue — scrubland of rosemary, thyme, lavender — imparts herbal notes to wines. Inland areas (Pic Saint-Loup, Terrasses du Larzac) are cooler, adding freshness.",
      soils: "Schist (Faugères, Roussillon), limestone (La Clape, Pic Saint-Loup), clay-limestone (Minervois), sand (coastal Picpoul). The Terrasses du Larzac is notable for its calcaire lacustre (lacustrine limestone).",
      grapes: ["grenache", "syrah", "mourvedre", "carignan", "cinsault", "picpoul", "roussanne", "viognier", "muscat"],
      appellations: ["picpoul_de_pinet", "faugeres", "saint_chinian", "corbieres", "minervois", "la_clape", "fitou", "pic_saint_loup", "terrasses_du_larzac", "banyuls", "rivesaltes", "maury"],
      pairings: ["oysters", "grilled merguez", "tapas", "aioli", "brandade", "chocolate", "magret de canard"],
      vintages: {
        "2022": { rating: 94, notes: "Excellent across the region. Drink 2024–2038." },
        "2021": { rating: 90, notes: "Fresh, aromatic. Drink now–2030." },
        "2020": { rating: 93, notes: "Rich and concentrated. Drink 2024–2035." },
        "2019": { rating: 92, notes: "Good ripeness and balance. Drink now–2032." }
      },
      producers: ["grange_des_peres", "mas_jullien", "leon_barral", "clos_marie", "cal_demoura"]
    },

    sw: {
      id: "sw",
      name: "South-West",
      style: "Indigenous grapes",
      color: "#558818",
      lon: -0.3, lat: 43.9,
      summary: "France's most varied region in terms of grape varieties — many found nowhere else on earth. Malbec (original home: Cahors), Tannat (Madiran), Petit Manseng (Jurançon), Négrette (Fronton).",
      climate: "Atlantic-influenced in the west (Bergerac, Marmandais), becoming more continental inland (Cahors, Gaillac). Jurançon and Irouléguy are influenced by the Pyrenees — cool nights, warm days.",
      soils: "Cahors: Kimmeridgian limestone on the causses plateau, with alluvial terraces. Madiran: clay, gravel, limestone. Jurançon: steep schist and clay slopes in the Pyrenean foothills.",
      grapes: ["malbec", "tannat", "petit_manseng", "gros_manseng", "negrette", "fer_servadou", "cabernet_franc", "duras"],
      appellations: ["cahors", "madiran", "jurançon", "bergerac", "pecharmant", "monbazillac", "irouleguy", "gaillac", "fronton", "marcillac", "pacherenc"],
      pairings: ["cassoulet", "confit de canard", "roquefort", "charcuterie basque", "garbure", "magret", "black pig"],
      vintages: {
        "2022": { rating: 95, notes: "Excellent Cahors and Madiran. Drink 2026–2042." },
        "2020": { rating: 93, notes: "Great depth. Drink 2024–2038." },
        "2019": { rating: 94, notes: "Classic vintage, rich. Drink 2024–2040." },
        "2018": { rating: 92, notes: "Warm year, opulent. Drink now–2034." }
      },
      producers: ["clos_triguedina", "clos_uroulat", "brumont", "elian_da_ros", "cauhaupe"]
    },

    jura: {
      id: "jura",
      name: "Jura & Savoie",
      style: "Alpine · Oxidative",
      color: "#2878c8",
      lon: 6.1, lat: 46.9,
      summary: "Two small, dramatically different Alpine regions. Jura: limestone slopes producing oxidative Vin Jaune from Savagnin, plus Trousseau and Poulsard. Savoie: steep glacier-carved terraces with Jacquère and Altesse.",
      climate: "Jura: continental, cold winters, warm summers. The plateau's altitude (250–500m) gives freshness. Savoie: Alpine, very cold winters, warm summers. High altitude sites (up to 700m) produce France's most mineral whites.",
      soils: "Jura: blue and grey marl, limestone, lias. The blue marl of Poulsard vineyards is unique in France. Savoie: glacial moraines, limestone, schist — often very steep and terraced.",
      grapes: ["savagnin", "chardonnay", "poulsard", "trousseau", "pinot_noir", "jacquere", "altesse", "mondeuse"],
      appellations: ["arbois", "cotes_du_jura", "chateau_chalon", "letoile", "vin_jaune", "vin_de_paille", "macvin", "cremant_du_jura", "vin_de_savoie", "roussette_de_savoie", "crepy", "seyssel", "bugey"],
      pairings: ["comté", "morilles", "fondue", "raclette", "charcuterie montagnarde", "perch", "pike"],
      vintages: {
        "2022": { rating: 95, notes: "Superb Vin Jaune. Drink 2030–2070." },
        "2021": { rating: 91, notes: "Classic, precise. Drink 2025–2040." },
        "2020": { rating: 94, notes: "Rich and complex. Drink 2026–2050." },
        "2019": { rating: 93, notes: "Excellent balance. Drink 2025–2045." }
      },
      producers: ["ganevat", "tissot", "renardiere", "ardoisieres", "dupasquier"]
    }
  },

  // ─── PRODUCERS ──────────────────────────────────────────────────────────────
  producers: {

    egly_ouriet: {
      id: "egly_ouriet",
      name: "Egly-Ouriet",
      region: "champagne",
      village: "Ambonnay, Verzy",
      type: "Grower (RM)",
      farming: "Lutte raisonnée",
      founded: 1985,
      winemaker: "Francis Egly",
      bio: "Francis Egly is one of Champagne's most celebrated grower-producers. Based in Ambonnay — a grand cru village on the Montagne de Reims known for exceptional Pinot Noir — he farms 9 hectares and produces wines of extraordinary depth. His philosophy: long ageing on lees (5+ years for the vintage wines), zero dosage or très brut, and no fining. The result is Champagne that ages like great Burgundy.",
      hectares: 9,
      price_tier: "€€€",
      wines: [
        { name: "Brut Tradition", grapes: ["Pinot Noir 80%", "Chardonnay 20%"], notes: "Brioche, red fruit, chalk. Dense and textured for a non-vintage.", drinking: "Now–2030", price: "€55–70" },
        { name: "Blanc de Noirs V.P.", grapes: ["Pinot Noir 100%"], notes: "Pure Ambonnay Pinot: wild strawberry, mushroom, extraordinary tension.", drinking: "2025–2038", price: "€100–130" },
        { name: "Millésimé 2016", grapes: ["Pinot Noir 80%", "Chardonnay 20%"], notes: "One of the finest Champagnes of the decade. Mushroom, hawthorn, crushed chalk. Needs time.", drinking: "2026–2050", price: "€160–200" }
      ]
    },

    pierre_peters: {
      id: "pierre_peters",
      name: "Pierre Péters",
      region: "champagne",
      village: "Le Mesnil-sur-Oger",
      type: "Grower (RM)",
      farming: "Lutte raisonnée",
      founded: 1944,
      winemaker: "Rodolphe Péters",
      bio: "Based in Le Mesnil-sur-Oger — arguably the world's greatest Chardonnay terroir — Pierre Péters crafts blanc de blancs of crystalline purity. The Péters family has farmed here since 1919; Rodolphe now leads. The house style is mineral, saline, austere in youth but revelatory with age. Their single-vineyard 'Clos du Mesnil' parcels are among Champagne's most coveted.",
      hectares: 19,
      price_tier: "€€€",
      wines: [
        { name: "Cuvée de Réserve Blanc de Blancs", grapes: ["Chardonnay 100%"], notes: "Lemon curd, oyster shell, white peach. The benchmark NV blanc de blancs.", drinking: "Now–2032", price: "€60–80" },
        { name: "Les Chétillons", grapes: ["Chardonnay 100%"], notes: "Single-vineyard marvel. Flint, iodine, preserved lemon. Ages 20+ years.", drinking: "2026–2045", price: "€120–160" }
      ]
    },

    bereche: {
      id: "bereche",
      name: "Bérêche & Fils",
      region: "champagne",
      village: "Ludes, Montagne de Reims",
      type: "Grower (RM)",
      farming: "Organic conversion",
      founded: 1847,
      winemaker: "Raphaël & Vincent Bérêche",
      bio: "Brothers Raphaël and Vincent Bérêche have transformed this estate into one of Champagne's most exciting addresses. Their focus on single-lieu-dit wines, low dosage, and extended lees ageing has attracted a devoted following. The 'Reflet d'Antan' — based on perpetual reserve — is a masterclass in complexity without vintage variation.",
      hectares: 9,
      price_tier: "€€€",
      wines: [
        { name: "Brut Réserve", grapes: ["Pinot Meunier 45%", "Chardonnay 35%", "Pinot Noir 20%"], notes: "Nervy, mineral, toasted brioche. Exceptional NV benchmark.", drinking: "Now–2028", price: "€50–65" },
        { name: "Reflet d'Antan", grapes: ["Pinot Meunier 45%", "Chardonnay 35%", "Pinot Noir 20%"], notes: "Perpetual reserve; extraordinary complexity. Walnut, dried fruit, honey.", drinking: "Now–2035", price: "€90–120" }
      ]
    },

    chartogne_taillet: {
      id: "chartogne_taillet",
      name: "Chartogne-Taillet",
      region: "champagne",
      village: "Merfy",
      type: "Grower (RM)",
      farming: "Biodynamic",
      founded: 1683,
      winemaker: "Alexandre Chartogne",
      bio: "Alexandre Chartogne, trained under Anselme Selosse, returned to Merfy to farm this ancient estate biodynamically. Merfy sits on the western slopes of the Montagne de Reims on chalky-clay soils. His single-parcel series — 'Les Alliées', 'Orizeaux', 'Heurtebise' — are among the most terroir-expressive Champagnes made. Yields are tiny, wines are profound.",
      hectares: 11,
      price_tier: "€€€",
      wines: [
        { name: "Cuvée Sainte Anne", grapes: ["Pinot Noir 60%", "Chardonnay 30%", "Pinot Meunier 10%"], notes: "Benchmark entry: crisp red fruit, chalk, excellent poise.", drinking: "Now–2030", price: "€50–65" },
        { name: "Les Alliées", grapes: ["Pinot Noir 100%"], notes: "Single lieu-dit. Earth, raspberry, iron — haunting.", drinking: "2025–2038", price: "€90–120" }
      ]
    },

    laherte: {
      id: "laherte",
      name: "Laherte Frères",
      region: "champagne",
      village: "Chavot-Courcourt, Côte des Blancs",
      type: "Grower (RM)",
      farming: "Organic",
      founded: 1889,
      winemaker: "Aurélien Laherte",
      bio: "Aurélien Laherte represents the new wave of Champagne — all seven permitted varieties used (including the rare Arbane, Petit Meslier, and Pinot de Juillet), organic farming, and zero-sulphur experiments. Based in Chavot, he produces some of Champagne's most distinctive wines, particularly the 'Les 7' which showcases all seven varieties together.",
      hectares: 14,
      price_tier: "€€",
      wines: [
        { name: "Ultradition", grapes: ["Multiple varieties"], notes: "Off-dry, approachable, herbal and fruity. Gateway Laherte.", drinking: "Now–2028", price: "€40–55" },
        { name: "Les 7", grapes: ["All 7 permitted Champagne varieties"], notes: "Unique. Complex herbs, flowers, orchard fruit. Deeply intellectual.", drinking: "Now–2035", price: "€80–100" }
      ]
    },

    huet: {
      id: "huet",
      name: "Domaine Huet",
      region: "loire",
      village: "Vouvray",
      type: "Estate",
      farming: "Biodynamic",
      founded: 1928,
      winemaker: "Noël Pinguet → now Nathalie Rocher",
      bio: "The definitive Vouvray estate, producing Chenin Blanc in all styles — sec, demi-sec, moelleux, pétillant, pétillant naturel — across three legendary single-vineyard sites: Le Haut-Lieu, Le Mont, and Clos du Bourg. Gaston Huet converted to biodynamics in 1988. These are among the longest-lived white wines on earth; the 1947 is still drinking magnificently.",
      hectares: 35,
      price_tier: "€€",
      wines: [
        { name: "Le Mont Sec", grapes: ["Chenin Blanc 100%"], notes: "Taut, mineral, quince and saline. Needs 10+ years to fully open.", drinking: "2026–2050", price: "€35–50" },
        { name: "Clos du Bourg Moelleux", grapes: ["Chenin Blanc 100%"], notes: "Candied ginger, beeswax, apricot. Profound sweetness with electric acidity.", drinking: "2030–2070", price: "€60–90" }
      ]
    },

    barthod: {
      id: "barthod",
      name: "Ghislaine Barthod",
      region: "burgundy",
      village: "Chambolle-Musigny",
      type: "Domaine",
      farming: "Lutte raisonnée",
      founded: 1990,
      winemaker: "Ghislaine Barthod",
      bio: "Ghislaine Barthod produces some of Chambolle-Musigny's most sought-after wines from a collection of premier cru lieu-dits including Les Charmes, Les Beaux Bruns, Les Cras, and Les Véroilles. Her wines represent the quintessence of Chambolle: perfume, finesse, silky texture. Often more affordable than neighbours, and consistently outstanding.",
      hectares: 7,
      price_tier: "€€€",
      wines: [
        { name: "Chambolle-Musigny Village", grapes: ["Pinot Noir 100%"], notes: "Raspberry, violet, a whisper of forest floor. Pure and elegant.", drinking: "2025–2038", price: "€80–110" },
        { name: "Les Charmes 1er Cru", grapes: ["Pinot Noir 100%"], notes: "Silk and roses. The archetypal Chambolle premier cru.", drinking: "2026–2045", price: "€160–220" }
      ]
    },

    roulot: {
      id: "roulot",
      name: "Domaine Jean-Marc Roulot",
      region: "burgundy",
      village: "Meursault",
      type: "Domaine",
      farming: "Lutte raisonnée",
      founded: 1977,
      winemaker: "Jean-Marc Roulot",
      bio: "Jean-Marc Roulot (also known as an actor in French cinema) is widely regarded as producing the finest Meursault. His village-level wines outperform many domains' premier crus. The Roulot style: no new oak, indigenous yeasts, minimal sulphur, long ageing on fine lees. The Charmes, Perrières, and Bouchères premier crus are world-class.",
      hectares: 9,
      price_tier: "€€€€",
      wines: [
        { name: "Meursault Village", grapes: ["Chardonnay 100%"], notes: "Brioche, toasted almond, white flower. Benchmark village wine.", drinking: "2026–2040", price: "€90–130" },
        { name: "Meursault Perrières 1er Cru", grapes: ["Chardonnay 100%"], notes: "Mineral, tense, electric. Among Burgundy's greatest whites.", drinking: "2028–2055", price: "€300–450" }
      ]
    },

    lapierre: {
      id: "lapierre",
      name: "Marcel Lapierre",
      region: "beaujolais",
      village: "Villié-Morgon",
      type: "Domaine",
      farming: "Organic / natural",
      founded: 1973,
      winemaker: "Mathieu Lapierre (son)",
      bio: "Marcel Lapierre, who died in 2010, was a founding father of the natural wine movement alongside Jules Chauvet. His Morgon — unfiltered, low sulphur, carbonic maceration — changed how the world understood Gamay. Son Mathieu continues the work with the same rigour. The wine is one of France's great undervalued bottles.",
      hectares: 14,
      price_tier: "€",
      wines: [
        { name: "Morgon", grapes: ["Gamay 100%"], notes: "Kirsch, earth, wild herbs. The gateway to serious Beaujolais.", drinking: "2024–2035", price: "€22–30" },
        { name: "Morgon Cuvée Marcel", grapes: ["Gamay 100%"], notes: "Old vines, more extraction. Dark fruit, truffle, profound.", drinking: "2026–2040", price: "€50–70" }
      ]
    },

    tempier: {
      id: "tempier",
      name: "Domaine Tempier",
      region: "provence",
      village: "Le Plan du Castellet, Bandol",
      type: "Domaine",
      farming: "Lutte raisonnée",
      founded: 1834,
      winemaker: "Daniel Ravier",
      bio: "The defining estate of Bandol, Domaine Tempier was restored by Lucien Peyraud after WWII and championed by the food writer Richard Olney. Their Mourvèdre-dominant reds — Classique, Migoua, Tourtine, Cabassaou — are among France's greatest. Alice Waters, the legendary Berkeley restaurateur, famously based her culinary philosophy around Tempier's wines and the Peyraud family's table.",
      hectares: 30,
      price_tier: "€€€",
      wines: [
        { name: "Bandol Rouge Classique", grapes: ["Mourvèdre 70%", "Grenache 20%", "Cinsault 10%"], notes: "Garrigue, leather, dark olive, cassis. Needs 8+ years. Classic.", drinking: "2028–2050", price: "€40–55" },
        { name: "Bandol Rouge La Migoua", grapes: ["Mourvèdre 80%", "Grenache 20%"], notes: "Single parcel, more structured. Animal, truffle, violets.", drinking: "2030–2055", price: "€75–100" },
        { name: "Bandol Rosé", grapes: ["Mourvèdre 40%", "Cinsault 30%", "Grenache 30%"], notes: "The benchmark Provençal rosé. Structured, dry, complex.", drinking: "Now–2028", price: "€30–40" }
      ]
    },

    grange_des_peres: {
      id: "grange_des_peres",
      name: "Domaine de la Grange des Pères",
      region: "languedoc",
      village: "Aniane, Hérault",
      type: "Domaine",
      farming: "Organic",
      founded: 1992,
      winemaker: "Laurent Vaillé",
      bio: "One of France's most mythologised estates. Laurent Vaillé, a former student of Gérard Chave (Hermitage) and René Engel (Burgundy), chose to classify his wine as simple Vin de France — not AOC — to avoid restrictions on varieties. The result is a Syrah/Mourvèdre/Cabernet Franc blend of northern-Rhône quality at Languedoc prices. Allocation only; long waiting list.",
      hectares: 15,
      price_tier: "€€€",
      wines: [
        { name: "Rouge", grapes: ["Syrah 50%", "Mourvèdre 30%", "Cabernet Franc 20%"], notes: "Violet, olive, graphite, wild herbs. One of France's most complete reds.", drinking: "2028–2055", price: "€80–120" },
        { name: "Blanc", grapes: ["Roussanne 60%", "Marsanne 25%", "Chardonnay 15%"], notes: "Beeswax, yellow flowers, extraordinary density. Ages magnificently.", drinking: "2026–2045", price: "€80–110" }
      ]
    },

    ganevat: {
      id: "ganevat",
      name: "Domaine Ganevat",
      region: "jura",
      village: "Rotalier, Côtes du Jura",
      type: "Domaine",
      farming: "Biodynamic",
      founded: 1998,
      winemaker: "Jean-François Ganevat",
      bio: "Jean-François 'Fanfan' Ganevat is the genius of the Jura — a perfectionist who trained at Domaine Comtes Lafon in Meursault before returning to his family estate. He produces an extraordinary range of single-parcel wines from every Jura variety: ouillé and oxidative Chardonnay, Savagnin, Poulsard, Trousseau. His wines are scarce, deeply individual, and often revelatory.",
      hectares: 12,
      price_tier: "€€€",
      wines: [
        { name: "Cuvée de l'Enfant Terrible", grapes: ["Chardonnay 100%"], notes: "Ouillé style. Hazelnut, white flowers, profound mineral depth.", drinking: "2026–2042", price: "€40–60" },
        { name: "Julien en Billat (Poulsard)", grapes: ["Poulsard 100%"], notes: "Raspberry, earth, crushed stone. The definitive Poulsard.", drinking: "2024–2035", price: "€35–50" }
      ]
    }
  },

  // ─── GRAPES ─────────────────────────────────────────────────────────────────
  grapes: {

    chardonnay: {
      id: "chardonnay",
      name: "Chardonnay",
      color: "white",
      origin: "Burgundy, France",
      parent_grapes: ["Pinot Noir", "Gouais Blanc"],
      synonyms: ["Beaunois (Chablis)", "Morillon (Austria)", "Pinot Chardonnay (misnomer)"],
      character: "Chardonnay is the world's most planted white grape — and the most malleable. In cool climates (Chablis, Champagne) it produces razor-sharp acidity, saline minerality, and green apple. In temperate climates (Côte de Beaune) it adds texture, hazelnut, and cream. Oak amplifies its natural affinity for butter and vanilla. Its neutrality makes it a vehicle for terroir above almost any other grape.",
      food_affinities: ["Lobster", "Roast chicken with cream sauce", "Veal", "Ripe soft cheeses", "Risotto", "Scallops", "Pasta with truffle"],
      global_presence: "Burgundy (France), Champagne (France), Chablis (France), California, Australia (Yarra Valley, Adelaide Hills), Burgundy-style in New Zealand, South Africa, Chile",
      regional_expression: {
        "Chablis": "Unoaked, pure Kimmeridgian limestone mineral character. Saline, oyster shell, green apple. Austere.",
        "Côte de Beaune (Meursault, Puligny)": "Textured, hazelnut, butter, white flowers, subtle oak. The benchmark oaked style.",
        "Champagne": "High acid, lean, serves as the backbone of blanc de blancs. Chalk-driven, citrus, biscuit.",
        "Mâconnais": "Lighter, floral, approachable. Less mineral than the Côte d'Or.",
        "California": "Riper, more tropical (pineapple, mango), often heavy oak. Very different from Burgundy.",
        "Chablis premier/grand cru": "Develops extraordinary complexity: petrol, honey, lanolin with age."
      }
    },

    pinot_noir: {
      id: "pinot_noir",
      name: "Pinot Noir",
      color: "red",
      origin: "Burgundy, France",
      parent_grapes: ["Pinot (ancient Burgundian variety)"],
      synonyms: ["Spätburgunder (Germany)", "Blauburgunder (Austria, Switzerland)", "Pinot Nero (Italy)"],
      character: "Pinot Noir is the most translucent, fragile, and site-sensitive of all red grapes. Its thin skin produces light-coloured wines that reflect their terroir with exceptional fidelity. At its best it expresses red fruit (cherry, raspberry, strawberry), earth (forest floor, truffle), and a silky, weightless texture that no other grape can replicate. Impossible to hide behind winemaking — it either speaks of its place, or it doesn't.",
      food_affinities: ["Duck", "Salmon", "Mushrooms", "Roast chicken", "Lamb", "Tuna", "Aged goat cheese"],
      global_presence: "Burgundy (France), Champagne (France), Alsace (France), Oregon, California (Sonoma Coast, Santa Barbara), New Zealand (Central Otago, Martinborough), Germany (Baden), Australia (Yarra Valley)",
      regional_expression: {
        "Côte de Nuits (Gevrey, Chambolle, Vosne)": "The benchmark. Earth, truffle, violets, silky tannin. Profound longevity.",
        "Côte de Beaune (Pommard, Volnay)": "Fuller (Pommard) or more delicate (Volnay). Red fruit, floral, slightly more accessible.",
        "Champagne": "Used in Blanc de Noirs and rosé; high acid, red fruit, structure.",
        "Alsace": "Light, often pale, cherry and spice. Rarely serious.",
        "Oregon (Willamette Valley)": "Earthy, Burgundian in style, more affordable. Raspberry, forest floor.",
        "New Zealand (Central Otago)": "Pure, intense red fruit. Less earth than Burgundy but exceptional varietal clarity."
      }
    },

    riesling: {
      id: "riesling",
      name: "Riesling",
      color: "white",
      origin: "Rhine Valley, Germany",
      synonyms: ["Renski Rizling (Slovenia)", "Rajnski Rizling (Croatia)", "Rhine Riesling (Australia)"],
      character: "Germany's greatest grape, and one of the world's noblest. Riesling is defined by its extraordinary acidity — which enables wines to age for 50+ years — and its expression of terroir and climate. In cool sites it produces electric citrus and slate minerality. In warmer years, rich stone fruit and petrol (TDN) emerge with age. It can be bone dry, off-dry, or lusciously sweet, yet always retains a structural spine of acidity.",
      food_affinities: ["Smoked salmon", "Thai food", "Vietnamese cuisine", "Choucroute", "Munster cheese", "Pork", "Sushi", "Spiced dishes"],
      global_presence: "Alsace (France), Germany (Mosel, Rhine), Austria (Wachau, Kamptal), Australia (Clare Valley, Eden Valley), New York (Finger Lakes)",
      regional_expression: {
        "Alsace (dry)": "Powerful, textured, petrol and spice, some residual sugar. Less floral than Germany.",
        "Alsace Grand Cru": "Site-specific, profound mineral complexity. Can be very long-lived.",
        "Mosel (Germany)": "Delicate, slate minerality, low alcohol, pure citrus fruit. Quintessential Riesling.",
        "Rhine (Rheingau, Rheinhessen)": "Fuller than Mosel, apple and peach, more body.",
        "Clare Valley (Australia)": "Dry, lime juice, talc, petrol with age. Very different but excellent.",
        "Wachau (Austria)": "Dry, mineral, pear and stone fruit. Among the world's finest dry expressions."
      }
    },

    cabernet_sauvignon: {
      id: "cabernet_sauvignon",
      name: "Cabernet Sauvignon",
      color: "red",
      origin: "Bordeaux (cross of Cabernet Franc × Sauvignon Blanc)",
      synonyms: ["Bouchet (some Bordeaux)", "Sauvignon Rouge"],
      character: "The world's most planted red grape. Thick-skinned, small-berried, Cabernet Sauvignon gives deeply coloured, tannic wines with remarkable longevity. Cassis, blackcurrant, cedar, graphite, tobacco, dark chocolate — these are its registers. It needs warmth to ripen fully; in cool years it can be herbaceous (green pepper, bell pepper). It is the dominant grape of the Médoc's grand crus and California's finest Napa Valley wines.",
      food_affinities: ["Rack of lamb", "Côte de boeuf", "Venison", "Aged cheddar", "Dark chocolate", "Duck", "Truffle"],
      global_presence: "Bordeaux (France), California (Napa Valley), Chile (Colchagua, Maipo), Australia (Coonawarra, Margaret River), South Africa (Stellenbosch), Tuscany (Super Tuscans)",
      regional_expression: {
        "Pauillac (Bordeaux)": "The noble expression: blackcurrant, cedar, graphite, extraordinary longevity. Latour, Mouton, Lafite.",
        "Margaux": "More feminine than Pauillac. Violets, cassis, silky tannin.",
        "Napa Valley (California)": "Rich, opulent, dark fruit, often higher alcohol. More accessible young than Bordeaux.",
        "Coonawarra (Australia)": "Eucalyptus, mint, blackcurrant. Distinctive 'Terra Rossa' red soil character.",
        "Colchagua (Chile)": "Ripe, fruit-forward, plum and cassis. Excellent value."
      }
    },

    syrah: {
      id: "syrah",
      name: "Syrah / Shiraz",
      color: "red",
      origin: "Northern Rhône Valley, France (Hermitage hill)",
      synonyms: ["Shiraz (Australia, South Africa, sometimes elsewhere)", "Sirac", "Serine (old Côte-Rôtie name)"],
      character: "Syrah is a shape-shifter. In the cool granite of Northern Rhône it produces dark, peppery, violet-scented wines of extraordinary complexity — often lean, austere, needing decades. In warm climates (Southern Rhône, Australia) it becomes plush, jammy, chocolatey. The white pepper note (from rotundone, a compound) is Syrah's signature in cool climates. Olive, smoked meat, and truffle emerge with age.",
      food_affinities: ["Grilled lamb", "Venison", "Cassoulet", "Tapenade", "Truffle dishes", "Wild boar", "Aged hard cheese"],
      global_presence: "Northern Rhône (France), Southern Rhône (France), Languedoc, Australia (Barossa, Hunter Valley, Yarra Valley), Washington State, South Africa",
      regional_expression: {
        "Côte-Rôtie (N. Rhône)": "The pinnacle. Violet, smoked olive, white pepper, iron. Up to 20% Viognier blended in for fragrance.",
        "Hermitage (N. Rhône)": "More structured than Côte-Rôtie. Tar, blackberry, iron. Ages 30–50 years.",
        "Crozes-Hermitage": "More accessible, lighter. Good value expression of Northern Rhône character.",
        "Châteauneuf-du-Pape": "Minor role in blends. Contributes colour and spice.",
        "Barossa Valley (Australia)": "Opulent, full-bodied, dark fruit, chocolate, American oak vanilla. Long-lived.",
        "Yarra Valley (Australia)": "Cool-climate, peppery, more European in character."
      }
    },

    grenache: {
      id: "grenache",
      name: "Grenache / Garnacha",
      color: "red",
      origin: "Aragón, Spain (French adoption: Roussillon, 14th century)",
      synonyms: ["Garnacha (Spain)", "Cannonau (Sardinia)", "Grenache Noir"],
      character: "Grenache is the backbone of Southern France and Spain. High alcohol, low tannin, high pH (low acidity) — properties that demand blending partners for freshness. Yet in great terroirs (Châteauneuf, Priorat, Sardinia) it can stand alone with extraordinary concentration. Raspberry, garrigue, leather, and dried herbs are its signatures. Old vines (80–100+ years) produce complex, wine with the density to age magnificently.",
      food_affinities: ["Roast lamb", "Daube", "Boar stew", "Olives and tapas", "Grilled vegetables", "Charcuterie"],
      global_presence: "Southern Rhône (France), Languedoc-Roussillon (France), Spain (Priorat, Rioja), Sardinia (Cannonau), Australia (Barossa)",
      regional_expression: {
        "Châteauneuf-du-Pape": "Up to 18 varieties permitted, but Grenache dominates. Galets roulés stones. Rich, warm, spiced red fruit.",
        "Gigondas": "More tannic than CdP due to clay soils. Structured, serious.",
        "Priorat (Spain)": "Extreme terroir (llicorella slate). Concentrated, mineral, very high alcohol but structured.",
        "Barossa (Australia)": "Old vine (100+ years) Grenache: extraordinary concentration, dried plum, exotic spice.",
        "Sardinia (Cannonau)": "Claimed to be the same grape. Earthy, rustic, wild berry character."
      }
    },

    chenin_blanc: {
      id: "chenin_blanc",
      name: "Chenin Blanc",
      color: "white",
      origin: "Anjou, Loire Valley, France",
      synonyms: ["Pineau de la Loire", "Steen (South Africa)", "Vouvray (misnomer for the wine, not the grape)"],
      character: "France's most versatile white grape, capable of producing bone-dry mineral wines, off-dry food wines, and the richest sweet wines in the world — all with extraordinary acidity that allows 50–100 years of ageing. Quince, beeswax, lanolin, chamomile, and honey are its hallmarks. South Africa has arguably become Chenin's second home, where old vines produce superb values.",
      food_affinities: ["Salmon with cream sauce", "Scallops", "Asparagus", "Pork", "Ripe cheeses", "Foie gras (sweet styles)", "Asian cuisine"],
      global_presence: "Loire Valley (France: Vouvray, Savennières, Anjou), South Africa (Stellenbosch, Swartland), California (minor), Argentina (minor)",
      regional_expression: {
        "Vouvray (dry)": "Taut, quince, white flowers, lanolin. Needs 10+ years to show fully.",
        "Savennières": "The greatest dry Chenin. Austere, stony, honeyed complexity in age.",
        "Quarts de Chaume / Bonnezeaux (sweet)": "Botrytis-affected. Apricot jam, saffron, infinite acidity. Can age 50+ years.",
        "Anjou": "More commercial styles, off-dry. Also excellent dry Anjou Blanc from top producers.",
        "South Africa (Swartland)": "Rich, waxy, tropical with old vines. More body than Loire."
      }
    },

    gamay: {
      id: "gamay",
      name: "Gamay",
      color: "red",
      origin: "Burgundy (banned from the Côte d'Or by Philip the Bold in 1395)",
      synonyms: ["Gamay Noir à Jus Blanc", "Bourguignon Noir"],
      character: "Gamay found its spiritual home in Beaujolais after being expelled from Burgundy. Light in colour, low in tannin, high in freshness — it produces the most food-versatile red in France. Carbonic maceration (fermenting whole uncrushed berries) amplifies its characteristic red fruit, banana, and bubblegum character. But the serious Crus — made with less or no carbonic maceration — express granite terroir as complex earth, truffle, and dark cherry.",
      food_affinities: ["Charcuterie", "Roast chicken", "Grilled salmon", "Pizza", "Cheeseburger", "Mushroom dishes", "Goat cheese"],
      global_presence: "Beaujolais (France), Loire Valley (Touraine, Anjou), Switzerland (Valais), Savoie",
      regional_expression: {
        "Beaujolais Nouveau": "Carbonic maceration, light, fruity, cherry. Drink within months.",
        "Morgon": "Most serious Cru. Schist and gabbro. Earth, kirsch, truffle. Ages 10–20 years.",
        "Moulin-à-Vent": "Manganese in soil. Most Burgundian Cru. Dark fruit, structure.",
        "Fleurie": "Most feminine Cru. Roses, raspberry, silky.",
        "Loire (Touraine Gamay)": "Fresh, lighter. Good for summer drinking."
      }
    },

    pinot_meunier: {
      id: "pinot_meunier", name: "Pinot Meunier", color: "red",
      origin: "Champagne, France",
      synonyms: ["Meunier", "Schwarzriesling (Germany)"],
      character: "The workhorse of Champagne, providing fruitiness and approachability to blends. Ripens earlier than Pinot Noir, making it more reliable in the cool Marne valley. Often underrated — in the hands of producers like Laherte it can shine as a varietal wine.",
      food_affinities: ["Champagne food pairings across styles"],
      global_presence: "Champagne (France), minor presence in Germany and Australia",
      regional_expression: { "Vallee de la Marne": "Fruity, early-drinking, red apple and brioche. Backbone of many NV blends." }
    },

    sauvignon_blanc: {
      id: "sauvignon_blanc", name: "Sauvignon Blanc", color: "white",
      origin: "Loire Valley / Bordeaux, France",
      synonyms: ["Fume Blanc (California)", "Muskat-Silvaner (Austria, obsolete)"],
      character: "One of France's most versatile white grapes — producing the minerally dry wines of Sancerre and Pouilly-Fume, the blended whites of Graves and Pessac-Leognan (with Semillon), and the world's most popular easy-drinking white in New Zealand. Signature aromas: cut grass, elderflower, gooseberry, and passion fruit in warmer climates.",
      food_affinities: ["Goat cheese", "Asparagus", "Seafood", "Sushi", "Thai food", "Light salads"],
      global_presence: "Loire Valley (Sancerre, Pouilly-Fume), Bordeaux (Graves), New Zealand (Marlborough), South Africa, Chile, California",
      regional_expression: {
        "Sancerre / Pouilly-Fume": "Mineral, flinty, citrus, and white flower. The classic benchmark.",
        "Graves / Pessac-Leognan": "Blended with Semillon. Richer, waxy, smoke, fig. Ages magnificently.",
        "Marlborough, NZ": "Intensely aromatic, passion fruit, cut grass. Clean and precise.",
        "South Africa (Stellenbosch)": "Fresh citrus, some tropical notes. Very good value."
      }
    },

    merlot: {
      id: "merlot", name: "Merlot", color: "red",
      origin: "Bordeaux, France",
      synonyms: ["Bigney (some old Bordeaux references)"],
      character: "The world's most-planted red grape, and Bordeaux's most important by volume. Merlot ripens early, producing softer tannins, higher alcohol, and plummy, approachable wines. On the clay soils of Pomerol and Saint-Emilion it reaches extraordinary complexity. At its best: plum, chocolate, mocha, and velvety texture.",
      food_affinities: ["Duck confit", "Lamb", "Mushroom risotto", "Soft-rind cheeses", "Beef stew", "Pasta with meat sauce"],
      global_presence: "Bordeaux Right Bank (France), California, Chile (Colchagua), Washington State, Italy (Super Tuscans)",
      regional_expression: {
        "Saint-Emilion": "Clay-limestone soils. Plummy, textured, accessible.",
        "Pomerol": "Clay soils. Extraordinary concentration — Petrus is 100% Merlot.",
        "California (Napa)": "Riper, jammy, more alcoholic than Bordeaux.",
        "Chile (Colchagua)": "Plum, dark chocolate, good value."
      }
    }

  },

  // ─── PAIRING DATA ───────────────────────────────────────────────────────────
  // Used by pairing mode: dish keywords → matching wine profiles
  pairings: [
    { dish: "oysters", tags: ["oysters", "seafood"], wines: [
      { region: "champagne", note: "Blanc de Blancs — classic. Chalk and brine echo each other." },
      { region: "loire", appellation: "Muscadet", note: "Textbook pairing. Saline, mineral, perfect weight." },
      { region: "burgundy", appellation: "Chablis", note: "Kimmeridgian limestone (fossilised oysters) mirrors the dish." },
      { region: "languedoc", appellation: "Picpoul de Pinet", note: "Local tradition — Bouzigues oysters with Picpoul." }
    ]},
    { dish: "foie gras", tags: ["foie gras", "liver"], wines: [
      { region: "bordeaux", appellation: "Sauternes", note: "The classic: botrytised sweetness cuts rich fat perfectly." },
      { region: "alsace", appellation: "Pinot Gris VT", note: "Off-dry, rich, spiced — sublime with cold foie gras." },
      { region: "sw", appellation: "Jurançon moelleux", note: "Gascony pairing: Jurançon with local foie gras." },
      { region: "champagne", note: "Rosé Champagne — unconventional but excellent." }
    ]},
    { dish: "roast lamb", tags: ["lamb", "agneau", "rack of lamb"], wines: [
      { region: "bordeaux", appellation: "Pauillac", note: "The canonical pairing. Cabernet's structure with lamb's richness." },
      { region: "rhone", appellation: "Gigondas", note: "Grenache and garrigue mirror the herbed lamb." },
      { region: "languedoc", appellation: "Pic Saint-Loup", note: "Syrah-Grenache with local herb-roasted lamb." },
      { region: "provence", appellation: "Bandol", note: "Mourvèdre loves lamb — the Provençal tradition." }
    ]},
    { dish: "steak", tags: ["steak", "beef", "boeuf", "côte de boeuf", "ribeye"], wines: [
      { region: "bordeaux", appellation: "Saint-Émilion", note: "Merlot's supple tannins match marbled beef." },
      { region: "rhone", appellation: "Hermitage", note: "Northern Rhône Syrah — earthy, structured, classic." },
      { region: "sw", appellation: "Cahors", note: "Malbec from its ancestral home. Earthy, structured, regional." }
    ]},
    { dish: "cheese board", tags: ["cheese", "fromage", "comté", "brie", "roquefort"], wines: [
      { region: "champagne", note: "Champagne handles most soft cheeses — acidity cuts fat." },
      { region: "jura", appellation: "Vin Jaune", note: "Comté with Vin Jaune — the region's own match. Transcendent." },
      { region: "burgundy", appellation: "Meursault", note: "Oaked Chardonnay with ripe bloomy rinds (Brie, Camembert)." },
      { region: "bordeaux", appellation: "Sauternes", note: "Sauternes + Roquefort: sweet meets salty/funky. A revelation." }
    ]},
    { dish: "fish", tags: ["fish", "poisson", "salmon", "sole", "turbot", "sea bass"], wines: [
      { region: "burgundy", appellation: "Chablis", note: "Unoaked Chardonnay — mineral and crisp, won't overpower." },
      { region: "loire", appellation: "Muscadet", note: "Atlantic fish with Atlantic wine. Textbook." },
      { region: "alsace", appellation: "Riesling", note: "Alsace Riesling's structure handles rich fish (salmon)." },
      { region: "champagne", note: "Blanc de Blancs — elegant, saline, works with everything from sea." }
    ]},
    { dish: "bouillabaisse", tags: ["bouillabaisse", "fish stew", "bourride"], wines: [
      { region: "provence", appellation: "Cassis blanc", note: "The traditional Marseille pairing — local dry white." },
      { region: "provence", note: "Provençal rosé — pale, dry, Mediterranean character." },
      { region: "languedoc", appellation: "Picpoul", note: "Citrusy, light, doesn't compete with complex saffron broth." }
    ]},
    { dish: "mushrooms", tags: ["mushrooms", "truffle", "morilles", "champignons"], wines: [
      { region: "burgundy", note: "Aged Pinot Noir — earthy forest floor notes echo mushrooms." },
      { region: "jura", note: "Vin Jaune with morilles à la crème — classic Jura dish." },
      { region: "rhone", appellation: "Hermitage", note: "Northern Rhône Syrah — truffle and earth notes natural match." }
    ]},
    { dish: "charcuterie", tags: ["charcuterie", "jambon", "saucisson", "rillettes", "pâté"], wines: [
      { region: "beaujolais", appellation: "Morgon", note: "The Lyonnais tradition: Beaujolais with charcuterie. Serve chilled." },
      { region: "loire", appellation: "Chinon", note: "Cabernet Franc's earthiness with pork charcuterie." },
      { region: "alsace", appellation: "Pinot Blanc", note: "Fresh, versatile, won't overshadow delicate flavours." }
    ]},
    { dish: "spicy food", tags: ["spicy", "curry", "thai", "vietnamese", "indian", "épicé"], wines: [
      { region: "alsace", appellation: "Gewurztraminer", note: "Aromatic intensity matches aromatic spice. Off-dry cuts heat." },
      { region: "alsace", appellation: "Riesling demi-sec", note: "Slight sweetness soothes chilli heat. Classic pairing." },
      { region: "loire", appellation: "Vouvray demi-sec", note: "Chenin Blanc's texture and sweetness handle spice well." }
    ]}
  ]
};

// ─── WINE VOCABULARY ────────────────────────────────────────────────────────
// Tiered tasting vocabulary, English + French, for the vocabulary tab and
// (future) sommelier quiz. Tiers are additive: Aficionado includes Amateur,
// Expert includes both. Referenced by stable term id for the quiz.
const VOCABULARY = {

  categories: {
    appearance: { en: "Appearance", fr: "Robe" },
    nose:       { en: "Nose",       fr: "Nez" },
    palate:     { en: "Palate & structure", fr: "Bouche et structure" },
    finish:     { en: "Finish",     fr: "Finale" }
  },

  tiers: {
    amateur:    { en: "Amateur",    fr: "Amateur",         order: 1, en_desc: "Everyday words. No training required.", fr_desc: "Des mots simples, accessibles sans formation." },
    aficionado: { en: "Aficionado", fr: "Amateur éclairé",  order: 2, en_desc: "Structural and varietal vocabulary a serious enthusiast reaches for.", fr_desc: "Un vocabulaire structurel et variétal, celui d'un amateur avéré." },
    expert:     { en: "Expert",     fr: "Expert",           order: 3, en_desc: "Sommelier level analysis: precise, technical, terroir aware.", fr_desc: "Une analyse de niveau sommelier : précise, technique, consciente du terroir." }
  },

  terms: {

    // Appearance
    vocab_appearance_intensity: { id: "vocab_appearance_intensity", category: "appearance", tier: "amateur",
      en: { term: "Pale, medium, deep", def: "How much colour the wine shows against a white background. A rough guide to concentration." },
      fr: { term: "Pâle, moyen, soutenu", def: "L'intensité de la couleur observée sur fond blanc. Un indicateur approximatif de la concentration." } },
    vocab_appearance_clarity: { id: "vocab_appearance_clarity", category: "appearance", tier: "amateur",
      en: { term: "Clear or hazy", def: "Whether the wine looks bright and clean in the glass, or cloudy. Haze can be a fault or, in some natural wines, an intentional choice." },
      fr: { term: "Limpide ou trouble", def: "Si le vin paraît brillant et net dans le verre, ou trouble. Le trouble peut être un défaut ou, dans certains vins nature, un choix assumé." } },
    vocab_appearance_hue: { id: "vocab_appearance_hue", category: "appearance", tier: "amateur",
      en: { term: "Ruby, garnet, gold, straw, pink", def: "The basic colour family the wine falls into. A starting point before getting more precise." },
      fr: { term: "Rubis, grenat, or, paille, rose", def: "La famille de couleur générale du vin. Un point de départ avant d'être plus précis." } },
    vocab_appearance_legs: { id: "vocab_appearance_legs", category: "appearance", tier: "amateur",
      en: { term: "Legs / tears", def: "The streaks that run down the glass after swirling. Say more about alcohol and sugar content than about quality." },
      fr: { term: "Jambes / larmes", def: "Les coulures qui descendent le long du verre après avoir fait tourner le vin. Elles renseignent surtout sur la teneur en alcool et en sucre, pas sur la qualité." } },
    vocab_appearance_rim: { id: "vocab_appearance_rim", category: "appearance", tier: "aficionado",
      en: { term: "Rim variation", def: "The colour change at the edge of the wine in the glass, compared to its core. A wide, pale rim on a red often signals age." },
      fr: { term: "Disque (ou ménisque)", def: "Le changement de couleur au bord du vin dans le verre, comparé à son cœur. Un large disque pâle sur un rouge signale souvent l'âge." } },
    vocab_appearance_core: { id: "vocab_appearance_core", category: "appearance", tier: "aficionado",
      en: { term: "Core colour", def: "The deepest colour at the centre of the glass. Comparing it with the rim gives a quick read on age and concentration." },
      fr: { term: "Cœur (couleur au centre)", def: "La couleur la plus dense au centre du verre. La comparer au disque donne une lecture rapide de l'âge et de la concentration." } },
    vocab_appearance_bead: { id: "vocab_appearance_bead", category: "appearance", tier: "aficionado",
      en: { term: "Bead", def: "In sparkling wine, the size and persistence of the bubbles. Fine, long lasting bubbles generally indicate a longer time on lees." },
      fr: { term: "Perlage", def: "Dans un vin effervescent, la taille et la persistance des bulles. Des bulles fines et durables indiquent en général un élevage plus long sur lies." } },
    vocab_appearance_deposit: { id: "vocab_appearance_deposit", category: "appearance", tier: "aficionado",
      en: { term: "Deposit / sediment", def: "Solid particles settled in the bottle, natural in aged or unfined wines. Not a fault, though it changes how you decant and pour." },
      fr: { term: "Dépôt", def: "Des particules solides déposées dans la bouteille, naturelles dans les vins âgés ou non collés. Ce n'est pas un défaut, mais cela change la façon de décanter et de servir." } },
    vocab_appearance_bricking: { id: "vocab_appearance_bricking", category: "appearance", tier: "expert",
      en: { term: "Bricking", def: "An orange or brick tinge replacing a red's youthful purple, caused by pigment change with age." },
      fr: { term: "Tuilé", def: "Une teinte orangée ou brique qui remplace le violet de jeunesse d'un rouge, due à l'évolution des pigments avec l'âge." } },
    vocab_appearance_onionskin: { id: "vocab_appearance_onionskin", category: "appearance", tier: "expert",
      en: { term: "Onion skin", def: "A pale copper or amber tinge seen in some aged rosés and lightly oxidative whites. A precise, recognised descriptor rather than a criticism." },
      fr: { term: "Pelure d'oignon", def: "Une teinte cuivrée ou ambrée pâle observée dans certains rosés âgés et blancs légèrement oxydatifs. Un descripteur précis et reconnu, non un jugement négatif." } },
    vocab_appearance_robe_precision: { id: "vocab_appearance_robe_precision", category: "appearance", tier: "expert",
      en: { term: "Grenat / pourpre", def: "Precise professional colour terms for red wine, distinguishing garnet (grenat) from the more blue toned purple (pourpre) of a very young wine." },
      fr: { term: "Grenat / pourpre", def: "Des termes de couleur professionnels et précis pour le vin rouge, distinguant le grenat du pourpre plus bleuté d'un vin très jeune." } },
    vocab_appearance_limpidity: { id: "vocab_appearance_limpidity", category: "appearance", tier: "expert",
      en: { term: "Limpidity", def: "A finer grade of clarity assessment used in formal tasting, judging brilliance rather than simply clear versus hazy." },
      fr: { term: "Limpidité", def: "Une évaluation plus fine de la clarté utilisée en dégustation formelle, jugeant la brillance plutôt que la simple opposition limpide/trouble." } },

    // Nose
    vocab_nose_fruit: { id: "vocab_nose_fruit", category: "nose", tier: "amateur",
      en: { term: "Fruity", def: "Aromas that read as fresh fruit: berries, citrus, stone fruit, tropical fruit." },
      fr: { term: "Fruité", def: "Des arômes qui évoquent le fruit frais : baies, agrumes, fruits à noyau, fruits exotiques." } },
    vocab_nose_floral: { id: "vocab_nose_floral", category: "nose", tier: "amateur",
      en: { term: "Floral", def: "Aromas reminiscent of flowers such as rose, violet, or acacia. Common in aromatic white grapes and some reds like Pinot Noir." },
      fr: { term: "Floral", def: "Des arômes rappelant les fleurs comme la rose, la violette ou l'acacia. Fréquent dans les cépages blancs aromatiques et certains rouges comme le Pinot Noir." } },
    vocab_nose_oaky: { id: "vocab_nose_oaky", category: "nose", tier: "amateur",
      en: { term: "Oaky", def: "Vanilla, toast, smoke, or coconut notes picked up from barrel ageing rather than the grape itself." },
      fr: { term: "Boisé", def: "Des notes de vanille, de toast, de fumé ou de noix de coco apportées par l'élevage en fût plutôt que par le raisin lui même." } },
    vocab_nose_fault: { id: "vocab_nose_fault", category: "nose", tier: "amateur",
      en: { term: "Off nose", def: "A general sense that something is wrong: wet cardboard usually means a corked bottle, nail polish remover suggests volatile acidity, vinegar means the wine has turned." },
      fr: { term: "Nez défectueux", def: "Une impression générale que quelque chose ne va pas : le carton mouillé indique en général un bouchon défectueux, le dissolvant suggère une acidité volatile élevée, le vinaigre signale un vin tourné." } },
    vocab_nose_primary: { id: "vocab_nose_primary", category: "nose", tier: "aficionado",
      en: { term: "Primary aromas", def: "Aromas from the grape itself, formed before fermentation. Fruit and floral notes typically fall here." },
      fr: { term: "Arômes primaires", def: "Les arômes issus du raisin lui même, formés avant la fermentation. Les notes de fruit et de fleur en font généralement partie." } },
    vocab_nose_secondary: { id: "vocab_nose_secondary", category: "nose", tier: "aficionado",
      en: { term: "Secondary aromas", def: "Aromas created during fermentation and early winemaking: bread, yeast, butter, cream." },
      fr: { term: "Arômes secondaires", def: "Des arômes créés pendant la fermentation et les débuts de la vinification : pain, levure, beurre, crème." } },
    vocab_nose_intensity: { id: "vocab_nose_intensity", category: "nose", tier: "aficionado",
      en: { term: "Nose intensity", def: "How strongly the aromas project from the glass, separate from what those aromas actually are. A wine can be closed, with little showing yet, or expressive." },
      fr: { term: "Intensité aromatique", def: "La force avec laquelle les arômes se dégagent du verre, indépendamment de leur nature. Un vin peut être « fermé », montrant peu pour l'instant, ou expressif." } },
    vocab_nose_complexity: { id: "vocab_nose_complexity", category: "nose", tier: "aficionado",
      en: { term: "Complexity", def: "How many distinct aromas you can pick out, and whether they change as the wine sits in the glass." },
      fr: { term: "Complexité", def: "Le nombre d'arômes distincts que l'on peut identifier, et leur évolution pendant que le vin repose dans le verre." } },
    vocab_nose_reduction: { id: "vocab_nose_reduction", category: "nose", tier: "expert",
      en: { term: "Reduction", def: "Struck match, flint, or cooked cabbage notes from low oxygen exposure during winemaking. Can blow off with air or signal a genuine fault depending on intensity." },
      fr: { term: "Réduction", def: "Des notes d'allumette, de silex ou de chou cuit dues à un faible contact avec l'oxygène pendant la vinification. Peut s'estomper à l'aération ou signaler un véritable défaut selon l'intensité." } },
    vocab_nose_brett: { id: "vocab_nose_brett", category: "nose", tier: "expert",
      en: { term: "Brettanomyces", def: "A wild yeast that produces barnyard, leather, or clove like notes. Some traditions tolerate a light touch as complexity, others treat any presence as a fault." },
      fr: { term: "Brettanomyces", def: "Une levure sauvage qui produit des notes de basse cour, de cuir ou de clou de girofle. Certaines traditions tolèrent une touche légère comme un gage de complexité, d'autres considèrent toute présence comme un défaut." } },
    vocab_nose_petrol: { id: "vocab_nose_petrol", category: "nose", tier: "expert",
      en: { term: "Petrol note", def: "A kerosene like aroma that develops in aged Riesling, from a compound called TDN. Considered a hallmark of maturity by most Riesling drinkers rather than a flaw." },
      fr: { term: "Note de pétrole", def: "Un arôme rappelant le kérosène qui se développe dans les Rieslings âgés, dû à un composé appelé TDN. Considéré par la plupart des amateurs de Riesling comme un signe de maturité plutôt qu'un défaut." } },
    vocab_nose_garrigue: { id: "vocab_nose_garrigue", category: "nose", tier: "expert",
      en: { term: "Garrigue", def: "The scent of Mediterranean scrubland: thyme, rosemary, lavender, and bay. A recognised marker of Provence and southern Rhône terroir." },
      fr: { term: "Garrigue", def: "Le parfum du maquis méditerranéen : thym, romarin, lavande et laurier. Un marqueur reconnu du terroir provençal et du sud de la vallée du Rhône." } },

    // Palate & structure
    vocab_palate_tannin: { id: "vocab_palate_tannin", category: "palate", tier: "amateur",
      en: { term: "Tannin", def: "The drying, gripping sensation on your gums and tongue in red wine, coming from grape skins and seeds." },
      fr: { term: "Tanin", def: "La sensation asséchante et rugueuse sur les gencives et la langue dans un vin rouge, provenant de la peau et des pépins du raisin." } },
    vocab_palate_acidity: { id: "vocab_palate_acidity", category: "palate", tier: "amateur",
      en: { term: "Acidity", def: "The tartness that makes your mouth water. Gives a wine freshness and lift." },
      fr: { term: "Acidité", def: "La sensation vive qui fait saliver. Donne au vin sa fraîcheur et son tonus." } },
    vocab_palate_body: { id: "vocab_palate_body", category: "palate", tier: "amateur",
      en: { term: "Light, medium, or full bodied", def: "How heavy the wine feels in the mouth, closer to skimmed milk or to cream. Driven mainly by alcohol and extract." },
      fr: { term: "Léger, moyen, corsé", def: "La sensation de poids en bouche, plus proche du lait écrémé ou de la crème. Déterminée surtout par l'alcool et l'extrait." } },
    vocab_palate_sweetness: { id: "vocab_palate_sweetness", category: "palate", tier: "amateur",
      en: { term: "Dry to sweet", def: "Where the wine sits on the sugar spectrum, from bone dry through off dry to fully sweet." },
      fr: { term: "Sec à moelleux", def: "La position du vin sur l'échelle du sucre, du sec pur au demi sec puis au moelleux et au liquoreux." } },
    vocab_palate_minerality: { id: "vocab_palate_minerality", category: "palate", tier: "aficionado",
      en: { term: "Minerality", def: "A wet stone, chalk, or saline character, often associated with certain soils, though its actual cause is debated among scientists." },
      fr: { term: "Minéralité", def: "Un caractère de pierre mouillée, de craie ou de sel, souvent associé à certains sols, bien que sa cause réelle fasse débat parmi les scientifiques." } },
    vocab_palate_heat: { id: "vocab_palate_heat", category: "palate", tier: "aficionado",
      en: { term: "Alcohol heat", def: "A warming, almost peppery sensation at the back of the throat from higher alcohol. Pleasant in moderation, unbalancing in excess." },
      fr: { term: "Chaleur alcoolique", def: "Une sensation de chaleur, presque poivrée, à l'arrière de la gorge due à un alcool élevé. Agréable avec modération, déséquilibrante en excès." } },
    vocab_palate_texture: { id: "vocab_palate_texture", category: "palate", tier: "aficionado",
      en: { term: "Texture", def: "The physical feel of the wine beyond simple body: silky, chalky, grippy, or creamy." },
      fr: { term: "Texture", def: "La sensation physique du vin au delà du simple corps : soyeuse, crayeuse, granuleuse ou crémeuse." } },
    vocab_palate_concentration: { id: "vocab_palate_concentration", category: "palate", tier: "aficionado",
      en: { term: "Concentration", def: "How much flavour and material the wine carries, independent of body or alcohol. Related to yield and ripeness at harvest." },
      fr: { term: "Concentration", def: "La quantité de saveur et de matière que porte le vin, indépendamment du corps ou de l'alcool. Liée au rendement et à la maturité à la récolte." } },
    vocab_palate_malolactic: { id: "vocab_palate_malolactic", category: "palate", tier: "expert",
      en: { term: "Malolactic conversion", def: "A secondary fermentation converting sharp malic acid into softer lactic acid, adding a creamy, buttery texture, common in most reds and some whites like Meursault." },
      fr: { term: "Fermentation malolactique", def: "Une seconde fermentation qui convertit l'acide malique, plus vif, en acide lactique, plus doux, apportant une texture crémeuse et beurrée, courante dans la plupart des rouges et certains blancs comme le Meursault." } },
    vocab_palate_phenolic_ripeness: { id: "vocab_palate_phenolic_ripeness", category: "palate", tier: "expert",
      en: { term: "Phenolic ripeness", def: "Whether the tannins and skins have ripened, not just the sugar. Green, unripe tannin can persist even when sugar levels look ready to pick." },
      fr: { term: "Maturité phénolique", def: "Le fait que les tanins et les peaux aient atteint leur maturité, pas seulement le sucre. Des tanins verts et immatures peuvent persister même quand le taux de sucre semble prêt pour la vendange." } },
    vocab_palate_volatile_acidity: { id: "vocab_palate_volatile_acidity", category: "palate", tier: "expert",
      en: { term: "Volatile acidity", def: "Acetic character from bacterial activity, tasted as a vinegar or nail polish edge. A small amount adds lift, too much is a fault." },
      fr: { term: "Acidité volatile", def: "Un caractère acétique dû à une activité bactérienne, perçu comme une note de vinaigre ou de dissolvant. Une petite quantité apporte du tonus, un excès est un défaut." } },
    vocab_palate_dosage: { id: "vocab_palate_dosage", category: "palate", tier: "expert",
      en: { term: "Dosage", def: "The sugar added to sparkling wine after disgorgement, expressed as brut nature, extra brut, brut, or demi sec. Shapes the final style more than most drinkers realise." },
      fr: { term: "Dosage", def: "Le sucre ajouté à un vin effervescent après le dégorgement, exprimé en brut nature, extra brut, brut ou demi sec. Façonne le style final plus que la plupart des buveurs ne le pensent." } },

    // Finish
    vocab_finish_length: { id: "vocab_finish_length", category: "finish", tier: "amateur",
      en: { term: "Short or long finish", def: "How long the flavour lasts after you swallow. Longer generally signals higher quality, though it is not the only measure." },
      fr: { term: "Finale courte ou longue", def: "La durée pendant laquelle les arômes persistent après avoir avalé. Une finale plus longue signale en général une meilleure qualité, sans être le seul critère." } },
    vocab_finish_aftertaste: { id: "vocab_finish_aftertaste", category: "finish", tier: "amateur",
      en: { term: "Aftertaste", def: "The flavour that lingers after swallowing, which can differ from the taste in the mouth." },
      fr: { term: "Arrière goût", def: "La saveur qui persiste après avoir avalé, pouvant différer du goût perçu en bouche." } },
    vocab_finish_clean: { id: "vocab_finish_clean", category: "finish", tier: "amateur",
      en: { term: "Clean finish", def: "An ending with no unwanted flavours lingering. What you want as a baseline before judging anything more subtle." },
      fr: { term: "Finale nette", def: "Une fin sans saveur indésirable qui persiste. Le minimum attendu avant de juger quoi que ce soit de plus subtil." } },
    vocab_finish_bitter: { id: "vocab_finish_bitter", category: "finish", tier: "amateur",
      en: { term: "Bitter finish", def: "A lingering bitterness, common in wines with unripe tannin or heavy extraction, or from certain grape varieties by nature." },
      fr: { term: "Finale amère", def: "Une amertume qui persiste, fréquente dans les vins aux tanins immatures ou à l'extraction poussée, ou propre à certains cépages par nature." } },
    vocab_finish_balance: { id: "vocab_finish_balance", category: "finish", tier: "aficionado",
      en: { term: "Balance", def: "Whether acidity, tannin, alcohol, and fruit sit in proportion, with none dominating the others." },
      fr: { term: "Équilibre", def: "Le fait que l'acidité, les tanins, l'alcool et le fruit soient en proportion, sans qu'aucun ne domine les autres." } },
    vocab_finish_evolution: { id: "vocab_finish_evolution", category: "finish", tier: "aficionado",
      en: { term: "Evolution on the palate", def: "How the flavour changes from the moment the wine enters the mouth to the finish, rather than staying static throughout." },
      fr: { term: "Évolution en bouche", def: "La façon dont la saveur évolue depuis l'entrée en bouche jusqu'à la finale, plutôt que de rester identique du début à la fin." } },
    vocab_finish_dryness: { id: "vocab_finish_dryness", category: "finish", tier: "aficionado",
      en: { term: "Drying finish", def: "A tannin driven grip that lingers on the gums after swallowing, distinct from sweetness or sugar level." },
      fr: { term: "Finale asséchante", def: "Une prise tannique qui persiste sur les gencives après avoir avalé, distincte du niveau de sucre ou de la douceur." } },
    vocab_finish_persistence: { id: "vocab_finish_persistence", category: "finish", tier: "aficionado",
      en: { term: "Persistence", def: "A more deliberate judgement of length than casual aftertaste, tasted for and timed rather than simply noticed." },
      fr: { term: "Persistance", def: "Une évaluation plus rigoureuse de la longueur que le simple arrière goût, recherchée et chronométrée plutôt que simplement remarquée." } },
    vocab_finish_tertiary: { id: "vocab_finish_tertiary", category: "finish", tier: "expert",
      en: { term: "Tertiary development", def: "Aromas that emerge with bottle age: leather, forest floor, dried fruit, tobacco. A marker of maturity, not a fault." },
      fr: { term: "Arômes tertiaires", def: "Les arômes qui apparaissent avec le vieillissement en bouteille : cuir, sous bois, fruits secs, tabac. Un signe de maturité, non un défaut." } },
    vocab_finish_retro_olfaction: { id: "vocab_finish_retro_olfaction", category: "finish", tier: "expert",
      en: { term: "Retro olfaction", def: "Aromas perceived through the back of the throat and nose after swallowing, distinct from what you smell before tasting." },
      fr: { term: "Rétro olfaction", def: "Les arômes perçus par l'arrière gorge et le nez après avoir avalé, distincts de ce que l'on sent avant la dégustation." } },
    vocab_finish_typicity: { id: "vocab_finish_typicity", category: "finish", tier: "expert",
      en: { term: "Typicity", def: "Whether a wine expresses the identity expected of its appellation or grape variety, rather than tasting generic or out of character." },
      fr: { term: "Typicité", def: "Le fait qu'un vin exprime l'identité attendue de son appellation ou de son cépage, plutôt que de paraître générique ou hors caractère." } },
    vocab_finish_caudalie: { id: "vocab_finish_caudalie", category: "finish", tier: "expert",
      en: { term: "Caudalie", def: "The precise unit French sommeliers use to measure finish length, where one caudalie equals one second of flavour lingering after swallowing." },
      fr: { term: "Caudalie", def: "L'unité précise utilisée par les sommeliers français pour mesurer la longueur en bouche, une caudalie équivalant à une seconde de persistance aromatique après avoir avalé." } }

  }
};

// ─── VOCABULARY VARIATIONS ──────────────────────────────────────────────────
// Two concrete variations per term, each with a representative wine or region.
// Eight terms also carry a `tag`, used by the sommelier quiz below.

// Appearance
VOCABULARY.terms.vocab_appearance_intensity.variations = [
  { en: "Pale, light bodied whites and rosés", fr: "Blancs et rosés pâles et légers", example: "Muscadet (Loire), Provence rosé" },
  { en: "Deep, concentrated reds", fr: "Rouges profonds et concentrés", example: "Cahors (Malbec), Bandol (Mourvèdre)" }
];
VOCABULARY.terms.vocab_appearance_clarity.variations = [
  { en: "Bright and star bright clear", fr: "Brillant et parfaitement limpide", example: "Champagne, most classical estate wines" },
  { en: "Naturally hazy, unfined and unfiltered", fr: "Naturellement trouble, non collé et non filtré", example: "Pét nat and natural wine styles across the Loire and Jura" }
];
VOCABULARY.terms.vocab_appearance_hue.variations = [
  { en: "Pale straw to lemon gold", fr: "Paille pâle à or citron", example: "Chablis (Burgundy), Sancerre (Loire)", tag: "pale" },
  { en: "Deep ruby to garnet", fr: "Rubis profond à grenat", example: "Bandol (Provence), Cahors (South West)", tag: "deep" }
];
VOCABULARY.terms.vocab_appearance_legs.variations = [
  { en: "Fine, slow legs", fr: "Jambes fines et lentes", example: "Cool climate wines with moderate alcohol, like Chablis" },
  { en: "Thick, fast running legs", fr: "Jambes épaisses et rapides", example: "Warm climate, high alcohol reds like Châteauneuf du Pape" }
];
VOCABULARY.terms.vocab_appearance_rim.variations = [
  { en: "Narrow, same colour rim", fr: "Disque étroit, même couleur", example: "A young, recently bottled red such as current vintage Morgon" },
  { en: "Wide, pale rim against a darker core", fr: "Large disque pâle contre un cœur plus foncé", example: "A mature red with ten or more years in bottle, such as an aged Gevrey Chambertin" }
];
VOCABULARY.terms.vocab_appearance_core.variations = [
  { en: "Core close to the rim colour", fr: "Cœur proche de la couleur du disque", example: "Young Beaujolais or Loire Cabernet Franc" },
  { en: "Core much deeper than the rim", fr: "Cœur bien plus foncé que le disque", example: "Young, concentrated Bordeaux or Rhône reds" }
];
VOCABULARY.terms.vocab_appearance_bead.variations = [
  { en: "Coarse, quickly fading bubbles", fr: "Bulles grossières qui s'estompent vite", example: "Simple, short lees ageing Crémant" },
  { en: "Fine, persistent, long lasting bead", fr: "Bulles fines et persistantes", example: "Grower Champagne with extended lees ageing, such as Egly Ouriet" }
];
VOCABULARY.terms.vocab_appearance_deposit.variations = [
  { en: "No visible deposit", fr: "Aucun dépôt visible", example: "Most filtered, commercial wines" },
  { en: "Fine natural sediment", fr: "Fin dépôt naturel", example: "Unfiltered, aged Bordeaux or a natural Jura red" }
];
VOCABULARY.terms.vocab_appearance_bricking.variations = [
  { en: "Slight bricking at the rim only", fr: "Léger tuilé au disque seulement", example: "A red around ten years old, still mostly youthful" },
  { en: "Bricking through the whole glass", fr: "Tuilé sur l'ensemble du verre", example: "A fully mature red, twenty years or more, like an old Hermitage" }
];
VOCABULARY.terms.vocab_appearance_onionskin.variations = [
  { en: "Faint copper edge on a young rosé", fr: "Légère pointe cuivrée sur un rosé jeune", example: "An oxidative style rosé, such as some Bandol" },
  { en: "Full amber, onion skin colour", fr: "Ambre complet, couleur pelure d'oignon", example: "An intentionally oxidative white, such as a Jura Savagnin under voile" }
];
VOCABULARY.terms.vocab_appearance_robe_precision.variations = [
  { en: "Pourpre, blue toned purple", fr: "Pourpre, violet à reflets bleutés", example: "A very young, recently released Cahors" },
  { en: "Grenat, garnet with an orange edge", fr: "Grenat, avec un reflet orangé", example: "A Burgundy Pinot Noir with some bottle age" }
];
VOCABULARY.terms.vocab_appearance_limpidity.variations = [
  { en: "Brilliant, polished clarity", fr: "Clarté brillante et polie", example: "A well made, cellar aged Champagne" },
  { en: "Soft, gentle brightness without polish", fr: "Brillance douce, sans éclat marqué", example: "A gently handled, minimal intervention white" }
];

// Nose
VOCABULARY.terms.vocab_nose_fruit.variations = [
  { en: "Fresh, bright red fruit and citrus", fr: "Fruits rouges frais et agrumes", example: "Sancerre (Loire), young Morgon (Beaujolais)", tag: "bright" },
  { en: "Ripe, dark, brooding fruit", fr: "Fruits sombres, mûrs et profonds", example: "Cahors (South West), Châteauneuf du Pape (Rhône)", tag: "dark" }
];
VOCABULARY.terms.vocab_nose_floral.variations = [
  { en: "Delicate white flowers", fr: "Fleurs blanches délicates", example: "Riesling from Alsace, or a fine Condrieu (Rhône Viognier)" },
  { en: "Heady, exotic blossom", fr: "Fleurs exotiques et capiteuses", example: "Gewurztraminer (Alsace), Muscat based wines" }
];
VOCABULARY.terms.vocab_nose_oaky.variations = [
  { en: "Toasted, vanilla, spiced oak", fr: "Boisé toasté, vanillé, épicé", example: "Oaked Meursault (Burgundy), classed growth Bordeaux", tag: "yes" },
  { en: "No oak, pure and unadorned fruit", fr: "Sans bois, fruit pur et sans artifice", example: "Chablis (Burgundy), Muscadet (Loire)", tag: "no" }
];
VOCABULARY.terms.vocab_nose_fault.variations = [
  { en: "Wet cardboard, musty (cork taint)", fr: "Carton mouillé, moisi (goût de bouchon)", example: "A corked bottle from any producer, unrelated to how it was made" },
  { en: "Sharp vinegar or nail polish edge", fr: "Note tranchante de vinaigre ou de dissolvant", example: "An oxidised or bacterially unstable bottle" }
];
VOCABULARY.terms.vocab_nose_primary.variations = [
  { en: "Citrus and green apple", fr: "Agrumes et pomme verte", example: "Sancerre (Loire), Chablis (Burgundy)" },
  { en: "Blackcurrant bud and violet", fr: "Bourgeon de cassis et violette", example: "Chinon (Loire Cabernet Franc)" }
];
VOCABULARY.terms.vocab_nose_secondary.variations = [
  { en: "Bread and brioche from lees ageing", fr: "Pain et brioche issus de l'élevage sur lies", example: "Vintage Champagne, such as Bérêche & Fils" },
  { en: "Butter and cream from malolactic conversion", fr: "Beurre et crème issus de la fermentation malolactique", example: "Oaked Meursault (Burgundy)" }
];
VOCABULARY.terms.vocab_nose_intensity.variations = [
  { en: "Closed, reticent, needs air or time", fr: "Fermé, réservé, a besoin d'air ou de temps", example: "A young, recently bottled Gevrey Chambertin" },
  { en: "Expressive, generous, easy to read", fr: "Expressif, généreux, facile à lire", example: "Alsace Gewurztraminer" }
];
VOCABULARY.terms.vocab_nose_complexity.variations = [
  { en: "Simple, one clear note", fr: "Simple, une note dominante et nette", example: "A straightforward, everyday Beaujolais" },
  { en: "Layered, several aromas at once", fr: "Superposé, plusieurs arômes à la fois", example: "A mature grower Champagne or a fine Hermitage" }
];
VOCABULARY.terms.vocab_nose_reduction.variations = [
  { en: "Light flint or struck match", fr: "Léger silex ou allumette", example: "Chablis or grower Champagne, often blows off with swirling" },
  { en: "Heavier cooked cabbage or rubber", fr: "Chou cuit ou caoutchouc plus marqué", example: "A wine bottled with very little oxygen exposure, often needs decanting" }
];
VOCABULARY.terms.vocab_nose_brett.variations = [
  { en: "A light touch, spice and leather", fr: "Une touche légère, épices et cuir", example: "Some traditional, minimal sulphur Rhône and Languedoc reds" },
  { en: "Dominant, barnyard and sweaty saddle", fr: "Dominant, basse cour et cuir de selle", example: "An older bottle from a producer working with minimal intervention" }
];
VOCABULARY.terms.vocab_nose_petrol.variations = [
  { en: "Early petrol, still mostly fruit", fr: "Pétrole naissant, encore surtout fruité", example: "A five to seven year old Alsace Riesling" },
  { en: "Full kerosene character", fr: "Caractère de kérosène pleinement développé", example: "A fifteen year old or older Alsace or German Riesling" }
];
VOCABULARY.terms.vocab_nose_garrigue.variations = [
  { en: "Thyme and rosemary", fr: "Thym et romarin", example: "Bandol (Provence)" },
  { en: "Lavender and bay leaf", fr: "Lavande et laurier", example: "Châteauneuf du Pape (Rhône)" }
];

// Palate & structure
VOCABULARY.terms.vocab_palate_tannin.variations = [
  { en: "Silky, fine grained tannin", fr: "Tanin soyeux et fin", example: "Volnay (Burgundy Pinot Noir)" },
  { en: "Firm, chewy, structured tannin", fr: "Tanin ferme, mâché, structuré", example: "Pauillac (Bordeaux), young Madiran (South West Tannat)" }
];
VOCABULARY.terms.vocab_palate_acidity.variations = [
  { en: "Crisp, mouthwatering acidity", fr: "Acidité vive, qui fait saliver", example: "Chablis (Burgundy), Sancerre (Loire)", tag: "crisp" },
  { en: "Soft, round acidity", fr: "Acidité souple et ronde", example: "Southern Rhône Grenache, warm vintage Languedoc reds", tag: "soft" }
];
VOCABULARY.terms.vocab_palate_body.variations = [
  { en: "Light, delicate on the palate", fr: "Léger et délicat en bouche", example: "Muscadet (Loire), Beaujolais Cru", tag: "light" },
  { en: "Full, powerful, weighty", fr: "Corsé, puissant, avec du poids", example: "Châteauneuf du Pape (Rhône), classed growth Bordeaux", tag: "full" }
];
VOCABULARY.terms.vocab_palate_sweetness.variations = [
  { en: "Bone dry", fr: "Sec", example: "Most Burgundy, Loire, and Bordeaux table wines", tag: "dry" },
  { en: "A touch of sweetness", fr: "Une pointe de douceur", example: "Alsace Riesling Vendanges Tardives, Vouvray demi sec", tag: "offdry" }
];
VOCABULARY.terms.vocab_palate_minerality.variations = [
  { en: "Wet stone and chalk", fr: "Pierre mouillée et craie", example: "Chablis (Burgundy), on Kimmeridgian limestone" },
  { en: "Saline, almost oyster shell like", fr: "Salin, presque iodé", example: "Muscadet (Loire), grown near the Atlantic coast" }
];
VOCABULARY.terms.vocab_palate_heat.variations = [
  { en: "Barely noticeable warmth", fr: "Chaleur à peine perceptible", example: "A cool climate Alsace Riesling, around 12 percent alcohol" },
  { en: "Noticeable, peppery warmth", fr: "Chaleur marquée, presque poivrée", example: "A ripe, high alcohol Châteauneuf du Pape, often above 15 percent" }
];
VOCABULARY.terms.vocab_palate_texture.variations = [
  { en: "Silky, smooth, round texture", fr: "Texture soyeuse, souple, ronde", example: "Volnay (Burgundy), a well made Loire Chenin Blanc", tag: "silky" },
  { en: "Firm, structured, angular texture", fr: "Texture ferme, structurée, anguleuse", example: "Young Pauillac (Bordeaux), Hermitage (Rhône)", tag: "structured" }
];
VOCABULARY.terms.vocab_palate_concentration.variations = [
  { en: "Light, dilute, easy drinking", fr: "Léger, dilué, facile à boire", example: "A simple, high yield Languedoc value wine" },
  { en: "Dense, concentrated, low yield", fr: "Dense, concentré, issu de faibles rendements", example: "A grand cru Burgundy or classed growth Bordeaux" }
];
VOCABULARY.terms.vocab_palate_malolactic.variations = [
  { en: "Partial, keeps some crisp edge", fr: "Partielle, conserve un peu de vivacité", example: "Some cool climate Chardonnay in Chablis" },
  { en: "Full, creamy and buttery", fr: "Complète, crémeuse et beurrée", example: "Classic oaked Meursault (Burgundy)" }
];
VOCABULARY.terms.vocab_palate_phenolic_ripeness.variations = [
  { en: "Underripe, slightly green tannin", fr: "Sous mûr, tanin légèrement vert", example: "A red picked early in a difficult, rainy vintage" },
  { en: "Fully ripe, sweet, round tannin", fr: "Pleinement mûr, tanin doux et rond", example: "A red from a warm, generous vintage, like 2015 or 2018 Bordeaux" }
];
VOCABULARY.terms.vocab_palate_volatile_acidity.variations = [
  { en: "A faint, pleasant lift", fr: "Une pointe agréable et discrète", example: "Some traditional, low intervention Rhône and Languedoc reds" },
  { en: "Sharp, dominant vinegar note", fr: "Note de vinaigre nette et dominante", example: "A wine with a genuine winemaking fault, not tied to any region" }
];
VOCABULARY.terms.vocab_palate_dosage.variations = [
  { en: "Brut nature, no dosage", fr: "Brut nature, sans dosage", example: "Zero dosage grower Champagne, such as some cuvées from Bérêche & Fils" },
  { en: "Classic brut dosage", fr: "Dosage brut classique", example: "Most standard Champagne house non vintage blends" }
];

// Finish
VOCABULARY.terms.vocab_finish_length.variations = [
  { en: "Short, clean, easy finish", fr: "Finale courte, nette, facile", example: "An everyday Muscadet or simple Languedoc white", tag: "short" },
  { en: "Long finish, flavour lingers for minutes", fr: "Finale longue, la saveur persiste plusieurs minutes", example: "Grand cru Champagne, a fine mature Hermitage", tag: "long" }
];
VOCABULARY.terms.vocab_finish_aftertaste.variations = [
  { en: "Fruit driven aftertaste", fr: "Arrière goût dominé par le fruit", example: "A young, fruit forward Beaujolais" },
  { en: "Savoury, mineral aftertaste", fr: "Arrière goût salin et minéral", example: "Chablis (Burgundy)" }
];
VOCABULARY.terms.vocab_finish_clean.variations = [
  { en: "Clean and precise to the end", fr: "Net et précis jusqu'au bout", example: "A well made, technically sound wine from any region" },
  { en: "Slightly rustic, less polished ending", fr: "Finale légèrement rustique, moins polie", example: "A traditional, minimal intervention farmhouse style wine" }
];
VOCABULARY.terms.vocab_finish_bitter.variations = [
  { en: "A light, appetising bitterness", fr: "Une légère amertume qui ouvre l'appétit", example: "Grenache based reds from the southern Rhône" },
  { en: "Harsh, unripe bitterness", fr: "Amertume dure et sous mûre", example: "A red made from underripe grapes in a difficult vintage" }
];
VOCABULARY.terms.vocab_finish_balance.variations = [
  { en: "Fruit and freshness in balance", fr: "Fruit et fraîcheur en équilibre", example: "A well made Loire Chenin Blanc" },
  { en: "Power and structure in balance", fr: "Puissance et structure en équilibre", example: "A great vintage classed growth Bordeaux" }
];
VOCABULARY.terms.vocab_finish_evolution.variations = [
  { en: "Stays consistent from entry to finish", fr: "Reste constant de l'attaque à la finale", example: "A simple, well made everyday wine" },
  { en: "Changes and builds through the finish", fr: "Évolue et se construit jusqu'à la finale", example: "A great white Burgundy, gaining richness as it opens" }
];
VOCABULARY.terms.vocab_finish_dryness.variations = [
  { en: "Soft, barely drying", fr: "Doux, à peine asséchant", example: "A Loire Cabernet Franc, such as Chinon" },
  { en: "Firmly drying, grips the gums", fr: "Franchement asséchant, prend les gencives", example: "A young Madiran (South West Tannat)" }
];
VOCABULARY.terms.vocab_finish_persistence.variations = [
  { en: "A few seconds, then fades", fr: "Quelques secondes, puis s'efface", example: "A light, everyday Beaujolais" },
  { en: "Persists for a minute or more", fr: "Persiste pendant une minute ou plus", example: "A fine vintage Champagne or grand cru Burgundy" }
];
VOCABULARY.terms.vocab_finish_tertiary.variations = [
  { en: "Early tertiary notes, forest floor", fr: "Premières notes tertiaires, sous bois", example: "A ten year old Gevrey Chambertin" },
  { en: "Full tertiary development, leather and tobacco", fr: "Développement tertiaire complet, cuir et tabac", example: "A mature Pauillac, twenty years or older" }
];
VOCABULARY.terms.vocab_finish_retro_olfaction.variations = [
  { en: "Confirms what the nose promised", fr: "Confirme ce que le nez annonçait", example: "A harmonious, well made wine from any region" },
  { en: "Reveals something the nose missed", fr: "Révèle quelque chose que le nez n'avait pas capté", example: "A wine that seems simple on the nose but opens up in the mouth, common in Chenin Blanc" }
];
VOCABULARY.terms.vocab_finish_typicity.variations = [
  { en: "Textbook example of its appellation", fr: "Exemple d'école de son appellation", example: "A classic Sancerre, tasting exactly as expected" },
  { en: "An outlier, unusual for its appellation", fr: "Atypique pour son appellation", example: "A riper, more exotic Chablis in a very warm vintage" }
];
VOCABULARY.terms.vocab_finish_caudalie.variations = [
  { en: "A handful of caudalies, five to eight", fr: "Quelques caudalies, cinq à huit", example: "An easy drinking, everyday wine" },
  { en: "Fifteen caudalies or more, exceptional", fr: "Quinze caudalies ou plus, exceptionnel", example: "A great vintage Champagne or first growth Bordeaux" }
];
// ─── SOMMELIER QUIZ ──────────────────────────────────────────────────────────
// "This or that", branching. First question sets the style (white, red,
// sparkling, or open to suggestion); every question after that is drawn from
// that branch, so a red drinker gets asked about tannin, not sweetness level,
// and the open branch skips colour entirely and sticks to axes true of any wine.

const QUIZ_INTRO = {
  prompt_en: "What are you in the mood for?",
  prompt_fr: "De quelle humeur êtes vous ?",
  options: [
    { tag: "white",     en: "White",               fr: "Blanc" },
    { tag: "red",       en: "Red",                 fr: "Rouge" },
    { tag: "sparkling", en: "Sparkling",            fr: "Effervescent" },
    { tag: "open",      en: "Open to suggestion",   fr: "Ouvert à la suggestion" }
  ]
};

const QUIZ_BRANCH_STEPS = {

  white: [
    { axis: "fruit_white", prompt_en: "Which fruit character do you reach for?", prompt_fr: "Quel caractère de fruit recherchez vous ?", options: [
      { tag: "citrus",   en: "Crisp citrus and green orchard fruit", fr: "Agrumes vifs et fruits à pépins verts", example: "Chablis (Burgundy), Sancerre (Loire)" },
      { tag: "tropical", en: "Ripe stone fruit and tropical notes",  fr: "Fruits à noyau mûrs et notes exotiques",  example: "Alsace Pinot Gris, Condrieu (Rhône Viognier)" }
    ]},
    { axis: "oak", prompt_en: "Oak, or no oak?", prompt_fr: "Bois, ou sans bois ?", options: [
      { tag: "yes", en: "Toasted, vanilla, spiced oak",       fr: "Boisé toasté, vanillé, épicé",         example: "Oaked Meursault (Burgundy)" },
      { tag: "no",  en: "No oak, pure and unadorned fruit",   fr: "Sans bois, fruit pur et sans artifice", example: "Chablis (Burgundy), Muscadet (Loire)" }
    ]},
    { axis: "acidity", prompt_en: "Crisp, or round?", prompt_fr: "Vif, ou rond ?", options: [
      { tag: "crisp", en: "Crisp, mouthwatering acidity", fr: "Acidité vive, qui fait saliver", example: "Chablis (Burgundy), Sancerre (Loire)" },
      { tag: "soft",  en: "Soft, round acidity",          fr: "Acidité souple et ronde",         example: "Riper, warmer climate whites" }
    ]},
    { axis: "minerality", prompt_en: "What leads: stone, or fruit?", prompt_fr: "Qu'est ce qui domine : la pierre, ou le fruit ?", options: [
      { tag: "mineral", en: "Stony, saline, mineral driven",       fr: "Pierreux, salin, à dominante minérale",   example: "Chablis (Burgundy), Muscadet (Loire)" },
      { tag: "fruity",  en: "Ripe fruit driven, less mineral",     fr: "À dominante fruitée, peu minérale",       example: "Alsace Gewurztraminer" }
    ]},
    { axis: "texture", prompt_en: "Silky, or structured?", prompt_fr: "Soyeux, ou structuré ?", options: [
      { tag: "silky",      en: "Silky, smooth, round texture",       fr: "Texture soyeuse, souple, ronde",        example: "A well made Loire Chenin Blanc" },
      { tag: "structured", en: "Firm, structured, angular texture",  fr: "Texture ferme, structurée, anguleuse",  example: "Jura Savagnin under voile" }
    ]},
    { axis: "sweetness", prompt_en: "Dry, or a touch of sweetness?", prompt_fr: "Sec, ou une pointe de douceur ?", options: [
      { tag: "dry",    en: "Bone dry",              fr: "Sec",                    example: "Most Burgundy and Loire whites" },
      { tag: "offdry", en: "A touch of sweetness",  fr: "Une pointe de douceur",  example: "Alsace Riesling Vendanges Tardives, Vouvray demi sec" }
    ]},
    { axis: "finish", prompt_en: "Short and easy, or long and complex?", prompt_fr: "Courte et facile, ou longue et complexe ?", options: [
      { tag: "short", en: "Short, clean, easy finish",              fr: "Finale courte, nette, facile",                 example: "An everyday Muscadet" },
      { tag: "long",  en: "Long finish, flavour lingers for minutes", fr: "Finale longue, la saveur persiste plusieurs minutes", example: "A fine mature white Burgundy" }
    ]}
  ],

  red: [
    { axis: "fruit_red", prompt_en: "Which fruit character do you reach for?", prompt_fr: "Quel caractère de fruit recherchez vous ?", options: [
      { tag: "red",  en: "Bright red fruit, cherry and redcurrant", fr: "Fruits rouges frais, cerise et groseille", example: "Volnay (Burgundy Pinot Noir), Morgon (Beaujolais)" },
      { tag: "dark", en: "Dark fruit, blackcurrant and plum",       fr: "Fruits sombres, cassis et prune",           example: "Cahors (South West), Châteauneuf du Pape (Rhône)" }
    ]},
    { axis: "oak", prompt_en: "Oak, or no oak?", prompt_fr: "Bois, ou sans bois ?", options: [
      { tag: "yes", en: "Toasted, vanilla, spiced oak",     fr: "Boisé toasté, vanillé, épicé",          example: "Classed growth Bordeaux" },
      { tag: "no",  en: "No oak, pure and unadorned fruit", fr: "Sans bois, fruit pur et sans artifice", example: "A carbonic Beaujolais Cru" }
    ]},
    { axis: "tannin", prompt_en: "Silky, or structured tannin?", prompt_fr: "Tanin soyeux, ou structuré ?", options: [
      { tag: "silky",      en: "Silky, fine grained tannin",      fr: "Tanin soyeux et fin",           example: "Volnay (Burgundy Pinot Noir)" },
      { tag: "structured", en: "Firm, chewy, structured tannin",  fr: "Tanin ferme, mâché, structuré", example: "Pauillac (Bordeaux), young Madiran (South West)" }
    ]},
    { axis: "body", prompt_en: "How much weight do you want in the glass?", prompt_fr: "Quel poids recherchez vous dans le verre ?", options: [
      { tag: "light", en: "Light, delicate on the palate", fr: "Léger et délicat en bouche",  example: "Beaujolais Cru" },
      { tag: "full",  en: "Full, powerful, weighty",       fr: "Corsé, puissant, avec du poids", example: "Châteauneuf du Pape (Rhône), classed growth Bordeaux" }
    ]},
    { axis: "acidity", prompt_en: "Crisp, or round?", prompt_fr: "Vif, ou rond ?", options: [
      { tag: "crisp", en: "Crisp, mouthwatering acidity", fr: "Acidité vive, qui fait saliver", example: "Burgundy Pinot Noir" },
      { tag: "soft",  en: "Soft, round acidity",          fr: "Acidité souple et ronde",         example: "Southern Rhône Grenache" }
    ]},
    { axis: "finish", prompt_en: "Short and easy, or long and complex?", prompt_fr: "Courte et facile, ou longue et complexe ?", options: [
      { tag: "short", en: "Short, clean, easy finish",                fr: "Finale courte, nette, facile",                        example: "A young, everyday Beaujolais" },
      { tag: "long",  en: "Long finish, flavour lingers for minutes", fr: "Finale longue, la saveur persiste plusieurs minutes", example: "A fine mature Hermitage" }
    ]}
  ],

  sparkling: [
    { axis: "dosage", prompt_en: "Bone dry, or classic dosage?", prompt_fr: "Brut nature, ou dosage classique ?", options: [
      { tag: "bone_dry", en: "Brut nature, no dosage",     fr: "Brut nature, sans dosage",  example: "Zero dosage grower Champagne, such as Egly-Ouriet" },
      { tag: "classic",  en: "Classic brut dosage",        fr: "Dosage brut classique",     example: "Most standard Champagne house blends" }
    ]},
    { axis: "autolysis", prompt_en: "Toasty and vinous, or fresh and fruity?", prompt_fr: "Toasté et vineux, ou frais et fruité ?", options: [
      { tag: "toasty", en: "Long lees ageing, toasty brioche", fr: "Long élevage sur lies, brioche toastée", example: "Grower Champagne, such as Bérêche & Fils" },
      { tag: "fresh",  en: "Fresh, fruit forward, little lees character", fr: "Frais, fruité, peu marqué par les lies", example: "A lighter, fruit driven house style" }
    ]},
    { axis: "fruit", prompt_en: "Which fruit character do you reach for?", prompt_fr: "Quel caractère de fruit recherchez vous ?", options: [
      { tag: "bright", en: "Citrus and orchard fruit", fr: "Agrumes et fruits à pépins", example: "Blanc de Blancs, Chardonnay driven" },
      { tag: "dark",   en: "Red berry and cherry",     fr: "Baies rouges et cerise",     example: "Blanc de Noirs or a structured rosé Champagne" }
    ]},
    { axis: "acidity", prompt_en: "Crisp, or round?", prompt_fr: "Vif, ou rond ?", options: [
      { tag: "crisp", en: "Crisp, mouthwatering acidity", fr: "Acidité vive, qui fait saliver", example: "A cool vintage, chalk driven Champagne" },
      { tag: "soft",  en: "Soft, round acidity",          fr: "Acidité souple et ronde",         example: "A riper, warmer vintage Champagne" }
    ]},
    { axis: "bead", prompt_en: "Coarse and quick, or fine and lasting?", prompt_fr: "Grossière et rapide, ou fine et durable ?", options: [
      { tag: "coarse", en: "Coarse, quickly fading bubbles",     fr: "Bulles grossières qui s'estompent vite", example: "A simple, short lees ageing Crémant" },
      { tag: "fine",   en: "Fine, persistent, long lasting bead", fr: "Bulles fines et persistantes",           example: "Grower Champagne with extended lees ageing" }
    ]},
    { axis: "finish", prompt_en: "Short and easy, or long and complex?", prompt_fr: "Courte et facile, ou longue et complexe ?", options: [
      { tag: "short", en: "Short, clean, easy finish",                fr: "Finale courte, nette, facile",                        example: "An entry level non vintage blend" },
      { tag: "long",  en: "Long finish, flavour lingers for minutes", fr: "Finale longue, la saveur persiste plusieurs minutes", example: "A grand cru vintage Champagne" }
    ]}
  ],

  open: [
    { axis: "fruit", prompt_en: "Which fruit character do you reach for?", prompt_fr: "Quel caractère de fruit recherchez vous ?", options: [
      { tag: "bright", en: "Fresh, bright red fruit and citrus", fr: "Fruits rouges frais et agrumes",  example: "Sancerre (Loire), young Morgon (Beaujolais)" },
      { tag: "dark",   en: "Ripe, dark, brooding fruit",          fr: "Fruits sombres, mûrs et profonds", example: "Cahors (South West), Châteauneuf du Pape (Rhône)" }
    ]},
    { axis: "oak", prompt_en: "Oak, or no oak?", prompt_fr: "Bois, ou sans bois ?", options: [
      { tag: "yes", en: "Toasted, vanilla, spiced oak",     fr: "Boisé toasté, vanillé, épicé",          example: "Oaked Meursault (Burgundy), classed growth Bordeaux" },
      { tag: "no",  en: "No oak, pure and unadorned fruit", fr: "Sans bois, fruit pur et sans artifice", example: "Chablis (Burgundy), Muscadet (Loire)" }
    ]},
    { axis: "minerality", prompt_en: "What leads: stone, or fruit?", prompt_fr: "Qu'est ce qui domine : la pierre, ou le fruit ?", options: [
      { tag: "mineral", en: "Stony, saline, mineral driven",   fr: "Pierreux, salin, à dominante minérale", example: "Chablis (Burgundy), Muscadet (Loire)" },
      { tag: "fruity",  en: "Ripe fruit driven, less mineral", fr: "À dominante fruitée, peu minérale",     example: "Alsace Gewurztraminer, southern Rhône reds" }
    ]},
    { axis: "acidity", prompt_en: "Crisp, or round?", prompt_fr: "Vif, ou rond ?", options: [
      { tag: "crisp", en: "Crisp, mouthwatering acidity", fr: "Acidité vive, qui fait saliver", example: "Chablis (Burgundy), Sancerre (Loire)" },
      { tag: "soft",  en: "Soft, round acidity",          fr: "Acidité souple et ronde",         example: "Southern Rhône Grenache, warm vintage Languedoc reds" }
    ]},
    { axis: "texture", prompt_en: "Silky, or structured?", prompt_fr: "Soyeux, ou structuré ?", options: [
      { tag: "silky",      en: "Silky, smooth, round texture",      fr: "Texture soyeuse, souple, ronde",        example: "Volnay (Burgundy), a well made Loire Chenin Blanc" },
      { tag: "structured", en: "Firm, structured, angular texture", fr: "Texture ferme, structurée, anguleuse",  example: "Young Pauillac (Bordeaux), Hermitage (Rhône)" }
    ]},
    { axis: "sweetness", prompt_en: "Dry, or a touch of sweetness?", prompt_fr: "Sec, ou une pointe de douceur ?", options: [
      { tag: "dry",    en: "Bone dry",             fr: "Sec",                   example: "Most Burgundy, Loire, and Bordeaux table wines" },
      { tag: "offdry", en: "A touch of sweetness", fr: "Une pointe de douceur", example: "Alsace Riesling Vendanges Tardives, Vouvray demi sec" }
    ]},
    { axis: "finish", prompt_en: "Short and easy, or long and complex?", prompt_fr: "Courte et facile, ou longue et complexe ?", options: [
      { tag: "short", en: "Short, clean, easy finish",                fr: "Finale courte, nette, facile",                        example: "An everyday Muscadet or simple Languedoc white" },
      { tag: "long",  en: "Long finish, flavour lingers for minutes", fr: "Finale longue, la saveur persiste plusieurs minutes", example: "Grand cru Champagne, a fine mature Hermitage" }
    ]}
  ]
};

// Simplified signature profiles, one pool per branch. A region can appear in
// more than one pool (Burgundy makes both benchmark whites and reds) with a
// different profile in each, since the two styles taste nothing alike.
const QUIZ_REGION_PROFILES = {

  white: {
    alsace:   { fruit_white: "tropical", oak: "no",  acidity: "crisp", minerality: "fruity",  texture: "silky",      sweetness: "offdry", finish: "long"  },
    loire:    { fruit_white: "citrus",   oak: "no",  acidity: "crisp", minerality: "mineral", texture: "silky",      sweetness: "dry",    finish: "short" },
    burgundy: { fruit_white: "citrus",   oak: "yes", acidity: "crisp", minerality: "mineral", texture: "silky",      sweetness: "dry",    finish: "long"  },
    jura:     { fruit_white: "citrus",   oak: "no",  acidity: "crisp", minerality: "mineral", texture: "structured", sweetness: "dry",    finish: "long"  },
    provence: { fruit_white: "citrus",   oak: "no",  acidity: "crisp", minerality: "fruity",  texture: "silky",      sweetness: "dry",    finish: "short" }
  },

  red: {
    burgundy:   { fruit_red: "red",  oak: "yes", tannin: "silky",      body: "light", acidity: "crisp", finish: "long"  },
    beaujolais: { fruit_red: "red",  oak: "no",  tannin: "silky",      body: "light", acidity: "crisp", finish: "short" },
    bordeaux:   { fruit_red: "dark", oak: "yes", tannin: "structured", body: "full",  acidity: "soft",  finish: "long"  },
    rhone:      { fruit_red: "dark", oak: "yes", tannin: "structured", body: "full",  acidity: "soft",  finish: "long"  },
    languedoc:  { fruit_red: "dark", oak: "no",  tannin: "structured", body: "full",  acidity: "soft",  finish: "short" },
    sw:         { fruit_red: "dark", oak: "yes", tannin: "structured", body: "full",  acidity: "soft",  finish: "long"  }
  },

  open: {
    champagne:  { fruit: "bright", oak: "no",  minerality: "mineral", acidity: "crisp", texture: "silky",      sweetness: "dry",    finish: "long"  },
    alsace:     { fruit: "bright", oak: "no",  minerality: "fruity",  acidity: "crisp", texture: "silky",      sweetness: "offdry", finish: "long"  },
    loire:      { fruit: "bright", oak: "no",  minerality: "mineral", acidity: "crisp", texture: "silky",      sweetness: "dry",    finish: "short" },
    burgundy:   { fruit: "bright", oak: "yes", minerality: "mineral", acidity: "crisp", texture: "silky",      sweetness: "dry",    finish: "long"  },
    beaujolais: { fruit: "bright", oak: "no",  minerality: "fruity",  acidity: "crisp", texture: "silky",      sweetness: "dry",    finish: "short" },
    bordeaux:   { fruit: "dark",   oak: "yes", minerality: "fruity",  acidity: "soft",  texture: "structured", sweetness: "dry",    finish: "long"  },
    rhone:      { fruit: "dark",   oak: "yes", minerality: "fruity",  acidity: "soft",  texture: "structured", sweetness: "dry",    finish: "long"  },
    provence:   { fruit: "bright", oak: "no",  minerality: "fruity",  acidity: "crisp", texture: "silky",      sweetness: "dry",    finish: "short" },
    languedoc:  { fruit: "dark",   oak: "no",  minerality: "fruity",  acidity: "soft",  texture: "structured", sweetness: "dry",    finish: "short" },
    sw:         { fruit: "dark",   oak: "yes", minerality: "fruity",  acidity: "soft",  texture: "structured", sweetness: "dry",    finish: "long"  },
    jura:       { fruit: "bright", oak: "no",  minerality: "mineral", acidity: "crisp", texture: "structured", sweetness: "dry",    finish: "long"  }
  }
};

// Sparkling is handled separately: with only one dedicated sparkling region
// in the dataset, the quiz always lands on Champagne, and uses the dosage and
// autolysis answers to pick which of its five producers fits best.
const QUIZ_SPARKLING_PRODUCER = {
  "bone_dry:toasty": "egly_ouriet",
  "bone_dry:fresh":  "laherte",
  "classic:toasty":  "bereche",
  "classic:fresh":   "pierre_peters"
};
