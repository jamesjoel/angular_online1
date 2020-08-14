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








    [
        {
            name : "rohit",
            age : "25",
            type : string
            city : "ujjain"
        },
        {
            name : "jay",
            age : "",
            city : "",
            hobby : ["cricket", "football"]
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