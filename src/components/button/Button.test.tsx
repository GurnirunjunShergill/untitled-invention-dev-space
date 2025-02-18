import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Button from "./Button";

expect.extend(toHaveNoViolations);

describe('button test suite', ()=>{
    test('test button render', async()=>{
        const { container } = render(<Button variant={"light"}>Click me</Button>);
        const results = await axe(container);
      
        expect(results).toHaveNoViolations();
    })
})