import classNames from 'classnames'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import classes from './Button.module.scss'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	children?: ReactNode
}

export const Button: FC<IButtonProps> = ({ className, children, ...rest }): JSX.Element => {
	const buttonClasses = classNames(classes.button, className)

	return (
		<button className={buttonClasses} {...rest}>
			{children}
		</button>
	)
}
