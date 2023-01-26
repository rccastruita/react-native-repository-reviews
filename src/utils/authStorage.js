import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const rawToken = await AsyncStorage.getItem(
      `${this.namespace}:accessToken`,
    );

    console.log(`raw token: ${JSON.stringify(rawToken)}`);

    return rawToken ? rawToken : '';
  }

  async setAccessToken(accessToken) {
    console.log(`new token: ${accessToken}`);

    await AsyncStorage.setItem(
      `${this.namespace}:accessToken`,
      accessToken,
    );
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
  }
}

export default AuthStorage;