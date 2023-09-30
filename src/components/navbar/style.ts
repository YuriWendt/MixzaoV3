import styled, { keyframes } from "styled-components";
import { theme } from "../../global/theme";

const RightToLeft = keyframes`
    to {
        transform: translateX(-168px);
    }
`;

export const MobileContainer = styled.header`
    display: none;
    align-items: center;
    padding: 16px 24px;
    overflow: hidden;

    @media ${theme.screenSizes.smallScreen} {
        display: flex;
        justify-content: space-between;
    }
`;

export const MobileMenu = styled.div`
    display: none;
    cursor: pointer;

    @media ${theme.screenSizes.smallScreen} {
        display: block;
    }
`;

export const MobileMenuContainer = styled.div<{active: boolean}>`
    width: 220px;
    height: 100vh;
    top: 0;
    height: 100%;
    background-color: #fff;
    position: fixed;
    transform: translateX(90px);
    transition: .2s;
    animation: ${RightToLeft} .3s ease forwards;
    z-index: 10000;
    padding-top: 32px;

    div:first-child {
        display: flex;
        justify-content: flex-end;
        padding-right: 42px;
        padding-top: 4px;
        cursor: pointer;
    }
`;

export const MenuOverlay = styled.div<{active: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.3);
    z-index: 999;
    overflow: hidden;
`;

export const Content = styled.div`
    display: flex;
    padding: 32px 0;

    span {
        margin-left: auto;
        cursor: pointer;
    }
`;

export const Links = styled.ul<{mobileHidden?: boolean}>`
    display: flex;
    list-style: none;

    @media ${theme.screenSizes.smallScreen} {
        flex-direction: column;
    }
`;

export const DropdownSpan = styled.span`
    display: flex;
    align-items: center;

    @media ${theme.screenSizes.smallScreen} {
        display: none;
    }
`;

export const Link = styled.li`
    display: flex;
    align-items: center;
    margin-right: 32px;
    font-size: 16px;
    transition: all 0.4s;

    cursor: pointer;

    &:hover{
        color: ${theme.colors.secondary.color100};
        text-shadow: 1px 2px 6px rgb(0 0 0 / 10%);
    } 

    @media only screen and (max-width: 1023px) {
        margin: 12px 0;
    }
`;

export const Separator = styled.div`
    border: 0.5px solid ${theme.colors.black.color20};
    width: 99.8%;
    box-shadow: 0px 2px 7px 1px rgb(0 0 0 / 20%); 
`;

export const AlignRight = styled.div`
    display: flex;
    margin-left: auto;
    align-items: center;

    &:hover {
        text-decoration: underline;
    }
`;

export const AdminText = styled.span`
    @media ${theme.screenSizes.smallScreen} {
        padding-left: 8px;
        font-size: 18px;
    }
`;