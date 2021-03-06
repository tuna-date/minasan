import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Avatar } from '@material-ui/core';

import Conversation from '../conversation/conversation.component';
import MessageEditor from '../message-editor/message-editor.component';

import { fetchChatContentStart } from '../../redux/chat/chat.actions';

import {
  ChatBoxStyles,
  Header,
  AvatarAndTitle,
  Title
} from './chat-box.styles';

import io from 'socket.io-client';

const ChatBox = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.currentUser);
  const socket = io();

  useEffect(() => {
    dispatch(fetchChatContentStart(user.username));
  }, [dispatch]);

  const title = useSelector(
    state => state.chat.currentChat && state.chat.currentChat.title
  );

  const [messages, setMessages] = useState([]);

  return (
    <ChatBoxStyles>
      <Header>
        <AvatarAndTitle>
          <Avatar alt={title} src='' />
          <Title>{title}</Title>
        </AvatarAndTitle>
      </Header>
      <Conversation />
      <MessageEditor
        onSend={(isSender, text) => {
          setMessages([...messages, { isSender, text }]);
        }}
      />
    </ChatBoxStyles>
  );
};

export default ChatBox;
