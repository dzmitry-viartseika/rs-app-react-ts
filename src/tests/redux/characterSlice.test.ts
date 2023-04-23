import characterSlice, { initialState, setSearchText, fetchCharacterListRequest, fetchCharacterListFailure, fetchCharacterListSuccess } from "../../redux/characterSlice";
describe("tests for characterSlice", () => {
    test("initialize slice with initialValue", () => {
        const listSliceInit = characterSlice(initialState, {type: 'unknown'});
        expect(listSliceInit).toBe(initialState);
    });

    test('setSearchText', () => {
        const SEARCH_TEXT = 'test search text';

        const afterReducerOperation = characterSlice(
            initialState,
            setSearchText(SEARCH_TEXT),
        );

        expect(afterReducerOperation).toStrictEqual({
            ...initialState,
            searchText: SEARCH_TEXT,
        });
    })

    test('fetchCharacterListRequest', () => {
        const afterReducerOperation = characterSlice(
            initialState,
            fetchCharacterListRequest(),
        );

        expect(afterReducerOperation).toStrictEqual({
            ...initialState,
            loading: true,
            error: null,
        });
    })

    test('fetchCharacterListFailure', () => {
        const ERROR = 'Error'
        const afterReducerOperation = characterSlice(
            initialState,
            fetchCharacterListFailure(ERROR),
        );

        expect(afterReducerOperation).toStrictEqual({
            ...initialState,
            error: ERROR,
        });
    })

    test('fetchCharacterListSuccess', () => {
        const DATA = [
            {
                created: 'Test1',
                episode: 'Test1',
                gender: 'Test1',
                id: 1001,
                image: 'Test1',
                name: 'Test1',
                location: {
                    name: 'Test1',
                    url: 'Test1',
                },
                origin: {
                    name: 'Test1',
                    url: 'Test1',
                },
                species: 'Test1',
                status: 'Test1',
                type: 'Test1',
                url: 'Test1',
            }
        ]
        const afterReducerOperation = characterSlice(
            initialState,
            fetchCharacterListSuccess(DATA),
        );

        expect(afterReducerOperation).toStrictEqual({
            ...initialState,
            characterList: DATA,
        });
    })
});