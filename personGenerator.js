const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    surnameFemaleJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванова",
            "id_2": "Смирнова",
            "id_3": "Кузнецова",
            "id_4": "Васильева",
            "id_5": "Петрова",
            "id_6": "Михайлова",
            "id_7": "Новикова",
            "id_8": "Федорова",
            "id_9": "Кравцова",
            "id_10": "Николаева",
            "id_11": "Семёнова",
            "id_12": "Славина",
            "id_13": "Степанова",
            "id_14": "Павлова",
            "id_15": "Александрова",
            "id_16": "Морозова"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрa",
            "id_2": "Мария",
            "id_3": "Анна",
            "id_4": "Елизавета",
            "id_5": "Софья",
            "id_6": "Валерия",
            "id_7": "Алла",
            "id_8": "Светлана",
            "id_9": "Жанна",
            "id_10": "Виктория"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Хирург",
            "id_2": "Слесарь",
            "id_3": "Строитель",
            "id_4": "Курьер",
            "id_5": "Водитель",
            "id_6": "Охранник",
            "id_7": "Повар",
            "id_8": "Проводник",
            "id_9": "Невролог",
            "id_10": "Электрик"
        }    
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Учитель",
            "id_2": "Врач",
            "id_3": "Воспитатель",
            "id_4": "Логопед",
            "id_5": "Администратор",
            "id_6": "Официант",
            "id_7": "Визажист",
            "id_8": "Стилист",
            "id_9": "Стоматолог",
            "id_10": "Кассир"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomGender: function() {
        let gender = this.randomIntNumber();
        return gender === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomBirthYear: function() {
        let birthYear = this.randomIntNumber(max = 2020, min = 1987);
        return birthYear;
    },

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function(randomGender = this.person.gender) {
        let firstNameMale = this.randomValue(this.firstNameMaleJson);
        let firstNameFemale = this.randomValue(this.firstNameFemaleJson);
        if (randomGender === this.GENDER_MALE) {
            return firstNameMale;
        } else {
            return firstNameFemale;
        }
        //return this.randomValue(this.firstNameMaleJson);

    },


     randomSurname: function(randomGender = this.person.gender) {
        let surname = this.randomValue(this.surnameJson);
        let surnameFemale = this.randomValue(this.surnameFemaleJson);
        if (randomGender === this.GENDER_MALE) {
            return surname;
        } else {
            return surnameFemale;
        }
        
        
        //return this.randomValue(this.surnameJson);

    },
    randomProfession: function(randomGender = this.person.gender){
        let professionMale = this.randomValue(this.professionMaleJson);
        let professionFemale = this.randomValue(this.professionFemaleJson);
        if (randomGender === this.GENDER_MALE) {
            return professionMale;
        } else {
            return professionFemale;
        }
    },


    randomPatronymic: function (randomGender = this.person.gender) {
        let patronymic = this.randomValue(this.firstNameMaleJson);
        let nameGroupOne = ["Александр","Максим","Иван","Артем","Михаил","Даниил","Егор"];
        let nameGroupTwo = "Дмитрий";
        let nameGroupThree = "Андрей";
        let nameGroupFour = "Никита";
        if(randomGender === this.GENDER_MALE){
            if(nameGroupOne.includes(patronymic)){
                return (patronymic+'ович');
            } else if(patronymic === nameGroupTwo){
                return (patronymic.substring(0, 6)+'евич');
            }  else if(patronymic === nameGroupThree){
                return (patronymic.substring(0, 5)+ 'евич');
            } else if(patronymic === nameGroupFour){
                return (patronymic.substring(0, 5)+ 'ич');
            }
        } else /*(randomGender === this.GENDER_FEMALE)*/{
            if(nameGroupOne.includes(patronymic)){
                return (patronymic+'овна');
            } else if (patronymic === nameGroupTwo){
                return (patronymic.substring(0, 6)+'евна');
            } else if (patronymic === nameGroupThree){
                return (patronymic.substring(0, 5)+'евна');
            } else if(patronymic === nameGroupFour){
                return (patronymic.substring(0, 5)+ 'ична');
            }
        }
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.birthYear = this.randomBirthYear();
        this.person.patronymic = this.randomPatronymic();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};
