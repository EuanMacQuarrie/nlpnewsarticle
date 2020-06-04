import {handleSubmit} from './formHandler';

describe('test if the function is working', ()=>{
    test("should come back as TRUE ", ()=>{
        expect(typeof handleSubmit).toBE("function");
    });
})