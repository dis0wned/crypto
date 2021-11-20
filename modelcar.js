let keywords = ['diecast models wholesale', 'rc 4x4', 'model roundup', 'model of car', 'rc cars near me', 'rc car shops near me', 'hpi rc', 'rc car store near me', 'tamiya avante', 'rc car store', 'model kits', 'scale model cars', 'model cars to build', 'rc remote control car', 'model cars', 'rc car shop', 'rc rally car', 'model car kits', 'best rc cars', 'mini rc car', 'nitro rc', 'rc cars for sale', 'rc car parts', 'spark models', 'rc cars for adults', 'f1 model cars', 'rc buggy', 'diecast models', 'electric rc cars', 'traxxas rc', 'drift rc', 'xmaxx rc car', 'rc cars', 'gas rc cars', 'tamiya rc cars', 'rc car price', 'tamiya rc', 'plastic model', 'kyosho rc', 'rc car with camera', 'diecast cars', 'arrma rc cars', 'plastic model kits', 'diecast model cars', 'traxxas rc cars', 'rock crawler rc car', 'nitro rc cars', 'drift rc cars', 'tesla hot wheels', 'traxxas slash 4x4 ultimate', 'gas powered rc cars', 'mini z rc', 'tamiya model kits', 'revell models', 'revell model kits', 'autoart models', 'bburago ferrari', 'maisto cars', 'maisto diecast', 'schumacher rc']


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

