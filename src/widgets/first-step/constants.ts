import { SystemStyleObject } from '@chakra-ui/react'
import { FieldsId, FieldsName } from '@shared/constants'
import { ChakraStylesConfig, OptionBase } from 'chakra-react-select'

export const INPUTS_STEP_1: {
    label: string
    name: FieldsName
    id: FieldsId
}[] = [
    {
        label: 'Nickname',
        name: FieldsName.NICKNAME,
        id: FieldsId.NICKNAME,
    },
    {
        label: 'Name',
        name: FieldsName.NAME,
        id: FieldsId.NAME,
    },
    {
        label: 'Surname',
        name: FieldsName.SURNAME,
        id: FieldsId.SURNAME,
    },
]

export enum Sex {
    MAN = 'man',
    WOMAN = 'woman',
}

export interface SexOption extends OptionBase {
    label: string
    value: string
    id: string
}

export const SEX_FIELDS: SexOption[] = [
    {
        value: Sex.MAN,
        label: Sex.MAN,
        id: 'field-sex-option-man',
    },
    {
        value: Sex.WOMAN,
        label: Sex.WOMAN,
        id: 'field-sex-option-woman',
    },
]

export const SELECT_STYLES_CONFIG: ChakraStylesConfig = {
    dropdownIndicator: (provided: SystemStyleObject) => ({
        ...provided,
        w: '40px',
        cursor: 'pointer',
        color: 'rgba(0, 0, 0, 0.16)',
    }),
    container: (provided: SystemStyleObject) => ({
        ...provided,
        w: '300px',
        '@media (max-width: 495px)': { width: '85%' },
    }),
    control: (provided: SystemStyleObject) => ({
        ...provided,
        h: '44px',
        fontFamily: 'SB Sans',
        borderRadius: '4px',
        borderColor: 'rgba(0, 0, 0, 0.16)',
        color: '#333333',
        fontSize: '14px',
        focusBorderColor: 'rgba(0, 0, 0, 0.48)',
        _focus: {
            boxShadow: 'none',
            borderColor: 'rgba(0, 0, 0, 0.30)',
        },
    }),
    option: (provided, state) => ({
        ...provided,
        fontFamily: 'SB Sans',
        color: '#333333',
        backgroundColor: state.isSelected ? '#cbccff' : 'white',
        fontSize: '14px',
        lineHeight: '20px',
    }),
    placeholder: (provided) => ({
        ...provided,
        fontFamily: 'SB Sans',
        color: 'rgba(0, 0, 0, 0.48)',
    }),
    group: (provided) => ({
        ...provided,
        borderBottomWidth: '1px',
        _last: {
            borderBottomWidth: 0,
        },
    }),
    menu: (provided) => ({
        ...provided,
        my: 0,
        borderRadius: 4,
        shadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
        borderWidth: '1px',
        borderColor: 'rgba(0, 0, 0, 0.08)',
        h: '80px',
    }),
    menuList: (provided) => ({
        ...provided,
        borderWidth: 0,
    }),
}
