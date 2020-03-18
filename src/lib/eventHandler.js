// we'll omit error handling and complex stuff for simplicity
const EventHandlers = {
  events: {}, // dictionary with our events
  subscribe(event, listener) {
    // add event listeners

    if (!this.events[event]) {
      this.events[event] = { listeners: [] };
    }
    this.events[event].listeners.push(listener);
  },
  dispatch(name, ...payload) {
    for (const listener of this.events[name].listeners) {
      listener.apply(this, payload);
    }
  }
};

export const EventHandler = EventHandlers;
