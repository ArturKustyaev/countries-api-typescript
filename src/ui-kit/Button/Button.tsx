import classNames from 'classnames'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import classes from './Button.module.scss'

export type ButtonVariantType = 'primary' | 'outlined'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	variant?: ButtonVariantType
	children?: ReactNode
}

export const Button: FC<IButtonProps> = ({
	className,
	children,
	variant = 'primary',
	...rest
}): JSX.Element => {
	const buttonClasses = classNames(classes.button, className, {
		'ui-button--outlined': variant === 'outlined'
	})

	return (
		<button className={buttonClasses} {...rest}>
			{children}
		</button>
	)
}
