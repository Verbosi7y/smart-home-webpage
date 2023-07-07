//setInterval(schedule, 1000);

const scheduleIDs = ["schedule_r", "schedule_t", "schedule_c", "schedule_v", "schedule_gl", "schedule_gi"];
const jsonIDMapSchedule = {"schedule_r":"SCHEDULER", 
                    "scheudle_t":"SCHEDULET", 
                    "schedule_c":"SCHEDULEC", 
                    "schedule_v":"SCHEDULEV",
                    "schedule_gl":"SCHEDULEGL",
                    "schedule_gi":"SCHEDULEGI"}

function schedule(scheduleID, buttonID)
{
    const date = date => new Date(date.getTime() + new Date().getTimezoneOffset() * -60 * 1000).toISOString().slice(0, 19);
    var str = document.getElementsByClassName(scheduleID).value;

    if(str !== date)
    {
        schedule(scheduleID, buttonID);
    }
    switch(scheduleID)
    {
        case 'schedule_r':
            schedule_r = str;
            break;
        case 'schedule_t':
            schedule_t = str;
            break;
        case 'schedule_c':
            schedule_c = str;
            break;
        case 'schedule_v':
            schedule_v = str;
            break;
        case 'schedule_gl':
            schedule_gl = str;
            break;
        case 'schedule_gi':
            schedule_gi = str;
            break;
    }

    save();
    toggleButton(buttonID);
}

function setSchedule(scheduleID, storedValue)
{
    console.log(document.getElementById(scheduleID).value);
    switch(scheduleID)
    {
        case 'schedule_r':
            schedule_r = storedValue;
            break;
        case 'schedule_t':
            schedule_t = storedValue;
            break;
        case 'schedule_c':
            schedule_c = storedValue;
            break;
        case 'schedule_v':
            schedule_v = storedValue;
            break;
        case 'schedule_gl':
            schedule_gl = storedValue;
            break;
        case 'schedule_gi':
            schedule_gi = storedValue;
            break;
    }
}
