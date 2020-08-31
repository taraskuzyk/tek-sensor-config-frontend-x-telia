export function timestampToString(ts) {
    let date = new Date(ts)
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let day = date.getDate()
    let month = date.getMonth()+1
    let year = date.getFullYear()
    return (
        ( hours   > 9 ? hours   : ("0"+hours) )  + ":" +
        ( minutes > 9 ? minutes : ("0"+minutes) ) + ":" +
        ( seconds > 9 ? seconds : ("0"+seconds) ) + ", " +
        day + " " + getMonthString(month) + " " + year
    )
}

function getMonthString(n){
    if (n==1){
        return "Jan"
    }
    if (n==2){
        return "Feb"
    }
    if (n==3){
        return "Mar"
    }
    if (n==4){
        return "Apr"
    }
    if (n==5){
        return "May"
    }
    if (n==6){
        return "Jul"
    }
    if (n==7){
        return "Jun"
    }
    if (n==8){
        return "Aug"
    }
    if (n==9){
        return "Sep"
    }
    if (n==10){
        return "Oct"
    }
    if (n==11){
        return "Nov"
    }
    if (n==12){
        return "Dec"
    }
    throw new Error("Month value should be between 1 and 12.")
}

