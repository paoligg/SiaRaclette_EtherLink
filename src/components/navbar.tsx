import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Logo_Desurv from '/public/Logo_Desurv.png';
import Image from 'next/image';
import Logo_entreprise from '/public/logo_create_survey.png';
import answer_survey from '/public/logo_answer_survey.png';

function Navbar() {
    return (
        <nav className=" fixed top-0 z-10 flex h-32 w-full items-center justify-between bg-purple-900 bg-opacity-35 px-8 text-white">
            <div className="flex items-center">
                <a href="/">
                    <Image
                        src={Logo_Desurv}
                        height="300"
                        width="300"
                        alt="Desurv Logo"
                    />
                </a>
            </div>
            <div className="flex items-center gap-4">
                <a href="/">
                    <Image
                        src={answer_survey}
                        height="60"
                        width="60"
                        alt="Answer Survey"
                    />
                </a>
                <a href="/business">
                    <Image
                        src={Logo_entreprise}
                        height="60"
                        width="60"
                        alt="Create Survey"
                    />
                </a>
                <ConnectButton />
            </div>
        </nav>
    );
}

export default Navbar;
