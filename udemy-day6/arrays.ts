const favoriteShows:string[] =["friends",'the office','breaking bad'];
const dates =[new Date(), new Date()]

const meals:string[][] =[['breakfast'],['lunch'],['dinner']];

// help with infrence
const office = favoriteShows[1];
const lastKnow = favoriteShows.pop()

//prevent incopatible values
favoriteShows.push()

//help with methods
favoriteShows.map((show:string): string=>{
    return show.concat()
});

//array have multiple types
const holidays:(Date | string )[] = [new Date()]
holidays.push('2023-06-22')
holidays.push(new Date())

