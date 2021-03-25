// const sum = require ('./sum')
import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as msRestNodeAuth from "@azure/ms-rest-nodeauth";
import { LogicManagementClient, LogicManagementModels, LogicManagementMappers } from "@azure/arm-logic";
const handler = require ('./poster')
// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1,2)).toBe(3)
// })
test('Expect access to the ID', () => {
    expect(handler.test('id', '/subscriptions/471c3172-215c-4465-9229-f07e1bdc7049/resourceGroups/ozitestLVAsamplev2/providers/Microsoft.Logic/workflows/fakeAppToDeleteLater')).toBe(true)
})