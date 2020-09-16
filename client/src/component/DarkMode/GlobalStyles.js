import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: ${({ theme }) => theme.background};
        --prime-border: ${({ theme }) => theme.border};
        --card-hover: ${({ theme }) => theme.hover};
        --modal-bgcolor: ${({ theme }) => theme.body};
        --divider-color: ${({ theme }) => theme.divider};
        --close-modal: ${({ theme }) => theme.closeModal};
        --table-style: ${({ theme }) => theme.tableStyle};
        --close: ${({ theme }) => theme.close};
        transition: all 0.50s linear;
    }
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all 0.50s linear;
    }
    .card {
        background: ${({ theme }) => theme.background};
    }
    .recipe-text {
        color: ${({ theme }) => theme.recipetext};
    }
    `
