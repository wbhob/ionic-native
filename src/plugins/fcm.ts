/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs.
 * - Remove this note
 *
 */
import { Plugin, Cordova } from './plugin';

/**
 * @name fcm
 * @description
 * This plugin interfaces with native Firebase Cloud Messaging.
 * @author Wilson Hobbs
 *
 * @usage
 * ```
 * import { FCM } from 'ionic-native';
 *
 * FCM.getToken((something: any) => doSomething(something), (error: any) => console.log(error))
 *
 * ```
 * Unfortunately, this plugin is poorly written, so functions have callbacks inside instead of returning promises.
 */
@Plugin({
  pluginName: 'fcm',
  plugin: 'cordova-plugin-fcm', // npm package name, example: cordova-plugin-camera
  pluginRef: 'FCMPlugin', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/fechanique/cordova-plugin-fcm', // the github repository URL for the plugin
  install: 'cordova plugin add cordova-plugin-fcm' // OPTIONAL install command, in case the plugin requires variables
})
export class FCM {

  /**
   * Gets token of current device
   * @param successCallback {function} Returns a token for current device
   * @param errorCallback {function} Handles error if something goes wrong
   */
  @Cordova()
  static getToken(successCallback: (token: string) => void, errorCallback: (error: string) => void): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
 * This function subscribes user to FCM topic
 * @param topic {string} The topic to subscribe to
 * @param successCallback {function} Returns a token for current device
 * @param errorCallback {function} Handles error if something goes wrong
 */
  @Cordova()
  static subscribeToTopic(topic: string, successCallback: (message: string) => void, errorCallback: (error: string) => void) {
    return;
  }

  /**
* This function subscribes user to FCM topic
* @param topic {string} The topic to unsubscribe from
* @param successCallback {function} Returns success message telling you everything is OK
* @param errorCallback {function} Handles error if something goes wrong
*/
  @Cordova()
  static unsubscribeFromTopic(topic: string, successCallback: (message: string) => void, errorCallback: (error: string) => void) {
    return;
  }

  /**
* This function subscribes user to FCM topic
* @param notificationCallback {function} Contains notification data in an object. The `notification.wasTapped` boolean will be true if it was in Notification Center, and false if it was received in the foreground.
* @param successCallback {function} Returns success message telling you everything is OK
* @param errorCallback {function} Handles error if something goes wrong
*/
  @Cordova()
  static onNotification(onNotificationCallback: (notification) => void, successCallback: (message: string) => void, errorCallback: (error: string) => void) {
    return;
  }

}

export interface FCMNotification {
  /*
  See more here: https://firebase.google.com/docs/cloud-messaging/http-server-ref
  This is the official firebase documentation on notifications.
   */

  notification?: {
    title?: string;  // Notification Title
    body?: string;  // Notification Body
    sound?: string; // Notification sound, usually "default"
    badge?: string; // Home screen badge
    click_action?: string;  // Indicates the action associated with a user click on the notification
    icon?: string // Indicates notification icon (it's an android thing)
    color?: string;  // Indicates notification icon color (it's an android thing)
    body_loc_key?: string;
    body_loc_args?: string;
    title_loc_key?: string;
    title_loc_args?: string;
    tag?: string;
  };
  data?: {
    [propName: string]: any;  // Any data to be retrieved in the notification callback
  };
  to: string; // Topic or single device
  priority: 'normal' | 'high'; // If not set, notification won't be delivered on completely closed iOS app
  restricted_package_name?: string; // Optional. Set for application filtering
  condition?: string; // expression representing which topics receive the notification
  registration_ids?: Array<String>; // array of registration ids to receive the notification
  content_available?: boolean; // On iOS, use this field to represent content-available in the APNs payload. When a notification or message is sent and this is set to true, an inactive client app is awoken.
  time_to_live?: number; // This parameter specifies how long (in seconds) the message should be kept in FCM storage if the device is offline. 
  dry_run?: boolean; // This parameter, when set to true, allows developers to test a request without actually sending a message.
  collapse_key?: string; // This parameter identifies a group of messages (e.g., with collapse_key: "Updates Available") that can be collapsed, so that only the last message gets sent when delivery can be resumed.
}
