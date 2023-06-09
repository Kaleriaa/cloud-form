import { RoutePaths } from '@shared/constants'
import { schemaStep1 } from '@widgets/first-step/schema'
import { schemaStep2 } from '@widgets/second-step/schema'
import { schemaStep3 } from '@widgets/third-step/schema'

type Schema = typeof schemaStep1 | typeof schemaStep2 | typeof schemaStep3

export const schemasYup = new Map<RoutePaths, Schema>()
schemasYup.set(RoutePaths.STEP1, schemaStep1)
schemasYup.set(RoutePaths.STEP2, schemaStep2)
schemasYup.set(RoutePaths.STEP3, schemaStep3)

export const defaultAdvantages: { value: string }[] = [
    { value: '' },
    { value: '' },
    { value: '' },
]
