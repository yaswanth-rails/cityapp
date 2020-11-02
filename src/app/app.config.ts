export class AppConfig {

  /* Parse Server URL */
  public static get SERVER_URL(): string {
    return 'http://192.168.1.106:1337/parse';
  }

  /* Parse App ID  */
  public static get APP_ID(): string {
    return 'myAppId';
  }

  /* Google Maps API Key */
  public static get GOOGLE_MAPS_API_KEY(): string {
    return 'AIzaSyBET4_Pau4Z8FhiTZpKt6e_R0_OpkdNUqI';
  }

  /* AdMob Banner ID  */
  public static get BANNER_ID(): string {
    return '';
  }

  /* Google Analytics Tracking ID  */
  public static get TRACKING_ID(): string {
    return '';
  }

  /* Header color (only Android Multitask view)  */
  public static get HEADER_COLOR(): string {
    return '#FF7676';
  }

  /* Unit: km or mi  */
  public static get DEFAULT_UNIT(): string {
    return 'mi';
  }

  public static get DEFAULT_LANG(): string {
    return 'en';
  }
}
