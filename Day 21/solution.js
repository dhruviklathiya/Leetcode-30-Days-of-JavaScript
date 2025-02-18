class TimeLimitedCache {
    constructor() {
        this.cache = new Map(); // Stores { key: { value, expiresAt } }
    }

    set(key, value, duration) {
        const currentTime = Date.now();
        const expiresAt = currentTime + duration;
        const exists = this.cache.has(key) && this.cache.get(key).expiresAt > currentTime;
        
        this.cache.set(key, { value, expiresAt });
        return exists;
    }

    get(key) {
        const currentTime = Date.now();
        if (!this.cache.has(key) || this.cache.get(key).expiresAt <= currentTime) {
            this.cache.delete(key); // Remove expired key
            return -1;
        }
        return this.cache.get(key).value;
    }

    count() {
        const currentTime = Date.now();
        let validCount = 0;
        for (const [key, data] of this.cache.entries()) {
            if (data.expiresAt > currentTime) {
                validCount++;
            } else {
                this.cache.delete(key); // Remove expired entries
            }
        }
        return validCount;
    }
}
