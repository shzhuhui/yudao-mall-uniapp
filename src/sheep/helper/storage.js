/**
 * 存储相关工具函数
 * 从 request/index.js 提取出来，避免循环依赖
 */

import { tenantId } from '@/sheep/config';

/** 获得访问令牌 */
export const getAccessToken = () => {
  return uni.getStorageSync('token');
};

/** 获得刷新令牌 */
export const getRefreshToken = () => {
  return uni.getStorageSync('refresh-token');
};

/** 获得租户编号 */
export const getTenantId = () => {
  return uni.getStorageSync('tenant-id') || tenantId;
};

/** 设置访问令牌 */
export const setAccessToken = (token) => {
  uni.setStorageSync('token', token);
};

/** 设置刷新令牌 */
export const setRefreshToken = (token) => {
  uni.setStorageSync('refresh-token', token);
};

/** 设置租户编号 */
export const setTenantId = (id) => {
  uni.setStorageSync('tenant-id', id);
};

/** 清除所有登录相关存储 */
export const clearAuthStorage = () => {
  uni.removeStorageSync('token');
  uni.removeStorageSync('refresh-token');
};
