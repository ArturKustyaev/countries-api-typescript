import { ReactComponent as ArrowDown } from './assets/arrow-down.svg'
import { ReactComponent as Glass } from './assets/glass.svg'

export type IconType = 'ArrowDown' | 'Glass'

export const IconArray: Map<IconType, JSX.Element> = new Map([
	['ArrowDown', <ArrowDown />],
	['Glass', <Glass />]
])
