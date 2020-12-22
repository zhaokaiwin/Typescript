var getPersonName = function (person) {
    console.log(person.name);
};
var setPersonName = function (person, name) {
    person.name = name;
};
var person = {
    name: 'kai',
    sex: 'male',
    say: function () {
        return 'hello kaiwin';
    },
    teach: function () {
        return 'hello';
    }
};
getPersonName({
    name: 'kai',
    sex: 'male',
    say: function () {
        return 'hello World';
    },
    teach: function () {
        return 'hello';
    }
});
getPersonName(person);
setPersonName(person, 'win');
// 一个类 使用 接口时用 implements
var User = /** @class */ (function () {
    function User() {
        this.name = 'kai';
    }
    User.prototype.say = function () {
        return 'hello';
    };
    return User;
}());
var say = function (word) {
    return word;
};
