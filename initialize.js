use demos;
let cons= db.getCollectionNames();
if(cons.includes('connections')){
	print(db.connections.drop());
}
db.createCollection("connections");
db.connections.insertMany([
    {
        connectionName:'Cricket',
        connectionTopic:'Sports',
        details:'You can come and join us to play. djkfkkjngkjfnkngknkfdnk',
        date: '2021-10-20',
        startTime:'12:00',
        endTime: '12:30',
        hostName: "Shubham Shah",
        where:"Whitefield Ground",
        imgUrl:"https://raw.githubusercontent.com/shubhamshah207/publicPhotos/main/cricket.jpg"
    },
    {
        connectionName:'Badminton',
        connectionTopic:'Sports',
        details:'shubhamlkjfllkfjgjklfjgl lkjfl;j lfjgl lglj lgf ',
        date: '2021-10-23',
        startTime:'12:30',
        endTime: '14:30',
        hostName: "Pratik Shah",
        where:"Ground 3",
        imgUrl:"https://raw.githubusercontent.com/shubhamshah207/publicPhotos/main/bedminton.jpg"
    },
    {
        connectionName:'Database Systems',
        connectionTopic:'Education',
        details:'It is required for completing data science',
        date: '2021-10-20',
        startTime:'12:00',
        endTime: '12:30',
        hostName: "Amit Trivedi",
        where:"online",
        imgUrl:"https://raw.githubusercontent.com/shubhamshah207/publicPhotos/main/dba.jpg"
    },
    {
        connectionName:'Knowledge discovery in Databases',
        connectionTopic:'Education',
        details:'This is an elective subject jflkdldf',
        date: '2021-12-23',
        startTime:'01:30',
        endTime: '15:30',
        hostName: "Neel Shah",
        where:"Ground 3",
        imgUrl:"https://raw.githubusercontent.com/shubhamshah207/publicPhotos/main/kdd1.jpg"
    },
    {
        connectionName:'Baseball',
        connectionTopic:'Sports',
        details:'You can come and join us to play.',
        date: '2021-10-20',
        startTime:'12:00',
        endTime: '12:30',
        hostName: "Parth Shah",
        where:"Whitefield Ground",
        imgUrl:"https://raw.githubusercontent.com/shubhamshah207/publicPhotos/main/baseball.jpg"
    },
    {
        connectionName:'Java',
        connectionTopic:'Education',
        details:'You can come and join us to learn. mlfdlmflml',
        date: '2021-10-20',
        startTime:'12:00',
        endTime: '12:30',
        hostName: "Milind Shah",
        where:"online",
        imgUrl:"https://raw.githubusercontent.com/shubhamshah207/publicPhotos/main/Java.png"
    },

])