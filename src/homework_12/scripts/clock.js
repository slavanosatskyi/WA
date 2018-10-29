export class Clock {
    constructor(parentObj) {
        this.hours = null;
        this.minutes = null;
        this.seconds = null;
        this.interval = null;
        this.firstDelimeter = null;
        this.secondDelimeter = null;
        this.date = null;
        this.parentObj = parentObj;
    }

    render() {
        const stopButton = document.createElement('button');
        stopButton.textContent = 'Stop';

        stopButton.addEventListener('click', () => {
            this.stopUpdate();
        });

        const startButton = document.createElement('button');
        startButton.textContent = 'Start';

        startButton.addEventListener('click', () => {
            this.startUpdate();
        });

        const clock = document.createElement('div');
        clock.classList.add('clock');

        clock.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            if (this.areSecondsVisible()) {
                this.hideSeconds();
            } else {
                this.showSeconds();
            }
        });

        const time = document.createElement('div');
        time.classList.add('clock__time');

        this.hours = document.createElement('div');
        this.hours.classList.add('clock__hours');

        this.firstDelimeter = document.createElement('div');
        this.firstDelimeter.classList.add('clock__delimeter');
        this.firstDelimeter.textContent = ':';

        this.minutes = document.createElement('div');
        this.minutes.classList.add('clock__minutes');

        this.secondDelimeter = document.createElement('div');
        this.secondDelimeter.classList.add('clock__delimeter');
        this.secondDelimeter.textContent = ':';

        this.seconds = document.createElement('div');
        this.seconds.classList.add('clock__seconds');

        this.date = document.createElement('div');
        this.date.classList.add('clock__date');
        this.date.style.display = 'none';

        this.updateTime();
        this.updateDate();

        time.appendChild(this.hours);
        time.appendChild(this.firstDelimeter);
        time.appendChild(this.minutes);
        time.appendChild(this.secondDelimeter);
        time.appendChild(this.seconds);

        clock.appendChild(time);
        clock.appendChild(this.date);

        this.parentObj.appendChild(stopButton);
        this.parentObj.appendChild(startButton);
        this.parentObj.appendChild(clock);
    }

    startUpdate() {
        this.interval = setInterval(() => {
            this.updateTime();
        }, 1000);
    }

    updateTime() {
        const now = new Date();
        this.hours.textContent = now.getHours();
        this.minutes.textContent = now.getMinutes();
        this.seconds.textContent = now.getSeconds();
    }

    updateDate() {
        const now = new Date();
        this.date.textContent = now.getDate() + '/' + now.getMonth() + '/' + now.getFullYear(); 
    }

    stopUpdate() {
        clearInterval(this.interval);
    }

    hideSeconds() {
        this.secondDelimeter.style.display = 'none';
        this.seconds.style.display = 'none';
    }

    showSeconds() {
        this.secondDelimeter.style.display = 'block';
        this.seconds.style.display = 'block';
    }

    areSecondsVisible() {
        return this.seconds.style.display != 'none';
    }
}