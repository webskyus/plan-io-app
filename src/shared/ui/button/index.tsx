import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC, JSX} from 'react';
import Loader from "~/shared/ui/loader";
import {Outlet} from "@remix-run/react";

enum ButtonVariants {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    WARNING = 'warning',
    ERROR = 'error',
    TEXT = 'text'
}

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: ButtonVariants
    children: React.ReactNode
}

const Button: FC<Props> = (props) => {
    const {disabled, children, variant = ButtonVariants.PRIMARY} = props;
    const styles: Record<ButtonVariants, string> = {
        [ButtonVariants.PRIMARY]: '',
        [ButtonVariants.SECONDARY]: '',
        [ButtonVariants.WARNING]: '',
        [ButtonVariants.TEXT]: '',
        [ButtonVariants.ERROR]: '',
    }

    return (
        <button {...props} className={'pl-[16px] pr-[16px] pt-[4px] pb-[4px] transition-all'}>
            {
                !disabled || <Loader/>
            }

            <span className={disabled ? 'invisible absolute w-0 h-0' : ''}>
                 {children}
            </span>
        </button>
    );
};

export default Button;
