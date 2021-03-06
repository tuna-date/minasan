import ChatActionTypes from './chat.types';

export const fetchChatContentStart = chatId => ({
  type: ChatActionTypes.FETCH_CHAT_CONTENT_START,
  payload: chatId
});

export const fetchChatContentSuccess = chat => ({
  type: ChatActionTypes.FETCH_CHAT_CONTENT_SUCCESS,
  payload: chat
});

export const fetchFailure = error => ({
  type: ChatActionTypes.FETCH_FAILURE,
  payload: error
});

export const fetchConversationsStart = () => ({
  type: ChatActionTypes.FETCH_CONVERSATIONS_START,
});

export const fetchConversationsSuccess = chat_list => ({
  type: ChatActionTypes.FETCH_CONVERSATIONS_SUCCESS,
  payload: chat_list
});

export const fetchSuggestedUsers = () => ({
  type: ChatActionTypes.FETCH_SUGGESTED_START,
});

export const fetchSuggestedUsersSuccess = suggesstedList => ({
  type: ChatActionTypes.FETCH_SUGGESTED_SUCCESS,
  payload: suggesstedList
});

export const createConversation = (currentUserId, partnerId) => ({
  type: ChatActionTypes.CREATE_CONVERSATION_START,
  payload: {currentUserId, partnerId},
});

export const createConversationSuccess = user_list => ({
  type: ChatActionTypes.CREATE_CONVERSATION_SUCCESS,
  payload: user_list
});