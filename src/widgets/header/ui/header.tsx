import React from 'react';
import {Link, Outlet} from "@remix-run/react";
import {URL} from "~/shared/lib/utils/urls";
import LogoIcon from "~/shared/ui/icons/logo";
import Button from "~/shared/ui/button";

export const Header = () => {
	return <header className={'flex p-[16px]'}>
        <Link to={URL.LANDING}>
            <LogoIcon/>
        </Link>

        <nav>
            <ul>
                <li>
                    <Link to={URL.SIGN_IN}>
                        <Button disabled={true}>
                            Log in
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to={URL.SIGN_UP}>
                        <Button>
                            Get Plan.io free
                        </Button>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>;
};

export default Header;
