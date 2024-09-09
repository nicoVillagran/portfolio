class TimeSlider {
    constructor(){
        this.time
    }

    get getTime() {return this.time}

    /**
     * @param {{ callback: TimerHandler; time: number | undefined; }} options
     */
    set setTime(options){
        this.time = setInterval(options.callback, options.time)
    }
    deleteTime(){clearInterval(this.time)}
}

const timeSlider = new TimeSlider();

export default timeSlider;