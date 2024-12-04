import { render } from "@testing-library/react-native";
import ClientCard from "..";
import clients from "../../../constants/clients";

test("the component rendered", () => {
  render(<ClientCard client={clients[0]} type="home" />);
});
