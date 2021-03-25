// import * as msRest from "@azure/ms-rest-js";
const msRest = require ('@azure/ms-rest-js')
// import * as msRestAzure from "@azure/ms-rest-azure-js";
const msRestAzure = require ('@azure/ms-rest-azure-js')
// import * as msRestNodeAuth from "@azure/ms-rest-nodeauth";

const msRestNodeAuth = require ('@azure/ms-rest-nodeauth')
// import { LogicManagementClient, LogicManagementModels, LogicManagementMappers } from "@azure/arm-logic";
// import { LogicManagementClient, LogicManagementModels, LogicManagementMappers } from "@azure/arm-logic";
const LogicManagementClient = require ('@azure/arm-logic')
const subscriptionId = "471c3172-215c-4465-9229-f07e1bdc7049"
// const fetch = require('node-fetch');
// import * as fetch from "node-fetch";
// import fetch from 'node-fetch';
const fetch = require('node-fetch')
// import { Timeout } from "@azure/amqp-common";
console.log(fetch)
console.log(msRest)
// const subscriptionId =  "471c3172-215c-4465-9229-f07e1bdc7049"


let id = '/subscriptions/471c3172-215c-4465-9229-f07e1bdc7049/resourceGroups/ozitestLVAsamplev2/providers/Microsoft.Logic/workflows/fakeAppToDeleteLater'

class TestHandler{
  constructor(){
    this.sto = {}
    msRestNodeAuth.interactiveLogin().then((creds) => {
      const client = new LogicManagementClient(creds, subscriptionId);
      const top = 1;
      // listBySubscription(options?: Models.WorkflowsListBySubscriptionOptionalParams): Promise<Models.WorkflowsListBySubscriptionResponse>;
      const filter = "testfilter";
      client.workflows.listBySubscription({}).then((result) => {
        console.log("The result is:");
        console.log(result);
      this.sto = result
      });
    }).catch((err) => {
      console.error(err);
    });
  }
  test(name, testCase){
    let finder = false
    if(this.sto[name]){
      finder = true
    }
    return finder
  }
}
let handler = new TestHandler()
// module.exports(handler)
setTimeout(function(){ console.log(handler); }, 30000);
console.log(handler)
let myJson =[
    {
      "inputNode1": {
        "x": 60,
        "y": 300,
        "radius": 10,
        "color": "rgba(255,255,255,0.3561643835616438)",
        "xmom": 0,
        "ymom": 0,
        "friction": 1,
        "reflect": 0,
        "strokeWidth": 0,
        "strokeColor": "transparent"
      },
      "inputNode2": {
        "x": 340,
        "y": 300,
        "radius": 10,
        "color": "rgba(255,255,255,0.3287671232876712)",
        "xmom": 0,
        "ymom": 0,
        "friction": 1,
        "reflect": 0,
        "strokeWidth": 0,
        "strokeColor": "transparent"
      },
      "inputNode3": {
        "x": 640,
        "y": 300,
        "radius": 10,
        "color": "rgba(255,255,255, 0.3150684931506849)",
        "xmom": 0,
        "ymom": 0,
        "friction": 1,
        "reflect": 0,
        "strokeWidth": 0,
        "strokeColor": "transparent"
      },
      "marked": 0,
      "brainNodes": [
        [
          {
            "x": 175,
            "y": 450,
            "radius": 12,
            "color": "white",
            "xmom": 0,
            "ymom": 0,
            "friction": 1,
            "reflect": 0,
            "strokeWidth": 0,
            "strokeColor": "transparent"
          },
          0.8787793745343815,
          0.7510904357340671,
          0.8083811405679899
        ],
        [
          {
            "x": 350,
            "y": 450,
            "radius": 12,
            "color": "white",
            "xmom": 0,
            "ymom": 0,
            "friction": 1,
            "reflect": 0,
            "strokeWidth": 0,
            "strokeColor": "transparent"
          },
          -0.1031891204765607,
          0.5348008440620622,
          -0.5791977612446697
        ],
        [
          {
            "x": 525,
            "y": 450,
            "radius": 12,
            "color": "white",
            "xmom": 0,
            "ymom": 0,
            "friction": 1,
            "reflect": 0,
            "strokeWidth": 0,
            "strokeColor": "transparent"
          },
          -0.48839576464973655,
          -0.21485184051789474,
          -0.7581724562054766
        ]
      ],
      "brainsize": 3,
      "outputs": [
        [
          {
            "x": 50,
            "y": 620,
            "radius": 12,
            "color": "rgba(255,0,0,0.9289071663828334)",
            "xmom": 0,
            "ymom": 0,
            "friction": 1,
            "reflect": 0,
            "strokeWidth": 0,
            "strokeColor": "transparent"
          },
          0.795202641989905,
          0.32733209697287124,
          -0.519012345240963
        ],
        [
          {
            "x": 340,
            "y": 620,
            "radius": 12,
            "color": "rgba(0,255,0,0.07109283361716658)",
            "xmom": 0,
            "ymom": 0,
            "friction": 1,
            "reflect": 0,
            "strokeWidth": 0,
            "strokeColor": "transparent"
          },
          -0.01891085265309675,
          -0.6531866892935105,
          0.34742734322990154
        ],
        [
          {
            "x": 630,
            "y": 620,
            "radius": 12,
            "color": "rgba(0,0,255,0.00392156862745098)",
            "xmom": 0,
            "ymom": 0,
            "friction": 1,
            "reflect": 0,
            "strokeWidth": 0,
            "strokeColor": "transparent"
          },
          0.5259597928342359,
          0.3688926101792931,
          0.17756604670723997
        ]
      ],
      "redcount": 26,
      "greencount": 24,
      "bluecount": 23,
      "totalRed": 0.9289071663828334,
      "totalGreen": 0.07109283361716658,
      "totalBlue": 0
    }
  ]

  function rgbToHex(val){
    return true
  }

  function hexToRgb(val){
    return true
  }

const url = 'https://logicappunittesting.azurewebsites.net:443/api/UnitTestFLow/triggers/manual/invoke?api-version=2020-05-01-preview&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=QRfqXuKDM8MPd273hBUf3J9osLIK7_iRtphPW1njFQ0';

fetch(url, {
        method: 'post',
        body:  JSON.stringify(myJson),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(json => console.log(json));


    module.exports = {
      rgbToHex: rgbToHex,
      hexToRgb: hexToRgb
    };