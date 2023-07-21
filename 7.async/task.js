class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = setInterval(this.intervalId, 1000);
    }

    addClock(time, callback) {
        if(time == undefined || callback == undefined) {
            throw new Error('Отсутсвуют обязательные аргументы');
        } 
        
        const check = this.alarmCollection.find(item => item.time === time);
        if (check) {
            console.warn('Уже присутствует звонок на это же время')
        }

        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true
        });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
    }

    getCurrentFormattedTime() {
        const today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();

        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        let currentTime = `${hours}:${minutes}`;
        return currentTime;
    }

    start() {
        if(this.intervalId != null) {
            return;
        } 
        this.intervalId = this.setInterval(() => {
            this.alarmCollection.forEach((item) => {
                if ((this.getCurrentFormattedTime() == item.time) && item.canCall == true) {
                    item.canCall = false;
                    item.callback();
                    }
            });
        });
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(item => item.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}