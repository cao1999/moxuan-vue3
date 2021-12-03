// 定义按钮组件的props类型
export interface ButtonProps {
  type?: string;
  size?: string;
  disabled?: boolean;
}

export interface BtnSizeMap {
  [props: string]: string;
}

export const BTN_TYPE: string[] = ["primary", "danger"];

export const BTN_SIZE_MAP: BtnSizeMap = {
  small: "sm",
  large: "lg",
};
