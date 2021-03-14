// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
const Adapter = require("enzyme-adapter-react-16");
const Enzyme = require("enzyme");
Enzyme.configure({ adapter: new Adapter() });

// TODO: Migrate to using jest.setup.js with a global config
