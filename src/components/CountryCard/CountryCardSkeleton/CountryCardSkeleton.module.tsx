import classNames from 'classnames'
import { FC } from 'react'
import { Skeleton } from 'ui-kit'
import classes from './CountryCardSkeleton.module.scss'

interface Props {
	className?: string
}

export const CountryCardSkeleton: FC<Props> = ({ className }): JSX.Element => {
	return (
		<div className={classNames(className, classes.root)}>
			<Skeleton className={classes.flag} />
			<div className={classes.info}>
				<Skeleton className={classes.name} />
				<Skeleton className={classes.desc} />
				<Skeleton className={classes.desc} />
				<Skeleton className={classes.desc} />
			</div>
		</div>
	)
}
