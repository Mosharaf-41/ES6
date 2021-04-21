// Spread operator ... , concatenate multiple arrays,  array max....

const ages = [12, 15, 14, 11, 17];
const ages2 = [15, 28, 31];
const ages3 = [34, 35, 40];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [ages, ages2, 5, ages3];
const allAges3 = [...ages,...ages3,...ages2, 5, ...ages3]; // (...) Spread operator....

//console.log(allAges3);
const business = 650;
const minister = 450;
const teacher = 350;

const maximum = Math.max(business,minister,teacher);
const takaNai = [650,450,352];
const maximum2 = Math.max(takaNai);
const maximum3 = Math.max(...takaNai);

console.log(maximum3);