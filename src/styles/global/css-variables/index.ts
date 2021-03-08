import { css } from 'styled-components'

export const THEME_CSS_VARIABLES = css`
  body,
  body[data-theme='light'] {
    //Color Barras
    --color-bar-currentExperience: #10ac84;
    --color-bar-experience-final: #c8d6e5;

    //backgorund do home
    --color-shapes-background: #ffffff;

    --color-shapes-primary: #acdaeb;
    //Status
    --color-success: #68b75c;
    --color-failure: #f01842;
    --color-info: #2e5aac;
    --color-warning: #b95000;
    //color button Start - Anbandonar - Concluido
    --color-button-start: #2e86de;
    --color-button-stop: #f20732;

    //colors-Text
    --color-text-title: #576574;
    --color-text-base: #8395a7;
    --color-text-primary: #2e86de;
    //color button
    --color-acent: #ffffff;

    --color-border: #e8efff;
  }

  body[data-theme='dark'] {
    --color-bar-currentExperience: #10ac84;
    --color-bar-experience-final: #c8d6e5;

    //backgorund do home
    --color-shapes-background: #050518;

    --color-shapes-primary: #c8d6e5;
    //Status
    --color-success: #68b75c;
    --color-failure: #f01842;
    --color-info: #2e5aac;
    --color-warning: #b95000;
    //color button Start - Anbandonar - Concluido
    --color-button-start: #2e86de;
    --color-button-stop: #f20732;

    //colors-Text
    --color-text-title: #576574;
    --color-text-base: #8395a7;
    --color-text-primary: #2e86de;
    //color button
    --color-acent: #ffffff;

    --color-border: #e8efff;
  }
`
