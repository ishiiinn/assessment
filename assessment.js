'use strict';
const userNameInput = document.getElementById('user-name')
const assesmentButton = document.getElementById('assessment')
const resultDivided = document.getElementById('result-area')
const tweetDivided = document.getElementById('tweet-area')
/**
 * @param {HTMLElement} element 
 * 
 */
function removeAllChildren(element){
    while (element.firstChild){
        element.removeChild(element.firstChild)
    }
}

assesmentButton.onclick = () =>  {
    const userName = userNameInput.value;
    if (userName.length === 0){
        return;
    }
    removeAllChildren(resultDivided)
    const header = document.createElement('h3');
    header.innerText = '結果';
    resultDivided.appendChild(header);
    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);

    //


    removeAllChildren(tweetDivided)

    const anchor = document.createElement('a')
    const hrefValue = 
    'https://twitter.com/intent/tweet?button_hashtag=' +
    encodeURIComponent('良い点') + 
    '&ref_src=twsrc%5Etfw';
    
    const script = document.createElement('script');
    script.setAttribute('src','https://platform.twitter.com/widgets.js');
    tweetDivided.appendChild(script);

    anchor.setAttribute('href',hrefValue)
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text', result);
    anchor.innerText = 'Tweet #yourgoodpoint';
    tweetDivided.appendChild(anchor);



};

const answers = [
    '{userName},０',
    '{userName},１',
    '{userName},２',
    '{userName},３',
    '{userName},４',
    '{userName},５',
    '{userName},６',
    '{userName},７',
    '{userName},８',
    '{userName},９',
    '{userName},１０',
    '{userName},１１',
    '{userName},１２',
    '{userName},１３',
    '{userName},１４',
    '{userName},１５'
];

/**
 * @param {string} userName
 * @return {string} 診断結果
 * 
 * 
 */
function assessment(userName) {
    // TODO 診断機能
    let sumOfCharCode = 0;
    for (let i = 0; i < userName.length; i++){
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }
    const index = sumOfCharCode % answers.length;
    let result = answers[index];
    //TODO
    //return result;
    result = result.replace(/\{userName\}/g,userName)
    return result;
    
}



