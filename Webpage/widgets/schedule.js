//setInterval(schedule, 1000);

const scheduleIDs = ["schedule_r", "schedule_t", "schedule_c", "schedule_v", "schedule_gl", "schedule_gi"];
const jsonIDMap = {"schedule_r":"SCHEDULER", 
                    "scheudle_t":"SCHEDULET", 
                    "schedule_c":"SCHEDULEC", 
                    "schedule_v":"SCHEDULEV",
                    "schedule_gl":"SCHEDULEGL",
                    "schedule_gi":"SCHEDULEGI"}

function schedule(scheduleID, buttonID)
{
    const date = date => new Date(date.getTime() + new Date().getTimezoneOffset() * -60 * 1000).toISOString().slice(0, 19);
    var str = document.getElementsByClassName(scheduleID).value;

    if(str !== x)
    {
        schedule(scheduleID, buttonID);
    }

    save();
    toggleButton(buttonID);
}

function setSchedule(scheduleID, storedValue)
{
    console.log(document.getElementById(scheduleID).value);
    document.getElementById(scheduleID).value = storedValue;

}
