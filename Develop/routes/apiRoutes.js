var db = require("../models")

module.exports = function (app) {
    app.post("/api/workouts/", (req, res) => {
        db.Workout.create(req.body, (err, data) => {
            if(err){
                res.json(err);
            } else {
                res.json(data)
            }
        })
    })

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate({_id: req.params.id}, {$push: {exercises: req.body}}, (err, data) => {
            if(err){
                res.json(err);
            } else {
                res.json(data)
            }
        })
    })

    app.get("/api/workouts/", (req, res) => {
        db.Workout.find({}).then(workoutDb => {
            res.json(workoutDb)
            
        })
    })
}