import usersFormSlice, { initialState, setUserList } from "../../redux/usersForm";

describe("tests for usersFormSlice", () => {
    test("initialize slice with initialValue", () => {
        const listSliceInit = usersFormSlice(initialState, {type: 'unknown'});
        expect(listSliceInit).toBe(initialState);
    });

    test('setUserList', () => {
        const DATA = {
            firstName: 'Test',
            lastName: 'Test',
            zipCode: 'Test',
            deliveryDate: 'Test',
            birthDay: 'Test',
            selectedOptionCountry: 'Test',
            selectedOptionState: 'Test',
            isAgreedWithPersonalData: true,
            selectedOptionGender: 'Test',
            isReceivePromo: true,
            id: 'Test',
            selectedFile: null,
        }

        const afterReducerOperation = usersFormSlice(
            initialState,
            setUserList(DATA),
        );

        expect(afterReducerOperation).toStrictEqual({
            userList: [DATA],
        });
    })
});