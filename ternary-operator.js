const lightswitch = {
    switchState: 'on',
    flipSwitch(){
        if (this.switchState === "on") {
            this.switchState = "off";
        } else {
            this.switchState = "on";
        }  
    }
}
lightswitch.flipSwitch2 = function() {
    (this.switchState === "on") ? this.switchState = "off" : this.switchState = "on";
};

function canVote(age) {
    return (age >= 18) ? true: false;
}