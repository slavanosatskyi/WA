const months = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
};

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
        const buttonsSection = document.createElement('div');
        buttonsSection.classList.add('clock__buttons-section');
        
        const stopButton = document.createElement('button');
        stopButton.textContent = 'Stop';

        stopButton.addEventListener('click', (event) => {
            event.stopPropagation();
            this.stopUpdate();
        });

        const startButton = document.createElement('button');
        startButton.textContent = 'Start';

        startButton.addEventListener('click', (event) => {
            event.stopPropagation();
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

        clock.addEventListener('click', () => {
            if (this.isDateVisible()) {
                this.hideDate();
            } else {
                this.showDate();
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

        buttonsSection.appendChild(stopButton);
        buttonsSection.appendChild(startButton);

        time.appendChild(this.hours);
        time.appendChild(this.firstDelimeter);
        time.appendChild(this.minutes);
        time.appendChild(this.secondDelimeter);
        time.appendChild(this.seconds);

        clock.appendChild(time);
        clock.appendChild(this.date);
        clock.appendChild(buttonsSection);

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
        this.date.textContent = now.getDate() + '/' + months[now.getMonth()] + '/' + now.getFullYear(); 
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

    hideDate() {
        this.date.style.display = 'none';
    }

    showDate() {
        this.date.style.display = 'block';
    }

    isDateVisible() {
        return this.date.style.display != 'none';
    }
}