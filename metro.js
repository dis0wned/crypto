let keywords = ['metro online grocery', 'rosslyn metro', 'metro lift', 'metro net', 'micro metro', 'austin metro', 'mta home', 'metro micro', 'ride metro', 'metro north fares', 'metro', 'metronorth', 'metro north monthly pass', 'metro wifi', 'metro transit police', 'mta ridership', 'metro m', 'metrorail', 'lametro', 'washington metro', 'metrocard new york', 'metro van', 'go metro', 'metro star', 'metro mobility', 'metro online shopping', 'metroline', 'metro home', 'washington metropolitan area', 'metro 4', 'my metro', 'mta alerts', 'metro los angeles', 'fort totten metro', 'metro mobile', 'los angeles subway', 'new metro', 'metro fare', 'metro transportation', 'metro fastrak', 'mta etix', 'metro travel', 'mta omny', 'shady grove metro', 'metro m4', 'metro center', 'metro pass', 'metro website', 'metro company', 'mta weekender', 'metro ticket', 'lirr mta', 'muni metro', 'mta trains', 'metrolink near me', 'mta metrocard', 'metro lost and found', 'metro 2', 'metro online', 'reduced fare metrocard', 'mta monthly pass', 'my mta', 'mta fare', 'monthly metrocard', 'metrocard', 'metro card', 'unlimited metrocard', 'metro card online', 'dc metro area', 'metro trains', 'wmata metro', 'smartrip card', 'wmata smartrip', 'subway metro', 'metro link', 'metro transit', 'metro city', 'moscow metro', 'metro 3', 'bustime mta', 'london metro', 'metro 10', 'metro dade transit', 'my metrocard', 'starmetro', 'seoul metro', 'metro m2', 'moscow subway', 'east west metro', 'le metro', 'metro 33', 'metrolite', 'vienna metro', 'green park metro', 'seoul subway', 'metro mass', 'themetrorailguy', 'mta lost and found', 'taoyuan metro', 'moscow underground', 'super metro', 'dunn loring metro', 'buseta wmata', 'metro north near me', 'washington dc metro area', 'metro 18', 'komsomolskaya', 'mta today', 'metro north mail and ride', 'greenbelt metro', 'new carrollton metro', 'underground subway', 'metro china', 'birmingham metro', 'underground metro']


function shuffleArray(keyword) {
    for (let i = keyword.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [keyword[i], keyword[j]] = [keyword[j], keyword[i]];
    }
}
shuffleArray(keywords)
document.getElementById("keywords").content = keywords

const fragment = document.createDocumentFragment();

for (var i = 0; i < 1000; i++) {
    let img = new Image()
    img.src = "https://i.imgur.com/k2yDXVI.png";
    img.id = "alttags";
    img.alt = keywords[i];
    fragment.appendChild(img)
}

// document.body.appendChild(fragment);
document.getElementById("keywords").appendChild(fragment);

