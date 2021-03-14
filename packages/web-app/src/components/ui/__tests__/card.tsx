import * as React from "react";
// import { shallow } from "enzyme";
import { Card } from "design-system";
const DUMMY_TEXT = "goodbye bob";

describe("Card", () => {
  it("should be defined", () => {
    expect(<Card bodyText={DUMMY_TEXT} />).toBeDefined();
  });
  it("should match snapshot", () => {
    expect(<Card bodyText={DUMMY_TEXT} />).toMatchSnapshot();
  });
});
