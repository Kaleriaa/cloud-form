import { FormData } from '@shared/types/formData'

export const prepareData = (data: FormData) => {
    const { nickname, name, surname, about, sex } = data

    return {
        nickname,
        name,
        surname,
        about,
        radio: +data.radio,
        sex: sex.value,
        advantages: data.advantages.map((adv) => adv.value),
        checkbox: data.checkbox.map((el) => +el),
    }
}
