import React from "react";
import { Modal, SafeAreaView, View } from "react-native";
import { WebView } from "react-native-webview";
export default CredPal = ({
  apiKey,
  product = "",
  amount,
  onSuccess = () => {},
  onCancel = () => {},
  onError = () => {},
}) => {
  const [showModal, setshowModal] = React.useState(false);

  React.useEffect(() => {
    setshowModal(true);
  }, []);

  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0">
      <title>Cred Pal</title>
    </head>
    
    <body style="background:white; flex:1; height:100vh; align-items:center; justify-content:center "  onload="payWithCredPal()">

    <script src="https://corporate-loans.s3.amazonaws.com/minifiedJS/index.js"></script>
    <script>
     var payWithCredPal = () => {
      var checkout = new Checkout({
       key: '${apiKey}', // Your Key
       amount: '${amount}',
       product: ${product},
       onClose: () => {
        var resp = {event:'cancelled'};
        window.ReactNativeWebView.postMessage(JSON.stringify(resp))
       },
       onLoad: () =>{
        var resp = {event:'loaded'};
        window.ReactNativeWebView.postMessage(JSON.stringify(resp))
       },
       onError: (error) => {
        var resp = {event:'error',error:error};
        window.ReactNativeWebView.postMessage(JSON.stringify(resp))
       },
       onSuccess: (data) => {
        var resp = {event:'success',data:data};
        window.ReactNativeWebView.postMessage(JSON.stringify(resp))
        checkout.close();
       },
      });
      checkout.setup();
    
      return checkout.open();
     };
    
  


    window.onload = payWithCredPal;
    
    </script>
    </body>
    </html> `;

  const messageReceived = (receivedData) => {
    const webResponse = JSON.parse(receivedData);
    const data = webResponse?.data;
    const error = webResponse?.error;

    switch (webResponse?.event) {
      case "error":
        onError({ status: "error", error });
        setshowModal(false);
        break;
      case "cancelled":
        onCancel({ status: "cancelled" });
        setshowModal(false);
        break;
      case "successful":
        setshowModal(false);
        onSuccess({
          status: "success",
          data,
        });
        break;
      case "loaded":
        setshowModal(true);
      default:
        break;
    }
  };

  return (
    <Modal visible={showModal}>
      <SafeAreaView
        style={{ height: "100%", width: "100%", backgroundColor: "#fff" }}
      >
        <WebView
          originWhitelist={["*"]}
          cacheEnabled={false}
          cacheMode={"LOAD_NO_CACHE"}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
          }}
          source={{
            html: htmlContent,
          }}
          onMessage={(e) => {
            messageReceived(e.nativeEvent?.data);
          }}
        />
      </SafeAreaView>
    </Modal>
  );
};
