import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Text from "./Text";

expect.extend(toHaveNoViolations);

describe('Text test suite', ()=>{
    test('test Text render', async()=>{
        const { container } = render(<Text>Read me</Text>);
        const results = await axe(container);
      
        expect(results).toHaveNoViolations();
    })
})