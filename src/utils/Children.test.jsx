import { mapCloneElement } from "./Children";

const reactTestComponent = <div>test</div>;
const text = "Test";

describe("Children function", () => {
    it("should render component", async () => {
        const items = mapCloneElement(reactTestComponent, (item, index) => {
            const itemProps = {
                ...item.props,
            };
            return itemProps;
        })
        expect(items).toBeTruthy();
    })

    describe("and when child is not a react component", () => {
        it("should render correctly", () => {
            const items = mapCloneElement(text, (item, index) => {
                const itemProps = {
                    ...item.props,
                };
                return itemProps;
            })
            expect(items).toBeTruthy();
        })
    })
})