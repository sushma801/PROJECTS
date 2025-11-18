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

export const secondaryInputText = {
  args: {
    label: "Seconday Text",
    type: "email",
    ariaLabel: "sushmashaw80@gmail.com",
  },
};

export const inputTextWithError = {
  args: {
    label: "Error Text",
    type: "text",
    Error: true,
  },
};

export const inputTextWithPassword = {
  args: {
    label: "Password",
    type: "password",
    ariaLabel: "Password",
  },
};
