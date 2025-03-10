import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Button from "./Button";

expect.extend(toHaveNoViolations);

describe('Button test suite', ()=>{
    test('test Button render', async()=>{
        const { container } = render(<Button variant={"light"}>Click me</Button>);
        const results = await axe(container);
      
        expect(results).toHaveNoViolations();
    })
})