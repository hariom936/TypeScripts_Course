//named by using either an interface:

interface Detail {
    // title: string;
    // date: Date;
    // rating: number;
    // genre: string[];

    report(): string;
}


const currentMovie = {
    title: 'dune',
    date: new Date(2023, 6, 21),
    rating: 8.2,
    genre: ['action', 'adventure', 'drama'],

    report(): string {
        return `Title: $(this.title)`;
    }

};

// syntax of interfaces

// const logMovie =(movie:{
//     title:string;
//     date:Date;
//     rating:number;
//     genre: string[];
// }): void =>{
//     console.log(`Title: ${movie.title}`);
//     console.log(`date: ${movie.date}`);
//     console.log(`rating: ${movie.rating}`);
//     console.log(`genre: ${movie.genre.join(', ')}`);
// };

// Code Reusability...

const tracks ={
    genre: 'rock',
    exclusive: true,
    duration: 120,

    report():string{
        return `Current song: ${this.genre}`;
    }
}


//functions in interfaces

// const logMovie = (movie: Movie): void =>{
//     console.log(movie.report());
// };

// logMovie(currentMovie);

const logDetail = (item: Detail): void => {
    console.log(item.report());
};

logDetail(currentMovie);