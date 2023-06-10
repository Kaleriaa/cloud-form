import { BASE_PATH, RoutePaths } from '@shared/constants'
import { useLocation } from 'react-router-dom'

export const useChangeUrl = () => {
    const { pathname } = useLocation()
    let back = ''
    let next = ''

    switch (pathname) {
        case RoutePaths.STEP1:
            back = `${BASE_PATH}/`
            next = RoutePaths.STEP2
            break
        case RoutePaths.STEP2:
            back = RoutePaths.STEP1
            next = RoutePaths.STEP3
            break
        case RoutePaths.STEP3:
            back = RoutePaths.STEP2
            next = pathname
    }

    return { back, next }
}
