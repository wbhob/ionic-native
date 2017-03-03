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
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty } from './plugin';
import { Observable } from 'rxjs/Observable';

/**
 * @name Intercom
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { Intercom } from 'ionic-native';
 *
 * Intercom.functionName('Hello', 123)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Intercom',
  plugin: 'cordova-plugin-intercom', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.intercom', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/intercom/intercom-cordova', // the github repository URL for the plugin
  install: '' // OPTIONAL install command, in case the plugin requires variables
})
export class Intercom {

  /**
   * This function does something
   * @param arg1 {UserData} The User profile to update
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  static updateUser(user: UserData): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
interface UserData {
  type: string;
  id: string;
  user_id: string;
  email?: string;
  phone?: string;
  name?: string;
  updated_at?: number;
  last_seen_ip?: string;
  unsubscribed_from_emails?: boolean;
  last_request_at?: number;
  signed_up_at?: number;
  created_at?: number;
  session_count?: number;
  user_agent_data?: string;
  pseudonym?: string;
  anonymous?: boolean;
  custom_attributes?: {
    [propName: string]: string | number | boolean;
  };
  avatar?: {
    type?: string;
    image_url?: string;
  };
  location_data?: {
    type?: 'location_data';
    city_name?: string;
    continent_code?: string;
    country_code?: string;
    country_name?: string;
    latitude?: number;
    longitude?: number;
    postal_code?: string;
    region_name?: string;
    timezone?: string;
  };
  social_profiles?: {
    type?: 'social_profile.list' | string;
    social_profiles?: Array<{
      name?: 'Twitter' | 'Facebook' | string;
      id?: string;
      username?: string;
      type?: 'social_profile';
      url?: string;
    }>;
  };
  companies?: {
    type?: 'company.list' | string;
    total_count?: number;
    companies?: Company[];
    pages?: {
      page: number;
      per_page: number;
      total_pages: number;
    };
  };
  segments: {
    type?: 'segment.list' | string;
    segments?: Array<{
      id?: string | number;
      [propName: string]: boolean | string | number;
    }>;
  };
  tags?: {
    type?: 'tag.list' | string;
    tags?: Array<{
      id?: string | number;
      [propName: string]: boolean | string | number;
    }>;
  };
};

interface Company {
  type?: 'company';
  id?: string;
  created_at?: number;
  remote_created_at?: number;
  updated_at?: number;
  company_id?: string;
  name?: string;
  custom_attributes?: {
    [propName: string]: boolean | string | number;
  };
  session_count?: number;
  monthly_spend?: number;
  user_count?: number;
  plan?: number;
}