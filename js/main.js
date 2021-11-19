const MY_NAME = 'Егор'
const LAST_NAME = 'Карпенко'
const PATRONYMIC = 'Юрьевич'
const COUNTRY = 'Украина'
const SITY = 'Краматорск'
const YEAR_OF_BIRTH = '06.12.1994'
const COLOR_EYE = 'Карий'
const POSTPONE = "\n"
let distinctive_omens = 'Борода'
let hair_color = 'Тёмно-русый'
let age = 26
let status = 'Женат'
let hobbies = 'Спорт, Музыка, Еда, Саморазвитие'
let Height = '184 см'
let the_weight = '85 кг'



console.log(
    'Страна : ' + COUNTRY + POSTPONE +
    'Город : ' + SITY + POSTPONE + POSTPONE +
    'Фамилия : ' + LAST_NAME + POSTPONE +
    'Имя : ' + MY_NAME + POSTPONE +
    'Отчество : ' + PATRONYMIC + POSTPONE + POSTPONE +
    'Год рождения : ' + YEAR_OF_BIRTH + POSTPONE +
    'Возраст : ' + age + POSTPONE +
    'Рост : ' + Height + POSTPONE +
    'Вес : ' + the_weight + POSTPONE + POSTPONE +
    'Цвет глаз : ' + COLOR_EYE + POSTPONE +
    'Цвет волос : ' + hair_color + POSTPONE + POSTPONE +
    'Хобби : ' + hobbies
);


alert(
    'Страна : ' + COUNTRY + POSTPONE +
    'Город : ' + SITY + POSTPONE + POSTPONE +
    'Фамилия : ' + LAST_NAME + POSTPONE +
    'Имя : ' + MY_NAME + POSTPONE +
    'Отчество : ' + PATRONYMIC + POSTPONE + POSTPONE +
    'Год рождения : ' + YEAR_OF_BIRTH + POSTPONE +
    'Возраст : ' + age + POSTPONE
)


alert(
    'Рост : ' + Height + POSTPONE +
    'Вес : ' + the_weight + POSTPONE + POSTPONE +
    'Цвет глаз : ' + COLOR_EYE + POSTPONE +
    'Цвет волос : ' + hair_color + POSTPONE +
    'Отличительные черты : ' + distinctive_omens + POSTPONE + POSTPONE +
    'Хобби : ' + hobbies

)