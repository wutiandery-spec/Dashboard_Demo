import { createCrudApi } from '@/api/factory'

const couponApi = createCrudApi('coupon')

export const getCouponList = couponApi.list
export const addCoupon = couponApi.add
export const updateCoupon = couponApi.update
export const deleteCoupon = couponApi.remove
/** 失效优惠券 */
export const updateCouponStatus = couponApi.updateStatus
