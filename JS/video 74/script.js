document.body.style.backgroundColor = "black"
let card_length = document.getElementsByClassName("card").length
//Card Making Function
function CardMaker(cName, views, img_link, video_duration, ago, title, video_link, channelLink) {
    let card_container = document.createElement("div")
    card_container.setAttribute("class", "card-container")
    document.querySelector(".container").append(card_container)
    let card_container_length = document.getElementsByClassName("card-container").length
    let card = document.createElement("div")
    card.setAttribute("class", "card")
    card.innerHTML = `<a href=\"${video_link}\"><img src=\"${img_link}\"
                    alt=\"My Video Collection\"></a>\n <div class=\"duration\">${video_duration}</div>`
    document.getElementsByClassName("card-container")[card_container_length - 1].append(card)
    let text = document.createElement("div")
    text.setAttribute("class", "text")
    text.innerHTML = `<div class=\"text-title\">${title}
                </div>
                <div class=\"text-metadata\"> <a href=\"${channelLink}\">${cName}</a> • ${views} views • ${ago}</div>`
    document.getElementsByClassName("card-container")[card_container_length - 1].append(text)
}

CardMaker("Adi 4 u", "15K", "https://i.ytimg.com/vi/6QNpoWdtp18/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0euS4b6-FuFhHqL_zElRQHwlE4w", "11:50", "10 days ago", "OPPO K12X 5G! *360 Armour Body Toot GAYA*!😳12,000/-RS BEST Phone? Hard Gaming & Camera Test⚡️", "https://www.youtube.com/watch?v=6QNpoWdtp18&list=PLn9U2nbdbqWn_zkjcLQLGggp3H-0cH3vM&index=1", "https://www.youtube.com/@Adi4u")

CardMaker("Numberphile","1.7M","https://i.ytimg.com/vi/NGMRB4O922I/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZ_uk2aC4Nf2uco7xhmOQJqatnNg","9:11","10 years ago","The Mandelbrot Set - Numberphile","https://www.youtube.com/watch?v=NGMRB4O922I&list=PLt5AfwLFPxWL7NpD_DKO28XhS0Ugctkpu&index=2","https://www.youtube.com/@numberphile")

CardMaker("NetworkChuck","2.3M","https://i.ytimg.com/vi/mRMmlo_Uqcs/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCk-gtVqJS5v-qGrWr9L7mqiPbZbg","17:42","3 years ago","you need to learn Python RIGHT NOW!! // EP 1","https://www.youtube.com/watch?v=mRMmlo_Uqcs&list=PLIhvC56v63ILPDA2DQBv0IKzqsWTZxCkp&index=1","https://www.youtube.com/@NetworkChuck")