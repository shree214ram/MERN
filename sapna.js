export default class sapna {
  function sapna(){
    const s_globalConfig = null ;
    const current_datetime = new Date()
    const DATEFORMATTER_YYYY_MM_DD = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() ;
    const FORMATTER_YYYY_MM_DD_HH_mm_ss_n = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
    const DATE_PATTERN_YYYY_MM_DD = "yyyy-mm-dd"
  } 
  
  // return current time according to Zone Id 
        function currentDateTimeFn(timeZone) {
            let currentDateTime = new Date().getTime()
            const event = new Date(currentDateTime);
            const options = {
                day: 'numeric',
                month: 'long',
                weekday: 'short',
                hour: 'numeric',
                minute: 'numeric',
                timeZoneName: 'short',
                timeZone: timeZone,
            };
            return new Intl.DateTimeFormat('en-US', options).format(event)
        }

        return currentDateTimeFn(constants.getTimeZoneNam)

        {getTimeZoneNam: "America/New_York"}
}
