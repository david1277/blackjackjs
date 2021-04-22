import { cardTemplate } from './template';
import { countHand } from './cards';

const app = document.querySelector('#blackjack');
const statusE1 = app.querySelector('.status')

export const dealerE1 = app.querySelector(".dealer")
export const dealerE1 = app.querySelector(".player")
export const buttonE1 = app.querySelector(".button")

function domnode(str) {
    const template = document.createElement('template');

    template.innerHTML = str;
    return template.content.firstChild
}

export function render(element, hand) {
    element.querySelector('.hand').innerHTML = [...hand].map(cardTemplate).join('');
    element.querySelector('.score').innerHTML = countHand(hand)
    updatelabel(element, hand)

    export function addcard(element, hard, card) {
        hand.add(card)
        const cardNode = domNode(cardTemplate(card))
        element.querySelector('.hand').classlist.add("adding")
        element.querySelector('.hand').appenChild(cardNode);
        element.querySelector('.score').innerHTML = countHand(hand)
        setTimeout(() => element.querySelector('.hand').classlist.remove('adding'), 10)

    }

}