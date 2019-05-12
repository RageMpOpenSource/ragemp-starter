import globals from 'utils/globals';

mp.events.add({
  clearChat: () => clearGameChat(),
  toggleChat: value => toggleChat(value),
  disableChat: value => disableChat(value)
});

/**
 * Clear game chat.
 */
const clearGameChat = () => mp.gui.execute('$("#chat_messages").html("")');

/**
 * Toggles chat visibility.
 * @param {boolean} value
 */
const toggleChat = (value: boolean) => {
  globals.toggleChat = value;
  mp.gui.chat.show(value);
};

/**
 * This enables or disables chat.
 * @param {boolean} value
 */
const disableChat = (value: boolean) => {
  globals.disableChat = value;
  mp.gui.chat.activate(value);
};

export { disableChat, toggleChat, clearGameChat };
