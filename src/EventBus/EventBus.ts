type EventCallback<T = any> = (data: T) => void;

class EventBus {
	private listeners: { [event: string]: EventCallback[] };
	
	constructor() {
		this.listeners = {};
	}
	
	on<T>(event: string, callback: EventCallback<T>): void {
		if (!this.listeners[event]) {
			this.listeners[event] = [];
		}
		this.listeners[event].push(callback);
	}
	
	off<T>(event: string, callback: EventCallback<T>): void {
		if (!this.listeners[event]) return;
		this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
	}
	
	emit<T>(event: string, data: T): void {
		if (!this.listeners[event]) return;
		this.listeners[event].forEach(callback => callback(data));
	}
}

export const eventBus = new EventBus();
