import{ValidURL} from './urlChecker'; 
describe('Testing to see if function "ValidURL" should be functioning' , () => {
    test('should return a true URL' , () => {
        expect(typeof ValidURL).toBe("function");
    });
});

describe("test for a valid URL", ()=>{
    const formInput = "https://www.cnn.com/";
        test('should be returned with a valid URL',() => {
            const responding = ValidURL(formInput);
            expect(responding).toBeDefined();
            expect(responding).toBe(true);
        });
});