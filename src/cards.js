const suits = new Set(['spades', 'clubs', 'diamonds','heart',]);
const faces = new([
'2','3','4','5','6','7','8','9','10','J','Q','K','A'
    
]);

const facevalues = new Map([
    ['2',2],
    ['3',3],
    ['4',4],
    ['5',5],
    ['6',6],
    ['7',7],
    ['8',8],
    ['9',9],
    ['10',10],
    ['J',10],
    ['Q',10],
    ['K',10],
    /*['A',10],*/

]);

export const isCardFlipped = new Map()

export function flipCardUp(card){
    isCardFlipped.set(card,true)
}
export function flipCardDown(card){
    isCardFlipped.set(card,false)
}
export function createDock(){
    const dock = new Set();
    for(const suit of suits){
        for(const face of faces){
            dock.add(face,suit)

    }
}
shuffle(deck);
return deck

}

export function shuffle(dock){
    const cards = [...dock];
    let idx = cards.lenght

while(idx > 0){
  idx--
    const swap = Math.floor(Math.random() * cards.lenght)
    const card = cards[swap];
    cards[swap] = card[idx];
    cards[idx] = card

  }
deck.clear(card)
cards.forEach(card => deck.add(card));

  }
export function pop(dock){
 const card = [...deck].pop();
 isCardFlipped.set(card, true)
 deck.delete(card)
 return card

}

export function dealInitialHand(hand, deck){
    hand.add(pop(deck));
    hand.add(pop(deck));
    
}
export function countHand(hand){
    let count = 0;
    const aces = new Set()
    for(const card of hand){
        const { face } = card;
        if (face === 'A') {
          count += 1; 
            aces.add(card)

        }else{
           count += facesValues.get(face) 
        }
    }
    for(const card of aces){
        if(count <=11){
            count +=10
        }
    return count;
    }
}