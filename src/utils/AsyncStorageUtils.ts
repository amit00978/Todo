import EncryptedStorage from 'react-native-encrypted-storage';

export const PREFIX = 'TODO:';

export const addPrefix = (name: string): string => {
  return `${PREFIX}${name}`;
};

export const get = async (key: string) => {
  try {
    return await await EncryptedStorage.getItem(key);
  } catch (err) {
    console.log(err);
  }
};

export const set = async (key: string, value: string) => {
  try {
    return await EncryptedStorage.setItem(key, value);
  } catch (err) {
    console.log(err);
  }
};

export const remove = async (key: string) => {
  try {
    const status = await EncryptedStorage.removeItem(key);
    return status;
  } catch (err) {
    console.log(err);
  }
};

export const clear = async () => {
  try {
    await EncryptedStorage.clear();
  } catch (err) {
    console.log(err);
  }
};
