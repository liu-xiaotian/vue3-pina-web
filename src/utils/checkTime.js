import { setItem, getItem } from '@/utils/storage'

//时间戳
const TIMESTAMP = 'timeStamp'
//时长
const TIMEOUT = '1*60*60*1000'
//设置时间戳
export function setTimeStamp() {
  return setItem(TIMESTAMP, Date.now())
}
//获取时间戳
export function getTimeStamp() {
  return getItem(TIMESTAMP)
}

//是否超时
export function checkTimeOut() {
  const currentTime = Date.now()
  const timeStamp = getTimeStamp()
  return currentTime - timeStamp > TIMEOUT
}
