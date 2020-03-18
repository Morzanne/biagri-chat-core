const EventHandlers = {
  events: {},
  subscribe(event, listener) {
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
