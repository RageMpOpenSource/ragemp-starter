const hiddenHudElements: number[] = [];

/**
 * Hide HUD elements from array.
 * HUD components ID: https://wiki.rage.mp/index.php?title=HUD_Components
 * @param {array} array
 */
const hideHudElements = (elements: number[]) => {
  for (let element of elements) {
    if (hiddenHudElements.indexOf(element) === -1) hiddenHudElements.push(element);
  }
};

/**
 * Hide HUD elements every tick
 */
mp.events.add('render', () => {
  for (const element of hiddenHudElements) {
    mp.game.ui.hideHudComponentThisFrame(element);
  }
});

/**
 * Disable controls from array.
 * Game controls ID: https://wiki.rage.mp/index.php?title=Controls
 * @param {array} array
 */
const disableControlActions = (controls: number[]) => {
  for (let control of controls) {
    mp.game.controls.disableControlAction(0, control, true);
  }
};

/**
 * Example: https://puu.sh/kf0BU/264da46568.jpg
 * Docs: https://gtaforums.com/topic/820813-displaying-help-text/
 * @param {string} message
 */
const sendHelpMessage = (message: string) => {
  mp.game.ui.setTextComponentFormat('STRING');
  mp.game.ui.addTextComponentSubstringPlayerName(message);
  mp.game.ui.displayHelpTextFromStringLabel(0, false, true, -1);
};

export { sendHelpMessage, disableControlActions, hideHudElements };
