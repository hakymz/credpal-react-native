# credpal-react-native

ReactNavite libary for credpal

## Installation

Add credpal-react-native-periculum to your project by running;

Yarn

```bash
yarn add credpal-react-native-periculum
```

NPM

```bash
npm install credpal-react-native-periculum
```

&nbsp;

## Info

install the following packages for the plugin to work perfectly.

- react-native-webview

## Periculum Analytics V1

How to use the Periculum analytics method.
If you are using the V1 SDK methods then do the following:

Example:

```javascript
import React from "react";
import { CredPal } from "credpal-react-native";

<CredPal
  onCancel={() => console.log("Cancelled")}
  onError={(e) => console.log(e.error, res.status)}
  onSuccess={(res) => console.log(res.data, res.status)}
  amount={50000}
  apiKey={"YOUR_KEY"}
/>;
```

## Periculum Analytics V1 Parameters

| Name      | Description                                                                                         | Type   | Required |
| --------- | --------------------------------------------------------------------------------------------------- | ------ | -------- |
| apiKey    | Required. Public Key attached to account                                                            | String | Yes      |
| onSuccess | callback function if transaction was successful (it will also return status and data the callback ) | String | No       |
| onCancel  | callback function if user cancels the payment                                                       | String | No       |
| onError   | callback function if the payment was not successful                                                 | String | No       |

&nbsp;
&nbsp;
