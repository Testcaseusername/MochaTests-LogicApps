- [Logic App Testing](#logic-app-testing)
  - [Prerequsites](#prerequsites)
  - [Overview](#overview)
  - [Limitations](#limitations)
    - [Logic App Limitations](#logic-app-limitations)
    - [Testing Limitations](#testing-limitations)
  - [Testing Overview](#testing-overview)
  - [Deployment](#deployment)

## Logic App Testing
What is the purpose of these tests, what do we get from it:
1. Direct results without visiting the monitor.
2. In-depth analysis.
3. Able to be semi-automated .
4. Validate app as proper and functional.

### Prerequsites

1. Install the Azure SDK for Javascript - For querying the workflow execution history.
2. Install Junit - For constructing and running tests.
3. Install Docker - In the event that you want to run a containerized version.
4. Generate a Logic App on the Azure Portal - The target endpoint for testing.

### Overview
Logic Apps are conducive to testing, but designing with testing in mind is key.
Logic App testing for v1 is currently more viable than v2.
Using a predefined body, a test can assert for specific returned data. E.g. sending a value, and checking to see if it has been multiplied when the product is returned.

### Limitations

#### Logic App Limitations

The apparent lack of the static results option in the designer for v2 stymies more in-depth analysis
Setting the attribute in the code is overwritten when saving from the designer, and appears not to do anything.
With static results, the headers and status are available, rather than just the status code.

Mocking results is possible in order to test individual actions in v1, but without static results, this is not possible in v2.

With v1 a Diagnostics Event Hub can be streamed to, in order to generate run logs.
Listening to these logs can be used to determine the workflow execution path post-hoc.
It is not possible with v2 yet.

#### Testing Limitations

The workflow run history returns a structured object containing keyed values. These keys correspond to the names of the actions in the workflow. Changing the names of the items in the workflow will need to be reflected in the tests. 
The actual order of actions can be changed with minimal effect on testing.

### Testing Overview

In order to query the workflow execution history using node, install the Azure SDK for Javascript

Using the Azure SDK, there is a method (logicManagementClient.WorkflowRuns.ListAsync(arguments)) to return Workflow Run Items, these items can be tested against. 

### Deployment

An Azure web app can host a Node.js application. This application can be used to run tests non-locally. 
Starting from this guide 'https://docs.microsoft.com/en-us/azure/app-service/quickstart-nodejs?pivots=platform-windows'

Additionally, the Logic App can be containerized and run locally, see 'https://docs.microsoft.com/en-us/azure/logic-apps/create-stateful-stateless-workflows-visual-studio-code#deploy-to-docker-container'
