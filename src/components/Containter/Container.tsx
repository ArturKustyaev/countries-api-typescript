import { FC } from 'react'
import classes from './Container.module.scss'

export const Container: FC = ({ children }): JSX.Element => {
	return <div className={classes.container}>{children}</div>
}
