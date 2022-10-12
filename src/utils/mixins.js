import moment from 'moment'
export const fromNowFilter = {
    filters:{
        fromNow(dateTime){
            if(!dateTime) return '-'
            else {
                return moment(dateTime).fromNow()
            }
        }
    }
}

export const emptyImageFilter = {
    filters: {
      emptyImage (src) {
        return src || './../assets/icon/user-none.png'
      }
    }
  }