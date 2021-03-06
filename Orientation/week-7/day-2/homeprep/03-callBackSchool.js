let students = [
    { name: 'Mary', score: 90, school: 'East' },
    { name: 'James', score: 100, school: 'East' },
    { name: 'Steve', score: 40, school: 'East' },
    { name: 'Gabe', score: 90, school: 'West' },
    { name: 'Rachel', score: 85, school: 'East' },
    { name: 'Rochel', score: 95, school: 'West' },
    { name: 'Lynette', score: 75, school: 'East' },
];

let processStudents = function (data, callback) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].school.toLowerCase() === 'east') {
            if (typeof callback === "function") {
                callback(data[i]);
            }
        }
    }
};

processStudents(students, function (obj) {
    if (obj.score > 60) {
        console.log(obj.name + 'passed')
    }
});


