import { fn } from "storybook/test";
import InputText from "./InputText";

export default {
  title: "InputText",
  component: InputText,
};

export const primaryInputText = {
  args: {
    label: "Primary Text",
    type: "text",
    ariaLabel: "Primary Text",
  },
};
