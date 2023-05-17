import React from "react";
import Cut from "@spectrum-icons/workflow/Cut";
import Copy from "@spectrum-icons/workflow/Copy";
import Paste from "@spectrum-icons/workflow/Paste";
import {
  Provider,
  defaultTheme,
  MenuDialogTrigger,
  MenuTrigger,
  ActionButton,
  Dialog,
  Content,
  Heading,
  Footer,
  Link,
  Menu,
  Item,
  Text,
  Keyboard
} from "@adobe/react-spectrum";
import "./styles.css";

export default function App() {
  return (
    <Provider theme={defaultTheme} height="100%">
      <MenuTrigger>
        <ActionButton>Edit</ActionButton>
        <Menu>
          <Item key="cut" textValue="cut">
            <Cut size="S" />
            <Text>Cut</Text>
            <Keyboard>⌘X</Keyboard>
          </Item>
          <Item key="copy" textValue="copy">
            <Copy size="S" />
            <Text>Copy</Text>
            <Keyboard>⌘C</Keyboard>
          </Item>
          <Item key="paste" textValue="paste">
            <Paste size="S" />
            <Text>Paste</Text>
            <Keyboard>⌘V</Keyboard>
          </Item>
        </Menu>
      </MenuTrigger>
      <MenuTrigger>
        <ActionButton>Edit (with contextual item)</ActionButton>
        <Menu>
          <Item key="cut" textValue="cut">
            <Cut size="S" />
            <Text>Cut</Text>
            <Keyboard>⌘X</Keyboard>
          </Item>
          <MenuDialogTrigger isUnavailable>
            <Item key="copy" textValue="copy">
              <Copy size="S" />
              <Text>Copy</Text>
              <Keyboard>⌘C</Keyboard>
            </Item>
            <Dialog>
              <Heading>hello</Heading>
              <Content>Is it me you're looking for?</Content>
              <Footer>
                <Link>Learn more</Link>
              </Footer>
            </Dialog>
          </MenuDialogTrigger>
          <Item key="paste" textValue="paste">
            <Paste size="S" />
            <Text>Paste</Text>
            <Keyboard>⌘V</Keyboard>
          </Item>
        </Menu>
      </MenuTrigger>
    </Provider>
  );
}
