let keywords = ['dog clothes stores near me', 'dog clothes wholesale', 'dog boutique stores', 'dog jackets for medium dogs', 'hip dog clothes', 'designer dog clothes wholesale', 'high end dog apparel', 'dog diaper pants', 'small dog tee shirts', 'luxury dog sweater', 'luxury dog apparel', 'dog shirts for medium dogs', 'dog clothes near me', 'doggy pants', 'inexpensive dog sweaters', 'dog sweaters and hoodies', 'black doggy jacket', 'white dog dress', 'puffer jacket dog', 'nfl dog sweaters', 'dog coats for medium dogs', 'couture dog clothes', 'down coat for dogs', 'down jacket for dogs', 'doggy wear', 'holiday dog dresses', 'dog clothing stores', 'birthday dog clothes', 'puffer dog vest', 'dog luxury clothes', 'dog coats with harness', 'dog fashions', 'luxury dog jacket', 'custom dog shirts for dogs', 'custom dog shirt for dogs', 'birthday dog dress', 'dog formal wear', 'dog sweaters for medium dogs', 'warm dog sweaters', 'bomber jacket for dogs', 'dog rain jacket', 'doggy jackets', 'dog clothing boutique', 'doggy coats', 'custom dog clothes', 'winter dog coat with harness', 'dog clothing sale', 'pink dog rain coat', 'dog clothes for medium dogs', 'rain jacket for small dog', 'dog sweater for large dog', 'red dog dresses', 'doggy sweaters', 'black puffer jacket for dogs', 'small dog birthday outfit', 'cotton dog sweater', 'rain coat for dogs', 'designer dog dresses', 'doggy bathing suits', 'doggy denim jacket', 'doggy clothes', 'designer dog apparel', 'dog sweat shirt', 'fleece dog clothes', 'doggy snow pants', 'doggy period pants', 'doggy outfits', 'doggy rain coat', 'doggy and me outfits', 'dog coat for small dog', 'xxsmall dog sweaters', 'dog snowsuit', 'red dog sweater', 'dog clothes with harness', 'dogs first birthday outfit', 'doggy clothes for cheap', 'pants for female dogs in season', 'dog dresses for medium dogs', 'dog hoodie blank', 'inexpensive dog clothes', 'dog sweaters pink', 'designer dog clothes', 'dog coat sale', 'designer inspired dog clothes', 'dog knitted sweater', 'dog jogging suit', 'snow suit for dog', 'dog harness with coat', 'luxury dog outfits', 'cool dog sweater', 'pink winter dog coat', 'dog christmas dress', 'doggy dress', 'dog tank top', 'dress harnesses for dogs', 'dog party dress', 'doggy christmas outfits', 'dog in heat pants', 'pants for male dogs', 'extreme weather dog coat', 'alpine all weather dog coat', 'leather jacket for small dog', 'designer dog hoodie', 'fitwarm dog', 'dog snowsuit with boots', 'pink dog dress', 'adidog dog clothes', 'small dog overalls', 'dog motorcycle jacket', 'designer dog shirt', 'dress doggy', 'cutebone dog pajamas', 'dog with dress', 'black doggy dog coat', 'doggy style dress', 'doggy style clothes', 'black doggy outdoor dog jacket', 'heart dog sweater', 'alpine extreme weather puffer dog coat', 'leather bomber jacket for dogs', 'wooflink dog clothes', 'full dog snowsuit', 'waffle doggy clothes', 'female dog dress clothes', 'santa dog outfits for christmas', 'waterproof dog coats for dachshunds', 'dog in snowsuit', 'dog dress pink', 'full snowsuit for dogs']


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

