import { RoutePaths } from '@shared/constants'
import { FIRST_STEP_SCHEMA } from '@widgets/first-step/schema'
import { SECOND_STEP_SCHEMA } from '@widgets/second-step/schema'
import { THIRD_STEP_SCHEMA } from '@widgets/third-step/schema'

type SchemaSteps =
    | typeof FIRST_STEP_SCHEMA
    | typeof SECOND_STEP_SCHEMA
    | typeof THIRD_STEP_SCHEMA

export const SCHEMA_YUP: Record<RoutePaths, SchemaSteps> = {
    [RoutePaths.STEP1]: FIRST_STEP_SCHEMA,
    [RoutePaths.STEP2]: SECOND_STEP_SCHEMA,
    [RoutePaths.STEP3]: THIRD_STEP_SCHEMA,
}

export const defaultAdvantages: { value: string }[] = [
    { value: '' },
    { value: '' },
    { value: '' },
]
