import classNames from 'classnames'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import './Button.sass'

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
	const classes = classNames('ui-button', className, {
		'ui-button--outlined': variant === 'outlined'
	})

	return (
		<button className={classes} {...rest}>
			{children}
		</button>
	)
}
