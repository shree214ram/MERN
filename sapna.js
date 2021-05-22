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
  
  
        if(NAM)
          return currentDateTimeFn(constants.getTimeZoneNam)
        if(ERAP)
          return currentDateTimeFn(constants.getTimeZoneERAP)
  
        const NAMResult = currentDateTimeFn(constants.getTimeZoneNam)
        return addHours(NAMResult, 14) // Add 14 hrs 

        {getTimeZoneNam: "America/New_York"}
  
  
        /*   
        get time and date for APAC
        */
        function addHours(currentDateTime,hours){
           currentDateTime.setHours( currentDateTime.getHours() + hours );
           return currentDateTime;
        }
  

/* @return list of string represents last 13 months and years of format MM/YY. */
function getPast13MMYY(region) {
    const mmyys = [];
    for (let i = 1; i <= 13; i++) {
        const currentDateTime = this.getLocalDateTime(region);
        currentDateTime.setMonth(currentDateTime.getMonth() - i);
        let last3rdMont = currentDateTime.getMonth() + 1
        last3rdMont = (last3rdMont < 10) ? "0"+last3rdMont : last3rdMont
        const years= currentDateTime.getFullYear()
        mmyys.push(`${last3rdMont}/${years.toString().substring(2)}.`);
    }
    return mmyys;
} 
  
}
