/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import { Link } from "components/link";

export default function Logo() {
  return (
    <Link path="/" s>
      <Heading as="h1" sx={{ variant: "text.logo" }}>
        Delivery
      </Heading>
    </Link>
  );
}
