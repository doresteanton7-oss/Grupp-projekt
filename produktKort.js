MainContentProductCards = [];

//Skapar classen som används till produkt korten
class ProductCard {
    constructor(name, price, image, category, description) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.category = category;
        this.description = description;

        this.addToArray();
    }
    // Metod som lägger till objekt till array.
    addToArray() {
        MainContentProductCards.push(this);
    }
}

//#region Phones
let iPhone17 = new ProductCard(
    "iPhone 17",
    10995,
    "https://www.apple.com/v/iphone/home/cg/images/overview/select/iphone_17__ck7zzemcw37m_large.jpg",
    "MobilTelefon",
    "Nu är nya iPhone 17 här med tunna rundade kanter och tåliga material som Ceramic Shield 2 på framsidan – lika snygg imorgon som idag. På den 6,3 tum stora Super Retina XDR-skärmen kan du se och göra mer av allt du gillar.4 Du får jämnare skrollning och mer uppslukande spel med ProMotion, som har en adaptiv uppdaterings­frekvens på upp till 120 Hz. Ta en provtur."
);
let iPhone17Pro = new ProductCard(
    "iPhone 17 pro",
    14995,
    "https://www.apple.com/v/iphone/home/cg/images/overview/select/iphone_17pro__0s6piftg70ym_large.jpg",
    "MobilTelefon",
    "Hela kamerasystemet i iPhone 17 Pro präglas av nytänkande som tar dina bilder ett steg längre. Den har det längsta tele­objektivet någonsin på en iPhone med en brännvidd som mot­svarar upp till 200 mm, vår senaste design med tetraprisma och 56 % större sensor. Du får ett ännu bredare spektrum av kreativa möjligheter och längre räckvidd tack vare 16× optiskt zoom­omfång. Och du kan ta fantastiska bilder i svagt ljus och spela in video med otrolig kvalitet. "
);
let iPhoneAir = new ProductCard(
    "iPhone Air",
    13995,
    "https://www.apple.com/v/iphone/home/cg/images/overview/select/iphone_air__f0t56fef3oey_large.jpg",
    "MobilTelefon",
    "Helt nya iPhone Air är så ofattbart tunn och lätt att den nästan inte känns när du håller den i handen. Vår tunnaste iPhone någonsin är 5,6 mm tunn och väger bara 165 gram.3 Trots det har den en stor, fängslande 6,5-tums­skärm4 och drivs med kraften från A19 Pro-chippet. Det är så motsägelsefullt att du måste hålla i den för att kunna tro på det. "
);
let galaxyA16 = new ProductCard(
    "Samsung Galaxy A16",
    2790,
    "https://next-media.elkjop.com/image/dv_web_D18000126910204/820904/samsung-galaxy-a16-5g-smartphone-4128gb-svart.jpg?w=640&q=75",
    "MobilTelefon",
    "Möt Samsung Galaxy A16 5G-smartphone, en pålitlig följeslagare som enkelt tar dig genom dagen. Den har en 6,7-tums FHD+-skärm med 90Hz uppdateringsfrekvens, trippel kamerauppsättning, kapabel åttakärnig processor och ett 5000mAh batteri."
);
let galaxyS25FE = new ProductCard(
    "Samsung Galaxy S25 FE",
    8990,
    "https://next-media.elkjop.com/image/dv_web_D18000133838894/968439/samsung-galaxy-s25-fe-5g-smartphone-8128gb-marinbla.jpg?w=640&q=75",
    "MobilTelefon",
    "Upplev toppmodern prestanda och funktioner med Samsung Galaxy S25 FE 5G-telefonen. Den är utrustad med en 6,7-tums Dynamic AMOLED-skärm, 50 MP trippelkamera med Nightography, 4900 mAh batteri med trådlös laddning och smarta AI-funktioner."
);
let galaxyS25Ultra = new ProductCard(
    "Samsung Galaxy S25 Ultra",
    17990,
    "https://next-media.elkjop.com/image/dv_web_D18000133830216/877349/samsung-galaxy-s25-ultra-5g-smartphone-12256gb-titanium-black.jpg?w=640&q=75",
    "MobilTelefon",
    "Samsung Galaxy S25 Ultra 5G smartphone med banbrytande AI-teknologi har en 6,9-tums Dynamic AMOLED 2x-skärm, en Snapdragon Elite 8-processor och en 200Mpx huvudkamera."
);
let googlePixel10ProFold = new ProductCard(
    "Google Pixel 10 Pro Fold 5G smartphone 16/256GB",
    16990,
    "https://next-media.elkjop.com/image/dv_web_D180001340310/943530/google-pixel-10-pro-fold-5g-smartphone-16256gb-mansten.jpg?w=1200&q=75",
    "MobilTelefon",
    "Google Pixel 10 Pro Fold 5G smartphone har en imponerande vikbar 6,4-tums OLED-skärm samt 256GB lagring, 16GB RAM och stöd för avancerad AI, IP68-klassning och en hållbar gångjärnsmekanism som klarar upp till 10 års vikningar."
);
let googlePixel9a = new ProductCard(
    "Google Pixel 9a 5G smartphone 8/256GB",
    5090,
    "https://next-media.elkjop.com/image/dv_web_D18000130341606/893862/google-pixel-9a-5g-smartphone-8256gb-obsidian.jpg?w=1200&q=75",
    "MobilTelefon",
    "Förenkla ditt dagliga liv med Google Pixel 9a 5G-smartphone, som drivs av Tensor G4-chipset. Njut av innehåll på en 6,3-tums POLED-skärm, ta fantastiska bilder med en 48Mpx-kamera och njut av AI-funktioner och ett långvarigt batteri på 5100mAh."
);
//#endregion
//#region Gaming

let logitechHeadset = new ProductCard(
    "Logitech PRO X 2",
    2299,
    "https://www.elgiganten.se/image/dv_web_D1800013336608/611835/logitech-g-pro-x-2-lightspeed-tradlost-gamingheadset-svart.jpg",
    "Gaming",
    "Ta dig fram i spelvärlden med Logitech G Pro X 2 Lightspeed trådlösa gamingheadset designat med hjälp av världens bästa proffsspelare. Headsetet ger perfekt ljudtydlighet tack vare 7.1-surroundljudet och 50 mm graphene-drivelement."
);
let logitechMouse = new ProductCard(
    "Logitech G Pro Superlight 2 SE trådlös mus",
    1399,
    "https://next-media.elkjop.com/image/dv_web_D18000130615453/913758/logitech-g-pro-superlight-2-se-tradlos-mus.jpg?w=640&q=75",
    "Gaming",
    "Logitech G Pro Superlight 2 SE trådlösa mus erbjuder en lätt design, justerbar DPI upp till 44 000 DPI, en Hero-2 optisk sensor, trådlös USB-anslutning med låg latens via Lightspeed-teknologi, anpassningsbara knappar och en bekväm ambidextriös form."
);
let logitechKeyboard = new ProductCard(
    "Logitech G Pro gaming keyboard",
    1199,
    "https://next-media.elkjop.com/image/dv_web_D1800010021304094/149320/logitech-g-pro-gaming-keyboard-nordic-layout.jpg?w=640&q=75",
    "Gaming",
    "Logitech G Pro tangentbord är designat för vinnare. Tack vare den kompakta designen utan numerisk knappsats kan du ta med denna best på varje turnering, vare sig det handlar om en vänskapsmatch med polarna eller ett seriöst mästerskap."
);
let monitor = new ProductCard(
    "AOC 27G4HRE 27”/FHD/IPS/200Hz/1ms",
    3299,
    "https://next-media.elkjop.com/image/dv_web_D1800013238155/918349/aoc-27g4hre-27fhdips200hz1ms.jpg?w=640&q=75",
    "Gaming",
    "AOC 27G4HRE | FHD | IPS | 200Hz | 1ms27 gamingskärm med 200Hz IPS-panel, 1ms responstid, HDR10-visuals, AdaptiveSync och ergonomisk eSports-fot för bekvämlighet och smidig spelupplevelse."
);
let mouseMat = new ProductCard(
    "NOS musmatta gaming (XXL)",
    259,
    "https://next-media.elkjop.com/image/dv_web_D180001002451879/176898/nos-musmatta-gaming-xxl.jpg?w=640&q=75",
    "Gaming",
    "Med NOS musmatta för gaming kan du glida och flytta din mus utan hinder. Tack vare den släta ytan får du bra hastighet och precision och de sydda kanterna förhindrar fransning och du får en lång livslängd."
);
let console = new ProductCard(
    "Playstation 5 Pro 2TB",
    8790,
    "https://next-media.elkjop.com/image/dv_web_D18000134916959/994805/playstation-5-pro-2tb-spelkonsol.jpg?w=3840&q=75",
    "Gaming",
    "PlayStation 5 Pro ger dig silkeslen spelupplevelse med upp till 120 fps i kompatibla spel, med stöd för 120 Hz-utmatning på 4K-skärmar och är förbättrad med AI genom PlayStation Spectral Super Resolution."
);
let steamDeck = new ProductCard(
    "Valve Steam Deck OLED handhållen spelmaskin 512GB",
    9995,
    "https://next-media.elkjop.com/image/dv_web_D1800010021763278/728525/valve-steam-deck-oled-handhallen-spelmaskin-512gb.jpg?w=1200&q=75",
    "Gaming",
    "Valve Steam Deck OLED handhållen spelmaskin ger dig friheten att spela var du vill. Du kan välja din favoritkonfiguration, oavsett om du vill spela på språng, använda en mängd olika kontroller, ansluta Steam Deck till din TV eller använda den som en stationär PC."
);
let rogXboxAlly = new ProductCard(
    "ROG Xbox ALLY handhållen spelkonsol",
    6990,
    "https://next-media.elkjop.com/image/dv_web_D180001329610/936805/rog-xbox-ally-handhallen-spelkonsol.jpg?w=1200&q=75",
    "Gaming",
    "ROG Xbox ALLY, en bärbar spelkonsol med AMD Z2A-processor, låter dig njuta av spel var som helst. Utrustad med en 7-tums FHD 120Hz IPS-skärm och stödjer Wi-Fi 6E, Bluetooth 5.2, USB-C."
);
//#endregion
//#region Vitvaror

let washingMachine = new ProductCard(
    "Delonghi Tvättmaskin D914PWM25N (9kg)",
    6995,
    "https://next-media.elkjop.com/image/dv_web_D18000134010436/922363/delonghi-tvattmaskin-d914pwm25n-9kg.jpg?w=640&q=75",
    "Vitvaror",
    "Delonghi tvättmaskin D914PWM25N klarar upp till 9 kg tvätt och har 14 program, fördröjd start och en tidsindikator. Den har även ett Stain Remove-program för att ta bort envisa fläckar."
);
let washingMachine2 = new ProductCard(
    "Miele Tvättmaskin WEB695 WCS 125 Edition (8kg)",
    11995,
    "https://next-media.elkjop.com/image/dv_web_D1800012698953/725395/miele-tvattmaskin-web695-wcs-125-edition-8kg.jpg?w=1200&q=75",
    "Vitvaror",
    "Miele WEB695 WCS 125 i Lotus White erbjuder förstklassig tvättvård med SteamCare, TwinDos automatisk dosering, Wi-Fi och en 59L trumma, vilket säkerställer effektiv och tyst drift samt mångsidiga program för alla typer av textilier."
);
let stovetop = new ProductCard(
    "Hisense Induktionshäll HI842SC (80cm)",
    8995,
    "https://next-media.elkjop.com/image/dv_web_D180001280329881/776825/hisense-induktionshall-hi842sc-80cm.jpg?w=640&q=75",
    "Vitvaror",
    "Whirlpool-kylskåp SW8 EV2Q W 2 kommer med en nettovolym på 363 liter, sex hyllor, en grönsakslåda, 6th Sense-teknik och MultiFlow luftcirkulation. Kylskåpet är idealiskt för dem som letar efter gott om lagringskapacitet."
);
let oven = new ProductCard(
    "AEG Serie 6000 Inbyggnadsugn BCP6020M (Rostfri)",
    9995,
    "https://next-media.elkjop.com/image/dv_web_D1800010021575748/300708/aeg-serie-6000-inbyggnadsugn-bcp6020m-rostfri.jpg?w=640&q=75",
    "Vitvaror",
    "Det gyllenbruna på potatisgratängen. Skorpan på en oxfilé. Saftigheten i en god chokladtårta. Att få jämna resultat varje gång kräver exakt kontrollerad värme, som fördelas konsekvent i hela ugnen. Till skillnad från vanliga ugnar har SurroundCook-ug"
);
let dishwasher = new ProductCard(
    "Bosch Serie 6 Diskmaskin SMU6ZCW71S (vit)",
    8995,
    "https://next-media.elkjop.com/image/dv_web_D1800012699179/767176/bosch-serie-6-diskmaskin-smu6zcw71s-vit.jpg?w=1200&q=75",
    "Vitvaror",
    "Bosch SMU6ZCW71 diskmaskin är utformad för att leverera effektiv och grundlig rengöring med sina avancerade funktioner, vilket gör den till ett lämpligt tillskott i alla kök."
);
let dishwasher2 = new ProductCard(
    "Siemens IQ300 Diskmaskin SN43ES71MS (rostfri)",
    7495,
    "https://next-media.elkjop.com/image/dv_web_D18000128321881/795102/siemens-iq300-diskmaskin-sn43es71ms-rostfri.jpg?w=1200&q=75",
    "Vitvaror",
    "Effektiv och tyst, Siemens SN43ES71MS diskmaskin erbjuder flexibel lastning, avancerad rengöringsteknik och energibesparande funktioner för skinande rena tallrikar varje gång."
);
let microWave1 = new ProductCard(
    "Whirlpool Fristående Mikrovågsugn MWPS101B",
    899,
    "https://next-media.elkjop.com/image/dv_web_D180001323132/927664/whirlpool-fristaende-mikrovagsugn-mwps101b-svart.jpg?w=1200&q=75",
    "Vitvaror",
    "Whirlpools fristående mikrovågsugn MWPS101B har en elegant svart design med en kapacitet på 20 liter, en 25 cm roterande platta, 6 effektnivåer och funktioner som varmhållning, uppvärmning, degjäsning och yoghurt."
);
let microWave2 = new ProductCard(
    "Siemens IQ300 mikrovågsugn BF523LMB3",
    2967,
    "https://next-media.elkjop.com/image/dv_web_D18000135114370/382796/siemens-iq300-mikrovagsugn-bf523lmb3-svart.jpg?w=1200&q=75",
    "Vitvaror",
    "7 automatiska program som hjälper dig att uppnå fantastiska resultat. För snabb rengöring så mjukas smutsen upp på förhand genom förångning av vatten med lite diskmedel. Den kan sedan lätt torkas ur – humidClean-programmet."
);
//#endregion
//#region TV
let samsungTv = new ProductCard(
    "Samsung 55” U8095F 4K smart-TV (2025)",
    9990,
    "https://next-media.elkjop.com/image/dv_web_D1800013064282/906402/samsung-55-u8095f-4k-smart-tv-2025.jpg?w=640&q=75",
    "TV",
    "Samsung 55” U8095F 4K smart-TV levererar otroliga bilder med fantastiskt djup och detaljer tack vare sin Crystal Processor 4K, HDR och PurColor. Du kan också njuta av suveränt ljud, det smidiga Tizen OS och massor av spelfunktioner."
);
let iffalconTv = new ProductCard(
    "iFFALCON 32” S45 QLED TV (2025)",
    4490,
    "https://next-media.elkjop.com/image/dv_web_D18000135517479/995561/iffalcon-32-s45-qled-tv-2025.jpg?w=640&q=75",
    "TV",
    "iFFALCON S45-serien kombinerar en slimmad, modern design med QLED och HDR-bildkvalitet samt det mest avancerade Smart TV-systemet hittills: Android TV med Google Cast inbyggd."
);
let lgTv = new ProductCard(
    "LG 55” C5 Pro 4K OLED evo TV (2025)",
    25990,
    "https://next-media.elkjop.com/image/dv_web_D18000135110753/912294/lg-55-c5-pro-4k-oled-evo-tv-2025.jpg?w=640&q=75",
    "TV",
    "LG OLED evo C5 Pro tar C-serien till nästa nivå med högre ljusstyrka och skärpa tack vare Brightness Booster Pro. Upplev djup svärta, livfulla färger och smarta funktioner – film, spel och sport blir alltid skarpt och realistiskt."
);
let tclTv = new ProductCard(
    "TCL 85” QLED780K 4K QLED TV (2025)",
    9990,
    "https://next-media.elkjop.com/image/dv_web_D18000135110748/899856/tcl-85-qled780k-4k-qled-tv-2025.jpg?w=1200&q=75",
    "TV",
    "TCL QLED780K kombinerar 4K UHD HDR, QLED, AiPQ-processor och Motion Clarity för färgstark och skarp HDR-bildkvalitet."
);
let samsungTv2 = new ProductCard(
    "Samsung 65” The Frame 4K QLED Smart TV (2025)",
    13990,
    "https://next-media.elkjop.com/image/dv_web_D1800013339810/906429/samsung-65-the-frame-4k-qled-smart-tv-2025.jpg?w=1200&q=75",
    "TV",
    "Samsung 65” The Frame 4K QLED Smart-TV levererar imponerande bildkvalitet tack vare sin QLED-teknik och kraftfulla NQ4 AI Gen2-processor. Även när den är avstängd visar denna TV vackra konstverk som kompletterar ditt rum."
);
let philipsTv = new ProductCard(
    "Philips 55” OLED760 4K OLED Smart TV (2025)",
    11990,
    "https://next-media.elkjop.com/image/dv_web_D18000130635206/914122/philips-55-oled760-4k-oled-smart-tv-2025.jpg?w=1200&q=75",
    "TV",
    "Philips 55” OLED760 4K OLED Smart TV erbjuder förstklassig bildkvalitet och en värld av underhållning inom räckhåll. P5 AI Intelligent Picture Engine med HDR, OLED-teknik och Ambilight ger en uppslukande upplevelse som sträcker sig bortom din skärm."
);
let tclTv2 = new ProductCard(
    "TCL 115” C7K 4K MINI-LED TV",
    249990,
    "https://next-media.elkjop.com/image/dv_web_D1800013124125/903088/tcl-115-c7k-4k-mini-led-tv-2025.jpg?w=1200&q=75",
    "TV",
    "TCL C7K-serien kombinerar QD-Mini LED, QLED, 4K HDR Premium 3000, 144Hz Motion Clarity Pro för kraftfullt exakta kontraster, skarp och färgstark HDR-bildkvalitet."
);
let samsungTv3 = new ProductCard(
    "Samsung 115” QN90F Neo QLED 4K MiniLED Smart-TV",
    124990,
    "https://next-media.elkjop.com/image/dv_web_D1800013604202/987983/samsung-115-qn90f-neo-qled-4k-miniled-smart-tv-2025.jpg?w=1200&q=75",
    "TV",
    "Samsung 115” QN90F 4K MiniLED Smart TV ger liv åt alla dina favoritfilmer, TV-serier och spel. Med Neo Quantum Dot och Quantum Mini LED Pro, fantastiskt surroundljud och en mängd spelsfunktioner kommer denna TV inte att göra dig besviken."
);
//#endregion

//Knappar till kategorierna som finns på navbaren
let gamingButton = document.querySelector("#header-button1");
let vitvarorButton = document.querySelector("#header-button2");
let tvButton = document.querySelector("#header-button3");
let mobilTelefonButton = document.querySelector("#header-button4");
// Variabel för att hålla reda på den aktiva kategorin. Null innebär att alla kategorier är aktiva.
let activeCategory = null;

gamingButton.addEventListener("click", () => setCategory("Gaming"));
vitvarorButton.addEventListener("click", () => setCategory("Vitvaror"));
tvButton.addEventListener("click", () => setCategory("TV"));
mobilTelefonButton.addEventListener("click", () => setCategory("MobilTelefon"));

// Funktion för att hantera kategorier.
function setCategory(category) {
    activeCategory = category;
    renderPageContent();
}

//#region Page Renderers
function renderPageContent() {
    let mainCardContainer = document.querySelector("#main-cardContainer");
    mainCardContainer.innerHTML = "";

    for (let i = 0; i < MainContentProductCards.length; i++) {
        const card = MainContentProductCards[i];
        // Om ingen kategori är vald visas alla kategorier(alla produkter).
        // Är en kategori vald så visas endast den kategorin.
        if (activeCategory === null || card.category === activeCategory) {
            mainCardContainer.innerHTML += renderMainContentPage(card);
        }
    }

    //Lägger till en eventListener på alla "Läs Mer" knappar.
    let inspectButton = document.querySelectorAll(".inspect-button");
    inspectButton.forEach((button) => {
        button.addEventListener("click", onProductButtonClick);
    });
}

//Funktion som skapar kortet och bestämmer hur html koden ska se ut med hjälp av kort klassen som matas in i "card"
function renderMainContentPage(card) {
    return `
            <div class="product-card">
                <h1>${card.name}</h1>
                <img src="${card.image}" width="250">
                <p class="cardPrice"><strong>${card.price} kr</strong></p>
             <button class="inspect-button" data-product="${card.name}">
                Läs mer
            </button>
            </div>
        `;
}

//Funktion som skapar de focuserade kortet och bestämmer hur html koden ska se ut
function renderFocusedCardPage(card) {
    return `
            <div class="focused-card">
                <h1>${card.name}</h1>
                <img src="${card.image}" width="150">
                <p> Priset på denna produkten är <strong>${card.price} kr.</strong></p>
                <p>${card.description}</p>
                <div id="inspectCard-buttons">  
                <button id="buy-button">Köp</button>
                <button id="close-button">Close</button>   
                </div>
            </div>
        `;
}

//Function som kör när man klickar på "Läs Mer" knappen
function onProductButtonClick(event) {
    let focusedCard = document.querySelector("#main-cardInspect");
    focusedCard.innerHTML = "";

    let productName = event.currentTarget.dataset.product;

    // Hitta produkten i arrayen som man klickar på
    let product = MainContentProductCards.find((p) => p.name === productName);
    focusedCard.innerHTML += renderFocusedCardPage(product);
    focusedCard.style.display = "flex";

    //Lägger till produkten i varukorgen när "buy" knappen trycks
    let buyButton = document.querySelector("#buy-button");
    buyButton.addEventListener("click", () => addToCart(product));

    //Stänger pop up fönstert till de fokuserade kortet
    let closeButton = document.querySelector("#close-button");
    closeButton.addEventListener("click", cleanFocusedCardHTML);

    const inspectOverlay = document.querySelector("#main-cardInspect");

    inspectOverlay.addEventListener("click", (event) => {
        if (event.currentTarget === inspectOverlay) {
            cleanFocusedCardHTML();
        }
    });
}

//Funktion som rensar fokuserade kortet
function cleanFocusedCardHTML() {
    let focusedCard = document.querySelector("#main-cardInspect");
    focusedCard.innerHTML = "";

    focusedCard.style.display = "none";
}

//#endregion
// Funktionsanrop vid start av hemsidan
renderPageContent();
