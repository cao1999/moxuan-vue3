import {
  PRIMARY_COLOR,
  DANGER_COLOR,
  SUCCESS_COLOR,
} from "./../../_utils/constant";

interface InnerBarColor {
  [props: string]: string;
}

export const INNER_BAR_COLOR: InnerBarColor = {
  primary: PRIMARY_COLOR,
  danger: DANGER_COLOR,
  success: SUCCESS_COLOR,
};
