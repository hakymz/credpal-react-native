# credpal-react-native

ReactNavite libary for credpal

## Installation

Add credpal-react-native to your project by running;

Yarn

```bash
yarn add credpal-react-native
```

NPM

```bash
npm install credpal-react-native
```

&nbsp;

## Info

install the following packages for the plugin to work perfectly.

- react-native-webview

## credpal-react-native usage

How to use the credpal-react-native component.

Example:

```javascript
import React from "react";
import { CredPal } from "credpal-react-native";

<CredPal
  product="Product Paid For"
  onCancel={() => console.log("Cancelled")}
  onError={(e) => console.log(e.error, res.status)}
  onSuccess={(res) => console.log(res.data, res.status)}
  amount={50000}
  apiKey={"YOUR_KEY"}
/>;
```

## credpal-react-native

| Name      | Description                                                                                         | Type     | Required |
| --------- | --------------------------------------------------------------------------------------------------- | -------- | -------- |
| apiKey    | Required. your key                                                                                  | String   | Yes      |
| amount    | Amount to be paid                                                                                   | String   | Yes      |
| product   | Product paid for                                                                                    | String   | Yes      |
| onSuccess | callback function if transaction was successful (it will also return status and data the callback ) | function | Yes      |
| onCancel  | callback function if user cancels the payment                                                       | function | No       |
| onError   | callback function if the payment was not successful                                                 | function | No       |

&nbsp;
&nbsp;
