enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard;
// Выводит порядковый номер
console.log(membership);
const membershipReverse = Membership[2];
// Выводит строковое значение
console.log(membershipReverse)

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
// Выводит строковое значение 
console.log(social)