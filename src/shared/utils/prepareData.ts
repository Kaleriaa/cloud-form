import { FormData } from '@shared/types/formData'

export const prepareData = (data: FormData) => {
    const { nickname, name, surname, about } = data

    return {
        nickname,
        name,
        surname,
        about,
        radio: +data.radio,
        advantages: data.advantages.map((adv) => adv.value),
        checkbox: data.checkbox.map((el) => +el),
    }
}
