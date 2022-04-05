import classNames from 'classnames'
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react'
import classes from './Input.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
}

export const Input = forwardRef(
	({ className, ...rest }: Props, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
		return <input className={classNames(classes.input, className)} ref={ref} {...rest} />
	}
)

Input.displayName = 'Input'
