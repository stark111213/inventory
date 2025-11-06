import crypto from "crypto";

export function _20bit() {
  return crypto.randomInt(0, 1048576).toString();
}

export function _32bit() {
  return crypto.randomInt(0, 4294967296).toString();
}

export function _6digit() {
  return crypto.randomInt(100000, 1000000).toString();
}

export function _9digit() {
  return crypto.randomInt(100000000, 1000000000).toString();
}

export function _UUID() {
  return crypto.randomUUID();
}

export function _dateTime() {
  return new Date().toISOString();
}
