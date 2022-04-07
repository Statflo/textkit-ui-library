import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";
import logo from "./logo.svg";

const theme = create({
    base: "light",
    brandTitle: "TextKit UI Library",
    brandUrl: "https://www.textkit.io",
    brandImage: logo
});

addons.setConfig({
    theme
});