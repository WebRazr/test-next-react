import React, { useState } from "react";
import axios from "axios";
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;
export default function NewPost() {
  interface InsertData {
    title: string;
    body: string;
  }
  const [sendData, setSendData] = useState<InsertData>({ title: "", body: "" });
  const [suc, setSuc] = useState<boolean>(false);
  const [erInp, setErInp] = useState<boolean>(false);
  const sendServ = (): void => {
    if (sendData.title.trim() === "" || sendData.body.trim() === "") {
      setErInp(true);
      setTimeout(() => {
        setErInp(false);
      }, 4000);
    } else {
      setSuc(true);
      setErInp(false);
      axios
        .post("https://simple-blog-api.crew.red/posts", {
          title: sendData.title,
          body: sendData.body,
        })
        .then(function (response) {
          setSendData({ title: "", body: "" });
          console.log(response);
          setTimeout(() => {
            setSuc(false);
          }, 4000);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  const sendToServer = (event): void => {
    if (event.key === "Enter") {
      sendServ();
    }
  };
  const sendToServerButton = (): void => {
    sendServ();
  };
  const inputValue = (event) => {
    setSendData({ ...sendData, title: event.target.value });
  };
  const inputValueBody = (event) => {
    setSendData({ ...sendData, body: event.target.value });
  };

  console.log(sendData);
  return (
    <div>
      <input
        type="text"
        value={sendData.title}
        onChange={inputValue}
        placeholder="title"
        onKeyPress={sendToServer}
      />
      <input
        type="text"
        value={sendData.body}
        onChange={inputValueBody}
        placeholder="body"
        onKeyPress={sendToServer}
      />
      <Button onClick={sendToServerButton}>отправить</Button>
      {suc ? <p>запись успешно создана</p> : null}
      {erInp ? <p className="errorSend">*заполните все поля</p> : null}
    </div>
  );
}
