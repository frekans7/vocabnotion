import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "@components/Section";
import { Nav } from "@components/Nav";
import { ButtonGroup, Button } from "@components/Button";
import { Icon } from "@iconify/react";

export const Header = () => {
    return (
        <header
            id="header"
            className="header fixed left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50"
        >
            <SectionContainer className="header--container wrap wrap-px ">
                <div className="header-logo--container">
                    <h1 className="logo mb-0">
                        <Link href="/">
                            <Image
                                src="./vocabnotion.svg"
                                alt="logo"
                                className="h-12 w-auto"
                                height="24"
                                width="100"
                                priority
                            />
                        </Link>
                    </h1>
                </div>
                <SectionContainer className="flex items-center ml-auto">
                    <Nav />
                    <ButtonGroup className="hidden md:block">
                        <Link
                            href="https://frekans7.lemonsqueezy.com/buy/790012c3-c837-4a4b-be1f-0401d467b019"
                            role="button"
                            className="btn btn--secondary ml-4">
                            Get Template <Icon icon="material-symbols:arrow-forward-rounded" />
                        </Link>
                    </ButtonGroup>
                </SectionContainer>
            </SectionContainer>
        </header>
    );
};
