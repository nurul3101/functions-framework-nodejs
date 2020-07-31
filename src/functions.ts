// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as express from 'express';
import {CloudEventV1Attributes} from 'cloudevents'

export interface HttpFunction {
  // tslint:disable-next-line:no-any express interface.
  (req: express.Request, res: express.Response): any;
}
export interface EventFunction {
  // tslint:disable-next-line:no-any
  (data: {}, context: Context): any;
}
export interface EventFunctionWithCallback {
  // tslint:disable-next-line:no-any
  (data: {}, context: Context, callback: Function): any;
}
export interface CloudEventFunction {
  // tslint:disable-next-line:no-any
  (cloudevent: CloudEventV1Attributes): any;
}
export interface CloudEventFunctionWithCallback {
  // tslint:disable-next-line:no-any
  (cloudevent: CloudEventV1Attributes, callback: Function): any;
}
export type HandlerFunction =
  | HttpFunction
  | EventFunction
  | EventFunctionWithCallback
  | CloudEventFunction
  | CloudEventFunctionWithCallback;

/**
 * The Cloud Functions context object for the event.
 *
 * @link https://cloud.google.com/functions/docs/writing/background#function_parameters
 */
export interface CloudFunctionsContext {
  /**
   * A unique ID for the event. For example: "70172329041928".
   */
  eventId?: string;
  /**
   * The date/time this event was created. For example: "2018-04-09T07:56:12.975Z"
   * This will be formatted as ISO 8601.
   */
  timestamp?: string;
  /**
   * The type of the event. For example: "google.pubsub.topic.publish".
   */
  eventType?: string;
  /**
   * The resource that emitted the event.
   */
  resource?: string;
}

export type Context = CloudFunctionsContext | CloudEventV1Attributes;
