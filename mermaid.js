let keywords = ['animal planet mermaids', 'discovery channel mermaids', 'finfun mermaid', 'fin fun mermaid tail', 'mystical mermaid', 'mermaids restaurant', 'finfolk tails', 'real mermaid', 'the legend of mermaid', 'unicorn mermaid', 'mermaid', 'unicorn and mermaid', 'mermaid magic', 'real mermaid tails', 'mermaids swimming', 'real life mermaid', 'siren mermaid', 'fiji mermaid', 'a mermaid's tale', 'haitian mermaid', 'killer mermaid', 'mermaid fish', 'a mermaid', 'evil mermaid', 'mermaid tf', 'scary mermaid', 'professional mermaid', 'feejee mermaid', 'finfolk productions', 'a real mermaid', 'sexy mermaids', 'mermaid powers', 'realistic mermaid', 'mermaid of the north', 'the mermaids', 'sea mermaid', 'original mermaid', 'finfolk mermaid tails', 'deep sea mermaid', 'ugly mermaid', 'monster high mermaid', 'mermaid and merman', 'were mermaids real', 'siren tail', 'beautiful mermaids', 'golden mermaid', 'pt barnum mermaid', 'famous mermaids', 'mako mermaids tails', 'siren and mermaid', 'mermaid fantasy', 'mahina monofin', 'mud mermaid', 'giant mermaid', 'the fiji mermaid', 'mermaid fossil', 'a real life mermaid', 'freshwater mermaid', 'a mermaids tale', 'mermaid on a rock', 'green mermaid tail', 'mermaid hot', 'the mertailor', 'h2o mermaid tails', 'atargatis mermaid', 'mahina merfin', 'winx club mermaid', 'mermaid with wings', 'killer mermaid 2', 'realistic mermaid tail', 'pirates and mermaids', 'ice mermaid']


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

