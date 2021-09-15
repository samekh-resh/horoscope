document.getElementById('btn').addEventListener('click' , test);

function test () {
    let month = document.getElementById('month').value;
    let day = document.getElementById('day').value;
    let results = document.getElementById('results');
    let description = document.getElementById('description');
    document.getElementById('month').value = '';
    document.getElementById('day').value = '';
    console.log(day + 'and' + month);
        if (month == 8 && day > 23 && day <= 31 || month == 9 && day > 0 && day <= 22 ){
            results.innerText = 'a virgo'
            description.innerText = 'chile... lemme tell you something. you think... a lot.. you dream.... a lot. But even moreso, you feel. a ton. that is the reason as to why you think so much, you are attempting to process a way of experiencing that is not necessarily home for you. it is a vulnerability to feel, and it is a power to think. and who wants to feel vulnerable, or weak, in a strange place and not in that of comfort..it is a vulnerability to feel and a power to think... according to virgo...'
            console.log('hey');
        }else if (month == 9 && day > 22 && day <= 30 || month == 10 && day > 0 && day <= 25 ){
            results.innerText = 'a libra'
            description.innerText = 'People always think you\'re about balance. however, you are truly about extremes. the extremes of beauty, the extremes of liberty, the extremes of experiencing. you are of venusian influence and love can be distant and also obsessive. Your appearance of balance is due to your superb maintenance of traveling quickly between extremes...according to a libra...'
        }else if (month == 10 && day > 25 && day <= 31 || month == 11 && day > 0 && day <= 22 ){
            results.innerText = 'a scorpio'
            description.innerText = 'you are death. follow me here. you are literally death. you are something that lives in absolutes, lives at the edges, something that is lauded, unknown, coveted yet feared. people wonder plentiful about why it is you exist, and what your purpose is. you are change, consistent and absolute in its work. you are not often thanked and are often misunderstood. you are death, you are change...according to a scorpio.'
        }else if (month == 11 && day > 22 && day <= 30 || month == 12 && day > 0 && day <= 24 ){
            results.innerText = 'a sagitarrius'
            description.innerText = 'You are the archer. Your sight is accurate. And, due to you\'re knowledge, your clarity of sight. It makes a you an amazing hunter. Your scopeis somethign to covet. But you, are a coveter. Which is why oyu hunt. You appreciate what meets your standards, and sometimes... it can be a bit much. it can border on predatory. know when to hunt and when to not; is this the right time to even hunt?. you are the archer. your sight is accurate... according to a sagiterrius. '
        }else if (month == 12 && day > 25 && day <= 31 || month == 1 && day > 0 && day <= 20 ){
            results.innerText = 'a capricorn'
            description.innerText = 'you are so strong but so sensitive. you are of the earth and the sea. you are the goat cousin of a hippocampus, a creature that exists both in land and in earth. two elements that could not be more different and the same.. two powerful elements that humans depend on to live. it can be a lot, to live on both the land and sea. some people look at you as an abomination, some people will never understand you. that is what happens when a creature exists between two different environments of existence. and this gets to you. you hold yourself together when crossing the shoreline, but you weep. do not. they need you, someone to teach them how to go between two states, and how to exist and thrive in either one. you are so strong but so sensitive... according to a capricorn.  '
        }else if (month == 1 && day > 20 && day <= 30 || month == 2 && day > 0 && day <= 20 ){
            results.innerText = 'an aquarius'
            description.innerText = 'you are an alien you are strange. there is nothign wrogn abut that. you are from another plane,t and another dimension, if we are frank. and you do not know this, but this was truly purposeful, you just don\'t remember. that is why it\s always hard for you to connect with people. they feel what you are, a glamorous creature from another world that is incredibly talent, fruitful and varying in persepctives to hold. you are here, a solve ex machina. you are here to change things, and strangeness is necessary. What is usually of the ecosystem cannot change it, since it has found it\'s niche.'
        }else if (month ==  2&& day > 20 && day <= 30 || month == 3 && day > 0 && day <= 20 ){
            results.innerText = 'a pisces'
            description.innerText = 'you are a fish, swimming freely through the ocean. but in all actuallity, you are truly a witch, transformed into a fish after breaking their heart. unknowingly. you simply just knew that the end was nigh, so why suffer through it. so why suffer through this too? you are swimming freely, and that irks some other fish. why can\'t they swim alone and why must they swim in schools? that makes others want to hunt you and disrupt your peace. do not worry, they cannot catch you. no net is strong enough to keep you at bay. you are a fish, swimming freely through the ocean.'
        }else if (month == 3 && day > 20 && day <= 30 || month == 4 && day > 0 && day <= 21 ){
            results.innerText = 'an aries'
            description.innerText = 'you are energetic and magnetic. sometimes that can be too much. you are vibrant. full of energy, charging forward like a little ram, horns forward, and ready to take on the world. please do be careful about how you charge forward, the pace with which you take, and who you could possible hurt. you do not want peopleto mistake your straightforwardness as abruptness. which it could be. be intentional in how you move. you are energetic and magnetic. according to an aries'
        }else if (month == 4 && day > 20 && day <= 30 || month == 5 && day > 0 && day <= 22 ){
            results.innerText = 'a taurus'
            description.innerText = 'you are stable you are reserved. you know what you want and you know how to be that, with or withouth individuals in your way. you are a worker, hard and true, but only when you want to. emphasis on that. remember leading an animal to water but not making it drink? you could be starving, and needing some damn water, and because someone is telling you to, you just may dehydrate yourself just to disobey them. not everything is an order, and not everyone is trying to tame you. some are trying to help. through it all, you will still find the water, even if it may be too late. you are stable, you are reserved... according to a taurus. '
        }else if (month == 5 && day > 22 && day <= 31 || month == 6 && day > 0 && day <= 22 ){
            results.innerText = 'a gemini'
            description.innerText = 'you are the twins. you are the spectrum. and trust me and believe me, you live among that. You\'re home is int he variance, in the chaos and the order. you are everythign and nothign at the same time, and you know that. and it hurts sometimes, knowing how complex you can be, and how unreceptive others can be to that multitude. and that, becomes a game to you-fielding the unresponsive and tuanting those who are avoidant of it. learn what your spectrum is and learn who are able to move with you along with it. and if you are lonely, you have enough of yourself to exist alone, at least for a while. be fine with that, you\'re fun and fresh. you are the twins, you are a spectrum... according to a gemini.' 
        }else if (month == 6 && day > 22 && day <= 31 || month == 7 && day > 0 && day <= 21 ){
            results.innerText = 'a cancer'
            description.innerText = 'you have the claws. you have the shell. but honestly, sometimes that is necessary. your shell has kept you you protected and your claws have kept you safe. however, you sometimes, having had the life you had, feel that you need to fight, that it is a must to keep your shell hard. and your claws ready. who knows if a crab can change it\'s shell, but try shifting, from hard to soft. lettign down your guard. living, calmly. instead of hard shelling, appendage clawing, action hiding antics. you have the claws. you have the shell... according to a cancer.  '
        }else if (month == 7 && day > 21 && day <= 31 || month == 8 && day > 0 && day <= 23 ){
            results.innerText = 'a leo'
            description.innerText = 'you are a planet. you are a world. yet you act like a star. you love to be at the center of things. you love to be warm, to be attracting. to be the initiator, the fuze, remember that spark we talked about earlier. to be the thing to which people gather and gain a positive experience of from. however, much like a hearth or a spark, it cannot be kept up withoout external energy or something to burn. Do not be burned out. remember you are a planet, and not a world... according to a leo. '
        }else{
            results.innerText = 'you have no birthday.'
            description.innerText = 'you have no birth. you are a ghost. an essence. you were here before time, before chaos even became. the void before '
        }
}