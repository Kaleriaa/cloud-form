export type FormData = {
    advantages: { value: string }[]
    nickname: string
    name: string
    surname: string
    sex: Record<'id' | 'label' | 'value', string>
    radio: string
    checkbox: string[]
    about: string
}
