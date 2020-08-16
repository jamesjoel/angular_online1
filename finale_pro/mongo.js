/*
------------- find()
db.user.find()
db.collection("").find().toArray(cb)

=========== Comparissing Ope ==============

=                $eq
<                $lt
<=               $lte
>                $gt
>=               $gte
!=               $ne


SELECT * FROM table WHERE age < 25


db.collection("table").find({ age : {$lt : 25 }}).toArray(cb);


=========== Logic Ope ==============
and     $and
or      $or
not     $not

db.collection("table").find(
    { $and : 
        [
            {
                age : { $lt : 25 }
            }, 
            {
                salary : { $gte : 5000 }
            }
        ]
    }).toArray();

    =========== Element Ope ==============
    $type
    Number -            1
            string -            2
            object -            3
            array -             4
            Bin Data -          5
            undefined -         6
            ObjectId -          7
            boolean -           8
            date -              9
            null -              10
            
            .find({$type : { age : 1}})
            
    
            $exists
            
            
            .find({ $exists : { age : false }}) ---- jaha kahi age na ho use laao
            
            
            
            
    =========== Array Ope ==============
    $all
    $size

    .find({ 
        hobby : {
            $all : ["cricket", "fooball"]
        } })

    .find({
        $or : [
            {
                hobby : {
                    $all : ["cricket"]
                }
            },
            {
                hobby : {
                    $all : ["football"]
                }
            }
        ]
    })


    .find(
            { 
                hobby : { $size : 4 }
            }
        )
    .find(
        {
            hobby : {
                $size : {
                    $gte : 4
                }
            }
        }
    )

----------------- db.collection().collectionmethod().cursormethod()

SELECT * FROM table age = 25 LIMIT 5

.find({ age : 25}).limit(5).toArray();


SELECT * FROM table age = 25 LIMIT 10, 5
.find({ age : 25}).skip(10).limit(5).toArray();


SELECT * FROM table age = 25 LIMIT 10, 5 ORDER BY age DESC
.find({ age : 25}).skip(10).limit(5).sort({ age : false }).toArray();
--- false for DESC
--- true for ASC


.find({}).sort({age : true}).limit(5)


db.collection("studet").find({}).count(cb);



======================== Update ======================

db.collection("student").update({city : "indore"}, {$set : {age : 25}}, cb)
db.collection("student").update({city : "indore"}, {age : 25}, cb)

db.collection("").update({}, {$rename : {"name" : "fullname"}});
db.collection("").update({}, {$unset : {"name" : ""}});
db.collection("").update({age : 25}, {$push : {"hobby" : "music"}});
db.collection("").update({age : 25}, {$pull : {"hobby" : "music"}});

db.collection("").update({}, { $sort : { age : true}});

db.collection("").update({}, { $set : { fee : {$inc : 1000}}});


db.collection("").update({}, { $set : { fee : {$min : 1000}}});

db.collection("").update({}, { $set : { fee : {$max : 1000}}});



=========================== Collection Method
1. find()
2. update(), updateOne(), updateMany()*

3. remove(), removeMany()
4. insert()
5. insertMany([])
6. db.collection("student").drop();
7. db.drop()
8. db.collection("student").renameCollection("allstudent", cb);
9. db.collection("").aggregate();


db.collection("user").aggregate(
    [
        $lookup : {
            from : "order",
            localField : "_id",
            foreignField : "userid",
            as : "order"
        }
    ]
);

SELECT * FROM user INNER JOIN order ON user._id = order.userid


[
    {
        _id : 1,
        name : "rohit",
        order : [
            {
                _id : 3,
                userid : 1,
                product : "mobile"
            }
        ]
    },
    {
        _id : 2,
        name : "james",
        order : [
            {
                _id : 1,
                userid : 2,
                product : "mobile"
            },
            {
                _id : 2,
                userid : 2,
                product : "tv"
            }
        ]
    }
]




--------------- user ----------
[
    {
        _id : 1,
        name : "rohit",
        age : 25
        
    },
    {
        _id : 2,
        name : "james",
        age : 25
    }
]
--------------- order -----------
[
    {
        _id : 1,
        userid : 2,
        product : "mobile"
    },
    {
        _id : 2,
        userid : 2,
        product : "tv"
    },
    {
        _id : 3,
        userid : 1,
        product : "mobile"
    }

]














    [
        {
            name : "jay",
            age : "28",
            city : "indore",
            hobby : ["cricket", "football"]
        },
        {
            name : "rohit",
            age : "25",
            type : string
            city : "ujjain"
        },
        {
            name : "james",
            age : 23,
            type : number,
            city : "indore"
        },
        {
            name : "",
            city : ""
        },
        {
            name : "",
            age : "",
            city : ""
        },
        {
            name : "",
            age : "",
            city : ""
        }
    ]




    
    */