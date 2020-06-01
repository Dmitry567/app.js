const users = [
    {
        "_id": "5ed450f9ca87a86fc8d9fb65",
        "index": 0,
        "guid": "24c7490c-7eed-49e6-82d6-3ce13bc0b1c5",
        "isActive": true,
        "balance": "$1,422.31",
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "eyeColor": "green",
        "name": "Mays Holt",
        "gender": "male",
        "company": "EVIDENDS",
        "email": "maysholt@evidends.com",
        "phone": "+1 (927) 598-2242",
        "address": "280 Cameron Court, Foscoe, Oregon, 2437"
    },
    {
        "_id": "5ed450f95ae68c3f4d94fab1",
        "index": 1,
        "guid": "a5dec5b8-7fa1-427c-a0d3-2ceab7fdd508",
        "isActive": false,
        "balance": "$1,391.02",
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "eyeColor": "green",
        "name": "Myra Wood",
        "gender": "female",
        "company": "ZEAM",
        "email": "myrawood@zeam.com",
        "phone": "+1 (910) 552-2827",
        "address": "587 Clay Street, Garfield, North Carolina, 5175"
    },
    {
        "_id": "5ed450f9af294c6a4fe071ce",
        "index": 2,
        "guid": "3273f106-b4c2-4038-995b-9dce406649b1",
        "isActive": false,
        "balance": "$3,975.59",
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "eyeColor": "green",
        "name": "Haley Frye",
        "gender": "female",
        "company": "MARKETOID",
        "email": "haleyfrye@marketoid.com",
        "phone": "+1 (844) 470-3551",
        "address": "802 Brighton Avenue, Loretto, North Dakota, 9483"
    },
    {
        "_id": "5ed450f9433770098796e3ce",
        "index": 3,
        "guid": "1be07fa8-a2ad-478a-bab0-31d96bc41d2f",
        "isActive": true,
        "balance": "$2,452.39",
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "eyeColor": "green",
        "name": "Ginger Jenkins",
        "gender": "female",
        "company": "FRENEX",
        "email": "gingerjenkins@frenex.com",
        "phone": "+1 (971) 549-3149",
        "address": "960 Schenck Avenue, Avoca, Marshall Islands, 1837"
    },
    {
        "_id": "5ed450f9118d1926edd46408",
        "index": 4,
        "guid": "b2fa43dc-afdd-4bf3-96c7-8f8048a8cd61",
        "isActive": false,
        "balance": "$3,812.46",
        "picture": "http://placehold.it/32x32",
        "age": 22,
        "eyeColor": "brown",
        "name": "Misty Cooper",
        "gender": "female",
        "company": "GENEKOM",
        "email": "mistycooper@genekom.com",
        "phone": "+1 (888) 570-3437",
        "address": "538 Celeste Court, Kirk, Nevada, 4673"
    },
    {
        "_id": "5ed450f9d84d4405c32fa0d2",
        "index": 5,
        "guid": "519817fb-92dc-44d2-926a-b65a60ebe0b9",
        "isActive": false,
        "balance": "$1,413.22",
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "eyeColor": "brown",
        "name": "Kidd Everett",
        "gender": "male",
        "company": "ZEDALIS",
        "email": "kiddeverett@zedalis.com",
        "phone": "+1 (942) 482-3196",
        "address": "405 Huntington Street, Roderfield, Georgia, 9732"
    },
    {
        "_id": "5ed450f933b2f3611ed5d6b2",
        "index": 6,
        "guid": "013c7d3b-40ee-4659-ba0d-e6fc49343d8c",
        "isActive": false,
        "balance": "$2,838.81",
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "eyeColor": "green",
        "name": "Henry Gardner",
        "gender": "male",
        "company": "ATGEN",
        "email": "henrygardner@atgen.com",
        "phone": "+1 (806) 578-2246",
        "address": "995 King Street, Choctaw, Ohio, 8780"
    }
];

function getUsers(query = null){
    return users;
}

function getUser(id){
    const user = users.find(u => u._id === id);

    return user;
}

function addNewUser(user){
    const newUser = {
        ...user,
        _id: String(Math.random())
    };

    users.push(newUser);

    return newUser
}

module.exports = {
    getUsers,
    getUser,
    addNewUser
}
