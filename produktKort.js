MainContentProductCards = [];

class ProductCard {
    constructor(name, price, image, category, description) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.category = category;
        this.description = description;

        this.addToArray();
    }
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
    "AOC 27G4HRE 27/FHD/IPS/200Hz/1ms",
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
//#endregion
//#region Vitvaror

let dishwasher = new ProductCard(
    "Delonghi Tvättmaskin D914PWM25N (9kg)",
    6995,
    "https://next-media.elkjop.com/image/dv_web_D18000134010436/922363/delonghi-tvattmaskin-d914pwm25n-9kg.jpg?w=640&q=75",
    "Vitvaror",
    "Delonghi tvättmaskin D914PWM25N klarar upp till 9 kg tvätt och har 14 program, fördröjd start och en tidsindikator. Den har även ett Stain Remove-program för att ta bort envisa fläckar."
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
//#endregion
//#region TV
let samsungTv = new ProductCard(
    "Samsung 55 U8095F 4K smart-TV (2025)",
    9990,
    "https://next-media.elkjop.com/image/dv_web_D1800013064282/906402/samsung-55-u8095f-4k-smart-tv-2025.jpg?w=640&q=75",
    "TV",
    "Samsung 55 U8095F 4K smart-TV levererar otroliga bilder med fantastiskt djup och detaljer tack vare sin Crystal Processor 4K, HDR och PurColor. Du kan också njuta av suveränt ljud, det smidiga Tizen OS och massor av spelfunktioner."
);
let iffalconTv = new ProductCard(
    "iFFALCON 32 S45 QLED TV (2025)",
    4490,
    "https://next-media.elkjop.com/image/dv_web_D18000135517479/995561/iffalcon-32-s45-qled-tv-2025.jpg?w=640&q=75",
    "TV",
    "iFFALCON S45-serien kombinerar en slimmad, modern design med QLED och HDR-bildkvalitet samt det mest avancerade Smart TV-systemet hittills: Android TV med Google Cast inbyggd."
);
let lgTv = new ProductCard(
    "LG 55 C5 Pro 4K OLED evo TV (2025)",
    25990,
    "https://next-media.elkjop.com/image/dv_web_D18000135110753/912294/lg-55-c5-pro-4k-oled-evo-tv-2025.jpg?w=640&q=75",
    "TV",
    "LG OLED evo C5 Pro tar C-serien till nästa nivå med högre ljusstyrka och skärpa tack vare Brightness Booster Pro. Upplev djup svärta, livfulla färger och smarta funktioner – film, spel och sport blir alltid skarpt och realistiskt."
);
//#endregion

//#region Check Category
isGaming = true;
isTv = true;
isVitvaror = true;
isMobilTelefon = true;

let gamingButton = document.querySelector("#header-button1");
let vitvarorButton = document.querySelector("#header-button2");
let tvButton = document.querySelector("#header-button3");
let mobilTelefonButton = document.querySelector("#header-button4");

gamingButton.addEventListener("click", isGamingTrue);
vitvarorButton.addEventListener("click", isVitvarorTrue);
tvButton.addEventListener("click", isTvTrue);
mobilTelefonButton.addEventListener("click", isMobilTelefonTrue);

function isGamingTrue() {
    isGaming = true;
    isVitvaror = false;
    isTv = false;
    isMobilTelefon = false;
    renderPageContent();
}

function isVitvarorTrue() {
    isGaming = false;
    isVitvaror = true;
    isTv = false;
    isMobilTelefon = false;
    renderPageContent();
}

function isTvTrue() {
    isGaming = false;
    isVitvaror = false;
    isTv = true;
    isMobilTelefon = false;
    renderPageContent();
}

function isMobilTelefonTrue() {
    isGaming = false;
    isVitvaror = false;
    isTv = false;
    isMobilTelefon = true;
    renderPageContent();
}
//#endregion

//#region Page Renderers
function renderPageContent() {
    let main = document.querySelector("main");
    let mainCardContainer = document.querySelector("#main-cardContainer");

    mainCardContainer.innerHTML = "";
    let header = document.querySelector("header");
    let footer = document.querySelector("footer");

    for (let i = 0; i < MainContentProductCards.length; i++) {
        if (isVitvaror) {
            if (MainContentProductCards[i].category === "Vitvaror") {
                mainCardContainer.innerHTML += renderMainContentPage(
                    MainContentProductCards[i]
                );
            }
        }
        if (isGaming) {
            if (MainContentProductCards[i].category === "Gaming") {
                mainCardContainer.innerHTML += renderMainContentPage(
                    MainContentProductCards[i]
                );
            }
        }
        if (isTv) {
            if (MainContentProductCards[i].category === "TV") {
                mainCardContainer.innerHTML += renderMainContentPage(
                    MainContentProductCards[i]
                );
            }
        }
        if (isMobilTelefon) {
            if (MainContentProductCards[i].category === "MobilTelefon") {
                mainCardContainer.innerHTML += renderMainContentPage(
                    MainContentProductCards[i]
                );
            }
        }
    }

    let inspectButton = document.querySelectorAll(".inspect-button");
    inspectButton.forEach((button) => {
        button.addEventListener("click", onProductButtonClick);
    });
}



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

function renderFocusedCardPage(card) {
    return `
            <div class="focused-card">
                <h1>${card.name}</h1>
                <img src="${card.image}" width="350">
                <p> Priset på denna produkten är ${card.price} kr.</strong></p>
                <p>${card.description}</p>
                <button id="buy-button">Köp</button>
                <button id="close-button">Close</button>
            </div>
        `;
}

function onProductButtonClick(event) {
    let focusedCard = document.querySelector("#main-cardInspect");
    focusedCard.innerHTML = "";

    let productName = event.target.dataset.product;

    // Hitta produkten i arrayen
    let product = MainContentProductCards.find((p) => p.name === productName);

    console.log("Hela produktobjektet:", product);

    focusedCard.innerHTML += renderFocusedCardPage(product);

    let buyButton = document.querySelector("#buy-button");
    buyButton.addEventListener("click", () => addToCart(product));

    let closeButton = document.querySelector("#close-button");
    closeButton.addEventListener("click", cleanFocusedCardHTML);
}

function cleanFocusedCardHTML() {
    let focusedCard = document.querySelector("#main-cardInspect");
    focusedCard.innerHTML = "";
}

//#endregion
