import { createContext } from 'react'
import { FilterValueType } from 'ui-kit'

interface IFilterContext {
	filter: FilterValueType
	setFilter: (value: FilterValueType) => void
}

const initialState: IFilterContext = {
	filter: 'all',
	setFilter: () => {}
}

export const FilterContext = createContext<IFilterContext>(initialState)
