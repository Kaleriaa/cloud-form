export const BASE_PATH = '/cloud-form'

export enum RoutePaths {
    STEP1 = '/cloud-form/form/step1',
    STEP2 = '/cloud-form/form/step2',
    STEP3 = '/cloud-form/form/step3',
}

export const RoutePathsIndex = [
    RoutePaths.STEP1,
    RoutePaths.STEP2,
    RoutePaths.STEP3,
]

export enum FieldsName {
    PHONE = 'phone',
    EMAIL = 'email',
    NICKNAME = 'nickname',
    NAME = 'name',
    SURNAME = 'surname',
    ABOUT = 'about',
    ADVANTAGES = 'advantages',
    RADIO = 'radio',
    CHECKBOX = 'checkbox',
}
export enum FieldsId {
    NICKNAME = 'field-nickname',
    NAME = 'field-name',
    SURNAME = 'field-sername',
    ABOUT = 'field-about',
    START = 'button-start',
    BACK = 'button-back',
    NEXT = 'button-next',
    SEX = 'field-sex',
    ADDINPUT = 'button-add',
    SEND = 'button-send',
    CLOSE = 'button-close',
    TOMAIN = 'button-to-main',
    PHONE = 'field-phone',
    EMAIL = 'field-email',
}
