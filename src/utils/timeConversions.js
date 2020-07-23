export function timestampToString(ts) {
    let date = new Date(ts)
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let day = date.getDate()
    let month = date.getMonth()+1
    return (
        ( hours   > 9 ? hours   : ("0"+hours) )  + ":" +
        ( minutes > 9 ? minutes : ("0"+minutes) ) + ":" +
        ( seconds > 9 ? seconds : ("0"+seconds) ) + ", " +
        day + "/" + month
    )
}
