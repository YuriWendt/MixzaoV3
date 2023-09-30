import styled, { createGlobalStyle, css } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${theme.colors.white};

    > div{
      /* min-height:100vh;
      height: 100%;
      display: table;
      width: 100%; */
    }
  }

  body, input, button, textarea, select, option{
    font: 400 16px "Ubuntu", sans-serif;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const TableContainer = styled.div`
    overflow-x: auto;

    @media ${theme.screenSizes.smallScreen} {
        width: 100%;

        &::-webkit-scrollbar {
            display: block;
            height: 6px;
            background-color: ${theme.colors.black.color40};
        }

        &::-webkit-scrollbar-thumb {
            display: block;
            height: 4px;
            border-radius: 8px;
            background-color: ${theme.colors.black.color60};
        }
    }
`;

export const Table = styled.table`
    background-color: ${theme.colors.white};
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-collapse: collapse;
    width: 100%;
    border: 1px solid ${theme.colors.white};

    th, td {
        padding: 15px 12px;

        @media ${theme.screenSizes.smallScreen} {
          padding: 12px 8px;
        }
    }
`;

export const Head = styled.thead`
    background-color: ${theme.colors.primary.color100};
    border: none;
    color: ${theme.colors.white};
    text-align: left;

    th {
        font-size: 16px;

        @media ${theme.screenSizes.smallScreen} {
          font-size: 14px;
        }
    }
`;

export const Body = styled.tbody`
  color: ${theme.colors.black};

  tr {
    border-bottom: 1px solid ${theme.colors.black.color20};
  }   
  font-size: 15px;

  i{
    opacity: 0.75;
  }

  @media ${theme.screenSizes.smallScreen} {
    font-size: 12px;
  }
`;

export const CellOptions = styled.div`
    display: flex;
    justify-content:space-around;
    gap: 8px;
`;

export const MenuNavigation = styled.div`
    display: flex;
    padding: 0 24px;
    margin-bottom: 40px;
`;

export const Menu = styled.div<{ active?: boolean, hasCompleted?: boolean }>`
    display: flex;
    justify-content: center;
    width: 100%;
    color: ${theme.colors.black.color20};
    border-bottom: 1px solid ${theme.colors.black.color20};

    color: ${props => props.active ? theme.colors.primary.color60 : theme.colors.black.color20};
    padding: 16px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;

    ${props => props.active ? css`
        color: ${theme.colors.primary.color60};
        border-bottom: 1.5px solid ${theme.colors.primary.color60};
    `: props => props.hasCompleted && css`
        color: ${theme.colors.primary.color40};
        border-bottom: 1.5px solid ${theme.colors.primary.color40};
    `};
`;

export const Card = styled.div`
    width: 208px;
    height: 88px;
    margin-right: 16px;
    border: 1px solid ${theme.colors.black.color40};
    box-sizing: border-box;
    border-radius: 6px;

    span{
        display: block;
        margin: 16px 16px;
    }
`;
