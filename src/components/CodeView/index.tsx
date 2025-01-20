import React from "react";
import {View, Clipboard} from "react-native";

// @ts-ignore
import SyntaxHighlighter from "react-native-syntax-highlighter";

// @ts-ignore
import {atomOneDark} from "react-syntax-highlighter/styles/hljs";

import {Button} from "../Button";

interface Props {
  code: string;
}

export function CodeView({code}: Props) {
  const [buttonText, setButtonText] = React.useState("Copiar");

  function handleCopy() {
    Clipboard.setString(code);
    setButtonText("Copiado");

    const timeout = setTimeout(() => {
      setButtonText("Copiar");
      clearTimeout(timeout);
    }, 800);
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#282c34",
        justifyContent: "space-between",
      }}
    >
      <View style={{maxHeight: "100%"}}>
        <SyntaxHighlighter
          language="jsx"
          style={atomOneDark}
          customStyle={{paddingHorizontal: 16, paddingTop: 16}}
          highlighter="hljs"
        >
          {code}
        </SyntaxHighlighter>
      </View>

      <View style={{paddingHorizontal: 24, paddingVertical: 16}}>
        <Button label={buttonText} onPress={handleCopy} blocked />
      </View>
    </View>
  );
}
