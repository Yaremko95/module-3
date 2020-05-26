

let arr=[1, 2, 3, 4, 4, 4]
let set =new Set(arr)
//console.log (set)

let array = [ {
    artist:{
        name:'queen',
        id:1111
    },
    album:{
        title:'Bohemian Rapsody',
        id:222
    },
    id:1,
    title:"some title"
},
{
    artist:{
    name:'queen1',
    id:1111
    },
    album:{
        title:'Bohemian Rapsody',
        id:222
    },
    id:1,
    title:"another title"
    },{
        artist:{
        name:'queen2',
        id:1111
        },
        album:{
            title:'Bohemian Rapsody',
            id:222
        },
        id:1,
        title:"another title"
        },
        {
            artist:{
            name:'queen1',
            id:2111
            },
            album:{
                title:'Bohemian Rapsody',
                id:222
            },
            id:1,
            title:"another title"
            },
            {
                artist:{
                name:'queen3',
                id:2111
                },
                album:{
                    title:'Bohemian Rapsody',
                    id:222
                },
                id:1,
                title:"another title"
                }
]
let set1 = new Set(array.map(artist=>artist.artist.name))


//console.log(set1)
const un = [...new Set( array.map( (obj) => obj.artist ))]

const uniqueObjects = [ ...new Set( array.map( obj => obj.artist.name) ) ].map( name=> array.find(obj => obj.artist.name == name)  )
//console.log(uniqueObjects)

const filtered =[]
const map =new Map();
for(const item of array) {
    if(!map.has(item.artist.name)|| !map.has(item.artist.id)) {
        map.set(item.artist.name, true)
        map.set(item.artist.id, true)
        filtered.push(
           item
        )
    }
}
console.log(filtered)


