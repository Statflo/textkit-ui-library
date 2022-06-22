import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";
import logo from "./logo.svg";

const theme = create({
    base: "light",
    brandTitle: "TextKit UI Library",
    brandUrl: "https://www.textkit.io",
    brandImage: logo,
    colorSecondary: '#4B64D7',
    barSelectedColor: '#4B64D7',
});

addons.setConfig({
    theme
});